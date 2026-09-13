import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";
import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  renameSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { basename, join, resolve } from "node:path";
import { checkModInstallDir, readModRepoConfig } from "../lib/game-paths";
import { readModIdentity } from "../lib/mod-identity";

/**
 * install_mod — EU5 (pdx-script) 安装契约（mod-repo-guide §4.1）。
 *
 * 把 your_mods/<id>/ 复制到 Paradox launcher 的 mod 目录
 * （.gamer-agent.local.json 的 modInstallDir，由 check_runtime 写入；不自己探测）。
 *
 * 同名冲突：目标目录被**别的 mod** 占用时**改名安装**到 `<id>_pimod`（再撞顺延 _pimod2…）——
 * **绝不覆盖别人的内容**，也不阻塞安装。
 * 「两个 mod 在游戏里身份相同」是 mod 冲突问题，不属安装职责：安装只复制文件，**不改副本里的
 * metadata.json 等 mod 内容**。
 *
 * 目标目录里的 `.pi-mod.json`（只记 name）用来识别「这是我上次装的」：
 * 命中 → 就地更新（重装幂等）；不在 → 换一个不冲突的目录名。
 */

/** 作者本地的东西，不装进游戏 */
const EXCLUDED_DIRS = new Set([".git", "node_modules"]);
const EXCLUDED_FILES = new Set([".DS_Store", ".pi-mod.json"]);

/** 读 mod 身份：`.metadata/metadata.json` 的 id（本类型约定 id = 目录名） */

/** 这个目录是不是本 mod 上次装的 */
export function readMarkerName(dir: string): string | null {
  const markerPath = join(dir, ".pi-mod.json");
  if (!existsSync(markerPath)) return null;
  try {
    const parsed = JSON.parse(readFileSync(markerPath, "utf8")) as {
      name?: unknown;
    };
    return typeof parsed.name === "string" ? parsed.name : null;
  } catch {
    return null; // 坏文件当作「不是我们的」，宁可另装一个目录也不覆盖
  }
}

/**
 * 选落地目录。两个名字各司其职：
 * - `modName`：候选目录名（用 your_mods 的目录名，单层、已校验）→ 决定装到哪
 * - `modIdentity`：判断"目标目录是不是我这个 mod 上次装的"（比 `.pi-mod.json` 里记的身份）
 * 命中自己的标记 → 覆盖更新（不留下两份）；被别的 mod 占了 → 顺延 `<名>_pimod`、`_pimod2`…
 */
export function pickInstallDir(
  modRoot: string,
  modName: string,
  modIdentity: string = modName,
): {
  dir: string;
  renamed: boolean;
  occupiedBy: string | null;
  reused: boolean;
} {
  const primary = join(modRoot, modName);
  const free = (dir: string) =>
    !existsSync(dir) || readMarkerName(dir) === modIdentity;
  if (free(primary))
    return {
      dir: primary,
      renamed: false,
      occupiedBy: null,
      reused: existsSync(primary),
    };

  const occupiedBy = readMarkerName(primary);
  for (let suffix = 1; ; suffix += 1) {
    const candidate = join(
      modRoot,
      `${modName}_pimod${suffix === 1 ? "" : suffix}`,
    );
    if (free(candidate))
      return {
        dir: candidate,
        renamed: true,
        occupiedBy,
        reused: existsSync(candidate),
      };
  }
}

/** 复制 mod 文件（跳过作者本地文件） */
export function copyModFiles(from: string, to: string): number {
  let count = 0;
  const walk = (srcDir: string, destDir: string) => {
    mkdirSync(destDir, { recursive: true });
    for (const entry of readdirSync(srcDir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (EXCLUDED_DIRS.has(entry.name)) continue;
        walk(join(srcDir, entry.name), join(destDir, entry.name));
        continue;
      }
      if (
        EXCLUDED_FILES.has(entry.name) ||
        entry.name.endsWith("~") ||
        entry.name.endsWith(".swp")
      )
        continue;
      cpSync(join(srcDir, entry.name), join(destDir, entry.name));
      count += 1;
    }
  };
  walk(from, to);
  return count;
}

