// Use a cacheName for cache versioning
var cacheName = 'v1:static';

// During the installation phase, you'll usually want to cache static assets.
self.addEventListener('install', function(e) {
    // Once the service worker is installed, go ahead and fetch the resources to make this work offline.

    //The install event fires during the installation phase of the service worker and will fire only once if the service worker is already installed. Therefore, refreshing the page will not trigger the installation phase again. During the installation phase, we are able to declare which assets will be cached. 

    e.waitUntil( //takes a promise 
        caches.open(cacheName)
            .then(function(cache) {
                return cache.addAll([
                    // './',
                    './pokeData.js',
              './pokeImages/*.*',
                    // './css/style.css',
                    //ideally, serve up minified bundle.js through a plugin like Uglify 
                    // './js/build/script.min.js',
                    // './js/build/vendor.min.js',
                    './bundle.js',
                    // './css/fonts/roboto.woff',
                    //'./offline.html': you can add an event listener to listen for the offline event and serve up a different page when offline 
                ]).then(function() {
                    self.skipWaiting();
                    //self.skipWaiting() forces the waiting service worker to become active.
                })
                .then(console.log('Service worker installed!'));
            })
        );
});

// when the browser fetches a URL…
self.addEventListener('fetch', function(event) {
    // … either respond with the cached object or go ahead and fetch the actual URL
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                // retrieve from cache
                return response;
            }
            // fetch as normal
            // return fetch(event.request);

            // IMPORTANT: Clone the request. A request is a stream and
            // can only be consumed once. Since we are consuming this
            // once by cache and once by the browser for fetch, we need
            // to clone the response.
            var fetchRequest = event.request.clone();

            return fetch(fetchRequest).then(
              function(response) {
                // Check if we received a valid response
                if(!response || response.status !== 200 || response.type !== 'basic') { //basic means only reqs from our origin- so if you have a 3rd-party asset and it makes a req, you don't want that response to be cached. 
                  return response;
                }

                // store retrieved assets from api calls, etc. in cache 
                // IMPORTANT: Clone the response. A response is a stream
                // and because we want the browser to consume the response
                // as well as the cache consuming the response, we need
                // to clone it so we have two streams.
                var responseToCache = response.clone();

                caches.open(CACHE_NAME)
                  .then(function(cache) {
                    cache.put(event.request, responseToCache);
                  });

                return response;
              }
            );
        })
    );
});
//there is a lot of potentially confusing stuff around updating service workers, etc. and we don't have time for it today... 