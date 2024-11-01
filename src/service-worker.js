const CACHE_NAME = 'spinlio-cache-v1';

const urlsToCache = [
  '/',
  '/index.html',
  'https://res.cloudinary.com/da8qnqmmh/image/upload/v1730055768/background_final_last_dm9bl2.png',
  '/runtime.bundle.js',
  '/framework.bundle.js',
  '/vendors.bundle.js',
  '/main.bundle.js',
  '/shapediver.bundle.js'
];

// Remove duplicate install listener
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Add better error handling for fetch events
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }

        return fetch(event.request)
          .then(response => {
            // Don't cache if not a success response
            if (!response || response.status !== 200) {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                const shouldCache = !event.request.url.includes('/api/');
                if (shouldCache) {
                  cache.put(event.request, responseToCache);
                }
              });

            return response;
          })
          .catch(error => {
            console.error('Fetch failed:', error);
            // Return a custom offline page or fallback content
            return new Response('Offline content here');
          });
      })
  );
});
