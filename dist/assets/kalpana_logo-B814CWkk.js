const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.esm-BeaUk5Jz.js","assets/index-BGMN3VjR.js","assets/index-Hvc3lFQs.css"])))=>i.map(i=>d[i]);
var E_=Object.defineProperty;var __=(n,e,t)=>e in n?E_(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var J=(n,e,t)=>__(n,typeof e!="symbol"?e+"":e,t);import{_ as An,r as Fe,j as D_}from"./index-BGMN3VjR.js";const I_=()=>{};var od={};/**
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
 */const NC=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},w_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Gl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,u=s+2<n.length,l=u?n[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let C=(a&15)<<2|l>>6,I=l&63;u||(I=64,o||(C=64)),r.push(t[h],t[f],t[C],t[I])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(NC(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):w_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const f=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new T_;const C=i<<2|a>>4;if(r.push(C),l!==64){const I=a<<4&240|l>>2;if(r.push(I),f!==64){const v=l<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class T_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const y_=function(n){const e=NC(n);return Gl.encodeByteArray(e,!0)},Wa=function(n){return y_(n).replace(/\./g,"")},Hl=function(n){try{return Gl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function OC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const A_=()=>OC().__FIREBASE_DEFAULTS__,R_=()=>{if(typeof process>"u"||typeof od>"u")return;const n=od.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},v_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Hl(n[1]);return e&&JSON.parse(e)},vc=()=>{try{return I_()||A_()||R_()||v_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bC=n=>{var e,t;return(t=(e=vc())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},S_=n=>{const e=bC(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ql=()=>{var n;return(n=vc())==null?void 0:n.config},kC=n=>{var e;return(e=vc())==null?void 0:e[`_${n}`]};/**
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
 */class Ks{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function P_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Wa(JSON.stringify(t)),Wa(JSON.stringify(o)),""].join(".")}/**
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
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function N_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function O_(){var e;const n=(e=vc())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function b_(){return typeof window<"u"||LC()}function LC(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function k_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function L_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function F_(){const n=Nt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function M_(){return!O_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Oo(){try{return typeof indexedDB=="object"}catch{return!1}}function jl(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function FC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const V_="FirebaseError";class un extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=V_,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jr.prototype.create)}}class Jr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?x_(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new un(s,a,r)}}function x_(n,e){try{let t=0,r="";for(;t<n.length;){const s=n.indexOf("{$",t);if(s===-1){r+=n.substring(t);break}const i=n.indexOf("}",s+2);if(i===-1){r+=n.substring(t);break}const o=n.substring(s+2,i),a=e[o];r+=n.substring(t,s)+(a!=null?String(a):`<${o}?>`),t=i+1}return r}catch{return n}}function U_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Nr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(ad(i)&&ad(o)){if(!Nr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ad(n){return n!==null&&typeof n=="object"}/**
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
 */function si(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Hi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function qi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function G_(n,e){const t=new H_(n,e);return t.subscribe.bind(t)}class H_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");q_(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ou),s.error===void 0&&(s.error=Ou),s.complete===void 0&&(s.complete=Ou);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function q_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ou(){}/**
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
 */const J_=1e3,j_=2,K_=4*60*60*1e3,$_=.5;function cl(n,e=J_,t=j_){const r=e*Math.pow(t,n),s=Math.round($_*r*(Math.random()-.5)*2);return Math.min(K_,r+s)}/**
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
 */function le(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ii(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Kl(n){return(await fetch(n,{credentials:"include"})).ok}class Wt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ts="[DEFAULT]";/**
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
 */class z_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ks;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Q_(e))try{this.getOrInitializeService({instanceIdentifier:ts})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ts){return this.instances.has(e)}getOptions(e=ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:W_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ts){return this.component?this.component.multipleInstances?e:ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function W_(n){return n===ts?void 0:n}function Q_(n){return n.instantiationMode==="EAGER"}/**
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
 */class MC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new z_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const $l=[];var Re;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Re||(Re={}));const VC={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},Y_=Re.INFO,X_={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},Z_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=X_[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bo{constructor(e){this.name=e,this._logLevel=Y_,this._logHandler=Z_,this._userLogHandler=null,$l.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}function eD(n){$l.forEach(e=>{e.setLogLevel(n)})}function tD(n,e){for(const t of $l){let r=null;e&&e.level&&(r=VC[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(s,i,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");i>=(r??s.logLevel)&&n({level:Re[i].toLowerCase(),message:a,args:o,type:s.name})}}}const nD=(n,e)=>e.some(t=>n instanceof t);let cd,ud;function rD(){return cd||(cd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sD(){return ud||(ud=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xC=new WeakMap,ul=new WeakMap,UC=new WeakMap,bu=new WeakMap,zl=new WeakMap;function iD(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Qn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&xC.set(t,n)}).catch(()=>{}),zl.set(e,n),e}function oD(n){if(ul.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});ul.set(n,e)}let ll={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ul.get(n);if(e==="objectStoreNames")return n.objectStoreNames||UC.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Qn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function aD(n){ll=n(ll)}function cD(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ku(this),e,...t);return UC.set(r,e.sort?e.sort():[e]),Qn(r)}:sD().includes(n)?function(...e){return n.apply(ku(this),e),Qn(xC.get(this))}:function(...e){return Qn(n.apply(ku(this),e))}}function uD(n){return typeof n=="function"?cD(n):(n instanceof IDBTransaction&&oD(n),nD(n,rD())?new Proxy(n,ll):n)}function Qn(n){if(n instanceof IDBRequest)return iD(n);if(bu.has(n))return bu.get(n);const e=uD(n);return e!==n&&(bu.set(n,e),zl.set(e,n)),e}const ku=n=>zl.get(n);function GC(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=Qn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Qn(o.result),u.oldVersion,u.newVersion,Qn(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}function Kb(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),Qn(t).then(()=>{})}const lD=["get","getKey","getAll","getAllKeys","count"],BD=["put","add","delete","clear"],Lu=new Map;function ld(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Lu.get(e))return Lu.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=BD.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||lD.includes(t)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&u.done]))[0]};return Lu.set(e,i),i}aD(n=>({...n,get:(e,t,r)=>ld(e,t)||n.get(e,t,r),has:(e,t)=>!!ld(e,t)||n.has(e,t)}));/**
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
 */class hD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dD(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function dD(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qa="@firebase/app",Bl="0.16.0";/**
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
 */const tr=new bo("@firebase/app"),fD="@firebase/app-compat",CD="@firebase/analytics-compat",pD="@firebase/analytics",gD="@firebase/app-check-compat",mD="@firebase/app-check",ED="@firebase/auth",_D="@firebase/auth-compat",DD="@firebase/database",ID="@firebase/data-connect",wD="@firebase/database-compat",TD="@firebase/functions",yD="@firebase/functions-compat",AD="@firebase/installations",RD="@firebase/installations-compat",vD="@firebase/messaging",SD="@firebase/messaging-compat",PD="@firebase/performance",ND="@firebase/performance-compat",OD="@firebase/remote-config",bD="@firebase/remote-config-compat",kD="@firebase/storage",LD="@firebase/storage-compat",FD="@firebase/firestore",MD="@firebase/ai",VD="@firebase/firestore-compat",xD="firebase",UD="12.17.0";/**
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
 */const ao="[DEFAULT]",GD={[Qa]:"fire-core",[fD]:"fire-core-compat",[pD]:"fire-analytics",[CD]:"fire-analytics-compat",[mD]:"fire-app-check",[gD]:"fire-app-check-compat",[ED]:"fire-auth",[_D]:"fire-auth-compat",[DD]:"fire-rtdb",[ID]:"fire-data-connect",[wD]:"fire-rtdb-compat",[TD]:"fire-fn",[yD]:"fire-fn-compat",[AD]:"fire-iid",[RD]:"fire-iid-compat",[vD]:"fire-fcm",[SD]:"fire-fcm-compat",[PD]:"fire-perf",[ND]:"fire-perf-compat",[OD]:"fire-rc",[bD]:"fire-rc-compat",[kD]:"fire-gcs",[LD]:"fire-gcs-compat",[FD]:"fire-fst",[VD]:"fire-fst-compat",[MD]:"fire-vertex","fire-js":"fire-js",[xD]:"fire-js-all"};/**
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
 */const Or=new Map,$s=new Map,zs=new Map;function hl(n,e){try{n.container.addComponent(e)}catch(t){tr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function HD(n,e){n.container.addOrOverwriteComponent(e)}function Qt(n){const e=n.name;if(zs.has(e))return tr.debug(`There were multiple attempts to register component ${e}.`),!1;zs.set(e,n);for(const t of Or.values())hl(t,n);for(const t of $s.values())hl(t,n);return!0}function Cn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function qD(n,e,t=ao){Cn(n,e).clearInstance(t)}function Wl(n){return n.options!==void 0}function HC(n){return Wl(n)?!1:"authIdToken"in n||"appCheckToken"in n||"releaseOnDeref"in n||"automaticDataCollectionEnabled"in n}function Qe(n){return n==null?!1:n.settings!==void 0}function JD(){zs.clear()}/**
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
 */const jD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jt=new Jr("app","Firebase",jD);/**
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
 */class qC{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Bd(n,e){const t=Hl(n.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const s=JSON.parse(t).exp*1e3,i=new Date().getTime();s-i<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class KD extends qC{constructor(e,t,r,s){const i=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!0,o={name:r,automaticDataCollectionEnabled:i};if(e.apiKey!==void 0)super(e,o,s);else{const a=e;super(a.options,o,s)}this._serverConfig={automaticDataCollectionEnabled:i,...t},this._serverConfig.authIdToken&&Bd(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&Bd(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,At(Qa,Bl,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){jC(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw jt.create("server-app-deleted")}}/**
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
 */const jr=UD;function co(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:ao,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw jt.create("bad-app-name",{appName:String(s)});if(t||(t=ql()),!t)throw jt.create("no-options");const i=Or.get(s);if(i)if(Nr(t,i.options)){if(Nr(r,i.config))return i;throw jt.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(r)})}else throw jt.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new MC(s);for(const u of zs.values())o.addComponent(u);const a=new qC(t,r,o);return Or.set(s,a),a}function $D(n,e={}){if(b_()&&!LC())throw jt.create("invalid-server-app-environment");let t,r=e||{};if(n&&(Wl(n)?t=n.options:HC(n)?r=n:t=n),r.automaticDataCollectionEnabled===void 0&&(r.automaticDataCollectionEnabled=!0),t||(t=ql()),!t)throw jt.create("no-options");const s={...r,...t};s.releaseOnDeref!==void 0&&delete s.releaseOnDeref;const i=h=>[...h].reduce((f,C)=>Math.imul(31,f)+C.charCodeAt(0)|0,0);if(r.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw jt.create("finalization-registry-not-supported",{});const o=""+i(JSON.stringify(s)),a=$s.get(o);if(a)return a.incRefCount(r.releaseOnDeref),a;const u=new MC(o);for(const h of zs.values())u.addComponent(h);const l=new KD(t,r,o,u);return $s.set(o,l),l}function oi(n=ao){const e=Or.get(n);if(!e&&n===ao&&ql())return co();if(!e)throw jt.create("no-app",{appName:n});return e}function JC(){return Array.from(Or.values())}async function jC(n){let e=!1;const t=n.name;Or.has(t)?(e=!0,Or.delete(t)):$s.has(t)&&n.decRefCount()<=0&&($s.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function At(n,e,t){let r=GD[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tr.warn(o.join(" "));return}Qt(new Wt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function zD(n,e){if(n!==null&&typeof n!="function")throw jt.create("invalid-log-argument");tD(n,e)}function WD(n){eD(n)}/**
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
 */const QD="firebase-heartbeat-database",YD=1,uo="firebase-heartbeat-store";let Fu=null;function KC(){return Fu||(Fu=GC(QD,YD,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(uo)}catch(t){console.warn(t)}}}}).catch(n=>{throw jt.create("idb-open",{originalErrorMessage:n.message})})),Fu}async function XD(n){try{const t=(await KC()).transaction(uo),r=await t.objectStore(uo).get($C(n));return await t.done,r}catch(e){if(e instanceof un)tr.warn(e.message);else{const t=jt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tr.warn(t.message)}}}async function hd(n,e){try{const r=(await KC()).transaction(uo,"readwrite");await r.objectStore(uo).put(e,$C(n)),await r.done}catch(t){if(t instanceof un)tr.warn(t.message);else{const r=jt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});tr.warn(r.message)}}}function $C(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ZD=1024,eI=30;class tI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rI(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=dd();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>eI){const o=sI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){tr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=dd(),{heartbeatsToSend:r,unsentEntries:s}=nI(this._heartbeatsCache.heartbeats),i=Wa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return tr.warn(t),""}}}function dd(){return new Date().toISOString().substring(0,10)}function nI(n,e=ZD){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),fd(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),fd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class rI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oo()?jl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await XD(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return hd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return hd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function fd(n){return Wa(JSON.stringify({version:2,heartbeats:n})).length}function sI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function iI(n){Qt(new Wt("platform-logger",e=>new hD(e),"PRIVATE")),Qt(new Wt("heartbeat",e=>new tI(e),"PRIVATE")),At(Qa,Bl,n),At(Qa,Bl,"esm2020"),At("fire-js","")}/**
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
 */iI("");/**
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
 */const oI={PHONE:"phone",TOTP:"totp"},aI={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},cI={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},uI={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},lI={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function BI(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function zC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hI=BI,WC=zC,QC=new Jr("auth","Firebase",zC()),dI={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_PASSWORD:"auth/missing-password",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
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
 */const Ya=new bo("@firebase/auth");function YC(n,...e){Ya.logLevel<=Re.WARN&&Ya.warn(`Auth (${jr}): ${n}`,...e)}function Va(n,...e){Ya.logLevel<=Re.ERROR&&Ya.error(`Auth (${jr}): ${n}`,...e)}/**
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
 */function Yt(n,...e){throw Yl(n,...e)}function Ft(n,...e){return Yl(n,...e)}function Ql(n,e,t){const r={...WC(),[e]:t};return new Jr("auth","Firebase",r).create(e,{appName:n.name})}function It(n){return Ql(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ai(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Yt(n,"argument-error"),Ql(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return QC.create(n,...e)}function q(n,e,...t){if(!n)throw Yl(e,...t)}function Rn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Va(e),new Error(e)}function nr(n,e){n||Rn(e)}/**
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
 */function lo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Xl(){return Cd()==="http:"||Cd()==="https:"}function Cd(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function fI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xl()||Jl()||"connection"in navigator)?navigator.onLine:!0}function CI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ko{constructor(e,t){this.shortDelay=e,this.longDelay=t,nr(t>e,"Short delay should be less than long delay!"),this.isMobile=N_()||L_()}get(){return fI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zl(n,e){nr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class XC{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mI=new ko(3e4,6e4);function Xe(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ze(n,e,t,r,s={}){return ZC(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=si({...o,key:n.config.apiKey}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const l={method:e,headers:u,...i};return k_()||(l.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&ii(n.emulatorConfig.host)&&(l.credentials="include"),XC.fetch()(await ep(n,n.config.apiHost,t,a),l)})}async function ZC(n,e,t){n._canInitEmulator=!1;const r={...pI,...e};try{const s=new _I(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ji(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ji(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ji(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ji(n,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ql(n,h,l);Yt(n,h)}}catch(s){if(s instanceof un)throw s;Yt(n,"network-request-failed",{message:String(s)})}}async function or(n,e,t,r,s={}){const i=await Ze(n,e,t,r,s);return"mfaPendingCredential"in i&&Yt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function ep(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Zl(n.config,s):`${n.config.apiScheme}://${s}`;return gI.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function EI(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _I{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ft(this.auth,"network-request-failed")),mI.get())})}}function Ji(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ft(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */function pd(n){return n!==void 0&&n.getResponse!==void 0}function gd(n){return n!==void 0&&n.enterprise!==void 0}class tp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return EI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function DI(n){return(await Ze(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function np(n,e){return Ze(n,"GET","/v2/recaptchaConfig",Xe(n,e))}/**
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
 */async function II(n,e){return Ze(n,"POST","/v1/accounts:delete",e)}async function wI(n,e){return Ze(n,"POST","/v1/accounts:update",e)}async function Xa(n,e){return Ze(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function zi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
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
 */function TI(n,e=!1){return le(n).getIdToken(e)}async function rp(n,e=!1){const t=le(n),r=await t.getIdToken(e),s=Sc(r);q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:zi(Mu(s.auth_time)),issuedAtTime:zi(Mu(s.iat)),expirationTime:zi(Mu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Mu(n){return Number(n)*1e3}function Sc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Va("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hl(t);return s?JSON.parse(s):(Va("Failed to decode base64 JWT payload"),null)}catch(s){return Va("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function md(n){const e=Sc(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function rr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof un&&yI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function yI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class AI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zi(this.lastLoginAt),this.creationTime=zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bo(n){var f;const e=n.auth,t=await n.getIdToken(),r=await rr(n,Xa(e,{idToken:t}));q(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(f=s.providerUserInfo)!=null&&f.length?ip(s.providerUserInfo):[],o=RI(n.providerData,i),a=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),l=a?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new dl(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function sp(n){const e=le(n);await Bo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RI(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ip(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function vI(n,e){const t=await ZC(n,{},async()=>{const r=si({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await ep(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:a,body:r};return n.emulatorConfig&&ii(n.emulatorConfig.host)&&(u.credentials="include"),XC.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function SI(n,e){return Ze(n,"POST","/v2/accounts:revokeToken",Xe(n,e))}/**
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
 */class Gs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):md(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=md(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await vI(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Gs;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gs,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
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
 */function pr(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class pn{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new AI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new dl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await rr(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return rp(this,e)}reload(){return sp(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new pn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Bo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qe(this.auth.app))return Promise.reject(It(this.auth));const e=await this.getIdToken();return await rr(this,II(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,u=t._redirectEventId??void 0,l=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:f,emailVerified:C,isAnonymous:I,providerData:v,stsTokenManager:V}=t;q(f&&V,e,"internal-error");const H=Gs.fromJSON(this.name,V);q(typeof f=="string",e,"internal-error"),pr(r,e.name),pr(s,e.name),q(typeof C=="boolean",e,"internal-error"),q(typeof I=="boolean",e,"internal-error"),pr(i,e.name),pr(o,e.name),pr(a,e.name),pr(u,e.name),pr(l,e.name),pr(h,e.name);const Y=new pn({uid:f,auth:e,email:s,emailVerified:C,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:H,createdAt:l,lastLoginAt:h});return v&&Array.isArray(v)&&(Y.providerData=v.map(ie=>({...ie}))),u&&(Y._redirectEventId=u),Y}static async _fromIdTokenResponse(e,t,r=!1){const s=new Gs;s.updateFromServerResponse(t);const i=new pn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Bo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ip(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Gs;a.updateFromIdToken(r);const u=new pn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new dl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,l),u}}/**
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
 */const Ed=new Map;function Kn(n){nr(n instanceof Function,"Expected a class definition");let e=Ed.get(n);return e?(nr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ed.set(n,e),e)}/**
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
 */class op{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}op.type="NONE";const fl=op;/**
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
 */function xa(n,e,t){return`firebase:${n}:${e}:${t}`}class Hs{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xa(this.userKey,s.apiKey,i),this.fullPersistenceKey=xa("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Xa(this.auth,{idToken:e}).catch(()=>{});return t?pn._fromGetAccountInfoResponse(this.auth,t,e):null}return pn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Hs(Kn(fl),e,r);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Kn(fl);const o=xa(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const h=await l._get(o);if(h){let f;if(typeof h=="string"){const C=await Xa(e,{idToken:h}).catch(()=>{});if(!C)break;f=await pn._fromGetAccountInfoResponse(e,C,h)}else f=pn._fromJSON(e,h);l!==i&&(a=f),i=l;break}}catch{}const u=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Hs(i,e,r):(i=u[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Hs(i,e,r))}}/**
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
 */function _d(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ap(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hp(e))return"Blackberry";if(dp(e))return"Webos";if(cp(e))return"Safari";if((e.includes("chrome/")||up(e))&&!e.includes("edge/"))return"Chrome";if(Bp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ap(n=Nt()){return/firefox\//i.test(n)}function cp(n=Nt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function up(n=Nt()){return/crios\//i.test(n)}function lp(n=Nt()){return/iemobile/i.test(n)}function Bp(n=Nt()){return/android/i.test(n)}function hp(n=Nt()){return/blackberry/i.test(n)}function dp(n=Nt()){return/webos/i.test(n)}function eB(n=Nt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function PI(n=Nt()){var e;return eB(n)&&!!((e=window.navigator)!=null&&e.standalone)}function NI(){return F_()&&document.documentMode===10}function fp(n=Nt()){return eB(n)||Bp(n)||dp(n)||hp(n)||/windows phone/i.test(n)||lp(n)}/**
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
 */function Cp(n,e=[]){let t;switch(n){case"Browser":t=_d(Nt());break;case"Worker":t=`${_d(Nt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${jr}/${r}`}/**
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
 */class OI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const u=e(i);o(u)}catch(u){a(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function bI(n,e={}){return Ze(n,"GET","/v2/passwordPolicy",Xe(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const kI=6;class LI{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??kI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class FI{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dd(this),this.idTokenSubscription=new Dd(this),this.beforeStateQueue=new OI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=QC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Kn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Hs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xa(this,{idToken:e}),r=await pn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Qe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qe(this.app))return Promise.reject(It(this));const t=e?le(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qe(this.app)?Promise.reject(It(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qe(this.app)?Promise.reject(It(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bI(this),t=new LI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Jr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await SI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Kn(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await Hs.create(this,[Kn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&YC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function st(n){return le(n)}class Dd{constructor(e){this.auth=e,this.observer=null,this.addObserver=G_(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Lo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MI(n){Lo=n}function tB(n){return Lo.loadJS(n)}function VI(){return Lo.recaptchaV2Script}function xI(){return Lo.recaptchaEnterpriseScript}function UI(){return Lo.gapiScript}function pp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const GI=500,HI=6e4,ma=1e12;class qI{constructor(e){this.auth=e,this.counter=ma,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new KI(e,this.auth.name,t||{})),this.counter++,r}reset(e){var r;const t=e||ma;(r=this._widgets.get(t))==null||r.delete(),this._widgets.delete(t)}getResponse(e){var r;const t=e||ma;return((r=this._widgets.get(t))==null?void 0:r.getResponse())||""}async execute(e){var r;const t=e||ma;return(r=this._widgets.get(t))==null||r.execute(),""}}class JI{constructor(){this.enterprise=new jI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class jI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class KI{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;q(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=$I(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},HI)},GI))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function $I(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const zI="recaptcha-enterprise",Wi="NO_RECAPTCHA",Id="onFirebaseAuthREInstanceReady";class Un{constructor(e){this.type=zI,this.auth=st(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{np(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new tp(u);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(u=>{a(u)})})}function s(i,o,a){const u=window.grecaptcha;gd(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Wi)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new JI().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(async a=>{if(!t&&gd(window.grecaptcha)&&Un.scriptInjectionDeferred)await Un.scriptInjectionDeferred.promise,s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=xI();u.length!==0&&(u+=a+`&onload=${Id}`),Un.scriptInjectionDeferred=new Ks,window[Id]=()=>{var l;(l=Un.scriptInjectionDeferred)==null||l.resolve()},tB(u).then(()=>{var l;return(l=Un.scriptInjectionDeferred)==null?void 0:l.promise}).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}Un.scriptInjectionDeferred=null;async function xi(n,e,t,r=!1,s=!1){const i=new Un(n);let o;if(s)o=Wi;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const u=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const u=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Tr(n,e,t,r,s){var i,o;if(s==="EMAIL_PASSWORD_PROVIDER")if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await xi(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await xi(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(a)});else if(s==="PHONE_PROVIDER")if((o=n._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await xi(n,e,t);return r(n,a).catch(async u=>{var l;if(((l=n._getRecaptchaConfig())==null?void 0:l.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const h=await xi(n,e,t,!1,!0);return r(n,h)}return Promise.reject(u)})}else{const a=await xi(n,e,t,!1,!0);return r(n,a)}else return Promise.reject(s+" provider is not supported.")}async function gp(n){const e=st(n),t=await np(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new tp(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Un(e).verify()}/**
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
 */function mp(n,e){const t=Cn(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Nr(i,e??{}))return s;Yt(s,"already-initialized")}return t.initialize({options:e})}function WI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Kn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ep(n,e,t){const r=st(n);q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=_p(e),{host:o,port:a}=QI(e),u=a===null?"":`:${a}`,l={url:`${i}//${o}${u}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(Nr(l,r.config.emulator)&&Nr(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,ii(o)?Kl(`${i}//${o}${u}`):s||YI()}function _p(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function QI(n){const e=_p(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:wd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:wd(o)}}}function wd(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function YI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ci{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,t){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}/**
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
 */async function Dp(n,e){return Ze(n,"POST","/v1/accounts:resetPassword",Xe(n,e))}async function XI(n,e){return Ze(n,"POST","/v1/accounts:update",e)}async function ZI(n,e){return Ze(n,"POST","/v1/accounts:signUp",e)}async function ew(n,e){return Ze(n,"POST","/v1/accounts:update",Xe(n,e))}/**
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
 */async function tw(n,e){return or(n,"POST","/v1/accounts:signInWithPassword",Xe(n,e))}async function Pc(n,e){return Ze(n,"POST","/v1/accounts:sendOobCode",Xe(n,e))}async function nw(n,e){return Pc(n,e)}async function rw(n,e){return Pc(n,e)}async function sw(n,e){return Pc(n,e)}async function iw(n,e){return Pc(n,e)}/**
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
 */async function ow(n,e){return or(n,"POST","/v1/accounts:signInWithEmailLink",Xe(n,e))}async function aw(n,e){return or(n,"POST","/v1/accounts:signInWithEmailLink",Xe(n,e))}/**
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
 */class Ws extends ci{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ws(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ws(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tr(e,t,"signInWithPassword",tw,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ow(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tr(e,r,"signUpPassword",ZI,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return aw(e,{idToken:t,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Yn(n,e){return or(n,"POST","/v1/accounts:signInWithIdp",Xe(n,e))}/**
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
 */const cw="http://localhost";class bn extends ci{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Yt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new bn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Yn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Yn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yn(e,t)}buildRequest(){const e={requestUri:cw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=si(t)}return e}}/**
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
 */async function Td(n,e){return Ze(n,"POST","/v1/accounts:sendVerificationCode",Xe(n,e))}async function uw(n,e){return or(n,"POST","/v1/accounts:signInWithPhoneNumber",Xe(n,e))}async function lw(n,e){const t=await or(n,"POST","/v1/accounts:signInWithPhoneNumber",Xe(n,e));if(t.temporaryProof)throw Ji(n,"account-exists-with-different-credential",t);return t}const Bw={USER_NOT_FOUND:"user-not-found"};async function hw(n,e){const t={...e,operation:"REAUTH"};return or(n,"POST","/v1/accounts:signInWithPhoneNumber",Xe(n,t),Bw)}/**
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
 */class yr extends ci{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new yr({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new yr({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return uw(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return lw(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return hw(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!t&&!s&&!i?null:new yr({verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
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
 */function dw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fw(n){const e=Hi(qi(n)).link,t=e?Hi(qi(e)).deep_link_id:null,r=Hi(qi(n)).deep_link_id;return(r?Hi(qi(r)).link:null)||r||t||e||n}class ui{constructor(e){const t=Hi(qi(e)),r=t.apiKey??null,s=t.oobCode??null,i=dw(t.mode??null);q(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=fw(e);try{return new ui(t)}catch{return null}}}function Cw(n){return ui.parseLink(n)}/**
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
 */class Kr{constructor(){this.providerId=Kr.PROVIDER_ID}static credential(e,t){return Ws._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ui.parseLink(t);return q(r,"argument-error"),Ws._fromEmailAndCode(e,r.code,r.tenantId)}}Kr.PROVIDER_ID="password";Kr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Kr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ar{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class li extends ar{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Qi extends li{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return q("providerId"in t&&"signInMethod"in t,"argument-error"),bn._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return q(e.idToken||e.accessToken,"argument-error"),bn._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Qi.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Qi.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:a}=e;if(!r&&!s&&!t&&!i||!a)return null;try{return new Qi(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:i})}catch{return null}}}/**
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
 */class Gn extends li{constructor(){super("facebook.com")}static credential(e){return bn._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
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
 */class Hn extends li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return bn._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Hn.credential(t,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
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
 */class qn extends li{constructor(){super("github.com")}static credential(e){return bn._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
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
 */const pw="http://localhost";class ho extends ci{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Yn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Yn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yn(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,pendingToken:i}=t;return!r||!s||!i||r!==s?null:new ho(r,i)}static _create(e,t){return new ho(e,t)}buildRequest(){return{requestUri:pw,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const gw="saml.";class Za extends ar{constructor(e){q(e.startsWith(gw),"argument-error"),super(e)}static credentialFromResult(e){return Za.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Za.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=ho.fromJSON(e);return q(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return ho._create(r,t)}catch{return null}}}/**
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
 */class Jn extends li{constructor(){super("twitter.com")}static credential(e,t){return bn._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Jn.credential(t,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
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
 */async function Ip(n,e){return or(n,"POST","/v1/accounts:signUp",Xe(n,e))}/**
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
 */class dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await pn._fromIdTokenResponse(e,r,s),o=yd(r);return new dn({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=yd(r);return new dn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function yd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function mw(n){var s;if(Qe(n.app))return Promise.reject(It(n));const e=st(n);if(await e._initializationPromise,(s=e.currentUser)!=null&&s.isAnonymous)return new dn({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await Ip(e,{returnSecureToken:!0}),r=await dn._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(r.user),r}/**
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
 */class ec extends un{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ec.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ec(e,t,r,s)}}function wp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ec._fromErrorAndOperation(n,i,e,r):i})}/**
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
 */function Tp(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function Ew(n,e){const t=le(n);await Nc(!0,t,e);const{providerUserInfo:r}=await wI(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),s=Tp(r||[]);return t.providerData=t.providerData.filter(i=>s.has(i.providerId)),s.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function nB(n,e,t=!1){const r=await rr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return dn._forOperation(n,"link",r)}async function Nc(n,e,t){await Bo(e);const r=Tp(e.providerData),s=n===!1?"provider-already-linked":"no-such-provider";q(r.has(t)===n,e.auth,s)}/**
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
 */async function yp(n,e,t=!1){const{auth:r}=n;if(Qe(r.app))return Promise.reject(It(r));const s="reauthenticate";try{const i=await rr(n,wp(r,s,e,n),t);q(i.idToken,r,"internal-error");const o=Sc(i.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(n.uid===a,r,"user-mismatch"),dn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),i}}/**
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
 */async function Ap(n,e,t=!1){if(Qe(n.app))return Promise.reject(It(n));const r="signIn",s=await wp(n,r,e),i=await dn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Oc(n,e){return Ap(st(n),e)}async function Rp(n,e){const t=le(n);return await Nc(!1,t,e.providerId),nB(t,e)}async function vp(n,e){return yp(le(n),e)}/**
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
 */async function _w(n,e){return or(n,"POST","/v1/accounts:signInWithCustomToken",Xe(n,e))}/**
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
 */async function Dw(n,e){if(Qe(n.app))return Promise.reject(It(n));const t=st(n),r=await _w(t,{token:e,returnSecureToken:!0}),s=await dn._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(s.user),s}/**
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
 */class Fo{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?rB._fromServerResponse(e,t):"totpInfo"in t?sB._fromServerResponse(e,t):Yt(e,"internal-error")}}class rB extends Fo{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new rB(t)}}class sB extends Fo{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new sB(t)}}/**
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
 */function bc(n,e,t){var r;q(((r=t.url)==null?void 0:r.length)>0,n,"invalid-continue-uri"),q(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),q(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(q(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(q(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function iB(n){const e=st(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Iw(n,e,t){const r=st(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&bc(r,s,t),await Tr(r,s,"getOobCode",rw,"EMAIL_PASSWORD_PROVIDER")}async function ww(n,e,t){await Dp(le(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iB(n),r})}async function Tw(n,e){await ew(le(n),{oobCode:e})}async function Sp(n,e){const t=le(n),r=await Dp(t,{oobCode:e}),s=r.requestType;switch(q(s,t,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":q(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":q(r.mfaInfo,t,"internal-error");default:q(r.email,t,"internal-error")}let i=null;return r.mfaInfo&&(i=Fo._fromServerResponse(st(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:i},operation:s}}async function yw(n,e){const{data:t}=await Sp(le(n),e);return t.email}async function Aw(n,e,t){if(Qe(n.app))return Promise.reject(It(n));const r=st(n),o=await Tr(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ip,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&iB(n),u}),a=await dn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Pp(n,e,t){return Qe(n.app)?Promise.reject(It(n)):Oc(le(n),Kr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iB(n),r})}/**
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
 */async function Rw(n,e,t){const r=st(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function i(o,a){q(a.handleCodeInApp,r,"argument-error"),a&&bc(r,o,a)}i(s,t),await Tr(r,s,"getOobCode",sw,"EMAIL_PASSWORD_PROVIDER")}function vw(n,e){const t=ui.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function Sw(n,e,t){if(Qe(n.app))return Promise.reject(It(n));const r=le(n),s=Kr.credentialWithLink(e,t||lo());return q(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Oc(r,s)}/**
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
 */async function Pw(n,e){return Ze(n,"POST","/v1/accounts:createAuthUri",Xe(n,e))}/**
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
 */async function Nw(n,e){const t=Xl()?lo():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:s}=await Pw(le(n),r);return s||[]}async function Ow(n,e){const t=le(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&bc(t.auth,s,e);const{email:i}=await nw(t.auth,s);i!==n.email&&await n.reload()}async function bw(n,e,t){const r=le(n),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&bc(r.auth,i,t);const{email:o}=await iw(r.auth,i);o!==n.email&&await n.reload()}/**
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
 */async function kw(n,e){return Ze(n,"POST","/v1/accounts:update",e)}/**
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
 */async function Lw(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=le(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await rr(r,kw(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Fw(n,e){const t=le(n);return Qe(t.auth.app)?Promise.reject(It(t.auth)):Np(t,e,null)}function Mw(n,e){return Np(le(n),null,e)}async function Np(n,e,t){const{auth:r}=n,i={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(i.email=e),t&&(i.password=t);const o=await rr(n,XI(r,i));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function Vw(n){var s,i;if(!n)return null;const{providerId:e}=n,t=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},r=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(n!=null&&n.idToken)){const o=(i=(s=Sc(n.idToken))==null?void 0:s.firebase)==null?void 0:i.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new qs(r,a)}}if(!e)return null;switch(e){case"facebook.com":return new xw(r,t);case"github.com":return new Uw(r,t);case"google.com":return new Gw(r,t);case"twitter.com":return new Hw(r,t,n.screenName||null);case"custom":case"anonymous":return new qs(r,null);default:return new qs(r,e,t)}}class qs{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class Op extends qs{constructor(e,t,r,s){super(e,t,r),this.username=s}}class xw extends qs{constructor(e,t){super(e,"facebook.com",t)}}class Uw extends Op{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class Gw extends qs{constructor(e,t){super(e,"google.com",t)}}class Hw extends Op{constructor(e,t,r){super(e,"twitter.com",t,r)}}function qw(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:Vw(t)}/**
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
 */function Jw(n,e){return le(n).setPersistence(e)}function jw(n){return gp(n)}async function Kw(n,e){return st(n).validatePassword(e)}function bp(n,e,t,r){return le(n).onIdTokenChanged(e,t,r)}function kp(n,e,t){return le(n).beforeAuthStateChanged(e,t)}function $w(n,e,t,r){return le(n).onAuthStateChanged(e,t,r)}function zw(n){le(n).useDeviceLanguage()}function Ww(n,e){return le(n).updateCurrentUser(e)}function Qw(n){return le(n).signOut()}function Yw(n,e){return st(n).revokeAccessToken(e)}async function Xw(n){return le(n).delete()}/**
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
 */class is{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new is("enroll",e,t)}static _fromMfaPendingCredential(e){return new is("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if((t=e.multiFactorSession)!=null&&t.pendingCredential)return is._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((r=e.multiFactorSession)!=null&&r.idToken)return is._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class oB{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=st(e),s=t.customData._serverResponse,i=(s.mfaInfo||[]).map(a=>Fo._fromServerResponse(r,a));q(s.mfaPendingCredential,r,"internal-error");const o=is._fromMfaPendingCredential(s.mfaPendingCredential);return new oB(o,i,async a=>{const u=await a._process(r,o);delete s.mfaInfo,delete s.mfaPendingCredential;const l={...s,idToken:u.idToken,refreshToken:u.refreshToken};switch(t.operationType){case"signIn":const h=await dn._fromIdTokenResponse(r,t.operationType,l);return await r._updateCurrentUser(h.user),h;case"reauthenticate":return q(t.user,r,"internal-error"),dn._forOperation(t.user,t.operationType,l);default:Yt(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Zw(n,e){var s;const t=le(n),r=e;return q(e.customData.operationType,t,"argument-error"),q((s=r.customData._serverResponse)==null?void 0:s.mfaPendingCredential,t,"argument-error"),oB._fromError(t,r)}/**
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
 */function Ad(n,e){return Ze(n,"POST","/v2/accounts/mfaEnrollment:start",Xe(n,e))}function eT(n,e){return Ze(n,"POST","/v2/accounts/mfaEnrollment:finalize",Xe(n,e))}function tT(n,e){return Ze(n,"POST","/v2/accounts/mfaEnrollment:start",Xe(n,e))}function nT(n,e){return Ze(n,"POST","/v2/accounts/mfaEnrollment:finalize",Xe(n,e))}function rT(n,e){return Ze(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Xe(n,e))}class aB{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Fo._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new aB(e)}async getSession(){return is._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,s=await this.getSession(),i=await rr(this.user,r._process(this.user.auth,s,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const s=await rr(this.user,rT(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:i})=>i!==t),await this.user._updateTokensIfNecessary(s),await this.user.reload()}catch(s){throw s}}}const Vu=new WeakMap;function sT(n){const e=le(n);return Vu.has(e)||Vu.set(e,aB._fromUser(e)),Vu.get(e)}const tc="__sak";/**
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
 */class Lp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(tc,"1"),this.storage.removeItem(tc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const iT=1e3,oT=10;class Fp extends Lp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);NI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,oT):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},iT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fp.type="LOCAL";const Mp=Fp;/**
 * @license
 * Copyright 2025 Google LLC
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
 */const aT=1e3;function xu(n){var r;const e=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),t=RegExp(`${e}=([^;]+)`);return((r=document.cookie.match(t))==null?void 0:r[1])??null}function Uu(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}class Vp{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=Uu(e);if(window.cookieStore){const r=await window.cookieStore.get(t);return r==null?void 0:r.value}return xu(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;const r=Uu(e);document.cookie=`${r}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const r=Uu(e);if(window.cookieStore){const a=l=>{const h=l.changed.find(C=>C.name===r);h&&t(h.value),l.deleted.find(C=>C.name===r)&&t(null)},u=()=>window.cookieStore.removeEventListener("change",a);return this.listenerUnsubscribes.set(t,u),window.cookieStore.addEventListener("change",a)}let s=xu(r);const i=setInterval(()=>{const a=xu(r);a!==s&&(t(a),s=a)},aT),o=()=>clearInterval(i);this.listenerUnsubscribes.set(t,o)}_removeListener(e,t){const r=this.listenerUnsubscribes.get(t);r&&(r(),this.listenerUnsubscribes.delete(t))}}Vp.type="COOKIE";const cT=Vp;/**
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
 */class xp extends Lp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xp.type="SESSION";const cB=xp;/**
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
 */function uT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new kc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(t.origin,i)),u=await uT(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kc.receivers=[];/**
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
 */function Lc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class lT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,u)=>{const l=Lc("",20);s.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const C=f;if(C.data.eventId===l)switch(C.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(C.data.response);break;default:clearTimeout(h),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function at(){return window}function BT(n){at().location.href=n}/**
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
 */function uB(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function hT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function fT(){return uB()?self:null}/**
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
 */const Up="firebaseLocalStorageDb",CT=1,nc="firebaseLocalStorage",Gp="fbase_key";class Mo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Fc(n,e){return n.transaction([nc],e?"readwrite":"readonly").objectStore(nc)}function pT(){const n=indexedDB.deleteDatabase(Up);return new Mo(n).toPromise()}function Hp(){const n=indexedDB.open(Up,CT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(nc,{keyPath:Gp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(nc)?e(r):(r.close(),await pT(),e(await Hp()))})})}async function Rd(n,e,t){const r=Fc(n,!0).put({[Gp]:e,value:t});return new Mo(r).toPromise()}async function gT(n,e){const t=Fc(n,!1).get(e),r=await new Mo(t).toPromise();return r===void 0?null:r.value}function vd(n,e){const t=Fc(n,!0).delete(e);return new Mo(t).toPromise()}const mT=800,ET=3;class qp{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.addEventListener=="function"&&document.addEventListener("visibilitychange",this.onVisibilityChange)}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.removeEventListener=="function"&&document.removeEventListener("visibilitychange",this.onVisibilityChange)}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isHiding=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isHiding=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isHiding&&(this.isHiding=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this.onVisibilityChange=()=>{typeof document<"u"&&(document.visibilityState==="hidden"?this.onPageHide():document.visibilityState==="visible"&&this.onPageShow())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.isHiding)throw new Error("Database is closing/hidden");return this.dbPromise?this.dbPromise:(this.dbPromise=Hp(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(this.isHiding||t++>ET)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return uB()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kc._getInstance(fT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await hT(),!this.activeServiceWorker)return;this.sender=new lT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Rd(e,tc,"1"),await vd(e,tc)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>gT(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>vd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isHiding)return[];try{const e=await this._withRetries(s=>{const i=Fc(s,!1).getAll();return new Mo(i).toPromise()});if(this.isHiding)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}catch(e){return this.isHiding||YC(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}qp.type="LOCAL";const Jp=qp;/**
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
 */function Sd(n,e){return Ze(n,"POST","/v2/accounts/mfaSignIn:start",Xe(n,e))}function _T(n,e){return Ze(n,"POST","/v2/accounts/mfaSignIn:finalize",Xe(n,e))}function DT(n,e){return Ze(n,"POST","/v2/accounts/mfaSignIn:finalize",Xe(n,e))}/**
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
 */const Gu=pp("rcb"),IT=new ko(3e4,6e4);class wT{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=at().grecaptcha)!=null&&e.render)}load(e,t=""){return q(TT(t),e,"argument-error"),this.shouldResolveImmediately(t)&&pd(at().grecaptcha)?Promise.resolve(at().grecaptcha):new Promise((r,s)=>{const i=at().setTimeout(()=>{s(Ft(e,"network-request-failed"))},IT.get());at()[Gu]=()=>{at().clearTimeout(i),delete at()[Gu];const a=at().grecaptcha;if(!a||!pd(a)){s(Ft(e,"internal-error"));return}const u=a.render;a.render=(l,h)=>{const f=u(l,h);return this.counter++,f},this.hostLanguage=t,r(a)};const o=`${VI()}?${si({onload:Gu,render:"explicit",hl:t})}`;tB(o).catch(()=>{clearTimeout(i),s(Ft(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=at().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function TT(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class yT{async load(e){return new qI(e)}clearedOneInstance(){}}/**
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
 */const Yi="recaptcha",AT={theme:"light",type:"image"};class RT{constructor(e,t,r={...AT}){this.parameters=r,this.type=Yi,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=st(e),this.isInvisible=this.parameters.size==="invisible",q(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof t=="string"?document.getElementById(t):t;q(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new yT:new wT,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){q(!this.parameters.sitekey,this.auth,"argument-error"),q(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),q(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=at()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){q(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){q(Xl()&&!uB(),this.auth,"internal-error"),await vT(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await DI(this.auth);q(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return q(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function vT(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class lB{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=yr._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function ST(n,e,t){if(Qe(n.app))return Promise.reject(It(n));const r=st(n),s=await Mc(r,e,le(t));return new lB(s,i=>Oc(r,i))}async function PT(n,e,t){const r=le(n);await Nc(!1,r,"phone");const s=await Mc(r.auth,e,le(t));return new lB(s,i=>Rp(r,i))}async function NT(n,e,t){const r=le(n);if(Qe(r.auth.app))return Promise.reject(It(r.auth));const s=await Mc(r.auth,e,le(t));return new lB(s,i=>vp(r,i))}async function Mc(n,e,t){var r;if(!n._getRecaptchaConfig())try{await gp(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const i=s.session;if("phoneNumber"in s){q(i.type==="enroll",n,"internal-error");const o={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Tr(n,o,"mfaSmsEnrollment",async(h,f)=>{if(f.phoneEnrollmentInfo.captchaResponse===Wi){q((t==null?void 0:t.type)===Yi,h,"argument-error");const C=await Hu(h,f,t);return Ad(h,C)}return Ad(h,f)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneSessionInfo.sessionInfo}else{q(i.type==="signin",n,"internal-error");const o=((r=s.multiFactorHint)==null?void 0:r.uid)||s.multiFactorUid;q(o,n,"missing-multi-factor-info");const a={mfaPendingCredential:i.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Tr(n,a,"mfaSmsSignIn",async(f,C)=>{if(C.phoneSignInInfo.captchaResponse===Wi){q((t==null?void 0:t.type)===Yi,f,"argument-error");const I=await Hu(f,C,t);return Sd(f,I)}return Sd(f,C)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Tr(n,i,"sendVerificationCode",async(l,h)=>{if(h.captchaResponse===Wi){q((t==null?void 0:t.type)===Yi,l,"argument-error");const f=await Hu(l,h,t);return Td(l,f)}return Td(l,h)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{t==null||t._reset()}}async function OT(n,e){const t=le(n);if(Qe(t.auth.app))return Promise.reject(It(t.auth));await nB(t,e)}async function Hu(n,e,t){q(t.type===Yi,n,"argument-error");const r=await t.verify();q(typeof r=="string",n,"argument-error");const s={...e};if("phoneEnrollmentInfo"in s){const i=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,a=s.phoneEnrollmentInfo.clientType,u=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:u}}),s}else if("phoneSignInInfo"in s){const i=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,a=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:i,clientType:o,recaptchaVersion:a}}),s}else return Object.assign(s,{recaptchaToken:r}),s}/**
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
 */class ls{constructor(e){this.providerId=ls.PROVIDER_ID,this.auth=st(e)}verifyPhoneNumber(e,t){return Mc(this.auth,e,le(t))}static credential(e,t){return yr._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ls.credentialFromTaggedObject(t)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?yr._fromTokenResponse(t,r):null}}ls.PROVIDER_ID="phone";ls.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function ms(n,e){return e?Kn(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class BB extends ci{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Yn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bT(n){return Ap(n.auth,new BB(n),n.bypassAuthState)}function kT(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),yp(t,new BB(n),n.bypassAuthState)}async function LT(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),nB(t,new BB(n),n.bypassAuthState)}/**
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
 */class jp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bT;case"linkViaPopup":case"linkViaRedirect":return LT;case"reauthViaPopup":case"reauthViaRedirect":return kT;default:Yt(this.auth,"internal-error")}}resolve(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const FT=new ko(2e3,1e4);async function MT(n,e,t){if(Qe(n.app))return Promise.reject(Ft(n,"operation-not-supported-in-this-environment"));const r=st(n);ai(n,e,ar);const s=ms(r,t);return new $n(r,"signInViaPopup",e,s).executeNotNull()}async function VT(n,e,t){const r=le(n);if(Qe(r.auth.app))return Promise.reject(Ft(r.auth,"operation-not-supported-in-this-environment"));ai(r.auth,e,ar);const s=ms(r.auth,t);return new $n(r.auth,"reauthViaPopup",e,s,r).executeNotNull()}async function xT(n,e,t){const r=le(n);ai(r.auth,e,ar);const s=ms(r.auth,t);return new $n(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class $n extends jp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,$n.currentPopupAction&&$n.currentPopupAction.cancel(),$n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const e=Lc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FT.get())};e()}}$n.currentPopupAction=null;/**
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
 */const UT="pendingRedirect",Ua=new Map;class GT extends jp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ua.get(this.auth._key());if(!e){try{const r=await HT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ua.set(this.auth._key(),e)}return this.bypassAuthState||Ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HT(n,e){const t=$p(e),r=Kp(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function hB(n,e){return Kp(n)._set($p(e),"true")}function qT(n,e){Ua.set(n._key(),e)}function Kp(n){return Kn(n._redirectPersistence)}function $p(n){return xa(UT,n.config.apiKey,n.name)}/**
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
 */function JT(n,e,t){return jT(n,e,t)}async function jT(n,e,t){if(Qe(n.app))return Promise.reject(It(n));const r=st(n);ai(n,e,ar),await r._initializationPromise;const s=ms(r,t);return await hB(s,r),s._openRedirect(r,e,"signInViaRedirect")}function KT(n,e,t){return $T(n,e,t)}async function $T(n,e,t){const r=le(n);if(ai(r.auth,e,ar),Qe(r.auth.app))return Promise.reject(It(r.auth));await r.auth._initializationPromise;const s=ms(r.auth,t);await hB(s,r.auth);const i=await Wp(r);return s._openRedirect(r.auth,e,"reauthViaRedirect",i)}function zT(n,e,t){return WT(n,e,t)}async function WT(n,e,t){const r=le(n);ai(r.auth,e,ar),await r.auth._initializationPromise;const s=ms(r.auth,t);await Nc(!1,r,e.providerId),await hB(s,r.auth);const i=await Wp(r);return s._openRedirect(r.auth,e,"linkViaRedirect",i)}async function QT(n,e){return await st(n)._initializationPromise,zp(n,e,!1)}async function zp(n,e,t=!1){if(Qe(n.app))return Promise.reject(It(n));const r=st(n),s=ms(r,e),o=await new GT(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Wp(n){const e=Lc(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const YT=10*60*1e3;class XT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Qp(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ft(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pd(e))}saveEventToCache(e){this.cachedEventUids.add(Pd(e)),this.lastProcessedEventTime=Date.now()}}function Pd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Qp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qp(n);default:return!1}}/**
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
 */async function ey(n,e={}){return Ze(n,"GET","/v1/projects",e)}/**
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
 */const ty=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ny=/^https?/;async function ry(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ey(n);for(const t of e)try{if(sy(t))return}catch{}Yt(n,"unauthorized-domain")}function sy(n){const e=lo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!ny.test(t))return!1;if(ty.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const iy=new ko(3e4,6e4);function Nd(){const n=at().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function oy(n){return new Promise((e,t)=>{var s,i,o;function r(){Nd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nd(),t(Ft(n,"network-request-failed"))},timeout:iy.get()})}if((i=(s=at().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=at().gapi)!=null&&o.load)r();else{const a=pp("iframefcb");return at()[a]=()=>{gapi.load?r():t(Ft(n,"network-request-failed"))},tB(`${UI()}?onload=${a}`).catch(u=>t(u))}}).catch(e=>{throw Ga=null,e})}let Ga=null;function ay(n){return Ga=Ga||oy(n),Ga}/**
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
 */const cy=new ko(5e3,15e3),uy="__/auth/iframe",ly="emulator/auth/iframe",By={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dy(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Zl(e,ly):`https://${n.config.authDomain}/${uy}`,r={apiKey:e.apiKey,appName:n.name,v:jr},s=hy.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${si(r).slice(1)}`}async function fy(n){const e=await ay(n),t=at().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:dy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:By,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ft(n,"network-request-failed"),a=at().setTimeout(()=>{i(o)},cy.get());function u(){at().clearTimeout(a),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const Cy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},py=500,gy=600,my="_blank",Ey="http://localhost";class Od{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _y(n,e,t,r=py,s=gy){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u={...Cy,width:r.toString(),height:s.toString(),top:i,left:o},l=Nt().toLowerCase();t&&(a=up(l)?my:t),ap(l)&&(e=e||Ey,u.scrollbars="yes");const h=Object.entries(u).reduce((C,[I,v])=>`${C}${I}=${v},`,"");if(PI(l)&&a!=="_self")return Dy(e||"",a),new Od(null);const f=window.open(e||"",a,h);q(f,n,"popup-blocked");try{f.focus()}catch{}return new Od(f)}function Dy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Iy="__/auth/handler",wy="emulator/auth/handler",Ty=encodeURIComponent("fac");async function bd(n,e,t,r,s,i){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:jr,eventId:s};if(e instanceof ar){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",U_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof li){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await n._getAppCheckToken(),l=u?`#${Ty}=${encodeURIComponent(u)}`:"";return`${yy(n)}?${si(a).slice(1)}${l}`}function yy({config:n}){return n.emulator?Zl(n,wy):`https://${n.authDomain}/${Iy}`}/**
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
 */const qu="webStorageSupport";class Ay{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cB,this._completeRedirectFn=zp,this._overrideRedirectResult=qT}async _openPopup(e,t,r,s){var o;nr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await bd(e,t,r,lo(),s);return _y(e,i,Lc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await bd(e,t,r,lo(),s);return BT(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(nr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await fy(e),r=new XT(e);return t.register("authEvent",s=>(q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qu,{type:qu},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[qu];i!==void 0&&t(!!i),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ry(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fp()||cp()||eB()}}const Yp=Ay;class Xp{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Rn("unexpected MultiFactorSessionType")}}}class dB extends Xp{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new dB(e)}_finalizeEnroll(e,t,r){return eT(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return _T(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Zp{constructor(){}static assertion(e){return dB._fromCredential(e)}}Zp.FACTOR_ID="phone";class eg{static assertionForEnrollment(e,t){return fo._fromSecret(e,t)}static assertionForSignIn(e,t){return fo._fromEnrollmentId(e,t)}static async generateSecret(e){var s;const t=e;q(typeof((s=t.user)==null?void 0:s.auth)<"u","internal-error");const r=await tT(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return Vc._fromStartTotpMfaEnrollmentResponse(r,t.user.auth)}}eg.FACTOR_ID="totp";class fo extends Xp{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new fo(t,void 0,e)}static _fromEnrollmentId(e,t){return new fo(t,e)}async _finalizeEnroll(e,t,r){return q(typeof this.secret<"u",e,"argument-error"),nT(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){q(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const r={verificationCode:this.otp};return DT(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}}class Vc{constructor(e,t,r,s,i,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=s,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Vc(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var s;let r=!1;return(Ea(e)||Ea(t))&&(r=!0),r&&(Ea(e)&&(e=((s=this.auth.currentUser)==null?void 0:s.email)||"unknownuser"),Ea(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ea(n){return typeof n>"u"||(n==null?void 0:n.length)===0}var kd="@firebase/auth",Ld="1.13.4";/**
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
 */class Ry{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sy(n){Qt(new Wt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cp(n)},l=new FI(r,s,i,u);return WI(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Qt(new Wt("auth-internal",e=>{const t=st(e.getProvider("auth").getImmediate());return(r=>new Ry(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(kd,Ld,vy(n)),At(kd,Ld,"esm2020")}/**
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
 */const Py=5*60,Ny=kC("authIdTokenMaxAge")||Py;let Fd=null;const Oy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ny)return;const s=t==null?void 0:t.token;Fd!==s&&(Fd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function tg(n=oi()){const e=Cn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=mp(n,{popupRedirectResolver:Yp,persistence:[Jp,Mp,cB]}),r=kC("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Oy(i.toString());kp(t,o,()=>o(t.currentUser)),bp(t,a=>o(a))}}const s=bC("auth");return s&&Ep(t,`http://${s}`),t}function by(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}MI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ft("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",by().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sy("Browser");const _a=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:lI,ActionCodeURL:ui,AuthCredential:ci,AuthErrorCodes:dI,EmailAuthCredential:Ws,EmailAuthProvider:Kr,FacebookAuthProvider:Gn,FactorId:oI,GithubAuthProvider:qn,GoogleAuthProvider:Hn,OAuthCredential:bn,OAuthProvider:Qi,OperationType:uI,PhoneAuthCredential:yr,PhoneAuthProvider:ls,PhoneMultiFactorGenerator:Zp,ProviderId:aI,RecaptchaVerifier:RT,SAMLAuthProvider:Za,SignInMethod:cI,TotpMultiFactorGenerator:eg,TotpSecret:Vc,TwitterAuthProvider:Jn,applyActionCode:Tw,beforeAuthStateChanged:kp,browserCookiePersistence:cT,browserLocalPersistence:Mp,browserPopupRedirectResolver:Yp,browserSessionPersistence:cB,checkActionCode:Sp,confirmPasswordReset:ww,connectAuthEmulator:Ep,createUserWithEmailAndPassword:Aw,debugErrorMap:hI,deleteUser:Xw,fetchSignInMethodsForEmail:Nw,getAdditionalUserInfo:qw,getAuth:tg,getIdToken:TI,getIdTokenResult:rp,getMultiFactorResolver:Zw,getRedirectResult:QT,inMemoryPersistence:fl,indexedDBLocalPersistence:Jp,initializeAuth:mp,initializeRecaptchaConfig:jw,isSignInWithEmailLink:vw,linkWithCredential:Rp,linkWithPhoneNumber:PT,linkWithPopup:xT,linkWithRedirect:zT,multiFactor:sT,onAuthStateChanged:$w,onIdTokenChanged:bp,parseActionCodeURL:Cw,prodErrorMap:WC,reauthenticateWithCredential:vp,reauthenticateWithPhoneNumber:NT,reauthenticateWithPopup:VT,reauthenticateWithRedirect:KT,reload:sp,revokeAccessToken:Yw,sendEmailVerification:Ow,sendPasswordResetEmail:Iw,sendSignInLinkToEmail:Rw,setPersistence:Jw,signInAnonymously:mw,signInWithCredential:Oc,signInWithCustomToken:Dw,signInWithEmailAndPassword:Pp,signInWithEmailLink:Sw,signInWithPhoneNumber:ST,signInWithPopup:MT,signInWithRedirect:JT,signOut:Qw,unlink:Ew,updateCurrentUser:Ww,updateEmail:Fw,updatePassword:Mw,updatePhoneNumber:OT,updateProfile:Lw,useDeviceLanguage:zw,validatePassword:Kw,verifyBeforeUpdateEmail:bw,verifyPasswordResetCode:yw},Symbol.toStringTag,{value:"Module"}));var Md=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ar,ng;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,E){function D(){}D.prototype=E.prototype,A.F=E.prototype,A.prototype=new D,A.prototype.constructor=A,A.D=function(R,T,S){for(var _=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)_[dt-2]=arguments[dt];return E.prototype[T].apply(R,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,E,D){D||(D=0);const R=Array(16);if(typeof E=="string")for(var T=0;T<16;++T)R[T]=E.charCodeAt(D++)|E.charCodeAt(D++)<<8|E.charCodeAt(D++)<<16|E.charCodeAt(D++)<<24;else for(T=0;T<16;++T)R[T]=E[D++]|E[D++]<<8|E[D++]<<16|E[D++]<<24;E=A.g[0],D=A.g[1],T=A.g[2];let S=A.g[3],_;_=E+(S^D&(T^S))+R[0]+3614090360&4294967295,E=D+(_<<7&4294967295|_>>>25),_=S+(T^E&(D^T))+R[1]+3905402710&4294967295,S=E+(_<<12&4294967295|_>>>20),_=T+(D^S&(E^D))+R[2]+606105819&4294967295,T=S+(_<<17&4294967295|_>>>15),_=D+(E^T&(S^E))+R[3]+3250441966&4294967295,D=T+(_<<22&4294967295|_>>>10),_=E+(S^D&(T^S))+R[4]+4118548399&4294967295,E=D+(_<<7&4294967295|_>>>25),_=S+(T^E&(D^T))+R[5]+1200080426&4294967295,S=E+(_<<12&4294967295|_>>>20),_=T+(D^S&(E^D))+R[6]+2821735955&4294967295,T=S+(_<<17&4294967295|_>>>15),_=D+(E^T&(S^E))+R[7]+4249261313&4294967295,D=T+(_<<22&4294967295|_>>>10),_=E+(S^D&(T^S))+R[8]+1770035416&4294967295,E=D+(_<<7&4294967295|_>>>25),_=S+(T^E&(D^T))+R[9]+2336552879&4294967295,S=E+(_<<12&4294967295|_>>>20),_=T+(D^S&(E^D))+R[10]+4294925233&4294967295,T=S+(_<<17&4294967295|_>>>15),_=D+(E^T&(S^E))+R[11]+2304563134&4294967295,D=T+(_<<22&4294967295|_>>>10),_=E+(S^D&(T^S))+R[12]+1804603682&4294967295,E=D+(_<<7&4294967295|_>>>25),_=S+(T^E&(D^T))+R[13]+4254626195&4294967295,S=E+(_<<12&4294967295|_>>>20),_=T+(D^S&(E^D))+R[14]+2792965006&4294967295,T=S+(_<<17&4294967295|_>>>15),_=D+(E^T&(S^E))+R[15]+1236535329&4294967295,D=T+(_<<22&4294967295|_>>>10),_=E+(T^S&(D^T))+R[1]+4129170786&4294967295,E=D+(_<<5&4294967295|_>>>27),_=S+(D^T&(E^D))+R[6]+3225465664&4294967295,S=E+(_<<9&4294967295|_>>>23),_=T+(E^D&(S^E))+R[11]+643717713&4294967295,T=S+(_<<14&4294967295|_>>>18),_=D+(S^E&(T^S))+R[0]+3921069994&4294967295,D=T+(_<<20&4294967295|_>>>12),_=E+(T^S&(D^T))+R[5]+3593408605&4294967295,E=D+(_<<5&4294967295|_>>>27),_=S+(D^T&(E^D))+R[10]+38016083&4294967295,S=E+(_<<9&4294967295|_>>>23),_=T+(E^D&(S^E))+R[15]+3634488961&4294967295,T=S+(_<<14&4294967295|_>>>18),_=D+(S^E&(T^S))+R[4]+3889429448&4294967295,D=T+(_<<20&4294967295|_>>>12),_=E+(T^S&(D^T))+R[9]+568446438&4294967295,E=D+(_<<5&4294967295|_>>>27),_=S+(D^T&(E^D))+R[14]+3275163606&4294967295,S=E+(_<<9&4294967295|_>>>23),_=T+(E^D&(S^E))+R[3]+4107603335&4294967295,T=S+(_<<14&4294967295|_>>>18),_=D+(S^E&(T^S))+R[8]+1163531501&4294967295,D=T+(_<<20&4294967295|_>>>12),_=E+(T^S&(D^T))+R[13]+2850285829&4294967295,E=D+(_<<5&4294967295|_>>>27),_=S+(D^T&(E^D))+R[2]+4243563512&4294967295,S=E+(_<<9&4294967295|_>>>23),_=T+(E^D&(S^E))+R[7]+1735328473&4294967295,T=S+(_<<14&4294967295|_>>>18),_=D+(S^E&(T^S))+R[12]+2368359562&4294967295,D=T+(_<<20&4294967295|_>>>12),_=E+(D^T^S)+R[5]+4294588738&4294967295,E=D+(_<<4&4294967295|_>>>28),_=S+(E^D^T)+R[8]+2272392833&4294967295,S=E+(_<<11&4294967295|_>>>21),_=T+(S^E^D)+R[11]+1839030562&4294967295,T=S+(_<<16&4294967295|_>>>16),_=D+(T^S^E)+R[14]+4259657740&4294967295,D=T+(_<<23&4294967295|_>>>9),_=E+(D^T^S)+R[1]+2763975236&4294967295,E=D+(_<<4&4294967295|_>>>28),_=S+(E^D^T)+R[4]+1272893353&4294967295,S=E+(_<<11&4294967295|_>>>21),_=T+(S^E^D)+R[7]+4139469664&4294967295,T=S+(_<<16&4294967295|_>>>16),_=D+(T^S^E)+R[10]+3200236656&4294967295,D=T+(_<<23&4294967295|_>>>9),_=E+(D^T^S)+R[13]+681279174&4294967295,E=D+(_<<4&4294967295|_>>>28),_=S+(E^D^T)+R[0]+3936430074&4294967295,S=E+(_<<11&4294967295|_>>>21),_=T+(S^E^D)+R[3]+3572445317&4294967295,T=S+(_<<16&4294967295|_>>>16),_=D+(T^S^E)+R[6]+76029189&4294967295,D=T+(_<<23&4294967295|_>>>9),_=E+(D^T^S)+R[9]+3654602809&4294967295,E=D+(_<<4&4294967295|_>>>28),_=S+(E^D^T)+R[12]+3873151461&4294967295,S=E+(_<<11&4294967295|_>>>21),_=T+(S^E^D)+R[15]+530742520&4294967295,T=S+(_<<16&4294967295|_>>>16),_=D+(T^S^E)+R[2]+3299628645&4294967295,D=T+(_<<23&4294967295|_>>>9),_=E+(T^(D|~S))+R[0]+4096336452&4294967295,E=D+(_<<6&4294967295|_>>>26),_=S+(D^(E|~T))+R[7]+1126891415&4294967295,S=E+(_<<10&4294967295|_>>>22),_=T+(E^(S|~D))+R[14]+2878612391&4294967295,T=S+(_<<15&4294967295|_>>>17),_=D+(S^(T|~E))+R[5]+4237533241&4294967295,D=T+(_<<21&4294967295|_>>>11),_=E+(T^(D|~S))+R[12]+1700485571&4294967295,E=D+(_<<6&4294967295|_>>>26),_=S+(D^(E|~T))+R[3]+2399980690&4294967295,S=E+(_<<10&4294967295|_>>>22),_=T+(E^(S|~D))+R[10]+4293915773&4294967295,T=S+(_<<15&4294967295|_>>>17),_=D+(S^(T|~E))+R[1]+2240044497&4294967295,D=T+(_<<21&4294967295|_>>>11),_=E+(T^(D|~S))+R[8]+1873313359&4294967295,E=D+(_<<6&4294967295|_>>>26),_=S+(D^(E|~T))+R[15]+4264355552&4294967295,S=E+(_<<10&4294967295|_>>>22),_=T+(E^(S|~D))+R[6]+2734768916&4294967295,T=S+(_<<15&4294967295|_>>>17),_=D+(S^(T|~E))+R[13]+1309151649&4294967295,D=T+(_<<21&4294967295|_>>>11),_=E+(T^(D|~S))+R[4]+4149444226&4294967295,E=D+(_<<6&4294967295|_>>>26),_=S+(D^(E|~T))+R[11]+3174756917&4294967295,S=E+(_<<10&4294967295|_>>>22),_=T+(E^(S|~D))+R[2]+718787259&4294967295,T=S+(_<<15&4294967295|_>>>17),_=D+(S^(T|~E))+R[9]+3951481745&4294967295,A.g[0]=A.g[0]+E&4294967295,A.g[1]=A.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,A.g[2]=A.g[2]+T&4294967295,A.g[3]=A.g[3]+S&4294967295}r.prototype.v=function(A,E){E===void 0&&(E=A.length);const D=E-this.blockSize,R=this.C;let T=this.h,S=0;for(;S<E;){if(T==0)for(;S<=D;)s(this,A,S),S+=this.blockSize;if(typeof A=="string"){for(;S<E;)if(R[T++]=A.charCodeAt(S++),T==this.blockSize){s(this,R),T=0;break}}else for(;S<E;)if(R[T++]=A[S++],T==this.blockSize){s(this,R),T=0;break}}this.h=T,this.o+=E},r.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var E=1;E<A.length-8;++E)A[E]=0;E=this.o*8;for(var D=A.length-8;D<A.length;++D)A[D]=E&255,E/=256;for(this.v(A),A=Array(16),E=0,D=0;D<4;++D)for(let R=0;R<32;R+=8)A[E++]=this.g[D]>>>R&255;return A};function i(A,E){var D=a;return Object.prototype.hasOwnProperty.call(D,A)?D[A]:D[A]=E(A)}function o(A,E){this.h=E;const D=[];let R=!0;for(let T=A.length-1;T>=0;T--){const S=A[T]|0;R&&S==E||(D[T]=S,R=!1)}this.g=D}var a={};function u(A){return-128<=A&&A<128?i(A,function(E){return new o([E|0],E<0?-1:0)}):new o([A|0],A<0?-1:0)}function l(A){if(isNaN(A)||!isFinite(A))return f;if(A<0)return H(l(-A));const E=[];let D=1;for(let R=0;A>=D;R++)E[R]=A/D|0,D*=4294967296;return new o(E,0)}function h(A,E){if(A.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(A.charAt(0)=="-")return H(h(A.substring(1),E));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const D=l(Math.pow(E,8));let R=f;for(let S=0;S<A.length;S+=8){var T=Math.min(8,A.length-S);const _=parseInt(A.substring(S,S+T),E);T<8?(T=l(Math.pow(E,T)),R=R.j(T).add(l(_))):(R=R.j(D),R=R.add(l(_)))}return R}var f=u(0),C=u(1),I=u(16777216);n=o.prototype,n.m=function(){if(V(this))return-H(this).m();let A=0,E=1;for(let D=0;D<this.g.length;D++){const R=this.i(D);A+=(R>=0?R:4294967296+R)*E,E*=4294967296}return A},n.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(v(this))return"0";if(V(this))return"-"+H(this).toString(A);const E=l(Math.pow(A,6));var D=this;let R="";for(;;){const T=Te(D,E).g;D=Y(D,T.j(E));let S=((D.g.length>0?D.g[0]:D.h)>>>0).toString(A);if(D=T,v(D))return S+R;for(;S.length<6;)S="0"+S;R=S+R}},n.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function v(A){if(A.h!=0)return!1;for(let E=0;E<A.g.length;E++)if(A.g[E]!=0)return!1;return!0}function V(A){return A.h==-1}n.l=function(A){return A=Y(this,A),V(A)?-1:v(A)?0:1};function H(A){const E=A.g.length,D=[];for(let R=0;R<E;R++)D[R]=~A.g[R];return new o(D,~A.h).add(C)}n.abs=function(){return V(this)?H(this):this},n.add=function(A){const E=Math.max(this.g.length,A.g.length),D=[];let R=0;for(let T=0;T<=E;T++){let S=R+(this.i(T)&65535)+(A.i(T)&65535),_=(S>>>16)+(this.i(T)>>>16)+(A.i(T)>>>16);R=_>>>16,S&=65535,_&=65535,D[T]=_<<16|S}return new o(D,D[D.length-1]&-2147483648?-1:0)};function Y(A,E){return A.add(H(E))}n.j=function(A){if(v(this)||v(A))return f;if(V(this))return V(A)?H(this).j(H(A)):H(H(this).j(A));if(V(A))return H(this.j(H(A)));if(this.l(I)<0&&A.l(I)<0)return l(this.m()*A.m());const E=this.g.length+A.g.length,D=[];for(var R=0;R<2*E;R++)D[R]=0;for(R=0;R<this.g.length;R++)for(let T=0;T<A.g.length;T++){const S=this.i(R)>>>16,_=this.i(R)&65535,dt=A.i(T)>>>16,xt=A.i(T)&65535;D[2*R+2*T]+=_*xt,ie(D,2*R+2*T),D[2*R+2*T+1]+=S*xt,ie(D,2*R+2*T+1),D[2*R+2*T+1]+=_*dt,ie(D,2*R+2*T+1),D[2*R+2*T+2]+=S*dt,ie(D,2*R+2*T+2)}for(A=0;A<E;A++)D[A]=D[2*A+1]<<16|D[2*A];for(A=E;A<2*E;A++)D[A]=0;return new o(D,0)};function ie(A,E){for(;(A[E]&65535)!=A[E];)A[E+1]+=A[E]>>>16,A[E]&=65535,E++}function ye(A,E){this.g=A,this.h=E}function Te(A,E){if(v(E))throw Error("division by zero");if(v(A))return new ye(f,f);if(V(A))return E=Te(H(A),E),new ye(H(E.g),H(E.h));if(V(E))return E=Te(A,H(E)),new ye(H(E.g),E.h);if(A.g.length>30){if(V(A)||V(E))throw Error("slowDivide_ only works with positive integers.");for(var D=C,R=E;R.l(A)<=0;)D=Le(D),R=Le(R);var T=Ve(D,1),S=Ve(R,1);for(R=Ve(R,2),D=Ve(D,2);!v(R);){var _=S.add(R);_.l(A)<=0&&(T=T.add(D),S=_),R=Ve(R,1),D=Ve(D,1)}return E=Y(A,T.j(E)),new ye(T,E)}for(T=f;A.l(E)>=0;){for(D=Math.max(1,Math.floor(A.m()/E.m())),R=Math.ceil(Math.log(D)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),S=l(D),_=S.j(E);V(_)||_.l(A)>0;)D-=R,S=l(D),_=S.j(E);v(S)&&(S=C),T=T.add(S),A=Y(A,_)}return new ye(T,A)}n.B=function(A){return Te(this,A).h},n.and=function(A){const E=Math.max(this.g.length,A.g.length),D=[];for(let R=0;R<E;R++)D[R]=this.i(R)&A.i(R);return new o(D,this.h&A.h)},n.or=function(A){const E=Math.max(this.g.length,A.g.length),D=[];for(let R=0;R<E;R++)D[R]=this.i(R)|A.i(R);return new o(D,this.h|A.h)},n.xor=function(A){const E=Math.max(this.g.length,A.g.length),D=[];for(let R=0;R<E;R++)D[R]=this.i(R)^A.i(R);return new o(D,this.h^A.h)};function Le(A){const E=A.g.length+1,D=[];for(let R=0;R<E;R++)D[R]=A.i(R)<<1|A.i(R-1)>>>31;return new o(D,A.h)}function Ve(A,E){const D=E>>5;E%=32;const R=A.g.length-D,T=[];for(let S=0;S<R;S++)T[S]=E>0?A.i(S+D)>>>E|A.i(S+D+1)<<32-E:A.i(S+D);return new o(T,A.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,ng=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=h,Ar=o}).apply(typeof Md<"u"?Md:typeof self<"u"?self:typeof window<"u"?window:{});var Da=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rg,ji,sg,Ha,Cl,ig,og,ag;(function(){var n,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Da=="object"&&Da];for(var B=0;B<c.length;++B){var d=c[B];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(c,B){if(B)e:{var d=r;c=c.split(".");for(var p=0;p<c.length-1;p++){var P=c[p];if(!(P in d))break e;d=d[P]}c=c[c.length-1],p=d[c],B=B(p),B!=p&&B!=null&&e(d,c,{configurable:!0,writable:!0,value:B})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(B){var d=[],p;for(p in B)Object.prototype.hasOwnProperty.call(B,p)&&d.push([p,B[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(c){var B=typeof c;return B=="object"&&c!=null||B=="function"}function u(c,B,d){return c.call.apply(c.bind,arguments)}function l(c,B,d){return l=u,l.apply(null,arguments)}function h(c,B){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),c.apply(this,p)}}function f(c,B){function d(){}d.prototype=B.prototype,c.Z=B.prototype,c.prototype=new d,c.prototype.constructor=c,c.Ob=function(p,P,b){for(var W=Array(arguments.length-2),we=2;we<arguments.length;we++)W[we-2]=arguments[we];return B.prototype[P].apply(p,W)}}var C=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function I(c){const B=c.length;if(B>0){const d=Array(B);for(let p=0;p<B;p++)d[p]=c[p];return d}return[]}function v(c,B){for(let p=1;p<arguments.length;p++){const P=arguments[p];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=c.length||0;const b=P.length||0;c.length=d+b;for(let W=0;W<b;W++)c[d+W]=P[W]}else c.push(P)}}class V{constructor(B,d){this.i=B,this.j=d,this.h=0,this.g=null}get(){let B;return this.h>0?(this.h--,B=this.g,this.g=B.next,B.next=null):B=this.i(),B}}function H(c){o.setTimeout(()=>{throw c},0)}function Y(){var c=A;let B=null;return c.g&&(B=c.g,c.g=c.g.next,c.g||(c.h=null),B.next=null),B}class ie{constructor(){this.h=this.g=null}add(B,d){const p=ye.get();p.set(B,d),this.h?this.h.next=p:this.g=p,this.h=p}}var ye=new V(()=>new Te,c=>c.reset());class Te{constructor(){this.next=this.g=this.h=null}set(B,d){this.h=B,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Le,Ve=!1,A=new ie,E=()=>{const c=Promise.resolve(void 0);Le=()=>{c.then(D)}};function D(){for(var c;c=Y();){try{c.h.call(c.g)}catch(d){H(d)}var B=ye;B.j(c),B.h<100&&(B.h++,c.next=B.g,B.g=c)}Ve=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(c,B){this.type=c,this.g=this.target=B,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,B=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const d=()=>{};o.addEventListener("test",d,B),o.removeEventListener("test",d,B)}catch{}return c}();function _(c){return/^[\s\xa0]*$/.test(c)}function dt(c,B){T.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,B)}f(dt,T),dt.prototype.init=function(c,B){const d=this.type=c.type,p=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=B,B=c.relatedTarget,B||(d=="mouseover"?B=c.fromElement:d=="mouseout"&&(B=c.toElement)),this.relatedTarget=B,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&dt.Z.h.call(this)},dt.prototype.h=function(){dt.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var xt="closure_listenable_"+(Math.random()*1e6|0),Ii=0;function du(c,B,d,p,P){this.listener=c,this.proxy=null,this.src=B,this.type=d,this.capture=!!p,this.ha=P,this.key=++Ii,this.da=this.fa=!1}function Wr(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Is(c,B,d){for(const p in c)B.call(d,c[p],p,c)}function nt(c,B){for(const d in c)B.call(void 0,c[d],d,c)}function Zo(c){const B={};for(const d in c)B[d]=c[d];return B}const ea="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ta(c,B){let d,p;for(let P=1;P<arguments.length;P++){p=arguments[P];for(d in p)c[d]=p[d];for(let b=0;b<ea.length;b++)d=ea[b],Object.prototype.hasOwnProperty.call(p,d)&&(c[d]=p[d])}}function ws(c){this.src=c,this.g={},this.h=0}ws.prototype.add=function(c,B,d,p,P){const b=c.toString();c=this.g[b],c||(c=this.g[b]=[],this.h++);const W=Ti(c,B,p,P);return W>-1?(B=c[W],d||(B.fa=!1)):(B=new du(B,this.src,b,!!p,P),B.fa=d,c.push(B)),B};function wi(c,B){const d=B.type;if(d in c.g){var p=c.g[d],P=Array.prototype.indexOf.call(p,B,void 0),b;(b=P>=0)&&Array.prototype.splice.call(p,P,1),b&&(Wr(B),c.g[d].length==0&&(delete c.g[d],c.h--))}}function Ti(c,B,d,p){for(let P=0;P<c.length;++P){const b=c[P];if(!b.da&&b.listener==B&&b.capture==!!d&&b.ha==p)return P}return-1}var cr="closure_lm_"+(Math.random()*1e6|0),yi={};function na(c,B,d,p,P){if(Array.isArray(B)){for(let b=0;b<B.length;b++)na(c,B[b],d,p,P);return null}return d=ia(d),c&&c[xt]?c.J(B,d,a(p)?!!p.capture:!1,P):fu(c,B,d,!1,p,P)}function fu(c,B,d,p,P,b){if(!B)throw Error("Invalid event type");const W=a(P)?!!P.capture:!!P;let we=Ai(c);if(we||(c[cr]=we=new ws(c)),d=we.add(B,d,p,W,b),d.proxy)return d;if(p=Cu(),d.proxy=p,p.src=c,p.listener=d,c.addEventListener)S||(P=W),P===void 0&&(P=!1),c.addEventListener(B.toString(),p,P);else if(c.attachEvent)c.attachEvent(sa(B.toString()),p);else if(c.addListener&&c.removeListener)c.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Cu(){function c(d){return B.call(c.src,c.listener,d)}const B=pu;return c}function ra(c,B,d,p,P){if(Array.isArray(B))for(var b=0;b<B.length;b++)ra(c,B[b],d,p,P);else p=a(p)?!!p.capture:!!p,d=ia(d),c&&c[xt]?(c=c.i,b=String(B).toString(),b in c.g&&(B=c.g[b],d=Ti(B,d,p,P),d>-1&&(Wr(B[d]),Array.prototype.splice.call(B,d,1),B.length==0&&(delete c.g[b],c.h--)))):c&&(c=Ai(c))&&(B=c.g[B.toString()],c=-1,B&&(c=Ti(B,d,p,P)),(d=c>-1?B[c]:null)&&Ts(d))}function Ts(c){if(typeof c!="number"&&c&&!c.da){var B=c.src;if(B&&B[xt])wi(B.i,c);else{var d=c.type,p=c.proxy;B.removeEventListener?B.removeEventListener(d,p,c.capture):B.detachEvent?B.detachEvent(sa(d),p):B.addListener&&B.removeListener&&B.removeListener(p),(d=Ai(B))?(wi(d,c),d.h==0&&(d.src=null,B[cr]=null)):Wr(c)}}}function sa(c){return c in yi?yi[c]:yi[c]="on"+c}function pu(c,B){if(c.da)c=!0;else{B=new dt(B,this);const d=c.listener,p=c.ha||c.src;c.fa&&Ts(c),c=d.call(p,B)}return c}function Ai(c){return c=c[cr],c instanceof ws?c:null}var Ri="__closure_events_fn_"+(Math.random()*1e9>>>0);function ia(c){return typeof c=="function"?c:(c[Ri]||(c[Ri]=function(B){return c.handleEvent(B)}),c[Ri])}function gt(){R.call(this),this.i=new ws(this),this.M=this,this.G=null}f(gt,R),gt.prototype[xt]=!0,gt.prototype.removeEventListener=function(c,B,d,p){ra(this,c,B,d,p)};function wt(c,B){var d,p=c.G;if(p)for(d=[];p;p=p.G)d.push(p);if(c=c.M,p=B.type||B,typeof B=="string")B=new T(B,c);else if(B instanceof T)B.target=B.target||c;else{var P=B;B=new T(p,c),ta(B,P)}P=!0;let b,W;if(d)for(W=d.length-1;W>=0;W--)b=B.g=d[W],P=ys(b,p,!0,B)&&P;if(b=B.g=c,P=ys(b,p,!0,B)&&P,P=ys(b,p,!1,B)&&P,d)for(W=0;W<d.length;W++)b=B.g=d[W],P=ys(b,p,!1,B)&&P}gt.prototype.N=function(){if(gt.Z.N.call(this),this.i){var c=this.i;for(const B in c.g){const d=c.g[B];for(let p=0;p<d.length;p++)Wr(d[p]);delete c.g[B],c.h--}}this.G=null},gt.prototype.J=function(c,B,d,p){return this.i.add(String(c),B,!1,d,p)},gt.prototype.K=function(c,B,d,p){return this.i.add(String(c),B,!0,d,p)};function ys(c,B,d,p){if(B=c.i.g[String(B)],!B)return!0;B=B.concat();let P=!0;for(let b=0;b<B.length;++b){const W=B[b];if(W&&!W.da&&W.capture==d){const we=W.listener,ft=W.ha||W.src;W.fa&&wi(c.i,W),P=we.call(ft,p)!==!1&&P}}return P&&!p.defaultPrevented}function gu(c,B){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=l(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(B)>2147483647?-1:o.setTimeout(c,B||0)}function oa(c){c.g=gu(()=>{c.g=null,c.i&&(c.i=!1,oa(c))},c.l);const B=c.h;c.h=null,c.m.apply(null,B)}class N extends R{constructor(B,d){super(),this.m=B,this.l=d,this.h=null,this.i=!1,this.g=null}j(B){this.h=arguments,this.g?this.i=!0:oa(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function O(c){R.call(this),this.h=c,this.g={}}f(O,R);var x=[];function z(c){Is(c.g,function(B,d){this.g.hasOwnProperty(d)&&Ts(B)},c),c.g={}}O.prototype.N=function(){O.Z.N.call(this),z(this)},O.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var re=o.JSON.stringify,se=o.JSON.parse,ee=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function Q(){}function te(){}var X={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function me(){T.call(this,"d")}f(me,T);function fe(){T.call(this,"c")}f(fe,T);var De={},je=null;function ge(){return je=je||new gt}De.Ia="serverreachability";function he(c){T.call(this,De.Ia,c)}f(he,T);function Se(c){const B=ge();wt(B,new he(B))}De.STAT_EVENT="statevent";function Ke(c,B){T.call(this,De.STAT_EVENT,c),this.stat=B}f(Ke,T);function Ce(c){const B=ge();wt(B,new Ke(B,c))}De.Ja="timingevent";function Ut(c,B){T.call(this,De.Ja,c),this.size=B}f(Ut,T);function xe(c,B){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},B)}function ur(){this.g=!0}ur.prototype.ua=function(){this.g=!1};function aa(c,B,d,p,P,b){c.info(function(){if(c.g)if(b){var W="",we=b.split("&");for(let Ue=0;Ue<we.length;Ue++){var ft=we[Ue].split("=");if(ft.length>1){const mt=ft[0];ft=ft[1];const wn=mt.split("_");W=wn.length>=2&&wn[1]=="type"?W+(mt+"="+ft+"&"):W+(mt+"=redacted&")}}}else W=null;else W=b;return"XMLHTTP REQ ("+p+") [attempt "+P+"]: "+B+`
`+d+`
`+W})}function XE(c,B,d,p,P,b,W){c.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+P+"]: "+B+`
`+d+`
`+b+" "+W})}function As(c,B,d,p){c.info(function(){return"XMLHTTP TEXT ("+B+"): "+e_(c,d)+(p?" "+p:"")})}function ZE(c,B){c.info(function(){return"TIMEOUT: "+B})}ur.prototype.info=function(){};function e_(c,B){if(!c.g)return B;if(!B)return null;try{const b=JSON.parse(B);if(b){for(c=0;c<b.length;c++)if(Array.isArray(b[c])){var d=b[c];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var P=p[0];if(P!="noop"&&P!="stop"&&P!="close")for(let W=1;W<p.length;W++)p[W]=""}}}}return re(b)}catch{return B}}var ca={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Dh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ih;function mu(){}f(mu,Q),mu.prototype.g=function(){return new XMLHttpRequest},Ih=new mu;function vi(c){return encodeURIComponent(String(c))}function t_(c){var B=1;c=c.split(":");const d=[];for(;B>0&&c.length;)d.push(c.shift()),B--;return c.length&&d.push(c.join(":")),d}function lr(c,B,d,p){this.j=c,this.i=B,this.l=d,this.S=p||1,this.V=new O(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new wh}function wh(){this.i=null,this.g="",this.h=!1}var Th={},Eu={};function _u(c,B,d){c.M=1,c.A=la(In(B)),c.u=d,c.R=!0,yh(c,null)}function yh(c,B){c.F=Date.now(),ua(c),c.B=In(c.A);var d=c.B,p=c.S;Array.isArray(p)||(p=[String(p)]),Vh(d.i,"t",p),c.C=0,d=c.j.L,c.h=new wh,c.g=nd(c.j,d?B:null,!c.u),c.P>0&&(c.O=new N(l(c.Y,c,c.g),c.P)),B=c.V,d=c.g,p=c.ba;var P="readystatechange";Array.isArray(P)||(P&&(x[0]=P.toString()),P=x);for(let b=0;b<P.length;b++){const W=na(d,P[b],p||B.handleEvent,!1,B.h||B);if(!W)break;B.g[W.key]=W}B=c.J?Zo(c.J):{},c.u?(c.v||(c.v="POST"),B["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,B)):(c.v="GET",c.g.ea(c.B,c.v,null,B)),Se(),aa(c.i,c.v,c.B,c.l,c.S,c.u)}lr.prototype.ba=function(c){c=c.target;const B=this.O;B&&dr(c)==3?B.j():this.Y(c)},lr.prototype.Y=function(c){try{if(c==this.g)e:{const we=dr(this.g),ft=this.g.ya(),Ue=this.g.ca();if(!(we<3)&&(we!=3||this.g&&(this.h.h||this.g.la()||jh(this.g)))){this.K||we!=4||ft==7||(ft==8||Ue<=0?Se(3):Se(2)),Du(this);var B=this.g.ca();this.X=B;var d=n_(this);if(this.o=B==200,XE(this.i,this.v,this.B,this.l,this.S,we,B),this.o){if(this.U&&!this.L){t:{if(this.g){var p,P=this.g;if((p=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(p)){var b=p;break t}}b=null}if(c=b)As(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Iu(this,c);else{this.o=!1,this.m=3,Ce(12),Qr(this),Si(this);break e}}if(this.R){c=!0;let mt;for(;!this.K&&this.C<d.length;)if(mt=r_(this,d),mt==Eu){we==4&&(this.m=4,Ce(14),c=!1),As(this.i,this.l,null,"[Incomplete Response]");break}else if(mt==Th){this.m=4,Ce(15),As(this.i,this.l,d,"[Invalid Chunk]"),c=!1;break}else As(this.i,this.l,mt,null),Iu(this,mt);if(Ah(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||d.length!=0||this.h.h||(this.m=1,Ce(16),c=!1),this.o=this.o&&c,!c)As(this.i,this.l,d,"[Invalid Chunked Response]"),Qr(this),Si(this);else if(d.length>0&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.aa&&!W.P&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Pu(W),W.P=!0,Ce(11))}}else As(this.i,this.l,d,null),Iu(this,d);we==4&&Qr(this),this.o&&!this.K&&(we==4?Xh(this.j,this):(this.o=!1,ua(this)))}else g_(this.g),B==400&&d.indexOf("Unknown SID")>0?(this.m=3,Ce(12)):(this.m=0,Ce(13)),Qr(this),Si(this)}}}catch{}finally{}};function n_(c){if(!Ah(c))return c.g.la();const B=jh(c.g);if(B==="")return"";let d="";const p=B.length,P=dr(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Qr(c),Si(c),"";c.h.i=new o.TextDecoder}for(let b=0;b<p;b++)c.h.h=!0,d+=c.h.i.decode(B[b],{stream:!(P&&b==p-1)});return B.length=0,c.h.g+=d,c.C=0,c.h.g}function Ah(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function r_(c,B){var d=c.C,p=B.indexOf(`
`,d);return p==-1?Eu:(d=Number(B.substring(d,p)),isNaN(d)?Th:(p+=1,p+d>B.length?Eu:(B=B.slice(p,p+d),c.C=p+d,B)))}lr.prototype.cancel=function(){this.K=!0,Qr(this)};function ua(c){c.T=Date.now()+c.H,Rh(c,c.H)}function Rh(c,B){if(c.D!=null)throw Error("WatchDog timer not null");c.D=xe(l(c.aa,c),B)}function Du(c){c.D&&(o.clearTimeout(c.D),c.D=null)}lr.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(ZE(this.i,this.B),this.M!=2&&(Se(),Ce(17)),Qr(this),this.m=2,Si(this)):Rh(this,this.T-c)};function Si(c){c.j.I==0||c.K||Xh(c.j,c)}function Qr(c){Du(c);var B=c.O;B&&typeof B.dispose=="function"&&B.dispose(),c.O=null,z(c.V),c.g&&(B=c.g,c.g=null,B.abort(),B.dispose())}function Iu(c,B){try{var d=c.j;if(d.I!=0&&(d.g==c||wu(d.h,c))){if(!c.L&&wu(d.h,c)&&d.I==3){try{var p=d.Ba.g.parse(B)}catch{p=null}if(Array.isArray(p)&&p.length==3){var P=p;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<c.F)Ca(d),da(d);else break e;Su(d),Ce(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=xe(l(d.Va,d),6e3));Ph(d.h)<=1&&d.ta&&(d.ta=void 0)}else Xr(d,11)}else if((c.L||d.g==c)&&Ca(d),!_(B))for(P=d.Ba.g.parse(B),B=0;B<P.length;B++){let Ue=P[B];const mt=Ue[0];if(!(mt<=d.K))if(d.K=mt,Ue=Ue[1],d.I==2)if(Ue[0]=="c"){d.M=Ue[1],d.ba=Ue[2];const wn=Ue[3];wn!=null&&(d.ka=wn,d.j.info("VER="+d.ka));const Zr=Ue[4];Zr!=null&&(d.za=Zr,d.j.info("SVER="+d.za));const fr=Ue[5];fr!=null&&typeof fr=="number"&&fr>0&&(p=1.5*fr,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Cr=c.g;if(Cr){const ga=Cr.g?Cr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ga){var b=p.h;b.g||ga.indexOf("spdy")==-1&&ga.indexOf("quic")==-1&&ga.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Tu(b,b.h),b.h=null))}if(p.G){const Nu=Cr.g?Cr.g.getResponseHeader("X-HTTP-Session-Id"):null;Nu&&(p.wa=Nu,$e(p.J,p.G,Nu))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-c.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var W=c;if(p.na=td(p,p.L?p.ba:null,p.W),W.L){Nh(p.h,W);var we=W,ft=p.O;ft&&(we.H=ft),we.D&&(Du(we),ua(we)),p.g=W}else Qh(p);d.i.length>0&&fa(d)}else Ue[0]!="stop"&&Ue[0]!="close"||Xr(d,7);else d.I==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?Xr(d,7):vu(d):Ue[0]!="noop"&&d.l&&d.l.qa(Ue),d.A=0)}}Se(4)}catch{}}var s_=class{constructor(c,B){this.g=c,this.map=B}};function vh(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Sh(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ph(c){return c.h?1:c.g?c.g.size:0}function wu(c,B){return c.h?c.h==B:c.g?c.g.has(B):!1}function Tu(c,B){c.g?c.g.add(B):c.h=B}function Nh(c,B){c.h&&c.h==B?c.h=null:c.g&&c.g.has(B)&&c.g.delete(B)}vh.prototype.cancel=function(){if(this.i=Oh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Oh(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let B=c.i;for(const d of c.g.values())B=B.concat(d.G);return B}return I(c.i)}var bh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function i_(c,B){if(c){c=c.split("&");for(let d=0;d<c.length;d++){const p=c[d].indexOf("=");let P,b=null;p>=0?(P=c[d].substring(0,p),b=c[d].substring(p+1)):P=c[d],B(P,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Br(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let B;c instanceof Br?(this.l=c.l,Pi(this,c.j),this.o=c.o,this.g=c.g,Ni(this,c.u),this.h=c.h,yu(this,xh(c.i)),this.m=c.m):c&&(B=String(c).match(bh))?(this.l=!1,Pi(this,B[1]||"",!0),this.o=Oi(B[2]||""),this.g=Oi(B[3]||"",!0),Ni(this,B[4]),this.h=Oi(B[5]||"",!0),yu(this,B[6]||"",!0),this.m=Oi(B[7]||"")):(this.l=!1,this.i=new ki(null,this.l))}Br.prototype.toString=function(){const c=[];var B=this.j;B&&c.push(bi(B,kh,!0),":");var d=this.g;return(d||B=="file")&&(c.push("//"),(B=this.o)&&c.push(bi(B,kh,!0),"@"),c.push(vi(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&c.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&c.push("/"),c.push(bi(d,d.charAt(0)=="/"?c_:a_,!0))),(d=this.i.toString())&&c.push("?",d),(d=this.m)&&c.push("#",bi(d,l_)),c.join("")},Br.prototype.resolve=function(c){const B=In(this);let d=!!c.j;d?Pi(B,c.j):d=!!c.o,d?B.o=c.o:d=!!c.g,d?B.g=c.g:d=c.u!=null;var p=c.h;if(d)Ni(B,c.u);else if(d=!!c.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var P=B.h.lastIndexOf("/");P!=-1&&(p=B.h.slice(0,P+1)+p)}if(P=p,P==".."||P==".")p="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){p=P.lastIndexOf("/",0)==0,P=P.split("/");const b=[];for(let W=0;W<P.length;){const we=P[W++];we=="."?p&&W==P.length&&b.push(""):we==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),p&&W==P.length&&b.push("")):(b.push(we),p=!0)}p=b.join("/")}else p=P}return d?B.h=p:d=c.i.toString()!=="",d?yu(B,xh(c.i)):d=!!c.m,d&&(B.m=c.m),B};function In(c){return new Br(c)}function Pi(c,B,d){c.j=d?Oi(B,!0):B,c.j&&(c.j=c.j.replace(/:$/,""))}function Ni(c,B){if(B){if(B=Number(B),isNaN(B)||B<0)throw Error("Bad port number "+B);c.u=B}else c.u=null}function yu(c,B,d){B instanceof ki?(c.i=B,B_(c.i,c.l)):(d||(B=bi(B,u_)),c.i=new ki(B,c.l))}function $e(c,B,d){c.i.set(B,d)}function la(c){return $e(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Oi(c,B){return c?B?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function bi(c,B,d){return typeof c=="string"?(c=encodeURI(c).replace(B,o_),d&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function o_(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var kh=/[#\/\?@]/g,a_=/[#\?:]/g,c_=/[#\?]/g,u_=/[#\?@]/g,l_=/#/g;function ki(c,B){this.h=this.g=null,this.i=c||null,this.j=!!B}function Yr(c){c.g||(c.g=new Map,c.h=0,c.i&&i_(c.i,function(B,d){c.add(decodeURIComponent(B.replace(/\+/g," ")),d)}))}n=ki.prototype,n.add=function(c,B){Yr(this),this.i=null,c=Rs(this,c);let d=this.g.get(c);return d||this.g.set(c,d=[]),d.push(B),this.h+=1,this};function Lh(c,B){Yr(c),B=Rs(c,B),c.g.has(B)&&(c.i=null,c.h-=c.g.get(B).length,c.g.delete(B))}function Fh(c,B){return Yr(c),B=Rs(c,B),c.g.has(B)}n.forEach=function(c,B){Yr(this),this.g.forEach(function(d,p){d.forEach(function(P){c.call(B,P,p,this)},this)},this)};function Mh(c,B){Yr(c);let d=[];if(typeof B=="string")Fh(c,B)&&(d=d.concat(c.g.get(Rs(c,B))));else for(c=Array.from(c.g.values()),B=0;B<c.length;B++)d=d.concat(c[B]);return d}n.set=function(c,B){return Yr(this),this.i=null,c=Rs(this,c),Fh(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[B]),this.h+=1,this},n.get=function(c,B){return c?(c=Mh(this,c),c.length>0?String(c[0]):B):B};function Vh(c,B,d){Lh(c,B),d.length>0&&(c.i=null,c.g.set(Rs(c,B),I(d)),c.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],B=Array.from(this.g.keys());for(let p=0;p<B.length;p++){var d=B[p];const P=vi(d);d=Mh(this,d);for(let b=0;b<d.length;b++){let W=P;d[b]!==""&&(W+="="+vi(d[b])),c.push(W)}}return this.i=c.join("&")};function xh(c){const B=new ki;return B.i=c.i,c.g&&(B.g=new Map(c.g),B.h=c.h),B}function Rs(c,B){return B=String(B),c.j&&(B=B.toLowerCase()),B}function B_(c,B){B&&!c.j&&(Yr(c),c.i=null,c.g.forEach(function(d,p){const P=p.toLowerCase();p!=P&&(Lh(this,p),Vh(this,P,d))},c)),c.j=B}function h_(c,B){const d=new ur;if(o.Image){const p=new Image;p.onload=h(hr,d,"TestLoadImage: loaded",!0,B,p),p.onerror=h(hr,d,"TestLoadImage: error",!1,B,p),p.onabort=h(hr,d,"TestLoadImage: abort",!1,B,p),p.ontimeout=h(hr,d,"TestLoadImage: timeout",!1,B,p),o.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=c}else B(!1)}function d_(c,B){const d=new ur,p=new AbortController,P=setTimeout(()=>{p.abort(),hr(d,"TestPingServer: timeout",!1,B)},1e4);fetch(c,{signal:p.signal}).then(b=>{clearTimeout(P),b.ok?hr(d,"TestPingServer: ok",!0,B):hr(d,"TestPingServer: server error",!1,B)}).catch(()=>{clearTimeout(P),hr(d,"TestPingServer: error",!1,B)})}function hr(c,B,d,p,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),p(d)}catch{}}function f_(){this.g=new ee}function Au(c){this.i=c.Sb||null,this.h=c.ab||!1}f(Au,Q),Au.prototype.g=function(){return new Ba(this.i,this.h)};function Ba(c,B){gt.call(this),this.H=c,this.o=B,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Ba,gt),n=Ba.prototype,n.open=function(c,B){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=B,this.readyState=1,Fi(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const B={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(B.body=c),(this.H||o).fetch(new Request(this.D,B)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Li(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Fi(this)),this.g&&(this.readyState=3,Fi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Uh(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Uh(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var B=c.value?c.value:new Uint8Array(0);(B=this.B.decode(B,{stream:!c.done}))&&(this.response=this.responseText+=B)}c.done?Li(this):Fi(this),this.readyState==3&&Uh(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,Li(this))},n.Na=function(c){this.g&&(this.response=c,Li(this))},n.ga=function(){this.g&&Li(this)};function Li(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Fi(c)}n.setRequestHeader=function(c,B){this.A.append(c,B)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],B=this.h.entries();for(var d=B.next();!d.done;)d=d.value,c.push(d[0]+": "+d[1]),d=B.next();return c.join(`\r
`)};function Fi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Gh(c){let B="";return Is(c,function(d,p){B+=p,B+=":",B+=d,B+=`\r
`}),B}function Ru(c,B,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Gh(d),typeof c=="string"?d!=null&&vi(d):$e(c,B,d))}function rt(c){gt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(rt,gt);var C_=/^https?$/i,p_=["POST","PUT"];n=rt.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,B,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);B=B?B.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ih.g(),this.g.onreadystatechange=C(l(this.Ca,this));try{this.B=!0,this.g.open(B,String(c),!0),this.B=!1}catch(b){Hh(this,b);return}if(c=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var P in p)d.set(P,p[P]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const b of p.keys())d.set(b,p.get(b));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),P=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(p_,B,void 0)>=0)||p||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,W]of d)this.g.setRequestHeader(b,W);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(b){Hh(this,b)}};function Hh(c,B){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=B,c.o=5,qh(c),ha(c)}function qh(c){c.A||(c.A=!0,wt(c,"complete"),wt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,wt(this,"complete"),wt(this,"abort"),ha(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ha(this,!0)),rt.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Jh(this):this.Xa())},n.Xa=function(){Jh(this)};function Jh(c){if(c.h&&typeof i<"u"){if(c.v&&dr(c)==4)setTimeout(c.Ca.bind(c),0);else if(wt(c,"readystatechange"),dr(c)==4){c.h=!1;try{const b=c.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var B=!0;break e;default:B=!1}var d;if(!(d=B)){var p;if(p=b===0){let W=String(c.D).match(bh)[1]||null;!W&&o.self&&o.self.location&&(W=o.self.location.protocol.slice(0,-1)),p=!C_.test(W?W.toLowerCase():"")}d=p}if(d)wt(c,"complete"),wt(c,"success");else{c.o=6;try{var P=dr(c)>2?c.g.statusText:""}catch{P=""}c.l=P+" ["+c.ca()+"]",qh(c)}}finally{ha(c)}}}}function ha(c,B){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const d=c.g;c.g=null,B||wt(c,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function dr(c){return c.g?c.g.readyState:0}n.ca=function(){try{return dr(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var B=this.g.responseText;return c&&B.indexOf(c)==0&&(B=B.substring(c.length)),se(B)}};function jh(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function g_(c){const B={};c=(c.g&&dr(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<c.length;p++){if(_(c[p]))continue;var d=t_(c[p]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=B[P]||[];B[P]=b,b.push(d)}nt(B,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mi(c,B,d){return d&&d.internalChannelParams&&d.internalChannelParams[c]||B}function Kh(c){this.za=0,this.i=[],this.j=new ur,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Mi("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Mi("baseRetryDelayMs",5e3,c),this.Za=Mi("retryDelaySeedMs",1e4,c),this.Ta=Mi("forwardChannelMaxRetries",2,c),this.va=Mi("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new vh(c&&c.concurrentRequestLimit),this.Ba=new f_,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Kh.prototype,n.ka=8,n.I=1,n.connect=function(c,B,d,p){Ce(0),this.W=c,this.H=B||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=td(this,null,this.W),fa(this)};function vu(c){if($h(c),c.I==3){var B=c.V++,d=In(c.J);if($e(d,"SID",c.M),$e(d,"RID",B),$e(d,"TYPE","terminate"),Vi(c,d),B=new lr(c,c.j,B),B.M=2,B.A=la(In(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(B.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=B.A,d=!0),d||(B.g=nd(B.j,null),B.g.ea(B.A)),B.F=Date.now(),ua(B)}ed(c)}function da(c){c.g&&(Pu(c),c.g.cancel(),c.g=null)}function $h(c){da(c),c.v&&(o.clearTimeout(c.v),c.v=null),Ca(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function fa(c){if(!Sh(c.h)&&!c.m){c.m=!0;var B=c.Ea;Le||E(),Ve||(Le(),Ve=!0),A.add(B,c),c.D=0}}function m_(c,B){return Ph(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=B.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=xe(l(c.Ea,c,B),Zh(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const P=new lr(this,this.j,c);let b=this.o;if(this.U&&(b?(b=Zo(b),ta(b,this.U)):b=this.U),this.u!==null||this.R||(P.J=b,b=null),this.S)e:{for(var B=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(B+=p,B>4096){B=d;break e}if(B===4096||d===this.i.length-1){B=d+1;break e}}B=1e3}else B=1e3;B=Wh(this,P,B),d=In(this.J),$e(d,"RID",c),$e(d,"CVER",22),this.G&&$e(d,"X-HTTP-Session-Id",this.G),Vi(this,d),b&&(this.R?B="headers="+vi(Gh(b))+"&"+B:this.u&&Ru(d,this.u,b)),Tu(this.h,P),this.Ra&&$e(d,"TYPE","init"),this.S?($e(d,"$req",B),$e(d,"SID","null"),P.U=!0,_u(P,d,null)):_u(P,d,B),this.I=2}}else this.I==3&&(c?zh(this,c):this.i.length==0||Sh(this.h)||zh(this))};function zh(c,B){var d;B?d=B.l:d=c.V++;const p=In(c.J);$e(p,"SID",c.M),$e(p,"RID",d),$e(p,"AID",c.K),Vi(c,p),c.u&&c.o&&Ru(p,c.u,c.o),d=new lr(c,c.j,d,c.D+1),c.u===null&&(d.J=c.o),B&&(c.i=B.G.concat(c.i)),B=Wh(c,d,1e3),d.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Tu(c.h,d),_u(d,p,B)}function Vi(c,B){c.H&&Is(c.H,function(d,p){$e(B,p,d)}),c.l&&Is({},function(d,p){$e(B,p,d)})}function Wh(c,B,d){d=Math.min(c.i.length,d);const p=c.l?l(c.l.Ka,c.l,c):null;e:{var P=c.i;let we=-1;for(;;){const ft=["count="+d];we==-1?d>0?(we=P[0].g,ft.push("ofs="+we)):we=0:ft.push("ofs="+we);let Ue=!0;for(let mt=0;mt<d;mt++){var b=P[mt].g;const wn=P[mt].map;if(b-=we,b<0)we=Math.max(0,P[mt].g-100),Ue=!1;else try{b="req"+b+"_"||"";try{var W=wn instanceof Map?wn:Object.entries(wn);for(const[Zr,fr]of W){let Cr=fr;a(fr)&&(Cr=re(fr)),ft.push(b+Zr+"="+encodeURIComponent(Cr))}}catch(Zr){throw ft.push(b+"type="+encodeURIComponent("_badmap")),Zr}}catch{p&&p(wn)}}if(Ue){W=ft.join("&");break e}}W=void 0}return c=c.i.splice(0,d),B.G=c,W}function Qh(c){if(!c.g&&!c.v){c.Y=1;var B=c.Da;Le||E(),Ve||(Le(),Ve=!0),A.add(B,c),c.A=0}}function Su(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=xe(l(c.Da,c),Zh(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,Yh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=xe(l(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ce(10),da(this),Yh(this))};function Pu(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function Yh(c){c.g=new lr(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var B=In(c.na);$e(B,"RID","rpc"),$e(B,"SID",c.M),$e(B,"AID",c.K),$e(B,"CI",c.F?"0":"1"),!c.F&&c.ia&&$e(B,"TO",c.ia),$e(B,"TYPE","xmlhttp"),Vi(c,B),c.u&&c.o&&Ru(B,c.u,c.o),c.O&&(c.g.H=c.O);var d=c.g;c=c.ba,d.M=1,d.A=la(In(B)),d.u=null,d.R=!0,yh(d,c)}n.Va=function(){this.C!=null&&(this.C=null,da(this),Su(this),Ce(19))};function Ca(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function Xh(c,B){var d=null;if(c.g==B){Ca(c),Pu(c),c.g=null;var p=2}else if(wu(c.h,B))d=B.G,Nh(c.h,B),p=1;else return;if(c.I!=0){if(B.o)if(p==1){d=B.u?B.u.length:0,B=Date.now()-B.F;var P=c.D;p=ge(),wt(p,new Ut(p,d)),fa(c)}else Qh(c);else if(P=B.m,P==3||P==0&&B.X>0||!(p==1&&m_(c,B)||p==2&&Su(c)))switch(d&&d.length>0&&(B=c.h,B.i=B.i.concat(d)),P){case 1:Xr(c,5);break;case 4:Xr(c,10);break;case 3:Xr(c,6);break;default:Xr(c,2)}}}function Zh(c,B){let d=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(d*=2),d*B}function Xr(c,B){if(c.j.info("Error code "+B),B==2){var d=l(c.bb,c),p=c.Ua;const P=!p;p=new Br(p||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Pi(p,"https"),la(p),P?h_(p.toString(),d):d_(p.toString(),d)}else Ce(2);c.I=0,c.l&&c.l.pa(B),ed(c),$h(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))};function ed(c){if(c.I=0,c.ja=[],c.l){const B=Oh(c.h);(B.length!=0||c.i.length!=0)&&(v(c.ja,B),v(c.ja,c.i),c.h.i.length=0,I(c.i),c.i.length=0),c.l.oa()}}function td(c,B,d){var p=d instanceof Br?In(d):new Br(d);if(p.g!="")B&&(p.g=B+"."+p.g),Ni(p,p.u);else{var P=o.location;p=P.protocol,B=B?B+"."+P.hostname:P.hostname,P=+P.port;const b=new Br(null);p&&Pi(b,p),B&&(b.g=B),P&&Ni(b,P),d&&(b.h=d),p=b}return d=c.G,B=c.wa,d&&B&&$e(p,d,B),$e(p,"VER",c.ka),Vi(c,p),p}function nd(c,B,d){if(B&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return B=c.Aa&&!c.ma?new rt(new Au({ab:d})):new rt(c.ma),B.Fa(c.L),B}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function rd(){}n=rd.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function pa(){}pa.prototype.g=function(c,B){return new tn(c,B)};function tn(c,B){gt.call(this),this.g=new Kh(B),this.l=c,this.h=B&&B.messageUrlParams||null,c=B&&B.messageHeaders||null,B&&B.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=B&&B.initMessageHeaders||null,B&&B.messageContentType&&(c?c["X-WebChannel-Content-Type"]=B.messageContentType:c={"X-WebChannel-Content-Type":B.messageContentType}),B&&B.sa&&(c?c["X-WebChannel-Client-Profile"]=B.sa:c={"X-WebChannel-Client-Profile":B.sa}),this.g.U=c,(c=B&&B.Qb)&&!_(c)&&(this.g.u=c),this.A=B&&B.supportsCrossDomainXhr||!1,this.v=B&&B.sendRawJson||!1,(B=B&&B.httpSessionIdParam)&&!_(B)&&(this.g.G=B,c=this.h,c!==null&&B in c&&(c=this.h,B in c&&delete c[B])),this.j=new vs(this)}f(tn,gt),tn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){vu(this.g)},tn.prototype.o=function(c){var B=this.g;if(typeof c=="string"){var d={};d.__data__=c,c=d}else this.v&&(d={},d.__data__=re(c),c=d);B.i.push(new s_(B.Ya++,c)),B.I==3&&fa(B)},tn.prototype.N=function(){this.g.l=null,delete this.j,vu(this.g),delete this.g,tn.Z.N.call(this)};function sd(c){me.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var B=c.__sm__;if(B){e:{for(const d in B){c=d;break e}c=void 0}(this.i=c)&&(c=this.i,B=B!==null&&c in B?B[c]:void 0),this.data=B}else this.data=c}f(sd,me);function id(){fe.call(this),this.status=1}f(id,fe);function vs(c){this.g=c}f(vs,rd),vs.prototype.ra=function(){wt(this.g,"a")},vs.prototype.qa=function(c){wt(this.g,new sd(c))},vs.prototype.pa=function(c){wt(this.g,new id)},vs.prototype.oa=function(){wt(this.g,"b")},pa.prototype.createWebChannel=pa.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,ag=function(){return new pa},og=function(){return ge()},ig=De,Cl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ca.NO_ERROR=0,ca.TIMEOUT=8,ca.HTTP_ERROR=6,Ha=ca,Dh.COMPLETE="complete",sg=Dh,te.EventType=X,X.OPEN="a",X.CLOSE="b",X.ERROR="c",X.MESSAGE="d",gt.prototype.listen=gt.prototype.J,ji=te,rt.prototype.listenOnce=rt.prototype.K,rt.prototype.getLastError=rt.prototype.Ha,rt.prototype.getLastErrorCode=rt.prototype.ya,rt.prototype.getStatus=rt.prototype.ca,rt.prototype.getResponseJson=rt.prototype.La,rt.prototype.getResponseText=rt.prototype.la,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Fa,rg=rt}).apply(typeof Da<"u"?Da:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.8.6
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository github:le0pard/re2js
* @license MIT
*/var Ge,G=(Ge=class{},J(Ge,"FOLD_CASE",1),J(Ge,"LITERAL",2),J(Ge,"CLASS_NL",4),J(Ge,"DOT_NL",8),J(Ge,"ONE_LINE",16),J(Ge,"NON_GREEDY",32),J(Ge,"PERL_X",64),J(Ge,"UNICODE_GROUPS",128),J(Ge,"WAS_DOLLAR",256),J(Ge,"LOOKBEHIND",512),J(Ge,"MATCH_NL",Ge.CLASS_NL|Ge.DOT_NL),J(Ge,"PERL",Ge.CLASS_NL|Ge.ONE_LINE|Ge.PERL_X|Ge.UNICODE_GROUPS),J(Ge,"POSIX",0),J(Ge,"UNANCHORED",0),J(Ge,"ANCHOR_START",1),J(Ge,"ANCHOR_BOTH",2),Ge);const Ss={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},Co=128,pl=new Int32Array(Co),gl=new Int32Array(Co),Ia=65535;for(let n=0;n<Co;n++)n>=97&&n<=122?pl[n]=n-32:pl[n]=n,n>=65&&n<=90?gl[n]=n+32:gl[n]=n;var al,k=(al=class{static toUpperCase(n){if(n<Co)return pl[n];const e=String.fromCodePoint(n).toUpperCase(),t=e.codePointAt(0)>Ia?2:1;if(e.length>t)return n;const r=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),s=r.codePointAt(0)>Ia?2:1;return r.length>s||r.codePointAt(0)!==n?n:e.codePointAt(0)}static toLowerCase(n){if(n<Co)return gl[n];const e=String.fromCodePoint(n).toLowerCase(),t=e.codePointAt(0)>Ia?2:1;if(e.length>t)return n;const r=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),s=r.codePointAt(0)>Ia?2:1;return r.length>s||r.codePointAt(0)!==n?n:e.codePointAt(0)}},J(al,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["'",39],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["`",96],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]])),al),g=class{constructor(n,e=!1){this.data=n,this.isStride1=e,this.SIZE=e?2:3}getLo(n){return this.data[n*this.SIZE]}getHi(n){return this.data[n*this.SIZE+1]}getStride(n){return this.isStride1?1:this.data[n*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const cg=new Uint8Array(256);for(let n=0,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-";n<64;n++)cg[e.charCodeAt(n)]=n;const ug=n=>{const e=[];let t=0,r=0;for(let s=0;s<n.length;s++){let i=cg[n.charCodeAt(s)];t|=(i&31)<<r,i&32?r+=5:(e.push(t),t=0,r=0)}return e},m=(n,e)=>{const t=ug(n),r=e?t.length/2:t.length/3,s=new Uint32Array(r*3);let i=0,o=0;for(let a=0;a<r;a++)i+=t[o++],s[a*3]=i,i+=t[o++],s[a*3+1]=i,s[a*3+2]=e?1:t[o++];return s},ky=n=>{const e=ug(n),t=new Map;let r=0;for(let s=0;s<e.length;s+=2){r+=e[s];const i=e[s+1],o=i>>>1^-(i&1);t.set(r,r+o)}return t};var wa=class{constructor(n){this.initializer=n,this.cache=new Map}has(n){return n in this.initializer}get(n){if(this.cache.has(n))return this.cache.get(n);const e=this.initializer[n],t=e?e():null;return this.cache.set(n,t),t}},mr,Ht=(mr=class{static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=ky("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static get Print(){return this._Print||(this._Print=new g(m("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}static get Upper(){return this.CATEGORIES.get("Lu")}},J(mr,"_CASE_ORBIT",null),J(mr,"_Print",null),J(mr,"CATEGORIES",new wa({C:()=>new g(m("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new g(m("AfgDgB",!0)),Cf:()=>new g(m("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new g(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new g(m("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new g(m("gg2B--B",!0)),L:()=>new g(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new g(m("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new g(m("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new g(m("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new g(m("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new g(m("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new g(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new g(m("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new g(m("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new g(m("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new g(m("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new g(m("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new g(m("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new g(m("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new g(m("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new g(m("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new g(m("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new g(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new g(m("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new g(m("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new g(m("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new g(m("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new g(m("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new g(m("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new g(m("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new g(m("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new g(m("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new g(m("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new g(m("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new g(m("ohIA",!0)),Zp:()=>new g(m("phIA",!0)),Zs:()=>new g(m("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new g(m("wBJIFbF",!0)),Alphabetic:()=>new g(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new g(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new g(m("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new g(m("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new g(m("7-8DE",!0)),Emoji_Modifier_Base:()=>new g(m("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new g(m("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new g(m("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new g(m("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new g(m("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new g(m("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new g(m("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new g(m("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new g(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new g(m("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))})),J(mr,"SCRIPTS",new wa({Adlam:()=>new g(m("go6DrCFJFB",!0)),Ahom:()=>new g(m("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new g(m("ggxCmS",!0)),Arabic:()=>new g(m("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new g(m("xpBlBDxBDCks9BE",!0)),Avestan:()=>new g(m("g4iC1BEG",!0)),Balinese:()=>new g(m("g4GsCCxB",!0)),Bamum:()=>new g(m("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new g(m("w26CdDF",!0)),Batak:()=>new g(m("g+GzBJD",!0)),Bengali:()=>new g(m("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new g(m("g17CYDY",!0)),Bhaiksuki:()=>new g(m("ggnCICsBCNLc",!0)),Bopomofo:()=>new g(m("qXB6wLqBxDf",!0)),Brahmi:()=>new g(m("ggkCtCFjBKA",!0)),Braille:()=>new g(m("ggK-H",!0)),Buginese:()=>new g(m("gwGbDB",!0)),Buhid:()=>new g(m("g6FT",!0)),Canadian_Aboriginal:()=>new g(m("ggF-TxRlC7tgCP",!0)),Carian:()=>new g(m("g1gCwB",!0)),Caucasian_Albanian:()=>new g(m("wphCzBMA",!0)),Chakma:()=>new g(m("gokC0BCR",!0)),Cham:()=>new g(m("gwqB2BKNDJDD",!0)),Cherokee:()=>new g(m("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new g(m("w9jCb",!0)),Common:()=>new g(m("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new g(m("ifNxkKzDGG",!0)),Cuneiform:()=>new g(m("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new g(m("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new g(m("w8rCiD",!0)),Cyrillic:()=>new g(m("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new g(m("gghCvC",!0)),Devanagari:()=>new g(m("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new g(m("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new g(m("ggmC7B",!0)),Duployan:()=>new g(m("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new g(m("ggsC1iBL68D",!0)),Elbasan:()=>new g(m("gohCnB",!0)),Elymaic:()=>new g(m("g-jCW",!0)),Ethiopic:()=>new g(m("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new g(m("gqjClBEcJB",!0)),Georgian:()=>new g(m("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new g(m("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new g(m("w5gCa",!0)),Grantha:()=>new g(m("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new g(m("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new g(m("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new g(m("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new g(m("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new g(m("go4C5B",!0)),Han:()=>new g(m("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new g(m("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new g(m("gojCnBJJ",!0)),Hanunoo:()=>new g(m("g5FU",!0)),Hatran:()=>new g(m("gniCSCBGE",!0)),Hebrew:()=>new g(m("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new g(m("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new g(m("giiCVCI",!0)),Inherited:()=>new g(m("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new g(m("g7iCSGH",!0)),Inscriptional_Parthian:()=>new g(m("g6iCVDH",!0)),Javanese:()=>new g(m("gsqBtCDJFB",!0)),Kaithi:()=>new g(m("gkkCiCLA",!0)),Kannada:()=>new g(m("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new g(m("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new g(m("g4nCQCoBEc",!0)),Kayah_Li:()=>new g(m("goqBtBCA",!0)),Kharoshthi:()=>new g(m("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new g(m("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new g(m("g8F9CDJHJnPf",!0)),Khojki:()=>new g(m("gwkCRCuB",!0)),Khudawadi:()=>new g(m("w1kC6BGJ",!0)),Kirat_Rai:()=>new g(m("gq7C5B",!0)),Lao:()=>new g(m("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new g(m("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new g(m("ggH3BEOEC",!0)),Limbu:()=>new g(m("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new g(m("gwhC2JKVLH",!0)),Linear_B:()=>new g(m("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new g(m("wmpBvBx1eA",!0)),Lycian:()=>new g(m("g0gCc",!0)),Lydian:()=>new g(m("gpiCZGA",!0)),Mahajani:()=>new g(m("wqkCmB",!0)),Makasar:()=>new g(m("g3nCY",!0)),Malayalam:()=>new g(m("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new g(m("giCbDA",!0)),Manichaean:()=>new g(m("g2iCmBFL",!0)),Marchen:()=>new g(m("wjnCfDVCN",!0)),Masaram_Gondi:()=>new g(m("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new g(m("gy7C6C",!0)),Meetei_Mayek:()=>new g(m("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new g(m("gg6DkGDP",!0)),Meroitic_Cursive:()=>new g(m("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new g(m("gsiCf",!0)),Miao:()=>new g(m("g47CqCF4BIQ",!0)),Modi:()=>new g(m("gwlCkCMJ",!0)),Mongolian:()=>new g(m("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new g(m("gy6CeCJFB",!0)),Multani:()=>new g(m("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new g(m("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new g(m("gkiCeJI",!0)),Nag_Mundari:()=>new g(m("wm5DpB",!0)),Nandinagari:()=>new g(m("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new g(m("gsGrBFZHKEB",!0)),Newa:()=>new g(m("gglC7CCE",!0)),Nko:()=>new g(m("g+B6BDC",!0)),Nushu:()=>new g(m("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new g(m("go4DsBENDJFB",!0)),Ogham:()=>new g(m("g0Fc",!0)),Ol_Chiki:()=>new g(m("wiHvB",!0)),Ol_Onal:()=>new g(m("wu5DqBFA",!0)),Old_Hungarian:()=>new g(m("gkjCyBOyBIF",!0)),Old_Italic:()=>new g(m("g4gCjBKC",!0)),Old_North_Arabian:()=>new g(m("g0iCf",!0)),Old_Permic:()=>new g(m("w6gCqB",!0)),Old_Persian:()=>new g(m("g9gCjBFN",!0)),Old_Sogdian:()=>new g(m("g4jCnB",!0)),Old_South_Arabian:()=>new g(m("gziCf",!0)),Old_Turkic:()=>new g(m("ggjCoC",!0)),Old_Uyghur:()=>new g(m("w7jCZ",!0)),Oriya:()=>new g(m("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new g(m("wlhCjBFjB",!0)),Osmanya:()=>new g(m("gkhCdDJ",!0)),Pahawh_Hmong:()=>new g(m("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new g(m("gjiCf",!0)),Pau_Cin_Hau:()=>new g(m("g2mC4B",!0)),Phags_Pa:()=>new g(m("giqB3B",!0)),Phoenician:()=>new g(m("goiCbEA",!0)),Psalter_Pahlavi:()=>new g(m("g8iCRIDNG",!0)),Rejang:()=>new g(m("wpqBjBMA",!0)),Runic:()=>new g(m("g1FqCEK",!0)),Samaritan:()=>new g(m("ggCtBDO",!0)),Saurashtra:()=>new g(m("gkqBlCJL",!0)),Sharada:()=>new g(m("gskC-ChsCH",!0)),Shavian:()=>new g(m("wihCvB",!0)),Siddham:()=>new g(m("gslC1BDlB",!0)),Sidetic:()=>new g(m("gqiCZ",!0)),SignWriting:()=>new g(m("gg2DrUQECO",!0)),Sinhala:()=>new g(m("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new g(m("w5jCpB",!0)),Sora_Sompeng:()=>new g(m("wmkCYIJ",!0)),Soyombo:()=>new g(m("wymCyC",!0)),Sundanese:()=>new g(m("g8G-BhIH",!0)),Sunuwar:()=>new g(m("g+mChBPJ",!0)),Syloti_Nagri:()=>new g(m("ggqBsB",!0)),Syriac:()=>new g(m("g4BNC7BDCxIK",!0)),Tagalog:()=>new g(m("g4FVKA",!0)),Tagbanwa:()=>new g(m("g7FMCCCB",!0)),Tai_Le:()=>new g(m("wqGdDE",!0)),Tai_Tham:()=>new g(m("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new g(m("g0qBiCZE",!0)),Tai_Yo:()=>new g(m("g25DeCVJB",!0)),Takri:()=>new g(m("g0lC5BHJ",!0)),Tamil:()=>new g(m("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new g(m("wz6CuCCJ",!0)),Tangut:()=>new g(m("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new g(m("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new g(m("g8BxB",!0)),Thai:()=>new g(m("hwD5BGb",!0)),Tibetan:()=>new g(m("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new g(m("wpL3BIBPA",!0)),Tirhuta:()=>new g(m("gklCnCJJ",!0)),Todhri:()=>new g(m("guhCzB",!0)),Tolong_Siki:()=>new g(m("wtnCrBFJ",!0)),Toto:()=>new g(m("w04De",!0)),Tulu_Tigalari:()=>new g(m("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new g(m("g8gCdCA",!0)),Unknown:()=>new g(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new g(m("gopBrJ",!0)),Vithkuqi:()=>new g(m("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new g(m("g24D5BGA",!0)),Warang_Citi:()=>new g(m("glmCyCNA",!0)),Yezidi:()=>new g(m("g0jCpBCCDB",!0)),Yi:()=>new g(m("ggoBskBE2B",!0)),Zanabazar_Square:()=>new g(m("gwmCnC",!0))})),J(mr,"FOLD_CATEGORIES",new wa({L:()=>new g(m("laA",!0)),LC:()=>new g(m("laA",!0)),Ll:()=>new g(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new g(m("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new g(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new g(m("5cgBgBlgHAB",!1)),Mn:()=>new g(m("5cgBgBlgHAB",!1)),Emoji:()=>new g(m("8mJA",!0)),Extended_Pictographic:()=>new g(m("8mJA",!0)),Lowercase:()=>new g(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new g(m("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new g(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))})),J(mr,"FOLD_SCRIPT",new wa({Common:()=>new g(m("8cgBgB",!1)),Greek:()=>new g(m("1FwUwU",!1)),Inherited:()=>new g(m("5cgBgBlgHAB",!1))})),mr),He,ne=(He=class{static is32(e,t){let r=0,s=e.length;for(;r<s;){const i=r+Math.floor((s-r)/2),o=e.getLo(i),a=e.getHi(i);if(o<=t&&t<=a){const u=e.getStride(i);return(t-o)%u===0}t<o?s=i:r=i+1}return!1}static is(e,t){if(t<=He.MAX_LATIN1){for(let r=0;r<e.length;r++){if(t>e.getHi(r))continue;const s=e.getLo(r);if(t<s)return!1;const i=e.getStride(r);return(t-s)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&He.is32(e,t)}static isUpper(e){if(e<=He.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return He.is(Ht.Upper,e)}static isPrint(e){return e<=He.MAX_LATIN1?e>=32&&e<He.MAX_ASCII||e>=161&&e!==173:He.is(Ht.Print,e)}static simpleFold(e){if(Ht.CASE_ORBIT.has(e))return Ht.CASE_ORBIT.get(e);const t=k.toLowerCase(e);return t!==e?t:k.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=He.MAX_ASCII&&t<=He.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let r=He.simpleFold(e);r!==e;r=He.simpleFold(r))if(r===t)return!0;return!1}},J(He,"MAX_RUNE",1114111),J(He,"MAX_ASCII",127),J(He,"MAX_LATIN1",255),J(He,"MAX_BMP",65535),J(He,"MIN_FOLD",65),J(He,"MAX_FOLD",125251),J(He,"MIN_HIGH_SURROGATE",55296),J(He,"MAX_HIGH_SURROGATE",56319),J(He,"MIN_LOW_SURROGATE",56320),J(He,"MAX_LOW_SURROGATE",57343),J(He,"MIN_SUPPLEMENTARY_CODE_POINT",65536),He);const fB=256,lg=new Uint8Array(fB);for(let n=0;n<fB;n++)lg[n]=97<=n&&n<=122||65<=n&&n<=90||48<=n&&n<=57||n===95?1:0;let Ju=null,ju=null;var We,ae=(We=class{static emptyInts(){return[]}static isByteArray(e){return Array.isArray(e)||e instanceof Uint8Array}static isalnum(e){return k.CODES.get("0")<=e&&e<=k.CODES.get("9")||k.CODES.get("a")<=e&&e<=k.CODES.get("z")||k.CODES.get("A")<=e&&e<=k.CODES.get("Z")}static unhex(e){return k.CODES.get("0")<=e&&e<=k.CODES.get("9")?e-k.CODES.get("0"):k.CODES.get("a")<=e&&e<=k.CODES.get("f")?e-k.CODES.get("a")+10:k.CODES.get("A")<=e&&e<=k.CODES.get("F")?e-k.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(ne.isPrint(e))We.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case k.CODES.get('"'):t+='\\"';break;case k.CODES.get("\\"):t+="\\\\";break;case k.CODES.get("	"):t+="\\t";break;case k.CODES.get(`
`):t+="\\n";break;case k.CODES.get("\r"):t+="\\r";break;case k.CODES.get("\b"):t+="\\b";break;case k.CODES.get("\f"):t+="\\f";break;default:{let r=e.toString(16);e<256?(t+="\\x",r.length===1&&(t+="0"),t+=r):t+=`\\x{${r}}`;break}}return t}static stringToRunes(e){const t=String(e),r=[];let s=0;for(;s<t.length;){const i=t.codePointAt(s);r.push(i),s+=i>ne.MAX_BMP?2:1}return r}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<fB?lg[e]===1:!1}static emptyOpContext(e,t){let r=0;return e<0&&(r|=We.EMPTY_BEGIN_TEXT|We.EMPTY_BEGIN_LINE),e===10&&(r|=We.EMPTY_BEGIN_LINE),t<0&&(r|=We.EMPTY_END_TEXT|We.EMPTY_END_LINE),t===10&&(r|=We.EMPTY_END_LINE),We.isWordRune(e)!==We.isWordRune(t)?r|=We.EMPTY_WORD_BOUNDARY:r|=We.EMPTY_NO_WORD_BOUNDARY,r}static quoteMeta(e){return e.split("").map(t=>We.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>ne.MAX_BMP?2:1}static toArray(e){const t=e.length,r=new Array(t);for(let s=0;s<t;s++)r[s]=e[s];return r}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Ju||(Ju=new TextEncoder),Ju.encode(e);{let t=[],r=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=i&63|128):(i&64512)===ne.MIN_HIGH_SURROGATE&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===ne.MIN_LOW_SURROGATE?(i=ne.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=i&63|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){ju||(ju=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return ju.decode(t)}else{let t=[],r=0,s=0;for(;r<e.length;){let i=e[r++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[r++];t[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[r++],a=e[r++],u=e[r++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-ne.MIN_SUPPLEMENTARY_CODE_POINT;t[s++]=String.fromCharCode(ne.MIN_HIGH_SURROGATE+(l>>10)),t[s++]=String.fromCharCode(ne.MIN_LOW_SURROGATE+(l&1023))}else{let o=e[r++],a=e[r++];t[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")}}},J(We,"METACHARACTERS","\\.+*?()|[]{}^$"),J(We,"EMPTY_BEGIN_LINE",1),J(We,"EMPTY_END_LINE",2),J(We,"EMPTY_BEGIN_TEXT",4),J(We,"EMPTY_END_TEXT",8),J(We,"EMPTY_WORD_BOUNDARY",16),J(We,"EMPTY_NO_WORD_BOUNDARY",32),J(We,"EMPTY_ALL",-1),We);const Bg=(n=[],e=0)=>{const t=Object.create(null);for(let r=0;r<n.length;r++){const s=n[r],i=e+r;t[s]=i,t[i]=s}return Object.freeze(t)};var wr,ds=(wr=class{getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===wr.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===wr.Encoding.UTF_16}},J(wr,"Encoding",Bg(["UTF_16","UTF_8"])),wr),Vd=class extends ds{constructor(n=null){super(),this.bytes=n}getEncoding(){return ds.Encoding.UTF_8}asCharSequence(){return ae.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},Ly=class extends ds{constructor(n=null){super(),this.charSequence=n}getEncoding(){return ds.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return ae.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},os=class{static utf16(n){return new Ly(n)}static utf8(n){return ae.isByteArray(n)?new Vd(n):new Vd(ae.stringToUtf8ByteArray(n))}},Lt=class{static EOF(){return-8}constructor(){this.end=0}canCheckPrefix(){return!0}endPos(){return this.end}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},Fy=class extends Lt{constructor(n,e=0,t=n.length){super(),this.bytes=n,this.start=e,this.end=t}hasString(n,e){const t=n.bytes;if(t.length===0)return!0;const r=this.indexOf(this.bytes,t,this.start+e);return r!==-1&&r<=this.end-t.length}hasAnyString(n,e){return n.ac8?n.ac8.searchUTF8(this.bytes,this.start+e,this.end):!1}step(n){if(n+=this.start,n>=this.end)return Lt.EOF();const e=this.bytes[n]&255;if(e<128)return e<<3|1;if(e>=194&&e<=223&&n+1<this.end){const t=this.bytes[n+1]&255;return(t&192)!==128?e<<3|1:((e&31)<<6|t&63)<<3|2}else if(e>=224&&e<=239&&n+2<this.end){const t=this.bytes[n+1]&255;if((t&192)!==128)return e<<3|1;const r=this.bytes[n+2]&255;return(r&192)!==128?e<<3|1:((e&15)<<12|(t&63)<<6|r&63)<<3|3}else if(e>=240&&e<=244&&n+3<this.end){const t=this.bytes[n+1]&255;if((t&192)!==128)return e<<3|1;const r=this.bytes[n+2]&255;if((r&192)!==128)return e<<3|1;const s=this.bytes[n+3]&255;return(s&192)!==128?e<<3|1:((e&7)<<18|(t&63)<<12|(r&63)<<6|s&63)<<3|4}else return e<<3|1}index(n,e){e+=this.start;const t=this.indexOf(this.bytes,n.prefixUTF8,e);return t<0?t:t-e}context(n){n+=this.start;let e=-1;if(n>this.start&&n<=this.end){let r=n-1;if(e=this.bytes[r--],e>=128){let s=n-4;for(s<this.start&&(s=this.start);r>=s&&(this.bytes[r]&192)===128;)r--;r<this.start&&(r=this.start),e=this.step(r-this.start)>>3}}const t=n<this.end?this.step(n-this.start)>>3:-1;return ae.emptyOpContext(e,t)}indexOf(n,e,t=0){let r=e.length;if(r===0)return t<=this.end?t:-1;const s=e[0];let i=this.end-r;const o=typeof n.indexOf=="function";let a=t;for(;a<=i;){if(o){if(a=n.indexOf(s,a),a===-1||a>i)return-1}else{for(;a<=i&&n[a]!==s;)a++;if(a>i)return-1}let u=!0;for(let l=1;l<r;l++)if(n[a+l]!==e[l]){u=!1;break}if(u)return a;a++}return-1}prefixLength(n){return n.prefixUTF8.length}},My=class extends Lt{constructor(n,e=0,t=n.length){super(),this.charSequence=n,this.start=e,this.end=t}hasString(n,e){const t=this.charSequence.indexOf(n.str,this.start+e);return t!==-1&&t<=this.end-n.str.length}hasAnyString(n,e){return n.ac16?n.ac16.searchUTF16(this.charSequence,this.start+e,this.end):!1}step(n){if(n+=this.start,n>=this.end)return Lt.EOF();const e=this.charSequence.charCodeAt(n);if(e<ne.MIN_HIGH_SURROGATE||e>ne.MAX_HIGH_SURROGATE||n+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(n+1);return t>=ne.MIN_LOW_SURROGATE&&t<=ne.MAX_LOW_SURROGATE?(e-ne.MIN_HIGH_SURROGATE)*1024+(t-ne.MIN_LOW_SURROGATE)+ne.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(n,e){e+=this.start;const t=this.charSequence.indexOf(n.prefix,e);return t<0||t>this.end-n.prefix.length?-1:t-e}context(n){n+=this.start;const e=n>this.start&&n<=this.end?this.charSequence.charCodeAt(n-1):-1,t=n<this.end?this.charSequence.charCodeAt(n):-1;return ae.emptyOpContext(e,t)}prefixLength(n){return n.prefix.length}},ze=class{static fromUTF8(n,e=0,t=n.length){return new Fy(n,e,t)}static fromUTF16(n,e=0,t=n.length){return new My(n,e,t)}},Vo=class extends Error{constructor(n){super(n),this.name="RE2JSException"}},qe=class extends Vo{constructor(n,e=null){let t=`error parsing regexp: ${n}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=n,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},Vy=class extends Vo{constructor(n){super(n),this.name="RE2JSCompileException"}},Gt=class extends Vo{constructor(n){super(n),this.name="RE2JSGroupException"}},xy=class extends Vo{constructor(n){super(n),this.name="RE2JSFlagsException"}},Xi=class extends Vo{constructor(n){super(n),this.name="RE2JSInternalException"}},us,xd=(us=class{static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(r=>{const s=r.codePointAt(0);return s===k.CODES.get("\\")||s===k.CODES.get("$")?`\\${r}`:r}).join(""):e.indexOf("$")<0?e:e.split("").map(r=>r.codePointAt(0)===k.CODES.get("$")?"$$":r).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const r=this.patternInput.re2();this.patternGroupCount=r.numberOfCapturingGroups(),this.groups=[],this.namedGroups=r.namedGroups,this.numberOfInstructions=r.numberOfInstructions(),t instanceof ds?this.resetMatcherInput(t):ae.isByteArray(t)?this.resetMatcherInput(os.utf8(t)):this.resetMatcherInput(os.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof ds||(ae.isByteArray(e)?e=os.utf8(e):e=os.utf16(e)),this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Gt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Gt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const s=this.namedGroups[e];if(!Number.isFinite(s))throw new Gt(`group '${e}' not found`);e=s}const t=this.start(e),r=this.end(e);return t<0&&r<0?null:this.substring(t,r)}getNamedGroups(){if(!this.hasMatch)throw new Gt("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new Gt(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new Gt("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,r=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!r[0])throw new Gt("inconsistency in matching group data");this.groups=r[1],this.hasGroups=!0}matches(){return this.genMatch(0,G.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,G.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new Gt(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?ze.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):ze.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,G.UNANCHORED)}genMatch(e,t){const r=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return r[0]?(this.groups=r[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?ae.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let r="";const s=this.start(),i=this.end();return this.appendPos<s&&(r+=this.substring(this.appendPos,s)),this.appendPos=i,r+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),r}appendReplacementInternalJava(e){let t="",r=0;const s=e.length;let i=0;for(;i<s;){const o=e.codePointAt(i);if(o===k.CODES.get("\\")){if(r<i&&(t+=e.substring(r,i)),i++,i>=s)throw new Gt("character to be escaped is missing");r=i,i++;continue}if(o===k.CODES.get("$")){if(r<i&&(t+=e.substring(r,i)),i+1>=s)throw new Gt("Illegal group reference: group index is missing");const a=e.codePointAt(i+1);if(k.CODES.get("0")<=a&&a<=k.CODES.get("9")){let u=a-k.CODES.get("0"),l=i+2;for(;l<s;l++){const f=e.codePointAt(l);if(f<k.CODES.get("0")||f>k.CODES.get("9")||u*10+f-k.CODES.get("0")>this.patternGroupCount)break;u=u*10+f-k.CODES.get("0")}if(u>this.patternGroupCount)throw new Gt(`n > number of groups: ${u}`);const h=this.group(u);h!==null&&(t+=h),i=l,r=i}else if(a===k.CODES.get("{")){let u=i+2;for(;u<s&&e.codePointAt(u)!==k.CODES.get("}");)u++;if(u>=s)throw new Gt("named capture group is missing trailing '}'");const l=e.substring(i+2,u),h=this.group(l);h!==null&&(t+=h),i=u+1,r=i}else throw new Gt("Illegal group reference");continue}i++}return r<s&&(t+=e.substring(r,s)),t}appendReplacementInternalJs(e){let t="",r=0;const s=e.length;for(let i=0;i<s-1;i++)if(e.codePointAt(i)===k.CODES.get("$")){let o=e.codePointAt(i+1);if(k.CODES.get("$")===o){r<i&&(t+=e.substring(r,i)),t+="$",i++,r=i+1;continue}else if(k.CODES.get("&")===o){r<i&&(t+=e.substring(r,i));const a=this.group(0);a!==null?t+=a:t+="$&",i++,r=i+1;continue}else if(k.CODES.get("`")===o){r<i&&(t+=e.substring(r,i)),t+=this.substring(0,this.start(0)),i++,r=i+1;continue}else if(k.CODES.get("'")===o){r<i&&(t+=e.substring(r,i)),t+=this.substring(this.end(0),this.matcherInputLength),i++,r=i+1;continue}else if(k.CODES.get("1")<=o&&o<=k.CODES.get("9")){let a=o-k.CODES.get("0");for(r<i&&(t+=e.substring(r,i)),i+=2;i<s&&(o=e.codePointAt(i),!(o<k.CODES.get("0")||o>k.CODES.get("9")||a*10+o-k.CODES.get("0")>this.patternGroupCount));i++)a=a*10+o-k.CODES.get("0");if(a>this.patternGroupCount){t+=`$${a}`,r=i,i--;continue}const u=this.group(a);u!==null&&(t+=u),r=i,i--;continue}else if(o===k.CODES.get("<")){r<i&&(t+=e.substring(r,i)),i++;let a=i+1;for(;a<e.length&&e.codePointAt(a)!==k.CODES.get(">")&&e.codePointAt(a)!==k.CODES.get(" ");)a++;if(a===e.length||e.codePointAt(a)!==k.CODES.get(">")){t+=e.substring(i-1,a+1),r=a+1,i=a;continue}const u=e.substring(i+1,a);if(Object.prototype.hasOwnProperty.call(this.namedGroups,u)){const l=this.group(u);l!==null&&(t+=l)}else t+=`$<${u}>`;r=a+1,i=a;continue}}return r<s&&(t+=e.substring(r,s)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,r=!1){let s="";this.reset();const i=typeof e=="function",o=Object.keys(this.namedGroups).length>0;let a=null;if(i){if(this.groupCount()>=us.MAX_REPLACER_ARGS)throw new Gt("Too many capture groups to safely invoke replacer function");a=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(s+=i?this.appendReplacementFunc(e,o,a):this.appendReplacement(e,r),!!t););return s+=this.appendTail(),s}appendReplacementFunc(e,t,r){let s="";const i=this.start(),o=this.end();this.appendPos<i&&(s+=this.substring(this.appendPos,i)),this.appendPos=o;const a=this.buildReplacerArgs(i,t,r);return s+=String(e(...a)),s}buildReplacerArgs(e,t,r){const s=[this.group(0)],i=this.groupCount();for(let o=1;o<=i;o++){const a=this.start(o);a<0?s.push(void 0):s.push(this.substring(a,this.end(o)))}if(s.push(e),s.push(r),t){const o=this.getNamedGroups();for(const a in o)o[a]===null&&(o[a]=void 0);s.push(o)}return s}},J(us,"MAX_REPLACER_ARGS",65535),us),Pe,L=(Pe=class{static isRuneOp(e){return Pe.RUNE<=e&&e<=Pe.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let r of e)t+=ae.escapeRune(r);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=[],this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return this.arg&G.FOLD_CASE?ne.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let r=0,s=t>>1;for(;s>1;){const o=s>>1;r+=this.runes[r+o<<1]<=e?o:0,s-=o}r+=this.runes[r<<1]<=e?1:0;const i=r-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return this.arg&G.FOLD_CASE?ne.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let r=0,s=t>>1;for(;s>1;){const o=s>>1;r+=this.runes[r+o<<1]<=e?o:0,s-=o}r+=this.runes[r<<1]<=e?1:0;const i=r-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case Pe.ALT:return`alt -> ${this.out}, ${this.arg}`;case Pe.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case Pe.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case Pe.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case Pe.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case Pe.FAIL:return"fail";case Pe.NOP:return`nop -> ${this.out}`;case Pe.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case Pe.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case Pe.RUNE:return this.runes===null?"rune <null>":["rune ",Pe.escapeRunes(this.runes),this.arg&G.FOLD_CASE?"/i":""," -> ",this.out].join("");case Pe.RUNE1:return`rune1 ${Pe.escapeRunes(this.runes)} -> ${this.out}`;case Pe.RUNE_ANY:return`any -> ${this.out}`;case Pe.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},J(Pe,"ALT",1),J(Pe,"ALT_MATCH",2),J(Pe,"CAPTURE",3),J(Pe,"EMPTY_WIDTH",4),J(Pe,"FAIL",5),J(Pe,"MATCH",6),J(Pe,"NOP",7),J(Pe,"RUNE",8),J(Pe,"RUNE1",9),J(Pe,"RUNE_ANY",10),J(Pe,"RUNE_ANY_NOT_NL",11),J(Pe,"LB_WRITE",12),J(Pe,"LB_CHECK",13),Pe),Ud=class{constructor(n){this.sparse=new Int32Array(n),this.densePcs=new Int32Array(n),this.denseCaps=null,this.size=0,this.ncap=0}init(n){this.ncap=n;const e=this.densePcs.length*n;(!this.denseCaps||this.denseCaps.length<e)&&(this.denseCaps=new Int32Array(e))}contains(n){const e=this.sparse[n];return e<this.size&&this.densePcs[e]===n}isEmpty(){return this.size===0}add(n){const e=this.size++;return this.sparse[n]=e,this.densePcs[e]=n,e}clear(){this.size=0}toString(){let n="{";for(let e=0;e<this.size;e++)e!==0&&(n+=", "),n+=this.densePcs[e];return n+="}",n}},Uy=class ml{static fromRE2(e){const t=new ml;return t.prog=e.prog,t.re2=e,t.q0=new Ud(t.prog.numInst()),t.q1=new Ud(t.prog.numInst()),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}static fromMachine(e){return ml.fromRE2(e.re2)}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?ae.emptyInts():ae.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,r){const s=this.re2.cond;if(s===ae.EMPTY_ALL||(r===G.ANCHOR_START||r===G.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);let i=this.prog.numLb>0?0:t,o=t,a=this.q0,u=this.q1,l=e.step(i),h=l>>3,f=l&7,C=-1,I=0;l!==Lt.EOF()&&(l=e.step(i+f),C=l>>3,I=l&7);let v;for(i===0?v=ae.emptyOpContext(-1,h):v=e.context(i);;){if(a.isEmpty()){if(s&ae.EMPTY_BEGIN_TEXT&&i!==0||(r===G.ANCHOR_START||r===G.ANCHOR_BOTH)&&i!==0||this.matched)break;if(this.prog.numLb===0&&this.re2.prefix.length!==0&&C!==this.re2.prefixRune&&e.canCheckPrefix()){const Y=e.index(this.re2,i);if(Y<0)break;i+=Y,l=e.step(i),h=l>>3,f=l&7,l=e.step(i+f),C=l>>3,I=l&7,v=e.context(i)}}if(i===0&&this.prog.numLb>0)for(let Y=0;Y<this.prog.lbStarts.length;Y++)this.add(a,this.prog.lbStarts[Y],i,this.matchcap,0,v);!this.matched&&(i===0||r===G.UNANCHORED)&&i>=o&&(this.ncap>0&&(this.matchcap[0]=i),this.add(a,this.prog.start,i,this.matchcap,0,v));const V=i+f;if(v=e.context(V),this.step(a,u,i,V,h,v,r,i===e.endPos()),f===0||this.ncap===0&&this.matched)break;i+=f,h=C,f=I,h!==-1&&(l=e.step(i+f),C=l>>3,I=l&7);const H=a;a=u,u=H}return u.clear(),this.matched}matchSet(e,t,r){const s=this.re2.cond;if(s===ae.EMPTY_ALL)return[];if((r===G.ANCHOR_START||r===G.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,a=this.q0,u=this.q1,l=e.step(i),h=l>>3,f=l&7,C=-1,I=0;l!==Lt.EOF()&&(l=e.step(i+f),C=l>>3,I=l&7);let v=i===0?ae.emptyOpContext(-1,h):e.context(i);const V=new Set;for(;!(a.isEmpty()&&(s&ae.EMPTY_BEGIN_TEXT&&i!==0||(r===G.ANCHOR_START||r===G.ANCHOR_BOTH)&&i!==0));){if(i===0&&this.prog.numLb>0)for(let ie=0;ie<this.prog.lbStarts.length;ie++)this.add(a,this.prog.lbStarts[ie],i,this.matchcap,0,v);(i===0||r===G.UNANCHORED)&&i>=o&&this.add(a,this.prog.start,i,this.matchcap,0,v);const H=i+f;v=e.context(H);for(let ie=0;ie<a.size;ie++){const ye=a.densePcs[ie],Te=this.prog.inst[ye],Le=ie*this.ncap;let Ve=!1;switch(Te.op){case L.MATCH:if(r===G.ANCHOR_BOTH&&i!==e.endPos())break;V.add(Te.arg);break;case L.RUNE:Ve=Te.matchRune(h);break;case L.RUNE1:Ve=h===Te.runes[0];break;case L.RUNE_ANY:Ve=!0;break;case L.RUNE_ANY_NOT_NL:Ve=h!==10;break;default:continue}Ve&&this.add(u,Te.out,H,a.denseCaps,Le,v)}if(a.clear(),f===0)break;i+=f,h=C,f=I,h!==-1&&(l=e.step(i+f),C=l>>3,I=l&7);const Y=a;a=u,u=Y}return u.clear(),Array.from(V).sort((H,Y)=>H-Y)}step(e,t,r,s,i,o,a,u){const l=this.re2.longest;for(let h=0;h<e.size;h++){const f=e.densePcs[h],C=h*this.ncap;if(l&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[C])continue;const I=this.prog.inst[f];let v=!1;switch(I.op){case L.MATCH:if(a===G.ANCHOR_BOTH&&!u)break;if(this.ncap>0&&(!l||!this.matched||this.matchcap[1]<r)){e.denseCaps[C+1]=r;for(let V=0;V<this.ncap;V++)this.matchcap[V]=e.denseCaps[C+V]}l||(e.size=0),this.matched=!0;break;case L.RUNE:v=I.matchRune(i);break;case L.RUNE1:v=i===I.runes[0];break;case L.RUNE_ANY:v=!0;break;case L.RUNE_ANY_NOT_NL:v=i!==10;break;default:continue}v&&this.add(t,I.out,s,e.denseCaps,C,o)}e.clear()}add(e,t,r,s,i,o){for(;;){if(t===0||e.contains(t))return;const a=e.add(t),u=this.prog.inst[t];switch(u.op){case L.FAIL:return;case L.ALT:case L.ALT_MATCH:this.add(e,u.out,r,s,i,o),t=u.arg;continue;case L.EMPTY_WIDTH:if(!(u.arg&~o)){t=u.out;continue}return;case L.NOP:t=u.out;continue;case L.CAPTURE:if(u.arg<this.ncap){const l=s[i+u.arg];s[i+u.arg]=r,this.add(e,u.out,r,s,i,o),s[i+u.arg]=l;return}else{t=u.out;continue}case L.LB_WRITE:this.lbTable[Math.abs(u.arg)]=r,t=u.out;continue;case L.LB_CHECK:if(u.arg>0){if(this.lbTable[u.arg]===r){t=u.out;continue}}else if(this.lbTable[-u.arg]!==r){t=u.out;continue}return;case L.MATCH:case L.RUNE:case L.RUNE1:case L.RUNE_ANY:case L.RUNE_ANY_NOT_NL:if(this.ncap>0){const l=a*this.ncap;for(let h=0;h<this.ncap;h++)e.denseCaps[l+h]=s[i+h]}return;default:throw new Xi("unhandled")}}}};const Gd=n=>{let e=-2128831035;for(let t=0;t<n.length;t++)e^=n[t],e=Math.imul(e,16777619);return e},Gy=(n,e)=>{if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0};var Hy=class{constructor(n,e,t=[]){this.nfaStates=n,this.isMatch=e,this.matchIDs=t,this.nextLatin1=new Array(ne.MAX_LATIN1+1).fill(null),this.nextLatin1Anchored=new Array(ne.MAX_LATIN1+1).fill(null),this.transKeys=[],this.transVals=[],this.lastSeen=0}},jn,qy=(jn=class{constructor(e,t=8388608){this.prog=e,this.stateCache=new Map,this.stateCount=0,this.startState=null,this.stateLimit=Math.max(1,Math.floor(t/jn.STATE_MEMORY_ESTIMATE)),this.cacheClears=0,this.failed=!1,this.clock=0}computeClosure(e){const t=new Set,r=[...e];let s=!1;const i=[];for(;r.length>0;){const a=r.pop();if(t.has(a))continue;t.add(a);const u=this.prog.getInst(a);switch(u.op){case L.MATCH:s=!0,i.includes(u.arg)||i.push(u.arg);break;case L.ALT:case L.ALT_MATCH:r.push(u.out),r.push(u.arg);break;case L.NOP:case L.CAPTURE:r.push(u.out);break;case L.EMPTY_WIDTH:case L.LB_WRITE:case L.LB_CHECK:return null}}const o=Int32Array.from(t).sort();return i.sort((a,u)=>a-u),{pcs:o,isMatch:s,matchIDs:i}}getState(e){const t=this.computeClosure(e);if(!t)return null;const r=t.pcs,s=Gd(r);let i=this.stateCache.get(s);if(i)for(let a=0;a<i.length;a++){const u=i[a];if(Gy(u.nfaStates,r))return u.lastSeen=++this.clock,u}else i=[],this.stateCache.set(s,i);if(this.failed)return null;if(this.stateCount>=this.stateLimit){if(this.cacheClears++,this.cacheClears>=jn.MAX_CACHE_CLEARS)return this.failed=!0,this.stateCache.clear(),this.stateCount=0,this.startState=null,null;this.evictCache(),i=this.stateCache.get(s),i||(i=[],this.stateCache.set(s,i))}const o=new Hy(r,t.isMatch,t.matchIDs);return o.lastSeen=++this.clock,i.push(o),this.stateCount++,o}evictCache(){const e=[];for(const o of this.stateCache.values())for(let a=0;a<o.length;a++)e.push(o[a]);e.sort((o,a)=>o.lastSeen-a.lastSeen);const t=Math.max(1,Math.floor(this.stateLimit/2)),r=e.length-t,s=e.slice(r),i=new Set(s);this.stateCache.clear(),this.stateCount=0;for(let o=0;o<s.length;o++){const a=s[o];a.nextLatin1.fill(null),a.nextLatin1Anchored.fill(null),a.transKeys.length=0,a.transVals.length=0;const u=Gd(a.nfaStates);let l=this.stateCache.get(u);l||(l=[],this.stateCache.set(u,l)),l.push(a),this.stateCount++}this.startState&&!i.has(this.startState)&&(this.startState=null)}step(e,t,r){if(t<=ne.MAX_LATIN1)if(r===G.UNANCHORED){const o=e.nextLatin1[t];if(o!==null)return o}else{const o=e.nextLatin1Anchored[t];if(o!==null)return o}else{const o=t+(r===G.UNANCHORED?0:ne.MAX_RUNE+1),a=e.transKeys,u=a.length;for(let l=0;l<u;l++)if(a[l]===o)return e.transVals[l]}const s=[];for(let o=0;o<e.nfaStates.length;o++){const a=e.nfaStates[o],u=this.prog.getInst(a);L.isRuneOp(u.op)&&u.matchRune(t)&&s.push(u.out)}r===G.UNANCHORED&&s.push(this.prog.start);const i=this.getState(s);if(t<=ne.MAX_LATIN1)r===G.UNANCHORED?e.nextLatin1[t]=i:e.nextLatin1Anchored[t]=i;else{const o=t+(r===G.UNANCHORED?0:ne.MAX_RUNE+1);e.transKeys.push(o),e.transVals.push(i)}return i}match(e,t,r){if((r===G.ANCHOR_START||r===G.ANCHOR_BOTH)&&t!==0)return!1;if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;if(i.isMatch)if(r===G.ANCHOR_BOTH){if(t===s)return!0}else return!0;let o=t;for(;o<s;){const a=e.step(o),u=a>>3,l=a&7;if(l===0)break;if(i=r===G.UNANCHORED&&u<=ne.MAX_LATIN1&&i.nextLatin1[u]||this.step(i,u,r),i===null)return null;if(i.lastSeen=++this.clock,i.isMatch)if(r===G.ANCHOR_BOTH){if(o+l===s)return!0}else return!0;if(i.nfaStates.length===0&&r!==G.UNANCHORED)return!1;o+=l}return!1}matchSet(e,t,r){if((r===G.ANCHOR_START||r===G.ANCHOR_BOTH)&&t!==0)return[];if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;const o=new Set,a=(l,h)=>{l.isMatch&&(r===G.ANCHOR_BOTH?h===s&&l.matchIDs.forEach(f=>o.add(f)):l.matchIDs.forEach(f=>o.add(f)))};a(i,t);let u=t;for(;u<s;){const l=e.step(u),h=l>>3,f=l&7;if(f===0)break;if(i=r===G.UNANCHORED&&h<=ne.MAX_LATIN1&&i.nextLatin1[h]||this.step(i,h,r),i===null)return null;if(i.lastSeen=++this.clock,u+=f,a(i,u),i.nfaStates.length===0&&r!==G.UNANCHORED)break}return Array.from(o).sort((l,h)=>l-h)}},J(jn,"MAX_CACHE_CLEARS",5),J(jn,"STATE_MEMORY_ESTIMATE",838),jn);const Jy=32,jy=500,Ku=256,Ky=256*1024;var $y=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(Ku),this.jobArg=new Uint8Array(Ku),this.jobPos=new Int32Array(Ku),this.jobLen=0,this.visited=new Uint32Array(0)}reset(n,e,t){this.end=e,this.jobLen=0,this.ncap=t;const r=n.numInst()*(e+1)+Jy-1>>>5;this.visited.length<r?this.visited=new Uint32Array(r):this.visited.fill(0,0,r),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(n,e){const t=n*(this.end+1)+e,r=t>>>5,s=1<<(t&31);return this.visited[r]&s?!1:(this.visited[r]|=s,!0)}push(n,e,t,r){if(n.prog.getInst(e).op!==L.FAIL&&(r||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const s=this.jobPc.length*2,i=new Int32Array(s);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(s);o.set(this.jobArg),this.jobArg=o;const a=new Int32Array(s);a.set(this.jobPos),this.jobPos=a}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=r?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(n,e,t,r,s){const i=n.longest;for(this.push(n,t,r,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],a=this.jobArg[this.jobLen]===1,u=this.jobPos[this.jobLen],l=!0;for(;!(!l&&!this.shouldVisit(o,u));){l=!1;const h=n.prog.getInst(o);switch(h.op){case L.FAIL:throw new Xi("unexpected InstFail");case L.ALT:if(a){a=!1,o=h.arg;continue}else{this.push(n,o,u,!0),o=h.out;continue}case L.ALT_MATCH:{const f=n.prog.getInst(h.out);if(L.isRuneOp(f.op)){this.push(n,h.arg,u,!1),o=h.arg,u=this.end;continue}this.push(n,h.out,this.end,!1),o=h.out;continue}case L.RUNE:{const f=e.step(u);if(f===Lt.EOF()||!h.matchRune(f>>3))break;u+=f&7,o=h.out;continue}case L.RUNE1:{const f=e.step(u);if(f===Lt.EOF()||f>>3!==h.runes[0])break;u+=f&7,o=h.out;continue}case L.RUNE_ANY_NOT_NL:{const f=e.step(u);if(f===Lt.EOF()||f>>3===10)break;u+=f&7,o=h.out;continue}case L.RUNE_ANY:{const f=e.step(u);if(f===Lt.EOF())break;u+=f&7,o=h.out;continue}case L.CAPTURE:if(a){this.cap[h.arg]=u;break}else{h.arg<this.ncap&&(this.push(n,o,this.cap[h.arg],!0),this.cap[h.arg]=u),o=h.out;continue}case L.EMPTY_WIDTH:{const f=e.context(u);if(h.arg&~f)break;o=h.out;continue}case L.NOP:o=h.out;continue;case L.MATCH:{if(s===G.ANCHOR_BOTH&&u!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=u);const f=this.matchcap[1];if((f===-1||i&&u>0&&u>f)&&this.matchcap.set(this.cap),!i||u===this.end)return!0;break}case L.LB_WRITE:case L.LB_CHECK:throw new Xi("Backtracker cannot evaluate Lookbehind instructions");default:throw new Xi("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const Ta=[];var ya=class hg{static shouldBacktrack(e){return e.numInst()<=jy}static maxBitStateLen(e){return hg.shouldBacktrack(e)?Math.floor(Ky/e.numInst()):0}static execute(e,t,r,s,i){const o=e.cond;if(o===ae.EMPTY_ALL||(s===G.ANCHOR_START||s===G.ANCHOR_BOTH)&&r!==0||o&ae.EMPTY_BEGIN_TEXT&&r!==0)return null;const a=Ta.length>0?Ta.pop():new $y,u=t.endPos();a.reset(e.prog,u,i);let l=!1;if(o&ae.EMPTY_BEGIN_TEXT||s===G.ANCHOR_START||s===G.ANCHOR_BOTH)a.ncap>0&&(a.cap[0]=r),a.tryBacktrack(e,t,e.prog.start,r,s)&&(l=!0);else{let f=-1;for(;r<=u&&f!==0;r+=f){if(e.prefix.length>0){const I=t.index(e,r);if(I<0)break;r+=I}if(a.ncap>0&&(a.cap[0]=r),a.tryBacktrack(e,t,e.prog.start,r,s)){l=!0;break}const C=t.step(r);f=C===Lt.EOF()?0:C&7}}if(!l)return Ta.push(a),null;const h=i===0?[]:ae.toArray(a.matchcap.subarray(0,i));return Ta.push(a),h}},Hd=class{constructor(n){this.sparse=new Uint32Array(n),this.dense=new Uint32Array(n),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(n){return n<this.sparse.length&&this.sparse[n]<this.size&&this.dense[this.sparse[n]]===n}insert(n){this.contains(n)||this.insertNew(n)}insertNew(n){n>=this.sparse.length||(this.sparse[n]=this.size,this.dense[this.size]=n,this.size++)}};const zy=(n,e,t,r)=>{const s=n.length,i=e.length;let o=0,a=0;const u=[],l=[];let h=!0,f=-1;const C=I=>{const v=I?n:e,V=I?o:a,H=I?t:r;return f>0&&v[V]<=u[f]?!1:(u.push(v[V],v[V+1]),I?o+=2:a+=2,f+=2,l.push(H),!0)};for(;o<s||a<i;)if(a>=i?h=C(!0):o>=s||e[a]<n[o]?h=C(!1):h=C(!0),!h)return null;return{merged:u,next:l}};var Wy=class{constructor(n){this.start=n.start,this.numCap=n.numCap,this.inst=new Array(n.inst.length);for(let e=0;e<n.inst.length;e++){const t=n.inst[e],r=new L(t.op);r.out=t.out,r.arg=t.arg,r.runes=t.runes?t.runes.slice():[],r.next=null,this.inst[e]=r}}};const Qy=n=>{const e=new Wy(n);for(let t=0;t<e.inst.length;t++){const r=e.inst[t];if(r.op!==L.ALT&&r.op!==L.ALT_MATCH)continue;let s="out",i="arg",o=e.inst[r[i]];if(o.op!==L.ALT&&o.op!==L.ALT_MATCH&&(s="arg",i="out",o=e.inst[r[i]],o.op!==L.ALT&&o.op!==L.ALT_MATCH))continue;const a=e.inst[r[s]];if(a.op===L.ALT||a.op===L.ALT_MATCH)continue;let u="out",l="arg",h=!1;o.out===t?h=!0:o.arg===t&&(h=!0,u="arg",l="out"),h&&(o[u]=r[s]),r[s]===o[u]&&(r[i]=o[l])}return e},Yy=n=>{if(n.inst.length>=1e3)return null;const e=new Hd(n.inst.length),t=new Hd(n.inst.length),r=new Array(n.inst.length),s=new Array(n.inst.length).fill(!1),i=o=>{let a=!0;const u=n.inst[o];if(t.contains(o))return!0;switch(t.insert(o),u.op){case L.ALT:case L.ALT_MATCH:{a=i(u.out)&&i(u.arg);let l=s[u.out],h=s[u.arg];if(l&&h)return!1;if(h){const v=u.out;u.out=u.arg,u.arg=v;const V=l;l=h,h=V}l&&(s[o]=!0,u.op=L.ALT_MATCH);const f=r[u.out]||[],C=r[u.arg]||[],I=zy(f,C,u.out,u.arg);if(!I)return!1;r[o]=I.merged,u.next=new Uint32Array(I.next);break}case L.CAPTURE:case L.EMPTY_WIDTH:case L.NOP:a=i(u.out),s[o]=s[u.out],r[o]=r[u.out]?r[u.out].slice():[],u.next=new Uint32Array(Math.floor(r[o].length/2)+1).fill(u.out);break;case L.MATCH:case L.FAIL:s[o]=u.op===L.MATCH;break;case L.RUNE:{if(s[o]=!1,u.next&&u.next.length>0)break;if(e.insert(u.out),!u.runes||u.runes.length===0){r[o]=[],u.next=new Uint32Array([u.out]);break}let l=[];if(u.runes.length===1&&u.arg&G.FOLD_CASE){const h=u.runes[0];l.push(h,h);for(let f=ne.simpleFold(h);f!==h;f=ne.simpleFold(f))l.push(f,f);l.sort((f,C)=>f-C)}else for(let h=0;h<u.runes.length;h++)l.push(u.runes[h]);r[o]=l,u.next=new Uint32Array(Math.floor(l.length/2)+1).fill(u.out),u.op=L.RUNE;break}case L.RUNE1:{if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out);let l=[];if(u.arg&G.FOLD_CASE){const h=u.runes[0];l.push(h,h);for(let f=ne.simpleFold(h);f!==h;f=ne.simpleFold(f))l.push(f,f);l.sort((f,C)=>f-C)}else l.push(u.runes[0],u.runes[0]);r[o]=l,u.next=new Uint32Array(Math.floor(l.length/2)+1).fill(u.out),u.op=L.RUNE;break}case L.RUNE_ANY:if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out),r[o]=[0,ne.MAX_RUNE],u.next=new Uint32Array([u.out]);break;case L.RUNE_ANY_NOT_NL:if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out),r[o]=[0,9,11,ne.MAX_RUNE],u.next=new Uint32Array(Math.floor(r[o].length/2)+1).fill(u.out);break}return a};for(e.clear(),e.insert(n.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<n.inst.length;o++)r[o]&&(n.inst[o].runes=r[o]);return n},Xy=(n,e)=>{for(let t=0;t<e.inst.length;t++){const r=e.inst[t];switch(r.op){case L.ALT:case L.ALT_MATCH:case L.RUNE:break;case L.CAPTURE:case L.EMPTY_WIDTH:case L.NOP:case L.MATCH:case L.FAIL:n.inst[t].next=null;break;case L.RUNE1:case L.RUNE_ANY:case L.RUNE_ANY_NOT_NL:n.inst[t].next=null,n.inst[t].op=r.op,n.inst[t].runes=r.runes?r.runes.slice():[];break}}};var qd=class dg{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==L.EMPTY_WIDTH||!(t.arg&ae.EMPTY_BEGIN_TEXT))return null;let r=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===L.ALT||e.inst[i].op===L.ALT_MATCH){r=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],a=e.inst[o.out].op;switch(o.op){case L.ALT:case L.ALT_MATCH:if(a===L.MATCH||e.inst[o.arg].op===L.MATCH)return null;break;case L.EMPTY_WIDTH:if(a===L.MATCH){if((o.arg&ae.EMPTY_END_TEXT)===ae.EMPTY_END_TEXT)continue;return null}break;default:if(a===L.MATCH&&r)return null;break}}let s=Qy(e);return s=Yy(s),s!==null&&Xy(s,e),s}static next(e,t){const r=e.matchRunePos(t);return r>=0?e.next[r]:e.op===L.ALT_MATCH?e.out:0}static execute(e,t,r,s,i){const o=e.onepass;if(!o)return null;const a=new Int32Array(i).fill(-1);let u=!1,l=t.step(r),h=l>>3,f=l&7,C=Lt.EOF(),I=-1,v=0;l!==Lt.EOF()&&(C=t.step(r+f),C!==Lt.EOF()&&(I=C>>3,v=C&7));let V=r===0?ae.emptyOpContext(-1,h):t.context(r),H=o.start,Y;for(;;){switch(Y=o.inst[H],H=Y.out,Y.op){case L.MATCH:return s===G.ANCHOR_BOTH&&r!==t.endPos()?null:(u=!0,a.length>0&&(a[0]=0,a[1]=r),i===0?[]:ae.toArray(a));case L.RUNE:if(!Y.matchRune(h))return null;break;case L.RUNE1:if(h!==Y.runes[0])return null;break;case L.RUNE_ANY:break;case L.RUNE_ANY_NOT_NL:if(h===10)return null;break;case L.ALT:case L.ALT_MATCH:H=dg.next(Y,h);continue;case L.FAIL:return null;case L.NOP:continue;case L.EMPTY_WIDTH:if(Y.arg&~V)return null;continue;case L.CAPTURE:Y.arg<a.length&&(a[Y.arg]=r);continue;default:throw new Xi("bad inst")}if(f===0)break;V=ae.emptyOpContext(h,I),r+=f,h=I,f=v,h!==-1&&(C=t.step(r+f),C!==Lt.EOF()?(I=C>>3,v=C&7):(I=-1,v=0))}return u?i===0?[]:ae.toArray(a):null}},ue,y=(ue=class{static isPseudoOp(e){return e>=ue.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===k.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new ue(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=ue.emptySubs(),this.runes=[],this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=ue.emptySubs(),this.runes=[],this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case ue.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case ue.Op.EMPTY_MATCH:e+="(?:)";break;case ue.Op.STAR:case ue.Op.PLUS:case ue.Op.QUEST:case ue.Op.REPEAT:{const t=this.subs[0];switch(t.op>ue.Op.CAPTURE||t.op===ue.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case ue.Op.STAR:e+="*";break;case ue.Op.PLUS:e+="+";break;case ue.Op.QUEST:e+="?";break;case ue.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}this.flags&G.NON_GREEDY&&(e+="?");break}case ue.Op.CONCAT:for(let t of this.subs)t.op===ue.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case ue.Op.ALTERNATE:{let t="";for(let r of this.subs)e+=t,t="|",e+=r.appendTo();break}case ue.Op.LITERAL:this.flags&G.FOLD_CASE&&(e+="(?i:");for(let t of this.runes)e+=ae.escapeRune(t);this.flags&G.FOLD_CASE&&(e+=")");break;case ue.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case ue.Op.ANY_CHAR:e+="(?s:.)";break;case ue.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case ue.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case ue.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==ue.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case ue.Op.BEGIN_TEXT:e+="\\A";break;case ue.Op.END_TEXT:this.flags&G.WAS_DOLLAR?e+="(?-m:$)":e+="\\z";break;case ue.Op.BEGIN_LINE:e+="^";break;case ue.Op.END_LINE:e+="$";break;case ue.Op.WORD_BOUNDARY:e+="\\b";break;case ue.Op.NO_WORD_BOUNDARY:e+="\\B";break;case ue.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===ne.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const r=this.runes[t]+1,s=this.runes[t+1]-1;e+=ue.quoteIfHyphen(r),e+=ae.escapeRune(r),r!==s&&(e+="-",e+=ue.quoteIfHyphen(s),e+=ae.escapeRune(s))}}else for(let t=0;t<this.runes.length;t+=2){const r=this.runes[t],s=this.runes[t+1];e+=ue.quoteIfHyphen(r),e+=ae.escapeRune(r),r!==s&&(e+="-",e+=ue.quoteIfHyphen(s),e+=ae.escapeRune(s))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===ue.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const r=t.maxCap();e<r&&(e=r)}return e}equals(e){if(!(e!==null&&e instanceof ue)||this.op!==e.op)return!1;switch(this.op){case ue.Op.END_TEXT:if((this.flags&G.WAS_DOLLAR)!==(e.flags&G.WAS_DOLLAR))return!1;break;case ue.Op.LITERAL:case ue.Op.CHAR_CLASS:if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case ue.Op.ALTERNATE:case ue.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case ue.Op.STAR:case ue.Op.PLUS:case ue.Op.QUEST:if((this.flags&G.NON_GREEDY)!==(e.flags&G.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case ue.Op.REPEAT:if((this.flags&G.NON_GREEDY)!==(e.flags&G.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case ue.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case ue.Op.PLB:case ue.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1;break}return!0}},J(ue,"Op",Bg(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"])),ue),Jd=class{constructor(n){this.next=[Object.create(null)],this.fail=[0],this.match=[!1];for(const t of n){let r=0;for(let s=0;s<t.length;s++){const i=t[s];i in this.next[r]||(this.next.push(Object.create(null)),this.fail.push(0),this.match.push(!1),this.next[r][i]=this.next.length-1),r=this.next[r][i]}this.match[r]=!0}const e=[];for(const t in this.next[0])if(Object.prototype.hasOwnProperty.call(this.next[0],t)){const r=this.next[0][t];this.fail[r]=0,e.push(r)}for(;e.length>0;){const t=e.shift();for(const r in this.next[t])if(Object.prototype.hasOwnProperty.call(this.next[t],r)){const s=this.next[t][r];let i=this.fail[t];for(;i!==0&&!(r in this.next[i]);)i=this.fail[i];r in this.next[i]?this.fail[s]=this.next[i][r]:this.fail[s]=0,this.match[s]=this.match[s]||this.match[this.fail[s]],e.push(s)}}}searchUTF16(n,e,t){let r=0;for(let s=e;s<t;s++){const i=n.charCodeAt(s);for(;r!==0&&!(i in this.next[r]);)r=this.fail[r];if(i in this.next[r]&&(r=this.next[r][i]),this.match[r])return!0}return!1}searchUTF8(n,e,t){let r=0;for(let s=e;s<t;s++){const i=n[s];for(;r!==0&&!(i in this.next[r]);)r=this.fail[r];if(i in this.next[r]&&(r=this.next[r][i]),this.match[r])return!0}return!1}},Pn,be=(Pn=class{constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.ac16=null,this.ac8=null}eval(e,t){switch(this.type){case Pn.Type.NONE:return!0;case Pn.Type.EXACT:return e.hasString(this,t);case Pn.Type.AND:for(let r=0;r<this.subs.length;r++)if(!this.subs[r].eval(e,t))return!1;return!0;case Pn.Type.OR:if(this.ac16&&this.ac8)return e.hasAnyString(this,t);for(let r=0;r<this.subs.length;r++)if(this.subs[r].eval(e,t))return!0;return!1;default:return!0}}},J(Pn,"Type",{NONE:0,EXACT:1,AND:2,OR:3}),Pn),Zy=class xn{static build(e){const t=xn.fromRegexp(e);return xn.simplify(t)}static fromRegexp(e){if(!e)return new be(be.Type.NONE);switch(e.op){case y.Op.PLB:case y.Op.NLB:case y.Op.NO_MATCH:case y.Op.EMPTY_MATCH:case y.Op.BEGIN_LINE:case y.Op.END_LINE:case y.Op.BEGIN_TEXT:case y.Op.END_TEXT:case y.Op.WORD_BOUNDARY:case y.Op.NO_WORD_BOUNDARY:case y.Op.CHAR_CLASS:case y.Op.ANY_CHAR_NOT_NL:case y.Op.ANY_CHAR:return new be(be.Type.NONE);case y.Op.LITERAL:{if(e.runes.length===0||e.flags&G.FOLD_CASE)return new be(be.Type.NONE);const t=new be(be.Type.EXACT);let r="";for(let s=0;s<e.runes.length;s++)r+=String.fromCodePoint(e.runes[s]);return t.str=r,t.bytes=ae.stringToUtf8ByteArray(t.str),t}case y.Op.CAPTURE:case y.Op.PLUS:return xn.fromRegexp(e.subs[0]);case y.Op.REPEAT:return e.min>=1?xn.fromRegexp(e.subs[0]):new be(be.Type.NONE);case y.Op.CONCAT:{const t=new be(be.Type.AND);for(const r of e.subs)t.subs.push(xn.fromRegexp(r));return t}case y.Op.ALTERNATE:{const t=new be(be.Type.OR);for(const r of e.subs)t.subs.push(xn.fromRegexp(r));return t}default:return new be(be.Type.NONE)}}static simplify(e){if(e.type===be.Type.EXACT||e.type===be.Type.NONE)return e;if(e.type===be.Type.AND){const t=[];for(const r of e.subs){const s=xn.simplify(r);if(s.type!==be.Type.NONE)if(s.type===be.Type.AND)for(let i=0;i<s.subs.length;i++)t.push(s.subs[i]);else t.push(s)}return t.length===0?new be(be.Type.NONE):t.length===1?t[0]:(e.subs=t,e)}if(e.type===be.Type.OR){const t=[];for(const o of e.subs){const a=xn.simplify(o);if(a.type===be.Type.NONE)return new be(be.Type.NONE);if(a.type===be.Type.OR)for(let u=0;u<a.subs.length;u++)t.push(a.subs[u]);else t.push(a)}if(t.length===0)return new be(be.Type.NONE);if(t.length===1)return t[0];const r=new Set,s=[];for(const o of t)o.type===be.Type.EXACT?r.has(o.str)||(r.add(o.str),s.push(o)):s.push(o);e.subs=s;let i=!0;for(const o of s)if(o.type!==be.Type.EXACT){i=!1;break}return i&&s.length>1&&(e.ac16=new Jd(s.map(o=>{const a=[];for(let u=0;u<o.str.length;u++)a.push(o.str.charCodeAt(u));return a})),e.ac8=new Jd(s.map(o=>o.bytes))),e}return e}},Bn=class{constructor(n=0,e=0){this.head=n,this.tail=e}},eA=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0}getInst(n){return this.inst[n]}numInst(){return this.inst.length}addInst(n){this.inst.push(new L(n))}skipNop(n){let e=this.inst[n];for(;e.op===L.NOP||e.op===L.CAPTURE;)e=this.inst[n],n=e.out;return e}prefix(){let n="",e=this.skipNop(this.start);if(!L.isRuneOp(e.op)||e.runes.length!==1)return[e.op===L.MATCH,n];for(;L.isRuneOp(e.op)&&e.runes.length===1&&!(e.arg&G.FOLD_CASE);)n+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===L.MATCH,n]}startCond(){let n=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case L.EMPTY_WIDTH:n|=t.arg;break;case L.FAIL:return-1;case L.CAPTURE:case L.NOP:break;default:break e}e=t.out}return n}patch(n,e){let t=n.head;for(;t!==0;){const r=this.inst[t>>1];t&1?(t=r.arg,r.arg=e):(t=r.out,r.out=e)}}append(n,e){if(n.head===0)return e;if(e.head===0)return n;const t=this.inst[n.tail>>1];return n.tail&1?t.arg=e.head:t.out=e.head,new Bn(n.head,e.tail)}toString(){let n="";for(let e=0;e<this.inst.length;e++){const t=n.length;n+=e,e===this.start&&(n+="*"),n+="        ".substring(n.length-t),n+=this.inst[e],n+=`
`}return n}},Aa=class{constructor(n=0,e=new Bn,t=!1){this.i=n,this.out=e,this.nullable=t}},tA=class Ns{static ANY_RUNE_NOT_NL(){return[0,k.CODES.get(`
`)-1,k.CODES.get(`
`)+1,ne.MAX_RUNE]}static ANY_RUNE(){return[0,ne.MAX_RUNE]}static compileRegexp(e){const t=new Ns,r=t.compile(e);return t.prog.patch(r.out,t.newInst(L.MATCH).i),t.prog.start=r.i,t.prog}static compileSet(e){const t=new Ns;if(e.length===0)return t.prog.start=t.newInst(L.FAIL).i,t.prog;let r=[];for(let i=0;i<e.length;i++){const o=t.compile(e[i]),a=t.newInst(L.MATCH);t.prog.getInst(a.i).arg=i,t.prog.patch(o.out,a.i),r.push(o.i)}let s=r[0];for(let i=1;i<r.length;i++){const o=t.newInst(L.ALT),a=t.prog.getInst(o.i);a.out=s,a.arg=r[i],s=o.i}return t.prog.start=s,t.prog}constructor(){this.prog=new eA,this.newInst(L.FAIL)}newInst(e){return this.prog.addInst(e),new Aa(this.prog.numInst()-1,new Bn,!0)}nop(){const e=this.newInst(L.NOP);return e.out=new Bn(e.i<<1,e.i<<1),e}fail(){return new Aa}cap(e){const t=this.newInst(L.CAPTURE);return t.out=new Bn(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new Aa(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const r=this.newInst(L.ALT),s=this.prog.getInst(r.i);return s.out=e.i,s.arg=t.i,r.out=this.prog.append(e.out,t.out),r.nullable=e.nullable||t.nullable,r}loop(e,t){const r=this.newInst(L.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=new Bn(r.i<<1,r.i<<1)):(s.out=e.i,r.out=new Bn(r.i<<1|1,r.i<<1|1)),this.prog.patch(e.out,r.i),r}quest(e,t){const r=this.newInst(L.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=new Bn(r.i<<1,r.i<<1)):(s.out=e.i,r.out=new Bn(r.i<<1|1,r.i<<1|1)),r.out=this.prog.append(r.out,e.out),r}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new Aa(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(L.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new Bn(t.i<<1,t.i<<1),t}rune(e,t){const r=this.newInst(L.RUNE);r.nullable=!1;const s=this.prog.getInst(r.i);return s.runes=e,t&=G.FOLD_CASE,(e.length!==1||ne.simpleFold(e[0])===e[0])&&(t&=-2),s.arg=t,r.out=new Bn(r.i<<1,r.i<<1),!(t&G.FOLD_CASE)&&e.length===1||e.length===2&&e[0]===e[1]?s.op=L.RUNE1:e.length===2&&e[0]===0&&e[1]===ne.MAX_RUNE?s.op=L.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===k.CODES.get(`
`)-1&&e[2]===k.CODES.get(`
`)+1&&e[3]===ne.MAX_RUNE&&(s.op=L.RUNE_ANY_NOT_NL),r}lookBehind(e,t){const r=this.newInst(L.LB_WRITE);this.prog.getInst(r.i).arg=t;const s=this.rune(Ns.ANY_RUNE(),0),i=this.star(s,!0),o=this.cat(i,e);this.prog.patch(o.out,r.i);const a=this.newInst(L.LB_CHECK);return this.prog.getInst(a.i).arg=t,this.prog.lbStarts.push(o.i),Math.abs(t)>this.prog.numLb&&(this.prog.numLb=Math.abs(t)),a.out=new Bn(a.i<<1,a.i<<1),a}compile(e){switch(e.op){case y.Op.NO_MATCH:return this.fail();case y.Op.EMPTY_MATCH:return this.nop();case y.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let r of e.runes){const s=this.rune([r],e.flags);t=t===null?s:this.cat(t,s)}return t}case y.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case y.Op.ANY_CHAR_NOT_NL:return this.rune(Ns.ANY_RUNE_NOT_NL(),0);case y.Op.ANY_CHAR:return this.rune(Ns.ANY_RUNE(),0);case y.Op.BEGIN_LINE:return this.empty(ae.EMPTY_BEGIN_LINE);case y.Op.END_LINE:return this.empty(ae.EMPTY_END_LINE);case y.Op.BEGIN_TEXT:return this.empty(ae.EMPTY_BEGIN_TEXT);case y.Op.END_TEXT:return this.empty(ae.EMPTY_END_TEXT);case y.Op.WORD_BOUNDARY:return this.empty(ae.EMPTY_WORD_BOUNDARY);case y.Op.NO_WORD_BOUNDARY:return this.empty(ae.EMPTY_NO_WORD_BOUNDARY);case y.Op.PLB:case y.Op.NLB:return this.lookBehind(this.compile(e.subs[0]),e.lb);case y.Op.CAPTURE:{const t=this.cap(e.cap<<1),r=this.compile(e.subs[0]),s=this.cap(e.cap<<1|1);return this.cat(this.cat(t,r),s)}case y.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&G.NON_GREEDY)!==0);case y.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&G.NON_GREEDY)!==0);case y.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&G.NON_GREEDY)!==0);case y.Op.CONCAT:if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.cat(t,s)}return t}case y.Op.ALTERNATE:if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.alt(t,s)}return t}default:throw new Vy("regexp: unhandled case in compile")}}},nA=class nn{static simplify(e){if(e===null)return null;switch(e.op){case y.Op.PLB:case y.Op.NLB:case y.Op.CAPTURE:{const t=nn.simplify(e.subs[0]);if(t!==e.subs[0]){const r=y.fromRegexp(e);return r.runes=[],r.subs=[t],r}return e}case y.Op.CONCAT:case y.Op.ALTERNATE:{const t=[];let r=!1;for(let s=0;s<e.subs.length;s++){const i=e.subs[s],o=nn.simplify(i);if(o!==i&&(r=!0),e.op===y.Op.CONCAT){if(o.op===y.Op.NO_MATCH)return new y(y.Op.NO_MATCH);if(o.op===y.Op.EMPTY_MATCH){r=!0;continue}if(o.op===y.Op.CONCAT){r=!0;for(let a=0;a<o.subs.length;a++)t.push(o.subs[a]);continue}}else if(e.op===y.Op.ALTERNATE){if(o.op===y.Op.NO_MATCH){r=!0;continue}if(o.op===y.Op.ALTERNATE){r=!0;for(let a=0;a<o.subs.length;a++)t.push(o.subs[a]);continue}}t.push(o)}if(r){if(t.length===0)return new y(e.op===y.Op.CONCAT?y.Op.EMPTY_MATCH:y.Op.NO_MATCH);if(t.length===1)return t[0];const s=y.fromRegexp(e);return s.runes=[],s.subs=t,s}return e}case y.Op.CHAR_CLASS:return e.runes===null?e:e.runes.length===0?new y(y.Op.NO_MATCH):e.runes.length===2&&e.runes[0]===0&&e.runes[1]===ne.MAX_RUNE?new y(y.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===k.CODES.get(`
`)-1&&e.runes[2]===k.CODES.get(`
`)+1&&e.runes[3]===ne.MAX_RUNE?new y(y.Op.ANY_CHAR_NOT_NL):e;case y.Op.STAR:case y.Op.PLUS:case y.Op.QUEST:{const t=nn.simplify(e.subs[0]);return nn.simplify1(e.op,e.flags,t,e)}case y.Op.REPEAT:{if(e.min===0&&e.max===0)return new y(y.Op.EMPTY_MATCH);const t=nn.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return nn.simplify1(y.Op.STAR,e.flags,t,null);if(e.min===1)return nn.simplify1(y.Op.PLUS,e.flags,t,null);const s=new y(y.Op.CONCAT),i=[];for(let o=0;o<e.min-1;o++)i.push(t);return i.push(nn.simplify1(y.Op.PLUS,e.flags,t,null)),s.subs=i.slice(0),nn.simplify(s)}if(e.min===1&&e.max===1)return t;let r=null;if(e.min>0){r=[];for(let s=0;s<e.min;s++)r.push(t)}if(e.max>e.min){let s=nn.simplify1(y.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const o=new y(y.Op.CONCAT);o.subs=[t,s],s=nn.simplify1(y.Op.QUEST,e.flags,o,null)}if(r===null)return s;r.push(s)}if(r!==null){const s=new y(y.Op.CONCAT);return s.subs=r.slice(0),nn.simplify(s)}return new y(y.Op.NO_MATCH)}}return e}static simplify1(e,t,r,s){if(r.op===y.Op.EMPTY_MATCH)return r;if(r.op===y.Op.NO_MATCH)return e===y.Op.PLUS?r:new y(y.Op.EMPTY_MATCH);if(e===r.op&&(t&G.NON_GREEDY)===(r.flags&G.NON_GREEDY))return r;if(s!==null&&s.op===e&&(s.flags&G.NON_GREEDY)===(t&G.NON_GREEDY)&&r===s.subs[0])return s;const i=new y(e);return i.flags=t,i.subs=[r],i}},Oe=class{constructor(n,e){this.sign=n,this.cls=e}};const jd=[48,57],Kd=[9,10,12,13,32,32],$d=[48,57,65,90,95,95,97,122],zd=new Map([["\\d",new Oe(1,jd)],["\\D",new Oe(-1,jd)],["\\s",new Oe(1,Kd)],["\\S",new Oe(-1,Kd)],["\\w",new Oe(1,$d)],["\\W",new Oe(-1,$d)]]),Wd=[48,57,65,90,97,122],Qd=[65,90,97,122],Yd=[0,127],Xd=[9,9,32,32],Zd=[0,31,127,127],ef=[48,57],tf=[33,126],nf=[97,122],rf=[32,126],sf=[33,47,58,64,91,96,123,126],of=[9,13,32,32],af=[65,90],cf=[48,57,65,90,95,95,97,122],uf=[48,57,65,70,97,102],lf=new Map([["[:alnum:]",new Oe(1,Wd)],["[:^alnum:]",new Oe(-1,Wd)],["[:alpha:]",new Oe(1,Qd)],["[:^alpha:]",new Oe(-1,Qd)],["[:ascii:]",new Oe(1,Yd)],["[:^ascii:]",new Oe(-1,Yd)],["[:blank:]",new Oe(1,Xd)],["[:^blank:]",new Oe(-1,Xd)],["[:cntrl:]",new Oe(1,Zd)],["[:^cntrl:]",new Oe(-1,Zd)],["[:digit:]",new Oe(1,ef)],["[:^digit:]",new Oe(-1,ef)],["[:graph:]",new Oe(1,tf)],["[:^graph:]",new Oe(-1,tf)],["[:lower:]",new Oe(1,nf)],["[:^lower:]",new Oe(-1,nf)],["[:print:]",new Oe(1,rf)],["[:^print:]",new Oe(-1,rf)],["[:punct:]",new Oe(1,sf)],["[:^punct:]",new Oe(-1,sf)],["[:space:]",new Oe(1,of)],["[:^space:]",new Oe(-1,of)],["[:upper:]",new Oe(1,af)],["[:^upper:]",new Oe(-1,af)],["[:word:]",new Oe(1,cf)],["[:^word:]",new Oe(-1,cf)],["[:xdigit:]",new Oe(1,uf)],["[:^xdigit:]",new Oe(-1,uf)]]);var gr=class Er{static charClassToString(e,t){let r="[";for(let s=0;s<t;s+=2){s>0&&(r+=" ");const i=e[s],o=e[s+1];i===o?r+=`0x${i.toString(16)}`:r+=`0x${i.toString(16)}-0x${o.toString(16)}`}return r+="]",r}static cmp(e,t,r,s){const i=e[t]-r;return i!==0?i:s-e[t+1]}static qsortIntPair(e,t,r){const s=((t+r)/2|0)&-2,i=e[s],o=e[s+1];let a=t,u=r;for(;a<=u;){for(;a<r&&Er.cmp(e,a,i,o)<0;)a+=2;for(;u>t&&Er.cmp(e,u,i,o)>0;)u-=2;if(a<=u){if(a!==u){let l=e[a];e[a]=e[u],e[u]=l,l=e[a+1],e[a+1]=e[u+1],e[u+1]=l}a+=2,u-=2}}t<u&&Er.qsortIntPair(e,t,u),a<r&&Er.qsortIntPair(e,a,r)}constructor(e=ae.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;Er.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const r=this.r[t],s=this.r[t+1];if(r<=this.r[e-1]+1){s>this.r[e-1]&&(this.r[e-1]=s);continue}this.r[e]=r,this.r[e+1]=s,e+=2}return this.len=e,this}appendLiteral(e,t){return t&G.FOLD_CASE?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let r=2;r<=4;r+=2)if(this.len>=r){const s=this.r[this.len-r],i=this.r[this.len-r+1];if(e<=i+1&&s<=t+1)return e<s&&(this.r[this.len-r]=e),t>i&&(this.r[this.len-r+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=ne.MIN_FOLD&&t>=ne.MAX_FOLD)return this.appendRange(e,t);if(t<ne.MIN_FOLD||e>ne.MAX_FOLD)return this.appendRange(e,t);e<ne.MIN_FOLD&&(this.appendRange(e,ne.MIN_FOLD-1),e=ne.MIN_FOLD),t>ne.MAX_FOLD&&(this.appendRange(ne.MAX_FOLD+1,t),t=ne.MAX_FOLD);for(let r=e;r<=t;r++){this.appendRange(r,r);for(let s=ne.simpleFold(r);s!==r;s=ne.simpleFold(s))this.appendRange(s,s)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let r=0;r<e.length;r+=2){const s=e[r],i=e[r+1];t<=s-1&&this.appendRange(t,s-1),t=i+1}return t<=ne.MAX_RUNE&&this.appendRange(t,ne.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const r=e.getLo(t),s=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(r,s);continue}for(let o=r;o<=s;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let r=0;r<e.length;++r){const s=e.getLo(r),i=e.getHi(r),o=e.getStride(r);if(o===1){t<=s-1&&this.appendRange(t,s-1),t=i+1;continue}for(let a=s;a<=i;a+=o)t<=a-1&&this.appendRange(t,a-1),t=a+1}return t<=ne.MAX_RUNE&&this.appendRange(t,ne.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let r=0;r<this.len;r+=2){const s=this.r[r],i=this.r[r+1];e<=s-1&&(this.r[t]=e,this.r[t+1]=s-1,t+=2),e=i+1}return this.len=t,e<=ne.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=ne.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let r=e.cls;return t&&(r=new Er().appendFoldedClass(r).cleanClass().toArray()),this.appendClassWithSign(r,e.sign)}toString(){return Er.charClassToString(this.r,this.len)}},rA=class{constructor(n){this.str=n,this.position=0}pos(){return this.position}rewindTo(n){this.position=n}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(n){this.position+=n}skipString(n){this.position+=n.length}pop(){const n=this.str.codePointAt(this.position);return this.position+=ae.charCount(n),n}lookingAt(n){return this.str.startsWith(n,this.position)}rest(){return this.str.substring(this.position)}from(n){return this.str.substring(n,this.position)}toString(){return this.rest()}},j,sA=(j=class{static unicodeTable(e){return e==="Any"?{tab:j.ANY_TABLE,fold:j.ANY_TABLE,sign:1}:e==="Ascii"?{tab:j.ASCII_TABLE,fold:j.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:Ht.CATEGORIES.get("Cn"),fold:Ht.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:Ht.CATEGORIES.get("LC"),fold:Ht.FOLD_CATEGORIES.get("LC"),sign:1}:Ht.CATEGORIES.has(e)?{tab:Ht.CATEGORIES.get(e),fold:Ht.FOLD_CATEGORIES.get(e),sign:1}:Ht.SCRIPTS.has(e)?{tab:Ht.SCRIPTS.get(e),fold:Ht.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<ne.MIN_FOLD||e>ne.MAX_FOLD)return e;let t=e;const r=e;for(e=ne.simpleFold(e);e!==r;e=ne.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===y.Op.EMPTY_MATCH)return null;if(e.op===y.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===y.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const r=new y(y.Op.LITERAL);return r.flags=t,r.runes=ae.stringToRunes(e),r}static parse(e,t){return new j(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const r=j.parseInt(e);if(r===-1||!e.more())return-1;let s;if(!e.lookingAt(","))s=r;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))s=-1;else if((s=j.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),r<0||r>1e3||s===-2||s>1e3||s>=0&&r>s)throw new qe(j.ERR_INVALID_REPEAT_SIZE,e.from(t));return r<<16|s&ne.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const r=e.codePointAt(t);if(r!==k.CODES.get("_")&&!ae.isalnum(r))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=k.CODES.get("0")&&e.peek()<=k.CODES.get("9");)e.skip(1);const r=e.from(t);return r.length===0||r.length>1&&r.codePointAt(0)===k.CODES.get("0")?-1:r.length>8?-2:parseInt(r,10)}static isCharClass(e){return e.op===y.Op.LITERAL&&e.runes.length===1||e.op===y.Op.CHAR_CLASS||e.op===y.Op.ANY_CHAR_NOT_NL||e.op===y.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case y.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case y.Op.CHAR_CLASS:for(let r=0;r<e.runes.length;r+=2)if(e.runes[r]<=t&&t<=e.runes[r+1])return!0;return!1;case y.Op.ANY_CHAR_NOT_NL:return t!==k.CODES.get(`
`);case y.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case y.Op.ANY_CHAR:break;case y.Op.ANY_CHAR_NOT_NL:j.matchRune(t,k.CODES.get(`
`))&&(e.op=y.Op.ANY_CHAR);break;case y.Op.CHAR_CLASS:t.op===y.Op.LITERAL?e.runes=new gr(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new gr(e.runes).appendClass(t.runes).toArray();break;case y.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=y.Op.CHAR_CLASS,e.runes=new gr().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new qe(j.ERR_TRAILING_BACKSLASH);let r=e.pop();e:switch(r){case k.CODES.get("1"):case k.CODES.get("2"):case k.CODES.get("3"):case k.CODES.get("4"):case k.CODES.get("5"):case k.CODES.get("6"):case k.CODES.get("7"):if(!e.more()||e.peek()<k.CODES.get("0")||e.peek()>k.CODES.get("7"))break;case k.CODES.get("0"):{let s=r-k.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<k.CODES.get("0")||e.peek()>k.CODES.get("7"));i++)s=s*8+e.peek()-k.CODES.get("0"),e.skip(1);return s}case k.CODES.get("x"):{if(!e.more())break;if(r=e.pop(),r===k.CODES.get("{")){let o=0,a=0;for(;;){if(!e.more())break e;if(r=e.pop(),r===k.CODES.get("}"))break;const u=ae.unhex(r);if(u<0||(a=a*16+u,a>ne.MAX_RUNE))break e;o++}if(o===0)break e;return a}const s=ae.unhex(r);if(!e.more())break;r=e.pop();const i=ae.unhex(r);if(s<0||i<0)break;return s*16+i}case k.CODES.get("a"):return k.CODES.get("\x07");case k.CODES.get("f"):return k.CODES.get("\f");case k.CODES.get("n"):return k.CODES.get(`
`);case k.CODES.get("r"):return k.CODES.get("\r");case k.CODES.get("t"):return k.CODES.get("	");case k.CODES.get("v"):return k.CODES.get("\v");default:if(r<=ne.MAX_ASCII&&!ae.isalnum(r))return r;break}throw new qe(j.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new qe(j.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?j.parseEscape(e):e.pop()}static concatRunes(e,t){for(let r=0;r<t.length;r++)e.push(t[r]);return e}static hasCapture(e){if(e===null)return!1;if(e.op===y.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(j.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new y(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>j.MAX_RUNES)throw new qe(j.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===y.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(j.MAX_SIZE/this.repeats)?this.repeats=j.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(j.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>j.MAX_SIZE)throw new qe(j.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let r=0;switch(e.op){case y.Op.LITERAL:r=e.runes.length;break;case y.Op.PLB:case y.Op.NLB:case y.Op.CAPTURE:case y.Op.STAR:r=2+this.calcSize(e.subs[0]);break;case y.Op.PLUS:case y.Op.QUEST:r=1+this.calcSize(e.subs[0]);break;case y.Op.CONCAT:for(let s of e.subs)r=r+this.calcSize(s);break;case y.Op.ALTERNATE:for(let s of e.subs)r=r+this.calcSize(s);e.subs.length>1&&(r=r+e.subs.length-1);break;case y.Op.REPEAT:{let s=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?r=2+s:r=1+e.min*s;break}r=e.max*s+(e.max-e.min);break}}return r=Math.max(1,r),this.size===null&&(this.size=new Map),this.size.set(e,r),r}checkHeight(e){if(!(this.numRegexp<j.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>j.MAX_HEIGHT)throw new qe(j.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let r=1;for(let s of e.subs){const i=this.calcHeight(s);r<1+i&&(r=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,r),r}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!y.isPseudoOp(this.stack[t-1].op);)t--;const r=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),r}push(e){if(this.numRunes+=e.runes.length,e.op===y.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=y.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===y.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&ne.simpleFold(e.runes[0])===e.runes[2]&&ne.simpleFold(e.runes[2])===e.runes[0]||e.op===y.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&ne.simpleFold(e.runes[0])===e.runes[1]&&ne.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|G.FOLD_CASE))return null;e.op=y.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|G.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const r=this.stack.length;if(r<2)return!1;const s=this.stack[r-1],i=this.stack[r-2];return s.op!==y.Op.LITERAL||i.op!==y.Op.LITERAL||(s.flags&G.FOLD_CASE)!==(i.flags&G.FOLD_CASE)?!1:(i.runes=j.concatRunes(i.runes,s.runes),e>=0?(s.runes=[e],s.flags=t,!0):(this.pop(),this.reuse(s),!1))}newLiteral(e,t){const r=this.newRegexp(y.Op.LITERAL);return r.flags=t,t&G.FOLD_CASE&&(e=j.minFoldRune(e)),r.runes=[e],r}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,r,s,i,o){let a=this.flags;if(a&G.PERL_X&&(i.more()&&i.lookingAt("?")&&(i.skip(1),a^=G.NON_GREEDY),o!==-1))throw new qe(j.ERR_INVALID_REPEAT_OP,i.from(o));const u=this.stack.length;if(u===0)throw new qe(j.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const l=this.stack[u-1];if(y.isPseudoOp(l.op))throw new qe(j.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const h=this.newRegexp(e);if(h.min=t,h.max=r,h.flags=a,h.subs=[l],this.stack[u-1]=h,this.checkLimits(h),e===y.Op.REPEAT&&(t>=2||r>=2)&&!this.repeatIsValid(h,1e3))throw new qe(j.ERR_INVALID_REPEAT_SIZE,i.from(s))}repeatIsValid(e,t){if(e.op===y.Op.REPEAT){let r=e.max;if(r===0)return!0;if(r<0&&(r=e.min),r>t)return!1;r>0&&(t=Math.trunc(t/r))}for(let r of e.subs)if(!this.repeatIsValid(r,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(y.Op.EMPTY_MATCH)):this.push(this.collapse(e,y.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(y.Op.NO_MATCH)):this.push(this.collapse(e,y.Op.ALTERNATE))}cleanAlt(e){e.op===y.Op.CHAR_CLASS&&(e.runes=new gr(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===ne.MAX_RUNE?(e.runes=[],e.op=y.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===k.CODES.get(`
`)-1&&e.runes[2]===k.CODES.get(`
`)+1&&e.runes[3]===ne.MAX_RUNE&&(e.runes=[],e.op=y.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let r=0;for(let a of e)r+=a.op===t?a.subs.length:1;let s=new Array(r).fill(null),i=0;for(let a of e)if(a.op===t){for(let u=0;u<a.subs.length;u++)s[i++]=a.subs[u];this.reuse(a)}else s[i++]=a;let o=this.newRegexp(t);if(o.subs=s,t===y.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const a=o;o=o.subs[0],this.reuse(a)}return o}factor(e){if(e.length<2)return e;let t=0,r=e.length,s=0,i=null,o=0,a=0,u=0;for(let h=0;h<=r;h++){let f=null,C=0,I=0;if(h<r){let v=e[t+h];if(v.op===y.Op.CONCAT&&v.subs.length>0&&(v=v.subs[0]),v.op===y.Op.LITERAL&&(f=v.runes,C=v.runes.length,I=v.flags&G.FOLD_CASE),I===a){let V=0;for(;V<o&&V<C&&i[V]===f[V];)V++;if(V>0){o=V;continue}}}if(h!==u)if(h===u+1)e[s++]=e[t+u];else{const v=this.newRegexp(y.Op.LITERAL);v.flags=a,v.runes=i.slice(0,o);for(let Y=u;Y<h;Y++)e[t+Y]=this.removeLeadingString(e[t+Y],o),this.checkLimits(e[t+Y]);const V=this.collapse(e.slice(t+u,t+h),y.Op.ALTERNATE),H=this.newRegexp(y.Op.CONCAT);H.subs=[v,V],e[s++]=H}u=h,i=f,o=C,a=I}r=s,t=0,u=0,s=0;let l=null;for(let h=0;h<=r;h++){let f=null;if(!(h<r&&(f=j.leadingRegexp(e[t+h]),l!==null&&l.equals(f)&&(j.isCharClass(l)||l.op===y.Op.REPEAT&&l.min===l.max&&j.isCharClass(l.subs[0]))))){if(h!==u)if(h===u+1)e[s++]=e[t+u];else{const C=l;for(let V=u;V<h;V++){const H=V!==u;e[t+V]=this.removeLeadingRegexp(e[t+V],H),this.checkLimits(e[t+V])}const I=this.collapse(e.slice(t+u,t+h),y.Op.ALTERNATE),v=this.newRegexp(y.Op.CONCAT);v.subs=[C,I],e[s++]=v}u=h,l=f}}r=s,t=0,u=0,s=0;for(let h=0;h<=r;h++)if(!(h<r&&j.isCharClass(e[t+h]))){if(h!==u)if(h===u+1)e[s++]=e[t+u];else{let f=u;for(let I=u+1;I<h;I++){const v=e[t+f],V=e[t+I];(v.op<V.op||v.op===V.op&&(v.runes!==null?v.runes.length:0)<(V.runes!==null?V.runes.length:0))&&(f=I)}const C=e[t+u];e[t+u]=e[t+f],e[t+f]=C;for(let I=u+1;I<h;I++)j.mergeCharClass(e[t+u],e[t+I]),this.reuse(e[t+I]);this.cleanAlt(e[t+u]),e[s++]=e[t+u]}h<r&&(e[s++]=e[t+h]),u=h+1}r=s,t=0,u=0,s=0;for(let h=0;h<r;++h)h+1<r&&e[t+h].op===y.Op.EMPTY_MATCH&&e[t+h+1].op===y.Op.EMPTY_MATCH||(e[s++]=e[t+h]);return r=s,t=0,e.slice(t,r)}removeLeadingString(e,t){if(e.op===y.Op.CONCAT&&e.subs.length>0){const r=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=r,r.op===y.Op.EMPTY_MATCH)switch(this.reuse(r),e.subs.length){case 0:case 1:e.op=y.Op.EMPTY_MATCH,e.subs=y.emptySubs();break;case 2:{const s=e;e=e.subs[1],this.reuse(s);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===y.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=y.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===y.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=y.Op.EMPTY_MATCH,e.subs=y.emptySubs();break;case 1:{const r=e;e=e.subs[0],this.reuse(r);break}}return e}return t&&this.reuse(e),this.newRegexp(y.Op.EMPTY_MATCH)}parseInternal(){if(this.flags&G.LITERAL)return j.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,r=-1;const s=new rA(this.wholeRegexp);for(;s.more();){let i=-1;e:switch(s.peek()){case k.CODES.get("("):if(this.flags&G.LOOKBEHIND){if(s.lookingAt("(?<=")){this.parsePosLookBehind(),s.skip(4);break}if(s.lookingAt("(?<!")){this.parseNegLookBehind(),s.skip(4);break}}if(this.flags&G.PERL_X&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(y.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case k.CODES.get("|"):this.parseVerticalBar(),s.skip(1);break;case k.CODES.get(")"):this.parseRightParen(),s.skip(1);break;case k.CODES.get("^"):this.flags&G.ONE_LINE?this.op(y.Op.BEGIN_TEXT):this.op(y.Op.BEGIN_LINE),s.skip(1);break;case k.CODES.get("$"):this.flags&G.ONE_LINE?this.op(y.Op.END_TEXT).flags|=G.WAS_DOLLAR:this.op(y.Op.END_LINE),s.skip(1);break;case k.CODES.get("."):this.flags&G.DOT_NL?this.op(y.Op.ANY_CHAR):this.op(y.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case k.CODES.get("["):this.parseClass(s);break;case k.CODES.get("*"):case k.CODES.get("+"):case k.CODES.get("?"):{i=s.pos();let o=null;switch(s.pop()){case k.CODES.get("*"):o=y.Op.STAR;break;case k.CODES.get("+"):o=y.Op.PLUS;break;case k.CODES.get("?"):o=y.Op.QUEST;break}this.repeat(o,t,r,i,s,e);break}case k.CODES.get("{"):{i=s.pos();const o=j.parseRepeat(s);if(o<0){s.rewindTo(i),this.literal(s.pop());break}t=o>>16,r=(o&ne.MAX_BMP)<<16>>16,this.repeat(y.Op.REPEAT,t,r,i,s,e);break}case k.CODES.get("\\"):{const o=s.pos();if(s.skip(1),this.flags&G.PERL_X&&s.more())switch(s.pop()){case k.CODES.get("A"):this.op(y.Op.BEGIN_TEXT);break e;case k.CODES.get("b"):this.op(y.Op.WORD_BOUNDARY);break e;case k.CODES.get("B"):this.op(y.Op.NO_WORD_BOUNDARY);break e;case k.CODES.get("C"):throw new qe(j.ERR_INVALID_ESCAPE,"\\C");case k.CODES.get("Q"):{let l=s.rest();const h=l.indexOf("\\E");h>=0?(l=l.substring(0,h),s.skipString(l),s.skipString("\\E")):s.skipString(l);let f=0;for(;f<l.length;){const C=l.codePointAt(f);this.literal(C),f+=ae.charCount(C)}break e}case k.CODES.get("z"):this.op(y.Op.END_TEXT);break e;default:s.rewindTo(o);break}else s.rewindTo(o);const a=this.newRegexp(y.Op.CHAR_CLASS);if(a.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const l=new gr;if(this.parseUnicodeClass(s,l)){a.runes=l.toArray(),this.push(a);break e}}const u=new gr;if(this.parsePerlClassEscape(s,u)){a.runes=u.toArray(),this.push(a);break e}s.rewindTo(o),this.reuse(a),this.literal(j.parseEscape(s));break}default:this.literal(s.pop());break}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new qe(j.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),r=e.rest();if(r.startsWith("(?P<")||r.startsWith("(?<")){const a=r.charAt(2)==="P"?4:3,u=r.indexOf(">");if(u<0)throw new qe(j.ERR_INVALID_NAMED_CAPTURE,r);const l=r.substring(a,u);if(e.skipString(l),e.skip(a+1),!j.isValidCaptureName(l))throw new qe(j.ERR_INVALID_NAMED_CAPTURE,r.substring(0,u+1));const h=this.op(y.Op.LEFT_PAREN);if(h.cap=++this.numCap,this.namedGroups[l])throw new qe(j.ERR_DUPLICATE_NAMED_CAPTURE,l);this.namedGroups[l]=this.numCap,h.name=l;return}e.skip(2);let s=this.flags,i=1,o=!1;e:for(;e.more();){const a=e.pop();switch(a){case k.CODES.get("i"):s|=G.FOLD_CASE,o=!0;break;case k.CODES.get("m"):s&=-17,o=!0;break;case k.CODES.get("s"):s|=G.DOT_NL,o=!0;break;case k.CODES.get("U"):s|=G.NON_GREEDY,o=!0;break;case k.CODES.get("-"):if(i<0)break e;i=-1,s=~s,o=!1;break;case k.CODES.get(":"):case k.CODES.get(")"):if(i<0){if(!o)break e;s=~s}a===k.CODES.get(":")&&this.op(y.Op.LEFT_PAREN),this.flags=s;return;default:break e}}throw new qe(j.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(y.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(y.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(y.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===y.Op.VERTICAL_BAR&&j.isCharClass(this.stack[e-1])&&j.isCharClass(this.stack[e-3])){let t=this.stack[e-1],r=this.stack[e-3];if(t.op>r.op){const s=r;r=t,t=s,this.stack[e-3]=r}return j.mergeCharClass(r,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],r=this.stack[e-2];if(r.op===y.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=r,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new qe(j.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==y.Op.LEFT_PAREN)throw new qe(j.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(j.hasCapture(e))throw new qe(j.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=y.Op.PLB:t.op=y.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=y.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const r=e.pos();if(!(this.flags&G.PERL_X)||!e.more()||e.pop()!==k.CODES.get("\\")||!e.more())return!1;e.pop();const s=e.from(r),i=zd.has(s)?zd.get(s):null;return i===null?!1:(t.appendGroup(i,(this.flags&G.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const r=e.rest(),s=r.indexOf(":]");if(s<0)return!1;const i=r.substring(0,s+2);e.skipString(i);const o=lf.has(i)?lf.get(i):null;if(o===null)throw new qe(j.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&G.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const r=e.pos();if(!(this.flags&G.UNICODE_GROUPS)||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let s=1,i=e.pop();if(i===k.CODES.get("P")&&(s=-1),!e.more())throw e.rewindTo(r),new qe(j.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==k.CODES.get("{"))o=ae.runeToString(i);else{const h=e.rest(),f=h.indexOf("}");if(f<0)throw e.rewindTo(r),new qe(j.ERR_INVALID_CHAR_RANGE,e.rest());o=h.substring(0,f),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===k.CODES.get("^")&&(s=0-s,o=o.substring(1));const a=j.unicodeTable(o);if(a===null)throw new qe(j.ERR_INVALID_CHAR_RANGE,e.from(r));a.sign<0&&(s=0-s);const u=a.tab,l=a.fold;if(!(this.flags&G.FOLD_CASE)||l===null)t.appendTableWithSign(u,s);else{const h=new gr().appendTable(u).appendTable(l).cleanClass().toArray();t.appendClassWithSign(h,s)}return!0}parseClass(e){const t=e.pos();e.skip(1);const r=this.newRegexp(y.Op.CHAR_CLASS);r.flags=this.flags;const s=new gr;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),this.flags&G.CLASS_NL||s.appendRange(k.CODES.get(`
`),k.CODES.get(`
`)));let o=!0;for(;!e.more()||e.peek()!==k.CODES.get("]")||o;){if(e.more()&&e.lookingAt("-")&&!(this.flags&G.PERL_X)&&!o){const h=e.rest();if(h==="-"||!h.startsWith("-]"))throw e.rewindTo(t),new qe(j.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const a=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,s))continue;e.rewindTo(a)}if(this.parseUnicodeClass(e,s)||this.parsePerlClassEscape(e,s))continue;e.rewindTo(a);const u=j.parseClassChar(e,t);let l=u;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(l=j.parseClassChar(e,t),l<u)throw new qe(j.ERR_INVALID_CHAR_RANGE,e.from(a))}this.flags&G.FOLD_CASE?s.appendFoldedRange(u,l):s.appendRange(u,l)}e.skip(1),s.cleanClass(),i<0&&s.negateClass(),r.runes=s.toArray(),this.push(r)}},J(j,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),J(j,"ERR_INVALID_CHAR_RANGE","invalid character class range"),J(j,"ERR_INVALID_ESCAPE","invalid escape sequence"),J(j,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),J(j,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),J(j,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),J(j,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),J(j,"ERR_MISSING_BRACKET","missing closing ]"),J(j,"ERR_MISSING_PAREN","missing closing )"),J(j,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),J(j,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),J(j,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name"),J(j,"ERR_UNEXPECTED_PAREN","unexpected )"),J(j,"ERR_NESTING_DEPTH","expression nests too deeply"),J(j,"ERR_LARGE","expression too large"),J(j,"ERR_INVALID_CAPTURE_IN_LOOKBEHIND","invalid capture in lookbehind"),J(j,"MAX_HEIGHT",1e3),J(j,"MAX_SIZE",3355443),J(j,"MAX_RUNES",33554432),J(j,"ANY_TABLE",new g(new Uint32Array([0,ne.MAX_RUNE,1]))),J(j,"ASCII_TABLE",new g(new Uint32Array([0,127,1]))),J(j,"ASCII_FOLD_TABLE",new g(new Uint32Array([0,127,1,383,383,1,8490,8490,1]))),j),iA=class ns{static initTest(e){const t=ns.compile(e),r=new ns(t.expr,t.prog,t.numSubexp,t.longest);return r.cond=t.cond,r.prefix=t.prefix,r.prefixUTF8=t.prefixUTF8,r.prefixComplete=t.prefixComplete,r.prefixRune=t.prefixRune,r.prefilter=t.prefilter,r}static compile(e){return ns.compileImpl(e,G.PERL,!1)}static compilePOSIX(e){return ns.compileImpl(e,G.POSIX,!0)}static compileImpl(e,t,r){let s=sA.parse(e,t);const i=s.maxCap();s=nA.simplify(s);const o=Zy.build(s),a=tA.compileRegexp(s),u=new ns(e,a,i,r);u.prefilter=o.type===be.Type.NONE?null:o;const[l,h]=a.prefix();return u.prefixComplete=l,u.prefix=h,u.prefixUTF8=ae.stringToUtf8ByteArray(u.prefix),u.prefix.length>0&&(u.prefixRune=u.prefix.codePointAt(0)),u.namedGroups=s.namedGroups,u}static match(e,t){return ns.compile(e).match(t)}constructor(e,t,r=0,s=0){this.expr=e,this.prog=t,this.numSubexp=r,this.longest=s,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.machinePool=[],this.dfa=new qy(this.prog),this.onepass=qd.compile(this.prog),this.prefilter=null}matchPrefixComplete(e,t,r,s){if((r===G.ANCHOR_START||r===G.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const a=e.prefixLength(this);if(r===G.UNANCHORED){const u=e.index(this,t);if(u<0)return null;i=t+u,o=i+a}else if(r===G.ANCHOR_BOTH){if(e.endPos()!==a||e.index(this,0)!==0)return null;i=0,o=a}else if(r===G.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=a}if(i<0)return null;if(s>0){const u=new Int32Array(s).fill(-1);return u[0]=i,u[1]=o,Array.from(u)}return[]}executeEngine(e,t,r,s){if(this.prefixComplete&&(s===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,r,s);if(this.prefilter!==null&&r===G.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return qd.execute(this,e,t,r,s);if(s>0)return this.prog.numLb===0&&e.endPos()<=ya.maxBitStateLen(this.prog)?ya.execute(this,e,t,r,s):this.doExecuteNFA(e,t,r,s);if(this.prog.numLb===0){const i=this.dfa.match(e,t,r);if(i!==null)return i?[]:null;if(e.endPos()<=ya.maxBitStateLen(this.prog))return ya.execute(this,e,t,r,s)}return this.doExecuteNFA(e,t,r,s)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,r,s){let i=this.get();i||(i=Uy.fromRE2(this)),i.init(s);const o=i.match(e,t,r)?i.submatches():null;return this.put(i),o}match(e){return this.executeEngine(ze.fromUTF16(e),0,G.UNANCHORED,0)!==null}matchWithGroup(e,t,r,s,i){return e instanceof ds||(ae.isByteArray(e)?e=os.utf8(e):e=os.utf16(e)),this.matchMachineInput(e,t,r,s,i)}matchMachineInput(e,t,r,s,i){if(t>r)return[!1,null];const o=e.isUTF16Encoding()?ze.fromUTF16(e.asCharSequence(),0,r):ze.fromUTF8(e.asBytes(),0,r),a=this.executeEngine(o,t,s,2*i);return a===null?[!1,null]:[!0,a]}matchUTF8(e){return this.executeEngine(ze.fromUTF8(e),0,G.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,r){let s=0,i=0,o="";const a=ze.fromUTF16(e);let u=0;for(;i<=e.length;){const l=this.executeEngine(a,i,G.UNANCHORED,2);if(l===null||l.length===0)break;o+=e.substring(s,l[0]),(l[1]>s||l[0]===0)&&(o+=t(e.substring(l[0],l[1])),u++),s=l[1];const h=a.step(i)&7;if(i+h>l[1]?i+=h:i+1>l[1]?i++:i=l[1],u>=r)break}return o+=e.substring(s),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let r=new Array(t).fill(-1);for(let s=0;s<e.length;s++)r[s]=e[s];e=r}return e}allMatches(e,t,r=s=>s){let s=[];const i=e.endPos();t<0&&(t=i+1);let o=0,a=0,u=-1;for(;a<t&&o<=i;){const l=this.executeEngine(e,o,G.UNANCHORED,this.prog.numCap);if(l===null||l.length===0)break;let h=!0;if(l[1]===o){l[0]===u&&(h=!1);const f=e.step(o);f<0?o=i+1:o+=f&7}else o=l[1];u=l[1],h&&(s.push(r(this.pad(l))),a++)}return s}findUTF8(e){const t=this.executeEngine(ze.fromUTF8(e),0,G.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(ze.fromUTF8(e),0,G.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(ze.fromUTF16(e),0,G.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(ze.fromUTF16(e),0,G.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(ze.fromUTF8(e),0,G.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.slice(t[2*s],t[2*s+1]));return r}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(ze.fromUTF8(e),0,G.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(ze.fromUTF16(e),0,G.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.substring(t[2*s],t[2*s+1]));return r}findSubmatchIndex(e){return this.pad(this.executeEngine(ze.fromUTF16(e),0,G.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const r=this.allMatches(ze.fromUTF8(e),t,s=>e.slice(s[0],s[1]));return r.length===0?null:r}findAllUTF8Index(e,t){const r=this.allMatches(ze.fromUTF8(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAll(e,t){const r=this.allMatches(ze.fromUTF16(e),t,s=>e.substring(s[0],s[1]));return r.length===0?null:r}findAllIndex(e,t){const r=this.allMatches(ze.fromUTF16(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAllUTF8Submatch(e,t){const r=this.allMatches(ze.fromUTF8(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.slice(s[2*o],s[2*o+1]));return i});return r.length===0?null:r}findAllUTF8SubmatchIndex(e,t){const r=this.allMatches(ze.fromUTF8(e),t);return r.length===0?null:r}findAllSubmatch(e,t){const r=this.allMatches(ze.fromUTF16(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.substring(s[2*o],s[2*o+1]));return i});return r.length===0?null:r}findAllSubmatchIndex(e,t){const r=this.allMatches(ze.fromUTF16(e),t);return r.length===0?null:r}},oA=class Os{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(e instanceof RegExp&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let r="",s=!1,i=e.length;i===0&&(r="(?:)",s=!0);let o=!1,a=0;for(;a<i;){let l=e[a];if(l==="\\"){if(a+1<i)switch(l=e[a+1],l){case"\\":r+="\\\\",a+=2;continue;case"c":if(a+2<i){let C=e[a+2].charCodeAt(0);if(C>=65&&C<=90||C>=97&&C<=122){let I=C%32;r+="\\x",r+=(I>>4).toString(16).toUpperCase(),r+=(I&15).toString(16).toUpperCase(),a+=3,s=!0;continue}}r+="c",a+=2,s=!0;continue;case"u":if(a+2<i){if(e[a+2]==="{"){let C=a+3,I=!1,v=!1;for(;C<i;){const V=e[C];if(V==="}"){v=!0;break}if(!Os.isHexadecimal(V))break;I=!0,C++}if(v&&I){r+="\\x",a+=2,s=!0;continue}}else if(a+5<i){let C=!0;for(let I=0;I<4;I++)if(!Os.isHexadecimal(e[a+2+I])){C=!1;break}if(C){r+="\\x{"+e.substring(a+2,a+6)+"}",a+=6,s=!0;continue}}}r+="u",a+=2,s=!0;continue;case"x":{let C=!1;if(a+2<i&&e[a+2]==="{"){let I=a+3,v=!1,V=!1;for(;I<i;){const H=e[I];if(H==="}"){V=!0;break}if(!Os.isHexadecimal(H))break;v=!0,I++}V&&v&&(C=!0)}else a+3<i&&Os.isHexadecimal(e[a+2])&&Os.isHexadecimal(e[a+3])&&(C=!0);C?(r+="\\x",a+=2):(r+="x",a+=2,s=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":r+="\\"+l,a+=2;continue;default:{let C=e.codePointAt(a+1);if(C>=48&&C<=57||C>=65&&C<=90||C>=97&&C<=122){let I=ae.charCount(C);r+=e.substring(a+1,a+1+I),a+=I+1,s=!0}else{r+="\\";let I=ae.charCount(C);r+=e.substring(a+1,a+1+I),a+=I+1}continue}}}else if(l==="/"){r+="\\/",a+=1,s=!0;continue}else if(l==="[")o=!0;else if(l==="]")o=!1;else if(!o&&l==="("&&a+2<i&&e[a+1]==="?"&&e[a+2]==="<"&&a+3<i&&!"=!>)".includes(e[a+3])){r+="(?P<",a+=3,s=!0;continue}let h=e.codePointAt(a),f=ae.charCount(h);r+=e.substring(a,a+f),a+=f}const u=s?r:e;return t.length>0?`(?${t})${u}`:u}},ct,CB=(ct=class{static quote(e){return ae.quoteMeta(e)}static quoteReplacement(e,t=!1){return xd.quoteReplacement(e,t)}static translateRegExp(e){return oA.translate(e)}static compile(e,t=0){let r=e;if(t&ct.CASE_INSENSITIVE&&(r=`(?i)${r}`),t&ct.DOTALL&&(r=`(?s)${r}`),t&ct.MULTILINE&&(r=`(?m)${r}`),t&-544)throw new xy("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");let s=G.PERL;t&ct.DISABLE_UNICODE_GROUPS&&(s&=-129),t&ct.LOOKBEHINDS&&(s|=G.LOOKBEHIND);const i=new ct(e,t);return i.re2Input=iA.compileImpl(r,s,(t&ct.LONGEST_MATCH)!==0),i}static matches(e,t){return ct.compile(e).testExact(t)}static initTest(e,t,r){if(e==null)throw new Error("pattern is null");if(r==null)throw new Error("re2 is null");const s=new ct(e,t);return s.re2Input=r,s}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return ae.isByteArray(e)&&(e=os.utf8(e)),new xd(this,e)}test(e){return ae.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=ae.isByteArray(e)?ze.fromUTF8(e):ze.fromUTF16(e);return this.re2Input.executeEngine(t,0,G.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);if(!t.find())return null;const r=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);r.push(o===null?void 0:o)}r.index=t.start(0),r.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);r.groups=i}else r.groups=void 0;return r}split(e,t=0){const r=this.matcher(e),s=[];let i=0,o=0;for(;r.find();){if(o===0&&r.end()===0){o=r.end();continue}if(t>0&&s.length===t-1)break;if(o===r.start()){if(t===0){i+=1,o=r.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(r.substring(o,r.start())),o=r.end()}if(t===0&&o!==r.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(r.substring(o,r.inputLength()))}return(t!==0||s.length===0&&!(o===r.inputLength()&&o>0))&&s.push(r.substring(o,r.inputLength())),s}*matchAll(e){const t=this.matcher(e);for(;t.find();){const r=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);r.push(o===null?void 0:o)}r.index=t.start(0),r.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);r.groups=i}else r.groups=void 0;yield r}}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}},J(ct,"CASE_INSENSITIVE",Ss.CASE_INSENSITIVE),J(ct,"DOTALL",Ss.DOTALL),J(ct,"MULTILINE",Ss.MULTILINE),J(ct,"DISABLE_UNICODE_GROUPS",Ss.DISABLE_UNICODE_GROUPS),J(ct,"LONGEST_MATCH",Ss.LONGEST_MATCH),J(ct,"LOOKBEHINDS",Ss.LOOKBEHINDS),ct);/**
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
 */let Bi="12.17.0";function aA(n){Bi=n}/**
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
 */const fs=new bo("@firebase/firestore");function bs(){return fs.logLevel}function Z(n,...e){if(fs.logLevel<=Re.DEBUG){const t=e.map(pB);fs.debug(`Firestore (${Bi}): ${n}`,...t)}}function sr(n,...e){if(fs.logLevel<=Re.ERROR){const t=e.map(pB);fs.error(`Firestore (${Bi}): ${n}`,...t)}}function En(n,...e){if(fs.logLevel<=Re.WARN){const t=e.map(pB);fs.warn(`Firestore (${Bi}): ${n}`,...t)}}function pB(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function Be(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,fg(n,r,t)}function fg(n,e,t){let r=`FIRESTORE (${Bi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw sr(r),new Error(r)}function oe(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||fg(e,s,r)}function _e(n,e){return n}/**
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
 */function cA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class xc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=cA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ve(n,e){return n<e?-1:n>e?1:0}function El(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return $u(s)===$u(i)?ve(s,i):$u(s)?1:-1}return ve(n.length,e.length)}const uA=55296,lA=57343;function $u(n){const e=n.charCodeAt(0);return e>=uA&&e<=lA}function Qs(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class et{constructor(e,t){this.comparator=e,this.root=t||yt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ra(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ra(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ra(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ra(this.root,e,this.comparator,!0)}}class Ra{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??yt.RED,this.left=s??yt.EMPTY,this.right=i??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new yt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return yt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Be(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Be(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Be(27949);return e+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw Be(57766)}get value(){throw Be(16141)}get color(){throw Be(16727)}get left(){throw Be(29726)}get right(){throw Be(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new yt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Bt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Bf(this.data.getIterator())}getIteratorFrom(e){return new Bf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Bt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Bt(this.comparator);return t.data=e,t}}class Bf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends un{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */const vn="__name__";class Tn{constructor(e,t,r){t===void 0?t=0:t>e.length&&Be(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Be(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Tn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Tn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Tn.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ve(e.length,t.length)}static compareSegments(e,t){const r=Tn.isNumericId(e),s=Tn.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Tn.extractNumericId(e).compare(Tn.extractNumericId(t)):El(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ar.fromString(e.substring(4,e.length-2))}}class Me extends Tn{construct(e,t,r){return new Me(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Me(t)}static emptyPath(){return new Me([])}}const BA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let zt=class ks extends Tn{construct(e,t,r){return new ks(e,t,r)}static isValidIdentifier(e){return BA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ks.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vn}static keyField(){return new ks([vn])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new $(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new $(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ks(t)}static emptyPath(){return new ks([])}};/**
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
 */class on{constructor(e){this.fields=e,e.sort(zt.comparator)}static empty(){return new on([])}unionWith(e){let t=new Bt(zt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new on(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qs(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */function rc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function $r(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hA(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function Cg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Me.fromString(e))}static fromName(e){return new ce(Me.fromString(e).popFirst(5))}static empty(){return new ce(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Me.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Me(e.slice()))}}/**
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
 */function pg(n,e,t){if(!t)throw new $(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function gg(n,e,t,r){if(e===!0&&r===!0)throw new $(M.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function hf(n){if(!ce.isDocumentKey(n))throw new $(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function df(n){if(ce.isDocumentKey(n))throw new $(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function xo(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Uc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Be(12329,{type:typeof n})}function Pt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new $(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Uc(n);throw new $(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function dA(n,e){if(e<=0)throw new $(M.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function lt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Uo(n,e){if(!xo(n))throw new $(M.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new $(M.INVALID_ARGUMENT,t);return!0}/**
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
 */const ff=-62135596800,Cf=1e6;class Je{static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Cf);return new Je(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ff)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cf}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Uo(e,Je._jsonSchema))return new Je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ff;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Je._jsonSchemaVersion="firestore/timestamp/1.0",Je._jsonSchema={type:lt("string",Je._jsonSchemaVersion),seconds:lt("number"),nanoseconds:lt("number")};/**
 * @license
 * Copyright 2023 Google LLC
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
 */class mg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new mg("Invalid base64 string: "+i):i}}(e);return new it(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new it(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const fA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function br(n){if(oe(!!n,39018),typeof n=="string"){let e=0;const t=fA.exec(n);if(oe(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:tt(n.seconds),nanos:tt(n.nanos)}}function tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function kr(n){return typeof n=="string"?it.fromBase64String(n):it.fromUint8Array(n)}/**
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
 */const Eg="server_timestamp",_g="__type__",Dg="__previous_value__",Ig="__local_write_time__";function Gc(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[_g])==null?void 0:r.stringValue)===Eg}function Go(n){const e=n.mapValue.fields[Dg];return Gc(e)?Go(e):e}function Ys(n){const e=br(n.mapValue.fields[Ig].timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */class CA{constructor(e,t,r,s,i,o,a,u,l,h,f,C,I){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l,this.isUsingEmulator=h,this.apiKey=f,this._customHeaders=C,this.grpcFlowControlWindow=I}}const sc="(default)";class Xs{constructor(e,t){this.projectId=e,this.database=t||sc}static empty(){return new Xs("","")}get isDefaultDatabase(){return this.database===sc}isEqual(e){return e instanceof Xs&&e.projectId===this.projectId&&e.database===this.database}}function pA(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new $(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xs(n.options.projectId,e)}/**
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
 */const gB=-1;function Hc(n){return n==null}function po(n){return n===0&&1/n==-1/0}function gA(n){return typeof n=="number"&&Number.isInteger(n)&&!po(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function mA(n){return typeof n=="string"}/**
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
 */const wg="__type__",EA="__max__",va={mapValue:{}},Tg="__vector__",go="value",Zs={nullValue:"NULL_VALUE"},Xt={booleanValue:!0},Dt={booleanValue:!1};function ht(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Gc(n)?4:_A(n)?9007199254740991:ic(n)?10:11:Be(28295,{value:n})}function fn(n,e,t){if(n===e)return!0;const r=ht(n);if(r!==ht(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ys(n).isEqual(Ys(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=br(i.timestampValue),u=br(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return kr(i.bytesValue).isEqual(kr(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return tt(i.geoPointValue.latitude)===tt(o.geoPointValue.latitude)&&tt(i.geoPointValue.longitude)===tt(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o,a){if("integerValue"in i&&"integerValue"in o)return tt(i.integerValue)===tt(o.integerValue);let u,l;if("doubleValue"in i&&"doubleValue"in o)u=tt(i.doubleValue),l=tt(o.doubleValue);else{if(!(a!=null&&a.t))return!1;u=tt(i.integerValue??i.doubleValue),l=tt(o.integerValue??o.doubleValue)}return u===l?!!(a!=null&&a.i)||po(u)===po(l):!!(a===void 0||a.o)&&isNaN(u)&&isNaN(l)}(n,e,t);case 9:return Qs(n.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>fn(s,i,t));case 10:case 11:return function(i,o,a){const u=i.mapValue.fields||{},l=o.mapValue.fields||{};if(rc(u)!==rc(l))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(l[h]===void 0||!fn(u[h],l[h],a)))return!1;return!0}(n,e,t);default:return Be(52216,{left:n})}}function mo(n,e){return(n.values||[]).find(t=>fn(t,e))!==void 0}function Zt(n,e){if(n===e)return 0;const t=ht(n),r=ht(e);if(t!==r)return ve(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ve(n.booleanValue,e.booleanValue);case 2:return function(i,o){const a=tt(i.integerValue||i.doubleValue),u=tt(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,e);case 3:return pf(n.timestampValue,e.timestampValue);case 4:return pf(Ys(n),Ys(e));case 5:return El(n.stringValue,e.stringValue);case 6:return function(i,o){const a=kr(i),u=kr(o);return a.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let l=0;l<a.length&&l<u.length;l++){const h=ve(a[l],u[l]);if(h!==0)return h}return ve(a.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ve(tt(i.latitude),tt(o.latitude));return a!==0?a:ve(tt(i.longitude),tt(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return gf(n.arrayValue,e.arrayValue);case 10:return function(i,o){var C,I,v,V;const a=i.fields||{},u=o.fields||{},l=(C=a[go])==null?void 0:C.arrayValue,h=(I=u[go])==null?void 0:I.arrayValue,f=ve(((v=l==null?void 0:l.values)==null?void 0:v.length)||0,((V=h==null?void 0:h.values)==null?void 0:V.length)||0);return f!==0?f:gf(l,h)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===va.mapValue&&o===va.mapValue)return 0;if(i===va.mapValue)return 1;if(o===va.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),l=o.fields||{},h=Object.keys(l);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const C=El(u[f],h[f]);if(C!==0)return C;const I=Zt(a[u[f]],l[h[f]]);if(I!==0)return I}return ve(u.length,h.length)}(n.mapValue,e.mapValue);default:throw Be(23264,{u:t})}}function pf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ve(n,e);const t=br(n),r=br(e),s=ve(t.seconds,r.seconds);return s!==0?s:ve(t.nanos,r.nanos)}function gf(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Zt(t[s],r[s]);if(i!==void 0&&i!==0)return i}return ve(t.length,r.length)}function ei(n){return _l(n)}function _l(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=br(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return kr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ce.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=_l(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${_l(t.fields[o])}`;return s+"}"}(n.mapValue):Be(61005,{value:n})}function qa(n){switch(ht(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Go(n);return e?16+qa(e):16;case 5:return 2*n.stringValue.length;case 6:return kr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+qa(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return $r(r.fields,(i,o)=>{s+=i.length+qa(o)}),s}(n.mapValue);default:throw Be(13486,{value:n})}}function mf(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Sn(n){return!!n&&"integerValue"in n}function as(n){return!!n&&"doubleValue"in n}function Lr(n){return Sn(n)||as(n)}function ti(n){return!!n&&"arrayValue"in n}function an(n){return!!n&&"nullValue"in n}function en(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Bs(n){return!!n&&"mapValue"in n}function ic(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[wg])==null?void 0:r.stringValue)===Tg}function Dl(n){var e,t;return(t=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[go])==null?void 0:t.arrayValue}function Zi(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return $r(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Zi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Zi(n.arrayValue.values[t]);return e}return{...n}}function _A(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===EA}/**
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
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Bs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zi(t)}setAll(e){let t=zt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=Zi(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Bs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Bs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){$r(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(Zi(this.value))}}function yg(n){const e=[];return $r(n.fields,(t,r)=>{const s=new zt([t]);if(Bs(r)){const i=yg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new on(e)}/**
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
 */function qc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:po(e)?"-0":e}}function mB(n){return{integerValue:""+n}}function EB(n,e,t){return gA(e)?mB(e):qc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Jc{constructor(){this._=void 0}}function DA(n,e,t){return n instanceof Eo?function(s,i){const o={fields:{[_g]:{stringValue:Eg},[Ig]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Gc(i)&&(i=Go(i)),i&&(o.fields[Dg]=i),{mapValue:o}}(t,e):n instanceof _o?Rg(n,e):n instanceof Do?vg(n,e):n instanceof Io?function(s,i){const o=Ag(s,i),a=cc(o)+cc(s.l);return Sn(o)&&Sn(s.l)?mB(a):qc(s.serializer,a)}(n,e):n instanceof oc?function(s,i){return Ef(s,i,Math.min)}(n,e):n instanceof ac?function(s,i){return Ef(s,i,Math.max)}(n,e):void 0}function IA(n,e,t){return n instanceof _o?Rg(n,e):n instanceof Do?vg(n,e):t}function Ag(n,e){return n instanceof Io?Lr(e)?e:{integerValue:0}:null}class Eo extends Jc{}class _o extends Jc{constructor(e){super(),this.elements=e}}function Rg(n,e){const t=Sg(e);for(const r of n.elements)t.some(s=>fn(s,r))||t.push(r);return{arrayValue:{values:t}}}class Do extends Jc{constructor(e){super(),this.elements=e}}function vg(n,e){let t=Sg(e);for(const r of n.elements)t=t.filter(s=>!fn(s,r));return{arrayValue:{values:t}}}class _B extends Jc{constructor(e,t){super(),this.serializer=e,this.l=t}}class Io extends _B{}class oc extends _B{}class ac extends _B{}function Ef(n,e,t){if(!Lr(e))return n.l;const r=t(cc(e),cc(n.l));return Sn(e)&&Sn(n.l)?mB(r):qc(n.serializer,r)}function cc(n){return tt(n.integerValue||n.doubleValue)}function Sg(n){return ti(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class wA{constructor(e,t){this.field=e,this.transform=t}}function TA(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof _o&&s instanceof _o||r instanceof Do&&s instanceof Do?Qs(r.elements,s.elements,fn):r instanceof Io&&s instanceof Io||r instanceof oc&&s instanceof oc||r instanceof ac&&s instanceof ac?fn(r.l,s.l):r instanceof Eo&&s instanceof Eo}(n.transform,e.transform)}class yA{constructor(e,t){this.version=e,this.transformResults=t}}class hn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new hn}static exists(e){return new hn(void 0,e)}static updateTime(e){return new hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ja(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class jc{}function Pg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new DB(n.key,hn.none()):new Ho(n.key,n.data,hn.none());{const t=n.data,r=kt.empty();let s=new Bt(zt.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new zr(n.key,r,new on(s.toArray()),hn.none())}}function AA(n,e,t){n instanceof Ho?function(s,i,o){const a=s.value.clone(),u=Df(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof zr?function(s,i,o){if(!Ja(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Df(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Ng(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function eo(n,e,t,r){return n instanceof Ho?function(i,o,a,u){if(!Ja(i.precondition,o))return a;const l=i.value.clone(),h=If(i.fieldTransforms,u,o);return l.setAll(h),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,e,t,r):n instanceof zr?function(i,o,a,u){if(!Ja(i.precondition,o))return a;const l=If(i.fieldTransforms,u,o),h=o.data;return h.setAll(Ng(i)),h.setAll(l),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(n,e,t,r):function(i,o,a){return Ja(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function RA(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Ag(r.transform,s||null);i!=null&&(t===null&&(t=kt.empty()),t.set(r.field,i))}return t||null}function _f(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Qs(r,s,(i,o)=>TA(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ho extends jc{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class zr extends jc{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ng(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Df(n,e,t){const r=new Map;oe(n.length===t.length,32656,{h:t.length,T:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,IA(o,a,t[s]))}return r}function If(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,DA(i,o,e))}return r}class DB extends jc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vA extends jc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class uc{constructor(e,t){this.position=e,this.inclusive=t}}function wf(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=ce.comparator(ce.fromName(o.referenceValue),t.key):r=Zt(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!fn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Og{}class ut extends Og{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new PA(e,t,r):t==="array-contains"?new bA(e,r):t==="in"?new kA(e,r):t==="not-in"?new LA(e,r):t==="array-contains-any"?new FA(e,r):new ut(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new NA(e,r):new OA(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Zt(t,this.value)):t!==null&&ht(this.value)===ht(t)&&this.matchesComparison(Zt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Be(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _n extends Og{constructor(e,t){super(),this.filters=e,this.op=t,this.P=null}static create(e,t){return new _n(e,t)}matches(e){return bg(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.P!==null||(this.P=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.P}getFilters(){return Object.assign([],this.filters)}}function bg(n){return n.op==="and"}function kg(n){return SA(n)&&bg(n)}function SA(n){for(const e of n.filters)if(e instanceof _n)return!1;return!0}function Il(n){if(n instanceof ut)return n.field.canonicalString()+n.op.toString()+ei(n.value);if(kg(n))return n.filters.map(e=>Il(e)).join(",");{const e=n.filters.map(t=>Il(t)).join(",");return`${n.op}(${e})`}}function Lg(n,e){return n instanceof ut?function(r,s){return s instanceof ut&&r.op===s.op&&r.field.isEqual(s.field)&&fn(r.value,s.value)}(n,e):n instanceof _n?function(r,s){return s instanceof _n&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Lg(o,s.filters[a]),!0):!1}(n,e):void Be(19439)}function Fg(n){return n instanceof ut?function(t){return`${t.field.canonicalString()} ${t.op} ${ei(t.value)}`}(n):n instanceof _n?function(t){return t.op.toString()+" {"+t.getFilters().map(Fg).join(" ,")+"}"}(n):"Filter"}class PA extends ut{constructor(e,t,r){super(e,t,r),this.key=ce.fromName(r.referenceValue)}matches(e){const t=ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class NA extends ut{constructor(e,t){super(e,"in",t),this.keys=Mg("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class OA extends ut{constructor(e,t){super(e,"not-in",t),this.keys=Mg("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Mg(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>ce.fromName(r.referenceValue))}class bA extends ut{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ti(t)&&mo(t.arrayValue,this.value)}}class kA extends ut{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&mo(this.value.arrayValue,t)}}class LA extends ut{constructor(e,t){super(e,"not-in",t)}matches(e){if(mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!mo(this.value.arrayValue,t)}}class FA extends ut{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ti(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>mo(this.value.arrayValue,r))}}/**
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
 */class wo{constructor(e,t="asc"){this.field=e,this.dir=t}}function MA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new Je(0,0))}static max(){return new Ee(new Je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class St{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new St(e,0,Ee.min(),Ee.min(),Ee.min(),kt.empty(),0)}static newFoundDocument(e,t,r,s){return new St(e,1,t,Ee.min(),r,s,0)}static newNoDocument(e,t){return new St(e,2,t,Ee.min(),Ee.min(),kt.empty(),0)}static newUnknownDocument(e,t){return new St(e,3,t,Ee.min(),Ee.min(),kt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof St&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */const To=-1;function VA(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Ee.fromTimestamp(r===1e9?new Je(t+1,0):new Je(t,r));return new Fr(s,ce.empty(),e)}function xA(n){return new Fr(n.readTime,n.key,To)}class Fr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Fr(Ee.min(),ce.empty(),To)}static max(){return new Fr(Ee.max(),ce.empty(),To)}}function UA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ce.comparator(n.documentKey,e.documentKey),t!==0?t:ve(n.largestBatchId,e.largestBatchId))}/**
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
 */class GA{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.R=null}}function yf(n,e=null,t=[],r=[],s=null,i=null,o=null){return new GA(n,e,t,r,s,i,o)}function Vg(n){const e=_e(n);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Il(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Hc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ei(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ei(r)).join(",")),e.R=t}return e.R}function xg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!MA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Lg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Tf(n.startAt,e.startAt)&&Tf(n.endAt,e.endAt)}function rs(n){return!!n.isCorePipeline}function Ug(n){return!!n.path&&ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class hi{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.I=null,this.A=null,this.V=null,this.startAt,this.endAt}}function HA(n,e,t,r,s,i,o,a){return new hi(n,e,t,r,s,i,o,a)}function Kc(n){return new hi(n)}function Af(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function qA(n){return ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Gg(n){return n.collectionGroup!==null}function to(n){const e=_e(n);if(e.I===null){e.I=[];const t=new Set;for(const i of e.explicitOrderBy)e.I.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Bt(zt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.I.push(new wo(i,r))}),t.has(zt.keyField().canonicalString())||e.I.push(new wo(zt.keyField(),r))}return e.I}function Nn(n){const e=_e(n);return e.A||(e.A=JA(e,to(n))),e.A}function JA(n,e){if(n.limitType==="F")return yf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new wo(s.field,i)});const t=n.endAt?new uc(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new uc(n.startAt.position,n.startAt.inclusive):null;return yf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function wl(n,e){const t=n.filters.concat([e]);return new hi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function jA(n,e){const t=n.explicitOrderBy.concat([e]);return new hi(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function lc(n,e,t){return new hi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function KA(n,e){return xg(Nn(n),Nn(e))&&n.limitType===e.limitType}function no(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Fg(s)).join(", ")}]`),Hc(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>ei(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>ei(s)).join(",")),`Target(${r})`}(Nn(n))}; limitType=${n.limitType})`}function $c(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ce.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of to(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,a,u){const l=wf(o,a,u);return o.inclusive?l<=0:l<0}(r.startAt,to(r),s)||r.endAt&&!function(o,a,u){const l=wf(o,a,u);return o.inclusive?l>=0:l>0}(r.endAt,to(r),s))}(n,e)}function IB(n){return(e,t)=>{let r=!1;for(const s of to(n)){const i=$A(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function $A(n,e,t){const r=n.field.isKeyField()?ce.comparator(e.key,t.key):function(i,o,a){const u=o.data.field(i),l=a.data.field(i);return u!==null&&l!==null?Zt(u,l):Be(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Be(19790,{direction:n.dir})}}/**
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
 */class zA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ot,Ne;function WA(n){switch(n){case M.OK:return Be(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return Be(15467,{code:n})}}function Hg(n){if(n===void 0)return sr("GRPC error has no .code"),M.UNKNOWN;switch(n){case ot.OK:return M.OK;case ot.CANCELLED:return M.CANCELLED;case ot.UNKNOWN:return M.UNKNOWN;case ot.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case ot.INTERNAL:return M.INTERNAL;case ot.UNAVAILABLE:return M.UNAVAILABLE;case ot.UNAUTHENTICATED:return M.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case ot.NOT_FOUND:return M.NOT_FOUND;case ot.ALREADY_EXISTS:return M.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return M.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case ot.ABORTED:return M.ABORTED;case ot.OUT_OF_RANGE:return M.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return M.UNIMPLEMENTED;case ot.DATA_LOSS:return M.DATA_LOSS;default:return Be(39323,{code:n})}}(Ne=ot||(ot={}))[Ne.OK=0]="OK",Ne[Ne.CANCELLED=1]="CANCELLED",Ne[Ne.UNKNOWN=2]="UNKNOWN",Ne[Ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ne[Ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ne[Ne.NOT_FOUND=5]="NOT_FOUND",Ne[Ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ne[Ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ne[Ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ne[Ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ne[Ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ne[Ne.ABORTED=10]="ABORTED",Ne[Ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ne[Ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ne[Ne.INTERNAL=13]="INTERNAL",Ne[Ne.UNAVAILABLE=14]="UNAVAILABLE",Ne[Ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Es{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){$r(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Cg(this.inner)}size(){return this.innerSize}}/**
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
 */const QA=new et(ce.comparator);function Kt(){return QA}const qg=new et(ce.comparator);function Ls(...n){let e=qg;for(const t of n)e=e.insert(t.key,t);return e}function Jg(n){let e=qg;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Dr(){return ro()}function jg(){return ro()}function ro(){return new Es(n=>n.toString(),(n,e)=>n.isEqual(e))}const YA=new et(ce.comparator),XA=new Bt(ce.comparator);function Ae(...n){let e=XA;for(const t of n)e=e.add(t);return e}const ZA=new Bt(ve);function eR(){return ZA}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function tR(){return new TextEncoder}/**
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
 */const nR=new Ar([4294967295,4294967295],0);function Rf(n){const e=tR().encode(n),t=new ng;return t.update(e),new Uint8Array(t.digest())}function vf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ar([t,r],0),new Ar([s,i],0)]}class wB{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ki(`Invalid padding: ${t}`);if(r<0)throw new Ki(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ki(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ki(`Invalid padding when bitmap length is 0: ${t}`);this.m=8*e.length-t,this.p=Ar.fromNumber(this.m)}v(e,t,r){let s=e.add(t.multiply(Ar.fromNumber(r)));return s.compare(nR)===1&&(s=new Ar([s.getBits(0),s.getBits(1)],0)),s.modulo(this.p).toNumber()}S(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.m===0)return!1;const t=Rf(e),[r,s]=vf(t);for(let i=0;i<this.hashCount;i++){const o=this.v(r,s,i);if(!this.S(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new wB(i,s,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.m===0)return;const t=Rf(e),[r,s]=vf(t);for(let i=0;i<this.hashCount;i++){const o=this.v(r,s,i);this.D(o)}}D(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ki extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class qo{constructor(e,t,r,s,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Jo.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new qo(Ee.min(),s,new et(ve),Kt(),Kt(),Ae())}}class Jo{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Jo(r,t,Ae(),Ae(),Ae())}}/**
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
 */class ja{constructor(e,t,r,s){this.C=e,this.removedTargetIds=t,this.key=r,this.F=s}}class Kg{constructor(e,t){this.targetId=e,this.O=t}}class $g{constructor(e,t,r=it.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Sf{constructor(e){this.targetId=e,this.M=0,this.N=Pf(),this.L=it.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get k(){return this.M!==0}get q(){return this.U}$(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}K(){let e=Ae(),t=Ae(),r=Ae();return this.N.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Be(38017,{changeType:i})}}),new Jo(this.L,this.B,e,t,r)}W(){this.U=!1,this.N=Pf()}G(e,t){this.U=!0,this.N=this.N.insert(e,t)}j(e){this.U=!0,this.N=this.N.remove(e)}H(){this.M+=1}J(){this.M-=1,oe(this.M>=0,3241,{M:this.M,targetId:this.targetId})}Y(){this.U=!0,this.B=!0}}const Ui="WatchChangeAggregator";class rR{constructor(e){this.Z=e,this.X=new Map,this.ee=Kt(),this.te=Sa(),this.ne=Kt(),this.re=Sa(),this.ie=new et(ve)}se(e){for(const t of e.C)e.F&&e.F.isFoundDocument()?this._e(t,e.F):this.oe(t,e.key,e.F);for(const t of e.removedTargetIds)this.oe(t,e.key,e.F)}ae(e){this.forEachTarget(e,t=>{const r=this.X.get(t);if(r)switch(e.state){case 0:this.ue(t)&&r.$(e.resumeToken);break;case 1:r.J(),r.k||r.W(),r.$(e.resumeToken);break;case 2:r.J(),r.k||this.removeTarget(t);break;case 3:this.ue(t)&&(r.Y(),r.$(e.resumeToken));break;case 4:this.ue(t)&&(this.ce(t),r.$(e.resumeToken));break;default:Be(56790,{state:e.state})}else Z(Ui,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.X.forEach((r,s)=>{this.ue(s)&&t(s)})}le(e){var t;return rs(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:Ug(e)}Ee(e){const t=e.targetId,r=e.O.count,s=this.he(t);if(s){const i=s.target;if(this.le(i))if(r===0){const o=new ce(rs(i)?Me.fromString(i.getPipelineDocuments()[0]):i.path);this.oe(t,o,St.newNoDocument(o,Ee.min()))}else oe(r===1,20013,"Single document existence filter with count: "+r);else{const o=this.Te(t);if(o!==r){const a=this.Pe(e),u=a?this.Re(a,e,o):1;if(u!==0){this.ce(t);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.ie=this.ie.insert(t,l)}}}}}Pe(e){const t=e.O.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=kr(r).toUint8Array()}catch(u){if(u instanceof mg)return En("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new wB(o,s,i)}catch(u){return En(u instanceof Ki?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.m===0?null:a}Re(e,t,r){return t.O.count===r-this.Ve(e,t.targetId)?0:2}Ve(e,t){const r=this.Z.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Z.Ae(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.oe(t,i,null),s++)}),s}de(e){const t=new Map;this.X.forEach((i,o)=>{const a=this.he(o);if(a){if(i.current&&this.le(a.target)){const u=rs(a.target)?Me.fromString(a.target.getPipelineDocuments()[0]):a.target.path,l=new ce(u);this.fe(l).has(o)||this.me(o,l)||this.oe(o,l,St.newNoDocument(l,e))}i.q&&(t.set(o,i.K()),i.W())}});let r=Ae();this.re.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.he(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ee.forEach((i,o)=>o.setReadTime(e)),this.ne.forEach((i,o)=>o.setReadTime(e));const s=new qo(e,t,this.ie,this.ee,this.ne,r);return this.ee=Kt(),this.te=Sa(),this.ne=Kt(),this.re=Sa(),this.ie=new et(ve),s}_e(e,t){const r=this.X.get(e);if(!r||!this.ue(e))return void Z(Ui,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.me(e,t.key)?2:0;r.G(t.key,s),rs(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t.key,t):this.ee=this.ee.insert(t.key,t),this.te=this.te.insert(t.key,this.fe(t.key).add(e)),this.re=this.re.insert(t.key,this.pe(t.key).add(e))}oe(e,t,r){const s=this.X.get(e);s&&this.ue(e)?(this.me(e,t)?s.G(t,1):s.j(t),this.re=this.re.insert(t,this.pe(t).delete(e)),this.re=this.re.insert(t,this.pe(t).add(e)),r&&(rs(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t,r):this.ee=this.ee.insert(t,r))):Z(Ui,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.X.delete(e)}Te(e){const t=this.X.get(e);if(!t)return 0;const r=t.K();return this.Z.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}H(e){let t=this.X.get(e);t||(Z(Ui,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Sf(e),this.X.set(e,t)),t.H()}pe(e){let t=this.re.get(e);return t||(t=new Bt(ve),this.re=this.re.insert(e,t)),t}fe(e){let t=this.te.get(e);return t||(t=new Bt(ve),this.te=this.te.insert(e,t)),t}ue(e){const t=this.he(e)!==null;return t||Z(Ui,"Detected inactive target",e),t}he(e){const t=this.X.get(e);return t===void 0||t.k?null:this.Z.ge(e)}ce(e){this.X.set(e,new Sf(e)),this.Z.getRemoteKeysForTarget(e).forEach(t=>{this.oe(e,t,null)})}me(e,t){return this.Z.getRemoteKeysForTarget(e).has(t)}}function Sa(){return new et(ce.comparator)}function Pf(){return new et(ce.comparator)}const sR={asc:"ASCENDING",desc:"DESCENDING"},iR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oR={and:"AND",or:"OR"};class aR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Tl(n,e){return n.useProto3Json||Hc(e)?e:{value:e}}function Bc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function TB(n){const e=br(n);return new Je(e.seconds,e.nanos)}function zg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ka(n,e){return Bc(n,e.toTimestamp())}function On(n){return oe(!!n,49232),Ee.fromTimestamp(TB(n))}function yB(n,e){return yl(n,e).canonicalString()}function yl(n,e){const t=function(s){return new Me(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Wg(n){const e=Me.fromString(n);return oe(em(e),10190,{key:e.toString()}),e}function hc(n,e){return yB(n.databaseId,e.path)}function zu(n,e){const t=Wg(e);if(t.get(1)!==n.databaseId.projectId)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ce(Yg(t))}function Qg(n,e){return yB(n.databaseId,e)}function cR(n){const e=Wg(n);return e.length===4?Me.emptyPath():Yg(e)}function Al(n){return new Me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Yg(n){return oe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Nf(n,e,t){return{name:hc(n,e),fields:t.value.mapValue.fields}}function uR(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Be(39313,{state:l})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,h){return l.useProto3Json?(oe(h===void 0||typeof h=="string",58123),it.fromBase64String(h||"")):(oe(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),it.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const h=l.code===void 0?M.UNKNOWN:Hg(l.code);return new $(h,l.message||"")}(o);t=new $g(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=zu(n,r.document.name),i=On(r.document.updateTime),o=r.document.createTime?On(r.document.createTime):Ee.min(),a=new kt({mapValue:{fields:r.document.fields}}),u=St.newFoundDocument(s,i,o,a),l=r.targetIds||[],h=r.removedTargetIds||[];t=new ja(l,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=zu(n,r.document),i=r.readTime?On(r.readTime):Ee.min(),o=St.newNoDocument(s,i),a=r.removedTargetIds||[];t=new ja([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=zu(n,r.document),i=r.removedTargetIds||[];t=new ja([],i,s,null)}else{if(!("filter"in e))return Be(11601,{ye:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new zA(s,i),a=r.targetId;t=new Kg(a,o)}}return t}function lR(n,e){let t;if(e instanceof Ho)t={update:Nf(n,e.key,e.value)};else if(e instanceof DB)t={delete:hc(n,e.key)};else if(e instanceof zr)t={update:Nf(n,e.key,e.data),updateMask:_R(e.fieldMask)};else{if(!(e instanceof vA))return Be(16599,{we:e.type});t={verify:hc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Eo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof _o)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Do)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Io)return{fieldPath:o.field.canonicalString(),increment:a.l};if(a instanceof oc)return{fieldPath:o.field.canonicalString(),minimum:a.l};if(a instanceof ac)return{fieldPath:o.field.canonicalString(),maximum:a.l};throw Be(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Ka(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Be(27497)}(n,e.precondition)),t}function BR(n,e){return n&&n.length>0?(oe(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?On(s.updateTime):On(i);return o.isEqual(Ee.min())&&(o=On(i)),new yA(o,s.transformResults||[])}(t,e))):[]}function hR(n,e){return{documents:[Qg(n,e.path)]}}function dR(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Qg(n,s);const i=function(l){if(l.length!==0)return Zg(_n.create(l,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(h=>function(C){return{field:Fs(C.field),direction:gR(C.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Tl(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{be:t,parent:s}}function fR(n){let e=cR(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){oe(r===1,65062);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(f){const C=Xg(f);return C instanceof _n&&kg(C)?C.getFilters():[C]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(C=>function(v){return new wo(Ms(v.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(C))}(t.orderBy));let a=null;t.limit&&(a=function(f){let C;return C=typeof f=="object"?f.value:f,Hc(C)?null:C}(t.limit));let u=null;t.startAt&&(u=function(f){const C=!!f.before,I=f.values||[];return new uc(I,C)}(t.startAt));let l=null;return t.endAt&&(l=function(f){const C=!f.before,I=f.values||[];return new uc(I,C)}(t.endAt)),HA(e,s,o,i,a,"F",u,l)}function CR(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Be(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function pR(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(n))}}}}function Xg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ms(t.unaryFilter.field);return ut.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ms(t.unaryFilter.field);return ut.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ms(t.unaryFilter.field);return ut.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ms(t.unaryFilter.field);return ut.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Be(61313);default:return Be(60726)}}(n):n.fieldFilter!==void 0?function(t){return ut.create(Ms(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Be(58110);default:return Be(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return _n.create(t.compositeFilter.filters.map(r=>Xg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Be(1026)}}(t.compositeFilter.op))}(n):Be(30097,{filter:n})}function gR(n){return sR[n]}function mR(n){return iR[n]}function ER(n){return oR[n]}function Fs(n){return{fieldPath:n.canonicalString()}}function Ms(n){return zt.fromServerFormat(n.fieldPath)}function Zg(n){return n instanceof ut?function(t){if(t.op==="=="){if(en(t.value))return{unaryFilter:{field:Fs(t.field),op:"IS_NAN"}};if(an(t.value))return{unaryFilter:{field:Fs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(en(t.value))return{unaryFilter:{field:Fs(t.field),op:"IS_NOT_NAN"}};if(an(t.value))return{unaryFilter:{field:Fs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fs(t.field),op:mR(t.op),value:t.value}}}(n):n instanceof _n?function(t){const r=t.getFilters().map(s=>Zg(s));return r.length===1?r[0]:{compositeFilter:{op:ER(t.op),filters:r}}}(n):Be(54877,{filter:n})}function _R(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function em(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function tm(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function yo(n,e){const t={fields:{}};return e.forEach((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=r._toProto(n)}),{mapValue:t}}function nm(n){return{stringValue:n}}/**
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
 */function zc(n){return new aR(n,!0)}/**
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
 */class sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sn(it.fromBase64String(e))}catch(t){throw new $(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new sn(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:sn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Uo(e,sn._jsonSchema))return sn.fromBase64String(e.bytes)}}sn._jsonSchemaVersion="firestore/bytes/1.0",sn._jsonSchema={type:lt("string",sn._jsonSchemaVersion),bytes:lt("string")};/**
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
 */class jo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new zt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function rm(){return new jo(vn)}/**
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
 */class Ko{constructor(e){this._methodName=e}}/**
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
 */class mn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:mn._jsonSchemaVersion}}static fromJSON(e){if(Uo(e,mn._jsonSchema))return new mn(e.latitude,e.longitude)}}mn._jsonSchemaVersion="firestore/geoPoint/1.0",mn._jsonSchema={type:lt("string",mn._jsonSchemaVersion),latitude:lt("number"),longitude:lt("number")};/**
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
 */class qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qt.UNAUTHENTICATED=new qt(null),qt.GOOGLE_CREDENTIALS=new qt("google-credentials-uid"),qt.FIRST_PARTY=new qt("first-party-uid"),qt.MOCK_USER=new qt("mock-user");/**
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
 */class Xn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class DR{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(qt.UNAUTHENTICATED))}shutdown(){}}class IR{constructor(e){this.Se=e,this.currentUser=qt.UNAUTHENTICATED,this.De=0,this.forceRefresh=!1,this.auth=null}start(e,t){oe(this.xe===void 0,42304);let r=this.De;const s=u=>this.De!==r?(r=this.De,t(u)):Promise.resolve();let i=new Xn;this.xe=()=>{this.De++,this.currentUser=this.Ce(),i.resolve(),i=new Xn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.xe&&(this.auth.addAuthTokenListener(this.xe),o())};this.Se.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.Se.getImmediate({optional:!0});u?a(u):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Xn)}},0),o()}getToken(){const e=this.De,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.De!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{Fe:r}),new DR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.xe&&this.auth.removeAuthTokenListener(this.xe),this.xe=void 0}Ce(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{Oe:e}),new qt(e)}}class wR{constructor(e,t,r){this.Me=e,this.Ne=t,this.Le=r,this.type="FirstParty",this.user=qt.FIRST_PARTY,this.Be=new Map}Ue(){return this.Le?this.Le():null}get headers(){this.Be.set("X-Goog-AuthUser",this.Me);const e=this.Ue();return e&&this.Be.set("Authorization",e),this.Ne&&this.Be.set("X-Goog-Iam-Authorization-Token",this.Ne),this.Be}}class TR{constructor(e,t,r){this.Me=e,this.Ne=t,this.Le=r}getToken(){return Promise.resolve(new wR(this.Me,this.Ne,this.Le))}start(e,t){e.enqueueRetryable(()=>t(qt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Of{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yR{constructor(e,t){this.ke=t,this.forceRefresh=!1,this.appCheck=null,this.qe=null,this.$e=null,Qe(e)&&e.settings.appCheckToken&&(this.$e=e.settings.appCheckToken)}start(e,t){oe(this.xe===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.qe;return this.qe=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.xe=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.xe&&this.appCheck.addTokenListener(this.xe)};this.ke.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.ke.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.$e)return Promise.resolve(new Of(this.$e));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(oe(typeof t.token=="string",44558,{tokenResult:t}),this.qe=t.token,new Of(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.xe&&this.appCheck.removeTokenListener(this.xe),this.xe=void 0}}function im(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */class AR{Ke(e){}shutdown(){}}/**
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
 */const bf="ConnectivityMonitor";class kf{constructor(){this.We=()=>this.Qe(),this.Ge=()=>this.ze(),this.je=[],this.He()}Ke(e){this.je.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.Ge)}He(){window.addEventListener("online",this.We),window.addEventListener("offline",this.Ge)}Qe(){Z(bf,"Network connectivity changed: AVAILABLE");for(const e of this.je)e(0)}ze(){Z(bf,"Network connectivity changed: UNAVAILABLE");for(const e of this.je)e(1)}static Je(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Pa=null;function Rl(){return Pa===null?Pa=function(){return 268435456+Math.round(2147483648*Math.random())}():Pa++,"0x"+Pa.toString(16)}/**
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
 */const Wu="RestConnection",RR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class vR{get Ye(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ze=t+"://"+e.host,this.Xe=`projects/${r}/databases/${s}`,this.et=this.databaseId.database===sc?`project_id=${r}`:`project_id=${r}&database_id=${s}`}tt(e,t,r,s,i){const o=Rl(),a=this.nt(e,t.toUriEncodedString());Z(Wu,`Sending RPC '${e}' ${o}:`,a,r);const u={"google-cloud-resource-prefix":this.Xe,"x-goog-request-params":this.et};this.rt(u,s,i);const{host:l}=new URL(a),h=ii(l);return this.it(e,a,u,r,h).then(f=>(Z(Wu,`Received RPC '${e}' ${o}: `,f),f),f=>{throw En(Wu,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",r),f})}st(e,t,r,s,i,o){return this.tt(e,t,r,s,i)}rt(e,t,r){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}nt(e,t){const r=RR[e];let s=`${this.Ze}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class SR{constructor(e){this._t=e._t,this.ot=e.ot}ut(e){this.ct=e}lt(e){this.Et=e}ht(e){this.Tt=e}onMessage(e){this.Pt=e}close(){this.ot()}send(e){this._t(e)}Rt(){this.ct()}It(){this.Et()}At(e){this.Tt(e)}Vt(e){this.Pt(e)}}/**
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
 */const vt="WebChannelConnection",Gi=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Js extends vR{constructor(e){super(e),this.dt=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static ft(){if(!Js.gt){const e=og();Gi(e,ig.STAT_EVENT,t=>{t.stat===Cl.PROXY?Z(vt,"STAT_EVENT: detected buffering proxy"):t.stat===Cl.NOPROXY&&Z(vt,"STAT_EVENT: detected no buffering proxy")}),Js.gt=!0}}it(e,t,r,s,i){const o=Rl();return new Promise((a,u)=>{const l=new rg;l.setWithCredentials(!0),l.listenOnce(sg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ha.NO_ERROR:const f=l.getResponseJson();Z(vt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case Ha.TIMEOUT:Z(vt,`RPC '${e}' ${o} timed out`),u(new $(M.DEADLINE_EXCEEDED,"Request time out"));break;case Ha.HTTP_ERROR:const C=l.getStatus();if(Z(vt,`RPC '${e}' ${o} failed with status:`,C,"response text:",l.getResponseText()),C>0){let I=l.getResponseJson();Array.isArray(I)&&(I=I[0]);const v=I==null?void 0:I.error;if(v&&v.status&&v.message){const V=function(Y){const ie=Y.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(ie)>=0?ie:M.UNKNOWN}(v.status);u(new $(V,v.message))}else u(new $(M.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new $(M.UNAVAILABLE,"Connection failed."));break;default:Be(9055,{yt:e,streamId:o,wt:l.getLastErrorCode(),bt:l.getLastError()})}}finally{Z(vt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);Z(vt,`RPC '${e}' ${o} sending request:`,s),l.send(t,"POST",h,r,15)})}vt(e,t,r){const s=Rl(),i=[this.Ze,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.useFetchStreams=!0),this.rt(a.initMessageHeaders,t,r),a.encodeInitMessageHeaders=!0;const l=i.join("");Z(vt,`Creating RPC '${e}' stream ${s}: ${l}`,a);const h=o.createWebChannel(l,a);this.St(h);let f=!1,C=!1;const I=new SR({_t:v=>{C?Z(vt,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(f||(Z(vt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),Z(vt,`RPC '${e}' stream ${s} sending:`,v),h.send(v))},ot:()=>h.close()});return Gi(h,ji.EventType.OPEN,()=>{C||(Z(vt,`RPC '${e}' stream ${s} transport opened.`),I.Rt())}),Gi(h,ji.EventType.CLOSE,()=>{C||(C=!0,Z(vt,`RPC '${e}' stream ${s} transport closed`),I.At(),this.Dt(h))}),Gi(h,ji.EventType.ERROR,v=>{C||(C=!0,En(vt,`RPC '${e}' stream ${s} transport errored. Name:`,v.name,"Message:",v.message),I.At(new $(M.UNAVAILABLE,"The operation could not be completed")))}),Gi(h,ji.EventType.MESSAGE,v=>{var V;if(!C){const H=v.data[0];oe(!!H,16349);const Y=H,ie=(Y==null?void 0:Y.error)||((V=Y[0])==null?void 0:V.error);if(ie){Z(vt,`RPC '${e}' stream ${s} received error:`,ie);const ye=ie.status;let Te=function(A){const E=ot[A];if(E!==void 0)return Hg(E)}(ye),Le=ie.message;ye==="NOT_FOUND"&&Le.includes("database")&&Le.includes("does not exist")&&Le.includes(this.databaseId.database)&&En(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Te===void 0&&(Te=M.INTERNAL,Le="Unknown error status: "+ye+" with message "+ie.message),C=!0,I.At(new $(Te,Le)),h.close()}else Z(vt,`RPC '${e}' stream ${s} received:`,H),I.Vt(H)}}),Js.ft(),setTimeout(()=>{I.It()},0),I}terminate(){this.dt.forEach(e=>e.close()),this.dt=[]}St(e){this.dt.push(e)}Dt(e){this.dt=this.dt.filter(t=>t===e)}rt(e,t,r){super.rt(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return ag()}}/**
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
 */function PR(n){return new Js(n)}Js.gt=!1;class om{constructor(e,t,r=1e3,s=1.5,i=6e4){this.xt=e,this.timerId=t,this.Ct=r,this.Ft=s,this.Ot=i,this.Mt=0,this.Nt=null,this.Lt=Date.now(),this.reset()}reset(){this.Mt=0}Bt(){this.Mt=this.Ot}Ut(e){this.cancel();const t=Math.floor(this.Mt+this.kt()),r=Math.max(0,Date.now()-this.Lt),s=Math.max(0,t-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Mt} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Nt=this.xt.enqueueAfterDelay(this.timerId,s,()=>(this.Lt=Date.now(),e())),this.Mt*=this.Ft,this.Mt<this.Ct&&(this.Mt=this.Ct),this.Mt>this.Ot&&(this.Mt=this.Ot)}qt(){this.Nt!==null&&(this.Nt.skipDelay(),this.Nt=null)}cancel(){this.Nt!==null&&(this.Nt.cancel(),this.Nt=null)}kt(){return(Math.random()-.5)*this.Mt}}/**
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
 */const Lf="PersistentStream";class am{constructor(e,t,r,s,i,o,a,u){this.xt=e,this.$t=r,this.Kt=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Wt=0,this.Qt=null,this.Gt=null,this.stream=null,this.zt=0,this.jt=new om(e,t)}Ht(){return this.state===1||this.state===5||this.Jt()}Jt(){return this.state===2||this.state===3}start(){this.zt=0,this.state!==4?this.auth():this.Yt()}async stop(){this.Ht()&&await this.close(0)}Zt(){this.state=0,this.jt.reset()}Xt(){this.Jt()&&this.Qt===null&&(this.Qt=this.xt.enqueueAfterDelay(this.$t,6e4,()=>this.en()))}tn(e){this.nn(),this.stream.send(e)}async en(){if(this.Jt())return this.close(0)}nn(){this.Qt&&(this.Qt.cancel(),this.Qt=null)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}async close(e,t){this.nn(),this.rn(),this.jt.cancel(),this.Wt++,e!==4?this.jt.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(sr(t.toString()),sr("Using maximum backoff delay to prevent overloading the backend."),this.jt.Bt()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.sn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ht(t)}sn(){}auth(){this.state=1;const e=this._n(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wt===t&&this.an(r,s)},r=>{e(()=>{const s=new $(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.un(s)})})}an(e,t){const r=this._n(this.Wt);this.stream=this.cn(e,t),this.stream.ut(()=>{r(()=>this.listener.ut())}),this.stream.lt(()=>{r(()=>(this.state=2,this.Gt=this.xt.enqueueAfterDelay(this.Kt,1e4,()=>(this.Jt()&&(this.state=3),Promise.resolve())),this.listener.lt()))}),this.stream.ht(s=>{r(()=>this.un(s))}),this.stream.onMessage(s=>{r(()=>++this.zt==1?this.En(s):this.onNext(s))})}Yt(){this.state=5,this.jt.Ut(async()=>{this.state=0,this.start()})}un(e){return Z(Lf,`close with error: ${e}`),this.stream=null,this.close(4,e)}_n(e){return t=>{this.xt.enqueueAndForget(()=>this.Wt===e?t():(Z(Lf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NR extends am{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}cn(e,t){return this.connection.vt("Listen",e,t)}En(e){return this.onNext(e)}onNext(e){this.jt.reset();const t=uR(this.serializer,e),r=function(i){if(!("targetChange"in i))return Ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Ee.min():o.readTime?On(o.readTime):Ee.min()}(e);return this.listener.hn(t,r)}Tn(e){const t={};t.database=Al(this.serializer),t.addTarget=function(i,o){let a;const u=o.target;if(a=rs(u)?{pipelineQuery:pR(i,u)}:Ug(u)?{documents:hR(i,u)}:{query:dR(i,u).be},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=zg(i,o.resumeToken);const l=Tl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(Ee.min())>0){a.readTime=Bc(i,o.snapshotVersion.toTimestamp());const l=Tl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=CR(this.serializer,e);r&&(t.labels=r),this.tn(t)}Pn(e){const t={};t.database=Al(this.serializer),t.removeTarget=e,this.tn(t)}}class OR extends am{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Rn(){return this.zt>0}start(){this.lastStreamToken=void 0,super.start()}sn(){this.Rn&&this.In([])}cn(e,t){return this.connection.vt("Write",e,t)}En(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.An()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.jt.reset();const t=BR(e.writeResults,e.commitTime),r=On(e.commitTime);return this.listener.Vn(r,t)}dn(){const e={};e.database=Al(this.serializer),this.tn(e)}In(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>lR(this.serializer,r))};this.tn(t)}}/**
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
 */class bR{}class kR extends bR{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.fn=!1}mn(){if(this.fn)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.")}tt(e,t,r,s){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.tt(e,yl(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(M.UNKNOWN,i.toString())})}st(e,t,r,s,i){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.st(e,yl(t,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(M.UNKNOWN,o.toString())})}terminate(){this.fn=!0,this.connection.terminate()}}function LR(n,e,t,r){return new kR(n,e,t,r)}/**
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
 */const FR="ComponentProvider",Ff=new Map;function MR(n,e,t,r,s){return new CA(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,im(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r,s._customHeaders,s.grpcFlowControlWindow)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Mf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},cm=41943040;class Jt{static withCacheSize(e){return new Jt(e,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}Jt.DEFAULT_COLLECTION_PERCENTILE=10,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jt.DEFAULT=new Jt(cm,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jt.DISABLED=new Jt(-1,0,0);/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Wc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.pn(r),this.gn=r=>t.writeSequenceNumber(r))}pn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.gn&&this.gn(e),e}}Wc.yn=-1;/**
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
 */const VR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function di(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==VR)throw n;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Be(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof U?t:U.resolve(t)}catch(t){return U.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):U.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):U.reject(t)}static resolve(e){return new U((t,r)=>{t(e)})}static reject(e){return new U((t,r)=>{r(e)})}static waitFor(e){return new U((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},u=>r(u))}),o=!0,i===s&&t()})}static or(e){let t=U.resolve(!1);for(const r of e)t=t.next(s=>s?U.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new U((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const l=u;t(e[l]).next(h=>{o[l]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,t){return new U((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function UR(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function fi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const Vf="LruGarbageCollector",um=1048576;function xf([n,e],[t,r]){const s=ve(n,t);return s===0?ve(e,r):s}class GR{constructor(e){this.Jn=e,this.buffer=new Bt(xf),this.Yn=0}Zn(){return++this.Yn}Xn(e){const t=[e,this.Zn()];if(this.buffer.size<this.Jn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();xf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class HR{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.tr(6e4)}stop(){this.er&&(this.er.cancel(),this.er=null)}get started(){return this.er!==null}tr(e){Z(Vf,`Garbage collection scheduled in ${e}ms`),this.er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){fi(t)?Z(Vf,"Ignoring IndexedDB error during garbage collection: ",t):await di(t)}await this.tr(3e5)})}}class qR{constructor(e,t){this.nr=e,this.params=t}calculateTargetCount(e,t){return this.nr.rr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return U.resolve(Wc.yn);const r=new GR(t);return this.nr.forEachTarget(e,s=>r.Xn(s.sequenceNumber)).next(()=>this.nr.ir(e,s=>r.Xn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.nr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.nr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(Mf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Mf):this.sr(e,t))}getCacheSize(e){return this.nr.getCacheSize(e)}sr(e,t){let r,s,i,o,a,u,l;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,t))).next(f=>(i=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(l=Date.now(),bs()<=Re.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(l-u)+`ms
Total Duration: ${l-h}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function JR(n,e){return new qR(n,e)}/**
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
 */const jR="firestore.googleapis.com",Uf=!0;class Gf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jR,this.ssl=Uf}else this.host=e.host,this.ssl=e.ssl??Uf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=cm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<um)throw new $(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(gg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=im(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new $(M.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(r,s){if(r===s)return!0;if(!r||!s)return!1;const i=Object.keys(r),o=Object.keys(s);if(i.length!==o.length)return!1;for(const a of i)if(r[a]!==s[a])return!1;return!0}(this._customHeaders,e._customHeaders)}}let AB=class{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sm;switch(r.type){case"firstParty":return new TR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ff.get(t);r&&(Z(FR,"Removing Datastore"),Ff.delete(t),r.terminate())}(this),Promise.resolve()}};/**
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
 */class Mn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mn(this.firestore,e,this._query)}}class Ye{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ye(this.firestore,e,this._key)}toJSON(){return{type:Ye._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Uo(t,Ye._jsonSchema))return new Ye(e,r||null,new ce(Me.fromString(t.referencePath)))}}Ye._jsonSchemaVersion="firestore/documentReference/1.0",Ye._jsonSchema={type:lt("string",Ye._jsonSchemaVersion),referencePath:lt("string")};class Zn extends Mn{constructor(e,t,r){super(e,t,Kc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ye(this.firestore,null,new ce(e))}withConverter(e){return new Zn(this.firestore,e,this._path)}}function yn(n,e,...t){if(n=le(n),pg("collection","path",e),n instanceof AB){const r=Me.fromString(e,...t);return df(r),new Zn(n,null,r)}{if(!(n instanceof Ye||n instanceof Zn))throw new $(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Me.fromString(e,...t));return df(r),new Zn(n.firestore,null,r)}}function Ie(n,e,...t){if(n=le(n),arguments.length===1&&(e=xc.newId()),pg("doc","path",e),n instanceof AB){const r=Me.fromString(e,...t);return hf(r),new Ye(n,null,new ce(r))}{if(!(n instanceof Ye||n instanceof Zn))throw new $(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Me.fromString(e,...t));return hf(r),new Ye(n.firestore,n instanceof Zn?n.converter:null,new ce(r))}}/**
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
 * Copyright 2024 Google LLC
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
 */class Mt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Mt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Uo(e,Mt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Mt(e.vectorValues);throw new $(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Mt._jsonSchemaVersion="firestore/vectorValue/1.0",Mt._jsonSchema={type:lt("string",Mt._jsonSchemaVersion),vectorValues:lt("object")};/**
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
 */const KR=/^__.*__$/;class $R{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new zr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ho(e,this.data,t,this.fieldTransforms)}}class lm{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new zr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Bm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Be(40011,{dataSource:n})}}class RB{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new RB({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return dc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Bm(this.dataSource)&&KR.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class zR{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||zc(e)}createContext(e,t,r,s=!1){return new RB({dataSource:e,methodName:t,targetDoc:r,path:zt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qc(n){const e=n._freezeSettings(),t=zc(n._databaseId);return new zR(n._databaseId,!!e.ignoreUndefinedProperties,t)}function hm(n,e,t,r,s,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);SB("Data must be an object, but it was:",o,r);const a=dm(r,o);let u,l;if(i.merge)u=new on(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const C=Vr(e,f,t);if(!o.contains(C))throw new $(M.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);pm(h,C)||h.push(C)}u=new on(h),l=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,l=o.fieldTransforms;return new $R(new kt(a),u,l)}class Yc extends Ko{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yc}}class vB extends Ko{_toFieldTransform(e){return new wA(e.path,new Eo)}isEqual(e){return e instanceof vB}}function WR(n,e,t,r){const s=n.createContext(1,e,t);SB("Data must be an object, but it was:",s,r);const i=[],o=kt.empty();$r(r,(u,l)=>{const h=Cm(e,u,t);l=le(l);const f=s.childContextForFieldPath(h);if(l instanceof Yc)i.push(h);else{const C=Mr(l,f);C!=null&&(i.push(h),o.set(h,C))}});const a=new on(i);return new lm(o,a,s.fieldTransforms)}function QR(n,e,t,r,s,i){const o=n.createContext(1,e,t),a=[Vr(e,r,t)],u=[s];if(i.length%2!=0)throw new $(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<i.length;C+=2)a.push(Vr(e,i[C])),u.push(i[C+1]);const l=[],h=kt.empty();for(let C=a.length-1;C>=0;--C)if(!pm(l,a[C])){const I=a[C];let v=u[C];v=le(v);const V=o.childContextForFieldPath(I);if(v instanceof Yc)l.push(I);else{const H=Mr(v,V);H!=null&&(l.push(I),h.set(I,H))}}const f=new on(l);return new lm(h,f,o.fieldTransforms)}function YR(n,e,t,r=!1){return Mr(t,n.createContext(r?4:3,e))}function Mr(n,e,t){if(fm(n=le(n)))return SB("Unsupported field value:",e,n),dm(n,e);if(n instanceof Ko)return function(s,i){if(!Bm(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){const o=[];let a=0;for(const u of s){let l=Mr(u,i.childContextForArray(a));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),a++}return{arrayValue:{values:o}}}(n,e)}return function(s,i,o){if((s=le(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return EB(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const a=Je.fromDate(s);return{timestampValue:Bc(i.serializer,a)}}if(s instanceof Je){const a=new Je(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Bc(i.serializer,a)}}if(s instanceof mn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof sn)return{bytesValue:zg(i.serializer,s._byteString)};if(s instanceof Ye){const a=i.databaseId,u=s.firestore._databaseId;if(!u.isEqual(a))throw i.createError(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:yB(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Mt)return function(u,l){const h=u instanceof Mt?u.toArray():u;return{mapValue:{fields:{[wg]:{stringValue:Tg},[go]:{arrayValue:{values:h.map(C=>{if(typeof C!="number")throw l.createError("VectorValues must only contain numeric values.");return qc(l.serializer,C)})}}}}}}(s,i);if(tm(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Uc(s)}`)}(n,e)}function dm(n,e){const t={};return Cg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$r(n,(r,s)=>{const i=Mr(s,e.childContextForField(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function fm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Je||n instanceof mn||n instanceof sn||n instanceof Ye||n instanceof Ko||n instanceof Mt||tm(n))}function SB(n,e,t){if(!fm(t)||!xo(t)){const r=Uc(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function Vr(n,e,t){if((e=le(e))instanceof jo)return e._internalPath;if(typeof e=="string")return Cm(n,e);throw dc("Field path arguments must be of type string or ",n,!1,void 0,t)}const XR=new RegExp("[~\\*/\\[\\]]");function Cm(n,e,t){if(e.search(XR)>=0)throw dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new jo(...e.split("."))._internalPath}catch{throw dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function dc(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new $(M.INVALID_ARGUMENT,a+n+u)}function pm(n,e){return n.some(t=>t.isEqual(e))}function gm(n){return typeof n._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
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
 */class Ot{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=kt.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const o=e[s];let a;i.nestedOptions&&xo(o)?a={mapValue:{fields:new Ot(i.nestedOptions).getOptionsProto(t,o)}}:o&&(a=Mr(o,t)??void 0),a&&r.set(zt.fromServerFormat(i.serverName),a)}}return r}getOptionsProto(e,t,r){const s=this._getKnownOptions(t,e);if(r){const i=new Map(hA(r,(o,a)=>[zt.fromServerFormat(a),o!==void 0?Mr(o,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function ZR(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!xo(t.fields))}(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(n.pipelineValue)))}function fc(){return new vB("serverTimestamp")}function mm(n){return new Mt(n)}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function K(n){let e;return n instanceof _s?n:(e=xo(n)?sv(n):n instanceof Array?iv(n):Em(n,void 0),e)}function Qu(n){if(n instanceof _s)return n;if(n instanceof Mt)return Ao(n);if(Array.isArray(n))return Ao(mm(n));throw new Error("Unsupported value: "+typeof n)}function PB(n){return mA(n)?$a(n):K(n)}class _s{constructor(){this._protoValueType="ProtoValue"}add(e){return new F("add",[this,K(e)],"add")}asBoolean(){if(this instanceof xr)return this;if(this instanceof pi)return new Dm(this);if(this instanceof Ci)return new rv(this);if(this instanceof F)return new _m(this);throw new $("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new F("subtract",[this,K(e)],"subtract")}multiply(e){return new F("multiply",[this,K(e)],"multiply")}divide(e){return new F("divide",[this,K(e)],"divide")}mod(e){return new F("mod",[this,K(e)],"mod")}equal(e){return new F("equal",[this,K(e)],"equal").asBoolean()}notEqual(e){return new F("not_equal",[this,K(e)],"notEqual").asBoolean()}lessThan(e){return new F("less_than",[this,K(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new F("less_than_or_equal",[this,K(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new F("greater_than",[this,K(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new F("greater_than_or_equal",[this,K(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map(s=>K(s));return new F("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new F("array_contains",[this,K(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new $i(e.map(K),"arrayContainsAll"):e;return new F("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new $i(e.map(K),"arrayContainsAny"):e;return new F("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new F("array_reverse",[this])}arrayLength(){return new F("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new $i(e.map(K),"equalAny"):e;return new F("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new $i(e.map(K),"notEqualAny"):e;return new F("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new F("exists",[this],"exists").asBoolean()}charLength(){return new F("char_length",[this],"charLength")}like(e){return new F("like",[this,K(e)],"like").asBoolean()}regexContains(e){return new F("regex_contains",[this,K(e)],"regexContains").asBoolean()}regexFind(e){return new F("regex_find",[this,K(e)],"regexFind")}regexFindAll(e){return new F("regex_find_all",[this,K(e)],"regexFindAll")}regexMatch(e){return new F("regex_match",[this,K(e)],"regexMatch").asBoolean()}stringContains(e){return new F("string_contains",[this,K(e)],"stringContains").asBoolean()}startsWith(e){return new F("starts_with",[this,K(e)],"startsWith").asBoolean()}endsWith(e){return new F("ends_with",[this,K(e)],"endsWith").asBoolean()}toLower(){return new F("to_lower",[this],"toLower")}toUpper(){return new F("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(K(e)),new F("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(K(e)),new F("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(K(e)),new F("rtrim",t,"rtrim")}type(){return new F("type",[this])}isType(e){return new F("is_type",[this,Ao(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(K);return new F("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new F("string_index_of",[this,K(e)],"stringIndexOf")}stringRepeat(e){return new F("string_repeat",[this,K(e)],"stringRepeat")}stringReplaceAll(e,t){return new F("string_replace_all",[this,K(e),K(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new F("string_replace_one",[this,K(e),K(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(K);return new F("concat",[this,...r],"concat")}reverse(){return new F("reverse",[this],"reverse")}arrayFilter(e,t){return new F("array_filter",[this,K(e),t],"arrayFilter")}arrayTransform(e,t){return new F("array_transform",[this,K(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new F("array_transform",[this,K(e),K(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,K(e)];return t!==void 0&&r.push(K(t)),new F("array_slice",r,"arraySlice")}arrayFirst(){return new F("array_first",[this],"arrayFirst")}arrayFirstN(e){return new F("array_first_n",[this,K(e)],"arrayFirstN")}arrayLast(){return new F("array_last",[this],"arrayLast")}arrayLastN(e){return new F("array_last_n",[this,K(e)],"arrayLastN")}arrayMaximum(){return new F("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new F("maximum_n",[this,K(e)],"arrayMaximumN")}arrayMinimum(){return new F("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new F("minimum_n",[this,K(e)],"arrayMinimumN")}arrayIndexOf(e){return new F("array_index_of",[this,K(e),K("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new F("array_index_of",[this,K(e),K("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new F("array_index_of_all",[this,K(e)],"arrayIndexOfAll")}byteLength(){return new F("byte_length",[this],"byteLength")}ceil(){return new F("ceil",[this])}floor(){return new F("floor",[this])}abs(){return new F("abs",[this])}exp(){return new F("exp",[this])}mapGet(e){return new F("map_get",[this,Ao(e)],"mapGet")}mapSet(e,t,...r){const s=[this,K(e),K(t),...r.map(K)];return new F("map_set",s,"mapSet")}mapKeys(){return new F("map_keys",[this],"mapKeys")}mapValues(){return new F("map_values",[this],"mapValues")}mapEntries(){return new F("map_entries",[this],"mapEntries")}getField(e){return new F("get_field",[this,K(e)],"get_field")}count(){return rn._create("count",[this],"count")}sum(){return rn._create("sum",[this],"sum")}average(){return rn._create("average",[this],"average")}minimum(){return rn._create("minimum",[this],"minimum")}maximum(){return rn._create("maximum",[this],"maximum")}first(){return rn._create("first",[this],"first")}last(){return rn._create("last",[this],"last")}arrayAgg(){return rn._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return rn._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return rn._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new F("maximum",[this,...r.map(K)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new F("minimum",[this,...r.map(K)],"minimum")}vectorLength(){return new F("vector_length",[this],"vectorLength")}cosineDistance(e){return new F("cosine_distance",[this,Qu(e)],"cosineDistance")}dotProduct(e){return new F("dot_product",[this,Qu(e)],"dotProduct")}euclideanDistance(e){return new F("euclidean_distance",[this,Qu(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new F("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new F("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new F("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new F("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new F("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new F("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new F("timestamp_add",[this,K(e),K(t)],"timestampAdd")}timestampSubtract(e,t){return new F("timestamp_subtract",[this,K(e),K(t)],"timestampSubtract")}timestampDiff(e,t){return new F("timestamp_diff",[this,PB(e),K(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,K(e)];return t&&r.push(K(t)),new F("timestamp_extract",r,"timestampExtract")}documentId(){return new F("document_id",[this],"documentId")}parent(){return new F("parent",[this],"parent")}substring(e,t){const r=K(e);return new F("substring",t===void 0?[this,r]:[this,r,K(t)],"substring")}arrayGet(e){return new F("array_get",[this,K(e)],"arrayGet")}isError(){return new F("is_error",[this],"isError").asBoolean()}ifError(e){const t=new F("if_error",[this,K(e)],"ifError");return e instanceof xr?t.asBoolean():t}isAbsent(){return new F("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new F("map_remove",[this,K(e)],"mapRemove")}mapMerge(e,...t){const r=K(e),s=t.map(K);return new F("map_merge",[this,r,...s],"mapMerge")}pow(e){return new F("pow",[this,K(e)])}trunc(e){return e===void 0?new F("trunc",[this]):new F("trunc",[this,K(e)],"trunc")}round(e){return e===void 0?new F("round",[this]):new F("round",[this,K(e)],"round")}collectionId(){return new F("collection_id",[this])}length(){return new F("length",[this])}ln(){return new F("ln",[this])}sqrt(){return new F("sqrt",[this])}stringReverse(){return new F("string_reverse",[this])}ifAbsent(e){return new F("if_absent",[this,K(e)],"ifAbsent")}ifNull(e){return new F("if_null",[this,K(e)],"ifNull")}coalesce(e,...t){return new F("coalesce",[this,K(e),...t.map(K)],"coalesce")}join(e){return new F("join",[this,K(e)],"join")}log10(){return new F("log10",[this])}arraySum(){return new F("sum",[this])}split(e){return new F("split",[this,K(e)])}timestampTruncate(e,t){const r=[this,K(e)];return t&&r.push(K(t)),new F("timestamp_trunc",r)}ascending(){return ov(this)}descending(){return av(this)}as(e){return new tv(this,e,"as")}}class rn{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const s=new rn(e,t);return s._methodName=r,s}as(e){return new ev(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class ev{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class tv{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class $i extends _s{constructor(e,t){super(),this.ur=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.ur.map(t=>t._toProto(e))}}}_readUserData(e){this.ur.forEach(t=>t._readUserData(e))}}class Ci extends _s{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new F("geo_distance",[this,K(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function $a(n){return nv(n,"field")}function nv(n,e){return new Ci(typeof n=="string"?vn===n?rm()._internalPath:Vr("field",n):n._internalPath,e)}class pi extends _s{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new pi(e,void 0);return t._protoValue=e,t}_toProto(e){return oe(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,ZR(this._protoValue)||(this._protoValue=Mr(this.value,e))}}function Ao(n,e){return Em(n,"constant")}function Em(n,e){const t=new pi(n,e);return typeof n=="boolean"?new Dm(t):t}class F extends _s{constructor(e,t,r,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new Ot({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(r=>r._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class xr extends _s{get _methodName(){return this._expr._methodName}countIf(){return rn._create("count_if",[this],"countIf")}not(){return new F("not",[this],"not").asBoolean()}conditional(e,t){return new F("conditional",[this,e,t],"conditional")}ifError(e){const t=K(e),r=new F("if_error",[this,t],"ifError");return t instanceof xr?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class _m extends xr{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class Dm extends xr{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class rv extends xr{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function sv(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];t.push(Ao(r)),t.push(K(s))}return new F("map",t,"map")}function iv(n){return function(t,r){return new F("array",t.map(s=>K(s)),r)}(n,"array")}function ov(n){return new Im(PB(n),"ascending","ascending")}function av(n){return new Im(PB(n),"descending","descending")}class Im{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:nm(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ln{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class wm extends ln{get _name(){return"add_fields"}get _optionsUtil(){return new Ot({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[yo(e,this.fields)]}}_readUserData(e){super._readUserData(e),Ur(this.fields,e)}}class Tm extends ln{get _name(){return"aggregate"}get _optionsUtil(){return new Ot({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[yo(e,this.accumulators),yo(e,this.groups)]}}_readUserData(e){super._readUserData(e),Ur(this.groups,e),Ur(this.accumulators,e)}}class ym extends ln{get _name(){return"distinct"}get _optionsUtil(){return new Ot({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[yo(e,this.groups)]}}_readUserData(e){super._readUserData(e),Ur(this.groups,e)}}class Xc extends ln{get _name(){return"collection"}get _optionsUtil(){return new Ot({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Er=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Er}]}}_readUserData(e){super._readUserData(e)}}class Zc extends ln{get _name(){return"collection_group"}get _optionsUtil(){return new Ot({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class NB extends ln{get _name(){return"database"}get _optionsUtil(){return new Ot({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class OB extends ln{get _name(){return"documents"}get _optionsUtil(){return new Ot({})}constructor(e,t){if(super(t),!e||e.length===0)throw new $(M.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(r);if(s.size!==r.length)throw new $(M.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.hr=r,this.Tr=s}_toProto(e){return{...super._toProto(e),args:this.hr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class eu extends ln{get _name(){return"where"}get _optionsUtil(){return new Ot({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),Ur(this.condition,e)}}class Cs extends ln{get _name(){return"limit"}get _optionsUtil(){return new Ot({})}constructor(e,t){oe(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[EB(e,this.limit)]}}}class Hf extends ln{get _name(){return"offset"}get _optionsUtil(){return new Ot({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[EB(e,this.offset)]}}}class cv extends ln{get _name(){return"select"}get _optionsUtil(){return new Ot({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[yo(e,this.selections)]}}_readUserData(e){super._readUserData(e),Ur(this.selections,e)}}class zn extends ln{get _name(){return"sort"}get _optionsUtil(){return new Ot({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),Ur(this.orderings,e)}}class bB extends ln{get _name(){return"replace_with"}get _optionsUtil(){return new Ot({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),nm(bB.Pr)]}}_readUserData(e){super._readUserData(e),Ur(this.map,e)}}bB.Pr="full_replace";function Ur(n,e){return gm(n)?n._readUserData(e):Array.isArray(n)?n.forEach(t=>t._readUserData(e)):n instanceof Map?n.forEach(t=>t._readUserData(e)):Object.values(n).forEach(t=>t._readUserData(e)),n}/**
 * @license
 * Copyright 2026 Google LLC
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
 */class so{constructor(e,t,r,s){this._db=e,this.userDataReader=t,this._userDataWriter=r,this.stages=s}Ar(e,t){const r=this.userDataReader.createContext(3,e);return gm(t)?t._readUserData(r):Array.isArray(t)?t.forEach(s=>s._readUserData(r)):t.forEach(s=>s._readUserData(r)),t}where(e){const t=this.stages.map(r=>r);return this.Ar("where",e),t.push(new eu(e,{})),new so(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map(r=>r);return t.push(new Cs(e,{})),new so(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const r=this.stages.map(s=>s);return"orderings"in e?r.push(new zn(this.Ar("sort",e.orderings),{})):r.push(new zn(this.Ar("sort",[e,...t]),{})),new so(this._db,this.userDataReader,this._userDataWriter,r)}Vr(e){return{pipeline:{stages:this.stages.map(t=>t._toProto(e))}}}}// Copyright 2024 Google LLC* @license
class w{constructor(e,t){this.type=e,this.value=t}static dr(){return new w("ERROR",void 0)}static mr(){return new w("UNSET",void 0)}static pr(){return new w("NULL",Zs)}static newValue(e){return an(e)?new w("NULL",Zs):function(r){return!!r&&"booleanValue"in r}(e)?new w("BOOLEAN",e):Sn(e)?new w("INT",e):as(e)?new w("DOUBLE",e):function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue}(e)?new w("TIMESTAMP",e):function(r){return!!r&&"stringValue"in r}(e)?new w("STRING",e):function(r){return!!r&&"bytesValue"in r}(e)?new w("BYTES",e):e.referenceValue?new w("REFERENCE",e):e.geoPointValue?new w("GEO_POINT",e):ti(e)?new w("ARRAY",e):ic(e)?new w("VECTOR",e):Bs(e)?new w("MAP",e):new w("ERROR",void 0)}gr(){return this.type==="ERROR"||this.type==="UNSET"}yr(){return this.type==="NULL"}}function io(n){if(!n.gr())return n.value}function Am(n){return n instanceof xr?n._expr:n}function de(n){if((n=Am(n))instanceof Ci)return new uv(n);if(n instanceof pi)return new lv(n);if(n instanceof $i)return new Bv(n);if(n instanceof F){if(n.name==="add")return new fv(n);if(n.name==="subtract")return new Cv(n);if(n.name==="multiply")return new pv(n);if(n.name==="divide")return new gv(n);if(n.name==="mod")return new mv(n);if(n.name==="and")return new Ev(n);if(n.name==="equal")return new Nv(n);if(n.name==="not_equal")return new Ov(n);if(n.name==="less_than")return new bv(n);if(n.name==="less_than_or_equal")return new kv(n);if(n.name==="greater_than")return new Lv(n);if(n.name==="greater_than_or_equal")return new Fv(n);if(n.name==="array_concat")return new Mv(n);if(n.name==="array_reverse")return new Vv(n);if(n.name==="array_contains")return new xv(n);if(n.name==="array_contains_all")return new Uv(n);if(n.name==="array_contains_any")return new Gv(n);if(n.name==="array_length")return new Hv(n);if(n.name==="array_element")return new qv(n);if(n.name==="equal_any")return new Rm(n);if(n.name==="not_equal_any")return new Dv(n);if(n.name==="is_nan")return new Iv(n);if(n.name==="is_not_nan")return new wv(n);if(n.name==="is_null")return new Tv(n);if(n.name==="is_not_null")return new yv(n);if(n.name==="is_error")return new Av(n);if(n.name==="exists")return new Rv(n);if(n.name==="not")return new tu(n);if(n.name==="or")return new _v(n);if(n.name==="xor")return new kB(n);if(n.name==="conditional")return new vv(n);if(n.name==="maximum")return new Sv(n);if(n.name==="minimum")return new Pv(n);if(n.name==="reverse")return new Jv(n);if(n.name==="replace_first")return new jv(n);if(n.name==="replace_all")return new Kv(n);if(n.name==="char_length")return new $v(n);if(n.name==="byte_length")return new zv(n);if(n.name==="like")return new Wv(n);if(n.name==="regex_contains")return new Qv(n);if(n.name==="regex_match")return new Yv(n);if(n.name==="string_contains")return new Xv(n);if(n.name==="starts_with")return new Zv(n);if(n.name==="ends_with")return new eS(n);if(n.name==="to_lower")return new tS(n);if(n.name==="to_upper")return new nS(n);if(n.name==="trim")return new rS(n);if(n.name==="string_concat")return new sS(n);if(n.name==="map_get")return new iS(n);if(n.name==="cosine_distance")return new oS(n);if(n.name==="dot_product")return new aS(n);if(n.name==="euclidean_distance")return new cS(n);if(n.name==="vector_length")return new uS(n);if(n.name==="unix_micros_to_timestamp")return new fS(n);if(n.name==="timestamp_to_unix_micros")return new gS(n);if(n.name==="unix_millis_to_timestamp")return new CS(n);if(n.name==="timestamp_to_unix_millis")return new mS(n);if(n.name==="unix_seconds_to_timestamp")return new pS(n);if(n.name==="timestamp_to_unix_seconds")return new ES(n);if(n.name==="timestamp_add")return new _S(n);if(n.name==="timestamp_subtract")return new DS(n)}throw new Error(`Unknown Expr : ${n}`)}class uv{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===vn)return w.newValue({referenceValue:hc(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return w.newValue({timestampValue:Ka(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return w.newValue({timestampValue:Ka(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?Gc(r)?w.newValue(function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:Ka(i.serializer,Ee.fromTimestamp(Ys(o)))};if(i.serverTimestampBehavior==="previous"){const a=Go(o);if(a)return a}return{nullValue:"NULL_VALUE"}}(e,r)):w.newValue(r):w.mr()}}class lv{constructor(e){this.expr=e}evaluate(e,t){return w.newValue(this.expr._getValue())}}class Bv{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.ur.map(s=>de(s).evaluate(e,t));return r.some(s=>s.gr())?w.dr():w.newValue({arrayValue:{values:r.map(s=>s.value)}})}}function Rt(n){return as(n)?Number(n.doubleValue):Number(n.integerValue)}function kn(n){return BigInt(n.integerValue)}const hv=BigInt("0x7fffffffffffffff"),dv=-BigInt("0x8000000000000000");class $o{constructor(e){this.expr=e}evaluate(e,t){oe(this.expr.params.length>=2,24778);const r=de(this.expr.params[0]).evaluate(e,t),s=de(this.expr.params[1]).evaluate(e,t);let i=this.wr(r,s);for(const o of this.expr.params.slice(2)){const a=de(o).evaluate(e,t);i=this.wr(i,a)}return i}wr(e,t){if(e.gr()||t.gr())return w.dr();if(e.yr()||t.yr())return w.pr();const r=e.value,s=t.value;if(!as(r)&&!Sn(r)||!as(s)&&!Sn(s))return w.dr();if(as(r)||as(s)){const i=this.br(r,s);return i?w.newValue(i):w.dr()}if(Sn(r)&&Sn(s)){const i=this.vr(r,s);return i===void 0?w.dr():typeof i=="number"?w.newValue({doubleValue:i}):i<dv||i>hv?w.dr():w.newValue({integerValue:`${i}`})}return w.dr()}}function ir(n,e){return ht(n)!==ht(e)?"TYPE_MISMATCH":en(n)||en(e)?"NOT_EQ":an(n)&&an(e)?"EQ":an(n)||an(e)?"NULL":ti(n)&&ti(e)?function(r,s){var o,a,u;if(((o=r.values)==null?void 0:o.length)!==((a=s.values)==null?void 0:a.length))return"NOT_EQ";let i=!1;for(let l=0;l<(((u=r.values)==null?void 0:u.length)??0);l++){const h=r.values[l],f=s.values[l];switch(ir(h,f)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:Be(44609,{Sr:h,Dr:f})}}return i?"NULL":"EQ"}(n.arrayValue,e.arrayValue):ic(n)&&ic(e)||Bs(n)&&Bs(e)?function(r,s){const i=r.fields||{},o=s.fields||{};if(rc(i)!==rc(o))return"NOT_EQ";let a=!1;for(const u in i)if(i.hasOwnProperty(u)){if(o[u]===void 0)return"NOT_EQ";switch(ir(i[u],o[u])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":a=!0}}return a?"NULL":"EQ"}(n.mapValue,e.mapValue):function(r,s){return fn(r,s,{o:!1,t:!0,i:!0})}(n,e)?"EQ":"NOT_EQ"}class fv extends $o{vr(e,t){return kn(e)+kn(t)}br(e,t){return{doubleValue:Rt(e)+Rt(t)}}}class Cv extends $o{constructor(e){super(e),this.expr=e}vr(e,t){return kn(e)-kn(t)}br(e,t){return{doubleValue:Rt(e)-Rt(t)}}}class pv extends $o{constructor(e){super(e),this.expr=e}vr(e,t){return kn(e)*kn(t)}br(e,t){return{doubleValue:Rt(e)*Rt(t)}}}class gv extends $o{constructor(e){super(e),this.expr=e}vr(e,t){const r=kn(t);if(r!==BigInt(0))return kn(e)/r}br(e,t){const r=Rt(t);return r===0?{doubleValue:po(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Rt(e)/r}}}class mv extends $o{constructor(e){super(e),this.expr=e}vr(e,t){const r=kn(t);if(r!==BigInt(0))return kn(e)%r}br(e,t){const r=Rt(t);if(r!==0)return{doubleValue:Rt(e)%r}}}class Ev{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const a=de(o).evaluate(e,t);switch(a.type){case"BOOLEAN":if(!((i=a.value)!=null&&i.booleanValue))return w.newValue(Dt);break;case"NULL":s=!0;break;default:r=!0}}return r?w.dr():s?w.pr():w.newValue(Xt)}}class tu{constructor(e){this.expr=e}evaluate(e,t){var s;oe(this.expr.params.length===1,9634);const r=de(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return w.newValue({booleanValue:!((s=r.value)!=null&&s.booleanValue)});case"NULL":return w.pr();default:return w.dr()}}}class _v{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const a=de(o).evaluate(e,t);switch(a.type){case"BOOLEAN":if((i=a.value)!=null&&i.booleanValue)return w.newValue(Xt);break;case"NULL":s=!0;break;default:r=!0}}return r?w.dr():s?w.pr():w.newValue(Dt)}}class kB{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const a=de(o).evaluate(e,t);switch(a.type){case"BOOLEAN":r=kB.xor(r,!!((i=a.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return w.dr()}}return s?w.pr():w.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class Rm{constructor(e){this.expr=e}evaluate(e,t){var o,a;oe(this.expr.params.length===2,55094);let r=!1;const s=de(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return w.dr()}const i=de(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return w.dr()}if(r)return w.pr();for(const u of((a=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:a.values)??[])switch(an(s.value)&&an(u)?"EQ":ir(s.value,u)){case"EQ":return w.newValue(Xt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:Be(44608,{value:s.value,candidate:u})}return r?w.pr():w.newValue(Dt)}}class Dv{constructor(e){this.expr=e}evaluate(e,t){return new tu(new F("not",[new F("equal_any",this.expr.params)])).evaluate(e,t)}}class Iv{constructor(e){this.expr=e}evaluate(e,t){oe(this.expr.params.length===1,23322);const r=de(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return w.newValue(Dt);case"DOUBLE":return w.newValue({booleanValue:isNaN(Rt(r.value))});case"NULL":return w.pr();default:return w.dr()}}}class wv{constructor(e){this.expr=e}evaluate(e,t){return oe(this.expr.params.length===1,50406),new tu(new F("not",[new F("is_nan",this.expr.params)])).evaluate(e,t)}}class Tv{constructor(e){this.expr=e}evaluate(e,t){switch(oe(this.expr.params.length===1,23123),de(this.expr.params[0]).evaluate(e,t).type){case"NULL":return w.newValue(Xt);case"UNSET":case"ERROR":return w.dr();default:return w.newValue(Dt)}}}class yv{constructor(e){this.expr=e}evaluate(e,t){return oe(this.expr.params.length===1,23167),new tu(new F("not",[new F("is_null",this.expr.params)])).evaluate(e,t)}}class Av{constructor(e){this.expr=e}evaluate(e,t){return oe(this.expr.params.length===1,5228),de(this.expr.params[0]).evaluate(e,t).type==="ERROR"?w.newValue(Xt):w.newValue(Dt)}}class Rv{constructor(e){this.expr=e}evaluate(e,t){switch(oe(this.expr.params.length===1,6877),de(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return w.dr();case"UNSET":return w.newValue(Dt);default:return w.newValue(Xt)}}}class vv{constructor(e){this.expr=e}evaluate(e,t){var s;oe(this.expr.params.length===3,11706);const r=de(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return(s=r.value)!=null&&s.booleanValue?de(this.expr.params[1]).evaluate(e,t):de(this.expr.params[2]).evaluate(e,t);case"NULL":return de(this.expr.params[2]).evaluate(e,t);default:return w.dr()}}}class Sv{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>de(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||Zt(i.value,s.value)>0?i:s}return s===void 0?w.pr():s}}class Pv{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>de(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||Zt(i.value,s.value)<0?i:s}return s===void 0?w.pr():s}}class gi{constructor(e){this.expr=e}evaluate(e,t){oe(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=de(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return w.dr()}const s=de(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return w.dr()}return this.Cr(r,s)}}class Nv extends gi{constructor(e){super(e),this.expr=e}Cr(e,t){if(e.yr()&&t.yr())return w.newValue(Xt);if(e.yr()||t.yr()||en(e.value)||en(t.value)||ht(e.value)!==ht(t.value))return w.newValue(Dt);switch(ir(e.value,t.value)){case"EQ":return w.newValue(Xt);case"NOT_EQ":return w.newValue(Dt);case"NULL":return w.pr();default:Be(44615,{left:e,right:t})}}}class Ov extends gi{constructor(e){super(e),this.expr=e}Cr(e,t){switch(ir(e.value,t.value)){case"EQ":return w.newValue(Dt);case"NOT_EQ":case"TYPE_MISMATCH":return w.newValue(Xt);case"NULL":return w.pr();default:Be(44614,{left:e,right:t})}}}class bv extends gi{constructor(e){super(e),this.expr=e}Cr(e,t){return ht(e.value)!==ht(t.value)||en(e.value)||en(t.value)?w.newValue(Dt):w.newValue({booleanValue:Zt(e.value,t.value)<0})}}class kv extends gi{constructor(e){super(e),this.expr=e}Cr(e,t){return ht(e.value)!==ht(t.value)||en(e.value)||en(t.value)?w.newValue(Dt):ir(e.value,t.value)==="EQ"?w.newValue(Xt):w.newValue({booleanValue:Zt(e.value,t.value)<0})}}class Lv extends gi{constructor(e){super(e),this.expr=e}Cr(e,t){return ht(e.value)!==ht(t.value)||en(e.value)||en(t.value)?w.newValue(Dt):w.newValue({booleanValue:Zt(e.value,t.value)>0})}}class Fv extends gi{constructor(e){super(e),this.expr=e}Cr(e,t){return ht(e.value)!==ht(t.value)||en(e.value)||en(t.value)?w.newValue(Dt):ir(e.value,t.value)==="EQ"?w.newValue(Xt):w.newValue({booleanValue:Zt(e.value,t.value)>0})}}class Mv{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Vv{constructor(e){this.expr=e}evaluate(e,t){var s;oe(this.expr.params.length===1,216);const r=de(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return w.pr();case"ARRAY":{const i=((s=r.value.arrayValue)==null?void 0:s.values)??[];return w.newValue({arrayValue:{values:[...i].reverse()}})}default:return w.dr()}}}class xv{constructor(e){this.expr=e}evaluate(e,t){return oe(this.expr.params.length===2,52884),new Rm(new F("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class Uv{constructor(e){this.expr=e}evaluate(e,t){var u,l,h,f;oe(this.expr.params.length===2,1392);let r=!1;const s=de(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return w.dr()}const i=de(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return w.dr()}if(r)return w.pr();const o=((l=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:l.values)??[],a=((f=(h=s.value)==null?void 0:h.arrayValue)==null?void 0:f.values)??[];for(const C of o){let I=!1;r=!1;for(const v of a){switch(an(C)&&an(v)?"EQ":ir(C,v)){case"EQ":I=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:Be(44613,{value:v,search:C})}if(I)break}if(!I)return w.newValue(Dt)}return w.newValue(Xt)}}class Gv{constructor(e){this.expr=e}evaluate(e,t){var u,l,h,f;oe(this.expr.params.length===2,2680);let r=!1;const s=de(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return w.dr()}const i=de(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return w.dr()}if(r)return w.pr();const o=((l=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:l.values)??[],a=((f=(h=s.value)==null?void 0:h.arrayValue)==null?void 0:f.values)??[];for(const C of a)for(const I of o)switch(an(C)&&an(I)?"EQ":ir(C,I)){case"EQ":return w.newValue(Xt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:Be(60403,{value:C,search:I})}return r?w.pr():w.newValue(Dt)}}class Hv{constructor(e){this.expr=e}evaluate(e,t){var s,i,o;oe(this.expr.params.length===1,38605);const r=de(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return w.pr();case"ARRAY":return w.newValue({integerValue:`${((o=(i=(s=r.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return w.dr()}}}class qv{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Jv{constructor(e){this.expr=e}evaluate(e,t){var s,i;oe(this.expr.params.length===1,1508);const r=de(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return w.pr();case"BYTES":{const o=(s=r.value)==null?void 0:s.bytesValue;if(typeof o=="string"){const a=it.fromBase64String(o).toUint8Array();return a.reverse(),w.newValue({bytesValue:it.fromUint8Array(a).toBase64()})}return w.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=r.value)==null?void 0:i.stringValue,a=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),u=Array.from(a,l=>l.segment).reverse();return w.newValue({stringValue:u.join("")})}default:return w.dr()}}}class jv{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Kv{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class $v{constructor(e){this.expr=e}evaluate(e,t){oe(this.expr.params.length===1,19400);const r=de(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return w.pr();case"STRING":{const s=function(o){let a=0;for(let u=0;u<o.length;u++){const l=o.codePointAt(u);if(l===void 0)return;if(l<=65535)if(l>=55296&&l<=57343)if(l<=56319){const h=o.codePointAt(u+1);h!==void 0&&h>=56320&&h<=57343?(a+=1,u++):a+=1}else a+=1;else a+=1;else{if(!(l<=1114111))return;a+=1,u++}}return a}(r.value.stringValue);return s===void 0?w.dr():w.newValue({integerValue:s})}default:return w.dr()}}}class zv{constructor(e){this.expr=e}evaluate(e,t){var s,i;oe(this.expr.params.length===1,8486);const r=de(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const o=(s=r.value)==null?void 0:s.bytesValue;return typeof o=="string"?w.newValue({integerValue:it.fromBase64String(o).toUint8Array().length}):w.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=function(u){let l=0;for(let h=0;h<u.length;h++){const f=u.codePointAt(h);if(f===void 0)return;if(f>=55296&&f<=57343){if(!(f<=56319))return;{const C=u.codePointAt(h+1);if(C===void 0||!(C>=56320&&C<=57343))return;l+=4,h++}}else if(f<=127)l+=1;else if(f<=2047)l+=2;else if(f<=65535)l+=3;else{if(!(f<=1114111))return;l+=4,h++}}return l}((i=r.value)==null?void 0:i.stringValue);return o===void 0?w.dr():w.newValue({integerValue:o})}case"NULL":return w.pr();default:return w.dr()}}}class mi{constructor(e){this.expr=e}evaluate(e,t){var o,a;oe(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=de(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return w.dr()}const i=de(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return w.dr()}return r?w.pr():this.Fr((o=s.value)==null?void 0:o.stringValue,(a=i.value)==null?void 0:a.stringValue)}}class Wv extends mi{Fr(e,t){try{const r=function(o){let a="";for(let u=0;u<o.length;u++){const l=o.charAt(u);switch(l){case"_":a+=".";break;case"%":a+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":a+="\\"+l;break;default:a+=l}}return"^"+a+"$"}(t),s=CB.compile(r);return w.newValue({booleanValue:s.matches(e)})}catch(r){return En(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),w.dr()}}}class Qv extends mi{Fr(e,t){try{const r=CB.compile(t);return w.newValue({booleanValue:r.test(e)})}catch{return En(`Invalid regex pattern found in regex_contains: ${t}, returning error`),w.dr()}}}class Yv extends mi{Fr(e,t){try{return w.newValue({booleanValue:CB.compile(t).matches(e)})}catch{return En(`Invalid regex pattern found in regex_match: ${t}, returning error`),w.dr()}}}class Xv extends mi{Fr(e,t){return w.newValue({booleanValue:e.includes(t)})}}class Zv extends mi{Fr(e,t){return w.newValue({booleanValue:e.startsWith(t)})}}class eS extends mi{Fr(e,t){return w.newValue({booleanValue:e.endsWith(t)})}}class tS{constructor(e){this.expr=e}evaluate(e,t){var s,i;oe(this.expr.params.length===1,29079);const r=de(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return w.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return w.pr();default:return w.dr()}}}class nS{constructor(e){this.expr=e}evaluate(e,t){var s,i;oe(this.expr.params.length===1,60487);const r=de(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return w.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return w.pr();default:return w.dr()}}}class rS{constructor(e){this.expr=e}evaluate(e,t){var s,i;oe(this.expr.params.length===1,28544);const r=de(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return w.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return w.pr();default:return w.dr()}}}class sS{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(o=>de(o).evaluate(e,t));let s="",i=!1;for(const o of r)switch(o.type){case"STRING":s+=o.value.stringValue;break;case"NULL":i=!0;break;default:return w.dr()}return i?w.pr():w.newValue({stringValue:s})}}class iS{constructor(e){this.expr=e}evaluate(e,t){var o,a,u,l;oe(this.expr.params.length===2,4483);const r=de(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return w.mr();case"MAP":break;default:return w.dr()}const s=de(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return w.dr();const i=(l=(a=(o=r.value)==null?void 0:o.mapValue)==null?void 0:a.fields)==null?void 0:l[(u=s.value)==null?void 0:u.stringValue];return i===void 0?w.mr():w.newValue(i)}}class LB{constructor(e){this.expr=e}evaluate(e,t){var l,h;oe(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=de(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return w.dr()}const i=de(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return w.dr()}if(r)return w.pr();const o=Dl(s.value),a=Dl(i.value);if(o===void 0||a===void 0||((l=o.values)==null?void 0:l.length)!==((h=a.values)==null?void 0:h.length))return w.dr();const u=this.Or(o,a);return u===void 0||isNaN(u)?w.dr():w.newValue({doubleValue:u})}}class oS extends LB{Or(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return;let i=0,o=0,a=0;for(let l=0;l<r.length;l++){if(!Lr(r[l])||!Lr(s[l]))return;const h=Rt(r[l]),f=Rt(s[l]);i+=h*f,o+=h*h,a+=f*f}const u=Math.sqrt(o)*Math.sqrt(a);if(u!==0)return 1-Math.max(-1,Math.min(1,i/u))}}class aS extends LB{Or(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!Lr(r[o])||!Lr(s[o]))return;i+=Rt(r[o])*Rt(s[o])}return i}}class cS extends LB{Or(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!Lr(r[o])||!Lr(s[o]))return;const a=Rt(r[o]),u=Rt(s[o]);i+=Math.pow(a-u,2)}return Math.sqrt(i)}}class uS{constructor(e){this.expr=e}evaluate(e,t){var s;oe(this.expr.params.length===1,39044);const r=de(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const i=Dl(r.value);return w.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return w.pr();default:return w.dr()}}}const Ro=BigInt(-62135596800),vo=BigInt(253402300799),Cc=BigInt(1e3),Rr=BigInt(1e6),lS=Ro*Cc,BS=vo*Cc+BigInt(999),hS=Ro*Rr,dS=vo*Rr+BigInt(999999);function FB(n){return n>=hS&&n<=dS}function vm(n){return n>=Ro&&n<=vo}function So(n,e){const t=BigInt(n);return!(t<Ro||t>vo)&&!(e<0||e>=1e9)&&(t!==Ro||e===0)&&!(t===vo&&e>999999999)}function Sm(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function MB(n){return BigInt(n.seconds)*Rr+BigInt(Math.trunc(n.nanoseconds/1e3))}class VB{constructor(e){this.expr=e}evaluate(e,t){oe(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=de(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return w.pr();default:return w.dr()}}}class fS extends VB{toTimestamp(e){if(!FB(e))return w.dr();let t=Number(e/Rr),r=Number(e%Rr*BigInt(1e3));const s=Sm(t,r);return t=s.seconds,r=s.nanos,So(t,r)?w.newValue({timestampValue:{seconds:t,nanos:r}}):w.dr()}}class CS extends VB{toTimestamp(e){if(!function(o){return o>=lS&&o<=BS}(e))return w.dr();let t=Number(e/Cc),r=Number(e%Cc*BigInt(1e6));const s=Sm(t,r);return t=s.seconds,r=s.nanos,So(t,r)?w.newValue({timestampValue:{seconds:t,nanos:r}}):w.dr()}}class pS extends VB{toTimestamp(e){if(!vm(e))return w.dr();const t=Number(e);return w.newValue({timestampValue:{seconds:t,nanos:0}})}}class xB{constructor(e){this.expr=e}evaluate(e,t){oe(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=de(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return w.pr();default:return w.dr()}const s=TB(r.value.timestampValue);return So(s.seconds,s.nanoseconds)?this.Mr(s):w.dr()}}class gS extends xB{Mr(e){const t=MB(e);return FB(t)?w.newValue({integerValue:`${t.toString()}`}):w.dr()}}class mS extends xB{Mr(e){const t=MB(e),r=t/BigInt(1e3),s=t%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?w.newValue({integerValue:r.toString()}):w.newValue({integerValue:(r-BigInt(1)).toString()})}}class ES extends xB{Mr(e){const t=BigInt(e.seconds);return vm(t)?w.newValue({integerValue:t.toString()}):w.dr()}}class Pm{constructor(e){this.expr=e}evaluate(e,t){oe(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=de(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return w.dr()}const i=de(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=function(ie){switch(ie){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),o===void 0)return w.dr();break;case"NULL":r=!0;break;default:return w.dr()}const a=de(this.expr.params[2]).evaluate(e,t);switch(a.type){case"INT":break;case"NULL":r=!0;break;default:return w.dr()}if(r)return w.pr();const u=BigInt(a.value.integerValue);let l;try{switch(o){case"microsecond":l=u;break;case"millisecond":l=u*BigInt(1e3);break;case"second":l=u*BigInt(1e6);break;case"minute":l=u*BigInt(6e7);break;case"hour":l=u*BigInt(36e8);break;case"day":l=u*BigInt(864e8);break;default:return w.dr()}if(o!=="microsecond"&&u!==BigInt(0)&&l/u!==BigInt(this.Nr(o)))return w.dr()}catch(Y){return En(`Error during timestamp arithmetic: ${Y}`),w.dr()}const h=TB(s.value.timestampValue);if(!So(h.seconds,h.nanoseconds))return w.dr();const f=MB(h),C=this.Lr(f,l);if(!FB(C))return w.dr();const I=Number(C/Rr),v=C%Rr,V=Number((v<0?v+Rr:v)*BigInt(1e3)),H=v<0?I-1:I;return So(H,V)?w.newValue({timestampValue:{seconds:H,nanos:V}}):w.dr()}Nr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class _S extends Pm{Lr(e,t){return e+t}}class DS extends Pm{Lr(e,t){return e-t}}// Copyright 2024 Google LLC* @license
class bt{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return nu(this)}getPipelineCollectionGroup(){return UB(this)}getPipelineCollectionId(){return IS(this)}getPipelineDocuments(){return vl(this)}getPipelineFlavor(){return function(t){let r="exact";return t.stages.forEach((s,i)=>{s._name!==ym.name&&s._name!==Tm.name||(r="keyless"),s._name===cv.name&&r==="exact"&&(r="augmented"),s._name===wm.name&&i<t.stages.length-1&&r==="exact"&&(r="augmented")}),r}(this)}getPipelineSourceType(){return vr(this)}}function vr(n){const e=n.stages[0];return e instanceof Xc||e instanceof Zc||e instanceof NB||e instanceof OB?e._name:"unknown"}function nu(n){if(vr(n)==="collection")return n.stages[0].Er}function UB(n){if(vr(n)==="collection_group")return n.stages[0].collectionId}function IS(n){switch(vr(n)){case"collection":return Me.fromString(nu(n)).lastSegment();case"collection_group":return UB(n);default:return}}function vl(n){if(vr(n)==="documents")return n.stages[0].hr}function Po(n){if((n=Am(n))instanceof Ci)return`fld(${n.fieldName})`;if(n instanceof pi)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Ye?`ref(${t.path})`:t instanceof Mt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(n.value)})`;if(n instanceof F)return`fn(${n.name},[${n.params.map(Po).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.ur.map(Po).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function wS(n){if(n instanceof wm)return`${n._name}(${Na(n.fields)})`;if(n instanceof Tm){let e=`${n._name}(${Na(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${Na(n.groups)})`),e}if(n instanceof ym)return`${n._name}(${Na(n.groups)})`;if(n instanceof Xc)return`${n._name}(${n.Er})`;if(n instanceof Zc)return`${n._name}(${n.collectionId})`;if(n instanceof NB)return`${n._name}()`;if(n instanceof OB)return`${n._name}(${n.hr.sort()})`;if(n instanceof eu)return`${n._name}(${Po(n.condition)})`;if(n instanceof Cs)return`${n._name}(${n.limit})`;if(n instanceof zn)return`${n._name}(${function(t){return t.map(r=>`${Po(r.expr)}${r.direction}`).join(",")}(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function Na(n){return`${Array.from(n.entries()).sort().map(([e,t])=>`${e}=${Po(t)}`).join(",")}`}function er(n){return n.stages.map(e=>wS(e)).join("|")}function Nm(n,e){return er(n)===er(e)}function Ct(n){return n instanceof bt}function qf(n){return Ct(n)?er(n):no(n)}function Om(n){return Ct(n)?er(n):function(t){return`${Vg(Nn(t))}|lt:${t.limitType}`}(n)}function ru(n,e){return n instanceof bt&&e instanceof bt?Nm(n,e):!(n instanceof bt&&!(e instanceof bt)||!(n instanceof bt)&&e instanceof bt)&&KA(n,e)}function bm(n){return rs(n)?er(n):Vg(n)}function km(n,e){return n instanceof bt&&e instanceof bt?Nm(n,e):!(n instanceof bt&&!(e instanceof bt)||!(n instanceof bt)&&e instanceof bt)&&xg(n,e)}function TS(n,e){const t=function(s){let i=!1;const o=[];for(const a of s)if(a instanceof zn)if(i=!0,a.orderings.some(u=>u.expr instanceof Ci&&u.expr.fieldName===vn))o.push(a);else{const u=a.orderings.map(l=>l);u.push($a(vn).ascending()),o.push(new zn(u,{}))}else a instanceof Cs&&(i||(o.push(new zn([$a(vn).ascending()],{})),i=!0)),o.push(a);return i||o.push(new zn([$a(vn).ascending()],{})),o}(n.stages);if(n.userDataReader){const r=n.userDataReader.createContext(3,"toCorePipeline");t.forEach(s=>s._readUserData(r))}return new bt(n.userDataReader.serializer,t,e)}/**
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
 */class yS{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&AA(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=eo(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=eo(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=jg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const u=Pg(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ae())}isEqual(e){return this.batchId===e.batchId&&Qs(this.mutations,e.mutations,(t,r)=>_f(t,r))&&Qs(this.baseMutations,e.baseMutations,(t,r)=>_f(t,r))}}class GB{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){oe(e.mutations.length===r.length,58842,{Br:e.mutations.length,Ur:r.length});let s=function(){return YA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new GB(e,t,r,s)}}/**
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
 */const Lm="";function AS(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Jf(e)),e=RS(n.get(t),e);return Jf(e)}function RS(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Lm:t+="";break;default:t+=i}}return t}function Jf(n){return n+Lm+""}/**
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
 */class vS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Wn{constructor(e,t,r,s,i=Ee.min(),o=Ee.min(),a=it.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class SS{constructor(e){this.qr=e}}function PS(n){const e=fR({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?lc(e,e.limit,"L"):e}/**
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
 */class NS{constructor(){this.Yi=new OS}addToCollectionParentIndex(e,t){return this.Yi.add(t),U.resolve()}getCollectionParents(e,t){return U.resolve(this.Yi.getEntries(t))}addFieldIndex(e,t){return U.resolve()}deleteFieldIndex(e,t){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,t){return U.resolve()}getDocumentsMatchingTarget(e,t){return U.resolve(null)}getIndexType(e,t){return U.resolve(0)}getFieldIndexes(e,t){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,t){return U.resolve(Fr.min())}getMinOffsetFromCollectionGroup(e,t){return U.resolve(Fr.min())}updateCollectionGroup(e,t,r){return U.resolve()}updateIndexEntries(e,t){return U.resolve()}}class OS{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Bt(Me.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Bt(Me.comparator)).toArray()}}/**
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
 */class Gr{constructor(e){this.gs=e}next(){return this.gs+=2,this.gs}static ys(){return new Gr(0)}static ws(){return new Gr(-1)}}// Copyright 2024 Google LLC* @license
function Fm(n,e){var r;let t=e;for(const s of n.stages)t=kS({serializer:n.serializer,serverTimestampBehavior:(r=n.listenOptions)==null?void 0:r.serverTimestampBehavior},s,t);return t}function su(n,e){return Fm(n,[e]).length>0}function bS(n,e){return Ct(n)?su(n,e):$c(n,e)}function kS(n,e,t){if(e instanceof Xc)return function(s,i,o){return o.filter(a=>a.isFoundDocument()&&`/${a.key.getCollectionPath().canonicalString()}`===i.Er)}(0,e,t);if(e instanceof eu)return function(s,i,o){return o.filter(a=>{const u=io(de(i.condition).evaluate(s,a));return u!==void 0&&fn(u,Xt)})}(n,e,t);if(e instanceof Zc)return function(s,i,o){return o.filter(a=>a.isFoundDocument()&&a.key.getCollectionPath().lastSegment()===i.collectionId)}(0,e,t);if(e instanceof NB)return function(s,i,o){return o.filter(a=>a.isFoundDocument())}(0,0,t);if(e instanceof OB)return function(s,i,o){return o.filter(a=>a.isFoundDocument()&&i.Tr.has(a.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof Cs)return function(s,i,o){return o.slice(0,i.limit)}(0,e,t);if(e instanceof zn)return function(s,i,o){const a=i.orderings.map(u=>({Os:de(u.expr),direction:u.direction}));return[...o].sort((u,l)=>{for(const{Os:h,direction:f}of a){const C=io(h.evaluate(s,u)),I=io(h.evaluate(s,l)),v=Zt(C??Zs,I??Zs);if(v!==0)return f==="ascending"?v:-v}return 0})}(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function Sl(n){const e=function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof zn)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(n);return(t,r)=>{for(const s of e){const i=io(de(s.expr).evaluate({serializer:n.serializer},t)),o=io(de(s.expr).evaluate({serializer:n.serializer},r)),a=Zt(i||Zs,o||Zs);if(a!==0)return s.direction==="ascending"?a:-a}return 0}}function Yu(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof Cs)return{limit:t.limit}}}/**
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
 */class LS{constructor(){this.changes=new Es(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,St.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?U.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class FS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class MS{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&eo(r.mutation,s,on.empty(),Je.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Ae()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Ae()){const s=Dr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Ls();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Dr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Ae()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,s){let i=Kt();const o=ro(),a=function(){return ro()}();return t.forEach((u,l)=>{const h=r.get(l.key);s.has(l.key)&&(h===void 0||h.mutation instanceof zr)?i=i.insert(l.key,l):h!==void 0?(o.set(l.key,h.mutation.getFieldMask()),eo(h.mutation,l,h.mutation.getFieldMask(),Je.now())):o.set(l.key,on.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((l,h)=>o.set(l,h)),t.forEach((l,h)=>a.set(l,new FS(h,o.get(l)??null))),a))}recalculateAndSaveOverlays(e,t){const r=ro();let s=new et((o,a)=>o-a),i=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=t.get(u);if(l===null)return;let h=r.get(u)||on.empty();h=a.applyToLocalView(l,h),r.set(u,h);const f=(s.get(a.batchId)||Ae()).add(u);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,h=u.value,f=jg();h.forEach(C=>{if(!i.has(C)){const I=Pg(t.get(C),r.get(C));I!==null&&f.set(C,I),i=i.add(C)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,f))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return Ct(t)?this.getDocumentsMatchingPipeline(e,t,r,s):qA(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):U.resolve(Dr());let a=To,u=i;return o.next(l=>U.forEach(l,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?U.resolve():this.remoteDocumentCache.getEntry(e,h).next(C=>{u=u.insert(h,C)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,u,l,Ae())).next(h=>({batchId:a,changes:Jg(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ce(t)).next(r=>{let s=Ls();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Ls();return this.indexManager.getCollectionParents(e,i).next(a=>U.forEach(a,u=>{const l=function(f,C){return new hi(C,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(h=>{h.forEach((f,C)=>{o=o.insert(f,C)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>this.retrieveMatchingLocalDocuments(i,o,a=>$c(t,a)))}getDocumentsMatchingPipeline(e,t,r,s){if(vr(t)==="collection_group"){const i=UB(t);let o=Ls();return this.indexManager.getCollectionParents(e,i).next(a=>U.forEach(a,u=>{const l=function(f,C){const I=f.stages.map(v=>v instanceof Zc?new Xc(C.canonicalString(),{}):v);return new bt(f.serializer,I)}(t,u.child(i));return this.getDocumentsMatchingPipeline(e,l,r,s).next(h=>{h.forEach((f,C)=>{o=o.insert(f,C)})})}).next(()=>o))}{let i;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next(o=>{switch(i=o,vr(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s);case"documents":let a=Ae();for(const u of vl(t))a=a.add(ce.fromPath(u));return this.remoteDocumentCache.getEntries(e,a);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new $("invalid-argument",`Invalid pipeline source to execute offline: ${er(t)}`)}}).next(o=>this.retrieveMatchingLocalDocuments(i,o,a=>su(t,a)))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach((i,o)=>{const a=o.getKey();t.get(a)===null&&(t=t.insert(a,St.newInvalidDocument(a)))});let s=Ls();return t.forEach((i,o)=>{const a=e.get(i);a!==void 0&&eo(a.mutation,o,on.empty(),Je.now()),r(o)&&(s=s.insert(i,o))}),s}getOverlaysForPipeline(e,t,r){switch(vr(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,Me.fromString(nu(t)),r);case"collection_group":throw new $("invalid-argument",`Unexpected collection group pipeline: ${er(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,vl(t).map(s=>ce.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new $("invalid-argument",`Failed to get overlays for pipeline: ${er(t)}`)}}}/**
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
 */class VS{constructor(e){this.serializer=e,this.Ks=new Map,this.Ws=new Map}getBundleMetadata(e,t){return U.resolve(this.Ks.get(t))}saveBundleMetadata(e,t){return this.Ks.set(t.id,function(s){return{id:s.id,version:s.version,createTime:On(s.createTime)}}(t)),U.resolve()}getNamedQuery(e,t){return U.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,function(s){return{name:s.name,query:PS(s.bundledQuery),readTime:On(s.readTime)}}(t)),U.resolve()}}/**
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
 */class xS{constructor(){this.overlays=new et(ce.comparator),this.Qs=new Map}getOverlay(e,t){return U.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Dr();return U.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}getAllOverlays(e,t){const r=Dr();return this.overlays.forEach((s,i)=>{i.largestBatchId>t&&r.set(s,i)}),U.resolve(r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Yr(e,t,i)}),U.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Qs.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qs.delete(r)),U.resolve()}getOverlaysForCollection(e,t,r){const s=Dr(),i=t.length+1,o=new ce(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return U.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new et((l,h)=>l-h);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let h=i.get(l.largestBatchId);h===null&&(h=Dr(),i=i.insert(l.largestBatchId,h)),h.set(l.getKey(),l)}}const a=Dr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,h)=>a.set(l,h)),!(a.size()>=s)););return U.resolve(a)}Yr(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qs.get(s.largestBatchId).delete(r.key);this.Qs.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vS(t,r));let i=this.Qs.get(t);i===void 0&&(i=Ae(),this.Qs.set(t,i)),this.Qs.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class US{constructor(){this.sessionToken=it.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,U.resolve()}}/**
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
 */class HB{constructor(){this.Gs=new Bt(_t.zs),this.js=new Bt(_t.Hs)}isEmpty(){return this.Gs.isEmpty()}addReference(e,t){const r=new _t(e,t);this.Gs=this.Gs.add(r),this.js=this.js.add(r)}Js(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ys(new _t(e,t))}Zs(e,t){e.forEach(r=>this.removeReference(r,t))}Xs(e){const t=new ce(new Me([])),r=new _t(t,e),s=new _t(t,e+1),i=[];return this.js.forEachInRange([r,s],o=>{this.Ys(o),i.push(o.key)}),i}e_(){this.Gs.forEach(e=>this.Ys(e))}Ys(e){this.Gs=this.Gs.delete(e),this.js=this.js.delete(e)}t_(e){const t=new ce(new Me([])),r=new _t(t,e),s=new _t(t,e+1);let i=Ae();return this.js.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new _t(e,0),r=this.Gs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class _t{constructor(e,t){this.key=e,this.n_=t}static zs(e,t){return ce.comparator(e.key,t.key)||ve(e.n_,t.n_)}static Hs(e,t){return ve(e.n_,t.n_)||ce.comparator(e.key,t.key)}}/**
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
 */class GS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Qr=1,this.r_=new Bt(_t.zs)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Qr;this.Qr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yS(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this.r_=this.r_.add(new _t(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,t){return U.resolve(this.i_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.s_(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?gB:this.Qr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new _t(t,0),s=new _t(t,Number.POSITIVE_INFINITY),i=[];return this.r_.forEachInRange([r,s],o=>{const a=this.i_(o.n_);i.push(a)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Bt(ve);return t.forEach(s=>{const i=new _t(s,0),o=new _t(s,Number.POSITIVE_INFINITY);this.r_.forEachInRange([i,o],a=>{r=r.add(a.n_)})}),U.resolve(this.__(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;ce.isDocumentKey(i)||(i=i.child(""));const o=new _t(new ce(i),0);let a=new Bt(ve);return this.r_.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(u.n_)),!0)},o),U.resolve(this.__(a))}__(e){const t=[];return e.forEach(r=>{const s=this.i_(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){oe(this.o_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.r_;return U.forEach(t.mutations,s=>{const i=new _t(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.r_=r})}jr(e){}containsKey(e,t){const r=new _t(t,0),s=this.r_.firstAfterOrEqual(r);return U.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}o_(e,t){return this.s_(e)}s_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}i_(e){const t=this.s_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class HS{constructor(e){this.a_=e,this.docs=function(){return new et(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.a_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return U.resolve(r?r.document.mutableCopy():St.newInvalidDocument(t))}getEntries(e,t){let r=Kt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():St.newInvalidDocument(s))}),U.resolve(r)}getAllEntries(e){let t=Kt();return this.docs.forEach((r,s)=>{t=t.insert(r,s.document)}),U.resolve(t)}getDocumentsMatchingQuery(e,t,r,s){let i,o;Ct(t)?(i=Me.fromString(nu(t)),o=h=>su(t,h)):(i=t.path,o=h=>$c(t,h));let a=Kt();const u=new ce(i.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!i.isPrefixOf(h.path))break;h.path.length>i.length+1||UA(xA(f),r)<=0||(s.has(f.key)||o(f))&&(a=a.insert(f.key,f.mutableCopy()))}return U.resolve(a)}getAllFromCollectionGroup(e,t,r,s){Be(9500)}u_(e,t){return U.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new qS(this)}getSize(e){return U.resolve(this.size)}}class qS extends LS{constructor(e){super(),this.qs=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.qs.addEntry(e,s)):this.qs.removeEntry(r)}),U.waitFor(t)}getFromCache(e,t){return this.qs.getEntry(e,t)}getAllFromCache(e,t){return this.qs.getEntries(e,t)}}/**
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
 */class JS{constructor(e){this.persistence=e,this.c_=new Es(t=>bm(t),km),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.l_=0,this.E_=new HB,this.targetCount=0,this.h_=Gr.ys()}forEachTarget(e,t){return this.c_.forEach((r,s)=>t(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.l_)}allocateTargetId(e){return this.highestTargetId=this.h_.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.l_&&(this.l_=t),U.resolve()}Ss(e){this.c_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.h_=new Gr(t),this.highestTargetId=t),e.sequenceNumber>this.l_&&(this.l_=e.sequenceNumber)}addTargetData(e,t){return this.Ss(t),this.targetCount+=1,U.resolve()}updateTargetData(e,t){return this.Ss(t),U.resolve()}removeTargetData(e,t){return this.c_.delete(t.target),this.E_.Xs(t.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.c_.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.c_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,t){const r=this.c_.get(t)||null;return U.resolve(r)}addMatchingKeys(e,t,r){return this.E_.Js(t,r),U.resolve()}removeMatchingKeys(e,t,r){this.E_.Zs(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.E_.Xs(t),U.resolve()}getMatchingKeysForTargetId(e,t){const r=this.E_.t_(t);return U.resolve(r)}containsKey(e,t){return U.resolve(this.E_.containsKey(t))}}/**
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
 */class Mm{constructor(e,t){this.T_={},this.overlays={},this.P_=new Wc(0),this.R_=!1,this.R_=!0,this.I_=new US,this.referenceDelegate=e(this),this.A_=new JS(this),this.indexManager=new NS,this.remoteDocumentCache=function(s){return new HS(s)}(r=>this.referenceDelegate.V_(r)),this.serializer=new SS(t),this.d_=new VS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new xS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.T_[e.toKey()];return r||(r=new GS(t,this.referenceDelegate),this.T_[e.toKey()]=r),r}getGlobalsCache(){return this.I_}getTargetCache(){return this.A_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.d_}runTransaction(e,t,r){Z("MemoryPersistence","Starting transaction:",e);const s=new jS(this.P_.next());return this.referenceDelegate.f_(),r(s).next(i=>this.referenceDelegate.m_(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}p_(e,t){return U.or(Object.values(this.T_).map(r=>()=>r.containsKey(e,t)))}}class jS extends xR{constructor(e){super(),this.currentSequenceNumber=e}}class qB{constructor(e){this.persistence=e,this.g_=new HB,this.y_=null}static w_(e){return new qB(e)}get b_(){if(this.y_)return this.y_;throw Be(60996)}addReference(e,t,r){return this.g_.addReference(r,t),this.b_.delete(r.toString()),U.resolve()}removeReference(e,t,r){return this.g_.removeReference(r,t),this.b_.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,t){return this.b_.add(t.toString()),U.resolve()}removeTarget(e,t){this.g_.Xs(t.targetId).forEach(s=>this.b_.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.b_.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}f_(){this.y_=new Set}m_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.b_,r=>{const s=ce.fromPath(r);return this.v_(e,s).next(i=>{i||t.removeEntry(s,Ee.min())})}).next(()=>(this.y_=null,t.apply(e)))}updateLimboDocument(e,t){return this.v_(e,t).next(r=>{r?this.b_.delete(t.toString()):this.b_.add(t.toString())})}V_(e){return 0}v_(e,t){return U.or([()=>U.resolve(this.g_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.p_(e,t)])}}class pc{constructor(e,t){this.persistence=e,this.S_=new Es(r=>AS(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=JR(this,t)}static w_(e,t){return new pc(e,t)}f_(){}m_(e){return U.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}rr(e){const t=this.xs(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}xs(e){let t=0;return this.ir(e,r=>{t++}).next(()=>t)}ir(e,t){return U.forEach(this.S_,(r,s)=>this.Fs(e,r,s).next(i=>i?U.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.u_(e,o=>this.Fs(e,o,t).next(a=>{a||(r++,i.removeEntry(o,Ee.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.S_.set(t,e.currentSequenceNumber),U.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.S_.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,t,r){return this.S_.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,t){return this.S_.set(t,e.currentSequenceNumber),U.resolve()}V_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=qa(e.data.value)),t}Fs(e,t,r){return U.or([()=>this.persistence.p_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.S_.get(t);return U.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class JB{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ao=r,this.Vo=s}static fo(e,t){let r=Ae(),s=Ae();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new JB(e,t.fromCache,r,s)}}/**
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
 */function KS(n,e){return ce.comparator(n.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class $S{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class zS{constructor(){this.mo=!1,this.po=!1,this.yo=100,this.wo=function(){return M_()?8:UR(Nt())>0?6:4}()}initialize(e,t){this.bo=e,this.indexManager=t,this.mo=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.vo(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.So(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new $S;return this.Do(e,t,o).next(a=>{if(i.result=a,this.po)return this.xo(e,t,o,a.size)})}).next(()=>i.result)}xo(e,t,r,s){return Ct(t)?U.resolve():r.documentReadCount<this.yo?(bs()<=Re.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",no(t),"since it only creates cache indexes for collection contains","more than or equal to",this.yo,"documents"),U.resolve()):(bs()<=Re.DEBUG&&Z("QueryEngine","Query:",no(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.wo*s?(bs()<=Re.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",no(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(t))):U.resolve())}vo(e,t){if(Ct(t))return U.resolve(null);let r=t;if(Af(r))return U.resolve(null);let s=Nn(r);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(r.limit!==null&&i===1&&(r=lc(r,null,"F"),s=Nn(r)),this.indexManager.getDocumentsMatchingTarget(e,s).next(o=>{const a=Ae(...o);return this.bo.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,s).next(l=>{const h=this.Co(r,u);return this.Fo(r,h,a,l.readTime)?this.vo(e,lc(r,null,"F")):this.Oo(e,h,r,l)}))})))}So(e,t,r,s){return(Ct(t)?function(o){for(const a of o.stages){if(a instanceof Cs||a instanceof Hf)return!1;if(a instanceof eu){if(a.condition instanceof _m&&a.condition._expr.name==="exists"&&a.condition._expr.params[0]instanceof Ci&&a.condition._expr.params[0].fieldName===vn)continue;return!1}}return!0}(t):Af(t))||s.isEqual(Ee.min())?U.resolve(null):this.bo.getDocuments(e,r).next(i=>{const o=this.Co(t,i);return this.Fo(t,o,r,s)?U.resolve(null):(bs()<=Re.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qf(t)),this.Oo(e,o,t,VA(s,To)).next(a=>a))})}Co(e,t){let r,s;return Ct(e)?(r=new Bt(KS),s=i=>su(e,i)):(r=new Bt(IB(e)),s=i=>$c(e,i)),t.forEach((i,o)=>{s(o)&&(r=r.add(o))}),r}Fo(e,t,r,s){if(Ct(e))return function(a){return a.stages.some(u=>u instanceof Cs||u instanceof Hf)}(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Do(e,t,r){return bs()<=Re.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",qf(t)),this.bo.getDocumentsMatchingQuery(e,t,Fr.min(),r)}Oo(e,t,r,s){return this.bo.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const jB="LocalStore",WS=3e8;class QS{constructor(e,t,r,s){this.persistence=e,this.Mo=t,this.serializer=s,this.No=new et(ve),this.Lo=new Es(i=>bm(i),km),this.Bo=new Map,this.Uo=e.getRemoteDocumentCache(),this.A_=e.getTargetCache(),this.d_=e.getBundleCache(),this.ko(r)}ko(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new MS(this.Uo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Uo.setIndexManager(this.indexManager),this.Mo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.No))}}function YS(n,e,t,r){return new QS(n,e,t,r)}async function Vm(n,e){const t=_e(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ko(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=Ae();for(const l of s){o.push(l.batchId);for(const h of l.mutations)u=u.add(h.key)}for(const l of i){a.push(l.batchId);for(const h of l.mutations)u=u.add(h.key)}return t.localDocuments.getDocuments(r,u).next(l=>({qo:l,removedBatchIds:o,addedBatchIds:a}))})})}function XS(n,e){const t=_e(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Uo.newChangeBuffer({trackRemovals:!0});return function(a,u,l,h){const f=l.batch,C=f.keys();let I=U.resolve();return C.forEach(v=>{I=I.next(()=>h.getEntry(u,v)).next(V=>{const H=l.docVersions.get(v);oe(H!==null,48541),V.version.compareTo(H)<0&&(f.applyToRemoteDocument(V,l),V.isValidDocument()&&(V.setReadTime(l.commitVersion),h.addEntry(V)))})}),I.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=Ae();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(u=u.add(a.batch.mutations[l].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function xm(n){const e=_e(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.A_.getLastRemoteSnapshotVersion(t))}function ZS(n,e){const t=_e(n),r=e.snapshotVersion;let s=t.No;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Uo.newChangeBuffer({trackRemovals:!0});s=t.No;const a=[];e.targetChanges.forEach((h,f)=>{const C=s.get(f);if(!C)return;a.push(t.A_.removeMatchingKeys(i,h.removedDocuments,f).next(()=>t.A_.addMatchingKeys(i,h.addedDocuments,f)));let I=C.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?I=I.withResumeToken(it.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):h.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(h.resumeToken,r)),s=s.insert(f,I),function(V,H,Y){return V.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=WS?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(C,I,h)&&a.push(t.A_.updateTargetData(i,I))});let u=Kt(),l=Ae();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(eP(i,o,e.documentUpdates).next(h=>{u=h.$o,l=h.Ko})),!r.isEqual(Ee.min())){const h=t.A_.getLastRemoteSnapshotVersion(i).next(f=>t.A_.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return U.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,l)).next(()=>u)}).then(i=>(t.No=s,i))}function eP(n,e,t){let r=Ae(),s=Ae();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=Kt();return t.forEach((a,u)=>{const l=i.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(Ee.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):Z(jB,"Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{$o:o,Ko:s}})}function tP(n,e){const t=_e(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=gB),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nP(n,e){const t=_e(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.A_.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):t.A_.allocateTargetId(r).next(o=>(s=new Wn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.A_.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.No.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.No=t.No.insert(r.targetId,r),t.Lo.set(e,r.targetId)),r})}async function Pl(n,e,t){const r=_e(n),s=r.No.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!fi(o))throw o;Z(jB,`Failed to update sequence numbers for target ${e}: ${o}`)}r.No=r.No.remove(e),r.Lo.delete(s.target)}function jf(n,e,t){const r=_e(n);let s=Ee.min(),i=Ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,l,h){const f=_e(u),C=f.Lo.get(h);return C!==void 0?U.resolve(f.No.get(C)):f.A_.getTargetData(l,h)}(r,o,Ct(e)?e:Nn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.A_.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.Mo.getDocumentsMatchingQuery(o,e,t?s:Ee.min(),t?i:Ae())).next(a=>(rP(r,a),{documents:a,Wo:i})))}function rP(n,e){e.forEach((t,r)=>{const s=r.key.getCollectionGroup(),i=n.Bo.get(s)||Ee.min();r.readTime.compareTo(i)>0&&n.Bo.set(s,r.readTime)})}/**
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
 */class sP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Jo=0,this.Yo=null,this.Zo=!0}Xo(){this.Jo===0&&(this.ea("Unknown"),this.Yo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Yo=null,this.ta("Backend didn't respond within 10 seconds."),this.ea("Offline"),Promise.resolve())))}na(e){this.state==="Online"?this.ea("Unknown"):(this.Jo++,this.Jo>=1&&(this.ra(),this.ta(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ea("Offline")))}set(e){this.ra(),this.Jo=0,e==="Online"&&(this.Zo=!1),this.ea(e)}ea(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ta(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Zo?(sr(t),this.Zo=!1):Z("OnlineStateTracker",t)}ra(){this.Yo!==null&&(this.Yo.cancel(),this.Yo=null)}}/**
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
 */const Ln="RemoteStore";class iP{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ia=[],this.sa=new Map,this._a=new Map,this.oa=new Map,this.aa=new Gr(1e3),this.ua=new Gr(1001),this.ca=new Set,this.la=[],this.Ea=i,this.Ea.Ke(o=>{r.enqueueAndForget(async()=>{Ds(this)&&(Z(Ln,"Restarting streams for network reachability change."),await async function(u){const l=_e(u);l.ca.add(4),await zo(l),l.ha.set("Unknown"),l.ca.delete(4),await iu(l)}(this))})}),this.ha=new sP(r,s)}}async function iu(n){if(Ds(n))for(const e of n.la)await e(!0)}async function zo(n){for(const e of n.la)await e(!1)}function Nl(n,e){return n._a.get(e)||void 0}function Um(n,e){const t=_e(n),r=Nl(t,e.targetId);if(r!==void 0&&t.sa.has(r))return;const s=function(a,u){const l=Nl(a,u);l!==void 0&&a.oa.delete(l);const h=function(C,I){return I%2!=0?C.ua.next():C.aa.next()}(a,u);return a._a.set(u,h),a.oa.set(h,u),h}(t,e.targetId);Z(Ln,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Wn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.sa.set(s,i),WB(t)?zB(t):Ei(t).Jt()&&$B(t,i)}function KB(n,e){const t=_e(n),r=Ei(t),s=Nl(t,e);Z(Ln,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.sa.delete(s),t._a.delete(e),t.oa.delete(s),r.Jt()&&Gm(t,s),t.sa.size===0&&(r.Jt()?r.Xt():Ds(t)&&t.ha.set("Unknown"))}function $B(n,e){if(n.Ta.H(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=n.oa.get(e.targetId);if(t===void 0)return void Z(Ln,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}Ei(n).Tn(e)}function Gm(n,e){n.Ta.H(e),Ei(n).Pn(e)}function zB(n){n.Ta=new rR({getRemoteKeysForTarget:e=>{const t=n.oa.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):Ae()},ge:e=>n.sa.get(e)||null,Ae:()=>n.datastore.serializer.databaseId}),Ei(n).start(),n.ha.Xo()}function WB(n){return Ds(n)&&!Ei(n).Ht()&&n.sa.size>0}function Ds(n){return _e(n).ca.size===0}function Hm(n){n.Ta=void 0}async function oP(n){n.ha.set("Online")}async function aP(n){n.sa.forEach((e,t)=>{$B(n,e)})}async function cP(n,e){Hm(n),WB(n)?(n.ha.na(e),zB(n)):n.ha.set("Unknown")}async function uP(n,e,t){if(n.ha.set("Online"),e instanceof $g&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds){if(s.sa.has(a)){const u=s.oa.get(a);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s._a.delete(u),s.oa.delete(a)),s.sa.delete(a)}s.Ta.removeTarget(a)}}(n,e)}catch(r){Z(Ln,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gc(n,r)}else if(e instanceof ja?n.Ta.se(e):e instanceof Kg?n.Ta.Ee(e):n.Ta.ae(e),!t.isEqual(Ee.min()))try{const r=await xm(n.localStore);t.compareTo(r)>=0&&await function(i,o){const a=i.Ta.de(o);a.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.sa.get(h);f&&i.sa.set(h,f.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,h)=>{const f=i.sa.get(l);if(!f)return;i.sa.set(l,f.withResumeToken(it.EMPTY_BYTE_STRING,f.snapshotVersion)),Gm(i,l);const C=new Wn(f.target,l,h,f.sequenceNumber);$B(i,C)});const u=function(h,f){const C=new Map;f.targetChanges.forEach((v,V)=>{const H=h.oa.get(V);H!==void 0&&C.set(H,v)});let I=new et(ve);return f.targetMismatches.forEach((v,V)=>{const H=h.oa.get(v);H!==void 0&&(I=I.insert(H,V))}),new qo(f.snapshotVersion,C,I,f.documentUpdates,f.augmentedDocumentUpdates,f.resolvedLimboDocuments)}(i,a);return i.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){Z(Ln,"Failed to raise snapshot:",r),await gc(n,r)}}async function gc(n,e,t){if(!fi(e))throw e;n.ca.add(1),await zo(n),n.ha.set("Offline"),t||(t=()=>xm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Z(Ln,"Retrying IndexedDB access"),await t(),n.ca.delete(1),await iu(n)})}function qm(n,e){return e().catch(t=>gc(n,t,e))}async function ou(n){const e=_e(n),t=Hr(e);let r=e.ia.length>0?e.ia[e.ia.length-1].batchId:gB;for(;lP(e);)try{const s=await tP(e.localStore,r);if(s===null){e.ia.length===0&&t.Xt();break}r=s.batchId,BP(e,s)}catch(s){await gc(e,s)}Jm(e)&&jm(e)}function lP(n){return Ds(n)&&n.ia.length<10}function BP(n,e){n.ia.push(e);const t=Hr(n);t.Jt()&&t.Rn&&t.In(e.mutations)}function Jm(n){return Ds(n)&&!Hr(n).Ht()&&n.ia.length>0}function jm(n){Hr(n).start()}async function hP(n){Hr(n).dn()}async function dP(n){const e=Hr(n);for(const t of n.ia)e.In(t.mutations)}async function fP(n,e,t){const r=n.ia.shift(),s=GB.from(r,e,t);await qm(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ou(n)}async function CP(n,e){e&&Hr(n).Rn&&await async function(r,s){if(function(o){return WA(o)&&o!==M.ABORTED}(s.code)){const i=r.ia.shift();Hr(r).Zt(),await qm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ou(r)}}(n,e),Jm(n)&&jm(n)}async function Kf(n,e){const t=_e(n);t.asyncQueue.verifyOperationInProgress(),Z(Ln,"RemoteStore received new credentials");const r=Ds(t);t.ca.add(3),await zo(t),r&&t.ha.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.ca.delete(3),await iu(t)}async function pP(n,e){const t=_e(n);e?(t.ca.delete(2),await iu(t)):e||(t.ca.add(2),await zo(t),t.ha.set("Unknown"))}function Ei(n){return n.Pa||(n.Pa=function(t,r,s){const i=_e(t);return i.mn(),new NR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ut:oP.bind(null,n),lt:aP.bind(null,n),ht:cP.bind(null,n),hn:uP.bind(null,n)}),n.la.push(async e=>{e?(n.Pa.Zt(),WB(n)?zB(n):n.ha.set("Unknown")):(await n.Pa.stop(),Hm(n))})),n.Pa}function Hr(n){return n.Ra||(n.Ra=function(t,r,s){const i=_e(t);return i.mn(),new OR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ut:()=>Promise.resolve(),lt:hP.bind(null,n),ht:CP.bind(null,n),An:dP.bind(null,n),Vn:fP.bind(null,n)}),n.la.push(async e=>{e?(n.Ra.Zt(),await ou(n)):(await n.Ra.stop(),n.ia.length>0&&(Z(Ln,`Stopping write stream with ${n.ia.length} pending writes`),n.ia=[]))})),n.Ra}/**
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
 */class QB{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ia(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ia(this.observer.error,e):sr("Uncaught Error in snapshot listener:",e.toString()))}Aa(){this.muted=!0}Ia(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class YB{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new YB(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function XB(n,e){if(sr("AsyncQueue",`${e}: ${n}`),fi(n))return new $(M.UNAVAILABLE,`${e}: ${n}`);throw n}class $f{constructor(){this.activeTargetIds=eR()}La(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ba(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Na(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gP{constructor(){this.du=new $f,this.fu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.du.La(e),this.fu[e]||"not-current"}updateQueryState(e,t,r){this.fu[e]=t}removeLocalQueryTarget(e){this.du.Ba(e)}isLocalQueryTarget(e){return this.du.activeTargetIds.has(e)}clearQueryState(e){delete this.fu[e]}getAllActiveQueryTargets(){return this.du.activeTargetIds}isActiveQueryTarget(e){return this.du.activeTargetIds.has(e)}start(){return this.du=new $f,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function Xu(){return typeof document<"u"?document:null}/**
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
 */class hs{static emptySet(e){return new hs(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ce.comparator(t.key,r.key):(t,r)=>ce.comparator(t.key,r.key),this.keyedMap=Ls(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof hs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new hs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class zf{constructor(){this.mu=new et(ce.comparator)}track(e){const t=e.doc.key,r=this.mu.get(t);r?e.type!==0&&r.type===3?this.mu=this.mu.insert(t,e):e.type===3&&r.type!==1?this.mu=this.mu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.mu=this.mu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.mu=this.mu.remove(t):e.type===1&&r.type===2?this.mu=this.mu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):Be(63341,{ye:e,pu:r}):this.mu=this.mu.insert(t,e)}gu(){const e=[];return this.mu.inorderTraversal((t,r)=>{e.push(r)}),e}}class ni{constructor(e,t,r,s,i,o,a,u,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new ni(e,t,hs.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ru(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class mP{constructor(){this.yu=void 0,this.wu=[]}bu(){return this.wu.some(e=>e.vu())}}class EP{constructor(){this.queries=Wf(),this.onlineState="Unknown",this.Su=new Set}terminate(){(function(t,r){const s=_e(t),i=s.queries;s.queries=Wf(),i.forEach((o,a)=>{for(const u of a.wu)u.onError(r)})})(this,new $(M.ABORTED,"Firestore shutting down"))}}function Wf(){return new Es(n=>Om(n),ru)}async function ZB(n,e){const t=_e(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.bu()&&e.vu()&&(r=2):(i=new mP,r=e.vu()?0:1);try{switch(r){case 0:i.yu=await t.onListen(s,!0);break;case 1:i.yu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=XB(o,`Initialization of query '${Ct(e.query)?er(e.query):no(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.wu.push(e),e.Du(t.onlineState),i.yu&&e.xu(i.yu)&&th(t)}async function eh(n,e){const t=_e(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.wu.indexOf(e);o>=0&&(i.wu.splice(o,1),i.wu.length===0?s=e.vu()?0:1:!i.bu()&&e.vu()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function _P(n,e){const t=_e(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.wu)a.xu(s)&&(r=!0);o.yu=s}}r&&th(t)}function DP(n,e,t){const r=_e(n),s=r.queries.get(e);if(s)for(const i of s.wu)i.onError(t);r.queries.delete(e)}function th(n){n.Su.forEach(e=>{e.next()})}var Ol;(function(n){n.Default="default",n.Cache="cache"})(Ol||(Ol={}));class nh{constructor(e,t,r){this.query=e,this.Cu=t,this.Fu=!1,this.Ou=null,this.onlineState="Unknown",this.options=r||{}}xu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ni(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Mu(e)&&(this.Cu.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.Lu(e),t=!0),this.Ou=e,t}onError(e){this.Cu.error(e)}Du(e){this.onlineState=e;let t=!1;return this.Ou&&!this.Fu&&this.Nu(this.Ou,e)&&(this.Lu(this.Ou),t=!0),t}Nu(e,t){if(!e.fromCache||!this.vu())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Mu(e){if(e.docChanges.length>0)return!0;const t=this.Ou&&this.Ou.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Lu(e){e=ni.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Cu.next(e)}vu(){return this.options.source!==Ol.Cache}}/**
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
 */class Km{constructor(e){this.key=e}}class $m{constructor(e){this.key=e}}class IP{constructor(e,t){this.query=e,this.Gu=t,this.zu=null,this.hasCachedResults=!1,this.current=!1,this.ju=Ae(),this.mutatedKeys=Ae(),this.Hu=Ct(e)?Sl(e):IB(e),this.Ju=new hs(this.Hu)}get Yu(){return this.Gu}Zu(e,t){const r=t?t.Xu:new zf,s=t?t.Ju:this.Ju;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const[u,l]=this.ec(this.query,s);e.inorderTraversal((f,C)=>{const I=s.get(f),v=bS(this.query,C)?C:null,V=!!I&&this.mutatedKeys.has(I.key),H=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let Y=!1;I&&v?I.data.isEqual(v.data)?V!==H&&(r.track({type:3,doc:v}),Y=!0):this.tc(I,v)||(r.track({type:2,doc:v}),Y=!0,(u&&this.Hu(v,u)>0||l&&this.Hu(v,l)<0)&&(a=!0)):!I&&v?(r.track({type:0,doc:v}),Y=!0):I&&!v&&(r.track({type:1,doc:I}),Y=!0,(u||l)&&(a=!0)),Y&&(v?(o=o.add(v),i=H?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))});const h=this.nc(this.query);if(h)if(Ct(this.query)){const f=[];o.forEach(v=>f.push(v));const C=Fm(this.query,f);let I=new hs(Sl(this.query));for(const v of C)I=I.add(v);o.forEach(v=>{I.has(v.key)||(i=i.delete(v.key),r.track({type:1,doc:v}))}),o=I}else{const f=this.rc(this.query);for(;o.size>h;){const C=f==="F"?o.last():o.first();o=o.delete(C.key),i=i.delete(C.key),r.track({type:1,doc:C})}}return{Ju:o,Xu:r,Fo:a,mutatedKeys:i}}nc(e){var t;return Ct(e)?(t=Yu(e))==null?void 0:t.limit:e.limit||void 0}rc(e){if(Ct(e)){const t=Yu(e);return t&&t.limit<0?"L":"F"}return e.limitType}ec(e,t){var r;if(Ct(e)){const s=(r=Yu(e))==null?void 0:r.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.nc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.nc(this.query)?t.first():null]}tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ju;this.Ju=e.Ju,this.mutatedKeys=e.mutatedKeys;const o=e.Xu.gu();o.sort((h,f)=>function(I,v){const V=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Be(20277,{ye:H})}};return V(I)-V(v)}(h.type,f.type)||this.Hu(h.doc,f.doc)),this.sc(r),s=s??!1;const a=t&&!s?this._c():[],u=this.ju.size===0&&this.current&&!s?1:0,l=u!==this.zu;return this.zu=u,o.length!==0||l?{snapshot:new ni(this.query,e.Ju,i,o,e.mutatedKeys,u===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),oc:a}:{oc:a}}Du(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ju:this.Ju,Xu:new zf,mutatedKeys:this.mutatedKeys,Fo:!1},!1)):{oc:[]}}ac(e){return!this.Gu.has(e)&&!!this.Ju.has(e)&&!this.Ju.get(e).hasLocalMutations}sc(e){e&&(e.addedDocuments.forEach(t=>this.Gu=this.Gu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Gu=this.Gu.delete(t)),this.current=e.current)}_c(){if(!this.current)return[];const e=this.ju;this.ju=Ae(),this.Ju.forEach(r=>{this.ac(r.key)&&(this.ju=this.ju.add(r.key))});const t=[];return e.forEach(r=>{this.ju.has(r)||t.push(new $m(r))}),this.ju.forEach(r=>{e.has(r)||t.push(new Km(r))}),t}uc(e){this.Gu=e.Wo,this.ju=Ae();const t=this.Zu(e.documents);return this.applyChanges(t,!0)}cc(){return ni.fromInitialDocuments(this.query,this.Ju,this.mutatedKeys,this.zu===0,this.hasCachedResults)}}const rh="SyncEngine";class wP{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class TP{constructor(e){this.key=e,this.lc=!1}}class yP{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ec={},this.hc=new Es(a=>Om(a),ru),this.Tc=new Map,this.Pc=new Set,this.Rc=new et(ce.comparator),this.Ic=new Map,this.Ac=new HB,this.Vc={},this.dc=new Map,this.fc=Gr.ws(),this.onlineState="Unknown",this.mc=void 0}get isPrimaryClient(){return this.mc===!0}}async function AP(n,e,t=!0){const r=Zm(n);let s;const i=r.hc.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cc()):s=await zm(r,e,t,!0),s}async function RP(n,e){const t=Zm(n);await zm(t,e,!0,!1)}async function zm(n,e,t,r){const s=await nP(n.localStore,Ct(e)?e:Nn(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let a;return r&&(a=await vP(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Um(n.remoteStore,s),a}async function vP(n,e,t,r,s){n.gc=(f,C,I)=>async function(V,H,Y,ie){let ye=H.view.Zu(Y);ye.Fo&&(ye=await jf(V.localStore,H.query,!1).then(({documents:A})=>H.view.Zu(A,ye)));const Te=ie&&ie.targetChanges.get(H.targetId),Le=ie&&ie.targetMismatches.get(H.targetId)!=null,Ve=H.view.applyChanges(ye,V.isPrimaryClient,Te,Le);return Yf(V,H.targetId,Ve.oc),Ve.snapshot}(n,f,C,I);const i=await jf(n.localStore,e,!0),o=new IP(e,i.Wo),a=o.Zu(i.documents),u=Jo.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),l=o.applyChanges(a,n.isPrimaryClient,u);Yf(n,t,l.oc);const h=new wP(e,t,o);return n.hc.set(e,h),n.Tc.has(t)?n.Tc.get(t).push(e):n.Tc.set(t,[e]),l.snapshot}async function SP(n,e,t){const r=_e(n),s=r.hc.get(e),i=r.Tc.get(s.targetId);if(i.length>1)return r.Tc.set(s.targetId,i.filter(o=>!ru(o,e))),void r.hc.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Pl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&KB(r.remoteStore,s.targetId),bl(r,s.targetId)}).catch(di)):(bl(r,s.targetId),await Pl(r.localStore,s.targetId,!0))}async function PP(n,e){const t=_e(n),r=t.hc.get(e),s=t.Tc.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),KB(t.remoteStore,r.targetId))}async function NP(n,e,t){const r=VP(n);try{const s=await function(o,a){const u=_e(o),l=Je.now(),h=a.reduce((I,v)=>I.add(v.key),Ae());let f,C;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let v=Kt(),V=Ae();return u.Uo.getEntries(I,h).next(H=>{v=H,v.forEach((Y,ie)=>{ie.isValidDocument()||(V=V.add(Y))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,v)).next(H=>{f=H;const Y=[];for(const ie of a){const ye=RA(ie,f.get(ie.key).overlayedDocument);ye!=null&&Y.push(new zr(ie.key,ye,yg(ye.value.mapValue),hn.exists(!0)))}return u.mutationQueue.addMutationBatch(I,l,Y,a)}).next(H=>{C=H;const Y=H.applyToLocalDocumentSet(f,V);return u.documentOverlayCache.saveOverlays(I,H.batchId,Y)})}).then(()=>({batchId:C.batchId,changes:Jg(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,u){let l=o.Vc[o.currentUser.toKey()];l||(l=new et(ve)),l=l.insert(a,u),o.Vc[o.currentUser.toKey()]=l}(r,s.batchId,t),await Wo(r,s.changes),await ou(r.remoteStore)}catch(s){const i=XB(s,"Failed to persist write");t.reject(i)}}async function Wm(n,e){const t=_e(n);try{const r=await ZS(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Ic.get(i);o&&(oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lc=!0:s.modifiedDocuments.size>0?oe(o.lc,14607):s.removedDocuments.size>0&&(oe(o.lc,42227),o.lc=!1))}),await Wo(t,r,e)}catch(r){await di(r)}}function Qf(n,e,t){const r=_e(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.hc.forEach((i,o)=>{const a=o.view.Du(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=_e(o);u.onlineState=a;let l=!1;u.queries.forEach((h,f)=>{for(const C of f.wu)C.Du(a)&&(l=!0)}),l&&th(u)}(r.eventManager,e),s.length&&r.Ec.hn(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OP(n,e,t){const r=_e(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ic.get(e),i=s&&s.key;if(i){let o=new et(ce.comparator);o=o.insert(i,St.newNoDocument(i,Ee.min()));const a=Ae().add(i),u=new qo(Ee.min(),new Map,new et(ve),o,Kt(),a);await Wm(r,u),r.Rc=r.Rc.remove(i),r.Ic.delete(e),sh(r)}else await Pl(r.localStore,e,!1).then(()=>bl(r,e,t)).catch(di)}async function bP(n,e){const t=_e(n),r=e.batch.batchId;try{const s=await XS(t.localStore,e);Ym(t,r,null),Qm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Wo(t,s)}catch(s){await di(s)}}async function kP(n,e,t){const r=_e(n);try{const s=await function(o,a){const u=_e(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let h;return u.mutationQueue.lookupMutationBatch(l,a).next(f=>(oe(f!==null,37113),h=f.keys(),u.mutationQueue.removeMutationBatch(l,f))).next(()=>u.mutationQueue.performConsistencyCheck(l)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(l,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,h)).next(()=>u.localDocuments.getDocuments(l,h))})}(r.localStore,e);Ym(r,e,t),Qm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Wo(r,s)}catch(s){await di(s)}}function Qm(n,e){(n.dc.get(e)||[]).forEach(t=>{t.resolve()}),n.dc.delete(e)}function Ym(n,e,t){const r=_e(n);let s=r.Vc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vc[r.currentUser.toKey()]=s}}function bl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tc.get(e))n.hc.delete(r),t&&n.Ec.yc(r,t);n.Tc.delete(e),n.isPrimaryClient&&n.Ac.Xs(e).forEach(r=>{n.Ac.containsKey(r)||Xm(n,r)})}function Xm(n,e){n.Pc.delete(e.path.canonicalString());const t=n.Rc.get(e);t!==null&&(KB(n.remoteStore,t),n.Rc=n.Rc.remove(e),n.Ic.delete(t),sh(n))}function Yf(n,e,t){for(const r of t)r instanceof Km?(n.Ac.addReference(r.key,e),LP(n,r)):r instanceof $m?(Z(rh,"Document no longer in limbo: "+r.key),n.Ac.removeReference(r.key,e),n.Ac.containsKey(r.key)||Xm(n,r.key)):Be(19791,{wc:r})}function LP(n,e){const t=e.key,r=t.path.canonicalString();n.Rc.get(t)||n.Pc.has(r)||(Z(rh,"New document in limbo: "+t),n.Pc.add(r),sh(n))}function sh(n){for(;n.Pc.size>0&&n.Rc.size<n.maxConcurrentLimboResolutions;){const e=n.Pc.values().next().value;n.Pc.delete(e);const t=new ce(Me.fromString(e)),r=n.fc.next();n.Ic.set(r,new TP(t)),n.Rc=n.Rc.insert(t,r),Um(n.remoteStore,new Wn(Nn(Kc(t.path)),r,"TargetPurposeLimboResolution",Wc.yn))}}async function Wo(n,e,t){const r=_e(n),s=[],i=[],o=[];r.hc.isEmpty()||(r.hc.forEach((a,u)=>{o.push(r.gc(u,e,t).then(l=>{var h;if((l||t)&&r.isPrimaryClient){const f=l?!l.fromCache:(h=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(l){s.push(l);const f=JB.fo(u.targetId,l);i.push(f)}}))}),await Promise.all(o),r.Ec.hn(s),await async function(u,l){const h=_e(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>U.forEach(l,C=>U.forEach(C.Ao,I=>h.persistence.referenceDelegate.addReference(f,C.targetId,I)).next(()=>U.forEach(C.Vo,I=>h.persistence.referenceDelegate.removeReference(f,C.targetId,I)))))}catch(f){if(!fi(f))throw f;Z(jB,"Failed to update sequence numbers: "+f)}for(const f of l){const C=f.targetId;if(!f.fromCache){const I=h.No.get(C),v=I.snapshotVersion,V=I.withLastLimboFreeSnapshotVersion(v);h.No=h.No.insert(C,V)}}}(r.localStore,i))}async function FP(n,e){const t=_e(n);if(!t.currentUser.isEqual(e)){Z(rh,"User change. New user:",e.toKey());const r=await Vm(t.localStore,e);t.currentUser=e,function(i,o){i.dc.forEach(a=>{a.forEach(u=>{u.reject(new $(M.CANCELLED,o))})}),i.dc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wo(t,r.qo)}}function MP(n,e){const t=_e(n),r=t.Ic.get(e);if(r&&r.lc)return Ae().add(r.key);{let s=Ae();const i=t.Tc.get(e);if(!i)return s;for(const o of i??[]){const a=t.hc.get(o);s=s.unionWith(a.view.Yu)}return s}}function Zm(n){const e=_e(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OP.bind(null,e),e.Ec.hn=_P.bind(null,e.eventManager),e.Ec.yc=DP.bind(null,e.eventManager),e}function VP(n){const e=_e(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kP.bind(null,e),e}class mc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zc(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Sc(e),await this.persistence.start(),this.localStore=this.Dc(e),this.gcScheduler=this.xc(e,this.localStore),this.indexBackfillerScheduler=this.Cc(e,this.localStore)}xc(e,t){return null}Cc(e,t){return null}Dc(e){return YS(this.persistence,new zS,e.initialUser,this.serializer)}Sc(e){return new Mm(qB.w_,this.serializer)}vc(e){return new gP}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}mc.provider={build:()=>new mc};class xP extends mc{constructor(e){super(),this.cacheSizeBytes=e}xc(e,t){oe(this.persistence.referenceDelegate instanceof pc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new HR(r,e.asyncQueue,t)}Sc(e){const t=this.cacheSizeBytes!==void 0?Jt.withCacheSize(this.cacheSizeBytes):Jt.DEFAULT;return new Mm(r=>pc.w_(r,t),this.serializer)}}class kl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FP.bind(null,this.syncEngine),await pP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new EP}()}createDatastore(e){const t=zc(e.databaseInfo.databaseId),r=PR(e.databaseInfo);return LR(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,a){return new iP(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Qf(this.syncEngine,t,0),function(){return kf.Je()?new kf:new AR}())}createSyncEngine(e,t){return function(s,i,o,a,u,l,h){const f=new yP(s,i,o,a,u,l);return h&&(f.mc=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=_e(s);Z(Ln,"RemoteStore shutting down."),i.ca.add(5),await zo(i),i.Ea.shutdown(),i.ha.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}kl.provider={build:()=>new kl};/**
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
 */const qr="FirestoreClient";class UP{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=qt.UNAUTHENTICATED,this.clientId=xc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z(qr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z(qr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=XB(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zu(n,e){n.asyncQueue.verifyOperationInProgress(),Z(qr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Vm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Xf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await GP(n);Z(qr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Kf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Kf(e.remoteStore,s)),n._onlineComponents=e}async function GP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Z(qr,"Using user provided OfflineComponentProvider");try{await Zu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;En("Error using user provided cache. Falling back to memory cache: "+t),await Zu(n,new mc)}}else Z(qr,"Using default OfflineComponentProvider"),await Zu(n,new xP(void 0));return n._offlineComponents}async function eE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Z(qr,"Using user provided OnlineComponentProvider"),await Xf(n,n._uninitializedComponentsProvider._online)):(Z(qr,"Using default OnlineComponentProvider"),await Xf(n,new kl))),n._onlineComponents}function HP(n){return eE(n).then(e=>e.syncEngine)}async function Ec(n){const e=await eE(n),t=e.eventManager;return t.onListen=AP.bind(null,e.syncEngine),t.onUnlisten=SP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=RP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=PP.bind(null,e.syncEngine),t}function qP(n,e,t,r){const s=new QB(r),i=new nh(e,s,t);return n.asyncQueue.enqueueAndForget(async()=>ZB(await Ec(n),i)),()=>{s.Aa(),n.asyncQueue.enqueueAndForget(async()=>eh(await Ec(n),i))}}function tE(n,e,t={}){const r=new Xn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,l){const h=new QB({next:C=>{h.Aa(),o.enqueueAndForget(()=>eh(i,f));const I=C.docs.has(a);!I&&C.fromCache?l.reject(new $(M.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&C.fromCache&&u&&u.source==="server"?l.reject(new $(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(C)},error:C=>l.reject(C)}),f=new nh(Kc(a.path),h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return ZB(i,f)}(await Ec(n),n.asyncQueue,e,t,r)),r.promise}function JP(n,e,t={}){const r=new Xn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,l){const h=new QB({next:C=>{h.Aa(),o.enqueueAndForget(()=>eh(i,f)),C.fromCache&&u.source==="server"?l.reject(new $(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(C)},error:C=>l.reject(C)}),f=new nh(a instanceof so?TS(a):a,h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return ZB(i,f)}(await Ec(n),n.asyncQueue,e,t,r)),r.promise}function jP(n,e){const t=new Xn;return n.asyncQueue.enqueueAndForget(async()=>NP(await HP(n),e,t)),t.promise}/**
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
 */const Zf="AsyncQueue";class eC{constructor(e=Promise.resolve()){this.Wc=[],this.Qc=!1,this.Gc=[],this.zc=null,this.jc=!1,this.Hc=!1,this.Jc=[],this.jt=new om(this,"async_queue_retry"),this.Yc=()=>{const r=Xu();r&&Z(Zf,"Visibility state changed to "+r.visibilityState),this.jt.qt()},this.Zc=e;const t=Xu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.el(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const t=Xu();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const t=new Xn;return this.el(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Wc.push(e),this.tl()))}async tl(){if(this.Wc.length!==0){try{await this.Wc[0](),this.Wc.shift(),this.jt.reset()}catch(e){if(!fi(e))throw e;Z(Zf,"Operation failed with retryable error: "+e)}this.Wc.length>0&&this.jt.Ut(()=>this.tl())}}el(e){const t=this.Zc.then(()=>(this.jc=!0,e().catch(r=>{throw this.zc=r,this.jc=!1,sr("INTERNAL UNHANDLED ERROR: ",tC(r)),r}).then(r=>(this.jc=!1,r))));return this.Zc=t,t}enqueueAfterDelay(e,t,r){this.Xc(),this.Jc.indexOf(e)>-1&&(t=0);const s=YB.createAndSchedule(this,e,t,r,i=>this.nl(i));return this.Gc.push(s),s}Xc(){this.zc&&Be(47125,{rl:tC(this.zc)})}verifyOperationInProgress(){}async il(){let e;do e=this.Zc,await e;while(e!==this.Zc)}sl(e){for(const t of this.Gc)if(t.timerId===e)return!0;return!1}_l(e){return this.il().then(()=>{this.Gc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Gc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.il()})}ol(e){this.Jc.push(e)}nl(e){const t=this.Gc.indexOf(e);this.Gc.splice(t,1)}}function tC(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Dn extends AB{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new eC,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new eC(e),this._firestoreClient=void 0,await e}}}function nE(n,e,t){t||(t=sc);const r=Cn(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(Nr(i,e))return s;throw new $(M.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new $(M.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<um)throw new $(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&ii(e.host)&&Kl(e.host),r.initialize({options:e,instanceIdentifier:t})}function _i(n){if(n._terminated)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||KP(n),n._firestoreClient}function KP(n){var r,s,i,o;const e=n._freezeSettings(),t=MR(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new UP(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}}(n._componentsProvider))}/**
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
 */class rE{convertValue(e,t="none"){switch(ht(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Be(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return $r(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[go].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>tt(o.doubleValue));return new Mt(t)}convertGeoPoint(e){return new mn(tt(e.latitude),tt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Go(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ys(e));default:return null}}convertTimestamp(e){const t=br(e);return new Je(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Me.fromString(e);oe(em(r),9688,{name:e});const s=new Xs(r.get(1),r.get(3)),i=new ce(r.popFirst(5));return s.isEqual(t)||sr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ih extends rE{constructor(e){super(),this.firestore=e}convertBytes(e){return new sn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ye(this.firestore,null,t)}}/**
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
 */function nC(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}const rC="@firebase/firestore",sC="4.17.0";/**
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
 */let sE=class{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $P(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Vr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},$P=class extends sE{data(){return super.data()}};/**
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
 */function iE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new $(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oh{}class au extends oh{}function _c(n,e,...t){let r=[];e instanceof oh&&r.push(e),r=r.concat(t),function(i){const o=i.filter(u=>u instanceof cu).length,a=i.filter(u=>u instanceof Qo).length;if(o>1||o>0&&a>0)throw new $(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Qo extends au{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Qo(e,t,r)}_apply(e){const t=this._parse(e);return oE(e._query,t),new Mn(e.firestore,e.converter,wl(e._query,t))}_parse(e){const t=Qc(e.firestore);return function(i,o,a,u,l,h,f){let C;if(l.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new $(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){oC(f,h);const v=[];for(const V of f)v.push(iC(u,i,V));C={arrayValue:{values:v}}}else C=iC(u,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||oC(f,h),C=YR(a,o,f,h==="in"||h==="not-in");return ut.create(l,h,C)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ah(n,e,t){const r=e,s=Vr("where",n);return Qo._create(s,r,t)}class cu extends oh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new cu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:_n.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const u of a)oE(o,u),o=wl(o,u)}(e._query,t),new Mn(e.firestore,e.converter,wl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class uu extends au{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new uu(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new $(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new $(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new wo(i,o)}(e._query,this._field,this._direction);return new Mn(e.firestore,e.converter,jA(e._query,t))}}function zP(n,e="asc"){const t=e,r=Vr("orderBy",n);return uu._create(r,t)}class lu extends au{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new lu(e,t,r)}_apply(e){return new Mn(e.firestore,e.converter,lc(e._query,this._limit,this._limitType))}}function Dc(n){return dA("limit",n),lu._create("limit",n,"F")}function iC(n,e,t){if(typeof(t=le(t))=="string"){if(t==="")throw new $(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gg(e)&&t.indexOf("/")!==-1)throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Me.fromString(t));if(!ce.isDocumentKey(r))throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return mf(n,new ce(r))}if(t instanceof Ye)return mf(n,t._key);throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Uc(t)}.`)}function oC(n,e){if(!Array.isArray(n)||n.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function oE(n,e){const t=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new $(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function aE(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class xs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sr extends sE{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new oo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Vr("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Sr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Sr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Sr._jsonSchema={type:lt("string",Sr._jsonSchemaVersion),bundleSource:lt("string","DocumentSnapshot"),bundleName:lt("string"),bundle:lt("string")};class oo extends Sr{data(e={}){return super.data(e)}}class Pr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new xs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new oo(this._firestore,this._userDataWriter,r.key,r,new xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{Ct(s._snapshot.query)?Sl(s._snapshot.query):IB(s.query._query);const u=new oo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new xs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new oo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new xs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,h=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:WP(a.type),doc:u,oldIndex:l,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Pr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function WP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Be(61501,{type:n})}}/**
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
 */Pr._jsonSchemaVersion="firestore/querySnapshot/1.0",Pr._jsonSchema={type:lt("string",Pr._jsonSchemaVersion),bundleSource:lt("string","QuerySnapshot"),bundleName:lt("string"),bundle:lt("string")};/**
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
 */function cE(n){n=Pt(n,Ye);const e=Pt(n.firestore,Dn),t=_i(e);return tE(t,n._key).then(r=>uh(e,n,r))}function uE(n){n=Pt(n,Ye);const e=Pt(n.firestore,Dn),t=_i(e);return tE(t,n._key,{source:"server"}).then(r=>uh(e,n,r))}function lE(n){n=Pt(n,Mn);const e=Pt(n.firestore,Dn),t=_i(e),r=new ih(e);return iE(n._query),JP(t,n._query).then(s=>new Pr(e,r,n,s))}function ke(n,e,t){n=Pt(n,Ye);const r=Pt(n.firestore,Dn),s=aE(n.converter,e,t),i=Qc(r);return Yo(r,[hm(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,hn.none())])}function QP(n,e,t,...r){n=Pt(n,Ye);const s=Pt(n.firestore,Dn),i=Qc(s);let o;return o=typeof(e=le(e))=="string"||e instanceof jo?QR(i,"updateDoc",n._key,e,t,r):WR(i,"updateDoc",n._key,e),Yo(s,[o.toMutation(n._key,hn.exists(!0))])}function za(n){return Yo(Pt(n.firestore,Dn),[new DB(n._key,hn.none())])}function ch(n,e){const t=Pt(n.firestore,Dn),r=Ie(n),s=aE(n.converter,e),i=Qc(n.firestore);return Yo(t,[hm(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,hn.exists(!1))]).then(()=>r)}function _r(n,...e){var l,h,f;n=le(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||nC(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(nC(e[r])){const C=e[r];e[r]=(l=C.next)==null?void 0:l.bind(C),e[r+1]=(h=C.error)==null?void 0:h.bind(C),e[r+2]=(f=C.complete)==null?void 0:f.bind(C)}let i,o,a;if(n instanceof Ye)o=Pt(n.firestore,Dn),a=Kc(n._key.path),i={next:C=>{e[r]&&e[r](uh(o,n,C))},error:e[r+1],complete:e[r+2]};else{const C=Pt(n,Mn);o=Pt(C.firestore,Dn),a=C._query;const I=new ih(o);i={next:v=>{e[r]&&e[r](new Pr(o,I,C,v))},error:e[r+1],complete:e[r+2]},iE(n._query)}const u=_i(o);return qP(u,a,s,i)}function Yo(n,e){const t=_i(n);return jP(t,e)}function uh(n,e,t){const r=t.docs.get(e._key),s=new ih(n);return new Sr(n,s,e._key,r,new xs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){aA(jr),Qt(new Wt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Dn(new IR(r.getProvider("auth-internal")),new yR(o,r.getProvider("app-check-internal")),pA(o,s),o);return i={useFetchStreams:t,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),At(rC,sC,e),At(rC,sC,"esm2020")})();const BE=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:rE,Bytes:sn,CollectionReference:Zn,DocumentReference:Ye,DocumentSnapshot:Sr,FieldPath:jo,FieldValue:Ko,Firestore:Dn,FirestoreError:$,GeoPoint:mn,Query:Mn,QueryCompositeFilterConstraint:cu,QueryConstraint:au,QueryDocumentSnapshot:oo,QueryFieldFilterConstraint:Qo,QueryLimitConstraint:lu,QueryOrderByConstraint:uu,QuerySnapshot:Pr,SnapshotMetadata:xs,Timestamp:Je,VectorValue:Mt,_AutoId:xc,_ByteString:it,_DatabaseId:Xs,_DocumentKey:ce,_EmptyAuthCredentialsProvider:sm,_FieldPath:zt,_cast:Pt,_logWarn:En,_validateIsNotUsedTogether:gg,addDoc:ch,collection:yn,deleteDoc:za,doc:Ie,documentId:rm,ensureFirestoreConfigured:_i,executeWrite:Yo,getDoc:cE,getDocFromServer:uE,getDocs:lE,initializeFirestore:nE,limit:Dc,onSnapshot:_r,orderBy:zP,query:_c,serverTimestamp:fc,setDoc:ke,updateDoc:QP,vector:mm,where:ah},Symbol.toStringTag,{value:"Module"}));var YP="firebase",XP="12.17.1";/**
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
 */At(YP,XP,"app");const hE=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:un,SDK_VERSION:jr,_DEFAULT_ENTRY_NAME:ao,_addComponent:hl,_addOrOverwriteComponent:HD,_apps:Or,_clearComponents:JD,_components:zs,_getProvider:Cn,_isFirebaseApp:Wl,_isFirebaseServerApp:Qe,_isFirebaseServerAppSettings:HC,_registerComponent:Qt,_removeServiceInstance:qD,_serverApps:$s,deleteApp:jC,getApp:oi,getApps:JC,initializeApp:co,initializeServerApp:$D,onLog:zD,registerVersion:At,setLogLevel:WD},Symbol.toStringTag,{value:"Module"})),dE="@firebase/installations",lh="0.6.23";/**
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
 */const fE=1e4,CE=`w:${lh}`,pE="FIS_v2",ZP="https://firebaseinstallations.googleapis.com/v1",eN=60*60*1e3,tN="installations",nN="Installations";/**
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
 */const rN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ps=new Jr(tN,nN,rN);function gE(n){return n instanceof un&&n.code.includes("request-failed")}/**
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
 */function mE({projectId:n}){return`${ZP}/projects/${n}/installations`}function EE(n){return{token:n.token,requestStatus:2,expiresIn:iN(n.expiresIn),creationTime:Date.now()}}async function _E(n,e){const r=(await e.json()).error;return ps.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function DE({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function sN(n,{refreshToken:e}){const t=DE(n);return t.append("Authorization",oN(e)),t}async function IE(n){const e=await n();return e.status>=500&&e.status<600?n():e}function iN(n){return Number(n.replace("s","000"))}function oN(n){return`${pE} ${n}`}/**
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
 */async function aN({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=mE(n),s=DE(n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:t,authVersion:pE,appId:n.appId,sdkVersion:CE},a={method:"POST",headers:s,body:JSON.stringify(o)},u=await IE(()=>fetch(r,a));if(u.ok){const l=await u.json();return{fid:l.fid||t,registrationStatus:2,refreshToken:l.refreshToken,authToken:EE(l.authToken)}}else throw await _E("Create Installation",u)}/**
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
 */function wE(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function cN(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const uN=/^[cdef][\w-]{21}$/,Ll="";function lN(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=BN(n);return uN.test(t)?t:Ll}catch{return Ll}}function BN(n){return cN(n).substr(0,22)}/**
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
 */function Di(n){return`${n.appName}!${n.appId}`}/**
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
 */const ri=new Map;function TE(n,e){const t=Di(n);yE(t,e),fN(t,e)}function hN(n,e){AE();const t=Di(n);let r=ri.get(t);r||(r=new Set,ri.set(t,r)),r.add(e)}function dN(n,e){const t=Di(n),r=ri.get(t);r&&(r.delete(e),r.size===0&&ri.delete(t),RE())}function yE(n,e){const t=ri.get(n);if(t)for(const r of t)r(e)}function fN(n,e){const t=AE();t&&t.postMessage({key:n,fid:e}),RE()}let cs=null;function AE(){return!cs&&"BroadcastChannel"in self&&(cs=new BroadcastChannel("[Firebase] FID Change"),cs.onmessage=n=>{yE(n.data.key,n.data.fid)}),cs}function RE(){ri.size===0&&cs&&(cs.close(),cs=null)}/**
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
 */const CN="firebase-installations-database",pN=1,gs="firebase-installations-store";let el=null;function Bh(){return el||(el=GC(CN,pN,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(gs)}}})),el}async function Ic(n,e){const t=Di(n),s=(await Bh()).transaction(gs,"readwrite"),i=s.objectStore(gs),o=await i.get(t);return await i.put(e,t),await s.done,(!o||o.fid!==e.fid)&&TE(n,e.fid),e}async function vE(n){const e=Di(n),r=(await Bh()).transaction(gs,"readwrite");await r.objectStore(gs).delete(e),await r.done}async function Bu(n,e){const t=Di(n),s=(await Bh()).transaction(gs,"readwrite"),i=s.objectStore(gs),o=await i.get(t),a=e(o);return a===void 0?await i.delete(t):await i.put(a,t),await s.done,a&&(!o||o.fid!==a.fid)&&TE(n,a.fid),a}/**
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
 */async function hh(n){let e;const t=await Bu(n.appConfig,r=>{const s=gN(r),i=mN(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===Ll?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function gN(n){const e=n||{fid:lN(),registrationStatus:0};return SE(e)}function mN(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ps.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=EN(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_N(n)}:{installationEntry:e}}async function EN(n,e){try{const t=await aN(n,e);return Ic(n.appConfig,t)}catch(t){throw gE(t)&&t.customData.serverCode===409?await vE(n.appConfig):await Ic(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function _N(n){let e=await aC(n.appConfig);for(;e.registrationStatus===1;)await wE(100),e=await aC(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await hh(n);return r||t}return e}function aC(n){return Bu(n,e=>{if(!e)throw ps.create("installation-not-found");return SE(e)})}function SE(n){return DN(n)?{fid:n.fid,registrationStatus:0}:n}function DN(n){return n.registrationStatus===1&&n.registrationTime+fE<Date.now()}/**
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
 */async function IN({appConfig:n,heartbeatServiceProvider:e},t){const r=wN(n,t),s=sN(n,t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:CE,appId:n.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},u=await IE(()=>fetch(r,a));if(u.ok){const l=await u.json();return EE(l)}else throw await _E("Generate Auth Token",u)}function wN(n,{fid:e}){return`${mE(n)}/${e}/authTokens:generate`}/**
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
 */async function dh(n,e=!1){let t;const r=await Bu(n.appConfig,i=>{if(!PE(i))throw ps.create("not-registered");const o=i.authToken;if(!e&&AN(o))return i;if(o.requestStatus===1)return t=TN(n,e),i;{if(!navigator.onLine)throw ps.create("app-offline");const a=vN(i);return t=yN(n,a),a}});return t?await t:r.authToken}async function TN(n,e){let t=await cC(n.appConfig);for(;t.authToken.requestStatus===1;)await wE(100),t=await cC(n.appConfig);const r=t.authToken;return r.requestStatus===0?dh(n,e):r}function cC(n){return Bu(n,e=>{if(!PE(e))throw ps.create("not-registered");const t=e.authToken;return SN(t)?{...e,authToken:{requestStatus:0}}:e})}async function yN(n,e){try{const t=await IN(n,e),r={...e,authToken:t};return await Ic(n.appConfig,r),t}catch(t){if(gE(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await vE(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Ic(n.appConfig,r)}throw t}}function PE(n){return n!==void 0&&n.registrationStatus===2}function AN(n){return n.requestStatus===2&&!RN(n)}function RN(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+eN}function vN(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function SN(n){return n.requestStatus===1&&n.requestTime+fE<Date.now()}/**
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
 */async function PN(n){const e=n,{installationEntry:t,registrationPromise:r}=await hh(e);return r?r.catch(console.error):dh(e).catch(console.error),t.fid}/**
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
 */async function NN(n,e=!1){const t=n;return await ON(t),(await dh(t,e)).token}async function ON(n){const{registrationPromise:e}=await hh(n);e&&await e}/**
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
 */function Yb(n,e){const{appConfig:t}=n;return hN(t,e),()=>{dN(t,e)}}/**
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
 */function bN(n){if(!n||!n.options)throw tl("App Configuration");if(!n.name)throw tl("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw tl(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function tl(n){return ps.create("missing-app-config-values",{valueName:n})}/**
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
 */const NE="installations",kN="installations-internal",LN=n=>{const e=n.getProvider("app").getImmediate(),t=bN(e),r=Cn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},FN=n=>{const e=n.getProvider("app").getImmediate(),t=Cn(e,NE).getImmediate();return{getId:()=>PN(t),getToken:s=>NN(t,s)}};function MN(){Qt(new Wt(NE,LN,"PUBLIC")),Qt(new Wt(kN,FN,"PRIVATE"))}/**
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
 */MN();At(dE,lh);At(dE,lh,"esm2020");/**
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
 */const wc="analytics",VN="firebase_id",xN="origin",UN=60*1e3,GN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",fh="https://www.googletagmanager.com/gtag/js";/**
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
 */const Vt=new bo("@firebase/analytics");/**
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
 */const HN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},cn=new Jr("analytics","Analytics",HN);/**
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
 */function qN(n){if(!n.startsWith(fh)){const e=cn.create("invalid-gtag-resource",{gtagURL:n});return Vt.warn(e.message),""}return n}function OE(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function JN(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function jN(n,e){const t=JN("firebase-js-sdk-policy",{createScriptURL:qN}),r=document.createElement("script"),s=`${fh}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function KN(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function $N(n,e,t,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await OE(t)).find(l=>l.measurementId===s);u&&await e[u.appId]}}catch(a){Vt.error(a)}n("config",s,i)}async function zN(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await OE(t);for(const u of o){const l=a.find(f=>f.measurementId===u),h=l&&e[l.appId];if(h)i.push(h);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){Vt.error(i)}}function WN(n,e,t,r){async function s(i,...o){try{if(i==="event"){const[a,u]=o;await zN(n,e,t,a,u)}else if(i==="config"){const[a,u]=o;await $N(n,e,t,r,a,u)}else if(i==="consent"){const[a,u]=o;n("consent",a,u)}else if(i==="get"){const[a,u,l]=o;n("get",a,u,l)}else if(i==="set"){const[a]=o;n("set",a)}else n(i,...o)}catch(a){Vt.error(a)}}return s}function QN(n,e,t,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=WN(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function YN(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(fh)&&t.src.includes(n))return t;return null}/**
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
 */const XN=30,ZN=1e3;class eO{constructor(e={},t=ZN){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const bE=new eO;function tO(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function nO(n){var o;const{appId:e,apiKey:t}=n,r={method:"GET",headers:tO(t)},s=GN.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let a="";try{const u=await i.json();(o=u.error)!=null&&o.message&&(a=u.error.message)}catch{}throw cn.create("config-fetch-failed",{httpStatus:i.status,responseMessage:a})}return i.json()}async function rO(n,e=bE,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw cn.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw cn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new oO;return setTimeout(async()=>{a.abort()},UN),kE({appId:r,apiKey:s,measurementId:i},o,a,e)}async function kE(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=bE){var a;const{appId:i,measurementId:o}=n;try{await sO(r,e)}catch(u){if(o)return Vt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:o};throw u}try{const u=await nO(n);return s.deleteThrottleMetadata(i),u}catch(u){const l=u;if(!iO(l)){if(s.deleteThrottleMetadata(i),o)return Vt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:i,measurementId:o};throw u}const h=Number((a=l==null?void 0:l.customData)==null?void 0:a.httpStatus)===503?cl(t,s.intervalMillis,XN):cl(t,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+h,backoffCount:t+1};return s.setThrottleMetadata(i,f),Vt.debug(`Calling attemptFetch again in ${h} millis`),kE(n,f,r,s)}}function sO(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(cn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function iO(n){if(!(n instanceof un)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class oO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function aO(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,o={...r,send_to:i};n("event",t,o)}}async function cO(n,e,t,r){if(r&&r.global){const s={};for(const i of Object.keys(t))s[`user_properties.${i}`]=t[i];return n("set",s),Promise.resolve()}else{const s=await e;n("config",s,{update:!0,user_properties:t})}}/**
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
 */async function uO(){if(Oo())try{await jl()}catch(n){return Vt.warn(cn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Vt.warn(cn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function lO(n,e,t,r,s,i,o){const a=rO(n);a.then(C=>{t[C.measurementId]=C.appId,n.options.measurementId&&C.measurementId!==n.options.measurementId&&Vt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>Vt.error(C)),e.push(a);const u=uO().then(C=>{if(C)return r.getId()}),[l,h]=await Promise.all([a,u]);YN(i)||jN(i,l.measurementId),s("js",new Date);const f=(o==null?void 0:o.config)??{};return f[xN]="firebase",f.update=!0,h!=null&&(f[VN]=h),s("config",l.measurementId,f),l.measurementId}/**
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
 */class BO{constructor(e){this.app=e}_delete(){return delete js[this.app.options.appId],Promise.resolve()}}let js={},uC=[];const lC={};let nl="dataLayer",hO="gtag",BC,Ch,hC=!1;function dO(){const n=[];if(Jl()&&n.push("This is a browser extension environment."),FC()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=cn.create("invalid-analytics-context",{errorInfo:e});Vt.warn(t.message)}}function fO(n,e,t){dO();const r=n.options.appId;if(!r)throw cn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Vt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw cn.create("no-api-key");if(js[r]!=null)throw cn.create("already-exists",{id:r});if(!hC){KN(nl);const{wrappedGtag:i,gtagCore:o}=QN(js,uC,lC,nl,hO);Ch=i,BC=o,hC=!0}return js[r]=lO(n,uC,lC,e,BC,nl,t),new BO(n)}/**
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
 */function CO(n=oi()){n=le(n);const e=Cn(n,wc);return e.isInitialized()?e.getImmediate():pO(n)}function pO(n,e={}){const t=Cn(n,wc);if(t.isInitialized()){const s=t.getImmediate();if(Nr(e,t.getOptions()))return s;throw cn.create("already-initialized")}return t.initialize({options:e})}async function gO(){if(Jl()||!FC()||!Oo())return!1;try{return await jl()}catch{return!1}}function mO(n,e,t){n=le(n),cO(Ch,js[n.app.options.appId],e,t).catch(r=>Vt.error(r))}function EO(n,e,t,r){n=le(n),aO(Ch,js[n.app.options.appId],e,t,r).catch(s=>Vt.error(s))}const dC="@firebase/analytics",fC="0.10.23";/**
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
 */function _O(){Qt(new Wt(wc,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return fO(r,s,t)},"PUBLIC")),Qt(new Wt("analytics-internal",n,"PRIVATE")),At(dC,fC),At(dC,fC,"esm2020");function n(e){try{const t=e.getProvider(wc).getImmediate();return{logEvent:(r,s,i)=>EO(t,r,s,i),setUserProperties:(r,s)=>mO(t,r,s)}}catch(t){throw cn.create("interop-component-reg-failed",{reason:t})}}}_O();/**
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
 */const Fl=new Map,LE={activated:!1,tokenObservers:[]},DO={initialized:!1,enabled:!1};function pt(n){return Fl.get(n)||{...LE}}function IO(n,e){return Fl.set(n,e),Fl.get(n)}function hu(){return DO}/**
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
 */const FE="https://content-firebaseappcheck.googleapis.com/v1",wO="exchangeRecaptchaEnterpriseToken",TO="exchangeDebugToken",CC={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},yO=24*60*60*1e3;/**
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
 */class AO{constructor(e,t,r,s,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ks,this.pending.promise.catch(t=>{}),await RO(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ks,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function RO(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */const vO={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},$t=new Jr("appCheck","AppCheck",vO);/**
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
 */function pC(n=!1){var e;return n?(e=self.grecaptcha)==null?void 0:e.enterprise:self.grecaptcha}function ph(n){if(!pt(n).activated)throw $t.create("use-before-activation",{appName:n.name})}function ME(n){const e=Math.round(n/1e3),t=Math.floor(e/(3600*24)),r=Math.floor((e-t*3600*24)/3600),s=Math.floor((e-t*3600*24-r*3600)/60),i=e-t*3600*24-r*3600-s*60;let o="";return t&&(o+=Oa(t)+"d:"),r&&(o+=Oa(r)+"h:"),o+=Oa(s)+"m:"+Oa(i)+"s",o}function Oa(n){return n===0?"00":n>=10?n.toString():"0"+n}/**
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
 */async function gh({url:n,body:e},t){const r={"Content-Type":"application/json"},s=t.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&(r["X-Firebase-Client"]=f)}const i={method:"POST",body:JSON.stringify(e),headers:r};let o;try{o=await fetch(n,i)}catch(f){throw $t.create("fetch-network-error",{originalErrorMessage:f==null?void 0:f.message})}if(o.status!==200)throw $t.create("fetch-status-error",{httpStatus:o.status});let a;try{a=await o.json()}catch(f){throw $t.create("fetch-parse-error",{originalErrorMessage:f==null?void 0:f.message})}const u=a.ttl.match(/^([\d.]+)(s)$/);if(!u||!u[2]||isNaN(Number(u[1])))throw $t.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const l=Number(u[1])*1e3,h=Date.now();return{token:a.token,expireTimeMillis:h+l,issuedAtTimeMillis:h}}function SO(n,e){const{projectId:t,appId:r,apiKey:s}=n.options;return{url:`${FE}/projects/${t}/apps/${r}:${wO}?key=${s}`,body:{recaptcha_enterprise_token:e}}}function VE(n,e){const{projectId:t,appId:r,apiKey:s}=n.options;return{url:`${FE}/projects/${t}/apps/${r}:${TO}?key=${s}`,body:{debug_token:e}}}/**
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
 */const PO="firebase-app-check-database",NO=1,No="firebase-app-check-store",xE="debug-token";let ba=null;function UE(){return ba||(ba=new Promise((n,e)=>{try{const t=indexedDB.open(PO,NO);t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var s;e($t.create("storage-open",{originalErrorMessage:(s=r.target.error)==null?void 0:s.message}))},t.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(No,{keyPath:"compositeKey"})}}}catch(t){e($t.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),ba)}function OO(n){return HE(qE(n))}function bO(n,e){return GE(qE(n),e)}function kO(n){return GE(xE,n)}function LO(){return HE(xE)}async function GE(n,e){const r=(await UE()).transaction(No,"readwrite"),i=r.objectStore(No).put({compositeKey:n,value:e});return new Promise((o,a)=>{i.onsuccess=u=>{o()},r.onerror=u=>{var l;a($t.create("storage-set",{originalErrorMessage:(l=u.target.error)==null?void 0:l.message}))}})}async function HE(n){const t=(await UE()).transaction(No,"readonly"),s=t.objectStore(No).get(n);return new Promise((i,o)=>{s.onsuccess=a=>{const u=a.target.result;i(u?u.value:void 0)},t.onerror=a=>{var u;o($t.create("storage-get",{originalErrorMessage:(u=a.target.error)==null?void 0:u.message}))}})}function qE(n){return`${n.options.appId}-${n.name}`}/**
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
 */const Ir=new bo("@firebase/app-check");/**
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
 */async function FO(n){if(Oo()){let e;try{e=await OO(n)}catch(t){Ir.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return e}}function rl(n,e){return Oo()?bO(n,e).catch(t=>{Ir.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}async function MO(){let n;try{n=await LO()}catch{}if(n)return n;{const e=crypto.randomUUID();return kO(e).catch(t=>Ir.warn(`Failed to persist debug token to IndexedDB. Error: ${t}`)),e}}/**
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
 */function mh(){return hu().enabled}async function Eh(){const n=hu();if(n.enabled&&n.token)return n.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function VO(){const n=OC(),e=hu();if(e.initialized=!0,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&n.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const t=new Ks;e.token=t,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?t.resolve(n.FIREBASE_APPCHECK_DEBUG_TOKEN):t.resolve(MO())}/**
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
 */const xO={error:"UNKNOWN_ERROR"};function UO(n){return Gl.encodeString(JSON.stringify(n),!1)}async function Ml(n,e=!1,t=!1){const r=n.app;ph(r);const s=pt(r);let i=s.token,o;if(i&&!Us(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(Us(l)?i=l:await rl(r,void 0))}if(!e&&i&&Us(i))return{token:i.token};let a=!1;if(mh())try{const l=await Eh();s.exchangeTokenPromise||(s.exchangeTokenPromise=gh(VE(r,l),n.heartbeatServiceProvider).finally(()=>{s.exchangeTokenPromise=void 0}),a=!0);const h=await s.exchangeTokenPromise;return await rl(r,h),s.token=h,{token:h.token}}catch(l){return l.code==="appCheck/throttled"||l.code==="appCheck/initial-throttle"?Ir.warn(l.message):t&&Ir.error(l),sl(l)}try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),a=!0),i=await pt(r).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"||l.code==="appCheck/initial-throttle"?Ir.warn(l.message):t&&Ir.error(l),o=l}let u;return i?o?Us(i)?u={token:i.token,internalError:o}:u=sl(o):(u={token:i.token},s.token=i,await rl(r,i)):u=sl(o),a&&KE(r,u),u}async function GO(n){const e=n.app;ph(e);const{provider:t}=pt(e);if(mh()){const r=await Eh(),s=VE(e,r);s.body.limited_use=!0;const{token:i}=await gh(s,n.heartbeatServiceProvider);return{token:i}}else{const{token:r}=await t.getToken(!0);return{token:r}}}function JE(n,e,t,r){const{app:s}=n,i=pt(s),o={next:t,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Us(i.token)){const a=i.token;Promise.resolve().then(()=>{t({token:a.token}),gC(n)}).catch(()=>{})}i.cachedTokenPromise.then(()=>gC(n))}function jE(n,e){const t=pt(n),r=t.tokenObservers.filter(s=>s.next!==e);r.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=r}function gC(n){const{app:e}=n,t=pt(e);let r=t.tokenRefresher;r||(r=HO(n),t.tokenRefresher=r),!r.isRunning()&&t.isTokenAutoRefreshEnabled&&r.start()}function HO(n){const{app:e}=n;return new AO(async()=>{const t=pt(e);let r;if(t.token?r=await Ml(n,!0):r=await Ml(n),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const t=pt(e);if(t.token){let r=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const s=t.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},CC.RETRIAL_MIN_WAIT,CC.RETRIAL_MAX_WAIT)}function KE(n,e){const t=pt(n).tokenObservers;for(const r of t)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Us(n){return n.expireTimeMillis-Date.now()>0}function sl(n){return{token:UO(xO),error:n}}/**
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
 */class qO{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=pt(this.app);for(const t of e)jE(this.app,t.next);return Promise.resolve()}}function JO(n,e){return new qO(n,e)}function jO(n){return{getToken:e=>Ml(n,e),getLimitedUseToken:()=>GO(n),addTokenListener:e=>JE(n,"INTERNAL",e),removeTokenListener:e=>jE(n.app,e)}}const KO="@firebase/app-check",$O="0.13.0",zO="https://www.google.com/recaptcha/enterprise.js";function WO(n,e){const t=new Ks,r=pt(n);r.reCAPTCHAState={initialized:t};const s=QO(n),i=pC(!0);return i?mC(n,e,i,s,t):ZO(()=>{const o=pC(!0);if(!o)throw new Error("no recaptcha");mC(n,e,o,s,t)}),t.promise}function mC(n,e,t,r,s){t.ready(()=>{XO(n,e,t,r),s.resolve(t)})}function QO(n){const e=`fire_app_check_${n.name}`,t=document.createElement("div");return t.id=e,t.style.display="none",document.body.appendChild(t),e}async function YO(n){ph(n);const t=await pt(n).reCAPTCHAState.initialized.promise;return new Promise((r,s)=>{const i=pt(n).reCAPTCHAState;t.ready(()=>{r(t.execute(i.widgetId,{action:"fire_app_check"}))})})}function XO(n,e,t,r){const s=t.render(r,{sitekey:e,size:"invisible",callback:()=>{pt(n).reCAPTCHAState.succeeded=!0},"error-callback":()=>{pt(n).reCAPTCHAState.succeeded=!1}}),i=pt(n);i.reCAPTCHAState={...i.reCAPTCHAState,widgetId:s}}function ZO(n){const e=document.createElement("script");e.src=zO+"?render=explicit",e.onload=n,document.head.appendChild(e)}class _h{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(e=!1){var s,i,o;tb(this._throttleData);const t=await YO(this._app).catch(a=>{throw $t.create("recaptcha-error")});if(!((s=pt(this._app).reCAPTCHAState)!=null&&s.succeeded))throw $t.create("recaptcha-error");let r;try{const a=SO(this._app,t);e&&(a.body.limited_use=!0),r=await gh(a,this._heartbeatServiceProvider)}catch(a){throw(i=a.code)!=null&&i.includes("fetch-status-error")?(this._throttleData=eb(Number((o=a.customData)==null?void 0:o.httpStatus),this._throttleData),$t.create("initial-throttle",{time:ME(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):a}return this._throttleData=null,r}initialize(e){this._app=e,this._heartbeatServiceProvider=Cn(e,"heartbeat"),WO(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof _h?this._siteKey===e._siteKey:!1}}function eb(n,e){if(n===404||n===403)return{backoffCount:1,allowRequestsAfter:Date.now()+yO,httpStatus:n};{const t=e?e.backoffCount:0,r=cl(t,1e3,2);return{backoffCount:t+1,allowRequestsAfter:Date.now()+r,httpStatus:n}}}function tb(n){if(n&&Date.now()-n.allowRequestsAfter<=0)throw $t.create("throttled",{time:ME(n.allowRequestsAfter-Date.now()),httpStatus:n.httpStatus})}/**
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
 */function nb(n=oi(),e){var s;n=le(n);const t=Cn(n,"app-check");if(hu().initialized||VO(),mh()&&Eh().then(i=>console.log(`App Check debug token: ${i}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(o&&!!o.isTokenAutoRefreshEnabled==!!e.isTokenAutoRefreshEnabled&&((s=o.provider)!=null&&s.isEqual(e.provider)))return i;throw $t.create("already-initialized",{appName:n.name})}const r=t.initialize({options:e});return rb(n,e.provider,e.isTokenAutoRefreshEnabled),pt(n).isTokenAutoRefreshEnabled&&JE(r,"INTERNAL",()=>{}),r}function rb(n,e,t=!1){const r=IO(n,{...LE});r.activated=!0,r.provider=e,r.cachedTokenPromise=FO(n).then(s=>(s&&Us(s)&&(r.token=s,KE(n,{token:s.token})),s)),r.isTokenAutoRefreshEnabled=t&&n.automaticDataCollectionEnabled,!n.automaticDataCollectionEnabled&&t&&Ir.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),r.provider.initialize(n)}/**
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
 */const sb="app-check",EC="app-check-internal";function ib(){Qt(new Wt(sb,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return JO(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(EC).initialize()})),Qt(new Wt(EC,n=>{const e=n.getProvider("app-check").getImmediate();return jO(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),At(KO,$O)}ib();/**
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
 */const $E="firebasestorage.googleapis.com",ob="storageBucket",ab=2*60*1e3,cb=10*60*1e3;/**
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
 */class Vn extends un{constructor(e,t,r=0){super(il(e),`Firebase Storage: ${t} (${il(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Vn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return il(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fn;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fn||(Fn={}));function il(n){return"storage/"+n}function ub(){const n="An unknown error occurred, please check the error payload for server response.";return new Vn(Fn.UNKNOWN,n)}function lb(){return new Vn(Fn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Bb(){return new Vn(Fn.CANCELED,"User canceled the upload/download.")}function hb(n){return new Vn(Fn.INVALID_URL,"Invalid URL '"+n+"'.")}function db(n){return new Vn(Fn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function _C(n){return new Vn(Fn.INVALID_ARGUMENT,n)}function zE(){return new Vn(Fn.APP_DELETED,"The Firebase app was deleted.")}function fb(n){return new Vn(Fn.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class gn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=gn.makeFromUrl(e,t)}catch{return new gn(e,"")}if(r.path==="")return r;throw db(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(Te){Te.path.charAt(Te.path.length-1)==="/"&&(Te.path_=Te.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function l(Te){Te.path_=decodeURIComponent(Te.path)}const h="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),C="(/([^?#]*).*)?$",I=new RegExp(`^https?://${f}/${h}/b/${s}/o${C}`,"i"),v={bucket:1,path:3},V=t===$E?"(?:storage.googleapis.com|storage.cloud.google.com)":t,H="([^?#]*)",Y=new RegExp(`^https?://${V}/${s}/${H}`,"i"),ye=[{regex:a,indices:u,postModify:i},{regex:I,indices:v,postModify:l},{regex:Y,indices:{bucket:1,path:2},postModify:l}];for(let Te=0;Te<ye.length;Te++){const Le=ye[Te],Ve=Le.regex.exec(e);if(Ve){const A=Ve[Le.indices.bucket];let E=Ve[Le.indices.path];E||(E=""),r=new gn(A,E),Le.postModify(r);break}}if(r==null)throw hb(e);return r}}class Cb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function pb(n,e,t){let r=1,s=null,i=null,o=!1,a=0;function u(){return a===2}let l=!1;function h(...H){l||(l=!0,e.apply(null,H))}function f(H){s=setTimeout(()=>{s=null,n(I,u())},H)}function C(){i&&clearTimeout(i)}function I(H,...Y){if(l){C();return}if(H){C(),h.call(null,H,...Y);return}if(u()||o){C(),h.call(null,H,...Y);return}r<64&&(r*=2);let ye;a===1?(a=2,ye=0):ye=(r+Math.random())*1e3,f(ye)}let v=!1;function V(H){v||(v=!0,C(),!l&&(s!==null?(H||(a=2),clearTimeout(s),f(0)):H||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,V(!0)},t),V}function gb(n){n(!1)}/**
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
 */function mb(n){return n!==void 0}function DC(n,e,t,r){if(r<e)throw _C(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw _C(`Invalid value for '${n}'. Expected ${t} or less.`)}function Eb(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Tc;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Tc||(Tc={}));/**
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
 */function _b(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class Db{constructor(e,t,r,s,i,o,a,u,l,h,f,C=!0,I=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=f,this.retry=C,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,V)=>{this.resolve_=v,this.reject_=V,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ka(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const u=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Tc.NO_ERROR,u=i.getStatus();if(!a||_b(u,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Tc.ABORT;r(!1,new ka(!1,null,h));return}const l=this.successCodes_.indexOf(u)!==-1;r(!0,new ka(l,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());mb(u)?i(u):i()}catch(u){o(u)}else if(a!==null){const u=ub();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(s.canceled){const u=this.appDelete_?zE():Bb();o(u)}else{const u=lb();o(u)}};this.canceled_?t(!1,new ka(!1,null,!0)):this.backoffId_=pb(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ka{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Ib(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function wb(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Tb(n,e){e&&(n["X-Firebase-GMPID"]=e)}function yb(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Ab(n,e,t,r,s,i,o=!0,a=!1){const u=Eb(n.urlParams),l=n.url+u,h=Object.assign({},n.headers);return Tb(h,e),Ib(h,t),wb(h,i),yb(h,r),new Db(l,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,a)}/**
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
 */function Rb(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function vb(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class yc{constructor(e,t){this._service=e,t instanceof gn?this._location=t:this._location=gn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new yc(e,t)}get root(){const e=new gn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vb(this._location.path)}get storage(){return this._service}get parent(){const e=Rb(this._location.path);if(e===null)return null;const t=new gn(this._location.bucket,e);return new yc(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw fb(e)}}function IC(n,e){const t=e==null?void 0:e[ob];return t==null?null:gn.makeFromBucketSpec(t,n)}function Sb(n,e,t,r={}){n.host=`${e}:${t}`;const s=ii(e);s&&Kl(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:P_(i,n.app.options.projectId))}class Pb{constructor(e,t,r,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=$E,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ab,this._maxUploadRetryTime=cb,this._requests=new Set,s!=null?this._bucket=gn.makeFromBucketSpec(s,this._host):this._bucket=IC(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gn.makeFromBucketSpec(this._url,e):this._bucket=IC(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){DC("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){DC("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new yc(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new Cb(zE());{const o=Ab(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const wC="@firebase/storage",TC="0.14.4";/**
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
 */const WE="storage";function Nb(n=oi(),e){n=le(n);const r=Cn(n,WE).getImmediate({identifier:e}),s=S_("storage");return s&&Ob(r,...s),r}function Ob(n,e,t,r={}){Sb(n,e,t,r)}/**
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
 */function bb(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Pb(t,r,s,e,jr)}function kb(){Qt(new Wt(WE,bb,"PUBLIC").setMultipleInstances(!0)),At(wC,TC,""),At(wC,TC,"esm2020")}kb();const Vl={apiKey:"AIzaSyB5sN1axynuVlmzK0k6lLrvL3PbsR7x0QA",authDomain:"kalpanaaa-employees-website.firebaseapp.com",projectId:"kalpanaaa-employees-website",storageBucket:"kalpanaaa-employees-website.firebasestorage.app",messagingSenderId:"435677685916",appId:"1:435677685916:web:8155146d20e5e90f9ca559",measurementId:"G-NW46QRGKE8"},Xo=JC().length>0?oi():co(Vl);if(typeof window<"u")try{nb(Xo,{provider:new _h("6LcR5m8tAAAAAAEpJqgzO9KUJZ-lLX6s_QuoENfl"),isTokenAutoRefreshEnabled:!0})}catch(n){console.warn("App Check initialization error (often safe to ignore in dev):",n)}const ss=tg(Xo),pe=nE(Xo,{experimentalForceLongPolling:!0});Nb(Xo);gO().then(n=>n?CO(Xo):null);var Et=(n=>(n.CREATE="create",n.UPDATE="update",n.DELETE="delete",n.LIST="list",n.GET="get",n.WRITE="write",n))(Et||{});function Tt(n,e,t){var s,i;const r={error:n instanceof Error?n.message:String(n),authInfo:{userId:(s=ss.currentUser)==null?void 0:s.uid,email:(i=ss.currentUser)==null?void 0:i.email},operationType:e,path:t};return console.warn("Firestore Operation Exception:",JSON.stringify(r)),r}async function Lb(){try{return await uE(Ie(pe,"test","connection")),!0}catch(n){return n instanceof Error&&n.message.includes("offline")&&console.warn("Firebase client is currently offline or uninitialized."),!1}}const es={companyName:"Kalpanaaa Software Solutions",logoUrl:"https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&auto=format&fit=crop&q=80",companyAddress:"No. 14, Bhoganahalli, Sarjapur Road, Bengaluru, KA 560102",companyPhone:"+91 (040) 4821-9900",companyEmail:"hr@kalpanaaa.in",officeName:"Kalpanaaa Main Office HQ",officeLatitude:13.014333,officeLongitude:77.646,gpsRequired:!0,allowedRadiusMeters:500,workStartTime:"10:00",workEndTime:"19:00",gracePeriodMinutes:60,lateThresholdMinutes:60,teaBreakDurationMinutes:10,lunchBreakDurationMinutes:30,wfhEnabled:!0,qrTokenLifetimeMinutes:10,qrAttendanceEnabled:!0,pdfHeaderTitle:"CONFIDENTIAL WORKFORCE & ATTENDANCE STATEMENT",authorizedSignatureName:"Akshit",authorizedSignatureTitle:"Chief Executive Officer (CEO)"};new Date().toISOString().split("T")[0];const La=[];function yC(){return[]}const AC=[{id:"log-101",actorId:"system",actorName:"System",actorRole:"SUPER_ADMIN",action:"SYSTEM_INIT",target:"Database",details:"System initialized for Kalpanaaa Software Solutions with fresh database.",timestamp:new Date().toISOString()}],QE=19;function Vs(n){const e=n?new Date(n):new Date;if(isNaN(e.getTime())){const i=new Date;return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`}const t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${t}-${r}-${s}`}function RC(n,e){var o,a,u,l;if(!n||!e)return!1;const t=(o=e.id)==null?void 0:o.trim(),r=(a=e.employeeId)==null?void 0:a.trim(),s=(u=n.employeeId)==null?void 0:u.trim(),i=(l=n.employeeCode)==null?void 0:l.trim();return!!(t&&(s===t||i===t)||r&&(s===r||i===r))}function Xb(n){if(!n)return!1;const e=(n.employeeId||"").toUpperCase(),t=(n.fullName||"").toLowerCase(),r=(n.email||"").toLowerCase(),s=(n.designation||"").toLowerCase();return e==="CEO001"||e==="CTO001"||e==="KSS2407001"||e==="KSS2407002"||t.includes("akshit")||t.includes("gaurav")||r.includes("akshit")||r.includes("gaurav")||s.includes("ceo")||s.includes("cto")||s.includes("chief executive")||s.includes("chief technology")}function Ac(n){const e=new Date(`${n}T${String(QE).padStart(2,"0")}:00:00`);return isNaN(e.getTime())?new Date(n):e}function vC(n,e,t,r=0){if(!e)return 0;const s=new Date(e).getTime(),i=t?new Date(t).getTime():Date.now(),o=Ac(n).getTime(),a=Math.min(i,o);if(a<=s)return 0;let u=Math.floor((a-s)/6e4)-(r||0);return Math.max(0,u)}function xl(n,e,t,r){const i=(t-n)*Math.PI/180,o=(r-e)*Math.PI/180,a=Math.sin(i/2)*Math.sin(i/2)+Math.cos(n*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(o/2)*Math.sin(o/2),u=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));return Math.round(6371e3*u)}function Zb(n,e=10){const t=Math.floor(Date.now()/1e4),r=`${n.id}|${n.qrToken}|${t}`,i={totp:btoa(r),empDbId:n.id,ver:"2026.1_TOTP"};return JSON.stringify(i)}function SC(n,e,t,r,s,i){let o=!0,a=0;if(t.gpsRequired&&(r===void 0||s===void 0?o=!1:(a=xl(r,s,t.officeLatitude,t.officeLongitude),a>t.allowedRadiusMeters&&(o=!1))),!e||!e.checkInAt){const u=new Date,l=new Date;l.setHours(10,0,0,0);const h=new Date;if(h.setHours(11,0,0,0),u<l)return{allowed:!1,action:"CHECK_IN",status:"Present",locationVerified:!1,distanceMeters:a,message:"Shift has not started yet. Check-ins are only allowed from 10:00 AM onwards."};const f=Ac(Vs(u));if(u>f)return{allowed:!1,action:"CHECK_IN",status:"Present",locationVerified:!1,distanceMeters:a,message:"Shift has ended at 7:00 PM. Check-ins are no longer accepted today."};let C="Present";return u>h&&(C="Late"),t.gpsRequired&&!o&&!i?{allowed:!1,action:"CHECK_IN",status:C,locationVerified:!1,distanceMeters:a,message:r===void 0||s===void 0?"GPS Location is required. Please grant location permissions and wait for signal.":`Outside authorized office location (${a}m away, limit is ${t.allowedRadiusMeters}m).`}:{allowed:!0,action:"CHECK_IN",status:C,locationVerified:!0,distanceMeters:a,message:C==="Late"?"Checked In (Late Arrival — After 11:00 AM)":"Successfully Checked In"}}return e.checkInAt&&!e.checkOutAt?t.gpsRequired&&!o&&!i?e.locationVerified?{allowed:!0,action:"CHECK_OUT",status:e.status,locationVerified:!0,distanceMeters:e.distanceFromOffice??a,message:"Checked Out Successfully (location verified at check-in)"}:{allowed:!1,action:"CHECK_OUT",status:e.status,locationVerified:!1,distanceMeters:a,message:r===void 0||s===void 0?"GPS Location is required for Check-Out. Please enable location and try again.":`Outside authorized office perimeter for Check-Out (${a}m away).`}:{allowed:!0,action:"CHECK_OUT",status:e.status,locationVerified:!0,distanceMeters:a,message:"Checked Out Successfully"}:{allowed:!1,action:"ALREADY_CHECKED_OUT",status:e.status,locationVerified:!0,message:"Attendance already completed for today."}}const ol=async()=>{try{const n=await fetch("https://timeapi.io/api/Time/current/zone?timeZone=UTC",{cache:"no-store"});if(n.ok){const e=await n.json();return new Date(e.dateTime+"Z")}}catch{}return new Date},e0=n=>{switch(n){case"ATTENDANCE_CHECKIN":return"🟢";case"ATTENDANCE_CHECKOUT":return"🔴";case"ATTENDANCE_BREAK_START":return"🟡";case"ATTENDANCE_BREAK_END":return"🟡";case"LEAVE_REQUEST_SUBMITTED":return"📋";case"LEAVE_REQUEST_APPROVED":return"✅";case"LEAVE_REQUEST_REJECTED":return"❌";case"WFH_REQUEST_SUBMITTED":return"🏠";case"EMPLOYEE_CREATED":return"👤";case"EMPLOYEE_DELETED":return"🗑️";case"EMPLOYEE_UPDATED":return"✏️";case"USER_LOGIN":return"🔐";case"USER_LOGOUT":return"🚪";case"PAYROLL_RUN":return"💰";case"SECURITY_ALERT":return"🚨";case"ADMIN_BROADCAST":return"📢";case"SYSTEM_ALERT":return"ℹ️";default:return"🔔"}},t0=n=>{switch(n){case"ATTENDANCE_CHECKIN":case"LEAVE_REQUEST_APPROVED":case"EMPLOYEE_CREATED":return"emerald";case"ATTENDANCE_CHECKOUT":case"LEAVE_REQUEST_REJECTED":case"EMPLOYEE_DELETED":case"SECURITY_ALERT":return"rose";case"ATTENDANCE_BREAK_START":case"ATTENDANCE_BREAK_END":case"LEAVE_REQUEST_SUBMITTED":case"WFH_REQUEST_SUBMITTED":return"amber";case"ADMIN_BROADCAST":return"blue";case"PAYROLL_RUN":return"purple";default:return"slate"}},Fb={ATTENDANCE_CHECKIN:["SUPER_ADMIN","HR_ADMIN","PROJECT_MANAGER"],ATTENDANCE_CHECKOUT:["SUPER_ADMIN","HR_ADMIN","PROJECT_MANAGER"],ATTENDANCE_BREAK_START:["HR_ADMIN","PROJECT_MANAGER"],ATTENDANCE_BREAK_END:["HR_ADMIN","PROJECT_MANAGER"],LEAVE_REQUEST_SUBMITTED:["SUPER_ADMIN","HR_ADMIN","PROJECT_MANAGER"],LEAVE_REQUEST_APPROVED:["EMPLOYEE"],LEAVE_REQUEST_REJECTED:["EMPLOYEE"],WFH_REQUEST_SUBMITTED:["SUPER_ADMIN","HR_ADMIN","PROJECT_MANAGER"],EMPLOYEE_CREATED:["SUPER_ADMIN","HR_ADMIN"],EMPLOYEE_DELETED:["SUPER_ADMIN","HR_ADMIN"],EMPLOYEE_UPDATED:["SUPER_ADMIN","HR_ADMIN"],USER_LOGIN:["SUPER_ADMIN","HR_ADMIN"],USER_LOGOUT:["SUPER_ADMIN"],PAYROLL_RUN:["SUPER_ADMIN","HR_ADMIN"],SECURITY_ALERT:["SUPER_ADMIN"],ADMIN_BROADCAST:["ALL"],SYSTEM_ALERT:["SUPER_ADMIN","HR_ADMIN"]},Ul=async(n,e,t,r)=>{try{const s=(r==null?void 0:r.overrideAudience)??Fb[n]??["SUPER_ADMIN"],i={type:n,title:e,body:t,audience:s,actorId:r==null?void 0:r.actorId,actorName:r==null?void 0:r.actorName,targetEmployeeId:r==null?void 0:r.targetEmployeeId,targetEmployeeName:r==null?void 0:r.targetEmployeeName,metadata:r==null?void 0:r.metadata,isRead:!1,createdAt:fc()};await ch(yn(pe,"notifications"),i)}catch(s){console.warn("[KSS Notifications] Failed to write notification:",s)}},Mb=async(n,e,t,r)=>{await Ul("ADMIN_BROADCAST",n,e,{actorId:t,actorName:r,overrideAudience:["ALL"],metadata:{isBroadcast:!0}})},Vb=async(n,e)=>{const{doc:t,updateDoc:r}=await An(async()=>{const{doc:s,updateDoc:i}=await Promise.resolve().then(()=>BE);return{doc:s,updateDoc:i}},void 0);await r(t(pe,"fcmTokens",n),e)},Fa=async(n,e)=>{try{console.warn("[FCM] VAPID key not configured. Push notifications will not work on mobile. Add VITE_FIREBASE_VAPID_KEY to .env");return}catch(t){console.warn("[FCM] Token registration failed (safe to ignore in dev/unsupported browsers):",t)}};let PC=!1;const xb=()=>{if(PC)return;PC=!0;const n=async()=>{try{const{getMessaging:e,onMessage:t}=await An(async()=>{const{getMessaging:i,onMessage:o}=await import("./index.esm-BeaUk5Jz.js");return{getMessaging:i,onMessage:o}},__vite__mapDeps([0,1,2])),{getApp:r}=await An(async()=>{const{getApp:i}=await Promise.resolve().then(()=>hE);return{getApp:i}},void 0),s=e(r());t(s,i=>{var l,h,f;const o=((l=i.notification)==null?void 0:l.title)||"📢 Kalpanaaa HR Alert",a=((h=i.notification)==null?void 0:h.body)||"You have a new notification from KSS HR System.",u=((f=i.data)==null?void 0:f.type)||"SYSTEM_ALERT";try{window.dispatchEvent(new CustomEvent("kss:fcm",{detail:{title:o,body:a,type:u,data:i.data}}))}catch{}navigator.serviceWorker.ready.then(C=>C.showNotification(o,{body:a,icon:"/pwa-192x192.png",badge:"/favicon.png",tag:u||"kss-notification",data:i.data})).catch(()=>{})}),console.info("[FCM] Foreground push listener active.")}catch(e){console.warn("[FCM] Foreground listener unavailable:",e)}};typeof window<"u"&&typeof navigator<"u"&&"serviceWorker"in navigator&&n()},Ub=()=>btoa(`${navigator.userAgent}|${screen.width}x${screen.height}|${navigator.language}|${new Date().getTimezoneOffset()}`),Ma=()=>{if(typeof window>"u"||typeof navigator>"u")return"desktop";const n=navigator.userAgent||"";return/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(n)?"mobile":"desktop"};let Ps=null;const Gb=()=>{try{if(Ps)return Ps;const n=localStorage.getItem("kss_v1_client_ip");if(n)return Ps=n,Ps;fetch("https://api.ipify.org?format=json",{mode:"cors"}).then(e=>e.ok?e.json():null).then(e=>{e&&typeof e.ip=="string"&&e.ip.length<=45&&(Ps=e.ip,localStorage.setItem("kss_v1_client_ip",e.ip))}).catch(()=>{})}catch{}return Ps},Hb=n=>{const e=n.toUpperCase();return e.startsWith("ATTENDANCE")||e==="AUTO_CHECKOUT"?"attendance":e.startsWith("LEAVE")?"leave":e==="SELF_PROFILE_UPDATE"||e==="EMPLOYEE_PROFILE_UPDATE"||e.startsWith("EMPLOYEE")?"profile":e.startsWith("SECURITY")||e==="USER_LOGIN"||e==="USER_LOGOUT"?"security":e.startsWith("PAYROLL")||e.startsWith("SALARY")?"payroll":e.startsWith("RULE")||e.startsWith("COMPANY_RULE")?"rules":e.startsWith("SETTINGS")||e.startsWith("ADMIN")||e==="QR_REGENERATED"||e==="COMPANY_WORKZONE_UPDATED"||e==="ADMIN_BROADCAST"?"admin":"system"},Rc=n=>{if(typeof n=="string")return n.startsWith("data:image/")?n:n.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"").replace(/javascript:/gi,"").replace(/on\w+="[^"]*"/gi,"").replace(/on\w+='[^']*'/gi,"").replace(/on\w+=\w+/gi,"");if(Array.isArray(n))return n.map(e=>Rc(e));if(typeof n=="object"&&n!==null){const e={};for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=Rc(n[t]));return e}return n},qb=(n,e)=>{const t=(n||"").toLowerCase().trim();if(t.includes("gaurav"))return{employeeId:"KSS2407001",role:"SUPER_ADMIN",designation:"CTO And Founder And MD"};if(t.includes("akshit"))return{employeeId:"KSS2407002",role:"SUPER_ADMIN",designation:"CEO"};if(t.includes("koushik"))return{employeeId:"KSS2407003",role:"PROJECT_MANAGER",designation:"Project Manager"};let r=3;return e.forEach(i=>{var o,a;if((o=i.employeeId)!=null&&o.startsWith("KSS2407")||(a=i.employeeId)!=null&&a.startsWith("KSS2707")){const u=i.employeeId.replace("KSS2407","").replace("KSS2707",""),l=parseInt(u,10);!isNaN(l)&&l>r&&(r=l)}}),{employeeId:`KSS2407${String(r+1).padStart(3,"0")}`,role:null,designation:null}},YE=Fe.createContext(void 0),n0=({children:n})=>{const[e,t]=Fe.useState(null),[r,s]=Fe.useState("SUPER_ADMIN"),[i,o]=Fe.useState(null),[a,u]=Fe.useState(()=>localStorage.getItem("kss_v1_session")!==null),[l,h]=Fe.useState(!1),[f,C]=Fe.useState(!0),[I,v]=Fe.useState(!1),[V,H]=Fe.useState(!1),Y=Fe.useRef([]),[ie,ye]=Fe.useState(()=>{const N=localStorage.getItem("kss_v1_employees");return N?JSON.parse(N).filter(x=>{var z;return x.id!=="emp-003"&&x.employeeId!=="003"&&x.employeeId!=="KSS2407003"&&!((z=x.email)!=null&&z.toLowerCase().includes("koushik"))}).map(x=>x.employeeId==="CEO001"?{...x,fullName:"Akshit",email:"akshit@kalpanaaa.in",department:"Executive Management"}:x.employeeId&&(x.employeeId.startsWith("KS2407")||x.employeeId.startsWith("KS2707"))?{...x,employeeId:x.employeeId.replace("KS2707","KSS2407").replace("KS2407","KSS2407")}:x):La}),[Te,Le]=Fe.useState(()=>{const N=localStorage.getItem("kss_v1_attendance");return N?JSON.parse(N):[]}),[Ve,A]=Fe.useState(()=>{const N=localStorage.getItem("kss_v1_audit_logs");return N?JSON.parse(N):AC}),[E,D]=Fe.useState([]),[R,T]=Fe.useState(()=>{const N=localStorage.getItem("kss_v1_settings");return N?JSON.parse(N):es}),[S,_]=Fe.useState(()=>{const N=localStorage.getItem("kss_v1_work_zone");return N?JSON.parse(N):{name:"Kalpanaaa Software Solutions — Main Office",latitude:es.officeLatitude||13.014316,longitude:es.officeLongitude||77.64052,radiusMeters:es.allowedRadiusMeters||100,active:!0,updatedBy:"System Init",updatedAt:new Date().toISOString()}}),[dt,xt]=Fe.useState(()=>{const N=localStorage.getItem("kss_v1_leave_requests");return N?JSON.parse(N):[]}),[Ii,du]=Fe.useState([]),[Wr,Is]=Fe.useState(()=>{const N=localStorage.getItem("kss_v1_read_notifs");return new Set(N?JSON.parse(N):[])});Fe.useEffect(()=>{Y.current=ie},[ie]),Fe.useEffect(()=>{const N=setTimeout(()=>{localStorage.setItem("kss_v1_employees",JSON.stringify(ie)),localStorage.setItem("kss_v1_attendance",JSON.stringify(Te)),localStorage.setItem("kss_v1_audit_logs",JSON.stringify(Ve)),localStorage.setItem("kss_v1_settings",JSON.stringify(R)),localStorage.setItem("kss_v1_work_zone",JSON.stringify(S)),localStorage.setItem("kss_v1_leave_requests",JSON.stringify(dt))},500);return()=>clearTimeout(N)},[ie,Te,Ve,R,S,dt]),Fe.useEffect(()=>{if(!I)return;yn(pe,"notifications");let N=()=>{};return An(async()=>{const{query:O,orderBy:x,limit:z,onSnapshot:re}=await Promise.resolve().then(()=>BE);return{query:O,orderBy:x,limit:z,onSnapshot:re}},void 0).then(({query:O,orderBy:x,limit:z,onSnapshot:re})=>{const se=O(yn(pe,"notifications"),x("createdAt","desc"),z(50));N=re(se,ee=>{const Q=ee.docs.map(te=>{var X,me,fe;return{id:te.id,...te.data(),createdAt:((fe=(me=(X=te.data().createdAt)==null?void 0:X.toDate)==null?void 0:me.call(X))==null?void 0:fe.toISOString())??new Date().toISOString()}});du(Q)},ee=>{console.warn("[Notifications] Listener error:",ee)})}),()=>N()},[I]),Fe.useEffect(()=>{a&&i&&I&&(Fa(i.id,i.role).catch(()=>{}),xb())},[a,i==null?void 0:i.id,I]),Fe.useEffect(()=>{if(!i)return;const N=ie.find(O=>O.id===i.id||O.employeeId&&O.employeeId===i.employeeId||O.email&&i.email&&O.email.toLowerCase()===i.email.toLowerCase());if(N){let O=N.role;(N.employeeId==="CEO001"||N.employeeId==="CTO001")&&N.role==="SUPER_ADMIN"&&(O="SUPER_ADMIN"),(N.role!==i.role||r!==O||JSON.stringify(N)!==JSON.stringify(i))&&(o(N),s(O))}},[ie,i==null?void 0:i.id,i==null?void 0:i.role,r]),Fe.useEffect(()=>{const N=async()=>{if(Te.length===0)return;const x=await ol(),z=Vs(x),se=x.getHours()*60+x.getMinutes()>=QE*60;Te.forEach(ee=>{const Q=ee.date<z,te=ee.date===z&&se;if(!ee.checkOutAt&&(Q||te)){const X=Ac(ee.date).toISOString(),me=ee.breaks||[],fe=me.find(Se=>!Se.endAt);let De=ee.totalBreakMinutes||0,je=me;if(fe){const Se=Math.max(0,Math.floor((Ac(ee.date).getTime()-new Date(fe.startAt).getTime())/6e4));De+=Se,je=me.map(Ke=>Ke.startAt===fe.startAt&&!Ke.endAt?{...Ke,endAt:X,durationMinutes:Se}:Ke)}const ge=vC(ee.date,ee.checkInAt,X,De),he=(ee.notes?ee.notes+" | ":"")+"SYSTEM: Auto-checked out at 07:00 PM (Strict Shift End)";Le(Se=>{const Ke=Se.map(Ce=>Ce.id===ee.id?{...Ce,checkOutAt:X,workingMinutes:ge,breaks:je,totalBreakMinutes:De,notes:he}:Ce);return localStorage.setItem("kss_v1_attendance",JSON.stringify(Ke)),Ke}),ke(Ie(pe,"attendance",ee.id),{checkOutAt:X,workingMinutes:ge,breaks:je,totalBreakMinutes:De,notes:he},{merge:!0}).catch(()=>{}),nt("AUTO_CHECKOUT",`Att ID: ${ee.id}`,`Auto-checked out at 7:00 PM (strict shift end) for ${ee.date}`)}})},O=setInterval(N,3e4);return N(),()=>clearInterval(O)},[Te]),Fe.useEffect(()=>{let N=()=>{},O=()=>{},x=()=>{},z=()=>{},re=()=>{};return(async()=>{try{const ee=await Lb();v(ee),N=_r(yn(pe,"employees"),Q=>{var te,X;if(Q.empty)La.forEach(async me=>{await ke(Ie(pe,"employees",me.id),me).catch(()=>{})});else{const me=[];Q.forEach(ge=>{var Se,Ke;const he={id:ge.id,...ge.data()};if((he.id==="emp-003"||he.employeeId==="003")&&((Se=he.email)==null?void 0:Se.toLowerCase())==="d.koushik@kalpanaaa.in"){za(Ie(pe,"employees",he.id)).catch(()=>{});return}if(he.employeeId==="CEO001"){let Ce=!1;he.role==="SUPER_ADMIN"&&((Ke=he.fullName)!=null&&Ke.toLowerCase().includes("akshit"))&&he.email!=="akshit@kalpanaaa.in"&&(he.email="akshit@kalpanaaa.in",Ce=!0),Ce&&ke(Ie(pe,"employees",he.id),he,{merge:!0}).catch(()=>{})}if(he.employeeId){let Ce=he.employeeId;if(Ce.includes("24072407")||Ce.includes("27072407")||Ce.length>9){const Ut=Ce.match(/\d+$/);Ut&&(Ce=`KSS2407${Ut[0].slice(-3)}`)}else!Ce.startsWith("KSS2407")&&Ce.match(/^\d+$/)?Ce=`KSS2407${Ce.padStart(3,"0")}`:Ce.startsWith("KSS2707")?Ce=Ce.replace("KSS2707","KSS2407"):(Ce.startsWith("KS2407")||Ce.startsWith("KS2707"))&&(Ce=Ce.replace("KS2707","KSS2407").replace("KS2407","KSS2407"));Ce!==he.employeeId&&(he.employeeId=Ce,ke(Ie(pe,"employees",he.id),{employeeId:Ce},{merge:!0}).catch(()=>{}))}me.push(he)});const fe=[],De=new Set;me.sort((ge,he)=>new Date(he.createdAt||0).getTime()-new Date(ge.createdAt||0).getTime());for(const ge of me){const he=(te=ge.email)==null?void 0:te.toLowerCase().trim(),Se=(X=ge.employeeId)==null?void 0:X.trim();if(he&&De.has(he)||Se&&De.has(Se)){za(Ie(pe,"employees",ge.id)).catch(()=>{});continue}he&&De.add(he),Se&&De.add(Se),fe.push(ge)}if(fe.reverse(),!fe.some(ge=>{var he;return ge.employeeId==="KSS2407003"||((he=ge.email)==null?void 0:he.toLowerCase().includes("d.koushik@kalpanaaasoftwaresolutions.in"))})){const ge={id:"emp-KSS2407003",employeeId:"KSS2407003",fullName:"D. Koushik",email:"d.koushik@kalpanaaasoftwaresolutions.in",role:"PROJECT_MANAGER",department:"Software Engineering",designation:"Project Manager",status:"Active",phone:"+91 98765 00003",gender:"Male",dateOfBirth:"1995-01-01",joiningDate:"2024-07-01",employmentType:"Full-Time",permanentAddress:"Bengaluru HQ Campus",currentAddress:"Bengaluru HQ Campus",city:"Bengaluru",state:"Karnataka",postalCode:"560001",emergencyContact:"+91 98765 00000",emergencyRelationship:"Management",shift:"General Shift (09:00 - 18:00)",workLocation:"Kalpanaaa Main Office HQ, Bengaluru",reportingManager:"Board of Directors",qrToken:"QR-TOKEN-KSS2407003-PM",createdAt:"2024-07-01T09:00:00Z",updatedAt:new Date().toISOString(),profilePhotoUrl:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",resumeUrl:""};fe.push(ge),ke(Ie(pe,"employees",ge.id),ge,{merge:!0}).catch(()=>{})}fe.length>0&&ye(fe)}},Q=>{Tt(Q,Et.LIST,"employees")}),O=_r(yn(pe,"attendance"),Q=>{if(Q.empty)Le([]);else{const te=Vs(),X=[];Q.forEach(me=>{const fe={id:me.id,...me.data()};if(fe.employeeCode){let De=fe.employeeCode;De.includes("KSS2707")?De=De.replace("KSS2707","KSS2407"):(De.startsWith("KS2407")||De.startsWith("KS2707"))&&(De=De.replace("KS2707","KSS2407").replace("KS2407","KSS2407")),De!==fe.employeeCode&&(fe.employeeCode=De,ke(Ie(pe,"attendance",fe.id),{employeeCode:De},{merge:!0}).catch(()=>{}))}!fe.employeeCode&&fe.employeeId&&(fe.employeeCode=fe.employeeId),!fe.employeeId&&fe.employeeCode&&(fe.employeeId=fe.employeeCode),X.push(fe)}),X.length>0?(X.sort((me,fe)=>new Date(fe.createdAt||fe.date).getTime()-new Date(me.createdAt||me.date).getTime()),Le(X),localStorage.setItem("kss_v1_attendance",JSON.stringify(X))):(Le([]),localStorage.setItem("kss_v1_attendance",JSON.stringify([])))}},Q=>{Tt(Q,Et.LIST,"attendance")}),re=_r(yn(pe,"leaveRequests"),Q=>{if(Q.empty)xt([]);else{const te=[];Q.forEach(X=>{te.push({id:X.id,...X.data()})}),te.length>0&&(te.sort((X,me)=>new Date(me.requestDate).getTime()-new Date(X.requestDate).getTime()),xt(te))}},Q=>{Tt(Q,Et.LIST,"leaveRequests")}),x=_r(Ie(pe,"settings","global"),Q=>{Q.exists()?T(Q.data()):ke(Ie(pe,"settings","global"),es).catch(()=>{})},Q=>{Tt(Q,Et.GET,"settings/global")}),z=_r(Ie(pe,"workZones","company"),Q=>{if(Q.exists()){const te=Q.data();let X=!1;(te.latitude===13.014316||te.longitude===77.64052||te.radiusMeters===500)&&(te.latitude=13.014333,te.longitude=77.646,te.radiusMeters=300,X=!0),_(te),T(me=>({...me,officeName:te.name,officeLatitude:te.latitude,officeLongitude:te.longitude,allowedRadiusMeters:te.radiusMeters})),X&&ke(Ie(pe,"workZones","company"),te,{merge:!0}).catch(()=>{})}else{const te={name:"Kalpanaaa Software Solutions — Main Office",latitude:13.014333,longitude:77.646,radiusMeters:100,active:!0,updatedBy:"System Init",updatedAt:new Date().toISOString()};ke(Ie(pe,"workZones","company"),te).catch(()=>{})}},Q=>{Tt(Q,Et.GET,"workZones/company")})}catch(ee){console.warn("Firestore initialization fallback to local state:",ee)}})(),()=>{N(),O(),x(),z(),re()}},[]),Fe.useEffect(()=>{let N=()=>{};return a&&(r==="SUPER_ADMIN"||r==="HR_ADMIN")?N=_r(_c(yn(pe,"auditLogs"),Dc(1e3)),O=>{if(!O.empty){const x=[];O.forEach(z=>{x.push({id:z.id,...z.data()})}),x.length>0&&(x.sort((z,re)=>new Date(re.timestamp).getTime()-new Date(z.timestamp).getTime()),A(x))}},O=>{console.warn("Audit logs permission denied or offline")}):A([]),()=>N()},[a,r]),Fe.useEffect(()=>{let N=()=>{};return a&&i&&r!=="SUPER_ADMIN"&&r!=="HR_ADMIN"?N=_r(_c(yn(pe,"auditLogs"),ah("actorId","==",i.id),Dc(500)),O=>{if(O.empty)D([]);else{const x=[];O.forEach(z=>{x.push({id:z.id,...z.data()})}),x.sort((z,re)=>new Date(re.timestamp).getTime()-new Date(z.timestamp).getTime()),D(x)}},O=>{console.warn("Personal activity feed unavailable (offline or rules pending):",O)}):D([]),()=>N()},[a,i==null?void 0:i.id,r]),Fe.useEffect(()=>{const N=localStorage.getItem("kss_v1_session");if(!N){o(null),u(!1),H(!0);return}const O=se=>{const ee=Ma();let Q=localStorage.getItem("kss_v1_session_id");if(!Q){Q=`sess_${ee}_${Date.now()}_${Math.random().toString(36).substring(2,9)}`,localStorage.setItem("kss_v1_session_id",Q),localStorage.setItem("kss_v1_device_category",ee);const X=ee==="desktop"?{desktopSessionId:Q}:{mobileSessionId:Q};ke(Ie(pe,"employees",se.id),X,{merge:!0}).catch(()=>{})}o(se);let te=se.role;(se.employeeId==="CEO001"||se.employeeId==="CTO001")&&(te="SUPER_ADMIN"),s(te),u(!0),H(!0)},x=Y.current.find(se=>se.id===N||se.employeeId===N);if(x){O(x);return}let z=0;const re=setInterval(()=>{z++;const se=Y.current.find(ee=>ee.id===N||ee.employeeId===N);se?(clearInterval(re),O(se)):z>=25&&(clearInterval(re),localStorage.removeItem("kss_v1_session"),o(null),u(!1),H(!0))},200);return()=>clearInterval(re)},[]),Fe.useEffect(()=>{const N=ss.onAuthStateChanged(async O=>{var x;if(O){t(O),C(!1);const z=(x=O.email)==null?void 0:x.toLowerCase();let re=Y.current.find(se=>{var ee;return((ee=se.email)==null?void 0:ee.toLowerCase())===z});if(!re&&z)try{const se=await cE(Ie(pe,"users",O.uid));if(se.exists()){const ee=se.data();re=Y.current.find(Q=>{var te,X;return((te=Q.email)==null?void 0:te.toLowerCase())===((X=ee.email)==null?void 0:X.toLowerCase())})}}catch(se){console.warn("User doc fetch exception:",se)}re&&(o(re),s(re.role),u(!0),H(!0),localStorage.setItem("kss_v1_session",re.id))}});return()=>N()},[]);const nt=(N,O,x,z)=>{const re=new Date().toISOString(),se=Math.random().toString(36).slice(2,8),ee={id:`log-${Date.now()}-${se}`,actorId:(z==null?void 0:z.actorId)||(i==null?void 0:i.id)||"sys-admin",actorName:(z==null?void 0:z.actorName)||(i==null?void 0:i.fullName)||"System Admin",actorRole:(z==null?void 0:z.actorRole)||r,action:N,target:O,details:x,timestamp:re,ipAddress:Gb()||void 0,category:Hb(N)};A(X=>[ee,...X].slice(0,1e3)),ee.actorId===(i==null?void 0:i.id)&&D(X=>[ee,...X.filter(me=>me.id!==ee.id)].slice(0,500)),ke(Ie(pe,"auditLogs",ee.id),ee).catch(X=>{Tt(X,Et.WRITE,`auditLogs/${ee.id}`)});const te={EMPLOYEE_CREATED:{title:"👤 New Employee Added"},EMPLOYEE_DELETED:{title:"🗑️ Employee Removed"},USER_LOGIN:{title:"🔐 Employee Login"},USER_LOGOUT:{title:"🚪 Employee Logout"},ATTENDANCE_CHECKIN:{title:"🟢 Check-In Recorded"},ATTENDANCE_CHECKOUT:{title:"🔴 Check-Out Recorded"},ATTENDANCE_BREAK_START:{title:"🟡 Break Started"},ATTENDANCE_BREAK_END:{title:"🟡 Break Ended"},LEAVE_APPROVED:{title:"✅ Leave Approved"},LEAVE_REJECTED:{title:"❌ Leave Rejected"},PAYROLL_RUN:{title:"💰 Payroll Run"}}[N];te&&Ul(N,te.title,`${x} — by ${ee.actorName}`,{actorId:ee.actorId,actorName:ee.actorName})},Zo=async(N,O)=>{h(!0);try{const x=N.trim().toLowerCase(),z=O.trim();if(!x||!z)return h(!1),{success:!1,message:"Please enter both your company email address and password."};const re=ie.find(te=>{var X;return((X=te.email)==null?void 0:X.toLowerCase())===x}),se=x.includes("prahlad");if(!se&&re&&re.lockoutUntil&&re.lockoutUntil>Date.now()){const te=Math.ceil((re.lockoutUntil-Date.now())/6e4);return h(!1),{success:!1,message:`SECURITY ALERT: Account temporarily locked due to multiple failed attempts. Please wait ${te} minutes.`}}const ee=te=>{re&&re.failedLoginCount&&ke(Ie(pe,"employees",te),{failedLoginCount:0,lockoutUntil:null},{merge:!0}).catch(()=>{})},Q=()=>{if(re){const te=(re.failedLoginCount||0)+1,X={failedLoginCount:te};!se&&te>=5&&(X.lockoutUntil=Date.now()+15*6e4),ke(Ie(pe,"employees",re.id),X,{merge:!0}).catch(()=>{})}};try{const te=await Pp(ss,x,z);if(te.user){t(te.user);const X=ie.find(Se=>{var Ke;return((Ke=Se.email)==null?void 0:Ke.toLowerCase())===x||Se.id===te.user.uid});if(X){const Se=Ma(),Ke=`sess_${Se}_${Date.now()}_${Math.random().toString(36).substring(2,9)}`,Ce=Se==="desktop"?{desktopSessionId:Ke}:{mobileSessionId:Ke},Ut={...X,...Ce,currentSessionId:Ke};o(Ut);const xe=X.role;return s(xe),u(!0),localStorage.setItem("kss_v1_session",X.id),localStorage.setItem("kss_v1_session_id",Ke),localStorage.setItem("kss_v1_device_category",Se),ke(Ie(pe,"employees",X.id),Ce,{merge:!0}).catch(()=>{}),nt("USER_LOGIN",X.fullName,`Firebase Auth Login (${xe})`,{actorId:X.id,actorName:X.fullName,actorRole:xe}),ee(X.id),h(!1),{success:!0,message:`Welcome back, ${X.fullName}!`}}const me=te.user.uid,fe=`sess_${Date.now()}_${Math.random().toString(36).substring(2,9)}`,De=te.user.displayName||x.split("@")[0],je=qb(De,ie),ge=je.employeeId,he={id:me,employeeId:ge,fullName:De,email:x,role:je.role||"EMPLOYEE",department:"General Operations",designation:je.designation||"Software Engineer",status:"Active",phone:"",gender:"Prefer not to say",dateOfBirth:"",joiningDate:new Date().toISOString().split("T")[0],employmentType:"Full-Time",permanentAddress:"",currentAddress:"",city:"",state:"",postalCode:"",emergencyContact:"",emergencyRelationship:"",shift:"General Shift (09:00 - 18:00)",workLocation:"Kalpanaaa Main Office HQ, Bengaluru",reportingManager:"",qrToken:ge,currentSessionId:fe,sessionFingerprint:Ub(),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};return ye(Se=>[he,...Se.filter(Ke=>Ke.id!==he.id)]),o(he),s("EMPLOYEE"),u(!0),localStorage.setItem("kss_v1_session",he.id),localStorage.setItem("kss_v1_session_id",fe),ke(Ie(pe,"employees",he.id),{currentSessionId:fe,sessionFingerprint:he.sessionFingerprint},{merge:!0}).catch(()=>{}),h(!1),{success:!0,message:"Welcome! You're now signed in."}}}catch(te){console.warn("Firebase login attempt:",te.code)}return Q(),h(!1),{success:!1,message:"No account found with this email address or incorrect password. Please register first."}}catch(x){return h(!1),{success:!1,message:x.message||"Login failed."}}},ea=async N=>{try{const{getAuth:O,sendPasswordResetEmail:x}=await An(async()=>{const{getAuth:re,sendPasswordResetEmail:se}=await Promise.resolve().then(()=>_a);return{getAuth:re,sendPasswordResetEmail:se}},void 0),z=O();return await x(z,N),{success:!0,message:`Password reset email sent to ${N}`}}catch(O){return console.error("Password reset error:",O),{success:!1,message:O.message||"Failed to send password reset email."}}},ta=async(N,O)=>{try{const x=co(Vl,`SecondaryApp-${Date.now()}`),{getAuth:z,createUserWithEmailAndPassword:re,signOut:se}=await An(async()=>{const{getAuth:te,createUserWithEmailAndPassword:X,signOut:me}=await Promise.resolve().then(()=>_a);return{getAuth:te,createUserWithEmailAndPassword:X,signOut:me}},void 0),ee=z(x),Q=await re(ee,N,O);return await ke(Ie(pe,"users",Q.user.uid),{uid:Q.user.uid,email:N,createdAt:new Date().toISOString()},{merge:!0}).catch(()=>{}),await se(ee),{success:!0,message:"Password successfully set."}}catch(x){return x.code==="auth/email-already-in-use"?{success:!1,message:"This employee already has a secure login. Please use the Reset Email button instead."}:{success:!1,message:x.message||"Failed to set password."}}},ws=N=>{h(!0),setTimeout(()=>{let O;N==="CEO"||N==="SUPER_ADMIN"?O=ie.find(z=>{var re;return z.employeeId==="CEO001"||((re=z.fullName)==null?void 0:re.toLowerCase().includes("akshit"))})||ie[0]:N==="CTO"?O=ie.find(z=>{var re;return z.employeeId==="CTO001"||((re=z.fullName)==null?void 0:re.toLowerCase().includes("gaurav"))})||ie[1]:N==="HR_ADMIN"?O=ie.find(z=>z.role==="HR_ADMIN")||ie[2]:O=ie.find(z=>z.role==="EMPLOYEE")||ie[3];let x="SUPER_ADMIN";if(O){const z=Ma(),re=`sess_${z}_${Date.now()}_${Math.random().toString(36).substring(2,9)}`,se=z==="desktop"?{desktopSessionId:re}:{mobileSessionId:re},ee={...O,...se};o(ee),x=O.employeeId==="CEO001"||O.employeeId==="CTO001"?"SUPER_ADMIN":O.role,s(x),localStorage.setItem("kss_v1_session",O.id),localStorage.setItem("kss_v1_session_id",re),localStorage.setItem("kss_v1_device_category",z),ke(Ie(pe,"employees",O.id),se,{merge:!0}).catch(()=>{})}else s("SUPER_ADMIN");u(!0),C(!0),h(!1),nt("USER_LOGIN",`Demo Executive Login (${N})`,`Switched workspace view to ${N}`,{actorId:(O==null?void 0:O.id)||"demo",actorName:(O==null?void 0:O.fullName)||`Demo ${N}`,actorRole:x})},150)},wi=()=>{i&&nt("USER_LOGOUT",i.fullName,`Signed out of the portal (${Ma()})`,{actorId:i.id,actorName:i.fullName,actorRole:i.role}),ss.signOut(),t(null),o(null),u(!1),C(!0),localStorage.removeItem("kss_v1_session"),localStorage.removeItem("kss_v1_session_id"),localStorage.removeItem("kss_v1_device_category")},Ti=async N=>{var te;let O=`emp-${Date.now()}`;const x=(te=N.email)==null?void 0:te.trim().toLowerCase();if(N.password){const X=co(Vl,`SecondaryApp-${Date.now()}`),{getAuth:me,createUserWithEmailAndPassword:fe,signOut:De}=await An(async()=>{const{getAuth:ge,createUserWithEmailAndPassword:he,signOut:Se}=await Promise.resolve().then(()=>_a);return{getAuth:ge,createUserWithEmailAndPassword:he,signOut:Se}},void 0),je=me(X);try{O=(await fe(je,x,N.password)).user.uid,await ke(Ie(pe,"users",O),{uid:O,email:x,role:N.role,fullName:N.fullName,createdAt:new Date().toISOString()}).catch(()=>{}),await De(je)}catch(ge){return console.error("Error creating Firebase user:",ge),{success:!1,message:ge.message||"Failed to create Firebase authentication user."}}}const z=N.employeeId,{password:re,...se}=N,Q={...Rc(se),id:O,uid:O,qrToken:z,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};return ye(X=>[Q,...X]),ke(Ie(pe,"employees",Q.id),Q).catch(X=>{Tt(X,Et.WRITE,`employees/${Q.id}`)}),nt("EMPLOYEE_CREATED",`${Q.employeeId} (${Q.fullName})`,`Added to ${Q.department} as ${Q.designation}`),Q},cr=(N,O)=>{const x=Rc(O);ye(z=>z.map(re=>{if(re.id===N){const se={...re,...x,updatedAt:new Date().toISOString()};return ke(Ie(pe,"employees",N),se,{merge:!0}).catch(ee=>{Tt(ee,Et.UPDATE,`employees/${N}`)}),se}return re})),nt("EMPLOYEE_UPDATED",`Employee ID: ${N}`,`Fields updated: ${Object.keys(O).join(", ")}`)},yi=N=>{const O=ie.find(x=>x.id===N);ye(x=>x.filter(z=>z.id!==N)),za(Ie(pe,"employees",N)).catch(x=>{Tt(x,Et.DELETE,`employees/${N}`)}),nt("EMPLOYEE_DELETED",O?`${O.employeeId} (${O.fullName})`:N,"Removed employee profile from directory")},na=N=>{const O=`QR-TOKEN-${N}-${Date.now().toString(36).toUpperCase()}`;return cr(N,{qrToken:O}),nt("QR_REGENERATED",`Employee ${N}`,"Regenerated cryptographic attendance pass"),O},fu=async(N,O,x,z=8,re="Facial Recognition")=>{if(!navigator.onLine)return{success:!1,message:"SECURITY ALERT: Airplane mode or offline connection detected. Check-In blocked."};const se=ie.find(ge=>ge.id===N||ge.employeeId===N);if(!se)return{success:!1,message:"Employee not found."};const ee=await ol(),Q=Vs(ee),te=Te.find(ge=>RC(ge,se)&&ge.date===Q),X=(se.approvedWfhDates||[]).includes(Q);if(R.officeStaticIp&&!X)try{const he=await(await fetch("https://api.ipify.org?format=json")).json();if(he.ip!==R.officeStaticIp)return{success:!1,message:`SECURITY ALERT: Unrecognized Network. You must be connected to the Office Wi-Fi to check in (Expected: ${R.officeStaticIp}, Got: ${he.ip}).`}}catch{return{success:!1,message:"SECURITY ALERT: Unable to securely verify your network IP address. Please check your connection."}}const me=SC(se,te,R,O,x,X);if(!me.allowed&&me.action==="CHECK_IN")return{success:!1,message:me.message};if(te&&te.checkInAt)return te.checkOutAt?{success:!1,message:"You have already completed your shift and checked out for today."}:{success:!1,message:"Employee is already checked in for today."};const fe=O!==void 0&&x!==void 0?xl(O,x,S.latitude,S.longitude):0,De=ee.toISOString(),je={id:te?te.id:`att-${se.employeeId||se.id}-${Q}`,employeeId:se.id,employeeCode:se.employeeId||se.id,employeeName:se.fullName,department:se.department,date:Q,checkInAt:De,checkOutAt:null,workingMinutes:0,status:me.status,attendanceMethod:re,officeLatitude:S.latitude,officeLongitude:S.longitude,officeRadiusMeters:S.radiusMeters,distanceFromOffice:fe,locationAccuracy:z,locationVerified:me.locationVerified,latitude:O,longitude:x,deviceInfo:"Browser Scanner Terminal",createdAt:De,updatedAt:De};return Le(ge=>{const he=[je,...ge.filter(Se=>Se.id!==je.id)];return localStorage.setItem("kss_v1_attendance",JSON.stringify(he)),he}),ke(Ie(pe,"attendance",je.id),je).catch(ge=>{Tt(ge,Et.WRITE,`attendance/${je.id}`)}),nt("ATTENDANCE_CHECKIN",`${se.employeeId} (${se.fullName})`,`Status: ${me.status}, GPS: ${me.locationVerified?"Verified":"Unverified"} (${fe}m from office)`),{success:!0,message:me.message,record:je}},Cu=async(N,O,x,z=8)=>{if(!navigator.onLine)return{success:!1,message:"SECURITY ALERT: Airplane mode or offline connection detected. Check-Out blocked."};const re=ie.find(xe=>xe.id===N||xe.employeeId===N);if(!re)return{success:!1,message:"Employee not found."};const se=await ol(),ee=Vs(se),Q=Te.find(xe=>RC(xe,re)&&xe.date===ee);if(!Q||!Q.checkInAt)return{success:!1,message:"No active check-in record found for today."};if(Q.checkOutAt)return{success:!1,message:"Employee has already checked out for today."};const te=(re.approvedWfhDates||[]).includes(ee),X=SC(re,Q,R,O,x,te);if(!X.allowed)return{success:!1,message:X.message};const me=O!==void 0&&x!==void 0?xl(O,x,S.latitude,S.longitude):Q.distanceFromOffice||0,fe=se.toISOString();let De=0;const je=Q.breaks||[];let ge=je;const he=je.find(xe=>!xe.endAt);he&&(De=Math.floor((new Date(fe).getTime()-new Date(he.startAt).getTime())/6e4),ge=je.map(xe=>xe.startAt===he.startAt&&!xe.endAt?{...xe,endAt:fe,durationMinutes:De}:xe));const Se=(Q.totalBreakMinutes||0)+De,Ke=vC(ee,Q.checkInAt,fe,Se),Ce=Math.max(1,Ke),Ut={...Q,checkOutAt:fe,workingMinutes:Ce,breaks:ge,totalBreakMinutes:Se,officeLatitude:Q.officeLatitude||S.latitude,officeLongitude:Q.officeLongitude||S.longitude,officeRadiusMeters:Q.officeRadiusMeters||S.radiusMeters,distanceFromOffice:me,locationAccuracy:z||Q.locationAccuracy||8,locationVerified:X.locationVerified,updatedAt:fe};return Le(xe=>{const ur=xe.map(aa=>aa.id===Ut.id?Ut:aa);return localStorage.setItem("kss_v1_attendance",JSON.stringify(ur)),ur}),ke(Ie(pe,"attendance",Ut.id),Ut,{merge:!0}).catch(xe=>{Tt(xe,Et.UPDATE,`attendance/${Ut.id}`)}),nt("ATTENDANCE_CHECKOUT",`${re.employeeId} (${re.fullName})`,`Duration: ${Math.floor(Ce/60)}h ${Ce%60}m`),{success:!0,message:"Checked Out Successfully",record:Ut}},ra=(N,O)=>{Le(x=>x.map(z=>z.id===N?{...z,...O,updatedAt:new Date().toISOString()}:z)),ke(Ie(pe,"attendance",N),{...O,updatedAt:new Date().toISOString()},{merge:!0}).catch(x=>{Tt(x,Et.UPDATE,`attendance/${N}`)}),nt("ATTENDANCE_CORRECTION",`Record ${N}`,`Updated fields: ${Object.keys(O).join(", ")}`)},Ts=N=>{const O={...R,...N};T(O),ke(Ie(pe,"settings","global"),O).catch(x=>{Tt(x,Et.WRITE,"settings/global")}),nt("SETTINGS_UPDATED","Company Policy","Updated system preferences and GPS/shift rules")},sa=async N=>{const O={name:N.name||S.name||"Kalpanaaa Software Solutions — Main Office",latitude:N.latitude!==void 0?Number(N.latitude):S.latitude,longitude:N.longitude!==void 0?Number(N.longitude):S.longitude,radiusMeters:N.radiusMeters!==void 0?Number(N.radiusMeters):S.radiusMeters,active:!0,updatedBy:(i==null?void 0:i.fullName)||(i==null?void 0:i.email)||"Authorized HR / CEO / CTO",updatedAt:new Date().toISOString()};_(O),localStorage.setItem("kss_v1_work_zone",JSON.stringify(O)),Ts({officeName:O.name,officeLatitude:O.latitude,officeLongitude:O.longitude,allowedRadiusMeters:O.radiusMeters}),await ke(Ie(pe,"workZones","company"),O).catch(x=>{Tt(x,Et.WRITE,"workZones/company")}),nt("COMPANY_WORKZONE_UPDATED",O.name,`Lat: ${O.latitude}, Lon: ${O.longitude}, Radius: ${O.radiusMeters}m`)},pu=N=>{const O={...N,id:`LR-${Math.random().toString(36).substring(2,9).toUpperCase()}`,status:"Pending",requestDate:new Date().toISOString()};xt(x=>[O,...x]),ke(Ie(pe,"leaveRequests",O.id),O).catch(x=>{Tt(x,Et.WRITE,`leaveRequests/${O.id}`)}),nt("LEAVE_REQUEST",N.employeeName,`Submitted ${N.type} request from ${N.startDate} to ${N.endDate}`)},Ai=(N,O,x,z)=>{xt(se=>se.map(ee=>ee.id===N?{...ee,status:O,reviewedBy:x,reviewNotes:z}:ee)),ke(Ie(pe,"leaveRequests",N),{status:O,reviewedBy:x,reviewNotes:z||""},{merge:!0}).catch(se=>{Tt(se,Et.UPDATE,`leaveRequests/${N}`)});const re=dt.find(se=>se.id===N);if(re&&O==="Approved"&&re.type==="WFH"){const se=ie.find(ee=>ee.employeeId===re.employeeId);if(se){const ee=new Set(se.approvedWfhDates||[]);let Q=new Date(re.startDate);const te=new Date(re.endDate);for(;Q<=te;)ee.add(Vs(Q)),Q.setDate(Q.getDate()+1);cr(se.id,{approvedWfhDates:Array.from(ee)})}}nt("LEAVE_DECISION",x,`${O} leave request ${N}`)},Ri=N=>{xt(O=>O.map(x=>x.id===N?{...x,status:"Cancelled",reviewedBy:(i==null?void 0:i.fullName)||"Employee",reviewNotes:"Cancelled by employee before approval"}:x)),ke(Ie(pe,"leaveRequests",N),{status:"Cancelled",reviewedBy:(i==null?void 0:i.fullName)||"Employee",reviewNotes:"Cancelled by employee before approval",cancelledAt:new Date().toISOString()},{merge:!0}).catch(O=>{Tt(O,Et.UPDATE,`leaveRequests/${N}`)}),nt("LEAVE_CANCELLED",(i==null?void 0:i.fullName)||"Employee",`Cancelled leave request ${N}`)},ia=()=>{ye(La),Le(yC()),A(AC),T(es);const N={name:"Kalpanaaa Software Solutions — Main Office",latitude:13.014333,longitude:77.646,radiusMeters:100,active:!0,updatedBy:"System Init",updatedAt:new Date().toISOString()};_(N),localStorage.removeItem("kss_v1_employees"),localStorage.removeItem("kss_v1_attendance"),localStorage.removeItem("kss_v1_audit_logs"),localStorage.removeItem("kss_v1_settings"),localStorage.removeItem("kss_v1_work_zone"),localStorage.removeItem("kss_v1_leave_requests"),xt([]),La.forEach(O=>{ke(Ie(pe,"employees",O.id),O).catch(()=>{})}),yC().forEach(O=>{ke(Ie(pe,"attendance",O.id),O).catch(()=>{})}),ke(Ie(pe,"settings","global"),es).catch(()=>{}),ke(Ie(pe,"workZones","company"),N).catch(()=>{}),nt("SYSTEM_RESET","Database","Re-seeded system with demo enterprise workforce dataset")},gt=async(N,O)=>{i&&(await Mb(N,O,i.id,i.fullName),nt("ADMIN_BROADCAST","All Employees",`Broadcast sent: "${N}" — ${O}`))},wt=()=>{const N=Ii.map(x=>x.id).filter(Boolean),O=new Set([...Array.from(Wr),...N]);Is(O),localStorage.setItem("kss_v1_read_notifs",JSON.stringify(Array.from(O)))},ys=Ii.filter(N=>N.id&&!Wr.has(N.id)).length,gu=async N=>{const O=N?N.trim():"";if(!O||O.length<6)return{success:!1,message:"Password must be at least 6 characters long."};if(!i)return{success:!1,message:"No active employee session found."};try{if(ss.currentUser){const{updatePassword:x}=await An(async()=>{const{updatePassword:z}=await Promise.resolve().then(()=>_a);return{updatePassword:z}},void 0);await x(ss.currentUser,O)}return cr(i.id,{updatedAt:new Date().toISOString()}),nt("SECURITY_PASSWORD_CHANGE",i.fullName,"Employee updated account password successfully."),Ul("SECURITY_ALERT","🔐 Account Password Updated",`Account password for ${i.fullName} (${i.email}) was updated successfully.`,{actorId:i.id,actorName:i.fullName}),{success:!0,message:"Your account password has been updated successfully!"}}catch(x){return console.warn("[AuthContext] Update password error:",x),(x==null?void 0:x.code)==="auth/requires-recent-login"?{success:!1,message:"For security reasons, please log out and log in again before updating your password."}:{success:!1,message:(x==null?void 0:x.message)||"Failed to update password. Please try again."}}};Fe.useEffect(()=>{a&&i&&"Notification"in window&&(Notification.permission==="granted"?Fa(i.id,i.role):Notification.permission!=="denied"&&Notification.requestPermission().then(N=>{N==="granted"&&Fa(i.id,i.role)}))},[a,i==null?void 0:i.id,i==null?void 0:i.role]);const oa=async()=>{if(!("Notification"in window))return!1;try{const N=await Notification.requestPermission();return N==="granted"&&i?(await Fa(i.id,i.role),!0):N==="granted"}catch{return!1}};return D_.jsx(YE.Provider,{value:{user:e,activeEmployee:i,role:r,isAuthenticated:a,isLoading:l,isDemoMode:f,isFirestoreConnected:I,isSessionReady:V,employees:ie,attendance:Te,auditLogs:Ve,myAuditLogs:E,settings:R,companyWorkZone:S,leaveRequests:dt,notifications:Ii,unreadNotificationCount:ys,loginWithEmail:Zo,quickDemoLogin:ws,logout:wi,addEmployee:Ti,updateEmployee:cr,deleteEmployee:yi,recordCheckIn:fu,recordCheckOut:Cu,updateAttendanceRecord:ra,updateSettings:Ts,saveCompanyWorkZone:sa,submitLeaveRequest:pu,updateLeaveRequestStatus:Ai,cancelLeaveRequest:Ri,addAuditLog:nt,resetToDemoData:ia,regenerateQrToken:na,sendPasswordReset:ea,setEmployeeInitialPassword:ta,sendBroadcast:gt,markAllNotificationsRead:wt,updateCurrentEmployeePassword:gu,requestMobilePushPermission:oa},children:n})},r0=()=>{const n=Fe.useContext(YE);if(!n)throw new Error("useAuth must be used within an AuthProvider");return n},s0="/assets/kalpana_logo-q4uKH8ez.jpeg";export{t0 as A,e0 as B,Wt as C,n0 as D,Jr as E,Et as O,QE as S,Cn as _,Zb as a,Xb as b,yn as c,pe as d,Ie as e,za as f,Vs as g,le as h,RC as i,oi as j,s0 as k,Oo as l,FC as m,GC as n,_r as o,Kb as p,Qt as q,At as r,ke as s,Yb as t,r0 as u,jl as v,Tt as w,xl as x,Iw as y,ss as z};
