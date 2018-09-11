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
    "revision": "359bacec577a0f38649cc4f1886ccfad"
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
    "url": "assets/js/5.c812c0e1.js",
    "revision": "d578855f20179481bf18f6f19526ddd5"
  },
  {
    "url": "assets/js/6.ac30e0a1.js",
    "revision": "2ef15ec1543ecdc2a4b69b5e5eb62827"
  },
  {
    "url": "assets/js/app.1d053d2e.js",
    "revision": "d635cde4088500d65153e6ff2adb5663"
  },
  {
    "url": "guide/index.html",
    "revision": "ecb8a51f640c79d3c7675e803ad4eb7b"
  },
  {
    "url": "index.html",
    "revision": "b80b4d9aeb82a5f32f410d4b0b227cb5"
  },
  {
    "url": "user/index.html",
    "revision": "80c9dd5f1ff4ea1d27bc1e28501e5513"
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
