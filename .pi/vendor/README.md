# The vendored pi-subagents package

This directory holds a trimmed copy of the `pi-subagents` package. The repository declares it in
`.pi/settings.json`, so a session in this repository gets the `subagent` tool with no install step.
The product does not install Pi packages by itself.

## Source

- Package: `pi-subagents`
- Version: `0.78.0`
- License: MIT. The license text sits at `pi-subagents/LICENSE`.
- Origin: the npm package `pi-subagents@0.78.0`.

## Why this copy is smaller than the published package

Most of the published package is material this repository never loads: TypeScript sources, source
maps, the upstream documentation, the upstream agent profiles, and the upstream skills and prompt
templates.

**Measure the same way, or the numbers lie.** This file reports file bytes in MB. A `du` number
counts whole blocks and reads higher: the installed tree on this machine reads 17 MB under `du`, and
this copy reads 15 MB.

Baseline, in file bytes: the published package holds 1331 files of 11.95 MB, and the six runtime
dependencies add 521 files of 8.47 MB. The same content set is 1852 files of 20.42 MB. This copy is
**848 files of 13.51 MB**.

Do not measure the installed tree. An install tree also holds the nested `node_modules/undici` that
npm places inside the package, and that is 214 files of 1.90 MB. The installed tree therefore reads
1545 files of 13.85 MB, and a sum that adds the dependencies to it counts those 214 files twice.

The real gain is the file count, because most of what leaves is many small files.

## What this copy keeps

| Part | Size | Reason |
| --- | --- | --- |
| `index.js` and the four worker scripts | 10 KB / 5 files | The package entry and the workers it loads. The workers are `async-retention-discovery-worker.mjs`, `inspector-runner.mjs`, `runner-peer-loader.mjs`, and `runner-peer-preload.mjs`. |
| `src/**/*.js` | 5.02 MB / 320 files | The extension code. `index.js` re-exports it, so it is runtime code, not source. |
| `package.json` and `LICENSE` | 4.6 KB / 2 files | Module resolution and the MIT notice. |
| `node_modules/` | 8.47 MB / 521 files | The runtime dependencies: `@js-temporal/polyfill` 0.5.1, `jsbi` 4.3.2, `acorn` 8.18.0, `jiti` 2.7.0, `undici` 8.10.2, and `yaml` 2.8.3. `jsbi` is a dependency of the polyfill. The version of `undici` matches the exact pin in `package.json`. |

The five Pi packages in `peerDependencies` (`@earendil-works/pi-ai`, `@earendil-works/pi-agent-core`,
`@earendil-works/pi-coding-agent`, `@earendil-works/pi-tui`, and `typebox`) come from the host. This
copy does not carry them.

`@js-temporal/polyfill` and `acorn` are candidates for a later trim. One file imports each of them.
Both imports sit on paths this repository does not use today.

## What this copy removes

| Part | Size | Reason |
| --- | --- | --- |
| `src/**/*.map` | 5.20 MB / 640 files | Source maps. |
| `src/**/*.ts` | 0.73 MB / 320 files | TypeScript sources. The runtime loads the `.js` files. |
| `docs/`, `README.md`, `CHANGELOG.md` | 0.79 MB / 12 files | Upstream documentation. This file records what matters here. |
| `skills/` | 0.14 MB / 9 files | The upstream `council-mode` and `pi-subagents` skills. |
| `agents/` | 0.02 MB / 13 files | The upstream profiles, which include profiles for the Claude Code, Codex, and Cursor CLIs. This repository keeps its own profiles in `.pi/agents/`. |
| `prompts/` | 0.02 MB / 6 files | The upstream workflow prompt templates. |
| `install.mjs`, `index.d.ts`, `index.d.ts.map`, `index.js.map` | 4 KB / 4 files | The npm installer, the type declarations, and the entry source map. |

The list covers the files the package owns. It does not touch the dependency trees, which travel as
published. Those trees keep their own sources and maps: 156 `.ts` files and 6 `.map` files stay
inside `node_modules/`.

