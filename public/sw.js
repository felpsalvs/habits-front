//create service worker
self.addEventListener('install', function(event) {
    console.log('Service Worker installing.');
}
//activate service worker
self.addEventListener('activate', function(event) {
    console.log('Service Worker activating.');
}
//fetch service worker
self.addEventListener('fetch', function(event) {
    console.log('Service Worker fetching.');
}
