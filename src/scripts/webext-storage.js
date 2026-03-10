(globalThis.startupBookmarks,
  globalThis.startupTopsites,
  (globalThis.startupStorage = { sync: void 0, local: void 0 }),
  chrome.storage.sync.get().then((t) => {
    ((globalThis.startupStorage.sync = t),
      globalThis.pageReady &&
        document.dispatchEvent(
          new CustomEvent("webextstorage", { detail: "sync" }),
        ));
  }),
  chrome.storage.local.get().then((t) => {
    ((globalThis.startupStorage.local = t),
      globalThis.pageReady &&
        document.dispatchEvent(
          new CustomEvent("webextstorage", { detail: "local" }),
        ));
  }),
  chrome.bookmarks?.getTree().then((t) => {
    globalThis.startupBookmarks = t;
  }),
  chrome.topSites?.get().then((t) => {
    globalThis.startupTopsites = t;
  }));
