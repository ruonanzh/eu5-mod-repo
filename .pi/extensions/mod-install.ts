import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync, statSync, writeFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";

/**
 * install_mod — EU5 (pdx-script) 安装契约（mod-repo-guide §4.1）。
 *
 * 把 your_mods/<id>/ 复制到 Paradox launcher 的 mod 目录
 * （.gamer-agent.local.json 的 modInstallDir，由 check_runtime 写入；install_mod 不自己探测）。
 * 只负责「装」，不重复 validate_mod 的校验；只写游戏 mod 目录（workspace 外）。
 *
 * 身份与冲突：
 * 本类型的 mod 身份 = `.metadata/metadata.json` 的 `id`，且约定 **id 必须等于目录名**。
 * 所以：
 * - 装完在目标目录写 `.pi-mod.json`（id = `<modType>:<metadata id>` 等），用于识别「这是本 mod」；
 * - 重装/升级：先按 id 扫 mod 根下的标记找到上次装到哪 → 就地更新（目录名不漂移）；
 * - 目标目录被**别的 mod** 占用（无标记 / 标记 id 不同）→ **改名安装**到 `<id>_pimod`（再撞顺延
 *   `_pimod2`…），并**同步把副本里的 metadata id 改成新目录名**——因为 id 必须 = 目录名，不一起改
 *   装出来的副本自身就不合法。原目录内容一字不动。
 * 「两个 mod 在游戏里身份相同」本身是 mod 冲突问题，不属安装职责；这里做到的是装得进去 + 身份自洽 + 如实告知。
 */

/** 作者本地的东西，不装进游戏 */
const EXCLUDED_DIRS = new Set([".git", "node_modules"]);
const EXCLUDED_FILES = new Set([".DS_Store"]);

export interface PdxModIdentity {
  id: string;
  name: string;
  version: string;
  metadataPath: string;
}

/** 读 mod 身份：`.metadata/metadata.json` 的 id（= 目录名约定） */
export function readModIdentity(modDir: string): PdxModIdentity | null {
  const metadataPath = join(modDir, ".metadata", "metadata.json");
  if (!existsSync(metadataPath)) return null;
  let parsed: Record<string, unknown>;
  try {
    parsed = JSON.parse(readFileSync(metadataPath, "utf8")) as Record<string, unknown>;
  } catch {
    return null;
  }
  if (!parsed || typeof parsed !== "object") return null;
  const id = typeof parsed.id === "string" ? parsed.id.trim() : "";
  if (!id) return null;
  return {
    id,
    name: typeof parsed.name === "string" && parsed.name.trim() ? parsed.name.trim() : id,
    version: typeof parsed.version === "string" ? parsed.version.trim() : "",
    metadataPath,
  };
}

export function readInstalledMarker(dir: string): { id?: string } | null {
  const markerPath = join(dir, ".pi-mod.json");
  if (!existsSync(markerPath)) return null;
  try {
    const parsed = JSON.parse(readFileSync(markerPath, "utf8")) as { id?: unknown };
    return typeof parsed.id === "string" ? { id: parsed.id } : {};
  } catch {
    return {};
  }
}

/** 扫 mod 根，按 id 找本 mod 上次装到哪个目录（升级定位，避免目录名漂移） */
export function findInstalledDirByModId(modRoot: string, id: string): string | null {
  if (!existsSync(modRoot)) return null;
  for (const entry of readdirSync(modRoot, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const dir = join(modRoot, entry.name);
    if (readInstalledMarker(dir)?.id === id) return dir;
  }
  return null;
}

/** 复制 mod 数据文件（跳过作者本地文件） */
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
      if (EXCLUDED_FILES.has(entry.name) || entry.name.endsWith("~") || entry.name.endsWith(".swp")) continue;
      cpSync(join(srcDir, entry.name), join(destDir, entry.name));
      count += 1;
    }
  };
  walk(from, to);
  return count;
}

/** 把副本的 metadata id 改成新目录名（本类型约定 id 必须 = 目录名） */
export function retargetMetadataId(installedDir: string, newId: string): void {
  const metadataPath = join(installedDir, ".metadata", "metadata.json");
  const parsed = JSON.parse(readFileSync(metadataPath, "utf8")) as Record<string, unknown>;
  parsed.id = newId;
  writeFileSync(metadataPath, `${JSON.stringify(parsed, null, 2)}\n`);
}

