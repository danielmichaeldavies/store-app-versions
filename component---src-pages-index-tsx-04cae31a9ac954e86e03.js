/*! For license information please see component---src-pages-index-tsx-04cae31a9ac954e86e03.js.LICENSE.txt */
(self.webpackChunkapp_versions=self.webpackChunkapp_versions||[]).push([[691],{6937:function(e,t,r){"use strict";function n(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void r(s)}c.done?t(u):Promise.resolve(u).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function c(e){n(i,o,a,c,u,"next",e)}function u(e){n(i,o,a,c,u,"throw",e)}c(void 0)}))}}r.r(t),r.d(t,{Head:function(){return Se},default:function(){return we}});var a=r(4687),i=r.n(a),c=r(7294),u=crypto,s=function(e){return e instanceof CryptoKey},f=new TextEncoder,l=new TextDecoder;Math.pow(2,32);function p(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t.reduce((function(e,t){return e+t.length}),0),o=new Uint8Array(n),a=0;return t.forEach((function(e){o.set(e,a),a+=e.length})),o}var h=function(e){return function(e){var t=e;"string"==typeof t&&(t=f.encode(t));for(var r=[],n=0;n<t.length;n+=32768)r.push(String.fromCharCode.apply(null,t.subarray(n,n+32768)));return btoa(r.join(""))}(e).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")};function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=r(9611);function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,b.Z)(e,t)}function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function S(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function P(e,t,r){return P=O()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&(0,b.Z)(o,r.prototype),o},P.apply(null,arguments)}function x(e){var t="function"==typeof Map?new Map:void 0;return x=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return P(e,arguments,E(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),(0,b.Z)(n,e)},x(e)}function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=E(e);if(t){var o=E(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return S(this,r)}}var _=function(e){g(r,e);var t=A(r);function r(e){var n,o;return y(this,r),(n=t.call(this,e)).code="ERR_JOSE_GENERIC",n.name=n.constructor.name,null===(o=Error.captureStackTrace)||void 0===o||o.call(Error,m(n),n.constructor),n}return v(r,null,[{key:"code",get:function(){return"ERR_JOSE_GENERIC"}}]),r}(x(Error)),k=function(e){g(r,e);var t=A(r);function r(){var e;return y(this,r),(e=t.apply(this,arguments)).code="ERR_JOSE_NOT_SUPPORTED",e}return v(r,null,[{key:"code",get:function(){return"ERR_JOSE_NOT_SUPPORTED"}}]),r}(_),j=function(e){g(r,e);var t=A(r);function r(){var e;return y(this,r),(e=t.apply(this,arguments)).code="ERR_JWS_INVALID",e}return v(r,null,[{key:"code",get:function(){return"ERR_JWS_INVALID"}}]),r}(_),H=function(e){g(r,e);var t=A(r);function r(){var e;return y(this,r),(e=t.apply(this,arguments)).code="ERR_JWT_INVALID",e}return v(r,null,[{key:"code",get:function(){return"ERR_JWT_INVALID"}}]),r}(_);u.getRandomValues.bind(u);var R=function(e){return s(e)},C=["CryptoKey"];function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(){return"function"==typeof WebSocketPair}var I=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;0===n&&(r.unshift(r.length),r.unshift(6));var o=t.indexOf(r[0],n);if(-1===o)return!1;var a=t.subarray(o,o+r.length);return a.length===r.length&&(a.every((function(e,t){return e===r[t]}))||e(t,r,o+1))},L=function(e){switch(!0){case I(e,[42,134,72,206,61,3,1,7]):return"P-256";case I(e,[43,129,4,0,34]):return"P-384";case I(e,[43,129,4,0,35]):return"P-521";case D()&&I(e,[43,101,112]):return"Ed25519";default:throw new k("Invalid or unsupported EC Key Curve or OKP Key Sub Type")}},M=function(){var e=o(i().mark((function e(t,r,n,o,a){var c,s,f,l,p,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=new Uint8Array(atob(n.replace(t,"")).split("").map((function(e){return e.charCodeAt(0)}))),p="spki"===r,e.t0=o,e.next="PS256"===e.t0||"PS384"===e.t0||"PS512"===e.t0?5:"RS256"===e.t0||"RS384"===e.t0||"RS512"===e.t0?8:"RSA-OAEP"===e.t0||"RSA-OAEP-256"===e.t0||"RSA-OAEP-384"===e.t0||"RSA-OAEP-512"===e.t0?11:"ES256"===e.t0?14:"ES384"===e.t0?17:"ES512"===e.t0?20:"ECDH-ES"===e.t0||"ECDH-ES+A128KW"===e.t0||"ECDH-ES+A192KW"===e.t0||"ECDH-ES+A256KW"===e.t0?23:e.t0===(D()&&"EdDSA")?26:30;break;case 5:return s={name:"RSA-PSS",hash:"SHA-".concat(o.slice(-3))},f=p?["verify"]:["sign"],e.abrupt("break",31);case 8:return s={name:"RSASSA-PKCS1-v1_5",hash:"SHA-".concat(o.slice(-3))},f=p?["verify"]:["sign"],e.abrupt("break",31);case 11:return s={name:"RSA-OAEP",hash:"SHA-".concat(parseInt(o.slice(-3),10)||1)},f=p?["encrypt","wrapKey"]:["decrypt","unwrapKey"],e.abrupt("break",31);case 14:return s={name:"ECDSA",namedCurve:"P-256"},f=p?["verify"]:["sign"],e.abrupt("break",31);case 17:return s={name:"ECDSA",namedCurve:"P-384"},f=p?["verify"]:["sign"],e.abrupt("break",31);case 20:return s={name:"ECDSA",namedCurve:"P-521"},f=p?["verify"]:["sign"],e.abrupt("break",31);case 23:return s={name:"ECDH",namedCurve:L(l)},f=p?[]:["deriveBits"],e.abrupt("break",31);case 26:return h=L(l).toUpperCase(),s={name:"NODE-".concat(h),namedCurve:"NODE-".concat(h)},f=p?["verify"]:["sign"],e.abrupt("break",31);case 30:throw new k('Invalid or unsupported "alg" (Algorithm) value');case 31:return e.abrupt("return",u.subtle.importKey(r,l,s,null!==(c=null==a?void 0:a.extractable)&&void 0!==c&&c,f));case 32:case"end":return e.stop()}}),e)})));return function(t,r,n,o,a){return e.apply(this,arguments)}}(),N=function(e,t,r){return M(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g,"pkcs8",e,t,r)};function K(e){if("object"!=typeof(t=e)||null===t||"[object Object]"!==Object.prototype.toString.call(e))return!1;var t;if(null===Object.getPrototypeOf(e))return!0;for(var r=e;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(e)===r}function U(e,t,r){return W.apply(this,arguments)}function W(){return(W=o(i().mark((function e(t,r,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"==typeof t&&0===t.indexOf("-----BEGIN PRIVATE KEY-----")){e.next=2;break}throw new TypeError('"pkcs8" must be PCKS8 formatted string');case 2:return e.abrupt("return",N(t,r,n));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=r(5785),B=function(e){for(var t="Key must be ",r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];if(n.length>2){var a=n.pop();t+="one of type ".concat(n.join(", "),", or ").concat(a,".")}else 2===n.length?t+="one of type ".concat(n[0]," or ").concat(n[1],"."):t+="of type ".concat(n[0],".");return null==e?t+=" Received ".concat(e):"function"==typeof e&&e.name?t+=" Received function ".concat(e.name):"object"==typeof e&&null!=e&&e.constructor&&e.constructor.name&&(t+=" Received an instance of ".concat(e.constructor.name)),t},G=function(e,t,r){e.startsWith("HS")||"dir"===e||e.startsWith("PBES2")||/^A\d{3}(?:GCM)?KW$/.test(e)?function(e){if(!(e instanceof Uint8Array)){if(!R(e))throw new TypeError(B.apply(void 0,[e].concat((0,J.Z)(C),["Uint8Array"])));if("secret"!==e.type)throw new TypeError("".concat(C.join(" or "),' instances for symmetric algorithms must be of type "secret"'))}}(t):function(e,t){if(!R(e))throw new TypeError(B.apply(void 0,[e].concat((0,J.Z)(C))));if("secret"===e.type)throw new TypeError("".concat(C.join(" or "),' instances for asymmetric algorithms must not be of type "secret"'));if("sign"===t&&"public"===e.type)throw new TypeError("".concat(C.join(" or "),' instances for asymmetric algorithm signing must be of type "private"'));if("decrypt"===t&&"public"===e.type)throw new TypeError("".concat(C.join(" or "),' instances for asymmetric algorithm decryption must be of type "private"'));if(e.algorithm&&"verify"===t&&"private"===e.type)throw new TypeError("".concat(C.join(" or "),' instances for asymmetric algorithm verifying must be of type "public"'));if(e.algorithm&&"encrypt"===t&&"private"===e.type)throw new TypeError("".concat(C.join(" or "),' instances for asymmetric algorithm encryption must be of type "public"'))}(t,r)};function F(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Z(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var V=function(e,t,r,n,o){if(void 0!==o.crit&&void 0===n.crit)throw new e('"crit" (Critical) Header Parameter MUST be integrity protected');if(!n||void 0===n.crit)return new Set;if(!Array.isArray(n.crit)||0===n.crit.length||n.crit.some((function(e){return"string"!=typeof e||0===e.length})))throw new e('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');var a;a=void 0!==r?new Map([].concat((0,J.Z)(Object.entries(r)),(0,J.Z)(t.entries()))):t;var i,c=F(n.crit);try{for(c.s();!(i=c.n()).done;){var u=i.value;if(!a.has(u))throw new k('Extension Header Parameter "'.concat(u,'" is not recognized'));if(void 0===o[u])throw new e('Extension Header Parameter "'.concat(u,'" is missing'));if(a.get(u)&&void 0===n[u])throw new e('Extension Header Parameter "'.concat(u,'" MUST be integrity protected'))}}catch(s){c.e(s)}finally{c.f()}return new Set(n.crit)};Symbol();function Y(e,t){var r="SHA-".concat(e.slice(-3));switch(e){case"HS256":case"HS384":case"HS512":return{hash:r,name:"HMAC"};case"PS256":case"PS384":case"PS512":return{hash:r,name:"RSA-PSS",saltLength:e.slice(-3)>>3};case"RS256":case"RS384":case"RS512":return{hash:r,name:"RSASSA-PKCS1-v1_5"};case"ES256":case"ES384":case"ES512":return{hash:r,name:"ECDSA",namedCurve:t.namedCurve};case D()&&"EdDSA":var n=t.namedCurve;return{name:n,namedCurve:n};default:throw new k("alg ".concat(e," is not supported either by JOSE or your javascript runtime"))}}function $(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"algorithm.name";return new TypeError("CryptoKey does not support this operation, its ".concat(t," must be ").concat(e))}function z(e,t){return e.name===t}function q(e){return parseInt(e.name.slice(4),10)}function Q(e){switch(e){case"ES256":return"P-256";case"ES384":return"P-384";case"ES512":return"P-521";default:throw new Error("unreachable")}}function X(e,t){if(t.length&&!t.some((function(t){return e.usages.includes(t)}))){var r="CryptoKey does not support this operation, its usages must include ";if(t.length>2){var n=t.pop();r+="one of ".concat(t.join(", "),", or ").concat(n,".")}else 2===t.length?r+="one of ".concat(t[0]," or ").concat(t[1],"."):r+="".concat(t[0],".");throw new TypeError(r)}}function ee(e,t,r){if(s(t))return function(e,t){switch(t){case"HS256":case"HS384":case"HS512":if(!z(e.algorithm,"HMAC"))throw $("HMAC");var r=parseInt(t.slice(2),10);if(q(e.algorithm.hash)!==r)throw $("SHA-".concat(r),"algorithm.hash");break;case"RS256":case"RS384":case"RS512":if(!z(e.algorithm,"RSASSA-PKCS1-v1_5"))throw $("RSASSA-PKCS1-v1_5");var n=parseInt(t.slice(2),10);if(q(e.algorithm.hash)!==n)throw $("SHA-".concat(n),"algorithm.hash");break;case"PS256":case"PS384":case"PS512":if(!z(e.algorithm,"RSA-PSS"))throw $("RSA-PSS");var o=parseInt(t.slice(2),10);if(q(e.algorithm.hash)!==o)throw $("SHA-".concat(o),"algorithm.hash");break;case D()&&"EdDSA":if(!z(e.algorithm,"NODE-ED25519"))throw $("NODE-ED25519");break;case"ES256":case"ES384":case"ES512":if(!z(e.algorithm,"ECDSA"))throw $("ECDSA");var a=Q(t);if(e.algorithm.namedCurve!==a)throw $(a,"algorithm.namedCurve");break;default:throw new TypeError("CryptoKey does not support this operation")}for(var i=arguments.length,c=new Array(i>2?i-2:0),u=2;u<i;u++)c[u-2]=arguments[u];X(e,c)}(t,e,r),t;if(t instanceof Uint8Array){if(!e.startsWith("HS"))throw new TypeError(B.apply(void 0,[t].concat((0,J.Z)(C))));return u.subtle.importKey("raw",t,{hash:"SHA-".concat(e.slice(-3)),name:"HMAC"},!1,[r])}throw new TypeError(B.apply(void 0,[t].concat((0,J.Z)(C),["Uint8Array"])))}var te=86400,re=/^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i,ne=function(e){var t=re.exec(e);if(!t)throw new TypeError("Invalid time period format");var r=parseFloat(t[1]);switch(t[2].toLowerCase()){case"sec":case"secs":case"second":case"seconds":case"s":return Math.round(r);case"minute":case"minutes":case"min":case"mins":case"m":return Math.round(60*r);case"hour":case"hours":case"hr":case"hrs":case"h":return Math.round(3600*r);case"day":case"days":case"d":return Math.round(r*te);case"week":case"weeks":case"w":return Math.round(604800*r);default:return Math.round(31557600*r)}};var oe=function(e,t){if(e.startsWith("RS")||e.startsWith("PS")){var r=t.algorithm.modulusLength;if("number"!=typeof r||r<2048)throw new TypeError("".concat(e," requires key modulusLength to be 2048 bits or larger"))}},ae=function(){var e=o(i().mark((function e(t,r,n){var o,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee(t,r,"sign");case 2:return o=e.sent,oe(t,o),e.next=6,u.subtle.sign(Y(t,o.algorithm),o,n);case 6:return a=e.sent,e.abrupt("return",new Uint8Array(a));case 8:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),ie=ae;function ce(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return ue(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ue(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function ue(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var se=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n,o=t.filter(Boolean);if(0===o.length||1===o.length)return!0;var a,i=ce(o);try{for(i.s();!(a=i.n()).done;){var c=a.value,u=Object.keys(c);if(n&&0!==n.size)for(var s=0,f=u;s<f.length;s++){var l=f[s];if(n.has(l))return!1;n.add(l)}else n=new Set(u)}}catch(p){i.e(p)}finally{i.f()}return!0};function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var pe=function(){function e(t){if(y(this,e),!(t instanceof Uint8Array))throw new TypeError("payload must be an instance of Uint8Array");this._payload=t}var t;return v(e,[{key:"setProtectedHeader",value:function(e){if(this._protectedHeader)throw new TypeError("setProtectedHeader can only be called once");return this._protectedHeader=e,this}},{key:"setUnprotectedHeader",value:function(e){if(this._unprotectedHeader)throw new TypeError("setUnprotectedHeader can only be called once");return this._unprotectedHeader=e,this}},{key:"sign",value:(t=o(i().mark((function e(t,r){var n,o,a,c,u,s,y,d,v;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._protectedHeader||this._unprotectedHeader){e.next=2;break}throw new j("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");case 2:if(se(this._protectedHeader,this._unprotectedHeader)){e.next=4;break}throw new j("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");case 4:if(n=le(le({},this._protectedHeader),this._unprotectedHeader),o=V(j,new Map([["b64",!0]]),null==r?void 0:r.crit,this._protectedHeader,n),a=!0,!o.has("b64")){e.next=11;break}if("boolean"==typeof(a=this._protectedHeader.b64)){e.next=11;break}throw new j('The "b64" (base64url-encode payload) Header Parameter must be a boolean');case 11:if("string"==typeof(c=n.alg)&&c){e.next=14;break}throw new j('JWS "alg" (Algorithm) Header Parameter missing or invalid');case 14:return G(c,t,"sign"),u=this._payload,a&&(u=f.encode(h(u))),s=this._protectedHeader?f.encode(h(JSON.stringify(this._protectedHeader))):f.encode(""),y=p(s,f.encode("."),u),e.next=21,ie(c,t,y);case 21:return d=e.sent,v={signature:h(d),payload:""},a&&(v.payload=l.decode(u)),this._unprotectedHeader&&(v.header=this._unprotectedHeader),this._protectedHeader&&(v.protected=l.decode(s)),e.abrupt("return",v);case 27:case"end":return e.stop()}}),e,this)}))),function(e,r){return t.apply(this,arguments)})}]),e}(),he=function(){function e(t){y(this,e),this._flattened=new pe(t)}var t;return v(e,[{key:"setProtectedHeader",value:function(e){return this._flattened.setProtectedHeader(e),this}},{key:"sign",value:(t=o(i().mark((function e(t,r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._flattened.sign(t,r);case 2:if(void 0!==(n=e.sent).payload){e.next=5;break}throw new TypeError("use the flattened module for creating JWS with b64: false");case 5:return e.abrupt("return","".concat(n.protected,".").concat(n.payload,".").concat(n.signature));case 6:case"end":return e.stop()}}),e,this)}))),function(e,r){return t.apply(this,arguments)})}]),e}(),ye=function(e){return Math.floor(e.getTime()/1e3)};function de(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ve(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?de(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):de(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function me(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=E(e);if(t){var o=E(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return S(this,r)}}var be=function(e){g(n,e);var t,r=me(n);function n(){return y(this,n),r.apply(this,arguments)}return v(n,[{key:"setProtectedHeader",value:function(e){return this._protectedHeader=e,this}},{key:"sign",value:(t=o(i().mark((function e(t,r){var n,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((o=new he(f.encode(JSON.stringify(this._payload)))).setProtectedHeader(this._protectedHeader),!Array.isArray(null===(n=this._protectedHeader)||void 0===n?void 0:n.crit)||!this._protectedHeader.crit.includes("b64")||!1!==this._protectedHeader.b64){e.next=4;break}throw new H("JWTs MUST NOT use unencoded payload");case 4:return e.abrupt("return",o.sign(t,r));case 5:case"end":return e.stop()}}),e,this)}))),function(e,r){return t.apply(this,arguments)})}]),n}(function(){function e(t){if(y(this,e),!K(t))throw new TypeError("JWT Claims Set MUST be an object");this._payload=t}return v(e,[{key:"setIssuer",value:function(e){return this._payload=ve(ve({},this._payload),{},{iss:e}),this}},{key:"setSubject",value:function(e){return this._payload=ve(ve({},this._payload),{},{sub:e}),this}},{key:"setAudience",value:function(e){return this._payload=ve(ve({},this._payload),{},{aud:e}),this}},{key:"setJti",value:function(e){return this._payload=ve(ve({},this._payload),{},{jti:e}),this}},{key:"setNotBefore",value:function(e){return this._payload=ve(ve({},this._payload),{},"number"==typeof e?{nbf:e}:{nbf:ye(new Date)+ne(e)}),this}},{key:"setExpirationTime",value:function(e){return this._payload=ve(ve({},this._payload),{},"number"==typeof e?{exp:e}:{exp:ye(new Date)+ne(e)}),this}},{key:"setIssuedAt",value:function(e){return this._payload=ve(ve({},this._payload),{},void 0===e?{iat:ye(new Date)}:{iat:e}),this}}]),e}());var ge=function(e){var t=e.children;return c.createElement("label",{style:{display:"block"}},t)},we=function(){var e=c.useState([]),t=e[0],r=e[1],n=c.useState(""),a=n[0],u=n[1],s=c.useState(""),f=s[0],l=s[1],p=c.useState(""),h=p[0],y=p[1],d=c.useCallback(o(i().mark((function e(){var t,n,o,c,u,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(a,f,h),a&&f&&h){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,U(h,"ES256");case 5:return t=e.sent,e.next=8,new be({}).setProtectedHeader({alg:"ES256",kid:a,typ:"JWT"}).setIssuer(f).setIssuedAt().setExpirationTime("5m").setAudience("appstoreconnect-v1").sign(t);case 8:return n=e.sent,console.log(n),e.prev=10,e.next=13,fetch("https://api.appstoreconnect.apple.com/v1/apps",{credentials:"include",headers:{Authorization:"Bearer "+n}});case 13:if(o=e.sent,console.log(o),o.ok){e.next=17;break}return e.abrupt("return");case 17:return e.next=19,o.json();case 19:c=e.sent,u=c.data,s=u.map((function(e){return{name:e.attributes.name}})),r(s),e.next=28;break;case 25:e.prev=25,e.t0=e.catch(10),console.error(e.t0);case 28:case"end":return e.stop()}}),e,null,[[10,25]])}))),[]);return c.createElement("main",null,c.createElement(ge,null,"Key ID",c.createElement("input",{type:"text",onChange:function(e){return u(e.target.value)}})),c.createElement(ge,null,"Issuer ID",c.createElement("input",{type:"text",onChange:function(e){return l(e.target.value)}})),c.createElement(ge,null,"API Key",c.createElement("input",{type:"text",onChange:function(e){return y(e.target.value)}})),c.createElement("button",{onClick:d},"Fetch Apps Data"),c.createElement("table",null,c.createElement("thead",null,c.createElement("tr",null,c.createElement("th",null,"App Name"),c.createElement("th",null,"Version Code"))),c.createElement("tbody",null,t.map((function(e){return c.createElement("tr",null,c.createElement("td",null,e.name))})))))},Se=function(){return c.createElement("title",null,"Home Page")}},7061:function(e,t,r){var n=r(8698).default;function o(){"use strict";e.exports=o=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},r=Object.prototype,a=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(j){f=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,a=Object.create(o.prototype),i=new A(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(j){return{type:"throw",arg:j}}}t.wrap=l;var h={};function y(){}function d(){}function v(){}var m={};f(m,c,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(_([])));g&&g!==r&&a.call(g,c)&&(m=g);var w=v.prototype=y.prototype=Object.create(m);function S(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(o,i,c,u){var s=p(e[o],e,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==n(l)&&a.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,c,u)}),(function(e){r("throw",e,c,u)})):t.resolve(l).then((function(e){f.value=e,c(f)}),(function(e){return r("throw",e,c,u)}))}u(s.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function O(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=p(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function _(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=v,f(w,"constructor",v),f(v,"constructor",d),d.displayName=f(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,f(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},S(E.prototype),f(E.prototype,u,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},S(w),f(w,s,"Generator"),f(w,c,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),u=a.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4687:function(e,t,r){var n=r(7061)();e.exports=n;try{regeneratorRuntime=n}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-04cae31a9ac954e86e03.js.map