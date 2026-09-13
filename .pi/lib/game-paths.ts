/**
 * 路径判据 + 运行时状态的共享实现（EU5 版；game repo 内部库，**不是**工具）。
 *
 * 为什么放在 `.pi/lib/`：pi 会自动加载 `.pi/extensions/*.ts` 和 `.pi/extensions/` 下子目录里的 index.ts，
 * 共享模块放进去会被当成扩展加载。这里由各工具用相对路径 import。
 *
 * EU5 与 Duckov 的差别（判据也因此不同）：
 *   · gameDir        游戏目录里应有 `game/` 或 `.metadata/`（EU5 安装布局），Windows-only
 *   · workshopDir    `<SteamLibrary>/steamapps/workshop/content/<appid>`
 *   · modInstallDir  **Paradox 启动器目录**（`~/Documents/Paradox Interactive/Europa Universalis V/mod`），
 *                    与游戏安装位置**无关** → 没有"兄弟目录哨兵"可验，改为**形状校验**
 *                    （必须是绝对路径、不是文件、且以 mod-repo.json 里声明的相对路径结尾）
 *   · 发现          必须扫 Steam（注册表 + libraryfolders.vdf 各库），不是靠 installDirHint
 */
import { existsSync, mkdirSync, readFileSync, renameSync, statSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { basename, isAbsolute, join, resolve } from "node:path";
import os from "node:os";

/** 游戏目录的判据：这些子项之一存在，才算 EU5 的安装目录 */
export const GAME_DIR_MARKERS = ["game", ".metadata"];

export interface ModRepoConfig {
  game?: { name?: string; steamAppId?: string | number; installDirHint?: Record<string, string> };
  modInstall?: { path?: string; relativeTo?: string };
}

export interface RuntimeState {
  gameDir?: string | null;
  workshopDir?: string | null;
  modInstallDir?: string | null;
  [key: string]: unknown;
}

export interface PathVerdict {
  ok: boolean;
  path: string | null;
  /** 失败时的机器可读码（工具把它放进 FAIL 文案的第一段） */
  code?: string;
  reason?: string;
  /** 给 agent 的下一步（可执行、面向玩家可读） */
  next?: string;
}

export const platformKey = (): string =>
  process.platform === "win32" ? "windows" : process.platform === "darwin" ? "mac" : "linux";

export const statePath = (cwd: string): string => join(cwd, ".gamer-agent.local.json");

export function readModRepoConfig(cwd: string): ModRepoConfig {
  return JSON.parse(readFileSync(join(cwd, "mod-repo.json"), "utf8")) as ModRepoConfig;
}

export function readState(cwd: string): RuntimeState {
  try {
    return JSON.parse(readFileSync(statePath(cwd), "utf8")) as RuntimeState;
  } catch {
    return {};
  }
}

/** 读改写 + **原子替换**（写者从 1 个变多个后统一走这里：临时文件 + rename） */
export function writeState(cwd: string, patch: RuntimeState): RuntimeState {
  const next = { ...readState(cwd), ...patch };
  const file = statePath(cwd);
  const tmp = `${file}.tmp-${process.pid}`;
  mkdirSync(join(file, ".."), { recursive: true });
  writeFileSync(tmp, `${JSON.stringify(next, null, 2)}\n`);
  renameSync(tmp, file);
  return next;
}

/** 展开 `~` / `~/…`（历史状态或提示文本里可能出现；不展开会永远验不过） */
export const expandHome = (p: string): string => {
  const t = p.trim();
  if (t !== "~" && !t.startsWith("~/")) return t;
  return join(os.homedir(), t.slice(2));
};

export const resolveUserPath = (cwd: string, p: string): string => resolve(cwd, expandHome(p));

/** Paradox 启动器的 mod 目录（`~/Documents` + mod-repo.json 的 modInstall.path） */
export function modInstallDirFor(cfg: ModRepoConfig): string | null {
  const rel = cfg.modInstall?.path;
  if (typeof rel !== "string" || !rel.trim()) return null;
  return join(os.homedir(), "Documents", rel);
}

const NEXT_STEAM = "玩家可在 Steam → 库 → 右键游戏 → 管理 → 浏览本地文件 里核对游戏目录。";

/** 判据 1：这个目录是不是 EU5 的安装目录（看 game/ 或 .metadata/） */
export function checkGameDir(dir: string | null | undefined): PathVerdict {
  const p = dir ? expandHome(dir) : null;
  if (!p)
    return { ok: false, path: null, code: "GAME_DIRECTORY_NOT_FOUND", reason: "没有给出游戏目录", next: `让玩家提供游戏安装目录，带上 gameDir 重新验证；${NEXT_STEAM}` };
  if (GAME_DIR_MARKERS.every((m) => !existsSync(join(p, m))))
    return {
      ok: false,
      path: p,
      code: "GAME_DIRECTORY_NOT_FOUND",
      reason: `该目录下既没有 game/ 也没有 .metadata/（不像 EU5 的安装目录）`,
      next: `确认这是游戏的安装目录，而不是存档或其它版本目录；${NEXT_STEAM}`,
    };
  return { ok: true, path: p };
}

/** 判据 2：mod 安装目标 —— Windows 上 Paradox 的固定位置，用**形状**校验（没有哨兵可看） */
export function checkModInstallDir(dir: string | null | undefined, cfg?: ModRepoConfig): PathVerdict {
  const p = dir ? expandHome(dir) : null;
  if (!p)
    return { ok: false, path: null, code: "TARGET_NOT_FOUND", reason: "没有给出 mod 安装目录", next: "先运行 try_set_game_paths 定位，或让玩家提供游戏安装目录后重新验证。" };
  if (!isAbsolute(p))
    return { ok: false, path: p, code: "TARGET_INVALID", reason: "不是绝对路径", next: "运行 try_set_game_paths 重新派生出绝对路径，或让玩家提供。" };
  // 先做**与配置无关**的校验（顺序很重要：跳过形状校验时这些也必须生效）
  const st = statSync(p, { throwIfNoEntry: false });
  if (st && !st.isDirectory())
    return { ok: false, path: p, code: "TARGET_INVALID", reason: "该路径存在，但不是目录（是个文件）", next: "让玩家检查该位置是否有同名文件；删除或改名后再试。" };
  const rel = cfg?.modInstall?.path;
  // 形状校验是"我们对 Paradox 目录约定的意见"，不是游戏硬规则 → 配置读不到或没写 modInstall.path 时**跳过**
  // （配置缺字段由 try_set_game_paths / check_runtime 负责报出来）。
  if (typeof rel !== "string" || !rel.trim()) return { ok: true, path: p };
  const norm = (v: string) => v.replace(/\\/g, "/").replace(/\/+$/, "").toLowerCase();
  if (!norm(p).endsWith(norm(rel)))
    return {
      ok: false,
      path: p,
      code: "TARGET_INVALID",
      reason: `路径不以 mod-repo.json 声明的 ${rel} 结尾（Paradox 启动器只看那个位置）`,
      next: "让玩家确认 Paradox 启动器的 mod 目录位置；可用 try_set_game_paths 重新派生，或省略该参数。",
    };
  // 目录不存在 = 全新机器的正常状态（安装时会创建）
  return { ok: true, path: p };
}

/** 判据 3：Steam Workshop 内容目录（只读参考；必须是 …/steamapps/workshop/content/<appId>） */
export function checkWorkshopDir(dir: string | null | undefined, appId: string): PathVerdict {
  const p = dir ? expandHome(dir) : null;
  if (!p) return { ok: false, path: null, code: "WORKSHOP_NOT_FOUND", reason: "没有给出 Workshop 目录（可选）", next: "省略即可；它只用于读取 Workshop 内容做参考。" };
  if (!existsSync(p)) return { ok: false, path: p, code: "WORKSHOP_NOT_FOUND", reason: "目录不存在", next: "省略该参数即可（Workshop 目录是可选的只读参考）。" };
  if (!p.replace(/\\/g, "/").replace(/\/+$/, "").endsWith(`/workshop/content/${appId}`))
    return { ok: false, path: p, code: "WORKSHOP_NOT_FOUND", reason: `路径不以 workshop/content/${appId} 结尾（appid 见 mod-repo.json）`, next: "确认这是这个游戏的 Workshop 内容目录；不确定时可省略该参数。" };
  return { ok: true, path: p };
}

// ── 发现（EU5：注册表 + libraryfolders.vdf 各 Steam 库；Windows-only）──────────────

function readRegistrySteamPath(): string | null {
  try {
    const out = execFileSync("reg", ["query", "HKCU\\Software\\Valve\\Steam", "/v", "SteamPath"], {
      encoding: "utf8",
      windowsHide: true,
      stdio: ["ignore", "pipe", "ignore"],
    });
    const m = out.match(/SteamPath\s+REG_SZ\s+(.+)/i);
    return m ? m[1].trim() : null;
  } catch {
    return null;
  }
}

function parseLibraryFolders(steamPath: string): string[] {
  try {
    const text = readFileSync(join(steamPath, "steamapps", "libraryfolders.vdf"), "utf8");
    const roots: string[] = [];
    const re = /"path"\s+"([^"]+)"/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) roots.push(m[1].replace(/\\\\/g, "\\"));
    return roots;
  } catch {
    return [];
  }
}

