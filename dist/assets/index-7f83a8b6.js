(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
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
 */const Qe=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Dt=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],o=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},et={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,o=a?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,p=i>>2,d=(i&3)<<4|o>>4;let g=(o&15)<<2|u>>6,S=u&63;c||(S=64,a||(g=64)),r.push(n[p],n[d],n[g],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qe(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Dt(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],o=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||o==null||u==null||d==null)throw new Rt;const g=i<<2|o>>4;if(r.push(g),u!==64){const S=o<<4&240|u>>2;if(r.push(S),d!==64){const E=u<<6&192|d;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Rt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bt=function(t){const e=Qe(t);return et.encodeByteArray(e,!0)},tt=function(t){return Bt(t).replace(/\./g,"")},Ot=function(t){try{return et.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Mt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Lt=()=>Mt().__FIREBASE_DEFAULTS__,Nt=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kt=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ot(t[1]);return e&&JSON.parse(e)},$t=()=>{try{return Lt()||Nt()||kt()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vt=()=>{var t;return(t=$t())===null||t===void 0?void 0:t.config};/**
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
 */class Ft{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function Ht(){try{return typeof indexedDB=="object"}catch{return!1}}function Ut(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const jt="FirebaseError";class F extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jt,Object.setPrototypeOf(this,F.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nt.prototype.create)}}class nt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Wt(i,r):"Error",o=`${this.serviceName}: ${a} (${s}).`;return new F(s,o,r)}}function Wt(t,e){return t.replace(zt,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const zt=/\{\$([^}]+)}/g;function ie(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Pe(i)&&Pe(a)){if(!ie(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Pe(t){return t!==null&&typeof t=="object"}class j{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const P="[DEFAULT]";/**
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
 */class Gt{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ft;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kt(e))try{this.getOrInitializeService({instanceIdentifier:P})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=P){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=P){return this.instances.has(e)}getOptions(e=P){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);r===o&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qt(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=P){return this.component?this.component.multipleInstances?e:P:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qt(t){return t===P?void 0:t}function Kt(t){return t.instantiationMode==="EAGER"}/**
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
 */class Jt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Gt(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var f;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(f||(f={}));const Xt={debug:f.DEBUG,verbose:f.VERBOSE,info:f.INFO,warn:f.WARN,error:f.ERROR,silent:f.SILENT},Yt=f.INFO,Zt={[f.DEBUG]:"log",[f.VERBOSE]:"log",[f.INFO]:"info",[f.WARN]:"warn",[f.ERROR]:"error"},Qt=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Zt[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class en{constructor(e){this.name=e,this._logLevel=Yt,this._logHandler=Qt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in f))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,f.DEBUG,...e),this._logHandler(this,f.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,f.VERBOSE,...e),this._logHandler(this,f.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,f.INFO,...e),this._logHandler(this,f.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,f.WARN,...e),this._logHandler(this,f.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,f.ERROR,...e),this._logHandler(this,f.ERROR,...e)}}const tn=(t,e)=>e.some(n=>t instanceof n);let De,Re;function nn(){return De||(De=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rn(){return Re||(Re=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rt=new WeakMap,ae=new WeakMap,st=new WeakMap,J=new WeakMap,we=new WeakMap;function sn(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(I(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&rt.set(n,t)}).catch(()=>{}),we.set(e,t),e}function an(t){if(ae.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});ae.set(t,e)}let oe={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ae.get(t);if(e==="objectStoreNames")return t.objectStoreNames||st.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function on(t){oe=t(oe)}function cn(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(X(this),e,...n);return st.set(r,e.sort?e.sort():[e]),I(r)}:rn().includes(t)?function(...e){return t.apply(X(this),e),I(rt.get(this))}:function(...e){return I(t.apply(X(this),e))}}function ln(t){return typeof t=="function"?cn(t):(t instanceof IDBTransaction&&an(t),tn(t,nn())?new Proxy(t,oe):t)}function I(t){if(t instanceof IDBRequest)return sn(t);if(J.has(t))return J.get(t);const e=ln(t);return e!==t&&(J.set(t,e),we.set(e,t)),e}const X=t=>we.get(t);function hn(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),o=I(a);return r&&a.addEventListener("upgradeneeded",c=>{r(I(a.result),c.oldVersion,c.newVersion,I(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const dn=["get","getKey","getAll","getAllKeys","count"],un=["put","add","delete","clear"],Y=new Map;function Be(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Y.get(e))return Y.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=un.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||dn.includes(n)))return;const i=async function(a,...o){const c=this.transaction(a,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(o.shift())),(await Promise.all([u[n](...o),s&&c.done]))[0]};return Y.set(e,i),i}on(t=>({...t,get:(e,n,r)=>Be(e,n)||t.get(e,n,r),has:(e,n)=>!!Be(e,n)||t.has(e,n)}));/**
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
 */class fn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pn(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ce="@firebase/app",Oe="0.9.16";/**
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
 */const R=new en("@firebase/app"),mn="@firebase/app-compat",gn="@firebase/analytics-compat",yn="@firebase/analytics",bn="@firebase/app-check-compat",_n="@firebase/app-check",wn="@firebase/auth",Sn="@firebase/auth-compat",En="@firebase/database",vn="@firebase/database-compat",Cn="@firebase/functions",xn="@firebase/functions-compat",Tn="@firebase/installations",In="@firebase/installations-compat",An="@firebase/messaging",Pn="@firebase/messaging-compat",Dn="@firebase/performance",Rn="@firebase/performance-compat",Bn="@firebase/remote-config",On="@firebase/remote-config-compat",Mn="@firebase/storage",Ln="@firebase/storage-compat",Nn="@firebase/firestore",kn="@firebase/firestore-compat",$n="firebase";/**
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
 */const Vn="[DEFAULT]",Fn={[ce]:"fire-core",[mn]:"fire-core-compat",[yn]:"fire-analytics",[gn]:"fire-analytics-compat",[_n]:"fire-app-check",[bn]:"fire-app-check-compat",[wn]:"fire-auth",[Sn]:"fire-auth-compat",[En]:"fire-rtdb",[vn]:"fire-rtdb-compat",[Cn]:"fire-fn",[xn]:"fire-fn-compat",[Tn]:"fire-iid",[In]:"fire-iid-compat",[An]:"fire-fcm",[Pn]:"fire-fcm-compat",[Dn]:"fire-perf",[Rn]:"fire-perf-compat",[Bn]:"fire-rc",[On]:"fire-rc-compat",[Mn]:"fire-gcs",[Ln]:"fire-gcs-compat",[Nn]:"fire-fst",[kn]:"fire-fst-compat","fire-js":"fire-js",[$n]:"fire-js-all"};/**
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
 */const le=new Map,he=new Map;function Hn(t,e){try{t.container.addComponent(e)}catch(n){R.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function de(t){const e=t.name;if(he.has(e))return R.debug(`There were multiple attempts to register component ${e}.`),!1;he.set(e,t);for(const n of le.values())Hn(n,t);return!0}/**
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
 */const Un={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},D=new nt("app","Firebase",Un);/**
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
 */class jn{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new j("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw D.create("app-deleted",{appName:this._name})}}function Wn(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vn,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw D.create("bad-app-name",{appName:String(s)});if(n||(n=Vt()),!n)throw D.create("no-options");const i=le.get(s);if(i){if(ie(n,i.options)&&ie(r,i.config))return i;throw D.create("duplicate-app",{appName:s})}const a=new Jt(s);for(const c of he.values())a.addComponent(c);const o=new jn(n,r,a);return le.set(s,o),o}function U(t,e,n){var r;let s=(r=Fn[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),R.warn(o.join(" "));return}de(new j(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const zn="firebase-heartbeat-database",Gn=1,k="firebase-heartbeat-store";let Z=null;function it(){return Z||(Z=hn(zn,Gn,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(k)}}}).catch(t=>{throw D.create("idb-open",{originalErrorMessage:t.message})})),Z}async function qn(t){try{return await(await it()).transaction(k).objectStore(k).get(at(t))}catch(e){if(e instanceof F)R.warn(e.message);else{const n=D.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});R.warn(n.message)}}}async function Me(t,e){try{const r=(await it()).transaction(k,"readwrite");await r.objectStore(k).put(e,at(t)),await r.done}catch(n){if(n instanceof F)R.warn(n.message);else{const r=D.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});R.warn(r.message)}}}function at(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Kn=1024,Jn=30*24*60*60*1e3;class Xn{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zn(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Le();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Jn}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Le(),{heartbeatsToSend:n,unsentEntries:r}=Yn(this._heartbeatsCache.heartbeats),s=tt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Le(){return new Date().toISOString().substring(0,10)}function Yn(t,e=Kn){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ne(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ne(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ht()?Ut().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qn(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Me(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Me(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ne(t){return tt(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Qn(t){de(new j("platform-logger",e=>new fn(e),"PRIVATE")),de(new j("heartbeat",e=>new Xn(e),"PRIVATE")),U(ce,Oe,t),U(ce,Oe,"esm2017"),U("fire-js","")}Qn("");var er="firebase",tr="10.2.0";/**
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
 */U(er,tr,"app");function nr(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),s=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(s),e&&(r.href=e),s.href=t,s.href}const rr=(()=>{let t=0;const e=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(t+=1,`u${e()}${t}`)})();function C(t){const e=[];for(let n=0,r=t.length;n<r;n++)e.push(t[n]);return e}function W(t,e){const r=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return r?parseFloat(r.replace("px","")):0}function sr(t){const e=W(t,"border-left-width"),n=W(t,"border-right-width");return t.clientWidth+e+n}function ir(t){const e=W(t,"border-top-width"),n=W(t,"border-bottom-width");return t.clientHeight+e+n}function ot(t,e={}){const n=e.width||sr(t),r=e.height||ir(t);return{width:n,height:r}}function ar(){let t,e;try{e=process}catch{}const n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}const b=16384;function or(t){(t.width>b||t.height>b)&&(t.width>b&&t.height>b?t.width>t.height?(t.height*=b/t.width,t.width=b):(t.width*=b/t.height,t.height=b):t.width>b?(t.height*=b/t.width,t.width=b):(t.width*=b/t.height,t.height=b))}function z(t){return new Promise((e,n)=>{const r=new Image;r.decode=()=>e(r),r.onload=()=>e(r),r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t})}async function cr(t){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function lr(t,e,n){const r="http://www.w3.org/2000/svg",s=document.createElementNS(r,"svg"),i=document.createElementNS(r,"foreignObject");return s.setAttribute("width",`${e}`),s.setAttribute("height",`${n}`),s.setAttribute("viewBox",`0 0 ${e} ${n}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),s.appendChild(i),i.appendChild(t),cr(s)}const y=(t,e)=>{if(t instanceof e)return!0;const n=Object.getPrototypeOf(t);return n===null?!1:n.constructor.name===e.name||y(n,e)};function hr(t){const e=t.getPropertyValue("content");return`${t.cssText} content: '${e.replace(/'|"/g,"")}';`}function dr(t){return C(t).map(e=>{const n=t.getPropertyValue(e),r=t.getPropertyPriority(e);return`${e}: ${n}${r?" !important":""};`}).join(" ")}function ur(t,e,n){const r=`.${t}:${e}`,s=n.cssText?hr(n):dr(n);return document.createTextNode(`${r}{${s}}`)}function ke(t,e,n){const r=window.getComputedStyle(t,n),s=r.getPropertyValue("content");if(s===""||s==="none")return;const i=rr();try{e.className=`${e.className} ${i}`}catch{return}const a=document.createElement("style");a.appendChild(ur(i,n,r)),e.appendChild(a)}function fr(t,e){ke(t,e,":before"),ke(t,e,":after")}const $e="application/font-woff",Ve="image/jpeg",pr={woff:$e,woff2:$e,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:Ve,jpeg:Ve,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function mr(t){const e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}function Se(t){const e=mr(t).toLowerCase();return pr[e]||""}function gr(t){return t.split(/,/)[1]}function ue(t){return t.search(/^(data:)/)!==-1}function ct(t,e){return`data:${e};base64,${t}`}async function lt(t,e,n){const r=await fetch(t,e);if(r.status===404)throw new Error(`Resource "${r.url}" not found`);const s=await r.blob();return new Promise((i,a)=>{const o=new FileReader;o.onerror=a,o.onloadend=()=>{try{i(n({res:r,result:o.result}))}catch(c){a(c)}},o.readAsDataURL(s)})}const Q={};function yr(t,e,n){let r=t.replace(/\?.*/,"");return n&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),e?`[${e}]${r}`:r}async function Ee(t,e,n){const r=yr(t,e,n.includeQueryParams);if(Q[r]!=null)return Q[r];n.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+new Date().getTime());let s;try{const i=await lt(t,n.fetchRequestInit,({res:a,result:o})=>(e||(e=a.headers.get("Content-Type")||""),gr(o)));s=ct(i,e)}catch(i){s=n.imagePlaceholder||"";let a=`Failed to fetch resource: ${t}`;i&&(a=typeof i=="string"?i:i.message),a&&console.warn(a)}return Q[r]=s,s}async function br(t){const e=t.toDataURL();return e==="data:,"?t.cloneNode(!1):z(e)}async function _r(t,e){if(t.currentSrc){const i=document.createElement("canvas"),a=i.getContext("2d");i.width=t.clientWidth,i.height=t.clientHeight,a==null||a.drawImage(t,0,0,i.width,i.height);const o=i.toDataURL();return z(o)}const n=t.poster,r=Se(n),s=await Ee(n,r,e);return z(s)}async function wr(t){var e;try{if(!((e=t==null?void 0:t.contentDocument)===null||e===void 0)&&e.body)return await q(t.contentDocument.body,{},!0)}catch{}return t.cloneNode(!1)}async function Sr(t,e){return y(t,HTMLCanvasElement)?br(t):y(t,HTMLVideoElement)?_r(t,e):y(t,HTMLIFrameElement)?wr(t):t.cloneNode(!1)}const Er=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SLOT";async function vr(t,e,n){var r,s;let i=[];return Er(t)&&t.assignedNodes?i=C(t.assignedNodes()):y(t,HTMLIFrameElement)&&(!((r=t.contentDocument)===null||r===void 0)&&r.body)?i=C(t.contentDocument.body.childNodes):i=C(((s=t.shadowRoot)!==null&&s!==void 0?s:t).childNodes),i.length===0||y(t,HTMLVideoElement)||await i.reduce((a,o)=>a.then(()=>q(o,n)).then(c=>{c&&e.appendChild(c)}),Promise.resolve()),e}function Cr(t,e){const n=e.style;if(!n)return;const r=window.getComputedStyle(t);r.cssText?(n.cssText=r.cssText,n.transformOrigin=r.transformOrigin):C(r).forEach(s=>{let i=r.getPropertyValue(s);s==="font-size"&&i.endsWith("px")&&(i=`${Math.floor(parseFloat(i.substring(0,i.length-2)))-.1}px`),y(t,HTMLIFrameElement)&&s==="display"&&i==="inline"&&(i="block"),s==="d"&&e.getAttribute("d")&&(i=`path(${e.getAttribute("d")})`),n.setProperty(s,i,r.getPropertyPriority(s))})}function xr(t,e){y(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),y(t,HTMLInputElement)&&e.setAttribute("value",t.value)}function Tr(t,e){if(y(t,HTMLSelectElement)){const n=e,r=Array.from(n.children).find(s=>t.value===s.getAttribute("value"));r&&r.setAttribute("selected","")}}function Ir(t,e){return y(e,Element)&&(Cr(t,e),fr(t,e),xr(t,e),Tr(t,e)),e}async function Ar(t,e){const n=t.querySelectorAll?t.querySelectorAll("use"):[];if(n.length===0)return t;const r={};for(let i=0;i<n.length;i++){const o=n[i].getAttribute("xlink:href");if(o){const c=t.querySelector(o),u=document.querySelector(o);!c&&u&&!r[o]&&(r[o]=await q(u,e,!0))}}const s=Object.values(r);if(s.length){const i="http://www.w3.org/1999/xhtml",a=document.createElementNS(i,"svg");a.setAttribute("xmlns",i),a.style.position="absolute",a.style.width="0",a.style.height="0",a.style.overflow="hidden",a.style.display="none";const o=document.createElementNS(i,"defs");a.appendChild(o);for(let c=0;c<s.length;c++)o.appendChild(s[c]);t.appendChild(a)}return t}async function q(t,e,n){return!n&&e.filter&&!e.filter(t)?null:Promise.resolve(t).then(r=>Sr(r,e)).then(r=>vr(t,r,e)).then(r=>Ir(t,r)).then(r=>Ar(r,e))}const ht=/url\((['"]?)([^'"]+?)\1\)/g,Pr=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Dr=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Rr(t){const e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}function Br(t){const e=[];return t.replace(ht,(n,r,s)=>(e.push(s),n)),e.filter(n=>!ue(n))}async function Or(t,e,n,r,s){try{const i=n?nr(e,n):e,a=Se(e);let o;if(s){const c=await s(i);o=ct(c,a)}else o=await Ee(i,a,r);return t.replace(Rr(e),`$1${o}$3`)}catch{}return t}function Mr(t,{preferredFontFormat:e}){return e?t.replace(Dr,n=>{for(;;){const[r,,s]=Pr.exec(n)||[];if(!s)return"";if(s===e)return`src: ${r};`}}):t}function dt(t){return t.search(ht)!==-1}async function ut(t,e,n){if(!dt(t))return t;const r=Mr(t,n);return Br(r).reduce((i,a)=>i.then(o=>Or(o,a,e,n)),Promise.resolve(r))}async function H(t,e,n){var r;const s=(r=e.style)===null||r===void 0?void 0:r.getPropertyValue(t);if(s){const i=await ut(s,null,n);return e.style.setProperty(t,i,e.style.getPropertyPriority(t)),!0}return!1}async function Lr(t,e){await H("background",t,e)||await H("background-image",t,e),await H("mask",t,e)||await H("mask-image",t,e)}async function Nr(t,e){const n=y(t,HTMLImageElement);if(!(n&&!ue(t.src))&&!(y(t,SVGImageElement)&&!ue(t.href.baseVal)))return;const r=n?t.src:t.href.baseVal,s=await Ee(r,Se(r),e);await new Promise((i,a)=>{t.onload=i,t.onerror=a;const o=t;o.decode&&(o.decode=i),o.loading==="lazy"&&(o.loading="eager"),n?(t.srcset="",t.src=s):t.href.baseVal=s})}async function kr(t,e){const r=C(t.childNodes).map(s=>ft(s,e));await Promise.all(r).then(()=>t)}async function ft(t,e){y(t,Element)&&(await Lr(t,e),await Nr(t,e),await kr(t,e))}function $r(t,e){const{style:n}=t;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width=`${e.width}px`),e.height&&(n.height=`${e.height}px`);const r=e.style;return r!=null&&Object.keys(r).forEach(s=>{n[s]=r[s]}),t}const Fe={};async function He(t){let e=Fe[t];if(e!=null)return e;const r=await(await fetch(t)).text();return e={url:t,cssText:r},Fe[t]=e,e}async function Ue(t,e){let n=t.cssText;const r=/url\(["']?([^"')]+)["']?\)/g,i=(n.match(/url\([^)]+\)/g)||[]).map(async a=>{let o=a.replace(r,"$1");return o.startsWith("https://")||(o=new URL(o,t.url).href),lt(o,e.fetchRequestInit,({result:c})=>(n=n.replace(a,`url(${c})`),[a,c]))});return Promise.all(i).then(()=>n)}function je(t){if(t==null)return[];const e=[],n=/(\/\*[\s\S]*?\*\/)/gi;let r=t.replace(n,"");const s=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const c=s.exec(r);if(c===null)break;e.push(c[0])}r=r.replace(s,"");const i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,a="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",o=new RegExp(a,"gi");for(;;){let c=i.exec(r);if(c===null){if(c=o.exec(r),c===null)break;i.lastIndex=o.lastIndex}else o.lastIndex=i.lastIndex;e.push(c[0])}return e}async function Vr(t,e){const n=[],r=[];return t.forEach(s=>{if("cssRules"in s)try{C(s.cssRules||[]).forEach((i,a)=>{if(i.type===CSSRule.IMPORT_RULE){let o=a+1;const c=i.href,u=He(c).then(p=>Ue(p,e)).then(p=>je(p).forEach(d=>{try{s.insertRule(d,d.startsWith("@import")?o+=1:s.cssRules.length)}catch(g){console.error("Error inserting rule from remote css",{rule:d,error:g})}})).catch(p=>{console.error("Error loading remote css",p.toString())});r.push(u)}})}catch(i){const a=t.find(o=>o.href==null)||document.styleSheets[0];s.href!=null&&r.push(He(s.href).then(o=>Ue(o,e)).then(o=>je(o).forEach(c=>{a.insertRule(c,s.cssRules.length)})).catch(o=>{console.error("Error loading remote stylesheet",o)})),console.error("Error inlining remote css file",i)}}),Promise.all(r).then(()=>(t.forEach(s=>{if("cssRules"in s)try{C(s.cssRules||[]).forEach(i=>{n.push(i)})}catch(i){console.error(`Error while reading CSS rules from ${s.href}`,i)}}),n))}function Fr(t){return t.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>dt(e.style.getPropertyValue("src")))}async function Hr(t,e){if(t.ownerDocument==null)throw new Error("Provided element is not within a Document");const n=C(t.ownerDocument.styleSheets),r=await Vr(n,e);return Fr(r)}async function Ur(t,e){const n=await Hr(t,e);return(await Promise.all(n.map(s=>{const i=s.parentStyleSheet?s.parentStyleSheet.href:null;return ut(s.cssText,i,e)}))).join(`
`)}async function jr(t,e){const n=e.fontEmbedCSS!=null?e.fontEmbedCSS:e.skipFonts?null:await Ur(t,e);if(n){const r=document.createElement("style"),s=document.createTextNode(n);r.appendChild(s),t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r)}}async function Wr(t,e={}){const{width:n,height:r}=ot(t,e),s=await q(t,e,!0);return await jr(s,e),await ft(s,e),$r(s,e),await lr(s,n,r)}async function zr(t,e={}){const{width:n,height:r}=ot(t,e),s=await Wr(t,e),i=await z(s),a=document.createElement("canvas"),o=a.getContext("2d"),c=e.pixelRatio||ar(),u=e.canvasWidth||n,p=e.canvasHeight||r;return a.width=u*c,a.height=p*c,e.skipAutoScale||or(a),a.style.width=`${u}`,a.style.height=`${p}`,e.backgroundColor&&(o.fillStyle=e.backgroundColor,o.fillRect(0,0,a.width,a.height)),o.drawImage(i,0,0,a.width,a.height),a}async function Gr(t,e={}){return(await zr(t,e)).toDataURL("image/jpeg",e.quality||1)}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const We=typeof window<"u"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,ve=(t,e,n=null)=>{for(;e!==n;){const r=e.nextSibling;t.removeChild(e),e=r}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=`{{lit-${String(Math.random()).slice(2)}}}`,pt=`<!--${x}-->`,ze=new RegExp(`${x}|${pt}`),L="$lit$";class mt{constructor(e,n){this.parts=[],this.element=n;const r=[],s=[],i=document.createTreeWalker(n.content,133,null,!1);let a=0,o=-1,c=0;const{strings:u,values:{length:p}}=e;for(;c<p;){const d=i.nextNode();if(d===null){i.currentNode=s.pop();continue}if(o++,d.nodeType===1){if(d.hasAttributes()){const g=d.attributes,{length:S}=g;let E=0;for(let w=0;w<S;w++)Ge(g[w].name,L)&&E++;for(;E-- >0;){const w=u[c],B=fe.exec(w)[2],O=B.toLowerCase()+L,A=d.getAttribute(O);d.removeAttribute(O);const v=A.split(ze);this.parts.push({type:"attribute",index:o,name:B,strings:v}),c+=v.length-1}}d.tagName==="TEMPLATE"&&(s.push(d),i.currentNode=d.content)}else if(d.nodeType===3){const g=d.data;if(g.indexOf(x)>=0){const S=d.parentNode,E=g.split(ze),w=E.length-1;for(let B=0;B<w;B++){let O,A=E[B];if(A==="")O=T();else{const v=fe.exec(A);v!==null&&Ge(v[2],L)&&(A=A.slice(0,v.index)+v[1]+v[2].slice(0,-L.length)+v[3]),O=document.createTextNode(A)}S.insertBefore(O,d),this.parts.push({type:"node",index:++o})}E[w]===""?(S.insertBefore(T(),d),r.push(d)):d.data=E[w],c+=w}}else if(d.nodeType===8)if(d.data===x){const g=d.parentNode;(d.previousSibling===null||o===a)&&(o++,g.insertBefore(T(),d)),a=o,this.parts.push({type:"node",index:o}),d.nextSibling===null?d.data="":(r.push(d),o--),c++}else{let g=-1;for(;(g=d.data.indexOf(x,g+1))!==-1;)this.parts.push({type:"node",index:-1}),c++}}for(const d of r)d.parentNode.removeChild(d)}}const Ge=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},gt=t=>t.index!==-1,T=()=>document.createComment(""),fe=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ce=133;function yt(t,e){const{element:{content:n},parts:r}=t,s=document.createTreeWalker(n,Ce,null,!1);let i=N(r),a=r[i],o=-1,c=0;const u=[];let p=null;for(;s.nextNode();){o++;const d=s.currentNode;for(d.previousSibling===p&&(p=null),e.has(d)&&(u.push(d),p===null&&(p=d)),p!==null&&c++;a!==void 0&&a.index===o;)a.index=p!==null?-1:a.index-c,i=N(r,i),a=r[i]}u.forEach(d=>d.parentNode.removeChild(d))}const qr=t=>{let e=t.nodeType===11?0:1;const n=document.createTreeWalker(t,Ce,null,!1);for(;n.nextNode();)e++;return e},N=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const r=t[n];if(gt(r))return n}return-1};function Kr(t,e,n=null){const{element:{content:r},parts:s}=t;if(n==null){r.appendChild(e);return}const i=document.createTreeWalker(r,Ce,null,!1);let a=N(s),o=0,c=-1;for(;i.nextNode();)for(c++,i.currentNode===n&&(o=qr(e),n.parentNode.insertBefore(e,n));a!==-1&&s[a].index===c;){if(o>0){for(;a!==-1;)s[a].index+=o,a=N(s,a);return}a=N(s,a)}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Jr=new WeakMap,$=t=>typeof t=="function"&&Jr.has(t);/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const _={},qe={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class pe{constructor(e,n,r){this.__parts=[],this.template=e,this.processor=n,this.options=r}update(e){let n=0;for(const r of this.__parts)r!==void 0&&r.setValue(e[n]),n++;for(const r of this.__parts)r!==void 0&&r.commit()}_clone(){const e=We?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let i=0,a=0,o,c=s.nextNode();for(;i<r.length;){if(o=r[i],!gt(o)){this.__parts.push(void 0),i++;continue}for(;a<o.index;)a++,c.nodeName==="TEMPLATE"&&(n.push(c),s.currentNode=c.content),(c=s.nextNode())===null&&(s.currentNode=n.pop(),c=s.nextNode());if(o.type==="node"){const u=this.processor.handleTextExpression(this.options);u.insertAfterNode(c.previousSibling),this.__parts.push(u)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,o.name,o.strings,this.options));i++}return We&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ke=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),Xr=` ${x} `;class bt{constructor(e,n,r,s){this.strings=e,this.values=n,this.type=r,this.processor=s}getHTML(){const e=this.strings.length-1;let n="",r=!1;for(let s=0;s<e;s++){const i=this.strings[s],a=i.lastIndexOf("<!--");r=(a>-1||r)&&i.indexOf("-->",a+1)===-1;const o=fe.exec(i);o===null?n+=i+(r?Xr:pt):n+=i.substr(0,o.index)+o[1]+o[2]+L+o[3]+x}return n+=this.strings[e],n}getTemplateElement(){const e=document.createElement("template");let n=this.getHTML();return Ke!==void 0&&(n=Ke.createHTML(n)),e.innerHTML=n,e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const xe=t=>t===null||!(typeof t=="object"||typeof t=="function"),me=t=>Array.isArray(t)||!!(t&&t[Symbol.iterator]);class _t{constructor(e,n,r){this.dirty=!0,this.element=e,this.name=n,this.strings=r,this.parts=[];for(let s=0;s<r.length-1;s++)this.parts[s]=this._createPart()}_createPart(){return new wt(this)}_getValue(){const e=this.strings,n=e.length-1,r=this.parts;if(n===1&&e[0]===""&&e[1]===""){const i=r[0].value;if(typeof i=="symbol")return String(i);if(typeof i=="string"||!me(i))return i}let s="";for(let i=0;i<n;i++){s+=e[i];const a=r[i];if(a!==void 0){const o=a.value;if(xe(o)||!me(o))s+=typeof o=="string"?o:String(o);else for(const c of o)s+=typeof c=="string"?c:String(c)}}return s+=e[n],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class wt{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==_&&(!xe(e)||e!==this.value)&&(this.value=e,$(e)||(this.committer.dirty=!0))}commit(){for(;$(this.value);){const e=this.value;this.value=_,e(this)}this.value!==_&&this.committer.commit()}}class K{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(T()),this.endNode=e.appendChild(T())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=T()),e.__insert(this.endNode=T())}insertAfterPart(e){e.__insert(this.startNode=T()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;$(this.__pendingValue);){const n=this.__pendingValue;this.__pendingValue=_,n(this)}const e=this.__pendingValue;e!==_&&(xe(e)?e!==this.value&&this.__commitText(e):e instanceof bt?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):me(e)?this.__commitIterable(e):e===qe?(this.value=qe,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const n=this.startNode.nextSibling;e=e??"";const r=typeof e=="string"?e:String(e);n===this.endNode.previousSibling&&n.nodeType===3?n.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const n=this.options.templateFactory(e);if(this.value instanceof pe&&this.value.template===n)this.value.update(e.values);else{const r=new pe(n,e.processor,this.options),s=r._clone();r.update(e.values),this.__commitNode(s),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const n=this.value;let r=0,s;for(const i of e)s=n[r],s===void 0&&(s=new K(this.options),n.push(s),r===0?s.appendIntoPart(this):s.insertAfterPart(n[r-1])),s.setValue(i),s.commit(),r++;r<n.length&&(n.length=r,this.clear(s&&s.endNode))}clear(e=this.startNode){ve(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Yr{constructor(e,n,r){if(this.value=void 0,this.__pendingValue=void 0,r.length!==2||r[0]!==""||r[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=n,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;$(this.__pendingValue);){const n=this.__pendingValue;this.__pendingValue=_,n(this)}if(this.__pendingValue===_)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=_}}class Zr extends _t{constructor(e,n,r){super(e,n,r),this.single=r.length===2&&r[0]===""&&r[1]===""}_createPart(){return new Qr(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Qr extends wt{}let St=!1;(()=>{try{const t={get capture(){return St=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch{}})();class es{constructor(e,n,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=n,this.eventContext=r,this.__boundHandleEvent=s=>this.handleEvent(s)}setValue(e){this.__pendingValue=e}commit(){for(;$(this.__pendingValue);){const i=this.__pendingValue;this.__pendingValue=_,i(this)}if(this.__pendingValue===_)return;const e=this.__pendingValue,n=this.value,r=e==null||n!=null&&(e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive),s=e!=null&&(n==null||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=ts(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=_}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const ts=t=>t&&(St?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function ns(t){let e=V.get(t.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},V.set(t.type,e));let n=e.stringsArray.get(t.strings);if(n!==void 0)return n;const r=t.strings.join(x);return n=e.keyString.get(r),n===void 0&&(n=new mt(t,t.getTemplateElement()),e.keyString.set(r,n)),e.stringsArray.set(t.strings,n),n}const V=new Map;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const M=new WeakMap,rs=(t,e,n)=>{let r=M.get(e);r===void 0&&(ve(e,e.firstChild),M.set(e,r=new K(Object.assign({templateFactory:ns},n))),r.appendInto(e)),r.setValue(t),r.commit()};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class ss{handleAttributeExpressions(e,n,r,s){const i=n[0];return i==="."?new Zr(e,n.slice(1),r).parts:i==="@"?[new es(e,n.slice(1),s.eventContext)]:i==="?"?[new Yr(e,n.slice(1),r)]:new _t(e,n,r).parts}handleTextExpression(e){return new K(e)}}const is=new ss;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window<"u"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const as=(t,...e)=>new bt(t,e,"html",is);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Et=(t,e)=>`${t}--${e}`;let G=!0;typeof window.ShadyCSS>"u"?G=!1:typeof window.ShadyCSS.prepareTemplateDom>"u"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),G=!1);const os=t=>e=>{const n=Et(e.type,t);let r=V.get(n);r===void 0&&(r={stringsArray:new WeakMap,keyString:new Map},V.set(n,r));let s=r.stringsArray.get(e.strings);if(s!==void 0)return s;const i=e.strings.join(x);if(s=r.keyString.get(i),s===void 0){const a=e.getTemplateElement();G&&window.ShadyCSS.prepareTemplateDom(a,t),s=new mt(e,a),r.keyString.set(i,s)}return r.stringsArray.set(e.strings,s),s},cs=["html","svg"],ls=t=>{cs.forEach(e=>{const n=V.get(Et(e,t));n!==void 0&&n.keyString.forEach(r=>{const{element:{content:s}}=r,i=new Set;Array.from(s.querySelectorAll("style")).forEach(a=>{i.add(a)}),yt(r,i)})})},vt=new Set,hs=(t,e,n)=>{vt.add(t);const r=n?n.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:i}=s;if(i===0){window.ShadyCSS.prepareTemplateStyles(r,t);return}const a=document.createElement("style");for(let u=0;u<i;u++){const p=s[u];p.parentNode.removeChild(p),a.textContent+=p.textContent}ls(t);const o=r.content;n?Kr(n,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const c=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&c!==null)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(n){o.insertBefore(a,o.firstChild);const u=new Set;u.add(a),yt(n,u)}},ds=(t,e,n)=>{if(!n||typeof n!="object"||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,s=M.has(e),i=G&&e.nodeType===11&&!!e.host,a=i&&!vt.has(r),o=a?document.createDocumentFragment():e;if(rs(t,o,Object.assign({templateFactory:os(r)},n)),a){const c=M.get(o);M.delete(o);const u=c.value instanceof pe?c.value.template:void 0;hs(r,o,u),ve(e,e.firstChild),e.appendChild(o),M.set(e,c)}!s&&i&&window.ShadyCSS.styleElement(e.host)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var Ct;window.JSCompiler_renameProperty=(t,e)=>t;const ge={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return t!==null;case Number:return t===null?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},xt=(t,e)=>e!==t&&(e===e||t===t),ee={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:xt},te=1,ne=4,re=8,se=16,ye="finalized";class Tt extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((n,r)=>{const s=this._attributeNameForProperty(r,n);s!==void 0&&(this._attributeToPropertyMap.set(s,r),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((n,r)=>this._classProperties.set(r,n))}}static createProperty(e,n=ee){if(this._ensureClassProperties(),this._classProperties.set(e,n),n.noAccessor||this.prototype.hasOwnProperty(e))return;const r=typeof e=="symbol"?Symbol():`__${e}`,s=this.getPropertyDescriptor(e,r,n);s!==void 0&&Object.defineProperty(this.prototype,e,s)}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(s){const i=this[e];this[n]=s,this.requestUpdateInternal(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||ee}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(ye)||e.finalize(),this[ye]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(n):[]];for(const s of r)this.createProperty(s,n[s])}}static _attributeNameForProperty(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,n,r=xt){return r(e,n)}static _propertyValueFromAttribute(e,n){const r=n.type,s=n.converter||ge,i=typeof s=="function"?s:s.fromAttribute;return i?i(e,r):e}static _propertyValueToAttribute(e,n){if(n.reflect===void 0)return;const r=n.type,s=n.converter;return(s&&s.toAttribute||ge.toAttribute)(e,r)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,n)=>{if(this.hasOwnProperty(n)){const r=this[n];delete this[n],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(n,r)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,n)=>this[n]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,n,r){n!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,n,r=ee){const s=this.constructor,i=s._attributeNameForProperty(e,r);if(i!==void 0){const a=s._propertyValueToAttribute(n,r);if(a===void 0)return;this._updateState=this._updateState|re,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._updateState=this._updateState&~re}}_attributeToProperty(e,n){if(this._updateState&re)return;const r=this.constructor,s=r._attributeToPropertyMap.get(e);if(s!==void 0){const i=r.getPropertyOptions(s);this._updateState=this._updateState|se,this[s]=r._propertyValueFromAttribute(n,i),this._updateState=this._updateState&~se}}requestUpdateInternal(e,n,r){let s=!0;if(e!==void 0){const i=this.constructor;r=r||i.getPropertyOptions(e),i._valueHasChanged(this[e],n,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,n),r.reflect===!0&&!(this._updateState&se)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,n){return this.requestUpdateInternal(e,n),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|ne;try{await this._updatePromise}catch{}const e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&ne}get hasUpdated(){return this._updateState&te}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const n=this._changedProperties;try{e=this.shouldUpdate(n),e?this.update(n):this._markUpdated()}catch(r){throw e=!1,this._markUpdated(),r}e&&(this._updateState&te||(this._updateState=this._updateState|te,this.firstUpdated(n)),this.updated(n))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~ne}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((n,r)=>this._propertyToAttribute(r,this[r],n)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Ct=ye;Tt[Ct]=!0;/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const be=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Te=Symbol();class Ie{constructor(e,n){if(n!==Te)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(be?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const us=t=>new Ie(String(t),Te),fs=t=>{if(t instanceof Ie)return t.cssText;if(typeof t=="number")return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},ps=(t,...e)=>{const n=e.reduce((r,s,i)=>r+fs(s)+t[i+1],t[0]);return new Ie(n,Te)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Je={};class Ae extends Tt{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const n=(i,a)=>i.reduceRight((o,c)=>Array.isArray(c)?n(c,o):(o.add(c),o),a),r=n(e,new Set),s=[];r.forEach(i=>s.unshift(i)),this._styles=s}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(n=>{if(n instanceof CSSStyleSheet&&!be){const r=Array.prototype.slice.call(n.cssRules).reduce((s,i)=>s+i.cssText,"");return us(r)}return n})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;e.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(n=>n.cssText),this.localName):be?this.renderRoot.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){const n=this.render();super.update(e),n!==Je&&this.constructor.render(n,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(r=>{const s=document.createElement("style");s.textContent=r.cssText,this.renderRoot.appendChild(s)}))}render(){return Je}}Ae.finalized=!0;Ae.render=ds;const ms=t=>class extends t{static get properties(){return{text:{type:String}}}constructor(){super()}};class gs extends ms(Ae){static get styles(){return ps`
      :host {
        display: inline-block;
      }
      i {
        display: inline-block;
        position: relative;
        width: 64px;
        height: 64px;
      }
      i div {
        animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: 32px 32px;
      }
      i div:after {
        content: " ";
        display: block;
        position: absolute;
        width: var(--dile-spinner-dot-size, 6px);
        height: var(--dile-spinner-dot-size, 6px);
        border-radius: 50%;
        background: var(--dile-spinner-color, #888);
        margin: -3px 0 0 -3px;
      }
      i div:nth-child(1) {
        animation-delay: -0.036s;
      }
      i div:nth-child(1):after {
        top: 50px;
        left: 50px;
      }
      i div:nth-child(2) {
        animation-delay: -0.072s;
      }
      i div:nth-child(2):after {
        top: 54px;
        left: 45px;
      }
      i div:nth-child(3) {
        animation-delay: -0.108s;
      }
      i div:nth-child(3):after {
        top: 57px;
        left: 39px;
      }
      i div:nth-child(4) {
        animation-delay: -0.144s;
      }
      i div:nth-child(4):after {
        top: 58px;
        left: 32px;
      }
      i div:nth-child(5) {
        animation-delay: -0.18s;
      }
      i div:nth-child(5):after {
        top: 57px;
        left: 25px;
      }
      i div:nth-child(6) {
        animation-delay: -0.216s;
      }
      i div:nth-child(6):after {
        top: 54px;
        left: 19px;
      }
      i div:nth-child(7) {
        animation-delay: -0.252s;
      }
      i div:nth-child(7):after {
        top: 50px;
        left: 14px;
      }
      i div:nth-child(8) {
        animation-delay: -0.288s;
      }
      i div:nth-child(8):after {
        top: 45px;
        left: 10px;
      }
      @keyframes lds-roller {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}render(){return as`<i><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></i>`}}window.customElements.define("simple-loader",gs);const Xe=["S","Sp","T'","T'p","Saav","Sav","Synn","Ser","H","J","V","L","N","B","D","K","E","A","F","T","W","G","M","C","R","P","Z","Zel","Ger","Arag","Gord","Lun","Bas","Leg","Arw","Yenn","Jasp","Fr","Dar","Wan","Fynn","Fann","Tann","Mar","Mer","Gwen","Rynn","Rhen","Lap","Rub","Saph","Seth","Raph","Luc","Maw","Mir","Min","Car","Cah","Har","Tr","Mer","Tor","El","Rh","Gwynn","Hel","Th","Dor","Gl","Ber","Lep","Rin","Valh","Cal"],ys=["a","o","e","i","y","u","ae","io","ei","ie","ai","au"],bs=["q","z","x","t","n","g","s","k","r","l","i","e","h","d","u","ng","don","lt","zee","ji","to","wen","gwen","byn","dor","fer","ko","mo","","no","las","wyn","myn","lys","lon","gon","wan","lynn","ck","log","phin","gold","ss","viel","vel","val","lian","ran","ron","ctra","brina","lina","na","vax","lax","nus","ni","niel","tian","fel","kian","rhys","vys","vas","fiel","fal","rin","lla","nthe","var","vor","ri","rion","tia","rys","ger"],_s=["Mage","Warrior","Thief","Archer","Healer","Bard","Witcher","Berserker","Necromancer","Cowcat"],ws=["Vulcan","Mercat","Vampire","Elf","Fairy","House Cat","Lynx","Goblin"],Ss=["Ger","Mor","Mord","Kazar","Torr","Dor","Far","Vallh","Nor","Por","Mirv","Mir","Kaer","Narh","Vol","Nil","Niv","Rov","Pov","Vars","Vorg","Varg","Tren","Vren","Trint","Ott","Van","Gwen","Tir","Bren","Lys","Hwyr"],Es=["udo","ia","ion","or","un","oria","aria","illa","ola","yin","alla","ir","aw","av","au","ar","au","ou","æn","ein","ain","ean"],Ye=["Swamp","Islands","Lake","Desert","Plains","Mountains","Meadow","City","Village","Forest","Castle","Ranch"],vs=["White","Orange","Brown","Black","Light brown"];let Cs=document.getElementById("cat"),xs=document.getElementById("catclass"),Ts=document.getElementById("catrace"),Is=document.getElementById("generate-button"),It=document.getElementById("cat-canvas").getContext("2d"),_e=document.getElementById("cat-container"),At=document.getElementById("download-button"),Ze=document.getElementById("loading-element"),h=[],l={};Os()&&(At.style="display: none;");function Pt(){Rs(),l=Ps(),l.origin[2].trim()=="Desert"&&h.push("images/backgrounds/Desert.png"),l.origin[2].trim()=="Swamp"&&h.push("images/backgrounds/Swamp.png"),l.origin[2].trim()=="Lake"&&h.push("images/backgrounds/Lake.png"),l.origin[2].trim()=="Meadow"&&h.push("images/backgrounds/Meadow.png"),l.origin[2].trim()=="Castle"&&h.push("images/backgrounds/Castle.png"),l.origin[2].trim()=="Islands"&&h.push("images/backgrounds/Islands.png"),l.origin[2].trim()=="Plains"&&h.push("images/backgrounds/Plains.png"),l.origin[2].trim()=="Village"&&h.push("images/backgrounds/Village.png"),l.origin[2].trim()=="City"&&h.push("images/backgrounds/City.png"),l.origin[2].trim()=="Forest"&&h.push("images/backgrounds/Forest.png"),l.origin[2].trim()=="Mountains"&&h.push("images/backgrounds/Mountains.png"),l.origin[2].trim()=="Ranch"&&h.push("images/backgrounds/Ranch.png"),h.push("images/shadow.png"),l.class=="Archer"&&h.push("images/classes//Archer_bow.png"),l.class=="Witcher"&&h.push("images/classes//Witcher_swords.png"),l.class=="Bard"&&h.push("images/classes//Bard.png"),l.class=="Warrior"&&h.push("images/classes//Warrior.png"),l.class=="Healer"&&h.push(`images/classes/Healer_band_${m(2)+1}.png`),l.colour=="White"&&h.push("images/body/skin_01.png"),l.colour=="Orange"&&h.push("images/body/skin_02.png"),l.colour=="Brown"&&h.push("images/body/skin_03.png"),l.colour=="Black"&&h.push("images/body/skin_04.png"),l.colour=="Light brown"&&h.push("images/body/skin_05.png"),h.push(`images/body/spot_${m(15)+1}.png`),h.push(`images/body/marking_${m(5)+1}.png`),h.push("images/body/outline.png"),h.push(`images/body/eye_colour_${m(17)+1}.png`),h.push(`images/body/eye_shape_${m(10)+1}.png`),h.push("images/body/mouth.png"),h.push(`images/body/mouth_add_0${m(4)+1}.png`),l.class=="Berserker"&&h.push("images/classes//Berserker.png"),l.race=="Fairy"&&h.push("images/races//Fairy.png"),l.race=="Lynx"&&h.push("images/races//Lynx.png"),l.race=="Vulcan"&&h.push("images/races//Vulcan.png"),l.race=="Goblin"&&h.push("images/races//Goblin.png"),l.race=="Vampire"&&h.push("images/races//Vampire.png"),l.race=="Elf"&&l.colour=="White"&&h.push("images/races//Elf_white.png"),l.race=="Elf"&&l.colour=="Orange"&&h.push("images/races//Elf_orange.png"),l.race=="Elf"&&l.colour=="Brown"&&h.push("images/races//Elf_brown.png"),l.race=="Elf"&&l.colour=="Black"&&h.push("images/races//Elf_black.png"),l.race=="Elf"&&l.colour=="Light brown"&&h.push("images/races//Elf_brown_light.png"),l.race=="Mercat"&&h.push(`images/races/Mercat_${m(3)+1}.png`),l.class=="Mage"&&h.push(`images/classes/Mage_${m(2)+1}.png`),l.class=="Necromancer"&&h.push("images/classes//Necromancer.png"),l.class=="Witcher"&&h.push("images/classes//Witcher.png"),l.class=="Archer"&&h.push("images/classes//Archer.png"),l.class=="Thief"&&h.push(`images/classes/Thief_${m(4)+1}.png`),l.class=="Healer"&&h.push(`images/classes/Healer_${m(2)+1}.png`),l.class=="Cowcat"&&h.push("images/classes//Cowcat.png"),l.class=="Bard"&&h.push(`images/classes/Bard_hat_${m(4)+1}.png`),h.push("images/watermark.png"),h.push("images/frame.png"),Ds(),Cs.innerText=l.name[0]+l.name[1]+l.name[2]+" of the "+l.origin[0]+l.origin[1]+l.origin[2],xs.innerText="Class: "+l.class,Ts.innerText="Race: "+l.race}function As(){Gr(_e).then(function(t){let e=document.createElement("a");e.download="my-fantasy-cat.jpeg",e.href=t,e.click()})}function Ps(){let t={name:[Xe[m(74)],ys[m(12)],bs[m(76)]],class:_s[m(10)],race:ws[m(8)],colour:vs[m(5)],origin:[Ss[m(32)],Es[m(22)]," "+Ye[m(12)]]};return t.race=="Vulcan"&&(t.name[0]=Xe[m(8)]),t.race=="Mercat"&&(t.origin[2]=" "+Ye[m(3)]),t}async function Ds(){_e.style="filter: blur(5px) brightness(0.5);",Ze.style="opacity: 10";let t=h.length;for(let e=0;e<=t;e++)await new Promise(function(n){let r=new Image;r.src=h[e],r.onload=()=>{It.drawImage(r,0,0),e==t-1&&(_e.style="",Ze.style="opacity: 0"),n()}})}function Rs(){It.clearRect(0,0,573,844),l={},h=[]}function m(t){return Math.floor(Math.random()*t)}new cursoreffects.fairyDustCursor({colors:["#d8a0ff","#b996ff","#fff9ff"]});const Bs={apiKey:"AIzaSyAXMAK8q4eDi3XsHJWn1_wvywp6B042R4I",authDomain:"fantasy-cat-generator.firebaseapp.com",projectId:"fantasy-cat-generator",storageBucket:"fantasy-cat-generator.appspot.com",messagingSenderId:"206567743551",appId:"1:206567743551:web:263d99027d6b9a7688588a"};function Os(){let t=navigator.userAgent.indexOf("Chrome")>-1;return navigator.userAgent.indexOf("Safari")>-1?!t:!1}Wn(Bs);window.onload=Pt();Is.addEventListener("click",Pt);At.addEventListener("click",As);
