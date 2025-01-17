'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fe9d34002d515f9a2634ef6493dc079a",
"assets/AssetManifest.bin.json": "88e19d104fec6048f04458c307f9dff7",
"assets/AssetManifest.json": "143d4f09e52abe6411535b35c231b192",
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
"assets/assets/icons/add_rounded_painted.svg": "61eaef5e2b7350bf72e8650dcf534a7c",
"assets/assets/icons/add_square_painted.svg": "13f283340a2de333e5c6ca9d7db121ba",
"assets/assets/icons/apps.svg": "11ed60e65e55d6bbda165370fcf21506",
"assets/assets/icons/atom.svg": "5353126f487ffa7e76b90cc982e3b797",
"assets/assets/icons/base_user_photo.jpg": "8ceb0e0265f297d6a8d5e4f048f305e2",
"assets/assets/icons/blank-folder.svg": "1257c427d146a78c3976be6037dc5400",
"assets/assets/icons/calendar.svg": "39d1fb1bf03e2a7403390111d59e38a0",
"assets/assets/icons/camera.svg": "dd6bc6f82d7a23e0f9fd89430d3a59cc",
"assets/assets/icons/cap-student.svg": "676c673508d0574062ca4d8c4d2f6b5e",
"assets/assets/icons/clock.svg": "40eeb5c86f583d2231a9f217d508af11",
"assets/assets/icons/dayCard.svg": "9d434bac9c26f65c708cc7a43063a554",
"assets/assets/icons/email.svg": "6ff2030c8daff2c9106ddca9953bbad5",
"assets/assets/icons/error.svg": "4d991c9b277af301baf42f8b6e25e473",
"assets/assets/icons/exit.svg": "af56ce95c90180d7cc3da0b86d3a5603",
"assets/assets/icons/help.svg": "8ce49a80f1fbc41ca57ae05b76c0cd03",
"assets/assets/icons/info.svg": "ccd4adeab1308179e3215ccd47c289a1",
"assets/assets/icons/link.svg": "8221c1c0a267a06cd148a36db6b55773",
"assets/assets/icons/location-marker.svg": "1851d147d44ef8e7cd886491adbe9979",
"assets/assets/icons/lock.svg": "a79e1ed4430c8c799038e3cbebc36805",
"assets/assets/icons/menu.svg": "1aa327c6c15cb35e8f804b0faaae8531",
"assets/assets/icons/message.svg": "0554fc0c3c0d39167f077b8bec0c200a",
"assets/assets/icons/monthCard.svg": "aae8689cb32fa0df59230eded47ab059",
"assets/assets/icons/newSupport.png": "e0bef58179d5695bcb73672ea641d4d9",
"assets/assets/icons/photo_card_square_painted.svg": "d8532b69f7c18b8556be3190e374951e",
"assets/assets/icons/scanner.svg": "194456801cd5a1061e29aefd941f650e",
"assets/assets/icons/search.svg": "121bf17db1067060cb519e7fa8b7780a",
"assets/assets/icons/settings.svg": "4d3ee7b4586f5eaad28442e0ff4bae3e",
"assets/assets/icons/support.png": "06178fec681170a96d453823acb07f18",
"assets/assets/icons/support.svg": "dfb2f514adae4f51dfad278d241a93d3",
"assets/assets/icons/tasks.svg": "eb40e1ef18d1a97d6efeacd29a5eecf7",
"assets/assets/icons/threeDots.svg": "f652b0d2b6e6e1d62a529bb58ac952a2",
"assets/assets/icons/tutorials.svg": "ed0f1dc4748d3773be1548fa5d29916c",
"assets/assets/icons/user-card.svg": "e31647d2e83482f77a996ee2bf448d6e",
"assets/assets/icons/user.svg": "6df92ffedde0e95874248d52f3c7b40e",
"assets/assets/icons/users.svg": "3f043ba30e92f422d0acf28cfe4f7274",
"assets/assets/icons/weekCard.svg": "7b398854f913ca28d7ed4225b47b250d",
"assets/assets/logos/logo.png": "709b1cacf34c8de705ee04906344f93d",
"assets/assets/logos/logoNoBG.png": "509878e29e918eced13ab1d35faf9932",
"assets/assets/logos/logoNoBG.svg": "db47fe466f9b2c7344deea7a82b8f72f",
"assets/assets/logos/logoNoBG.webp": "aa5607cee3b97129292aa9d032b2bfd5",
"assets/assets/logos/LogoNoText.png": "a860611f51ac55814facb34891faf8a6",
"assets/assets/logos/LogoNoText.svg": "60f368858098f9c0246cfda4e594cfe9",
"assets/FontManifest.json": "611746933447b072d8eabf2fe83756d5",
"assets/fonts/MaterialIcons-Regular.otf": "de18b495b203aac3be52011a41de0128",
"assets/NOTICES": "3740c64ee27ad3a17538abf731513b57",
"assets/packages/simple_circular_progress_bar/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "26098f81c8f4c83c80a252c635e4031f",
"firebase-messaging-sw.js": "1695bbd6f4fb233f662c80dbbc655b7d",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "51df11bddfd52814b7f8913789bf11f3",
"icons/Icon-216.webp": "22548918587bba81a83bbf1d0f74f96d",
"icons/Icon-512.png": "d9485935093e3e77a34aa52a931d62d0",
"icons/Icon-maskable-192.png": "51df11bddfd52814b7f8913789bf11f3",
"icons/Icon-maskable-216.webp": "22548918587bba81a83bbf1d0f74f96d",
"icons/Icon-maskable-512.png": "d9485935093e3e77a34aa52a931d62d0",
"index.html": "8786a8bae095470f744d8339c9882737",
"/": "8786a8bae095470f744d8339c9882737",
"main.dart.js": "4f81e0d2cb18982e4b35e3eeb5ef8492",
"manifest.json": "f8e99357ceaba6e2dc39101a8768e8d3",
"version.json": "4315e1f1d6b224e6929f19e1153c4031"};
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
