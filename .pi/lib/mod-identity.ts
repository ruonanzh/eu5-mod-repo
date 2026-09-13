/**
 * mod 身份的判据（**共享**：mod-lint 与 mod-install 都用这一份，避免两边各自实现后漂移）。
 *
 * 游戏规则（EU5 wiki 的 metadata 说明）：`id` 只要求是**非空字符串**
 * （"Id of the mod for recognition"）。「id = 目录名 / lower_snake_case」是本仓库的**建议**，
 * 不在这里硬校验 —— 一旦两边对"什么算合格"理解不同，就会出现 validate 说能装、install 却失败。
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

/** id 的判据（游戏规则：非空字符串） */
export const isValidModId = (v: unknown): v is string => typeof v === "string" && v.trim() !== "";

export interface ModIdentity {
  name: string;
  version: string;
}

/**
 * 读 `.metadata/metadata.json` 的 id/version。
 * 返回 null 的条件：文件不存在、JSON 非法、顶层不是对象、或 id 未通过 `isValidModId`。
 */
export function readModIdentity(modDir: string): ModIdentity | null {
  const metadataPath = join(modDir, ".metadata", "metadata.json");
  if (!existsSync(metadataPath)) return null;
  try {
    const parsed = JSON.parse(readFileSync(metadataPath, "utf8")) as Record<string, unknown>;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;
    const id = typeof parsed.id === "string" ? parsed.id.trim() : "";
    if (!isValidModId(id)) return null;
    return { name: id, version: typeof parsed.version === "string" ? parsed.version.trim() : "" };
  } catch {
    return null;
  }
}
