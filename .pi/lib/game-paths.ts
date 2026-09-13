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

const NEXT_STEAM = "The player can find it in Steam -> Library -> right-click the game -> Manage -> Browse local files.";

/** 判据 1：这个目录是不是 EU5 的安装目录（看 game/ 或 .metadata/） */
export function checkGameDir(dir: string | null | undefined): PathVerdict {
  const p = dir ? expandHome(dir) : null;
  if (!p)
    return { ok: false, path: null, code: "GAME_DIRECTORY_NOT_FOUND", reason: "no game directory was given", next: `Ask the player for the game install directory, then re-run this with gameDir. ${NEXT_STEAM}` };
  if (GAME_DIR_MARKERS.every((m) => !existsSync(join(p, m))))
    return {
      ok: false,
      path: p,
      code: "GAME_DIRECTORY_NOT_FOUND",
      reason: `neither game/ nor .metadata/ exists under this directory (not an EU5 install directory)`,
      next: `Confirm this is the game install directory, not a save folder or another version. ${NEXT_STEAM}`,
    };
  return { ok: true, path: p };
}

/** 判据 2：mod 安装目标 —— Windows 上 Paradox 的固定位置，用**形状**校验（没有哨兵可看） */
export function checkModInstallDir(dir: string | null | undefined, cfg?: ModRepoConfig): PathVerdict {
  const p = dir ? expandHome(dir) : null;
  if (!p)
    return { ok: false, path: null, code: "TARGET_NOT_FOUND", reason: "no mod install directory was given", next: "Run check_runtime to locate it, or ask the player for the game install directory and verify it with check_game_paths." };
  if (!isAbsolute(p))
    return { ok: false, path: p, code: "TARGET_INVALID", reason: "not an absolute path", next: "Run check_runtime to derive an absolute path, or ask the player." };
  // 先做**与配置无关**的校验（顺序很重要：跳过形状校验时这些也必须生效）
  const st = statSync(p, { throwIfNoEntry: false });
  if (st && !st.isDirectory())
    return { ok: false, path: p, code: "TARGET_INVALID", reason: "this path exists but is not a directory (it is a file)", next: "Ask the player to check for a file with that name; rename or remove it and try again." };
  const rel = cfg?.modInstall?.path;
  // 形状校验是"我们对 Paradox 目录约定的意见"，不是游戏硬规则 → 配置读不到或没写 modInstall.path 时**跳过**
  // （配置缺字段由 set_game_paths / check_runtime 负责报出来）。
  if (typeof rel !== "string" || !rel.trim()) return { ok: true, path: p };
  const norm = (v: string) => v.replace(/\\/g, "/").replace(/\/+$/, "").toLowerCase();
  if (!norm(p).endsWith(norm(rel)))
    return {
      ok: false,
      path: p,
      code: "TARGET_INVALID",
      reason: `the path does not end with ${rel} as declared in mod-repo.json (the Paradox launcher only looks there)`,
      next: "Ask the player to confirm the Paradox launcher mod directory; check_runtime can re-derive it, or omit this argument.",
    };
  // 目录不存在 = 全新机器的正常状态（安装时会创建）
  return { ok: true, path: p };
}

/** 判据 3：Steam Workshop 内容目录（只读参考；必须是 …/steamapps/workshop/content/<appId>） */
export function checkWorkshopDir(dir: string | null | undefined, appId: string): PathVerdict {
  const p = dir ? expandHome(dir) : null;
  if (!p) return { ok: false, path: null, code: "WORKSHOP_NOT_FOUND", reason: "no Workshop directory was given (optional)", next: "Omit it; it is only used to read Workshop content for reference." };
  if (!existsSync(p)) return { ok: false, path: p, code: "WORKSHOP_NOT_FOUND", reason: "the directory does not exist", next: "Omit this argument (the Workshop directory is an optional read-only reference)." };
  // 形状校验：归一化（反斜杠/尾斜杠/**大小写**）后比较 —— Windows 路径不区分大小写，
  // Steam 库路径大小写也可能与常见写法不同，别因为一个字母大小写就判"不是 workshop 目录"。
  // appid 未知（mod-repo.json 读不到）时只校验存在性：形状校验是"当我们知道规则"时才有意义。
  const norm = (v: string) => v.replace(/\\/g, "/").replace(/\/+$/, "").toLowerCase();
  if (appId && !norm(p).endsWith(norm(`/workshop/content/${appId}`)))
    return { ok: false, path: p, code: "WORKSHOP_NOT_FOUND", reason: `the path does not end with workshop/content/${appId} (see the appid in mod-repo.json)`, next: "Confirm this is the Workshop content directory for this game; omit it if unsure." };
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
  if (!modInstallDir) notes.push("FAIL: INVALID_WORKSPACE_CONFIG: mod-repo.json has no modInstall.path");
  const workshopDir = workshopDirFor(gameDir, cfg);
  if (!workshopDir && cfg.game?.steamAppId) notes.push("NOTE: the Workshop directory does not exist, so it was not recorded (optional, read-only reference).");
  return { modInstallDir, workshopDir, notes };
}

