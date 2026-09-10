import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";
import os from "node:os";

/**
 * check_runtime — EU5 (pdx-script) 运行时契约（mod-repo-guide §4 + game-mod-guide/eu5.md §7）。
 *
 * EU5 mod 无编译/无 SDK，唯一的「运行时」是三个本机目录：
 *   1. gameDir         —— 游戏客户端安装目录（.../steamapps/common/Europa Universalis V，只读参考）
 *   2. workshopDir     —— Steam Workshop 内容目录（<SteamLibrary>/steamapps/workshop/content/3450310）
 *   3. paradoxModsDir  —— Paradox launcher 的 mod 目录（Documents/Paradox Interactive/Europa Universalis V/mod，install_mod 目标）
 *
 * 探测顺序：玩家传入 gameDir → 缓存 → mod-repo.json installDirHint → Steam（注册表 SteamPath +
 * libraryfolders.vdf 各库）。Windows-only：非 win32 直接返回明确的 PARTIAL，不假装成功。
 * 结果写 <workspace>/.gamer-agent.local.json（不进 git）。
 */

function expandHome(p: string): string {
  return p.startsWith("~/") || p === "~" ? join(os.homedir(), p.slice(2)) : p;
}

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
  const vdf = join(steamPath, "steamapps", "libraryfolders.vdf");
  try {
    const text = readFileSync(vdf, "utf8");
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
  // 常见默认路径兜底（无注册表/注册表不可读时）
  for (const p of ["C:\\Program Files (x86)\\Steam", "C:\\Program Files\\Steam"]) {
    if (!roots.includes(p)) roots.push(p);
  }
  return roots;
}

function userDocumentsRoot(): string {
  // Windows：%USERPROFILE%\Documents（Paradox 固定字面路径）
  return join(os.homedir(), "Documents");
}

export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "check_runtime",
    label: "Check Runtime",
    description:
      "Locate the EU5 game install, Steam Workshop content (appid 3450310), and Paradox launcher mod directory on this machine. No SDK/compile needed; discovery only. Windows-only. Writes results to .gamer-agent.local.json; does not install anything or modify mod source files.",
    promptSnippet: "Check runtime readiness and game/mod directory locations",
    promptGuidelines: [
      "Use check_runtime when the game/mod directory locations are unknown or may have changed.",
      "A missing game directory means ask the player for the install path (install_runtime cannot install the game).",
    ],
    parameters: Type.Object({
      gameDir: Type.Optional(
        Type.String({ description: "Game install directory supplied by the player; relative paths use the workspace root. Omit to try cached path, installDirHint, then Steam discovery." }),
      ),
    }),
    async execute(_toolCallId, params, _signal, _onUpdate, ctx) {
      const repoRoot = ctx.cwd;
      const stateFile = join(repoRoot, ".gamer-agent.local.json");

      if (process.platform !== "win32") {
        return {
          content: [
            {
              type: "text",
              text: "PARTIAL: Europa Universalis V is Windows-only; no game files can be located on this platform. Run this on Windows.",
            },
          ],
          details: { ok: false, status: "windows-only", errors: [] },
        };
      }

      let cfg: any;
      try {
        cfg = JSON.parse(readFileSync(join(repoRoot, "mod-repo.json"), "utf8"));
      } catch {
        throw new Error("INVALID_WORKSPACE_CONFIG: Cannot read mod-repo.json. Reopen or update the game workspace.");
      }

      const loadState = () => {
        try {
          return JSON.parse(readFileSync(stateFile, "utf8"));
        } catch {
          return {};
        }
      };
      const state = loadState();

      // 1) gameDir
      const hints = Array.isArray(cfg.game?.installDirHint?.windows) ? cfg.game.installDirHint.windows : [];
      const steamRoots = discoverSteamLibraryRoots();
      const gameCandidates: string[] = [];
      if (params.gameDir) gameCandidates.push(params.gameDir);
      if (state.gameDir) gameCandidates.push(state.gameDir);
      for (const h of hints) gameCandidates.push(h);
      for (const root of steamRoots) gameCandidates.push(join(root, "steamapps", "common", "Europa Universalis V"));

      let gameDir: string | null = null;
      for (const c of gameCandidates) {
        if (typeof c !== "string" || !c.trim()) continue;
        const dir = resolve(repoRoot, expandHome(c.trim()));
        if (existsSync(join(dir, "game")) || existsSync(join(dir, ".metadata"))) {
          gameDir = dir;
          break;
        }
      }

      // 2) workshopDir —— 与 gameDir 同 Steam 库（或任一库）的 workshop/content/3450310
      const appId = String(cfg.game?.steamAppId ?? "3450310");
      let workshopDir: string | null = null;
      const wsCandidates: string[] = [];
      if (gameDir) {
        // gameDir 的库根 = 上溯到含 steamapps 的目录
        let p = gameDir;
        while (p && p !== resolve(p, "..")) {
          if (existsSync(join(p, "steamapps"))) break;
          p = resolve(p, "..");
        }
        if (p) wsCandidates.push(join(p, "steamapps", "workshop", "content", appId));
      }
      for (const root of steamRoots) wsCandidates.push(join(root, "steamapps", "workshop", "content", appId));
      for (const c of wsCandidates) {
        if (existsSync(c)) {
          workshopDir = c;
          break;
        }
      }

      // 3) modInstallDir —— modInstall.relativeTo=userDocuments + path（Paradox 固定字面路径）
      const modInstall = cfg.modInstall ?? {};
      const relPath = typeof modInstall.path === "string" ? modInstall.path : "Paradox Interactive/Europa Universalis V/mod";
      const modInstallDir = join(userDocumentsRoot(), relPath);

      // 写状态
      state.gameDir = gameDir ?? null;
      state.workshopDir = workshopDir ?? null;
      state.modInstallDir = modInstallDir;
      try {
        mkdirSync(repoRoot, { recursive: true });
        writeFileSync(stateFile, `${JSON.stringify(state, null, 2)}\n`);
      } catch {
        /* 状态文件写失败不阻断结果 */
      }

      const errors: string[] = [];
      if (!gameDir) {
        errors.push(
          "FAIL: GAME_DIRECTORY_NOT_FOUND (Europa Universalis V). Ask the player for the game install directory and re-run check_runtime with gameDir, or install the game first.",
        );
      }
      if (!workshopDir) {
        errors.push(
          "WARN: workshop content directory not found (Steam workshop/content/3450310). Workshop assets are optional; game scripting still works.",
        );
      }

      if (errors.some((e) => e.startsWith("FAIL"))) {
        return {
          content: [{ type: "text", text: errors.join("\n") + "\nNEXT: ask the player for the game install path and re-run check_runtime with gameDir." }],
          details: { ...state, ok: false, status: "blocked", errors, nextAction: "GAME_DIRECTORY: ask the player for the install path." },
        };
      }

      const lines = [
        `PASS: gameDir ${gameDir}`,
        workshopDir ? `workshopDir ${workshopDir}` : "workshopDir (not found; optional)",
        `modInstallDir ${modInstallDir}`,
      ];
      return {
        content: [{ type: "text", text: lines.join("\n") }],
        details: { ...state, ok: true, status: "ready", errors, nextAction: "Reuse this discovery result while the installation remains unchanged." },
      };
    },
  });
}
