import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";

/**
 * check_runtime —— **只报运行时前提**：EU5 是纯 PDXScript，无 SDK / 无编译 / 无第三方运行时，所以恒为「无依赖」。
 *
 * 职责边界（一个工具只干一件事）：
 *   · check_runtime      **只报运行时前提**（本工具）—— EU5 无依赖；不找游戏、不碰三条路径
 *   · try_set_game_dir  **确保游戏目录已就绪**（无参、幂等）：自己找并记录，连带记录派生的两条
 *   · set_game_dir      **记录一个具体的游戏安装目录**（玩家给的或自己找到的）
 *   · check_game_paths   只**验证**给定/已记住的路径（只读、不扫描、不写状态）
 *   · install_runtime    只报「无依赖 / 无需安装」（不执行安装）
 *   · sync_game_scripts  镜像 vanilla 脚本到 game-scripts/（写 mod 前的上下文）
 *   · install_mod        安装（目标目录不存在则创建）
 */
export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "check_runtime",
    label: "Check Runtime",
    description:
      "Reports the runtime prerequisites for this workspace: EU5 is pure PDXScript, so there are none (no SDK, no compilation, no runtime to install). It never installs anything and does not locate the game - game/mod paths belong to check_game_paths (verify) and try_set_game_dir / set_game_dir (ensure / record).",
    promptSnippet: "Check runtime prerequisites (EU5: none)",
    promptGuidelines: [
      "Use check_runtime when a task needs runtime or compile prerequisites, or when the player asks whether the environment is ready: EU5 has none, so it always passes.",
      "check_runtime does not locate the game or touch any path - a missing game directory is not a runtime problem: ensure or record paths with try_set_game_dir / set_game_dir, verify them with check_game_paths.",
      "check_runtime never installs anything and never writes state - there is nothing to install for EU5.",
    ],
    parameters: Type.Object({}),
    async execute() {
      return {
        content: [
          {
            type: "text",
            text: "PASS: no runtime dependencies for EU5 (pure PDXScript; no SDK, no compile, nothing to install). The game itself must be installed by the player; run try_set_game_dir (no arguments) to locate gameDir/workshopDir/modInstallDir.",
          },
        ],
        details: { ok: true },
      };
    },
  });
}
