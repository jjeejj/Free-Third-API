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
    "revision": "1bcdc573cc8eb9d5f6204ac6820cc206"
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
    "url": "assets/js/4.8b411f1a.js",
    "revision": "2e33adc652a4fdecc5c9a1aa3fc5259c"
  },
  {
    "url": "assets/js/5.fb0b4656.js",
    "revision": "8d48a0ed4507b4cbc45b12de4bf92a5a"
  },
  {
    "url": "assets/js/6.21d77f97.js",
    "revision": "d2acf03cf911239444999c5a34aa1a47"
  },
  {
    "url": "assets/js/app.bb1aa81e.js",
    "revision": "1f31095104959179fdb45115d6c8f3d0"
  },
  {
    "url": "guide/index.html",
    "revision": "10165cfd76aa83bc133bcfaf87bd7646"
  },
  {
    "url": "index.html",
    "revision": "549b589ade1f5e9dff234affe87c6cd9"
  },
  {
    "url": "tool/index.html",
    "revision": "a3a38b9dd83150d513281ca17a8ae7c5"
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
