!function(){"use strict";const e=["client/client.867d8499.js","client/sweetalert.26ba3a78.js","client/client.1de6e514.js","client/index.f8b6efa3.js"].concat(["service-worker-index.html",".DS_Store","CNAME","favicon.ico","fonts/proxima_nova_light.ttf","fonts/proxima_nova_semibold.ttf","global.css","images/.DS_Store","images/codespace_icon.png","images/codespace_screenshot.png","images/course_icons/.DS_Store","images/course_icons/ethereum.png","images/course_icons/phoenix.png","images/ludu_bg.png","images/safello_screenshots/.DS_Store","images/safello_screenshots/bitcoinse.jpg","images/safello_screenshots/buy.jpg","images/safello_screenshots/landing.jpg","images/top_bg.png","images/transition.svg","images/tristan.jpg","u/JarviOS.zip"]),s=new Set(e);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1589172221857").then(s=>s.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)"cache1589172221857"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&s.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1589172221857").then(async s=>{try{const t=await fetch(e.request);return s.put(e.request,t.clone()),t}catch(t){const n=await s.match(e.request);if(n)return n;throw t}}))))})}();