const CACHE_NAME = 'spinlio-cache-v1';
const MODEL_CACHE_NAME = 'spinlio-models-v1';
const MODEL_CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
const MAX_CACHE_SIZE = 500 * 1024 * 1024; // 500MB limit

// Separate caches for different types of resources
const staticUrlsToCache = [
  '/',
  '/index.html',
  '/runtime.bundle.js',
  '/framework.bundle.js',
  '/vendors.bundle.js',
  '/main.bundle.js',
  'https://res.cloudinary.com/da8qnqmmh/image/upload/back4bazaar.jpg'
];

const modelUrlsToCache = [
  '/shapediver.bundle.js'  // Cache separately with different strategy
];

self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(CACHE_NAME)
        .then(cache => cache.addAll(staticUrlsToCache)),
      // Cache model assets separately
      caches.open(MODEL_CACHE_NAME)
        .then(cache => cache.addAll(modelUrlsToCache))
    ])
  );
});

self.addEventListener('fetch', event => {
  // Special handling for ShapeDiver model requests
  if (event.request.url.includes('shapediver.com')) {
    event.respondWith(
      fetch(event.request)
        .catch(error => {
          console.error('ShapeDiver fetch failed:', error);
          return caches.match(event.request);
        })
    );
    return;
  }

  // Handle all other requests
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

            // Determine which cache to use
            const cacheName = event.request.url.includes('shapediver.bundle.js') 
              ? MODEL_CACHE_NAME 
              : CACHE_NAME;

            caches.open(cacheName)
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

// Add cache cleanup for memory management
self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME && cacheName !== MODEL_CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Modified model cache cleanup with fallback to old behavior
      caches.open(MODEL_CACHE_NAME).then(cache => {
        return cache.keys().then(requests => {
          return Promise.all(
            requests.map(request => {
              return cache.match(request).then(response => {
                if (response && response.headers.get('date')) {
                  const cacheDate = new Date(response.headers.get('date'));
                  // Use new duration but fallback to old if something goes wrong
                  const duration = MODEL_CACHE_DURATION || 3600000;
                  if (Date.now() - cacheDate.getTime() > duration) {
                    return cache.delete(request);
                  }
                }
              });
            })
          );
        });
      })
    ])
  );
});

// Handle service worker updates
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});