import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";
import { readFileSync, statSync, cpSync } from "node:fs";
import { join } from "node:path";

/**
 * install_mod — EU5 (pdx-script) 安装契约（mod-repo-guide §4.1）。
 *
 * 把 your_mods/<name>/ 幂等覆盖式复制到 Paradox launcher 的 mod 目录
 * （.gamer-agent.local.json 的 modInstallDir，由 check_runtime 写入；install_mod 不自己探测）。
 * 只负责「装」，不重复 validate_mod 的校验；只写游戏 mod 目录（workspace 外）。
 */
export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "install_mod",
    label: "Install Mod",
    description:
      "Copy a mod from your_mods/<name>/ into the Paradox launcher mod directory (modInstallDir from check_runtime's .gamer-agent.local.json). Idempotent overwrite; fails with NEXT: check_runtime when the target directory is unknown.",
    promptSnippet: "Install mod into the game",
    promptGuidelines: [
      "Use install_mod after validate_mod passes, to copy the mod into the game for testing.",
      "If install_mod fails because the target directory is unknown, run check_runtime first.",
    ],
    parameters: Type.Object({
      modDir: Type.String({ description: "Mod directory to install, e.g. your_mods/<ModName>" }),
    }),
    async execute(_toolCallId, params, _signal, _onUpdate, ctx) {
      const repoRoot = ctx.cwd;
      const modDir = params.modDir;
      if (!modDir || typeof modDir !== "string" || !statSync(modDir, { throwIfNoEntry: false })?.isDirectory()) {
        throw new Error(`INVALID_MOD_DIR: ${modDir ?? "(empty)"} is not a directory`);
      }

      // 目标目录来自 check_runtime 写的状态文件，install_mod 不自己探测
      const stateFile = join(repoRoot, ".gamer-agent.local.json");
      let state: Record<string, unknown> = {};
      try {
        state = JSON.parse(readFileSync(stateFile, "utf8"));
      } catch {
        state = {};
      }
      const modInstallDir = typeof state.modInstallDir === "string" && state.modInstallDir.trim() ? state.modInstallDir.trim() : "";

      if (!modInstallDir) {
        return {
          content: [
            {
              type: "text",
              text: "FAIL: mod install directory unknown. NEXT: run check_runtime first to locate the Paradox mod directory, then re-run install_mod.",
            },
          ],
          details: { ok: false, errors: ["modInstallDir unknown; run check_runtime first"] },
        };
      }

      const name = modDir.split(/[\\/]/).pop() || "mod";
      const target = join(modInstallDir, name);
      try {
        cpSync(modDir, target, {
          recursive: true,
          force: true,
          filter: (src) => !src.split(/[\\/]/).includes(".git"),
        });
      } catch (e) {
        return {
          content: [
            {
              type: "text",
              text: `FAIL: copy failed: ${e instanceof Error ? e.message : String(e)}. NEXT: check write permission on ${modInstallDir}.`,
            },
          ],
          details: { ok: false, errors: [e instanceof Error ? e.message : String(e)] },
        };
      }

      return {
        content: [{ type: "text", text: `PASS: installed ${name} to ${target}` }],
        details: { ok: true, target },
      };
    },
  });
}
