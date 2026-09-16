const CACHE = 'constellation-2.0.0-v1';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './constellation-icon-192.png',
  './constellation-icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.allSettled(CORE.map(url => cache.add(url)));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key !== CACHE && key.startsWith('constellation-')).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
  if (event.data?.type === 'CACHE_URL' && event.data.url) {
    event.waitUntil((async () => {
      try {
        const request = new Request(event.data.url, {credentials:'same-origin'});
        const response = await fetch(request);
        if (response.ok) (await caches.open(CACHE)).put(request, response.clone());
      } catch (_) {}
    })());
  }
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      try {
        const response = await fetch(event.request);
        if (response && response.ok) await cache.put(event.request, response.clone());
        return response;
      } catch (_) {
        const exact = await cache.match(event.request);
        if (exact) return exact;
        const index = await cache.match('./index.html') || await cache.match('./');
        if (index) return index;
        return new Response('<!doctype html><meta name="viewport" content="width=device-width"><title>Constellation offline</title><body style="font:16px system-ui;background:#070910;color:#eef4ff;padding:32px"><h1>Constellation is offline</h1><p>Open it once while online after installing so the app shell can be cached.</p></body>', {headers:{'Content-Type':'text/html'}});
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(event.request);
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (response && response.ok) await cache.put(event.request, response.clone());
      return response;
    } catch (_) {
      return cached || Response.error();
    }
  })());
});
