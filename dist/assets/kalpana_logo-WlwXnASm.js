const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.esm-CdMutYNQ.js","assets/vendor-firebase-w8s7kMWh.js","assets/index-ChDoDBWA.js","assets/vendor-motion-gvKpCpoQ.js","assets/vendor-react-CZ-_hpWR.js","assets/index-CxWZ-YoZ.css"])))=>i.map(i=>d[i]);
import{_ as G}from"./index-ChDoDBWA.js";import{j as os}from"./vendor-motion-gvKpCpoQ.js";import{r as b}from"./vendor-react-CZ-_hpWR.js";import{r as we,_ as de,C as fe,a as ge,E as ct,o as is,F as Wt,L as Vt,g as Ue,i as Yt,b as Ke,v as Gt,c as Qe,d as zt,e as lt,f as cs,h as ls,D as Me,j as us,k as ds,l as fs,m as ms,n as k,p as gs,q as Ze,t as ps,u as j,w as hs,x as Xe,y as jt,z as et,A as tt,B as Jt,G as X,H as Es,I as v,J as We,K as ws}from"./vendor-firebase-w8s7kMWh.js";const Qt="@firebase/installations",ut="0.6.23";/**
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
 */const Zt=1e4,Xt=`w:${ut}`,en="FIS_v2",As="https://firebaseinstallations.googleapis.com/v1",Ss=60*60*1e3,Is="installations",ys="Installations";/**
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
 */const Ts={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},se=new ct(Is,ys,Ts);function tn(e){return e instanceof Wt&&e.code.includes("request-failed")}/**
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
 */function nn({projectId:e}){return`${As}/projects/${e}/installations`}function sn(e){return{token:e.token,requestStatus:2,expiresIn:ks(e.expiresIn),creationTime:Date.now()}}async function an(e,t){const s=(await t.json()).error;return se.create("request-failed",{requestName:e,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function rn({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function _s(e,{refreshToken:t}){const n=rn(e);return n.append("Authorization",Rs(t)),n}async function on(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ks(e){return Number(e.replace("s","000"))}function Rs(e){return`${en} ${e}`}/**
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
 */async function Cs({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const s=nn(e),r=rn(e),a=t.getImmediate({optional:!0});if(a){const p=await a.getHeartbeatsHeader();p&&r.append("x-firebase-client",p)}const c={fid:n,authVersion:en,appId:e.appId,sdkVersion:Xt},u={method:"POST",headers:r,body:JSON.stringify(c)},d=await on(()=>fetch(s,u));if(d.ok){const p=await d.json();return{fid:p.fid||n,registrationStatus:2,refreshToken:p.refreshToken,authToken:sn(p.authToken)}}else throw await an("Create Installation",d)}/**
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
 */function cn(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Ds(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ns=/^[cdef][\w-]{21}$/,nt="";function vs(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=bs(e);return Ns.test(n)?n:nt}catch{return nt}}function bs(e){return Ds(e).substr(0,22)}/**
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
 */function pe(e){return`${e.appName}!${e.appId}`}/**
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
 */const me=new Map;function ln(e,t){const n=pe(e);un(n,t),Os(n,t)}function Ms(e,t){dn();const n=pe(e);let s=me.get(n);s||(s=new Set,me.set(n,s)),s.add(t)}function Ps(e,t){const n=pe(e),s=me.get(n);s&&(s.delete(t),s.size===0&&me.delete(n),fn())}function un(e,t){const n=me.get(e);if(n)for(const s of n)s(t)}function Os(e,t){const n=dn();n&&n.postMessage({key:e,fid:t}),fn()}let ne=null;function dn(){return!ne&&"BroadcastChannel"in self&&(ne=new BroadcastChannel("[Firebase] FID Change"),ne.onmessage=e=>{un(e.data.key,e.data.fid)}),ne}function fn(){me.size===0&&ne&&(ne.close(),ne=null)}/**
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
 */const Ls="firebase-installations-database",$s=1,ae="firebase-installations-store";let Ve=null;function dt(){return Ve||(Ve=is(Ls,$s,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ae)}}})),Ve}async function Pe(e,t){const n=pe(e),r=(await dt()).transaction(ae,"readwrite"),a=r.objectStore(ae),c=await a.get(n);return await a.put(t,n),await r.done,(!c||c.fid!==t.fid)&&ln(e,t.fid),t}async function mn(e){const t=pe(e),s=(await dt()).transaction(ae,"readwrite");await s.objectStore(ae).delete(t),await s.done}async function Fe(e,t){const n=pe(e),r=(await dt()).transaction(ae,"readwrite"),a=r.objectStore(ae),c=await a.get(n),u=t(c);return u===void 0?await a.delete(n):await a.put(u,n),await r.done,u&&(!c||c.fid!==u.fid)&&ln(e,u.fid),u}/**
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
 */async function ft(e){let t;const n=await Fe(e.appConfig,s=>{const r=Us(s),a=Ks(e,r);return t=a.registrationPromise,a.installationEntry});return n.fid===nt?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Us(e){const t=e||{fid:vs(),registrationStatus:0};return gn(t)}function Ks(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(se.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=Fs(e,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:xs(e)}:{installationEntry:t}}async function Fs(e,t){try{const n=await Cs(e,t);return Pe(e.appConfig,n)}catch(n){throw tn(n)&&n.customData.serverCode===409?await mn(e.appConfig):await Pe(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function xs(e){let t=await kt(e.appConfig);for(;t.registrationStatus===1;)await cn(100),t=await kt(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await ft(e);return s||n}return t}function kt(e){return Fe(e,t=>{if(!t)throw se.create("installation-not-found");return gn(t)})}function gn(e){return Bs(e)?{fid:e.fid,registrationStatus:0}:e}function Bs(e){return e.registrationStatus===1&&e.registrationTime+Zt<Date.now()}/**
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
 */async function qs({appConfig:e,heartbeatServiceProvider:t},n){const s=Hs(e,n),r=_s(e,n),a=t.getImmediate({optional:!0});if(a){const p=await a.getHeartbeatsHeader();p&&r.append("x-firebase-client",p)}const c={installation:{sdkVersion:Xt,appId:e.appId}},u={method:"POST",headers:r,body:JSON.stringify(c)},d=await on(()=>fetch(s,u));if(d.ok){const p=await d.json();return sn(p)}else throw await an("Generate Auth Token",d)}function Hs(e,{fid:t}){return`${nn(e)}/${t}/authTokens:generate`}/**
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
 */async function mt(e,t=!1){let n;const s=await Fe(e.appConfig,a=>{if(!pn(a))throw se.create("not-registered");const c=a.authToken;if(!t&&Ys(c))return a;if(c.requestStatus===1)return n=Ws(e,t),a;{if(!navigator.onLine)throw se.create("app-offline");const u=zs(a);return n=Vs(e,u),u}});return n?await n:s.authToken}async function Ws(e,t){let n=await Rt(e.appConfig);for(;n.authToken.requestStatus===1;)await cn(100),n=await Rt(e.appConfig);const s=n.authToken;return s.requestStatus===0?mt(e,t):s}function Rt(e){return Fe(e,t=>{if(!pn(t))throw se.create("not-registered");const n=t.authToken;return js(n)?{...t,authToken:{requestStatus:0}}:t})}async function Vs(e,t){try{const n=await qs(e,t),s={...t,authToken:n};return await Pe(e.appConfig,s),n}catch(n){if(tn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await mn(e.appConfig);else{const s={...t,authToken:{requestStatus:0}};await Pe(e.appConfig,s)}throw n}}function pn(e){return e!==void 0&&e.registrationStatus===2}function Ys(e){return e.requestStatus===2&&!Gs(e)}function Gs(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Ss}function zs(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function js(e){return e.requestStatus===1&&e.requestTime+Zt<Date.now()}/**
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
 */async function Js(e){const t=e,{installationEntry:n,registrationPromise:s}=await ft(t);return s?s.catch(console.error):mt(t).catch(console.error),n.fid}/**
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
 */async function Qs(e,t=!1){const n=e;return await Zs(n),(await mt(n,t)).token}async function Zs(e){const{registrationPromise:t}=await ft(e);t&&await t}/**
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
 */function Fr(e,t){const{appConfig:n}=e;return Ms(n,t),()=>{Ps(n,t)}}/**
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
 */function Xs(e){if(!e||!e.options)throw Ye("App Configuration");if(!e.name)throw Ye("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ye(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ye(e){return se.create("missing-app-config-values",{valueName:e})}/**
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
 */const hn="installations",ea="installations-internal",ta=e=>{const t=e.getProvider("app").getImmediate(),n=Xs(t),s=ge(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},na=e=>{const t=e.getProvider("app").getImmediate(),n=ge(t,hn).getImmediate();return{getId:()=>Js(n),getToken:r=>Qs(n,r)}};function sa(){de(new fe(hn,ta,"PUBLIC")),de(new fe(ea,na,"PRIVATE"))}/**
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
 */sa();we(Qt,ut);we(Qt,ut,"esm2020");/**
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
 */const Oe="analytics",aa="firebase_id",ra="origin",oa=60*1e3,ia="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",gt="https://www.googletagmanager.com/gtag/js";/**
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
 */const H=new Vt("@firebase/analytics");/**
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
 */const ca={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},V=new ct("analytics","Analytics",ca);/**
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
 */function la(e){if(!e.startsWith(gt)){const t=V.create("invalid-gtag-resource",{gtagURL:e});return H.warn(t.message),""}return e}function En(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function ua(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function da(e,t){const n=ua("firebase-js-sdk-policy",{createScriptURL:la}),s=document.createElement("script"),r=`${gt}?l=${e}&id=${t}`;s.src=n?n==null?void 0:n.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function fa(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function ma(e,t,n,s,r,a){const c=s[r];try{if(c)await t[c];else{const d=(await En(n)).find(p=>p.measurementId===r);d&&await t[d.appId]}}catch(u){H.error(u)}e("config",r,a)}async function ga(e,t,n,s,r){try{let a=[];if(r&&r.send_to){let c=r.send_to;Array.isArray(c)||(c=[c]);const u=await En(n);for(const d of c){const p=u.find(C=>C.measurementId===d),R=p&&t[p.appId];if(R)a.push(R);else{a=[];break}}}a.length===0&&(a=Object.values(t)),await Promise.all(a),e("event",s,r||{})}catch(a){H.error(a)}}function pa(e,t,n,s){async function r(a,...c){try{if(a==="event"){const[u,d]=c;await ga(e,t,n,u,d)}else if(a==="config"){const[u,d]=c;await ma(e,t,n,s,u,d)}else if(a==="consent"){const[u,d]=c;e("consent",u,d)}else if(a==="get"){const[u,d,p]=c;e("get",u,d,p)}else if(a==="set"){const[u]=c;e("set",u)}else e(a,...c)}catch(u){H.error(u)}}return r}function ha(e,t,n,s,r){let a=function(...c){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(a=window[r]),window[r]=pa(a,e,t,n),{gtagCore:a,wrappedGtag:window[r]}}function Ea(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(gt)&&n.src.includes(e))return n;return null}/**
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
 */const wa=30,Aa=1e3;class Sa{constructor(t={},n=Aa){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const wn=new Sa;function Ia(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function ya(e){var c;const{appId:t,apiKey:n}=e,s={method:"GET",headers:Ia(n)},r=ia.replace("{app-id}",t),a=await fetch(r,s);if(a.status!==200&&a.status!==304){let u="";try{const d=await a.json();(c=d.error)!=null&&c.message&&(u=d.error.message)}catch{}throw V.create("config-fetch-failed",{httpStatus:a.status,responseMessage:u})}return a.json()}async function Ta(e,t=wn,n){const{appId:s,apiKey:r,measurementId:a}=e.options;if(!s)throw V.create("no-app-id");if(!r){if(a)return{measurementId:a,appId:s};throw V.create("no-api-key")}const c=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new Ra;return setTimeout(async()=>{u.abort()},oa),An({appId:s,apiKey:r,measurementId:a},c,u,t)}async function An(e,{throttleEndTimeMillis:t,backoffCount:n},s,r=wn){var u;const{appId:a,measurementId:c}=e;try{await _a(s,t)}catch(d){if(c)return H.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:c};throw d}try{const d=await ya(e);return r.deleteThrottleMetadata(a),d}catch(d){const p=d;if(!ka(p)){if(r.deleteThrottleMetadata(a),c)return H.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:a,measurementId:c};throw d}const R=Number((u=p==null?void 0:p.customData)==null?void 0:u.httpStatus)===503?Qe(n,r.intervalMillis,wa):Qe(n,r.intervalMillis),C={throttleEndTimeMillis:Date.now()+R,backoffCount:n+1};return r.setThrottleMetadata(a,C),H.debug(`Calling attemptFetch again in ${R} millis`),An(e,C,s,r)}}function _a(e,t){return new Promise((n,s)=>{const r=Math.max(t-Date.now(),0),a=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(a),s(V.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function ka(e){if(!(e instanceof Wt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Ra{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Ca(e,t,n,s,r){if(r&&r.global){e("event",n,s);return}else{const a=await t,c={...s,send_to:a};e("event",n,c)}}async function Da(e,t,n,s){if(s&&s.global){const r={};for(const a of Object.keys(n))r[`user_properties.${a}`]=n[a];return e("set",r),Promise.resolve()}else{const r=await t;e("config",r,{update:!0,user_properties:n})}}/**
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
 */async function Na(){if(Ke())try{await Gt()}catch(e){return H.warn(V.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return H.warn(V.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function va(e,t,n,s,r,a,c){const u=Ta(e);u.then(P=>{n[P.measurementId]=P.appId,e.options.measurementId&&P.measurementId!==e.options.measurementId&&H.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${P.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(P=>H.error(P)),t.push(u);const d=Na().then(P=>{if(P)return s.getId()}),[p,R]=await Promise.all([u,d]);Ea(a)||da(a,p.measurementId),r("js",new Date);const C=(c==null?void 0:c.config)??{};return C[ra]="firebase",C.update=!0,R!=null&&(C[aa]=R),r("config",p.measurementId,C),p.measurementId}/**
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
 */class ba{constructor(t){this.app=t}_delete(){return delete ue[this.app.options.appId],Promise.resolve()}}let ue={},Ct=[];const Dt={};let Ge="dataLayer",Ma="gtag",Nt,pt,vt=!1;function Pa(){const e=[];if(Yt()&&e.push("This is a browser extension environment."),zt()||e.push("Cookies are not available."),e.length>0){const t=e.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=V.create("invalid-analytics-context",{errorInfo:t});H.warn(n.message)}}function Oa(e,t,n){Pa();const s=e.options.appId;if(!s)throw V.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)H.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw V.create("no-api-key");if(ue[s]!=null)throw V.create("already-exists",{id:s});if(!vt){fa(Ge);const{wrappedGtag:a,gtagCore:c}=ha(ue,Ct,Dt,Ge,Ma);pt=a,Nt=c,vt=!0}return ue[s]=va(e,Ct,Dt,t,Nt,Ge,n),new ba(e)}/**
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
 */function La(e=lt()){e=Ue(e);const t=ge(e,Oe);return t.isInitialized()?t.getImmediate():$a(e)}function $a(e,t={}){const n=ge(e,Oe);if(n.isInitialized()){const r=n.getImmediate();if(cs(t,n.getOptions()))return r;throw V.create("already-initialized")}return n.initialize({options:t})}async function Ua(){if(Yt()||!zt()||!Ke())return!1;try{return await Gt()}catch{return!1}}function Ka(e,t,n){e=Ue(e),Da(pt,ue[e.app.options.appId],t,n).catch(s=>H.error(s))}function Fa(e,t,n,s){e=Ue(e),Ca(pt,ue[e.app.options.appId],t,n,s).catch(r=>H.error(r))}const bt="@firebase/analytics",Mt="0.10.23";/**
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
 */function xa(){de(new fe(Oe,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return Oa(s,r,n)},"PUBLIC")),de(new fe("analytics-internal",e,"PRIVATE")),we(bt,Mt),we(bt,Mt,"esm2020");function e(t){try{const n=t.getProvider(Oe).getImmediate();return{logEvent:(s,r,a)=>Fa(n,s,r,a),setUserProperties:(s,r)=>Ka(n,s,r)}}catch(n){throw V.create("interop-component-reg-failed",{reason:n})}}}xa();/**
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
 */const st=new Map,Sn={activated:!1,tokenObservers:[]},Ba={initialized:!1,enabled:!1};function F(e){return st.get(e)||{...Sn}}function qa(e,t){return st.set(e,t),st.get(e)}function xe(){return Ba}/**
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
 */const In="https://content-firebaseappcheck.googleapis.com/v1",Ha="exchangeRecaptchaEnterpriseToken",Wa="exchangeDebugToken",Pt={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},Va=24*60*60*1e3;/**
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
 */class Ya{constructor(t,n,s,r,a){if(this.operation=t,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=a,this.pending=null,this.nextErrorWaitInterval=r,r>a)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new Me,this.pending.promise.catch(n=>{}),await Ga(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new Me,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function Ga(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */const za={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},W=new ct("appCheck","AppCheck",za);/**
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
 */function Ot(e=!1){var t;return e?(t=self.grecaptcha)==null?void 0:t.enterprise:self.grecaptcha}function ht(e){if(!F(e).activated)throw W.create("use-before-activation",{appName:e.name})}function yn(e){const t=Math.round(e/1e3),n=Math.floor(t/(3600*24)),s=Math.floor((t-n*3600*24)/3600),r=Math.floor((t-n*3600*24-s*3600)/60),a=t-n*3600*24-s*3600-r*60;let c="";return n&&(c+=Ce(n)+"d:"),s&&(c+=Ce(s)+"h:"),c+=Ce(r)+"m:"+Ce(a)+"s",c}function Ce(e){return e===0?"00":e>=10?e.toString():"0"+e}/**
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
 */async function Et({url:e,body:t},n){const s={"Content-Type":"application/json"},r=n.getImmediate({optional:!0});if(r){const C=await r.getHeartbeatsHeader();C&&(s["X-Firebase-Client"]=C)}const a={method:"POST",body:JSON.stringify(t),headers:s};let c;try{c=await fetch(e,a)}catch(C){throw W.create("fetch-network-error",{originalErrorMessage:C==null?void 0:C.message})}if(c.status!==200)throw W.create("fetch-status-error",{httpStatus:c.status});let u;try{u=await c.json()}catch(C){throw W.create("fetch-parse-error",{originalErrorMessage:C==null?void 0:C.message})}const d=u.ttl.match(/^([\d.]+)(s)$/);if(!d||!d[2]||isNaN(Number(d[1])))throw W.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${u.ttl}`});const p=Number(d[1])*1e3,R=Date.now();return{token:u.token,expireTimeMillis:R+p,issuedAtTimeMillis:R}}function ja(e,t){const{projectId:n,appId:s,apiKey:r}=e.options;return{url:`${In}/projects/${n}/apps/${s}:${Ha}?key=${r}`,body:{recaptcha_enterprise_token:t}}}function Tn(e,t){const{projectId:n,appId:s,apiKey:r}=e.options;return{url:`${In}/projects/${n}/apps/${s}:${Wa}?key=${r}`,body:{debug_token:t}}}/**
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
 */const Ja="firebase-app-check-database",Qa=1,Ae="firebase-app-check-store",_n="debug-token";let De=null;function kn(){return De||(De=new Promise((e,t)=>{try{const n=indexedDB.open(Ja,Qa);n.onsuccess=s=>{e(s.target.result)},n.onerror=s=>{var r;t(W.create("storage-open",{originalErrorMessage:(r=s.target.error)==null?void 0:r.message}))},n.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(Ae,{keyPath:"compositeKey"})}}}catch(n){t(W.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),De)}function Za(e){return Cn(Dn(e))}function Xa(e,t){return Rn(Dn(e),t)}function er(e){return Rn(_n,e)}function tr(){return Cn(_n)}async function Rn(e,t){const s=(await kn()).transaction(Ae,"readwrite"),a=s.objectStore(Ae).put({compositeKey:e,value:t});return new Promise((c,u)=>{a.onsuccess=d=>{c()},s.onerror=d=>{var p;u(W.create("storage-set",{originalErrorMessage:(p=d.target.error)==null?void 0:p.message}))}})}async function Cn(e){const n=(await kn()).transaction(Ae,"readonly"),r=n.objectStore(Ae).get(e);return new Promise((a,c)=>{r.onsuccess=u=>{const d=u.target.result;a(d?d.value:void 0)},n.onerror=u=>{var d;c(W.create("storage-get",{originalErrorMessage:(d=u.target.error)==null?void 0:d.message}))}})}function Dn(e){return`${e.options.appId}-${e.name}`}/**
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
 */const Z=new Vt("@firebase/app-check");/**
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
 */async function nr(e){if(Ke()){let t;try{t=await Za(e)}catch(n){Z.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return t}}function ze(e,t){return Ke()?Xa(e,t).catch(n=>{Z.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function sr(){let e;try{e=await tr()}catch{}if(e)return e;{const t=crypto.randomUUID();return er(t).catch(n=>Z.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),t}}/**
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
 */function wt(){return xe().enabled}async function At(){const e=xe();if(e.enabled&&e.token)return e.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function ar(){const e=us(),t=xe();if(t.initialized=!0,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&e.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;t.enabled=!0;const n=new Me;t.token=n,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(sr())}/**
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
 */const rr={error:"UNKNOWN_ERROR"};function or(e){return ls.encodeString(JSON.stringify(e),!1)}async function at(e,t=!1,n=!1){const s=e.app;ht(s);const r=F(s);let a=r.token,c;if(a&&!le(a)&&(r.token=void 0,a=void 0),!a){const p=await r.cachedTokenPromise;p&&(le(p)?a=p:await ze(s,void 0))}if(!t&&a&&le(a))return{token:a.token};let u=!1;if(wt())try{const p=await At();r.exchangeTokenPromise||(r.exchangeTokenPromise=Et(Tn(s,p),e.heartbeatServiceProvider).finally(()=>{r.exchangeTokenPromise=void 0}),u=!0);const R=await r.exchangeTokenPromise;return await ze(s,R),r.token=R,{token:R.token}}catch(p){return p.code==="appCheck/throttled"||p.code==="appCheck/initial-throttle"?Z.warn(p.message):n&&Z.error(p),je(p)}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),u=!0),a=await F(s).exchangeTokenPromise}catch(p){p.code==="appCheck/throttled"||p.code==="appCheck/initial-throttle"?Z.warn(p.message):n&&Z.error(p),c=p}let d;return a?c?le(a)?d={token:a.token,internalError:c}:d=je(c):(d={token:a.token},r.token=a,await ze(s,a)):d=je(c),u&&bn(s,d),d}async function ir(e){const t=e.app;ht(t);const{provider:n}=F(t);if(wt()){const s=await At(),r=Tn(t,s);r.body.limited_use=!0;const{token:a}=await Et(r,e.heartbeatServiceProvider);return{token:a}}else{const{token:s}=await n.getToken(!0);return{token:s}}}function Nn(e,t,n,s){const{app:r}=e,a=F(r),c={next:n,error:s,type:t};if(a.tokenObservers=[...a.tokenObservers,c],a.token&&le(a.token)){const u=a.token;Promise.resolve().then(()=>{n({token:u.token}),Lt(e)}).catch(()=>{})}a.cachedTokenPromise.then(()=>Lt(e))}function vn(e,t){const n=F(e),s=n.tokenObservers.filter(r=>r.next!==t);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Lt(e){const{app:t}=e,n=F(t);let s=n.tokenRefresher;s||(s=cr(e),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function cr(e){const{app:t}=e;return new Ya(async()=>{const n=F(t);let s;if(n.token?s=await at(e,!0):s=await at(e),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=F(t);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},Pt.RETRIAL_MIN_WAIT,Pt.RETRIAL_MAX_WAIT)}function bn(e,t){const n=F(e).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&t.error!=null?s.error(t.error):s.next(t)}catch{}}function le(e){return e.expireTimeMillis-Date.now()>0}function je(e){return{token:or(rr),error:e}}/**
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
 */class lr{constructor(t,n){this.app=t,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:t}=F(this.app);for(const n of t)vn(this.app,n.next);return Promise.resolve()}}function ur(e,t){return new lr(e,t)}function dr(e){return{getToken:t=>at(e,t),getLimitedUseToken:()=>ir(e),addTokenListener:t=>Nn(e,"INTERNAL",t),removeTokenListener:t=>vn(e.app,t)}}const fr="@firebase/app-check",mr="0.13.0",gr="https://www.google.com/recaptcha/enterprise.js";function pr(e,t){const n=new Me,s=F(e);s.reCAPTCHAState={initialized:n};const r=hr(e),a=Ot(!0);return a?$t(e,t,a,r,n):Ar(()=>{const c=Ot(!0);if(!c)throw new Error("no recaptcha");$t(e,t,c,r,n)}),n.promise}function $t(e,t,n,s,r){n.ready(()=>{wr(e,t,n,s),r.resolve(n)})}function hr(e){const t=`fire_app_check_${e.name}`,n=document.createElement("div");return n.id=t,n.style.display="none",document.body.appendChild(n),t}async function Er(e){ht(e);const n=await F(e).reCAPTCHAState.initialized.promise;return new Promise((s,r)=>{const a=F(e).reCAPTCHAState;n.ready(()=>{s(n.execute(a.widgetId,{action:"fire_app_check"}))})})}function wr(e,t,n,s){const r=n.render(s,{sitekey:t,size:"invisible",callback:()=>{F(e).reCAPTCHAState.succeeded=!0},"error-callback":()=>{F(e).reCAPTCHAState.succeeded=!1}}),a=F(e);a.reCAPTCHAState={...a.reCAPTCHAState,widgetId:r}}function Ar(e){const t=document.createElement("script");t.src=gr+"?render=explicit",t.onload=e,document.head.appendChild(t)}class St{constructor(t){this._siteKey=t,this._throttleData=null}async getToken(t=!1){var r,a,c;Ir(this._throttleData);const n=await Er(this._app).catch(u=>{throw W.create("recaptcha-error")});if(!((r=F(this._app).reCAPTCHAState)!=null&&r.succeeded))throw W.create("recaptcha-error");let s;try{const u=ja(this._app,n);t&&(u.body.limited_use=!0),s=await Et(u,this._heartbeatServiceProvider)}catch(u){throw(a=u.code)!=null&&a.includes("fetch-status-error")?(this._throttleData=Sr(Number((c=u.customData)==null?void 0:c.httpStatus),this._throttleData),W.create("initial-throttle",{time:yn(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):u}return this._throttleData=null,s}initialize(t){this._app=t,this._heartbeatServiceProvider=ge(t,"heartbeat"),pr(t,this._siteKey).catch(()=>{})}isEqual(t){return t instanceof St?this._siteKey===t._siteKey:!1}}function Sr(e,t){if(e===404||e===403)return{backoffCount:1,allowRequestsAfter:Date.now()+Va,httpStatus:e};{const n=t?t.backoffCount:0,s=Qe(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+s,httpStatus:e}}}function Ir(e){if(e&&Date.now()-e.allowRequestsAfter<=0)throw W.create("throttled",{time:yn(e.allowRequestsAfter-Date.now()),httpStatus:e.httpStatus})}/**
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
 */function yr(e=lt(),t){var r;e=Ue(e);const n=ge(e,"app-check");if(xe().initialized||ar(),wt()&&At().then(a=>console.log(`App Check debug token: ${a}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const a=n.getImmediate(),c=n.getOptions();if(c&&!!c.isTokenAutoRefreshEnabled==!!t.isTokenAutoRefreshEnabled&&((r=c.provider)!=null&&r.isEqual(t.provider)))return a;throw W.create("already-initialized",{appName:e.name})}const s=n.initialize({options:t});return Tr(e,t.provider,t.isTokenAutoRefreshEnabled),F(e).isTokenAutoRefreshEnabled&&Nn(s,"INTERNAL",()=>{}),s}function Tr(e,t,n=!1){const s=qa(e,{...Sn});s.activated=!0,s.provider=t,s.cachedTokenPromise=nr(e).then(r=>(r&&le(r)&&(s.token=r,bn(e,{token:r.token})),r)),s.isTokenAutoRefreshEnabled=n&&e.automaticDataCollectionEnabled,!e.automaticDataCollectionEnabled&&n&&Z.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),s.provider.initialize(e)}/**
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
 */const _r="app-check",Ut="app-check-internal";function kr(){de(new fe(_r,e=>{const t=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat");return ur(t,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider(Ut).initialize()})),de(new fe(Ut,e=>{const t=e.getProvider("app-check").getImmediate();return dr(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),we(fr,mr)}kr();const rt={apiKey:"AIzaSyB5sN1axynuVlmzK0k6lLrvL3PbsR7x0QA",authDomain:"kalpanaaa-employees-website.firebaseapp.com",projectId:"kalpanaaa-employees-website",storageBucket:"kalpanaaa-employees-website.firebasestorage.app",messagingSenderId:"435677685916",appId:"1:435677685916:web:8155146d20e5e90f9ca559",measurementId:"G-NW46QRGKE8"},Se=gs().length>0?lt():Ze(rt);if(typeof window<"u")try{yr(Se,{provider:new St("6LcR5m8tAAAAAAEpJqgzO9KUJZ-lLX6s_QuoENfl"),isTokenAutoRefreshEnabled:!0})}catch(e){console.warn("App Check initialization error (often safe to ignore in dev):",e)}const te=ds(Se),I=fs(Se,{experimentalForceLongPolling:!0});ps(Se);Ua().then(e=>e?La(Se):null);var x=(e=>(e.CREATE="create",e.UPDATE="update",e.DELETE="delete",e.LIST="list",e.GET="get",e.WRITE="write",e))(x||{});function q(e,t,n){var r,a;const s={error:e instanceof Error?e.message:String(e),authInfo:{userId:(r=te.currentUser)==null?void 0:r.uid,email:(a=te.currentUser)==null?void 0:a.email},operationType:t,path:n};return console.warn("Firestore Operation Exception:",JSON.stringify(s)),s}async function Rr(){try{return await ms(k(I,"test","connection")),!0}catch(e){return e instanceof Error&&e.message.includes("offline")&&console.warn("Firebase client is currently offline or uninitialized."),!1}}const ee={companyName:"Kalpanaaa Software Solutions",logoUrl:"https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&auto=format&fit=crop&q=80",companyAddress:"No. 14, Bhoganahalli, Sarjapur Road, Bengaluru, KA 560102",companyPhone:"+91 (040) 4821-9900",companyEmail:"hr@kalpanaaa.in",officeName:"Kalpanaaa Main Office HQ",officeLatitude:13.014333,officeLongitude:77.646,gpsRequired:!0,allowedRadiusMeters:500,workStartTime:"10:00",workEndTime:"19:00",gracePeriodMinutes:60,lateThresholdMinutes:60,teaBreakDurationMinutes:10,lunchBreakDurationMinutes:30,wfhEnabled:!0,qrTokenLifetimeMinutes:10,qrAttendanceEnabled:!0,pdfHeaderTitle:"CONFIDENTIAL WORKFORCE & ATTENDANCE STATEMENT",authorizedSignatureName:"Akshit",authorizedSignatureTitle:"Chief Executive Officer (CEO)"};new Date().toISOString().split("T")[0];const Ne=[];function Kt(){return[]}const Ft=[{id:"log-101",actorId:"system",actorName:"System",actorRole:"SUPER_ADMIN",action:"SYSTEM_INIT",target:"Database",details:"System initialized for Kalpanaaa Software Solutions with fresh database.",timestamp:new Date().toISOString()}],Mn=19;function ce(e){const t=e?new Date(e):new Date;if(isNaN(t.getTime())){const a=new Date;return`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`}const n=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${n}-${s}-${r}`}function xt(e,t){var c,u,d,p;if(!e||!t)return!1;const n=(c=t.id)==null?void 0:c.trim(),s=(u=t.employeeId)==null?void 0:u.trim(),r=(d=e.employeeId)==null?void 0:d.trim(),a=(p=e.employeeCode)==null?void 0:p.trim();return!!(n&&(r===n||a===n)||s&&(r===s||a===s))}function xr(e){if(!e)return!1;const t=(e.employeeId||"").toUpperCase(),n=(e.fullName||"").toLowerCase(),s=(e.email||"").toLowerCase(),r=(e.designation||"").toLowerCase();return t==="CEO001"||t==="CTO001"||t==="KSS2407001"||t==="KSS2407002"||n.includes("akshit")||n.includes("gaurav")||s.includes("akshit")||s.includes("gaurav")||r.includes("ceo")||r.includes("cto")||r.includes("chief executive")||r.includes("chief technology")}function Le(e){const t=new Date(`${e}T${String(Mn).padStart(2,"0")}:00:00`);return isNaN(t.getTime())?new Date(e):t}function Bt(e,t,n,s=0){if(!t)return 0;const r=new Date(t).getTime(),a=n?new Date(n).getTime():Date.now(),c=Le(e).getTime(),u=Math.min(a,c);if(u<=r)return 0;let d=Math.floor((u-r)/6e4)-(s||0);return Math.max(0,d)}function ot(e,t,n,s){const a=(n-e)*Math.PI/180,c=(s-t)*Math.PI/180,u=Math.sin(a/2)*Math.sin(a/2)+Math.cos(e*Math.PI/180)*Math.cos(n*Math.PI/180)*Math.sin(c/2)*Math.sin(c/2),d=2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u));return Math.round(6371e3*d)}function Br(e,t=10){const n=Math.floor(Date.now()/1e4),s=`${e.id}|${e.qrToken}|${n}`,a={totp:btoa(s),empDbId:e.id,ver:"2026.1_TOTP"};return JSON.stringify(a)}function qt(e,t,n,s,r,a){let c=!0,u=0;if(n.gpsRequired&&(s===void 0||r===void 0?c=!1:(u=ot(s,r,n.officeLatitude,n.officeLongitude),u>n.allowedRadiusMeters&&(c=!1))),!t||!t.checkInAt){const d=new Date,p=new Date;p.setHours(10,0,0,0);const R=new Date;if(R.setHours(11,0,0,0),d<p)return{allowed:!1,action:"CHECK_IN",status:"Present",locationVerified:!1,distanceMeters:u,message:"Shift has not started yet. Check-ins are only allowed from 10:00 AM onwards."};const C=Le(ce(d));if(d>C)return{allowed:!1,action:"CHECK_IN",status:"Present",locationVerified:!1,distanceMeters:u,message:"Shift has ended at 7:00 PM. Check-ins are no longer accepted today."};let P="Present";return d>R&&(P="Late"),n.gpsRequired&&!c&&!a?{allowed:!1,action:"CHECK_IN",status:P,locationVerified:!1,distanceMeters:u,message:s===void 0||r===void 0?"GPS Location is required. Please grant location permissions and wait for signal.":`Outside authorized office location (${u}m away, limit is ${n.allowedRadiusMeters}m).`}:{allowed:!0,action:"CHECK_IN",status:P,locationVerified:!0,distanceMeters:u,message:P==="Late"?"Checked In (Late Arrival — After 11:00 AM)":"Successfully Checked In"}}return t.checkInAt&&!t.checkOutAt?n.gpsRequired&&!c&&!a?t.locationVerified?{allowed:!0,action:"CHECK_OUT",status:t.status,locationVerified:!0,distanceMeters:t.distanceFromOffice??u,message:"Checked Out Successfully (location verified at check-in)"}:{allowed:!1,action:"CHECK_OUT",status:t.status,locationVerified:!1,distanceMeters:u,message:s===void 0||r===void 0?"GPS Location is required for Check-Out. Please enable location and try again.":`Outside authorized office perimeter for Check-Out (${u}m away).`}:{allowed:!0,action:"CHECK_OUT",status:t.status,locationVerified:!0,distanceMeters:u,message:"Checked Out Successfully"}:{allowed:!1,action:"ALREADY_CHECKED_OUT",status:t.status,locationVerified:!0,message:"Attendance already completed for today."}}const Je=async()=>{try{const e=await fetch("https://timeapi.io/api/Time/current/zone?timeZone=UTC",{cache:"no-store"});if(e.ok){const t=await e.json();return new Date(t.dateTime+"Z")}}catch{}return new Date},qr=e=>{switch(e){case"ATTENDANCE_CHECKIN":return"🟢";case"ATTENDANCE_CHECKOUT":return"🔴";case"ATTENDANCE_BREAK_START":return"🟡";case"ATTENDANCE_BREAK_END":return"🟡";case"LEAVE_REQUEST_SUBMITTED":return"📋";case"LEAVE_REQUEST_APPROVED":return"✅";case"LEAVE_REQUEST_REJECTED":return"❌";case"WFH_REQUEST_SUBMITTED":return"🏠";case"EMPLOYEE_CREATED":return"👤";case"EMPLOYEE_DELETED":return"🗑️";case"EMPLOYEE_UPDATED":return"✏️";case"USER_LOGIN":return"🔐";case"USER_LOGOUT":return"🚪";case"PAYROLL_RUN":return"💰";case"SECURITY_ALERT":return"🚨";case"ADMIN_BROADCAST":return"📢";case"SYSTEM_ALERT":return"ℹ️";default:return"🔔"}},Hr=e=>{switch(e){case"ATTENDANCE_CHECKIN":case"LEAVE_REQUEST_APPROVED":case"EMPLOYEE_CREATED":return"emerald";case"ATTENDANCE_CHECKOUT":case"LEAVE_REQUEST_REJECTED":case"EMPLOYEE_DELETED":case"SECURITY_ALERT":return"rose";case"ATTENDANCE_BREAK_START":case"ATTENDANCE_BREAK_END":case"LEAVE_REQUEST_SUBMITTED":case"WFH_REQUEST_SUBMITTED":return"amber";case"ADMIN_BROADCAST":return"blue";case"PAYROLL_RUN":return"purple";default:return"slate"}},Cr={ATTENDANCE_CHECKIN:["SUPER_ADMIN","HR_ADMIN","PROJECT_MANAGER"],ATTENDANCE_CHECKOUT:["SUPER_ADMIN","HR_ADMIN","PROJECT_MANAGER"],ATTENDANCE_BREAK_START:["HR_ADMIN","PROJECT_MANAGER"],ATTENDANCE_BREAK_END:["HR_ADMIN","PROJECT_MANAGER"],LEAVE_REQUEST_SUBMITTED:["SUPER_ADMIN","HR_ADMIN","PROJECT_MANAGER"],LEAVE_REQUEST_APPROVED:["EMPLOYEE"],LEAVE_REQUEST_REJECTED:["EMPLOYEE"],WFH_REQUEST_SUBMITTED:["SUPER_ADMIN","HR_ADMIN","PROJECT_MANAGER"],EMPLOYEE_CREATED:["SUPER_ADMIN","HR_ADMIN"],EMPLOYEE_DELETED:["SUPER_ADMIN","HR_ADMIN"],EMPLOYEE_UPDATED:["SUPER_ADMIN","HR_ADMIN"],USER_LOGIN:["SUPER_ADMIN","HR_ADMIN"],USER_LOGOUT:["SUPER_ADMIN"],PAYROLL_RUN:["SUPER_ADMIN","HR_ADMIN"],SECURITY_ALERT:["SUPER_ADMIN"],ADMIN_BROADCAST:["ALL"],SYSTEM_ALERT:["SUPER_ADMIN","HR_ADMIN"]},it=async(e,t,n,s)=>{try{const r=(s==null?void 0:s.overrideAudience)??Cr[e]??["SUPER_ADMIN"],a={type:e,title:t,body:n,audience:r,actorId:s==null?void 0:s.actorId,actorName:s==null?void 0:s.actorName,targetEmployeeId:s==null?void 0:s.targetEmployeeId,targetEmployeeName:s==null?void 0:s.targetEmployeeName,metadata:s==null?void 0:s.metadata,isRead:!1,createdAt:tt()};await Jt(j(I,"notifications"),a)}catch(r){console.warn("[KSS Notifications] Failed to write notification:",r)}},Dr=async(e,t,n,s)=>{await it("ADMIN_BROADCAST",e,t,{actorId:n,actorName:s,overrideAudience:["ALL"],metadata:{isBroadcast:!0}})},Nr=async(e,t)=>{const{doc:n,updateDoc:s}=await G(async()=>{const{doc:r,updateDoc:a}=await import("./vendor-firebase-w8s7kMWh.js").then(c=>c.O);return{doc:r,updateDoc:a}},[]);await s(n(I,"fcmTokens",e),t)},ve=async(e,t)=>{try{console.warn("[FCM] VAPID key not configured. Push notifications will not work on mobile. Add VITE_FIREBASE_VAPID_KEY to .env");return}catch(n){console.warn("[FCM] Token registration failed (safe to ignore in dev/unsupported browsers):",n)}};let Ht=!1;const vr=()=>{if(Ht)return;Ht=!0;const e=async()=>{try{const{getMessaging:t,onMessage:n}=await G(async()=>{const{getMessaging:a,onMessage:c}=await import("./index.esm-CdMutYNQ.js");return{getMessaging:a,onMessage:c}},__vite__mapDeps([0,1,2,3,4,5])),{getApp:s}=await G(async()=>{const{getApp:a}=await import("./vendor-firebase-w8s7kMWh.js").then(c=>c.P);return{getApp:a}},[]),r=t(s());n(r,a=>{var p,R,C;const c=((p=a.notification)==null?void 0:p.title)||"📢 Kalpanaaa HR Alert",u=((R=a.notification)==null?void 0:R.body)||"You have a new notification from KSS HR System.",d=((C=a.data)==null?void 0:C.type)||"SYSTEM_ALERT";try{window.dispatchEvent(new CustomEvent("kss:fcm",{detail:{title:c,body:u,type:d,data:a.data}}))}catch{}navigator.serviceWorker.ready.then(P=>P.showNotification(c,{body:u,icon:"/pwa-192x192.png",badge:"/favicon.png",tag:d||"kss-notification",data:a.data})).catch(()=>{})}),console.info("[FCM] Foreground push listener active.")}catch(t){console.warn("[FCM] Foreground listener unavailable:",t)}};typeof window<"u"&&typeof navigator<"u"&&"serviceWorker"in navigator&&e()},br=()=>btoa(`${navigator.userAgent}|${screen.width}x${screen.height}|${navigator.language}|${new Date().getTimezoneOffset()}`),be=()=>{if(typeof window>"u"||typeof navigator>"u")return"desktop";const e=navigator.userAgent||"";return/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)?"mobile":"desktop"};let ie=null;const Mr=()=>{try{if(ie)return ie;const e=localStorage.getItem("kss_v1_client_ip");if(e)return ie=e,ie;fetch("https://api.ipify.org?format=json",{mode:"cors"}).then(t=>t.ok?t.json():null).then(t=>{t&&typeof t.ip=="string"&&t.ip.length<=45&&(ie=t.ip,localStorage.setItem("kss_v1_client_ip",t.ip))}).catch(()=>{})}catch{}return ie},Pr=e=>{const t=e.toUpperCase();return t.startsWith("ATTENDANCE")||t==="AUTO_CHECKOUT"?"attendance":t.startsWith("LEAVE")?"leave":t==="SELF_PROFILE_UPDATE"||t==="EMPLOYEE_PROFILE_UPDATE"||t.startsWith("EMPLOYEE")?"profile":t.startsWith("SECURITY")||t==="USER_LOGIN"||t==="USER_LOGOUT"?"security":t.startsWith("PAYROLL")||t.startsWith("SALARY")?"payroll":t.startsWith("RULE")||t.startsWith("COMPANY_RULE")?"rules":t.startsWith("SETTINGS")||t.startsWith("ADMIN")||t==="QR_REGENERATED"||t==="COMPANY_WORKZONE_UPDATED"||t==="ADMIN_BROADCAST"?"admin":"system"},$e=e=>{if(typeof e=="string")return e.startsWith("data:image/")?e:e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"").replace(/javascript:/gi,"").replace(/on\w+="[^"]*"/gi,"").replace(/on\w+='[^']*'/gi,"").replace(/on\w+=\w+/gi,"");if(Array.isArray(e))return e.map(t=>$e(t));if(typeof e=="object"&&e!==null){const t={};for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=$e(e[n]));return t}return e},Or=(e,t)=>{const n=(e||"").toLowerCase().trim();if(n.includes("gaurav"))return{employeeId:"KSS2407001",role:"SUPER_ADMIN",designation:"CTO And Founder And MD"};if(n.includes("akshit"))return{employeeId:"KSS2407002",role:"SUPER_ADMIN",designation:"CEO"};if(n.includes("koushik"))return{employeeId:"KSS2407003",role:"PROJECT_MANAGER",designation:"Project Manager"};let s=3;return t.forEach(a=>{var c,u;if((c=a.employeeId)!=null&&c.startsWith("KSS2407")||(u=a.employeeId)!=null&&u.startsWith("KSS2707")){const d=a.employeeId.replace("KSS2407","").replace("KSS2707",""),p=parseInt(d,10);!isNaN(p)&&p>s&&(s=p)}}),{employeeId:`KSS2407${String(s+1).padStart(3,"0")}`,role:null,designation:null}},Pn=b.createContext(void 0),Wr=({children:e})=>{const[t,n]=b.useState(null),[s,r]=b.useState("SUPER_ADMIN"),[a,c]=b.useState(null),[u,d]=b.useState(()=>localStorage.getItem("kss_v1_session")!==null),[p,R]=b.useState(!1),[C,P]=b.useState(!0),[he,On]=b.useState(!1),[Ln,Ie]=b.useState(!1),Ee=b.useRef([]),[L,re]=b.useState(()=>{const o=localStorage.getItem("kss_v1_employees");return o?JSON.parse(o).filter(l=>{var f;return l.id!=="emp-003"&&l.employeeId!=="003"&&l.employeeId!=="KSS2407003"&&!((f=l.email)!=null&&f.toLowerCase().includes("koushik"))}).map(l=>l.employeeId==="CEO001"?{...l,fullName:"Akshit",email:"akshit@kalpanaaa.in",department:"Executive Management"}:l.employeeId&&(l.employeeId.startsWith("KS2407")||l.employeeId.startsWith("KS2707"))?{...l,employeeId:l.employeeId.replace("KS2707","KSS2407").replace("KS2407","KSS2407")}:l):Ne}),[J,Q]=b.useState(()=>{const o=localStorage.getItem("kss_v1_attendance");return o?JSON.parse(o):[]}),[Be,ye]=b.useState(()=>{const o=localStorage.getItem("kss_v1_audit_logs");return o?JSON.parse(o):Ft}),[$n,Te]=b.useState([]),[z,_e]=b.useState(()=>{const o=localStorage.getItem("kss_v1_settings");return o?JSON.parse(o):ee}),[B,qe]=b.useState(()=>{const o=localStorage.getItem("kss_v1_work_zone");return o?JSON.parse(o):{name:"Kalpanaaa Software Solutions — Main Office",latitude:ee.officeLatitude||13.014316,longitude:ee.officeLongitude||77.64052,radiusMeters:ee.allowedRadiusMeters||100,active:!0,updatedBy:"System Init",updatedAt:new Date().toISOString()}}),[ke,oe]=b.useState(()=>{const o=localStorage.getItem("kss_v1_leave_requests");return o?JSON.parse(o):[]}),[He,Un]=b.useState([]),[It,Kn]=b.useState(()=>{const o=localStorage.getItem("kss_v1_read_notifs");return new Set(o?JSON.parse(o):[])});b.useEffect(()=>{Ee.current=L},[L]),b.useEffect(()=>{const o=setTimeout(()=>{localStorage.setItem("kss_v1_employees",JSON.stringify(L)),localStorage.setItem("kss_v1_attendance",JSON.stringify(J)),localStorage.setItem("kss_v1_audit_logs",JSON.stringify(Be)),localStorage.setItem("kss_v1_settings",JSON.stringify(z)),localStorage.setItem("kss_v1_work_zone",JSON.stringify(B)),localStorage.setItem("kss_v1_leave_requests",JSON.stringify(ke))},500);return()=>clearTimeout(o)},[L,J,Be,z,B,ke]),b.useEffect(()=>{if(!he)return;j(I,"notifications");let o=()=>{};return G(async()=>{const{query:i,orderBy:l,limit:f,onSnapshot:E}=await import("./vendor-firebase-w8s7kMWh.js").then(w=>w.O);return{query:i,orderBy:l,limit:f,onSnapshot:E}},[]).then(({query:i,orderBy:l,limit:f,onSnapshot:E})=>{const w=i(j(I,"notifications"),l("createdAt","desc"),f(50));o=E(w,g=>{const m=g.docs.map(h=>{var A,_,y;return{id:h.id,...h.data(),createdAt:((y=(_=(A=h.data().createdAt)==null?void 0:A.toDate)==null?void 0:_.call(A))==null?void 0:y.toISOString())??new Date().toISOString()}});Un(m)},g=>{console.warn("[Notifications] Listener error:",g)})}),()=>o()},[he]),b.useEffect(()=>{u&&a&&he&&(ve(a.id,a.role).catch(()=>{}),vr())},[u,a==null?void 0:a.id,he]),b.useEffect(()=>{if(!a)return;const o=L.find(i=>i.id===a.id||i.employeeId&&i.employeeId===a.employeeId||i.email&&a.email&&i.email.toLowerCase()===a.email.toLowerCase());if(o){let i=o.role;(o.employeeId==="CEO001"||o.employeeId==="CTO001")&&o.role==="SUPER_ADMIN"&&(i="SUPER_ADMIN"),(o.role!==a.role||s!==i||JSON.stringify(o)!==JSON.stringify(a))&&(c(o),r(i))}},[L,a==null?void 0:a.id,a==null?void 0:a.role,s]),b.useEffect(()=>{const o=async()=>{if(J.length===0)return;const l=await Je(),f=ce(l),w=l.getHours()*60+l.getMinutes()>=Mn*60;J.forEach(g=>{const m=g.date<f,h=g.date===f&&w;if(!g.checkOutAt&&(m||h)){const A=Le(g.date).toISOString(),_=g.breaks||[],y=_.find(M=>!M.endAt);let D=g.totalBreakMinutes||0,$=_;if(y){const M=Math.max(0,Math.floor((Le(g.date).getTime()-new Date(y.startAt).getTime())/6e4));D+=M,$=_.map(O=>O.startAt===y.startAt&&!O.endAt?{...O,endAt:A,durationMinutes:M}:O)}const T=Bt(g.date,g.checkInAt,A,D),S=(g.notes?g.notes+" | ":"")+"SYSTEM: Auto-checked out at 07:00 PM (Strict Shift End)";Q(M=>{const O=M.map(N=>N.id===g.id?{...N,checkOutAt:A,workingMinutes:T,breaks:$,totalBreakMinutes:D,notes:S}:N);return localStorage.setItem("kss_v1_attendance",JSON.stringify(O)),O}),v(k(I,"attendance",g.id),{checkOutAt:A,workingMinutes:T,breaks:$,totalBreakMinutes:D,notes:S},{merge:!0}).catch(()=>{}),K("AUTO_CHECKOUT",`Att ID: ${g.id}`,`Auto-checked out at 7:00 PM (strict shift end) for ${g.date}`)}})},i=setInterval(o,3e4);return o(),()=>clearInterval(i)},[J]),b.useEffect(()=>{let o=()=>{},i=()=>{},l=()=>{},f=()=>{},E=()=>{};return(async()=>{try{const g=await Rr();On(g),o=X(j(I,"employees"),m=>{var h,A;if(m.empty)Ne.forEach(async _=>{await v(k(I,"employees",_.id),_).catch(()=>{})});else{const _=[];m.forEach(T=>{var M,O;const S={id:T.id,...T.data()};if((S.id==="emp-003"||S.employeeId==="003")&&((M=S.email)==null?void 0:M.toLowerCase())==="d.koushik@kalpanaaa.in"){We(k(I,"employees",S.id)).catch(()=>{});return}if(S.employeeId==="CEO001"){let N=!1;S.role==="SUPER_ADMIN"&&((O=S.fullName)!=null&&O.toLowerCase().includes("akshit"))&&S.email!=="akshit@kalpanaaa.in"&&(S.email="akshit@kalpanaaa.in",N=!0),N&&v(k(I,"employees",S.id),S,{merge:!0}).catch(()=>{})}if(S.employeeId){let N=S.employeeId;if(N.includes("24072407")||N.includes("27072407")||N.length>9){const Y=N.match(/\d+$/);Y&&(N=`KSS2407${Y[0].slice(-3)}`)}else!N.startsWith("KSS2407")&&N.match(/^\d+$/)?N=`KSS2407${N.padStart(3,"0")}`:N.startsWith("KSS2707")?N=N.replace("KSS2707","KSS2407"):(N.startsWith("KS2407")||N.startsWith("KS2707"))&&(N=N.replace("KS2707","KSS2407").replace("KS2407","KSS2407"));N!==S.employeeId&&(S.employeeId=N,v(k(I,"employees",S.id),{employeeId:N},{merge:!0}).catch(()=>{}))}_.push(S)});const y=[],D=new Set;_.sort((T,S)=>new Date(S.createdAt||0).getTime()-new Date(T.createdAt||0).getTime());for(const T of _){const S=(h=T.email)==null?void 0:h.toLowerCase().trim(),M=(A=T.employeeId)==null?void 0:A.trim();if(S&&D.has(S)||M&&D.has(M)){We(k(I,"employees",T.id)).catch(()=>{});continue}S&&D.add(S),M&&D.add(M),y.push(T)}if(y.reverse(),!y.some(T=>{var S;return T.employeeId==="KSS2407003"||((S=T.email)==null?void 0:S.toLowerCase().includes("d.koushik@kalpanaaasoftwaresolutions.in"))})){const T={id:"emp-KSS2407003",employeeId:"KSS2407003",fullName:"D. Koushik",email:"d.koushik@kalpanaaasoftwaresolutions.in",role:"PROJECT_MANAGER",department:"Software Engineering",designation:"Project Manager",status:"Active",phone:"+91 98765 00003",gender:"Male",dateOfBirth:"1995-01-01",joiningDate:"2024-07-01",employmentType:"Full-Time",permanentAddress:"Bengaluru HQ Campus",currentAddress:"Bengaluru HQ Campus",city:"Bengaluru",state:"Karnataka",postalCode:"560001",emergencyContact:"+91 98765 00000",emergencyRelationship:"Management",shift:"General Shift (09:00 - 18:00)",workLocation:"Kalpanaaa Main Office HQ, Bengaluru",reportingManager:"Board of Directors",qrToken:"QR-TOKEN-KSS2407003-PM",createdAt:"2024-07-01T09:00:00Z",updatedAt:new Date().toISOString(),profilePhotoUrl:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",resumeUrl:""};y.push(T),v(k(I,"employees",T.id),T,{merge:!0}).catch(()=>{})}y.length>0&&re(y)}},m=>{q(m,x.LIST,"employees")}),i=X(j(I,"attendance"),m=>{if(m.empty)Q([]);else{const h=ce(),A=[];m.forEach(_=>{const y={id:_.id,..._.data()};if(y.employeeCode){let D=y.employeeCode;D.includes("KSS2707")?D=D.replace("KSS2707","KSS2407"):(D.startsWith("KS2407")||D.startsWith("KS2707"))&&(D=D.replace("KS2707","KSS2407").replace("KS2407","KSS2407")),D!==y.employeeCode&&(y.employeeCode=D,v(k(I,"attendance",y.id),{employeeCode:D},{merge:!0}).catch(()=>{}))}!y.employeeCode&&y.employeeId&&(y.employeeCode=y.employeeId),!y.employeeId&&y.employeeCode&&(y.employeeId=y.employeeCode),A.push(y)}),A.length>0?(A.sort((_,y)=>new Date(y.createdAt||y.date).getTime()-new Date(_.createdAt||_.date).getTime()),Q(A),localStorage.setItem("kss_v1_attendance",JSON.stringify(A))):(Q([]),localStorage.setItem("kss_v1_attendance",JSON.stringify([])))}},m=>{q(m,x.LIST,"attendance")}),E=X(j(I,"leaveRequests"),m=>{if(m.empty)oe([]);else{const h=[];m.forEach(A=>{h.push({id:A.id,...A.data()})}),h.length>0&&(h.sort((A,_)=>new Date(_.requestDate).getTime()-new Date(A.requestDate).getTime()),oe(h))}},m=>{q(m,x.LIST,"leaveRequests")}),l=X(k(I,"settings","global"),m=>{m.exists()?_e(m.data()):v(k(I,"settings","global"),ee).catch(()=>{})},m=>{q(m,x.GET,"settings/global")}),f=X(k(I,"workZones","company"),m=>{if(m.exists()){const h=m.data();let A=!1;(h.latitude===13.014316||h.longitude===77.64052||h.radiusMeters===500)&&(h.latitude=13.014333,h.longitude=77.646,h.radiusMeters=300,A=!0),qe(h),_e(_=>({..._,officeName:h.name,officeLatitude:h.latitude,officeLongitude:h.longitude,allowedRadiusMeters:h.radiusMeters})),A&&v(k(I,"workZones","company"),h,{merge:!0}).catch(()=>{})}else{const h={name:"Kalpanaaa Software Solutions — Main Office",latitude:13.014333,longitude:77.646,radiusMeters:100,active:!0,updatedBy:"System Init",updatedAt:new Date().toISOString()};v(k(I,"workZones","company"),h).catch(()=>{})}},m=>{q(m,x.GET,"workZones/company")})}catch(g){console.warn("Firestore initialization fallback to local state:",g)}})(),()=>{o(),i(),l(),f(),E()}},[]),b.useEffect(()=>{let o=()=>{};return u&&(s==="SUPER_ADMIN"||s==="HR_ADMIN")?o=X(Xe(j(I,"auditLogs"),et(1e3)),i=>{if(!i.empty){const l=[];i.forEach(f=>{l.push({id:f.id,...f.data()})}),l.length>0&&(l.sort((f,E)=>new Date(E.timestamp).getTime()-new Date(f.timestamp).getTime()),ye(l))}},i=>{console.warn("Audit logs permission denied or offline")}):ye([]),()=>o()},[u,s]),b.useEffect(()=>{let o=()=>{};return u&&a&&s!=="SUPER_ADMIN"&&s!=="HR_ADMIN"?o=X(Xe(j(I,"auditLogs"),jt("actorId","==",a.id),et(500)),i=>{if(i.empty)Te([]);else{const l=[];i.forEach(f=>{l.push({id:f.id,...f.data()})}),l.sort((f,E)=>new Date(E.timestamp).getTime()-new Date(f.timestamp).getTime()),Te(l)}},i=>{console.warn("Personal activity feed unavailable (offline or rules pending):",i)}):Te([]),()=>o()},[u,a==null?void 0:a.id,s]),b.useEffect(()=>{const o=localStorage.getItem("kss_v1_session");if(!o){c(null),d(!1),Ie(!0);return}const i=w=>{const g=be();let m=localStorage.getItem("kss_v1_session_id");if(!m){m=`sess_${g}_${Date.now()}_${Math.random().toString(36).substring(2,9)}`,localStorage.setItem("kss_v1_session_id",m),localStorage.setItem("kss_v1_device_category",g);const A=g==="desktop"?{desktopSessionId:m}:{mobileSessionId:m};v(k(I,"employees",w.id),A,{merge:!0}).catch(()=>{})}c(w);let h=w.role;(w.employeeId==="CEO001"||w.employeeId==="CTO001")&&(h="SUPER_ADMIN"),r(h),d(!0),Ie(!0)},l=Ee.current.find(w=>w.id===o||w.employeeId===o);if(l){i(l);return}let f=0;const E=setInterval(()=>{f++;const w=Ee.current.find(g=>g.id===o||g.employeeId===o);w?(clearInterval(E),i(w)):f>=25&&(clearInterval(E),localStorage.removeItem("kss_v1_session"),c(null),d(!1),Ie(!0))},200);return()=>clearInterval(E)},[]),b.useEffect(()=>{const o=te.onAuthStateChanged(async i=>{var l;if(i){n(i),P(!1);const f=(l=i.email)==null?void 0:l.toLowerCase();let E=Ee.current.find(w=>{var g;return((g=w.email)==null?void 0:g.toLowerCase())===f});if(!E&&f)try{const w=await Es(k(I,"users",i.uid));if(w.exists()){const g=w.data();E=Ee.current.find(m=>{var h,A;return((h=m.email)==null?void 0:h.toLowerCase())===((A=g.email)==null?void 0:A.toLowerCase())})}}catch(w){console.warn("User doc fetch exception:",w)}E&&(c(E),r(E.role),d(!0),Ie(!0),localStorage.setItem("kss_v1_session",E.id))}});return()=>o()},[]);const K=(o,i,l,f)=>{const E=new Date().toISOString(),w=Math.random().toString(36).slice(2,8),g={id:`log-${Date.now()}-${w}`,actorId:(f==null?void 0:f.actorId)||(a==null?void 0:a.id)||"sys-admin",actorName:(f==null?void 0:f.actorName)||(a==null?void 0:a.fullName)||"System Admin",actorRole:(f==null?void 0:f.actorRole)||s,action:o,target:i,details:l,timestamp:E,ipAddress:Mr()||void 0,category:Pr(o)};ye(A=>[g,...A].slice(0,1e3)),g.actorId===(a==null?void 0:a.id)&&Te(A=>[g,...A.filter(_=>_.id!==g.id)].slice(0,500)),v(k(I,"auditLogs",g.id),g).catch(A=>{q(A,x.WRITE,`auditLogs/${g.id}`)});const h={EMPLOYEE_CREATED:{title:"👤 New Employee Added"},EMPLOYEE_DELETED:{title:"🗑️ Employee Removed"},USER_LOGIN:{title:"🔐 Employee Login"},USER_LOGOUT:{title:"🚪 Employee Logout"},ATTENDANCE_CHECKIN:{title:"🟢 Check-In Recorded"},ATTENDANCE_CHECKOUT:{title:"🔴 Check-Out Recorded"},ATTENDANCE_BREAK_START:{title:"🟡 Break Started"},ATTENDANCE_BREAK_END:{title:"🟡 Break Ended"},LEAVE_APPROVED:{title:"✅ Leave Approved"},LEAVE_REJECTED:{title:"❌ Leave Rejected"},PAYROLL_RUN:{title:"💰 Payroll Run"}}[o];h&&it(o,h.title,`${l} — by ${g.actorName}`,{actorId:g.actorId,actorName:g.actorName})},Fn=async(o,i)=>{R(!0);try{const l=o.trim().toLowerCase(),f=i.trim();if(!l||!f)return R(!1),{success:!1,message:"Please enter both your company email address and password."};const E=L.find(h=>{var A;return((A=h.email)==null?void 0:A.toLowerCase())===l}),w=l.includes("prahlad");if(!w&&E&&E.lockoutUntil&&E.lockoutUntil>Date.now()){const h=Math.ceil((E.lockoutUntil-Date.now())/6e4);return R(!1),{success:!1,message:`SECURITY ALERT: Account temporarily locked due to multiple failed attempts. Please wait ${h} minutes.`}}const g=h=>{E&&E.failedLoginCount&&v(k(I,"employees",h),{failedLoginCount:0,lockoutUntil:null},{merge:!0}).catch(()=>{})},m=()=>{if(E){const h=(E.failedLoginCount||0)+1,A={failedLoginCount:h};!w&&h>=5&&(A.lockoutUntil=Date.now()+15*6e4),v(k(I,"employees",E.id),A,{merge:!0}).catch(()=>{})}};try{const h=await ws(te,l,f);if(h.user){n(h.user);const A=L.find(M=>{var O;return((O=M.email)==null?void 0:O.toLowerCase())===l||M.id===h.user.uid});if(A){const M=be(),O=`sess_${M}_${Date.now()}_${Math.random().toString(36).substring(2,9)}`,N=M==="desktop"?{desktopSessionId:O}:{mobileSessionId:O},Y={...A,...N,currentSessionId:O};c(Y);const U=A.role;return r(U),d(!0),localStorage.setItem("kss_v1_session",A.id),localStorage.setItem("kss_v1_session_id",O),localStorage.setItem("kss_v1_device_category",M),v(k(I,"employees",A.id),N,{merge:!0}).catch(()=>{}),K("USER_LOGIN",A.fullName,`Firebase Auth Login (${U})`,{actorId:A.id,actorName:A.fullName,actorRole:U}),g(A.id),R(!1),{success:!0,message:`Welcome back, ${A.fullName}!`}}const _=h.user.uid,y=`sess_${Date.now()}_${Math.random().toString(36).substring(2,9)}`,D=h.user.displayName||l.split("@")[0],$=Or(D,L),T=$.employeeId,S={id:_,employeeId:T,fullName:D,email:l,role:$.role||"EMPLOYEE",department:"General Operations",designation:$.designation||"Software Engineer",status:"Active",phone:"",gender:"Prefer not to say",dateOfBirth:"",joiningDate:new Date().toISOString().split("T")[0],employmentType:"Full-Time",permanentAddress:"",currentAddress:"",city:"",state:"",postalCode:"",emergencyContact:"",emergencyRelationship:"",shift:"General Shift (09:00 - 18:00)",workLocation:"Kalpanaaa Main Office HQ, Bengaluru",reportingManager:"",qrToken:T,currentSessionId:y,sessionFingerprint:br(),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};return re(M=>[S,...M.filter(O=>O.id!==S.id)]),c(S),r("EMPLOYEE"),d(!0),localStorage.setItem("kss_v1_session",S.id),localStorage.setItem("kss_v1_session_id",y),v(k(I,"employees",S.id),{currentSessionId:y,sessionFingerprint:S.sessionFingerprint},{merge:!0}).catch(()=>{}),R(!1),{success:!0,message:"Welcome! You're now signed in."}}}catch(h){console.warn("Firebase login attempt:",h.code)}return m(),R(!1),{success:!1,message:"No account found with this email address or incorrect password. Please register first."}}catch(l){return R(!1),{success:!1,message:l.message||"Login failed."}}},xn=async o=>{try{const{getAuth:i,sendPasswordResetEmail:l}=await G(async()=>{const{getAuth:E,sendPasswordResetEmail:w}=await import("./vendor-firebase-w8s7kMWh.js").then(g=>g.N);return{getAuth:E,sendPasswordResetEmail:w}},[]),f=i();return await l(f,o),{success:!0,message:`Password reset email sent to ${o}`}}catch(i){return console.error("Password reset error:",i),{success:!1,message:i.message||"Failed to send password reset email."}}},Bn=async(o,i)=>{try{const l=Ze(rt,`SecondaryApp-${Date.now()}`),{getAuth:f,createUserWithEmailAndPassword:E,signOut:w}=await G(async()=>{const{getAuth:h,createUserWithEmailAndPassword:A,signOut:_}=await import("./vendor-firebase-w8s7kMWh.js").then(y=>y.N);return{getAuth:h,createUserWithEmailAndPassword:A,signOut:_}},[]),g=f(l),m=await E(g,o,i);return await v(k(I,"users",m.user.uid),{uid:m.user.uid,email:o,createdAt:new Date().toISOString()},{merge:!0}).catch(()=>{}),await w(g),{success:!0,message:"Password successfully set."}}catch(l){return l.code==="auth/email-already-in-use"?{success:!1,message:"This employee already has a secure login. Please use the Reset Email button instead."}:{success:!1,message:l.message||"Failed to set password."}}},qn=o=>{R(!0),setTimeout(()=>{let i;o==="CEO"||o==="SUPER_ADMIN"?i=L.find(f=>{var E;return f.employeeId==="CEO001"||((E=f.fullName)==null?void 0:E.toLowerCase().includes("akshit"))})||L[0]:o==="CTO"?i=L.find(f=>{var E;return f.employeeId==="CTO001"||((E=f.fullName)==null?void 0:E.toLowerCase().includes("gaurav"))})||L[1]:o==="HR_ADMIN"?i=L.find(f=>f.role==="HR_ADMIN")||L[2]:i=L.find(f=>f.role==="EMPLOYEE")||L[3];let l="SUPER_ADMIN";if(i){const f=be(),E=`sess_${f}_${Date.now()}_${Math.random().toString(36).substring(2,9)}`,w=f==="desktop"?{desktopSessionId:E}:{mobileSessionId:E},g={...i,...w};c(g),l=i.employeeId==="CEO001"||i.employeeId==="CTO001"?"SUPER_ADMIN":i.role,r(l),localStorage.setItem("kss_v1_session",i.id),localStorage.setItem("kss_v1_session_id",E),localStorage.setItem("kss_v1_device_category",f),v(k(I,"employees",i.id),w,{merge:!0}).catch(()=>{})}else r("SUPER_ADMIN");d(!0),P(!0),R(!1),K("USER_LOGIN",`Demo Executive Login (${o})`,`Switched workspace view to ${o}`,{actorId:(i==null?void 0:i.id)||"demo",actorName:(i==null?void 0:i.fullName)||`Demo ${o}`,actorRole:l})},150)},Hn=()=>{a&&K("USER_LOGOUT",a.fullName,`Signed out of the portal (${be()})`,{actorId:a.id,actorName:a.fullName,actorRole:a.role}),te.signOut(),n(null),c(null),d(!1),P(!0),localStorage.removeItem("kss_v1_session"),localStorage.removeItem("kss_v1_session_id"),localStorage.removeItem("kss_v1_device_category")},Wn=async o=>{var h;let i=`emp-${Date.now()}`;const l=(h=o.email)==null?void 0:h.trim().toLowerCase();if(o.password){const A=Ze(rt,`SecondaryApp-${Date.now()}`),{getAuth:_,createUserWithEmailAndPassword:y,signOut:D}=await G(async()=>{const{getAuth:T,createUserWithEmailAndPassword:S,signOut:M}=await import("./vendor-firebase-w8s7kMWh.js").then(O=>O.N);return{getAuth:T,createUserWithEmailAndPassword:S,signOut:M}},[]),$=_(A);try{i=(await y($,l,o.password)).user.uid,await v(k(I,"users",i),{uid:i,email:l,role:o.role,fullName:o.fullName,createdAt:new Date().toISOString()}).catch(()=>{}),await D($)}catch(T){return console.error("Error creating Firebase user:",T),{success:!1,message:T.message||"Failed to create Firebase authentication user."}}}const f=o.employeeId,{password:E,...w}=o,m={...$e(w),id:i,uid:i,qrToken:f,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};return re(A=>[m,...A]),v(k(I,"employees",m.id),m).catch(A=>{q(A,x.WRITE,`employees/${m.id}`)}),K("EMPLOYEE_CREATED",`${m.employeeId} (${m.fullName})`,`Added to ${m.department} as ${m.designation}`),m},Re=(o,i)=>{const l=$e(i);re(f=>f.map(E=>{if(E.id===o){const w={...E,...l,updatedAt:new Date().toISOString()};return v(k(I,"employees",o),w,{merge:!0}).catch(g=>{q(g,x.UPDATE,`employees/${o}`)}),w}return E})),K("EMPLOYEE_UPDATED",`Employee ID: ${o}`,`Fields updated: ${Object.keys(i).join(", ")}`)},Vn=o=>{const i=L.find(l=>l.id===o);re(l=>l.filter(f=>f.id!==o)),We(k(I,"employees",o)).catch(l=>{q(l,x.DELETE,`employees/${o}`)}),K("EMPLOYEE_DELETED",i?`${i.employeeId} (${i.fullName})`:o,"Removed employee profile from directory")},Yn=o=>{const i=`QR-TOKEN-${o}-${Date.now().toString(36).toUpperCase()}`;return Re(o,{qrToken:i}),K("QR_REGENERATED",`Employee ${o}`,"Regenerated cryptographic attendance pass"),i},Gn=async(o,i,l,f=8,E="Facial Recognition")=>{if(!navigator.onLine)return{success:!1,message:"SECURITY ALERT: Airplane mode or offline connection detected. Check-In blocked."};const w=L.find(T=>T.id===o||T.employeeId===o);if(!w)return{success:!1,message:"Employee not found."};const g=await Je(),m=ce(g),h=J.find(T=>xt(T,w)&&T.date===m),A=(w.approvedWfhDates||[]).includes(m);if(z.officeStaticIp&&!A)try{const S=await(await fetch("https://api.ipify.org?format=json")).json();if(S.ip!==z.officeStaticIp)return{success:!1,message:`SECURITY ALERT: Unrecognized Network. You must be connected to the Office Wi-Fi to check in (Expected: ${z.officeStaticIp}, Got: ${S.ip}).`}}catch{return{success:!1,message:"SECURITY ALERT: Unable to securely verify your network IP address. Please check your connection."}}const _=qt(w,h,z,i,l,A);if(!_.allowed&&_.action==="CHECK_IN")return{success:!1,message:_.message};if(h&&h.checkInAt)return h.checkOutAt?{success:!1,message:"You have already completed your shift and checked out for today."}:{success:!1,message:"Employee is already checked in for today."};const y=i!==void 0&&l!==void 0?ot(i,l,B.latitude,B.longitude):0,D=g.toISOString(),$={id:h?h.id:`att-${w.employeeId||w.id}-${m}`,employeeId:w.id,employeeCode:w.employeeId||w.id,employeeName:w.fullName,department:w.department,date:m,checkInAt:D,checkOutAt:null,workingMinutes:0,status:_.status,attendanceMethod:E,officeLatitude:B.latitude,officeLongitude:B.longitude,officeRadiusMeters:B.radiusMeters,distanceFromOffice:y,locationAccuracy:f,locationVerified:_.locationVerified,latitude:i,longitude:l,deviceInfo:"Browser Scanner Terminal",createdAt:D,updatedAt:D};return Q(T=>{const S=[$,...T.filter(M=>M.id!==$.id)];return localStorage.setItem("kss_v1_attendance",JSON.stringify(S)),S}),v(k(I,"attendance",$.id),$).catch(T=>{q(T,x.WRITE,`attendance/${$.id}`)}),K("ATTENDANCE_CHECKIN",`${w.employeeId} (${w.fullName})`,`Status: ${_.status}, GPS: ${_.locationVerified?"Verified":"Unverified"} (${y}m from office)`),{success:!0,message:_.message,record:$}},zn=async(o,i,l,f=8)=>{if(!navigator.onLine)return{success:!1,message:"SECURITY ALERT: Airplane mode or offline connection detected. Check-Out blocked."};const E=L.find(U=>U.id===o||U.employeeId===o);if(!E)return{success:!1,message:"Employee not found."};const w=await Je(),g=ce(w),m=J.find(U=>xt(U,E)&&U.date===g);if(!m||!m.checkInAt)return{success:!1,message:"No active check-in record found for today."};if(m.checkOutAt)return{success:!1,message:"Employee has already checked out for today."};const h=(E.approvedWfhDates||[]).includes(g),A=qt(E,m,z,i,l,h);if(!A.allowed)return{success:!1,message:A.message};const _=i!==void 0&&l!==void 0?ot(i,l,B.latitude,B.longitude):m.distanceFromOffice||0,y=w.toISOString();let D=0;const $=m.breaks||[];let T=$;const S=$.find(U=>!U.endAt);S&&(D=Math.floor((new Date(y).getTime()-new Date(S.startAt).getTime())/6e4),T=$.map(U=>U.startAt===S.startAt&&!U.endAt?{...U,endAt:y,durationMinutes:D}:U));const M=(m.totalBreakMinutes||0)+D,O=Bt(g,m.checkInAt,y,M),N=Math.max(1,O),Y={...m,checkOutAt:y,workingMinutes:N,breaks:T,totalBreakMinutes:M,officeLatitude:m.officeLatitude||B.latitude,officeLongitude:m.officeLongitude||B.longitude,officeRadiusMeters:m.officeRadiusMeters||B.radiusMeters,distanceFromOffice:_,locationAccuracy:f||m.locationAccuracy||8,locationVerified:A.locationVerified,updatedAt:y};return Q(U=>{const Tt=U.map(_t=>_t.id===Y.id?Y:_t);return localStorage.setItem("kss_v1_attendance",JSON.stringify(Tt)),Tt}),v(k(I,"attendance",Y.id),Y,{merge:!0}).catch(U=>{q(U,x.UPDATE,`attendance/${Y.id}`)}),K("ATTENDANCE_CHECKOUT",`${E.employeeId} (${E.fullName})`,`Duration: ${Math.floor(N/60)}h ${N%60}m`),{success:!0,message:"Checked Out Successfully",record:Y}},jn=(o,i)=>{Q(l=>l.map(f=>f.id===o?{...f,...i,updatedAt:new Date().toISOString()}:f)),v(k(I,"attendance",o),{...i,updatedAt:new Date().toISOString()},{merge:!0}).catch(l=>{q(l,x.UPDATE,`attendance/${o}`)}),K("ATTENDANCE_CORRECTION",`Record ${o}`,`Updated fields: ${Object.keys(i).join(", ")}`)},yt=o=>{const i={...z,...o};_e(i),v(k(I,"settings","global"),i).catch(l=>{q(l,x.WRITE,"settings/global")}),K("SETTINGS_UPDATED","Company Policy","Updated system preferences and GPS/shift rules")},Jn=async o=>{const i={name:o.name||B.name||"Kalpanaaa Software Solutions — Main Office",latitude:o.latitude!==void 0?Number(o.latitude):B.latitude,longitude:o.longitude!==void 0?Number(o.longitude):B.longitude,radiusMeters:o.radiusMeters!==void 0?Number(o.radiusMeters):B.radiusMeters,active:!0,updatedBy:(a==null?void 0:a.fullName)||(a==null?void 0:a.email)||"Authorized HR / CEO / CTO",updatedAt:new Date().toISOString()};qe(i),localStorage.setItem("kss_v1_work_zone",JSON.stringify(i)),yt({officeName:i.name,officeLatitude:i.latitude,officeLongitude:i.longitude,allowedRadiusMeters:i.radiusMeters}),await v(k(I,"workZones","company"),i).catch(l=>{q(l,x.WRITE,"workZones/company")}),K("COMPANY_WORKZONE_UPDATED",i.name,`Lat: ${i.latitude}, Lon: ${i.longitude}, Radius: ${i.radiusMeters}m`)},Qn=o=>{const i={...o,id:`LR-${Math.random().toString(36).substring(2,9).toUpperCase()}`,status:"Pending",requestDate:new Date().toISOString()};oe(l=>[i,...l]),v(k(I,"leaveRequests",i.id),i).catch(l=>{q(l,x.WRITE,`leaveRequests/${i.id}`)}),K("LEAVE_REQUEST",o.employeeName,`Submitted ${o.type} request from ${o.startDate} to ${o.endDate}`)},Zn=(o,i,l,f)=>{oe(w=>w.map(g=>g.id===o?{...g,status:i,reviewedBy:l,reviewNotes:f}:g)),v(k(I,"leaveRequests",o),{status:i,reviewedBy:l,reviewNotes:f||""},{merge:!0}).catch(w=>{q(w,x.UPDATE,`leaveRequests/${o}`)});const E=ke.find(w=>w.id===o);if(E&&i==="Approved"&&E.type==="WFH"){const w=L.find(g=>g.employeeId===E.employeeId);if(w){const g=new Set(w.approvedWfhDates||[]);let m=new Date(E.startDate);const h=new Date(E.endDate);for(;m<=h;)g.add(ce(m)),m.setDate(m.getDate()+1);Re(w.id,{approvedWfhDates:Array.from(g)})}}K("LEAVE_DECISION",l,`${i} leave request ${o}`)},Xn=o=>{oe(i=>i.map(l=>l.id===o?{...l,status:"Cancelled",reviewedBy:(a==null?void 0:a.fullName)||"Employee",reviewNotes:"Cancelled by employee before approval"}:l)),v(k(I,"leaveRequests",o),{status:"Cancelled",reviewedBy:(a==null?void 0:a.fullName)||"Employee",reviewNotes:"Cancelled by employee before approval",cancelledAt:new Date().toISOString()},{merge:!0}).catch(i=>{q(i,x.UPDATE,`leaveRequests/${o}`)}),K("LEAVE_CANCELLED",(a==null?void 0:a.fullName)||"Employee",`Cancelled leave request ${o}`)},es=()=>{re(Ne),Q(Kt()),ye(Ft),_e(ee);const o={name:"Kalpanaaa Software Solutions — Main Office",latitude:13.014333,longitude:77.646,radiusMeters:100,active:!0,updatedBy:"System Init",updatedAt:new Date().toISOString()};qe(o),localStorage.removeItem("kss_v1_employees"),localStorage.removeItem("kss_v1_attendance"),localStorage.removeItem("kss_v1_audit_logs"),localStorage.removeItem("kss_v1_settings"),localStorage.removeItem("kss_v1_work_zone"),localStorage.removeItem("kss_v1_leave_requests"),oe([]),Ne.forEach(i=>{v(k(I,"employees",i.id),i).catch(()=>{})}),Kt().forEach(i=>{v(k(I,"attendance",i.id),i).catch(()=>{})}),v(k(I,"settings","global"),ee).catch(()=>{}),v(k(I,"workZones","company"),o).catch(()=>{}),K("SYSTEM_RESET","Database","Re-seeded system with demo enterprise workforce dataset")},ts=async(o,i)=>{a&&(await Dr(o,i,a.id,a.fullName),K("ADMIN_BROADCAST","All Employees",`Broadcast sent: "${o}" — ${i}`))},ns=()=>{const o=He.map(l=>l.id).filter(Boolean),i=new Set([...Array.from(It),...o]);Kn(i),localStorage.setItem("kss_v1_read_notifs",JSON.stringify(Array.from(i)))},ss=He.filter(o=>o.id&&!It.has(o.id)).length,as=async o=>{const i=o?o.trim():"";if(!i||i.length<6)return{success:!1,message:"Password must be at least 6 characters long."};if(!a)return{success:!1,message:"No active employee session found."};try{if(te.currentUser){const{updatePassword:l}=await G(async()=>{const{updatePassword:f}=await import("./vendor-firebase-w8s7kMWh.js").then(E=>E.N);return{updatePassword:f}},[]);await l(te.currentUser,i)}return Re(a.id,{updatedAt:new Date().toISOString()}),K("SECURITY_PASSWORD_CHANGE",a.fullName,"Employee updated account password successfully."),it("SECURITY_ALERT","🔐 Account Password Updated",`Account password for ${a.fullName} (${a.email}) was updated successfully.`,{actorId:a.id,actorName:a.fullName}),{success:!0,message:"Your account password has been updated successfully!"}}catch(l){return console.warn("[AuthContext] Update password error:",l),(l==null?void 0:l.code)==="auth/requires-recent-login"?{success:!1,message:"For security reasons, please log out and log in again before updating your password."}:{success:!1,message:(l==null?void 0:l.message)||"Failed to update password. Please try again."}}};b.useEffect(()=>{u&&a&&"Notification"in window&&(Notification.permission==="granted"?ve(a.id,a.role):Notification.permission!=="denied"&&Notification.requestPermission().then(o=>{o==="granted"&&ve(a.id,a.role)}))},[u,a==null?void 0:a.id,a==null?void 0:a.role]);const rs=async()=>{if(!("Notification"in window))return!1;try{const o=await Notification.requestPermission();return o==="granted"&&a?(await ve(a.id,a.role),!0):o==="granted"}catch{return!1}};return os.jsx(Pn.Provider,{value:{user:t,activeEmployee:a,role:s,isAuthenticated:u,isLoading:p,isDemoMode:C,isFirestoreConnected:he,isSessionReady:Ln,employees:L,attendance:J,auditLogs:Be,myAuditLogs:$n,settings:z,companyWorkZone:B,leaveRequests:ke,notifications:He,unreadNotificationCount:ss,loginWithEmail:Fn,quickDemoLogin:qn,logout:Hn,addEmployee:Wn,updateEmployee:Re,deleteEmployee:Vn,recordCheckIn:Gn,recordCheckOut:zn,updateAttendanceRecord:jn,updateSettings:yt,saveCompanyWorkZone:Jn,submitLeaveRequest:Qn,updateLeaveRequestStatus:Zn,cancelLeaveRequest:Xn,addAuditLog:K,resetToDemoData:es,regenerateQrToken:Yn,sendPasswordReset:xn,setEmployeeInitialPassword:Bn,sendBroadcast:ts,markAllNotificationsRead:ns,updateCurrentEmployeePassword:as,requestMobilePushPermission:rs},children:e})},Vr=()=>{const e=b.useContext(Pn);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},Yr="/assets/kalpana_logo-q4uKH8ez.jpeg";export{Wr as A,x as O,Mn as S,te as a,qr as b,xt as c,I as d,Br as e,ot as f,ce as g,q as h,xr as i,Yr as k,Hr as n,Fr as o,Vr as u};
