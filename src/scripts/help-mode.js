let hasExportedSettings = !1,
  helpModeShown = !1;
function displayHelpModePrompt() {
  if (!document.body.className.includes("init")) return;
  const e = document
    .getElementById("help-mode-prompt-template")
    .content.cloneNode(!0)
    .querySelector("#help-mode-prompt");
  (document.documentElement.prepend(e),
    document
      .getElementById("open-help-mode")
      ?.addEventListener("click", () => toggleHelpMode(!0)),
    document
      .querySelector(".export")
      ?.addEventListener("click", downloadSettings));
}
function exportToJsonFile(e) {
  const t = new Blob([e], { type: "application/json" }),
    o = URL.createObjectURL(t),
    n = document.createElement("a");
  ((n.href = o),
    (n.download = `bonjourr-${new Date().toLocaleString()}.json`),
    n.click(),
    URL.revokeObjectURL(o),
    document.querySelector(".reset") &&
      (document.querySelector(".reset").disabled = !1),
    (hasExportedSettings = !0));
}
async function downloadSettings() {
  exportToJsonFile(await getDataAsString());
}
async function getDataAsString() {
  return "undefined" != typeof chrome && chrome?.storage
    ? JSON.stringify(await chrome.storage.sync.get(), null, 2)
    : (localStorage.bonjourr ?? "");
}
function resetOnce() {
  const e = document.querySelector("#help-mode .reset"),
    t = e.querySelector("span");
  ((e.title = "You're about to reset Bonjourr to its default configuration."),
    e.classList.add("danger"),
    (t.textContent = "Are you sure?"),
    e.addEventListener("click", resetApply));
}
async function resetApply() {
  const e = await getDataAsString(),
    t = `bonjourr-archive-${new Date().toLocaleString()}`;
  (chrome?.storage &&
    (chrome.storage.sync.clear(), chrome.storage.local.clear()),
    localStorage &&
      Object.keys(localStorage).forEach((e) => {
        !1 === e.startsWith("bonjourr-archive-") && localStorage.removeItem(e);
      }),
    (localStorage[t] = e));
  const o = document.querySelector("#help-mode .reset"),
    n = o.querySelector("span");
  (o.setAttribute("disabled", ""),
    (n.textContent = "Waiting for reload"),
    setTimeout(() => {
      globalThis.window.location.reload();
    }, 1e3));
}
function toggleHelpMode(e = !helpModeShown) {
  (document.getElementById("help-mode") || createHelpModeDisplay(),
    e
      ? (document
          .querySelector("body")
          ?.setAttribute("style", "position: fixed; visibility: hidden"),
        document.querySelector("#help-mode")?.classList.add("shown"))
      : (document.querySelector("body")?.removeAttribute("style"),
        document.querySelector("#help-mode")?.classList.remove("shown")),
    (helpModeShown = !helpModeShown));
}
function createHelpModeDisplay() {
  const e = document
      .getElementById("help-mode-template")
      .content.cloneNode(!0)
      .querySelector("#help-mode"),
    t = globalThis.performance.now();
  document.documentElement.prepend(e);
  const o = this.document.querySelector(".reset");
  function n(o, n) {
    const r = Math.round(globalThis.performance.now() - t),
      c = n.ok ? ` · ${r}ms` : n.status;
    ((e.querySelector(`#${o}`).textContent = c),
      e
        .querySelector(`li:has(#${o})`)
        .classList.add(n.ok ? "statusUp" : "statusDown"));
  }
  if (
    (this.document
      .querySelector(".export")
      .addEventListener("click", downloadSettings),
    o.addEventListener("click", resetOnce),
    hasExportedSettings && (o.disabled = !1),
    fetch("https://bonjourr.fr/").then((e) => {
      n("help-status-website", e);
    }),
    fetch("https://weather.bonjourr.fr/").then((e) => {
      n("help-status-weather", e);
    }),
    fetch("https://services.bonjourr.fr").then((e) => {
      n("help-status-services", e);
    }),
    0 !== Object.entries(localStorage).length)
  ) {
    for (const [t, o] of Object.entries(localStorage)) {
      if ("undefined" === o || "" === o || "{}" === o || "0" === o) continue;
      const n = document.createElement("li"),
        r = document.createElement("p"),
        c = document.createElement("pre");
      ((r.textContent = t),
        (c.textContent = o),
        n.append(r, c),
        e.querySelector("#help-localstorage")?.append(n));
    }
    e.querySelector("#localstorage-container")?.classList.remove("hidden");
  }
  "undefined" != typeof chrome &&
    chrome?.storage &&
    (chrome.storage.sync.get().then((t) => {
      ((e.querySelector("#help-storage-sync").textContent = JSON.stringify(
        t,
        void 0,
        2,
      )),
        e.querySelector("#syncstorage-container")?.classList.remove("hidden"));
    }),
    chrome.storage.local.get().then((t) => {
      ((e.querySelector("#help-storage-local").textContent = JSON.stringify(
        t,
        void 0,
        2,
      )),
        e
          .querySelector("#browserstorage-container")
          ?.classList.remove("hidden"));
    }));
}
globalThis.window.addEventListener("load", function () {
  (globalThis.setTimeout(() => {
    displayHelpModePrompt();
  }, 5e3),
    document.addEventListener("keydown", function (e) {
      const { key: t, shiftKey: o, ctrlKey: n, metaKey: r } = e;
      ((n || r) &&
        o &&
        ("," === t || "/" === t || "?" === t) &&
        toggleHelpMode(),
        "Escape" === t && helpModeShown && toggleHelpMode(!1));
    }));
});
