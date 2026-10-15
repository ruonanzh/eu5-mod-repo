/**
 * locate_entry - it returns the location facts for one EU5 entry mechanism in one call.
 *
 * The mechanism name is an `id` of the static index in ../lib/entry-points. The tool answers the
 * question that the conventions page does not answer: where the mechanism lives in the script
 * mirror, which readme the game ships for it, a real example, the smallest copyable frame, and who
 * renders it.
 *
 * Order of work, and the reason for it:
 *   1. The mirror is checked first, because every path is relative to it, so a missing mirror makes
 *      every answer wrong. The FAIL points at `sync_game_scripts`.
 *   2. The id is matched against the index. A miss is not an error of the agent: the index holds the
 *      common mechanisms only, so the FAIL lists its ids and points at section 7 of the conventions
 *      page, which is the general method for the unlisted mechanisms.
 *   3. Every indexed path is checked with `existsSync`, and only the paths that exist are printed.
 *      The index is a snapshot of one game build, and a game patch can move a path.
 *   4. A `liveEnum` value is rescanned from the mirror, because those values drift between builds.
 *
 * The content body holds the fixed five sections, in this order:
 *   1. REGISTER  the registration target, plus the rescan of the live enum when the mechanism has it
 *   2. README    the readme the game ships, plus the smallest copyable frame when the index holds one
 *   3. EXAMPLE   the real example paths that this mirror holds
 *   4. WIRING    who renders the mechanism, or how script calls it
 *   5. LOCATE    the shortest locate command, run from the repository root
 * The readme section prints the path only. The readme text carries template paths such as
 * `gui/scripted_widget_file_name.gui`, which are not real paths. The tool labels an indexed path
 * that this mirror does not hold as `(indexed, but not in this mirror: <path>)`.
 *
 * The tool is read-only. It reads the mirror and the index, it writes nothing, it spawns nothing,
 * and it never touches `.gamer-agent.local.json`.
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";
import { ENTRY_POINTS, ENTRY_POINT_ROOT_REL, type EntryPoint } from "../lib/entry-points";

/** The width of the section label. The value column starts after `1. ` plus this width. */
const LABEL_WIDTH = 11;
const VALUE_PAD = " ".repeat(3 + LABEL_WIDTH);
const section = (n: number, label: string, value: string): string =>
  `${n}. ${label.padEnd(LABEL_WIDTH)}${value}`;
/** A continuation line of a section, aligned under the value column. */
const cont = (text: string): string => `${VALUE_PAD}${text}`;

/** The path of the index entry, relative to the mirror root, when it exists. Otherwise null. */
const existing = (root: string, rel: string): string | null =>
  rel && existsSync(join(root, rel)) ? rel : null;

/**
 * Removes the `#` comments, and it keeps a `#` that sits inside a double-quoted string.
 */
function stripComments(text: string): string {
  let out = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') inQuotes = !inQuotes;
    if (ch === "#" && !inQuotes) {
      while (i < text.length && text[i] !== "\n") i++;
      out += "\n";
      continue;
    }
    out += ch;
  }
  return out;
}

/**
 * Returns the first-level `type =` values of the entry blocks in one file, in file order.
 *
 * The caliber is the one that the index snapshot was made with: a `type =` at depth 1, which is
 * directly inside a top-level block. A nested `type =` and a `scope:`-prefixed expression do not
 * count. Example: `my_action = { type = situation }` counts, and the `type =` of a nested
 * `limit = { ... }` does not.
 */
function firstLevelTypes(text: string): string[] {
  const tokens = stripComments(text)
    .replace(/([{}])/g, " $1 ")
    .replace(/=/g, " = ")
    .split(/\s+/)
    .filter(Boolean);
  const out: string[] = [];
  let depth = 0;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token === "{") {
      depth++;
      continue;
    }
    if (token === "}") {
      depth--;
      continue;
    }
    if (depth !== 1 || token !== "type" || tokens[i + 1] !== "=") continue;
    const value = (tokens[i + 2] ?? "").replace(/[";,]/g, "");
    if (!value || value === "{" || value.startsWith("scope:")) continue;
    out.push(value);
  }
  return out;
}

/**
 * Rescans the `type =` values from the mirror for one mechanism, ranked by how often they occur.
 * It returns null when the directory cannot be read, which means that the scan is not possible.
 */
function rescanLiveEnum(root: string, dir: string): string[] | null {
  const abs = join(root, dir);
  let files: string[];
  try {
    files = readdirSync(abs).filter((f) => f.endsWith(".txt"));
  } catch {
    return null;
  }
  const counts = new Map<string, number>();
  for (const file of files) {
    let text: string;
    try {
      text = readFileSync(join(abs, file), "utf8");
    } catch {
      continue;
    }
    for (const value of firstLevelTypes(text)) counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([value, n]) => `${value} (${n})`);
}

