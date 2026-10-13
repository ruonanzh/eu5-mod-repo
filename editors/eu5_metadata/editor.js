/**
 * Editor tool for an EU5 mod's `.metadata/metadata.json`.
 *
 * Uses only the host postMessage bridge (`editor:init`, `editor:readFile`, `editor:save`, and
 * `editor:theme`): no network, no permissions beyond that. Validation mirrors this repo's `validate_mod`
 * (`.pi/extensions/mod-lint.ts`): errors block saving, warnings do not.
 */
const TEXT_FIELDS = ["name", "id", "version", "supported_game_version", "short_description", "picture"];
const STANDARD_FIELDS = ["name", "id", "version", "supported_game_version", "tags"];
const SEMVER_RE = /^\d+\.\d+(\.\d+)?$/;

let writable = false;
let revision = null;
/** Parsed metadata — unknown keys (relationships, game_custom_data, …) are preserved on save. */
let model = {};
let dirty = false;
let seq = 0;
const pending = new Map();

const $ = (id) => document.getElementById(id);
const post = (message) => window.parent.postMessage(message, "*");

function request(type, payload) {
  const requestId = `r${++seq}`;
  return new Promise((resolve) => {
    pending.set(requestId, resolve);
    post({ type, requestId, ...payload });
  });
}

function settle(requestId, value) {
  const resolve = pending.get(requestId);
  if (resolve) {
    pending.delete(requestId);
    resolve(value);
  }
}

/** Mirror mod-lint: `id` non-empty; `version` semver x.x / x.x.x; standard fields and `picture` flagged as warnings. */
function validate(value) {
  const errors = [];
  const warnings = [];
  if (!String(value.id || "").trim()) errors.push("id must be a non-empty string");
  if (typeof value.version === "string" && value.version !== "" && !SEMVER_RE.test(value.version)) {
    errors.push(`version '${value.version}' is not semver x.x or x.x.x`);
  }
  if (typeof value.version !== "string") errors.push("version must be a string");
  for (const field of STANDARD_FIELDS) {
    if (!(field in value)) warnings.push(`missing expected field '${field}'`);
  }
  if (!value.picture) warnings.push('missing "picture" (e.g. "thumbnail.png")');
  return { errors, warnings };
}

function splitTags(raw) {
  return raw
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function readForm() {
  const next = { ...model };
  for (const field of TEXT_FIELDS) next[field] = $(`f-${field}`).value;
  next.tags = splitTags($("f-tags").value);
  return next;
}

function paint() {
  const value = readForm();
  const { errors, warnings } = validate(value);
  const status = $("status");
  status.textContent = errors.length ? "invalid — fix errors to save" : dirty ? "unsaved (Ctrl+S)" : "saved";
  status.dataset.state = errors.length ? "error" : dirty ? "dirty" : "clean";
  $("save").disabled = !writable || errors.length > 0;

  const list = $("issues");
  list.hidden = errors.length + warnings.length === 0;
  list.replaceChildren(
    ...errors.map((message) => Object.assign(document.createElement("li"), { className: "error", textContent: `error: ${message}` })),
    ...warnings.map((message) => Object.assign(document.createElement("li"), { className: "warn", textContent: `warn: ${message}` })),
  );
}

function setDirty(next) {
  dirty = next;
  paint();
}

function fill(value) {
  model = value && typeof value === "object" && !Array.isArray(value) ? { ...value } : {};
  for (const field of TEXT_FIELDS) {
    const current = model[field];
    $(`f-${field}`).value = current == null ? "" : String(current);
  }
  $("f-tags").value = Array.isArray(model.tags) ? model.tags.map((tag) => String(tag)).join(", ") : "";
  dirty = false;
  paint();
}

async function load() {
  const response = await request("editor:readFile", {});
  if (response.code) {
    $("issues").hidden = false;
    $("issues").replaceChildren(
      Object.assign(document.createElement("li"), { className: "error", textContent: `error: ${response.message || "read failed"}` }),
    );
    return;
  }
  revision = response.revision ?? null;
  try {
    fill(JSON.parse(response.data));
  } catch (error) {
    const list = $("issues");
    list.hidden = false;
    list.replaceChildren(
      Object.assign(document.createElement("li"), { className: "error", textContent: `error: metadata.json is not valid JSON (${error.message})` }),
    );
  }
}

async function save() {
  if (!writable) return;
  const next = readForm();
  if (validate(next).errors.length) {
    paint();
    return;
  }
  const response = await request("editor:save", {
    data: `${JSON.stringify(next, null, 2)}\n`,
    baseRevision: revision ?? undefined,
  });
  if (response.code) {
    const list = $("issues");
    list.hidden = false;
    list.replaceChildren(
      Object.assign(document.createElement("li"), {
        className: "error",
        textContent:
          response.code === "CONFLICT"
            ? "error: the file changed on disk — press Reload first, otherwise you would overwrite someone else's edit"
            : `error: ${response.message || "save failed"}`,
      }),
    );
    return;
  }
  revision = response.revision ?? revision;
  model = next;
  setDirty(false);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme === "light" ? "light" : "dark";
}

window.addEventListener("message", (event) => {
  const data = event.data || {};
  switch (data.type) {
    case "editor:init":
      writable = data.mode === "edit" && Boolean(data.writable);
      $("file").textContent = (data.file && data.file.name) || "metadata.json";
      applyTheme(data.theme);
      post({ type: "editor:ready" });
      void load();
      break;
    case "editor:fileContent":
    case "editor:saved":
    case "editor:error":
      settle(data.requestId, data);
      break;
    case "editor:theme":
      applyTheme(data.theme);
      break;
    default:
      break;
  }
});

for (const field of [...TEXT_FIELDS, "tags"]) $(`f-${field}`).addEventListener("input", () => setDirty(true));
$("reload").addEventListener("click", () => void load());
$("save").addEventListener("click", () => void save());
window.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s") {
    event.preventDefault();
    void save();
  }
});