export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "install_mod",
    label: "Install Mod",
    description:
      "Copy a mod from your_mods/<id>/ into the Paradox launcher mod directory (modInstallDir from check_runtime's .gamer-agent.local.json). Re-installing the same mod updates it in place. If the target directory is taken by another mod it installs as <id>_pimod instead of overwriting it. Does not validate or compile, and does not edit mod content.",
    promptSnippet: "Install mod into the Paradox launcher mod directory",
    promptGuidelines: [
      "Use install_mod after validate_mod passes, so the player can enable the mod in the launcher.",
      "If install_mod reports the mod was installed as <id>_pimod, tell the player: the other mod in that directory was left untouched; this mod's files (including its metadata id) are unchanged.",
    ],
    parameters: Type.Object({
      modDir: Type.String({
        minLength: 1,
        description:
          "Mod directory, absolute or relative to the workspace root, e.g. your_mods/my_mod",
      }),
    }),
    async execute(_toolCallId, params, _signal, _onUpdate, ctx) {
      if (!params.modDir?.trim())
        throw new Error(
          "INVALID_MOD_DIR: Provide a mod directory, e.g. your_mods/my_mod.",
        );
      const modDir = resolve(ctx.cwd, params.modDir);
      if (!statSync(modDir, { throwIfNoEntry: false })?.isDirectory()) {
        throw new Error(
          `INVALID_MOD_DIR: ${modDir} is not a directory. Check the session's bound path or build the mod first.`,
        );
      }

      // 目标目录来自 check_runtime 的发现结果（install_mod 不自己探测）
      let modRoot: string | null = null;
      try {
        const state = JSON.parse(
          readFileSync(join(ctx.cwd, ".gamer-agent.local.json"), "utf8"),
        ) as {
          modInstallDir?: unknown;
        };
        if (
          typeof state.modInstallDir === "string" &&
          state.modInstallDir.trim()
        )
          modRoot = state.modInstallDir.trim();
      } catch {
        modRoot = null;
      }
      if (!modRoot) {
        return {
          content: [
            {
              type: "text",
              text: "FAIL: mod install directory unknown (no usable modInstallDir in .gamer-agent.local.json).\nNEXT: run check_runtime first to locate the Paradox mod directory, then re-run install_mod.",
            },
          ],
          details: { ok: false, reason: "TARGET_NOT_FOUND" },
        };
      }
      // 目标目录「不存在」是全新机器的正常状态（Paradox 启动器/游戏还没跑过）→ **不是错误**：继续往下走，
      // 由下面的 mkdirSync(destDir, { recursive: true }) 连缺失的父级一起创建。
      // 旧行为要求「必须已存在」：check_runtime 报可安装 → install 因目标不存在失败 → 再 check 仍不创建 → 死循环（B18）。
      // 仍然拒绝的只有两种：路径不是绝对路径 / 路径存在但不是目录（否则继续只会在 cp/rename 阶段抛出更难懂的错）。
      // 目标路径的判据与 check_game_paths / try_set_game_paths 共用一份（lib/game-paths）：
      // EU5 的 mod 目录在 Paradox 启动器目录、与游戏安装位置无关 → 形状校验（绝对路径、不是文件、
      // 以 mod-repo.json 声明的相对路径结尾）。目录不存在仍是正常状态（安装时创建）。
      // 形状校验需要 mod-repo.json；读不到就降级（只做绝对路径/非文件校验），不让安装因此失败。
      let cfgForPaths;
      try {
        cfgForPaths = readModRepoConfig(ctx.cwd);
      } catch {
        cfgForPaths = undefined;
      }
      const targetVerdict = checkModInstallDir(modRoot, cfgForPaths);
      if (!targetVerdict.ok) {
        const code = targetVerdict.code ?? "TARGET_INVALID";
        return {
          content: [
            { type: "text", text: `FAIL: ${code}: ${targetVerdict.reason}\nNEXT: ${targetVerdict.next}` },
          ],
          details: { ok: false, reason: code },
        };
      }
      const targetWasMissing = !statSync(modRoot, { throwIfNoEntry: false });

      const identity = readModIdentity(modDir);
      if (!identity) {
        return {
          content: [
            {
              type: "text",
              text: `FAIL: ${modDir} has no usable .metadata/metadata.json (id is required).\nNEXT: run validate_mod on this mod directory and fix the reported problems before installing.`,
            },
          ],
          details: { ok: false, reason: "MISSING_METADATA" },
        };
      }

      // 安装目录名 = your_mods 下的**目录名**（不是 metadata 里的 id）：
      // · basename 一定是单层名字 → 构造上不可能越界（旧版用 metadata 的 id 拼路径，id 带 ../ 就能写到安装根之外）
      // · 目录名在 create_mod_folder 时已按规则校验过（小写蛇形、长度、保留名）
      // · 玩家在启动器里看到的与工作区里的目录名一致，便于对号入座
      const modName = basename(modDir);

      // 上次替换在「旧版本挪开、新版本换入」之间崩溃 → 目标缺失但旁边留着 .previous-*
      // （与 pi-desktop 的 L01 同类教训：绝不能把这种残局当垃圾删掉，先恢复）
      if (existsSync(modRoot))
        for (const entry of readdirSync(modRoot)) {
          if (entry.startsWith(`${modName}.previous-`) && !existsSync(join(modRoot, modName))) {
            renameSync(join(modRoot, entry), join(modRoot, modName));
          }
        }

      const { dir: installDir, renamed, occupiedBy, reused } = pickInstallDir(modRoot, modName, identity.name);

      // 同一个 mod（marker 里的身份相同）曾以别的目录名装过 → 只提示，不删它
      // 只在「身份 ≠ 目录名」时才需要扫：两者相同时，上次安装用的目录名必然就是本次的目标目录名，
      // 重装/冲突都由 pickInstallDir 在目标目录上解决 → 不可能出现"同一个 mod 装在两个目录名"。
      // （这样常见路径上没有 O(n) 扫描，而"身份≠目录名"的类型仍能拿到那条提示。）
      let duplicateDir: string | null = null;
      if (identity.name !== modName) {
        const installedName = basename(installDir);
        for (const entry of existsSync(modRoot) ? readdirSync(modRoot, { withFileTypes: true }) : []) {
          if (!entry.isDirectory() || entry.name === installedName) continue;
          if (readMarkerName(join(modRoot, entry.name)) === identity.name) duplicateDir = entry.name;
        }
      }

      const staging = `${installDir}.staging-${process.pid}`;
      const previous = `${installDir}.previous-${process.pid}`;
      rmSync(staging, { recursive: true, force: true });
      rmSync(previous, { recursive: true, force: true });
      let files = 0;
      try {
        files = copyModFiles(modDir, staging);
        // `.pi-mod.json` 的来龙去脉（避免后来人误判它的用途）：
        // · 最初的设计用意：一份**安装指南**，放在 mod 自己的工作区目录里（your_mods/<mod>/.pi-mod.json），
        //   描述"这个 mod 该怎么装"（当时没沟通清楚，没实现成那个形态）。
        // · 现在实际承担的角色：**归属标记**，写在**安装副本**里，内容只记 `{ "name": <mod 身份> }`,
        //   用来回答"这个目标目录是不是我上次装的" → 命中就地更新，没命中则改名装 `<目录名>_pimod`。
        // · 关键约束：**存什么就拿什么比**（这里存身份、判断也用身份）。若改成存目录名，就等于放弃
        //   "同一 mod 换目录名后仍能识别为同一份安装"的能力（Duckov 这类身份≠目录名的类型会静默装成两份）。
        // · 若将来真的要实现"工作区侧的安装指南"，需另定文件名或明确优先级，不要复用这个文件。
        writeFileSync(
          join(staging, ".pi-mod.json"),
          `${JSON.stringify({ name: identity.name }, null, 2)}\n`,
        );
        // 事务化替换：旧版本先 rename 到旁边（**不删**）→ 换入新版本 → 成功后才删旧的；
        // 换入失败就把旧版本挪回来。旧版是「先 rmSync 再 rename」，中间失败会让新旧两份都丢。
        const hadPrevious = existsSync(installDir);
        if (hadPrevious) renameSync(installDir, previous);
        try {
          renameSync(staging, installDir);
        } catch (error) {
          if (hadPrevious) renameSync(previous, installDir);
          throw error;
        }
        if (hadPrevious) rmSync(previous, { recursive: true, force: true });
      } catch (error) {
        rmSync(staging, { recursive: true, force: true });
        return {
          content: [
            {
              type: "text",
              text: `FAIL: copy failed: ${error instanceof Error ? error.message : String(error)}\nNEXT: check write permission on ${modRoot}. The previously installed copy (if any) was left in place.`,
            },
          ],
          details: { ok: false, reason: "COPY_FAILED" },
        };
      }

      const mismatched = identity.name !== modName;
      const notes: string[] = [];
      if (targetWasMissing) {
        notes.push(
          `\nNOTE: the mod directory ${modRoot} did not exist and was created (normal on a first install - the Paradox launcher had not created it yet). If the player expected mods somewhere else (e.g. they moved their Documents folder), tell them where this mod actually landed: ${installDir}.`,
        );
      }
      if (mismatched) {
        notes.push(
          `\nNOTE: the installed folder is named ${modName} (the your_mods directory name), while the mod declares id ${identity.name} - the launcher matches the metadata id, so run validate_mod and make them match.`,
        );
      }
      if (duplicateDir) {
        notes.push(
          `\nNOTE: the same mod (id ${identity.name}) is also installed as ${duplicateDir}; this tool did not touch it - tell the player which one to enable, and remove the other manually if it is stale.`,
        );
      }
      const extraNotes = notes.join("");
      const note = renamed
        ? `\nNOTE: ${identity.name} was already taken by ${occupiedBy ? `another mod (${occupiedBy})` : "content this tool did not install"}, ` +
          `so it went to ${basename(installDir)} instead; that directory was left untouched and the mod's own files (including its metadata id) were not modified.` +
          `\nNEXT: tell the player it installs as ${basename(installDir)}, then let them enable it in the launcher.`
        : `\nNEXT: ask the player to enable the mod in the Paradox launcher (and restart the game if it was running).`;
      const noteWithExtras = `${extraNotes}${note}`;

      return {
        content: [
          {
            type: "text",
            text: `PASS: ${identity.name}${identity.version ? ` ${identity.version}` : ""} installed to ${installDir} (${files} files).${noteWithExtras}`,
          },
        ],
        details: {
          ok: true,
          modName: identity.name,
          targetDir: installDir,
          updated: reused,
          renamed,
          occupiedBy,
          files,
          targetCreated: targetWasMissing,
        },
      };
    },
  });
}
