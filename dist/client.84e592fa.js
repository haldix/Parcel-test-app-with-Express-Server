parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"sgO0":[function(require,module,exports) {
"use strict";function e(){var e=document.querySelector("body");e.addEventListener("dblclick",function(){e.classList.toggle("body-styles")})}function t(){var e=document.querySelectorAll(".box");e.forEach(function(e){e.insertAdjacentHTML("afterbegin",'<div class="eyes-cont"><div class="eye"></div><div class="eye"></div></div>')})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e,exports.eyes=t;
},{}],"IVsl":[function(require,module,exports) {
"use strict";var t=r(require("./func.js"));function e(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return e=function(){return t},t}function r(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var r=e();if(r&&r.has(t))return r.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var c=o?Object.getOwnPropertyDescriptor(t,a):null;c&&(c.get||c.set)?Object.defineProperty(n,a,c):n[a]=t[a]}return n.default=t,r&&r.set(t,n),n}(0,t.default)(),(0,t.eyes)();var n=document.querySelectorAll(".box");n.forEach(function(t){t.addEventListener("click",function(e){var r=Math.round(16777215*Math.random());t.style.backgroundColor="#".concat(r.toString(16).padStart(6,"0"))})}),n.forEach(function(t){t.addEventListener("dblclick",function(t){t.stopPropagation()})});
},{"./func.js":"sgO0"}]},{},["IVsl"], null)
//# sourceMappingURL=/client.84e592fa.js.map