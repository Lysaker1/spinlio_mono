const CACHE_NAME = 'spinlio-cache-v1';
const urlsToCache = [
  '/',
  '/images/background_final_last.png',
  '/main.bundle.js',
  '/189.bundle.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Add fetch handler
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});