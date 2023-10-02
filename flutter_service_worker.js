'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "20f8f0899481ae1de84592b706f4008b",
".git/config": "1283a90e62574e9921720d21c3d2c345",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fbd500767b1ae823c62846347637c570",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "713caae783341023bc045649c4da4a1e",
".git/logs/refs/heads/main": "c6381c5d3397a976696bb5be4f71a208",
".git/logs/refs/remotes/origin/main": "cf866e287a1a81d293e6ea98811bed49",
".git/objects/00/f4f90b206f3c521b335f49efd7cf49b468f7c0": "7b55ecc23ef21a93e3f67fd9ad7da0a0",
".git/objects/07/a0f0c21569fff643da8537805b0ec5656c02d4": "e15a532c31f7fb2af9a55c4e0dfedec3",
".git/objects/08/1c3d37448fb5340e15d53632f0d22a0fe9b692": "249cf7ac39424de5d6f4adfc117fe302",
".git/objects/11/fc4c42288b3d59c0feacfdccb686711ff3c903": "87512b76311400dff3f88bb1b44cb3cc",
".git/objects/13/a236220ca56b064cb13aa2f42184a456449b6d": "c848b7f95bc4f1cc788c491ba4db8e0f",
".git/objects/17/a675a69e7f6aaa95679e389e78ce4428bceefe": "1fb22c3c78d49aefa2a20ab68df4fbb9",
".git/objects/19/f39f2f05cdd0396af508b421c73eb037f3ceba": "c9f141597794ad3a3dcec241337c3c2e",
".git/objects/1d/2f8032153f4883d612a7de64e45833c84594db": "f2da5bcb5b0384710e835ad994ee9b3e",
".git/objects/1e/d7a33231906d8c28e7197085c439c1f7066cb3": "c81e7b5d9ecb7add0a8f1d648e91175e",
".git/objects/1f/07dfed0730b7c1f80a0430c67598d1fd05e1c8": "a8164d5ffa373e8737f5ffb8b6eaf04d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2a/b37f4cda497ea733ab6bf4cd6b92d14aa9f34a": "e9a97309480b0fa60df5a0bbca081a58",
".git/objects/2c/7b512431b877138955d955c16013af906c080c": "cb1464d2d1e5db0191d0f6b600a90a18",
".git/objects/2d/62613579d8931c47231a27608edcc09b11191d": "8a282e759744f86730b1644d9f4b8970",
".git/objects/2e/784f8276b01f1c4618a558cfbdd1d40d5bf6f2": "ad399ca8ea1bf192d3cc8a6bac424d3f",
".git/objects/30/8e3a77ca0770dc7717873233369e8d4070c249": "1be1271c125fda73080f16f386360448",
".git/objects/31/7aa3764fd410ca37ae8a758f0575802bd2e4ed": "5db4f5d23007406cd77008b4f05a7543",
".git/objects/32/512b6b4cb6fb6edd55fcb5e7558882cf8fe25e": "f1d5b9bac0291502b8fb1a630266c9c4",
".git/objects/32/b692835471f6a3a7982afddb257771c80332bc": "e1aafcbf438b105a3662407929528033",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/de11a30e2b6e64a4cf72273a31a69d2923e149": "9e310c60962ce8816070cf8a96284797",
".git/objects/36/ebd5a3612089d402ab2f766473141ff60606f0": "5e5d7769170491fa012ddf7e0e3e6062",
".git/objects/39/0b5bee59b01e77f02cbfd703e8509210a7ad92": "8ff6facba8a986d6384d938a6408b2b8",
".git/objects/40/ac6983dfacab31ff7a8dea5f3fde7deb4df167": "053e693c0af1ecf84c85995c58b9116c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/e3ebb0355573c459f942ae61980fc3d839e329": "6ab28fafd0508569a08277aec411611f",
".git/objects/4f/e6dae0c8b3d8b9fd48cf4c2b126018cc3572f3": "eb716a8f42e5429e5666b6f4adfc2827",
".git/objects/50/8a6bf84dc343fcd87784d43b322f604b2a34db": "02d99133f7466c7b706d3ce14641891f",
".git/objects/52/f3070e65d9b71b20782950f563664023c04d8f": "b38317402abd64c60fa176ccc1e0f540",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/dea65fe55bd92ab45b57657e6aabf78056a9ad": "084f0a28d681911a0eb017cbdb805b04",
".git/objects/57/1faed3c8f14bcf644943120079b3047f88aefe": "67020fd542f24e0fa9e36eda430b2000",
".git/objects/59/825e07993ddc74fc83190c9e35d94bc024bf5c": "188a67969e2f3ba66231444c76861138",
".git/objects/5b/2e24cc7d51e3bcdfc37aa5cc3fea0414f5e50c": "c7816925de67ec572b8f5758439ddaef",
".git/objects/5d/c142ea13e8a3f831127d7bf1534f662ef772fa": "6b8d35858bd3ec1fd16294fbd899445c",
".git/objects/5f/38f3df986d1796e01e058656aac1a469e45c6c": "0f8e37d4c5ae6194c71bf86f26eeb33e",
".git/objects/62/8fcd06c8d815a93191e9f4c6c63fed3cecfebb": "e101f68ff56210873cabbdaae2c07de9",
".git/objects/64/f793a90e2c9190afa71c6dedadf03c3f6ac69a": "9ba052609b0e36ff5bd449052b7488f8",
".git/objects/65/e6bba4ce721cd331712c2e1064712dcd2548e3": "a5cac046546074a661b87acfb6c2e840",
".git/objects/6b/973c3f134f598de6a15ee27768ecf01a2fdee1": "d128d1cde7b4824432d4d53733171e3b",
".git/objects/6b/d89f56e13e700977b5a77cf5ce26c97c1b1177": "ebcf3d4ade8d19142d20c1ac49c8a82f",
".git/objects/6c/d5e83195f1f362e50e5ebce671d33ad535d389": "25752731dbac3462e9b6e0698e548b68",
".git/objects/72/dfa2ad3f75d71dee79731275e83ae27d34a397": "b5a81bfdecbbad865e506065e8e1c8af",
".git/objects/74/34ed440f395255991e5f8651cd55bd7684faf7": "54543f0eb3389e1045f68132b56af75a",
".git/objects/75/0e8508b1107d743b5cacbef36d832c61879aa1": "270a1cef1c35780f07615eb2535f17b1",
".git/objects/7c/695b831a14340f706735642f9383d4ec1fbd9b": "558c10cd414c94c94b6577a4b0cfa79c",
".git/objects/7e/45a39b04235958522593417b6c2846f88c63f8": "c312ea7271307ebbab5ff8ce0b6e395b",
".git/objects/80/202073917bcbb8ec7cb9743227c032108f9722": "a9d028a18280d87e88daf844f7251452",
".git/objects/86/1055f1473e018a3ca3611fefeabfe9d1df52ea": "6d29509bbbefdcb56a8458847348a509",
".git/objects/87/f7994e92e7e1d50b612bb24f336cfa129c9f5c": "2e14f01ee8623f52c2b424413fc57dd8",
".git/objects/8f/43df48b2cb0387e2ada1472555a8da749bef16": "81d3975f645fb31540f1f15078b4c735",
".git/objects/90/046e4dd6b98fbfc8666b7f8f94c90c8601a188": "fee4cb7b69e75a5a2ad1f987c20cf92b",
".git/objects/90/a62b5254100f39401e29c8254347414ba2ff81": "0239e47b71199c3b6f11aad43646a024",
".git/objects/90/e9dec013176f19f0c9c9d89ddd72889b07435a": "d7454375b1eb50fce811f5376781bcd1",
".git/objects/90/f4fbe2180adb76678121f53ce1b800b57bde27": "1f2422a1583af15c6f3f45d84c15cc6f",
".git/objects/97/b3bd97fa4b47d6c7684720a9e641e9d3582211": "64f80d87bdf69ff930c007d49b108ae0",
".git/objects/9a/4d28d463cd2942d5dbfead21a06f872e159462": "fcec8600c5d32741f7b056c886a302ba",
".git/objects/9e/ad82f25f7c041f2fd8fd3e49f2ee939e30bdfe": "79260ce41c48ec51efcce6d93a951a55",
".git/objects/9f/151cc1aebddf7cdf69991741349abbe313209d": "31b0638aa882814fc5ec340b6260a34c",
".git/objects/9f/8420b1519b43fc7b4550c891d4185dc76a4976": "47cf9753e9a5e399f88764ef06c3eb0d",
".git/objects/a1/98c427b6aec6248df24e5767eb812a989b6ac2": "94d53f22d1bab0675cc6fd02b236b6ab",
".git/objects/a5/191b5e55b3008da0231710d6ba2fc7d5f4d408": "7e59eda17ef5e7a5e15090e9130e1783",
".git/objects/a5/75df073dbffd1a806f1806b82d81ab26135c38": "61d0c8fd902efc5caa4dd4c06f050531",
".git/objects/a9/0641cd353f1a02817df8dbbe727073d6369314": "58e945fcaf3153cc99babf305b55acc7",
".git/objects/b3/6d53a017e973f37af64dc0775127e1ebe4527e": "ca392f60d969cbef7a2e4ba1220770be",
".git/objects/b8/0d97963edecf54e86bec2745169a3f7e462888": "f5f57b88f3691d6124829c374193bc0c",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/faa7b86bf93d88c6ca231e21d57022d138e733": "20e9fcc66b6046580090262f63962fd2",
".git/objects/c0/8cc0154d3115b6b14fb7680c813e848de5ce81": "b09a8011138ae1b4cff94b6dc346f76a",
".git/objects/c6/0bf3555e5a46947bb129401dc1780349dc9f7c": "4c0af88e2b0ab24aa68ea88592188fe7",
".git/objects/c7/65476a17d05e1f303e849b3724a276f38a555c": "5116582aa8651ec0d3155a2a8422a844",
".git/objects/ce/172a8afad28823cff7c2d83ac97ec35bb8371a": "de50ee1f6768d5d5b0e51aa7512531a3",
".git/objects/ce/ca2dd3700dda8d60cb69c535f311067fd909e2": "9be9ea153cc063ef25330d68e592d6f8",
".git/objects/d2/e5bce6f4da6cb557837067e5cb10e9629ea630": "aee9e92d54e5911b81f5e178ab7ce062",
".git/objects/d4/3a48907e4e9b8cbca943e4c9133113ba8e540e": "5d3235b5b2c4386b4788682b5d5a3067",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/53c212a0f65ec58a767ee99a23e55232d9ec81": "085922e8f6861f229d9810e642fa7063",
".git/objects/de/0c053e4977833297128629317dce4404a7d27a": "86c39f6bff118418a29d85e55857e66a",
".git/objects/de/8807dbe92d3d8ac752d03e3f1434985b2f3185": "829f0b8a76fb6136760be9fb21add235",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/39db1dfa87cff1d896066657307389bf6b623d": "0834d8cd1e6fc6fe91ce0e8e3b1bafa2",
".git/objects/e1/fd360de6faf76558dd529327635a35b2fc17e8": "feaa29dc2850921cd93bbfac761f13ff",
".git/objects/e2/63b36f4edfdefc2b68022c928185cd028d8f6b": "14b39dab0db3939f4a7de1ea00eff270",
".git/objects/e3/7d4a0bd2ccab3773464bf68898ff2f09958d14": "0d749df172cb67a72c884f7c1dc8f8a8",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/e4f6a2dd4d7912925b40c800c2407f42baaf54": "e7103b286b6e00a54d4335fc51a7b897",
".git/objects/fe/d40961b740664c8c565448a8700700665947e2": "08a59ec51b14e2ccffb80fb3b3ad2075",
".git/refs/heads/main": "752f75b53472c2fbae7c242f4d37da88",
".git/refs/remotes/origin/main": "752f75b53472c2fbae7c242f4d37da88",
"assets/AssetManifest.bin": "dc20e872ba1d7f8bd513f65d3ee4c1af",
"assets/AssetManifest.json": "80f6dbb97d0f2e59cb25526e82db8250",
"assets/assets/acessories.jpg": "78aa02b794bebf6758c7884350179beb",
"assets/assets/cellpoint.ico": "9d3bcc9ee157fe032a0317adef199c64",
"assets/assets/cellpoint.jpg": "aeb4677694ac044bab9a996527b1d051",
"assets/assets/cellpoint.png": "edf5ccacbcd2be79a188f7f283f4c64b",
"assets/assets/cellpoint2.jpg": "913fd3d3dceb6bafabd2a5e442323765",
"assets/assets/cellpointbackground.jpg": "a912ef6de5557c89509f1f0c3c612e52",
"assets/assets/cellpointlogo.png": "df249fd622c1a8df5c48bdf5b04a554d",
"assets/assets/image1.jpg": "b7ce7497b7a31cd8b22c463d3805ae9d",
"assets/assets/image11.jpg": "735677d988405f03b4dcff8f5528f365",
"assets/assets/image22.jpg": "5217ddac5ab55470e021a79f3c231fa8",
"assets/assets/image33.jpg": "63dd571ecee941a36db76c75e3dbbc56",
"assets/assets/iphone.png": "539ff32ec9d53f12952896dbbf6a28cb",
"assets/assets/iphoneimage.jpg": "edc121e49ef693b621d01c59324b1846",
"assets/assets/logoname.png": "acb8ad7f14eace2ef08733e2b90ed5e7",
"assets/assets/logoonly.png": "1595a05432f19982b618adcd145307d7",
"assets/assets/logowhite.jpg": "d0ab553a7701d6bd8aadd8f7ac185db9",
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
"assets/fonts/MaterialIcons-Regular.otf": "060310dca80e9bf2e491939e3325d8ba",
"assets/NOTICES": "72a1469ebf6c4d0be1929a251852d11a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "dd5b7e38ac853fcf41faa69cf49aa175",
"canvaskit/canvaskit.wasm": "6e7859012ffcf1d482a8bbc473b8171f",
"canvaskit/chromium/canvaskit.js": "36d162e8f857ceeacbf01ed75a382f56",
"canvaskit/chromium/canvaskit.wasm": "b3fabff5b6c1cb4d4e81f4551eba9ba2",
"canvaskit/skwasm.js": "5256dd3e40ec9fe1fc9faa51a116bcfd",
"canvaskit/skwasm.wasm": "4ca73baf420612f1657d5b2be4b7467d",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"cellpoint.ico": "ae6c58de9a2e3f71074423753add7331",
"flutter.js": "a96e4cac3d2da39d86bf871613180e7b",
"icons/Icon-192.png": "ca82abb872ab2b0df4243d88be23cda3",
"icons/Icon-512.png": "4722b6dfb11a5723941e760a7db6a111",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "901518bd610ef3b68ffea6415250c9a8",
"/": "901518bd610ef3b68ffea6415250c9a8",
"main.dart.js": "8d04152ea97a9ae019775f9faf4c7d89",
"manifest.json": "8a6c8d180861c4bb7f473157ea2fda37",
"version.json": "2d275cd1658a9ce66b121a15c21afa69"};
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
