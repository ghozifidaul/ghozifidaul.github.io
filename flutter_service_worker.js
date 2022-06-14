'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "31d62fbe26cd7d30053b501560c4040c",
"index.html": "b5365ff05a2f5d6cae33f5bcdd61475e",
"/": "b5365ff05a2f5d6cae33f5bcdd61475e",
"main.dart.js": "93f9f06f3d6b27d1785ef008d2692e18",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6fe17a573d0596b131767db89d341e56",
".git/config": "31c67d53ffa954f0015099e05f2eb01a",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/68/aa134cfe24bbf11010ba925fac227d05d2f3c2": "2ece1eb20d4db780d955fa899275190d",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/b3/5fee8a048c5e67633e560088f3be9640b9243a": "4805b5ebfadea7c8306afddded7e23ef",
".git/objects/a2/7a7e1c118cecd7c1756c09455d211ec84fe18e": "94ea1129475a8926059bc222fda336b3",
".git/objects/bd/2a5b4286c5fed3e9c8fbc04deefbca3e93f0c3": "e68d230bd1648fc24f9938354032a17b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e3/ce0b21b977f7d7684f70b793a2e68b78ce99fb": "df2834fd00d8055a0a982da3d00fc22a",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/11/97a1b8b10126b0806ee404f3841a7b03a814d7": "c03b05ca45908f23a9a5fd96e25f130a",
".git/objects/8f/4d3a835c08b54c38d1b44c7fcc75e089544934": "9cda6cce827cd85186b2d32f5d9514ce",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/86/be8baf949517ece22f80443013645639af861d": "a4347f5822d4702497fc411765b5cb2f",
".git/objects/43/196e475edd1a08a1ca73c06d7c4b99fdc023ca": "c633b91e1327455f52992f933a933859",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/d30166744e204e673d0945d5df4b9cb26cb20d": "3cc9e166b5a960ce080e613596f55353",
".git/objects/09/c7d9fb66042f2293d03072992e3701e908c464": "503f12a6ccfdbfcecd7de0842989b097",
".git/objects/96/f1f48b9049af050d93ba7636ee520e51300a67": "5656b6849a59d323f694ccfce49b2bc8",
".git/objects/dd/ca1c6d63f0e6c2acb25e01054d1dcd5596caba": "43fd9e0d01c81754ada2e8535ad84fd0",
".git/objects/b6/5e9bd392175952e5a28ef141a3f11cd78cddbe": "7311dc9166567e8940c89896509dd8b3",
".git/objects/af/e108ef9f614c5826a5724ab50fc1278bd05222": "8f590c982ad391681031d541ea0bb649",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/052ce734d39591977605517231befa3f6a89c1": "d5e755cea1f047b1b8355c134c0409c1",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5577e3d9ae65cfed51d360c127458190cb31c3": "d5015bfc4f993f91b70569d75d453572",
".git/objects/cc/9ffa8841713936d62e80879fcbb0bbe33a8088": "4a8d8797a7e6c0bff3b3f159165bce69",
".git/objects/f7/5a8ae63ccae7f6b08461e0a386d6b198b6462d": "4b5786a2b9038a2810c5cca857a55bf9",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/8d/a690f3c7cbdaeaf1734307bfc5c362a80e182c": "01daca6856bd5c30c2ac5f3776286f86",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/3452a4431f39e35ed4a56fccd77b56bb69c468": "78847dd4ccd8a910fe010fc43b4249d9",
".git/objects/7a/c040f90bf0a8916716f471bbad01f1adddc5a2": "9785e1a496d4fbf287b650ccb1022b43",
".git/objects/7a/3f258a0d92f8782610be16991ca4e29ddc933d": "164a530a65d33dda428223773013d094",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b3d1fc07e559d410639f914a75eeb7a5",
".git/logs/refs/heads/main": "233357fe8ce504569f6960193d055c69",
".git/logs/refs/remotes/origin/main": "196b0094278c0c4757fcc80b8dabe3a0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "aa4ada0875fad3d0bfd6015eabccc1bd",
".git/refs/remotes/origin/main": "aa4ada0875fad3d0bfd6015eabccc1bd",
".git/index": "de2c5b9722df8454ca6542503a1132fe",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "2f532becc2b5651235ba119984b31ff8",
"assets/NOTICES": "0cfb0c46c9d65c9f6947a206efa9dbc5",
"assets/FontManifest.json": "18c6453c21eea1649ae6d76b5aaab72f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/Source_Code_Pro/static/SourceCodePro-Regular.ttf": "e3433a628f74cf470d5529d767617458",
"assets/assets/Source_Code_Pro/static/SourceCodePro-Italic.ttf": "c0921cc02e528f66c237a8aa0b687bfb",
"assets/assets/Source_Code_Pro/static/SourceCodePro-Bold.ttf": "ad73a00399ec9552606b9432baebbeed",
"assets/assets/images/twitterlogo.png": "f5cb898eb3138ae3ba897f935e092be7",
"assets/assets/images/cool_bg.png": "7622dc1721baaf28866a8214f42a21ff",
"assets/assets/images/githubicon.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/cool_bg_2.png": "0c7d886d7574132cbb457486c6aa1184",
"assets/assets/images/foto_profil.jpg": "66cec144c0e39247382e69256feb2c51",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
