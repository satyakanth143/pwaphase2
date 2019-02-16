self.addEventListener('install',function(event){
  event.waitUntill(
    caches.open('v1').then(function(cache)
  {
    return.cache.addAll([

    ]);
  })
);
});
self.addEventListener('fetch',function (event) {
  event.respondWith(
    caches.match(event.request).then(function(resp)
  {
    retuen resp || fetch(event.request)
  })
  )

})
