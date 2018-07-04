(function(){/*

 Copyright 2017 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
'use strict';const e=function(){function q(a){let b=r.get(a);void 0===b&&(b=t(null),r.set(a,b));return b}function h(a){const b=y(a);if(null==b||y(b)!==B)throw Error();for(let d of C(b))u(a,d,{value:a[d]});return a}function c(a,b){f(a.prototype);delete a.name;u(a,"name",{value:b})}function k(a){return(b)=>b instanceof a&&r.has(b)}function D(a,b){function d(d,c){const E=b[c]||F,g=f(new d(z,a));return f({[c](a){a=""+E(a);const b=f(t(g));q(b).v=a;return b}}[c])}return f({createHTML:d(l,"createHTML"),
createScriptURL:d(m,"createScriptURL"),createURL:d(g,"createURL"),createScript:d(n,"createScript")})}const {assign:G,create:t,defineProperty:u,freeze:f,getOwnPropertyNames:C,getPrototypeOf:y,prototype:B}=Object,{forEach:H,push:I}=Array.prototype,z=Symbol(),r=h(new WeakMap),v=h([]),A=h(new Map),w=h([]);let x=!1;class p{constructor(a,b){if(a!==z)throw Error("cannot call the constructor");u(this,"policyName",{value:""+b,enumerable:!0})}toString(){return q(this).v}valueOf(){return q(this).v}}class g extends p{}
c(g,"TrustedURL");class m extends g{}c(m,"TrustedScriptURL");class l extends p{}c(l,"TrustedHTML");class n extends p{}c(n,"TrustedScript");c(p,"TrustedType");const F=()=>{throw Error("undefined conversion");};return f({a:l,f:g,c:m,b:n,g:function(a,b,d=!1){a=""+a;if(x&&-1===w.indexOf(a))throw Error("Policy "+a+" disallowed.");if(-1!==v.indexOf(a))throw Error("Policy "+a+" exists.");v.push(a);const c=G(t(null));c.createHTML=b.createHTML;c.createURL=b.createURL;c.createScriptURL=b.createScriptURL;c.createScript=
b.createScript;f(c);b=D(a,c);d&&A.set(a,b);return b},h:function(a){return A.get(""+a)||null},i:function(){return v.slice()},s:k(l),A:k(g),w:k(m),u:k(n),B:function(a){-1!==a.indexOf("*")?x=!1:(x=!0,w.length=0,H.call(a,(a)=>{I.call(w,""+a)}))}})}();"undefined"!==typeof window&&"undefined"===typeof window.TrustedTypes&&(window.TrustedTypes={TrustedHTML:e.a,TrustedURL:e.f,TrustedScriptURL:e.c,TrustedScript:e.b,createHTML:e.j,createURL:e.o,createScriptURL:e.m,createScript:e.l,createPolicy:e.g,getExposedPolicy:e.h,getPolicyNames:e.i});}).call(window);//# sourceMappingURL=trustedtypes.api_only.build.js.map
