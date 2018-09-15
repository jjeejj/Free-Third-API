/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "258c6da5911f6a0d3b67442352047850"
  },
  {
    "url": "assets/css/0.styles.39d8b704.css",
    "revision": "0b104e06bbcdf55ac04c0380c87c0e0f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.eeb1c1bf.js",
    "revision": "d4d31fdbf647530bf2534bc8ffed240f"
  },
  {
    "url": "assets/js/4.06846cf4.js",
    "revision": "1489cc62ab2da6e2f6df77feb85d2fc9"
  },
  {
    "url": "assets/js/5.643bdf62.js",
    "revision": "a1d75a1a7e71e6f0b6436c8b088852a8"
  },
  {
    "url": "assets/js/6.cd783726.js",
    "revision": "c9f2bd924fb74d4e84024b29cee1beb4"
  },
  {
    "url": "assets/js/7.3ac0c4e4.js",
    "revision": "3f4fe1ebbcf71531895379b56e05c66d"
  },
  {
    "url": "assets/js/app.c52b7f3d.js",
    "revision": "4d9ba5848337aa727ad1375b5f506d4b"
  },
  {
    "url": "guide/index.html",
    "revision": "4781c7cae413afc8c89de9b332b088be"
  },
  {
    "url": "index.html",
    "revision": "44283f4aa20835ea6547f8bc9f8ccea6"
  },
  {
    "url": "tool/index.html",
    "revision": "b55d7a585e412452b207745ae7c4d4db"
  },
  {
    "url": "动图宇宙/index.html",
    "revision": "68543ec39fdecc19b333d74a965fc721"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
