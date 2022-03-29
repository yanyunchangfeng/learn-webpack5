/*! For license information please see main.ae0dddce2c209d477dca.js.LICENSE.txt */
(()=>{"use strict";var e,t={239:(e,t,r)=>{r.e(917).then(r.bind(r,917)).then((e=>{console.log(e,"---- Async Wasm Module cppConvFilter"),console.log("---- Async Wasm Module"),console.log("---- Async Wasm Module"),console.log("---- Async Wasm Module"),console.log("---- Async Wasm Module");const t=e.cppConvFilter,r=e.cppGetkernelPtr,n=e.cppGetDataPtr,o=e.memory,a=["STOP","JS","WASM"];let i="STOP";document.querySelector("button")?.addEventListener("click",(()=>{i=a[Number(document.querySelector("input[name='options']:checked").value)]}));const s=document.querySelector(".fps-num"),c=[],l=[];let u,d;const p=function(e){const t=e.length,r=Math.floor(t/2);for(let n=0;n<r;++n)for(let r=0;r<t;++r){let o=e[n][r];e[n][r]=e[t-n-1][t-r-1],e[t-n-1][t-r-1]=o}if(1&t)for(let n=0;n<r;++n){let o=e[r][n];e[r][n]=e[r][t-n-1],e[r][t-n-1]=o}return e}([[-1,-1,1],[-1,14,-1],[1,-1,-1]]),f=n(),h=r(),m=p.reduce(((e,t)=>e.concat(t)),[]);let g=new Uint8Array(o.buffer);function v(e){return e.length>20?(e.shift(-1),(1e3/(e.reduce(((e,t)=>e+t),0)/Math.abs(20))).toFixed(2)):"NaN"}new Int8Array(o.buffer).set(m,h);let b=document.querySelector(".video"),y=document.querySelector(".canvas"),w=y.getContext("2d"),S=b.play();function A(){const e=performance.now();w.drawImage(b,0,0);let r=w.getImageData(0,0,b.videoWidth,b.videoHeight);switch(i){case"JS":r.data.set(function(e,t,r,n){const o=n.length,a=o,i=Math.floor(o/2);for(let s=i;s<r-i;++s)for(let r=i;r<t-i;++r){const c=4*(s*t+r);let l=0,u=0,d=0;for(let c=0;c<o;++c)for(let o=0;o<a;++o){const a=4*((s+(c-i))*t+(r+(o-i)));l+=e[a+0]*n[c][o],u+=e[a+1]*n[c][o],d+=e[a+2]*n[c][o]}e[c+0]=l/4>255?255:l/4<0?0:l/4,e[c+1]=u/4>255?255:u/4<0?0:u/4,e[c+2]=d/4>255?255:d/4<0?0:d/4}return e}(r.data,u,d,p));break;case"WASM":r.data.set(function(e,r,n){const o=e.length;return g.set(e,f),t(r,n,4),g.subarray(f,f+o)}(r.data,u,d))}w.putImageData(r,0,0);let n=performance.now()-e;"JS"===i?(c.push(n),s.innerHTML=v(c)):(l.push(n),s.innerHTML=v(l)),requestAnimationFrame(A)}void 0!==S&&S.catch((e=>{console.error("Can not autoplay!")})),b.addEventListener("loadeddata",(()=>{y.setAttribute("height",String(b.videoHeight)),y.setAttribute("width",String(b.videoWidth)),u=y.clientWidth,d=y.clientHeight,A()}))}))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={id:e,exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>e+".24522640b1571f71b680.js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},n.l=(t,r,o,a)=>{if(e[t])e[t].push(r);else{var i,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==t){i=u;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.src=t),e[t]=[r];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),s&&document.head.appendChild(i)}},n.v=(e,t,r,o)=>{var a=fetch(n.p+""+r+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(a,o).then((t=>Object.assign(e,t.instance.exports))):a.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,o))).then((t=>Object.assign(e,t.instance.exports)))},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={179:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,a,[i,s,c]=r,l=0;if(i.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);c&&c(n)}for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n(239)})();