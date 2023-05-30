import {precacheAndRoute} from 'workbox-precaching';
import {setCatchHandler} from 'workbox-routing';

self.addEventListener('install', event => {
    const files = ['/offline.html']; // you can add more resources here
    event.waitUntil(
        self.caches.open('offline-fallbacks')
            .then(cache => cache.addAll(files))
    );
});

setCatchHandler(async (options) => {
    const destination = options.request.destination;
    const cache = await self.caches.open('offline-fallbacks');
    if (destination === 'document') {
        return (await cache.match('/offline.html')) || Response.error();
    }
    return Response.error();
});

precacheAndRoute(self.__WB_MANIFEST);
