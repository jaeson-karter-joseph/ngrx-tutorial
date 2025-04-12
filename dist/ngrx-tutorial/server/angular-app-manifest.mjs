
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/humary-body/login",
    "route": "/humary-body"
  },
  {
    "renderMode": 2,
    "route": "/humary-body/login"
  },
  {
    "renderMode": 2,
    "route": "/humary-body/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/humary-body/human"
  },
  {
    "renderMode": 2,
    "redirectTo": "/humary-body/login",
    "route": "/humary-body/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 516, hash: 'fbfa22c7b51b71a4f5d944d0ed63bd4d2743575ff5ef342e8568eb1a49993383', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1029, hash: 'cda6e9808c187af723ef30b5e92185c5056dfd53cacaef02175abc8989b1df98', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'humary-body/login/index.html': {size: 5153, hash: '8e1797ad7d971af4935be911a1652b6e56c24472356becad97299e5f449cbb29', text: () => import('./assets-chunks/humary-body_login_index_html.mjs').then(m => m.default)},
    'humary-body/dashboard/index.html': {size: 4671, hash: '8f36f8833b8d9a36380db273d3abccc316d585ed94b67f71e58a2464d1bba6be', text: () => import('./assets-chunks/humary-body_dashboard_index_html.mjs').then(m => m.default)},
    'humary-body/human/index.html': {size: 31682, hash: 'bdef15a8bbeb61c6bc3e53fafa4a718b206f86e7b4ff228863fd317aad798b74', text: () => import('./assets-chunks/humary-body_human_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
