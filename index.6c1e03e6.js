function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},n.parcelRequired7c6=r),r.register("bRlFp",(function(e,t){var n=r("2bBga"),o=r("djt5d"),i=r("6zSb1"),s=r("d0EKm");var a=function e(t){var r=new i(t),a=o(i.prototype.request,r);return n.extend(a,i.prototype,r),n.extend(a,r),a.create=function(n){return e(s(t,n))},a}(r("hqlPG"));a.Axios=i,a.CanceledError=r("83xK9"),a.CancelToken=r("2sjhC"),a.isCancel=r("ksuZT"),a.VERSION=r("50GW0").version,a.toFormData=r("aewVa"),a.AxiosError=r("121rJ"),a.Cancel=a.CanceledError,a.all=function(e){return Promise.all(e)},a.spread=r("av9gA"),a.isAxiosError=r("gNhGc"),e.exports=a,e.exports.default=a})),r.register("2bBga",(function(e,t){var n,o=r("djt5d"),i=Object.prototype.toString,s=(n=Object.create(null),function(e){var t=i.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())});function a(e){return e=e.toLowerCase(),function(t){return s(t)===e}}function c(e){return Array.isArray(e)}function l(e){return void 0===e}var d=a("ArrayBuffer");function u(e){return null!==e&&"object"==typeof e}function h(e){if("object"!==s(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var f=a("Date"),p=a("File"),m=a("Blob"),g=a("FileList");function y(e){return"[object Function]"===i.call(e)}var v=a("URLSearchParams");function b(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),c(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var w,k=(w="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return w&&e instanceof w});e.exports={isArray:c,isArrayBuffer:d,isBuffer:function(e){return null!==e&&!l(e)&&null!==e.constructor&&!l(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||i.call(e)===t||y(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&d(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isPlainObject:h,isUndefined:l,isDate:f,isFile:p,isBlob:m,isFunction:y,isStream:function(e){return u(e)&&y(e.pipe)},isURLSearchParams:v,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:b,merge:function e(){var t={};function n(n,o){h(t[o])&&h(n)?t[o]=e(t[o],n):h(n)?t[o]=e({},n):c(n)?t[o]=n.slice():t[o]=n}for(var o=0,i=arguments.length;o<i;o++)b(arguments[o],n);return t},extend:function(e,t,n){return b(t,(function(t,i){e[i]=n&&"function"==typeof t?o(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,o){e.prototype=Object.create(t.prototype,o),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var o,i,r,s={};t=t||{};do{for(i=(o=Object.getOwnPropertyNames(e)).length;i-- >0;)s[r=o[i]]||(t[r]=e[r],s[r]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:s,kindOfTest:a,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var o=e.indexOf(t,n);return-1!==o&&o===n},toArray:function(e){if(!e)return null;var t=e.length;if(l(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:k,isFileList:g}})),r.register("djt5d",(function(e,t){e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];return e.apply(t,n)}}})),r.register("6zSb1",(function(e,t){var n=r("2bBga"),o=r("2RNjJ"),i=r("5Dm7L"),s=r("eQ5d8"),a=r("d0EKm"),c=r("1ZTQa"),l=r("6zj0X"),d=l.validators;function u(e){this.defaults=e,this.interceptors={request:new i,response:new i}}u.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&l.assertOptions(n,{silentJSONParsing:d.transitional(d.boolean),forcedJSONParsing:d.transitional(d.boolean),clarifyTimeoutError:d.transitional(d.boolean)},!1);var o=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));var r,c=[];if(this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)})),!i){var u=[s,void 0];for(Array.prototype.unshift.apply(u,o),u=u.concat(c),r=Promise.resolve(t);u.length;)r=r.then(u.shift(),u.shift());return r}for(var h=t;o.length;){var f=o.shift(),p=o.shift();try{h=f(h)}catch(e){p(e);break}}try{r=s(h)}catch(e){return Promise.reject(e)}for(;c.length;)r=r.then(c.shift(),c.shift());return r},u.prototype.getUri=function(e){e=a(this.defaults,e);var t=c(e.baseURL,e.url);return o(t,e.params,e.paramsSerializer)},n.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){function t(t){return function(n,o,i){return this.request(a(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:o}))}}u.prototype[e]=t(),u.prototype[e+"Form"]=t(!0)})),e.exports=u})),r.register("2RNjJ",(function(e,t){var n=r("2bBga");function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,i){if(!t)return e;var r;if(i)r=i(t);else if(n.isURLSearchParams(t))r=t.toString();else{var s=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),r=s.join("&")}if(r){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e}})),r.register("5Dm7L",(function(e,t){var n=r("2bBga");function o(){this.handlers=[]}o.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o})),r.register("eQ5d8",(function(e,t){var n=r("2bBga"),o=r("bhEpd"),i=r("ksuZT"),s=r("hqlPG"),a=r("83xK9");function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return c(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}})),r.register("bhEpd",(function(e,t){var n=r("2bBga"),o=r("hqlPG");e.exports=function(e,t,i){var r=this||o;return n.forEach(i,(function(n){e=n.call(r,e,t)})),e}})),r.register("hqlPG",(function(e,t){var n=r("4TNnu"),o=r("2bBga"),i=r("i16eu"),s=r("121rJ"),a=r("2wfLM"),c=r("aewVa"),l={"Content-Type":"application/x-www-form-urlencoded"};function d(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,h={transitional:a,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==n&&"[object process]"===Object.prototype.toString.call(n))&&(u=r("9VVcb")),u),transformRequest:[function(e,t){if(i(t,"Accept"),i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e))return e;if(o.isArrayBufferView(e))return e.buffer;if(o.isURLSearchParams(e))return d(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,r=o.isObject(e),s=t&&t["Content-Type"];if((n=o.isFileList(e))||r&&"multipart/form-data"===s){var a=this.env&&this.env.FormData;return c(n?{"files[]":e}:e,a&&new a)}return r||"application/json"===s?(d(t,"application/json"),function(e,t,n){if(o.isString(e))try{return(t||JSON.parse)(e),o.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||h.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,r=!n&&"json"===this.responseType;if(r||i&&o.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(r){if("SyntaxError"===e.name)throw s.from(e,s.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:r("1gvAv")},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};o.forEach(["delete","get","head"],(function(e){h.headers[e]={}})),o.forEach(["post","put","patch"],(function(e){h.headers[e]=o.merge(l)})),e.exports=h})),r.register("4TNnu",(function(e,t){var n,o,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{o="function"==typeof clearTimeout?clearTimeout:s}catch(e){o=s}}();var c,l=[],d=!1,u=-1;function h(){d&&c&&(d=!1,c.length?l=c.concat(l):u=-1,l.length&&f())}function f(){if(!d){var e=a(h);d=!0;for(var t=l.length;t;){for(c=l,l=[];++u<t;)c&&c[u].run();u=-1,t=l.length}c=null,d=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===s||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||d||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),r.register("i16eu",(function(e,t){var n=r("2bBga");e.exports=function(e,t){n.forEach(e,(function(n,o){o!==t&&o.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[o])}))}})),r.register("121rJ",(function(e,t){var n=r("2bBga");function o(e,t,n,o,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),o&&(this.request=o),i&&(this.response=i)}n.inherits(o,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=o.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){s[e]={value:e}})),Object.defineProperties(o,s),Object.defineProperty(i,"isAxiosError",{value:!0}),o.from=function(e,t,r,s,a,c){var l=Object.create(i);return n.toFlatObject(e,l,(function(e){return e!==Error.prototype})),o.call(l,e.message,t,r,s,a),l.name=e.name,c&&Object.assign(l,c),l},e.exports=o})),r.register("2wfLM",(function(e,t){e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),r.register("aewVa",(function(e,t){var n=r("ihoyg").Buffer,o=r("2bBga");e.exports=function(e,t){t=t||new FormData;var i=[];function r(e){return null===e?"":o.isDate(e)?e.toISOString():o.isArrayBuffer(e)||o.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):n.from(e):e}return function e(n,s){if(o.isPlainObject(n)||o.isArray(n)){if(-1!==i.indexOf(n))throw Error("Circular reference detected in "+s);i.push(n),o.forEach(n,(function(n,i){if(!o.isUndefined(n)){var a,c=s?s+"."+i:i;if(n&&!s&&"object"==typeof n)if(o.endsWith(i,"{}"))n=JSON.stringify(n);else if(o.endsWith(i,"[]")&&(a=o.toArray(n)))return void a.forEach((function(e){!o.isUndefined(e)&&t.append(c,r(e))}));e(n,c)}})),i.pop()}else t.append(s,r(n))}(e),t}})),r.register("ihoyg",(function(t,n){var o,i;e(t.exports,"Buffer",(function(){return o}),(function(e){return o=e})),e(t.exports,"INSPECT_MAX_BYTES",(function(){return i}),(function(e){return i=e}));var s=r("hqZtu"),a=r("5WQj6");const c="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;o=u,i=50;const l=2147483647;function d(e){if(e>l)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,u.prototype),t}function u(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return p(e)}return h(e,t,n)}function h(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!u.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|v(e,t);let o=d(n);const i=o.write(e,t);i!==n&&(o=o.slice(0,i));return o}(e,t);if(ArrayBuffer.isView(e))return function(e){if(K(e,Uint8Array)){const t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return m(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(K(e,ArrayBuffer)||e&&K(e.buffer,ArrayBuffer))return g(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(K(e,SharedArrayBuffer)||e&&K(e.buffer,SharedArrayBuffer)))return g(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const o=e.valueOf&&e.valueOf();if(null!=o&&o!==e)return u.from(o,t,n);const i=function(e){if(u.isBuffer(e)){const t=0|y(e.length),n=d(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Z(e.length)?d(0):m(e);if("Buffer"===e.type&&Array.isArray(e.data))return m(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return u.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function f(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function p(e){return f(e),d(e<0?0:0|y(e))}function m(e){const t=e.length<0?0:0|y(e.length),n=d(t);for(let o=0;o<t;o+=1)n[o]=255&e[o];return n}function g(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let o;return o=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(o,u.prototype),o}function y(e){if(e>=l)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+l.toString(16)+" bytes");return 0|e}function v(e,t){if(u.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||K(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,o=arguments.length>2&&!0===arguments[2];if(!o&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return G(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return J(e).length;default:if(i)return o?-1:G(e).length;t=(""+t).toLowerCase(),i=!0}}function b(e,t,n){let o=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return R(this,t,n);case"utf8":case"utf-8":return T(this,t,n);case"ascii":return L(this,t,n);case"latin1":case"binary":return A(this,t,n);case"base64":return x(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,t,n);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}function w(e,t,n){const o=e[t];e[t]=e[n],e[n]=o}function k(e,t,n,o,i){if(0===e.length)return-1;if("string"==typeof n?(o=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Z(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=u.from(t,o)),u.isBuffer(t))return 0===t.length?-1:I(e,t,n,o,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):I(e,[t],n,o,i);throw new TypeError("val must be string, number or Buffer")}function I(e,t,n,o,i){let r,s=1,a=e.length,c=t.length;if(void 0!==o&&("ucs2"===(o=String(o).toLowerCase())||"ucs-2"===o||"utf16le"===o||"utf-16le"===o)){if(e.length<2||t.length<2)return-1;s=2,a/=2,c/=2,n/=2}function l(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(i){let o=-1;for(r=n;r<a;r++)if(l(e,r)===l(t,-1===o?0:r-o)){if(-1===o&&(o=r),r-o+1===c)return o*s}else-1!==o&&(r-=r-o),o=-1}else for(n+c>a&&(n=a-c),r=n;r>=0;r--){let n=!0;for(let o=0;o<c;o++)if(l(e,r+o)!==l(t,o)){n=!1;break}if(n)return r}return-1}function E(e,t,n,o){n=Number(n)||0;const i=e.length-n;o?(o=Number(o))>i&&(o=i):o=i;const r=t.length;let s;for(o>r/2&&(o=r/2),s=0;s<o;++s){const o=parseInt(t.substr(2*s,2),16);if(Z(o))return s;e[n+s]=o}return s}function C(e,t,n,o){return Q(G(t,e.length-n),e,n,o)}function _(e,t,n,o){return Q(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,o)}function S(e,t,n,o){return Q(J(t),e,n,o)}function N(e,t,n,o){return Q(function(e,t){let n,o,i;const r=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=e.charCodeAt(s),o=n>>8,i=n%256,r.push(i),r.push(o);return r}(t,e.length-n),e,n,o)}function x(e,t,n){return 0===t&&n===e.length?s.fromByteArray(e):s.fromByteArray(e.slice(t,n))}function T(e,t,n){n=Math.min(e.length,n);const o=[];let i=t;for(;i<n;){const t=e[i];let r=null,s=t>239?4:t>223?3:t>191?2:1;if(i+s<=n){let n,o,a,c;switch(s){case 1:t<128&&(r=t);break;case 2:n=e[i+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(r=c));break;case 3:n=e[i+1],o=e[i+2],128==(192&n)&&128==(192&o)&&(c=(15&t)<<12|(63&n)<<6|63&o,c>2047&&(c<55296||c>57343)&&(r=c));break;case 4:n=e[i+1],o=e[i+2],a=e[i+3],128==(192&n)&&128==(192&o)&&128==(192&a)&&(c=(15&t)<<18|(63&n)<<12|(63&o)<<6|63&a,c>65535&&c<1114112&&(r=c))}}null===r?(r=65533,s=1):r>65535&&(r-=65536,o.push(r>>>10&1023|55296),r=56320|1023&r),o.push(r),i+=s}return function(e){const t=e.length;if(t<=O)return String.fromCharCode.apply(String,e);let n="",o=0;for(;o<t;)n+=String.fromCharCode.apply(String,e.slice(o,o+=O));return n}(o)}u.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),u.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}}),u.poolSize=8192,u.from=function(e,t,n){return h(e,t,n)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array),u.alloc=function(e,t,n){return function(e,t,n){return f(e),e<=0?d(e):void 0!==t?"string"==typeof n?d(e).fill(t,n):d(e).fill(t):d(e)}(e,t,n)},u.allocUnsafe=function(e){return p(e)},u.allocUnsafeSlow=function(e){return p(e)},u.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==u.prototype},u.compare=function(e,t){if(K(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),K(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(e)||!u.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,o=t.length;for(let i=0,r=Math.min(n,o);i<r;++i)if(e[i]!==t[i]){n=e[i],o=t[i];break}return n<o?-1:o<n?1:0},u.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return u.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const o=u.allocUnsafe(t);let i=0;for(n=0;n<e.length;++n){let t=e[n];if(K(t,Uint8Array))i+t.length>o.length?(u.isBuffer(t)||(t=u.from(t)),t.copy(o,i)):Uint8Array.prototype.set.call(o,t,i);else{if(!u.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(o,i)}i+=t.length}return o},u.byteLength=v,u.prototype._isBuffer=!0,u.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)w(this,t,t+1);return this},u.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)w(this,t,t+3),w(this,t+1,t+2);return this},u.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)w(this,t,t+7),w(this,t+1,t+6),w(this,t+2,t+5),w(this,t+3,t+4);return this},u.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?T(this,0,e):b.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(e){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===u.compare(this,e)},u.prototype.inspect=function(){let e="";const t=i;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},c&&(u.prototype[c]=u.prototype.inspect),u.prototype.compare=function(e,t,n,o,i){if(K(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),!u.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===o&&(o=0),void 0===i&&(i=this.length),t<0||n>e.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&t>=n)return 0;if(o>=i)return-1;if(t>=n)return 1;if(this===e)return 0;let r=(i>>>=0)-(o>>>=0),s=(n>>>=0)-(t>>>=0);const a=Math.min(r,s),c=this.slice(o,i),l=e.slice(t,n);for(let e=0;e<a;++e)if(c[e]!==l[e]){r=c[e],s=l[e];break}return r<s?-1:s<r?1:0},u.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},u.prototype.indexOf=function(e,t,n){return k(this,e,t,n,!0)},u.prototype.lastIndexOf=function(e,t,n){return k(this,e,t,n,!1)},u.prototype.write=function(e,t,n,o){if(void 0===t)o="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)o=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===o&&(o="utf8")):(o=n,n=void 0)}const i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");let r=!1;for(;;)switch(o){case"hex":return E(this,e,t,n);case"utf8":case"utf-8":return C(this,e,t,n);case"ascii":case"latin1":case"binary":return _(this,e,t,n);case"base64":return S(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return N(this,e,t,n);default:if(r)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),r=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const O=4096;function L(e,t,n){let o="";n=Math.min(e.length,n);for(let i=t;i<n;++i)o+=String.fromCharCode(127&e[i]);return o}function A(e,t,n){let o="";n=Math.min(e.length,n);for(let i=t;i<n;++i)o+=String.fromCharCode(e[i]);return o}function R(e,t,n){const o=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>o)&&(n=o);let i="";for(let o=t;o<n;++o)i+=ee[e[o]];return i}function P(e,t,n){const o=e.slice(t,n);let i="";for(let e=0;e<o.length-1;e+=2)i+=String.fromCharCode(o[e]+256*o[e+1]);return i}function D(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function M(e,t,n,o,i,r){if(!u.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<r)throw new RangeError('"value" argument is out of bounds');if(n+o>e.length)throw new RangeError("Index out of range")}function B(e,t,n,o,i){z(t,o,i,e,n,7);let r=Number(t&BigInt(4294967295));e[n++]=r,r>>=8,e[n++]=r,r>>=8,e[n++]=r,r>>=8,e[n++]=r;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,n}function U(e,t,n,o,i){z(t,o,i,e,n,7);let r=Number(t&BigInt(4294967295));e[n+7]=r,r>>=8,e[n+6]=r,r>>=8,e[n+5]=r,r>>=8,e[n+4]=r;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=s,s>>=8,e[n+2]=s,s>>=8,e[n+1]=s,s>>=8,e[n]=s,n+8}function j(e,t,n,o,i,r){if(n+o>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function F(e,t,n,o,i){return t=+t,n>>>=0,i||j(e,0,n,4),a.write(e,t,n,o,23,4),n+4}function H(e,t,n,o,i){return t=+t,n>>>=0,i||j(e,0,n,8),a.write(e,t,n,o,52,8),n+8}u.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const o=this.subarray(e,t);return Object.setPrototypeOf(o,u.prototype),o},u.prototype.readUintLE=u.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let o=this[e],i=1,r=0;for(;++r<t&&(i*=256);)o+=this[e+r]*i;return o},u.prototype.readUintBE=u.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let o=this[e+--t],i=1;for(;t>0&&(i*=256);)o+=this[e+--t]*i;return o},u.prototype.readUint8=u.prototype.readUInt8=function(e,t){return e>>>=0,t||D(e,1,this.length),this[e]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(e,t){return e>>>=0,t||D(e,2,this.length),this[e]|this[e+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(e,t){return e>>>=0,t||D(e,2,this.length),this[e]<<8|this[e+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(e,t){return e>>>=0,t||D(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(e,t){return e>>>=0,t||D(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},u.prototype.readBigUInt64LE=te((function(e){Y(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||V(e,this.length-8);const o=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(o)+(BigInt(i)<<BigInt(32))})),u.prototype.readBigUInt64BE=te((function(e){Y(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||V(e,this.length-8);const o=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(o)<<BigInt(32))+BigInt(i)})),u.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let o=this[e],i=1,r=0;for(;++r<t&&(i*=256);)o+=this[e+r]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*t)),o},u.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let o=t,i=1,r=this[e+--o];for(;o>0&&(i*=256);)r+=this[e+--o]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},u.prototype.readInt8=function(e,t){return e>>>=0,t||D(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},u.prototype.readInt16LE=function(e,t){e>>>=0,t||D(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt16BE=function(e,t){e>>>=0,t||D(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt32LE=function(e,t){return e>>>=0,t||D(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},u.prototype.readInt32BE=function(e,t){return e>>>=0,t||D(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},u.prototype.readBigInt64LE=te((function(e){Y(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||V(e,this.length-8);const o=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(o)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),u.prototype.readBigInt64BE=te((function(e){Y(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||V(e,this.length-8);const o=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(o)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),u.prototype.readFloatLE=function(e,t){return e>>>=0,t||D(e,4,this.length),a.read(this,e,!0,23,4)},u.prototype.readFloatBE=function(e,t){return e>>>=0,t||D(e,4,this.length),a.read(this,e,!1,23,4)},u.prototype.readDoubleLE=function(e,t){return e>>>=0,t||D(e,8,this.length),a.read(this,e,!0,52,8)},u.prototype.readDoubleBE=function(e,t){return e>>>=0,t||D(e,8,this.length),a.read(this,e,!1,52,8)},u.prototype.writeUintLE=u.prototype.writeUIntLE=function(e,t,n,o){if(e=+e,t>>>=0,n>>>=0,!o){M(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=1,r=0;for(this[t]=255&e;++r<n&&(i*=256);)this[t+r]=e/i&255;return t+n},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(e,t,n,o){if(e=+e,t>>>=0,n>>>=0,!o){M(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=n-1,r=1;for(this[t+i]=255&e;--i>=0&&(r*=256);)this[t+i]=e/r&255;return t+n},u.prototype.writeUint8=u.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,1,255,0),this[t]=255&e,t+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},u.prototype.writeBigUInt64LE=te((function(e,t=0){return B(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),u.prototype.writeBigUInt64BE=te((function(e,t=0){return U(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),u.prototype.writeIntLE=function(e,t,n,o){if(e=+e,t>>>=0,!o){const o=Math.pow(2,8*n-1);M(this,e,t,n,o-1,-o)}let i=0,r=1,s=0;for(this[t]=255&e;++i<n&&(r*=256);)e<0&&0===s&&0!==this[t+i-1]&&(s=1),this[t+i]=(e/r>>0)-s&255;return t+n},u.prototype.writeIntBE=function(e,t,n,o){if(e=+e,t>>>=0,!o){const o=Math.pow(2,8*n-1);M(this,e,t,n,o-1,-o)}let i=n-1,r=1,s=0;for(this[t+i]=255&e;--i>=0&&(r*=256);)e<0&&0===s&&0!==this[t+i+1]&&(s=1),this[t+i]=(e/r>>0)-s&255;return t+n},u.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},u.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},u.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},u.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},u.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},u.prototype.writeBigInt64LE=te((function(e,t=0){return B(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),u.prototype.writeBigInt64BE=te((function(e,t=0){return U(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),u.prototype.writeFloatLE=function(e,t,n){return F(this,e,t,!0,n)},u.prototype.writeFloatBE=function(e,t,n){return F(this,e,t,!1,n)},u.prototype.writeDoubleLE=function(e,t,n){return H(this,e,t,!0,n)},u.prototype.writeDoubleBE=function(e,t,n){return H(this,e,t,!1,n)},u.prototype.copy=function(e,t,n,o){if(!u.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),o||0===o||(o=this.length),t>=e.length&&(t=e.length),t||(t=0),o>0&&o<n&&(o=n),o===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-t<o-n&&(o=e.length-t+n);const i=o-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,o):Uint8Array.prototype.set.call(e,this.subarray(n,o),t),i},u.prototype.fill=function(e,t,n,o){if("string"==typeof e){if("string"==typeof t?(o=t,t=0,n=this.length):"string"==typeof n&&(o=n,n=this.length),void 0!==o&&"string"!=typeof o)throw new TypeError("encoding must be a string");if("string"==typeof o&&!u.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(1===e.length){const t=e.charCodeAt(0);("utf8"===o&&t<128||"latin1"===o)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let i;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{const r=u.isBuffer(e)?e:u.from(e,o),s=r.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=r[i%s]}return this};const W={};function q(e,t,n){W[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function $(e){let t="",n=e.length;const o="-"===e[0]?1:0;for(;n>=o+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function z(e,t,n,o,i,r){if(e>n||e<t){const o="bigint"==typeof t?"n":"";let i;throw i=r>3?0===t||t===BigInt(0)?`>= 0${o} and < 2${o} ** ${8*(r+1)}${o}`:`>= -(2${o} ** ${8*(r+1)-1}${o}) and < 2 ** ${8*(r+1)-1}${o}`:`>= ${t}${o} and <= ${n}${o}`,new W.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,n){Y(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||V(t,e.length-(n+1))}(o,i,r)}function Y(e,t){if("number"!=typeof e)throw new W.ERR_INVALID_ARG_TYPE(t,"number",e)}function V(e,t,n){if(Math.floor(e)!==e)throw Y(e,n),new W.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new W.ERR_BUFFER_OUT_OF_BOUNDS;throw new W.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}q("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),q("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),q("ERR_OUT_OF_RANGE",(function(e,t,n){let o=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=$(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=$(i)),i+="n"),o+=` It must be ${t}. Received ${i}`,o}),RangeError);const X=/[^+/0-9A-Za-z-_]/g;function G(e,t){let n;t=t||1/0;const o=e.length;let i=null;const r=[];for(let s=0;s<o;++s){if(n=e.charCodeAt(s),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&r.push(239,191,189);continue}if(s+1===o){(t-=3)>-1&&r.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&r.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&r.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;r.push(n)}else if(n<2048){if((t-=2)<0)break;r.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;r.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;r.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return r}function J(e){return s.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(X,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Q(e,t,n,o){let i;for(i=0;i<o&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function K(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Z(e){return e!=e}const ee=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const o=16*n;for(let i=0;i<16;++i)t[o+i]=e[n]+e[i]}return t}();function te(e){return"undefined"==typeof BigInt?ne:e}function ne(){throw new Error("BigInt not supported")}})),r.register("hqZtu",(function(t,n){var o,i;e(t.exports,"toByteArray",(function(){return o}),(function(e){return o=e})),e(t.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),o=function(e){var t,n,o=u(e),i=o[0],r=o[1],c=new a(function(e,t,n){return 3*(t+n)/4-n}(0,i,r)),l=0,d=r>0?i-4:i;for(n=0;n<d;n+=4)t=s[e.charCodeAt(n)]<<18|s[e.charCodeAt(n+1)]<<12|s[e.charCodeAt(n+2)]<<6|s[e.charCodeAt(n+3)],c[l++]=t>>16&255,c[l++]=t>>8&255,c[l++]=255&t;2===r&&(t=s[e.charCodeAt(n)]<<2|s[e.charCodeAt(n+1)]>>4,c[l++]=255&t);1===r&&(t=s[e.charCodeAt(n)]<<10|s[e.charCodeAt(n+1)]<<4|s[e.charCodeAt(n+2)]>>2,c[l++]=t>>8&255,c[l++]=255&t);return c},i=function(e){for(var t,n=e.length,o=n%3,i=[],s=16383,a=0,c=n-o;a<c;a+=s)i.push(h(e,a,a+s>c?c:a+s));1===o?(t=e[n-1],i.push(r[t>>2]+r[t<<4&63]+"==")):2===o&&(t=(e[n-2]<<8)+e[n-1],i.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"="));return i.join("")};for(var r=[],s=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,d=c.length;l<d;++l)r[l]=c[l],s[c.charCodeAt(l)]=l;function u(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function h(e,t,n){for(var o,i,s=[],a=t;a<n;a+=3)o=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),s.push(r[(i=o)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return s.join("")}s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63})),r.register("5WQj6",(function(t,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var o,i;e(t.exports,"read",(function(){return o}),(function(e){return o=e})),e(t.exports,"write",(function(){return i}),(function(e){return i=e})),o=function(e,t,n,o,i){var r,s,a=8*i-o-1,c=(1<<a)-1,l=c>>1,d=-7,u=n?i-1:0,h=n?-1:1,f=e[t+u];for(u+=h,r=f&(1<<-d)-1,f>>=-d,d+=a;d>0;r=256*r+e[t+u],u+=h,d-=8);for(s=r&(1<<-d)-1,r>>=-d,d+=o;d>0;s=256*s+e[t+u],u+=h,d-=8);if(0===r)r=1-l;else{if(r===c)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,o),r-=l}return(f?-1:1)*s*Math.pow(2,r-o)},i=function(e,t,n,o,i,r){var s,a,c,l=8*r-i-1,d=(1<<l)-1,u=d>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=o?0:r-1,p=o?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=d):(s=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-s))<1&&(s--,c*=2),(t+=s+u>=1?h/c:h*Math.pow(2,1-u))*c>=2&&(s++,c/=2),s+u>=d?(a=0,s=d):s+u>=1?(a=(t*c-1)*Math.pow(2,i),s+=u):(a=t*Math.pow(2,u-1)*Math.pow(2,i),s=0));i>=8;e[n+f]=255&a,f+=p,a/=256,i-=8);for(s=s<<i|a,l+=i;l>0;e[n+f]=255&s,f+=p,s/=256,l-=8);e[n+f-p]|=128*m}})),r.register("9VVcb",(function(e,t){var n=r("2bBga"),o=r("1TQad"),i=r("kTwUV"),s=r("2RNjJ"),a=r("1ZTQa"),c=r("9cPEm"),l=r("g3yOT"),d=r("2wfLM"),u=r("121rJ"),h=r("83xK9"),f=r("8wMQb");e.exports=function(e){return new Promise((function(t,r){var p,m=e.data,g=e.headers,y=e.responseType;function v(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}n.isFormData(m)&&n.isStandardBrowserEnv()&&delete g["Content-Type"];var b=new XMLHttpRequest;if(e.auth){var w=e.auth.username||"",k=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";g.Authorization="Basic "+btoa(w+":"+k)}var I=a(e.baseURL,e.url);function E(){if(b){var n="getAllResponseHeaders"in b?c(b.getAllResponseHeaders()):null,i={data:y&&"text"!==y&&"json"!==y?b.response:b.responseText,status:b.status,statusText:b.statusText,headers:n,config:e,request:b};o((function(e){t(e),v()}),(function(e){r(e),v()}),i),b=null}}if(b.open(e.method.toUpperCase(),s(I,e.params,e.paramsSerializer),!0),b.timeout=e.timeout,"onloadend"in b?b.onloadend=E:b.onreadystatechange=function(){b&&4===b.readyState&&(0!==b.status||b.responseURL&&0===b.responseURL.indexOf("file:"))&&setTimeout(E)},b.onabort=function(){b&&(r(new u("Request aborted",u.ECONNABORTED,e,b)),b=null)},b.onerror=function(){r(new u("Network Error",u.ERR_NETWORK,e,b,b)),b=null},b.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||d;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new u(t,n.clarifyTimeoutError?u.ETIMEDOUT:u.ECONNABORTED,e,b)),b=null},n.isStandardBrowserEnv()){var C=(e.withCredentials||l(I))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;C&&(g[e.xsrfHeaderName]=C)}"setRequestHeader"in b&&n.forEach(g,(function(e,t){void 0===m&&"content-type"===t.toLowerCase()?delete g[t]:b.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(b.withCredentials=!!e.withCredentials),y&&"json"!==y&&(b.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&b.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&b.upload&&b.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){b&&(r(!e||e&&e.type?new h:e),b.abort(),b=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),m||(m=null);var _=f(I);_&&-1===["http","https","file"].indexOf(_)?r(new u("Unsupported protocol "+_+":",u.ERR_BAD_REQUEST,e)):b.send(m)}))}})),r.register("1TQad",(function(e,t){var n=r("121rJ");e.exports=function(e,t,o){var i=o.config.validateStatus;o.status&&i&&!i(o.status)?t(new n("Request failed with status code "+o.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o)):e(o)}})),r.register("kTwUV",(function(e,t){var n=r("2bBga");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,o,i,r,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(o)&&a.push("expires="+new Date(o).toGMTString()),n.isString(i)&&a.push("path="+i),n.isString(r)&&a.push("domain="+r),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),r.register("1ZTQa",(function(e,t){var n=r("iUwU6"),o=r("91vFE");e.exports=function(e,t){return e&&!n(t)?o(e,t):t}})),r.register("iUwU6",(function(e,t){e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}})),r.register("91vFE",(function(e,t){e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}})),r.register("9cPEm",(function(e,t){var n=r("2bBga"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,i,r,s={};return e?(n.forEach(e.split("\n"),(function(e){if(r=e.indexOf(":"),t=n.trim(e.substr(0,r)).toLowerCase(),i=n.trim(e.substr(r+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([i]):s[t]?s[t]+", "+i:i}})),s):s}})),r.register("g3yOT",(function(e,t){var n=r("2bBga");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");function i(e){var n=e;return t&&(o.setAttribute("href",n),n=o.href),o.setAttribute("href",n),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}return e=i(window.location.href),function(t){var o=n.isString(t)?i(t):t;return o.protocol===e.protocol&&o.host===e.host}}():function(){return!0}})),r.register("83xK9",(function(e,t){var n=r("121rJ");function o(e){n.call(this,null==e?"canceled":e,n.ERR_CANCELED),this.name="CanceledError"}r("2bBga").inherits(o,n,{__CANCEL__:!0}),e.exports=o})),r.register("8wMQb",(function(e,t){e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}})),r.register("1gvAv",(function(e,t){e.exports=null})),r.register("ksuZT",(function(e,t){e.exports=function(e){return!(!e||!e.__CANCEL__)}})),r.register("d0EKm",(function(e,t){var n=r("2bBga");e.exports=function(e,t){t=t||{};var o={};function i(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function r(o){return n.isUndefined(t[o])?n.isUndefined(e[o])?void 0:i(void 0,e[o]):i(e[o],t[o])}function s(e){if(!n.isUndefined(t[e]))return i(void 0,t[e])}function a(o){return n.isUndefined(t[o])?n.isUndefined(e[o])?void 0:i(void 0,e[o]):i(void 0,t[o])}function c(n){return n in t?i(e[n],t[n]):n in e?i(void 0,e[n]):void 0}var l={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=l[e]||r,i=t(e);n.isUndefined(i)&&t!==c||(o[e]=i)})),o}})),r.register("6zj0X",(function(e,t){var n=r("50GW0").version,o=r("121rJ"),i={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){i[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var s={};i.transitional=function(e,t,i){function r(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(i?". "+i:"")}return function(n,i,a){if(!1===e)throw new o(r(i," has been removed"+(t?" in "+t:"")),o.ERR_DEPRECATED);return t&&!s[i]&&(s[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,a)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new o("options must be an object",o.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(e),r=i.length;r-- >0;){var s=i[r],a=t[s];if(a){var c=e[s],l=void 0===c||a(c,s,e);if(!0!==l)throw new o("option "+s+" must be "+l,o.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new o("Unknown option "+s,o.ERR_BAD_OPTION)}},validators:i}})),r.register("50GW0",(function(e,t){e.exports={version:"0.27.2"}})),r.register("2sjhC",(function(e,t){var n=r("83xK9");function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var o=this;this.promise.then((function(e){if(o._listeners){var t,n=o._listeners.length;for(t=0;t<n;t++)o._listeners[t](e);o._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){o.subscribe(e),t=e})).then(e);return n.cancel=function(){o.unsubscribe(t)},n},e((function(e){o.reason||(o.reason=new n(e),t(o.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o})),r.register("av9gA",(function(e,t){e.exports=function(e){return function(t){return e.apply(null,t)}}})),r.register("gNhGc",(function(e,t){var n=r("2bBga");e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}})),r.register("8q4ZX",(function(e,t){var n=r("aCbr0"),o=r("krGWQ"),i=r("k0Gxw"),s=r("l09yf");s=r("l09yf");if(r("fZKcF"),r("92mEW"),"#en"===location.hash){n.studentsDataEn.map((({photo_url:e,name:t,githab:n,possition:o})=>`\n  <li class='team'>\n  <div class='card__tumb team__tumb'>\n    <img data-lang="studName" class='card__image team__image' src='${e}' alt='${t}' />\n  </div>\n  <a href='${n}' class='ref'>\n  <div class='ref__cover'>\n  <span class='ref__icon'></span>\n  <h3 data-lang="studName" class='ref__title'>${t}</h3>\n  \n   </div>\n  </a>\n<p data-lang="possition" class='ref__pos'>${o}</p>\n</li>\n`)).join("")}if("#en"===location.hash){return n.studentsDataUk.map((({photo_url:e,name:t,githab:n,possition:o})=>`\n  <li class='team'>\n  <div class='card__tumb team__tumb'>\n    <img data-lang="studName" class='card__image team__image' src='${e}' alt='${t}' />\n  </div>\n  <a href='${n}' class='ref'>\n  <div class='ref__cover'>\n  <span class='ref__icon'></span>\n  <h3 data-lang="studName" class='ref__title'>${t}</h3>\n  \n   </div>\n  </a>\n<p data-lang="possition" class='ref__pos'>${o}</p>\n</li>\n`)).join("")}document.querySelector(".footer-link");const a=document.querySelector(".team-items"),c=()=>{o.refs.backdropStEl.classList.add("is-hidden"),window.removeEventListener("keydown",l)};function l(e){"Escape"===e.code&&c()}o.refs.linkToDev.addEventListener("click",(()=>{a.innerHTML="",(0,i.modalTranslate)(),document.querySelectorAll("[data-lang]").forEach((e=>{for(const t in s.studName)t===e.dataset.lang&&(e.textContent="#uk"===location.hash?s.studName[t].uk:s.studName[t].en)})),document.querySelectorAll("[data-lang]").forEach((e=>{for(const t in s.possition)t===e.dataset.lang&&(e.textContent="#uk"===location.hash?s.possition[t].uk:s.possition[t].en)})),o.refs.listStudents.insertAdjacentHTML("afterbegin",studentItemsUk),window.addEventListener("keydown",l),o.refs.backdropStEl.classList.remove("is-hidden"),showConfetti()})),o.refs.closeModalBtn.addEventListener("click",c),o.refs.closeModalBtnX.addEventListener("click",(()=>{o.refs.backdropStEl.classList.add("is-hidden"),window.removeEventListener("keydown",l)})),o.refs.backdropStEl.addEventListener("click",(function(e){e.target===e.currentTarget&&c()}))})),r.register("aCbr0",(function(t,n){e(t.exports,"studentsDataEn",(function(){return o})),e(t.exports,"studentsDataUk",(function(){return i}));const o=[{name:"Yura Voloshyn",possition:"Team Leader",photo_url:"https://github.com/Yura-Voloshyn/Filmoteka-group-project/blob/dev/src/images/team-photo/Yura.jpg?raw=true",githab:"https://github.com/Yura-Voloshyn"},{name:"Sergiy Smaga",possition:"Scrum Master",photo_url:"https://raw.githubusercontent.com/Yura-Voloshyn/Filmoteka-group-project/1a42259e5af394e60dded1d6df3502a528cf336f/src/images/team-photo/Sergiy.jpg",githab:"https://github.com/sergiy-smaga"},{name:"Olena Lotos",possition:"Developer",photo_url:"https://raw.githubusercontent.com/Yura-Voloshyn/Filmoteka-group-project/1a42259e5af394e60dded1d6df3502a528cf336f/src/images/team-photo/Olena.jpg",githab:"https://github.com/OlenaLotos"},{name:"Iryna Shashko",possition:"Developer",photo_url:"https://raw.githubusercontent.com/Yura-Voloshyn/Filmoteka-group-project/1a42259e5af394e60dded1d6df3502a528cf336f/src/images/team-photo/Ira.jpg",githab:"https://github.com/IrynaShashko"},{name:"Yulia Pakhachuk",possition:"Developer",photo_url:"https://raw.githubusercontent.com/Yura-Voloshyn/Filmoteka-group-project/1a42259e5af394e60dded1d6df3502a528cf336f/src/images/team-photo/Yulia2.jpeg",githab:"https://github.com/yuliapakhachuk"},{name:"Hanna Shumakova",possition:"Developer",photo_url:"https://github.com/Yura-Voloshyn/Filmoteka-group-project/blob/dev/src/images/team-photo/Hanna.jpg?raw=true",githab:"https://github.com/HannaMyrhorod"},{name:"Olha Truba",possition:"Developer",photo_url:"https://github.com/Yura-Voloshyn/Filmoteka-group-project/blob/dev/src/images/team-photo/Olya.jpg?raw=true",githab:"https://github.com/Lolichka-Olha"},{name:"Andrew Timoshkin",possition:"Developer",photo_url:"https://raw.githubusercontent.com/Yura-Voloshyn/Filmoteka-group-project/1a42259e5af394e60dded1d6df3502a528cf336f/src/images/team-photo/Andrew.jpg",githab:"https://github.com/andrewtimoshkin"}],i=[{name:"Юра",possition:"Team Leader",photo_url:"https://github.com/Yura-Voloshyn/Filmoteka-group-project/blob/dev/src/images/team-photo/Yura.jpg?raw=true",githab:"https://github.com/Yura-Voloshyn"},{name:"Sergiy Smaga",possition:"Scrum Master",photo_url:"https://raw.githubusercontent.com/Yura-Voloshyn/Filmoteka-group-project/1a42259e5af394e60dded1d6df3502a528cf336f/src/images/team-photo/Sergiy.jpg",githab:"https://github.com/sergiy-smaga"},{name:"Olena Lotos",possition:"Developer",photo_url:"https://raw.githubusercontent.com/Yura-Voloshyn/Filmoteka-group-project/1a42259e5af394e60dded1d6df3502a528cf336f/src/images/team-photo/Olena.jpg",githab:"https://github.com/OlenaLotos"},{name:"Iryna Shashko",possition:"Developer",photo_url:"https://raw.githubusercontent.com/Yura-Voloshyn/Filmoteka-group-project/1a42259e5af394e60dded1d6df3502a528cf336f/src/images/team-photo/Ira.jpg",githab:"https://github.com/IrynaShashko"},{name:"Yulia Pakhachuk",possition:"Developer",photo_url:"https://raw.githubusercontent.com/Yura-Voloshyn/Filmoteka-group-project/1a42259e5af394e60dded1d6df3502a528cf336f/src/images/team-photo/Yulia2.jpeg",githab:"https://github.com/yuliapakhachuk"},{name:"Hanna Shumakova",possition:"Developer",photo_url:"https://github.com/Yura-Voloshyn/Filmoteka-group-project/blob/dev/src/images/team-photo/Hanna.jpg?raw=true",githab:"https://github.com/HannaMyrhorod"},{name:"Olha Truba",possition:"Developer",photo_url:"https://github.com/Yura-Voloshyn/Filmoteka-group-project/blob/dev/src/images/team-photo/Olya.jpg?raw=true",githab:"https://github.com/Lolichka-Olha"},{name:"Andrew Timoshkin",possition:"Developer",photo_url:"https://raw.githubusercontent.com/Yura-Voloshyn/Filmoteka-group-project/1a42259e5af394e60dded1d6df3502a528cf336f/src/images/team-photo/Andrew.jpg",githab:"https://github.com/andrewtimoshkin"}]})),r.register("krGWQ",(function(t,n){e(t.exports,"refs",(function(){return o}));const o={mainMarkup:document.querySelector(".main-render"),form:document.querySelector(".search-form"),btn:document.querySelector(".submit-btn"),modal:document.querySelector(".modal"),backToTopBtn:document.querySelector(".back-to-top-btn"),pageProgressBar:document.querySelector(".progress-bar"),myLibBtn:document.querySelector(".library__btn"),pagination:document.querySelector(".pagination-main"),paginationSearch:document.querySelector(".pagination-search"),homeBtn:document.querySelector(".home__btn"),logoBtn:document.querySelector(".logo-link"),watchedBtn:document.querySelector(".wached"),queueBtn:document.querySelector(".queue"),input:document.querySelector(".input-form"),placeholder:document.querySelector(".input-form").placeholder,selectLang:document.querySelector(".select"),loginBtn:document.querySelector(".login__btn"),clockFrame:document.querySelector(".clock__frame"),loginBackdrop:document.querySelector(".modal-backdrop"),loginModal:document.querySelector(".modal-container"),openLoginBtn:document.querySelector(".nav-btn.login__btn"),closeLoginBtn:document.querySelector('button[data-action="close"]'),logoutBtn:document.querySelector(".nav-btn.logout__btn"),loginForm:document.querySelector(".modal-form.login"),registerForm:document.querySelector(".modal-form.register"),modalBtn:document.querySelectorAll('.modal-form button[data-action="toggle"]'),backdropStEl:document.querySelector(".backdrop--students"),listStudents:document.querySelector(".team-items"),linkToDev:document.getElementById("openModalLink"),closeModalBtn:document.getElementById("closeModalStBtn"),closeModalBtnX:document.getElementById("closeModalStBtnX"),renderModal:document.querySelector(".team-items")}})),r.register("k0Gxw",(function(t,n){e(t.exports,"onLanguageChange",(function(){return a})),e(t.exports,"modalTranslate",(function(){return c})),r("2sH7u");var o=r("jGZdM"),i=r("krGWQ"),s=r("l09yf");s=r("l09yf");new(0,o.default);function a(e){lang=e.currentTarget.value,location.hash=lang,location.reload(),i.refs.selectLang.value=lang}switch(i.refs.selectLang.addEventListener("change",a),window.location.hash){case"#en":i.refs.input.placeholder=s.languageTranslate.placeholder.en;break;case"#uk":i.refs.input.placeholder=s.languageTranslate.placeholder.uk}function c(){document.querySelectorAll("[data-lang]").forEach((e=>{for(const t in s.languageTranslate)t===e.dataset.lang&&(e.textContent="#uk"===location.hash?s.languageTranslate[t].uk:s.languageTranslate[t].en)}))}})),r.register("2sH7u",(function(e,t){var n=r("krGWQ"),o=r("iGXQY");function i(e){e.target.classList.contains("library__btn")?(e.target.parentNode.classList.add("active__page"),n.refs.libraryBtn.disabled=!0,n.refs.homePageBtn.disabled=!1,n.refs.homePageBtn.parentNode.classList.remove("active__page"),n.refs.form.classList.add("visually-hidden"),n.refs.header.classList.add("library__header"),n.refs.librarySwitcher.classList.remove("visually-hidden"),n.refs.wachedBtn.classList.add("selected"),n.refs.mainMarkup.innerHTML="",(0,o.onWatchedBtnClick)()):e.target.classList.contains("home__btn")&&(e.target.parentNode.classList.add("active__page"),s())}function s(){n.refs.homePageBtn.disabled=!0,n.refs.libraryBtn.disabled=!1,n.refs.libraryBtn.parentNode.classList.remove("active__page"),n.refs.form.classList.remove("visually-hidden"),n.refs.header.classList.remove("library__header"),n.refs.librarySwitcher.classList.add("visually-hidden"),n.refs.clockFrame.classList.add("is-hiden"),n.refs.mainMarkup.innerHTML=""}r("k0Gxw"),r("l09yf"),r("l09yf"),r("k0Gxw"),n.refs.header=document.querySelector("header"),n.refs.librarySwitcher=document.querySelector(".library__btn--wrapper"),n.refs.headerContainer=document.querySelector("header > .container"),n.refs.libraryBtn=document.querySelector(".nav-btn.library__btn"),n.refs.homePageBtn=document.querySelector(".nav-btn.home__btn"),n.refs.wachedBtn=document.querySelector(".wached"),n.refs.logoLink=document.querySelector(".logo-link"),n.refs.libraryBtn.disabled=!1,n.refs.homePageBtn.disabled=!0,n.refs.headerContainer.append(n.refs.librarySwitcher),n.refs.libraryBtn.addEventListener("click",(e=>i(e))),n.refs.homePageBtn.addEventListener("click",(e=>i(e))),n.refs.logoLink.addEventListener("click",(()=>{n.refs.homePageBtn.parentNode.classList.add("active__page"),s()}))})),r.register("iGXQY",(function(t,n){e(t.exports,"onWatchedBtnClick",(function(){return l}));var o=r("krGWQ"),i=r("jGZdM");r("7d4XR"),r("7d4XR");var s=r("9rsbQ"),a=r("4sFHQ"),c=r("bp6Nq");c=r("bp6Nq");r("k0Gxw"),r("l09yf"),r("l09yf"),r("k0Gxw");new(0,i.default);async function l(){o.refs.queueBtn.classList.remove("selected"),o.refs.watchedBtn.classList.add("selected"),o.refs.paginationSearch.innerHTML="",o.refs.pagination.innerHTML="",(0,s.clearMarkup)(),o.refs.watchedBtn.removeEventListener("click",l),o.refs.queueBtn.addEventListener("click",c.onQueueBtnClick);const e=null===JSON.parse(localStorage.getItem("watched"))?[]:JSON.parse(localStorage.getItem("watched"));0===e.length?o.refs.clockFrame.classList.remove("is-hiden"):o.refs.clockFrame.classList.add("is-hiden"),e.forEach((e=>o.refs.mainMarkup.insertAdjacentHTML("beforeend",(0,a.idItemMarkup)(e))))}o.refs.watchedBtn.addEventListener("click",l)})),r.register("jGZdM",(function(n,o){e(n.exports,"default",(function(){return s}));var i=r("2shzp");class s{async fetchMovies(){const e=`https://api.themoviedb.org/3/trending/movie/day?api_key=${this.options.key}&page=${this.page}&language=${this.language}`;return await t(i).get(e,this.options).then((e=>(this.page+=1,console.log("resp.data",e.data),e.data))).catch((e=>console.log(e)))}async fetchArticles(e,n){return(await t(i).get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${this.options.key}&page=${e}&language=${n}`)).data}async fetchArticlesSearch(e,n){const o=this.searchQuery;localStorage.setItem("name",o);const r=`https://api.themoviedb.org/3/search/movie?api_key=${this.options.key}&query=${o}&page=${e}&include_adult=false&language=${n}`;return(await t(i).get(r,this.options)).data}async fetchArticlesSearchClick(e){const n=localStorage.getItem("name"),o=`https://api.themoviedb.org/3/search/movie?api_key=${this.options.key}&query=${n}&page=${e}&include_adult=false&language=${this.language}`;return(await t(i).get(o,this.options)).data}async getMoviesBySearchQuery(){const e=`https://api.themoviedb.org/3/search/movie?api_key=${this.options.key}&query=${this.searchQuery}&page=${this.currentPage}&include_adult=false&language=${this.language}`;return await t(i).get(e,this.options).then((e=>(this.page+=1,e.data))).catch((e=>console.log(e)))}getMovieById(e,n){return t(i).get(`https://api.themoviedb.org/3/movie/${e}?api_key=${this.options.key}&language=${n}`).then((e=>(this.page+=1,e.data))).catch((e=>console.log(e)))}getGenres(e){return t(i).get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.options.key}&language=${e}`)}async getAllGenres(){const e=await t(i).get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.options.key}&language=${this.language}`);this.allGenres.push(...e.data.genres)}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}getMovieByIdvideos(e){return t(i).get(`https://api.themoviedb.org/3/movie/${e}/videos?api_key=${this.options.key}&language=${this.language}`).then((e=>(this.page+=1,e.data))).catch((e=>console.log(e)))}constructor(){this.searchQuery="",this.page=1,this.language="",this.allGenres=[],this.options={key:"b28dcafbfbdc99f3059a27aaeb93fed6",page:this.page}}}})),r.register("2shzp",(function(e,t){e.exports=r("bRlFp")})),r.register("7d4XR",(function(t,n){e(t.exports,"loadAnimationAction",(function(){return u})),e(t.exports,"itemMarkup",(function(){return f}));var o=r("jGZdM"),i=r("2nhTy"),s=(i=r("2nhTy"),r("krGWQ")),a=r("k0Gxw");r("k0Gxw"),r("l09yf"),r("2sH7u"),r("l09yf");a=r("k0Gxw");let c=[];const l=new(0,o.default);"#en"===window.location.hash?s.refs.selectLang.value="en":"#uk"===window.location.hash&&(s.refs.selectLang.value="uk");const d=s.refs.selectLang.value,u=document.querySelector(".hollow-dots-spinner");async function h(){s.refs.selectLang.addEventListener("change",a.onLanguageChange),s.refs.paginationSearch.innerHTML="",s.refs.pagination.innerHTML="",s.refs.mainMarkup.innerHTML="",s.refs.input.value="",u.classList.remove("is-hiden");const e=await l.fetchArticles(1,d),t=e.results.map((e=>f(e))).join("");u.classList.add("is-hiden");const n=e.total_pages;(0,i.renderPaginationBtn)(n),s.refs.mainMarkup.insertAdjacentHTML("beforeend",t)}s.refs.pagination.addEventListener("click",i.onPaginateBtnClick),l.getGenres(d).then((e=>localStorage.setItem("genres",JSON.stringify(e.data.genres)))).catch((e=>console.log(e))),(0,a.modalTranslate)(),s.refs.logoBtn.addEventListener("click",h),s.refs.homeBtn.addEventListener("click",h);h();function f({id:e,poster_path:t,title:n,genre_ids:o,release_date:i}){return function(e){const t=JSON.parse(localStorage.getItem("genres"));c=[],e.forEach((e=>{c.push(t.find((t=>t.id===e)))}))}(o),`\n        <li class="movie-card" id="${e}">\n  <a class="card-link" href="#"><img class="poster-image" src="${null===t?"https://stringfixer.com/files/951711496.jpg":`https://image.tmdb.org/t/p/w342/${t}`}" alt="${n}" loading="lazy" /></a>\n  \n    <h2 class="card-title">\n      ${n}\n    </h2>\n    <div class="info">\n    <p class="info-item">\n      ${0!==o.length?`${function(e,t){let n;return e.length<=t?n=e:"#en"===window.location.hash?n=e.slice(0,t).join(", ")+", other":"#uk"===window.location.hash&&(n=e.slice(0,t).join(", ")+", інші"),n}(c.map((e=>e.name)),2)}`:"Genres not found"} \n    </p>\n    <p class="info-item info-item__date">| \n      ${i?`${i.slice(0,4)}`:"Date not found"}\n    </p>\n    \n  </div>\n</li>\n      `}})),r.register("2nhTy",(function(t,n){e(t.exports,"renderPaginationBtn",(function(){return c})),e(t.exports,"onPaginateBtnClick",(function(){return l}));var o=r("jGZdM"),i=r("krGWQ"),s=r("7d4XR");r("7d4XR"),s=r("7d4XR");const a=new(0,o.default);function c(e){const t=e;let n=1;function o(e,t){const o=n===e,s=document.createElement("button");if(s.classList.add("btn-pagination"),!0===t)return s.innerHTML="...",s.disabled=!0,i.refs.pagination.append(s),!1;o&&s.classList.add("active-btn-pagination"),s.disabled=o,s.innerHTML=e,s.addEventListener("click",(()=>{n=e,i.refs.pagination.innerHTML="",r()})),i.refs.pagination.append(s)}function r(){if(o(1),t<7)for(let e=2;e<=t;e++)o(e);else n<6?(o(2),o(3),o(4),o(5),o(6),o(7),o(n,!0)):n<=t-5?(o(n,!0),o(n-2),o(n-1),o(n),o(n+1),o(n+2),o(n,!0)):(o(n,!0),o(t-6),o(t-5),o(t-4),o(t-3),o(t-2),o(t-1)),o(t)}r()}function l(e){if("BUTTON"!==e.target.nodeName)return;i.refs.mainMarkup.innerHTML="";let t=e.target.innerText;a.fetchArticles(t).then((e=>{const t=e.results.map((e=>(0,s.itemMarkup)(e))).join("");i.refs.mainMarkup.insertAdjacentHTML("beforeend",t)}))}})),r.register("l09yf",(function(t,n){e(t.exports,"languageTranslate",(function(){return o})),e(t.exports,"studName",(function(){return i})),e(t.exports,"possition",(function(){return r}));const o={home:{en:"home",uk:"головна"},library:{en:"my library",uk:"бібліотека"},log:{en:"log in",uk:"увійти"},search:{en:"Movie search",uk:"Пошук фільмів"},library:{en:"my library",uk:"бібліотека"},placeholder:{en:"Movie search",uk:"Пошук фільму"},watchedB:{en:"watched",uk:"переглянуті"},queueB:{en:"queue",uk:"черга"},genreOth:{en:"other",uk:"інші"},votes:{en:"Vote / Votes",uk:"Голос / Проголосували"},popularity:{en:"Popularuty",uk:"Популярність"},title:{en:"Original Title",uk:"Оригінальна назва"},genres:{en:"Genres",uk:"Жанри"},about:{en:"About",uk:"Про фільм"},clockTopText:{en:"You haven`t saved anything.",uk:"Ти ще нічого не зберіг."},clockMidText:{en:"DON`T WASTE YOUR TIME!",uk:"НЕ МАРНУЙ СВОГО ЧАСУ!"},clockBotText:{en:"Add something . . .",uk:"Додай що-небудь . . ."},footText1:{en:"© 2022 | All Rights Reserved | Developed with",uk:"© 2022 | Всі права захищенні | Розроблено з"},footText2:{en:"by",uk:"від"},footText3:{en:"GoIT Students",uk:"Студентів GoIT"},watched:{en:"Add to watched",uk:"Додати до переглянутих"},queue:{en:"Add to queue",uk:"Додати до черги"},teamName:{en:"YOUR WEEKEND TEAM",uk:"ВАША WEEKEND КОМАНДА"},closeBtn:{en:"Close",uk:"Закрити"},emailPlaceholder:{en:"Email",uk:"Введіть Email"},passwordPlaceholder:{en:"Password",uk:"Введіть Пароль"},repeatPlaceholder:{en:"Repeat Password",uk:"Повторіть Пароль"},registerBtn:{en:"Register",uk:"Реєстрація"},loginBtn:{en:"Login",uk:"Увійти"},logoutBtn:{en:"Log Out",uk:"Вийти"},account:{en:"Have an account?",uk:"Вже є аккаунт?"},noAccount:{en:"Don`t have an account?",uk:"Немає облікового запису?"}},i={yuraVol:{en:"Yura Voloshyn",uk:"Юрій Волошин"},sergSma:{en:"Sergiy Smaga",uk:"Сергій Смага"},olenaLot:{en:"Olena Lotos",uk:"Олена Лотос"},iraShash:{en:"Iryna Shashko",uk:"Ірина Шашко"},yuliaPakh:{en:"Yulia Pakhachuk",uk:"Юлія Пахачук"},hannaShu:{en:"Hanna Shumakova",uk:"Ганна Шумакова"},olhatru:{en:"Olha Truba",uk:"Ольга Труба"},andrTim:{en:"Andrew Timoshkin",uk:"Андрій Тімошкін"}},r={yuraVol:{en:"Team Leader",uk:"Тімлід"},sergSma:{en:"Scrum Master",uk:"Скрам Майстер"},olenaLot:{en:"Developer",uk:"Розробник"},iraShash:{en:"Developer",uk:"Розробник"},yuliaPakh:{en:"Developer",uk:"Розробник"},hannaShu:{en:"Developer",uk:"Розробник"},olhatru:{en:"Developer",uk:"Розробник"},andrTim:{en:"Developer",uk:"Розробник"}}})),r.register("9rsbQ",(function(t,n){e(t.exports,"clearMarkup",(function(){return f})),e(t.exports,"itemMarkupBySearch",(function(){return p}));var o=r("jGZdM"),i=r("krGWQ"),s=r("kSHYk"),a=(s=r("kSHYk"),r("iQIUW"));r("k0Gxw"),r("l09yf"),r("l09yf");var c=r("k0Gxw"),l=r("7d4XR");"#en"===window.location.hash?i.refs.selectLang.value="en":"#uk"===window.location.hash&&(i.refs.selectLang.value="uk");const d=i.refs.selectLang.value;let u=[];const h=new(0,o.default);function f(){i.refs.mainMarkup.innerHTML=""}i.refs.form.addEventListener("submit",(async function(e){e.preventDefault(),(0,c.modalTranslate)(),i.refs.homeBtn.disabled=!1,i.refs.pagination.innerHTML="",i.refs.paginationSearch.innerHTML="";const t=e.currentTarget.elements[0].value;if(""===t)return"#en"===window.location.hash&&a.Notify.failure("input field cannot be empty."),void("#uk"===window.location.hash&&a.Notify.failure("поле пошуку не може бути порожнім."));h.query=t;const n=await h.fetchArticlesSearch(1,d);if(0===n.total_pages)return"#en"===window.location.hash&&a.Notify.failure("Sorry, there are no movies matching your search query. Please try again."),"#uk"===window.location.hash&&a.Notify.failure("На жаль, немає фільмів, які відповідають вашому пошуковому запиту. Будь ласка спробуйте ще раз."),void l.loadAnimationAction.classList.add("is-hiden");{f();const e=n.results.map((e=>p(e))).join(""),t=n.total_pages;return(0,s.renderPaginationSearchBtn)(t),l.loadAnimationAction.classList.add("is-hiden"),i.refs.paginationSearch.addEventListener("click",s.onPaginateSearchBtnClick),i.refs.mainMarkup.insertAdjacentHTML("beforeend",e)}}));function p({id:e,poster_path:t,title:n,genre_ids:o,release_date:i}){return function(e){const t=JSON.parse(localStorage.getItem("genres"));u=[],e.forEach((e=>{u.push(t.find((t=>t.id===e)))}))}(o),`\n        <li class="movie-card" id="${e}">\n  <a class="card-link" href="#"><img class="poster-image" src="${null===t?"https://stringfixer.com/files/951711496.jpg":`https://image.tmdb.org/t/p/w342/${t}`}" alt="${n}" loading="lazy" /></a>\n    <h2 class="card-title">\n      ${n}\n    </h2>\n    <div class="info">\n    <p class="info-item">\n      ${0!==o.length?`${function(e,t){let n;return e.length<=t?n=e:"#en"===window.location.hash?n=e.slice(0,t).join(", ")+", other":"#uk"===window.location.hash&&(n=e.slice(0,t).join(", ")+", інші"),n}(u.map((e=>e.name)),2)}`:"Genres not found"} \n    </p>\n    <p class="info-item info-item__date">| \n      ${i?`${i.slice(0,4)}`:"Not found"}\n    </p>\n  </div>\n</li>\n      `}i.refs.paginationSearch.addEventListener("click",s.onPaginateSearchBtnClick)})),r.register("kSHYk",(function(t,n){e(t.exports,"renderPaginationSearchBtn",(function(){return c})),e(t.exports,"onPaginateSearchBtnClick",(function(){return l}));var o=r("jGZdM"),i=r("krGWQ"),s=r("9rsbQ");r("7d4XR"),r("7d4XR"),r("7d4XR");const a=new(0,o.default);function c(e){const t=e;let n=1;function o(e,t){const o=n===e,s=document.createElement("button");if(s.classList.add("btn-pagination"),!0===t)return s.innerHTML="...",s.disabled=!0,i.refs.paginationSearch.append(s),!1;o&&s.classList.add("active-btn-pagination"),s.disabled=o,s.innerHTML=e,s.addEventListener("click",(()=>{n=e,i.refs.paginationSearch.innerHTML="",r()})),i.refs.paginationSearch.append(s)}function r(){if(o(1),t<7)for(let e=2;e<=t;e++)o(e);else n<6?(o(2),o(3),o(4),o(5),o(6),o(7),o(n,!0)):n<=t-5?(o(n,!0),o(n-2),o(n-1),o(n),o(n+1),o(n+2),o(n,!0)):(o(n,!0),o(t-6),o(t-5),o(t-4),o(t-3),o(t-2),o(t-1)),o(t)}r()}function l(e){if("BUTTON"!==e.target.nodeName)return;i.refs.mainMarkup.innerHTML="";let t=e.target.innerText;a.fetchArticlesSearchClick(t).then((e=>{const t=e.results.map((e=>(0,s.itemMarkupBySearch)(e))).join("");i.refs.mainMarkup.insertAdjacentHTML("beforeend",t)}))}})),r.register("iQIUW",(function(e,t){var o,i;o=void 0!==n?n:"undefined"!=typeof window?window:e.exports,i=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n="Success",o="Failure",i="Warning",r="Info",s={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},a=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},c=function(t){return t||(t="head"),null!==e.document[t]||(a('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},l=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var o=function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t&&"[object Object]"===Object.prototype.toString.call(n[o])?e[o]=l(e[o],n[o]):e[o]=n[o])};n<arguments.length;n++)o(arguments[n]);return e},d=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},u=0,h=function(a,d,h,p){if(!c("body"))return!1;t||f.Notify.init({});var m=l(!0,t,{});if("object"==typeof h&&!Array.isArray(h)||"object"==typeof p&&!Array.isArray(p)){var g={};"object"==typeof h?g=h:"object"==typeof p&&(g=p),t=l(!0,t,g)}var y,v,b=t[a.toLocaleLowerCase("en")];u++,"string"!=typeof d&&(d="Notiflix "+a),t.plainText&&(y=d,(v=e.document.createElement("div")).innerHTML=y,d=v.textContent||v.innerText||""),!t.plainText&&d.length>t.messageMaxLength&&(t=l(!0,t,{closeButton:!0,messageMaxLength:150}),d='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),d.length>t.messageMaxLength&&(d=d.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(b.fontAwesomeIconColor=b.background),t.cssAnimation||(t.cssAnimationDuration=0);var w=e.document.getElementById(s.wrapID)||e.document.createElement("div");if(w.id=s.wrapID,w.style.width=t.width,w.style.zIndex=t.zindex,w.style.opacity=t.opacity,"center-center"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.top=t.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===t.position?(w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.left="auto"):"left-top"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===t.position?(w.style.left=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=t.distance,w.style.top=t.distance,w.style.left="auto",w.style.bottom="auto"),t.backOverlay){var k=e.document.getElementById(s.overlayID)||e.document.createElement("div");k.id=s.overlayID,k.style.width="100%",k.style.height="100%",k.style.position="fixed",k.style.zIndex=t.zindex-1,k.style.left=0,k.style.top=0,k.style.right=0,k.style.bottom=0,k.style.background=b.backOverlayColor||t.backOverlayColor,k.className=t.cssAnimation?"nx-with-animation":"",k.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(s.overlayID)||e.document.body.appendChild(k)}e.document.getElementById(s.wrapID)||e.document.body.appendChild(w);var I=e.document.createElement("div");I.id=t.ID+"-"+u,I.className=t.className+" "+b.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof h?"nx-with-close-button":"")+" "+("function"==typeof h?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),I.style.fontSize=t.fontSize,I.style.color=b.textColor,I.style.background=b.background,I.style.borderRadius=t.borderRadius,I.style.pointerEvents="all",t.rtl&&(I.setAttribute("dir","rtl"),I.classList.add("nx-rtl-on")),I.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(I.style.animationDuration=t.cssAnimationDuration+"ms");var E="";if(t.closeButton&&"function"!=typeof h&&(E='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+b.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)I.innerHTML='<i style="color:'+b.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+b.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+d+"</span>"+(t.closeButton?E:"");else{var C="";a===n?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===o?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===i?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===r&&(C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),I.innerHTML=C+'<span class="nx-message nx-with-icon">'+d+"</span>"+(t.closeButton?E:"")}else I.innerHTML='<span class="nx-message">'+d+"</span>"+(t.closeButton?E:"");if("left-bottom"===t.position||"right-bottom"===t.position){var _=e.document.getElementById(s.wrapID);_.insertBefore(I,_.firstChild)}else e.document.getElementById(s.wrapID).appendChild(I);var S=e.document.getElementById(I.id);if(S){var N,x,T=function(){S.classList.add("nx-remove");var t=e.document.getElementById(s.overlayID);t&&w.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(N)},O=function(){if(S&&null!==S.parentNode&&S.parentNode.removeChild(S),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var t=e.document.getElementById(s.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(x)};if(t.closeButton&&"function"!=typeof h&&e.document.getElementById(I.id).querySelector("span.nx-close-button").addEventListener("click",(function(){T();var e=setTimeout((function(){O(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof h||t.clickToClose)&&S.addEventListener("click",(function(){"function"==typeof h&&h(),T();var e=setTimeout((function(){O(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof h){var L=function(){N=setTimeout((function(){T()}),t.timeout),x=setTimeout((function(){O()}),t.timeout+t.cssAnimationDuration)};L(),t.pauseOnHover&&(S.addEventListener("mouseenter",(function(){S.classList.add("nx-paused"),clearTimeout(N),clearTimeout(x)})),S.addEventListener("mouseleave",(function(){S.classList.remove("nx-paused"),L()})))}}if(t.showOnlyTheLastOne&&u>0)for(var A=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+u+"])"),R=0;R<A.length;R++){var P=A[R];null!==P.parentNode&&P.parentNode.removeChild(P)}t=l(!0,t,m)},f={Notify:{init:function(n){t=l(!0,s,n),function(t,n){if(!c("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var o=e.document.createElement("style");o.id=n,o.innerHTML=t(),e.document.head.appendChild(o)}}(d,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return a("You have to initialize the Notify module before call Merge function."),!1;t=l(!0,t,e)},success:function(e,t,o){h(n,e,t,o)},failure:function(e,t,n){h(o,e,t,n)},warning:function(e,t,n){h(i,e,t,n)},info:function(e,t,n){h(r,e,t,n)}}};return"object"==typeof e.Notiflix?l(!0,e.Notiflix,{Notify:f.Notify}):{Notify:f.Notify}},"function"==typeof define&&define.amd?define([],(function(){return i(o)})):"object"==typeof e.exports?e.exports=i(o):o.Notiflix=i(o)})),r.register("4sFHQ",(function(t,n){e(t.exports,"idItemMarkup",(function(){return i}));var o=r("jGZdM");r("krGWQ");new(0,o.default);function i({id:e,poster_path:t,title:n,genres:o,release_date:i,vote_average:r}){let s=0!==o.length?`${function(e){let t=[];return e.forEach((e=>{t.push(e.name)})),t.join(", ")}(o)}`:"Genres not found";return`\n        <li class="movie-card" id="${e}">\n  <a class="card-link" href="#"><img class="poster-image" src="${null===t?"https://stringfixer.com/files/951711496.jpg":`https://image.tmdb.org/t/p/w342/${t}`}" alt="${n}" loading="lazy" /></a>\n  \n    <h2 class="card-title">\n      ${n}\n    </h2>\n    <div class="info">\n    <p class="info-item">\n      ${s} \n    </p>\n    <p class="info-item info-item__date">| \n      ${i?`${i.slice(0,4)}`:"Date not found"}\n    </p>\n    <p class="info-item info-item__vote">\n      ${r.toFixed(1)}\n    </p>\n    \n    \n  </div>\n</li>\n      `}})),r.register("bp6Nq",(function(t,n){e(t.exports,"onQueueBtnClick",(function(){return l}));var o=r("krGWQ"),i=r("jGZdM");r("7d4XR");var s=r("9rsbQ"),a=(s=r("9rsbQ"),r("4sFHQ")),c=r("iGXQY");r("k0Gxw"),r("l09yf"),r("l09yf"),r("k0Gxw");new(0,i.default);async function l(){o.refs.watchedBtn.classList.remove("selected"),o.refs.queueBtn.classList.add("selected"),o.refs.pagination.innerHTML="",o.refs.paginationSearch.innerHTML="",(0,s.clearMarkup)(),o.refs.queueBtn.removeEventListener("click",l),o.refs.watchedBtn.addEventListener("click",c.onWatchedBtnClick),o.refs.queueBtn.removeEventListener("click",l);const e=null===JSON.parse(localStorage.getItem("queue"))?[]:JSON.parse(localStorage.getItem("queue"));0===e.length?o.refs.clockFrame.classList.remove("is-hiden"):o.refs.clockFrame.classList.add("is-hiden"),e.forEach((e=>o.refs.mainMarkup.insertAdjacentHTML("beforeend",(0,a.idItemMarkup)(e))))}o.refs.queueBtn.addEventListener("click",l)})),r.register("fZKcF",(function(e,t){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,s=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw s}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var c=function(){function e(t,n){var o=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"defaultOptions",{sourceAttr:"href",overlay:!0,overlayOpacity:.7,spinner:!0,nav:!0,navText:["&lsaquo;","&rsaquo;"],captions:!0,captionDelay:0,captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionClass:"",close:!0,closeText:"&times;",swipeClose:!0,showCounter:!0,fileExt:"png|jpg|jpeg|gif|webp",animationSlide:!0,animationSpeed:250,preloading:!0,enableKeyboard:!0,loop:!0,rel:!1,docClose:!0,swipeTolerance:50,className:"simple-lightbox",widthRatio:.8,heightRatio:.9,scaleImageToRatio:!1,disableRightClick:!1,disableScroll:!0,alertError:!0,alertErrorMessage:"Image not found, next image will be loaded",additionalHtml:!1,history:!0,throttleInterval:0,doubleTapZoom:2,maxZoom:10,htmlClass:"has-lightbox",rtl:!1,fixedClass:"sl-fixed",fadeSpeed:300,uniqueImages:!0,focus:!0,scrollZoom:!0,scrollZoomFactor:.5}),a(this,"transitionPrefix",void 0),a(this,"isPassiveEventsSupported",void 0),a(this,"transitionCapable",!1),a(this,"isTouchDevice","ontouchstart"in window),a(this,"isAppleDevice",/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)),a(this,"initialLocationHash",void 0),a(this,"pushStateSupport","pushState"in history),a(this,"isOpen",!1),a(this,"isAnimating",!1),a(this,"isClosing",!1),a(this,"isFadeIn",!1),a(this,"urlChangedOnce",!1),a(this,"hashReseted",!1),a(this,"historyHasChanges",!1),a(this,"historyUpdateTimeout",null),a(this,"currentImage",void 0),a(this,"eventNamespace","simplelightbox"),a(this,"domNodes",{}),a(this,"loadedImages",[]),a(this,"initialImageIndex",0),a(this,"currentImageIndex",0),a(this,"initialSelector",null),a(this,"globalScrollbarWidth",0),a(this,"controlCoordinates",{swipeDiff:0,swipeYDiff:0,swipeStart:0,swipeEnd:0,swipeYStart:0,swipeYEnd:0,mousedown:!1,imageLeft:0,zoomed:!1,containerHeight:0,containerWidth:0,containerOffsetX:0,containerOffsetY:0,imgHeight:0,imgWidth:0,capture:!1,initialOffsetX:0,initialOffsetY:0,initialPointerOffsetX:0,initialPointerOffsetY:0,initialPointerOffsetX2:0,initialPointerOffsetY2:0,initialScale:1,initialPinchDistance:0,pointerOffsetX:0,pointerOffsetY:0,pointerOffsetX2:0,pointerOffsetY2:0,targetOffsetX:0,targetOffsetY:0,targetScale:0,pinchOffsetX:0,pinchOffsetY:0,limitOffsetX:0,limitOffsetY:0,scaleDifference:0,targetPinchDistance:0,touchCount:0,doubleTapped:!1,touchmoveCount:0}),this.options=Object.assign(this.defaultOptions,n),this.isPassiveEventsSupported=this.checkPassiveEventsSupport(),"string"==typeof t?(this.initialSelector=t,this.elements=Array.from(document.querySelectorAll(t))):this.elements=void 0!==t.length&&t.length>0?Array.from(t):[t],this.relatedElements=[],this.transitionPrefix=this.calculateTransitionPrefix(),this.transitionCapable=!1!==this.transitionPrefix,this.initialLocationHash=this.hash,this.options.rel&&(this.elements=this.getRelated(this.options.rel)),this.options.uniqueImages){var i=[];this.elements=Array.from(this.elements).filter((function(e){var t=e.getAttribute(o.options.sourceAttr);return-1===i.indexOf(t)&&(i.push(t),!0)}))}this.createDomNodes(),this.options.close&&this.domNodes.wrapper.appendChild(this.domNodes.closeButton),this.options.nav&&this.domNodes.wrapper.appendChild(this.domNodes.navigation),this.options.spinner&&this.domNodes.wrapper.appendChild(this.domNodes.spinner),this.addEventListener(this.elements,"click."+this.eventNamespace,(function(e){if(o.isValidLink(e.currentTarget)){if(e.preventDefault(),o.isAnimating)return!1;o.initialImageIndex=o.elements.indexOf(e.currentTarget),o.openImage(e.currentTarget)}})),this.options.docClose&&this.addEventListener(this.domNodes.wrapper,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],(function(e){o.isOpen&&e.target===e.currentTarget&&o.close()})),this.options.disableRightClick&&this.addEventListener(document.body,"contextmenu."+this.eventNamespace,(function(e){e.target.parentElement.classList.contains("sl-image")&&e.preventDefault()})),this.options.enableKeyboard&&this.addEventListener(document.body,"keyup."+this.eventNamespace,this.throttle((function(e){if(o.controlCoordinates.swipeDiff=0,o.isAnimating&&"Escape"===e.key)return o.currentImage.setAttribute("src",""),o.isAnimating=!1,o.close();o.isOpen&&(e.preventDefault(),"Escape"===e.key&&o.close(),!o.isAnimating&&["ArrowLeft","ArrowRight"].indexOf(e.key)>-1&&o.loadImage("ArrowRight"===e.key?1:-1))}),this.options.throttleInterval)),this.addEvents()}var t,n,r;return t=e,n=[{key:"checkPassiveEventsSupport",value:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassive",null,t),window.removeEventListener("testPassive",null,t)}catch(e){}return e}},{key:"createDomNodes",value:function(){this.domNodes.overlay=document.createElement("div"),this.domNodes.overlay.classList.add("sl-overlay"),this.domNodes.overlay.dataset.opacityTarget=this.options.overlayOpacity,this.domNodes.closeButton=document.createElement("button"),this.domNodes.closeButton.classList.add("sl-close"),this.domNodes.closeButton.innerHTML=this.options.closeText,this.domNodes.spinner=document.createElement("div"),this.domNodes.spinner.classList.add("sl-spinner"),this.domNodes.spinner.innerHTML="<div></div>",this.domNodes.navigation=document.createElement("div"),this.domNodes.navigation.classList.add("sl-navigation"),this.domNodes.navigation.innerHTML='<button class="sl-prev">'.concat(this.options.navText[0],'</button><button class="sl-next">').concat(this.options.navText[1],"</button>"),this.domNodes.counter=document.createElement("div"),this.domNodes.counter.classList.add("sl-counter"),this.domNodes.counter.innerHTML='<span class="sl-current"></span>/<span class="sl-total"></span>',this.domNodes.caption=document.createElement("div"),this.domNodes.caption.classList.add("sl-caption","pos-"+this.options.captionPosition),this.options.captionClass&&this.domNodes.caption.classList.add(this.options.captionClass),this.domNodes.image=document.createElement("div"),this.domNodes.image.classList.add("sl-image"),this.domNodes.wrapper=document.createElement("div"),this.domNodes.wrapper.classList.add("sl-wrapper"),this.domNodes.wrapper.setAttribute("tabindex",-1),this.domNodes.wrapper.setAttribute("role","dialog"),this.domNodes.wrapper.setAttribute("aria-hidden",!1),this.options.className&&this.domNodes.wrapper.classList.add(this.options.className),this.options.rtl&&this.domNodes.wrapper.classList.add("sl-dir-rtl")}},{key:"throttle",value:function(e,t){var n;return function(){n||(e.apply(this,arguments),n=!0,setTimeout((function(){return n=!1}),t))}}},{key:"isValidLink",value:function(e){return!this.options.fileExt||e.getAttribute(this.options.sourceAttr)&&new RegExp("("+this.options.fileExt+")$","i").test(e.getAttribute(this.options.sourceAttr))}},{key:"calculateTransitionPrefix",value:function(){var e=(document.body||document.documentElement).style;return"transition"in e?"":"WebkitTransition"in e?"-webkit-":"MozTransition"in e?"-moz-":"OTransition"in e&&"-o"}},{key:"toggleScrollbar",value:function(e){var t=0,n=[].slice.call(document.querySelectorAll("."+this.options.fixedClass));if("hide"===e){var o=window.innerWidth;if(!o){var i=document.documentElement.getBoundingClientRect();o=i.right-Math.abs(i.left)}if(document.body.clientWidth<o||this.isAppleDevice){var r=document.createElement("div"),s=parseInt(document.body.style.paddingRight||0,10);r.classList.add("sl-scrollbar-measure"),document.body.appendChild(r),t=r.offsetWidth-r.clientWidth,document.body.removeChild(r),document.body.dataset.originalPaddingRight=s,(t>0||0==t&&this.isAppleDevice)&&(document.body.classList.add("hidden-scroll"),document.body.style.paddingRight=s+t+"px",n.forEach((function(e){var n=e.style.paddingRight,o=window.getComputedStyle(e)["padding-right"];e.dataset.originalPaddingRight=n,e.style.paddingRight="".concat(parseFloat(o)+t,"px")})))}}else document.body.classList.remove("hidden-scroll"),document.body.style.paddingRight=document.body.dataset.originalPaddingRight,n.forEach((function(e){var t=e.dataset.originalPaddingRight;void 0!==t&&(e.style.paddingRight=t)}));return t}},{key:"close",value:function(){var e=this;if(!this.isOpen||this.isAnimating||this.isClosing)return!1;this.isClosing=!0;var t=this.relatedElements[this.currentImageIndex];for(var n in t.dispatchEvent(new Event("close.simplelightbox")),this.options.history&&(this.historyHasChanges=!1,this.hashReseted||this.resetHash()),this.removeEventListener(document,"focusin."+this.eventNamespace),this.fadeOut(this.domNodes.overlay,this.options.fadeSpeed),this.fadeOut(document.querySelectorAll(".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"),this.options.fadeSpeed,(function(){e.options.disableScroll&&e.toggleScrollbar("show"),e.options.htmlClass&&""!==e.options.htmlClass&&document.querySelector("html").classList.remove(e.options.htmlClass),document.body.removeChild(e.domNodes.wrapper),document.body.removeChild(e.domNodes.overlay),e.domNodes.additionalHtml=null,t.dispatchEvent(new Event("closed.simplelightbox")),e.isClosing=!1})),this.currentImage=null,this.isOpen=!1,this.isAnimating=!1,this.controlCoordinates)this.controlCoordinates[n]=0;this.controlCoordinates.mousedown=!1,this.controlCoordinates.zoomed=!1,this.controlCoordinates.capture=!1,this.controlCoordinates.initialScale=this.minMax(1,1,this.options.maxZoom),this.controlCoordinates.doubleTapped=!1}},{key:"hash",get:function(){return window.location.hash.substring(1)}},{key:"preload",value:function(){var e=this,t=this.currentImageIndex,n=this.relatedElements.length,o=t+1<0?n-1:t+1>=n-1?0:t+1,i=t-1<0?n-1:t-1>=n-1?0:t-1,r=new Image,s=new Image;r.addEventListener("load",(function(n){var o=n.target.getAttribute("src");-1===e.loadedImages.indexOf(o)&&e.loadedImages.push(o),e.relatedElements[t].dispatchEvent(new Event("nextImageLoaded."+e.eventNamespace))})),r.setAttribute("src",this.relatedElements[o].getAttribute(this.options.sourceAttr)),s.addEventListener("load",(function(n){var o=n.target.getAttribute("src");-1===e.loadedImages.indexOf(o)&&e.loadedImages.push(o),e.relatedElements[t].dispatchEvent(new Event("prevImageLoaded."+e.eventNamespace))})),s.setAttribute("src",this.relatedElements[i].getAttribute(this.options.sourceAttr))}},{key:"loadImage",value:function(e){var t=this,n=e;this.options.rtl&&(e=-e),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event("change."+this.eventNamespace)),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((1===e?"next":"prev")+"."+this.eventNamespace));var o=this.currentImageIndex+e;if(this.isAnimating||(o<0||o>=this.relatedElements.length)&&!1===this.options.loop)return!1;this.currentImageIndex=o<0?this.relatedElements.length-1:o>this.relatedElements.length-1?0:o,this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.options.animationSlide&&this.slide(this.options.animationSpeed/1e3,-100*n-this.controlCoordinates.swipeDiff+"px"),this.fadeOut(this.domNodes.image,this.options.fadeSpeed,(function(){t.isAnimating=!0,t.isClosing?t.isAnimating=!1:setTimeout((function(){var e=t.relatedElements[t.currentImageIndex];t.currentImage.setAttribute("src",e.getAttribute(t.options.sourceAttr)),-1===t.loadedImages.indexOf(e.getAttribute(t.options.sourceAttr))&&t.show(t.domNodes.spinner),t.domNodes.image.contains(t.domNodes.caption)&&t.domNodes.image.removeChild(t.domNodes.caption),t.adjustImage(n),t.options.preloading&&t.preload()}),100)}))}},{key:"adjustImage",value:function(e){var t=this;if(!this.currentImage)return!1;var n=new Image,o=window.innerWidth*this.options.widthRatio,i=window.innerHeight*this.options.heightRatio;n.setAttribute("src",this.currentImage.getAttribute("src")),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,this.zoomPanElement(0,0,1),n.addEventListener("error",(function(n){t.relatedElements[t.currentImageIndex].dispatchEvent(new Event("error."+t.eventNamespace)),t.isAnimating=!1,t.isOpen=!0,t.domNodes.spinner.style.display="none";var o=1===e||-1===e;if(t.initialImageIndex===t.currentImageIndex&&o)return t.close();t.options.alertError&&alert(t.options.alertErrorMessage),t.loadImage(o?e:1)})),n.addEventListener("load",(function(n){void 0!==e&&(t.relatedElements[t.currentImageIndex].dispatchEvent(new Event("changed."+t.eventNamespace)),t.relatedElements[t.currentImageIndex].dispatchEvent(new Event((1===e?"nextDone":"prevDone")+"."+t.eventNamespace))),t.options.history&&t.updateURL(),-1===t.loadedImages.indexOf(t.currentImage.getAttribute("src"))&&t.loadedImages.push(t.currentImage.getAttribute("src"));var r,s,a=n.target.width,c=n.target.height;if(t.options.scaleImageToRatio||a>o||c>i){var l=a/c>o/i?a/o:c/i;a/=l,c/=l}t.domNodes.image.style.top=(window.innerHeight-c)/2+"px",t.domNodes.image.style.left=(window.innerWidth-a-t.globalScrollbarWidth)/2+"px",t.domNodes.image.style.width=a+"px",t.domNodes.image.style.height=c+"px",t.domNodes.spinner.style.display="none",t.options.focus&&t.forceFocus(),t.fadeIn(t.currentImage,t.options.fadeSpeed,(function(){t.options.focus&&t.domNodes.wrapper.focus()})),t.isOpen=!0,"string"==typeof t.options.captionSelector?r="self"===t.options.captionSelector?t.relatedElements[t.currentImageIndex]:t.relatedElements[t.currentImageIndex].querySelector(t.options.captionSelector):"function"==typeof t.options.captionSelector&&(r=t.options.captionSelector(t.relatedElements[t.currentImageIndex])),t.options.captions&&r&&(s="data"===t.options.captionType?r.dataset[t.options.captionsData]:"text"===t.options.captionType?r.innerHTML:r.getAttribute(t.options.captionsData)),t.options.loop?1===t.relatedElements.length?t.hide(t.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):t.show(t.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):(0===t.currentImageIndex&&t.hide(t.domNodes.navigation.querySelector(".sl-prev")),t.currentImageIndex>=t.relatedElements.length-1&&t.hide(t.domNodes.navigation.querySelector(".sl-next")),t.currentImageIndex>0&&t.show(t.domNodes.navigation.querySelector(".sl-prev")),t.currentImageIndex<t.relatedElements.length-1&&t.show(t.domNodes.navigation.querySelector(".sl-next"))),1===e||-1===e?(t.options.animationSlide&&(t.slide(0,100*e+"px"),setTimeout((function(){t.slide(t.options.animationSpeed/1e3,"0px")}),50)),t.fadeIn(t.domNodes.image,t.options.fadeSpeed,(function(){t.isAnimating=!1,t.setCaption(s,a)}))):(t.isAnimating=!1,t.setCaption(s,a)),t.options.additionalHtml&&!t.domNodes.additionalHtml&&(t.domNodes.additionalHtml=document.createElement("div"),t.domNodes.additionalHtml.classList.add("sl-additional-html"),t.domNodes.additionalHtml.innerHTML=t.options.additionalHtml,t.domNodes.image.appendChild(t.domNodes.additionalHtml))}))}},{key:"zoomPanElement",value:function(e,t,n){this.currentImage.style[this.transitionPrefix+"transform"]="translate("+e+","+t+") scale("+n+")"}},{key:"minMax",value:function(e,t,n){return e<t?t:e>n?n:e}},{key:"setZoomData",value:function(e,t,n){this.currentImage.dataset.scale=e,this.currentImage.dataset.translateX=t,this.currentImage.dataset.translateY=n}},{key:"hashchangeHandler",value:function(){this.isOpen&&this.hash===this.initialLocationHash&&(this.hashReseted=!0,this.close())}},{key:"addEvents",value:function(){var e=this;if(this.addEventListener(window,"resize."+this.eventNamespace,(function(t){e.isOpen&&e.adjustImage()})),this.addEventListener(this.domNodes.closeButton,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],this.close.bind(this)),this.options.history&&setTimeout((function(){e.addEventListener(window,"hashchange."+e.eventNamespace,(function(t){e.isOpen&&e.hashchangeHandler()}))}),40),this.addEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace,(function(t){if(!t.currentTarget.tagName.match(/button/i))return!0;t.preventDefault(),e.controlCoordinates.swipeDiff=0,e.loadImage(t.currentTarget.classList.contains("sl-next")?1:-1)})),this.options.scrollZoom){var t=1;this.addEventListener(this.domNodes.image,["mousewheel","DOMMouseScroll"],(function(n){if(e.controlCoordinates.mousedown||e.isAnimating||e.isClosing||!e.isOpen)return!0;0==e.controlCoordinates.containerHeight&&(e.controlCoordinates.containerHeight=e.getDimensions(e.domNodes.image).height,e.controlCoordinates.containerWidth=e.getDimensions(e.domNodes.image).width,e.controlCoordinates.imgHeight=e.getDimensions(e.currentImage).height,e.controlCoordinates.imgWidth=e.getDimensions(e.currentImage).width,e.controlCoordinates.containerOffsetX=e.domNodes.image.offsetLeft,e.controlCoordinates.containerOffsetY=e.domNodes.image.offsetTop,e.controlCoordinates.initialOffsetX=parseFloat(e.currentImage.dataset.translateX),e.controlCoordinates.initialOffsetY=parseFloat(e.currentImage.dataset.translateY)),n.preventDefault();var o=n.delta||n.wheelDelta;void 0===o&&(o=n.detail),o=Math.max(-1,Math.min(1,o)),t+=o*e.options.scrollZoomFactor*t,t=Math.max(1,Math.min(e.options.maxZoom,t)),e.controlCoordinates.targetScale=t;var i=document.documentElement.scrollTop||document.body.scrollTop;e.controlCoordinates.pinchOffsetX=n.pageX,e.controlCoordinates.pinchOffsetY=n.pageY-i||0,e.controlCoordinates.limitOffsetX=(e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale-e.controlCoordinates.containerWidth)/2,e.controlCoordinates.limitOffsetY=(e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale-e.controlCoordinates.containerHeight)/2,e.controlCoordinates.scaleDifference=e.controlCoordinates.targetScale-e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX=e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale<=e.controlCoordinates.containerWidth?0:e.minMax(e.controlCoordinates.initialOffsetX-(e.controlCoordinates.pinchOffsetX-e.controlCoordinates.containerOffsetX-e.controlCoordinates.containerWidth/2-e.controlCoordinates.initialOffsetX)/(e.controlCoordinates.targetScale-e.controlCoordinates.scaleDifference)*e.controlCoordinates.scaleDifference,-1*e.controlCoordinates.limitOffsetX,e.controlCoordinates.limitOffsetX),e.controlCoordinates.targetOffsetY=e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale<=e.controlCoordinates.containerHeight?0:e.minMax(e.controlCoordinates.initialOffsetY-(e.controlCoordinates.pinchOffsetY-e.controlCoordinates.containerOffsetY-e.controlCoordinates.containerHeight/2-e.controlCoordinates.initialOffsetY)/(e.controlCoordinates.targetScale-e.controlCoordinates.scaleDifference)*e.controlCoordinates.scaleDifference,-1*e.controlCoordinates.limitOffsetY,e.controlCoordinates.limitOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale),e.controlCoordinates.targetScale>1?(e.controlCoordinates.zoomed=!0,(!e.domNodes.caption.style.opacity||e.domNodes.caption.style.opacity>0)&&"none"!==e.domNodes.caption.style.display&&e.fadeOut(e.domNodes.caption,e.options.fadeSpeed)):(1===e.controlCoordinates.initialScale&&(e.controlCoordinates.zoomed=!1,"none"===e.domNodes.caption.style.display&&e.fadeIn(e.domNodes.caption,e.options.fadeSpeed)),e.controlCoordinates.initialPinchDistance=null,e.controlCoordinates.capture=!1),e.controlCoordinates.initialPinchDistance=e.controlCoordinates.targetPinchDistance,e.controlCoordinates.initialScale=e.controlCoordinates.targetScale,e.controlCoordinates.initialOffsetX=e.controlCoordinates.targetOffsetX,e.controlCoordinates.initialOffsetY=e.controlCoordinates.targetOffsetY,e.setZoomData(e.controlCoordinates.targetScale,e.controlCoordinates.targetOffsetX,e.controlCoordinates.targetOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale)}))}this.addEventListener(this.domNodes.image,["touchstart."+this.eventNamespace,"mousedown."+this.eventNamespace],(function(t){if("A"===t.target.tagName&&"touchstart"===t.type)return!0;if("mousedown"===t.type)t.preventDefault(),e.controlCoordinates.initialPointerOffsetX=t.clientX,e.controlCoordinates.initialPointerOffsetY=t.clientY,e.controlCoordinates.containerHeight=e.getDimensions(e.domNodes.image).height,e.controlCoordinates.containerWidth=e.getDimensions(e.domNodes.image).width,e.controlCoordinates.imgHeight=e.getDimensions(e.currentImage).height,e.controlCoordinates.imgWidth=e.getDimensions(e.currentImage).width,e.controlCoordinates.containerOffsetX=e.domNodes.image.offsetLeft,e.controlCoordinates.containerOffsetY=e.domNodes.image.offsetTop,e.controlCoordinates.initialOffsetX=parseFloat(e.currentImage.dataset.translateX),e.controlCoordinates.initialOffsetY=parseFloat(e.currentImage.dataset.translateY),e.controlCoordinates.capture=!0;else{if(e.controlCoordinates.touchCount=t.touches.length,e.controlCoordinates.initialPointerOffsetX=t.touches[0].clientX,e.controlCoordinates.initialPointerOffsetY=t.touches[0].clientY,e.controlCoordinates.containerHeight=e.getDimensions(e.domNodes.image).height,e.controlCoordinates.containerWidth=e.getDimensions(e.domNodes.image).width,e.controlCoordinates.imgHeight=e.getDimensions(e.currentImage).height,e.controlCoordinates.imgWidth=e.getDimensions(e.currentImage).width,e.controlCoordinates.containerOffsetX=e.domNodes.image.offsetLeft,e.controlCoordinates.containerOffsetY=e.domNodes.image.offsetTop,1===e.controlCoordinates.touchCount){if(e.controlCoordinates.doubleTapped)return e.currentImage.classList.add("sl-transition"),e.controlCoordinates.zoomed?(e.controlCoordinates.initialScale=1,e.setZoomData(e.controlCoordinates.initialScale,0,0),e.zoomPanElement("0px","0px",e.controlCoordinates.initialScale),e.controlCoordinates.zoomed=!1):(e.controlCoordinates.initialScale=e.options.doubleTapZoom,e.setZoomData(e.controlCoordinates.initialScale,0,0),e.zoomPanElement("0px","0px",e.controlCoordinates.initialScale),(!e.domNodes.caption.style.opacity||e.domNodes.caption.style.opacity>0)&&"none"!==e.domNodes.caption.style.display&&e.fadeOut(e.domNodes.caption,e.options.fadeSpeed),e.controlCoordinates.zoomed=!0),setTimeout((function(){e.currentImage&&e.currentImage.classList.remove("sl-transition")}),200),!1;e.controlCoordinates.doubleTapped=!0,setTimeout((function(){e.controlCoordinates.doubleTapped=!1}),300),e.controlCoordinates.initialOffsetX=parseFloat(e.currentImage.dataset.translateX),e.controlCoordinates.initialOffsetY=parseFloat(e.currentImage.dataset.translateY)}else 2===e.controlCoordinates.touchCount&&(e.controlCoordinates.initialPointerOffsetX2=t.touches[1].clientX,e.controlCoordinates.initialPointerOffsetY2=t.touches[1].clientY,e.controlCoordinates.initialOffsetX=parseFloat(e.currentImage.dataset.translateX),e.controlCoordinates.initialOffsetY=parseFloat(e.currentImage.dataset.translateY),e.controlCoordinates.pinchOffsetX=(e.controlCoordinates.initialPointerOffsetX+e.controlCoordinates.initialPointerOffsetX2)/2,e.controlCoordinates.pinchOffsetY=(e.controlCoordinates.initialPointerOffsetY+e.controlCoordinates.initialPointerOffsetY2)/2,e.controlCoordinates.initialPinchDistance=Math.sqrt((e.controlCoordinates.initialPointerOffsetX-e.controlCoordinates.initialPointerOffsetX2)*(e.controlCoordinates.initialPointerOffsetX-e.controlCoordinates.initialPointerOffsetX2)+(e.controlCoordinates.initialPointerOffsetY-e.controlCoordinates.initialPointerOffsetY2)*(e.controlCoordinates.initialPointerOffsetY-e.controlCoordinates.initialPointerOffsetY2)));e.controlCoordinates.capture=!0}return!!e.controlCoordinates.mousedown||(e.transitionCapable&&(e.controlCoordinates.imageLeft=parseInt(e.domNodes.image.style.left,10)),e.controlCoordinates.mousedown=!0,e.controlCoordinates.swipeDiff=0,e.controlCoordinates.swipeYDiff=0,e.controlCoordinates.swipeStart=t.pageX||t.touches[0].pageX,e.controlCoordinates.swipeYStart=t.pageY||t.touches[0].pageY,!1)})),this.addEventListener(this.domNodes.image,["touchmove."+this.eventNamespace,"mousemove."+this.eventNamespace,"MSPointerMove"],(function(t){if(!e.controlCoordinates.mousedown)return!0;if("touchmove"===t.type){if(!1===e.controlCoordinates.capture)return!1;e.controlCoordinates.pointerOffsetX=t.touches[0].clientX,e.controlCoordinates.pointerOffsetY=t.touches[0].clientY,e.controlCoordinates.touchCount=t.touches.length,e.controlCoordinates.touchmoveCount++,e.controlCoordinates.touchCount>1?(e.controlCoordinates.pointerOffsetX2=t.touches[1].clientX,e.controlCoordinates.pointerOffsetY2=t.touches[1].clientY,e.controlCoordinates.targetPinchDistance=Math.sqrt((e.controlCoordinates.pointerOffsetX-e.controlCoordinates.pointerOffsetX2)*(e.controlCoordinates.pointerOffsetX-e.controlCoordinates.pointerOffsetX2)+(e.controlCoordinates.pointerOffsetY-e.controlCoordinates.pointerOffsetY2)*(e.controlCoordinates.pointerOffsetY-e.controlCoordinates.pointerOffsetY2)),null===e.controlCoordinates.initialPinchDistance&&(e.controlCoordinates.initialPinchDistance=e.controlCoordinates.targetPinchDistance),Math.abs(e.controlCoordinates.initialPinchDistance-e.controlCoordinates.targetPinchDistance)>=1&&(e.controlCoordinates.targetScale=e.minMax(e.controlCoordinates.targetPinchDistance/e.controlCoordinates.initialPinchDistance*e.controlCoordinates.initialScale,1,e.options.maxZoom),e.controlCoordinates.limitOffsetX=(e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale-e.controlCoordinates.containerWidth)/2,e.controlCoordinates.limitOffsetY=(e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale-e.controlCoordinates.containerHeight)/2,e.controlCoordinates.scaleDifference=e.controlCoordinates.targetScale-e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX=e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale<=e.controlCoordinates.containerWidth?0:e.minMax(e.controlCoordinates.initialOffsetX-(e.controlCoordinates.pinchOffsetX-e.controlCoordinates.containerOffsetX-e.controlCoordinates.containerWidth/2-e.controlCoordinates.initialOffsetX)/(e.controlCoordinates.targetScale-e.controlCoordinates.scaleDifference)*e.controlCoordinates.scaleDifference,-1*e.controlCoordinates.limitOffsetX,e.controlCoordinates.limitOffsetX),e.controlCoordinates.targetOffsetY=e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale<=e.controlCoordinates.containerHeight?0:e.minMax(e.controlCoordinates.initialOffsetY-(e.controlCoordinates.pinchOffsetY-e.controlCoordinates.containerOffsetY-e.controlCoordinates.containerHeight/2-e.controlCoordinates.initialOffsetY)/(e.controlCoordinates.targetScale-e.controlCoordinates.scaleDifference)*e.controlCoordinates.scaleDifference,-1*e.controlCoordinates.limitOffsetY,e.controlCoordinates.limitOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale),e.controlCoordinates.targetScale>1&&(e.controlCoordinates.zoomed=!0,(!e.domNodes.caption.style.opacity||e.domNodes.caption.style.opacity>0)&&"none"!==e.domNodes.caption.style.display&&e.fadeOut(e.domNodes.caption,e.options.fadeSpeed)),e.controlCoordinates.initialPinchDistance=e.controlCoordinates.targetPinchDistance,e.controlCoordinates.initialScale=e.controlCoordinates.targetScale,e.controlCoordinates.initialOffsetX=e.controlCoordinates.targetOffsetX,e.controlCoordinates.initialOffsetY=e.controlCoordinates.targetOffsetY)):(e.controlCoordinates.targetScale=e.controlCoordinates.initialScale,e.controlCoordinates.limitOffsetX=(e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale-e.controlCoordinates.containerWidth)/2,e.controlCoordinates.limitOffsetY=(e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale-e.controlCoordinates.containerHeight)/2,e.controlCoordinates.targetOffsetX=e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale<=e.controlCoordinates.containerWidth?0:e.minMax(e.controlCoordinates.pointerOffsetX-(e.controlCoordinates.initialPointerOffsetX-e.controlCoordinates.initialOffsetX),-1*e.controlCoordinates.limitOffsetX,e.controlCoordinates.limitOffsetX),e.controlCoordinates.targetOffsetY=e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale<=e.controlCoordinates.containerHeight?0:e.minMax(e.controlCoordinates.pointerOffsetY-(e.controlCoordinates.initialPointerOffsetY-e.controlCoordinates.initialOffsetY),-1*e.controlCoordinates.limitOffsetY,e.controlCoordinates.limitOffsetY),Math.abs(e.controlCoordinates.targetOffsetX)===Math.abs(e.controlCoordinates.limitOffsetX)&&(e.controlCoordinates.initialOffsetX=e.controlCoordinates.targetOffsetX,e.controlCoordinates.initialPointerOffsetX=e.controlCoordinates.pointerOffsetX),Math.abs(e.controlCoordinates.targetOffsetY)===Math.abs(e.controlCoordinates.limitOffsetY)&&(e.controlCoordinates.initialOffsetY=e.controlCoordinates.targetOffsetY,e.controlCoordinates.initialPointerOffsetY=e.controlCoordinates.pointerOffsetY),e.setZoomData(e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX,e.controlCoordinates.targetOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale))}if("mousemove"===t.type&&e.controlCoordinates.mousedown){if("touchmove"==t.type)return!0;if(t.preventDefault(),!1===e.controlCoordinates.capture)return!1;e.controlCoordinates.pointerOffsetX=t.clientX,e.controlCoordinates.pointerOffsetY=t.clientY,e.controlCoordinates.targetScale=e.controlCoordinates.initialScale,e.controlCoordinates.limitOffsetX=(e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale-e.controlCoordinates.containerWidth)/2,e.controlCoordinates.limitOffsetY=(e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale-e.controlCoordinates.containerHeight)/2,e.controlCoordinates.targetOffsetX=e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale<=e.controlCoordinates.containerWidth?0:e.minMax(e.controlCoordinates.pointerOffsetX-(e.controlCoordinates.initialPointerOffsetX-e.controlCoordinates.initialOffsetX),-1*e.controlCoordinates.limitOffsetX,e.controlCoordinates.limitOffsetX),e.controlCoordinates.targetOffsetY=e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale<=e.controlCoordinates.containerHeight?0:e.minMax(e.controlCoordinates.pointerOffsetY-(e.controlCoordinates.initialPointerOffsetY-e.controlCoordinates.initialOffsetY),-1*e.controlCoordinates.limitOffsetY,e.controlCoordinates.limitOffsetY),Math.abs(e.controlCoordinates.targetOffsetX)===Math.abs(e.controlCoordinates.limitOffsetX)&&(e.controlCoordinates.initialOffsetX=e.controlCoordinates.targetOffsetX,e.controlCoordinates.initialPointerOffsetX=e.controlCoordinates.pointerOffsetX),Math.abs(e.controlCoordinates.targetOffsetY)===Math.abs(e.controlCoordinates.limitOffsetY)&&(e.controlCoordinates.initialOffsetY=e.controlCoordinates.targetOffsetY,e.controlCoordinates.initialPointerOffsetY=e.controlCoordinates.pointerOffsetY),e.setZoomData(e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX,e.controlCoordinates.targetOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale)}e.controlCoordinates.zoomed||(e.controlCoordinates.swipeEnd=t.pageX||t.touches[0].pageX,e.controlCoordinates.swipeYEnd=t.pageY||t.touches[0].pageY,e.controlCoordinates.swipeDiff=e.controlCoordinates.swipeStart-e.controlCoordinates.swipeEnd,e.controlCoordinates.swipeYDiff=e.controlCoordinates.swipeYStart-e.controlCoordinates.swipeYEnd,e.options.animationSlide&&e.slide(0,-e.controlCoordinates.swipeDiff+"px"))})),this.addEventListener(this.domNodes.image,["touchend."+this.eventNamespace,"mouseup."+this.eventNamespace,"touchcancel."+this.eventNamespace,"mouseleave."+this.eventNamespace,"pointerup","pointercancel","MSPointerUp","MSPointerCancel"],(function(t){if(e.isTouchDevice&&"touchend"===t.type&&(e.controlCoordinates.touchCount=t.touches.length,0===e.controlCoordinates.touchCount?(e.currentImage&&e.setZoomData(e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX,e.controlCoordinates.targetOffsetY),1===e.controlCoordinates.initialScale&&(e.controlCoordinates.zoomed=!1,"none"===e.domNodes.caption.style.display&&e.fadeIn(e.domNodes.caption,e.options.fadeSpeed)),e.controlCoordinates.initialPinchDistance=null,e.controlCoordinates.capture=!1):1===e.controlCoordinates.touchCount?(e.controlCoordinates.initialPointerOffsetX=t.touches[0].clientX,e.controlCoordinates.initialPointerOffsetY=t.touches[0].clientY):e.controlCoordinates.touchCount>1&&(e.controlCoordinates.initialPinchDistance=null)),e.controlCoordinates.mousedown){e.controlCoordinates.mousedown=!1;var n=!0;e.options.loop||(0===e.currentImageIndex&&e.controlCoordinates.swipeDiff<0&&(n=!1),e.currentImageIndex>=e.relatedElements.length-1&&e.controlCoordinates.swipeDiff>0&&(n=!1)),Math.abs(e.controlCoordinates.swipeDiff)>e.options.swipeTolerance&&n?e.loadImage(e.controlCoordinates.swipeDiff>0?1:-1):e.options.animationSlide&&e.slide(e.options.animationSpeed/1e3,"0px"),e.options.swipeClose&&Math.abs(e.controlCoordinates.swipeYDiff)>50&&Math.abs(e.controlCoordinates.swipeDiff)<e.options.swipeTolerance&&e.close()}})),this.addEventListener(this.domNodes.image,["dblclick"],(function(t){if(!e.isTouchDevice)return e.controlCoordinates.initialPointerOffsetX=t.clientX,e.controlCoordinates.initialPointerOffsetY=t.clientY,e.controlCoordinates.containerHeight=e.getDimensions(e.domNodes.image).height,e.controlCoordinates.containerWidth=e.getDimensions(e.domNodes.image).width,e.controlCoordinates.imgHeight=e.getDimensions(e.currentImage).height,e.controlCoordinates.imgWidth=e.getDimensions(e.currentImage).width,e.controlCoordinates.containerOffsetX=e.domNodes.image.offsetLeft,e.controlCoordinates.containerOffsetY=e.domNodes.image.offsetTop,e.currentImage.classList.add("sl-transition"),e.controlCoordinates.zoomed?(e.controlCoordinates.initialScale=1,e.setZoomData(e.controlCoordinates.initialScale,0,0),e.zoomPanElement("0px","0px",e.controlCoordinates.initialScale),e.controlCoordinates.zoomed=!1,"none"===e.domNodes.caption.style.display&&e.fadeIn(e.domNodes.caption,e.options.fadeSpeed)):(e.controlCoordinates.initialScale=e.options.doubleTapZoom,e.setZoomData(e.controlCoordinates.initialScale,0,0),e.zoomPanElement("0px","0px",e.controlCoordinates.initialScale),(!e.domNodes.caption.style.opacity||e.domNodes.caption.style.opacity>0)&&"none"!==e.domNodes.caption.style.display&&e.fadeOut(e.domNodes.caption,e.options.fadeSpeed),e.controlCoordinates.zoomed=!0),setTimeout((function(){e.currentImage&&(e.currentImage.classList.remove("sl-transition"),e.currentImage.style[e.transitionPrefix+"transform-origin"]=null)}),200),e.controlCoordinates.capture=!0,!1}))}},{key:"getDimensions",value:function(e){var t=window.getComputedStyle(e),n=e.offsetHeight,o=e.offsetWidth,i=parseFloat(t.borderTopWidth);return{height:n-parseFloat(t.borderBottomWidth)-i-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom),width:o-parseFloat(t.borderLeftWidth)-parseFloat(t.borderRightWidth)-parseFloat(t.paddingLeft)-parseFloat(t.paddingRight)}}},{key:"updateHash",value:function(){var e="pid="+(this.currentImageIndex+1),t=window.location.href.split("#")[0]+"#"+e;this.hashReseted=!1,this.pushStateSupport?window.history[this.historyHasChanges?"replaceState":"pushState"]("",document.title,t):this.historyHasChanges?window.location.replace(t):window.location.hash=e,this.historyHasChanges||(this.urlChangedOnce=!0),this.historyHasChanges=!0}},{key:"resetHash",value:function(){this.hashReseted=!0,this.urlChangedOnce?history.back():this.pushStateSupport?history.pushState("",document.title,window.location.pathname+window.location.search):window.location.hash="",clearTimeout(this.historyUpdateTimeout)}},{key:"updateURL",value:function(){clearTimeout(this.historyUpdateTimeout),this.historyHasChanges?this.historyUpdateTimeout=setTimeout(this.updateHash.bind(this),800):this.updateHash()}},{key:"setCaption",value:function(e,t){var n=this;this.options.captions&&e&&""!==e&&void 0!==e&&(this.hide(this.domNodes.caption),this.domNodes.caption.style.width=t+"px",this.domNodes.caption.innerHTML=e,this.domNodes.image.appendChild(this.domNodes.caption),setTimeout((function(){n.fadeIn(n.domNodes.caption,n.options.fadeSpeed)}),this.options.captionDelay))}},{key:"slide",value:function(e,t){if(!this.transitionCapable)return this.domNodes.image.style.left=t;this.domNodes.image.style[this.transitionPrefix+"transform"]="translateX("+t+")",this.domNodes.image.style[this.transitionPrefix+"transition"]=this.transitionPrefix+"transform "+e+"s linear"}},{key:"getRelated",value:function(e){return e&&!1!==e&&"nofollow"!==e?Array.from(this.elements).filter((function(t){return t.getAttribute("rel")===e})):this.elements}},{key:"openImage",value:function(e){var t=this;e.dispatchEvent(new Event("show."+this.eventNamespace)),this.options.disableScroll&&(this.globalScrollbarWidth=this.toggleScrollbar("hide")),this.options.htmlClass&&""!==this.options.htmlClass&&document.querySelector("html").classList.add(this.options.htmlClass),document.body.appendChild(this.domNodes.wrapper),this.domNodes.wrapper.appendChild(this.domNodes.image),this.options.overlay&&document.body.appendChild(this.domNodes.overlay),this.relatedElements=this.getRelated(e.rel),this.options.showCounter&&(1==this.relatedElements.length&&this.domNodes.wrapper.contains(this.domNodes.counter)?this.domNodes.wrapper.removeChild(this.domNodes.counter):this.relatedElements.length>1&&!this.domNodes.wrapper.contains(this.domNodes.counter)&&this.domNodes.wrapper.appendChild(this.domNodes.counter)),this.isAnimating=!0,this.currentImageIndex=this.relatedElements.indexOf(e);var n=e.getAttribute(this.options.sourceAttr);this.currentImage=document.createElement("img"),this.currentImage.style.display="none",this.currentImage.setAttribute("src",n),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,-1===this.loadedImages.indexOf(n)&&this.loadedImages.push(n),this.domNodes.image.innerHTML="",this.domNodes.image.setAttribute("style",""),this.domNodes.image.appendChild(this.currentImage),this.fadeIn(this.domNodes.overlay,this.options.fadeSpeed),this.fadeIn([this.domNodes.counter,this.domNodes.navigation,this.domNodes.closeButton],this.options.fadeSpeed),this.show(this.domNodes.spinner),this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.domNodes.counter.querySelector(".sl-total").innerHTML=this.relatedElements.length,this.adjustImage(),this.options.preloading&&this.preload(),setTimeout((function(){e.dispatchEvent(new Event("shown."+t.eventNamespace))}),this.options.animationSpeed)}},{key:"forceFocus",value:function(){var e=this;this.removeEventListener(document,"focusin."+this.eventNamespace),this.addEventListener(document,"focusin."+this.eventNamespace,(function(t){document===t.target||e.domNodes.wrapper===t.target||e.domNodes.wrapper.contains(t.target)||e.domNodes.wrapper.focus()}))}},{key:"addEventListener",value:function(e,t,n,r){e=this.wrap(e),t=this.wrap(t);var s,a=i(e);try{for(a.s();!(s=a.n()).done;){var c=s.value;c.namespaces||(c.namespaces={});var l,d=i(t);try{for(d.s();!(l=d.n()).done;){var u=l.value,h=r||!1;["touchstart","touchmove"].indexOf(u.split(".")[0])>=0&&this.isPassiveEventsSupported&&("object"===o(h)?h.passive=!0:h={passive:!0}),c.namespaces[u]=n,c.addEventListener(u.split(".")[0],n,h)}}catch(e){d.e(e)}finally{d.f()}}}catch(e){a.e(e)}finally{a.f()}}},{key:"removeEventListener",value:function(e,t){e=this.wrap(e),t=this.wrap(t);var n,o=i(e);try{for(o.s();!(n=o.n()).done;){var r,s=n.value,a=i(t);try{for(a.s();!(r=a.n()).done;){var c=r.value;s.namespaces&&s.namespaces[c]&&(s.removeEventListener(c.split(".")[0],s.namespaces[c]),delete s.namespaces[c])}}catch(e){a.e(e)}finally{a.f()}}}catch(e){o.e(e)}finally{o.f()}}},{key:"fadeOut",value:function(e,t,n){var o,r=this,s=i(e=this.wrap(e));try{for(s.s();!(o=s.n()).done;){var a=o.value;a.style.opacity=parseFloat(a)||window.getComputedStyle(a).getPropertyValue("opacity")}}catch(e){s.e(e)}finally{s.f()}this.isFadeIn=!1;var c=16.66666/(t||this.options.fadeSpeed);!function t(){var o=parseFloat(e[0].style.opacity);if((o-=c)<0){var s,a=i(e);try{for(a.s();!(s=a.n()).done;){var l=s.value;l.style.display="none",l.style.opacity=1}}catch(e){a.e(e)}finally{a.f()}n&&n.call(r,e)}else{var d,u=i(e);try{for(u.s();!(d=u.n()).done;)d.value.style.opacity=o}catch(e){u.e(e)}finally{u.f()}requestAnimationFrame(t)}}()}},{key:"fadeIn",value:function(e,t,n,o){var r,s=this,a=i(e=this.wrap(e));try{for(a.s();!(r=a.n()).done;){var c=r.value;c.style.opacity=0,c.style.display=o||"block"}}catch(e){a.e(e)}finally{a.f()}this.isFadeIn=!0;var l=parseFloat(e[0].dataset.opacityTarget||1),d=16.66666*l/(t||this.options.fadeSpeed);!function t(){var o=parseFloat(e[0].style.opacity);if((o+=d)>l){var r,a=i(e);try{for(a.s();!(r=a.n()).done;)r.value.style.opacity=l}catch(e){a.e(e)}finally{a.f()}n&&n.call(s,e)}else{var c,u=i(e);try{for(u.s();!(c=u.n()).done;)c.value.style.opacity=o}catch(e){u.e(e)}finally{u.f()}if(!s.isFadeIn)return;requestAnimationFrame(t)}}()}},{key:"hide",value:function(e){var t,n=i(e=this.wrap(e));try{for(n.s();!(t=n.n()).done;){var o=t.value;"none"!=o.style.display&&(o.dataset.initialDisplay=o.style.display),o.style.display="none"}}catch(e){n.e(e)}finally{n.f()}}},{key:"show",value:function(e,t){var n,o=i(e=this.wrap(e));try{for(o.s();!(n=o.n()).done;){var r=n.value;r.style.display=r.dataset.initialDisplay||t||"block"}}catch(e){o.e(e)}finally{o.f()}}},{key:"wrap",value:function(e){return"function"==typeof e[Symbol.iterator]&&"string"!=typeof e?e:[e]}},{key:"on",value:function(e,t){e=this.wrap(e);var n,o=i(this.elements);try{for(o.s();!(n=o.n()).done;){var r=n.value;r.fullyNamespacedEvents||(r.fullyNamespacedEvents={});var s,a=i(e);try{for(a.s();!(s=a.n()).done;){var c=s.value;r.fullyNamespacedEvents[c]=t,r.addEventListener(c,t)}}catch(e){a.e(e)}finally{a.f()}}}catch(e){o.e(e)}finally{o.f()}return this}},{key:"off",value:function(e){e=this.wrap(e);var t,n=i(this.elements);try{for(n.s();!(t=n.n()).done;){var o,r=t.value,s=i(e);try{for(s.s();!(o=s.n()).done;){var a=o.value;void 0!==r.fullyNamespacedEvents&&a in r.fullyNamespacedEvents&&r.removeEventListener(a,r.fullyNamespacedEvents[a])}}catch(e){s.e(e)}finally{s.f()}}}catch(e){n.e(e)}finally{n.f()}return this}},{key:"open",value:function(e){e=e||this.elements[0],"undefined"!=typeof jQuery&&e instanceof jQuery&&(e=e.get(0)),this.initialImageIndex=this.elements.indexOf(e),this.initialImageIndex>-1&&this.openImage(e)}},{key:"next",value:function(){this.loadImage(1)}},{key:"prev",value:function(){this.loadImage(-1)}},{key:"getLighboxData",value:function(){return{currentImageIndex:this.currentImageIndex,currentImage:this.currentImage,globalScrollbarWidth:this.globalScrollbarWidth}}},{key:"destroy",value:function(){this.off(["close."+this.eventNamespace,"closed."+this.eventNamespace,"nextImageLoaded."+this.eventNamespace,"prevImageLoaded."+this.eventNamespace,"change."+this.eventNamespace,"nextDone."+this.eventNamespace,"prevDone."+this.eventNamespace,"error."+this.eventNamespace,"changed."+this.eventNamespace,"next."+this.eventNamespace,"prev."+this.eventNamespace,"show."+this.eventNamespace,"shown."+this.eventNamespace]),this.removeEventListener(this.elements,"click."+this.eventNamespace),this.removeEventListener(document,"focusin."+this.eventNamespace),this.removeEventListener(document.body,"contextmenu."+this.eventNamespace),this.removeEventListener(document.body,"keyup."+this.eventNamespace),this.removeEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace),this.removeEventListener(this.domNodes.closeButton,"click."+this.eventNamespace),this.removeEventListener(window,"resize."+this.eventNamespace),this.removeEventListener(window,"hashchange."+this.eventNamespace),this.close(),this.isOpen&&(document.body.removeChild(this.domNodes.wrapper),document.body.removeChild(this.domNodes.overlay)),this.elements=null}},{key:"refresh",value:function(){if(!this.initialSelector)throw"refreshing only works when you initialize using a selector!";var e=this.options,t=this.initialSelector;return this.destroy(),this.constructor(t,e),this}}],n&&s(t.prototype,n),r&&s(t,r),e}(),l=c;e.exports.default=l,n.SimpleLightbox=c})),r.register("92mEW",(function(e,t){var n={};!function e(t,n,o,i){var r=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function s(){}function a(e){var o=n.exports.Promise,i=void 0!==o?o:t.Promise;return"function"==typeof i?new i(e):(e(s,s),null)}var c,l,d,u,h,f,p,m,g,y=(d=Math.floor(1e3/60),u={},h=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(c=function(e){var t=Math.random();return u[t]=requestAnimationFrame((function n(o){h===o||h+d-1<o?(h=o,delete u[t],e()):u[t]=requestAnimationFrame(n)})),t},l=function(e){u[e]&&cancelAnimationFrame(u[e])}):(c=function(e){return setTimeout(e,d)},l=function(e){return clearTimeout(e)}),{frame:c,cancel:l}),v=(m={},function(){if(f)return f;if(!o&&r){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{f=new Worker(URL.createObjectURL(new Blob([t])))}catch(e){return"function"==typeof console.warn&&console.warn("🎊 Could not load worker",e),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(n,o,i){if(p)return t(n,null),p;var r=Math.random().toString(36).slice(2);return p=a((function(o){function s(t){t.data.callback===r&&(delete m[r],e.removeEventListener("message",s),p=null,i(),o())}e.addEventListener("message",s),t(n,r),m[r]=s.bind(null,{data:{callback:r}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),m)m[t](),delete m[t]}}(f)}return f}),b={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function w(e,t,n){return function(e,t){return t?t(e):e}(e&&null!=e[t]?e[t]:b[t],n)}function k(e){return e<0?0:Math.floor(e)}function I(e){return parseInt(e,16)}function E(e){return e.map(C)}function C(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:I(t.substring(0,2)),g:I(t.substring(2,4)),b:I(t.substring(4,6))}}function _(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function S(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function N(e,t,n,r,s){var c,l,d=t.slice(),u=e.getContext("2d"),h=a((function(t){function a(){c=l=null,u.clearRect(0,0,r.width,r.height),s(),t()}c=y.frame((function t(){!o||r.width===i.width&&r.height===i.height||(r.width=e.width=i.width,r.height=e.height=i.height),r.width||r.height||(n(e),r.width=e.width,r.height=e.height),u.clearRect(0,0,r.width,r.height),d=d.filter((function(e){return function(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var n=t.tick++/t.totalTicks,o=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,r=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;return e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),"circle"===t.shape?e.ellipse?e.ellipse(t.x,t.y,Math.abs(r-o)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,n,o,i,r,s,a,c){e.save(),e.translate(t,n),e.rotate(r),e.scale(o,i),e.arc(0,0,1,s,a,c),e.restore()}(e,t.x,t.y,Math.abs(r-o)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):(e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(r),Math.floor(s)),e.lineTo(Math.floor(o),Math.floor(t.wobbleY))),e.closePath(),e.fill(),t.tick<t.totalTicks}(u,e)})),d.length?c=y.frame(t):a()})),l=a}));return{addFettis:function(e){return d=d.concat(e),h},canvas:e,promise:h,reset:function(){c&&y.cancel(c),l&&l()}}}function x(e,n){var o,i=!e,s=!!w(n||{},"resize"),c=w(n,"disableForReducedMotion",Boolean),l=r&&!!w(n||{},"useWorker")?v():null,d=i?_:S,u=!(!e||!l)&&!!e.__confetti_initialized,h="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function f(t,n,i){for(var r,s,a,c,l,u=w(t,"particleCount",k),h=w(t,"angle",Number),f=w(t,"spread",Number),p=w(t,"startVelocity",Number),m=w(t,"decay",Number),g=w(t,"gravity",Number),y=w(t,"drift",Number),v=w(t,"colors",E),b=w(t,"ticks",Number),I=w(t,"shapes"),C=w(t,"scalar"),_=function(e){var t=w(e,"origin",Object);return t.x=w(t,"x",Number),t.y=w(t,"y",Number),t}(t),S=u,x=[],T=e.width*_.x,O=e.height*_.y;S--;)x.push((r={x:T,y:O,angle:h,spread:f,startVelocity:p,color:v[S%v.length],shape:I[(c=0,l=I.length,Math.floor(Math.random()*(l-c))+c)],ticks:b,decay:m,gravity:g,drift:y,scalar:C},s=void 0,a=void 0,s=r.angle*(Math.PI/180),a=r.spread*(Math.PI/180),{x:r.x,y:r.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*r.startVelocity+Math.random()*r.startVelocity,angle2D:-s+(.5*a-Math.random()*a),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*r.gravity,ovalScalar:.6,scalar:r.scalar}));return o?o.addFettis(x):(o=N(e,x,d,n,i)).promise}function p(n){var r=c||w(n,"disableForReducedMotion",Boolean),p=w(n,"zIndex",Number);if(r&&h)return a((function(e){e()}));i&&o?e=o.canvas:i&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(p),document.body.appendChild(e)),s&&!u&&d(e);var m={width:e.width,height:e.height};function g(){if(l){var t={getBoundingClientRect:function(){if(!i)return e.getBoundingClientRect()}};return d(t),void l.postMessage({resize:{width:t.width,height:t.height}})}m.width=m.height=null}function y(){o=null,s&&t.removeEventListener("resize",g),i&&e&&(document.body.removeChild(e),e=null,u=!1)}return l&&!u&&l.init(e),u=!0,l&&(e.__confetti_initialized=!0),s&&t.addEventListener("resize",g,!1),l?l.fire(n,m,y):f(n,m,y)}return p.reset=function(){l&&l.reset(),o&&o.reset()},p}function T(){return g||(g=x(null,{useWorker:!0,resize:!0})),g}n.exports=function(){return T().apply(this,arguments)},n.exports.reset=function(){T().reset()},n.exports.create=x}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),n,!1);n.exports.create})),r("krGWQ"),r("7d4XR"),r("4sFHQ"),r("krGWQ"),r("bp6Nq"),r("2sH7u"),r("2sH7u"),r("2sH7u"),window.addEventListener("load",(function(){document.querySelector(".toggler");const e=document.querySelector(".theme-btn"),t=document.documentElement,n=localStorage.getItem("user-theme");let o;window.matchMedia&&(o=window.matchMedia("(prefers-color-scheme: dark)").matches?"light":"dark");window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>{!n&&i()})),e&&e.addEventListener("click",(function(e){i(!0)}));function i(e=!1){let n,o=t.classList.contains("light")?"light":"dark";"light"===o?n="dark":"dark"===o&&(n="light"),t.classList.remove(o),t.classList.add(n),e&&localStorage.setItem("user-theme",n)}n?t.classList.add(n):t.classList.add(o)})),(d=r("iQIUW")).Notify.init({position:"center-top",timeout:3e3,distance:"15px",width:"300px",fontSize:"14px",cssAnimationStyle:"from-top",cssAnimationDuration:600,failure:{background:"rgba(0,0,0,0.7)",textColor:"#FF6B08",notiflixIconColor:"rgba(200,0,0,0.4)"},success:{background:"rgba(0,0,0,0.7)",textColor:"#32c682",notiflixIconColor:"rgba(50,200,130,0.4)"}}),r("l09yf"),r("k0Gxw"),r("9rsbQ"),r("2sH7u");var s=r("jGZdM"),a=r("7d4XR"),c=r("krGWQ"),l={};l=function e(t,n,o){function i(s,a){if(!n[s]){if(!t[s]){var c=void 0;if(!a&&c)return c(s,!0);if(r)return r(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[s]={exports:{}};t[s][0].call(d.exports,(function(e){return i(t[s][1][e]||e)}),d,d.exports,e,t,n,o)}return n[s].exports}for(var r=void 0,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},i=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},r=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=r,n.create=function(e,t){var n=function(e,t){var n=o('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return r.appendChild(e)}));var s=i(r,"IMG"),a=i(r,"VIDEO"),c=i(r,"IFRAME");return!0===s&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===c&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),s=function(e){return!1!==t.onClose(a)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(a)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&s()}));var a={element:function(){return n},visible:function(){return r(n)},show:function(e){return!1!==t.onShow(a)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(a)}))},close:s};return a}},{}]},{},[1])(1);var d=r("iQIUW");function u({id:e,poster_path:t,title:n,vote_average:o,vote_count:i,popularity:r,original_title:s,genres:a,overview:c},l){0!==a.length&&h(a);return`\n  <div class='modal'>\n  <button class="close-modal"></button>\n  <section class="modal-rendered">\n    <div class="card-div"\n      ><img\n        class="movie-poster"\n        src="${null===t?"https://stringfixer.com/files/951711496.jpg":`https://image.tmdb.org/t/p/w500/${t}`}"\n        alt="${n}"\n        loading="lazy"\n        data-video='${l}'\n    /></div>\n\n    <div class="info-modal">\n      <h2 class="card-title">${n.toUpperCase()}</h2>\n      \n      <table class="info-block">\n        <tbody>\n          <tr>\n            <td data-lang='votes' class="list-keys">Vote / Votes</td>\n            <td class="list-values">\n              <span class="vote-span">${o.toFixed(1)}</span> / ${i}\n            </td>\n          </tr>\n          <tr>\n            <td data-lang='popularity' class="list-keys">Popularity</td>\n            <td class="list-values">${r.toFixed(1)}</td>\n          </tr>\n          <tr>\n            <td data-lang='title' class="list-keys">Original Title</td>\n            <td class="list-values">${s.toUpperCase()}</td>\n          </tr>\n          <tr>\n            <td data-lang='genres' class="list-keys">Genres</td>\n            <td class="list-values">${h(a)}</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <p data-lang='about' class="info-about">About</p>\n      <p class="info-overview">${c}</p>\n      <div class="buttons">\n        <button data-lang='watched' class="button-watched" data-movieId='${e}'>Add to watched</button>\n        <button data-lang='queue' class="button-queue" data-movieId='${e}'>Add to queue</button>\n      </div>\n    </div>\n  </section>\n  </div>`}function h(e){let t=[];return e.forEach((e=>{t.push(e.name)})),t.join(", ")}var f=r("bp6Nq"),p=r("iGXQY"),m=r("k0Gxw");const g=new(0,s.default),y={onShow:function(e){e.element().querySelector(".close-modal").onclick=e.close},onClose:()=>{window.removeEventListener("keydown",k)}};let v,b;c.refs.mainMarkup.addEventListener("click",(async function(e){var t;e.preventDefault();const n=null===(t=e.path.find((e=>"movie-card"===e.className)))||void 0===t?void 0:t.id;if(!n)return;a.loadAnimationAction.classList.remove("is-hiden"),b=await g.getMovieById(n,w);const o=await g.getMovieByIdvideos(n);let i;i=0===o.results.length?void 0:o.results.find((e=>e.name.includes("Trailer")))?o.results.find((e=>e.name.includes("Trailer"))).key:o.results[0].key;const r=u(b,i);v=l.create(r,y),v.show(),window.addEventListener("keydown",k),(0,m.modalTranslate)(),function(e){E=document.querySelector(".button-watched"),_("watched",e)?(A("watched"),E.addEventListener("click",S)):E.addEventListener("click",T);C=document.querySelector(".button-queue"),_("queue",e)?(A("queue"),C.addEventListener("click",N)):C.addEventListener("click",O);document.querySelector(".movie-poster").addEventListener("click",I)}(n),a.loadAnimationAction.classList.add("is-hiden")}));const w=c.refs.selectLang.value;function k(e){"Escape"===e.code&&v.close()}function I(e){"undefined"===e.target.dataset.video?("#en"===window.location.hash&&d.Notify.failure("There is no video in database"),"#uk"===window.location.hash&&d.Notify.failure("На жаль, У базі немає відео.")):l.create(`\n      <iframe src="https://www.youtube.com/embed/${e.target.dataset.video}" width="80%" height="70%" frameborder="0"></iframe>\n  `).show()}let E,C;function _(e,t){return(null!==localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):[]).some((e=>(null==e?void 0:e.id)===Number(t)))}function S(e){x(e,"watched"),c.refs.watchedBtn.classList.contains("selected")&&(0,p.onWatchedBtnClick)(),E.removeEventListener("click",S),E.addEventListener("click",T)}function N(e){x(e,"queue"),c.refs.queueBtn.classList.contains("selected")&&(0,f.onQueueBtnClick)(),C.removeEventListener("click",N),C.addEventListener("click",O)}function x(e,t){let n=JSON.parse(localStorage.getItem(t)),o=n.findIndex((t=>t.id===Number(e.target.dataset.movieid)));n.splice(o,1),localStorage.setItem(t,JSON.stringify(n)),A(t),"#en"===window.location.hash&&d.Notify.failure(`The movie successfully has been removed from ${t}`),"#uk"===window.location.hash&&d.Notify.failure("Фільм успішно видалено з ${key}")}function T(e){L(e,"watched"),E.addEventListener("click",S),E.removeEventListener("click",T)}function O(e){L(e,"queue"),C.addEventListener("click",N),C.removeEventListener("click",O)}function L(e,t){A(t);let n=null!==localStorage.getItem(t)?JSON.parse(localStorage.getItem(t)):[];n.push(b),localStorage.setItem(t,JSON.stringify(n)),"#en"===window.location.hash&&d.Notify.success(`The movie successfully has been added to ${t}`),"#uk"===window.location.hash&&d.Notify.success(`Фільм успішно додано до ${t}`)}function A(e){let t=document.querySelector(`.button-${e}`);switch(t.classList.toggle("already-added"),window.location.hash){case"#en":t.textContent===`Add to ${e}`?t.textContent=`Remove from ${e}`:t.textContent=`Add to ${e}`;break;case"#uk":e="watched"===e?"переглянутих":"черги",t.textContent===`Додати до ${e}`?t.textContent=`Видалити з ${e}`:t.textContent=`Додати до ${e}`}}r("iGXQY"),r("bp6Nq");c=r("krGWQ");const R=()=>document.documentElement||document.body;document.onscroll=()=>{const e=R().scrollTop/(R().scrollHeight-R().clientHeight)*100;c.refs.pageProgressBar.style.height=`${e}%`,R().scrollTop>300?c.refs.backToTopBtn.classList.remove("is-hidden"):c.refs.backToTopBtn.classList.add("is-hidden")},c.refs.backToTopBtn.addEventListener("click",(()=>{document.body.scrollIntoView({behavior:"smooth"})})),r("8q4ZX"),r("kSHYk"),r("2nhTy");const P=document.querySelector(".hour-hand"),D=document.querySelector(".min-hand"),M=document.querySelector(".second-hand"),B=(e,t)=>e.style.transition=90===t?"none":null;!function e(){const t=new Date,n=t.getHours(),o=t.getMinutes(),i=t.getSeconds(),r=n/12*360+o/60*30+90,s=o/60*360+i/60*6+90,a=i/60*360+90;B(P,r),B(D,s),B(M,a),P.style.transform=`rotate(${r}deg)`,D.style.transform=`rotate(${s}deg)`,M.style.transform=`rotate(${a}deg)`,setTimeout((()=>requestAnimationFrame(e)),1e3)}();c=r("krGWQ"),m=r("k0Gxw");var U=r("l09yf");const j=()=>{c.refs.loginForm.classList.toggle("is-hidden"),c.refs.registerForm.classList.toggle("is-hidden")},F=()=>{c.refs.loginBackdrop.classList.toggle("is-hidden"),window.removeEventListener("keydown",H)},H=e=>{"Escape"===e.code&&F()};switch(window.location.hash){case"#en":document.querySelector("input[data-lang='emailPlaceholder']").placeholder=U.languageTranslate.emailPlaceholder.en,document.querySelector("input[data-lang='passwordPlaceholder']").placeholder=U.languageTranslate.passwordPlaceholder.en,document.querySelector("input[data-lang='repeatPlaceholder']").placeholder=U.languageTranslate.repeatPlaceholder.en;break;case"#uk":document.querySelector("input[data-lang='emailPlaceholder']").placeholder=U.languageTranslate.emailPlaceholder.uk,document.querySelector("input[data-lang='passwordPlaceholder']").placeholder=U.languageTranslate.passwordPlaceholder.uk,document.querySelector("input[data-lang='repeatPlaceholder']").placeholder=U.languageTranslate.repeatPlaceholder.uk}(0,m.modalTranslate)(),c.refs.modalBtn[0].addEventListener("click",j),c.refs.modalBtn[1].addEventListener("click",j),c.refs.openLoginBtn.addEventListener("click",(()=>{c.refs.loginBackdrop.classList.toggle("is-hidden"),window.addEventListener("keydown",H)})),c.refs.closeLoginBtn.addEventListener("click",F),c.refs.loginBackdrop.addEventListener("click",(e=>{e.target===e.currentTarget&&F()}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const W=function(e){const t=[];let n=0;for(let o=0;o<e.length;o++){let i=e.charCodeAt(o);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&o+1<e.length&&56320==(64512&e.charCodeAt(o+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++o)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},q={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let t=0;t<e.length;t+=3){const i=e[t],r=t+1<e.length,s=r?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=i>>2,d=(3&i)<<4|s>>4;let u=(15&s)<<2|c>>6,h=63&c;a||(h=64,r||(u=64)),o.push(n[l],n[d],n[u],n[h])}return o.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(W(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,o=0;for(;n<e.length;){const i=e[n++];if(i<128)t[o++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[o++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[o++]=String.fromCharCode(55296+(r>>10)),t[o++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],s=e[n++];t[o++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==r||null==s||null==a)throw Error();const c=i<<2|r>>4;if(o.push(c),64!==s){const e=r<<4&240|s>>2;if(o.push(e),64!==a){const e=s<<6&192|a;o.push(e)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},$=function(e){return function(e){const t=W(e);return q.encodeByteArray(t,!0)}(e).replace(/\./g,"")},z=function(e){try{return q.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function X(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function G(){const e=V();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}class J extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,J.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Q.prototype.create)}}class Q{create(e,...t){const n=t[0]||{},o=`${this.service}/${e}`,i=this.errors[e],r=i?function(e,t){return e.replace(K,((e,n)=>{const o=t[n];return null!=o?String(o):`<${n}?>`}))}(i,n):"Error",s=`${this.serviceName}: ${r} (${o}).`;return new J(o,s,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const K=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ee(e,t){if(e===t)return!0;const n=Object.keys(e),o=Object.keys(t);for(const i of n){if(!o.includes(i))return!1;const n=e[i],r=t[i];if(te(n)&&te(r)){if(!ee(n,r))return!1}else if(n!==r)return!1}for(const e of o)if(!n.includes(e))return!1;return!0}function te(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ne(e){const t=[];for(const[n,o]of Object.entries(e))Array.isArray(o)?o.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(o));return t.length?"&"+t.join("&"):""}function oe(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,o]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(o)}})),t}function ie(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e,t){const n=new se(e,t);return n.subscribe.bind(n)}class se{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let o;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");o=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===o.next&&(o.next=ae),void 0===o.error&&(o.error=ae),void 0===o.complete&&(o.complete=ae);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch(e){}})),this.observers.push(o),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function ae(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ce(e){return e&&e._delegate?e._delegate:e}class le{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Y;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),o=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(o)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(o)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(o)}return o}onInit(e,t){var n;const o=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(o))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(o,i);const r=this.instances.get(o);return r&&e(r,o),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const o of n)try{o(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(o=e,"[DEFAULT]"===o?void 0:o),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var o;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class ue{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new de(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=[];var fe,pe;(pe=fe||(fe={}))[pe.DEBUG=0]="DEBUG",pe[pe.VERBOSE=1]="VERBOSE",pe[pe.INFO=2]="INFO",pe[pe.WARN=3]="WARN",pe[pe.ERROR=4]="ERROR",pe[pe.SILENT=5]="SILENT";const me={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},ge=fe.INFO,ye={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},ve=(e,t,...n)=>{if(t<e.logLevel)return;const o=(new Date).toISOString(),i=ye[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${o}]  ${e.name}:`,...n)};class be{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?me[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}constructor(e){this.name=e,this._logLevel=ge,this._logHandler=ve,this._userLogHandler=null,he.push(this)}}let we,ke;const Ie=new WeakMap,Ee=new WeakMap,Ce=new WeakMap,_e=new WeakMap,Se=new WeakMap;let Ne={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ee.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ce.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Oe(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function xe(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ke||(ke=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Le(this),t),Oe(Ie.get(this))}:function(...t){return Oe(e.apply(Le(this),t))}:function(t,...n){const o=e.call(Le(this),t,...n);return Ce.set(o,t.sort?t.sort():[t]),Oe(o)}}function Te(e){return"function"==typeof e?xe(e):(e instanceof IDBTransaction&&function(e){if(Ee.has(e))return;const t=new Promise(((t,n)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",r),e.removeEventListener("abort",r)},i=()=>{t(),o()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",r),e.addEventListener("abort",r)}));Ee.set(e,t)}(e),t=e,(we||(we=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Ne):e);var t}function Oe(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",r)},i=()=>{t(Oe(e.result)),o()},r=()=>{n(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&Ie.set(t,e)})).catch((()=>{})),Se.set(t,e),t}(e);if(_e.has(e))return _e.get(e);const t=Te(e);return t!==e&&(_e.set(e,t),Se.set(t,e)),t}const Le=e=>Se.get(e);function Ae(e,t,{blocked:n,upgrade:o,blocking:i,terminated:r}={}){const s=indexedDB.open(e,t),a=Oe(s);return o&&s.addEventListener("upgradeneeded",(e=>{o(Oe(s.result),e.oldVersion,e.newVersion,Oe(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{r&&e.addEventListener("close",(()=>r())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const Re=["get","getKey","getAll","getAllKeys","count"],Pe=["put","add","delete","clear"],De=new Map;function Me(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(De.get(t))return De.get(t);const n=t.replace(/FromIndex$/,""),o=t!==n,i=Pe.includes(n);if(!(n in(o?IDBIndex:IDBObjectStore).prototype)||!i&&!Re.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,i?"readwrite":"readonly");let s=r.store;return o&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&r.done]))[0]};return De.set(t,r),r}Ne=(e=>({...e,get:(t,n,o)=>Me(t,n)||e.get(t,n,o),has:(t,n)=>!!Me(t,n)||e.has(t,n)}))(Ne);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Ue=new be("@firebase/app"),je={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Fe=new Map,He=new Map;function We(e,t){try{e.container.addComponent(t)}catch(n){Ue.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function qe(e){const t=e.name;if(He.has(t))return Ue.debug(`There were multiple attempts to register component ${t}.`),!1;He.set(t,e);for(const t of Fe.values())We(t,e);return!0}function $e(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ze=new Q("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ze.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new le("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(e="[DEFAULT]"){const t=Fe.get(e);if(!t)throw ze.create("no-app",{appName:e});return t}function Xe(e,t,n){var o;let i=null!==(o=je[e])&&void 0!==o?o:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),s=t.match(/\s|\//);if(r||s){const e=[`Unable to register library "${i}" with version "${t}":`];return r&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ue.warn(e.join(" "))}qe(new le(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let Ge=null;function Je(){return Ge||(Ge=Ae("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw ze.create("storage-open",{originalErrorMessage:e.message})}))),Ge}async function Qe(e,t){var n;try{const n=(await Je()).transaction("firebase-heartbeat-store","readwrite"),o=n.objectStore("firebase-heartbeat-store");return await o.put(t,Ke(e)),n.done}catch(e){throw ze.create("storage-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message})}}function Ke(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=et();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=et(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let o=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),nt(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),nt(n)>t){n.pop();break}o=o.slice(1)}return{heartbeatsToSend:n,unsentEntries:o}}(this._heartbeatsCache.heartbeats),o=$(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function et(){return(new Date).toISOString().substring(0,10)}class tt{async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const o="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(o);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(o),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await Je()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Ke(e))}catch(e){throw ze.create("storage-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Qe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Qe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function nt(e){return $(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;ot="",qe(new le("platform-logger",(e=>new Be(e)),"PRIVATE")),qe(new le("heartbeat",(e=>new Ze(e)),"PRIVATE")),Xe("@firebase/app","0.7.28",ot),Xe("@firebase/app","0.7.28","esm2017"),Xe("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Xe("firebase","9.9.0","app");!function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),o=n.name;if("string"!=typeof o||!o)throw ze.create("bad-app-name",{appName:String(o)});const i=Fe.get(o);if(i){if(ee(e,i.options)&&ee(n,i.config))return i;throw ze.create("duplicate-app",{appName:o})}const r=new ue(o);for(const e of He.values())r.addComponent(e);const s=new Ye(e,n,r);Fe.set(o,s)}({apiKey:"AIzaSyD_OkrpM246-n_c0FxZ1wcPolSAEgZe7pI",authDomain:"filmoteka-71560.firebaseapp.com",projectId:"filmoteka-71560",storageBucket:"filmoteka-71560.appspot.com",messagingSenderId:"722832228567",appId:"1:722832228567:web:ad0899ecef787ada393092"});function it(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}Object.create;Object.create;function rt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const st=rt,at=new Q("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ct=new be("@firebase/auth");function lt(e,...t){ct.logLevel<=fe.ERROR&&ct.error(`Auth (9.9.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(e,...t){throw ft(e,...t)}function ut(e,...t){return ft(e,...t)}function ht(e,t,n){const o=Object.assign(Object.assign({},st()),{[t]:n});return new Q("auth","Firebase",o).create(t,{appName:e.name})}function ft(e,...t){if("string"!=typeof e){const n=t[0],o=[...t.slice(1)];return o[0]&&(o[0].appName=e.name),e._errorFactory.create(n,...o)}return at.create(e,...t)}function pt(e,t,...n){if(!e)throw ft(t,...n)}function mt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw lt(t),new Error(t)}function gt(e,t){e||mt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new Map;function vt(e){gt(e instanceof Function,"Expected a class definition");let t=yt.get(e);return t?(gt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,yt.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function wt(){return"http:"===kt()||"https:"===kt()}function kt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(wt()||X()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et{get(){return It()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,gt(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(V())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e,t){gt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Nt=new Et(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Tt(e,t,n,o,i={}){return Ot(e,i,(async()=>{let i={},r={};o&&("GET"===t?r=o:i={body:JSON.stringify(o)});const s=ne(Object.assign({key:e.config.apiKey},r)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),_t.fetch()(At(e,e.config.apiHost,n,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Ot(e,t,n){e._canInitEmulator=!1;const o=Object.assign(Object.assign({},St),t);try{const t=new Rt(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await i.json();if("needConfirmation"in r)throw Pt(e,"account-exists-with-different-credential",r);if(i.ok&&!("errorMessage"in r))return r;{const t=i.ok?r.errorMessage:r.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Pt(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw Pt(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw Pt(e,"user-disabled",r);const a=o[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw ht(e,a,s);dt(e,a)}}catch(t){if(t instanceof J)throw t;dt(e,"network-request-failed")}}async function Lt(e,t,n,o,i={}){const r=await Tt(e,t,n,o,i);return"mfaPendingCredential"in r&&dt(e,"multi-factor-auth-required",{_serverResponse:r}),r}function At(e,t,n,o){const i=`${t}${n}?${o}`;return e.config.emulator?Ct(e.config,i):`${e.config.apiScheme}://${i}`}class Rt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(ut(this.auth,"network-request-failed"))),Nt.get())}))}}function Pt(e,t,n){const o={appName:e.name};n.email&&(o.email=n.email),n.phoneNumber&&(o.phoneNumber=n.phoneNumber);const i=ut(e,t,o);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(e){return 1e3*Number(e)}function Bt(e){var t;const[n,o,i]=e.split(".");if(void 0===n||void 0===o||void 0===i)return lt("JWT malformed, contained fewer than 3 sections"),null;try{const e=z(o);return e?JSON.parse(e):(lt("Failed to decode base64 JWT payload"),null)}catch(e){return lt("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ut(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof J&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class jt{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{_initializeTime(){this.lastSignInTime=Dt(this.lastLoginAt),this.creationTime=Dt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ht(e){var t;const n=e.auth,o=await e.getIdToken(),i=await Ut(e,async function(e,t){return Tt(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:o}));pt(null==i?void 0:i.users.length,n,"internal-error");const r=i.users[0];e._notifyReloadListener(r);const s=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=it(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=s,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const d=e.isAnonymous,u=!(e.email&&r.passwordHash||(null==a?void 0:a.length)),h=!!d&&u,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ft(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pt(e.idToken,"internal-error"),pt(void 0!==e.idToken,"internal-error"),pt(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Bt(e);return pt(t,"internal-error"),pt(void 0!==t.exp,"internal-error"),pt(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return pt(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:o,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Ot(e,{},(async()=>{const n=ne({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:i}=e.config,r=At(e,o,"/v1/token",`key=${i}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",_t.fetch()(r,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,o,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:o,expirationTime:i}=t,r=new Wt;return n&&(pt("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),o&&(pt("string"==typeof o,"internal-error",{appName:e}),r.accessToken=o),i&&(pt("number"==typeof i,"internal-error",{appName:e}),r.expirationTime=i),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wt,this.toJSON())}_performRefresh(){return mt("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(e,t){pt("string"==typeof e||void 0===e,"internal-error",{appName:t})}class $t{async getIdToken(e){const t=await Ut(this,this.stsTokenManager.getToken(this.auth,e));return pt(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=ce(e),o=await n.getIdToken(t),i=Bt(o);pt(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r="object"==typeof i.firebase?i.firebase:void 0,s=null==r?void 0:r.sign_in_provider;return{claims:i,token:o,authTime:Dt(Mt(i.auth_time)),issuedAtTime:Dt(Mt(i.iat)),expirationTime:Dt(Mt(i.exp)),signInProvider:s||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=ce(e);await Ht(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(pt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new $t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){pt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ht(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ut(this,async function(e,t){return Tt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,o,i,r,s,a,c,l;const d=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(o=t.email)&&void 0!==o?o:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(r=t.photoURL)&&void 0!==r?r:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:k,stsTokenManager:I}=t;pt(v&&I,e,"internal-error");const E=Wt.fromJSON(this.name,I);pt("string"==typeof v,e,"internal-error"),qt(d,e.name),qt(u,e.name),pt("boolean"==typeof b,e,"internal-error"),pt("boolean"==typeof w,e,"internal-error"),qt(h,e.name),qt(f,e.name),qt(p,e.name),qt(m,e.name),qt(g,e.name),qt(y,e.name);const C=new $t({uid:v,auth:e,email:u,emailVerified:b,displayName:d,isAnonymous:w,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return k&&Array.isArray(k)&&(C.providerData=k.map((e=>Object.assign({},e)))),m&&(C._redirectEventId=m),C}static async _fromIdTokenResponse(e,t,n=!1){const o=new Wt;o.updateFromServerResponse(t);const i=new $t({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:n});return await Ht(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:o}=e,i=it(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ft(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}zt.type="NONE";const Yt=zt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e,t,n){return`firebase:${e}:${t}:${n}`}class Xt{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$t._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Xt(vt(Yt),e,n);const o=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=o[0]||vt(Yt);const r=Vt(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(r);if(t){const o=$t._fromJSON(e,t);n!==i&&(s=o),i=n;break}}catch(e){}const a=o.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(r,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(r)}catch(e){}}))),new Xt(i,e,n)):new Xt(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:o,name:i}=this.auth;this.fullUserKey=Vt(this.userKey,o.apiKey,i),this.fullPersistenceKey=Vt("persistence",o.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Zt(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Jt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(tn(t))return"Blackberry";if(nn(t))return"Webos";if(Qt(t))return"Safari";if((t.includes("chrome/")||Kt(t))&&!t.includes("edge/"))return"Chrome";if(en(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Jt(e=V()){return/firefox\//i.test(e)}function Qt(e=V()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Kt(e=V()){return/crios\//i.test(e)}function Zt(e=V()){return/iemobile/i.test(e)}function en(e=V()){return/android/i.test(e)}function tn(e=V()){return/blackberry/i.test(e)}function nn(e=V()){return/webos/i.test(e)}function on(e=V()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function rn(){return G()&&10===document.documentMode}function sn(e=V()){return on(e)||en(e)||nn(e)||tn(e)||/windows phone/i.test(e)||Zt(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function an(e,t=[]){let n;switch(e){case"Browser":n=Gt(V());break;case"Worker":n=`${Gt(V())}-${e}`;break;default:n=e}return`${n}/JsCore/9.9.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{pushCallback(e,t){const n=t=>new Promise(((n,o)=>{try{n(e(t))}catch(e){o(e)}}));n.onAbort=t,this.queue.push(n);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vt(t)),this._initializationPromise=this.queue((async()=>{var n,o;if(!this._deleted&&(this.persistenceManager=await Xt.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(o=this.currentUser)||void 0===o?void 0:o.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let o=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==o?void 0:o._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==r||!(null==s?void 0:s.user)||(o=s.user,i=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(o)}catch(e){o=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return pt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Ht(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ce(e):null;return t&&pt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&pt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(vt(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Q("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vt(e)||this._popupRedirectResolver;pt(t,this,"argument-error"),this.redirectPersistenceManager=await Xt.create(this,[vt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,o){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return pt(r,this,"internal-error"),r.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,o):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=an(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new un(this),this.idTokenSubscription=new un(this),this.beforeStateQueue=new cn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=at,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function dn(e){return ce(e)}class un{get next(){return pt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=re((e=>this.observer=e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hn{toJSON(){return mt("not implemented")}_getIdTokenResponse(e){return mt("not implemented")}_linkToIdToken(e,t){return mt("not implemented")}_getReauthenticationResolver(e){return mt("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(e,t){return Tt(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pn extends hn{static _fromEmailAndPassword(e,t){return new pn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new pn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Lt(e,"POST","/v1/accounts:signInWithPassword",xt(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Lt(e,"POST","/v1/accounts:signInWithEmailLink",xt(e,t))}(e,{email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return fn(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Lt(e,"POST","/v1/accounts:signInWithEmailLink",xt(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,o=null){super("password",n),this._email=e,this._password=t,this._tenantId=o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(e,t){return Lt(e,"POST","/v1/accounts:signInWithIdp",xt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends hn{static _fromParams(e){const t=new gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):dt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:o}=t,i=it(t,["providerId","signInMethod"]);if(!n||!o)return null;const r=new gn(n,o);return r.idToken=i.idToken||void 0,r.accessToken=i.accessToken||void 0,r.secret=i.secret,r.nonce=i.nonce,r.pendingToken=i.pendingToken||null,r}_getIdTokenResponse(e){return mn(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,mn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mn(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ne(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn extends hn{static _fromVerification(e,t){return new vn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new vn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Lt(e,"POST","/v1/accounts:signInWithPhoneNumber",xt(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Lt(e,"POST","/v1/accounts:signInWithPhoneNumber",xt(e,t));if(n.temporaryProof)throw Pt(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Lt(e,"POST","/v1/accounts:signInWithPhoneNumber",xt(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),yn)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:o}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:o}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:o,temporaryProof:i}=e;return n||t||o||i?new vn({verificationId:t,verificationCode:n,phoneNumber:o,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{static parseLink(e){const t=function(e){const t=oe(ie(e)).link,n=t?oe(ie(t)).deep_link_id:null,o=oe(ie(e)).deep_link_id;return(o?oe(ie(o)).link:null)||o||n||t||e}(e);try{return new bn(t)}catch(e){return null}}constructor(e){var t,n,o,i,r,s;const a=oe(ie(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(o=a.mode)&&void 0!==o?o:null);pt(c&&l&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=l,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn{static credential(e,t){return pn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=bn.parseLink(t);return pt(n,"argument-error"),pn._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=wn.PROVIDER_ID}}wn.PROVIDER_ID="password",wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kn{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends kn{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class En extends In{static credential(e){return gn._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}En.FACEBOOK_SIGN_IN_METHOD="facebook.com",En.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cn extends In{static credential(e,t){return gn._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Cn.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Cn.GOOGLE_SIGN_IN_METHOD="google.com",Cn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _n extends In{static credential(e){return gn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}_n.GITHUB_SIGN_IN_METHOD="github.com",_n.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sn extends In{static credential(e,t){return gn._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Sn.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Nn(e,t){return Lt(e,"POST","/v1/accounts:signUp",xt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn.TWITTER_SIGN_IN_METHOD="twitter.com",Sn.PROVIDER_ID="twitter.com";class xn{static async _fromIdTokenResponse(e,t,n,o=!1){const i=await $t._fromIdTokenResponse(e,n,o),r=Tn(n);return new xn({user:i,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const o=Tn(n);return new xn({user:e,providerId:o,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Tn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class On extends J{static _fromErrorAndOperation(e,t,n,o){return new On(e,t,n,o)}constructor(e,t,n,o){var i;super(t.code,t.message),this.operationType=n,this.user=o,Object.setPrototypeOf(this,On.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Ln(e,t,n,o){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw On._fromErrorAndOperation(e,n,t,o);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(e,t,n=!1){const o=await Ut(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return xn._forOperation(e,"link",o)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rn(e,t,n=!1){var o;const{auth:i}=e,r="reauthenticate";try{const o=await Ut(e,Ln(i,r,t,e),n);pt(o.idToken,i,"internal-error");const s=Bt(o.idToken);pt(s,i,"internal-error");const{sub:a}=s;return pt(e.uid===a,i,"user-mismatch"),xn._forOperation(e,r,o)}catch(e){throw"auth/user-not-found"===(null===(o=e)||void 0===o?void 0:o.code)&&dt(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(e,t,n=!1){const o="signIn",i=await Ln(e,o,t),r=await xn._fromIdTokenResponse(e,o,i);return n||await e._updateCurrentUser(r.user),r}async function Dn(e,t){return Pn(dn(e),t)}async function Mn(e,t,n){const o=dn(e),i=await Nn(o,{returnSecureToken:!0,email:t,password:n}),r=await xn._fromIdTokenResponse(o,"signIn",i);return await o._updateCurrentUser(r.user),r}function Bn(e,t,n){return Dn(ce(e),wn.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Un{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Un{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),o=this.localCache[t];n!==o&&e(t,o,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(n);if(e.newValue!==o)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const o=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);rn()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,10):o()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=V();return Qt(e)||on(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=sn(),this._shouldAllowMigration=!0}}jn.type="LOCAL";const Fn=jn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Un{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Hn.type="SESSION";const Wn=Hn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qn{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new qn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:o,data:i}=t.data,r=this.handlersMap[o];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:o});const s=Array.from(r).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:o,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $n(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qn.receivers=[];class zn{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const o="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let i,r;return new Promise(((s,a)=>{const c=$n("",20);o.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:o,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(r),o.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[o.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vn(){return void 0!==Yn().WorkerGlobalScope&&"function"==typeof Yn().importScripts}class Xn{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Gn(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Jn(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Xn(e).toPromise()}(),t(await Jn()))}))}))}async function Qn(e,t,n){const o=Gn(e,!0).put({fbase_key:t,value:n});return new Xn(o).toPromise()}function Kn(e,t){const n=Gn(e,!0).delete(t);return new Xn(n).toPromise()}class Zn{async _openDb(){return this.db||(this.db=await Jn()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qn._getInstance(Vn()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new zn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jn();return await Qn(e,"__sak","1"),await Kn(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Qn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Gn(e,!1).get(t),o=await new Xn(n).toPromise();return void 0===o?null:o.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Kn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Gn(e,!1).getAll();return new Xn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:o,value:i}of e)n.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(i)&&(this.notifyListeners(o,i),t.push(o));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Zn.type="LOCAL";const eo=Zn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(e){return new Promise(((t,n)=>{const o=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,r;o.setAttribute("src",e),o.onload=t,o.onerror=e=>{const t=ut("internal-error");t.customData=e,n(t)},o.type="text/javascript",o.charset="UTF-8",(null!==(r=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==r?r:document).appendChild(o)}))}function no(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
no("rcb"),new Et(3e4,6e4);async function oo(e,t,n){var o;const i=await n.verify();try{let r;if(pt("string"==typeof i,e,"argument-error"),pt("recaptcha"===n.type,e,"argument-error"),r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){pt("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Tt(e,"POST","/v2/accounts/mfaEnrollment:start",xt(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{pt("signin"===t.type,e,"internal-error");const n=(null===(o=r.multiFactorHint)||void 0===o?void 0:o.uid)||r.multiFactorUid;pt(n,e,"missing-multi-factor-info");const s=await function(e,t){return Tt(e,"POST","/v2/accounts/mfaSignIn:start",xt(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Tt(e,"POST","/v1/accounts:sendVerificationCode",xt(e,t))}(e,{phoneNumber:r.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io{verifyPhoneNumber(e,t){return oo(this.auth,e,ce(t))}static credential(e,t){return vn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return io.credentialFromTaggedObject(t)}static credentialFromError(e){return io.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?vn._fromTokenResponse(t,n):null}constructor(e){this.providerId=io.PROVIDER_ID,this.auth=dn(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ro(e,t){return t?vt(t):(pt(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */io.PROVIDER_ID="phone",io.PHONE_SIGN_IN_METHOD="phone";class so extends hn{_getIdTokenResponse(e){return mn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function ao(e){return Pn(e.auth,new so(e),e.bypassAuthState)}function co(e){const{auth:t,user:n}=e;return pt(n,t,"internal-error"),Rn(n,new so(e),e.bypassAuthState)}async function lo(e){const{auth:t,user:n}=e;return pt(n,t,"internal-error"),An(n,new so(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:o,tenantId:i,error:r,type:s}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ao;case"linkViaPopup":case"linkViaRedirect":return lo;case"reauthViaPopup":case"reauthViaRedirect":return co;default:dt(this.auth,"internal-error")}}resolve(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,o,i=!1){this.auth=e,this.resolver=n,this.user=o,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new Et(2e3,1e4);class fo extends uo{async executeNotNull(){const e=await this.execute();return pt(e,this.auth,"internal-error"),e}async onExecution(){gt(1===this.filter.length,"Popup operations only handle one event");const e=$n();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(ut(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,ho.get())};e()}constructor(e,t,n,o,i){super(e,t,o,i),this.provider=n,this.authWindow=null,this.pollId=null,fo.currentPopupAction&&fo.currentPopupAction.cancel(),fo.currentPopupAction=this}}fo.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const po=new Map;class mo extends uo{async execute(){let e=po.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=vo(t),o=yo(e);if(!await o._isAvailable())return!1;const i="true"===await o._get(n);return await o._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}po.set(this.auth._key(),e)}return this.bypassAuthState||po.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function go(e,t){po.set(e._key(),t)}function yo(e){return vt(e._redirectPersistence)}function vo(e){return Vt("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(e,t,n=!1){const o=dn(e),i=ro(o,t),r=new mo(o,i,n),s=await r.execute();return s&&!n&&(delete s.user._redirectEventId,await o._persistUserIfCurrent(s.user),await o._setRedirectUser(null,t)),s}class wo{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Io(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Io(e)){const o=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ut(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ko(e))}saveEventToCache(e){this.cachedEventUids.add(ko(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function ko(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Io({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Eo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Co=/^https?/;async function _o(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Tt(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(So(e))return}catch(e){}dt(e,"unauthorized-domain")}function So(e){const t=bt(),{protocol:n,hostname:o}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===o?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===o}if(!Co.test(n))return!1;if(Eo.test(e))return o===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(o)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Et(3e4,6e4);function xo(){const e=Yn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let To=null;function Oo(e){return To=To||function(e){return new Promise(((t,n)=>{var o,i,r;function s(){xo(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{xo(),n(ut(e,"network-request-failed"))},timeout:No.get()})}if(null===(i=null===(o=Yn().gapi)||void 0===o?void 0:o.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=Yn().gapi)||void 0===r?void 0:r.load)){const t=no("iframefcb");return Yn()[t]=()=>{gapi.load?s():n(ut(e,"network-request-failed"))},to(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw To=null,e}))}(e),To}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new Et(5e3,15e3),Ao={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ro=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Po(e){const t=e.config;pt(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ct(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,o={apiKey:t.apiKey,appName:e.name,v:"9.9.0"},i=Ro.get(e.config.apiHost);i&&(o.eid=i);const r=e._getFrameworks();return r.length&&(o.fw=r.join(",")),`${n}?${ne(o).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Do={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Mo{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Bo(e,t,n,o=500,i=600){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-o)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Do),{width:o.toString(),height:i.toString(),top:r,left:s}),l=V().toLowerCase();n&&(a=Kt(l)?"_blank":n),Jt(l)&&(t=t||"http://localhost",c.scrollbars="yes");const d=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=V()){var t;return on(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(o)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Mo(null);const u=window.open(t||"",a,d);pt(u,e,"popup-blocked");try{u.focus()}catch(e){}return new Mo(u)}function Uo(e,t,n,o,i,r){pt(e.config.authDomain,e,"auth-domain-config-required"),pt(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:"9.9.0",eventId:i};if(t instanceof kn){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Z(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(r||{}))s[e]=t}if(t instanceof In){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Ct(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${ne(a).slice(1)}`}const jo=class{async _openPopup(e,t,n,o){var i;gt(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Bo(e,Uo(e,t,n,bt(),o),$n())}async _openRedirect(e,t,n,o){var i;return await this._originValidation(e),i=Uo(e,t,n,bt(),o),Yn().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(gt(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Oo(e),n=Yn().gapi;return pt(n,e,"internal-error"),t.open({where:document.body,url:Po(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ao,dontclear:!0},(t=>new Promise((async(n,o)=>{await t.restyle({setHideOnLeave:!1});const i=ut(e,"network-request-failed"),r=Yn().setTimeout((()=>{o(i)}),Lo.get());function s(){Yn().clearTimeout(r),n(t)}t.ping(s).then(s,(()=>{o(i)}))}))))}(e),n=new wo(e);return t.register("authEvent",(t=>{pt(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var o;const i=null===(o=null==n?void 0:n[0])||void 0===o?void 0:o.webStorageSupport;void 0!==i&&t(!!i),dt(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_o(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sn()||Qt()||on()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wn,this._completeRedirectFn=bo,this._overrideRedirectResult=go}};var Fo;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ho{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){pt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wo(e=Ve()){const t=$e(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=$e(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(ee(n.getOptions(),null!=t?t:{}))return e;dt(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:jo,persistence:[eo,Fn,Wn]})}Fo="Browser",qe(new le("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),{apiKey:i,authDomain:r}=n.options;return((e,n)=>{pt(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),pt(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const o={apiKey:i,authDomain:r,clientPlatform:Fo,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:an(Fo)},s=new ln(e,n,o);return function(e,t){const n=(null==t?void 0:t.persistence)||[],o=(Array.isArray(n)?n:[n]).map(vt);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(o,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n,o)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),qe(new le("auth-internal",(e=>{const t=dn(e.getProvider("auth").getImmediate());return new Ho(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Xe("@firebase/auth","0.20.5",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Fo)),Xe("@firebase/auth","0.20.5","esm2017");d=r("iQIUW"),c=r("krGWQ");const qo=Wo();c.refs.loginForm.addEventListener("submit",(async e=>{e.preventDefault();const{elements:{email:t,password:n}}=e.currentTarget;if(""===t.value||""===n.value)return"#en"===window.location.hash&&d.Notify.failure("Please fill in all the fields!"),void("#uk"===window.location.hash&&d.Notify.failure("Будь ласка, заповніть всі поля!"));const o=t.value,i=n.value;try{const e=(await Bn(qo,o,i)).user.email;"#en"===window.location.hash&&d.Notify.success(`You are logged in!\n            Welcome back, ${e}!`),"#uk"===window.location.hash&&d.Notify.success(`Ви увійшли в аккаунт!\n            З поверненням, ${e}!`),c.refs.loginBackdrop.classList.toggle("is-hidden")}catch(e){console.log(e.message),"Firebase: Error (auth/invalid-email)."===e.message?("#en"===window.location.hash&&d.Notify.failure("Ivalid email. Please, try again!"),"#uk"===window.location.hash&&d.Notify.failure("Невалідний email. Будь ласка, спробуйте ще раз!")):"Firebase: Error (auth/internal-error)."===e.message?("#en"===window.location.hash&&d.Notify.failure("Check if all fields are filled correctly."),"#uk"===window.location.hash&&d.Notify.failure("Перевірте, чи всі поля заповнені коректно.")):"Firebase: Error (auth/wrong-password)."===e.message?("#en"===window.location.hash&&d.Notify.failure("Wrong password. Please, try again!"),"#uk"===window.location.hash&&d.Notify.failure("Неправильний пароль. Будь ласка, спробуйте ще раз!")):"Firebase: Error (auth/user-not-found)."===e.message?("#en"===window.location.hash&&d.Notify.failure("User not found. Please, register first."),"#uk"===window.location.hash&&d.Notify.failure("Користувача не знайдено. Будь ласка, спочатку зареєструйтеся.")):("#en"===window.location.hash&&d.Notify.failure("Login error:( Try again!"),"#uk"===window.location.hash&&d.Notify.failure("Помилка входу :( Спробуйте ще раз."))}}));d=r("iQIUW"),c=r("krGWQ");const $o=Wo();c.refs.registerForm.addEventListener("submit",(async e=>{e.preventDefault();const{elements:{email:t,password:n,repeat:o}}=e.currentTarget;if(""===t.value||""===n.value||""===o.value)return"#en"===window.location.hash&&d.Notify.failure("Please fill in all the fields!"),void("#uk"===window.location.hash&&d.Notify.failure("Будь ласка, заповніть всі поля!"));const i=t.value,r=n.value;if(r===o.value)try{const e=(await Mn($o,i,r)).user.email;"#en"===window.location.hash&&d.Notify.success(`Welcome, ${e}!\n                Account successfully created.`),"#uk"===window.location.hash&&d.Notify.success(`Вітаю, ${e}!\n                Аккаунт успішно створено.`),c.refs.loginBackdrop.classList.toggle("is-hidden")}catch(e){"Firebase: Error (auth/invalid-email)."===e.message?("#en"===window.location.hash&&d.Notify.failure("Ivalid email. Please, try again!"),"#uk"===window.location.hash&&d.Notify.failure("Невалідний email. Будь ласка, спробуйте ще раз!")):"Firebase: Password should be at least 6 characters (auth/weak-password)."===e.message?("#en"===window.location.hash&&d.Notify.failure("Password should be at least 6 characters"),"#uk"===window.location.hash&&d.Notify.failure("Пароль має містити принаймні 6 знаків")):"Firebase: Error (auth/internal-error)."===e.message?("#en"===window.location.hash&&d.Notify.failure("Check if all fields are filled correctly."),"#uk"===window.location.hash&&d.Notify.failure("Перевірте, чи всі поля заповнені коректно.")):"Firebase: Error (auth/missing-email)."===e.message?("#en"===window.location.hash&&d.Notify.failure("Enter your email, please."),"#uk"===window.location.hash&&d.Notify.failure("Введіть Ваш email, будь ласка.")):"Firebase: Error (auth/email-already-in-use)."===e.message?("#en"===window.location.hash&&d.Notify.failure("This email already in use. Try another email."),"#uk"===window.location.hash&&d.Notify.failure("Цей email вже використовується. Будь ласка, спробуйте інший.")):("#en"===window.location.hash&&d.Notify.failure("Registration error:( Try again."),"#uk"===window.location.hash&&d.Notify.failure("Помилка реєстрації :( Спробуйте ще раз."))}else"#en"===window.location.hash&&d.Notify.failure("Passwords did not match. Try again."),"#uk"===window.location.hash&&d.Notify.failure("Паролі не співпадають. Спробуйте ще раз.")}));c=r("krGWQ");const zo=Wo();(async()=>{var e,t,n;e=e=>{e&&(e.uid,c.refs.logoutBtn.parentNode.classList.toggle("is-hidden"),c.refs.openLoginBtn.parentNode.classList.toggle("is-hidden"))},ce(zo).onAuthStateChanged(e,t,n)})();d=r("iQIUW"),c=r("krGWQ");const Yo=Wo();c.refs.logoutBtn.addEventListener("click",(async e=>{var t;e.preventDefault(),await(t=Yo,ce(t).signOut()),c.refs.logoutBtn.parentNode.classList.toggle("is-hidden"),c.refs.openLoginBtn.parentNode.classList.toggle("is-hidden"),"#en"===window.location.hash&&d.Notify.info("You're successfully logged out."),"#uk"===window.location.hash&&d.Notify.info("Ви вийшли з аккаунту.")}));
//# sourceMappingURL=index.6c1e03e6.js.map
