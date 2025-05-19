self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('trim-tool-v2').then(function(cache) {
      return cache.addAll([
        './v2.html',
        './manifest.json',
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
