
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ngrx-tutorial/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/ngrx-tutorial/login",
    "route": "/ngrx-tutorial"
  },
  {
    "renderMode": 2,
    "route": "/ngrx-tutorial/login"
  },
  {
    "renderMode": 2,
    "route": "/ngrx-tutorial/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/ngrx-tutorial/human"
  },
  {
    "renderMode": 2,
    "redirectTo": "/ngrx-tutorial/login",
    "route": "/ngrx-tutorial/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 519, hash: '598c134e2b9de717af522dc32364c1cce2c083d414d0ddbdcf5c7e3b04bac9aa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1032, hash: '4d4446d1c61c7a2c9bcb4dfecd417c7662bae214cb7da67137842b3a2f881f0b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 4680, hash: '0f49cba43aaa229f118884eb5eb6cc7c454675a26110d8a06cf4ce1548c35780', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'human/index.html': {size: 31691, hash: '74404e5c88c2e640b2267ceaf2227abb7f3556deaba3db3e15815ce0cbd9915b', text: () => import('./assets-chunks/human_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 5162, hash: '73c1cf5449f040ad817a3bfb715459284a506a65aa7b483c3d993977dde903a6', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
