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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3d3c570148be55f39aa00e8f0536559d"
  },
  {
    "url": "assets/css/5.styles.72743211.css",
    "revision": "b312b8879b1f3d427e25b3ac081b371e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.7929b963.js",
    "revision": "9baada6ed1a5aa09f67d919d2fcb227d"
  },
  {
    "url": "assets/js/1.64380550.js",
    "revision": "3f03391d4b26b035bf720de6dc5804af"
  },
  {
    "url": "assets/js/2.10f081bf.js",
    "revision": "16c10adc84abb3615ac20a650174fe80"
  },
  {
    "url": "assets/js/3.83cb1d4d.js",
    "revision": "09a5ffa7af068d70984d77c3eb19d178"
  },
  {
    "url": "assets/js/4.36e65d6f.js",
    "revision": "efcc53750a384a55d6371c6e35086186"
  },
  {
    "url": "assets/js/app.fc96dd7b.js",
    "revision": "8439a2ef2c47496b5b135f44b89025e7"
  },
  {
    "url": "googleTrends/index.html",
    "revision": "76d0f96e97b942a2aec4f4d1f8f5dee8"
  },
  {
    "url": "guide/index.html",
    "revision": "9fb74c7f79f44df15052660dd16db4fa"
  },
  {
    "url": "index.html",
    "revision": "7d3ded36af069f7edc1536664fdb2f77"
  },
  {
    "url": "tool/index.html",
    "revision": "26d8953c07d240fbc4fc55597d415682"
  },
  {
    "url": "动图宇宙/index.html",
    "revision": "ff160944b034be9dad7ad46be818c336"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
