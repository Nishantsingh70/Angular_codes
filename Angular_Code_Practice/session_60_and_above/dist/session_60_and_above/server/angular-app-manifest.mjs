
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24646, hash: '3fb6c936bdceffb69c80b5b07284781765044ff3b9ae7c02660a7028f77e79f4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17162, hash: 'd6984a1dd61cce6bd4733c2cba71b8a204eef4d9a0ef96bd63f6e2b9026a8954', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 64728, hash: 'de3279a08a1c1b1972fcdb560fea11d3bac204bbc0696d704930418deb46792a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OPUTW5UJ.css': {size: 8043, hash: 'i68XcmjPijU', text: () => import('./assets-chunks/styles-OPUTW5UJ_css.mjs').then(m => m.default)}
  },
};
