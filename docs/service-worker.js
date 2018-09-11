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
    "revision": "850f0069bd9990a7d863bd3499075591"
  },
  {
    "url": "assets/css/0.styles.1ceef896.css",
    "revision": "1ce51ce87e96229b52eeaca3cb0acd97"
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
    "url": "assets/js/5.6874f3ad.js",
    "revision": "5fc894de2f55e399233e3d82f77fae22"
  },
  {
    "url": "assets/js/6.ac30e0a1.js",
    "revision": "2ef15ec1543ecdc2a4b69b5e5eb62827"
  },
  {
    "url": "assets/js/app.508ff3b1.js",
    "revision": "a1632746d73470588be6005fa30ba13a"
  },
  {
    "url": "guide/index.html",
    "revision": "7c5016375b12e26fecef25a5cc610723"
  },
  {
    "url": "index.html",
    "revision": "9750949a02747ec162066934e679a16d"
  },
  {
    "url": "user/index.html",
    "revision": "d307a5f491c60e780485607e2375cf2f"
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
