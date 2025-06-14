self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('keepecar6-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/icon-192.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
