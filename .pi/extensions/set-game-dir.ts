/**
 * set_game_dir —— **agent 入口**：记住玩家给的游戏安装目录。
 *
 * 语义（与其它 setter 一致）：① 给的路径通过判据 → 落库（PASS）
 * ② 没通过 → 内部**发现/派生**（无参那一层，不注册为工具）→ 成功 → 落库 + **WARN**（说明为什么没用你给的）
 * ③ 内部也失败 → **FAIL**（不落库），并给出下一步
 */
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";
import { formatPathOutcome, readModRepoConfig, resolveUserPath, setPathWithFallback } from "../lib/game-paths";

export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "set_game_dir",
    label: "Set Game Directory",
    description: "Record the Europa Universalis V install directory the player gave you. Validates it (game/ or .metadata/ must exist); if it does not validate, the tool scans the known Steam locations itself and records what it finds (returning WARN).",
    promptSnippet: "Remember the game directory (validates; falls back to discovery)",
    promptGuidelines: [
      "Use set_game_dir when the player tells you where EU5 is installed: it validates the path and records it.",
      "If it returns WARN, the path did not validate and a located path was recorded instead - tell the player which one is in use.",
      "If it returns FAIL, ask the player for the correct path; on non-Windows EU5 cannot be located at all."
    ],
    parameters: Type.Object({
      path: Type.String({ description: "The path the player gave you; relative paths use the workspace root." }),
    }),
    async execute(_id, params, _s, _u, ctx) {
      const cwd = ctx.cwd;
      let cfg;
      try {
        cfg = readModRepoConfig(cwd);
      } catch {
        throw new Error(
          "INVALID_WORKSPACE_CONFIG: Cannot read mod-repo.json. Reopen or update the game workspace; do not edit its maintainer configuration.",
        );
      }
      const out = setPathWithFallback(cwd, cfg, "gameDir", resolveUserPath(cwd, params.path));
      const { text, ok, status } = formatPathOutcome(out);
      return { content: [{ type: "text", text }], details: { ok, status, kind: out.kind, given: out.given, recorded: out.recorded, wroteState: status !== "FAIL" } };
    },
  });
}
