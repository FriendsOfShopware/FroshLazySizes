(self.webpackChunk=self.webpackChunk||[]).push([["frosh-lazy-sizes"],{5851:t=>{!function(e,i){var n=function(t,e,i){"use strict";var n,a;if(function(){var e,i={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in a=t.lazySizesConfig||t.lazysizesConfig||{},i)e in a||(a[e]=i[e])}(),!e||!e.getElementsByClassName)return{init:function(){},cfg:a,noSupport:!0};var r=e.documentElement,o=t.HTMLPictureElement,s="addEventListener",l="getAttribute",d=t[s].bind(t),c=t.setTimeout,u=t.requestAnimationFrame||c,f=t.requestIdleCallback,v=/^picture$/i,p=["load","error","lazyincluded","_lazyloaded"],g={},y=Array.prototype.forEach,m=function(t,e){return g[e]||(g[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),g[e].test(t[l]("class")||"")&&g[e]},b=function(t,e){m(t,e)||t.setAttribute("class",(t[l]("class")||"").trim()+" "+e)},h=function(t,e){var i;(i=m(t,e))&&t.setAttribute("class",(t[l]("class")||"").replace(i," "))},z=function(t,e,i){var n=i?s:"removeEventListener";i&&z(t,e),p.forEach((function(i){t[n](i,e)}))},A=function(t,i,a,r,o){var s=e.createEvent("Event");return a||(a={}),a.instance=n,s.initEvent(i,!r,!o),s.detail=a,t.dispatchEvent(s),s},C=function(e,i){var n;!o&&(n=t.picturefill||a.pf)?(i&&i.src&&!e[l]("srcset")&&e.setAttribute("srcset",i.src),n({reevaluate:!0,elements:[e]})):i&&i.src&&(e.src=i.src)},E=function(t,e){return(getComputedStyle(t,null)||{})[e]},L=function(t,e,i){for(i=i||t.offsetWidth;i<a.minSize&&e&&!t._lazysizesWidth;)i=e.offsetWidth,e=e.parentNode;return i},w=(bt=[],ht=[],zt=bt,At=function(){var t=zt;for(zt=bt.length?ht:bt,yt=!0,mt=!1;t.length;)t.shift()();yt=!1},Ct=function(t,i){yt&&!i?t.apply(this,arguments):(zt.push(t),mt||(mt=!0,(e.hidden?c:u)(At)))},Ct._lsFlush=At,Ct),N=function(t,e){return e?function(){w(t)}:function(){var e=this,i=arguments;w((function(){t.apply(e,i)}))}},F=function(t){var e,n=0,r=a.throttleDelay,o=a.ricTimeout,s=function(){e=!1,n=i.now(),t()},l=f&&o>49?function(){f(s,{timeout:o}),o!==a.ricTimeout&&(o=a.ricTimeout)}:N((function(){c(s)}),!0);return function(t){var a;(t=!0===t)&&(o=33),e||(e=!0,(a=r-(i.now()-n))<0&&(a=0),t||a<9?l():c(l,a))}},_=function(t){var e,n,a=99,r=function(){e=null,t()},o=function(){var t=i.now()-n;t<a?c(o,a-t):(f||r)(r)};return function(){n=i.now(),e||(e=c(o,a))}},M=(J=/^img$/i,K=/^iframe$/i,V="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),X=0,Y=0,Z=0,tt=-1,et=function(t){Z--,(!t||Z<0||!t.target)&&(Z=0)},it=function(t){return null==G&&(G="hidden"==E(e.body,"visibility")),G||!("hidden"==E(t.parentNode,"visibility")&&"hidden"==E(t,"visibility"))},nt=function(t,i){var n,a=t,o=it(t);for($-=i,Q+=i,q-=i,U+=i;o&&(a=a.offsetParent)&&a!=e.body&&a!=r;)(o=(E(a,"opacity")||1)>0)&&"visible"!=E(a,"overflow")&&(n=a.getBoundingClientRect(),o=U>n.left&&q<n.right&&Q>n.top-1&&$<n.bottom+1);return o},at=function(){var t,i,o,s,d,c,u,f,v,p,g,y,m=n.elements;if((B=a.loadMode)&&Z<8&&(t=m.length)){for(i=0,tt++;i<t;i++)if(m[i]&&!m[i]._lazyRace)if(!V||n.prematureUnveil&&n.prematureUnveil(m[i]))ft(m[i]);else if((f=m[i][l]("data-expand"))&&(c=1*f)||(c=Y),p||(p=!a.expand||a.expand<1?r.clientHeight>500&&r.clientWidth>500?500:370:a.expand,n._defEx=p,g=p*a.expFactor,y=a.hFac,G=null,Y<g&&Z<1&&tt>2&&B>2&&!e.hidden?(Y=g,tt=0):Y=B>1&&tt>1&&Z<6?p:X),v!==c&&(I=innerWidth+c*y,H=innerHeight+c,u=-1*c,v=c),o=m[i].getBoundingClientRect(),(Q=o.bottom)>=u&&($=o.top)<=H&&(U=o.right)>=u*y&&(q=o.left)<=I&&(Q||U||q||$)&&(a.loadHidden||it(m[i]))&&(R&&Z<3&&!f&&(B<3||tt<4)||nt(m[i],c))){if(ft(m[i]),d=!0,Z>9)break}else!d&&R&&!s&&Z<4&&tt<4&&B>2&&(O[0]||a.preloadAfterLoad)&&(O[0]||!f&&(Q||U||q||$||"auto"!=m[i][l](a.sizesAttr)))&&(s=O[0]||m[i]);s&&!d&&ft(s)}},rt=F(at),ot=function(t){var e=t.target;e._lazyCache?delete e._lazyCache:(et(t),b(e,a.loadedClass),h(e,a.loadingClass),z(e,lt),A(e,"lazyloaded"))},st=N(ot),lt=function(t){st({target:t.target})},dt=function(t,e){var i=t.getAttribute("data-load-mode")||a.iframeLoadMode;0==i?t.contentWindow.location.replace(e):1==i&&(t.src=e)},ct=function(t){var e,i=t[l](a.srcsetAttr);(e=a.customMedia[t[l]("data-media")||t[l]("media")])&&t.setAttribute("media",e),i&&t.setAttribute("srcset",i)},ut=N((function(t,e,i,n,r){var o,s,d,u,f,p;(f=A(t,"lazybeforeunveil",e)).defaultPrevented||(n&&(i?b(t,a.autosizesClass):t.setAttribute("sizes",n)),s=t[l](a.srcsetAttr),o=t[l](a.srcAttr),r&&(u=(d=t.parentNode)&&v.test(d.nodeName||"")),p=e.firesLoad||"src"in t&&(s||o||u),f={target:t},b(t,a.loadingClass),p&&(clearTimeout(W),W=c(et,2500),z(t,lt,!0)),u&&y.call(d.getElementsByTagName("source"),ct),s?t.setAttribute("srcset",s):o&&!u&&(K.test(t.nodeName)?dt(t,o):t.src=o),r&&(s||u)&&C(t,{src:o})),t._lazyRace&&delete t._lazyRace,h(t,a.lazyClass),w((function(){var e=t.complete&&t.naturalWidth>1;p&&!e||(e&&b(t,a.fastLoadedClass),ot(f),t._lazyCache=!0,c((function(){"_lazyCache"in t&&delete t._lazyCache}),9)),"lazy"==t.loading&&Z--}),!0)})),ft=function(t){if(!t._lazyRace){var e,i=J.test(t.nodeName),n=i&&(t[l](a.sizesAttr)||t[l]("sizes")),r="auto"==n;(!r&&R||!i||!t[l]("src")&&!t.srcset||t.complete||m(t,a.errorClass)||!m(t,a.lazyClass))&&(e=A(t,"lazyunveilread").detail,r&&S.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,Z++,ut(t,e,r,n,i))}},vt=_((function(){a.loadMode=3,rt()})),pt=function(){3==a.loadMode&&(a.loadMode=2),vt()},gt=function(){R||(i.now()-D<999?c(gt,999):(R=!0,a.loadMode=3,rt(),d("scroll",pt,!0)))},{_:function(){D=i.now(),n.elements=e.getElementsByClassName(a.lazyClass),O=e.getElementsByClassName(a.lazyClass+" "+a.preloadClass),d("scroll",rt,!0),d("resize",rt,!0),d("pageshow",(function(t){if(t.persisted){var i=e.querySelectorAll("."+a.loadingClass);i.length&&i.forEach&&u((function(){i.forEach((function(t){t.complete&&ft(t)}))}))}})),t.MutationObserver?new MutationObserver(rt).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r[s]("DOMNodeInserted",rt,!0),r[s]("DOMAttrModified",rt,!0),setInterval(rt,999)),d("hashchange",rt,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(t){e[s](t,rt,!0)})),/d$|^c/.test(e.readyState)?gt():(d("load",gt),e[s]("DOMContentLoaded",rt),c(gt,2e4)),n.elements.length?(at(),w._lsFlush()):rt()},checkElems:rt,unveil:ft,_aLSL:pt}),S=(P=N((function(t,e,i,n){var a,r,o;if(t._lazysizesWidth=n,n+="px",t.setAttribute("sizes",n),v.test(e.nodeName||""))for(r=0,o=(a=e.getElementsByTagName("source")).length;r<o;r++)a[r].setAttribute("sizes",n);i.detail.dataAttr||C(t,i.detail)})),j=function(t,e,i){var n,a=t.parentNode;a&&(i=L(t,a,i),(n=A(t,"lazybeforesizes",{width:i,dataAttr:!!e})).defaultPrevented||(i=n.detail.width)&&i!==t._lazysizesWidth&&P(t,a,n,i))},T=_((function(){var t,e=k.length;if(e)for(t=0;t<e;t++)j(k[t])})),{_:function(){k=e.getElementsByClassName(a.autosizesClass),d("resize",T)},checkElems:T,updateElem:j}),x=function(){!x.i&&e.getElementsByClassName&&(x.i=!0,S._(),M._())};var k,P,j,T;var O,R,W,B,D,I,H,$,q,U,Q,G,J,K,V,X,Y,Z,tt,et,it,nt,at,rt,ot,st,lt,dt,ct,ut,ft,vt,pt,gt;var yt,mt,bt,ht,zt,At,Ct;return c((function(){a.init&&x()})),n={cfg:a,autoSizer:S,loader:M,init:x,uP:C,aC:b,rC:h,hC:m,fire:A,gW:L,rAF:w}}(e,e.document,Date);e.lazySizes=n,t.exports&&(t.exports=n)}("undefined"!=typeof window?window:{})},5821:(t,e,i)=>{var n,a,r;!function(o,s){if(o){s=s.bind(null,o,o.document),t.exports?s(i(5851)):(a=[i(5851)],void 0===(r="function"==typeof(n=s)?n.apply(e,a):n)||(t.exports=r))}}("undefined"!=typeof window?window:0,(function(t,e,i){"use strict";var n=function(){var a,r,o,s,l,d,c,u=i.cfg,f={"data-bgset":1,"data-include":1,"data-poster":1,"data-bg":1,"data-script":1},v="(\\s|^)("+u.loadedClass,p=e.documentElement,g=function(t){i.rAF((function(){i.rC(t,u.loadedClass),u.unloadedClass&&i.rC(t,u.unloadedClass),i.aC(t,u.lazyClass),("none"==t.style.display||t.parentNode&&"none"==t.parentNode.style.display)&&setTimeout((function(){i.loader.unveil(t)}),0)}))},y=function(t){var e,i,n,a;for(e=0,i=t.length;e<i;e++)(a=(n=t[e]).target).getAttribute(n.attributeName)&&("source"==a.localName&&a.parentNode&&(a=a.parentNode.querySelector("img")),a&&v.test(a.className)&&g(a))};u.unloadedClass&&(v+="|"+u.unloadedClass),v+="|"+u.loadingClass+")(\\s|$)",v=new RegExp(v),f[u.srcAttr]=1,f[u.srcsetAttr]=1,t.MutationObserver?(o=new MutationObserver(y),a=function(){s||(s=!0,o.observe(p,{subtree:!0,attributes:!0,attributeFilter:Object.keys(f)}))},r=function(){s&&(s=!1,o.disconnect())}):(p.addEventListener("DOMAttrModified",(d=[],c=function(){y(d),d=[],l=!1},function(t){s&&f[t.attrName]&&t.newValue&&(d.push({target:t.target,attributeName:t.attrName}),l||(setTimeout(c),l=!0))}),!0),a=function(){s=!0},r=function(){s=!1}),addEventListener("lazybeforeunveil",r,!0),addEventListener("lazybeforeunveil",a),addEventListener("lazybeforesizes",r,!0),addEventListener("lazybeforesizes",a),a(),removeEventListener("lazybeforeunveil",n)};addEventListener("lazybeforeunveil",n)}))},5375:(t,e,i)=>{var n,a,r;!function(o,s){s=s.bind(null,o,o.document),t.exports?s(i(5851)):(a=[i(5851)],void 0===(r="function"==typeof(n=s)?n.apply(e,a):n)||(t.exports=r))}(window,(function(t,e,i){"use strict";var n="loading"in HTMLImageElement.prototype,a="loading"in HTMLIFrameElement.prototype,r=!1,o=i.prematureUnveil,s=i.cfg,l={focus:1,mouseover:1,click:1,load:1,transitionend:1,animationend:1,scroll:1,resize:1};function d(){var o,d,c,u;r||(r=!0,n&&a&&s.nativeLoading.disableListeners&&(!0===s.nativeLoading.disableListeners&&(s.nativeLoading.setLoadingAttribute=!0),o=i.loader,d=o.checkElems,c=function(){setTimeout((function(){t.removeEventListener("scroll",o._aLSL,!0)}),1e3)},(u="object"==typeof s.nativeLoading.disableListeners?s.nativeLoading.disableListeners:l).scroll&&(t.addEventListener("load",c),c(),t.removeEventListener("scroll",d,!0)),u.resize&&t.removeEventListener("resize",d,!0),Object.keys(u).forEach((function(t){u[t]&&e.removeEventListener(t,d,!0)}))),s.nativeLoading.setLoadingAttribute&&t.addEventListener("lazybeforeunveil",(function(t){var e=t.target;"loading"in e&&!e.getAttribute("loading")&&e.setAttribute("loading","lazy")}),!0))}s.nativeLoading||(s.nativeLoading={}),t.addEventListener&&t.MutationObserver&&(n||a)&&(i.prematureUnveil=function(t){return r||d(),!(!("loading"in t)||!s.nativeLoading.setLoadingAttribute&&!t.getAttribute("loading")||"auto"==t.getAttribute("data-sizes")&&!t.offsetWidth)||(o?o(t):void 0)})}))},4261:(t,e,i)=>{var n,a,r;!function(o,s){if(o){s=s.bind(null,o,o.document),t.exports?s(i(5851)):(a=[i(5851)],void 0===(r="function"==typeof(n=s)?n.apply(e,a):n)||(t.exports=r))}}("undefined"!=typeof window?window:0,(function(t,e,i,n){"use strict";var a,r=e.createElement("a").style,o="objectFit"in r,s=/object-fit["']*\s*:\s*["']*(contain|cover)/,l=/object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/,d="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",c=/\(|\)|'/,u={center:"center","50% 50%":"center"};function f(t,n){var r,o,s,l,u=i.cfg,f=function(){var e=t.currentSrc||t.src;e&&o!==e&&(o=e,l.backgroundImage="url("+(c.test(e)?JSON.stringify(e):e)+")",r||(r=!0,i.rC(s,u.loadingClass),i.aC(s,u.loadedClass)))},v=function(){i.rAF(f)};t._lazysizesParentFit=n.fit,t.addEventListener("lazyloaded",v,!0),t.addEventListener("load",v,!0),i.rAF((function(){var r=t,o=t.parentNode;"PICTURE"==o.nodeName.toUpperCase()&&(r=o,o=o.parentNode),function(t){var e=t.previousElementSibling;e&&i.hC(e,a)&&(e.parentNode.removeChild(e),t.style.position=e.getAttribute("data-position")||"",t.style.visibility=e.getAttribute("data-visibility")||"")}(r),a||function(){if(!a){var t=e.createElement("style");a=i.cfg.objectFitClass||"lazysizes-display-clone",e.querySelector("head").appendChild(t)}}(),s=t.cloneNode(!1),l=s.style,s.addEventListener("load",(function(){var t=s.currentSrc||s.src;t&&t!=d&&(s.src=d,s.srcset="")})),i.rC(s,u.loadedClass),i.rC(s,u.lazyClass),i.rC(s,u.autosizesClass),i.aC(s,u.loadingClass),i.aC(s,a),["data-parent-fit","data-parent-container","data-object-fit-polyfilled",u.srcsetAttr,u.srcAttr].forEach((function(t){s.removeAttribute(t)})),s.src=d,s.srcset="",l.backgroundRepeat="no-repeat",l.backgroundPosition=n.position,l.backgroundSize=n.fit,s.setAttribute("data-position",r.style.position),s.setAttribute("data-visibility",r.style.visibility),r.style.visibility="hidden",r.style.position="absolute",t.setAttribute("data-parent-fit",n.fit),t.setAttribute("data-parent-container","prev"),t.setAttribute("data-object-fit-polyfilled",""),t._objectFitPolyfilledDisplay=s,o.insertBefore(s,r),t._lazysizesParentFit&&delete t._lazysizesParentFit,t.complete&&f()}))}if(!o||!(o&&"objectPosition"in r)){var v=function(t){if(t.detail.instance==i){var e=t.target,n=function(t){var e=(getComputedStyle(t,null)||{}).fontFamily||"",i=e.match(s)||"",n=i&&e.match(l)||"";return n&&(n=n[1]),{fit:i&&i[1]||"",position:u[n]||n||"center"}}(e);return!(!n.fit||o&&"center"==n.position)&&(f(e,n),!0)}};t.addEventListener("lazybeforesizes",(function(t){if(t.detail.instance==i){var e=t.target;null==e.getAttribute("data-object-fit-polyfilled")||e._objectFitPolyfilledDisplay||v(t)||i.rAF((function(){e.removeAttribute("data-object-fit-polyfilled")}))}})),t.addEventListener("lazyunveilread",v,!0),n&&n.detail&&v(n)}}))},1765:(t,e,i)=>{var n,a,r;!function(o,s){if(o){s=s.bind(null,o,o.document),t.exports?s(i(5851)):(a=[i(5851)],void 0===(r="function"==typeof(n=s)?n.apply(e,a):n)||(t.exports=r))}}("undefined"!=typeof window?window:0,(function(t,e,i){"use strict";if(t.addEventListener){var n=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,a=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,r=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,o=/^picture$/i,s=i.cfg,l={getParent:function(e,i){var n=e,a=e.parentNode;return i&&"prev"!=i||!a||!o.test(a.nodeName||"")||(a=a.parentNode),"self"!=i&&(n="prev"==i?e.previousElementSibling:i&&(a.closest||t.jQuery)&&(a.closest?a.closest(i):jQuery(a).closest(i)[0])||a),n},getFit:function(t){var e,i,n=getComputedStyle(t,null)||{},o=n.content||n.fontFamily,s={fit:t._lazysizesParentFit||t.getAttribute("data-parent-fit")};return!s.fit&&o&&(e=o.match(a))&&(s.fit=e[1]),s.fit?(!(i=t._lazysizesParentContainer||t.getAttribute("data-parent-container"))&&o&&(e=o.match(r))&&(i=e[1]),s.parent=l.getParent(t,i)):s.fit=n.objectFit,s},getImageRatio:function(e){var i,a,r,l,d,c,u,f=e.parentNode,v=f&&o.test(f.nodeName||"")?f.querySelectorAll("source, img"):[e];for(i=0;i<v.length;i++)if(a=(e=v[i]).getAttribute(s.srcsetAttr)||e.getAttribute("srcset")||e.getAttribute("data-pfsrcset")||e.getAttribute("data-risrcset")||"",r=e._lsMedia||e.getAttribute("media"),r=s.customMedia[e.getAttribute("data-media")||r]||r,a&&(!r||(t.matchMedia&&matchMedia(r)||{}).matches)){(l=parseFloat(e.getAttribute("data-aspectratio")))||((d=a.match(n))?"w"==d[2]?(c=d[1],u=d[3]):(c=d[3],u=d[1]):(c=e.getAttribute("width"),u=e.getAttribute("height")),l=c/u);break}return l},calculateSize:function(t,e){var i,n,a,r=this.getFit(t),o=r.fit,s=r.parent;return"width"==o||("contain"==o||"cover"==o)&&(n=this.getImageRatio(t))?(s?e=s.clientWidth:s=t,a=e,"width"==o?a=e:(i=e/s.clientHeight)&&("cover"==o&&i<n||"contain"==o&&i>n)&&(a=e*(n/i)),a):e}};i.parentFit=l,e.addEventListener("lazybeforesizes",(function(t){if(!t.defaultPrevented&&t.detail.instance==i){var e=t.target;t.detail.width=l.calculateSize(e,t.detail.width)}}))}}))},281:(t,e,i)=>{"use strict";i(5851),i(5375),i(5821),i(1765),i(4261);document.addEventListener("lazybeforesizes",(t=>{const e=t.target.getAttribute("data-aspectratio");e&&(t.detail.width===parseFloat(e)&&(t.detail.width=t.detail.instance.parentFit.getFit(t.target).parent.clientWidth),t.detail.width=Math.round(t.detail.width))}))}},t=>{var e;e=281,t(t.s=e)}]);