function discoverSteamLibraryRoots(): string[] {
  const roots: string[] = [];
  const steamPath = readRegistrySteamPath();
  if (steamPath) {
    roots.push(steamPath);
    roots.push(...parseLibraryFolders(steamPath));
  }
  for (const p of ["C:\\Program Files (x86)\\Steam", "C:\\Program Files\\Steam"]) {
    if (!roots.includes(p)) roots.push(p);
  }
  return roots;
}

export const GAME_FOLDER_NAME = "Europa Universalis V";

/** 候选游戏目录：显式 → 缓存 → 平台提示（若有）→ 各 Steam 库的 steamapps/common/<游戏名> */
export function gameDirCandidates(cfg: ModRepoConfig, state: RuntimeState, explicit?: string): string[] {
  const out: string[] = [];
  const push = (v: unknown) => {
    if (typeof v === "string" && v.trim()) out.push(expandHome(v));
  };
  if (explicit?.trim()) push(explicit);
  push(state.gameDir);
  push(cfg.game?.installDirHint?.windows); // EU5 是 Windows-only；提示键也只会有 windows
  if (process.platform === "win32") {
    for (const root of discoverSteamLibraryRoots()) out.push(join(root, "steamapps", "common", GAME_FOLDER_NAME));
  }
  return [...new Set(out)];
}