**The deep trim is not done.** The functional subsystems under `src/` (`tui`, `missions`, `watchdog`,
`inspectors`, `intercom`, `slash`) are all still there. The rule for a deep cut is that the deletion
must pass a load plus one dispatch, and the remaining gain does not pay for that risk yet.

## References to parts that this copy removes

Four places in the copy still name a part that this copy does not carry. This file records all of
them, and patches none.

- `src/extension/subagent-guide.js:24-26` lists the files of the `council` guide topic. They live
  under `skills/council-mode/` and `skills/pi-subagents/`, which this copy removes. The guide topic
  therefore cannot read them. This repository does not use that topic.
- `src/runs/shared/model-resolution.js:32` is an error message that points at
  `docs/configuration.md#modelresponsealiases`. This copy leaves the docs out, so the pointer is dead
  text.
- `src/extension/upgrade-notice.js:11` takes `CHANGELOG.md` as a default argument. That file sits in
  the removal table. `src/extension/index.js:82` imports the function, and `:1083` calls it on every
  `session_start`. The consequence is small: the function returns early without a UI (`:12`), it
  returns early when the version did not change (`:18`), and it writes its state file before it reads
  the changelog (`:20`), so it tries once. A missing file prints one `console.error` from
  `index.js:1083`, and the upgrade notice never appears.
- `package.json` points `bin` at `install.mjs` (`:17`) and `types` at `./index.d.ts` (`:60` and
  `:63`). Both files are gone. Nothing loads them at runtime.

## Local patches

1. The patch removes the `//# sourceMappingURL=` line from the package's own `.js` files, because the
   matching maps are gone. The patch touches 325 files and changes no behaviour. The dependency trees
   keep their own maps, so this patch does not touch them.

## How to refresh

1. Run `npm pack pi-subagents@0.78.0`.
2. Unpack the tarball into this directory.
3. Remove the parts in the table **What this copy removes**.
4. Copy the six runtime dependencies from the Pi npm directory into `node_modules/`. Take `undici`
   from the copy that the Pi npm directory nests inside `pi-subagents`, so the version matches the
   pin.
5. Apply local patch 1 again.
6. Run the load check below.

To move to a newer version, change the version wherever it appears, then repeat these steps. Record
the new version and the new size in this file.

## The load check

Prove the copy in two places. Treat a change to the copy as incomplete until both pass.

**In the development environment.** Use an isolated agent directory, so the globally installed
`pi-subagents` does not load, and point `-e` at this directory:

```bash
PI_CODING_AGENT_DIR=<a temp agent directory with auth.json and settings.json> \
  pi -p --no-session -e <this repository>/.pi/vendor/pi-subagents \
  "Spawn the agent profile <a probe profile> with the task: run the probe."
```

The probe profile lives in a scratch `.pi/agents/` directory outside this repository. Its reply must
carry a value that the calling prompt does not contain, so an echo cannot pass as a spawn.

**In the product.** Open a session in this repository, and check three things: the `subagent` tool
appears, `entry-scout` and `mod-reviewer` both appear as spawnable profiles, and one dispatch
succeeds.

## The host package root

The background code of this copy reads `PI_SUBAGENTS_PI_CODING_AGENT_PACKAGE_ROOT` at import time
(`src/runs/background/async-execution.js:65`). The value is the directory of the host package
`@earendil-works/pi-coding-agent`. The code tries three sources in order: the script path in `argv`,
then this key, then the npm install directory (`src/runs/background/async-execution.js:79`).

A background child needs this root to resolve its peer aliases
(`src/runs/background/runner-aliases.js:138`). When the code finds no root, the dispatch fails with
the message `Background children require a supported standalone Pi host or the installed npm package
(@earendil-works/pi-coding-agent); neither is available.` A foreground dispatch still works.

The pi-desktop main process can set this key before it forks the agent host
(`src/main/host-manager.ts:280`). The value is the host package directory
`node_modules/@earendil-works/pi-coding-agent`. The product does not set it today:
this repository dispatches foreground children only, and the key matters only for
the background form.
