/**
 * EU5 mod page editor.
 *
 * Shows a generated mod page (a `*.modpage.html` file) and lets the player mark it up:
 * select text, then comment on it, mark it for deletion, or write a replacement.
 *
 * Reads and writes only the file the host opened. The marks land in the same HTML file, inside a
 * `<script type="application/json" id="pi-page-marks">` block at the end of the body, together with
 * the values of the page's named form controls. The agent finds them there when the player says the
 * page is marked.
 *
 * The host bridge is the one in EditorHost.tsx: `editor:init` and `editor:theme` arrive here;
 * `editor:readFile` and `editor:save` go back out.
 */
const ANNOTATIONS_ID = "pi-page-marks";
const SCRIPT_RE = new RegExp(`<script[^>]*id="${ANNOTATIONS_ID}"[^>]*>[\\s\\S]*?</script>\\s*`, "i");
const BLOCK_RE = new RegExp(`<script[^>]*id="${ANNOTATIONS_ID}"[^>]*>([\\s\\S]*?)</script>`, "i");

const state = document.getElementById("state");
const count = document.getElementById("count");
const saveButton = document.getElementById("save");
const removeButton = document.getElementById("remove");
const page = document.getElementById("page");
const scroll = document.getElementById("scroll");
const toolbar = document.getElementById("toolbar");
const promptForm = document.getElementById("prompt");
const promptLabel = document.getElementById("promptLabel");
const promptText = document.getElementById("promptText");

let revision = null;
let source = "";
let writable = false;
let marks = [];
let baseline = {};
let pendingKind = null;
let selectedMarkId = null;
let seq = 0;
const waiting = new Map();

function post(message) {
  window.parent.postMessage(message, "*");
}

function request(type, payload) {
  const requestId = `r${++seq}`;
  return new Promise((resolve) => {
    waiting.set(requestId, resolve);
    post({ type, requestId, ...payload });
  });
}

function settle(requestId, value) {
  const resolve = waiting.get(requestId);
  if (resolve) {
    waiting.delete(requestId);
    resolve(value);
  }
}

function say(text) {
  state.textContent = text;
}

function sameControls(left, right) {
  const names = new Set([...Object.keys(left), ...Object.keys(right)]);
  for (const name of names) if ((left[name] ?? "") !== (right[name] ?? "")) return false;
  return true;
}

function updateBar() {
  const dirty = marks.length > 0 || !sameControls(readControls(), baseline);
  count.textContent = marks.length === 1 ? "1 mark" : `${marks.length} marks`;
  saveButton.disabled = !dirty || !writable;
  removeButton.hidden = selectedMarkId === null;
}

/* ---------- reading and writing the file ---------- */

function readBlock(content) {
  const match = content.match(BLOCK_RE);
  if (!match) return { marks: [], controls: {} };
  try {
    const parsed = JSON.parse(match[1]);
    return {
      marks: Array.isArray(parsed && parsed.marks) ? parsed.marks : [],
      controls:
        parsed && typeof parsed.controls === "object" && parsed.controls !== null ? parsed.controls : {},
    };
  } catch {
    return { marks: [], controls: {} };
  }
}

function withBlock(content, nextMarks, controls) {
  const cleaned = content.replace(SCRIPT_RE, "");
  if (nextMarks.length === 0 && Object.keys(controls).length === 0) return cleaned;
  const payload = JSON.stringify({ version: 1, marks: nextMarks, controls }, null, 2);
  const block = `<script type="application/json" id="${ANNOTATIONS_ID}">\n${payload}\n</script>\n`;
  const bodyEnd = cleaned.toLowerCase().lastIndexOf("</body>");
  if (bodyEnd === -1) return `${cleaned.replace(/\s*$/, "\n")}${block}`;
  return `${cleaned.slice(0, bodyEnd)}${block}${cleaned.slice(bodyEnd)}`;
}

/* ---------- showing the page ---------- */

function renderPage(content) {
  const doc = new DOMParser().parseFromString(content, "text/html");
  doc.querySelector(`#${ANNOTATIONS_ID}`)?.remove();
  doc.querySelectorAll("script").forEach((element) => element.remove());

  page.replaceChildren();
  doc.head.querySelectorAll("style").forEach((element) => page.append(element.cloneNode(true)));
  Array.from(doc.body.childNodes).forEach((node) => page.append(node.cloneNode(true)));
}

function findRange(quote) {
  const walker = document.createTreeWalker(page, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    const at = node.nodeValue.indexOf(quote);
    if (at !== -1) {
      const range = document.createRange();
      range.setStart(node, at);
      range.setEnd(node, at + quote.length);
      return range;
    }
    node = walker.nextNode();
  }
  return null;
}

function wrapRange(range, mark) {
  const element = document.createElement("mark");
  element.dataset.mark = mark.id;
  element.dataset.kind = mark.kind;
  element.title = mark.text || mark.kind;
  try {
    range.surroundContents(element);
  } catch {
    element.append(range.extractContents());
    range.insertNode(element);
  }
}

function paintMarks() {
  page.querySelectorAll("mark[data-mark]").forEach((element) => {
    const parent = element.parentNode;
    while (element.firstChild) parent.insertBefore(element.firstChild, element);
    parent.removeChild(element);
    parent.normalize();
  });
  marks.forEach((mark) => {
    const range = findRange(mark.quote);
    if (range) wrapRange(range, mark);
  });
  updateBar();
}

/* ---------- the page's own form controls ---------- */

