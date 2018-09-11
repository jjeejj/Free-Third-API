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
    "revision": "831cf615fd0d330a6148f8209dabf4d0"
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
    "url": "assets/js/5.010ea915.js",
    "revision": "4d1081f970f90bdce317b5e6f653d986"
  },
  {
    "url": "assets/js/6.2067afaa.js",
    "revision": "6463f7fcf891796132549be8dc91f01e"
  },
  {
    "url": "assets/js/app.453f7ab4.js",
    "revision": "2bd786fe23e2cf410b0baf5b02eb9182"
  },
  {
    "url": "guide/index.html",
    "revision": "436e93d8da24cdd3e56e53c6bf91466d"
  },
  {
    "url": "index.html",
    "revision": "d1e289fcfe8836ebe1a974159f8babfa"
  },
  {
    "url": "tool/index.html",
    "revision": "05cb479e7ac54a0b971a44c98a3b209f"
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