export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "locate_entry",
    label: "Locate Entry",
    description:
      `Locates one EU5 entry mechanism in the script mirror in a single call: the registration path, the readme the game ships, a real example, the smallest copyable frame, the wiring, and the locate command. The mechanism argument is an id of the static index, which holds ${ENTRY_POINTS.length} common mechanisms. It is read-only, and it writes nothing.`,
    promptSnippet: "Locate one entry mechanism: registration path, readme, example, frame, wiring",
    promptGuidelines: [
      "Use locate_entry with an entry mechanism id before you write a new entry, in place of searching the mirror yourself.",
      `Call locate_entry before you read docs/eu5-modding-conventions.md section 7. The index holds ${ENTRY_POINTS.length} common mechanisms only, so an unlisted mechanism still needs section 7 and a grep of the registration directory.`,
      "locate_entry is read-only. It prints the paths that this mirror holds, and it omits an indexed path that the mirror no longer has.",
    ],
    parameters: Type.Object({
      mechanism: Type.String({
        description: "Entry mechanism id from the static index. Pass the mechanism your task needs.",
      }),
    }),
    async execute(_toolCallId, params, _signal, _onUpdate, ctx) {
      const root = join(ctx.cwd, ENTRY_POINT_ROOT_REL);
      const mechanism = typeof params.mechanism === "string" ? params.mechanism.trim() : "";

      // Step 1: the mirror. Every path below is relative to it, so a missing mirror is a FAIL.
      if (!existsSync(root)) {
        return {
          content: [
            {
              type: "text",
              text:
                `FAIL: script mirror missing - ${ENTRY_POINT_ROOT_REL} is not present in this workspace.\n` +
                `NEXT: run sync_game_scripts, then call locate_entry again.`,
            },
          ],
          details: { ok: false, code: "MIRROR_MISSING", id: mechanism, wroteState: false },
        };
      }

      // Step 2: the id. A miss lists the indexed ids and the general method.
      const entry: EntryPoint | undefined = ENTRY_POINTS.find((e) => e.id === mechanism);
      if (!entry) {
        const ids = ENTRY_POINTS.map((e) => e.id).sort().join(", ");
        return {
          content: [
            {
              type: "text",
              text:
                `FAIL: unknown mechanism '${mechanism}' - the index holds ${ENTRY_POINTS.length} common mechanisms, and it is not the complete set.\n` +
                `index ids (${ENTRY_POINTS.length}): ${ids}\n` +
                `NEXT: choose the entry point in docs/eu5-modding-conventions.md section 7, then locate it in the mirror with a grep for the key that you plan to use, for example ` +
                `\`grep -rln "black_death" ${ENTRY_POINT_ROOT_REL}/\`.`,
            },
          ],
          details: {
            ok: false,
            code: "UNKNOWN_MECHANISM",
            id: mechanism,
            indexIds: ENTRY_POINTS.map((e) => e.id),
            wroteState: false,
          },
        };
      }

      // Step 3: the paths. Only the paths that this mirror holds are printed, and the count of the
      // omitted ones is reported without their names.
      let omitted = 0;
      const lines = [`PASS: ${entry.id} (family: ${entry.family}, evidence: ${entry.evidence})`];

      const dir = existing(root, entry.dir);
      if (!dir) omitted++;
      lines.push(
        section(
          1,
          "REGISTER",
          dir ?? "(not in this mirror - the index is a snapshot, and a game patch can move a path)",
        ),
      );

      // Step 4: the live enum, rescanned from this mirror.
      let liveEnum: string[] | null = null;
      if (entry.liveEnum.length > 0) {
        liveEnum = rescanLiveEnum(root, entry.dir);
        if (liveEnum && liveEnum.length > 0) {
          lines.push(cont(`live enum 'type =' (rescan of this mirror, first-level only): ${liveEnum.join(", ")}`));
        } else if (liveEnum) {
          lines.push(cont("live enum 'type =' (rescan of this mirror, first-level only): (none found)"));
        }
      }

      const infoFile = existing(root, entry.infoFile);
      if (entry.infoFile && !infoFile) omitted++;
      lines.push(
        section(
          2,
          "README",
          infoFile ??
            (entry.infoFile
              ? `(indexed, but not in this mirror: ${entry.infoFile})`
              : "(none - the game ships no readme for this mechanism)"),
        ),
      );
      if (entry.skeleton) {
        lines.push(cont("skeleton:"));
        for (const skeletonLine of entry.skeleton.split(/\r?\n/)) lines.push(cont(skeletonLine));
      }

      const examples = entry.examples.filter((p) => existing(root, p) !== null);
      omitted += entry.examples.length - examples.length;
      if (examples.length === 0) {
        lines.push(
          section(
            3,
            "EXAMPLE",
            entry.examples.length > 0
              ? `(indexed, but not in this mirror: ${entry.examples.join(", ")})`
              : "(none - the vanilla mirror holds no example for this mechanism)",
          ),
        );
      } else {
        lines.push(section(3, "EXAMPLE", examples[0]));
        for (const p of examples.slice(1)) lines.push(cont(p));
      }

      lines.push(section(4, "WIRING", entry.wiring));
      lines.push(section(5, "LOCATE", entry.locateCmd));
      if (omitted > 0) {
        lines.push(
          `NOTE: ${omitted} indexed path(s) are not in this mirror, so they are omitted. The index is a snapshot of one game build.`,
        );
      }

      return {
        content: [{ type: "text", text: lines.join("\n") }],
        details: {
          ok: true,
          id: entry.id,
          family: entry.family,
          evidence: entry.evidence,
          liveEnum: liveEnum ?? entry.liveEnum,
          pathsOmitted: omitted,
          wroteState: false,
        },
      };
    },
  });
}
