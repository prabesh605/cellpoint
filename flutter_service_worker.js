'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "29384a07c8397f7a31e0fecb99b09f98",
"assets/AssetManifest.bin.json": "8e0368bcbe6ef2f059b2407f8ad29b20",
"assets/AssetManifest.json": "d477b3cf9fe4f20035a445cde4581725",
"assets/assets/acessories.jpg": "78aa02b794bebf6758c7884350179beb",
"assets/assets/cellpoint.ico": "9d3bcc9ee157fe032a0317adef199c64",
"assets/assets/cellpoint.jpg": "aeb4677694ac044bab9a996527b1d051",
"assets/assets/cellpoint.png": "edf5ccacbcd2be79a188f7f283f4c64b",
"assets/assets/cellpoint2.jpg": "913fd3d3dceb6bafabd2a5e442323765",
"assets/assets/cellpointbackground.jpg": "a912ef6de5557c89509f1f0c3c612e52",
"assets/assets/cellpointfestival.jpg": "b90a7696702fde7beb00a90b38a52812",
"assets/assets/cellpointfestival1.jpg": "5bc64260521b92b4c8d9061bd819d139",
"assets/assets/cellpointlogo.png": "df249fd622c1a8df5c48bdf5b04a554d",
"assets/assets/cellpointnew.jpg": "dddfbbdf12fdf27b0de5605c9475f93c",
"assets/assets/image1.jpg": "b7ce7497b7a31cd8b22c463d3805ae9d",
"assets/assets/image11.jpg": "735677d988405f03b4dcff8f5528f365",
"assets/assets/image22.jpg": "5217ddac5ab55470e021a79f3c231fa8",
"assets/assets/image33.jpg": "63dd571ecee941a36db76c75e3dbbc56",
"assets/assets/iphone.png": "539ff32ec9d53f12952896dbbf6a28cb",
"assets/assets/iphoneimage.jpg": "edc121e49ef693b621d01c59324b1846",
"assets/assets/logoname.png": "acb8ad7f14eace2ef08733e2b90ed5e7",
"assets/assets/logoonly.png": "1595a05432f19982b618adcd145307d7",
"assets/assets/logowhite.jpg": "d0ab553a7701d6bd8aadd8f7ac185db9",
"assets/assets/point1.jpg": "78424656b001fe5e7847f690fa36698d",
"assets/assets/point2.jpg": "9d1fdd2cb00e6574b7dc303fd03fa9c5",
"assets/assets/point3.jpg": "81b6075d79a96d4291ad9b6d0852f27b",
"assets/assets/point4.jpg": "7e6b27f35fb16c7d8b492336f73dcb6b",
"assets/assets/point5.jpg": "133b2cff52545c0b3f9344fb8a0af6dc",
"assets/assets/Realme.png": "755b688b820265b120ea801001eb8598",
"assets/assets/realme2.png": "0fb5c679e9e2af430a7faf2f4828ed8f",
"assets/assets/redme.png": "369877e00dc4f1ae418ebbe2c4a94fe2",
"assets/assets/repair.jpg": "bc99071f50a74c56aa0139c1d02e6848",
"assets/assets/samsung.png": "0369d00e679d9c7fcb3fd69b6998ee1b",
"assets/assets/smartphone.jpg": "4d0b3cf8787eab80310fccf1f257d30b",
"assets/assets/smartphone.png": "cc01b64b949e71386d0b4bde2ea30e97",
"assets/assets/twitter.png": "ac37e7d1dcd0cbbe2c7f802cee3f0ce5",
"assets/assets/vector.png": "0eede854c2d8031066895429c95453b6",
"assets/assets/vector1.png": "4bfc0123e83305884cd07ce7d4a37db8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9001341a29a09867e2af94e99df27bd2",
"assets/NOTICES": "a252b3abad6709cb0d63775d38632fd1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"cellpoint.ico": "ae6c58de9a2e3f71074423753add7331",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ca82abb872ab2b0df4243d88be23cda3",
"icons/Icon-512.png": "4722b6dfb11a5723941e760a7db6a111",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "070be790fc7de85221e8789e52a9282e",
"/": "070be790fc7de85221e8789e52a9282e",
"main.dart.js": "82fd636cefb28e6ec1a7f0c1f523ee2b",
"manifest.json": "8a6c8d180861c4bb7f473157ea2fda37",
"version.json": "2d275cd1658a9ce66b121a15c21afa69"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
