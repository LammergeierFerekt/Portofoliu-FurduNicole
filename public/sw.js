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

self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
