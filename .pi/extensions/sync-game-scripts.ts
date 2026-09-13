import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";
import { existsSync, mkdirSync, copyFileSync, statSync, readdirSync, unlinkSync, rmdirSync } from "node:fs";
import { join, relative, resolve, dirname, sep } from "node:path";
import { checkGameDir, checkWorkshopDir, readModRepoConfig, readState } from "../lib/game-paths";

/**
 * sync_game_scripts — 把 vanilla 的 game/workshop 文本/定义脚本镜像到 workspace 的 game-scripts/，
 * 供 agent 做 mod 时参考（grep vanilla 对象名、判断 INJECT/REPLACE 覆盖、查 localization key 等）。
 *
 * 只复制文本/定义后缀（KEEP_SUFFIXES allowlist，与 cursor main 的 sync 工具一致）；纹理/网格/音频等
 * 二进制永不复制。源路径来自 check_runtime 写入的 .gamer-agent.local.json（gameDir/workshopDir）。
 * 幂等：每次执行都重新遍历源，只复制新增/变化（size+mtime）的文件，并删除源里已不存在的
 * stale 文件。game-scripts/ 不进 git。
 */

const KEEP_SUFFIXES = new Set([
  ".yml", ".yaml", ".json", ".txt", ".gui", ".asset", ".schematic", ".particle2",
  ".info", ".compound", ".editordata", ".animsm", ".shader", ".fxh", ".csv", ".xml",
  ".md", ".py", ".lines", ".shadernodes", ".shadergraph", ".aggregate", ".shortcuts",
  ".settings", ".guianimset", ".guistateset", ".font", ".ugraph", ".map", ".mtl",
  ".dep", ".profile", ".anchor",
]);
const EXCLUDE_DIR_NAMES = new Set([".git", ".idea", ".vs"]);

// 生成缓存/大数据目录（后缀是文本但内容非 mod 参考脚本）：地图网格、声音库、地形缓存、引擎二进制。
const EXCLUDE_REL_MARKERS = ["gfx/map/map_objects/generated", "sound/banks", "terrain_cache", "binaries"];

function shouldExclude(rel: string): boolean {
  const r = rel.toLowerCase();
  return EXCLUDE_REL_MARKERS.some((m) => r.includes(m));
}

function toPosix(p: string): string {
  return p.split(sep).join("/");
}

function walkFiles(root: string): Array<{ abs: string; rel: string }> {
  const out: Array<{ abs: string; rel: string }> = [];
  const walk = (dir: string): void => {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      if (EXCLUDE_DIR_NAMES.has(e.name)) continue;
      const abs = join(dir, e.name);
      const rel = toPosix(relative(root, abs));
      if (shouldExclude(rel)) continue;
      if (e.isDirectory()) walk(abs);
      else if (e.isFile()) out.push({ abs, rel });
    }
  };
  walk(root);
  return out;
}

function fileDiffers(src: string, dst: string): boolean {
  try {
    const ss = statSync(src);
    const ds = statSync(dst);
    if (ss.size !== ds.size) return true;
    if (Math.abs(ss.mtimeMs - ds.mtimeMs) > 2000) return true;
    return false;
  } catch {
    return true;
  }
}

function removeEmptyDirsUnder(root: string): void {
  const walkUp = (dir: string): void => {
    let entries;
    try {
      entries = readdirSync(dir);
    } catch {
      return;
    }
    for (const e of entries) {
      const p = join(dir, e);
      try {
        if (statSync(p).isDirectory()) walkUp(p);
      } catch {
        /* ignore */
      }
    }
    if (dir !== root) {
      try {
        if (readdirSync(dir).length === 0) rmdirSync(dir);
      } catch {
        /* ignore */
      }
    }
  };
  walkUp(root);
}

/** 把 srcRoot 下 allowlist 文件镜像到 dstRoot；返回 { copied, staleRemoved }。 */
function syncTree(srcRoot: string, dstRoot: string): { copied: number; staleRemoved: number } {
  const srcFiles = walkFiles(srcRoot);
  const srcRels = new Set<string>();
  let copied = 0;

  for (const { abs, rel } of srcFiles) {
    srcRels.add(rel);
    const dot = rel.lastIndexOf(".");
    if (dot < 0 || !KEEP_SUFFIXES.has(rel.slice(dot).toLowerCase())) continue;
    const dst = join(dstRoot, rel);
    if (!existsSync(dst) || fileDiffers(abs, dst)) {
      mkdirSync(dirname(dst), { recursive: true });
      copyFileSync(abs, dst);
      copied += 1;
    }
  }

  let staleRemoved = 0;
  if (existsSync(dstRoot)) {
    for (const { abs, rel } of walkFiles(dstRoot)) {
      if (!srcRels.has(rel)) {
        try {
          unlinkSync(abs);
          staleRemoved += 1;
        } catch {
          /* ignore */
        }
      }
    }
    removeEmptyDirsUnder(dstRoot);
  }
  return { copied, staleRemoved };
}

