export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>Side Navigation Bar</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="stylesheet" href="styles-5INURTSO.css"><style ng-app-id="ng">[_ngcontent-ng-c4170769930]:root{--primary-color: #333;--secondary-color: #555;--link-hover-color: #777;--side-nav-width: 200px}body[_ngcontent-ng-c4170769930]{font-family:Arial,sans-serif;background-color:#f4f4f4}h1[_ngcontent-ng-c4170769930]{color:#333;text-align:center}#side-nav[_ngcontent-ng-c4170769930]{position:fixed;top:0;left:0;width:200px;background-color:#333;height:100%;color:#fff;padding-top:20px}#side-nav[_ngcontent-ng-c4170769930]   ul[_ngcontent-ng-c4170769930]{list-style-type:none;padding:0;display:flex;flex-direction:column;margin:0}#side-nav[_ngcontent-ng-c4170769930]   ul[_ngcontent-ng-c4170769930]   li[_ngcontent-ng-c4170769930]{display:flex;justify-content:center;padding:10px}#side-nav[_ngcontent-ng-c4170769930]   ul[_ngcontent-ng-c4170769930]   li[_ngcontent-ng-c4170769930]   a[_ngcontent-ng-c4170769930]{color:#fff;text-decoration:none;display:block;padding:10px;text-align:center;transition:background-color .3s ease-in-out}#side-nav[_ngcontent-ng-c4170769930]   ul[_ngcontent-ng-c4170769930]   li[_ngcontent-ng-c4170769930]   a[_ngcontent-ng-c4170769930]:hover{background-color:#555}#content[_ngcontent-ng-c4170769930]{margin-left:220px;padding:20px}@media screen and (max-width: 768px){#side-nav[_ngcontent-ng-c4170769930]{width:100%;height:auto;position:relative}#side-nav[_ngcontent-ng-c4170769930]   ul[_ngcontent-ng-c4170769930]   li[_ngcontent-ng-c4170769930]{display:inline-block;padding:10px}#content[_ngcontent-ng-c4170769930]{margin-left:0}}@media screen and (max-width: 768px){#side-nav[_ngcontent-ng-c4170769930]{transform:translate(-100%);transition:transform .3s ease-in-out}#side-nav.open[_ngcontent-ng-c4170769930]{transform:translate(0)}}#menu-toggle[_ngcontent-ng-c4170769930]{display:none}#side-nav.open[_ngcontent-ng-c4170769930] + #menu-toggle[_ngcontent-ng-c4170769930]{display:block}</style><style ng-app-id="ng">.auth-container[_ngcontent-ng-c1600089374]{display:flex;flex-direction:column;width:300px;margin:80px auto;padding:20px;border:1px solid #ccc;border-radius:10px}.auth-container[_ngcontent-ng-c1600089374]   input[_ngcontent-ng-c1600089374], .auth-container[_ngcontent-ng-c1600089374]   button[_ngcontent-ng-c1600089374]{margin:10px 0;padding:8px}.auth-container[_ngcontent-ng-c1600089374]   button[_ngcontent-ng-c1600089374]{background-color:#1976d2;color:#fff;border:none;cursor:pointer}.auth-container[_ngcontent-ng-c1600089374]   button[_ngcontent-ng-c1600089374]:hover{background-color:#1565c0}</style></head>

<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click","input","compositionstart","compositionend"],["blur"]);</script>
  <app-root ng-version="19.2.6" _nghost-ng-c4170769930 ngh="1" ng-server-context="ssg"><button _ngcontent-ng-c4170769930 jsaction="click:;">☰</button><nav _ngcontent-ng-c4170769930 id="side-nav" class><ul _ngcontent-ng-c4170769930><li _ngcontent-ng-c4170769930><a _ngcontent-ng-c4170769930 routerlink="login" href="/login" jsaction="click:;">Login</a></li><li _ngcontent-ng-c4170769930><a _ngcontent-ng-c4170769930 routerlink="dashboard" href="/dashboard" jsaction="click:;">Dashbaord</a></li><li _ngcontent-ng-c4170769930><a _ngcontent-ng-c4170769930 routerlink="human" href="/human" jsaction="click:;">Human Body</a></li></ul></nav><div _ngcontent-ng-c4170769930 id="content"><router-outlet _ngcontent-ng-c4170769930></router-outlet><app-login _nghost-ng-c1600089374 ngh="0"><div _ngcontent-ng-c1600089374 class="auth-container"><h2 _ngcontent-ng-c1600089374>Login</h2><input _ngcontent-ng-c1600089374 type="text" placeholder="Username" value class="ng-untouched ng-pristine ng-valid" jsaction="input:;blur:;compositionstart:;compositionend:;"><input _ngcontent-ng-c1600089374 type="password" placeholder="Password" value class="ng-untouched ng-pristine ng-valid" jsaction="input:;blur:;compositionstart:;compositionend:;"><button _ngcontent-ng-c1600089374 jsaction="click:;">Login</button></div></app-login><!----></div></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-37EOFSUL.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{},{"c":{"14":[{"i":"c1600089374","r":1}]}}]}</script></body></html>`;