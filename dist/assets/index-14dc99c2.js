(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
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
 *//**
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
 */const K=function(t){const e=[];let n=0;for(let a=0;a<t.length;a++){let r=t.charCodeAt(a);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&a+1<t.length&&(t.charCodeAt(a+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++a)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ne=function(t){const e=[];let n=0,a=0;for(;n<t.length;){const r=t[n++];if(r<128)e[a++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[a++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],i=t[n++],o=t[n++],l=((r&7)<<18|(s&63)<<12|(i&63)<<6|o&63)-65536;e[a++]=String.fromCharCode(55296+(l>>10)),e[a++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],i=t[n++];e[a++]=String.fromCharCode((r&15)<<12|(s&63)<<6|i&63)}}return e.join("")},J={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let r=0;r<t.length;r+=3){const s=t[r],i=r+1<t.length,o=i?t[r+1]:0,l=r+2<t.length,h=l?t[r+2]:0,x=s>>2,b=(s&3)<<4|o>>4;let _=(o&15)<<2|h>>6,I=h&63;l||(I=64,i||(_=64)),a.push(n[x],n[b],n[_],n[I])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(K(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ne(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],o=r<t.length?n[t.charAt(r)]:0;++r;const h=r<t.length?n[t.charAt(r)]:64;++r;const b=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||o==null||h==null||b==null)throw new re;const _=s<<2|o>>4;if(a.push(_),h!==64){const I=o<<4&240|h>>2;if(a.push(I),b!==64){const te=h<<6&192|b;a.push(te)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class re extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ae=function(t){const e=K(t);return J.encodeByteArray(e,!0)},Y=function(t){return ae(t).replace(/\./g,"")},se=function(t){try{return J.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ie(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oe=()=>ie().__FIREBASE_DEFAULTS__,ce=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},le=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&se(t[1]);return e&&JSON.parse(e)},he=()=>{try{return oe()||ce()||le()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},de=()=>{var t;return(t=he())===null||t===void 0?void 0:t.config};/**
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
 */class fe{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,a)=>{n?this.reject(n):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,a))}}}function ue(){try{return typeof indexedDB=="object"}catch{return!1}}function pe(){return new Promise((t,e)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const me="FirebaseError";class E extends Error{constructor(e,n,a){super(n),this.code=e,this.customData=a,this.name=me,Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,X.prototype.create)}}class X{constructor(e,n,a){this.service=e,this.serviceName=n,this.errors=a}create(e,...n){const a=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?ge(s,a):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new E(r,o,a)}}function ge(t,e){return t.replace(be,(n,a)=>{const r=e[a];return r!=null?String(r):`<${a}?>`})}const be=/\{\$([^}]+)}/g;function A(t,e){if(t===e)return!0;const n=Object.keys(t),a=Object.keys(e);for(const r of n){if(!a.includes(r))return!1;const s=t[r],i=e[r];if(P(s)&&P(i)){if(!A(s,i))return!1}else if(s!==i)return!1}for(const r of a)if(!n.includes(r))return!1;return!0}function P(t){return t!==null&&typeof t=="object"}class w{constructor(e,n,a){this.name=e,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const p="[DEFAULT]";/**
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
 */class ye{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const a=new fe;if(this.instancesDeferred.set(n,a),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&a.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_e(e))try{this.getOrInitializeService({instanceIdentifier:p})}catch{}for(const[n,a]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});a.resolve(s)}catch{}}}}clearInstance(e=p){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=p){return this.instances.has(e)}getOptions(e=p){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:a,options:n});for(const[s,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);a===o&&i.resolve(r)}return r}onInit(e,n){var a;const r=this.normalizeInstanceIdentifier(n),s=(a=this.onInitCallbacks.get(r))!==null&&a!==void 0?a:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const a=this.onInitCallbacks.get(n);if(a)for(const r of a)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:Ee(e),options:n}),this.instances.set(e,a),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=p){return this.component?this.component.multipleInstances?e:p:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ee(t){return t===p?void 0:t}function _e(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ie{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ye(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var c;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(c||(c={}));const De={debug:c.DEBUG,verbose:c.VERBOSE,info:c.INFO,warn:c.WARN,error:c.ERROR,silent:c.SILENT},we=c.INFO,Se={[c.DEBUG]:"log",[c.VERBOSE]:"log",[c.INFO]:"info",[c.WARN]:"warn",[c.ERROR]:"error"},ve=(t,e,...n)=>{if(e<t.logLevel)return;const a=new Date().toISOString(),r=Se[e];if(r)console[r](`[${a}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ce{constructor(e){this.name=e,this._logLevel=we,this._logHandler=ve,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in c))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?De[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,c.DEBUG,...e),this._logHandler(this,c.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,c.VERBOSE,...e),this._logHandler(this,c.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,c.INFO,...e),this._logHandler(this,c.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,c.WARN,...e),this._logHandler(this,c.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,c.ERROR,...e),this._logHandler(this,c.ERROR,...e)}}const Be=(t,e)=>e.some(n=>t instanceof n);let H,F;function Ae(){return H||(H=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Te(){return F||(F=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Z=new WeakMap,T=new WeakMap,q=new WeakMap,S=new WeakMap,$=new WeakMap;function Me(t){const e=new Promise((n,a)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{n(u(t.result)),r()},i=()=>{a(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&Z.set(n,t)}).catch(()=>{}),$.set(e,t),e}function Oe(t){if(T.has(t))return;const e=new Promise((n,a)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{n(),r()},i=()=>{a(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)});T.set(t,e)}let M={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return T.get(t);if(e==="objectStoreNames")return t.objectStoreNames||q.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return u(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ne(t){M=t(M)}function Re(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const a=t.call(v(this),e,...n);return q.set(a,e.sort?e.sort():[e]),u(a)}:Te().includes(t)?function(...e){return t.apply(v(this),e),u(Z.get(this))}:function(...e){return u(t.apply(v(this),e))}}function Le(t){return typeof t=="function"?Re(t):(t instanceof IDBTransaction&&Oe(t),Be(t,Ae())?new Proxy(t,M):t)}function u(t){if(t instanceof IDBRequest)return Me(t);if(S.has(t))return S.get(t);const e=Le(t);return e!==t&&(S.set(t,e),$.set(e,t)),e}const v=t=>$.get(t);function $e(t,e,{blocked:n,upgrade:a,blocking:r,terminated:s}={}){const i=indexedDB.open(t,e),o=u(i);return a&&i.addEventListener("upgradeneeded",l=>{a(u(i.result),l.oldVersion,l.newVersion,u(i.transaction),l)}),n&&i.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),o.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),o}const xe=["get","getKey","getAll","getAllKeys","count"],Pe=["put","add","delete","clear"],C=new Map;function V(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(C.get(e))return C.get(e);const n=e.replace(/FromIndex$/,""),a=e!==n,r=Pe.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(r||xe.includes(n)))return;const s=async function(i,...o){const l=this.transaction(i,r?"readwrite":"readonly");let h=l.store;return a&&(h=h.index(o.shift())),(await Promise.all([h[n](...o),r&&l.done]))[0]};return C.set(e,s),s}Ne(t=>({...t,get:(e,n,a)=>V(e,n)||t.get(e,n,a),has:(e,n)=>!!V(e,n)||t.has(e,n)}));/**
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
 */class He{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fe(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function Fe(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const O="@firebase/app",j="0.9.16";/**
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
 */const g=new Ce("@firebase/app"),Ve="@firebase/app-compat",je="@firebase/analytics-compat",ke="@firebase/analytics",ze="@firebase/app-check-compat",Ue="@firebase/app-check",We="@firebase/auth",Ge="@firebase/auth-compat",Ke="@firebase/database",Je="@firebase/database-compat",Ye="@firebase/functions",Xe="@firebase/functions-compat",Ze="@firebase/installations",qe="@firebase/installations-compat",Qe="@firebase/messaging",et="@firebase/messaging-compat",tt="@firebase/performance",nt="@firebase/performance-compat",rt="@firebase/remote-config",at="@firebase/remote-config-compat",st="@firebase/storage",it="@firebase/storage-compat",ot="@firebase/firestore",ct="@firebase/firestore-compat",lt="firebase";/**
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
 */const ht="[DEFAULT]",dt={[O]:"fire-core",[Ve]:"fire-core-compat",[ke]:"fire-analytics",[je]:"fire-analytics-compat",[Ue]:"fire-app-check",[ze]:"fire-app-check-compat",[We]:"fire-auth",[Ge]:"fire-auth-compat",[Ke]:"fire-rtdb",[Je]:"fire-rtdb-compat",[Ye]:"fire-fn",[Xe]:"fire-fn-compat",[Ze]:"fire-iid",[qe]:"fire-iid-compat",[Qe]:"fire-fcm",[et]:"fire-fcm-compat",[tt]:"fire-perf",[nt]:"fire-perf-compat",[rt]:"fire-rc",[at]:"fire-rc-compat",[st]:"fire-gcs",[it]:"fire-gcs-compat",[ot]:"fire-fst",[ct]:"fire-fst-compat","fire-js":"fire-js",[lt]:"fire-js-all"};/**
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
 */const N=new Map,R=new Map;function ft(t,e){try{t.container.addComponent(e)}catch(n){g.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function L(t){const e=t.name;if(R.has(e))return g.debug(`There were multiple attempts to register component ${e}.`),!1;R.set(e,t);for(const n of N.values())ft(n,t);return!0}/**
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
 */const ut={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},m=new X("app","Firebase",ut);/**
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
 */class pt{constructor(e,n,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new w("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw m.create("app-deleted",{appName:this._name})}}function mt(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const a=Object.assign({name:ht,automaticDataCollectionEnabled:!1},e),r=a.name;if(typeof r!="string"||!r)throw m.create("bad-app-name",{appName:String(r)});if(n||(n=de()),!n)throw m.create("no-options");const s=N.get(r);if(s){if(A(n,s.options)&&A(a,s.config))return s;throw m.create("duplicate-app",{appName:r})}const i=new Ie(r);for(const l of R.values())i.addComponent(l);const o=new pt(n,a,i);return N.set(r,o),o}function D(t,e,n){var a;let r=(a=dt[t])!==null&&a!==void 0?a:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),g.warn(o.join(" "));return}L(new w(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const gt="firebase-heartbeat-database",bt=1,y="firebase-heartbeat-store";let B=null;function Q(){return B||(B=$e(gt,bt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(y)}}}).catch(t=>{throw m.create("idb-open",{originalErrorMessage:t.message})})),B}async function yt(t){try{return await(await Q()).transaction(y).objectStore(y).get(ee(t))}catch(e){if(e instanceof E)g.warn(e.message);else{const n=m.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});g.warn(n.message)}}}async function k(t,e){try{const a=(await Q()).transaction(y,"readwrite");await a.objectStore(y).put(e,ee(t)),await a.done}catch(n){if(n instanceof E)g.warn(n.message);else{const a=m.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});g.warn(a.message)}}}function ee(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Et=1024,_t=30*24*60*60*1e3;class It{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wt(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=z();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(r=>r.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=_t}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=z(),{heartbeatsToSend:n,unsentEntries:a}=Dt(this._heartbeatsCache.heartbeats),r=Y(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function z(){return new Date().toISOString().substring(0,10)}function Dt(t,e=Et){const n=[];let a=t.slice();for(const r of t){const s=n.find(i=>i.agent===r.agent);if(s){if(s.dates.push(r.date),U(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),U(n)>e){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class wt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ue()?pe().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yt(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return k(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return k(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function U(t){return Y(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function St(t){L(new w("platform-logger",e=>new He(e),"PRIVATE")),L(new w("heartbeat",e=>new It(e),"PRIVATE")),D(O,j,t),D(O,j,"esm2017"),D("fire-js","")}St("");var vt="firebase",Ct="10.2.0";/**
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
 */D(vt,Ct,"app");const W=["S","Sp","T'","T'p","Saav","Sav","Synn","Ser","H","J","V","L","N","B","D","K","E","A","F","T","W","G","M","C","R","P","Z","Zel","Ger","Arag","Gord","Lun","Bas","Leg","Arw","Yenn","Jasp","Fr","Dar","Wan","Fynn","Fann","Tann","Mar","Mer","Gwen","Rynn","Rhen","Lap","Rub","Saph","Seth","Raph","Luc","Maw","Mir","Min","Car","Cah","Har","Tr","Mer","Tor","El","Rh","Gwynn","Hel","Th","Dor","Gl","Ber","Lep","Rin","Valh","Cal"],Bt=["a","o","e","i","y","u","æ","ae","io","ei","ie","ai"],At=["q","z","x","t","n","g","s","k","r","l","i","e","h","d","u","ng","don","lt","zee","ji","to","wen","gwen","byn","dor","fer","ko","mo","","no","las","wyn","myn","lys","lon","gon","wan","lynn","ck","log","phin","gold","ss","viel","vel","val","lian","ran","ron","ctra","brina","lina","na","vax","lax","nus","ni","niel","tian","fel","kian","rhys","vys","vas","fiel","fal","rin","lla","nthe","var","vor","ri","rion","tia","rys","ger"],Tt=["Mage","Warrior","Thief","Archer","Healer","Bard","Witcher","Berserker","Necromancer"],Mt=["Vulcan","Mercat","Vampire","Elf","Fairy","House Cat","Lynx","Goblin"],Ot=["Ger","Mor","Mord","Kazar","Torr","Dor","Far","Vallh","Nor","Por","Mirv","Mir","Kaer","Narh","Vol","Nil","Niv","Rov","Pov","Vars","Vorg","Varg","Tren","Vren","Trint","Ott","Van"],Nt=["udo","ia","ion","or","un","oria","aria","illa","ola","yin","alla","ir","aw","av","au","ar","au","ou","æn","ein","ain","ean"],G=["Swamp","Islands","Lake","Desert","Plains","Mountains","Meadow","City","Village","Forest","Castle"];let f=xt();console.log(f);let Rt=document.getElementById("cat");Rt.innerText=f.name[0]+f.name[1]+f.name[2]+" of the "+f.origin[0]+f.origin[1]+f.origin[2];let Lt=document.getElementById("catclass");Lt.innerText="Class: "+f.class;let $t=document.getElementById("catrace");$t.innerText="Race: "+f.race;function xt(){let t={name:[W[d(74)],Bt[d(12)],At[d(76)]],class:Tt[d(9)],race:Mt[d(8)],origin:[Ot[d(27)],Nt[d(22)]," "+G[d(11)]]};return t.race=="Vulcan"&&(t.name[0]=W[d(8)]),t.race=="Mercat"&&(t.origin[2]=" "+G[d(3)]),t}function d(t){return Math.floor(Math.random()*t)}new cursoreffects.fairyDustCursor({colors:["#cbc4fd","#e6c4fd","#fdc4fb"]});const Pt={apiKey:"AIzaSyAXMAK8q4eDi3XsHJWn1_wvywp6B042R4I",authDomain:"fantasy-cat-generator.firebaseapp.com",projectId:"fantasy-cat-generator",storageBucket:"fantasy-cat-generator.appspot.com",messagingSenderId:"206567743551",appId:"1:206567743551:web:263d99027d6b9a7688588a"};mt(Pt);
