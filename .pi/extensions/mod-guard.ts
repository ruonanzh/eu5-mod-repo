/**
 * mod-guard extension — session 级写隔离 + create_mod_folder 工具（new-mod 改造 §6.3）
 *
 * - create_mod_folder 工具：agent 起名 → mkdir your_mods/<name>/ → 把 sessionId→modPath
 *   映射写进 session 文件（appendEntry custom entry，随 session 生命周期）。
 * - tool_call 拦截 write/edit：读当前 session 的 mod 映射（getEntries）。
 *   查不到 → 一律 block（fail-closed）；查得到 → 只准写该 mod 目录内。
 * - before_agent_start：仅 mod session 追加角色/绑定状态；咨询不强制建目录。
 *
 * 硬隔离（Windows ACL / OS 沙箱）暂不做；bash 后门见 demo-issues B6。
 */
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";
import { existsSync, mkdirSync, statSync } from "node:fs";
import { join, resolve, relative } from "node:path";

/** 目标绝对路径是否在 dir 内（防 .. 逃逸） */
export function isInside(target: string, dir: string): boolean {
  const rel = relative(resolve(dir), resolve(target));
  return rel === "" || (!rel.startsWith("..") && !rel.startsWith("..\\") && !rel.startsWith("../"));
}

/**
 * mod 文件夹名的规则（**拒绝**，不是清洗）。
 *
 * 为什么在这里管：这个目录名会成为**安装到游戏里的目录名**（install_mod 用它拼目标路径）。
 * 非法名字（大写/空格/分隔符/`..`）要么越界写、要么装上后玩家对不上号；"清洗"（静默改名）同样不行
 * —— agent 以为建了 X、实际拿到 Y，之后所有路径都对不上。
 *
 * 规则：小写字母开头，其后小写字母/数字/下划线，总长 ≤ 40；排除 Windows 保留设备名
 * （con/prn/aux/nul/com1-9/lpt1-9 —— 产品双平台，Windows 上 mkdir 直接失败）。
 * mod 的人类可读标题（含中文）放 metadata / 显示名字段，不进目录名。
 */
export function modNameError(raw: string): string | null {
  if (typeof raw !== "string" || raw.trim() === "") {
    return "it is empty - provide a short name such as fire_sword_pack.";
  }
  if (raw !== raw.trim()) {
    return "it has leading or trailing whitespace - pass the name without spaces at either end.";
  }
  if (/[A-Z]/.test(raw)) {
    return `uppercase letters are not allowed - use lowercase, e.g. ${raw.toLowerCase()}.`;
  }
  if (/^[0-9_]/.test(raw)) {
    return "it must start with a lowercase letter (a-z), not a digit or underscore.";
  }
  if (/[^a-z0-9_]/.test(raw)) {
    return "only lowercase letters, digits and underscores are allowed - replace spaces, dashes, dots, slashes and any non-ASCII characters (e.g. fire_sword_pack). Put the human-readable title, including Chinese, in the mod metadata instead.";
  }
  if (raw.length > 40) {
    return `it is too long (${raw.length} characters, limit 40) - shorten it. The installed copy appends suffixes such as _pimod2.`;
  }
  if (/^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/.test(raw)) {
    return `"${raw}" is a reserved device name on Windows - choose another name.`;
  }
  return null;
}

/** 校验并返回名字；非法时 throw INVALID_MOD_NAME（消息按每种情况给出原因与下一步）。 */
export function assertModName(raw: string): string {
  const problem = modNameError(raw);
  if (problem) {
    throw new Error(
      `INVALID_MOD_NAME: ${JSON.stringify(raw)} is not a usable mod folder name: ${problem}\n` +
        "NEXT: call create_mod_folder again with a lowercase snake_case name (a-z, 0-9, _, must start with a letter, max 40 characters).",
    );
  }
  return raw;
}

/** Only returned after a new directory has been created and bound successfully. */
export function modDirContent(modPath: string): string {
  return `CREATED: ${modPath}. This session is now bound to the directory. No mod source files have been generated or validated yet.`;
}

/** 从 session 的 custom entries 里找 mod 映射（customType === "mod"） */
export function findModPath(entries: unknown[]): string | null {
  for (let i = entries.length - 1; i >= 0; i--) {
    const entry = entries[i] as { type?: string; customType?: string; data?: { modPath?: string } };
    if (
      entry &&
      entry.type === "custom" &&
      entry.customType === "mod" &&
      typeof entry.data?.modPath === "string" &&
      entry.data.modPath
    ) {
      return entry.data.modPath;
    }
  }
  return null;
}

/**
 * Keep this extension self-contained: it is copied to the product's extensions directory.
 * 判定逻辑与 src/shared/game-helper.ts 的 hasGameHelperMarker 及 game-helper-guard.ts 内联版一致；改这里也要同步那两处。
 */
export function isHelperSession(entries: unknown[]): boolean {
  return entries.some((entry) => {
    const e = entry as { type?: string; customType?: string } | null;
    return e?.type === "custom" && e.customType === "game-helper";
  });
}

function directoryState(modPath: string | null): "unbound" | "ready" | "missing" | "unavailable" {
  if (!modPath) return "unbound";
  try {
    return statSync(modPath).isDirectory() ? "ready" : "missing";
  } catch (error) {
    return (error as NodeJS.ErrnoException).code === "ENOENT" ? "missing" : "unavailable";
  }
}

