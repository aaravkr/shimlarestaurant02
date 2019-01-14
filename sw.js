var cacheName = 'shimla-ver09';
var cacheItems = [
     '/index.html',
     '/404.html',
     '/js/app.js',
     '/js/jquery-1.12.4.min.js',
     '/js/lecker_library.js',
     '/js/lecker_script.js',
     '/images/badge_mini_fire.png',
     '/images/black_paper.jpg',
     '/images/black-1072366_1920.jpg',
     '/images/breeks.jpg',
     '/images/fire.jpg',
     '/images/main_back.jpg',
     '/images/main_back_bl.jpg',
     '/images/main_back_bl.png',
     '/images/main_back_gr.jpg',
     '/images/shimla/e1.jpg',
     '/images/shimla/e2.jpg',
     '/images/shimla/e3.jpg',
     '/images/shimla/e2.png',
     '/images/shimla/e5.jpg',
     '/images/shimla/e6.jpg',
     '/images/shimla/e7.jpg',
     '/images/shimla/l1.png',
     '/images/shimla/logo.png',
     '/images/shimla/m1.png',
     '/images/shimla/m2.png',
     '/images/shimla/m3.png',
     '/images/shimla/m4.png',
     '/images/shimla/m5.png',
     '/images/shimla/m6.png',
     '/images/shimla/m7.png',
     '/images/shimla/n1.png',
     '/images/shimla/n2.png',
     '/images/shimla/N3.png',
     '/images/shimla/n4.png',
     '/images/shimla/n5.png',
     '/images/shimla/order-min.jpg',
     '/images/shimla/s1.jpg',
     '/images/shimla/s4.jpg',
     '/images/shimla/sl13.jpg',
     '/images/shimla/ss1.jpg',
     '/images/shimla/ss3.jpg',
     '/css/Blenda Script.otf',
     '/css/GlacialIndifference-Regular.otf',
     '/css/lecker_library.css',
     '/css/lecker_style.css',
     '/favicons/android-chrome-144x144.png',
     '/favicons/apple-touch-icon.png',
     '/favicons/favicon.ico',
     '/favicons/favicon-16x16.png',
     '/favicons/favicon-32x32.png',
     '/favicons/mstile-150x150.png',
     '/favicons/safari-pinned-tab.svg'
//     '/fonts/fonts/themify9f24.otf',
//     '/fonts/fonts/Blenda Script.otf'
//    '/fonts/fonts/themify9f24.woff',
//     '/fonts/fonts/themifyd41d.eot',
//     '/fonts/selima/selima_-webfont.eot',
//     '/fonts/selima/selima_-webfont.ttf',
//     '/fonts/selima/selima_-webfont.woff',
//     '/fonts/selima/selima_-webfont.woff2',
//     '/fonts/selima/selima_-webfontd41d.eot'
 ];

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(cacheItems);
        })
    );
});

;

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
 
    
});
self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});