/** 源不存在时：把这份镜像整体清掉（旧的参考内容不该继续冒充"当前游戏内容"） */
function pruneTree(dstRoot: string): { copied: number; staleRemoved: number } {
  let removed = 0;
  if (existsSync(dstRoot)) {
    for (const { abs } of walkFiles(dstRoot)) {
      try {
        unlinkSync(abs);
        removed += 1;
      } catch {
        /* ignore */
      }
    }
    removeEmptyDirsUnder(dstRoot);
  }
  return { copied: 0, staleRemoved: removed };
}

export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "sync_game_scripts",
    label: "Sync Game Scripts",
    description:
      "Copy EU5 vanilla game/ and workshop/ text-definition scripts into workspace game-scripts/ for reference while authoring mods (check vanilla object names, INJECT/REPLACE targets, localization keys). Text/definition suffixes only; binaries are never copied. Requires check_runtime to have located the game first.",
    promptSnippet: "Mirror vanilla game scripts into game-scripts/ for reference",
    promptGuidelines: [
      "Use sync_game_scripts before checking whether an object overrides vanilla or what a vanilla key looks like.",
      "Run check_runtime first; sync_game_scripts fails with a NEXT pointing at check_runtime when the game directory is unknown.",
    ],
    parameters: Type.Object({}),
    async execute(_toolCallId, _params, _signal, _onUpdate, ctx) {
      const repoRoot = ctx.cwd;
      // 状态读取与"游戏目录是否可用"的判据都走 lib（与 check_game_paths / try_set_game_paths /
      // install_mod 同一份）：这里原本自己 JSON.parse + 只 existsSync，等于又实现了一遍同一判据。
      const state = readState(repoRoot);
      const gameVerdict = checkGameDir(typeof state.gameDir === "string" ? state.gameDir : null);
      if (!gameVerdict.ok) {
        return {
          content: [
            {
              type: "text",
              text: `FAIL: ${gameVerdict.reason}. NEXT: run check_runtime first to locate the EU5 install, then re-run sync_game_scripts.`,
            },
          ],
          details: { ok: false, errors: [gameVerdict.code ?? "GAME_DIRECTORY_NOT_FOUND"] },
        };
      }
      const gameDir = gameVerdict.path as string;
      const workshopDir = typeof state.workshopDir === "string" ? state.workshopDir : null;
      let steamAppId = "";
      try {
        steamAppId = String(readModRepoConfig(repoRoot).game?.steamAppId ?? "");
      } catch {
        /* 配置读不到：下面的 workshop 形状校验会因此失败，按拒绝处理 */
      }

      const destRoot = join(repoRoot, "game-scripts");
      const g = syncTree(gameDir, join(destRoot, "game"));
      // Workshop 源可能消失（玩家取消订阅、目录被删）→ **不能静默留着旧镜像**：它会被当成
      // "当前游戏内容"继续给 agent 参考（B20）。但要与"路径未知"区分开：
      //   · 路径已知但已不存在 → 源消失 → 清掉镜像并如实说明
      //   · 路径未知（没跑过 check_runtime）→ 不动镜像（可能是先前跑出来的有效镜像）
      const wsVerdict = checkWorkshopDir(workshopDir, steamAppId);
      const workshopGone = typeof workshopDir === "string" && !existsSync(workshopDir);
      const w = wsVerdict.ok
        ? syncTree(wsVerdict.path as string, join(destRoot, "workshop"))
        : workshopGone
          ? pruneTree(join(destRoot, "workshop"))
          : { copied: 0, staleRemoved: 0 };

      const lines = [
        `PASS: mirrored ${g.copied + w.copied} text/definition file(s) into ${toPosix(relative(repoRoot, destRoot))}/ (game: ${g.copied}, workshop: ${w.copied})`,
      ];
      if (g.staleRemoved + w.staleRemoved > 0) {
        lines.push(`removed ${g.staleRemoved + w.staleRemoved} stale file(s) no longer present in the source.`);
      }
      if (workshopDir && !wsVerdict.ok && !workshopGone) {
        lines.push(
          `NOTE: the workshop directory was rejected (${wsVerdict.reason}); the existing mirror under game-scripts/workshop was left untouched.`,
        );
      }
      if (workshopGone) {
        lines.push(
          `NOTE: the workshop source is gone (unsubscribed or removed); its mirrored copy under game-scripts/workshop was cleared (${w.staleRemoved} file(s)) instead of being left behind.`,
        );
      }
      return {
        content: [{ type: "text", text: lines.join("\n") }],
        details: { ok: true, copied: g.copied + w.copied, staleRemoved: g.staleRemoved + w.staleRemoved, workshopSourceMissing: workshopGone },
      };
    },
  });
}
