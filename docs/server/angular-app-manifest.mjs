
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
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
    'index.csr.html': {size: 505, hash: 'e83a79703e87791ed9d8d68dae46549c624f9bcfad0a7304cd5f92b46a257047', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: '4717b9fc29de595ca2e4983a40a10516e9b30d9a127c53d74f5a4c96cea968a2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 5106, hash: '6bafdc72abab68349cb5bec0f09e19970f61009158b8857bb61909511637d03f', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 4624, hash: '945a1a9f063822499c18cdddfb812c9682b40557971621bbe945abdb57e39c79', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'human/index.html': {size: 31635, hash: 'c65da38c1255f835839dc43437f78c380cecf7ed519ec9a86d3d9d757210e0c4', text: () => import('./assets-chunks/human_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
