/**
 * The mod identity check. mod-lint and mod-install share this copy, so the two cannot drift apart.
 *
 * Game rule (the EU5 wiki metadata page): the `id` is a non-empty string
 * ("Id of the mod for recognition"). "The id equals the directory name, in lower_snake_case" is a
 * suggestion from this repository, and this file does not enforce it. If the two tools disagree on
 * what counts as valid, validate_mod reports a mod as installable and install_mod then fails.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

/** The id check. Game rule: a non-empty string. */
export const isValidModId = (v: unknown): v is string => typeof v === "string" && v.trim() !== "";

export interface ModIdentity {
  name: string;
  version: string;
}

/**
 * Read the id and the version from `.metadata/metadata.json`.
 * Returns null when the file is absent, the JSON is invalid, the top level is not an object, or the
 * id fails `isValidModId`.
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
