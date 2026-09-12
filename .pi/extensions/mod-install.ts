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
export function readModIdentity(
  modDir: string,
): { name: string; version: string } | null {
  const metadataPath = join(modDir, ".metadata", "metadata.json");
  if (!existsSync(metadataPath)) return null;
  try {
    const parsed = JSON.parse(readFileSync(metadataPath, "utf8")) as Record<
      string,
      unknown
    >;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      return null;
    const id = typeof parsed.id === "string" ? parsed.id.trim() : "";
    if (!id) return null;
    return {
      name: id,
      version: typeof parsed.version === "string" ? parsed.version.trim() : "",
    };
  } catch {
    return null;
  }
}

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
 * 选落地目录：优先 <id>；被别的 mod 占了就顺延 <id>_pimod、_pimod2…
 * 同一个 mod 重装时命中自己的标记 → 原地更新（不漂移）。
 */
export function pickInstallDir(
  modRoot: string,
  modName: string,
): {
  dir: string;
  renamed: boolean;
  occupiedBy: string | null;
  reused: boolean;
} {
  const primary = join(modRoot, modName);
  const free = (dir: string) =>
    !existsSync(dir) || readMarkerName(dir) === modName;
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
      if (
        !modRoot ||
        !statSync(modRoot, { throwIfNoEntry: false })?.isDirectory()
      ) {
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

      const {
        dir: installDir,
        renamed,
        occupiedBy,
        reused,
      } = pickInstallDir(modRoot, identity.name);

      const staging = `${installDir}.staging-${process.pid}`;
      rmSync(staging, { recursive: true, force: true });
      let files = 0;
      try {
        files = copyModFiles(modDir, staging);
        writeFileSync(
          join(staging, ".pi-mod.json"),
          `${JSON.stringify({ name: identity.name }, null, 2)}\n`,
        );
        rmSync(installDir, { recursive: true, force: true });
        renameSync(staging, installDir);
      } catch (error) {
        rmSync(staging, { recursive: true, force: true });
        return {
          content: [
            {
              type: "text",
              text: `FAIL: copy failed: ${error instanceof Error ? error.message : String(error)}\nNEXT: check write permission on ${modRoot}.`,
            },
          ],
          details: { ok: false, reason: "COPY_FAILED" },
        };
      }

      const note = renamed
        ? `\nNOTE: ${identity.name} was already taken by ${occupiedBy ? `another mod (${occupiedBy})` : "content this tool did not install"}, ` +
          `so it went to ${basename(installDir)} instead; that directory was left untouched and the mod's own files (including its metadata id) were not modified.` +
          `\nNEXT: tell the player it installs as ${basename(installDir)}, then let them enable it in the launcher.`
        : `\nNEXT: ask the player to enable the mod in the Paradox launcher (and restart the game if it was running).`;

      return {
        content: [
          {
            type: "text",
            text: `PASS: ${identity.name}${identity.version ? ` ${identity.version}` : ""} installed to ${installDir} (${files} files).${note}`,
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
        },
      };
    },
  });
}