export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "install_mod",
    label: "Install Mod",
    description:
      "Copy a mod from your_mods/<id>/ into the Paradox launcher mod directory (modInstallDir from check_runtime's .gamer-agent.local.json). Re-installing the same mod updates it in place. If the target directory is taken by another mod it installs under <id>_pimod instead of overwriting. Does not validate or compile.",
    promptSnippet: "Install mod into the Paradox launcher mod directory",
    promptGuidelines: [
      "Use install_mod after validate_mod passes, so the player can enable the mod in the launcher.",
      "If install_mod reports the mod was renamed to <id>_pimod, tell the player: its metadata id was changed to keep 'id = directory name'; the other mod in that directory was left untouched.",
    ],
    parameters: Type.Object({
      modDir: Type.String({ minLength: 1, description: "Mod directory, absolute or relative to the workspace root, e.g. your_mods/my_mod" }),
    }),
    async execute(_toolCallId, params, _signal, _onUpdate, ctx) {
      const repoRoot = ctx.cwd;
      if (!params.modDir.trim()) throw new Error("INVALID_MOD_DIR: Provide a mod directory, e.g. your_mods/my_mod.");

      let modType: string;
      try {
        const cfg = JSON.parse(readFileSync(join(repoRoot, "mod-repo.json"), "utf8")) as { modType?: unknown };
        if (typeof cfg.modType !== "string" || !cfg.modType.trim()) {
          throw new Error("no modType");
        }
        modType = cfg.modType;
      } catch {
        throw new Error("INVALID_WORKSPACE_CONFIG: Cannot read mod-repo.json (modType required). Reopen or update the game workspace; do not edit its maintainer configuration.");
      }

      const modDir = resolve(repoRoot, params.modDir);
      if (!statSync(modDir, { throwIfNoEntry: false })?.isDirectory()) {
        throw new Error(`INVALID_MOD_DIR: ${modDir} is not a directory. Check the session's bound path or build the mod first.`);
      }

      // 目标目录来自 check_runtime 的发现结果（install_mod 不自己探测）
      let modRoot: string | null = null;
      try {
        const state = JSON.parse(readFileSync(join(repoRoot, ".gamer-agent.local.json"), "utf8")) as { modInstallDir?: unknown };
        if (typeof state.modInstallDir === "string" && state.modInstallDir.trim()) modRoot = state.modInstallDir.trim();
      } catch {
        modRoot = null;
      }
      if (!modRoot || !statSync(modRoot, { throwIfNoEntry: false })?.isDirectory()) {
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

      const id = `${modType}:${identity.id}`;
      const previousDir = findInstalledDirByModId(modRoot, id);
      const primaryDir = join(modRoot, identity.id);

      let occupiedBy: string | null = null;
      let installDir = previousDir ?? primaryDir;
      if (!previousDir && existsSync(installDir)) {
        const marker = readInstalledMarker(installDir);
        if (marker?.id !== id) {
          occupiedBy = marker?.id ?? null;
          let suffix = 1;
          do {
            installDir = join(modRoot, `${identity.id}_pimod${suffix === 1 ? "" : suffix}`);
            suffix += 1;
          } while (existsSync(installDir) && readInstalledMarker(installDir)?.id !== id);
        }
      }

      const renamed = installDir !== primaryDir;
      const installedId = basename(installDir);

      const staging = `${installDir}.staging-${process.pid}`;
      rmSync(staging, { recursive: true, force: true });
      let files = 0;
      try {
        files = copyModFiles(modDir, staging);
        // 本类型约定 id = 目录名：改名安装时必须一起改，否则副本自身不合法
        if (renamed && installedId !== identity.id) retargetMetadataId(staging, installedId);
        writeFileSync(
          join(staging, ".pi-mod.json"),
          `${JSON.stringify(
            {
              schemaVersion: 1,
              id,
              modType,
              name: identity.name,
              metadataId: installedId,
              version: identity.version,
              source: `your_mods/${basename(modDir)}`,
              installedDir: installedId,
              ...(renamed ? { renamedFrom: identity.id } : {}),
              installedAt: new Date().toISOString(),
              installedBy: "pi-desktop",
            },
            null,
            2,
          )}\n`,
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
        ? `\nNOTE: ${basename(primaryDir)} was already taken by ${occupiedBy ? `another mod (${occupiedBy})` : "content this tool did not install"}, ` +
          `so the mod was installed as ${installedId} and its metadata id was changed to match ("id = directory name"); that directory was left untouched.` +
          `\nNEXT: tell the player the mod now installs as ${installedId} (in-game title "${identity.name}" is unchanged), then let them enable it in the launcher.`
        : `\nNEXT: ask the player to enable the mod in the Paradox launcher (and restart the game if it was running).`;

      return {
        content: [
          {
            type: "text",
            text: `PASS: ${identity.id}${identity.version ? ` ${identity.version}` : ""} installed to ${installDir} (${files} files).${note}`,
          },
        ],
        details: { ok: true, id, metadataId: installedId, targetDir: installDir, updated: Boolean(previousDir), renamed, occupiedBy, files },
      };
    },
  });
}
