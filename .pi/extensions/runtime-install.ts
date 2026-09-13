import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";

/**
 * install_runtime — 运行时契约（mod-repo-guide §4 + game-mod-guide/eu5.md §7）。
 *
 * EU5 mod 是纯 PDXScript，无编译、无 SDK、无第三方运行时——install_runtime 永远成功，
 * 提示 agent 无需引入任何 runtime；游戏本体必须玩家自装（check_runtime 负责定位游戏目录，
 * 找不到时引导玩家指定安装路径）。
 */
export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "install_runtime",
    label: "Install Runtime",
    description:
      "EU5 mods are pure PDXScript with no runtime/SDK to install. Always succeeds and reminds the agent that the game itself must be installed by the player; use check_runtime to locate game/workshop/mod directories.",
    promptSnippet: "Install mod runtime",
    promptGuidelines: [
      "Use install_runtime only when a missing runtime is suspected; for EU5 it always reports no dependencies.",
      "A missing game directory is NOT a runtime problem - use check_runtime (ask the player for the install path), not install_runtime.",
    ],
    parameters: Type.Object({}),
    async execute() {
      return {
        content: [
          {
            type: "text",
            text: "PASS: no runtime dependencies for EU5 (pure PDXScript; no SDK, no compile, nothing to install). The game itself must be installed by the player. Use check_runtime to locate gameDir/workshopDir/modInstallDir; use sync_game_scripts to copy vanilla text scripts for reference.",
          },
        ],
        details: { ok: true },
      };
    },
  });
}
