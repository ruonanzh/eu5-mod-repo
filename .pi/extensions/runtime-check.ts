import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";
import { existsSync } from "node:fs";
import {
  discoverGameDir,
  pathsFor,
  readModRepoConfig,
  readState,
  resolveUserPath,
  writeState,
  GAME_FOLDER_NAME,
  type ModRepoConfig,
} from "../lib/game-paths";

/**
 * check_runtime — 运行时契约（docs/mod-repo-guide.md §4）的一次跑完入口。
 *
 * 拆分后的分工（本工具只做**编排**；判据与发现都在 .pi/lib/game-paths.ts）：
 *   · check_game_paths     只验给定/已记住的路径（只读）
 *   · try_set_game_paths   位置未知时扫 Steam 去找并落库
 *   · check_runtime        发现 + 校验 + 落库 + 汇总   ← 本工具
 *   · install_mod          安装（同一份判据；目标不存在则创建）
 *
 * EU5 没有 SDK/编译链（纯 PDXScript），所以这里只做环境与路径，没有 dotnet 那一步。
 */
export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "check_runtime",
    label: "Check Runtime",
    description:
      "One-stop runtime check for EU5: locates the game (explicit gameDir, remembered path, platform hint, then each Steam library from the registry and libraryfolders.vdf), verifies game/ or .metadata/ exists, derives the Paradox launcher mod directory and the Steam Workshop content dir, and records them in .gamer-agent.local.json. EU5 is Windows-only: on other platforms it reports PARTIAL. No SDK or compilation is involved. For a read-only path check use check_game_paths; to only locate and record the game use try_set_game_paths.",
    promptSnippet: "Check game/mod directory locations when they are unknown or changed",
    promptGuidelines: [
      "Use check_runtime when the game/mod directory locations are unknown or may have changed: it locates them, verifies them and records them in one go.",
      "EU5 needs no runtime or SDK installation; do not call install_runtime for anything but reminding the player that the game itself must be installed.",
      "If the player already gave you a path, prefer check_game_paths (read-only) to verify it, or pass gameDir here to locate and record it.",
    ],
    parameters: Type.Object({
      gameDir: Type.Optional(
        Type.String({
          description:
            "Game installation directory supplied by the player; relative paths use the workspace root. Omit to try the remembered path, the platform hint and each Steam library.",
        }),
      ),
    }),
    async execute(_toolCallId, params, _signal, _onUpdate, ctx) {
      const cwd = ctx.cwd;
      let cfg: ModRepoConfig;
      try {
        cfg = readModRepoConfig(cwd);
      } catch {
        throw new Error(
          "INVALID_WORKSPACE_CONFIG: Cannot read mod-repo.json. Reopen or update the game workspace; do not edit its maintainer configuration.",
        );
      }
      const state = readState(cwd);
      const explicit = params.gameDir?.trim() ? resolveUserPath(cwd, params.gameDir) : undefined;
      const { gameDir, tried, platformUnsupported } = discoverGameDir(cfg, state, explicit);

      if (platformUnsupported) {
        return {
          content: [
            {
              type: "text",
              text: `PARTIAL: ${GAME_FOLDER_NAME} is Windows-only; no game files can be located on this platform. Run this on Windows.\nNOTE: nothing was written; the remembered paths (if any) were left untouched.`,
            },
          ],
          details: { ...state, ok: false, errors: ["PLATFORM_UNSUPPORTED"], wroteState: false },
        };
      }

      if (!gameDir) {
        const triedText = tried.length
          ? tried.map((t) => `  - ${t.path} - ${t.reason ?? "did not pass validation"}`).join("\n")
          : "  (no usable candidate paths: neither the registry nor the Steam libraries have the game)";
        const errors = [
          `FAIL: GAME_DIRECTORY_NOT_FOUND (${cfg.game?.name ?? GAME_FOLDER_NAME}). Ask the player for the installed game directory and re-run check_runtime with gameDir, or install the game first.`,
        ];
        return {
          content: [{ type: "text", text: `${errors.join("\n")}\nTried:\n${triedText}` }],
          details: { ...state, ok: false, errors },
        };
      }

      const { modInstallDir, workshopDir, notes } = pathsFor(gameDir, cfg);
      const problems = notes.filter((n) => n.startsWith("FAIL:"));
      if (modInstallDir) {
        writeState(cwd, { gameDir, modInstallDir, workshopDir: workshopDir ?? null });
      }

      if (problems.length) {
        return {
          content: [{ type: "text", text: `${problems.join("\n")}\nNOTE: nothing was written.` }],
          details: { ...state, ok: false, errors: problems },
        };
      }

      const lines = [
        `PASS: gameDir ${gameDir}`,
        workshopDir ? `workshopDir ${workshopDir}` : "workshopDir (not found; optional)",
        `modInstallDir ${modInstallDir}`,
      ];
      if (modInstallDir && !existsSync(modInstallDir)) {
        lines.push(
          "WARN: that mod directory does not exist yet - normal on a first install (install_mod creates it). If the player moved their Documents folder (e.g. OneDrive), this path may be wrong: confirm with the player where the game expects mods.",
        );
      }

      return {
        content: [{ type: "text", text: lines.join("\n") }],
        details: { ...state, ok: true, gameDir, modInstallDir, workshopDir, wroteState: true },
      };
    },
  });
}
