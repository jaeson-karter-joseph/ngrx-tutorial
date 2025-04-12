
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/human"
  },
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 504, hash: 'ce939fda0d78d4b76ad09053bf402b79cc887b12a6d504be10eacc74a7b3d470', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: 'd1107c716debe0123f2b852a91b9f10010d49fa5f40cec835cafe64fb469dd43', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 4620, hash: '509db84539c812f26fd521a3b425540a0d55d28388c98d229421febbc77e375f', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 5102, hash: 'e7acb742b6668b3b4438b16bf84bb25d24db22d8fd15ca5f5934457b642c8a1e', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'human/index.html': {size: 31631, hash: 'a215411dfbc380a5104eb38f00ce57689b5ccebd555dbde26fbbc2d5b9ca33a4', text: () => import('./assets-chunks/human_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