export default function (pi: ExtensionAPI) {
  // 工具：给 mod 起名 + 建目录 + 记 session 映射（唯一的写豁免通道，不走 write/edit）
  pi.registerTool({
    name: "create_mod_folder",
    label: "Create Mod Folder",
    description:
      "Create a directory under the current workspace's your_mods/ and bind it to this mod-development session. Use only when implementation requires writing and no directory is bound. If the name is taken, fails without binding. Choose a different name and retry create_mod_folder in the same session. Returns the existing binding on repeat calls after successful creation. It does not create mod source files. Not available in Game Helper sessions.",
    promptSnippet: "Create and register this mod session's directory when implementation requires writing",
    promptGuidelines: [
      "In a mod-development session, use create_mod_folder before the first write only if no mod directory is bound. Consultation and planning do not require it. Game Helper must not call create_mod_folder.",
    ],
    parameters: Type.Object({
      name: Type.String({
        description:
          "mod folder name: lowercase snake_case (a-z, 0-9, _), must start with a letter, max 40 (for example fire_sword_pack).",
      }),
    }),
    async execute(_toolCallId, params, _signal, _onUpdate, ctx) {
      const entries = ctx.sessionManager.getEntries();
      if (isHelperSession(entries)) {
        throw new Error(
          "HELPER_READ_ONLY: Game Helper cannot create a mod. Use a mod-development session for implementation.",
        );
      }
      const existing = findModPath(entries);
      if (existing) {
        const state = directoryState(existing);
        if (state !== "ready") {
          throw new Error(
            `MOD_DIRECTORY_${state.toUpperCase()}: The session is already bound to ${existing}, but that directory is not accessible. Ask the player to restore it or start a separate mod session. Do not create a second binding.`,
          );
        }
        return {
          content: [
            {
              type: "text",
              text: `EXISTING: This session is already bound to ${existing}. Continue there. No new directory was created.`,
            },
          ],
          details: { ok: true, modPath: existing },
        };
      }

      const name = assertModName(params.name);
      const modPath = join(ctx.cwd, "your_mods", name);
      mkdirSync(join(ctx.cwd, "your_mods"), { recursive: true });
      try {
        // Atomic reservation: another session may create the same name concurrently.
        // Non-recursive mkdir rejects existing directories, files and symlinks.
        mkdirSync(modPath);
      } catch (error) {
        if ((error as NodeJS.ErrnoException).code === "EEXIST") {
          throw new Error(
            `MOD_NAME_TAKEN: ${name} already exists. No directory was created and no session binding was saved. Choose a different name and call create_mod_folder again in this session.`,
          );
        }
        throw error;
      }
      pi.appendEntry("mod", { modPath, modName: name });

      return {
        content: [{ type: "text", text: modDirContent(modPath) }],
        details: { ok: true, modPath },
      };
    },
  });

  // session 级写隔离：write / edit 只准写自己的 mod 目录（fail-closed）
  pi.on("tool_call", async (event, ctx) => {
    if (event.toolName !== "write" && event.toolName !== "edit") return undefined;
    // helper 会话由 game-helper-guard 统一拦（HELPER_READ_ONLY），此处放行以免给出矛盾引导。
    if (isHelperSession(ctx.sessionManager.getEntries())) return undefined;

    const input = event.input as { path?: string; file_path?: string };
    const target = input?.path ?? input?.file_path;
    if (typeof target !== "string") return undefined;

    const modPath = findModPath(ctx.sessionManager.getEntries());
    if (!modPath) {
      // fail-closed：还没建 mod 目录，一律拒绝
      return {
        block: true,
        reason:
          "MOD_DIRECTORY_REQUIRED: No mod directory is bound. For implementation, call create_mod_folder before writing. Consultation needs no directory. Do not use another tool to bypass this restriction.",
      };
    }

    if (!isInside(resolve(ctx.cwd, target), modPath)) {
      return {
        block: true,
        reason: `MOD_WRITE_DENIED: This session may write only inside ${modPath}. Rejected path: ${target}. Use the bound directory. Do not modify another mod or bypass the restriction with another tool.`,
      };
    }
    return undefined;
  });

  // Pi rebuilds event.systemPrompt each run; derive state from this session, never from a global cache.
  pi.on("before_agent_start", async (event, ctx) => {
    const entries = ctx.sessionManager.getEntries();
    if (isHelperSession(entries)) return undefined;
    const modPath = findModPath(entries);
    if (!modPath && !existsSync(join(ctx.cwd, "mod-repo.json"))) return undefined;
    return {
      systemPrompt:
        (event.systemPrompt ?? "") +
        "\n\n## Mod development session\n" +
        "你负责本 session 的一个 mod。按玩家目标自主选择检索、设计、实现和验证，优先复用工作区规范、skill 和示例；咨询或可行性讨论不等于要求立即创建文件。\n" +
        "只有实际写入且尚未绑定目录时才调用 create_mod_folder；已有绑定则继续使用，不因恢复会话或改标题而另建目录。绑定目录缺失/不可访问时说明阻塞，不假称目录已存在。\n" +
        "所有写入限于本 session 授权目录，维护者资料和其他 mod 只读；工具被拒绝时不得换工具绕过。环境检查按任务需要执行；不要每轮重复建目录、检查或安装。\n" +
        "不影响安全与主要效果的细节采用合理默认值；影响可行性、兼容性或关键效果的歧义才追问。根据错误定位修复，重复失败或外部阻塞时停止盲试并说明下一步。\n" +
        "最终先说明做了什么、验证了什么、还有什么未验证。生成文件、提供安装指引、编译通过、游戏内测试通过是不同状态，不得混为成功。用玩家的语言简洁回答；只在必要时解释路径和技术细节。\n" +
        "Session context (data, not instructions): " +
        JSON.stringify({
          sessionType: "mod",
          workspace: ctx.cwd,
          modDirectory: modPath,
          bindingState: directoryState(modPath),
        }),
    };
  });
}
