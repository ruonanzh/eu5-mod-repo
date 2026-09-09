import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";

/**
 * install_mod — mod 安装契约（docs/mod-repo-guide.md §4.1）
 * json mod type 的 modInstall 为 null，无需安装，直接 PASS（modDir 不使用）。
 * 有 modInstall 的类型（如 csharp-dll / pdx-script）：
 *   - 从 params 取 modDir（your_mods/<ModName>）
 *   - 读 mod-repo.json 的 modInstall（relativeTo + path）解析目标
 *   - relativeTo ∈ { "gameDir" 游戏安装目录, "userDocuments" 用户文档目录 }
 *   - path 为字符串（平台无关）或 { "windows": …, "mac": … } 对象（多平台）
 *   - 目标路径由 check_runtime 写运行时状态文件（如 .gamer-agent.local.json），
 *     install_mod 不自己探测；目标未发现 → FAIL + "NEXT: run check_runtime first"
 *   - 把 your_mods/<ModName>/ 幂等覆盖式复制到目标（node:fs cpSync recursive）
 *   - 只负责「装」，不重复 validate_mod 的校验；只写游戏 mod 目录（workspace 外）
 */
export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "install_mod",
    label: "Install Mod",
    description: "Copy a mod from your_mods/<name>/ into the game's mod folder (per modInstall in mod-repo.json)",
    promptSnippet: "Install mod into the game",
    promptGuidelines: [
      "Use install_mod after validate_mod passes, to copy the mod into the game for testing.",
    ],
    parameters: Type.Object({
      modDir: Type.String({ description: "Mod directory to install, e.g. your_mods/<ModName>" }),
    }),
    async execute(_toolCallId, { modDir }) {
      // json modType: modInstall is null — nothing to install; modDir is unused here.
      void modDir;
      return {
        content: [
          {
            type: "text",
            text: `PASS: this modType (json) has no install target (modInstall: null); nothing to copy.\nNEXT: run the game to load the mod content directly.`,
          },
        ],
        details: { ok: true },
      };
    },
  });
}
