const V = "sb-v16";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const u = new URL(req.url);
  if (u.hostname.includes("script.google")) return; // dữ liệu luôn đi mạng
  if (req.mode === "navigate" || (u.origin === location.origin && u.pathname.endsWith(".html"))) {
    // trang chính: lấy bản trong máy ngay, cập nhật ngầm cho lần sau
    e.respondWith(caches.open(V).then(async c => { const hit = await c.match("./index.html"); const net = fetch(req).then(r => { if (r.ok) c.put("./index.html", r.clone()); return r; }).catch(() => hit); return hit || net; }));
    return;
  }
  e.respondWith(caches.open(V).then(async c => { const hit = await c.match(req); if (hit) return hit; try { const r = await fetch(req); if (r.ok || r.type === "opaque") c.put(req, r.clone()); return r; } catch (er) { return hit || Response.error(); } }));
});
