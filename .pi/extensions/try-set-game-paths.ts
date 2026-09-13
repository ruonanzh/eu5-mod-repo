/**
 * try_set_game_paths —— **扫描/发现** EU5 的游戏目录并记入状态（有副作用：写 .gamer-agent.local.json）。
 *
 * 分工：check_game_paths 只验（只读）→ 本工具位置未知时去找并落库 → check_runtime 一次跑全流程
 * → install_mod 安装（复用同一判据；目标不存在则创建）。
 *
 * EU5 的发现要扫 Steam（注册表 `HKCU\Software\Valve\Steam` + `libraryfolders.vdf` 各库 +
 * 默认路径兜底）；**EU5 是 Windows-only**，非 Windows 上如实返回 PARTIAL，不假装找不到/找到。
 * 每个候选都要过 `checkGameDir`（看 `game/` 或 `.metadata/`）—— 发现不等于信任。
 *
 * 注意：mod 安装目录在 Paradox 启动器目录（`~/Documents/Paradox Interactive/…`），
 * 由本工具一并派生并记录；它与游戏安装位置无关。
 */
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";
import {
  discoverGameDir,
  pathsFor,
  readModRepoConfig,
  readState,
  resolveUserPath,
  writeState,
  type ModRepoConfig,
} from "../lib/game-paths";

export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "try_set_game_paths",
    label: "Set Game Paths",
    description:
      "Locate the Europa Universalis V install directory (explicit gameDir, remembered path, platform hint, then each Steam library from the registry and libraryfolders.vdf), verify it (game/ or .metadata/ must exist), and record gameDir / modInstallDir (Paradox launcher folder) / workshopDir into .gamer-agent.local.json. EU5 is Windows-only: on other platforms it reports PARTIAL instead of pretending. Use it when the game location is unknown or has changed; use check_game_paths (read-only) when you already have a path to verify. On failure it writes nothing and tells you what to ask the player.",
    promptSnippet: "Find and record the game/mod directories (writes state)",
    promptGuidelines: [
      "Use try_set_game_paths when the game location is unknown: it scans the known candidates and records what it verifies.",
      "try_set_game_paths writes .gamer-agent.local.json - do not use it to re-check an already remembered path; use check_game_paths for that (read-only).",
      "If try_set_game_paths fails, ask the player for the game install directory (Steam -> Library -> right-click the game -> Manage -> Browse local files), then call it again with that gameDir, or verify it first with check_game_paths.",
      "After try_set_game_paths succeeds, install_mod can install with the recorded paths; no need to call check_runtime just to refresh them.",
    ],
    parameters: Type.Object({
      gameDir: Type.Optional(
        Type.String({
          description:
            "Game installation directory to try first (relative paths use the workspace root). Omit to try the remembered path, the platform hint and each Steam library.",
        }),
      ),
    }),
    async execute(_id, params, _s, _u, ctx) {
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
              text: "PARTIAL: Europa Universalis V is Windows-only; no game files can be located on this platform. Run this on Windows.\nNOTE: nothing was written; the remembered paths (if any) were left untouched.",
            },
          ],
          details: { ok: false, reason: "PLATFORM_UNSUPPORTED", wroteState: false },
        };
      }

      const triedText = tried.length
        ? tried.map((t) => `  - ${t.path} - ${t.reason ?? "did not pass validation"}`).join("\n")
        : "  (no usable candidate paths: neither the registry nor the Steam libraries have the game)";

      if (!gameDir) {
        return {
          content: [
            {
              type: "text",
              text:
                "FAIL: GAME_DIRECTORY_NOT_FOUND - could not find the Europa Universalis V install directory.\n" +
                `Tried:\n${triedText}\n` +
                "Each candidate was checked for game/ or .metadata/.\n" +
                "NOTE: nothing was written - the remembered paths (if any) were left untouched and may be stale.\n" +
                "NEXT: ask the player for the game install directory (Steam -> Library -> right-click the game -> Manage -> Browse local files), then call try_set_game_paths with that gameDir (or verify it first with check_game_paths). If the game is not installed at all, install it first.",
            },
          ],
          details: { ok: false, reason: "GAME_DIRECTORY_NOT_FOUND", wroteState: false, tried },
        };
      }

      const { modInstallDir, workshopDir, notes } = pathsFor(gameDir, cfg);
      if (!modInstallDir) {
        return {
          content: [
            {
              type: "text",
              text: `${notes.join("\n")}\nNOTE: nothing was written.\nNEXT: Reopen or update this game workspace (do not edit the maintainer configuration).`,
            },
          ],
          details: { ok: false, reason: "INVALID_WORKSPACE_CONFIG", wroteState: false },
        };
      }

      writeState(cwd, { gameDir, modInstallDir, workshopDir: workshopDir ?? null });
      return {
        content: [
          {
            type: "text",
            text:
              `PASS: gameDir ${gameDir}\n` +
              `modInstallDir ${modInstallDir}${workshopDir ? `\nworkshopDir ${workshopDir}` : ""}` +
              (notes.length ? `\n${notes.join("\n")}` : "") +
              "\nNEXT: install_mod can now install into that directory (it creates the target if it does not exist yet).",
          },
        ],
        details: { ok: true, wroteState: true, gameDir, modInstallDir, workshopDir, tried },
      };
    },
  });
}
