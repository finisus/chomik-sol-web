"use strict";(self.webpackChunkchomik_sol_web=self.webpackChunkchomik_sol_web||[]).push([[57],{208:(n,e,t)=>{t.d(e,{A:()=>m});var a=t(354),o=t.n(a),r=t(314),A=t.n(r),i=t(417),s=t.n(i),c=new URL(t(361),t.b),d=new URL(t(592),t.b),p=A()(o()),l=s()(c),f=s()(d);p.push([n.id,`@font-face {\n  font-family: 'elite';\n  src: url(${l});\n}\n@font-face {\n  font-family: 'notepen';\n  src: url(${f});\n}\n\n:root {\n  --text: #000000;\n  --base: #ffffff;\n  --baseTran: rgba(255, 255, 255, 0.1);\n}\n\n.background-blur {\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n}\n\n.backdrop-shadow {\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),\n                    0 22px 70px 4px rgba(0,0,0,0.55),\n                    0 0 0 1px rgba(0, 0, 0, 0.0);\n}\n\nimg {\n  -webkit-user-drag: none;\n  -khtml-user-drag: none;\n  -moz-user-drag: none;\n  -o-user-drag: none;\n}\n\nhtml { height: 100%; }\nbody {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n\n  font-size: 1rem;\n  font-family: 'notepen';\n  color: var(--text);\n  \n  background-color: var(--base);\n}\n\nheader {\n  z-index: 99;\n  background-color: var(--base);\n  border-bottom: 2px solid var(--text);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 7480px;\n  height: 48px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\nheader span {\n  font-size: 1.5rem;\n  transform: translate(-99%, 0);\n  animation: moveRight 20s linear infinite;\n}\n@keyframes moveRight {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-3726px);\n  }\n}\n\nmain {\n  z-index: 99;\n  position: absolute;\n  top: calc(50% - 48px);\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nmain h1 {\n  font-size: 5rem;\n  text-shadow:\n    2px 2px 0 #ffffff,\n    -2px 2px 0 #ffffff,\n    -2px -2px 0 #ffffff,\n    2px -2px 0 #ffffff;\n  cursor: none;\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  user-select: none; /* Standard syntax */\n}\n\nmain .socials {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 16px;\n  grid-row-gap: 16px; \n}\nmain .socials button {\n  background: var(--baseTran);\n  border: none;\n  color: var(--text);\n  font-family: 'notepen';\n  font-size: 2.5rem;\n  text-align: center;\n  cursor: pointer;\n  text-shadow:\n    2px 2px 0 #ffffff,\n    -2px 2px 0 #ffffff,\n    -2px -2px 0 #ffffff,\n    2px -2px 0 #ffffff;\n}\nmain .socials button:hover {\n  color: red;\n}\nmain .socials button:active {\n  color: var(--text);\n}\n\nfooter {\n  z-index: 99;\n  background-color: var(--base);\n  border-top: 2px solid var(--text);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 64px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n\n#contract {\n  font-size: 1.5rem;\n  word-break: break-all;\n  margin-left: 8px;\n}\n#copy-ca-button {\n  color: var(--text);\n  background-color: var(--base);\n  border: 2px solid var(--text);\n  font-family: 'notepen';\n  font-size: 1.3rem;\n  margin-right: 8px;\n  cursor: pointer;\n}\n#copy-ca-button:hover {\n  color: var(--base);\n  background-color: var(--text);\n  border: 2px solid var(--text);\n}\n#copy-ca-button:active{\n  color: var(--text);\n  background-color: var(--base);\n  border: 2px solid var(--text); \n}\n\n/* BACKGROUND */\n\n#backdrop-static {\n  z-index: -99;\n  position: fixed;\n  top: 48px;\n  bottom: 64px;\n  left: 0;\n  right: 0;\n}\n\n.back1 {\n  width: calc(100% + 32px);\n  height: calc(100% + 32px);\n  position: absolute;\n  top: -16px;\n  left: -16px;\n}\n.back2 {\n  width: 64%;\n  position: absolute;\n  top: -24px;\n  right: -48px;\n}\n.back3 {\n  width: 48%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.back4 {\n  height: 25%;\n  width: calc(100% + 32px);\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.back5 {\n  width: 64%;\n  position: absolute;\n  bottom: 0;\n  right: -16px;\n}\n.back6 {\n  width: 424px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.gif1 {\n  position: absolute;\n  width: 124px;\n  top: 0;\n  left: 0;\n  transform: scaleX(-1);\n  -webkit-transform: scaleX(-1);\n}\n.gif2 {\n  position: absolute;\n  width: 124px;\n  bottom: 0;\n  right: 0;\n}\n.gif3 {\n  position: absolute;\n  width: 100px;\n  top: calc(50% - 50px);\n  left: 0;\n  transform: translate(0, -50%);\n}\n.gif4 {\n  position: absolute;\n  width: 100px;\n  top: calc(50% + 50px);\n  left: 0;\n  transform: translate(0, -50%);\n}\n\n#backdrop-animation {\n  position: fixed;\n  top: 48px;\n  left: 0;\n  right: 0;\n  bottom: 64px;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(5, 1fr);\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n}\n#backdrop-animation img {\n  width: 100%;\n  height: 100%;\n}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:["@font-face {\n  font-family: 'elite';\n  src: url('./metadata/fonts/special-elite-regular.ttf');\n}\n@font-face {\n  font-family: 'notepen';\n  src: url('./metadata/fonts/notepen.ttf');\n}\n\n:root {\n  --text: #000000;\n  --base: #ffffff;\n  --baseTran: rgba(255, 255, 255, 0.1);\n}\n\n.background-blur {\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n}\n\n.backdrop-shadow {\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),\n                    0 22px 70px 4px rgba(0,0,0,0.55),\n                    0 0 0 1px rgba(0, 0, 0, 0.0);\n}\n\nimg {\n  -webkit-user-drag: none;\n  -khtml-user-drag: none;\n  -moz-user-drag: none;\n  -o-user-drag: none;\n}\n\nhtml { height: 100%; }\nbody {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n\n  font-size: 1rem;\n  font-family: 'notepen';\n  color: var(--text);\n  \n  background-color: var(--base);\n}\n\nheader {\n  z-index: 99;\n  background-color: var(--base);\n  border-bottom: 2px solid var(--text);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 7480px;\n  height: 48px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\nheader span {\n  font-size: 1.5rem;\n  transform: translate(-99%, 0);\n  animation: moveRight 20s linear infinite;\n}\n@keyframes moveRight {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-3726px);\n  }\n}\n\nmain {\n  z-index: 99;\n  position: absolute;\n  top: calc(50% - 48px);\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nmain h1 {\n  font-size: 5rem;\n  text-shadow:\n    2px 2px 0 #ffffff,\n    -2px 2px 0 #ffffff,\n    -2px -2px 0 #ffffff,\n    2px -2px 0 #ffffff;\n  cursor: none;\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  user-select: none; /* Standard syntax */\n}\n\nmain .socials {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 16px;\n  grid-row-gap: 16px; \n}\nmain .socials button {\n  background: var(--baseTran);\n  border: none;\n  color: var(--text);\n  font-family: 'notepen';\n  font-size: 2.5rem;\n  text-align: center;\n  cursor: pointer;\n  text-shadow:\n    2px 2px 0 #ffffff,\n    -2px 2px 0 #ffffff,\n    -2px -2px 0 #ffffff,\n    2px -2px 0 #ffffff;\n}\nmain .socials button:hover {\n  color: red;\n}\nmain .socials button:active {\n  color: var(--text);\n}\n\nfooter {\n  z-index: 99;\n  background-color: var(--base);\n  border-top: 2px solid var(--text);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 64px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n\n#contract {\n  font-size: 1.5rem;\n  word-break: break-all;\n  margin-left: 8px;\n}\n#copy-ca-button {\n  color: var(--text);\n  background-color: var(--base);\n  border: 2px solid var(--text);\n  font-family: 'notepen';\n  font-size: 1.3rem;\n  margin-right: 8px;\n  cursor: pointer;\n}\n#copy-ca-button:hover {\n  color: var(--base);\n  background-color: var(--text);\n  border: 2px solid var(--text);\n}\n#copy-ca-button:active{\n  color: var(--text);\n  background-color: var(--base);\n  border: 2px solid var(--text); \n}\n\n/* BACKGROUND */\n\n#backdrop-static {\n  z-index: -99;\n  position: fixed;\n  top: 48px;\n  bottom: 64px;\n  left: 0;\n  right: 0;\n}\n\n.back1 {\n  width: calc(100% + 32px);\n  height: calc(100% + 32px);\n  position: absolute;\n  top: -16px;\n  left: -16px;\n}\n.back2 {\n  width: 64%;\n  position: absolute;\n  top: -24px;\n  right: -48px;\n}\n.back3 {\n  width: 48%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.back4 {\n  height: 25%;\n  width: calc(100% + 32px);\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.back5 {\n  width: 64%;\n  position: absolute;\n  bottom: 0;\n  right: -16px;\n}\n.back6 {\n  width: 424px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.gif1 {\n  position: absolute;\n  width: 124px;\n  top: 0;\n  left: 0;\n  transform: scaleX(-1);\n  -webkit-transform: scaleX(-1);\n}\n.gif2 {\n  position: absolute;\n  width: 124px;\n  bottom: 0;\n  right: 0;\n}\n.gif3 {\n  position: absolute;\n  width: 100px;\n  top: calc(50% - 50px);\n  left: 0;\n  transform: translate(0, -50%);\n}\n.gif4 {\n  position: absolute;\n  width: 100px;\n  top: calc(50% + 50px);\n  left: 0;\n  transform: translate(0, -50%);\n}\n\n#backdrop-animation {\n  position: fixed;\n  top: 48px;\n  left: 0;\n  right: 0;\n  bottom: 64px;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(5, 1fr);\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n}\n#backdrop-animation img {\n  width: 100%;\n  height: 100%;\n}"],sourceRoot:""}]);const m=p},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(a)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(A[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);a&&A[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),r="/*# ".concat(o," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var r={},A=[],i=0;i<n.length;i++){var s=n[i],c=a.base?s[0]+a.base:s[0],d=r[c]||0,p="".concat(c," ").concat(d);r[c]=d+1;var l=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var m=o(f,a);a.byIndex=i,e.splice(i,0,{identifier:p,updater:m,references:1})}A.push(p)}return A}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=a(n=n||[],o=o||{});return function(n){n=n||[];for(var A=0;A<r.length;A++){var i=t(r[A]);e[i].references--}for(var s=a(n,o),c=0;c<r.length;c++){var d=t(r[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=s}}},659:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},133:(n,e,t)=>{var a=t(72),o=t.n(a),r=t(825),A=t.n(r),i=t(659),s=t.n(i),c=t(56),d=t.n(c),p=t(540),l=t.n(p),f=t(113),m=t.n(f),C=t(208),u={};u.styleTagTransform=m(),u.setAttributes=d(),u.insert=s().bind(null,"head"),u.domAPI=A(),u.insertStyleElement=l(),o()(C.A,u),C.A&&C.A.locals&&C.A.locals;const E=t.p+"bae284a6b5957d55441f.png",b=t.p+"1382f4d46ef5de024831.webp",B=t.p+"e27c35415ecd731fddc2.webp",h=t.p+"1c40ffa7d23deba7cf47.webp",g=t.p+"0a9ade976b0eaf156ec8.webp",x=t.p+"6265e9e19b1fe8d3fa03.webp",w=t.p+"79674a91291189026115.gif",k=t.p+"0a8e31a23bee47294240.gif",y=t.p+"82dba0e08507429caa78.gif",v=t.p+"8501bc121b91cdf1c05b.gif",L=t.p+"5e5f8c7f18d18c6e49c7.webp",T=t.p+"3697adb74b0fde434a95.webp",S=t.p+"3003b701928dcaa4d301.webp",Y=t.p+"e6c1fd1d920c2bb718d1.webp",M=t.p+"fbd370facb611176fe21.png",I=t.p+"18781ce46fa0aedbc52f.webp",O=t.p+"287cc85e9e6222f8e2a1.webp",U=t.p+"4c585390558f6e57e8ea.webp",q=t.p+"805f0cb9e2c79c9cbe01.webp",z=t.p+"9a3fb6f5f92aef17c8a2.webp",j=t.p+"0ee0669a5dda0adfacc9.webp",R=t.p+"98bad07e92fa0ee8c43a.webp",W=t.p+"da496d45a4a36047c84f.webp",H=t.p+"c8651354c42e28ac6c07.webp",P=t.p+"6c2df8680f90c5948e26.jpeg",X=t.p+"588fff470f2d6c4a1282.png",Z=t.p+"70e53a1d74152871a63a.webp",Q=t.p+"610024eb8a926c9202be.webp",N=t.p+"ec88d422a688aaf08bac.webp",V=t.p+"b1d1b779c356b6f6f3d5.webp",_=t.p+"84b48f05bd3cd4c0aa7c.webp",D=t.p+"de65d850aa57f476a29f.jpg",G=t.p+"85119ed1cc5dca571649.webp",K=t.p+"1d8263e837b16979bd01.webp",F=t.p+"f918e078c293fd77f784.webp",$=document.querySelector("header"),J=document.createElement("span");J.innerHTML="looksl ike some lovecraftian horror\n&nbsp; don't try it.\n&nbsp; In an Alternate Universe: You found Verse Chomik!\n&nbsp; even tho theyt had the most evil intentions, they werent as strong as the main antagonist: ULTIMITE CHOMIK >:)\n&nbsp; looksl ike some lovecraftian horror\n&nbsp; I'm sorry for all the sins I have committed creating this nightmare. Oh, and that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny\n&nbsp; don't try it.\n&nbsp; In an Alternate Universe: You found Verse Chomik!\n&nbsp; even tho theyt had the most evil intentions, they werent as strong as the main antagonist: ULTIMITE CHOMIK >:)\n&nbsp; I'm sorry for all the sins I have committed creating this nightmare. Oh, and that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny",$.appendChild(J);const nn=document.querySelector("main"),en=document.createElement("h1");en.innerHTML="$CHOMIK",nn.appendChild(en);const tn=document.createElement("div");tn.classList.add("socials");const an=document.createElement("button");an.id="telegram-button",an.innerHTML="TG",tn.appendChild(an);const on=document.createElement("button");on.id="twitter-button",on.innerHTML="TWITTER",tn.appendChild(on);const rn=document.createElement("button");rn.id="chart-button",rn.innerHTML="CHART",tn.appendChild(rn);const An=document.createElement("button");An.id="buy-button",An.innerHTML="BUY",tn.appendChild(An),[an,on,rn,An].forEach((n=>{n.classList.add("background-blur")})),nn.appendChild(tn);const sn=document.querySelector("footer"),cn=document.createElement("span");cn.id="contract",cn.innerHTML="EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",sn.appendChild(cn);const dn=document.createElement("button");dn.id="copy-ca-button",dn.innerHTML="COPY CA",sn.appendChild(dn);const pn=document.getElementById("backdrop-static"),ln=document.createElement("img");ln.classList.add("back1"),ln.src=E,pn.appendChild(ln);const fn=document.createElement("img");fn.classList.add("back4"),fn.src=h,pn.appendChild(fn);const mn=document.createElement("img");mn.classList.add("back6"),mn.src=x,pn.appendChild(mn);const Cn=document.createElement("img");Cn.classList.add("back2"),Cn.src=b,pn.appendChild(Cn);const un=document.createElement("img");un.classList.add("back3"),un.src=B,pn.appendChild(un);const En=document.createElement("img");En.classList.add("back5"),En.src=g,pn.appendChild(En);const bn=document.createElement("img");bn.classList.add("gif1"),bn.src=w,pn.appendChild(bn);const Bn=document.createElement("img");Bn.classList.add("gif2"),Bn.src=k,pn.appendChild(Bn);const hn=document.createElement("img");hn.classList.add("gif3"),hn.src=y,pn.appendChild(hn);const gn=document.createElement("img");gn.classList.add("gif4"),gn.src=v,pn.appendChild(gn);const xn=document.getElementById("backdrop-animation"),wn=document.createElement("img");wn.classList.add("meme1"),wn.src=L,xn.appendChild(wn);const kn=document.createElement("img");kn.classList.add("meme2"),kn.src=T,xn.appendChild(kn);const yn=document.createElement("img");yn.classList.add("meme3"),yn.src=S,xn.appendChild(yn);const vn=document.createElement("img");vn.classList.add("meme4"),vn.src=Y,xn.appendChild(vn);const Ln=document.createElement("img");Ln.classList.add("meme5"),Ln.src=M,xn.appendChild(Ln);const Tn=document.createElement("img");Tn.classList.add("meme6"),Tn.src=I,xn.appendChild(Tn);const Sn=document.createElement("img");Sn.classList.add("meme7"),Sn.src=O,xn.appendChild(Sn);const Yn=document.createElement("img");Yn.classList.add("meme8"),Yn.src=U,xn.appendChild(Yn);const Mn=document.createElement("img");Mn.classList.add("meme9"),Mn.src=q,xn.appendChild(Mn);const In=document.createElement("img");In.classList.add("meme10"),In.src=z,xn.appendChild(In);const On=document.createElement("img");On.classList.add("meme11"),On.src=j,xn.appendChild(On);const Un=document.createElement("img");Un.classList.add("meme12"),Un.src=R,xn.appendChild(Un);const qn=document.createElement("img");qn.classList.add("meme13"),qn.src=W,xn.appendChild(qn);const zn=document.createElement("img");zn.classList.add("meme14"),zn.src=H,xn.appendChild(zn);const jn=document.createElement("img");jn.classList.add("meme15"),jn.src=P,xn.appendChild(jn);const Rn=document.createElement("img");Rn.classList.add("meme16"),Rn.src=X,xn.appendChild(Rn);const Wn=document.createElement("img");Wn.classList.add("meme17"),Wn.src=Z,xn.appendChild(Wn);const Hn=document.createElement("img");Hn.classList.add("meme18"),Hn.src=Q,xn.appendChild(Hn);const Pn=document.createElement("img");Pn.classList.add("meme19"),Pn.src=N,xn.appendChild(Pn);const Xn=document.createElement("img");Xn.classList.add("meme20"),Xn.src=V,xn.appendChild(Xn);const Zn=document.createElement("img");Zn.classList.add("meme21"),Zn.src=_,xn.appendChild(Zn);const Qn=document.createElement("img");Qn.classList.add("meme22"),Qn.src=D,xn.appendChild(Qn);const Nn=document.createElement("img");Nn.classList.add("meme23"),Nn.src=G,xn.appendChild(Nn);const Vn=document.createElement("img");Vn.classList.add("meme24"),Vn.src=K,xn.appendChild(Vn);const _n=document.createElement("img");_n.classList.add("meme25"),_n.src=F,xn.appendChild(_n),document.addEventListener("DOMContentLoaded",(function(){on.addEventListener("click",(function(){window.open("https://x.com/","_blank")})),an.addEventListener("click",(function(){window.open("https://t.me/","_blank")})),rn.addEventListener("click",(function(){window.open("https://dexscreener.com/solana/","_blank")})),An.addEventListener("click",(function(){window.open("https://www.pump.fun/","_blank")}));const n=cn.innerHTML;dn.addEventListener("click",(async()=>{try{await navigator.clipboard.writeText(n),console.log("Text copied successfully using Clipboard API"),alert("Contract copied successfully!")}catch(e){const t=document.createElement("textarea");t.value=n,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),console.log("Text copied successfully using legacy approach"),alert("Contract copied successfully!")}}));const e=[wn,kn,yn,vn,Ln,Tn,Sn,Yn,Mn,In,On,Un,qn,zn,jn,Rn,Wn,Hn,Pn,Xn,Zn,Qn,Nn,Vn,_n];let t=null;function a(){return Math.floor(Math.random()*e.length)}e.forEach((n=>{n.style.opacity="0.0"})),setInterval((function(){null!==t&&(e[t].style.opacity="0.0");let n=a();for(;n===t;)n=a();e[n].style.opacity="1.0",t=n}),333)}))},592:(n,e,t)=>{n.exports=t.p+"fonts/notepen.ttf"},361:(n,e,t)=>{n.exports=t.p+"fonts/special-elite-regular.ttf"}},n=>{n(n.s=133)}]);
//# sourceMappingURL=index.bundle.js.map