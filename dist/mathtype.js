!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ClassicEditor=t():e.ClassicEditor=t()}(self,(()=>(()=>{var e={8807:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(3645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".ck-content .ratio-container{position:relative;display:block;max-width:100%}.ck-content .ratio-frame{padding-top:56.25%}.ck-content .ratio-frame.themed{padding-top:initial}.ck-content .ratio-frame.themed .ratio-object{position:relative}.ck-content .ratio-frame.themed iframe{width:100%}.ck-content .ratio-frame:not(.themed) iframe{position:absolute;width:100%;height:100%;top:0;left:0}.ck-content .ratio-frame video,.ck-content .ratio-frame audio{width:100%}.ck-content .ratio-object{position:absolute;width:100%;height:100%;top:0;left:0}.wrs_header,.wrs_panelContainer{overflow:scroll;-ms-overflow-style:none;scrollbar-width:none}.wrs_header::-webkit-scrollbar,.wrs_panelContainer::-webkit-scrollbar{display:none}#editor{max-width:100%}#editor.fullscreen .wrs_editor{position:fixed;width:100%;height:100%;top:0;left:0;z-index:9999;border-radius:0;-webkit-transform:translate3d(0, 0, 0);overflow:hidden}",""]);const i=r},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},3379:(e,t,n)=>{"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],d=n[c]||0,l="".concat(c," ").concat(d);n[c]=d+1;var f=s(l),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(u)):a.push({identifier:l,updater:v(u,t),references:1}),o.push(l)}return o}function d(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=f(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,m=0;function v(e,t){var n,o,r;if(t.singleton){var i=m++;n=h||(h=d(t)),o=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else n=d(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=s(n[o]);a[r].references--}for(var i=c(e,t),d=0;d<n.length;d++){var l=s(n[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},3086:()=>{let e=!1;if("maxTouchPoints"in navigator)e=navigator.maxTouchPoints>0;else if("msMaxTouchPoints"in navigator)e=navigator.msMaxTouchPoints>0;else{const t=matchMedia?.("(pointer:coarse)");if("(pointer:coarse)"===t?.media)e=!!t.matches;else if("orientation"in window)e=!0;else{const t=navigator.userAgent;e=/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(t)||/\b(Android|Windows Phone|iPad|iPod)\b/i.test(t)}}const t=e;t&&document.getElementById("editor").classList.add("fullscreen")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var o={};return(()=>{"use strict";var e=n(3379),t=n.n(e),o=n(8807),r={insert:"head",singleton:!1};t()(o.Z,r);o.Z.locals;n(3086)})(),o=o.default})()));