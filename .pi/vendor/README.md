# The vendored pi-subagents package

This directory holds a trimmed copy of the `pi-subagents` package. The repository declares it in
`.pi/settings.json`, so a session in this repository gets the `subagent` tool with no install step.
The product does not install Pi packages by itself.

## Source

- Package: `pi-subagents`
- Version: `0.78.0`
- License: MIT. The license text is at `pi-subagents/LICENSE`.
- Origin: the npm package `pi-subagents@0.78.0`.

## Why the copy is trimmed

The published package is 17 MB (its own directory, measured with `du`). Most of it is material this
repository never loads: TypeScript sources, source maps, the upstream documentation, the upstream
agent profiles, and the upstream skills and prompt templates.

## What is kept

| Part | Size | Reason |
| --- | --- | --- |
| `index.js` and four worker scripts | 10 KB / 7 files | The package entry and the workers it loads. The workers are `async-retention-discovery-worker.mjs`, `inspector-runner.mjs`, `runner-peer-loader.mjs`, and `runner-peer-preload.mjs`. |
| `src/**/*.js` | 4.80 MB / 320 files | The extension code. `index.js` re-exports it, so it is runtime code, not source. |
| `package.json` and `LICENSE` | small | Module resolution and the MIT notice. |
| `node_modules/` | 8.33 MB / 525 files | The runtime dependencies: `@js-temporal/polyfill` 0.5.1, `jsbi` 4.3.2, `acorn` 8.18.0, `jiti` 2.7.0, `undici` 8.10.2, and `yaml` 2.8.3. `jsbi` is a dependency of the polyfill. |

The five Pi packages in `peerDependencies` (`@earendil-works/pi-ai`, `@earendil-works/pi-agent-core`,
`@earendil-works/pi-coding-agent`, `@earendil-works/pi-tui`, and `typebox`) come from the host. They
are not copied here.

`@js-temporal/polyfill` and `acorn` are candidates for a later trim. One file imports each of them.
Both imports sit on paths this repository does not use today.

## What is dropped

| Part | Size | Reason |
| --- | --- | --- |
| `src/**/*.map` | 4.96 MB / 640 files | Source maps. |
| `src/**/*.ts` | 0.69 MB / 320 files | TypeScript sources. The runtime loads the `.js` files. |
| `docs/`, `README.md`, `CHANGELOG.md` | 0.76 MB | Upstream documentation. This file records what matters here. |
| `skills/` | 0.13 MB | The upstream `council-mode` and `pi-subagents` skills. |
| `agents/` | 0.02 MB | The upstream profiles, which include profiles for the Claude Code, Codex, and Cursor CLIs. This repository keeps its own profiles in `.pi/agents/`. |
| `prompts/` | 0.02 MB | The upstream workflow prompt templates. |
| `install.mjs`, `index.d.ts`, `index.d.ts.map` | 0.40 MB | The npm installer and the type declarations. |

Measured size of this copy: **13.13 MB in 852 files**.

## Local patches

1. The `//# sourceMappingURL=` line is removed from every `.js` file, because the maps are gone.
   The patch touches 325 files and changes no behaviour.

## How to refresh

1. Run `npm pack pi-subagents@0.78.0`.
2. Unpack the tarball into this directory.
3. Delete the parts in the table **What is dropped**.
4. Copy the six runtime dependencies from the Pi npm directory into `node_modules/`.
5. Apply local patch 1 again.
6. Run the load check below.

To move to a newer version, change the version wherever it appears, then repeat these steps. Record
the new version and the new size in this file.

## The load check

The copy is proven in two places. A change to the copy is not complete until both pass.

**In the development environment.** Use an isolated agent directory, so the globally installed
`pi-subagents` does not load, and point `-e` at this directory:

```bash
PI_CODING_AGENT_DIR=<a temp agent directory with auth.json and settings.json> \
  pi -p --no-session -e <this repository>/.pi/vendor/pi-subagents \
  "Spawn the agent profile <a probe profile> with the task: run the probe."
```

The probe profile lives in a scratch `.pi/agents/` directory outside this repository. Its reply must
carry a value that the calling prompt does not contain, so an echo cannot pass as a spawn.

**In the product.** Open a session in this repository, and confirm three things: the `subagent` tool
is present, `entry-scout` and `mod-reviewer` both appear as spawnable profiles, and one dispatch
succeeds.
