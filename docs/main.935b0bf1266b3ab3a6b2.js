(()=>{"use strict";var e,t,n={},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={id:e,exports:{}};return n[e](a,a.exports,o),a.exports}o.m=n,o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>e+".576b429533ca72402ae4.js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="learning-webpack5:",o.l=(n,r,a,i)=>{if(e[n])e[n].push(r);else{var c,s;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){c=d;break}}c||(s=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",t+a),c.src=n),e[n]=[r];var p=(t,r)=>{c.onerror=c.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),s&&document.head.appendChild(c)}},o.v=(e,t,n,r)=>{var a=fetch(o.p+""+n+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(a,r).then((t=>Object.assign(e,t.instance.exports))):a.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,r))).then((t=>Object.assign(e,t.instance.exports)))},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=a);var i=o.p+o.u(t),c=new Error;o.l(i,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,a,[i,c,s]=n,l=0;if(i.some((t=>0!==e[t]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);s&&s(o)}for(t&&t(n);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0},n=self.webpackChunklearning_webpack5=self.webpackChunklearning_webpack5||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),document.head.title="yanyunchangfeng",o.e(355).then(o.bind(o,355)).then((e=>{console.log(e,"---- Async Wasm Module cppConvFilter"),console.log("---- Async Wasm Module"),console.log("---- Async Wasm Module"),console.log("---- Async Wasm Module"),console.log("---- Async Wasm Module");const t=e.cppConvFilter,n=e.cppGetkernelPtr,r=e.cppGetDataPtr,o=e.memory,a=["STOP","JS","WASM"];let i="STOP";document.querySelector("button")?.addEventListener("click",(()=>{i=a[Number(document.querySelector("input[name='options']:checked").value)]}));const c=document.querySelector(".fps-num"),s=[],l=[];let u,d;const p=function(e){const t=e.length,n=Math.floor(t/2);for(let r=0;r<n;++r)for(let n=0;n<t;++n){let o=e[r][n];e[r][n]=e[t-r-1][t-n-1],e[t-r-1][t-n-1]=o}if(1&t)for(let r=0;r<n;++r){let o=e[n][r];e[n][r]=e[n][t-r-1],e[n][t-r-1]=o}return e}([[-1,-1,1],[-1,14,-1],[1,-1,-1]]),f=r(),h=n(),m=p.reduce(((e,t)=>e.concat(t)),[]);let g=new Uint8Array(o.buffer);function b(e){return e.length>20?(e.shift(-1),(1e3/(e.reduce(((e,t)=>e+t),0)/Math.abs(20))).toFixed(2)):"NaN"}new Int8Array(o.buffer).set(m,h);let v=document.querySelector(".video"),y=document.querySelector(".canvas"),w=y.getContext("2d"),A=v.play();function S(){const e=performance.now();w.drawImage(v,0,0);let n=w.getImageData(0,0,v.videoWidth,v.videoHeight);switch(i){case"JS":n.data.set(function(e,t,n,r){const o=r.length,a=o,i=Math.floor(o/2);for(let c=i;c<n-i;++c)for(let n=i;n<t-i;++n){const s=4*(c*t+n);let l=0,u=0,d=0;for(let s=0;s<o;++s)for(let o=0;o<a;++o){const a=4*((c+(s-i))*t+(n+(o-i)));l+=e[a+0]*r[s][o],u+=e[a+1]*r[s][o],d+=e[a+2]*r[s][o]}e[s+0]=l/4>255?255:l/4<0?0:l/4,e[s+1]=u/4>255?255:u/4<0?0:u/4,e[s+2]=d/4>255?255:d/4<0?0:d/4}return e}(n.data,u,d,p));break;case"WASM":n.data.set(function(e,n,r){const o=e.length;return g.set(e,f),t(n,r,4),g.subarray(f,f+o)}(n.data,u,d))}w.putImageData(n,0,0);let r=performance.now()-e;"JS"===i?(s.push(r),c.innerHTML=b(s)):(l.push(r),c.innerHTML=b(l)),requestAnimationFrame(S)}void 0!==A&&A.catch((e=>{console.error("Can not autoplay!")})),v.addEventListener("loadeddata",(()=>{y.setAttribute("height",String(v.videoHeight)),y.setAttribute("width",String(v.videoWidth)),u=y.clientWidth,d=y.clientHeight,S()}))})),console.log("fn1",(function(){console.log("fn1")}))})();