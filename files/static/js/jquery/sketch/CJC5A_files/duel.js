/*
 MIT License (c) copyright B Cavalier & J Hann */
window.curl&&alert("DUEL included more than once!");typeof $sf=="undefined"&&($sf={});if(typeof $sf.env=="undefined")$sf.env="prod";$sf.env_cdn="wsimg.com";$sf.proto="https:"==document.location.protocol?"https:":"http:";if(typeof $sf.plabel=="undefined")$sf.plabel=1;if(typeof $sf.skin=="undefined")$sf.skin="app";if(typeof $sf.culture=="undefined")$sf.culture="en";if(typeof $sf.preload=="undefined")$sf.preload=1;if(typeof $sf.loader=="undefined")$sf.loader=2;
if(typeof $sf.base==="undefined")$sf.base={};if(typeof $sf.util==="undefined")$sf.util={};if(typeof $sf.getjQuery=="undefined")$sf.getjQuery=function(){return window.jQuery};if(typeof $sf.require=="undefined")$sf.require={};if(typeof $sf.require.local==="string")$sf.preload=0,$sf.loader=1;if(typeof $sf.require.js_root=="undefined")$sf.require.js_root=$sf.proto+"//img4."+$sf.env_cdn+"/starfield/duel/v2.2.4";if(typeof $sf.require.jquery=="undefined")$sf.require.jquery=$sf.proto+"//img4.wsimg.com/starfield/jquery/v1.7.2/jquery.js";
if(typeof $sf.require.css_root=="undefined")$sf.require.css_root=$sf.proto+"//img2."+$sf.env_cdn+"/starfield/duel/v2.2.4";if(typeof $sf.require.img_root=="undefined")$sf.require.img_root=$sf.proto+"//img1."+$sf.env_cdn+"/starfield/duel/v2.2.4";$sf.require.core=$sf.require.js_root+"/starfield/duel/v2.2.4/sf.core/sf.core";$sf.require.core_css=$sf.require.css_root+"/starfield/duel/v2.2.4/sf.core/sf.core.css";if(typeof $sf.bundle==="undefined")$sf.bundle={};var bnd=$sf.bundle;
bnd["sf.growl"]=bnd["sf.tabs"]=bnd["sf.dialog"]=bnd["sf.alerts"]=bnd["sf.msg.overlay"]=bnd["sf.base.dialog"]=bnd["sf.base.modal"]=bnd["sf.base.flyout"]=bnd["sf.i18n/duel"]="sf.core.pkg";var c={pluginPath:$sf.require.js_root+"/curl/plugin",paths:{},apiName:"require"};if(typeof $sf.baseUrl=="string")c.baseUrl=$sf.baseUrl;if(typeof $sf.debug!="undefined")c.debug=$sf.debug;if(typeof $sf.require.paths==="object")for(p in $sf.require.paths)c.paths[p]=$sf.require.paths[p];window.curl=c;
(function(e){function f(){}function a(q,a){return B.call(q).indexOf("[object "+a)==0}function b(q){return q&&q.charAt(q.length-1)=="/"?q.substr(0,q.length-1):q}function j(q,a){var b,d,f;d=1;q=q.replace(K,function(a,q,b){b&&d++;f=!0;return""});return f?(b=a.split("/"),b.splice(b.length-d,d),b.concat(q||[]).join("/")):q}function h(a){var b=a.indexOf("!");return{resourceId:a.substr(b+1),pluginId:b>=0&&a.substr(0,b)}}function g(){}function d(a){g.prototype=a;a=new g;g.prototype=z;return a}function i(){function a(q,
b,d){e.push([q,b,d])}function b(a,q){for(var d,f=0;d=e[f++];)(d=d[a])&&d(q)}var d,e,g;d=this;e=[];g=function(d,i){a=d?function(a){a&&a(i)}:function(a,q){q&&q(i)};g=f;b(d?0:1,i);b=f;e=s};this.then=function(b,f,e){a(b,f,e);return d};this.resolve=function(a){d.resolved=a;g(!0,a)};this.reject=function(a){d.rejected=a;g(!1,a)};this.progress=function(a){b(2,a)}}function l(a,b,d,f){return a instanceof i?a.then(b,d,f):b(a)}function m(a,b,d){return function(){var f;--a>=0&&b&&(f=b.apply(s,arguments));a==0&&
d&&d(f);return f}}function k(){function b(a,d,f){var e;e=o.createContext(n,s,[].concat(a));this.then=a=function(a,d){l(e,function(d){a&&a.apply(s,d)},function(a){if(d)d(a);else throw a;});return this};this.next=function(a,d){return new b(a,d,e)};d&&a(d);l(f,function(){o.getDeps(e)})}var d=[].slice.call(arguments);a(d[0],"Object")&&(n=o.extractCfg(d.shift()),o.checkPreloads(n));return new b(d[0],d[1])}function r(a){var d=a.id;if(d==s)if(E!==s)E={ex:"Multiple anonymous defines in url"};else if(!(d=
o.getCurrentDefName()))E=a;if(d!=s){var b=u[d];if(!(d in u))b=o.resolvePathInfo(d,n).config,b=u[d]=o.createResourceDef(b,d);if(b instanceof i)b.useNet=!1,o.defineResource(b,a)}}var n=e.curl,t=e.document,w=t&&(t.head||t.getElementsByTagName("head")[0]),y=w&&w.getElementsByTagName("base")[0]||null,A={},G={},C={},x="addEventListener"in e?{}:{loaded:1,complete:1},z={},B=z.toString,s,u={},v=!1,E,D=/\?/,I=/^\/|^[^:]+:\/\//,K=/(?:^|\/)(\.)(\.?)\/?/g,L=/\/\*[\s\S]*?\*\/|(?:[^\\])\/\/.*?[\n\r]/g,M=/require\s*\(\s*["']([^"']+)["']\s*\)|(?:[^\\]?)(["'])/g,
H,o;o={createContext:function(d,b,f,e){function g(a){return j(a,m.ctxId)}function h(b,f){var e,j,n,k;e=f&&function(a){f.apply(s,a)};if(a(b,"String")){j=g(b);n=u[j];k=n instanceof i&&n.exports;if(!(j in u))throw Error("Module not resolved: "+j);if(e)throw Error("require(id, callback) not allowed");return k||n}else l(o.getDeps(o.createContext(d,m.id,b)),e)}var m;m=new i;m.ctxId=m.id=b||"";m.isPreload=e;m.depNames=f;m.require=h;h.toUrl=function(a){return o.resolvePathInfo(g(a),d).url};m.toAbsId=g;return m},
createResourceDef:function(a,d,b,f){var e,g,i,h;e=o.createContext(a,d,s,b);e.ctxId=f==s?d:f;g=e.resolve;i=m(1,function(a){e.deps=a;try{h=o.executeDefFunc(e)}catch(d){e.reject(d)}});e.resolve=function(a){i(a);u[e.id]=h;g(h)};e.exportsReady=function(a){e.exports&&(i(a),e.progress(G))};return e},createPluginDef:function(a,d,b,f){a=o.createContext(a,d,s,b);a.ctxId=f;return a},getCjsRequire:function(a){return a.require},getCjsExports:function(a){return a.exports||(a.exports={})},getCjsModule:function(a){var d=
a.module;if(!d)d=a.module={id:a.id,uri:o.getDefUrl(a),exports:o.getCjsExports(a)},d.exports=d.exports;return d},getDefUrl:function(a){return a.url||(a.url=o.checkToAddJsExt(a.require.toUrl(a.id)))},extractCfg:function(a){function f(e,i){var m,l,n,k,r;for(r in e){n=e[r];k=a;l=h(b(n.id||n.name||r));m=l.resourceId;if(l=l.pluginId){k=g[l];if(!k)k=g[l]=d(a),k.pathMap=d(a.pathMap),k.pathList=[];delete e[r]}if(i){l=n;var v=void 0,F=void 0,v=l.path=b(l.path||l.location||""),F=l.main||"main";l.config=l.config;
l.main=F.charAt(0)=="."?b(j(F,v)):b(v)+"/"+F}else l={path:b(n)};l.specificity=m.split("/").length;m?(k.pathMap[m]=l,k.pathList.push(m)):k.baseUrl=o.resolveUrl(n,a)}}function e(a){var d=a.pathMap;a.pathRx=RegExp("^("+a.pathList.sort(function(a,b){return d[a].specificity<d[b].specificity}).join("|").replace(/\//g,"\\/")+")(?=\\/|$)");delete a.pathList}var g;a.baseUrl=a.baseUrl||"";a.pluginPath="pluginPath"in a?a.pluginPath:"curl/plugin";a.pathMap={};g=a.plugins=a.plugins||{};a.pathList=[];f(a.paths,
!1);f(a.packages,!0);for(var i in g){var m=g[i].pathList;if(m)g[i].pathList=m.concat(a.pathList),e(g[i])}e(a);return a},checkPreloads:function(a){var d;(d=a.preloads)&&d.length>0&&l(v,function(){v=o.getDeps(o.createContext(a,s,d,!0))})},resolvePathInfo:function(a,d,e){var f,g,i;f=d.pathMap;e&&d.pluginPath&&a.indexOf("/")<0&&!(a in f)&&(a=b(d.pluginPath)+"/"+a);e=I.test(a)?a:a.replace(d.pathRx,function(d){g=f[d]||{};i=g.config;return g.main&&d==a?g.main:g.path||""});return{path:e,config:i||n,url:o.resolveUrl(e,
d)}},resolveUrl:function(a,d){var e=d.baseUrl;return e&&!I.test(a)?b(e)+"/"+a:a},checkToAddJsExt:function(a){return a+(D.test(a)?"":".js")},loadScript:function(a,d,b){var f=t.createElement("script");f.onload=f.onreadystatechange=function(b){b=b||e.event;if(b.type=="load"||x[f.readyState])delete C[a.id],f.onload=f.onreadystatechange=f.onerror="",d()};f.onerror=function(){b(Error("Syntax or http error: "+a.url))};f.charset="utf-8";f.async=!0;f.src=a.url;C[a.id]=f;w.insertBefore(f,y)},extractCjsDeps:function(a){var d=
[],b;(typeof a=="string"?a:a.toSource?a.toSource():a.toString()).replace(L,"").replace(M,function(a,f,e){e?b=b==e?s:b:b||d.push(f);return""});return d},fixArgs:function(d){var b,f,e,g,i,h;i=d.length;e=d[i-1];g=a(e,"Function")?e.length:-1;i==2?a(d[0],"Array")?f=d[0]:b=d[0]:i==3&&(b=d[0],f=d[1]);!f&&g>0&&(h=!0,f=["require","exports","module"].slice(0,g).concat(o.extractCjsDeps(e)));return{id:b,deps:f||[],res:g>=0?e:function(){return e},cjs:h}},executeDefFunc:function(a){var d;d=a.res.apply(a.cjs?a.exports:
s,a.deps);if(d===s&&a.exports)d=a.module?a.exports=a.module.exports:a.exports;return d},defineResource:function(a,d){l(a.isPreload||v,function(){a.res=d.res;a.cjs=d.cjs;a.depNames=d.deps;o.getDeps(a)})},getDeps:function(a){function d(a,b,f){h[b]=a;f&&k(a,b)}function b(d,f){var e,g,h,j;e=m(1,function(a){g(a);r(a,f)});g=m(1,function(a){k(a,f)});h=o.fetchDep(d,a);(j=h instanceof i&&h.exports)&&g(j);l(h,e,a.reject,a.exports&&function(a){h.exports&&(a==A?g(h.exports):a==G&&e(h.exports))})}function f(){a.resolve(h)}
var e,g,h,j,n,k,r;h=[];g=a.depNames;j=g.length;g.length==0&&f();k=m(j,d,function(){a.exportsReady&&a.exportsReady(h)});r=m(j,d,f);for(e=0;e<j;e++)n=g[e],n in H?(r(H[n](a),e,!0),a.exports&&a.progress(A)):n?b(n,e):r(s,e,!0);return a},fetchResDef:function(a){o.getDefUrl(a);o.loadScript(a,function(){var d=E;E=s;a.useNet!==!1&&(!d||d.ex?a.reject(Error((d&&d.ex||"define() missing or duplicated: url").replace("url",a.url))):o.defineResource(a,d))},a.reject);return a},fetchDep:function(a,d){var b,f,e,g,j,
m,k,r,v,D;b=d.toAbsId;f=d.isPreload;e=h(a);m=e.resourceId;g=b(e.pluginId||m);k=o.resolvePathInfo(g,n,!!e.pluginId);if(e.pluginId)j=g;else if(j=k.config.moduleLoader)m=g,g=j,k=o.resolvePathInfo(j,n);r=u[g];if(!(g in u))r=u[g]=o.createResourceDef(k.config,g,f,e.pluginId?k.path:s),r.url=o.checkToAddJsExt(k.url),o.fetchResDef(r);g==j&&(v=new i,D=n.plugins[j]||n,l(r,function(a){var d,e,g;g=a.dynamic;m="normalize"in a?a.normalize(m,b,D)||"":b(m);e=j+"!"+m;d=u[e];if(!(e in u)){d=o.createPluginDef(D,e,f,
m);g||(u[e]=d);var h=function(a){d.resolve(a);g||(u[e]=a)};h.resolve=h;h.reject=d.reject;a.load(m,d.require,h,D)}v!=d&&l(d,v.resolve,v.reject,v.progress)},v.reject));return v||r},getCurrentDefName:function(){var d;if(!a(e.opera,"Opera"))for(var b in C)if(C[b].readyState=="interactive"){d=b;break}return d}};H={require:o.getCjsRequire,exports:o.getCjsExports,module:o.getCjsModule};if(!a(n,"Function")){n=o.extractCfg(n||{});o.checkPreloads(n);var J;(n.apiContext||e)[n.apiName||"curl"]=k;u.curl=k;J=e.define=
function(){var a=o.fixArgs(arguments);r(a)};k.version="0.6.2a";J.amd={plugins:!0,jQuery:!0,curl:"0.6.2a"};u["curl/_privileged"]={core:o,cache:u,cfg:n,_define:r,_curl:k,Promise:i}}})(this);
(function(e,f){function a(){if(!f.body)return!1;y||(y=f.createTextNode(""));try{return f.body.removeChild(f.body.appendChild(y)),y=w,!0}catch(a){return!1}}function b(){var b;b=g[f[h]]&&a();if(!l&&b){l=!0;for(clearTimeout(t);r=n.pop();)r();i&&(f[h]="complete");for(var e;e=d.shift();)e()}return b}function j(){b();l||(t=setTimeout(j,m))}var h="readyState",g={loaded:1,interactive:1,complete:1},d=[],i=f&&typeof f[h]!="string",l=!1,m=10,k,r,n=[],t,w,y;k="addEventListener"in e?function(a,d){a.addEventListener(d,
b,!1);return function(){a.removeEventListener(d,b,!1)}}:function(a,d){a.attachEvent("on"+d,b);return function(){a.detachEvent(d,b)}};f&&!b()&&(n=[k(e,"load"),k(f,"readystatechange"),k(e,"DOMContentLoaded")],t=setTimeout(j,m));define("curl/domReady",function(){function a(b){l?b():d.push(b)}a.then=a;a.amd=!0;return a})})(this,this.document);define("domReady",["curl/domReady"],function(e){return{load:function(f,a,b){e(b)}}});
define("async",function(){return{load:function(e,f,a){function b(b){typeof a.resolve=="function"?a.resolve(b):a(b)}function j(b){typeof a.reject=="function"&&a.reject(b)}f([e],function(a){typeof a.then=="function"?a.then(function(e){arguments.length==0&&(e=a);b(e)},j):b(a)})},analyze:function(e,f,a){a(e)}}});
(function(e,f,a){define("js",["curl/_privileged"],function(b){function e(d,f,g){function i(){j||(h<new Date?g():setTimeout(i,10))}var h,j,l;h=(new Date).valueOf()+(d.timeoutMsec||3E5);g&&d.exports&&setTimeout(i,10);l=b.core.loadScript(d,function(){j=!0;if(d.exports)d.resolved=a(d.exports);!d.exports||d.resolved?f(l):g()},function(a){j=!0;g(a)})}function h(a,b){e(a,function(){var e=d.shift();l=d.length>0;e&&h.apply(null,e);b.resolve(a.resolved||!0)},function(a){b.reject(a)})}var g={},d=[],i=f&&f.createElement("script").async==
!0,l;return{dynamic:!0,load:function(a,b,f,n){var t,w,y,A;t=a.indexOf("!order")>0;w=a.indexOf("!exports=");y=w>0&&a.substr(w+9);A="prefetch"in n?n.prefetch:!0;a=t||w>0?a.substr(0,a.indexOf("!")):a;if(a in g)f(g[a]);else if(g[a]=void 0,b={name:a,url:b.toUrl(a.lastIndexOf(".")<=a.lastIndexOf("/")?a+".js":a),order:t,exports:y,timeoutMsec:n.timeout},n={resolve:function(d){g[a]=d;(f.resolve||f)(d)},reject:f.reject||function(a){throw a;}},t&&!i&&l){if(d.push([b,n]),A)b.mimetype="text/cache",e(b,function(a){a&&
a.parentNode.removeChild(a)},function(){}),b.mimetype=""}else l=l||t,h(b,n)}}})})(this,this.document,function(e){try{return eval(e)}catch(f){}});
(function(e){function f(a,b){var e=a.link;e[k]=e[r]=function(){if(!e.readyState||e.readyState=="complete")A["event-link-onload"]=!0,d(a),b()}}function a(a){for(var a=a.split("!"),d,b=1;d=a[b++];)d=d.split("=",2),a[d[0]]=d.length==2?d[1]:!0;return a}function b(a,d){if(document.createStyleSheet&&(B||(B=document.createStyleSheet()),document.styleSheets.length>=30)){var b,e,f,g=0;f=B;B=null;for(e=document.getElementsByTagName("link");b=e[g];)b.getAttribute("_curl_movable")?(f.addImport(b.href),b.parentNode&&
b.parentNode.removeChild(b)):g++}b=a[n]("link");b.rel="stylesheet";b.type="text/css";b.setAttribute("_curl_movable",!0);if(d)b.href=d;return b}function j(a){var d,b,e=!1;try{if(d=a.sheet||a.styleSheet,(e=(b=d.cssRules||d.rules)?b.length>0:b!==w)&&{}.toString.call(window.chrome)=="[object Chrome]"){d.insertRule("#_cssx_load_test{margin-top:-5px;}",0);if(!s)s=x[n]("div"),s.id="_cssx_load_test",z.appendChild(s);e=x.defaultView.getComputedStyle(s,null).marginTop=="-5px";d.deleteRule(0)}}catch(f){e=f.code==
1E3||f.message.match(/security|denied/i)}return e}function h(a,b){j(a.link)?(d(a),b()):t||setTimeout(function(){h(a,b)},a.wait)}function g(a,d){function b(){e||(e=!0,d())}var e;f(a,b);A["event-link-onload"]||h(a,b)}function d(a){a=a.link;a[k]=a[r]=null}function i(a,d){return a.replace(C,function(a,b){var e=b;G.test(e)||(e=d+e);return'url("'+e+'")'})}function l(a){clearTimeout(l.debouncer);l.accum?l.accum.push(a):(l.accum=[a],u=x.createStyleSheet?x.createStyleSheet():z.appendChild(x.createElement("style")));
l.debouncer=setTimeout(function(){var a,d;a=u;u=w;d=l.accum.join("\n");l.accum=w;d=d.replace(/.+charset[^;]+;/g,"");"cssText"in a?a.cssText=d:a.appendChild(x.createTextNode(d))},0);return u}function m(a){return{cssRules:function(){return a.cssRules||a.rules},insertRule:a.insertRule||function(d,b){var e=d.split(/\{|\}/g);a.addRule(e[0],e[1],b);return b},deleteRule:a.deleteRule||function(d){a.removeRule(d);return d},sheet:function(){return a}}}var k="onreadystatechange",r="onload",n="createElement",
t=!1,w,y={},A={},G=/^\/|^[^:]*:\/\//,C=/url\s*\(['"]?([^'"\)]*)['"]?\)/g,x=e.document,z;if(x)z=x.head||(x.head=x.getElementsByTagName("head")[0]);var B,s,u;define("css",{normalize:function(a,d){var b,e;if(!a)return a;b=a.split(",");e=[];for(var f=0,g=b.length;f<g;f++)e.push(d(b[f]));return e.join(",")},load:function(d,e,f,h){function j(){--k==0&&setTimeout(function(){f(m(q.sheet||q.styleSheet))},0)}var n=(d||"").split(","),k=n.length;if(d)for(var r=n.length-1,o;r>=0;r--,o=!0){var d=n[r],d=a(d),t=
d.shift(),t=e.toUrl(t.lastIndexOf(".")<=t.lastIndexOf("/")?t+".css":t),q=b(x),s={link:q,url:t,wait:h.cssWatchPeriod||50};("nowait"in d?d.nowait!="false":h.cssDeferLoad)?f(m(q.sheet||q.styleSheet)):g(s,j);q.href=t;o?z.insertBefore(q,y[o].previousSibling):z.appendChild(q);y[t]=q}else f({translateUrls:function(a,d){var b;b=e.toUrl(d);b=b.substr(0,b.lastIndexOf("/")+1);return i(a,b)},injectStyle:function(a){return l(a)},proxySheet:function(a){if(a.sheet)a=a.sheet;return m(a)}})},"plugin-builder":"./builder/css"})})(this);
define("jq",["js"],function(){return{load:function(e,f,a){function b(b){typeof a.resolve=="function"?a.resolve(b):a(b)}typeof jQuery!="undefined"?b(jQuery):f(["js!"+e],function(){typeof jQuery!="undefined"?b(jQuery):typeof a.reject=="function"&&a.reject("jQuery NOT defined!")})}}});
define("foscss",["css"],function(){return{load:function(e,f,a){if(typeof $sf.skin!="undefined"&&$sf.skin!="fos")e="css!"+e;else switch(parseInt($sf.plabel)){case 1:e="css!starfield/sf.core/sf.fos.core.1.css";break;case 2:e="css!starfield/sf.core/sf.fos.core.2.css";break;case 1387:e="css!starfield/sf.core/sf.fos.core.1387.css";break;default:e="css!starfield/sf.core/sf.fos.core.0.css"}f([e],function(){typeof a.resolve=="function"?a.resolve(null):a(null)},function(){typeof a.reject=="function"&&a.reject("CSS NOT defined!")})}}});
define("text",function(){function e(){if(typeof XMLHttpRequest!=="undefined")e=function(){return new XMLHttpRequest};else for(var a=e=function(){throw Error("getXhr(): XMLHttpRequest not available");};b.length>0&&e===a;)(function(a){try{new ActiveXObject(a),e=function(){return new ActiveXObject(a)}}catch(b){}})(b.shift());return e()}function f(a,b,f){var d=e();d.open("GET",a,!0);d.onreadystatechange=function(){d.readyState===4&&(d.status<400?b(d.responseText):f(Error("fetchText() failed. status: "+
d.statusText)))};d.send(null)}function a(a){throw a;}var b=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"];return{load:function(b,e,g){var d=g.resolve||g,g=g.reject||a;f(e.toUrl(b),d,g)},"plugin-builder":"./builder/text"}});
define("i18n",["curl"],function(e){return{load:function(f,a,b){function j(a){typeof b.reject=="function"&&b.reject(a)}function h(a,d){i.length>1&&typeof d=="object"&&g(d,a);typeof a!="undefined"?typeof b.resolve=="function"?b.resolve(a):b(a):j("i18n failed on "+f)}function g(a,d){if(typeof a===typeof d==="object")for(var b in a){var e=a[b];if(typeof e==="object"){var f=d[b];typeof f==="undefined"&&(f={});g(e,f)}}}function d(){i.length>1?(i.pop(),e(i).then(h,d)):j("i18n cannot find "+f)}var i=[f];
$sf.culture!="en"&&(a=f.lastIndexOf("/"),i.push(f.substr(0,a)+"/"+$sf.culture+"/"+f.substr(a+1)));e(i).then(h,d)}}});
$sf.util.Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){for(var f="",a,b,j,h,g,d,i=0,e=$sf.util.Base64._utf8_encode(e);i<e.length;)a=e.charCodeAt(i++),b=e.charCodeAt(i++),j=e.charCodeAt(i++),h=a>>2,a=(a&3)<<4|b>>4,g=(b&15)<<2|j>>6,d=j&63,isNaN(b)?g=d=64:isNaN(j)&&(d=64),f=f+this._keyStr.charAt(h)+this._keyStr.charAt(a)+this._keyStr.charAt(g)+this._keyStr.charAt(d);return f},decode:function(e){for(var f="",a,b,j,h,g,d=0,e=e.replace(/[^A-Za-z0-9\+\/\=]/g,
"");d<e.length;)a=this._keyStr.indexOf(e.charAt(d++)),b=this._keyStr.indexOf(e.charAt(d++)),h=this._keyStr.indexOf(e.charAt(d++)),g=this._keyStr.indexOf(e.charAt(d++)),a=a<<2|b>>4,b=(b&15)<<4|h>>2,j=(h&3)<<6|g,f+=String.fromCharCode(a),h!=64&&(f+=String.fromCharCode(b)),g!=64&&(f+=String.fromCharCode(j));return f=$sf.util.Base64._utf8_decode(f)},_utf8_encode:function(e){for(var e=e.replace(/\r\n/g,"\n"),f="",a=0;a<e.length;a++){var b=e.charCodeAt(a);b<128?f+=String.fromCharCode(b):(b>127&&b<2048?
f+=String.fromCharCode(b>>6|192):(f+=String.fromCharCode(b>>12|224),f+=String.fromCharCode(b>>6&63|128)),f+=String.fromCharCode(b&63|128))}return f},_utf8_decode:function(e){for(var f="",a=0,b=c1=c2=0;a<e.length;)b=e.charCodeAt(a),b<128?(f+=String.fromCharCode(b),a++):b>191&&b<224?(c2=e.charCodeAt(a+1),f+=String.fromCharCode((b&31)<<6|c2&63),a+=2):(c2=e.charCodeAt(a+1),c3=e.charCodeAt(a+2),f+=String.fromCharCode((b&15)<<12|(c2&63)<<6|c3&63),a+=3);return f}};
define("sf.curl.extend",["curl/_privileged","js"],function(e){var f=document.getElementById("duel");$sf.version="?";var a=$sf.appid="";if(f&&(f=/\/(v[0-9.]*)\/.*appid\=([^\#]*)\#(.*)/.exec(f.src))&&f.length==4)$sf.version=f[1],$sf.appid=f[2],a=f[3];$sf.util.Base64.encode($sf.appid+$sf.version+$sf.env)!=a&&alert("DUEL ERROR: Invalid Registration");var b=e.core.resolvePathInfo,j=typeof $sf.require.local==="string";e.core.resolvePathInfo=function(a,e){var d,f=/^(starfield|duel)\/([^\s]*.?)/i.exec(a);
if(f&&f.length>=3){f=f[2];$sf.loader>=2&&!j&&(d=$sf.bundle[f],typeof d!=="undefined"&&(f=d));d=f.split("/");var l="/",m=f.lastIndexOf("."),k=m>0?f.substr(m):"";k!=".js"&&k!=".css"&&k!=".pkg"&&(k="",m=-1);m=m>0?f.substr(0,m):f;d.length==1&&(l="/"+m+"/");d={config:e,url:(j?$sf.require.local:k==".css"?$sf.require.css_root:$sf.require.js_root)+l+f};if(f=="jquery.mod")d.url=$sf.require.jquery}else d=b.apply(this,arguments);return d}});
define("starfield/sf.module",[],function(){$sf.util.module=function(e,f){return function(a){function b(d,b,e){for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];a.isPlainObject(h)?this[g]=a.extend(!0,{},h):a.isArray(h)&&(this[g]=a.merge([],h))}this.options=a.extend(!0,{},this.options,b);this.id=e;this.element=d;this._create();this._init()}var j="sf"+e,h="sf-"+e.toLowerCase();$sf||($sf={});if(!$sf.modules)$sf.modules={};if(!$sf.modules.base)$sf.modules.base=function(a,b){this.baseClass=b;this.pluginName=
a;return this},a.extend(!0,$sf.modules.base.prototype,{options:{},_create:function(){},_init:function(){},destroy:function(d){var b=this.id;delete g.instances[b];g.ids=a.grep(g.ids,function(a){return a.id!=b});a.isFunction(d)&&d()},_siblings:function(){var d=this.id;return a.map(g.ids,function(a){return a===d?null:g.instances[a].module})},_log:function(a){window.console&&console.log&&console.log(this.id+": "+a)},_dir:function(a,b){typeof b==="string"&&b.length>0&&this._log(b);window.console&&console.dir&&
console.dir(a)},_initElementId:function(a,b){var e=a.attr("id");if(e==null||e.length==0)e=this._generateId(b),a.attr("id",e)},_generateId:function(a){a=a?a:this.baseClass.toLowerCase();return a+"-"+Math.round(Math.random()*65535)}}),$sf.modules.base.prototype._super=$sf.modules.base.prototype,$sf.modules.base.prototype._execSuper=function(a){var b=[];if(arguments.length>1)for(var e=1;e<arguments.length;e++)b.push(arguments[e]);this._super[a].apply(this,b)};$sf.modules[j]=b;b.prototype=new $sf.modules.base(j,
h);b.prototype.constructor=b;b.constructor=$sf.modules.base;a.extend(!0,b.prototype,f);var g=a.fn[j]=function(d,e){var f="create";d.constructor===String&&(f=d,d=e);var h={initInstance:function(d){var d=a(d),b=d.attr("id");if(b==null||b.length==0)b=j.toLowerCase()+Math.round(Math.random()*65535),d.attr("id",b);var e=g.instances[b]={};g.ids.push(b);e.me=d;return e.meId=b},initPlugin:function(d,e,f,j){var i=function(){e=h.initInstance(f);g.instances[e].module=new b(a(f),j,e)};d?d.module.destroy(i):i()},
getOrDo:function(b,e,f){if(e&&e.module)if(e=e.module,b==="option"||b==="options")return b=e.options[d],a.isPlainObject(b)&&(b=a.extend(!0,{},b)),k=b,!1;else if(b.slice(0,1)!=="_"&&a.isFunction(e[b]))return f=!1,a.isArray(d)||(d=[d]),f=e[b].apply(e,d),typeof f!=="undefined"&&(k=f),!1;else h.log("invalid command/property: "+b);else h.log("couldn't find instance for ["+f+"] to execute "+b)},log:function(a){window.console&&console.log&&console.log(a)}};if(!g.instances)g.instances={};if(!g.ids)g.ids=[];
var k=this;this.each(function(){var b=a(this).attr("id"),e=g.instances[b];if(f==="create")h.initPlugin(e,b,this,d);else if(f==="destroy")e&&e.module&&e.module.destroy();else if(e&&e.module&&e.module._init(),!h.getOrDo(f,e,b))return!1});return k};return g}($sf.getjQuery())}});if(typeof String.prototype.sfFormat!="object")String.prototype.sfFormat=function(){var e=arguments;return this.replace(/{(\d+)}/g,function(f,a){return typeof e[a]!="undefined"?e[a]:f})};
define("starfield/sf.util",[],function(){function e(){function a(a){if(a.css("position")=="static")return 0;a=Number(a.css("zIndex"));isNaN(a)&&(a=0);return a}function b(e,f,g){f=isNaN(f)?0:f;if(e.length===0)return f;var d=e.get(0).tagName.toLowerCase()!="body";if(e&&e.length>0&&d){var i=a(e);i>f&&(f=i);if(f===0||g&&d)return b(e.parent(),f,g)}return f}return{get:function(a){return b(a,0,!1)},getTop:function(a){return b(a,0,!0)},max:function(){var b=0;($sf.util.ua.ie?$("body *"):$("*:visible")).each(function(e,
f){var d=$(f),d=a(d);d>b&&(b=d)});return b}}}function f(a,b){var e=typeof a==="string"&&a.length>0?a+": ":"",f=typeof window.console!=="undefined",b=typeof b==="string"&&b.length===0?void 0:b,g=typeof b==="string"&&window.location.href.indexOf(b+"=true")>-1||typeof b!=="string";return{log:function(a){f&&g&&console.log&&console.log(e+a)},dir:function(a){f&&g&&console.dir&&console.dir(a)}}}$sf.util.util=function(a){a=$.extend({},a);return{zIndex:e(),logger:f(a.logId)}};$sf.util.zIndex=e();$sf.util.logger=
f;$sf.util.context=function(a,b){function e(){g||$("iframe",b.document).each(function(){this.contentWindow===a&&(g=$(this))});return g}function f(d){d=d.offset();if(b!==a){var g=e().offset();d.top=Math.ceil(d.top+g.top-$(a).scrollTop());d.left=Math.ceil(d.left+g.left-$(a).scrollLeft())}return d}var g=null;return{isSingle:function(){return b===a},ext:{iframe:e,offset:f,window:function(){return b},document:function(){return b.document},body:function(){return b.document.body}},intr:{isInBounds:function(d){var g=
f(d),l=b!==a,m=!l?b:e(),k=!l?{top:0,left:0}:m.offset();g.top+=!l?0:$(a).scrollTop();g.left+=!l?0:$(a).scrollLeft();g.right=Math.ceil(g.left+d.outerWidth());g.bottom=Math.ceil(g.top+d.outerHeight());k.left+=$(a).scrollLeft();k.top+=$(a).scrollTop();k.right=Math.ceil(k.left+$(m).width());k.bottom=Math.ceil(k.top+$(m).height());return g.left>=k.left&&g.right<=k.right&&g.top>=k.top&&g.bottom<=k.bottom},window:function(){return a},document:function(){return a.document},body:function(){return a.document.body}}}};
return $sf.util.util});
define("starfield/sf.ua",[],function(){var e=$sf.uas={win:/Windows NT ([0-9\.a-z]*)/i,osx:/Mac OS X ([0-9\.a-z\_]*)/i,ie:/MSIE\s([0-9\.a-z]*)/i,trident:/Trident\/([0-9\.a-z]*)/i,ff:/Firefox\/([0-9\.a-z]*)/i,webkit:/AppleWebKit\/([0-9\.a-z]*)/i,mobile:/iPhone|Android|PlayBook|BlackBerry|Windows Phone/i},f=$sf.UA=function(a,b){if(typeof b!=="string")b=navigator.userAgent;this.exp=a;var e=a.exec(b);this.major=this.minor=0;if((this.found=e?!0:!1)&&e.length>=2){var e=this.version=e[1],d=e.split(".");d.length==
0&&(d=e.split("_"));this.major=d.length>=1?parseInt(d[0]):0;if(this.major===NaN)this.major=0;this.minor=d.length>=2?parseInt(d[1]):0;if(this.minor===NaN)this.minor=0}},a=f.prototype;a.compare=function(a,b){typeof a!=="number"&&(a=0);typeof b!=="number"&&(b=0);return this.major>a?1:this.major<a?-1:this.minor>b?1:this.minor<b?-1:0};a.toString=function(){return this.version};var b=$sf.util.ua={version:"?"},a=function(a,e){var g=new f(a);if(b[e]=g.found)b.version=g.version,b.major=g.major,b.minor=g.minor};
a(e.win,"win");a(e.osx,"osx");a(e.ff,"firefox");a(e.webkit,"webkit");a(e.trident,"trident");if(b.trident&&b.major<=7)b.ieCompat=!0;a(e.ie,"ie");b.ie6=b.ie&&b.major<=6;b.ie7=b.ie&&b.major==7;b.hasFixed=b.ie6!==!0;return b});
define("starfield/sf.selector",["jq!starfield/jquery.mod"],function(){$sf.util.selector=function(e,f){(function(a){var b={};b[e]=function(b,e,g){if(f.root){b=a(b);g=g[3];e=b.is(f.root.selector);if(!g||g=="")return e;var g=g.split(","),d=!1,i="root",l;for(l in f){if(f.hasOwnProperty(l)&&l!=="root"){var m=a.grep(g,function(a){return a!=l});m.length<g.length&&(g=m,d=b.is(f[l].selector),i=l)}if(d)break}i==="root"&&e&&(d=!0);if(d&&(f[i].states||f[i].tests)){d=g.length==0;for(e=0;e<g.length;e++){var k=
g[e],m=k.split("=");m.length>1?(k=f[i].tests&&f[i].tests[m[0]]?f[i].tests[m[0]]:null,a.isFunction(k)&&(d=k(b,m[1]))):(k=f[i].states&&f[i].states[k]?f[i].states[k]:null,a.isFunction(k)&&(d=k(b)));if(!d)break}}return d}};a.extend(a.expr[":"],b)})($sf.getjQuery())};return $sf.util.selector});
$sf.util.storage=function(e){if(!(this instanceof $sf.util.storage))return new $sf.util.storage(e);this.cookiesDisabled=!1;this.cookieTimeout=365;this.localStorageDisabled=!1;if(typeof e=="object"){if(typeof e.cookiesDisabled!="undefined")this.cookiesDisabled=e.cookiesDisabled;if(typeof e.localStorageDisabled!="undefined")this.localStorageDisabled=e.localStorageDisabled;if(typeof e.cookieTimeout!="undefined")this.cookieTimeout=e.cookieTimeout}};
$sf.util.storage.prototype.getItem=function(e,f){var a=f,e="sf-"+e;if(window.localStorage&&this.localStorageDisabled===!1)a=window.localStorage[e];else if(this.cookiesDisabled===!1){var b,j,h,g=document.cookie.split(";");for(b=0;b<g.length;b++)if(j=g[b].substr(0,g[b].indexOf("=")),h=g[b].substr(g[b].indexOf("=")+1),j=j.replace(/^\s+|\s+$/g,""),j==e){a=unescape(h);break}}return typeof a=="undefined"||a===null?f:a};
$sf.util.storage.prototype.setItem=function(e,f){e="sf-"+e;if(window.localStorage&&this.localStorageDisabled===!1)window.localStorage.setItem(e,f);else if(this.cookiesDisabled===!1){var a=new Date;a.setDate(a.getDate()+this.cookieTimeout);f=escape(f)+(this.cookieTimeout==null?"":"; expires="+a.toUTCString());document.cookie=e+"="+f}};
$sf.util.storage.prototype.getLength=function(){if(window.localStorage&&this.localStorageDisabled===!1)return window.localStorage.length;else if(this.cookiesDisabled===!1)return document.cookie.split(";").length;return 0};$sf.util.storage.prototype.removeItem=function(e){e="sf-"+e;if(window.localStorage&&this.localStorageDisabled===!1)window.localStorage.removeItem(e);else if(this.cookiesDisabled===!1){var f=new Date;f.setDate(f.getDate()-1);f="; expires="+f.toUTCString();document.cookie=e+"="+f}};
$sf.util.storage.prototype.isEnabled=function(){var e=!1;try{if(e=window.localStorage&&this.localStorageDisabled,!e&&this.cookiesDisabled===!1){var f=navigator.cookieEnabled?!0:!1;if(typeof navigator.cookieEnabled=="undefined"&&!f)document.cookie="testcookie",f=document.cookie.indexOf("testcookie")!=-1?!0:!1;e=f}}catch(a){}return e};
define("starfield/sf.event",[],function(){function e(a){a=Object.prototype.toString.call(a);return a.substr(8,a.length-9)}var f={};return $sf.util.event={on:function(){var a=arguments,b=a.length,j=!1,h=!1;if(b>1&&b<4){var g=a[b-1];b===3&&(h=a[1]);if(e(g)==="Function"&&(e(a[0])==="String"&&(a[0]=a[0].split(" ")),e(a[0])==="Array"))for(b=0;b<a[0].length;b++){var d=a[0][b],i=h;if(d){!i&&d.split(".",2).length>=2&&(i=d.split(".",2),d=i.shift(),i=i.shift());if(!i){i=0;if(f[d])for(;f[d]["_ns_"+i];)i++;i=
"_ns_"+i}f[d]||(f[d]={});f[d][i]||(f[d][i]=[]);j||(j=[]);j.push(d+"."+i);f[d][i].push(g)}}}return j},off:function(a){var b=e(a);b==="String"?a=a.split(" "):b==="Function"&&(a=[a]);if(e(a)==="Array")for(var j=0;j<a;j++){var h=a[j];if((b=e(h))==="String")h.split(".",2).length>=2?(b=h.split(".",2),h=b.shift(),f[h]&&delete f[h][b.shift()]):f[h]&&delete f[h];else if(b==="Function")for(var g in f)for(var d in f[g])for(var i in f[g][d])h===f[g][d][i]&&delete f[g][d][i]}},trigger:function(a){e(a)==="String"&&
(a=a.split(" "));if(e(a)==="Array")for(var b=[].slice.call(arguments,1),j=0;j<a;j++){var h=a[j],g;if(h.split(".",2).length>=2){if(g=h.split(".",2),h=g.shift(),g=g.shift(),f[h]&&f[h][g])for(var d in f[h][g])f[h][g][d]({event:h+"."+g,args:b})}else if(f[h])for(var i in f[h])for(d in f[h][i])f[h][i][d]({event:h+"."+i,args:b})}}}});$sf.preload>=1&&require("css!starfield/sf.core.css");$sf.preload>=2&&require("starfield/sf.core.pkg");
$sf.plabel!=1&&require("domReady!",function(){document.body.className+=(document.body.className==""?"":" ")+"sf-pl"});