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
    "revision": "7c5145e93520354aacd6d6d4bfcffec0"
  },
  {
    "url": "assets/css/0.styles.f68bb875.css",
    "revision": "135bd6d1a6fd70154f2b9daa86e3008d"
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
    "url": "assets/js/5.f9a8c0a8.js",
    "revision": "ee7d4ec63e3ce43c8730acb993bb44b6"
  },
  {
    "url": "assets/js/6.ac30e0a1.js",
    "revision": "2ef15ec1543ecdc2a4b69b5e5eb62827"
  },
  {
    "url": "assets/js/app.fb1e63c5.js",
    "revision": "d296d8b86142b7d06773b3754a43615e"
  },
  {
    "url": "guide/index.html",
    "revision": "6899a6bd4a045d9b6accad4fa40f5da3"
  },
  {
    "url": "index.html",
    "revision": "8f48e28c8e28f6e4db19ab85956952f8"
  },
  {
    "url": "user/index.html",
    "revision": "b04650f69c3beff328894b063e3aff5c"
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