/** 文件名兜底用（与其它工具一致的 basename 行为） */
export const baseName = (p: string): string => basename(p);

// ── agent 入口的内部实现（**不注册为工具**）────────────────────────────────────
// 语义：① 给路径 → 验 → 过 → 落库（PASS）② 没过 → 内部发现/派生 → 成功 → 落库 + WARN
//       ③ 内部也失败 → FAIL（不落库）。四个 setter 共用这一份。
export type PathKind = "gameDir" | "workshopDir" | "modInstallDir";

export interface PathOutcome {
  kind: PathKind;
  status: "PASS" | "WARN" | "FAIL";
  given: string | null;
  recorded: string | null;
  reason?: string;
  next?: string;
}

const ASK_PLAYER =
  "Ask the player for the correct path (Steam -> Library -> right-click the game -> Manage -> Browse local files), then call this setter again with it.";

function verifyPath(kind: PathKind, p: string, cfg: ModRepoConfig, appId: string): PathVerdict {
  if (kind === "gameDir") return checkGameDir(p);
  if (kind === "workshopDir") return checkWorkshopDir(p, appId);
  return checkModInstallDir(p, cfg);
}

function deriveFallback(cwd: string, cfg: ModRepoConfig, kind: PathKind): { ok: boolean; path?: string; note?: string; reason?: string } {
  const state = readState(cwd);
  const remembered = checkGameDir(typeof state.gameDir === "string" ? state.gameDir : null);
  let gameDir: string | null = remembered.ok ? (remembered.path as string) : null;
  if (!gameDir) {
    const found = discoverGameDir(cfg, state);
    if (found.platformUnsupported)
      return { ok: false, reason: `${GAME_FOLDER_NAME} is Windows-only, so nothing can be located on this platform` };
    gameDir = found.gameDir;
  }
  if (!gameDir) return { ok: false, reason: "automatic discovery could not find the game either" };
  if (kind === "gameDir") return { ok: true, path: gameDir };
  const derived = pathsFor(gameDir, cfg);
  const path = kind === "workshopDir" ? derived.workshopDir : derived.modInstallDir;
  if (!path) return { ok: false, reason: `${kind} cannot be derived from the game directory` };
  return { ok: true, path, note: derived.notes.join(" ") };
}

function record(cwd: string, cfg: ModRepoConfig, kind: PathKind, path: string): void {
  if (kind === "gameDir") {
    const d = pathsFor(path, cfg);
    writeState(cwd, { gameDir: path, modInstallDir: d.modInstallDir, workshopDir: d.workshopDir ?? null });
    return;
  }
  writeState(cwd, kind === "modInstallDir" ? { modInstallDir: path } : { workshopDir: path });
}

export function setPathWithFallback(cwd: string, cfg: ModRepoConfig, kind: PathKind, givenRaw: string | null): PathOutcome {
  const appId = String(cfg.game?.steamAppId ?? "");
  const given = givenRaw && givenRaw.trim() ? expandHome(givenRaw) : null;
  if (!given)
    return { kind, status: "FAIL", given: null, recorded: null, reason: "no path was given", next: "Pass the path the player provided (this setter requires it)." };

  const v = verifyPath(kind, given, cfg, appId);
  if (v.ok) {
    record(cwd, cfg, kind, given);
    return { kind, status: "PASS", given, recorded: given };
  }

  const fallback = deriveFallback(cwd, cfg, kind);
  if (fallback.ok && fallback.path) {
    record(cwd, cfg, kind, fallback.path);
    return {
      kind,
      status: "WARN",
      given,
      recorded: fallback.path,
      reason: v.reason,
      next: `The path you passed did not pass validation, so ${fallback.path} was located and recorded instead.${fallback.note ? ` ${fallback.note}` : ""} Tell the player which path is actually in use.`,
    };
  }

  return {
    kind,
    status: "FAIL",
    given,
    recorded: null,
    reason: `${v.reason} (${fallback.reason ?? "and it could not be derived either"})`,
    next: ASK_PLAYER,
  };
}

/** 四个 setter 共用的输出格式 */
export function formatPathOutcome(o: PathOutcome): { text: string; ok: boolean; status: PathOutcome["status"] } {
  if (o.status === "PASS")
    return { text: `PASS: recorded ${o.kind} ${o.recorded} (validated).`, ok: true, status: o.status };
  if (o.status === "WARN")
    return {
      text:
        `WARN: the ${o.kind} you passed (${o.given}) did not pass validation - ${o.reason}.\n` +
        `Recorded ${o.recorded} instead.\nNEXT: ${o.next ?? "Tell the player which path is actually in use."}`,
      ok: true,
      status: o.status,
    };
  return {
    text: `FAIL: could not record ${o.kind}.\nGiven: ${o.given ?? "(none)"}\nReason: ${o.reason ?? "unknown"}.\nNEXT: ${o.next ?? ASK_PLAYER}`,
    ok: false,
    status: o.status,
  };
}