/** 依次验证候选（**发现 ≠ 信任**：每个候选都要过 checkGameDir），返回第一个通过的 */
export function discoverGameDir(
  cfg: ModRepoConfig,
  state: RuntimeState,
  explicit?: string,
): { gameDir: string | null; tried: Array<{ path: string; reason?: string }>; platformUnsupported: boolean } {
  const tried: Array<{ path: string; reason?: string }> = [];
  const platformUnsupported = process.platform !== "win32";
  if (platformUnsupported) {
    // 非 Windows 上 EU5 根本无法定位：如实说明，不假装成功
    return { gameDir: null, tried, platformUnsupported };
  }
  for (const c of gameDirCandidates(cfg, state, explicit)) {
    const v = checkGameDir(c);
    if (v.ok) return { gameDir: v.path ?? c, tried, platformUnsupported };
    tried.push({ path: c, reason: v.reason });
  }
  return { gameDir: null, tried, platformUnsupported };
}

/** Workshop 目录（与 gameDir 同库或任一库） */
export function workshopDirFor(gameDir: string, cfg: ModRepoConfig): string | null {
  const appId = String(cfg.game?.steamAppId ?? "");
  if (!appId || !gameDir) return null;
  let p = gameDir;
  while (p && p !== resolve(p, "..") && !existsSync(join(p, "steamapps"))) p = resolve(p, "..");
  if (!p) return null;
  const candidate = join(p, "steamapps", "workshop", "content", appId);
  return existsSync(candidate) ? candidate : null;
}

/** 由已确认的 gameDir 派生其余路径（Workshop 只读参考，不存在就不记） */
export function pathsFor(
  gameDir: string,
  cfg: ModRepoConfig,
): { modInstallDir: string | null; workshopDir: string | null; notes: string[] } {
  const notes: string[] = [];
  const modInstallDir = modInstallDirFor(cfg);
  if (!modInstallDir) notes.push("FAIL: INVALID_WORKSPACE_CONFIG: mod-repo.json 缺少 modInstall.path");
  const workshopDir = workshopDirFor(gameDir, cfg);
  if (!workshopDir && cfg.game?.steamAppId) notes.push("NOTE: Workshop 目录不存在，未记入状态（可选、只读参考）。");
  return { modInstallDir, workshopDir, notes };
}

/** 文件名兜底用（与其它工具一致的 basename 行为） */
export const baseName = (p: string): string => basename(p);
