/**
 * check_game_paths —— **只验**：校验游戏 / Workshop / mod 安装目录（只读、幂等、不扫描、不写状态）。
 *
 * 与其它工具的分工（别混用）：
 *   · check_game_paths   只验给定或已记住的路径            ← 本工具（无副作用；helper 只读会话可用）
 *   · （无人值守的发现/派生是内部实现，不注册为工具：见 lib 的 setPathWithFallback）
 *   · check_runtime      一次跑完整流程（发现 + 校验 + 记录）
 *   · install_mod        安装（复用同一份判据；目标不存在则创建）
 *
 * 注意：EU5 的 mod 安装目录在 Paradox 启动器目录（`~/Documents/Paradox Interactive/…`），
 * 与游戏安装位置无关 → 它的判据是**形状校验**，不是"兄弟目录哨兵"。
 */
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";
import {
  checkGameDir,
  checkModInstallDir,
  checkWorkshopDir,
  readModRepoConfig,
  readState,
  resolveUserPath,
  workshopSupported,
  type ModRepoConfig,
  type PathVerdict,
} from "../lib/game-paths";

export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "check_game_paths",
    description:
      "Verify game-related directories (game install, Steam Workshop content, mod install target). Read-only: it never writes .gamer-agent.local.json, never scans Steam, never creates directories. Pass any subset of gameDir/workshopDir/modInstallDir to verify just those; omit them all to verify the paths currently remembered in .gamer-agent.local.json. Use it when the player tells you a path (to find out whether it is right) or to re-check remembered paths; use set_game_paths when the location is unknown and needs scanning.",
    promptSnippet: "Verify game/mod paths without scanning or writing",
    promptGuidelines: [
      "Use check_game_paths (not check_runtime) when the player gives you a path: it verifies without scanning Steam and without writing state.",
      "check_game_paths never writes .gamer-agent.local.json - if a path is wrong, ask the player for the real one (Steam -> Library -> right-click the game -> Manage -> Browse local files) and verify again with gameDir.",
      "If nothing is known yet about the game location, run check_runtime first (or ask the player for the path and record it with set_game_dir); check_game_paths only verifies what you pass it or what is already remembered.",
      "Do not create or install anything as a result of a failed check_game_paths: report the FAIL text and its NEXT line to the player.",
    ],
    parameters: Type.Object({
      gameDir: Type.Optional(Type.String({ description: "Game install directory to verify; relative paths use the workspace root." })),
      workshopDir: Type.Optional(Type.String({ description: "Steam Workshop content directory to verify (optional)." })),
      modInstallDir: Type.Optional(Type.String({ description: "Mod install target directory to verify (optional)." })),
    }),
    async execute(_id, params, _signal, _onUpdate, ctx) {
      const cwd = ctx.cwd;
      const cfg: ModRepoConfig = readModRepoConfig(cwd);
      const state = readState(cwd);
      const appId = String(cfg.game?.steamAppId ?? "");

      const explicit = [params.gameDir, params.workshopDir, params.modInstallDir].some(
        (v) => typeof v === "string" && v.trim() !== "",
      );
      const remembered = (v: unknown): string | null => (typeof v === "string" && v.trim() ? v : null);
      const asPath = (v: string | undefined): string | null => (v?.trim() ? resolveUserPath(cwd, v) : null);

      // 契约：**传谁验谁**；一个都不传 = 验缓存里记住的那几条。
      //
      // U29：哪些路径「必填」、要不要关心创意工坊，由 mod-repo.json 决定：
      //   · 契约声明了 modInstall（non-null）→ modInstallDir 必填；modInstall: null 的类型不要求
      //   · workshop.supported === false → **完全不看** workshopDir（不检查、不出现在结果里、不参与判定）
      //   · workshopDir 无论对错都**不产 ERROR**：它只是只读参考，最多 WARN
      const requiresModInstall = cfg.modInstall !== null && cfg.modInstall !== undefined;
      const workshop = workshopSupported(cfg); // true | false | null（未声明 = 未知）
      const requiredKeys: string[] = ["gameDir", ...(requiresModInstall ? ["modInstallDir"] : [])];

      const allTargets: Array<[string, string | null]> = explicit
        ? [
            ["gameDir", asPath(params.gameDir)],
            ["workshopDir", asPath(params.workshopDir)],
            ["modInstallDir", asPath(params.modInstallDir)],
          ]
        : [
            ["gameDir", remembered(state.gameDir)],
            ["workshopDir", remembered(state.workshopDir)],
            ["modInstallDir", remembered(state.modInstallDir)],
          ];
      const workshopIgnored =
        workshop === false && allTargets.some(([key, path]) => key === "workshopDir" && path !== null);
      const targets = allTargets.filter(([key]) => !(key === "workshopDir" && workshop === false));

      if (targets.every(([, path]) => path === null)) {
        // 只因为「这个游戏没有创意工坊」而无事可做 → 说清楚，不要报「没有路径可验」（那会误导）
        if (workshopIgnored && requiredKeys.length === 0) {
          return {
            content: [
              {
                type: "text",
                text: "PASS: nothing to verify - this game type declares no Steam Workshop (mod-repo.json: workshop.supported = false), so workshopDir was ignored.\nNEXT: pass gameDir/modInstallDir to verify them.",
              },
            ],
            details: { ok: true, checked: {}, failed: [], warnings: [], ignored: ["workshopDir"], wroteState: false },
          };
        }
        if (explicit || requiredKeys.length === 0) {
          return {
            content: [
              {
                type: "text",
                text: "FAIL: nothing to check - no paths were given and none are remembered in .gamer-agent.local.json.\nNEXT: run set_game_paths to locate the game, or pass gameDir explicitly (ask the player where the game is).",
              },
            ],
            details: { ok: false, reason: "NOTHING_TO_CHECK" },
          };
        }
      }

      const verdicts: Record<string, PathVerdict> = {};
      for (const [key, path] of targets) {
        if (path === null) continue;
        if (key === "gameDir") verdicts[key] = checkGameDir(path);
        else if (key === "workshopDir") verdicts[key] = checkWorkshopDir(path, appId);
        else verdicts[key] = checkModInstallDir(path, cfg);
      }

      const lines: string[] = [];
      const failed: string[] = [];
      const warnings: string[] = [];
      for (const [key, v] of Object.entries(verdicts)) {
        if (v.ok) {
          lines.push(`PASS: ${key} ${v.path} (verified)`);
          continue;
        }
        // U29：workshopDir 是附加信息，永不产 ERROR
        if (key === "workshopDir") {
          lines.push(`WARN: workshopDir ${v.path ?? "(not given)"} - ${v.reason}`);
          if (v.next) lines.push(`  NEXT: ${v.next}`);
          warnings.push(key);
          continue;
        }
        lines.push(`FAIL: ${key} ${v.path ?? "(not given)"} - ${v.reason}`);
        if (v.next) lines.push(`  NEXT: ${v.next}`);
        failed.push(key);
      }

      // 必填路径缺失：只在「验缓存」这条路上报（显式传参时遵循「传谁验谁」）
      if (!explicit) {
        for (const key of requiredKeys) {
          if (verdicts[key] || failed.includes(key)) continue;
          lines.push(`FAIL: ${key} (not recorded) - this path is required for this game type.`);
          lines.push(
            key === "gameDir"
              ? "  NEXT: run check_runtime (or set_game_dir) to locate the game."
              : "  NEXT: run check_runtime (or set_mod_install_dir) to record the mod install target.",
          );
          failed.push(key);
        }
        // 契约声明有创意工坊、但还没记录 workshopDir → 只 WARN，且仅在必填项全对时才提
        if (workshop === true && failed.length === 0 && !remembered(state.workshopDir)) {
          lines.push(
            "WARN: workshopDir (not recorded) - this game has a Workshop; recording it lets you read existing Workshop content for reference.",
          );
          lines.push("  NEXT: run set_workshop_dir (or set_game_paths with workshopDir).");
          warnings.push("workshopDir");
        }
      }

      const ok = failed.length === 0;
      if (!ok) {
        lines.push(
          "NOTE: nothing was changed - this tool never writes state or creates directories. Report the above to the player; once you have a correct path, set_game_paths can record it (or install_mod can use it as-is if it is already remembered).",
        );
      }

      return {
        content: [{ type: "text", text: lines.join("\n") }],
        details: { ok, checked: verdicts, failed, warnings, wroteState: false },
      };
    },
  });
}
