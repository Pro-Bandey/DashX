globalThis.chrome
  ? chrome.storage &&
    (chrome.action.onClicked.addListener(createNewTab),
    chrome.runtime.onInstalled.addListener(handleInstalled),
    chrome.runtime.setUninstallURL("https://bonjourr.fr/goodbye"))
  : (self.addEventListener("activate", updateCache),
    self.addEventListener("fetch", retrieveCache));
const CACHE_KEY = "22.0.0",
  API_URLS = ["unsplash.com", "jsdelivr.net", "api.bonjourr"];
function createNewTab() {
  const e = chrome.runtime.getURL("index.html");
  chrome.tabs.create({ url: e });
}
function handleInstalled(e) {
  "install" === e.reason && createNewTab();
}
async function updateCache() {
  const e = await caches.keys();
  for (const t of e) "22.0.0" !== t && (await caches.delete(t));
}
function retrieveCache(e) {
  const t = e.request.url,
    a = API_URLS.some((e) => t.includes(e));
  e.respondWith(
    (async () => {
      if (a) return fetch(e.request);
      const t = await caches.match(e.request);
      if (t) return t;
      return (
        (await caches.open("22.0.0")).add(e.request.url),
        fetch(e.request)
      );
    })(),
  );
}
