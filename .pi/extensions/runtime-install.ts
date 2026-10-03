import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";

/**
 * install_runtime — 运行时契约（mod-repo-guide §4 + game-mod-guide/eu5.md §7）。
 *
 * EU5 mod 是纯 PDXScript，无编译、无 SDK、无第三方运行时——install_runtime 永远成功，
 * 提示 agent 无需引入任何 runtime；游戏本体必须玩家自装（try_set_game_dir 负责定位游戏目录并记录）。
 */
export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "install_runtime",
    label: "Install Runtime",
    description:
      "EU5 mods are pure PDXScript with no runtime/SDK to install. Always reports no runtime (SKIP, nothing installed) and reminds the agent that the game itself must be installed by the player; use try_set_game_dir to record game/workshop/mod directories.",
    promptSnippet: "Install runtime (EU5: nothing to install)",
    promptGuidelines: [
      "Use install_runtime only when a missing runtime is suspected; for EU5 it always reports SKIP (no dependencies, nothing installed).",
      "A missing game directory is NOT a runtime problem - use try_set_game_dir (no arguments) to record it, not install_runtime.",
    ],
    parameters: Type.Object({}),
    async execute() {
      return {
        content: [
          {
            type: "text",
            text: "SKIP: no runtime dependencies; no installation was performed. The game itself must be installed by the player. Use try_set_game_dir to record gameDir/workshopDir/modInstallDir; use sync_game_scripts to load the vanilla scripts (the authoring context).",
          },
        ],
        details: { ok: true },
      };
    },
  });
}
