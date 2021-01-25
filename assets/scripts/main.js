/*!
 * simply v0.3.0
 * Copyright 2021 GodoFredo <hello@godofredo.ninja> (https://github.com/godofredoninja/simply)
 * Licensed under GPLv3
 */!function n(r,i,a){function l(t,e){if(!i[t]){if(!r[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(d)return d(t,!0);throw(o=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",o}o=i[t]={exports:{}},r[t][0].call(o.exports,function(e){return l(r[t][1][e]||e)},o,o.exports,n,r,i,a)}return i[t].exports}for(var d="function"==typeof require&&require,e=0;e<a.length;e++)l(a[e]);return l}({1:[function(e,t,o){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=n(e("./get-all"));o.default=function(e){var t,e=(0,r.default)(e);e.length&&(t=document.documentElement,e.forEach(function(e){return e.addEventListener("click",function(e){e.preventDefault(),t.classList.contains("dark")?(t.classList.remove("dark"),localStorage.theme="light"):(t.classList.add("dark"),localStorage.theme="dark")})}))}},{"./get-all":3,"@babel/runtime/helpers/interopRequireDefault":16}],2:[function(e,t,o){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=n(e("./get-all"));o.default=function(e){var t=(0,r.default)(e);t.length&&(t.forEach(function(t){t.addEventListener("click",function(e){e.stopPropagation(),t.classList.toggle("is-active"),document.body.classList.remove("has-menu")})}),document.addEventListener("click",function(){return t.forEach(function(e){e.classList.remove("is-active")})}))}},{"./get-all":3,"@babel/runtime/helpers/interopRequireDefault":16}],3:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return Array.prototype.slice.call(t.querySelectorAll(e),0)}},{}],4:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;o.default=function(e,t){var o=document.body;o.closest(e)&&window.addEventListener("scroll",function(){60<=window.scrollY?o.classList.remove(t):o.classList.add(t)},{passive:!0})}},{}],5:[function(e,t,o){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=n(e("@babel/runtime/helpers/slicedToArray")),i=n(e("../components/url-regular-expression"));o.default=function(e,t){var n=document.querySelector(t);n&&Object.entries(e).forEach(function(e){var t=(0,r.default)(e,2),o=t[0],e=t[1];"string"!==o&&!(0,i.default)(e)||((t=document.createElement("a")).href=e,t.classList="dropdown-item hover:text-primary",t.innerText=o,n.appendChild(t))})}},{"../components/url-regular-expression":11,"@babel/runtime/helpers/interopRequireDefault":16,"@babel/runtime/helpers/slicedToArray":19}],6:[function(e,t,o){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=n(e("@babel/runtime/helpers/slicedToArray")),a=n(e("../components/url-regular-expression")),r=n(e("./get-all"));o.default=function(e,t){t=(0,r.default)(t);if(t.length)return t.forEach(function(r){Object.entries(e).forEach(function(e){var t=(0,i.default)(e,2),o=t[0],n=t[1],e=n[0];(0,a.default)(e)&&((t=document.createElement("a")).href=e,t.title=n[1],t.classList="hover:text-".concat(o," p-2 inline-block"),t.target="_blank",t.rel="noopener noreferrer",t.innerHTML='<svg class="icon icon--'.concat(o,'"><use xlink:href="#icon-').concat(o,'"></use></svg>'),r.appendChild(t))})})}},{"../components/url-regular-expression":11,"./get-all":3,"@babel/runtime/helpers/interopRequireDefault":16,"@babel/runtime/helpers/slicedToArray":19}],7:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;o.default=function(e,t){var o=document.createElement("script");o.src=e,o.defer=!0,o.async=!0,t&&o.addEventListener("load",t),document.body.appendChild(o)}},{}],8:[function(e,t,o){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=n(e("medium-zoom")),i=n(e("../app/get-all"));o.default=function(e){(0,i.default)(e).forEach(function(e){return!e.closest("a")&&e.classList.add("simply-zoom")}),(0,r.default)(".simply-zoom",{margin:20,background:"hsla(0,0%,100%,.85)"})}},{"../app/get-all":3,"@babel/runtime/helpers/interopRequireDefault":16,"medium-zoom":23}],9:[function(e,t,o){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var d=n(e("../app/get-all"));o.default=function(e,t,o,n){var r,i,a=document.documentElement,l=(0,d.default)(e),t=(0,d.default)(t),o=(0,d.default)(o);t.length&&(t.forEach(function(e){return e.addEventListener("click",function(){return r(e.dataset.target)})}),o.length&&(o.forEach(function(e){return e.addEventListener("click",function(){return i()})}),r=function(e){document.body.classList.remove("has-menu");var t=document.getElementById(e);a.classList.add("overflow-hidden"),t.classList.add(n),"modal-search"===e&&document.querySelector("#search-field").focus()},i=function(){a.classList.remove("overflow-hidden"),l.forEach(function(e){return e.classList.remove(n)})},document.addEventListener("keydown",function(e){27===(e||window.event).keyCode&&i()})))}},{"../app/get-all":3,"@babel/runtime/helpers/interopRequireDefault":16}],10:[function(e,t,o){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=n(e("../app/get-all"));o.default=function(){var e=(0,r.default)(".kg-gallery-image > img");e.length&&e.forEach(function(e){var t=e.closest(".kg-gallery-image"),e=e.attributes.width.value/e.attributes.height.value;t.style.flex=e+" 1 0%"})}},{"../app/get-all":3,"@babel/runtime/helpers/interopRequireDefault":16}],11:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;o.default=function(e){return/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \+\.-]*)*\/?$/.test(e)}},{}],12:[function(e,t,o){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=n(e("../app/get-all"));o.default=function(){var e=(0,r.default)(['iframe[src*="player.vimeo.com"]','iframe[src*="dailymotion.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="player.twitch.tv"]','iframe[src*="kickstarter.com"][src*="video.html"]'].join(","));e.length&&e.forEach(function(e){var t=document.createElement("div");t.className="video-responsive",e.parentNode.insertBefore(t,e),t.appendChild(e),e.removeAttribute("height"),e.removeAttribute("width")})}},{"../app/get-all":3,"@babel/runtime/helpers/interopRequireDefault":16}],13:[function(e,t,o){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault"),r=n(e("@babel/runtime/helpers/typeof"));e("lazysizes");var i=n(e("./components/load-script")),a=n(e("./components/video-responsive")),l=n(e("./components/resize-images-galleries")),d=n(e("./components/medium-zoom")),s=n(e("./components/modal")),u=n(e("./app/menu-drop-down")),c=n(e("./app/soncial-media")),m=n(e("./app/header-transparency")),f=n(e("./app/dark-mode")),p=n(e("./app/dropdown-toggle"));document.addEventListener("DOMContentLoaded",function(){"object"===("undefined"==typeof menuDropdown?"undefined":(0,r.default)(menuDropdown))&&null!==menuDropdown&&(0,u.default)(menuDropdown,".js-dropdown-menu"),"object"===("undefined"==typeof followSocialMedia?"undefined":(0,r.default)(followSocialMedia))&&null!==followSocialMedia&&(0,c.default)(followSocialMedia,".js-social-media"),(0,s.default)(".js-modal",".js-modal-button",".js-modal-close","is-active"),document.querySelector(".js-menu-toggle").addEventListener("click",function(e){e.preventDefault(),document.body.classList.toggle("has-menu")}),(0,m.default)(".has-cover","is-head-transparent"),(0,f.default)(".js-dark-mode"),(0,a.default)(),(0,l.default)(),(0,d.default)(".post-body img"),(0,p.default)(".dropdown:not(.is-hoverable)"),document.querySelectorAll("code[class*=language-]").length&&"undefined"!=typeof prismJs&&(0,i.default)(prismJs),"undefined"!=typeof searchSettings&&"undefined"!=typeof siteSearch&&(0,i.default)(siteSearch)})},{"./app/dark-mode":1,"./app/dropdown-toggle":2,"./app/header-transparency":4,"./app/menu-drop-down":5,"./app/soncial-media":6,"./components/load-script":7,"./components/medium-zoom":8,"./components/modal":9,"./components/resize-images-galleries":10,"./components/video-responsive":12,"@babel/runtime/helpers/interopRequireDefault":16,"@babel/runtime/helpers/typeof":20,lazysizes:22}],14:[function(e,t,o){t.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}},{}],15:[function(e,t,o){t.exports=function(e){if(Array.isArray(e))return e}},{}],16:[function(e,t,o){t.exports=function(e){return e&&e.__esModule?e:{default:e}}},{}],17:[function(e,t,o){t.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var o=[],n=!0,r=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(o.push(a.value),!t||o.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return o}}},{}],18:[function(e,t,o){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},{}],19:[function(e,t,o){var n=e("./arrayWithHoles"),r=e("./iterableToArrayLimit"),i=e("./unsupportedIterableToArray"),a=e("./nonIterableRest");t.exports=function(e,t){return n(e)||r(e,t)||i(e,t)||a()}},{"./arrayWithHoles":15,"./iterableToArrayLimit":17,"./nonIterableRest":18,"./unsupportedIterableToArray":21}],20:[function(e,t,o){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(e){return typeof e}:t.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.exports=n},{}],21:[function(e,t,o){var n=e("./arrayLikeToArray");t.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(o="Object"===o&&e.constructor?e.constructor.name:o)||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}},{"./arrayLikeToArray":14}],22:[function(e,t,o){var n,r;n="undefined"!=typeof window?window:{},r=(r=function(n,m,i){"use strict";var f,p;if(!function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in p=n.lazySizesConfig||n.lazysizesConfig||{},t)e in p||(p[e]=t[e])}(),!m||!m.getElementsByClassName)return{init:function(){},cfg:p,noSupport:!0};function a(e,t){return _[t]||(_[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),_[t].test(e[E]("class")||"")&&_[t]}function u(e,t){a(e,t)||e.setAttribute("class",(e[E]("class")||"").trim()+" "+t)}function c(e,t){(t=a(e,t))&&e.setAttribute("class",(e[E]("class")||"").replace(t," "))}function v(e,t,o,n,r){var i=m.createEvent("Event");return(o=o||{}).instance=f,i.initEvent(t,!n,!r),i.detail=o,e.dispatchEvent(i),i}function h(e,t){var o;!b&&(o=n.picturefill||p.pf)?(t&&t.src&&!e[E]("srcset")&&e.setAttribute("srcset",t.src),o({reevaluate:!0,elements:[e]})):t&&t.src&&(e.src=t.src)}function g(e,t){return(getComputedStyle(e,null)||{})[t]}function r(e,t,o){for(o=o||e.offsetWidth;o<p.minSize&&t&&!e._lazysizesWidth;)o=t.offsetWidth,t=t.parentNode;return o}var o,l,t,d,s,y=m.documentElement,b=n.HTMLPictureElement,z="addEventListener",E="getAttribute",e=n[z].bind(n),w=n.setTimeout,L=n.requestAnimationFrame||w,C=n.requestIdleCallback,A=/^picture$/i,x=["load","error","lazyincluded","_lazyloaded"],_={},S=Array.prototype.forEach,O=function(t,o,e){var n=e?z:"removeEventListener";e&&O(t,o),x.forEach(function(e){t[n](e,o)})},k=(d=[],s=t=[],H._lsFlush=M,H);function M(){var e=s;for(s=t.length?d:t,l=!(o=!0);e.length;)e.shift()();o=!1}function H(e,t){o&&!t?e.apply(this,arguments):(s.push(e),l||(l=!0,(m.hidden?w:L)(M)))}function j(o,e){return e?function(){k(o)}:function(){var e=this,t=arguments;k(function(){o.apply(e,t)})}}function T(e){function t(){o=null,e()}var o,n,r=function(){var e=i.now()-n;e<99?w(r,99-e):(C||t)(t)};return function(){n=i.now(),o=o||w(r,99)}}var q,D,R,N,P,I,B,W,F,$,U,Y,J,Z,G,X,K,Q,V,ee,te,oe,ne,re,ie,ae,le,de,se,ue,ce,me=(V=/^img$/i,ee=/^iframe$/i,te="onscroll"in n&&!/(gle|ing)bot/.test(navigator.userAgent),re=-1,J=ve,G=ne=oe=0,X=p.throttleDelay,K=p.ricTimeout,Q=C&&49<K?function(){C(he,{timeout:K}),K!==p.ricTimeout&&(K=p.ricTimeout)}:j(function(){w(he)},!0),ae=j(ge),le=function(e){ae({target:e.target})},de=j(function(t,e,o,n,r){var i,a,l,d,s;(l=v(t,"lazybeforeunveil",e)).defaultPrevented||(n&&(o?u(t,p.autosizesClass):t.setAttribute("sizes",n)),i=t[E](p.srcsetAttr),o=t[E](p.srcAttr),r&&(a=(s=t.parentNode)&&A.test(s.nodeName||"")),d=e.firesLoad||"src"in t&&(i||o||a),l={target:t},u(t,p.loadingClass),d&&(clearTimeout(R),R=w(fe,2500),O(t,le,!0)),a&&S.call(s.getElementsByTagName("source"),ye),i?t.setAttribute("srcset",i):o&&!a&&(ee.test(t.nodeName)?(n=o,0==(s=(e=t).getAttribute("data-load-mode")||p.iframeLoadMode)?e.contentWindow.location.replace(n):1==s&&(e.src=n)):t.src=o),r&&(i||a)&&h(t,{src:o})),t._lazyRace&&delete t._lazyRace,c(t,p.lazyClass),k(function(){var e=t.complete&&1<t.naturalWidth;d&&!e||(e&&u(t,p.fastLoadedClass),ge(l),t._lazyCache=!0,w(function(){"_lazyCache"in t&&delete t._lazyCache},9)),"lazy"==t.loading&&ne--},!0)}),ue=T(function(){p.loadMode=3,ie()}),ce=function(){D||(i.now()-P<999?w(ce,999):(D=!0,p.loadMode=3,ie(),e("scroll",be,!0)))},{_:function(){P=i.now(),f.elements=m.getElementsByClassName(p.lazyClass),q=m.getElementsByClassName(p.lazyClass+" "+p.preloadClass),e("scroll",ie,!0),e("resize",ie,!0),e("pageshow",function(e){var t;!e.persisted||(t=m.querySelectorAll("."+p.loadingClass)).length&&t.forEach&&L(function(){t.forEach(function(e){e.complete&&se(e)})})}),n.MutationObserver?new MutationObserver(ie).observe(y,{childList:!0,subtree:!0,attributes:!0}):(y[z]("DOMNodeInserted",ie,!0),y[z]("DOMAttrModified",ie,!0),setInterval(ie,999)),e("hashchange",ie,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){m[z](e,ie,!0)}),/d$|^c/.test(m.readyState)?ce():(e("load",ce),m[z]("DOMContentLoaded",ie),w(ce,2e4)),f.elements.length?(ve(),k._lsFlush()):ie()},checkElems:ie=function(e){var t;(e=!0===e)&&(K=33),Z||(Z=!0,(t=X-(i.now()-G))<0&&(t=0),e||t<9?Q():w(Q,t))},unveil:se=function(e){var t,o,n,r;e._lazyRace||(!(r="auto"==(n=(o=V.test(e.nodeName))&&(e[E](p.sizesAttr)||e[E]("sizes"))))&&D||!o||!e[E]("src")&&!e.srcset||e.complete||a(e,p.errorClass)||!a(e,p.lazyClass))&&(t=v(e,"lazyunveilread").detail,r&&Le.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,ne++,de(e,t,r,n,o))},_aLSL:be});function fe(e){ne--,e&&!(ne<0)&&e.target||(ne=0)}function pe(e){return(Y=null==Y?"hidden"==g(m.body,"visibility"):Y)||!("hidden"==g(e.parentNode,"visibility")&&"hidden"==g(e,"visibility"))}function ve(){var e,t,o,n,r,i,a,l,d,s,u,c=f.elements;if((N=p.loadMode)&&ne<8&&(e=c.length)){for(t=0,re++;t<e;t++)if(c[t]&&!c[t]._lazyRace)if(!te||f.prematureUnveil&&f.prematureUnveil(c[t]))se(c[t]);else if((a=c[t][E]("data-expand"))&&(r=+a)||(r=oe),d||(d=!p.expand||p.expand<1?500<y.clientHeight&&500<y.clientWidth?500:370:p.expand,s=(f._defEx=d)*p.expFactor,u=p.hFac,Y=null,oe<s&&ne<1&&2<re&&2<N&&!m.hidden?(oe=s,re=0):oe=1<N&&1<re&&ne<6?d:0),l!==r&&(I=innerWidth+r*u,B=innerHeight+r,i=-1*r,l=r),s=c[t].getBoundingClientRect(),(U=s.bottom)>=i&&(W=s.top)<=B&&($=s.right)>=i*u&&(F=s.left)<=I&&(U||$||F||W)&&(p.loadHidden||pe(c[t]))&&(D&&ne<3&&!a&&(N<3||re<4)||function(e,t){var o,n=e,r=pe(e);for(W-=t,U+=t,F-=t,$+=t;r&&(n=n.offsetParent)&&n!=m.body&&n!=y;)(r=0<(g(n,"opacity")||1))&&"visible"!=g(n,"overflow")&&(o=n.getBoundingClientRect(),r=$>o.left&&F<o.right&&U>o.top-1&&W<o.bottom+1);return r}(c[t],r))){if(se(c[t]),n=!0,9<ne)break}else!n&&D&&!o&&ne<4&&re<4&&2<N&&(q[0]||p.preloadAfterLoad)&&(q[0]||!a&&(U||$||F||W||"auto"!=c[t][E](p.sizesAttr)))&&(o=q[0]||c[t]);o&&!n&&se(o)}}function he(){Z=!1,G=i.now(),J()}function ge(e){var t=e.target;t._lazyCache?delete t._lazyCache:(fe(e),u(t,p.loadedClass),c(t,p.loadingClass),O(t,le),v(t,"lazyloaded"))}function ye(e){var t,o=e[E](p.srcsetAttr);(t=p.customMedia[e[E]("data-media")||e[E]("media")])&&e.setAttribute("media",t),o&&e.setAttribute("srcset",o)}function be(){3==p.loadMode&&(p.loadMode=2),ue()}var ze,Ee,we,Le=(Ee=j(function(e,t,o,n){var r,i,a;if(e._lazysizesWidth=n,n+="px",e.setAttribute("sizes",n),A.test(t.nodeName||""))for(i=0,a=(r=t.getElementsByTagName("source")).length;i<a;i++)r[i].setAttribute("sizes",n);o.detail.dataAttr||h(e,o.detail)}),{_:function(){ze=m.getElementsByClassName(p.autosizesClass),e("resize",we)},checkElems:we=T(function(){var e,t=ze.length;if(t)for(e=0;e<t;e++)Ce(ze[e])}),updateElem:Ce});function Ce(e,t,o){var n=e.parentNode;n&&(o=r(e,n,o),(t=v(e,"lazybeforesizes",{width:o,dataAttr:!!t})).defaultPrevented||(o=t.detail.width)&&o!==e._lazysizesWidth&&Ee(e,n,t,o))}var Ae=function(){!Ae.i&&m.getElementsByClassName&&(Ae.i=!0,Le._(),me._())};return w(function(){p.init&&Ae()}),f={cfg:p,autoSizer:Le,loader:me,init:Ae,uP:h,aC:u,rC:c,hC:a,fire:v,gW:r,rAF:k}})(n,n.document,Date),n.lazySizes=r,"object"==typeof t&&t.exports&&(t.exports=r)},{}],23:[function(e,t,o){var n,r;n=this,r=function(){"use strict";function t(e){return"IMG"===e.tagName}function z(e){return e&&1===e.nodeType}function s(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()}function d(e){try{return Array.isArray(e)?e.filter(t):NodeList.prototype.isPrototypeOf(e)?[].slice.call(e).filter(t):z(e)?[e].filter(t):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(t):[]}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}}function E(e,t){var o=w({bubbles:!1,cancelable:!1,detail:void 0},t);return"function"==typeof window.CustomEvent?new CustomEvent(e,o):((t=document.createEvent("CustomEvent")).initCustomEvent(e,o.bubbles,o.cancelable,o.detail),t)}var e,o,n,r,w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o,n=arguments[t];for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};return e=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}",r=(o=void 0===o?{}:o).insertAt,"undefined"!=typeof document&&(n=document.head||document.getElementsByTagName("head")[0],(o=document.createElement("style")).type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))),function e(t,o){function n(){function u(){var e={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},t=void 0,o=void 0;h.container&&(h.container instanceof Object?(t=(e=w({},e,h.container)).width-e.left-e.right-2*h.margin,o=e.height-e.top-e.bottom-2*h.margin):(i=(r=(z(h.container)?h.container:document.querySelector(h.container)).getBoundingClientRect()).width,d=r.height,a=r.left,l=r.top,e=w({},e,{width:i,height:d,left:a,top:l}))),t=t||e.width-2*h.margin,o=o||e.height-2*h.margin;var n=g.zoomedHd||g.original,r=!s(n)&&n.naturalWidth||t,i=!s(n)&&n.naturalHeight||o,a=(d=n.getBoundingClientRect()).top,l=d.left,n=d.width,d=d.height,r=Math.min(r,t)/n,i=Math.min(i,o)/d,i="scale("+(i=Math.min(r,i))+") translate3d("+((t-n)/2-l+h.margin+e.left)/i+"px, "+((o-d)/2-a+h.margin+e.top)/i+"px, 0)";g.zoomed.style.transform=i,g.zoomedHd&&(g.zoomedHd.style.transform=i)}var c=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).target;return new i(function(t){if(c&&-1===f.indexOf(c))t(b);else if(g.zoomed)t(b);else{if(c)g.original=c;else{if(!(0<f.length))return void t(b);g.original=f[0]}var e,o;g.original.dispatchEvent(E("medium-zoom:open",{detail:{zoom:b}})),v=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,p=!0,g.zoomed=(n=g.original,r=n.getBoundingClientRect(),i=r.top,a=r.left,l=r.width,d=r.height,s=n.cloneNode(),r=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,n=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,s.removeAttribute("id"),s.style.position="absolute",s.style.top=i+r+"px",s.style.left=a+n+"px",s.style.width=l+"px",s.style.height=d+"px",s.style.transform="",s),document.body.appendChild(y),h.template&&(s=z(h.template)?h.template:document.querySelector(h.template),g.template=document.createElement("div"),g.template.appendChild(s.content.cloneNode(!0)),document.body.appendChild(g.template)),document.body.appendChild(g.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),g.original.classList.add("medium-zoom-image--hidden"),g.zoomed.classList.add("medium-zoom-image--opened"),g.zoomed.addEventListener("click",m),g.zoomed.addEventListener("transitionend",function e(){p=!1,g.zoomed.removeEventListener("transitionend",e),g.original.dispatchEvent(E("medium-zoom:opened",{detail:{zoom:b}})),t(b)}),g.original.getAttribute("data-zoom-src")?(g.zoomedHd=g.zoomed.cloneNode(),g.zoomedHd.removeAttribute("srcset"),g.zoomedHd.removeAttribute("sizes"),g.zoomedHd.src=g.zoomed.getAttribute("data-zoom-src"),g.zoomedHd.onerror=function(){clearInterval(e),console.warn("Unable to reach the zoom image target "+g.zoomedHd.src),g.zoomedHd=null,u()},e=setInterval(function(){g.zoomedHd.complete&&(clearInterval(e),g.zoomedHd.classList.add("medium-zoom-image--opened"),g.zoomedHd.addEventListener("click",m),document.body.appendChild(g.zoomedHd),u())},10)):g.original.hasAttribute("srcset")?(g.zoomedHd=g.zoomed.cloneNode(),g.zoomedHd.removeAttribute("sizes"),g.zoomedHd.removeAttribute("loading"),o=g.zoomedHd.addEventListener("load",function(){g.zoomedHd.removeEventListener("load",o),g.zoomedHd.classList.add("medium-zoom-image--opened"),g.zoomedHd.addEventListener("click",m),document.body.appendChild(g.zoomedHd),u()})):u()}var n,r,i,a,l,d,s})}var r=1<arguments.length&&void 0!==o?o:{},i=window.Promise||function(e){function t(){}e(t,t)},o=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var r=t.reduce(function(e,t){return[].concat(e,d(t))},[]);return r.filter(function(e){return-1===f.indexOf(e)}).forEach(function(e){f.push(e),e.classList.add("medium-zoom-image")}),l.forEach(function(e){var t=e.type,o=e.listener,n=e.options;r.forEach(function(e){e.addEventListener(t,o,n)})}),b},m=function(){return new i(function(t){!p&&g.original?(p=!0,document.body.classList.remove("medium-zoom--opened"),g.zoomed.style.transform="",g.zoomedHd&&(g.zoomedHd.style.transform=""),g.template&&(g.template.style.transition="opacity 150ms",g.template.style.opacity=0),g.original.dispatchEvent(E("medium-zoom:close",{detail:{zoom:b}})),g.zoomed.addEventListener("transitionend",function e(){g.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(g.zoomed),g.zoomedHd&&document.body.removeChild(g.zoomedHd),document.body.removeChild(y),g.zoomed.classList.remove("medium-zoom-image--opened"),g.template&&document.body.removeChild(g.template),p=!1,g.zoomed.removeEventListener("transitionend",e),g.original.dispatchEvent(E("medium-zoom:closed",{detail:{zoom:b}})),g.original=null,g.zoomed=null,g.zoomedHd=null,g.template=null,t(b)})):t(b)})},a=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).target;return g.original?m():n({target:e})},f=[],l=[],p=!1,v=0,h=r,g={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(t)?h=t:!t&&"string"!=typeof t||o(t),h=w({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},h);var y=(r=h.background,(t=document.createElement("div")).classList.add("medium-zoom-overlay"),t.style.background=r,t);document.addEventListener("click",function(e){e=e.target;e!==y?-1!==f.indexOf(e)&&a({target:e}):m()}),document.addEventListener("keyup",function(e){e=e.key||e.keyCode;"Escape"!==e&&"Esc"!==e&&27!==e||m()}),document.addEventListener("scroll",function(){var e;!p&&g.original&&(e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,Math.abs(v-e)>h.scrollOffset&&setTimeout(m,150))}),window.addEventListener("resize",m);var b={open:n,close:m,toggle:a,update:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e;return e.background&&(y.style.background=e.background),e.container&&e.container instanceof Object&&(t.container=w({},h.container,e.container)),e.template&&(e=z(e.template)?e.template:document.querySelector(e.template),t.template=e),h=w({},h,t),f.forEach(function(e){e.dispatchEvent(E("medium-zoom:update",{detail:{zoom:b}}))}),b},clone:function(){return e(w({},h,0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}))},attach:o,detach:function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];g.zoomed&&m();var n=0<t.length?t.reduce(function(e,t){return[].concat(e,d(t))},[]):f;return n.forEach(function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(E("medium-zoom:detach",{detail:{zoom:b}}))}),f=f.filter(function(e){return-1===n.indexOf(e)}),b},on:function(t,o){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return f.forEach(function(e){e.addEventListener("medium-zoom:"+t,o,n)}),l.push({type:"medium-zoom:"+t,listener:o,options:n}),b},off:function(t,o){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return f.forEach(function(e){e.removeEventListener("medium-zoom:"+t,o,n)}),l=l.filter(function(e){return!(e.type==="medium-zoom:"+t&&e.listener.toString()===o.toString())}),b},getOptions:function(){return h},getImages:function(){return f},getZoomedImage:function(){return g.original}};return b}},"object"==typeof o&&void 0!==t?t.exports=r():"function"==typeof define&&define.amd?define(r):(n=n||self).mediumZoom=r()},{}]},{},[13]);