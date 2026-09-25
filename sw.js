// Necesario para que el celular permita instalar la app. No guarda copias: siempre usa la versión de GitHub.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request));});