/** Read every named control of the rendered page, so a ticked box survives the save. */
function readControls() {
  const values = {};
  page.querySelectorAll("input[name], select[name], textarea[name]").forEach((element) => {
    const name = element.getAttribute("name");
    if (!name) return;
    if (element.type === "checkbox" || element.type === "radio") {
      if (element.checked) values[name] = element.value || "on";
      else if (!(name in values)) values[name] = "";
      return;
    }
    values[name] = element.value;
  });
  return values;
}

/** Put saved control values back after a render. */
function applyControls(values) {
  if (!values) return;
  page.querySelectorAll("input[name], select[name], textarea[name]").forEach((element) => {
    const name = element.getAttribute("name");
    if (!name || !(name in values)) return;
    const saved = values[name];
    if (element.type === "checkbox" || element.type === "radio") {
      element.checked = saved !== "" && saved === (element.value || "on");
      return;
    }
    element.value = saved;
  });
}

/* ---------- marking ---------- */

function hideToolbar() {
  toolbar.hidden = true;
}

function selectionRange() {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return null;
  const range = selection.getRangeAt(0);
  if (range.collapsed) return null;
  if (!page.contains(range.commonAncestorContainer)) return null;
  return range;
}

function showToolbar() {
  const range = selectionRange();
  if (!range) {
    hideToolbar();
    return;
  }
  // Coordinates are relative to the scrolling box, which is also the containing block of #toolbar,
  // so the toolbar sits on the selection and scrolls with the page.
  const box = range.getBoundingClientRect();
  const frame = scroll.getBoundingClientRect();
  toolbar.hidden = false;
  const width = toolbar.offsetWidth || 200;
  const left = box.left - frame.left + scroll.scrollLeft;
  const top = box.bottom - frame.top + scroll.scrollTop + 6;
  toolbar.style.left = `${Math.max(8, Math.min(left, scroll.clientWidth - width - 8))}px`;
  toolbar.style.top = `${Math.max(8, top)}px`;
}

function askForText(kind) {
  const range = selectionRange();
  if (!range) return;
  pendingKind = { kind, quote: range.toString() };
  promptLabel.textContent = kind === "replace" ? "New text" : "Note";
  promptText.value = "";
  promptForm.hidden = false;
  promptText.focus();
  hideToolbar();
}

function addMark(kind, quote, text) {
  const mark = { id: `m${Date.now().toString(36)}${marks.length}`, kind, quote, text: text || "" };
  marks.push(mark);
  paintMarks();
  say("Mark added. Save it to send it to the agent.");
}

promptForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!pendingKind) return;
  addMark(pendingKind.kind, pendingKind.quote, promptText.value.trim());
  pendingKind = null;
  promptForm.hidden = true;
  window.getSelection()?.removeAllRanges();
});

document.getElementById("promptCancel").addEventListener("click", () => {
  pendingKind = null;
  promptForm.hidden = true;
});

toolbar.addEventListener("click", (event) => {
  const kind = event.target.dataset?.kind;
  if (!kind) return;
  if (kind === "delete") {
    const range = selectionRange();
    if (!range) return;
    addMark("delete", range.toString(), "");
    window.getSelection()?.removeAllRanges();
    hideToolbar();
    return;
  }
  askForText(kind);
});

document.addEventListener("selectionchange", () => {
  if (!promptForm.hidden) return;
  showToolbar();
});

page.addEventListener("change", () => {
  updateBar();
  if (marks.length === 0) say("A choice changed. Save to send it to the agent.");
});

page.addEventListener("click", (event) => {
  const mark = event.target.closest?.("mark[data-mark]");
  selectedMarkId = mark ? mark.dataset.mark : null;
  if (selectedMarkId) {
    const found = marks.find((item) => item.id === selectedMarkId);
    say(found ? `${found.kind}: ${found.text || found.quote}` : "");
  }
  updateBar();
});

removeButton.addEventListener("click", () => {
  marks = marks.filter((item) => item.id !== selectedMarkId);
  selectedMarkId = null;
  paintMarks();
  say("Mark removed.");
});

/* ---------- saving ---------- */

saveButton.addEventListener("click", async () => {
  saveButton.disabled = true;
  say("Saving…");
  const next = withBlock(source, marks, readControls());
  const result = await request("editor:save", { data: next, baseRevision: revision });
  if (result?.type === "editor:saved") {
    revision = result.revision;
    source = next;
    say("Saved. Back in the chat, tell the agent that the page is marked.");
  } else {
    const code = result?.code ?? "SAVE_FAILED";
    say(code === "READ_ONLY" ? "This file cannot be written, so the marks stay here." : `Save failed: ${code}`);
  }
  updateBar();
});

/* ---------- host bridge ---------- */

window.addEventListener("message", (event) => {
  const data = event.data ?? {};
  if (data.type === "editor:init") {
    writable = data.writable === true;
    if (data.theme) document.body.dataset.theme = data.theme;
    if (!writable) saveButton.title = "This file is outside the mod, so it cannot be written.";
    post({ type: "editor:readFile", requestId: `r${++seq}` });
    return;
  }
  if (data.type === "editor:theme") {
    if (data.theme) document.body.dataset.theme = data.theme;
    return;
  }
  if (data.type === "editor:fileContent") {
    revision = data.revision ?? null;
    source = typeof data.data === "string" ? data.data : "";
    const block = readBlock(source);
    marks = block.marks;
    renderPage(source);
    applyControls(block.controls);
    baseline = readControls();
    paintMarks();
    say(marks.length ? "Marks from the last round are shown." : "Select text to mark it.");
    return;
  }
  if (data.type === "editor:saved" || data.type === "editor:error") {
    settle(data.requestId, data);
  }
});
