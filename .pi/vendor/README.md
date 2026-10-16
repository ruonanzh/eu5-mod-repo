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
counts whole blocks and reads higher: the installed tree on this machine reads 16.4 MB under `du`, and
this copy reads 7.8 MB.

Baseline, in file bytes: the published package holds 1331 files of 11.95 MB, and the six runtime
dependencies add 521 files of 8.47 MB. The same content set is 1852 files of 20.42 MB. This copy is
**580 files of 6.66 MB**, because it also drops four of those six dependencies.

Do not measure the installed tree. An install tree also holds the nested `node_modules/undici` that
npm places inside the package, and that is 214 files of 1.90 MB. The installed tree therefore reads
1545 files of 13.85 MB, and a sum that adds the dependencies to it counts those 214 files twice.

The real gain is the file count, because most of what leaves is many small files.

The declaration size is measurable. `node .pi/vendor/tools/measure-tool-context.mjs --host <the Pi
install's node_modules>` reports **1 tool and 3,255 characters** for this copy, against 4 tools and
5,438 characters for the published package. That tool is the probe the size claims in this file rest
on, so run it after any change to the copy.

## What this copy keeps

| Part | Size | Reason |
| --- | --- | --- |
| `index.js` and the four worker scripts | 10 KB / 5 files | The package entry and the workers it loads. The workers are `async-retention-discovery-worker.mjs`, `inspector-runner.mjs`, `runner-peer-loader.mjs`, and `runner-peer-preload.mjs`. |
| `src/**/*.js` | 5.02 MB / 320 files | The extension code. `index.js` re-exports it, so it is runtime code, not source. |
| `package.json` and `LICENSE` | 4.6 KB / 2 files | Module resolution and the MIT notice. |
| `node_modules/` | 1.25 MB / 243 files | The two dependencies this copy needs: `acorn` 8.18.0, which parses the workflow scripts, and `yaml` 2.8.3, which parses the profile frontmatter. The other four are in the removal table below. |

The five Pi packages in `peerDependencies` (`@earendil-works/pi-ai`, `@earendil-works/pi-agent-core`,
`@earendil-works/pi-coding-agent`, `@earendil-works/pi-tui`, and `typebox`) come from the host. This
copy does not carry them.

Both remaining dependencies sit on a path this copy uses: `acorn` parses a workflow script, and `yaml`
parses the profile frontmatter. A load test that removes either one fails.

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
| `node_modules/undici` | 1.90 MB / 214 files | One dynamic `require` in the background HTTP dispatcher uses it (`src/runs/background/runner-http-dispatcher.js:102`). This copy never starts a background run, so the path is unreachable. |
| `node_modules/jiti` | 1.75 MB / 16 files | The background runner looks for a `jiti` CLI to load the host entry (`src/runs/background/async-execution.js:89-108`). Background runs do not start here. |
| `node_modules/@js-temporal/polyfill` | 2.98 MB / 38 files | The calendar schedule implementation imports it lazily (`src/runs/background/calendar-schedule.js:5`). Patch 9 turns scheduled runs off, so nothing reaches it. |
| `node_modules/jsbi` | 0.58 MB / 10 files | A dependency of the polyfill. |

The list covers the files the package owns and the four dependencies it does not need. A path that
would need one of the four now fails with `MODULE_NOT_FOUND` instead of the clear message above. Patch
11 makes the calendar path name its cause, and `package.json` declares only the two dependencies this
copy ships, so nothing resolves a dependency that is not here. The remaining
dependency trees travel as published, and keep their own sources and maps: 156 `.ts` files and 6
`.map` files stay inside `node_modules/acorn` and `node_modules/yaml`.

**A deep trim does not pay.** This repository measured one and rejected it. The functional subsystems
under `src/` (`tui`, `missions`,
`watchdog`, `inspectors`, `intercom`, `slash`, and the async machinery in `src/runs/background/`) all
stay. A reachability scan of `src/**` (320 `.js` files, plus the entry and the four workers)
reports 302 reachable files and 24 unreachable ones of 0.40 MB, and 58 of the reachable files import
`src/runs/background/` — including the core `src/runs/foreground/subagent-executor.js`, the config
loader, the TUI renderers, and the workflow runner. The 24 "unreachable" files are still spawned by
computed paths (`async-retention-discovery-worker.mjs`, `inspector-runner.mjs`, and
`runner-peer-preload.mjs` are all named by path strings). Removing a subsystem would therefore mean
rewriting the package, and the rule for any deletion stays: the deletion must pass a load plus one
dispatch.

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

The copy carries nine local patches. Every patch names its file and line in the code as well.

1. Remove the `//# sourceMappingURL=` line from the package's own `.js` files, because the matching
   maps are gone. 325 files, no behaviour change. The dependency trees keep their own maps, so this
   patch does not touch them.
2. `src/extension/schemas.js:267` — the `async` parameter is not offered to the model, because this
   copy always dispatches in the foreground.
3. `src/runs/foreground/subagent-executor.js:7525` and `:7064` — always dispatch in the foreground, and
   never request a background run. `src/extension/tool-description.js:13,16,21,38` — the text the
   model reads describes the foreground form only. It names no background run, no `bg_wait`, and no
   `async: true`.
4. `src/shared/disabled-features.js:66` — the management surface this copy hides from the model is a
   fixed list, because the agent directory cannot set it.
5. `src/extension/index.js:650` — `bg_wait` is not registered: a foreground dispatch returns the answer
   in the receipt.
6. `src/extension/index.js:1088` — the `subagents_enable` loader is not registered, so `subagent` is
   active from the first request.
7. `src/extension/index.js:631` and `src/intercom/native-supervisor-channel.js:14` — the supervisor
   tools are not offered. A child answers in its own receipt.
8. `src/runs/foreground/subagent-executor.js:2560` and `:4046` — every child and every single dispatch
   runs in the foreground, whatever the profile or the caller asks for.
9. `src/extension/config.js:262` — `scheduledRuns.enabled` is `false` unless the agent directory turns
   it on. That is what makes the calendar dependency unreachable.
10. `src/runs/background/async-execution.js:143` — the receipt text says the result arrives in this
    session. It names no detached run and no `bg_wait`. Patch 5 removes the tool and patch 3 never
    opens a background run, so the old text named things this copy cannot do.
11. `src/runs/background/calendar-schedule.js:3` and `package.json` — a calendar call that needs the
    missing `@js-temporal/polyfill` fails with a message that names the cause, and the declared
    dependency list holds only `acorn` and `yaml`.

## How to refresh

1. Run `npm pack pi-subagents@0.78.0`.
2. Unpack the tarball into this directory.
3. Remove the parts in the table **What this copy removes**, including the four dependencies.
4. Copy `acorn` 8.18.0 and `yaml` 2.8.3 from the Pi npm directory into `node_modules/`.
5. Apply local patches 1 to 11 again. Every patch carries a `Vendored patch` comment in the code, so
   `grep -rn "Vendored patch" src/` finds them all. Patch 11 also edits `package.json`.
6. Run the load check below, then run `node .pi/vendor/tools/measure-tool-context.mjs --host <the Pi
   install's node_modules>` and record the new number in this file.

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
`node_modules/@earendil-works/pi-coding-agent`. **This key has no consumer in this copy today:** patches
3 and 8 keep every dispatch in the foreground, so no background run starts, and nothing reads the key.
The key stays documented for a future background form.
