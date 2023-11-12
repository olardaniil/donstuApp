'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b3eed7df8ad37a1ade7856ab451ff001",
"assets/AssetManifest.json": "7fdb8150d4eb9e41e128173be1ebdaa3",
"assets/assets/fonts/San-Francisco-Pro/SFProText-Bold.ttf": "d6079ef01292c4bc84dce33988641530",
"assets/assets/fonts/San-Francisco-Pro/SFProText-BoldItalic.ttf": "37ad4cdd6c17c64d2c7805bc426e45c0",
"assets/assets/fonts/San-Francisco-Pro/SFProText-Heavy.ttf": "6c498791e52ee77eedea219f291f638d",
"assets/assets/fonts/San-Francisco-Pro/SFProText-HeavyItalic.ttf": "36abf927285c38b9ef6bb1069bbc4de6",
"assets/assets/fonts/San-Francisco-Pro/SFProText-Light.ttf": "359f126c743e77d113cdc1ddda32534b",
"assets/assets/fonts/San-Francisco-Pro/SFProText-LightItalic.ttf": "27193296e16e65cac9cae9a11199b6b2",
"assets/assets/fonts/San-Francisco-Pro/SFProText-Medium.ttf": "a260cbc18870da144038776461d9df28",
"assets/assets/fonts/San-Francisco-Pro/SFProText-MediumItalic.ttf": "597d7713b611c3ac9b78b0b073d236a6",
"assets/assets/fonts/San-Francisco-Pro/SFProText-Regular.ttf": "85bd46c1cff02c1d8360cc714b8298fa",
"assets/assets/fonts/San-Francisco-Pro/SFProText-RegularItalic.ttf": "90ad050f9579d382bd5fe2e2b85bba26",
"assets/assets/fonts/San-Francisco-Pro/SFProText-Semibold.ttf": "1a131c948d598ecec700d37d168a15b5",
"assets/assets/fonts/San-Francisco-Pro/SFProText-SemiboldItalic.ttf": "5f7b2454efc9b815951433f0770c7f6c",
"assets/assets/icons/apps.svg": "99639af74d900f557a215096b239c542",
"assets/assets/icons/atom.svg": "df03bb5c2acf33ba9694d7d35a58afb8",
"assets/assets/icons/blank-folder.svg": "2215583d48fcc5c49431a57dd35cadc9",
"assets/assets/icons/calendar.svg": "8badbc4698510025d6a805fc81190897",
"assets/assets/icons/camera.svg": "d3fb82d6360fabb4faa02534e3257ed3",
"assets/assets/icons/cap-student.svg": "f407b6343f8c827abd6ac99940c3a8db",
"assets/assets/icons/clock.svg": "8bc1670f33c73bcb181ad4d73a914f06",
"assets/assets/icons/dayCard.svg": "9d434bac9c26f65c708cc7a43063a554",
"assets/assets/icons/email.svg": "09ff13ab7cc563323bfe5794eb98c408",
"assets/assets/icons/error.svg": "e2352a187163623009bb7d0d37603965",
"assets/assets/icons/exit.svg": "955c5af70dab8ea9f2dd591337baa528",
"assets/assets/icons/help.svg": "6f4c99fa6afdde271624599d2b13b418",
"assets/assets/icons/info.svg": "8caee5812f2524e037e604f41f93241e",
"assets/assets/icons/link.svg": "f0ec17dbe9a5cc91851485b79f8473be",
"assets/assets/icons/location-marker.svg": "7992b5e9db89b8add297a42e46a7e213",
"assets/assets/icons/lock.svg": "d9f45a5bf9fa968d92d04247a9bfaec7",
"assets/assets/icons/menu.svg": "739514a9f7daf3cc479763810e91cdee",
"assets/assets/icons/message.svg": "a2364d3cd1b3534ac5848ca83181dab2",
"assets/assets/icons/monthCard.svg": "aae8689cb32fa0df59230eded47ab059",
"assets/assets/icons/search.svg": "fd8ca78e886ea36183af451317e6f8e8",
"assets/assets/icons/settings.svg": "4d3ee7b4586f5eaad28442e0ff4bae3e",
"assets/assets/icons/tasks.svg": "eb40e1ef18d1a97d6efeacd29a5eecf7",
"assets/assets/icons/threeDots.svg": "f652b0d2b6e6e1d62a529bb58ac952a2",
"assets/assets/icons/tutorials.svg": "c3daccc20300854e75a716604c2c7e31",
"assets/assets/icons/user-card.svg": "e31647d2e83482f77a996ee2bf448d6e",
"assets/assets/icons/user.svg": "d58d4d5a63e901fd55f3d9318dafb627",
"assets/assets/icons/users.svg": "01392444bff3a945c64ea11ef1df7ee0",
"assets/assets/icons/weekCard.svg": "7b398854f913ca28d7ed4225b47b250d",
"assets/assets/logos/logo.png": "709b1cacf34c8de705ee04906344f93d",
"assets/assets/logos/logoNoBG.png": "509878e29e918eced13ab1d35faf9932",
"assets/assets/logos/logoNoBG.svg": "db47fe466f9b2c7344deea7a82b8f72f",
"assets/assets/logos/logoNoBG.webp": "aa5607cee3b97129292aa9d032b2bfd5",
"assets/assets/logos/LogoNoText.png": "a860611f51ac55814facb34891faf8a6",
"assets/assets/logos/LogoNoText.svg": "60f368858098f9c0246cfda4e594cfe9",
"assets/FontManifest.json": "611746933447b072d8eabf2fe83756d5",
"assets/fonts/MaterialIcons-Regular.otf": "5879b203459aa98e283c41e35e450051",
"assets/NOTICES": "9d811b1d33943eac6c6db8f527e7cc7a",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/simple_circular_progress_bar/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "26098f81c8f4c83c80a252c635e4031f",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "51df11bddfd52814b7f8913789bf11f3",
"icons/Icon-512.png": "d9485935093e3e77a34aa52a931d62d0",
"icons/Icon-maskable-192.png": "51df11bddfd52814b7f8913789bf11f3",
"icons/Icon-maskable-512.png": "d9485935093e3e77a34aa52a931d62d0",
"index.html": "4643f290a4db45c4b2df410cbdf7565b",
"/": "4643f290a4db45c4b2df410cbdf7565b",
"main.dart.js": "19a3d609e22aef10cb4947146379efac",
"manifest.json": "9015e0800b92b9f83a419a038b696be4",
"version.json": "a0e87adbfa640fc6f7ded889e4889fbb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
