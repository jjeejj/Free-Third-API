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
    "revision": "956193d657a7f66624f3aca8f9b234f7"
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
    "url": "assets/js/4.f25f0bf1.js",
    "revision": "00b8d03fd93f1fd4577b0fdc9e175824"
  },
  {
    "url": "assets/js/5.7021a73e.js",
    "revision": "69719d336e29e813891d94fc01b6f8b2"
  },
  {
    "url": "assets/js/6.192db71b.js",
    "revision": "c733cfeeb0c1ec8933399e081293d162"
  },
  {
    "url": "assets/js/7.3b6d76de.js",
    "revision": "78bc9daa904f8585b4c2ded7681865ac"
  },
  {
    "url": "assets/js/8.01f671a9.js",
    "revision": "0046424d97a1662f00f02c93cafd3e1b"
  },
  {
    "url": "assets/js/app.99c9abdc.js",
    "revision": "1cdc76f26cb06988cbdf24ad44de7fe8"
  },
  {
    "url": "googleTrends/index.html",
    "revision": "c6e98fd83033f6a96341af7bfd84b760"
  },
  {
    "url": "guide/index.html",
    "revision": "e6a1789823cb39737ff477a18d305c1c"
  },
  {
    "url": "index.html",
    "revision": "5b6569cf23120892386bd081bf433c7b"
  },
  {
    "url": "tool/index.html",
    "revision": "c92119832a995a906d77c32a036496d1"
  },
  {
    "url": "动图宇宙/index.html",
    "revision": "1b631b597920717e063fd0ebfabdcf60"
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
