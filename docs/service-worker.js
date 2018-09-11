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
    "revision": "b832d8f8a82365b006510b6dc1bba3ef"
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
    "url": "assets/js/5.32b40cc4.js",
    "revision": "2b25849dcfd6e5da7d401ec580e0cc60"
  },
  {
    "url": "assets/js/6.ac30e0a1.js",
    "revision": "2ef15ec1543ecdc2a4b69b5e5eb62827"
  },
  {
    "url": "assets/js/app.d7c7439c.js",
    "revision": "3574810ecdb072607b4980fd76af1779"
  },
  {
    "url": "guide/index.html",
    "revision": "53762d89307ef931f6bfa36b2288ff9f"
  },
  {
    "url": "index.html",
    "revision": "68447f36fd0d73cec0ea05af8e5cfc39"
  },
  {
    "url": "user/index.html",
    "revision": "088394767e9f4c7fd74cefcb620c557f"
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
