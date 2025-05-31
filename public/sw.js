const CACHE_NAME = 'my-cache-v1';
const REPO_NAME = '/Portofoliu-FurduNicole';

const FILES_TO_CACHE = [
  `${REPO_NAME}/`,
  `${REPO_NAME}/index.html`,
  `${REPO_NAME}/pdfs/academic.pdf`,
  `${REPO_NAME}/pdfs/academic_mobile.pdf`,
  `${REPO_NAME}/pdfs/professional.pdf`,
  `${REPO_NAME}/pdfs/professional_mobile.pdf`,
  ...Array.from({ length: 15 }, (_, i) => `${REPO_NAME}/hard-skills/img_${i + 1}.png`),
  ...Array.from({ length: 5 }, (_, i) => `${REPO_NAME}/hard-skills/img_d${i + 1}.png`)
];

// Install event – cache essential files
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Installing and caching static files...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate event – delete old caches
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activating and clearing old caches...');
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim(); // Take control immediately
});

// Fetch event – serve from cache or fetch from network
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        console.log('[ServiceWorker] Serving from cache:', event.request.url);
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch((error) => {
        console.error('[ServiceWorker] Fetch failed:', event.request.url, error);
        throw error;
      });
    })
  );
});
