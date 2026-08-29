var F_=Object.defineProperty;var I_=(t,e,n)=>e in t?F_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Q=(t,e,n)=>I_(t,typeof e!="symbol"?e+"":e,n);import{b as ja,c as Hi,a as we,f as Te,t as _o}from"./ro3UnPVl.js";import{o as N_}from"./D3R0IJ6P.js";import{h as Oe,e as on,A as en,B as Hr,a as Vi,b as ff,g as b,r as P_,C as z_,c as go,i as tr,j as nn,D as Is,F as D_,G as po,I as W_,J as ea,K as B_,M as H_,N as uf,O as Mn,P as _f,Q as Ns,R as V_,S as mo,T as U_,U as q_,m as _e,V as xt,W as G_,X as df,Y as gf,Z as Oa,_ as pf,$ as Y_,a0 as J_,a1 as X_,a2 as K_,a3 as Z_,a4 as ta,x as Ze,a5 as mf,a6 as Q_,a7 as ed,a8 as td,a9 as nd,aa as rd,ab as ad,E as id,ac as sd,ad as od,ae as hf,af as X,ag as ld,ah as cd,ai as fd,aj as ud,z as xn,ak as bf,al as _d,am as ho,an as bo,ao as dd,ap as gd,aq as pd,ar as md,as as hd,at as bd,au as wd,av as yd,aw as vd,ax as xd,u as Sd,ay as wo,k as Ui,az as Ed,aA as ee,aB as Md,aC as Ad,p as zn,s as B,l as na,o as Dn,q as qi,aD as Ne,aE as ma,v as H,w as W,n as ne,aF as yo,y as Cd,aG as kd,t as Ld,aH as Td,aI as $d}from"./Ds6tas7N.js";import{p as ce,i as St,_ as ra,b as aa}from"./BSk15peF.js";import{a as Rd,s as Ve,e as ke}from"./h_8aQCSe.js";import{s as jd}from"./Df8rmFrX.js";function cr(t,e){return e}function Od(t,e,n){for(var r=[],a=e.length,i,s=e.length,o=0;o<a;o++){let u=e[o];gf(u,()=>{if(i){if(i.pending.delete(u),i.done.add(u),i.pending.size===0){var _=t.outrogroups;Gi(t,Ns(i.done)),_.delete(i),_.size===0&&(t.outrogroups=null)}}else s-=1},!1)}if(s===0){var l=r.length===0&&n!==null&&t.pending.size===0;if(l){var f=n,c=f.parentNode;X_(c),c.append(f),t.items.clear()}Gi(t,e,!l)}else i={pending:new Set(e),done:new Set},(t.outrogroups??(t.outrogroups=new Set)).add(i)}function Gi(t,e,n=!0){var r;if(t.pending.size>0){r=new Set;for(const s of t.pending.values())for(const o of s)r.add(t.items.get(o).e)}for(var a=0;a<e.length;a++){var i=e[a];if(r!=null&&r.has(i)){i.f|=xt;const s=document.createDocumentFragment();K_(i,s)}else Z_(e[a],n)}}var vo;function fr(t,e,n,r,a,i=null){var s=t,o=new Map,l=(e&uf)!==0;if(l){var f=t;s=Oe?on(en(f)):f.appendChild(Hr())}Oe&&Vi();var c=null,u=Mn(()=>{var x=n();return _f(x)?x:x==null?[]:Ns(x)}),_,d=new Map,g=!0;function m(x){(h.effect.f&G_)===0&&(h.pending.delete(x),h.fallback=c,Fd(h,_,s,e,r),c!==null&&(_.length===0?(c.f&xt)===0?df(c):(c.f^=xt,Gn(c,null,s)):gf(c,()=>{c=null})))}function p(x){h.pending.delete(x)}var v=ff(()=>{_=b(u);var x=_.length;let M=!1;if(Oe){var S=P_(s)===z_;S!==(x===0)&&(s=go(),on(s),tr(!1),M=!0)}for(var E=new Set,A=W_,k=H_(),C=0;C<x;C+=1){Oe&&nn.nodeType===Is&&nn.data===D_&&(s=nn,M=!0,tr(!1));var L=_[C],$=r(L,C),z=g?null:o.get($);z?(z.v&&po(z.v,L),z.i&&po(z.i,C),k&&A.unskip_effect(z.e)):(z=Id(o,g?s:vo??(vo=Hr()),L,$,C,a,e,n),g||(z.e.f|=xt),o.set($,z)),E.add($)}if(x===0&&i&&!c&&(g?c=ea(()=>i(s)):(c=ea(()=>i(vo??(vo=Hr()))),c.f|=xt)),x>E.size&&B_(),Oe&&x>0&&on(go()),!g)if(d.set(A,E),k){for(const[G,N]of o)E.has(G)||A.skip_effect(N.e);A.oncommit(m),A.ondiscard(p)}else m(A);M&&tr(!0),b(u)}),h={effect:v,items:o,pending:d,outrogroups:null,fallback:c};g=!1,Oe&&(s=nn)}function Vn(t){for(;t!==null&&(t.f&Y_)===0;)t=t.next;return t}function Fd(t,e,n,r,a){var L,$,z,G,N,R,j,D,V;var i=(r&J_)!==0,s=e.length,o=t.items,l=Vn(t.effect.first),f,c=null,u,_=[],d=[],g,m,p,v;if(i)for(v=0;v<s;v+=1)g=e[v],m=a(g,v),p=o.get(m).e,(p.f&xt)===0&&(($=(L=p.nodes)==null?void 0:L.a)==null||$.measure(),(u??(u=new Set)).add(p));for(v=0;v<s;v+=1){if(g=e[v],m=a(g,v),p=o.get(m).e,t.outrogroups!==null)for(const Y of t.outrogroups)Y.pending.delete(p),Y.done.delete(p);if((p.f&Oa)!==0&&(df(p),i&&((G=(z=p.nodes)==null?void 0:z.a)==null||G.unfix(),(u??(u=new Set)).delete(p))),(p.f&xt)!==0)if(p.f^=xt,p===l)Gn(p,null,n);else{var h=c?c.next:l;p===t.effect.last&&(t.effect.last=p.prev),p.prev&&(p.prev.next=p.next),p.next&&(p.next.prev=p.prev),Pt(t,c,p),Pt(t,p,h),Gn(p,h,n),c=p,_=[],d=[],l=Vn(c.next);continue}if(p!==l){if(f!==void 0&&f.has(p)){if(_.length<d.length){var x=d[0],M;c=x.prev;var S=_[0],E=_[_.length-1];for(M=0;M<_.length;M+=1)Gn(_[M],x,n);for(M=0;M<d.length;M+=1)f.delete(d[M]);Pt(t,S.prev,E.next),Pt(t,c,S),Pt(t,E,x),l=x,c=E,v-=1,_=[],d=[]}else f.delete(p),Gn(p,l,n),Pt(t,p.prev,p.next),Pt(t,p,c===null?t.effect.first:c.next),Pt(t,c,p),c=p;continue}for(_=[],d=[];l!==null&&l!==p;)(f??(f=new Set)).add(l),d.push(l),l=Vn(l.next);if(l===null)continue}(p.f&xt)===0&&_.push(p),c=p,l=Vn(p.next)}if(t.outrogroups!==null){for(const Y of t.outrogroups)Y.pending.size===0&&(Gi(t,Ns(Y.done)),(N=t.outrogroups)==null||N.delete(Y));t.outrogroups.size===0&&(t.outrogroups=null)}if(l!==null||f!==void 0){var A=[];if(f!==void 0)for(p of f)(p.f&Oa)===0&&A.push(p);for(;l!==null;)(l.f&Oa)===0&&l!==t.fallback&&A.push(l),l=Vn(l.next);var k=A.length;if(k>0){var C=(r&uf)!==0&&s===0?n:null;if(i){for(v=0;v<k;v+=1)(j=(R=A[v].nodes)==null?void 0:R.a)==null||j.measure();for(v=0;v<k;v+=1)(V=(D=A[v].nodes)==null?void 0:D.a)==null||V.fix()}Od(t,A,C)}}i&&pf(()=>{var Y,ve;if(u!==void 0)for(p of u)(ve=(Y=p.nodes)==null?void 0:Y.a)==null||ve.apply()})}function Id(t,e,n,r,a,i,s,o){var l=(s&U_)!==0?(s&q_)===0?_e(n,!1,!1):mo(n):null,f=(s&V_)!==0?mo(a):null;return{v:l,i:f,e:ea(()=>(i(e,l??n,f??a,o),()=>{t.delete(r)}))}}function Gn(t,e,n){if(t.nodes)for(var r=t.nodes.start,a=t.nodes.end,i=e&&(e.f&xt)===0?e.nodes.start:n;r!==null;){var s=ta(r);if(i.before(r),r===a)return;r=s}}function Pt(t,e,n){e===null?t.effect.first=n:e.next=n,n===null?t.effect.last=e:n.prev=e}function Nd(t,e,n=!1,r=!1,a=!1,i=!1){var s=t,o="";if(n){var l=t;Oe&&(s=on(en(l)))}Ze(()=>{var f=mf;if(o===(o=e()??"")){Oe&&Vi();return}if(n&&!Oe){f.nodes=null,l.innerHTML=o,o!==""&&ja(en(l),l.lastChild);return}if(f.nodes!==null&&(Q_(f.nodes.start,f.nodes.end),f.nodes=null),o!==""){if(Oe){nn.data;for(var c=Vi(),u=c;c!==null&&(c.nodeType!==Is||c.data!=="");)u=c,c=ta(c);if(c===null)throw ed(),td;ja(nn,u),s=on(c);return}var _=r?rd:a?ad:void 0,d=nd(r?"svg":a?"math":"template",_);d.innerHTML=o;var g=r||a?d:d.content;if(ja(en(g),g.lastChild),r||a)for(;en(g);)s.before(en(g));else s.before(g)}})}const Pd=()=>performance.now(),Rt={tick:t=>requestAnimationFrame(t),now:()=>Pd(),tasks:new Set};function wf(){const t=Rt.now();Rt.tasks.forEach(e=>{e.c(t)||(Rt.tasks.delete(e),e.f())}),Rt.tasks.size!==0&&Rt.tick(wf)}function zd(t){let e;return Rt.tasks.size===0&&Rt.tick(wf),{promise:new Promise(n=>{Rt.tasks.add(e={c:t,f:n})}),abort(){Rt.tasks.delete(e)}}}function Lr(t,e){bf(()=>{t.dispatchEvent(new CustomEvent(e))})}function Dd(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function xo(t){const e={},n=t.split(";");for(const r of n){const[a,i]=r.split(":");if(!a||i===void 0)break;const s=Dd(a.trim());e[s]=i.trim()}return e}const Wd=t=>t;function rn(t,e,n,r){var x;var a=(t&cd)!==0,i=(t&fd)!==0,s=a&&i,o=(t&ld)!==0,l=s?"both":a?"in":"out",f,c=e.inert,u=e.style.overflow,_,d;function g(){return bf(()=>f??(f=n()(e,(r==null?void 0:r())??{},{direction:l})))}var m={is_global:o,in(){var M;if(e.inert=c,!a){d==null||d.abort(),(M=d==null?void 0:d.reset)==null||M.call(d);return}i||_==null||_.abort(),_=Yi(e,g(),d,1,()=>{Lr(e,"introstart")},()=>{Lr(e,"introend"),_==null||_.abort(),_=f=void 0,e.style.overflow=u})},out(M){if(!i){M==null||M(),f=void 0;return}e.inert=!0,d=Yi(e,g(),_,0,()=>{Lr(e,"outrostart")},()=>{Lr(e,"outroend"),M==null||M()})},stop:()=>{_==null||_.abort(),d==null||d.abort()}},p=mf;if(((x=p.nodes).t??(x.t=[])).push(m),a&&Rd){var v=o;if(!v){for(var h=p.parent;h&&(h.f&id)!==0;)for(;(h=h.parent)&&(h.f&sd)===0;);v=!h||(h.f&od)!==0}v&&hf(()=>{X(()=>m.in())})}}function Yi(t,e,n,r,a,i){var s=r===1;if(ud(e)){var o,l=!1;return pf(()=>{if(!l){var v=e({direction:s?"in":"out"});o=Yi(t,v,n,r,a,i)}}),{abort:()=>{l=!0,o==null||o.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(n==null||n.deactivate(),!(e!=null&&e.duration)&&!(e!=null&&e.delay))return a(),i(),{abort:xn,deactivate:xn,reset:xn,t:()=>r};const{delay:f=0,css:c,tick:u,easing:_=Wd}=e;var d=[];if(s&&n===void 0&&(u&&u(0,1),c)){var g=xo(c(0,1));d.push(g,g)}var m=()=>1-r,p=t.animate(d,{duration:f,fill:"forwards"});return p.onfinish=()=>{p.cancel(),a();var v=(n==null?void 0:n.t())??1-r;n==null||n.abort();var h=r-v,x=e.duration*Math.abs(h),M=[];if(x>0){var S=!1;if(c)for(var E=Math.ceil(x/16.666666666666668),A=0;A<=E;A+=1){var k=v+h*_(A/E),C=xo(c(k,1-k));M.push(C),S||(S=C.overflow==="hidden")}S&&(t.style.overflow="hidden"),m=()=>{var L=p.currentTime;return v+h*_(L/x)},u&&zd(()=>{if(p.playState!=="running")return!1;var L=m();return u(L,1-L),!0})}p=t.animate(M,{duration:x,fill:"forwards"}),p.onfinish=()=>{m=()=>r,u==null||u(r,1-r),i()}},{abort:()=>{p&&(p.cancel(),p.effect=null,p.onfinish=xn)},deactivate:()=>{i=xn},reset:()=>{r===0&&(u==null||u(1,0))},t:()=>m()}}function Bd(t,e){let n=null,r=Oe;var a;if(Oe){n=nn;for(var i=en(document.head);i!==null&&(i.nodeType!==Is||i.data!==t);)i=ta(i);if(i===null)tr(!1);else{var s=ta(i);i.remove(),on(s)}}Oe||(a=document.head.appendChild(Hr()));try{ff(()=>{var o=ea(()=>e(a));o.f|=_d})}finally{r&&(tr(!0),on(n))}}function yf(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var a=t.length;for(e=0;e<a;e++)t[e]&&(n=yf(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Hd(){for(var t,e,n=0,r="",a=arguments.length;n<a;n++)(t=arguments[n])&&(e=yf(t))&&(r&&(r+=" "),r+=e);return r}function Sn(t){return typeof t=="object"?Hd(t):t??""}function Vd(t,e,n){var r=t==null?"":""+t;return r===""?null:r}function Ud(t,e){return t==null?null:String(t)}function Ie(t,e,n,r,a,i){var s=t[ho];if(Oe||s!==n||s===void 0){var o=Vd(n);(!Oe||o!==t.getAttribute("class"))&&(o==null?t.removeAttribute("class"):e?t.className=o:t.setAttribute("class",o)),t[ho]=n}return i}function vf(t,e,n,r){var a=t[bo];if(Oe||a!==e){var i=Ud(e);(!Oe||i!==t.getAttribute("style"))&&(i==null?t.removeAttribute("style"):t.style.cssText=i),t[bo]=e}return r}function xf(t,e,n=!1){if(t.multiple){if(e==null)return;if(!_f(e))return gd();for(var r of t.options)r.selected=e.includes(So(r));return}for(r of t.options){var a=So(r);if(pd(a,e)){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function qd(t){var e=new MutationObserver(()=>{"__value"in t&&xf(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),dd(()=>{e.disconnect()})}function So(t){return"__value"in t?t.__value:t.value}const Gd=Symbol("is custom element"),Yd=Symbol("is html"),Jd=vd?"link":"LINK";function ln(t,e,n,r){var a=Xd(t);Oe&&(a[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName===Jd)||a[e]!==(a[e]=n)&&(e==="loading"&&(t[yd]=n),n==null?t.removeAttribute(e):typeof n!="string"&&Kd(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function Xd(t){var e;return t[e=md]??(t[e]={[Gd]:t.nodeName.includes("-"),[Yd]:t.namespaceURI===hd})}var Eo=new Map;function Kd(t){var e=t.getAttribute("is")||t.nodeName,n=Eo.get(e);if(n)return n;Eo.set(e,n=[]);for(var r,a=t,i=Element.prototype;i!==a;){r=wd(a);for(var s in r)r[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&n.push(s);a=bd(a)}return n}function ha(t=!1){const e=xd,n=e.l.u;if(!n)return;let r=()=>ee(e.s);if(t){let a=0,i={};const s=Md(()=>{let o=!1;const l=e.s;for(const f in l)l[f]!==i[f]&&(i[f]=l[f],o=!0);return o&&a++,a});r=()=>b(s)}n.b.length&&Sd(()=>{Mo(e,r),wo(n.b)}),Ui(()=>{const a=X(()=>n.m.map(Ed));return()=>{for(const i of a)typeof i=="function"&&i()}}),n.a.length&&Ui(()=>{Mo(e,r),wo(n.a)})}function Mo(t,e){if(t.l.s)for(const n of t.l.s)b(n);e()}const Zd=!0,Qd=!1,a2=Object.freeze(Object.defineProperty({__proto__:null,prerender:Zd,ssr:Qd},Symbol.toStringTag,{value:"Module"}));Ad();function eg(t,e){zn(e,!0);let n=ce(e,"active",3,!1),r=ce(e,"delayMs",3,0),a=qi(!1),i=null;function s(){i!=null&&(clearTimeout(i),i=null)}Ui(()=>{if(s(),!n()){B(a,!1);return}return i=setTimeout(()=>{B(a,!0),i=null},r()),s});var o=Hi(),l=na(o);{var f=c=>{var u=Hi(),_=na(u);jd(_,()=>e.children??xn),we(c,u)};St(l,c=>{b(a)&&c(f)})}we(t,o),Dn()}const tg=t=>t;function Sf(t){const e=t-1;return e*e*e+1}function Ao(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}function Vr(t,{delay:e=0,duration:n=400,easing:r=tg}={}){const a=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:i=>`opacity: ${i*a}`}}function ng(t,{delay:e=0,duration:n=400,easing:r=Sf,x:a=0,y:i=0,opacity:s=0}={}){const o=getComputedStyle(t),l=+o.opacity,f=o.transform==="none"?"":o.transform,c=l*(1-s),[u,_]=Ao(a),[d,g]=Ao(i);return{delay:e,duration:n,easing:r,css:(m,p)=>`
			transform: ${f} translate(${(1-m)*u}${_}, ${(1-m)*d}${g});
			opacity: ${l-c*p}`}}function Co(t,{delay:e=0,duration:n=400,easing:r=Sf,axis:a="y"}={}){const i=getComputedStyle(t),s=+i.opacity,o=a==="y"?"height":"width",l=parseFloat(i[o]),f=a==="y"?["top","bottom"]:["left","right"],c=f.map(v=>`${v[0].toUpperCase()}${v.slice(1)}`),u=parseFloat(i[`padding${c[0]}`]),_=parseFloat(i[`padding${c[1]}`]),d=parseFloat(i[`margin${c[0]}`]),g=parseFloat(i[`margin${c[1]}`]),m=parseFloat(i[`border${c[0]}Width`]),p=parseFloat(i[`border${c[1]}Width`]);return{delay:e,duration:n,easing:r,css:v=>`overflow: hidden;opacity: ${Math.min(v*20,1)*s};${o}: ${v*l}px;padding-${f[0]}: ${v*u}px;padding-${f[1]}: ${v*_}px;margin-${f[0]}: ${v*d}px;margin-${f[1]}: ${v*g}px;border-${f[0]}-width: ${v*m}px;border-${f[1]}-width: ${v*p}px;min-${o}: 0`}}function rg(t){const e=t-1;return e*e*e+1}function ag(){return{x:0,y:0,width:window.innerWidth,height:window.innerHeight}}function an(t,e){const[n,r]=t;return n>=e.x&&n<=e.x+e.width&&r>=e.y&&r<=e.y+e.height}function Fa(t){const e=ag();return!!(an([t.x,t.y],e)||an([t.x+t.width,t.y],e)||an([t.x+t.width,t.y+t.height],e)||an([t.x,t.y+t.height],e))}function Ef(t,e){return t.x<e.x+e.width&&t.x+t.width>e.x&&t.y<e.y+e.height&&t.y+t.height>e.y}function $n(t){return{x:t.x,y:t.y,width:t.width,height:t.height}}function Mf(t,e){const n=[t.x,t.y+t.height],r=[t.x+t.width,t.y+t.height];return an(n,e)&&an(r,e)}function Af(t,e){const n=t.x+t.width/2,r=t.y+t.height/2;let a=Number.POSITIVE_INFINITY,i=-1;for(let s=0;s<e.length;s++){const o=e[s];if(Ef(t,o))return s;const l=o.x+o.width/2,f=o.y+o.height/2,c=Math.hypot(l-n,f-r);c<a&&(a=c,i=s)}return i}function Cf(t,e){const n=Math.max(t.x,e.x),r=Math.max(t.y,e.y),a=Math.min(t.x+t.width,e.x+e.width),i=Math.min(t.y+t.height,e.y+e.height);return{x:n,y:r,width:Math.max(0,a-n),height:Math.max(0,i-r)}}var ig=Object.defineProperty,kf=t=>{throw TypeError(t)},sg=(t,e,n)=>e in t?ig(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ia=(t,e,n)=>sg(t,typeof e!="symbol"?e+"":e,n),Lf=(t,e,n)=>e.has(t)||kf("Cannot "+n),Tt=(t,e,n)=>(Lf(t,e,"read from private field"),e.get(t)),ko=(t,e,n)=>e.has(t)?kf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Tr=(t,e,n,r)=>(Lf(t,e,"write to private field"),e.set(t,n),n),En,ft;const Ps=Object.freeze({American:0,0:"American",British:1,1:"British",Australian:2,2:"Australian",Canadian:3,3:"Canadian",Indian:4,4:"Indian"}),Yn=Object.freeze({Plain:0,0:"Plain",Markdown:1,1:"Markdown",Typst:2,2:"Typst"});let fn=class Ur{static __wrap(e){const n=Object.create(Ur.prototype);return n.__wbg_ptr=e,Lo.register(n,n.__wbg_ptr,n),n}static __unwrap(e){return e instanceof Ur?e.__destroy_into_raw():0}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Lo.unregister(this),e}free(){const e=this.__destroy_into_raw();w.__wbg_lint_free(e,0)}static from_json(e){const n=Me(e,w.__wbindgen_malloc,w.__wbindgen_realloc),r=oe,a=w.lint_from_json(n,r);if(a[2])throw ht(a[1]);return Ur.__wrap(a[0])}get_problem_text(){let e,n;try{const r=w.lint_get_problem_text(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{w.__wbindgen_free(e,n,1)}}lint_kind(){let e,n;try{const r=w.lint_lint_kind(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{w.__wbindgen_free(e,n,1)}}lint_kind_pretty(){let e,n;try{const r=w.lint_lint_kind_pretty(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{w.__wbindgen_free(e,n,1)}}message(){let e,n;try{const r=w.lint_message(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{w.__wbindgen_free(e,n,1)}}message_html(){let e,n;try{const r=w.lint_message_html(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{w.__wbindgen_free(e,n,1)}}span(){const e=w.lint_span(this.__wbg_ptr);return sa.__wrap(e)}suggestion_count(){return w.lint_suggestion_count(this.__wbg_ptr)>>>0}suggestions(){const e=w.lint_suggestions(this.__wbg_ptr);var n=nr(e[0],e[1]).slice();return w.__wbindgen_free(e[0],e[1]*4,4),n}to_json(){let e,n;try{const r=w.lint_to_json(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{w.__wbindgen_free(e,n,1)}}};Symbol.dispose&&(fn.prototype[Symbol.dispose]=fn.prototype.free);let Ji=class Xi{static __wrap(e){const n=Object.create(Xi.prototype);return n.__wbg_ptr=e,To.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,To.unregister(this),e}free(){const e=this.__destroy_into_raw();w.__wbg_linter_free(e,0)}apply_suggestion(e,n,r){let a,i;try{const l=Me(e,w.__wbindgen_malloc,w.__wbindgen_realloc),f=oe;Na(n,fn),Na(r,ur);const c=w.linter_apply_suggestion(this.__wbg_ptr,l,f,n.__wbg_ptr,r.__wbg_ptr);var s=c[0],o=c[1];if(c[3])throw s=0,o=0,ht(c[2]);return a=s,i=o,ae(s,o)}finally{w.__wbindgen_free(a,i,1)}}clear_ignored_lints(){w.linter_clear_ignored_lints(this.__wbg_ptr)}clear_words(){w.linter_clear_words(this.__wbg_ptr)}context_hash(e,n){const r=Me(e,w.__wbindgen_malloc,w.__wbindgen_realloc),a=oe;Na(n,fn);const i=w.linter_context_hash(this.__wbg_ptr,r,a,n.__wbg_ptr);return BigInt.asUintN(64,i)}export_ignored_lints(){let e,n;try{const r=w.linter_export_ignored_lints(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{w.__wbindgen_free(e,n,1)}}export_words(){const e=w.linter_export_words(this.__wbg_ptr);var n=nr(e[0],e[1]).slice();return w.__wbindgen_free(e[0],e[1]*4,4),n}generate_stats_file(){let e,n;try{const r=w.linter_generate_stats_file(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{w.__wbindgen_free(e,n,1)}}get_dialect(){return w.linter_get_dialect(this.__wbg_ptr)}get_lint_config_as_json(){let e,n;try{const r=w.linter_get_lint_config_as_json(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{w.__wbindgen_free(e,n,1)}}get_lint_config_as_object(){return w.linter_get_lint_config_as_object(this.__wbg_ptr)}get_lint_descriptions_as_json(){let e,n;try{const r=w.linter_get_lint_descriptions_as_json(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{w.__wbindgen_free(e,n,1)}}get_lint_descriptions_as_object(){return w.linter_get_lint_descriptions_as_object(this.__wbg_ptr)}get_lint_descriptions_html_as_json(){let e,n;try{const r=w.linter_get_lint_descriptions_html_as_json(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{w.__wbindgen_free(e,n,1)}}get_lint_descriptions_html_as_object(){return w.linter_get_lint_descriptions_html_as_object(this.__wbg_ptr)}get_structured_lint_config_as_json(){let e,n;try{const r=w.linter_get_structured_lint_config_as_json(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{w.__wbindgen_free(e,n,1)}}get_structured_lint_config_as_object(){return w.linter_get_structured_lint_config_as_object(this.__wbg_ptr)}ignore_hashes(e){const n=_g(e,w.__wbindgen_malloc),r=oe;w.linter_ignore_hashes(this.__wbg_ptr,n,r)}ignore_lints(e,n){const r=Me(e,w.__wbindgen_malloc,w.__wbindgen_realloc),a=oe,i=Qi(n,w.__wbindgen_malloc),s=oe;w.linter_ignore_lints(this.__wbg_ptr,r,a,i,s)}import_ignored_lints(e){const n=Me(e,w.__wbindgen_malloc,w.__wbindgen_realloc),r=oe,a=w.linter_import_ignored_lints(this.__wbg_ptr,n,r);if(a[1])throw ht(a[0])}import_stats_file(e){const n=Me(e,w.__wbindgen_malloc,w.__wbindgen_realloc),r=oe,a=w.linter_import_stats_file(this.__wbg_ptr,n,r);if(a[1])throw ht(a[0])}import_weirpack(e){const n=dg(e,w.__wbindgen_malloc),r=oe,a=w.linter_import_weirpack(this.__wbg_ptr,n,r);if(a[2])throw ht(a[1]);return ht(a[0])}import_words(e){const n=Qi(e,w.__wbindgen_malloc),r=oe;w.linter_import_words(this.__wbg_ptr,n,r)}is_likely_english(e){const n=Me(e,w.__wbindgen_malloc,w.__wbindgen_realloc),r=oe;return w.linter_is_likely_english(this.__wbg_ptr,n,r)!==0}isolate_english(e){let n,r;try{const a=Me(e,w.__wbindgen_malloc,w.__wbindgen_realloc),i=oe,s=w.linter_isolate_english(this.__wbg_ptr,a,i);return n=s[0],r=s[1],ae(s[0],s[1])}finally{w.__wbindgen_free(n,r,1)}}lint(e,n,r,a,i,s){const o=Me(e,w.__wbindgen_malloc,w.__wbindgen_realloc),l=oe;var f=wt(a)?0:Me(a,w.__wbindgen_malloc,w.__wbindgen_realloc),c=oe;const u=w.linter_lint(this.__wbg_ptr,o,l,n,r,f,c,i,s);var _=nr(u[0],u[1]).slice();return w.__wbindgen_free(u[0],u[1]*4,4),_}static new(e){const n=w.linter_new(e);return Xi.__wrap(n)}organized_lints(e,n,r,a,i,s){const o=Me(e,w.__wbindgen_malloc,w.__wbindgen_realloc),l=oe;var f=wt(a)?0:Me(a,w.__wbindgen_malloc,w.__wbindgen_realloc),c=oe;const u=w.linter_organized_lints(this.__wbg_ptr,o,l,n,r,f,c,i,s);var _=nr(u[0],u[1]).slice();return w.__wbindgen_free(u[0],u[1]*4,4),_}set_lint_config_from_json(e){const n=Me(e,w.__wbindgen_malloc,w.__wbindgen_realloc),r=oe,a=w.linter_set_lint_config_from_json(this.__wbg_ptr,n,r);if(a[1])throw ht(a[0])}set_lint_config_from_object(e){const n=w.linter_set_lint_config_from_object(this.__wbg_ptr,e);if(n[1])throw ht(n[0])}summarize_stats(e,n){return w.linter_summarize_stats(this.__wbg_ptr,!wt(e),wt(e)?BigInt(0):e,!wt(n),wt(n)?BigInt(0):n)}};Symbol.dispose&&(Ji.prototype[Symbol.dispose]=Ji.prototype.free);let ia=class Tf{static __wrap(e){const n=Object.create(Tf.prototype);return n.__wbg_ptr=e,$o.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,$o.unregister(this),e}free(){const e=this.__destroy_into_raw();w.__wbg_organizedgroup_free(e,0)}get group(){let e,n;try{const r=w.__wbg_get_organizedgroup_group(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{w.__wbindgen_free(e,n,1)}}get lints(){const e=w.__wbg_get_organizedgroup_lints(this.__wbg_ptr);var n=nr(e[0],e[1]).slice();return w.__wbindgen_free(e[0],e[1]*4,4),n}set group(e){const n=Me(e,w.__wbindgen_malloc,w.__wbindgen_realloc),r=oe;w.__wbg_set_organizedgroup_group(this.__wbg_ptr,n,r)}set lints(e){const n=Qi(e,w.__wbindgen_malloc),r=oe;w.__wbg_set_organizedgroup_lints(this.__wbg_ptr,n,r)}};Symbol.dispose&&(ia.prototype[Symbol.dispose]=ia.prototype.free);let sa=class qr{static __wrap(e){const n=Object.create(qr.prototype);return n.__wbg_ptr=e,Ro.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Ro.unregister(this),e}free(){const e=this.__destroy_into_raw();w.__wbg_span_free(e,0)}get end(){return w.__wbg_get_span_end(this.__wbg_ptr)>>>0}get start(){return w.__wbg_get_span_start(this.__wbg_ptr)>>>0}set end(e){w.__wbg_set_span_end(this.__wbg_ptr,e)}set start(e){w.__wbg_set_span_start(this.__wbg_ptr,e)}static from_json(e){const n=Me(e,w.__wbindgen_malloc,w.__wbindgen_realloc),r=oe,a=w.span_from_json(n,r);if(a[2])throw ht(a[1]);return qr.__wrap(a[0])}is_empty(){return w.span_is_empty(this.__wbg_ptr)!==0}len(){return w.span_len(this.__wbg_ptr)>>>0}static new(e,n){const r=w.span_new(e,n);return qr.__wrap(r)}to_json(){let e,n;try{const r=w.span_to_json(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{w.__wbindgen_free(e,n,1)}}};Symbol.dispose&&(sa.prototype[Symbol.dispose]=sa.prototype.free);let ur=class Ki{static __wrap(e){const n=Object.create(Ki.prototype);return n.__wbg_ptr=e,jo.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,jo.unregister(this),e}free(){const e=this.__destroy_into_raw();w.__wbg_suggestion_free(e,0)}static from_json(e){const n=Me(e,w.__wbindgen_malloc,w.__wbindgen_realloc),r=oe,a=w.suggestion_from_json(n,r);if(a[2])throw ht(a[1]);return Ki.__wrap(a[0])}get_replacement_text(){let e,n;try{const r=w.suggestion_get_replacement_text(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{w.__wbindgen_free(e,n,1)}}kind(){return w.suggestion_kind(this.__wbg_ptr)}to_json(){let e,n;try{const r=w.suggestion_to_json(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{w.__wbindgen_free(e,n,1)}}};Symbol.dispose&&(ur.prototype[Symbol.dispose]=ur.prototype.free);const qe=Object.freeze({Replace:0,0:"Replace",Remove:1,1:"Remove",InsertAfter:2,2:"InsertAfter"});function og(){return w.get_default_lint_config()}function lg(){let t,e;try{const n=w.get_default_lint_config_as_json();return t=n[0],e=n[1],ae(n[0],n[1])}finally{w.__wbindgen_free(t,e,1)}}function cg(){w.setup()}function fg(t){let e,n;try{const r=Me(t,w.__wbindgen_malloc,w.__wbindgen_realloc),a=oe,i=w.to_title_case(r,a);return e=i[0],n=i[1],ae(i[0],i[1])}finally{w.__wbindgen_free(e,n,1)}}function $f(){return{__proto__:null,"./harper_wasm_slim_bg.js":{__proto__:null,__wbg_Error_bce6d499ff0a4aff:function(e,n){return Error(ae(e,n))},__wbg_String_8564e559799eccda:function(e,n){const r=String(n),a=Me(r,w.__wbindgen_malloc,w.__wbindgen_realloc),i=oe;st().setInt32(e+4,i,!0),st().setInt32(e+0,a,!0)},__wbg___wbindgen_boolean_get_2304fb8c853028c8:function(e){const n=e,r=typeof n=="boolean"?n:void 0;return wt(r)?16777215:r?1:0},__wbg___wbindgen_debug_string_edece8177ad01481:function(e,n){const r=Zi(n),a=Me(r,w.__wbindgen_malloc,w.__wbindgen_realloc),i=oe;st().setInt32(e+4,i,!0),st().setInt32(e+0,a,!0)},__wbg___wbindgen_is_function_5cd60d5cf78b4eef:function(e){return typeof e=="function"},__wbg___wbindgen_is_object_b4593df85baada48:function(e){const n=e;return typeof n=="object"&&n!==null},__wbg___wbindgen_is_string_dde0fd9020db4434:function(e){return typeof e=="string"},__wbg___wbindgen_jsval_loose_eq_0ad77b7717db155c:function(e,n){return e==n},__wbg___wbindgen_number_get_f73a1244370fcc2c:function(e,n){const r=n,a=typeof r=="number"?r:void 0;st().setFloat64(e+8,wt(a)?0:a,!0),st().setInt32(e+0,!wt(a),!0)},__wbg___wbindgen_string_get_d109740c0d18f4d7:function(e,n){const r=n,a=typeof r=="string"?r:void 0;var i=wt(a)?0:Me(a,w.__wbindgen_malloc,w.__wbindgen_realloc),s=oe;st().setInt32(e+4,s,!0),st().setInt32(e+0,i,!0)},__wbg___wbindgen_throw_9c31b086c2b26051:function(e,n){throw new Error(ae(e,n))},__wbg_call_13665d9f14390edc:function(){return mn(function(e,n){return e.call(n)},arguments)},__wbg_done_54b8da57023b7ed2:function(e){return e.done},__wbg_entries_564a7e8b1e54ede5:function(e){return Object.entries(e)},__wbg_error_a6fa202b58aa1cd3:function(e,n){let r,a;try{r=e,a=n,console.error(ae(e,n))}finally{w.__wbindgen_free(r,a,1)}},__wbg_getRandomValues_3f44b700395062e5:function(){return mn(function(e,n){globalThis.crypto.getRandomValues(Pa(e,n))},arguments)},__wbg_getRandomValues_d49329ff89a07af1:function(){return mn(function(e,n){globalThis.crypto.getRandomValues(Pa(e,n))},arguments)},__wbg_getTime_09f1dd40a44edb30:function(e){return e.getTime()},__wbg_get_3e9a707ab7d352eb:function(){return mn(function(e,n){return Reflect.get(e,n)},arguments)},__wbg_get_98fdf51d029a75eb:function(e,n){return e[n>>>0]},__wbg_get_unchecked_1dfe6d05ad91d9b7:function(e,n){return e[n>>>0]},__wbg_instanceof_ArrayBuffer_53db37b06f6b9afe:function(e){let n;try{n=e instanceof ArrayBuffer}catch{n=!1}return n},__wbg_instanceof_Uint8Array_abd07d4bd221d50b:function(e){let n;try{n=e instanceof Uint8Array}catch{n=!1}return n},__wbg_iterator_1441b47f341dc34f:function(){return Symbol.iterator},__wbg_length_2591a0f4f659a55c:function(e){return e.length},__wbg_length_56fcd3e2b7e0299d:function(e){return e.length},__wbg_lint_new:function(e){return fn.__wrap(e)},__wbg_lint_unwrap:function(e){return fn.__unwrap(e)},__wbg_log_0c201ade58bb55e1:function(e,n,r,a,i,s,o,l){let f,c;try{f=e,c=n,console.log(ae(e,n),ae(r,a),ae(i,s),ae(o,l))}finally{w.__wbindgen_free(f,c,1)}},__wbg_log_ce2c4456b290c5e7:function(e,n){let r,a;try{r=e,a=n,console.log(ae(e,n))}finally{w.__wbindgen_free(r,a,1)}},__wbg_mark_b4d943f3bc2d2404:function(e,n){performance.mark(ae(e,n))},__wbg_measure_84362959e621a2c1:function(){return mn(function(e,n,r,a){let i,s,o,l;try{i=e,s=n,o=r,l=a,performance.measure(ae(e,n),ae(r,a))}finally{w.__wbindgen_free(i,s,1),w.__wbindgen_free(o,l,1)}},arguments)},__wbg_new_02d162bc6cf02f60:function(){return new Object},__wbg_new_070df68d66325372:function(){return new Map},__wbg_new_0_2722fcdb71a888a6:function(){return new Date},__wbg_new_227d7c05414eb861:function(){return new Error},__wbg_new_310879b66b6e95e1:function(){return new Array},__wbg_new_7ddec6de44ff8f5d:function(e){return new Uint8Array(e)},__wbg_next_2a4e19f4f5083b0f:function(e){return e.next},__wbg_next_6429a146bf756f93:function(){return mn(function(e){return e.next()},arguments)},__wbg_organizedgroup_new:function(e){return ia.__wrap(e)},__wbg_prototypesetcall_5f9bdc8d75e07276:function(e,n,r){Uint8Array.prototype.set.call(Pa(e,n),r)},__wbg_set_6be42768c690e380:function(e,n,r){e[n]=r},__wbg_set_78ea6a19f4818587:function(e,n,r){e[n>>>0]=r},__wbg_set_facb7a5914e0fa39:function(e,n,r){return e.set(n,r)},__wbg_stack_3b0d974bbf31e44f:function(e,n){const r=n.stack,a=Me(r,w.__wbindgen_malloc,w.__wbindgen_realloc),i=oe;st().setInt32(e+4,i,!0),st().setInt32(e+0,a,!0)},__wbg_suggestion_new:function(e){return ur.__wrap(e)},__wbg_value_9cc0518af87a489c:function(e){return e.value},__wbindgen_cast_0000000000000001:function(e){return e},__wbindgen_cast_0000000000000002:function(e,n){return ae(e,n)},__wbindgen_init_externref_table:function(){const e=w.__wbindgen_externrefs,n=e.grow(4);e.set(0,void 0),e.set(n+0,void 0),e.set(n+1,null),e.set(n+2,!0),e.set(n+3,!1)}}}}const Lo=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>w.__wbg_lint_free(t,1)),To=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>w.__wbg_linter_free(t,1)),$o=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>w.__wbg_organizedgroup_free(t,1)),Ro=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>w.__wbg_span_free(t,1)),jo=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>w.__wbg_suggestion_free(t,1));function Rf(t){const e=w.__externref_table_alloc();return w.__wbindgen_externrefs.set(e,t),e}function Na(t,e){if(!(t instanceof e))throw new Error(`expected instance of ${e.name}`)}function Zi(t){const e=typeof t;if(e=="number"||e=="boolean"||t==null)return`${t}`;if(e=="string")return`"${t}"`;if(e=="symbol"){const a=t.description;return a==null?"Symbol":`Symbol(${a})`}if(e=="function"){const a=t.name;return typeof a=="string"&&a.length>0?`Function(${a})`:"Function"}if(Array.isArray(t)){const a=t.length;let i="[";a>0&&(i+=Zi(t[0]));for(let s=1;s<a;s++)i+=", "+Zi(t[s]);return i+="]",i}const n=/\[object ([^\]]+)\]/.exec(toString.call(t));let r;if(n&&n.length>1)r=n[1];else return toString.call(t);if(r=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:r}function nr(t,e){t=t>>>0;const n=st(),r=[];for(let a=t;a<t+4*e;a+=4)r.push(w.__wbindgen_externrefs.get(n.getUint32(a,!0)));return w.__externref_drop_slice(t,e),r}function Pa(t,e){return t=t>>>0,Cn().subarray(t/1,t/1+e)}let Jn=null;function ug(){return(Jn===null||Jn.byteLength===0)&&(Jn=new BigUint64Array(w.memory.buffer)),Jn}let Zt=null;function st(){return(Zt===null||Zt.buffer.detached===!0||Zt.buffer.detached===void 0&&Zt.buffer!==w.memory.buffer)&&(Zt=new DataView(w.memory.buffer)),Zt}function ae(t,e){return pg(t>>>0,e)}let Xn=null;function Cn(){return(Xn===null||Xn.byteLength===0)&&(Xn=new Uint8Array(w.memory.buffer)),Xn}function mn(t,e){try{return t.apply(this,e)}catch(n){const r=Rf(n);w.__wbindgen_exn_store(r)}}function wt(t){return t==null}function _g(t,e){const n=e(t.length*8,8)>>>0;return ug().set(t,n/8),oe=t.length,n}function dg(t,e){const n=e(t.length*1,1)>>>0;return Cn().set(t,n/1),oe=t.length,n}function Qi(t,e){const n=e(t.length*4,4)>>>0;for(let r=0;r<t.length;r++){const a=Rf(t[r]);st().setUint32(n+4*r,a,!0)}return oe=t.length,n}function Me(t,e,n){if(n===void 0){const o=rr.encode(t),l=e(o.length,1)>>>0;return Cn().subarray(l,l+o.length).set(o),oe=o.length,l}let r=t.length,a=e(r,1)>>>0;const i=Cn();let s=0;for(;s<r;s++){const o=t.charCodeAt(s);if(o>127)break;i[a+s]=o}if(s!==r){s!==0&&(t=t.slice(s)),a=n(a,r,r=s+t.length*3,1)>>>0;const o=Cn().subarray(a+s,a+r),l=rr.encodeInto(t,o);s+=l.written,a=n(a,r,s,1)>>>0}return oe=s,a}function ht(t){const e=w.__wbindgen_externrefs.get(t);return w.__externref_table_dealloc(t),e}let Gr=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Gr.decode();const gg=2146435072;let za=0;function pg(t,e){return za+=e,za>=gg&&(Gr=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Gr.decode(),za=e),Gr.decode(Cn().subarray(t,t+e))}const rr=new TextEncoder;"encodeInto"in rr||(rr.encodeInto=function(t,e){const n=rr.encode(t);return e.set(n),{read:t.length,written:n.length}});let oe=0,w;function jf(t,e){return w=t.exports,Jn=null,Zt=null,Xn=null,w.__wbindgen_start(),w}async function mg(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(a){if(t.ok&&n(t.type)&&t.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",a);else throw a}const r=await t.arrayBuffer();return await WebAssembly.instantiate(r,e)}else{const r=await WebAssembly.instantiate(t,e);return r instanceof WebAssembly.Instance?{instance:r,module:t}:r}function n(r){switch(r){case"basic":case"cors":case"default":return!0}return!1}}function hg(t){if(w!==void 0)return w;t!==void 0&&(Object.getPrototypeOf(t)===Object.prototype?{module:t}=t:console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));const e=$f();t instanceof WebAssembly.Module||(t=new WebAssembly.Module(t));const n=new WebAssembly.Instance(t,e);return jf(n)}async function Of(t){if(w!==void 0)return w;t!==void 0&&(Object.getPrototypeOf(t)===Object.prototype?{module_or_path:t}=t:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),t===void 0&&(t=new URL);const e=$f();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:n}=await mg(await t,e);return jf(n)}const bg=Object.freeze(Object.defineProperty({__proto__:null,Dialect:Ps,Language:Yn,Lint:fn,Linter:Ji,OrganizedGroup:ia,Span:sa,Suggestion:ur,SuggestionKind:qe,default:Of,get_default_lint_config:og,get_default_lint_config_as_json:lg,initSync:hg,setup:cg,to_title_case:fg},Symbol.toStringTag,{value:"Module"})),wg=Object.freeze({American:0,0:"American",British:1,1:"British",Australian:2,2:"Australian",Canadian:3,3:"Canadian",Indian:4,4:"Indian"}),yg=Object.freeze({Plain:0,0:"Plain",Markdown:1,1:"Markdown",Typst:2,2:"Typst"});class dt{static __wrap(e){const n=Object.create(dt.prototype);return n.__wbg_ptr=e,Oo.register(n,n.__wbg_ptr,n),n}static __unwrap(e){return e instanceof dt?e.__destroy_into_raw():0}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Oo.unregister(this),e}free(){const e=this.__destroy_into_raw();y.__wbg_lint_free(e,0)}static from_json(e){const n=Ae(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=le,a=y.lint_from_json(n,r);if(a[2])throw bt(a[1]);return dt.__wrap(a[0])}get_problem_text(){let e,n;try{const r=y.lint_get_problem_text(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}lint_kind(){let e,n;try{const r=y.lint_lint_kind(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}lint_kind_pretty(){let e,n;try{const r=y.lint_lint_kind_pretty(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}message(){let e,n;try{const r=y.lint_message(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}message_html(){let e,n;try{const r=y.lint_message_html(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}span(){const e=y.lint_span(this.__wbg_ptr);return Wt.__wrap(e)}suggestion_count(){return y.lint_suggestion_count(this.__wbg_ptr)>>>0}suggestions(){const e=y.lint_suggestions(this.__wbg_ptr);var n=ar(e[0],e[1]).slice();return y.__wbindgen_free(e[0],e[1]*4,4),n}to_json(){let e,n;try{const r=y.lint_to_json(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}}Symbol.dispose&&(dt.prototype[Symbol.dispose]=dt.prototype.free);class Rn{static __wrap(e){const n=Object.create(Rn.prototype);return n.__wbg_ptr=e,Fo.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Fo.unregister(this),e}free(){const e=this.__destroy_into_raw();y.__wbg_linter_free(e,0)}apply_suggestion(e,n,r){let a,i;try{const l=Ae(e,y.__wbindgen_malloc,y.__wbindgen_realloc),f=le;Da(n,dt),Da(r,Ht);const c=y.linter_apply_suggestion(this.__wbg_ptr,l,f,n.__wbg_ptr,r.__wbg_ptr);var s=c[0],o=c[1];if(c[3])throw s=0,o=0,bt(c[2]);return a=s,i=o,ie(s,o)}finally{y.__wbindgen_free(a,i,1)}}clear_ignored_lints(){y.linter_clear_ignored_lints(this.__wbg_ptr)}clear_words(){y.linter_clear_words(this.__wbg_ptr)}context_hash(e,n){const r=Ae(e,y.__wbindgen_malloc,y.__wbindgen_realloc),a=le;Da(n,dt);const i=y.linter_context_hash(this.__wbg_ptr,r,a,n.__wbg_ptr);return BigInt.asUintN(64,i)}export_ignored_lints(){let e,n;try{const r=y.linter_export_ignored_lints(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}export_words(){const e=y.linter_export_words(this.__wbg_ptr);var n=ar(e[0],e[1]).slice();return y.__wbindgen_free(e[0],e[1]*4,4),n}generate_stats_file(){let e,n;try{const r=y.linter_generate_stats_file(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}get_dialect(){return y.linter_get_dialect(this.__wbg_ptr)}get_lint_config_as_json(){let e,n;try{const r=y.linter_get_lint_config_as_json(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}get_lint_config_as_object(){return y.linter_get_lint_config_as_object(this.__wbg_ptr)}get_lint_descriptions_as_json(){let e,n;try{const r=y.linter_get_lint_descriptions_as_json(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}get_lint_descriptions_as_object(){return y.linter_get_lint_descriptions_as_object(this.__wbg_ptr)}get_lint_descriptions_html_as_json(){let e,n;try{const r=y.linter_get_lint_descriptions_html_as_json(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}get_lint_descriptions_html_as_object(){return y.linter_get_lint_descriptions_html_as_object(this.__wbg_ptr)}get_structured_lint_config_as_json(){let e,n;try{const r=y.linter_get_structured_lint_config_as_json(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}get_structured_lint_config_as_object(){return y.linter_get_structured_lint_config_as_object(this.__wbg_ptr)}ignore_hashes(e){const n=Cg(e,y.__wbindgen_malloc),r=le;y.linter_ignore_hashes(this.__wbg_ptr,n,r)}ignore_lints(e,n){const r=Ae(e,y.__wbindgen_malloc,y.__wbindgen_realloc),a=le,i=ts(n,y.__wbindgen_malloc),s=le;y.linter_ignore_lints(this.__wbg_ptr,r,a,i,s)}import_ignored_lints(e){const n=Ae(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=le,a=y.linter_import_ignored_lints(this.__wbg_ptr,n,r);if(a[1])throw bt(a[0])}import_stats_file(e){const n=Ae(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=le,a=y.linter_import_stats_file(this.__wbg_ptr,n,r);if(a[1])throw bt(a[0])}import_weirpack(e){const n=kg(e,y.__wbindgen_malloc),r=le,a=y.linter_import_weirpack(this.__wbg_ptr,n,r);if(a[2])throw bt(a[1]);return bt(a[0])}import_words(e){const n=ts(e,y.__wbindgen_malloc),r=le;y.linter_import_words(this.__wbg_ptr,n,r)}is_likely_english(e){const n=Ae(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=le;return y.linter_is_likely_english(this.__wbg_ptr,n,r)!==0}isolate_english(e){let n,r;try{const a=Ae(e,y.__wbindgen_malloc,y.__wbindgen_realloc),i=le,s=y.linter_isolate_english(this.__wbg_ptr,a,i);return n=s[0],r=s[1],ie(s[0],s[1])}finally{y.__wbindgen_free(n,r,1)}}lint(e,n,r,a,i,s){const o=Ae(e,y.__wbindgen_malloc,y.__wbindgen_realloc),l=le;var f=yt(a)?0:Ae(a,y.__wbindgen_malloc,y.__wbindgen_realloc),c=le;const u=y.linter_lint(this.__wbg_ptr,o,l,n,r,f,c,i,s);var _=ar(u[0],u[1]).slice();return y.__wbindgen_free(u[0],u[1]*4,4),_}static new(e){const n=y.linter_new(e);return Rn.__wrap(n)}organized_lints(e,n,r,a,i,s){const o=Ae(e,y.__wbindgen_malloc,y.__wbindgen_realloc),l=le;var f=yt(a)?0:Ae(a,y.__wbindgen_malloc,y.__wbindgen_realloc),c=le;const u=y.linter_organized_lints(this.__wbg_ptr,o,l,n,r,f,c,i,s);var _=ar(u[0],u[1]).slice();return y.__wbindgen_free(u[0],u[1]*4,4),_}set_lint_config_from_json(e){const n=Ae(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=le,a=y.linter_set_lint_config_from_json(this.__wbg_ptr,n,r);if(a[1])throw bt(a[0])}set_lint_config_from_object(e){const n=y.linter_set_lint_config_from_object(this.__wbg_ptr,e);if(n[1])throw bt(n[0])}summarize_stats(e,n){return y.linter_summarize_stats(this.__wbg_ptr,!yt(e),yt(e)?BigInt(0):e,!yt(n),yt(n)?BigInt(0):n)}}Symbol.dispose&&(Rn.prototype[Symbol.dispose]=Rn.prototype.free);class jn{static __wrap(e){const n=Object.create(jn.prototype);return n.__wbg_ptr=e,Io.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Io.unregister(this),e}free(){const e=this.__destroy_into_raw();y.__wbg_organizedgroup_free(e,0)}get group(){let e,n;try{const r=y.__wbg_get_organizedgroup_group(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}get lints(){const e=y.__wbg_get_organizedgroup_lints(this.__wbg_ptr);var n=ar(e[0],e[1]).slice();return y.__wbindgen_free(e[0],e[1]*4,4),n}set group(e){const n=Ae(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=le;y.__wbg_set_organizedgroup_group(this.__wbg_ptr,n,r)}set lints(e){const n=ts(e,y.__wbindgen_malloc),r=le;y.__wbg_set_organizedgroup_lints(this.__wbg_ptr,n,r)}}Symbol.dispose&&(jn.prototype[Symbol.dispose]=jn.prototype.free);class Wt{static __wrap(e){const n=Object.create(Wt.prototype);return n.__wbg_ptr=e,No.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,No.unregister(this),e}free(){const e=this.__destroy_into_raw();y.__wbg_span_free(e,0)}get end(){return y.__wbg_get_span_end(this.__wbg_ptr)>>>0}get start(){return y.__wbg_get_span_start(this.__wbg_ptr)>>>0}set end(e){y.__wbg_set_span_end(this.__wbg_ptr,e)}set start(e){y.__wbg_set_span_start(this.__wbg_ptr,e)}static from_json(e){const n=Ae(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=le,a=y.span_from_json(n,r);if(a[2])throw bt(a[1]);return Wt.__wrap(a[0])}is_empty(){return y.span_is_empty(this.__wbg_ptr)!==0}len(){return y.span_len(this.__wbg_ptr)>>>0}static new(e,n){const r=y.span_new(e,n);return Wt.__wrap(r)}to_json(){let e,n;try{const r=y.span_to_json(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}}Symbol.dispose&&(Wt.prototype[Symbol.dispose]=Wt.prototype.free);class Ht{static __wrap(e){const n=Object.create(Ht.prototype);return n.__wbg_ptr=e,Po.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Po.unregister(this),e}free(){const e=this.__destroy_into_raw();y.__wbg_suggestion_free(e,0)}static from_json(e){const n=Ae(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=le,a=y.suggestion_from_json(n,r);if(a[2])throw bt(a[1]);return Ht.__wrap(a[0])}get_replacement_text(){let e,n;try{const r=y.suggestion_get_replacement_text(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}kind(){return y.suggestion_kind(this.__wbg_ptr)}to_json(){let e,n;try{const r=y.suggestion_to_json(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}}Symbol.dispose&&(Ht.prototype[Symbol.dispose]=Ht.prototype.free);const vg=Object.freeze({Replace:0,0:"Replace",Remove:1,1:"Remove",InsertAfter:2,2:"InsertAfter"});function xg(){return y.get_default_lint_config()}function Sg(){let t,e;try{const n=y.get_default_lint_config_as_json();return t=n[0],e=n[1],ie(n[0],n[1])}finally{y.__wbindgen_free(t,e,1)}}function Eg(){y.setup()}function Mg(t){let e,n;try{const r=Ae(t,y.__wbindgen_malloc,y.__wbindgen_realloc),a=le,i=y.to_title_case(r,a);return e=i[0],n=i[1],ie(i[0],i[1])}finally{y.__wbindgen_free(e,n,1)}}function Ff(){return{__proto__:null,"./harper_wasm_bg.js":{__proto__:null,__wbg_Error_bce6d499ff0a4aff:function(e,n){return Error(ie(e,n))},__wbg_String_8564e559799eccda:function(e,n){const r=String(n),a=Ae(r,y.__wbindgen_malloc,y.__wbindgen_realloc),i=le;ot().setInt32(e+4,i,!0),ot().setInt32(e+0,a,!0)},__wbg___wbindgen_boolean_get_2304fb8c853028c8:function(e){const n=e,r=typeof n=="boolean"?n:void 0;return yt(r)?16777215:r?1:0},__wbg___wbindgen_debug_string_edece8177ad01481:function(e,n){const r=es(n),a=Ae(r,y.__wbindgen_malloc,y.__wbindgen_realloc),i=le;ot().setInt32(e+4,i,!0),ot().setInt32(e+0,a,!0)},__wbg___wbindgen_is_function_5cd60d5cf78b4eef:function(e){return typeof e=="function"},__wbg___wbindgen_is_object_b4593df85baada48:function(e){const n=e;return typeof n=="object"&&n!==null},__wbg___wbindgen_is_string_dde0fd9020db4434:function(e){return typeof e=="string"},__wbg___wbindgen_jsval_loose_eq_0ad77b7717db155c:function(e,n){return e==n},__wbg___wbindgen_number_get_f73a1244370fcc2c:function(e,n){const r=n,a=typeof r=="number"?r:void 0;ot().setFloat64(e+8,yt(a)?0:a,!0),ot().setInt32(e+0,!yt(a),!0)},__wbg___wbindgen_string_get_d109740c0d18f4d7:function(e,n){const r=n,a=typeof r=="string"?r:void 0;var i=yt(a)?0:Ae(a,y.__wbindgen_malloc,y.__wbindgen_realloc),s=le;ot().setInt32(e+4,s,!0),ot().setInt32(e+0,i,!0)},__wbg___wbindgen_throw_9c31b086c2b26051:function(e,n){throw new Error(ie(e,n))},__wbg_call_13665d9f14390edc:function(){return hn(function(e,n){return e.call(n)},arguments)},__wbg_done_54b8da57023b7ed2:function(e){return e.done},__wbg_entries_564a7e8b1e54ede5:function(e){return Object.entries(e)},__wbg_error_a6fa202b58aa1cd3:function(e,n){let r,a;try{r=e,a=n,console.error(ie(e,n))}finally{y.__wbindgen_free(r,a,1)}},__wbg_getRandomValues_3f44b700395062e5:function(){return hn(function(e,n){globalThis.crypto.getRandomValues(Wa(e,n))},arguments)},__wbg_getRandomValues_d49329ff89a07af1:function(){return hn(function(e,n){globalThis.crypto.getRandomValues(Wa(e,n))},arguments)},__wbg_getTime_09f1dd40a44edb30:function(e){return e.getTime()},__wbg_get_3e9a707ab7d352eb:function(){return hn(function(e,n){return Reflect.get(e,n)},arguments)},__wbg_get_98fdf51d029a75eb:function(e,n){return e[n>>>0]},__wbg_get_unchecked_1dfe6d05ad91d9b7:function(e,n){return e[n>>>0]},__wbg_instanceof_ArrayBuffer_53db37b06f6b9afe:function(e){let n;try{n=e instanceof ArrayBuffer}catch{n=!1}return n},__wbg_instanceof_Uint8Array_abd07d4bd221d50b:function(e){let n;try{n=e instanceof Uint8Array}catch{n=!1}return n},__wbg_iterator_1441b47f341dc34f:function(){return Symbol.iterator},__wbg_length_2591a0f4f659a55c:function(e){return e.length},__wbg_length_56fcd3e2b7e0299d:function(e){return e.length},__wbg_lint_new:function(e){return dt.__wrap(e)},__wbg_lint_unwrap:function(e){return dt.__unwrap(e)},__wbg_log_0c201ade58bb55e1:function(e,n,r,a,i,s,o,l){let f,c;try{f=e,c=n,console.log(ie(e,n),ie(r,a),ie(i,s),ie(o,l))}finally{y.__wbindgen_free(f,c,1)}},__wbg_log_ce2c4456b290c5e7:function(e,n){let r,a;try{r=e,a=n,console.log(ie(e,n))}finally{y.__wbindgen_free(r,a,1)}},__wbg_mark_b4d943f3bc2d2404:function(e,n){performance.mark(ie(e,n))},__wbg_measure_84362959e621a2c1:function(){return hn(function(e,n,r,a){let i,s,o,l;try{i=e,s=n,o=r,l=a,performance.measure(ie(e,n),ie(r,a))}finally{y.__wbindgen_free(i,s,1),y.__wbindgen_free(o,l,1)}},arguments)},__wbg_new_02d162bc6cf02f60:function(){return new Object},__wbg_new_070df68d66325372:function(){return new Map},__wbg_new_0_2722fcdb71a888a6:function(){return new Date},__wbg_new_227d7c05414eb861:function(){return new Error},__wbg_new_310879b66b6e95e1:function(){return new Array},__wbg_new_7ddec6de44ff8f5d:function(e){return new Uint8Array(e)},__wbg_next_2a4e19f4f5083b0f:function(e){return e.next},__wbg_next_6429a146bf756f93:function(){return hn(function(e){return e.next()},arguments)},__wbg_organizedgroup_new:function(e){return jn.__wrap(e)},__wbg_prototypesetcall_5f9bdc8d75e07276:function(e,n,r){Uint8Array.prototype.set.call(Wa(e,n),r)},__wbg_set_6be42768c690e380:function(e,n,r){e[n]=r},__wbg_set_78ea6a19f4818587:function(e,n,r){e[n>>>0]=r},__wbg_set_facb7a5914e0fa39:function(e,n,r){return e.set(n,r)},__wbg_stack_3b0d974bbf31e44f:function(e,n){const r=n.stack,a=Ae(r,y.__wbindgen_malloc,y.__wbindgen_realloc),i=le;ot().setInt32(e+4,i,!0),ot().setInt32(e+0,a,!0)},__wbg_suggestion_new:function(e){return Ht.__wrap(e)},__wbg_value_9cc0518af87a489c:function(e){return e.value},__wbindgen_cast_0000000000000001:function(e){return e},__wbindgen_cast_0000000000000002:function(e,n){return ie(e,n)},__wbindgen_init_externref_table:function(){const e=y.__wbindgen_externrefs,n=e.grow(4);e.set(0,void 0),e.set(n+0,void 0),e.set(n+1,null),e.set(n+2,!0),e.set(n+3,!1)}}}}const Oo=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>y.__wbg_lint_free(t,1)),Fo=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>y.__wbg_linter_free(t,1)),Io=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>y.__wbg_organizedgroup_free(t,1)),No=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>y.__wbg_span_free(t,1)),Po=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>y.__wbg_suggestion_free(t,1));function If(t){const e=y.__externref_table_alloc();return y.__wbindgen_externrefs.set(e,t),e}function Da(t,e){if(!(t instanceof e))throw new Error(`expected instance of ${e.name}`)}function es(t){const e=typeof t;if(e=="number"||e=="boolean"||t==null)return`${t}`;if(e=="string")return`"${t}"`;if(e=="symbol"){const a=t.description;return a==null?"Symbol":`Symbol(${a})`}if(e=="function"){const a=t.name;return typeof a=="string"&&a.length>0?`Function(${a})`:"Function"}if(Array.isArray(t)){const a=t.length;let i="[";a>0&&(i+=es(t[0]));for(let s=1;s<a;s++)i+=", "+es(t[s]);return i+="]",i}const n=/\[object ([^\]]+)\]/.exec(toString.call(t));let r;if(n&&n.length>1)r=n[1];else return toString.call(t);if(r=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:r}function ar(t,e){t=t>>>0;const n=ot(),r=[];for(let a=t;a<t+4*e;a+=4)r.push(y.__wbindgen_externrefs.get(n.getUint32(a,!0)));return y.__externref_drop_slice(t,e),r}function Wa(t,e){return t=t>>>0,kn().subarray(t/1,t/1+e)}let Kn=null;function Ag(){return(Kn===null||Kn.byteLength===0)&&(Kn=new BigUint64Array(y.memory.buffer)),Kn}let Qt=null;function ot(){return(Qt===null||Qt.buffer.detached===!0||Qt.buffer.detached===void 0&&Qt.buffer!==y.memory.buffer)&&(Qt=new DataView(y.memory.buffer)),Qt}function ie(t,e){return Tg(t>>>0,e)}let Zn=null;function kn(){return(Zn===null||Zn.byteLength===0)&&(Zn=new Uint8Array(y.memory.buffer)),Zn}function hn(t,e){try{return t.apply(this,e)}catch(n){const r=If(n);y.__wbindgen_exn_store(r)}}function yt(t){return t==null}function Cg(t,e){const n=e(t.length*8,8)>>>0;return Ag().set(t,n/8),le=t.length,n}function kg(t,e){const n=e(t.length*1,1)>>>0;return kn().set(t,n/1),le=t.length,n}function ts(t,e){const n=e(t.length*4,4)>>>0;for(let r=0;r<t.length;r++){const a=If(t[r]);ot().setUint32(n+4*r,a,!0)}return le=t.length,n}function Ae(t,e,n){if(n===void 0){const o=ir.encode(t),l=e(o.length,1)>>>0;return kn().subarray(l,l+o.length).set(o),le=o.length,l}let r=t.length,a=e(r,1)>>>0;const i=kn();let s=0;for(;s<r;s++){const o=t.charCodeAt(s);if(o>127)break;i[a+s]=o}if(s!==r){s!==0&&(t=t.slice(s)),a=n(a,r,r=s+t.length*3,1)>>>0;const o=kn().subarray(a+s,a+r),l=ir.encodeInto(t,o);s+=l.written,a=n(a,r,s,1)>>>0}return le=s,a}function bt(t){const e=y.__wbindgen_externrefs.get(t);return y.__externref_table_dealloc(t),e}let Yr=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Yr.decode();const Lg=2146435072;let Ba=0;function Tg(t,e){return Ba+=e,Ba>=Lg&&(Yr=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Yr.decode(),Ba=e),Yr.decode(kn().subarray(t,t+e))}const ir=new TextEncoder;"encodeInto"in ir||(ir.encodeInto=function(t,e){const n=ir.encode(t);return e.set(n),{read:t.length,written:n.length}});let le=0,y;function Nf(t,e){return y=t.exports,Kn=null,Qt=null,Zn=null,y.__wbindgen_start(),y}async function $g(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(a){if(t.ok&&n(t.type)&&t.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",a);else throw a}const r=await t.arrayBuffer();return await WebAssembly.instantiate(r,e)}else{const r=await WebAssembly.instantiate(t,e);return r instanceof WebAssembly.Instance?{instance:r,module:t}:r}function n(r){switch(r){case"basic":case"cors":case"default":return!0}return!1}}function Rg(t){if(y!==void 0)return y;t!==void 0&&(Object.getPrototypeOf(t)===Object.prototype?{module:t}=t:console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));const e=Ff();t instanceof WebAssembly.Module||(t=new WebAssembly.Module(t));const n=new WebAssembly.Instance(t,e);return Nf(n)}async function jg(t){if(y!==void 0)return y;t!==void 0&&(Object.getPrototypeOf(t)===Object.prototype?{module_or_path:t}=t:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),t===void 0&&(t=new URL);const e=Ff();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:n}=await $g(await t,e);return Nf(n)}const Og=Object.freeze(Object.defineProperty({__proto__:null,Dialect:wg,Language:yg,Lint:dt,Linter:Rn,OrganizedGroup:jn,Span:Wt,Suggestion:Ht,SuggestionKind:vg,default:jg,get_default_lint_config:xg,get_default_lint_config_as_json:Sg,initSync:Rg,setup:Eg,to_title_case:Mg},Symbol.toStringTag,{value:"Module"})),Fg=class Jr extends Promise{constructor(e){super(n=>{n()}),ko(this,En),ko(this,ft),Tr(this,En,e)}static from(e){return new Jr(n=>{n(e())})}static resolve(e){return new Jr(n=>{n(e)})}static reject(e){return new Jr((n,r)=>{r(e)})}then(e,n){return Tt(this,ft)??Tr(this,ft,new Promise(Tt(this,En))),Tt(this,ft).then(e,n)}catch(e){return Tt(this,ft)??Tr(this,ft,new Promise(Tt(this,En))),Tt(this,ft).catch(e)}finally(e){return Tt(this,ft)??Tr(this,ft,new Promise(Tt(this,En))),Tt(this,ft).finally(e)}};En=new WeakMap;ft=new WeakMap;let zs=Fg;const Ig=(t,e,n,r)=>{if(n==="length"||n==="prototype"||n==="arguments"||n==="caller")return;const a=Object.getOwnPropertyDescriptor(t,n),i=Object.getOwnPropertyDescriptor(e,n);!Ng(a,i)&&r||Object.defineProperty(t,n,i)},Ng=function(t,e){return t===void 0||t.configurable||t.writable===e.writable&&t.enumerable===e.enumerable&&t.configurable===e.configurable&&(t.writable||t.value===e.value)},Pg=(t,e)=>{const n=Object.getPrototypeOf(e);n!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,n)},zg=(t,e)=>`/* Wrapped ${t}*/
${e}`,Dg=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),Wg=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),Bg=(t,e,n)=>{const r=n===""?"":`with ${n.trim()}() `,a=zg.bind(null,r,e.toString());Object.defineProperty(a,"name",Wg),Object.defineProperty(t,"toString",{...Dg,value:a})};function Hg(t,e,{ignoreNonConfigurable:n=!1}={}){const{name:r}=t;for(const a of Reflect.ownKeys(e))Ig(t,e,a,n);return Pg(t,e),Bg(t,e,r),t}const Vg=new WeakMap;function zo(t,{cacheKey:e=([r])=>r,cache:n=new Map}={}){const r=new Map,a=function(...i){const s=e(i);if(r.has(s))return r.get(s);const o=(async()=>{try{if(n&&await n.has(s))return await n.get(s);const f=await t.apply(this,i);try{return f}finally{n&&await n.set(s,f)}}finally{r.delete(s)}})();return r.set(s,o),o};return Hg(a,t,{ignoreNonConfigurable:!0}),Vg.set(a,n),a}function Pf(t){return t.includes("harper_wasm_slim")?"slim":"full"}function Ug(t){return t.glueFlavor??Pf(typeof t.url=="string"?t.url:t.url.href)}function qg(t){return t==="slim"?bg:Og}function Gg(t,e){return e==="slim"?t:t.includes("harper_wasm_bg.wasm")?t.replace("harper_wasm_bg.wasm","harper_wasm_slim_bg.wasm"):null}function Do(t){return typeof process<"u"&&t.startsWith("file://")?ra(()=>Promise.resolve().then(()=>Du),void 0,import.meta.url).then(e=>new Promise((n,r)=>{e.readFile(new URL(t).pathname,(a,i)=>{a&&r(a),n(i)})})):t}async function Wo(t,e){const n=qg(e),r=Gg(t,e);if(r!=null)try{await Of({module_or_path:Do(r)})}catch(a){if(e==="slim")throw a}return await n.default({module_or_path:Do(t)}),n}const Yg={full:zo(t=>Wo(t,"full")),slim:zo(t=>Wo(t,"slim"))};function zf(t,e){return Yg[e](t)}function Jg(t,e){return Df.create(t,e)}class Df{constructor(){Ia(this,"url",""),Ia(this,"glueFlavor","full"),Ia(this,"inner",null)}static create(e,n){const r=new Xg;return r.url=e,r.glueFlavor=n??Pf(typeof e=="string"?e:e.href),r.inner=zs.from(()=>zf(typeof r.url=="string"?r.url:r.url.href,r.glueFlavor)),r}async getDefaultLintConfigAsJSON(){return(await this.inner).get_default_lint_config_as_json()}async getDefaultLintConfig(){return(await this.inner).get_default_lint_config()}async toTitleCase(e){return(await this.inner).to_title_case(e)}async setup(){(await this.inner).setup()}}class Xg extends Df{async createLinter(e){return(await this.getBinaryModule()).Linter.new(e??Ps.American)}async getBinaryModule(){return await zs.from(()=>zf(typeof this.url=="string"?this.url:this.url.href,this.glueFlavor))}}var Kg=Object.defineProperty,Zg=(t,e,n)=>e in t?Kg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ut=(t,e,n)=>Zg(t,typeof e!="symbol"?e+"":e,n);function Qg(t){switch(t){case"plaintext":return Yn.Plain;case"typst":return Yn.Typst;case"markdown":case void 0:return Yn.Markdown;default:return console.warn(`Unknown Harper language '${String(t)}'; using markdown.`),Yn.Markdown}}function Bo(t,e){return[t,Qg(e==null?void 0:e.language),(e==null?void 0:e.forceAllHeadings)??!1,e==null?void 0:e.regex_mask,(e==null?void 0:e.dedup)??!0,(e==null?void 0:e.isolateEnglish)??!1]}class e0{constructor(e){ut(this,"binary"),ut(this,"inner"),ut(this,"disposed",!1),this.binary=e.binary,this.binary.setup(),this.inner=this.createInner(e.dialect)}createInner(e){return zs.from(async()=>(await this.binary.setup(),this.binary.createLinter(e)))}async setup(){await this.lint("",{language:"plaintext"});const e=await this.exportIgnoredLints();await this.importIgnoredLints(e)}async lint(e,n){return(await this.inner).lint(...Bo(e,n))}async organizedLints(e,n){const a=(await this.inner).organized_lints(...Bo(e,n)),i={};for(const s of a)i[s.group]=s.lints,s.free();return i}async applySuggestion(e,n,r){return(await this.inner).apply_suggestion(e,n,r)}async isLikelyEnglish(e){return(await this.inner).is_likely_english(e)}async isolateEnglish(e){return(await this.inner).isolate_english(e)}async getLintConfig(){return(await this.inner).get_lint_config_as_object()}async getDefaultLintConfigAsJSON(){return await this.binary.getDefaultLintConfigAsJSON()}async getDefaultLintConfig(){return await this.binary.getDefaultLintConfig()}async getStructuredLintConfig(){return(await this.inner).get_structured_lint_config_as_object()}async getStructuredLintConfigJSON(){return(await this.inner).get_structured_lint_config_as_json()}async setLintConfig(e){(await this.inner).set_lint_config_from_object(e)}async getLintConfigAsJSON(){return(await this.inner).get_lint_config_as_json()}async setLintConfigWithJSON(e){(await this.inner).set_lint_config_from_json(e)}async toTitleCase(e){return await this.binary.toTitleCase(e)}async getLintDescriptions(){return(await this.inner).get_lint_descriptions_as_object()}async getLintDescriptionsAsJSON(){return(await this.inner).get_lint_descriptions_as_json()}async getLintDescriptionsHTML(){return(await this.inner).get_lint_descriptions_html_as_object()}async getLintDescriptionsHTMLAsJSON(){return(await this.inner).get_lint_descriptions_html_as_json()}async ignoreLint(e,n){return await this.ignoreLints(e,[n])}async ignoreLints(e,n){(await this.inner).ignore_lints(e,n)}async ignoreLintHash(e){(await this.inner).ignore_hashes(new BigUint64Array([e]))}async exportIgnoredLints(){return(await this.inner).export_ignored_lints()}async importIgnoredLints(e){(await this.inner).import_ignored_lints(e)}async contextHash(e,n){return(await this.inner).context_hash(e,n)}async clearIgnoredLints(){(await this.inner).clear_ignored_lints()}async clearWords(){return(await this.inner).clear_words()}async importWords(e){return(await this.inner).import_words(e)}async exportWords(){return(await this.inner).export_words()}async getDialect(){return(await this.inner).get_dialect()}async setDialect(e){const n=await this.inner;return n.get_dialect()!==e&&(n.free(),this.inner=this.createInner(e)),Promise.resolve()}async summarizeStats(e,n){return(await this.inner).summarize_stats(e,n)}async generateStatsFile(){return(await this.inner).generate_stats_file()}async importStatsFile(e){return(await this.inner).import_stats_file(e)}async loadWeirpackFromBlob(e){const n=new Uint8Array(await e.arrayBuffer());return this.loadWeirpackFromBytes(n)}async loadWeirpackFromBytes(e){const n=await this.inner,r=e instanceof Uint8Array?e:Uint8Array.from(e);return n.import_weirpack(r)}async dispose(){if(this.disposed)return;this.disposed=!0,(await this.inner).free()}}function t0(t,e){if(!t)throw new Error("Assertion failed")}class n0{constructor(e){ut(this,"binary"),this.binary=e,this.binary.setup()}async serializeArg(e){var n;const{Lint:r,Span:a,Suggestion:i}=await this.binary.getBinaryModule();if(Array.isArray(e))return{json:JSON.stringify(await Promise.all(e.map(o=>this.serializeArg(o)))),type:"Array"};const s=typeof e;switch(s){case"string":case"number":case"boolean":case"undefined":return{json:JSON.stringify(e),type:s};case"bigint":return{json:e.toString(),type:s}}if(e.to_json!==void 0){const o=e.to_json();let l;const f=(n=e.constructor)==null?void 0:n.name;if(e instanceof r||f==="Lint"?l="Lint":e instanceof i||f==="Suggestion"?l="Suggestion":(e instanceof a||f==="Span")&&(l="Span"),l===void 0)throw new Error("Unhandled case: type undefined");return{json:o,type:l}}if(s=="object")return{json:JSON.stringify(await Promise.all(Object.entries(e).map(([o,l])=>this.serializeArg([o,l])))),type:"object"};throw new Error(`Unhandled case: ${e}`)}async serialize(e){return{procName:e.procName,args:await Promise.all(e.args.map(n=>this.serializeArg(n)))}}async deserializeArg(e){const{Lint:n,Span:r,Suggestion:a}=await this.binary.getBinaryModule();switch(e.type){case"bigint":return BigInt(e.json);case"undefined":return;case"boolean":case"number":case"string":return JSON.parse(e.json);case"Suggestion":return a.from_json(e.json);case"Lint":return n.from_json(e.json);case"Span":return r.from_json(e.json);case"Array":{const i=JSON.parse(e.json);return t0(Array.isArray(i)),await Promise.all(i.map(s=>this.deserializeArg(s)))}case"object":{const i=JSON.parse(e.json);return Object.fromEntries(await Promise.all(i.map(s=>this.deserializeArg(s))))}default:throw new Error(`Unhandled case: ${e.type}`)}}async deserialize(e){return{procName:e.procName,args:await Promise.all(e.args.map(n=>this.deserializeArg(n)))}}}const Wf=`var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _executor, _promise;
const Dialect$1 = Object.freeze({
  American: 0,
  "0": "American",
  British: 1,
  "1": "British",
  Australian: 2,
  "2": "Australian",
  Canadian: 3,
  "3": "Canadian",
  Indian: 4,
  "4": "Indian"
});
const Language$1 = Object.freeze({
  Plain: 0,
  "0": "Plain",
  Markdown: 1,
  "1": "Markdown",
  Typst: 2,
  "2": "Typst"
});
let Lint$1 = class Lint {
  static __wrap(ptr) {
    const obj = Object.create(Lint.prototype);
    obj.__wbg_ptr = ptr;
    LintFinalization$1.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof Lint)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    LintFinalization$1.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm$1.__wbg_lint_free(ptr, 0);
  }
  /**
   * @param {string} json
   * @returns {Lint}
   */
  static from_json(json) {
    const ptr0 = passStringToWasm0$1(json, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.lint_from_json(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0$1(ret[1]);
    }
    return Lint.__wrap(ret[0]);
  }
  /**
   * Get the content of the source material pointed to by [\`Self::span\`]
   * @returns {string}
   */
  get_problem_text() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.lint_get_problem_text(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a string representing the general category of the lint.
   * @returns {string}
   */
  lint_kind() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.lint_lint_kind(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a string representing the general category of the lint.
   * @returns {string}
   */
  lint_kind_pretty() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.lint_lint_kind_pretty(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a description of the error.
   * @returns {string}
   */
  message() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.lint_message(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a description of the error as HTML.
   * @returns {string}
   */
  message_html() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.lint_message_html(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get the location of the problematic text.
   * @returns {Span}
   */
  span() {
    const ret = wasm$1.lint_span(this.__wbg_ptr);
    return Span$1.__wrap(ret);
  }
  /**
   * Equivalent to calling \`.length\` on the result of \`suggestions()\`.
   * @returns {number}
   */
  suggestion_count() {
    const ret = wasm$1.lint_suggestion_count(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * Get an array of any suggestions that may resolve the issue.
   * @returns {Suggestion[]}
   */
  suggestions() {
    const ret = wasm$1.lint_suggestions(this.__wbg_ptr);
    var v1 = getArrayJsValueFromWasm0$1(ret[0], ret[1]).slice();
    wasm$1.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
  }
  /**
   * @returns {string}
   */
  to_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.lint_to_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
};
if (Symbol.dispose) Lint$1.prototype[Symbol.dispose] = Lint$1.prototype.free;
let Linter$1 = class Linter {
  static __wrap(ptr) {
    const obj = Object.create(Linter.prototype);
    obj.__wbg_ptr = ptr;
    LinterFinalization$1.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    LinterFinalization$1.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm$1.__wbg_linter_free(ptr, 0);
  }
  /**
   * Apply a suggestion from a given lint.
   * This action will be logged to the Linter's statistics.
   * @param {string} source_text
   * @param {Lint} lint
   * @param {Suggestion} suggestion
   * @returns {string}
   */
  apply_suggestion(source_text, lint, suggestion) {
    let deferred3_0;
    let deferred3_1;
    try {
      const ptr0 = passStringToWasm0$1(source_text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN$1;
      _assertClass$1(lint, Lint$1);
      _assertClass$1(suggestion, Suggestion$1);
      const ret = wasm$1.linter_apply_suggestion(this.__wbg_ptr, ptr0, len0, lint.__wbg_ptr, suggestion.__wbg_ptr);
      var ptr2 = ret[0];
      var len2 = ret[1];
      if (ret[3]) {
        ptr2 = 0;
        len2 = 0;
        throw takeFromExternrefTable0$1(ret[2]);
      }
      deferred3_0 = ptr2;
      deferred3_1 = len2;
      return getStringFromWasm0$1(ptr2, len2);
    } finally {
      wasm$1.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
  }
  clear_ignored_lints() {
    wasm$1.linter_clear_ignored_lints(this.__wbg_ptr);
  }
  /**
   * Clear the user dictionary.
   */
  clear_words() {
    wasm$1.linter_clear_words(this.__wbg_ptr);
  }
  /**
   * Compute the context hash of a given lint.
   * @param {string} source_text
   * @param {Lint} lint
   * @returns {bigint}
   */
  context_hash(source_text, lint) {
    const ptr0 = passStringToWasm0$1(source_text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    _assertClass$1(lint, Lint$1);
    const ret = wasm$1.linter_context_hash(this.__wbg_ptr, ptr0, len0, lint.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * Export the linter's ignored lints as a privacy-respecting JSON list of hashes.
   * @returns {string}
   */
  export_ignored_lints() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.linter_export_ignored_lints(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Export words from the dictionary.
   * Note: this will only return words previously added by [\`Self::import_words\`].
   * @returns {string[]}
   */
  export_words() {
    const ret = wasm$1.linter_export_words(this.__wbg_ptr);
    var v1 = getArrayJsValueFromWasm0$1(ret[0], ret[1]).slice();
    wasm$1.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
  }
  /**
   * @returns {string}
   */
  generate_stats_file() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.linter_generate_stats_file(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get the dialect this struct was constructed for.
   * @returns {Dialect}
   */
  get_dialect() {
    const ret = wasm$1.linter_get_dialect(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  get_lint_config_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.linter_get_lint_config_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {any}
   */
  get_lint_config_as_object() {
    const ret = wasm$1.linter_get_lint_config_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * Get a JSON map containing the descriptions of all the linting rules, formatted as Markdown.
   * @returns {string}
   */
  get_lint_descriptions_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.linter_get_lint_descriptions_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a Record containing the descriptions of all the linting rules, formatted as Markdown.
   * @returns {any}
   */
  get_lint_descriptions_as_object() {
    const ret = wasm$1.linter_get_lint_descriptions_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * Get a JSON map containing the descriptions of all the linting rules, formatted as HTML.
   * @returns {string}
   */
  get_lint_descriptions_html_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.linter_get_lint_descriptions_html_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a Record containing the descriptions of all the linting rules, formatted as HTML.
   * @returns {any}
   */
  get_lint_descriptions_html_as_object() {
    const ret = wasm$1.linter_get_lint_descriptions_html_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  get_structured_lint_config_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.linter_get_structured_lint_config_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {any}
   */
  get_structured_lint_config_as_object() {
    const ret = wasm$1.linter_get_structured_lint_config_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * Add a specific context hash to the ignored lints list.
   * @param {BigUint64Array} hashes
   */
  ignore_hashes(hashes) {
    const ptr0 = passArray64ToWasm0$1(hashes, wasm$1.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN$1;
    wasm$1.linter_ignore_hashes(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @param {string} source_text
   * @param {Lint[]} lints
   */
  ignore_lints(source_text, lints) {
    const ptr0 = passStringToWasm0$1(source_text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ptr1 = passArrayJsValueToWasm0$1(lints, wasm$1.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN$1;
    wasm$1.linter_ignore_lints(this.__wbg_ptr, ptr0, len0, ptr1, len1);
  }
  /**
   * Import into the linter's ignored lints from a privacy-respecting JSON list of hashes.
   * @param {string} json
   */
  import_ignored_lints(json) {
    const ptr0 = passStringToWasm0$1(json, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.linter_import_ignored_lints(this.__wbg_ptr, ptr0, len0);
    if (ret[1]) {
      throw takeFromExternrefTable0$1(ret[0]);
    }
  }
  /**
   * @param {string} file
   */
  import_stats_file(file) {
    const ptr0 = passStringToWasm0$1(file, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.linter_import_stats_file(this.__wbg_ptr, ptr0, len0);
    if (ret[1]) {
      throw takeFromExternrefTable0$1(ret[0]);
    }
  }
  /**
   * Load a Weirpack from raw bytes, merging its rules into the current linter.
   * Returns test failures if any are found, and does not import in that case.
   * @param {Uint8Array} bytes
   * @returns {any}
   */
  import_weirpack(bytes) {
    const ptr0 = passArray8ToWasm0$1(bytes, wasm$1.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.linter_import_weirpack(this.__wbg_ptr, ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0$1(ret[1]);
    }
    return takeFromExternrefTable0$1(ret[0]);
  }
  /**
   * Import words into the dictionary.
   * @param {string[]} additional_words
   */
  import_words(additional_words) {
    const ptr0 = passArrayJsValueToWasm0$1(additional_words, wasm$1.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN$1;
    wasm$1.linter_import_words(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * Helper method to quickly check if a plain string is likely intended to be English
   * @param {string} text
   * @returns {boolean}
   */
  is_likely_english(text) {
    const ptr0 = passStringToWasm0$1(text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.linter_is_likely_english(this.__wbg_ptr, ptr0, len0);
    return ret !== 0;
  }
  /**
   * Helper method to remove non-English text from a plain English document.
   * @param {string} text
   * @returns {string}
   */
  isolate_english(text) {
    let deferred2_0;
    let deferred2_1;
    try {
      const ptr0 = passStringToWasm0$1(text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN$1;
      const ret = wasm$1.linter_isolate_english(this.__wbg_ptr, ptr0, len0);
      deferred2_0 = ret[0];
      deferred2_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
  /**
   * Perform the configured linting on the provided text.
   *
   * If the provided regex mask cannot be parsed, this method will return an empty array.
   * @param {string} text
   * @param {Language} language
   * @param {boolean} all_headings
   * @param {string | null | undefined} regex_mask
   * @param {boolean} dedup
   * @param {boolean} isolate_english
   * @returns {Lint[]}
   */
  lint(text, language, all_headings, regex_mask, dedup, isolate_english) {
    const ptr0 = passStringToWasm0$1(text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    var ptr1 = isLikeNone$1(regex_mask) ? 0 : passStringToWasm0$1(regex_mask, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.linter_lint(this.__wbg_ptr, ptr0, len0, language, all_headings, ptr1, len1, dedup, isolate_english);
    var v3 = getArrayJsValueFromWasm0$1(ret[0], ret[1]).slice();
    wasm$1.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v3;
  }
  /**
   * Construct a new \`Linter\`.
   * Note that this can mean constructing the curated dictionary, which is the most expensive operation
   * in Harper.
   * @param {Dialect} dialect
   * @returns {Linter}
   */
  static new(dialect) {
    const ret = wasm$1.linter_new(dialect);
    return Linter.__wrap(ret);
  }
  /**
   * @param {string} text
   * @param {Language} language
   * @param {boolean} all_headings
   * @param {string | null | undefined} regex_mask
   * @param {boolean} dedup
   * @param {boolean} isolate_english
   * @returns {OrganizedGroup[]}
   */
  organized_lints(text, language, all_headings, regex_mask, dedup, isolate_english) {
    const ptr0 = passStringToWasm0$1(text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    var ptr1 = isLikeNone$1(regex_mask) ? 0 : passStringToWasm0$1(regex_mask, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.linter_organized_lints(this.__wbg_ptr, ptr0, len0, language, all_headings, ptr1, len1, dedup, isolate_english);
    var v3 = getArrayJsValueFromWasm0$1(ret[0], ret[1]).slice();
    wasm$1.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v3;
  }
  /**
   * @param {string} json
   */
  set_lint_config_from_json(json) {
    const ptr0 = passStringToWasm0$1(json, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.linter_set_lint_config_from_json(this.__wbg_ptr, ptr0, len0);
    if (ret[1]) {
      throw takeFromExternrefTable0$1(ret[0]);
    }
  }
  /**
   * @param {any} object
   */
  set_lint_config_from_object(object) {
    const ret = wasm$1.linter_set_lint_config_from_object(this.__wbg_ptr, object);
    if (ret[1]) {
      throw takeFromExternrefTable0$1(ret[0]);
    }
  }
  /**
   * @param {bigint | null} [start_time]
   * @param {bigint | null} [end_time]
   * @returns {any}
   */
  summarize_stats(start_time, end_time) {
    const ret = wasm$1.linter_summarize_stats(this.__wbg_ptr, !isLikeNone$1(start_time), isLikeNone$1(start_time) ? BigInt(0) : start_time, !isLikeNone$1(end_time), isLikeNone$1(end_time) ? BigInt(0) : end_time);
    return ret;
  }
};
if (Symbol.dispose) Linter$1.prototype[Symbol.dispose] = Linter$1.prototype.free;
let OrganizedGroup$1 = class OrganizedGroup {
  static __wrap(ptr) {
    const obj = Object.create(OrganizedGroup.prototype);
    obj.__wbg_ptr = ptr;
    OrganizedGroupFinalization$1.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    OrganizedGroupFinalization$1.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm$1.__wbg_organizedgroup_free(ptr, 0);
  }
  /**
   * @returns {string}
   */
  get group() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.__wbg_get_organizedgroup_group(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {Lint[]}
   */
  get lints() {
    const ret = wasm$1.__wbg_get_organizedgroup_lints(this.__wbg_ptr);
    var v1 = getArrayJsValueFromWasm0$1(ret[0], ret[1]).slice();
    wasm$1.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
  }
  /**
   * @param {string} arg0
   */
  set group(arg0) {
    const ptr0 = passStringToWasm0$1(arg0, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    wasm$1.__wbg_set_organizedgroup_group(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @param {Lint[]} arg0
   */
  set lints(arg0) {
    const ptr0 = passArrayJsValueToWasm0$1(arg0, wasm$1.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN$1;
    wasm$1.__wbg_set_organizedgroup_lints(this.__wbg_ptr, ptr0, len0);
  }
};
if (Symbol.dispose) OrganizedGroup$1.prototype[Symbol.dispose] = OrganizedGroup$1.prototype.free;
let Span$1 = class Span {
  static __wrap(ptr) {
    const obj = Object.create(Span.prototype);
    obj.__wbg_ptr = ptr;
    SpanFinalization$1.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SpanFinalization$1.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm$1.__wbg_span_free(ptr, 0);
  }
  /**
   * @returns {number}
   */
  get end() {
    const ret = wasm$1.__wbg_get_span_end(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @returns {number}
   */
  get start() {
    const ret = wasm$1.__wbg_get_span_start(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {number} arg0
   */
  set end(arg0) {
    wasm$1.__wbg_set_span_end(this.__wbg_ptr, arg0);
  }
  /**
   * @param {number} arg0
   */
  set start(arg0) {
    wasm$1.__wbg_set_span_start(this.__wbg_ptr, arg0);
  }
  /**
   * @param {string} json
   * @returns {Span}
   */
  static from_json(json) {
    const ptr0 = passStringToWasm0$1(json, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.span_from_json(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0$1(ret[1]);
    }
    return Span.__wrap(ret[0]);
  }
  /**
   * @returns {boolean}
   */
  is_empty() {
    const ret = wasm$1.span_is_empty(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {number}
   */
  len() {
    const ret = wasm$1.span_len(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {number} start
   * @param {number} end
   * @returns {Span}
   */
  static new(start, end) {
    const ret = wasm$1.span_new(start, end);
    return Span.__wrap(ret);
  }
  /**
   * @returns {string}
   */
  to_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.span_to_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
};
if (Symbol.dispose) Span$1.prototype[Symbol.dispose] = Span$1.prototype.free;
let Suggestion$1 = class Suggestion {
  static __wrap(ptr) {
    const obj = Object.create(Suggestion.prototype);
    obj.__wbg_ptr = ptr;
    SuggestionFinalization$1.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SuggestionFinalization$1.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm$1.__wbg_suggestion_free(ptr, 0);
  }
  /**
   * @param {string} json
   * @returns {Suggestion}
   */
  static from_json(json) {
    const ptr0 = passStringToWasm0$1(json, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.suggestion_from_json(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0$1(ret[1]);
    }
    return Suggestion.__wrap(ret[0]);
  }
  /**
   * Get the text that is going to replace the problematic section.
   * If [\`Self::kind\`] is \`SuggestionKind::Remove\`, this will return an empty
   * string.
   * @returns {string}
   */
  get_replacement_text() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.suggestion_get_replacement_text(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {SuggestionKind}
   */
  kind() {
    const ret = wasm$1.suggestion_kind(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  to_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.suggestion_to_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
};
if (Symbol.dispose) Suggestion$1.prototype[Symbol.dispose] = Suggestion$1.prototype.free;
const SuggestionKind$1 = Object.freeze({
  /**
   * Replace the problematic text.
   */
  Replace: 0,
  "0": "Replace",
  /**
   * Remove the problematic text.
   */
  Remove: 1,
  "1": "Remove",
  /**
   * Insert additional text after the error.
   */
  InsertAfter: 2,
  "2": "InsertAfter"
});
function get_default_lint_config$1() {
  const ret = wasm$1.get_default_lint_config();
  return ret;
}
function get_default_lint_config_as_json$1() {
  let deferred1_0;
  let deferred1_1;
  try {
    const ret = wasm$1.get_default_lint_config_as_json();
    deferred1_0 = ret[0];
    deferred1_1 = ret[1];
    return getStringFromWasm0$1(ret[0], ret[1]);
  } finally {
    wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
  }
}
function setup$1() {
  wasm$1.setup();
}
function to_title_case$1(text) {
  let deferred2_0;
  let deferred2_1;
  try {
    const ptr0 = passStringToWasm0$1(text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.to_title_case(ptr0, len0);
    deferred2_0 = ret[0];
    deferred2_1 = ret[1];
    return getStringFromWasm0$1(ret[0], ret[1]);
  } finally {
    wasm$1.__wbindgen_free(deferred2_0, deferred2_1, 1);
  }
}
function __wbg_get_imports$1() {
  const import0 = {
    __proto__: null,
    __wbg_Error_bce6d499ff0a4aff: function(arg0, arg1) {
      const ret = Error(getStringFromWasm0$1(arg0, arg1));
      return ret;
    },
    __wbg_String_8564e559799eccda: function(arg0, arg1) {
      const ret = String(arg1);
      const ptr1 = passStringToWasm0$1(ret, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN$1;
      getDataViewMemory0$1().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0$1().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_boolean_get_2304fb8c853028c8: function(arg0) {
      const v = arg0;
      const ret = typeof v === "boolean" ? v : void 0;
      return isLikeNone$1(ret) ? 16777215 : ret ? 1 : 0;
    },
    __wbg___wbindgen_debug_string_edece8177ad01481: function(arg0, arg1) {
      const ret = debugString$1(arg1);
      const ptr1 = passStringToWasm0$1(ret, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN$1;
      getDataViewMemory0$1().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0$1().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_is_function_5cd60d5cf78b4eef: function(arg0) {
      const ret = typeof arg0 === "function";
      return ret;
    },
    __wbg___wbindgen_is_object_b4593df85baada48: function(arg0) {
      const val = arg0;
      const ret = typeof val === "object" && val !== null;
      return ret;
    },
    __wbg___wbindgen_is_string_dde0fd9020db4434: function(arg0) {
      const ret = typeof arg0 === "string";
      return ret;
    },
    __wbg___wbindgen_jsval_loose_eq_0ad77b7717db155c: function(arg0, arg1) {
      const ret = arg0 == arg1;
      return ret;
    },
    __wbg___wbindgen_number_get_f73a1244370fcc2c: function(arg0, arg1) {
      const obj = arg1;
      const ret = typeof obj === "number" ? obj : void 0;
      getDataViewMemory0$1().setFloat64(arg0 + 8 * 1, isLikeNone$1(ret) ? 0 : ret, true);
      getDataViewMemory0$1().setInt32(arg0 + 4 * 0, !isLikeNone$1(ret), true);
    },
    __wbg___wbindgen_string_get_d109740c0d18f4d7: function(arg0, arg1) {
      const obj = arg1;
      const ret = typeof obj === "string" ? obj : void 0;
      var ptr1 = isLikeNone$1(ret) ? 0 : passStringToWasm0$1(ret, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN$1;
      getDataViewMemory0$1().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0$1().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_throw_9c31b086c2b26051: function(arg0, arg1) {
      throw new Error(getStringFromWasm0$1(arg0, arg1));
    },
    __wbg_call_13665d9f14390edc: function() {
      return handleError$1(function(arg0, arg1) {
        const ret = arg0.call(arg1);
        return ret;
      }, arguments);
    },
    __wbg_done_54b8da57023b7ed2: function(arg0) {
      const ret = arg0.done;
      return ret;
    },
    __wbg_entries_564a7e8b1e54ede5: function(arg0) {
      const ret = Object.entries(arg0);
      return ret;
    },
    __wbg_error_a6fa202b58aa1cd3: function(arg0, arg1) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0$1(arg0, arg1));
      } finally {
        wasm$1.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_getRandomValues_3f44b700395062e5: function() {
      return handleError$1(function(arg0, arg1) {
        globalThis.crypto.getRandomValues(getArrayU8FromWasm0$1(arg0, arg1));
      }, arguments);
    },
    __wbg_getRandomValues_d49329ff89a07af1: function() {
      return handleError$1(function(arg0, arg1) {
        globalThis.crypto.getRandomValues(getArrayU8FromWasm0$1(arg0, arg1));
      }, arguments);
    },
    __wbg_getTime_09f1dd40a44edb30: function(arg0) {
      const ret = arg0.getTime();
      return ret;
    },
    __wbg_get_3e9a707ab7d352eb: function() {
      return handleError$1(function(arg0, arg1) {
        const ret = Reflect.get(arg0, arg1);
        return ret;
      }, arguments);
    },
    __wbg_get_98fdf51d029a75eb: function(arg0, arg1) {
      const ret = arg0[arg1 >>> 0];
      return ret;
    },
    __wbg_get_unchecked_1dfe6d05ad91d9b7: function(arg0, arg1) {
      const ret = arg0[arg1 >>> 0];
      return ret;
    },
    __wbg_instanceof_ArrayBuffer_53db37b06f6b9afe: function(arg0) {
      let result;
      try {
        result = arg0 instanceof ArrayBuffer;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_instanceof_Uint8Array_abd07d4bd221d50b: function(arg0) {
      let result;
      try {
        result = arg0 instanceof Uint8Array;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_iterator_1441b47f341dc34f: function() {
      const ret = Symbol.iterator;
      return ret;
    },
    __wbg_length_2591a0f4f659a55c: function(arg0) {
      const ret = arg0.length;
      return ret;
    },
    __wbg_length_56fcd3e2b7e0299d: function(arg0) {
      const ret = arg0.length;
      return ret;
    },
    __wbg_lint_new: function(arg0) {
      const ret = Lint$1.__wrap(arg0);
      return ret;
    },
    __wbg_lint_unwrap: function(arg0) {
      const ret = Lint$1.__unwrap(arg0);
      return ret;
    },
    __wbg_log_0c201ade58bb55e1: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.log(getStringFromWasm0$1(arg0, arg1), getStringFromWasm0$1(arg2, arg3), getStringFromWasm0$1(arg4, arg5), getStringFromWasm0$1(arg6, arg7));
      } finally {
        wasm$1.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_log_ce2c4456b290c5e7: function(arg0, arg1) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.log(getStringFromWasm0$1(arg0, arg1));
      } finally {
        wasm$1.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_mark_b4d943f3bc2d2404: function(arg0, arg1) {
      performance.mark(getStringFromWasm0$1(arg0, arg1));
    },
    __wbg_measure_84362959e621a2c1: function() {
      return handleError$1(function(arg0, arg1, arg2, arg3) {
        let deferred0_0;
        let deferred0_1;
        let deferred1_0;
        let deferred1_1;
        try {
          deferred0_0 = arg0;
          deferred0_1 = arg1;
          deferred1_0 = arg2;
          deferred1_1 = arg3;
          performance.measure(getStringFromWasm0$1(arg0, arg1), getStringFromWasm0$1(arg2, arg3));
        } finally {
          wasm$1.__wbindgen_free(deferred0_0, deferred0_1, 1);
          wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
      }, arguments);
    },
    __wbg_new_02d162bc6cf02f60: function() {
      const ret = new Object();
      return ret;
    },
    __wbg_new_070df68d66325372: function() {
      const ret = /* @__PURE__ */ new Map();
      return ret;
    },
    __wbg_new_0_2722fcdb71a888a6: function() {
      const ret = /* @__PURE__ */ new Date();
      return ret;
    },
    __wbg_new_227d7c05414eb861: function() {
      const ret = new Error();
      return ret;
    },
    __wbg_new_310879b66b6e95e1: function() {
      const ret = new Array();
      return ret;
    },
    __wbg_new_7ddec6de44ff8f5d: function(arg0) {
      const ret = new Uint8Array(arg0);
      return ret;
    },
    __wbg_next_2a4e19f4f5083b0f: function(arg0) {
      const ret = arg0.next;
      return ret;
    },
    __wbg_next_6429a146bf756f93: function() {
      return handleError$1(function(arg0) {
        const ret = arg0.next();
        return ret;
      }, arguments);
    },
    __wbg_organizedgroup_new: function(arg0) {
      const ret = OrganizedGroup$1.__wrap(arg0);
      return ret;
    },
    __wbg_prototypesetcall_5f9bdc8d75e07276: function(arg0, arg1, arg2) {
      Uint8Array.prototype.set.call(getArrayU8FromWasm0$1(arg0, arg1), arg2);
    },
    __wbg_set_6be42768c690e380: function(arg0, arg1, arg2) {
      arg0[arg1] = arg2;
    },
    __wbg_set_78ea6a19f4818587: function(arg0, arg1, arg2) {
      arg0[arg1 >>> 0] = arg2;
    },
    __wbg_set_facb7a5914e0fa39: function(arg0, arg1, arg2) {
      const ret = arg0.set(arg1, arg2);
      return ret;
    },
    __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
      const ret = arg1.stack;
      const ptr1 = passStringToWasm0$1(ret, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN$1;
      getDataViewMemory0$1().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0$1().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg_suggestion_new: function(arg0) {
      const ret = Suggestion$1.__wrap(arg0);
      return ret;
    },
    __wbg_value_9cc0518af87a489c: function(arg0) {
      const ret = arg0.value;
      return ret;
    },
    __wbindgen_cast_0000000000000001: function(arg0) {
      const ret = arg0;
      return ret;
    },
    __wbindgen_cast_0000000000000002: function(arg0, arg1) {
      const ret = getStringFromWasm0$1(arg0, arg1);
      return ret;
    },
    __wbindgen_init_externref_table: function() {
      const table = wasm$1.__wbindgen_externrefs;
      const offset = table.grow(4);
      table.set(0, void 0);
      table.set(offset + 0, void 0);
      table.set(offset + 1, null);
      table.set(offset + 2, true);
      table.set(offset + 3, false);
    }
  };
  return {
    __proto__: null,
    "./harper_wasm_slim_bg.js": import0
  };
}
const LintFinalization$1 = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm$1.__wbg_lint_free(ptr, 1));
const LinterFinalization$1 = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm$1.__wbg_linter_free(ptr, 1));
const OrganizedGroupFinalization$1 = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm$1.__wbg_organizedgroup_free(ptr, 1));
const SpanFinalization$1 = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm$1.__wbg_span_free(ptr, 1));
const SuggestionFinalization$1 = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm$1.__wbg_suggestion_free(ptr, 1));
function addToExternrefTable0$1(obj) {
  const idx = wasm$1.__externref_table_alloc();
  wasm$1.__wbindgen_externrefs.set(idx, obj);
  return idx;
}
function _assertClass$1(instance, klass) {
  if (!(instance instanceof klass)) {
    throw new Error(\`expected instance of \${klass.name}\`);
  }
}
function debugString$1(val) {
  const type = typeof val;
  if (type == "number" || type == "boolean" || val == null) {
    return \`\${val}\`;
  }
  if (type == "string") {
    return \`"\${val}"\`;
  }
  if (type == "symbol") {
    const description = val.description;
    if (description == null) {
      return "Symbol";
    } else {
      return \`Symbol(\${description})\`;
    }
  }
  if (type == "function") {
    const name = val.name;
    if (typeof name == "string" && name.length > 0) {
      return \`Function(\${name})\`;
    } else {
      return "Function";
    }
  }
  if (Array.isArray(val)) {
    const length = val.length;
    let debug = "[";
    if (length > 0) {
      debug += debugString$1(val[0]);
    }
    for (let i = 1; i < length; i++) {
      debug += ", " + debugString$1(val[i]);
    }
    debug += "]";
    return debug;
  }
  const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));
  let className;
  if (builtInMatches && builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    return toString.call(val);
  }
  if (className == "Object") {
    try {
      return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
      return "Object";
    }
  }
  if (val instanceof Error) {
    return \`\${val.name}: \${val.message}
\${val.stack}\`;
  }
  return className;
}
function getArrayJsValueFromWasm0$1(ptr, len) {
  ptr = ptr >>> 0;
  const mem = getDataViewMemory0$1();
  const result = [];
  for (let i = ptr; i < ptr + 4 * len; i += 4) {
    result.push(wasm$1.__wbindgen_externrefs.get(mem.getUint32(i, true)));
  }
  wasm$1.__externref_drop_slice(ptr, len);
  return result;
}
function getArrayU8FromWasm0$1(ptr, len) {
  ptr = ptr >>> 0;
  return getUint8ArrayMemory0$1().subarray(ptr / 1, ptr / 1 + len);
}
let cachedBigUint64ArrayMemory0$1 = null;
function getBigUint64ArrayMemory0$1() {
  if (cachedBigUint64ArrayMemory0$1 === null || cachedBigUint64ArrayMemory0$1.byteLength === 0) {
    cachedBigUint64ArrayMemory0$1 = new BigUint64Array(wasm$1.memory.buffer);
  }
  return cachedBigUint64ArrayMemory0$1;
}
let cachedDataViewMemory0$1 = null;
function getDataViewMemory0$1() {
  if (cachedDataViewMemory0$1 === null || cachedDataViewMemory0$1.buffer.detached === true || cachedDataViewMemory0$1.buffer.detached === void 0 && cachedDataViewMemory0$1.buffer !== wasm$1.memory.buffer) {
    cachedDataViewMemory0$1 = new DataView(wasm$1.memory.buffer);
  }
  return cachedDataViewMemory0$1;
}
function getStringFromWasm0$1(ptr, len) {
  return decodeText$1(ptr >>> 0, len);
}
let cachedUint8ArrayMemory0$1 = null;
function getUint8ArrayMemory0$1() {
  if (cachedUint8ArrayMemory0$1 === null || cachedUint8ArrayMemory0$1.byteLength === 0) {
    cachedUint8ArrayMemory0$1 = new Uint8Array(wasm$1.memory.buffer);
  }
  return cachedUint8ArrayMemory0$1;
}
function handleError$1(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    const idx = addToExternrefTable0$1(e);
    wasm$1.__wbindgen_exn_store(idx);
  }
}
function isLikeNone$1(x) {
  return x === void 0 || x === null;
}
function passArray64ToWasm0$1(arg, malloc) {
  const ptr = malloc(arg.length * 8, 8) >>> 0;
  getBigUint64ArrayMemory0$1().set(arg, ptr / 8);
  WASM_VECTOR_LEN$1 = arg.length;
  return ptr;
}
function passArray8ToWasm0$1(arg, malloc) {
  const ptr = malloc(arg.length * 1, 1) >>> 0;
  getUint8ArrayMemory0$1().set(arg, ptr / 1);
  WASM_VECTOR_LEN$1 = arg.length;
  return ptr;
}
function passArrayJsValueToWasm0$1(array, malloc) {
  const ptr = malloc(array.length * 4, 4) >>> 0;
  for (let i = 0; i < array.length; i++) {
    const add = addToExternrefTable0$1(array[i]);
    getDataViewMemory0$1().setUint32(ptr + 4 * i, add, true);
  }
  WASM_VECTOR_LEN$1 = array.length;
  return ptr;
}
function passStringToWasm0$1(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder$1.encode(arg);
    const ptr2 = malloc(buf.length, 1) >>> 0;
    getUint8ArrayMemory0$1().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN$1 = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;
  const mem = getUint8ArrayMemory0$1();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 127) break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    const view = getUint8ArrayMemory0$1().subarray(ptr + offset, ptr + len);
    const ret = cachedTextEncoder$1.encodeInto(arg, view);
    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }
  WASM_VECTOR_LEN$1 = offset;
  return ptr;
}
function takeFromExternrefTable0$1(idx) {
  const value = wasm$1.__wbindgen_externrefs.get(idx);
  wasm$1.__externref_table_dealloc(idx);
  return value;
}
let cachedTextDecoder$1 = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder$1.decode();
const MAX_SAFARI_DECODE_BYTES$1 = 2146435072;
let numBytesDecoded$1 = 0;
function decodeText$1(ptr, len) {
  numBytesDecoded$1 += len;
  if (numBytesDecoded$1 >= MAX_SAFARI_DECODE_BYTES$1) {
    cachedTextDecoder$1 = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
    cachedTextDecoder$1.decode();
    numBytesDecoded$1 = len;
  }
  return cachedTextDecoder$1.decode(getUint8ArrayMemory0$1().subarray(ptr, ptr + len));
}
const cachedTextEncoder$1 = new TextEncoder();
if (!("encodeInto" in cachedTextEncoder$1)) {
  cachedTextEncoder$1.encodeInto = function(arg, view) {
    const buf = cachedTextEncoder$1.encode(arg);
    view.set(buf);
    return {
      read: arg.length,
      written: buf.length
    };
  };
}
let WASM_VECTOR_LEN$1 = 0;
let wasm$1;
function __wbg_finalize_init$1(instance, module) {
  wasm$1 = instance.exports;
  cachedBigUint64ArrayMemory0$1 = null;
  cachedDataViewMemory0$1 = null;
  cachedUint8ArrayMemory0$1 = null;
  wasm$1.__wbindgen_start();
  return wasm$1;
}
async function __wbg_load$1(module, imports) {
  if (typeof Response === "function" && module instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e) {
        const validResponse = module.ok && expectedResponseType(module.type);
        if (validResponse && module.headers.get("Content-Type") !== "application/wasm") {
          console.warn("\`WebAssembly.instantiateStreaming\` failed because your server does not serve Wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n", e);
        } else {
          throw e;
        }
      }
    }
    const bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module, imports);
    if (instance instanceof WebAssembly.Instance) {
      return { instance, module };
    } else {
      return instance;
    }
  }
  function expectedResponseType(type) {
    switch (type) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
function initSync$1(module) {
  if (wasm$1 !== void 0) return wasm$1;
  if (module !== void 0) {
    if (Object.getPrototypeOf(module) === Object.prototype) {
      ({ module } = module);
    } else {
      console.warn("using deprecated parameters for \`initSync()\`; pass a single object instead");
    }
  }
  const imports = __wbg_get_imports$1();
  if (!(module instanceof WebAssembly.Module)) {
    module = new WebAssembly.Module(module);
  }
  const instance = new WebAssembly.Instance(module, imports);
  return __wbg_finalize_init$1(instance);
}
async function __wbg_init$1(module_or_path) {
  if (wasm$1 !== void 0) return wasm$1;
  if (module_or_path !== void 0) {
    if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
      ({ module_or_path } = module_or_path);
    } else {
      console.warn("using deprecated parameters for the initialization function; pass a single object instead");
    }
  }
  if (module_or_path === void 0) {
    module_or_path = new URL();
  }
  const imports = __wbg_get_imports$1();
  if (typeof module_or_path === "string" || typeof Request === "function" && module_or_path instanceof Request || typeof URL === "function" && module_or_path instanceof URL) {
    module_or_path = fetch(module_or_path);
  }
  const { instance, module } = await __wbg_load$1(await module_or_path, imports);
  return __wbg_finalize_init$1(instance);
}
var defaultGlue = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Dialect: Dialect$1,
  Language: Language$1,
  Lint: Lint$1,
  Linter: Linter$1,
  OrganizedGroup: OrganizedGroup$1,
  Span: Span$1,
  Suggestion: Suggestion$1,
  SuggestionKind: SuggestionKind$1,
  default: __wbg_init$1,
  get_default_lint_config: get_default_lint_config$1,
  get_default_lint_config_as_json: get_default_lint_config_as_json$1,
  initSync: initSync$1,
  setup: setup$1,
  to_title_case: to_title_case$1
});
const Dialect = Object.freeze({
  American: 0,
  "0": "American",
  British: 1,
  "1": "British",
  Australian: 2,
  "2": "Australian",
  Canadian: 3,
  "3": "Canadian",
  Indian: 4,
  "4": "Indian"
});
const Language = Object.freeze({
  Plain: 0,
  "0": "Plain",
  Markdown: 1,
  "1": "Markdown",
  Typst: 2,
  "2": "Typst"
});
class Lint2 {
  static __wrap(ptr) {
    const obj = Object.create(Lint2.prototype);
    obj.__wbg_ptr = ptr;
    LintFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof Lint2)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    LintFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_lint_free(ptr, 0);
  }
  /**
   * @param {string} json
   * @returns {Lint}
   */
  static from_json(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.lint_from_json(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Lint2.__wrap(ret[0]);
  }
  /**
   * Get the content of the source material pointed to by [\`Self::span\`]
   * @returns {string}
   */
  get_problem_text() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.lint_get_problem_text(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a string representing the general category of the lint.
   * @returns {string}
   */
  lint_kind() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.lint_lint_kind(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a string representing the general category of the lint.
   * @returns {string}
   */
  lint_kind_pretty() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.lint_lint_kind_pretty(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a description of the error.
   * @returns {string}
   */
  message() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.lint_message(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a description of the error as HTML.
   * @returns {string}
   */
  message_html() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.lint_message_html(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get the location of the problematic text.
   * @returns {Span}
   */
  span() {
    const ret = wasm.lint_span(this.__wbg_ptr);
    return Span2.__wrap(ret);
  }
  /**
   * Equivalent to calling \`.length\` on the result of \`suggestions()\`.
   * @returns {number}
   */
  suggestion_count() {
    const ret = wasm.lint_suggestion_count(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * Get an array of any suggestions that may resolve the issue.
   * @returns {Suggestion[]}
   */
  suggestions() {
    const ret = wasm.lint_suggestions(this.__wbg_ptr);
    var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
  }
  /**
   * @returns {string}
   */
  to_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.lint_to_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
}
if (Symbol.dispose) Lint2.prototype[Symbol.dispose] = Lint2.prototype.free;
class Linter2 {
  static __wrap(ptr) {
    const obj = Object.create(Linter2.prototype);
    obj.__wbg_ptr = ptr;
    LinterFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    LinterFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_linter_free(ptr, 0);
  }
  /**
   * Apply a suggestion from a given lint.
   * This action will be logged to the Linter's statistics.
   * @param {string} source_text
   * @param {Lint} lint
   * @param {Suggestion} suggestion
   * @returns {string}
   */
  apply_suggestion(source_text, lint, suggestion) {
    let deferred3_0;
    let deferred3_1;
    try {
      const ptr0 = passStringToWasm0(source_text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      _assertClass(lint, Lint2);
      _assertClass(suggestion, Suggestion2);
      const ret = wasm.linter_apply_suggestion(this.__wbg_ptr, ptr0, len0, lint.__wbg_ptr, suggestion.__wbg_ptr);
      var ptr2 = ret[0];
      var len2 = ret[1];
      if (ret[3]) {
        ptr2 = 0;
        len2 = 0;
        throw takeFromExternrefTable0(ret[2]);
      }
      deferred3_0 = ptr2;
      deferred3_1 = len2;
      return getStringFromWasm0(ptr2, len2);
    } finally {
      wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
  }
  clear_ignored_lints() {
    wasm.linter_clear_ignored_lints(this.__wbg_ptr);
  }
  /**
   * Clear the user dictionary.
   */
  clear_words() {
    wasm.linter_clear_words(this.__wbg_ptr);
  }
  /**
   * Compute the context hash of a given lint.
   * @param {string} source_text
   * @param {Lint} lint
   * @returns {bigint}
   */
  context_hash(source_text, lint) {
    const ptr0 = passStringToWasm0(source_text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(lint, Lint2);
    const ret = wasm.linter_context_hash(this.__wbg_ptr, ptr0, len0, lint.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * Export the linter's ignored lints as a privacy-respecting JSON list of hashes.
   * @returns {string}
   */
  export_ignored_lints() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.linter_export_ignored_lints(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Export words from the dictionary.
   * Note: this will only return words previously added by [\`Self::import_words\`].
   * @returns {string[]}
   */
  export_words() {
    const ret = wasm.linter_export_words(this.__wbg_ptr);
    var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
  }
  /**
   * @returns {string}
   */
  generate_stats_file() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.linter_generate_stats_file(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get the dialect this struct was constructed for.
   * @returns {Dialect}
   */
  get_dialect() {
    const ret = wasm.linter_get_dialect(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  get_lint_config_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.linter_get_lint_config_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {any}
   */
  get_lint_config_as_object() {
    const ret = wasm.linter_get_lint_config_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * Get a JSON map containing the descriptions of all the linting rules, formatted as Markdown.
   * @returns {string}
   */
  get_lint_descriptions_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.linter_get_lint_descriptions_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a Record containing the descriptions of all the linting rules, formatted as Markdown.
   * @returns {any}
   */
  get_lint_descriptions_as_object() {
    const ret = wasm.linter_get_lint_descriptions_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * Get a JSON map containing the descriptions of all the linting rules, formatted as HTML.
   * @returns {string}
   */
  get_lint_descriptions_html_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.linter_get_lint_descriptions_html_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a Record containing the descriptions of all the linting rules, formatted as HTML.
   * @returns {any}
   */
  get_lint_descriptions_html_as_object() {
    const ret = wasm.linter_get_lint_descriptions_html_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  get_structured_lint_config_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.linter_get_structured_lint_config_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {any}
   */
  get_structured_lint_config_as_object() {
    const ret = wasm.linter_get_structured_lint_config_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * Add a specific context hash to the ignored lints list.
   * @param {BigUint64Array} hashes
   */
  ignore_hashes(hashes) {
    const ptr0 = passArray64ToWasm0(hashes, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.linter_ignore_hashes(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @param {string} source_text
   * @param {Lint[]} lints
   */
  ignore_lints(source_text, lints) {
    const ptr0 = passStringToWasm0(source_text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArrayJsValueToWasm0(lints, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    wasm.linter_ignore_lints(this.__wbg_ptr, ptr0, len0, ptr1, len1);
  }
  /**
   * Import into the linter's ignored lints from a privacy-respecting JSON list of hashes.
   * @param {string} json
   */
  import_ignored_lints(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.linter_import_ignored_lints(this.__wbg_ptr, ptr0, len0);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * @param {string} file
   */
  import_stats_file(file) {
    const ptr0 = passStringToWasm0(file, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.linter_import_stats_file(this.__wbg_ptr, ptr0, len0);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * Load a Weirpack from raw bytes, merging its rules into the current linter.
   * Returns test failures if any are found, and does not import in that case.
   * @param {Uint8Array} bytes
   * @returns {any}
   */
  import_weirpack(bytes) {
    const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.linter_import_weirpack(this.__wbg_ptr, ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * Import words into the dictionary.
   * @param {string[]} additional_words
   */
  import_words(additional_words) {
    const ptr0 = passArrayJsValueToWasm0(additional_words, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.linter_import_words(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * Helper method to quickly check if a plain string is likely intended to be English
   * @param {string} text
   * @returns {boolean}
   */
  is_likely_english(text) {
    const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.linter_is_likely_english(this.__wbg_ptr, ptr0, len0);
    return ret !== 0;
  }
  /**
   * Helper method to remove non-English text from a plain English document.
   * @param {string} text
   * @returns {string}
   */
  isolate_english(text) {
    let deferred2_0;
    let deferred2_1;
    try {
      const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      const ret = wasm.linter_isolate_english(this.__wbg_ptr, ptr0, len0);
      deferred2_0 = ret[0];
      deferred2_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
  /**
   * Perform the configured linting on the provided text.
   *
   * If the provided regex mask cannot be parsed, this method will return an empty array.
   * @param {string} text
   * @param {Language} language
   * @param {boolean} all_headings
   * @param {string | null | undefined} regex_mask
   * @param {boolean} dedup
   * @param {boolean} isolate_english
   * @returns {Lint[]}
   */
  lint(text, language, all_headings, regex_mask, dedup, isolate_english) {
    const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    var ptr1 = isLikeNone(regex_mask) ? 0 : passStringToWasm0(regex_mask, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    const ret = wasm.linter_lint(this.__wbg_ptr, ptr0, len0, language, all_headings, ptr1, len1, dedup, isolate_english);
    var v3 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v3;
  }
  /**
   * Construct a new \`Linter\`.
   * Note that this can mean constructing the curated dictionary, which is the most expensive operation
   * in Harper.
   * @param {Dialect} dialect
   * @returns {Linter}
   */
  static new(dialect) {
    const ret = wasm.linter_new(dialect);
    return Linter2.__wrap(ret);
  }
  /**
   * @param {string} text
   * @param {Language} language
   * @param {boolean} all_headings
   * @param {string | null | undefined} regex_mask
   * @param {boolean} dedup
   * @param {boolean} isolate_english
   * @returns {OrganizedGroup[]}
   */
  organized_lints(text, language, all_headings, regex_mask, dedup, isolate_english) {
    const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    var ptr1 = isLikeNone(regex_mask) ? 0 : passStringToWasm0(regex_mask, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    const ret = wasm.linter_organized_lints(this.__wbg_ptr, ptr0, len0, language, all_headings, ptr1, len1, dedup, isolate_english);
    var v3 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v3;
  }
  /**
   * @param {string} json
   */
  set_lint_config_from_json(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.linter_set_lint_config_from_json(this.__wbg_ptr, ptr0, len0);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * @param {any} object
   */
  set_lint_config_from_object(object) {
    const ret = wasm.linter_set_lint_config_from_object(this.__wbg_ptr, object);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * @param {bigint | null} [start_time]
   * @param {bigint | null} [end_time]
   * @returns {any}
   */
  summarize_stats(start_time, end_time) {
    const ret = wasm.linter_summarize_stats(this.__wbg_ptr, !isLikeNone(start_time), isLikeNone(start_time) ? BigInt(0) : start_time, !isLikeNone(end_time), isLikeNone(end_time) ? BigInt(0) : end_time);
    return ret;
  }
}
if (Symbol.dispose) Linter2.prototype[Symbol.dispose] = Linter2.prototype.free;
class OrganizedGroup2 {
  static __wrap(ptr) {
    const obj = Object.create(OrganizedGroup2.prototype);
    obj.__wbg_ptr = ptr;
    OrganizedGroupFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    OrganizedGroupFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_organizedgroup_free(ptr, 0);
  }
  /**
   * @returns {string}
   */
  get group() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.__wbg_get_organizedgroup_group(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {Lint[]}
   */
  get lints() {
    const ret = wasm.__wbg_get_organizedgroup_lints(this.__wbg_ptr);
    var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
  }
  /**
   * @param {string} arg0
   */
  set group(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_organizedgroup_group(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @param {Lint[]} arg0
   */
  set lints(arg0) {
    const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_organizedgroup_lints(this.__wbg_ptr, ptr0, len0);
  }
}
if (Symbol.dispose) OrganizedGroup2.prototype[Symbol.dispose] = OrganizedGroup2.prototype.free;
class Span2 {
  static __wrap(ptr) {
    const obj = Object.create(Span2.prototype);
    obj.__wbg_ptr = ptr;
    SpanFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SpanFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_span_free(ptr, 0);
  }
  /**
   * @returns {number}
   */
  get end() {
    const ret = wasm.__wbg_get_span_end(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @returns {number}
   */
  get start() {
    const ret = wasm.__wbg_get_span_start(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {number} arg0
   */
  set end(arg0) {
    wasm.__wbg_set_span_end(this.__wbg_ptr, arg0);
  }
  /**
   * @param {number} arg0
   */
  set start(arg0) {
    wasm.__wbg_set_span_start(this.__wbg_ptr, arg0);
  }
  /**
   * @param {string} json
   * @returns {Span}
   */
  static from_json(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.span_from_json(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Span2.__wrap(ret[0]);
  }
  /**
   * @returns {boolean}
   */
  is_empty() {
    const ret = wasm.span_is_empty(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {number}
   */
  len() {
    const ret = wasm.span_len(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {number} start
   * @param {number} end
   * @returns {Span}
   */
  static new(start, end) {
    const ret = wasm.span_new(start, end);
    return Span2.__wrap(ret);
  }
  /**
   * @returns {string}
   */
  to_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.span_to_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
}
if (Symbol.dispose) Span2.prototype[Symbol.dispose] = Span2.prototype.free;
class Suggestion2 {
  static __wrap(ptr) {
    const obj = Object.create(Suggestion2.prototype);
    obj.__wbg_ptr = ptr;
    SuggestionFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SuggestionFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_suggestion_free(ptr, 0);
  }
  /**
   * @param {string} json
   * @returns {Suggestion}
   */
  static from_json(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.suggestion_from_json(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Suggestion2.__wrap(ret[0]);
  }
  /**
   * Get the text that is going to replace the problematic section.
   * If [\`Self::kind\`] is \`SuggestionKind::Remove\`, this will return an empty
   * string.
   * @returns {string}
   */
  get_replacement_text() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.suggestion_get_replacement_text(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {SuggestionKind}
   */
  kind() {
    const ret = wasm.suggestion_kind(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  to_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.suggestion_to_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
}
if (Symbol.dispose) Suggestion2.prototype[Symbol.dispose] = Suggestion2.prototype.free;
const SuggestionKind = Object.freeze({
  /**
   * Replace the problematic text.
   */
  Replace: 0,
  "0": "Replace",
  /**
   * Remove the problematic text.
   */
  Remove: 1,
  "1": "Remove",
  /**
   * Insert additional text after the error.
   */
  InsertAfter: 2,
  "2": "InsertAfter"
});
function get_default_lint_config() {
  const ret = wasm.get_default_lint_config();
  return ret;
}
function get_default_lint_config_as_json() {
  let deferred1_0;
  let deferred1_1;
  try {
    const ret = wasm.get_default_lint_config_as_json();
    deferred1_0 = ret[0];
    deferred1_1 = ret[1];
    return getStringFromWasm0(ret[0], ret[1]);
  } finally {
    wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
  }
}
function setup() {
  wasm.setup();
}
function to_title_case(text) {
  let deferred2_0;
  let deferred2_1;
  try {
    const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.to_title_case(ptr0, len0);
    deferred2_0 = ret[0];
    deferred2_1 = ret[1];
    return getStringFromWasm0(ret[0], ret[1]);
  } finally {
    wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
  }
}
function __wbg_get_imports() {
  const import0 = {
    __proto__: null,
    __wbg_Error_bce6d499ff0a4aff: function(arg0, arg1) {
      const ret = Error(getStringFromWasm0(arg0, arg1));
      return ret;
    },
    __wbg_String_8564e559799eccda: function(arg0, arg1) {
      const ret = String(arg1);
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_boolean_get_2304fb8c853028c8: function(arg0) {
      const v = arg0;
      const ret = typeof v === "boolean" ? v : void 0;
      return isLikeNone(ret) ? 16777215 : ret ? 1 : 0;
    },
    __wbg___wbindgen_debug_string_edece8177ad01481: function(arg0, arg1) {
      const ret = debugString(arg1);
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_is_function_5cd60d5cf78b4eef: function(arg0) {
      const ret = typeof arg0 === "function";
      return ret;
    },
    __wbg___wbindgen_is_object_b4593df85baada48: function(arg0) {
      const val = arg0;
      const ret = typeof val === "object" && val !== null;
      return ret;
    },
    __wbg___wbindgen_is_string_dde0fd9020db4434: function(arg0) {
      const ret = typeof arg0 === "string";
      return ret;
    },
    __wbg___wbindgen_jsval_loose_eq_0ad77b7717db155c: function(arg0, arg1) {
      const ret = arg0 == arg1;
      return ret;
    },
    __wbg___wbindgen_number_get_f73a1244370fcc2c: function(arg0, arg1) {
      const obj = arg1;
      const ret = typeof obj === "number" ? obj : void 0;
      getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
    },
    __wbg___wbindgen_string_get_d109740c0d18f4d7: function(arg0, arg1) {
      const obj = arg1;
      const ret = typeof obj === "string" ? obj : void 0;
      var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_throw_9c31b086c2b26051: function(arg0, arg1) {
      throw new Error(getStringFromWasm0(arg0, arg1));
    },
    __wbg_call_13665d9f14390edc: function() {
      return handleError(function(arg0, arg1) {
        const ret = arg0.call(arg1);
        return ret;
      }, arguments);
    },
    __wbg_done_54b8da57023b7ed2: function(arg0) {
      const ret = arg0.done;
      return ret;
    },
    __wbg_entries_564a7e8b1e54ede5: function(arg0) {
      const ret = Object.entries(arg0);
      return ret;
    },
    __wbg_error_a6fa202b58aa1cd3: function(arg0, arg1) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0(arg0, arg1));
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_getRandomValues_3f44b700395062e5: function() {
      return handleError(function(arg0, arg1) {
        globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
      }, arguments);
    },
    __wbg_getRandomValues_d49329ff89a07af1: function() {
      return handleError(function(arg0, arg1) {
        globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
      }, arguments);
    },
    __wbg_getTime_09f1dd40a44edb30: function(arg0) {
      const ret = arg0.getTime();
      return ret;
    },
    __wbg_get_3e9a707ab7d352eb: function() {
      return handleError(function(arg0, arg1) {
        const ret = Reflect.get(arg0, arg1);
        return ret;
      }, arguments);
    },
    __wbg_get_98fdf51d029a75eb: function(arg0, arg1) {
      const ret = arg0[arg1 >>> 0];
      return ret;
    },
    __wbg_get_unchecked_1dfe6d05ad91d9b7: function(arg0, arg1) {
      const ret = arg0[arg1 >>> 0];
      return ret;
    },
    __wbg_instanceof_ArrayBuffer_53db37b06f6b9afe: function(arg0) {
      let result;
      try {
        result = arg0 instanceof ArrayBuffer;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_instanceof_Uint8Array_abd07d4bd221d50b: function(arg0) {
      let result;
      try {
        result = arg0 instanceof Uint8Array;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_iterator_1441b47f341dc34f: function() {
      const ret = Symbol.iterator;
      return ret;
    },
    __wbg_length_2591a0f4f659a55c: function(arg0) {
      const ret = arg0.length;
      return ret;
    },
    __wbg_length_56fcd3e2b7e0299d: function(arg0) {
      const ret = arg0.length;
      return ret;
    },
    __wbg_lint_new: function(arg0) {
      const ret = Lint2.__wrap(arg0);
      return ret;
    },
    __wbg_lint_unwrap: function(arg0) {
      const ret = Lint2.__unwrap(arg0);
      return ret;
    },
    __wbg_log_0c201ade58bb55e1: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.log(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3), getStringFromWasm0(arg4, arg5), getStringFromWasm0(arg6, arg7));
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_log_ce2c4456b290c5e7: function(arg0, arg1) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.log(getStringFromWasm0(arg0, arg1));
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_mark_b4d943f3bc2d2404: function(arg0, arg1) {
      performance.mark(getStringFromWasm0(arg0, arg1));
    },
    __wbg_measure_84362959e621a2c1: function() {
      return handleError(function(arg0, arg1, arg2, arg3) {
        let deferred0_0;
        let deferred0_1;
        let deferred1_0;
        let deferred1_1;
        try {
          deferred0_0 = arg0;
          deferred0_1 = arg1;
          deferred1_0 = arg2;
          deferred1_1 = arg3;
          performance.measure(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
        } finally {
          wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
          wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
      }, arguments);
    },
    __wbg_new_02d162bc6cf02f60: function() {
      const ret = new Object();
      return ret;
    },
    __wbg_new_070df68d66325372: function() {
      const ret = /* @__PURE__ */ new Map();
      return ret;
    },
    __wbg_new_0_2722fcdb71a888a6: function() {
      const ret = /* @__PURE__ */ new Date();
      return ret;
    },
    __wbg_new_227d7c05414eb861: function() {
      const ret = new Error();
      return ret;
    },
    __wbg_new_310879b66b6e95e1: function() {
      const ret = new Array();
      return ret;
    },
    __wbg_new_7ddec6de44ff8f5d: function(arg0) {
      const ret = new Uint8Array(arg0);
      return ret;
    },
    __wbg_next_2a4e19f4f5083b0f: function(arg0) {
      const ret = arg0.next;
      return ret;
    },
    __wbg_next_6429a146bf756f93: function() {
      return handleError(function(arg0) {
        const ret = arg0.next();
        return ret;
      }, arguments);
    },
    __wbg_organizedgroup_new: function(arg0) {
      const ret = OrganizedGroup2.__wrap(arg0);
      return ret;
    },
    __wbg_prototypesetcall_5f9bdc8d75e07276: function(arg0, arg1, arg2) {
      Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
    },
    __wbg_set_6be42768c690e380: function(arg0, arg1, arg2) {
      arg0[arg1] = arg2;
    },
    __wbg_set_78ea6a19f4818587: function(arg0, arg1, arg2) {
      arg0[arg1 >>> 0] = arg2;
    },
    __wbg_set_facb7a5914e0fa39: function(arg0, arg1, arg2) {
      const ret = arg0.set(arg1, arg2);
      return ret;
    },
    __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
      const ret = arg1.stack;
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg_suggestion_new: function(arg0) {
      const ret = Suggestion2.__wrap(arg0);
      return ret;
    },
    __wbg_value_9cc0518af87a489c: function(arg0) {
      const ret = arg0.value;
      return ret;
    },
    __wbindgen_cast_0000000000000001: function(arg0) {
      const ret = arg0;
      return ret;
    },
    __wbindgen_cast_0000000000000002: function(arg0, arg1) {
      const ret = getStringFromWasm0(arg0, arg1);
      return ret;
    },
    __wbindgen_init_externref_table: function() {
      const table = wasm.__wbindgen_externrefs;
      const offset = table.grow(4);
      table.set(0, void 0);
      table.set(offset + 0, void 0);
      table.set(offset + 1, null);
      table.set(offset + 2, true);
      table.set(offset + 3, false);
    }
  };
  return {
    __proto__: null,
    "./harper_wasm_bg.js": import0
  };
}
const LintFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_lint_free(ptr, 1));
const LinterFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_linter_free(ptr, 1));
const OrganizedGroupFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_organizedgroup_free(ptr, 1));
const SpanFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_span_free(ptr, 1));
const SuggestionFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_suggestion_free(ptr, 1));
function addToExternrefTable0(obj) {
  const idx = wasm.__externref_table_alloc();
  wasm.__wbindgen_externrefs.set(idx, obj);
  return idx;
}
function _assertClass(instance, klass) {
  if (!(instance instanceof klass)) {
    throw new Error(\`expected instance of \${klass.name}\`);
  }
}
function debugString(val) {
  const type = typeof val;
  if (type == "number" || type == "boolean" || val == null) {
    return \`\${val}\`;
  }
  if (type == "string") {
    return \`"\${val}"\`;
  }
  if (type == "symbol") {
    const description = val.description;
    if (description == null) {
      return "Symbol";
    } else {
      return \`Symbol(\${description})\`;
    }
  }
  if (type == "function") {
    const name = val.name;
    if (typeof name == "string" && name.length > 0) {
      return \`Function(\${name})\`;
    } else {
      return "Function";
    }
  }
  if (Array.isArray(val)) {
    const length = val.length;
    let debug = "[";
    if (length > 0) {
      debug += debugString(val[0]);
    }
    for (let i = 1; i < length; i++) {
      debug += ", " + debugString(val[i]);
    }
    debug += "]";
    return debug;
  }
  const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));
  let className;
  if (builtInMatches && builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    return toString.call(val);
  }
  if (className == "Object") {
    try {
      return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
      return "Object";
    }
  }
  if (val instanceof Error) {
    return \`\${val.name}: \${val.message}
\${val.stack}\`;
  }
  return className;
}
function getArrayJsValueFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  const mem = getDataViewMemory0();
  const result = [];
  for (let i = ptr; i < ptr + 4 * len; i += 4) {
    result.push(wasm.__wbindgen_externrefs.get(mem.getUint32(i, true)));
  }
  wasm.__externref_drop_slice(ptr, len);
  return result;
}
function getArrayU8FromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}
let cachedBigUint64ArrayMemory0 = null;
function getBigUint64ArrayMemory0() {
  if (cachedBigUint64ArrayMemory0 === null || cachedBigUint64ArrayMemory0.byteLength === 0) {
    cachedBigUint64ArrayMemory0 = new BigUint64Array(wasm.memory.buffer);
  }
  return cachedBigUint64ArrayMemory0;
}
let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
  if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || cachedDataViewMemory0.buffer.detached === void 0 && cachedDataViewMemory0.buffer !== wasm.memory.buffer) {
    cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
  }
  return cachedDataViewMemory0;
}
function getStringFromWasm0(ptr, len) {
  return decodeText(ptr >>> 0, len);
}
let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
  if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
    cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8ArrayMemory0;
}
function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    const idx = addToExternrefTable0(e);
    wasm.__wbindgen_exn_store(idx);
  }
}
function isLikeNone(x) {
  return x === void 0 || x === null;
}
function passArray64ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 8, 8) >>> 0;
  getBigUint64ArrayMemory0().set(arg, ptr / 8);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function passArray8ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 1, 1) >>> 0;
  getUint8ArrayMemory0().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function passArrayJsValueToWasm0(array, malloc) {
  const ptr = malloc(array.length * 4, 4) >>> 0;
  for (let i = 0; i < array.length; i++) {
    const add = addToExternrefTable0(array[i]);
    getDataViewMemory0().setUint32(ptr + 4 * i, add, true);
  }
  WASM_VECTOR_LEN = array.length;
  return ptr;
}
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr2 = malloc(buf.length, 1) >>> 0;
    getUint8ArrayMemory0().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;
  const mem = getUint8ArrayMemory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 127) break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
    const ret = cachedTextEncoder.encodeInto(arg, view);
    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
function takeFromExternrefTable0(idx) {
  const value = wasm.__wbindgen_externrefs.get(idx);
  wasm.__externref_table_dealloc(idx);
  return value;
}
let cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
  numBytesDecoded += len;
  if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
    cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
    cachedTextDecoder.decode();
    numBytesDecoded = len;
  }
  return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}
const cachedTextEncoder = new TextEncoder();
if (!("encodeInto" in cachedTextEncoder)) {
  cachedTextEncoder.encodeInto = function(arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
      read: arg.length,
      written: buf.length
    };
  };
}
let WASM_VECTOR_LEN = 0;
let wasm;
function __wbg_finalize_init(instance, module) {
  wasm = instance.exports;
  cachedBigUint64ArrayMemory0 = null;
  cachedDataViewMemory0 = null;
  cachedUint8ArrayMemory0 = null;
  wasm.__wbindgen_start();
  return wasm;
}
async function __wbg_load(module, imports) {
  if (typeof Response === "function" && module instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e) {
        const validResponse = module.ok && expectedResponseType(module.type);
        if (validResponse && module.headers.get("Content-Type") !== "application/wasm") {
          console.warn("\`WebAssembly.instantiateStreaming\` failed because your server does not serve Wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n", e);
        } else {
          throw e;
        }
      }
    }
    const bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module, imports);
    if (instance instanceof WebAssembly.Instance) {
      return { instance, module };
    } else {
      return instance;
    }
  }
  function expectedResponseType(type) {
    switch (type) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
function initSync(module) {
  if (wasm !== void 0) return wasm;
  if (module !== void 0) {
    if (Object.getPrototypeOf(module) === Object.prototype) {
      ({ module } = module);
    } else {
      console.warn("using deprecated parameters for \`initSync()\`; pass a single object instead");
    }
  }
  const imports = __wbg_get_imports();
  if (!(module instanceof WebAssembly.Module)) {
    module = new WebAssembly.Module(module);
  }
  const instance = new WebAssembly.Instance(module, imports);
  return __wbg_finalize_init(instance);
}
async function __wbg_init(module_or_path) {
  if (wasm !== void 0) return wasm;
  if (module_or_path !== void 0) {
    if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
      ({ module_or_path } = module_or_path);
    } else {
      console.warn("using deprecated parameters for the initialization function; pass a single object instead");
    }
  }
  if (module_or_path === void 0) {
    module_or_path = new URL();
  }
  const imports = __wbg_get_imports();
  if (typeof module_or_path === "string" || typeof Request === "function" && module_or_path instanceof Request || typeof URL === "function" && module_or_path instanceof URL) {
    module_or_path = fetch(module_or_path);
  }
  const { instance, module } = await __wbg_load(await module_or_path, imports);
  return __wbg_finalize_init(instance);
}
var fullGlue = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Dialect,
  Language,
  Lint: Lint2,
  Linter: Linter2,
  OrganizedGroup: OrganizedGroup2,
  Span: Span2,
  Suggestion: Suggestion2,
  SuggestionKind,
  default: __wbg_init,
  get_default_lint_config,
  get_default_lint_config_as_json,
  initSync,
  setup,
  to_title_case
});
const _PLazy = class _PLazy extends Promise {
  constructor(executor) {
    super((resolve) => {
      resolve();
    });
    __privateAdd(this, _executor);
    __privateAdd(this, _promise);
    __privateSet(this, _executor, executor);
  }
  static from(function_) {
    return new _PLazy((resolve) => {
      resolve(function_());
    });
  }
  static resolve(value) {
    return new _PLazy((resolve) => {
      resolve(value);
    });
  }
  static reject(error) {
    return new _PLazy((resolve, reject) => {
      reject(error);
    });
  }
  then(onFulfilled, onRejected) {
    __privateGet(this, _promise) ?? __privateSet(this, _promise, new Promise(__privateGet(this, _executor)));
    return __privateGet(this, _promise).then(onFulfilled, onRejected);
  }
  catch(onRejected) {
    __privateGet(this, _promise) ?? __privateSet(this, _promise, new Promise(__privateGet(this, _executor)));
    return __privateGet(this, _promise).catch(onRejected);
  }
  finally(onFinally) {
    __privateGet(this, _promise) ?? __privateSet(this, _promise, new Promise(__privateGet(this, _executor)));
    return __privateGet(this, _promise).finally(onFinally);
  }
};
_executor = new WeakMap();
_promise = new WeakMap();
let PLazy = _PLazy;
const copyProperty = (to, from, property, ignoreNonConfigurable) => {
  if (property === "length" || property === "prototype") {
    return;
  }
  if (property === "arguments" || property === "caller") {
    return;
  }
  const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
  const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
  if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
    return;
  }
  Object.defineProperty(to, property, fromDescriptor);
};
const canCopyProperty = function(toDescriptor, fromDescriptor) {
  return toDescriptor === void 0 || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
};
const changePrototype = (to, from) => {
  const fromPrototype = Object.getPrototypeOf(from);
  if (fromPrototype === Object.getPrototypeOf(to)) {
    return;
  }
  Object.setPrototypeOf(to, fromPrototype);
};
const wrappedToString = (withName, fromBody) => \`/* Wrapped \${withName}*/
\${fromBody}\`;
const toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
const toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
const changeToString = (to, from, name) => {
  const withName = name === "" ? "" : \`with \${name.trim()}() \`;
  const newToString = wrappedToString.bind(null, withName, from.toString());
  Object.defineProperty(newToString, "name", toStringName);
  Object.defineProperty(to, "toString", { ...toStringDescriptor, value: newToString });
};
function mimicFunction(to, from, { ignoreNonConfigurable = false } = {}) {
  const { name } = to;
  for (const property of Reflect.ownKeys(from)) {
    copyProperty(to, from, property, ignoreNonConfigurable);
  }
  changePrototype(to, from);
  changeToString(to, from, name);
  return to;
}
const cacheStore = /* @__PURE__ */ new WeakMap();
function pMemoize(fn, { cacheKey = ([firstArgument]) => firstArgument, cache = /* @__PURE__ */ new Map() } = {}) {
  const promiseCache = /* @__PURE__ */ new Map();
  const memoized = function(...arguments_) {
    const key = cacheKey(arguments_);
    if (promiseCache.has(key)) {
      return promiseCache.get(key);
    }
    const promise = (async () => {
      try {
        if (cache && await cache.has(key)) {
          return await cache.get(key);
        }
        const promise2 = fn.apply(this, arguments_);
        const result = await promise2;
        try {
          return result;
        } finally {
          if (cache) {
            await cache.set(key, result);
          }
        }
      } finally {
        promiseCache.delete(key);
      }
    })();
    promiseCache.set(key, promise);
    return promise;
  };
  mimicFunction(memoized, fn, {
    ignoreNonConfigurable: true
  });
  cacheStore.set(memoized, cache);
  return memoized;
}
function inferGlueFlavor(binary) {
  return binary.includes("harper_wasm_slim") ? "slim" : "full";
}
function loadGlue(glueFlavor) {
  if (glueFlavor === "slim") {
    return defaultGlue;
  }
  return fullGlue;
}
function getDefaultGlueBinary(binary, glueFlavor) {
  if (glueFlavor === "slim") {
    return binary;
  }
  if (binary.includes("harper_wasm_bg.wasm")) {
    return binary.replace("harper_wasm_bg.wasm", "harper_wasm_slim_bg.wasm");
  }
  return null;
}
function getInitInput(binary) {
  if (typeof process !== "undefined" && binary.startsWith("file://")) {
    return Promise.resolve().then(function() {
      return __viteBrowserExternal$1;
    }).then(
      (fs) => new Promise((resolve, reject) => {
        fs.readFile(new URL(binary).pathname, (err, data) => {
          if (err) reject(err);
          resolve(data);
        });
      })
    );
  }
  return binary;
}
async function loadBinaryUncached(binary, glueFlavor) {
  const exports = loadGlue(glueFlavor);
  const defaultGlueBinary = getDefaultGlueBinary(binary, glueFlavor);
  if (defaultGlueBinary != null) {
    try {
      await __wbg_init$1({ module_or_path: getInitInput(defaultGlueBinary) });
    } catch (err) {
      if (glueFlavor === "slim") {
        throw err;
      }
    }
  }
  await exports.default({ module_or_path: getInitInput(binary) });
  return exports;
}
const loadBinaryByFlavor = {
  full: pMemoize((binary) => loadBinaryUncached(binary, "full")),
  slim: pMemoize((binary) => loadBinaryUncached(binary, "slim"))
};
function loadBinary(binary, glueFlavor) {
  return loadBinaryByFlavor[glueFlavor](binary);
}
class BinaryModuleImpl {
  constructor() {
    __publicField(this, "url", "");
    __publicField(this, "glueFlavor", "full");
    __publicField(this, "inner", null);
  }
  /** Load a binary from a specified URL. This is the only recommended way to construct this type. */
  static create(url, glueFlavor) {
    const module = new SuperBinaryModule();
    module.url = url;
    module.glueFlavor = glueFlavor ?? inferGlueFlavor(typeof url === "string" ? url : url.href);
    module.inner = PLazy.from(
      () => loadBinary(typeof module.url === "string" ? module.url : module.url.href, module.glueFlavor)
    );
    return module;
  }
  async getDefaultLintConfigAsJSON() {
    const exported = await this.inner;
    return exported.get_default_lint_config_as_json();
  }
  async getDefaultLintConfig() {
    const exported = await this.inner;
    return exported.get_default_lint_config();
  }
  async toTitleCase(text) {
    const exported = await this.inner;
    return exported.to_title_case(text);
  }
  async setup() {
    const exported = await this.inner;
    exported.setup();
  }
}
class SuperBinaryModule extends BinaryModuleImpl {
  async createLinter(dialect) {
    const exported = await this.getBinaryModule();
    return exported.Linter.new(dialect ?? Dialect$1.American);
  }
  async getBinaryModule() {
    return await PLazy.from(
      () => loadBinary(typeof this.url === "string" ? this.url : this.url.href, this.glueFlavor)
    );
  }
}
function toWasmLanguage(language) {
  switch (language) {
    case "plaintext":
      return Language$1.Plain;
    case "typst":
      return Language$1.Typst;
    case "markdown":
    case void 0:
      return Language$1.Markdown;
    default:
      console.warn(\`Unknown Harper language '\${String(language)}'; using markdown.\`);
      return Language$1.Markdown;
  }
}
function toWasmLintArgs(text, options) {
  return [
    text,
    toWasmLanguage(options == null ? void 0 : options.language),
    (options == null ? void 0 : options.forceAllHeadings) ?? false,
    options == null ? void 0 : options.regex_mask,
    (options == null ? void 0 : options.dedup) ?? true,
    (options == null ? void 0 : options.isolateEnglish) ?? false
  ];
}
class LocalLinter {
  constructor(init) {
    __publicField(this, "binary");
    __publicField(this, "inner");
    __publicField(this, "disposed", false);
    this.binary = init.binary;
    this.binary.setup();
    this.inner = this.createInner(init.dialect);
  }
  createInner(dialect) {
    return PLazy.from(async () => {
      await this.binary.setup();
      return this.binary.createLinter(dialect);
    });
  }
  async setup() {
    await this.lint("", { language: "plaintext" });
    const exported = await this.exportIgnoredLints();
    await this.importIgnoredLints(exported);
  }
  async lint(text, options) {
    const inner = await this.inner;
    return inner.lint(...toWasmLintArgs(text, options));
  }
  async organizedLints(text, options) {
    const inner = await this.inner;
    const lintGroups = inner.organized_lints(...toWasmLintArgs(text, options));
    const output = {};
    for (const group of lintGroups) {
      output[group.group] = group.lints;
      group.free();
    }
    return output;
  }
  async applySuggestion(text, lint, suggestion) {
    const inner = await this.inner;
    return inner.apply_suggestion(text, lint, suggestion);
  }
  async isLikelyEnglish(text) {
    const inner = await this.inner;
    return inner.is_likely_english(text);
  }
  async isolateEnglish(text) {
    const inner = await this.inner;
    return inner.isolate_english(text);
  }
  async getLintConfig() {
    const inner = await this.inner;
    return inner.get_lint_config_as_object();
  }
  async getDefaultLintConfigAsJSON() {
    return await this.binary.getDefaultLintConfigAsJSON();
  }
  async getDefaultLintConfig() {
    return await this.binary.getDefaultLintConfig();
  }
  async getStructuredLintConfig() {
    const inner = await this.inner;
    return inner.get_structured_lint_config_as_object();
  }
  async getStructuredLintConfigJSON() {
    const inner = await this.inner;
    return inner.get_structured_lint_config_as_json();
  }
  async setLintConfig(config) {
    const inner = await this.inner;
    inner.set_lint_config_from_object(config);
  }
  async getLintConfigAsJSON() {
    const inner = await this.inner;
    return inner.get_lint_config_as_json();
  }
  async setLintConfigWithJSON(config) {
    const inner = await this.inner;
    inner.set_lint_config_from_json(config);
  }
  async toTitleCase(text) {
    return await this.binary.toTitleCase(text);
  }
  async getLintDescriptions() {
    const inner = await this.inner;
    return inner.get_lint_descriptions_as_object();
  }
  async getLintDescriptionsAsJSON() {
    const inner = await this.inner;
    return inner.get_lint_descriptions_as_json();
  }
  async getLintDescriptionsHTML() {
    const inner = await this.inner;
    return inner.get_lint_descriptions_html_as_object();
  }
  async getLintDescriptionsHTMLAsJSON() {
    const inner = await this.inner;
    return inner.get_lint_descriptions_html_as_json();
  }
  async ignoreLint(source, lint) {
    return await this.ignoreLints(source, [lint]);
  }
  async ignoreLints(source, lints) {
    const inner = await this.inner;
    inner.ignore_lints(source, lints);
  }
  async ignoreLintHash(hash) {
    const inner = await this.inner;
    inner.ignore_hashes(new BigUint64Array([hash]));
  }
  async exportIgnoredLints() {
    const inner = await this.inner;
    return inner.export_ignored_lints();
  }
  async importIgnoredLints(json) {
    const inner = await this.inner;
    inner.import_ignored_lints(json);
  }
  async contextHash(source, lint) {
    const inner = await this.inner;
    return inner.context_hash(source, lint);
  }
  async clearIgnoredLints() {
    const inner = await this.inner;
    inner.clear_ignored_lints();
  }
  async clearWords() {
    const inner = await this.inner;
    return inner.clear_words();
  }
  async importWords(words) {
    const inner = await this.inner;
    return inner.import_words(words);
  }
  async exportWords() {
    const inner = await this.inner;
    return inner.export_words();
  }
  async getDialect() {
    const inner = await this.inner;
    return inner.get_dialect();
  }
  async setDialect(dialect) {
    const inner = await this.inner;
    if (inner.get_dialect() !== dialect) {
      inner.free();
      this.inner = this.createInner(dialect);
    }
    return Promise.resolve();
  }
  async summarizeStats(start, end) {
    const inner = await this.inner;
    return inner.summarize_stats(start, end);
  }
  async generateStatsFile() {
    const inner = await this.inner;
    return inner.generate_stats_file();
  }
  async importStatsFile(statsFile) {
    const inner = await this.inner;
    return inner.import_stats_file(statsFile);
  }
  /**
   * Load a Weirpack from a Blob.
   *
   * Returns \`undefined\` if tests pass and rules are imported, otherwise returns
   * the Weirpack test failures.
   */
  async loadWeirpackFromBlob(blob) {
    const bytes = new Uint8Array(await blob.arrayBuffer());
    return this.loadWeirpackFromBytes(bytes);
  }
  /**
   * Load a Weirpack from a byte array.
   *
   * Returns \`undefined\` if tests pass and rules are imported, otherwise returns
   * the Weirpack test failures.
   */
  async loadWeirpackFromBytes(bytes) {
    const inner = await this.inner;
    const data = bytes instanceof Uint8Array ? bytes : Uint8Array.from(bytes);
    const result = inner.import_weirpack(data);
    return result;
  }
  async dispose() {
    if (this.disposed) {
      return;
    }
    this.disposed = true;
    const inner = await this.inner;
    inner.free();
  }
}
function assert(condition, message) {
  if (!condition) {
    throw new Error("Assertion failed");
  }
}
function isSerializedRequest(v) {
  return typeof v === "object" && v !== null && "procName" in v && "args" in v;
}
class Serializer {
  constructor(binary) {
    __publicField(this, "binary");
    this.binary = binary;
    this.binary.setup();
  }
  async serializeArg(arg) {
    var _a;
    const { Lint: Lint3, Span: Span3, Suggestion: Suggestion3 } = await this.binary.getBinaryModule();
    if (Array.isArray(arg)) {
      return {
        json: JSON.stringify(await Promise.all(arg.map((a) => this.serializeArg(a)))),
        type: "Array"
      };
    }
    const argType = typeof arg;
    switch (argType) {
      case "string":
      case "number":
      case "boolean":
      case "undefined":
        return { json: JSON.stringify(arg), type: argType };
      case "bigint":
        return { json: arg.toString(), type: argType };
    }
    if (arg.to_json !== void 0) {
      const json = arg.to_json();
      let type;
      const constructorName = (_a = arg.constructor) == null ? void 0 : _a.name;
      if (arg instanceof Lint3 || constructorName === "Lint") {
        type = "Lint";
      } else if (arg instanceof Suggestion3 || constructorName === "Suggestion") {
        type = "Suggestion";
      } else if (arg instanceof Span3 || constructorName === "Span") {
        type = "Span";
      }
      if (type === void 0) {
        throw new Error("Unhandled case: type undefined");
      }
      return { json, type };
    }
    if (argType == "object") {
      return {
        json: JSON.stringify(
          await Promise.all(
            Object.entries(arg).map(([key, value]) => this.serializeArg([key, value]))
          )
        ),
        type: "object"
      };
    }
    throw new Error(\`Unhandled case: \${arg}\`);
  }
  async serialize(req) {
    return {
      procName: req.procName,
      args: await Promise.all(req.args.map((arg) => this.serializeArg(arg)))
    };
  }
  async deserializeArg(requestArg) {
    const { Lint: Lint3, Span: Span3, Suggestion: Suggestion3 } = await this.binary.getBinaryModule();
    switch (requestArg.type) {
      case "bigint":
        return BigInt(requestArg.json);
      case "undefined":
        return void 0;
      case "boolean":
      case "number":
      case "string":
        return JSON.parse(requestArg.json);
      case "Suggestion":
        return Suggestion3.from_json(requestArg.json);
      case "Lint":
        return Lint3.from_json(requestArg.json);
      case "Span":
        return Span3.from_json(requestArg.json);
      case "Array": {
        const parsed = JSON.parse(requestArg.json);
        assert(Array.isArray(parsed));
        return await Promise.all(parsed.map((arg) => this.deserializeArg(arg)));
      }
      case "object": {
        const parsed = JSON.parse(requestArg.json);
        return Object.fromEntries(
          await Promise.all(parsed.map((val) => this.deserializeArg(val)))
        );
      }
      default:
        throw new Error(\`Unhandled case: \${requestArg.type}\`);
    }
  }
  async deserialize(request) {
    return {
      procName: request.procName,
      args: await Promise.all(request.args.map((arg) => this.deserializeArg(arg)))
    };
  }
}
self.postMessage("ready");
self.onmessage = (e) => {
  const [binaryUrl, dialect, glueFlavor] = e.data;
  if (typeof binaryUrl !== "string") {
    throw new TypeError(\`Expected binary to be a string of url but got \${typeof binaryUrl}.\`);
  }
  if (glueFlavor !== void 0 && glueFlavor !== "full" && glueFlavor !== "slim") {
    throw new TypeError(\`Expected glue flavor to be "full" or "slim" but got \${glueFlavor}.\`);
  }
  const binary = SuperBinaryModule.create(binaryUrl, glueFlavor);
  const serializer = new Serializer(binary);
  const linter = new LocalLinter({ binary, dialect });
  async function processRequest(v) {
    const { procName, args } = await serializer.deserialize(v);
    if (procName in linter) {
      const res = await linter[procName](...args);
      postMessage(await serializer.serializeArg(res));
    }
  }
  self.onmessage = (e2) => {
    if (isSerializedRequest(e2.data)) {
      processRequest(e2.data);
    }
  };
};
var __viteBrowserExternal = {};
var __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __viteBrowserExternal
});
`,Ho=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",Wf],{type:"text/javascript;charset=utf-8"});function r0(t){let e;try{if(e=Ho&&(self.URL||self.webkitURL).createObjectURL(Ho),!e)throw"";const n=new Worker(e,{type:"module",name:t==null?void 0:t.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Wf),{type:"module",name:t==null?void 0:t.name})}}class a0{constructor(e){ut(this,"binary"),ut(this,"serializer"),ut(this,"dialect"),ut(this,"worker"),ut(this,"requestQueue"),ut(this,"working",!0),ut(this,"disposed",!1),this.binary=e.binary,this.serializer=new n0(this.binary),this.dialect=e.dialect,this.worker=new r0,this.requestQueue=[],this.worker.onmessage=()=>{this.setupMainEventListeners(),this.worker.postMessage([this.binary.url,this.dialect,Ug(this.binary)]),this.working=!1,this.submitRemainingRequests()}}setupMainEventListeners(){this.worker.onmessage=e=>{const{resolve:n}=this.requestQueue.shift();this.serializer.deserializeArg(e.data).then(r=>{n(r),this.working=!1,this.submitRemainingRequests()})},this.worker.onmessageerror=e=>{const{reject:n}=this.requestQueue.shift();n(e.data),this.working=!1,this.submitRemainingRequests()}}setup(){return this.rpc("setup",[])}lint(e,n){return this.rpc("lint",[e,n])}organizedLints(e,n){return this.rpc("organizedLints",[e,n])}applySuggestion(e,n,r){return this.rpc("applySuggestion",[e,n,r])}isLikelyEnglish(e){return this.rpc("isLikelyEnglish",[e])}isolateEnglish(e){return this.rpc("isolateEnglish",[e])}async getLintConfig(){return JSON.parse(await this.getLintConfigAsJSON())}setLintConfig(e){return this.setLintConfigWithJSON(JSON.stringify(e))}getLintConfigAsJSON(){return this.rpc("getLintConfigAsJSON",[])}setLintConfigWithJSON(e){return this.rpc("setLintConfigWithJSON",[e])}toTitleCase(e){return this.rpc("toTitleCase",[e])}getLintDescriptionsAsJSON(){return this.rpc("getLintDescriptionsAsJSON",[])}async getLintDescriptions(){return JSON.parse(await this.getLintDescriptionsAsJSON())}getLintDescriptionsHTMLAsJSON(){return this.rpc("getLintDescriptionsHTMLAsJSON",[])}async getLintDescriptionsHTML(){return JSON.parse(await this.getLintDescriptionsHTMLAsJSON())}getDefaultLintConfigAsJSON(){return this.rpc("getDefaultLintConfigAsJSON",[])}async getDefaultLintConfig(){return JSON.parse(await this.getDefaultLintConfigAsJSON())}async getStructuredLintConfig(){return JSON.parse(await this.getStructuredLintConfigJSON())}getStructuredLintConfigJSON(){return this.rpc("getStructuredLintConfigJSON",[])}async dispose(){this.disposed||(await this.rpc("dispose",[]),this.disposed=!0,this.requestQueue=[],this.worker.terminate())}ignoreLint(e,n){return this.ignoreLints(e,[n])}ignoreLints(e,n){return this.rpc("ignoreLints",[e,n])}ignoreLintHash(e){return this.rpc("ignoreLintHash",[e])}exportIgnoredLints(){return this.rpc("exportIgnoredLints",[])}importIgnoredLints(e){return this.rpc("importIgnoredLints",[e])}contextHash(e,n){return this.rpc("contextHash",[e,n])}clearIgnoredLints(){return this.rpc("clearIgnoredLints",[])}clearWords(){return this.rpc("clearWords",[])}importWords(e){return this.rpc("importWords",[e])}exportWords(){return this.rpc("exportWords",[])}getDialect(){return this.rpc("getDialect",[])}setDialect(e){return this.rpc("setDialect",[e])}summarizeStats(e,n){return this.rpc("summarizeStats",[e,n])}generateStatsFile(){return this.rpc("generateStatsFile",[])}importStatsFile(e){return this.rpc("importStatsFile",[e])}async loadWeirpackFromBlob(e){const n=new Uint8Array(await e.arrayBuffer()),r=Array.from(n);return await this.rpc("loadWeirpackFromBytes",[r])}async loadWeirpackFromBytes(e){const n=Array.from(e);return await this.rpc("loadWeirpackFromBytes",[n])}async rpc(e,n){if(this.disposed)throw new Error("WorkerLinter has been disposed.");return new Promise((a,i)=>{this.requestQueue.push({resolve:a,reject:i,request:{procName:e,args:n}}),this.submitRemainingRequests()})}async submitRemainingRequests(){if(!this.working)if(this.working=!0,this.requestQueue.length>0){const{request:e}=this.requestQueue[0],n=await this.serializer.serialize(e);this.worker.postMessage(n)}else this.working=!1}}var Ee=Uint8Array,Qe=Uint16Array,Ds=Int32Array,ba=new Ee([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),wa=new Ee([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ns=new Ee([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Bf=function(t,e){for(var n=new Qe(31),r=0;r<31;++r)n[r]=e+=1<<t[r-1];for(var a=new Ds(n[30]),r=1;r<30;++r)for(var i=n[r];i<n[r+1];++i)a[i]=i-n[r]<<5|r;return{b:n,r:a}},Hf=Bf(ba,2),Vf=Hf.b,rs=Hf.r;Vf[28]=258,rs[258]=28;var Uf=Bf(wa,0),i0=Uf.b,Vo=Uf.r,as=new Qe(32768);for(var pe=0;pe<32768;++pe){var zt=(pe&43690)>>1|(pe&21845)<<1;zt=(zt&52428)>>2|(zt&13107)<<2,zt=(zt&61680)>>4|(zt&3855)<<4,as[pe]=((zt&65280)>>8|(zt&255)<<8)>>1}var Ct=function(t,e,n){for(var r=t.length,a=0,i=new Qe(e);a<r;++a)t[a]&&++i[t[a]-1];var s=new Qe(e);for(a=1;a<e;++a)s[a]=s[a-1]+i[a-1]<<1;var o;if(n){o=new Qe(1<<e);var l=15-e;for(a=0;a<r;++a)if(t[a])for(var f=a<<4|t[a],c=e-t[a],u=s[t[a]-1]++<<c,_=u|(1<<c)-1;u<=_;++u)o[as[u]>>l]=f}else for(o=new Qe(r),a=0;a<r;++a)t[a]&&(o[a]=as[s[t[a]-1]++]>>15-t[a]);return o},Vt=new Ee(288);for(var pe=0;pe<144;++pe)Vt[pe]=8;for(var pe=144;pe<256;++pe)Vt[pe]=9;for(var pe=256;pe<280;++pe)Vt[pe]=7;for(var pe=280;pe<288;++pe)Vt[pe]=8;var _r=new Ee(32);for(var pe=0;pe<32;++pe)_r[pe]=5;var s0=Ct(Vt,9,0),o0=Ct(Vt,9,1),l0=Ct(_r,5,0),c0=Ct(_r,5,1),Ha=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},ct=function(t,e,n){var r=e/8|0;return(t[r]|t[r+1]<<8)>>(e&7)&n},Va=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},Ws=function(t){return(t+7)/8|0},br=function(t,e,n){return(e==null||e<0)&&(e=0),(n==null||n>t.length)&&(n=t.length),new Ee(t.subarray(e,n))},f0=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],He=function(t,e,n){var r=new Error(e||f0[t]);if(r.code=t,Error.captureStackTrace&&Error.captureStackTrace(r,He),!n)throw r;return r},u0=function(t,e,n,r){var a=t.length,i=r?r.length:0;if(!a||e.f&&!e.l)return n||new Ee(0);var s=!n,o=s||e.i!=2;s&&(n=new Ee(a*3));var l=function(Xe){var Re=n.length;if(Xe>Re){var Ge=new Ee(Math.max(Re*2,Xe));Ge.set(n),n=Ge}},f=e.f||0,c=e.p||0,u=e.b||0,_=e.l,d=e.d,g=e.m,m=e.n,p=a*8;do{if(!_){f=ct(t,c,1);var v=ct(t,c+1,3);if(c+=3,v)if(v==1)_=o0,d=c0,g=9,m=5;else if(v==2){var S=ct(t,c,31)+257,E=ct(t,c+10,15)+4,A=S+ct(t,c+5,31)+1;c+=14;for(var k=new Ee(A),C=new Ee(19),L=0;L<E;++L)C[ns[L]]=ct(t,c+L*3,7);c+=E*3;for(var $=Ha(C),z=(1<<$)-1,G=Ct(C,$,1),L=0;L<A;){var N=G[ct(t,c,z)];c+=N&15;var h=N>>4;if(h<16)k[L++]=h;else{var R=0,j=0;for(h==16?(j=3+ct(t,c,3),c+=2,R=k[L-1]):h==17?(j=3+ct(t,c,7),c+=3):h==18&&(j=11+ct(t,c,127),c+=7);j--;)k[L++]=R}}var D=k.subarray(0,S),V=k.subarray(S);g=Ha(D),m=Ha(V),_=Ct(D,g,1),d=Ct(V,m,1)}else He(1);else{var h=Ws(c)+4,x=t[h-4]|t[h-3]<<8,M=h+x;if(M>a){He(0);break}o&&l(u+x),n.set(t.subarray(h,M),u),e.b=u+=x,e.p=c=M*8,e.f=f;continue}if(c>p){He(0);break}}o&&l(u+131072);for(var Y=(1<<g)-1,ve=(1<<m)-1,fe=c;;fe=c){var R=_[Va(t,c)&Y],ue=R>>4;if(c+=R&15,c>p){He(0);break}if(R||He(2),ue<256)n[u++]=ue;else if(ue==256){fe=c,_=null;break}else{var se=ue-254;if(ue>264){var L=ue-257,U=ba[L];se=ct(t,c,(1<<U)-1)+Vf[L],c+=U}var q=d[Va(t,c)&ve],te=q>>4;q||He(3),c+=q&15;var V=i0[te];if(te>3){var U=wa[te];V+=Va(t,c)&(1<<U)-1,c+=U}if(c>p){He(0);break}o&&l(u+131072);var Z=u+se;if(u<V){var xe=i-V,Ce=Math.min(V,Z);for(xe+u<0&&He(3);u<Ce;++u)n[u]=r[xe+u]}for(;u<Z;++u)n[u]=n[u-V]}}e.l=_,e.p=fe,e.b=u,e.f=f,_&&(f=1,e.m=g,e.d=d,e.n=m)}while(!f);return u!=n.length&&s?br(n,0,u):n.subarray(0,u)},$t=function(t,e,n){n<<=e&7;var r=e/8|0;t[r]|=n,t[r+1]|=n>>8},Un=function(t,e,n){n<<=e&7;var r=e/8|0;t[r]|=n,t[r+1]|=n>>8,t[r+2]|=n>>16},Ua=function(t,e){for(var n=[],r=0;r<t.length;++r)t[r]&&n.push({s:r,f:t[r]});var a=n.length,i=n.slice();if(!a)return{t:Gf,l:0};if(a==1){var s=new Ee(n[0].s+1);return s[n[0].s]=1,{t:s,l:1}}n.sort(function(S,E){return S.f-E.f}),n.push({s:-1,f:25001});var o=n[0],l=n[1],f=0,c=1,u=2;for(n[0]={s:-1,f:o.f+l.f,l:o,r:l};c!=a-1;)o=n[n[f].f<n[u].f?f++:u++],l=n[f!=c&&n[f].f<n[u].f?f++:u++],n[c++]={s:-1,f:o.f+l.f,l:o,r:l};for(var _=i[0].s,r=1;r<a;++r)i[r].s>_&&(_=i[r].s);var d=new Qe(_+1),g=is(n[c-1],d,0);if(g>e){var r=0,m=0,p=g-e,v=1<<p;for(i.sort(function(E,A){return d[A.s]-d[E.s]||E.f-A.f});r<a;++r){var h=i[r].s;if(d[h]>e)m+=v-(1<<g-d[h]),d[h]=e;else break}for(m>>=p;m>0;){var x=i[r].s;d[x]<e?m-=1<<e-d[x]++-1:++r}for(;r>=0&&m;--r){var M=i[r].s;d[M]==e&&(--d[M],++m)}g=e}return{t:new Ee(d),l:g}},is=function(t,e,n){return t.s==-1?Math.max(is(t.l,e,n+1),is(t.r,e,n+1)):e[t.s]=n},Uo=function(t){for(var e=t.length;e&&!t[--e];);for(var n=new Qe(++e),r=0,a=t[0],i=1,s=function(l){n[r++]=l},o=1;o<=e;++o)if(t[o]==a&&o!=e)++i;else{if(!a&&i>2){for(;i>138;i-=138)s(32754);i>2&&(s(i>10?i-11<<5|28690:i-3<<5|12305),i=0)}else if(i>3){for(s(a),--i;i>6;i-=6)s(8304);i>2&&(s(i-3<<5|8208),i=0)}for(;i--;)s(a);i=1,a=t[o]}return{c:n.subarray(0,r),n:e}},qn=function(t,e){for(var n=0,r=0;r<e.length;++r)n+=t[r]*e[r];return n},qf=function(t,e,n){var r=n.length,a=Ws(e+2);t[a]=r&255,t[a+1]=r>>8,t[a+2]=t[a]^255,t[a+3]=t[a+1]^255;for(var i=0;i<r;++i)t[a+i+4]=n[i];return(a+4+r)*8},qo=function(t,e,n,r,a,i,s,o,l,f,c){$t(e,c++,n),++a[256];for(var u=Ua(a,15),_=u.t,d=u.l,g=Ua(i,15),m=g.t,p=g.l,v=Uo(_),h=v.c,x=v.n,M=Uo(m),S=M.c,E=M.n,A=new Qe(19),k=0;k<h.length;++k)++A[h[k]&31];for(var k=0;k<S.length;++k)++A[S[k]&31];for(var C=Ua(A,7),L=C.t,$=C.l,z=19;z>4&&!L[ns[z-1]];--z);var G=f+5<<3,N=qn(a,Vt)+qn(i,_r)+s,R=qn(a,_)+qn(i,m)+s+14+3*z+qn(A,L)+2*A[16]+3*A[17]+7*A[18];if(l>=0&&G<=N&&G<=R)return qf(e,c,t.subarray(l,l+f));var j,D,V,Y;if($t(e,c,1+(R<N)),c+=2,R<N){j=Ct(_,d,0),D=_,V=Ct(m,p,0),Y=m;var ve=Ct(L,$,0);$t(e,c,x-257),$t(e,c+5,E-1),$t(e,c+10,z-4),c+=14;for(var k=0;k<z;++k)$t(e,c+3*k,L[ns[k]]);c+=3*z;for(var fe=[h,S],ue=0;ue<2;++ue)for(var se=fe[ue],k=0;k<se.length;++k){var U=se[k]&31;$t(e,c,ve[U]),c+=L[U],U>15&&($t(e,c,se[k]>>5&127),c+=se[k]>>12)}}else j=s0,D=Vt,V=l0,Y=_r;for(var k=0;k<o;++k){var q=r[k];if(q>255){var U=q>>18&31;Un(e,c,j[U+257]),c+=D[U+257],U>7&&($t(e,c,q>>23&31),c+=ba[U]);var te=q&31;Un(e,c,V[te]),c+=Y[te],te>3&&(Un(e,c,q>>5&8191),c+=wa[te])}else Un(e,c,j[q]),c+=D[q]}return Un(e,c,j[256]),c+D[256]},_0=new Ds([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Gf=new Ee(0),d0=function(t,e,n,r,a,i){var s=i.z||t.length,o=new Ee(r+s+5*(1+Math.ceil(s/7e3))+a),l=o.subarray(r,o.length-a),f=i.l,c=(i.r||0)&7;if(e){c&&(l[0]=i.r>>3);for(var u=_0[e-1],_=u>>13,d=u&8191,g=(1<<n)-1,m=i.p||new Qe(32768),p=i.h||new Qe(g+1),v=Math.ceil(n/3),h=2*v,x=function(O){return(t[O]^t[O+1]<<v^t[O+2]<<h)&g},M=new Ds(25e3),S=new Qe(288),E=new Qe(32),A=0,k=0,C=i.i||0,L=0,$=i.w||0,z=0;C+2<s;++C){var G=x(C),N=C&32767,R=p[G];if(m[N]=R,p[G]=N,$<=C){var j=s-C;if((A>7e3||L>24576)&&(j>423||!f)){c=qo(t,l,0,M,S,E,k,L,z,C-z,c),L=A=k=0,z=C;for(var D=0;D<286;++D)S[D]=0;for(var D=0;D<30;++D)E[D]=0}var V=2,Y=0,ve=d,fe=N-R&32767;if(j>2&&G==x(C-fe))for(var ue=Math.min(_,j)-1,se=Math.min(32767,C),U=Math.min(258,j);fe<=se&&--ve&&N!=R;){if(t[C+V]==t[C+V-fe]){for(var q=0;q<U&&t[C+q]==t[C+q-fe];++q);if(q>V){if(V=q,Y=fe,q>ue)break;for(var te=Math.min(fe,q-2),Z=0,D=0;D<te;++D){var xe=C-fe+D&32767,Ce=m[xe],Xe=xe-Ce&32767;Xe>Z&&(Z=Xe,R=xe)}}}N=R,R=m[N],fe+=N-R&32767}if(Y){M[L++]=268435456|rs[V]<<18|Vo[Y];var Re=rs[V]&31,Ge=Vo[Y]&31;k+=ba[Re]+wa[Ge],++S[257+Re],++E[Ge],$=C+V,++A}else M[L++]=t[C],++S[t[C]]}}for(C=Math.max(C,$);C<s;++C)M[L++]=t[C],++S[t[C]];c=qo(t,l,f,M,S,E,k,L,z,C-z,c),f||(i.r=c&7|l[c/8|0]<<3,c-=7,i.h=p,i.p=m,i.i=C,i.w=$)}else{for(var C=i.w||0;C<s+f;C+=65535){var lt=C+65535;lt>=s&&(l[c/8|0]=f,lt=s),c=qf(l,c+1,t.subarray(C,lt))}i.i=s}return br(o,0,r+Ws(c)+a)},g0=(function(){for(var t=new Int32Array(256),e=0;e<256;++e){for(var n=e,r=9;--r;)n=(n&1&&-306674912)^n>>>1;t[e]=n}return t})(),p0=function(){var t=-1;return{p:function(e){for(var n=t,r=0;r<e.length;++r)n=g0[n&255^e[r]]^n>>>8;t=n},d:function(){return~t}}},m0=function(t,e,n,r,a){if(!a&&(a={l:1},e.dictionary)){var i=e.dictionary.subarray(-32768),s=new Ee(i.length+t.length);s.set(i),s.set(t,i.length),t=s,a.w=i.length}return d0(t,e.level==null?6:e.level,e.mem==null?a.l?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):20:12+e.mem,n,r,a)},Yf=function(t,e){var n={};for(var r in t)n[r]=t[r];for(var r in e)n[r]=e[r];return n},vt=function(t,e){return t[e]|t[e+1]<<8},_t=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},qa=function(t,e){return _t(t,e)+_t(t,e+4)*4294967296},Fe=function(t,e,n){for(;n;++e)t[e]=n,n>>>=8};function h0(t,e){return m0(t,e||{},0,0)}function b0(t,e){return u0(t,{i:2},e&&e.out,e&&e.dictionary)}var Jf=function(t,e,n,r){for(var a in t){var i=t[a],s=e+a,o=r;Array.isArray(i)&&(o=Yf(r,i[1]),i=i[0]),i instanceof Ee?n[s]=[i,o]:(n[s+="/"]=[new Ee(0),o],Jf(i,s,n,r))}},Go=typeof TextEncoder<"u"&&new TextEncoder,ss=typeof TextDecoder<"u"&&new TextDecoder,w0=0;try{ss.decode(Gf,{stream:!0}),w0=1}catch{}var y0=function(t){for(var e="",n=0;;){var r=t[n++],a=(r>127)+(r>223)+(r>239);if(n+a>t.length)return{s:e,r:br(t,n-1)};a?a==3?(r=((r&15)<<18|(t[n++]&63)<<12|(t[n++]&63)<<6|t[n++]&63)-65536,e+=String.fromCharCode(55296|r>>10,56320|r&1023)):a&1?e+=String.fromCharCode((r&31)<<6|t[n++]&63):e+=String.fromCharCode((r&15)<<12|(t[n++]&63)<<6|t[n++]&63):e+=String.fromCharCode(r)}};function os(t,e){var n;if(Go)return Go.encode(t);for(var r=t.length,a=new Ee(t.length+(t.length>>1)),i=0,s=function(f){a[i++]=f},n=0;n<r;++n){if(i+5>a.length){var o=new Ee(i+8+(r-n<<1));o.set(a),a=o}var l=t.charCodeAt(n);l<128||e?s(l):l<2048?(s(192|l>>6),s(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|t.charCodeAt(++n)&1023,s(240|l>>18),s(128|l>>12&63),s(128|l>>6&63),s(128|l&63)):(s(224|l>>12),s(128|l>>6&63),s(128|l&63))}return br(a,0,i)}function ls(t,e){if(e){for(var n="",r=0;r<t.length;r+=16384)n+=String.fromCharCode.apply(null,t.subarray(r,r+16384));return n}else{if(ss)return ss.decode(t);var a=y0(t),i=a.s,n=a.r;return n.length&&He(8),i}}var v0=function(t,e){return e+30+vt(t,e+26)+vt(t,e+28)},x0=function(t,e,n){var r=vt(t,e+28),a=ls(t.subarray(e+46,e+46+r),!(vt(t,e+8)&2048)),i=e+46+r,s=_t(t,e+20),o=n&&s==4294967295?S0(t,i):[s,_t(t,e+24),_t(t,e+42)],l=o[0],f=o[1],c=o[2];return[vt(t,e+10),l,f,a,i+vt(t,e+30)+vt(t,e+32),c]},S0=function(t,e){for(;vt(t,e)!=1;e+=4+vt(t,e+2));return[qa(t,e+12),qa(t,e+4),qa(t,e+20)]},cs=function(t){var e=0;if(t)for(var n in t){var r=t[n].length;r>65535&&He(9),e+=r+4}return e},Yo=function(t,e,n,r,a,i,s,o){var l=r.length,f=n.extra,c=o&&o.length,u=cs(f);Fe(t,e,s!=null?33639248:67324752),e+=4,s!=null&&(t[e++]=20,t[e++]=n.os),t[e]=20,e+=2,t[e++]=n.flag<<1|(i<0&&8),t[e++]=a&&8,t[e++]=n.compression&255,t[e++]=n.compression>>8;var _=new Date(n.mtime==null?Date.now():n.mtime),d=_.getFullYear()-1980;if((d<0||d>119)&&He(10),Fe(t,e,d<<25|_.getMonth()+1<<21|_.getDate()<<16|_.getHours()<<11|_.getMinutes()<<5|_.getSeconds()>>1),e+=4,i!=-1&&(Fe(t,e,n.crc),Fe(t,e+4,i<0?-i-2:i),Fe(t,e+8,n.size)),Fe(t,e+12,l),Fe(t,e+14,u),e+=16,s!=null&&(Fe(t,e,c),Fe(t,e+6,n.attrs),Fe(t,e+10,s),e+=14),t.set(r,e),e+=l,u)for(var g in f){var m=f[g],p=m.length;Fe(t,e,+g),Fe(t,e+2,p),t.set(m,e+4),e+=4+p}return c&&(t.set(o,e),e+=c),e},E0=function(t,e,n,r,a){Fe(t,e,101010256),Fe(t,e+8,n),Fe(t,e+10,n),Fe(t,e+12,r),Fe(t,e+16,a)};function M0(t,e){e||(e={});var n={},r=[];Jf(t,"",n,e);var a=0,i=0;for(var s in n){var o=n[s],l=o[0],f=o[1],c=f.level==0?0:8,u=os(s),_=u.length,d=f.comment,g=d&&os(d),m=g&&g.length,p=cs(f.extra);_>65535&&He(11);var v=c?h0(l,f):l,h=v.length,x=p0();x.p(l),r.push(Yf(f,{size:l.length,crc:x.d(),c:v,f:u,m:g,u:_!=s.length||g&&d.length!=m,o:a,compression:c})),a+=30+_+p+h,i+=76+2*(_+p)+(m||0)+h}for(var M=new Ee(i+22),S=a,E=i-a,A=0;A<r.length;++A){var u=r[A];Yo(M,u.o,u,u.f,u.u,u.c.length);var k=30+u.f.length+cs(u.extra);M.set(u.c,u.o+k),Yo(M,a,u,u.f,u.u,u.c.length,u.o,u.m),a+=16+k+(u.m?u.m.length:0)}return E0(M,a,r.length,E,S),M}function A0(t,e){for(var n={},r=t.length-22;_t(t,r)!=101010256;--r)(!r||t.length-r>65558)&&He(13);var a=vt(t,r+8);if(!a)return{};var i=_t(t,r+16),s=i==4294967295||a==65535;if(s){var o=_t(t,r-12);s=_t(t,o)==101075792,s&&(a=_t(t,o+32),i=_t(t,o+48))}for(var l=0;l<a;++l){var f=x0(t,i,s),c=f[0],u=f[1],_=f[2],d=f[3],g=f[4],m=f[5],p=v0(t,m);i=g,c?c==8?n[d]=b0(t.subarray(p,p+u),{out:new Ee(_)}):He(14,"unknown compression type "+c):n[d]=br(t,p,p+u)}return n}const Xr="manifest.json";function C0(t){if(!t.has(Xr))throw new Error("Weirpack is missing manifest.json");const e={};for(const[n,r]of t.entries())e[n]=os(r);return M0(e,{level:6})}function k0(t){const e=A0(t),n=e[Xr];if(!n)throw new Error("Weirpack is missing manifest.json");const r=ls(n),a=JSON.parse(r),i=new Map;i.set(Xr,r);const s=Object.keys(e);s.sort();for(const o of s){const l=e[o];!l||o===Xr||i.set(o,ls(l))}return{manifest:a,files:i}}const L0=Object.freeze(Object.defineProperty({__proto__:null,Dialect:Ps,LocalLinter:e0,SuggestionKind:qe,WorkerLinter:a0,createBinaryModuleFromUrl:Jg,packWeirpackFiles:C0,unpackWeirpackBytes:k0},Symbol.toStringTag,{value:"Module"}));function T0(t){const e=[];for(let n=0;n<t.length;n++){const r=t[n];e.push(r)}return e}function Bs(t){const e=[],n=T0(t.childNodes);if(n.length===0)return[t];for(const r of n)Bs(r).forEach(i=>{e.push(i)});return e}function Xf(t,e){const n=Bs(t),r=document.createRange();let a=0,i=!1;for(let s=0;s<n.length;s++){const o=n[s];if(o.nodeName==="BR"){a+=1;continue}const l=o.textContent??"";if(a+l.length>e.start&&!i&&(r.setStart(o,e.start-a),i=!0),i&&a+l.length>=e.end)return r.setEnd(o,e.end-a),r;a+=(l==null?void 0:l.length)??0}return null}const Ga=typeof document<"u"?document.createRange():null;function $0(t){if(!(t instanceof Element))return!1;const e=t.tagName.toLowerCase();if(/^h[1-6]$/.test(e))return!0;const n=t.getAttribute("role");return(n==null?void 0:n.toLowerCase())==="heading"}function R0(t){try{if(!t||!t.ownerDocument)return!1;if(t instanceof Element){if(!t.isConnected)return!1;if(t.getAttribute("data-harper-google-docs-target")==="true"){const s=t.closest(".kix-appview-editor");return s?Fa(s.getBoundingClientRect()):!1}const r=t.getBoundingClientRect();if(!Fa(r))return!1;const a=t.checkVisibility;if(typeof a=="function")return a.call(t);const i=getComputedStyle(t);return!(i.display==="none"||i.visibility==="hidden"||i.opacity==="0")}if(!Ga)return!1;const e=t.parentElement;if(e&&!e.isConnected)return!1;Ga.selectNode(t);const n=Ga.getBoundingClientRect();return Fa(n)}catch{return!1}}const mt=class mt{constructor(e,n,r){Q(this,"field");Q(this,"startOffset");Q(this,"endOffset");Q(this,"arena");if(!(e instanceof HTMLTextAreaElement||e instanceof HTMLInputElement))throw new Error("TextFieldRange expects an HTMLTextAreaElement or HTMLInputElement");this.field=e,this.startOffset=n,this.endOffset=r,this.arena=mt.ensureArena(this.field),this.arena.refs++}static ensureArena(e){const n=mt.arenas.get(e);if(n!=null&&n.mirror.isConnected)return n;if(n){try{n.mirror.remove()}catch{}mt.arenas.delete(e)}const r=document.createElement("div");r.className="harper-textfield-mirror";const a=window.getComputedStyle(e);["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","lineHeight","textTransform","paddingTop","paddingRight","paddingBottom","paddingLeft","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","boxSizing","overflowX","overflowY"].forEach(l=>{r.style[l]=a[l]}),e instanceof HTMLTextAreaElement&&(r.style.overflowX="auto",r.style.overflowY="auto"),mt.positionMirror(r,e),Object.assign(r.style,{boxSizing:"border-box",whiteSpace:e.tagName.toLowerCase()==="textarea"?"pre-wrap":"pre",wordWrap:"break-word",visibility:"hidden",position:"absolute",pointerEvents:"none"});const s=document.createTextNode("");r.appendChild(s),s.nodeValue=e.value,document.body.appendChild(r),r.scrollTop=e.scrollTop,r.scrollLeft=e.scrollLeft;const o={mirror:r,text:s,refs:0};return mt.arenas.set(e,o),o}static positionMirror(e,n){const r=n.getBoundingClientRect(),a=window.scrollY||document.documentElement.scrollTop,i=window.scrollX||document.documentElement.scrollLeft;Object.assign(e.style,{top:`${r.top+a}px`,left:`${r.left+i}px`,width:`${r.width}px`,height:`${r.height}px`})}syncMirror(){this.arena.text.nodeValue=this.field.value,this.arena.mirror.scrollTop=this.field.scrollTop,this.arena.mirror.scrollLeft=this.field.scrollLeft,mt.positionMirror(this.arena.mirror,this.field)}getClientRects(){this.syncMirror();const e=document.createRange();e.setStart(this.arena.text,this.startOffset),e.setEnd(this.arena.text,this.endOffset);let n=Array.from(e.getClientRects());const r=$n(this.field.getBoundingClientRect());return n=n.filter(a=>{const i=$n(a);return Ef(i,r)}),n}getBoundingClientRect(){return this.syncMirror(),this.arena.mirror.getBoundingClientRect()}detach(){var e;if(this.arena.refs=Math.max(0,this.arena.refs-1),!document.contains(this.field)){try{(e=this.arena.mirror.parentNode)==null||e.removeChild(this.arena.mirror)}catch{}mt.arenas.delete(this.field)}}};Q(mt,"arenas",new WeakMap);let oa=mt;function rt(t,e){let n=t;for(;n!=null;){if(e(n))return n;n=n.parentElement}return null}function j0(t){return rt(t,e=>!gt(e)&&e.closest("article, main, section")!=null)}function Kf(t){return rt(t,e=>!gt(e)&&e.classList.contains("public-DraftEditor-content"))}function O0(t){return rt(t,e=>!gt(e)&&e.classList.contains("ProseMirror"))}function Hs(t){return rt(t,e=>!gt(e)&&e.classList.contains("cm-editor"))}function F0(){return document.getElementById("notion-app")}function Zf(t){return rt(t,e=>!gt(e)&&e.getAttribute("data-slate-editor")==="true")}function Qf(t){return rt(t,e=>!gt(e)&&e.getAttribute("data-lexical-editor")==="true")}function I0(t){return rt(t,e=>!gt(e)&&e.classList.contains("ck-editor__editable"))}function N0(t){return rt(t,e=>e.nodeName=="MAIN"&&location.hostname=="medium.com")}function P0(t){return rt(t,e=>!gt(e)&&e.nodeName=="SHREDDIT-COMPOSER")}function z0(t){return rt(t,e=>!gt(e)&&e.classList.contains("ql-container"))}function D0(t){return rt(t,e=>!gt(e)&&(e.id==="p2"||e.classList.contains("p2")))}function W0(t){return rt(t,e=>!gt(e)&&(e.id==="editor"||e.classList.contains("editor-styles-wrapper")))}function B0(t){return rt(t,e=>e.nodeName=="TRIX-EDITOR")}function eu(){const t=document.activeElement;if(t instanceof HTMLTextAreaElement||t instanceof HTMLInputElement&&t.type==="text"){if(t.selectionStart==null||t.selectionEnd==null||t.selectionStart!==t.selectionEnd)return null;const r=t.selectionStart,a=new oa(t,r,r),i=a.getClientRects();return a.detach(),i.length?$n(i[0]):null}const e=window.getSelection();if(!e||e.rangeCount===0)return null;const n=e.getRangeAt(0);return n.collapsed?$n(n.getBoundingClientRect()):null}function fs(t){return t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement}function gt(t){return t.nodeType===Node.TEXT_NODE}let $r;function H0(){return $r!==void 0||($r=document.createElement("canvas").getContext("2d")),$r}function V0(t,e,n,r){const a=t.getBoundingClientRect();if(a.width<=0||a.height<=0)return null;const i=Math.max(0,Math.min(n,e.length)),s=Math.max(i,Math.min(r,e.length));if(i===s)return null;const o=H0();if(o==null)return a;const l=getComputedStyle(t),f=l.font&&l.font!==""?l.font:`${l.fontStyle} ${l.fontVariant} ${l.fontWeight} ${l.fontSize} / ${l.lineHeight} ${l.fontFamily}`;o.font=f;const c=e.slice(0,i),u=e.slice(i,s),_=o.measureText(c).width,d=Math.max(1,o.measureText(u).width),g=Number.parseFloat(l.letterSpacing),m=Number.isFinite(g)?g:0,p=_+Math.max(0,i-1)*m,v=d+Math.max(0,s-i-1)*m,h=a.x+Math.min(a.width,Math.max(0,p)),x=Math.max(1,Math.min(a.right-h,v));return new DOMRect(h,a.y,x,a.height)}function Jo(t,e){const n=Math.min(t.length,e.length);let r=0;for(;r<n&&t.charCodeAt(r)===e.charCodeAt(r);)r+=1;return r}function Xo(t,e){const n=Math.min(t.length,e.length);let r=0;for(;r<n&&t.charCodeAt(t.length-1-r)===e.charCodeAt(e.length-1-r);)r+=1;return r}function Ko(t,e){if(!t||!e)return 0;const n=new Array(e.length+1).fill(0),r=new Array(e.length+1).fill(0);for(let a=1;a<=t.length;a+=1){r[0]=0;for(let i=1;i<=e.length;i+=1)t.charCodeAt(a-1)===e.charCodeAt(i-1)?r[i]=n[i-1]+1:r[i]=Math.max(n[i],r[i-1]);for(let i=0;i<=e.length;i+=1)n[i]=r[i]}return n[e.length]}function U0(t,e){const n=Math.max(0,Math.min(e.span.start,e.source.length)),r=Math.max(n,Math.min(e.span.end,e.source.length)),a=e.source.slice(n,r);if(a.length===0)return null;if(t.slice(n,r)===a)return{start:n,end:r};const s=r-n,o=t.length-e.source.length,l=Math.max(0,n+o);for(let p=-12;p<=12;p+=1){const v=l+p;if(v<0)continue;const h=v+s;if(!(h>t.length)&&t.slice(v,h)===a)return{start:v,end:h}}const f=64,c=e.source.slice(Math.max(0,n-f),n),u=e.source.slice(r,Math.min(e.source.length,r+f)),_=Math.max(c.length*2,c.length+64),d=Math.max(u.length*2,u.length+64),g=[];let m=0;for(;m<=t.length;){const p=t.indexOf(a,m);if(p<0)break;const v=p+a.length,h=t.slice(Math.max(0,p-_),p),x=t.slice(v,Math.min(t.length,v+d));let M=0;M+=Ko(c,h)*8,M+=Ko(u,x)*8,M+=Jo(c,h)*4,M+=Xo(c,h)*4,M+=Jo(u,x)*4,M+=Xo(u,x)*4,M-=Math.abs(p-l)/1e3,g.push({start:p,end:v,score:M}),m=p+1}return g.length===0?null:(g.sort((p,v)=>v.score-p.score),{start:g[0].start,end:g[0].end})}function q0(t){return t.getAttribute("data-harper-google-docs-target")==="true"}function G0(t,e){var i,s;const n=Bs(t),r=[];let a=0;for(const o of n){const l=o.textContent??"",f=l.length,c=a,u=c+f;a=u;const _=Math.max(0,e.start-c),d=Math.min(f,e.end-c);if(f===0||u<=e.start||c>=e.end)continue;const g=Y0(o,t);if(g!=null){const h=V0(g,l,_,d);if(h!=null&&h.width>0&&h.height>0){r.push(h);continue}}const m=document.createRange();m.setStart(o,_),m.setEnd(o,d);const p=Array.from(m.getClientRects()).filter(h=>h.width>0&&h.height>0);if(p.length>0){r.push(...p),(i=m.detach)==null||i.call(m);continue}const v=g==null?void 0:g.getBoundingClientRect();v!=null&&v.width>0&&v.height>0&&r.push(v),(s=m.detach)==null||s.call(m)}return r}function Y0(t,e){let n=t.parentElement;for(;n!=null&&n!==e;){if(getComputedStyle(n).position==="absolute")return n;n=n.parentElement}return null}function J0(t,e,n){try{const r=Math.max(0,Math.min(t.start,n.length)),a=Math.max(r,Math.min(t.end,n.length)),i=n.slice(r,a),s=64,o=n.slice(Math.max(0,r-s),r),l=n.slice(a,Math.min(n.length,a+s)),f={start:t.start,end:t.end,replacementText:e,expectedText:i,beforeContext:o,afterContext:l},c=window.__harperGoogleDocsBridgeClient;c&&typeof c.replaceText=="function"&&Promise.resolve(c.replaceText(f.start,f.end,f.replacementText,f.expectedText,f.beforeContext,f.afterContext))}catch{}}const tu=".kix-appview-editor",X0="data-harper-gdocs-syncing";function K0(t,e,n,r){if(!q0(t))return null;try{const a=document.querySelector(tu),i=t.textContent??"",s=U0(i,e);if(!a||s==null)return[];const o=G0(t,s),l=$n(a.getBoundingClientRect());if(o.length===0)return[];const f=[];for(const c of o){if(!Mf(c,l))continue;const u=Cf(c,l);f.push({x:u.x,y:u.y,width:u.width,height:u.height,lint:e,source:a,rule:n,applySuggestion:_=>{const d=tp(_,s,i);J0(s,d,i)},ignoreLint:r.ignoreLint?()=>r.ignoreLint(e.context_hash):void 0})}return f}catch{return[]}}function wr(t){return t instanceof HTMLElement&&(t.classList.contains("kix-appview-editor")||t.closest(tu)!=null)}function Zo(t){return wr(t)&&t.getAttribute(X0)==="true"}function Z0(t){return wr(t)?t:null}function Q0(t){if(!wr(t))return null;const e=t.getBoundingClientRect();return{x:e.x-t.scrollLeft,y:e.y-t.scrollTop}}function ep(t,e){return wr(e)?(t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.width="0px",t.style.height="0px",t.style.contain="none",t.style.transform="none",t.style.zIndex="2147483647",!0):!1}function tp(t,e,n){switch(t.kind){case qe.Replace:return t.replacement_text;case qe.Remove:return"";case qe.InsertAfter:return n.slice(e.start,e.end)+t.replacement_text}}async function np(t,e,n){const r=e.span(),a={start:r.start,end:r.end};return r.free(),{span:a,message_html:e.message_html(),problem_text:e.get_problem_text(),lint_kind:e.lint_kind(),lint_kind_pretty:e.lint_kind_pretty(),suggestions:e.suggestions().map(i=>{const s={kind:i.kind(),replacement_text:i.get_replacement_text()};return i.free(),s}),context_hash:(await n.contextHash(t,e)).toString(),source:t}}function rp(t,e,n){switch(n.kind){case qe.Remove:return t.slice(0,e.start)+t.slice(e.end);case qe.Replace:return t.slice(0,e.start)+n.replacement_text+t.slice(e.end);case qe.InsertAfter:return t.slice(0,e.end)+n.replacement_text+t.slice(e.end)}}function ap(t,e,n,r){var i;const a=K0(t,e,n,r);if(a!=null)return a;try{let s=null;if(fs(t)?s=new oa(t,e.span.start,e.span.end):s=Xf(t,e.span),!s)return[];const o=Array.from(s.getClientRects?s.getClientRects():[]),l=$n(s.getBoundingClientRect());(i=s.detach)==null||i.call(s);const f=[];let c=null;if(t.tagName==null?c=t.parentElement:c=t,c==null)return[];for(const u of o){if(!Mf(u,l))continue;const _=Cf(u,l);f.push({x:_.x,y:_.y,width:_.width,height:_.height,lint:e,source:c,rule:n,range:s instanceof Range?s:void 0,applySuggestion:d=>{const g=fs(t)?t.value:t.innerText;sp(t,e.span,ip(d,e.span,g))},ignoreLint:r.ignoreLint?()=>r.ignoreLint(e.context_hash):void 0})}return f}catch{return[]}}function ip(t,e,n){switch(t.kind){case qe.Replace:return t.replacement_text;case qe.Remove:return"";case qe.InsertAfter:return n.slice(e.start,e.end)+t.replacement_text}}function sp(t,e,n){fs(t)?op(t,e,n):Qf(t)!=null?lp(t,e,n):Kf(t)!=null?cp(t,e,n):Hs(t)!=null?up(t,e,n):Zf(t)!=null||I0(t)!=null?fp(t,e,n):_p(t,e,n),t.dispatchEvent(new Event("change",{bubbles:!0}))}function op(t,e,n){t.focus(),t.setSelectionRange(e.start,e.end),document.execCommand("insertText",!1,n)}function lp(t,e,n){const r=yr(t,e);if(!r)return;const{doc:a,sel:i,range:s}=r;vr(a,i,s,n),t.dispatchEvent(new InputEvent("input",{bubbles:!0,cancelable:!1}))}function cp(t,e,n){const r=yr(t,e);if(!r)return;const{doc:a,sel:i,range:s}=r;setTimeout(()=>{const o=new InputEvent("beforeinput",{bubbles:!0,cancelable:!0,inputType:"insertText",data:n});t.dispatchEvent(o),o.defaultPrevented||vr(a,i,s,n),t.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertText"}))},0)}function yr(t,e){var i;const n=t.ownerDocument,r=(i=n.defaultView)==null?void 0:i.getSelection();if(!r)return null;t.focus();const a=Xf(t,e);return a?(r.removeAllRanges(),r.addRange(a),{doc:n,sel:r,range:a}):null}function fp(t,e,n){const r=yr(t,e);if(!r)return;const{doc:a,sel:i,range:s}=r,o={bubbles:!0,cancelable:!0,inputType:"insertReplacementText",data:n};"StaticRange"in self&&(o.targetRanges=[new StaticRange(s)]);const l=new InputEvent("beforeinput",o);t.dispatchEvent(l),l.defaultPrevented||(vr(a,i,s,n),t.dispatchEvent(new InputEvent("input",{bubbles:!0,cancelable:!1})))}function up(t,e,n){const r=yr(t,e);if(!r)return;const{doc:a,sel:i,range:s}=r,o={bubbles:!0,cancelable:!0,inputType:"insertReplacementText",data:n};"StaticRange"in self&&(o.targetRanges=[new StaticRange(s)]);const l=new InputEvent("beforeinput",o);t.dispatchEvent(l),l.defaultPrevented||(vr(a,i,s,n),t.dispatchEvent(new InputEvent("input",{bubbles:!0,cancelable:!1,inputType:"insertReplacementText",data:n})))}function vr(t,e,n,r){const a=n.startContainer,i=n.endContainer;if(a===i&&a.nodeType===Node.TEXT_NODE){const s=a,o=n.startOffset,l=n.endOffset,f=s.textContent||"",c=f.substring(0,o)+r+f.substring(l);s.textContent=c;const u=t.createRange(),_=o+r.length;u.setStart(s,_),u.setEnd(s,_),e.removeAllRanges(),e.addRange(u)}else{n.deleteContents();const s=t.createTextNode(r);n.insertNode(s);const o=t.createRange();o.setStartAfter(s),o.setEndAfter(s),e.removeAllRanges(),e.addRange(o)}}function _p(t,e,n){if(e&&n!==void 0){const r=yr(t,e);if(r){const{doc:a,sel:i,range:s}=r;vr(a,i,s,n),t.dispatchEvent(new InputEvent("input",{bubbles:!0,cancelable:!1}));return}}t.textContent=rp(t.innerText,e,{kind:qe.Replace,replacement_text:n}),t.dispatchEvent(new InputEvent("input",{bubbles:!0}))}var la=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ya(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function dp(t){if(Object.prototype.hasOwnProperty.call(t,"__esModule"))return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var a=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,a.get?a:{enumerable:!0,get:function(){return t[r]}})}),n}var Ya,Qo;function Vs(){if(Qo)return Ya;Qo=1;var t=Array.isArray,e=Object.prototype.toString;Ya=t||n;function n(r){return e.call(r)==="[object Array]"}return Ya}var Ja,el;function xr(){return el||(el=1,Ja="2"),Ja}var Xa,tl;function Sr(){if(tl)return Xa;tl=1;var t=xr();Xa=e;function e(n){return n&&n.type==="VirtualNode"&&n.version===t}return Xa}var Ka,nl;function dn(){if(nl)return Ka;nl=1,Ka=t;function t(e){return e&&e.type==="Widget"}return Ka}var Za,rl;function va(){if(rl)return Za;rl=1,Za=t;function t(e){return e&&e.type==="Thunk"}return Za}var Qa,al;function xa(){if(al)return Qa;al=1,Qa=t;function t(e){return e&&(typeof e.hook=="function"&&!e.hasOwnProperty("hook")||typeof e.unhook=="function"&&!e.hasOwnProperty("unhook"))}return Qa}var ei,il;function gp(){if(il)return ei;il=1;var t=xr(),e=Sr(),n=dn(),r=va(),a=xa();ei=o;var i={},s=[];function o(l,f,c,u,_){this.tagName=l,this.properties=f||i,this.children=c||s,this.key=u!=null?String(u):void 0,this.namespace=typeof _=="string"?_:null;var d=c&&c.length||0,g=0,m=!1,p=!1,v=!1,h;for(var x in f)if(f.hasOwnProperty(x)){var M=f[x];a(M)&&M.unhook&&(h||(h={}),h[x]=M)}for(var S=0;S<d;S++){var E=c[S];e(E)?(g+=E.count||0,!m&&E.hasWidgets&&(m=!0),!p&&E.hasThunks&&(p=!0),!v&&(E.hooks||E.descendantHooks)&&(v=!0)):!m&&n(E)?typeof E.destroy=="function"&&(m=!0):!p&&r(E)&&(p=!0)}this.count=d+g,this.hasWidgets=m,this.hasThunks=p,this.hooks=h,this.descendantHooks=v}return o.prototype.version=t,o.prototype.type="VirtualNode",ei}var ti,sl;function pp(){if(sl)return ti;sl=1;var t=xr();ti=e;function e(n){this.text=String(n)}return e.prototype.version=t,e.prototype.type="VirtualText",ti}var ni,ol;function Sa(){if(ol)return ni;ol=1;var t=xr();ni=e;function e(n){return n&&n.type==="VirtualText"&&n.version===t}return ni}/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */var ri,ll;function mp(){return ll||(ll=1,ri=(function(e){var n=String.prototype.split,r=/()??/.exec("")[1]===e,a;return a=function(i,u,o){if(Object.prototype.toString.call(u)!=="[object RegExp]")return n.call(i,u,o);var l=[],f=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.extended?"x":"")+(u.sticky?"y":""),c=0,u=new RegExp(u.source,f+"g"),_,d,g,m;for(i+="",r||(_=new RegExp("^"+u.source+"$(?!\\s)",f)),o=o===e?-1>>>0:o>>>0;(d=u.exec(i))&&(g=d.index+d[0].length,!(g>c&&(l.push(i.slice(c,d.index)),!r&&d.length>1&&d[0].replace(_,function(){for(var p=1;p<arguments.length-2;p++)arguments[p]===e&&(d[p]=e)}),d.length>1&&d.index<i.length&&Array.prototype.push.apply(l,d.slice(1)),m=d[0].length,c=g,l.length>=o)));)u.lastIndex===d.index&&u.lastIndex++;return c===i.length?(m||!u.test(""))&&l.push(""):l.push(i.slice(c)),l.length>o?l.slice(0,o):l},a})()),ri}var ai,cl;function hp(){if(cl)return ai;cl=1;var t=mp(),e=/([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,n=/^\.|#/;ai=r;function r(a,i){if(!a)return"DIV";var s=!i.hasOwnProperty("id"),o=t(a,e),l=null;n.test(o[1])&&(l="DIV");var f,c,u,_;for(_=0;_<o.length;_++)c=o[_],c&&(u=c.charAt(0),l?u==="."?(f=f||[],f.push(c.substring(1,c.length))):u==="#"&&s&&(i.id=c.substring(1,c.length)):l=c);return f&&(i.className&&f.push(i.className),i.className=f.join(" ")),i.namespace?l:l.toUpperCase()}return ai}var ii,fl;function bp(){if(fl)return ii;fl=1,ii=t;function t(e){if(!(this instanceof t))return new t(e);this.value=e}return t.prototype.hook=function(e,n){e[n]!==this.value&&(e[n]=this.value)},ii}var si,ul;function wp(){if(ul)return si;ul=1;var t=typeof window<"u"?window:typeof la<"u"?la:{};si=e;function e(n,r){return n in t?t[n]:(t[n]=r,r)}return si}var oi,_l;function yp(){if(_l)return oi;_l=1;var t=wp();oi=e;function e(n,r,a){var i="__INDIVIDUAL_ONE_VERSION_"+n,s=i+"_ENFORCE_SINGLETON",o=t(s,r);if(o!==r)throw new Error("Can only have one copy of "+n+`.
You already have version `+o+` installed.
This means you cannot install version `+r);return t(i,a)}return oi}var li,dl;function vp(){if(dl)return li;dl=1;var t=yp(),e="7";t("ev-store",e);var n="__EV_STORE_KEY@"+e;li=r;function r(a){var i=a[n];return i||(i=a[n]={}),i}return li}var ci,gl;function xp(){if(gl)return ci;gl=1;var t=vp();ci=e;function e(n){if(!(this instanceof e))return new e(n);this.value=n}return e.prototype.hook=function(n,r){var a=t(n),i=r.substr(3);a[i]=this.value},e.prototype.unhook=function(n,r){var a=t(n),i=r.substr(3);a[i]=void 0},ci}var fi,pl;function Sp(){if(pl)return fi;pl=1;var t=Vs(),e=gp(),n=pp(),r=Sr(),a=Sa(),i=dn(),s=xa(),o=va(),l=hp(),f=bp(),c=xp();fi=u;function u(h,x,M){var S=[],E,A,k,C;return!M&&m(x)&&(M=x,A={}),A=A||x||{},E=l(h,A),A.hasOwnProperty("key")&&(k=A.key,A.key=void 0),A.hasOwnProperty("namespace")&&(C=A.namespace,A.namespace=void 0),E==="INPUT"&&!C&&A.hasOwnProperty("value")&&A.value!==void 0&&!s(A.value)&&(A.value=f(A.value)),d(A),M!=null&&_(M,S,E,A),new e(E,A,S,k,C)}function _(h,x,M,S){if(typeof h=="string")x.push(new n(h));else if(typeof h=="number")x.push(new n(String(h)));else if(g(h))x.push(h);else if(t(h))for(var E=0;E<h.length;E++)_(h[E],x,M,S);else{if(h==null)return;throw p({foreignObject:h,parentVnode:{tagName:M,properties:S}})}}function d(h){for(var x in h)if(h.hasOwnProperty(x)){var M=h[x];if(s(M))continue;x.substr(0,3)==="ev-"&&(h[x]=c(M))}}function g(h){return r(h)||a(h)||i(h)||o(h)}function m(h){return typeof h=="string"||t(h)||g(h)}function p(h){var x=new Error;return x.type="virtual-hyperscript.unexpected.virtual-element",x.message=`Unexpected virtual child passed to h().
Expected a VNode / Vthunk / VWidget / string but:
got:
`+v(h.foreignObject)+`.
The parent vnode is:
`+v(h.parentVnode),x.foreignObject=h.foreignObject,x.parentVnode=h.parentVnode,x}function v(h){try{return JSON.stringify(h,null,"    ")}catch{return String(h)}}return fi}var ui,ml;function Ep(){if(ml)return ui;ml=1;var t=Sp();return ui=t,ui}var Mp=Ep();const ge=ya(Mp);function ye(t,e){let n=t.length;Array.isArray(t[0])||(t=[t]),Array.isArray(e[0])||(e=e.map(s=>[s]));let r=e[0].length,a=e[0].map((s,o)=>e.map(l=>l[o])),i=t.map(s=>a.map(o=>{let l=0;if(!Array.isArray(s)){for(let f of o)l+=s*f;return l}for(let f=0;f<s.length;f++)l+=s[f]*(o[f]||0);return l}));return n===1&&(i=i[0]),r===1?i.map(s=>s[0]):i}function Er(t){return Bt(t)==="string"}function Bt(t){return(Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function ca(t,{precision:e,unit:n}){return Ut(t)?"none":nu(t,e)+(n??"")}function Ut(t){return Number.isNaN(t)||t instanceof Number&&(t==null?void 0:t.none)}function Le(t){return Ut(t)?0:t}function nu(t,e){if(t===0)return 0;let n=~~t,r=0;n&&e&&(r=~~Math.log10(Math.abs(n))+1);const a=10**(e-r);return Math.floor(t*a+.5)/a}const Ap={deg:1,grad:.9,rad:180/Math.PI,turn:360};function ru(t){if(!t)return;t=t.trim();const e=/^([a-z]+)\((.+?)\)$/i,n=/^-?[\d.]+$/,r=/%|deg|g?rad|turn$/,a=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let i=t.match(e);if(i){let s=[];return i[2].replace(a,(o,l)=>{let f=l.match(r),c=l;if(f){let u=f[0],_=c.slice(0,-u.length);u==="%"?(c=new Number(_/100),c.type="<percentage>"):(c=new Number(_*Ap[u]),c.type="<angle>",c.unit=u)}else n.test(c)?(c=new Number(c),c.type="<number>"):c==="none"&&(c=new Number(NaN),c.none=!0);o.startsWith("/")&&(c=c instanceof Number?c:new Number(c),c.alpha=!0),typeof c=="object"&&c instanceof Number&&(c.raw=l),s.push(c)}),{name:i[1].toLowerCase(),rawName:i[1],rawArgs:i[2],args:s}}}function au(t){return t[t.length-1]}function dr(t,e,n){return isNaN(t)?e:isNaN(e)?t:t+(e-t)*n}function iu(t,e,n){return(n-t)/(e-t)}function Us(t,e,n){return dr(e[0],e[1],iu(t[0],t[1],n))}function su(t){return t.map(e=>e.split("|").map(n=>{n=n.trim();let r=n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(r){let a=new String(r[1]);return a.range=[+r[2],+r[3]],a}return n}))}function ou(t,e,n){return Math.max(Math.min(n,e),t)}function Ea(t,e){return Math.sign(t)===Math.sign(e)?t:-t}function Et(t,e){return Ea(Math.abs(t)**e,t)}function qs(t,e){return e===0?0:t/e}function lu(t,e,n=0,r=t.length){for(;n<r;){const a=n+r>>1;t[a]<e?n=a+1:r=a}return n}var Cp=Object.freeze({__proto__:null,bisectLeft:lu,clamp:ou,copySign:Ea,interpolate:dr,interpolateInv:iu,isNone:Ut,isString:Er,last:au,mapRange:Us,multiplyMatrices:ye,parseCoordGrammar:su,parseFunction:ru,serializeNumber:ca,skipNone:Le,spow:Et,toPrecision:nu,type:Bt,zdiv:qs});class kp{add(e,n,r){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(a){this[a]=this[a]||[],n&&this[a][r?"unshift":"push"](n)},this)}run(e,n){this[e]=this[e]||[],this[e].forEach(function(r){r.call(n&&n.context?n.context:n,n)})}}const qt=new kp;var of,lf,cf,nt={gamut_mapping:"css",precision:5,deltaE:"76",verbose:((cf=(lf=(of=globalThis==null?void 0:globalThis.process)==null?void 0:of.env)==null?void 0:lf.NODE_ENV)==null?void 0:cf.toLowerCase())!=="test",warn:function(e){var n,r;this.verbose&&((r=(n=globalThis==null?void 0:globalThis.console)==null?void 0:n.warn)==null||r.call(n,e))}};const Ue={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function us(t){return Array.isArray(t)?t:Ue[t]}function fa(t,e,n,r={}){if(t=us(t),e=us(e),!t||!e)throw new TypeError(`Missing white point to convert ${t?"":"from"}${!t&&!e?"/":""}${e?"":"to"}`);if(t===e)return n;let a={W1:t,W2:e,XYZ:n,options:r};if(qt.run("chromatic-adaptation-start",a),a.M||(a.W1===Ue.D65&&a.W2===Ue.D50?a.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:a.W1===Ue.D50&&a.W2===Ue.D65&&(a.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),qt.run("chromatic-adaptation-end",a),a.M)return ye(a.M,a.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Lp=new Set(["<number>","<percentage>","<angle>"]);function hl(t,e,n,r){return Object.entries(t.coords).map(([i,s],o)=>{let l=e.coordGrammar[o],f=r[o],c=f==null?void 0:f.type,u;if(f.none?u=l.find(g=>Lp.has(g)):u=l.find(g=>g==c),!u){let g=s.name||i;throw new TypeError(`${c??f.raw} not allowed for ${g} in ${n}()`)}let _=u.range;c==="<percentage>"&&(_||(_=[0,1]));let d=s.range||s.refRange;return _&&d&&(r[o]=Us(_,d,r[o])),u})}function cu(t,{meta:e}={}){var r,a,i,s;let n={str:(r=String(t))==null?void 0:r.trim()};if(qt.run("parse-start",n),n.color)return n.color;if(n.parsed=ru(n.str),n.parsed){let o=n.parsed.name;if(o==="color"){let l=n.parsed.args.shift(),f=l.startsWith("--")?l.substring(2):`--${l}`,c=[l,f],u=n.parsed.rawArgs.indexOf("/")>0?n.parsed.args.pop():1;for(let g of F.all){let m=g.getFormat("color");if(m&&(c.includes(m.id)||(a=m.ids)!=null&&a.filter(p=>c.includes(p)).length)){const p=Object.keys(g.coords).map((h,x)=>n.parsed.args[x]||0);let v;return m.coordGrammar&&(v=hl(g,m,"color",p)),e&&Object.assign(e,{formatId:"color",types:v}),m.id.startsWith("--")&&!l.startsWith("--")&&nt.warn(`${g.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${m.id}) instead of color(${l}).`),l.startsWith("--")&&!m.id.startsWith("--")&&nt.warn(`${g.name} is a standard space and supported in the CSS spec. Use color(${m.id}) instead of prefixed color(${l}).`),{spaceId:g.id,coords:p,alpha:u}}}let _="",d=l in F.registry?l:f;if(d in F.registry){let g=(s=(i=F.registry[d].formats)==null?void 0:i.color)==null?void 0:s.id;g&&(_=`Did you mean color(${g})?`)}throw new TypeError(`Cannot parse color(${l}). `+(_||"Missing a plugin?"))}else for(let l of F.all){let f=l.getFormat(o);if(f&&f.type==="function"){let c=1;(f.lastAlpha||au(n.parsed.args).alpha)&&(c=n.parsed.args.pop());let u=n.parsed.args,_;return f.coordGrammar&&(_=hl(l,f,o,u)),e&&Object.assign(e,{formatId:f.name,types:_}),{spaceId:l.id,coords:u,alpha:c}}}}else for(let o of F.all)for(let l in o.formats){let f=o.formats[l];if(f.type!=="custom"||f.test&&!f.test(n.str))continue;let c=f.parse(n.str);if(c)return c.alpha??(c.alpha=1),e&&(e.formatId=l),c}throw new TypeError(`Could not parse ${t} as a color. Missing a plugin?`)}function J(t){if(Array.isArray(t))return t.map(J);if(!t)throw new TypeError("Empty color reference");Er(t)&&(t=cu(t));let e=t.space||t.spaceId;return e instanceof F||(t.space=F.get(e)),t.alpha===void 0&&(t.alpha=1),t}const Tp=75e-6,Ye=class Ye{constructor(e){var a;this.id=e.id,this.name=e.name,this.base=e.base?Ye.get(e.base):null,this.aliases=e.aliases,this.base&&(this.fromBase=e.fromBase,this.toBase=e.toBase);let n=e.coords??this.base.coords;for(let i in n)"name"in n[i]||(n[i].name=i);this.coords=n;let r=e.white??this.base.white??"D65";this.white=us(r),this.formats=e.formats??{};for(let i in this.formats){let s=this.formats[i];s.type||(s.type="function"),s.name||(s.name=i)}(a=this.formats.color)!=null&&a.id||(this.formats.color={...this.formats.color??{},id:e.cssId||this.id}),e.gamutSpace?this.gamutSpace=e.gamutSpace==="self"?this:Ye.get(e.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,s)=>!0),this.referred=e.referred,Object.defineProperty(this,"path",{value:$p(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),qt.run("colorspace-init-end",this)}inGamut(e,{epsilon:n=Tp}={}){if(!this.equals(this.gamutSpace))return e=this.to(this.gamutSpace,e),this.gamutSpace.inGamut(e,{epsilon:n});let r=Object.values(this.coords);return e.every((a,i)=>{let s=r[i];if(s.type!=="angle"&&s.range){if(Number.isNaN(a))return!0;let[o,l]=s.range;return(o===void 0||a>=o-n)&&(l===void 0||a<=l+n)}return!0})}get isUnbounded(){return Object.values(this.coords).every(e=>!("range"in e))}get cssId(){var e,n;return((n=(e=this.formats)==null?void 0:e.color)==null?void 0:n.id)||this.id}get isPolar(){for(let e in this.coords)if(this.coords[e].type==="angle")return!0;return!1}getFormat(e){if(typeof e=="object")return e=bl(e,this),e;let n;return e==="default"?n=Object.values(this.formats)[0]:n=this.formats[e],n?(n=bl(n,this),n):null}equals(e){return e?this===e||this.id===e||this.id===e.id:!1}to(e,n){if(arguments.length===1){const o=J(e);[e,n]=[o.space,o.coords]}if(e=Ye.get(e),this.equals(e))return n;n=n.map(o=>Number.isNaN(o)?0:o);let r=this.path,a=e.path,i,s;for(let o=0;o<r.length&&r[o].equals(a[o]);o++)i=r[o],s=o;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);for(let o=r.length-1;o>s;o--)n=r[o].toBase(n);for(let o=s+1;o<a.length;o++)n=a[o].fromBase(n);return n}from(e,n){if(arguments.length===1){const r=J(e);[e,n]=[r.space,r.coords]}return e=Ye.get(e),e.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let e=[];for(let n in this.coords){let r=this.coords[n],a=r.range||r.refRange;e.push((a==null?void 0:a.min)??0)}return e}static get all(){return[...new Set(Object.values(Ye.registry))]}static register(e,n){if(arguments.length===1&&(n=arguments[0],e=n.id),n=this.get(n),this.registry[e]&&this.registry[e]!==n)throw new Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=n,arguments.length===1&&n.aliases)for(let r of n.aliases)this.register(r,n);return n}static get(e,...n){if(!e||e instanceof Ye)return e;if(Bt(e)==="string"){let a=Ye.registry[e.toLowerCase()];if(!a)throw new TypeError(`No color space found with id = "${e}"`);return a}if(n.length)return Ye.get(...n);throw new TypeError(`${e} is not a valid color space`)}static resolveCoord(e,n){var l;let r=Bt(e),a,i;if(r==="string"?e.includes(".")?[a,i]=e.split("."):[a,i]=[,e]:Array.isArray(e)?[a,i]=e:(a=e.space,i=e.coordId),a=Ye.get(a),a||(a=n),!a)throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);if(r=Bt(i),r==="number"||r==="string"&&i>=0){let f=Object.entries(a.coords)[i];if(f)return{space:a,id:f[0],index:i,...f[1]}}a=Ye.get(a);let s=i.toLowerCase(),o=0;for(let f in a.coords){let c=a.coords[f];if(f.toLowerCase()===s||((l=c.name)==null?void 0:l.toLowerCase())===s)return{space:a,id:f,index:o,...c};o++}throw new TypeError(`No "${i}" coordinate found in ${a.name}. Its coordinates are: ${Object.keys(a.coords).join(", ")}`)}};Q(Ye,"registry",{}),Q(Ye,"DEFAULT_FORMAT",{type:"functions",name:"color"});let F=Ye;function $p(t){let e=[t];for(let n=t;n=n.base;)e.push(n);return e}function bl(t,{coords:e}={}){if(t.coords&&!t.coordGrammar){t.type||(t.type="function"),t.name||(t.name="color"),t.coordGrammar=su(t.coords);let n=Object.entries(e).map(([r,a],i)=>{let s=t.coordGrammar[i][0],o=a.range||a.refRange,l=s.range,f="";return s=="<percentage>"?(l=[0,100],f="%"):s=="<angle>"&&(f="deg"),{fromRange:o,toRange:l,suffix:f}});t.serializeCoords=(r,a)=>r.map((i,s)=>{let{fromRange:o,toRange:l,suffix:f}=n[s];return o&&l&&(i=Us(o,l,i)),i=ca(i,{precision:a,unit:f}),i})}return t}var Pe=new F({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Je extends F{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=Pe),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??(e.toBase=n=>{let r=ye(e.toXYZ_M,n);return this.white!==this.base.white&&(r=fa(this.white,this.base.white,r)),r}),e.fromBase??(e.fromBase=n=>(n=fa(this.base.white,this.white,n),ye(e.fromXYZ_M,n)))),e.referred??(e.referred="display"),super(e)}}function Mr(t,e){return t=J(t),!e||t.space.equals(e)?t.coords.slice():(e=F.get(e),e.from(t))}function et(t,e){t=J(t);let{space:n,index:r}=F.resolveCoord(e,t.space);return Mr(t,n)[r]}function Gs(t,e,n){return t=J(t),e=F.get(e),t.coords=e.to(t.space,n),t}Gs.returns="color";function jt(t,e,n){if(t=J(t),arguments.length===2&&Bt(arguments[1])==="object"){let r=arguments[1];for(let a in r)jt(t,a,r[a])}else{typeof n=="function"&&(n=n(et(t,e)));let{space:r,index:a}=F.resolveCoord(e,t.space),i=Mr(t,r);i[a]=n,Gs(t,r,i)}return t}jt.returns="color";var Ys=new F({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Pe,fromBase:t=>fa(Pe.white,"D50",t),toBase:t=>fa("D50",Pe.white,t)});const Rp=216/24389,wl=24/116,Rr=24389/27;let _i=Ue.D50;var tt=new F({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:_i,base:Ys,fromBase(t){let n=t.map((r,a)=>r/_i[a]).map(r=>r>Rp?Math.cbrt(r):(Rr*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>wl?Math.pow(e[0],3):(116*e[0]-16)/Rr,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/Rr,e[2]>wl?Math.pow(e[2],3):(116*e[2]-16)/Rr].map((r,a)=>r*_i[a])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function kt(t){return(t%360+360)%360}function jp(t,e){if(t==="raw")return e;let[n,r]=e.map(kt),a=r-n;return t==="increasing"?a<0&&(r+=360):t==="decreasing"?a>0&&(n+=360):t==="longer"?-180<a&&a<180&&(a>0?n+=360:r+=360):t==="shorter"&&(a>180?n+=360:a<-180&&(r+=360)),[n,r]}var gr=new F({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:tt,fromBase(t){let[e,n,r]=t,a;const i=.02;return Math.abs(n)<i&&Math.abs(r)<i?a=NaN:a=Math.atan2(r,n)*180/Math.PI,[e,Math.sqrt(n**2+r**2),kt(a)]},toBase(t){let[e,n,r]=t;return n<0&&(n=0),isNaN(r)&&(r=0),[e,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const yl=25**7,ua=Math.PI,vl=180/ua,bn=ua/180;function xl(t){const e=t*t;return e*e*e*t}function fu(t,e,{kL:n=1,kC:r=1,kH:a=1}={}){[t,e]=J([t,e]);let[i,s,o]=tt.from(t),l=gr.from(tt,[i,s,o])[1],[f,c,u]=tt.from(e),_=gr.from(tt,[f,c,u])[1];l<0&&(l=0),_<0&&(_=0);let d=(l+_)/2,g=xl(d),m=.5*(1-Math.sqrt(g/(g+yl))),p=(1+m)*s,v=(1+m)*c,h=Math.sqrt(p**2+o**2),x=Math.sqrt(v**2+u**2),M=p===0&&o===0?0:Math.atan2(o,p),S=v===0&&u===0?0:Math.atan2(u,v);M<0&&(M+=2*ua),S<0&&(S+=2*ua),M*=vl,S*=vl;let E=f-i,A=x-h,k=S-M,C=M+S,L=Math.abs(k),$;h*x===0?$=0:L<=180?$=k:k>180?$=k-360:k<-180?$=k+360:nt.warn("the unthinkable has happened");let z=2*Math.sqrt(x*h)*Math.sin($*bn/2),G=(i+f)/2,N=(h+x)/2,R=xl(N),j;h*x===0?j=C:L<=180?j=C/2:C<360?j=(C+360)/2:j=(C-360)/2;let D=(G-50)**2,V=1+.015*D/Math.sqrt(20+D),Y=1+.045*N,ve=1;ve-=.17*Math.cos((j-30)*bn),ve+=.24*Math.cos(2*j*bn),ve+=.32*Math.cos((3*j+6)*bn),ve-=.2*Math.cos((4*j-63)*bn);let fe=1+.015*N*ve,ue=30*Math.exp(-1*((j-275)/25)**2),se=2*Math.sqrt(R/(R+yl)),U=-1*Math.sin(2*ue*bn)*se,q=(E/(n*V))**2;return q+=(A/(r*Y))**2,q+=(z/(a*fe))**2,q+=U*(A/(r*Y))*(z/(a*fe)),Math.sqrt(q)}const Op=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Fp=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],Ip=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],Np=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var On=new F({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Pe,fromBase(t){let n=ye(Op,t).map(r=>Math.cbrt(r));return ye(Ip,n)},toBase(t){let n=ye(Np,t).map(r=>r**3);return ye(Fp,n)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function _s(t,e){[t,e]=J([t,e]);let[n,r,a]=On.from(t),[i,s,o]=On.from(e),l=n-i,f=r-s,c=a-o;return Math.sqrt(l**2+f**2+c**2)}const Pp=75e-6;function cn(t,e,{epsilon:n=Pp}={}){t=J(t),e||(e=t.space),e=F.get(e);let r=t.coords;return e!==t.space&&(r=e.from(t)),e.inGamut(r,{epsilon:n})}function Fn(t){return{space:t.space,coords:t.coords.slice(),alpha:t.alpha}}function uu(t,e,n="lab"){n=F.get(n);let r=n.from(t),a=n.from(e);return Math.sqrt(r.reduce((i,s,o)=>{let l=a[o];return isNaN(s)||isNaN(l)?i:i+(l-s)**2},0))}function zp(t,e){return uu(t,e,"lab")}const Dp=Math.PI,Sl=Dp/180;function Wp(t,e,{l:n=2,c:r=1}={}){[t,e]=J([t,e]);let[a,i,s]=tt.from(t),[,o,l]=gr.from(tt,[a,i,s]),[f,c,u]=tt.from(e),_=gr.from(tt,[f,c,u])[1];o<0&&(o=0),_<0&&(_=0);let d=a-f,g=o-_,m=i-c,p=s-u,v=m**2+p**2-g**2,h=.511;a>=16&&(h=.040975*a/(1+.01765*a));let x=.0638*o/(1+.0131*o)+.638,M;Number.isNaN(l)&&(l=0),l>=164&&l<=345?M=.56+Math.abs(.2*Math.cos((l+168)*Sl)):M=.36+Math.abs(.4*Math.cos((l+35)*Sl));let S=Math.pow(o,4),E=Math.sqrt(S/(S+1900)),A=x*(E*M+1-E),k=(d/(n*h))**2;return k+=(g/(r*x))**2,k+=v/A**2,Math.sqrt(k)}const El=203;var Js=new F({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Pe,fromBase(t){return t.map(e=>Math.max(e*El,0))},toBase(t){return t.map(e=>Math.max(e/El,0))}});const jr=1.15,Or=.66,Ml=2610/2**14,Bp=2**14/2610,Al=3424/2**12,Cl=2413/2**7,kl=2392/2**7,Hp=1.7*2523/2**5,Ll=2**5/(1.7*2523),Fr=-.56,di=16295499532821565e-27,Vp=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Up=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],qp=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Gp=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var _u=new F({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Js,fromBase(t){let[e,n,r]=t,a=jr*e-(jr-1)*r,i=Or*n-(Or-1)*e,o=ye(Vp,[a,i,r]).map(function(_){let d=Al+Cl*(_/1e4)**Ml,g=1+kl*(_/1e4)**Ml;return(d/g)**Hp}),[l,f,c]=ye(qp,o);return[(1+Fr)*l/(1+Fr*l)-di,f,c]},toBase(t){let[e,n,r]=t,a=(e+di)/(1+Fr-Fr*(e+di)),s=ye(Gp,[a,n,r]).map(function(_){let d=Al-_**Ll,g=kl*_**Ll-Cl;return 1e4*(d/g)**Bp}),[o,l,f]=ye(Up,s),c=(o+(jr-1)*f)/jr,u=(l+(Or-1)*c)/Or;return[c,u,f]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),ds=new F({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:_u,fromBase(t){let[e,n,r]=t,a;const i=2e-4;return Math.abs(n)<i&&Math.abs(r)<i?a=NaN:a=Math.atan2(r,n)*180/Math.PI,[e,Math.sqrt(n**2+r**2),kt(a)]},toBase(t){return[t[0],t[1]*Math.cos(t[2]*Math.PI/180),t[1]*Math.sin(t[2]*Math.PI/180)]}});function Yp(t,e){[t,e]=J([t,e]);let[n,r,a]=ds.from(t),[i,s,o]=ds.from(e),l=n-i,f=r-s;Number.isNaN(a)&&Number.isNaN(o)?(a=0,o=0):Number.isNaN(a)?a=o:Number.isNaN(o)&&(o=a);let c=a-o,u=2*Math.sqrt(r*s)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(l**2+f**2+u**2)}const du=3424/4096,gu=2413/128,pu=2392/128,Tl=2610/16384,Jp=2523/32,Xp=16384/2610,$l=32/2523,Kp=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],Zp=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Qp=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],e1=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var gs=new F({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Js,fromBase(t){let e=ye(Kp,t);return t1(e)},toBase(t){let e=n1(t);return ye(e1,e)}});function t1(t){let e=t.map(function(n){let r=du+gu*(n/1e4)**Tl,a=1+pu*(n/1e4)**Tl;return(r/a)**Jp});return ye(Zp,e)}function n1(t){return ye(Qp,t).map(function(r){let a=Math.max(r**$l-du,0),i=gu-pu*r**$l;return 1e4*(a/i)**Xp})}function r1(t,e){[t,e]=J([t,e]);let[n,r,a]=gs.from(t),[i,s,o]=gs.from(e);return 720*Math.sqrt((n-i)**2+.25*(r-s)**2+(a-o)**2)}const a1=Ue.D65,mu=.42,Rl=1/mu,gi=2*Math.PI,hu=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],i1=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],s1=[[460,451,288],[460,-891,-261],[460,-220,-6300]],o1={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},tn={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},l1=180/Math.PI,jl=Math.PI/180;function bu(t,e){return t.map(r=>{const a=Et(e*Math.abs(r)*.01,mu);return 400*Ea(a,r)/(a+27.13)})}function c1(t,e){const n=100/e*27.13**Rl;return t.map(r=>{const a=Math.abs(r);return Ea(n*Et(a/(400-a),Rl),r)})}function f1(t){let e=kt(t);e<=tn.h[0]&&(e+=360);const n=lu(tn.h,e)-1,[r,a]=tn.h.slice(n,n+2),[i,s]=tn.e.slice(n,n+2),o=tn.H[n],l=(e-r)/i;return o+100*l/(l+(a-e)/s)}function u1(t){let e=(t%400+400)%400;const n=Math.floor(.01*e);e=e%100;const[r,a]=tn.h.slice(n,n+2),[i,s]=tn.e.slice(n,n+2);return kt((e*(s*r-i*a)-100*r*s)/(e*(s-i)-100*s))}function wu(t,e,n,r,a){const i={};i.discounting=a,i.refWhite=t,i.surround=r;const s=t.map(m=>m*100);i.la=e,i.yb=n;const o=s[1],l=ye(hu,s);r=o1[i.surround];const f=r[0];i.c=r[1],i.nc=r[2];const u=(1/(5*i.la+1))**4;i.fl=u*i.la+.1*(1-u)*(1-u)*Math.cbrt(5*i.la),i.flRoot=i.fl**.25,i.n=i.yb/o,i.z=1.48+Math.sqrt(i.n),i.nbb=.725*i.n**-.2,i.ncb=i.nbb;const _=Math.max(Math.min(f*(1-1/3.6*Math.exp((-i.la-42)/92)),1),0);i.dRgb=l.map(m=>dr(1,o/m,_)),i.dRgbInv=i.dRgb.map(m=>1/m);const d=l.map((m,p)=>m*i.dRgb[p]),g=bu(d,i.fl);return i.aW=i.nbb*(2*g[0]+g[1]+.05*g[2]),i}const Ol=wu(a1,64/Math.PI*.2,20,"average",!1);function ps(t,e){if(!(t.J!==void 0^t.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(t.C!==void 0^t.M!==void 0^t.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(t.h!==void 0^t.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(t.J===0||t.Q===0)return[0,0,0];let n=0;t.h!==void 0?n=kt(t.h)*jl:n=u1(t.H)*jl;const r=Math.cos(n),a=Math.sin(n);let i=0;t.J!==void 0?i=Et(t.J,1/2)*.1:t.Q!==void 0&&(i=.25*e.c*t.Q/((e.aW+4)*e.flRoot));let s=0;t.C!==void 0?s=t.C/i:t.M!==void 0?s=t.M/e.flRoot/i:t.s!==void 0&&(s=4e-4*t.s**2*(e.aW+4)/e.c);const o=Et(s*Math.pow(1.64-Math.pow(.29,e.n),-.73),10/9),l=.25*(Math.cos(n+2)+3.8),f=e.aW*Et(i,2/e.c/e.z),c=5e4/13*e.nc*e.ncb*l,u=f/e.nbb,_=23*(u+.305)*qs(o,23*c+o*(11*r+108*a)),d=_*r,g=_*a,m=c1(ye(s1,[u,d,g]).map(p=>p*1/1403),e.fl);return ye(i1,m.map((p,v)=>p*e.dRgbInv[v])).map(p=>p/100)}function yu(t,e){const n=t.map(x=>x*100),r=bu(ye(hu,n).map((x,M)=>x*e.dRgb[M]),e.fl),a=r[0]+(-12*r[1]+r[2])/11,i=(r[0]+r[1]-2*r[2])/9,s=(Math.atan2(i,a)%gi+gi)%gi,o=.25*(Math.cos(s+2)+3.8),l=5e4/13*e.nc*e.ncb*qs(o*Math.sqrt(a**2+i**2),r[0]+r[1]+1.05*r[2]+.305),f=Et(l,.9)*Math.pow(1.64-Math.pow(.29,e.n),.73),c=e.nbb*(2*r[0]+r[1]+.05*r[2]),u=Et(c/e.aW,.5*e.c*e.z),_=100*Et(u,2),d=4/e.c*u*(e.aW+4)*e.flRoot,g=f*u,m=g*e.flRoot,p=kt(s*l1),v=f1(p),h=50*Et(e.c*f/(e.aW+4),1/2);return{J:_,C:g,h:p,s:h,Q:d,M:m,H:v}}var _1=new F({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Pe,fromBase(t){const e=yu(t,Ol);return[e.J,e.M,e.h]},toBase(t){return ps({J:t[0],M:t[1],h:t[2]},Ol)}});const d1=Ue.D65,g1=216/24389,vu=24389/27;function p1(t){return 116*(t>g1?Math.cbrt(t):(vu*t+16)/116)-16}function ms(t){return t>8?Math.pow((t+16)/116,3):t/vu}function m1(t,e){let[n,r,a]=t,i=[],s=0;if(a===0)return[0,0,0];let o=ms(a);a>0?s=.00379058511492914*a**2+.608983189401032*a+.9155088574762233:s=9514440756550361e-21*a**2+.08693057439788597*a-21.928975842194614;const l=2e-12,f=15;let c=0,u=1/0;for(;c<=f;){i=ps({J:s,C:r,h:n},e);const _=Math.abs(i[1]-o);if(_<u){if(_<=l)return i;u=_}s=s-(i[1]-o)*s/(2*i[1]),c+=1}return ps({J:s,C:r,h:n},e)}function h1(t,e){const n=p1(t[1]);if(n===0)return[0,0,0];const r=yu(t,Xs);return[kt(r.h),r.C,n]}const Xs=wu(d1,200/Math.PI*ms(50),ms(50)*100,"average",!1);var pr=new F({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Pe,fromBase(t){return h1(t)},toBase(t){return m1(t,Xs)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const b1=Math.PI/180,Fl=[1,.007,.0228];function Il(t){t[1]<0&&(t=pr.fromBase(pr.toBase(t)));const e=Math.log(Math.max(1+Fl[2]*t[1]*Xs.flRoot,1))/Fl[2],n=t[0]*b1,r=e*Math.cos(n),a=e*Math.sin(n);return[t[2],r,a]}function w1(t,e){[t,e]=J([t,e]);let[n,r,a]=Il(pr.from(t)),[i,s,o]=Il(pr.from(e));return Math.sqrt((n-i)**2+(r-s)**2+(a-o)**2)}var In={deltaE76:zp,deltaECMC:Wp,deltaE2000:fu,deltaEJz:Yp,deltaEITP:r1,deltaEOK:_s,deltaEHCT:w1};function y1(t){const e=t?Math.floor(Math.log10(Math.abs(t))):0;return Math.max(parseFloat(`1e${e-2}`),1e-6)}const Nl={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function Gt(t,{method:e=nt.gamut_mapping,space:n=void 0,deltaEMethod:r="",jnd:a=2,blackWhiteClamp:i={}}={}){if(t=J(t),Er(arguments[1])?n=arguments[1]:n||(n=t.space),n=F.get(n),cn(t,n,{epsilon:0}))return t;let s;if(e==="css")s=v1(t,{space:n});else{if(e!=="clip"&&!cn(t,n)){Object.prototype.hasOwnProperty.call(Nl,e)&&({method:e,jnd:a,deltaEMethod:r,blackWhiteClamp:i}=Nl[e]);let o=fu;if(r!==""){for(let f in In)if("deltae"+r.toLowerCase()===f.toLowerCase()){o=In[f];break}}let l=Gt(be(t,n),{method:"clip",space:n});if(o(t,l)>a){if(Object.keys(i).length===3){let h=F.resolveCoord(i.channel),x=et(be(t,h.space),h.id);if(Ut(x)&&(x=0),x>=i.max)return be({space:"xyz-d65",coords:Ue.D65},t.space);if(x<=i.min)return be({space:"xyz-d65",coords:[0,0,0]},t.space)}let f=F.resolveCoord(e),c=f.space,u=f.id,_=be(t,c);_.coords.forEach((h,x)=>{Ut(h)&&(_.coords[x]=0)});let g=(f.range||f.refRange)[0],m=y1(a),p=g,v=et(_,u);for(;v-p>m;){let h=Fn(_);h=Gt(h,{space:n,method:"clip"}),o(_,h)-a<m?p=et(_,u):v=et(_,u),jt(_,u,(p+v)/2)}s=be(_,n)}else s=l}else s=be(t,n);if(e==="clip"||!cn(s,n,{epsilon:0})){let o=Object.values(n.coords).map(l=>l.range||[]);s.coords=s.coords.map((l,f)=>{let[c,u]=o[f];return c!==void 0&&(l=Math.max(c,l)),u!==void 0&&(l=Math.min(l,u)),l})}}return n!==t.space&&(s=be(s,t.space)),t.coords=s.coords,t}Gt.returns="color";const Pl={WHITE:{space:On,coords:[1,0,0]},BLACK:{space:On,coords:[0,0,0]}};function v1(t,{space:e}={}){t=J(t),e||(e=t.space),e=F.get(e);const a=F.get("oklch");if(e.isUnbounded)return be(t,e);const i=be(t,a);let s=i.coords[0];if(s>=1){const g=be(Pl.WHITE,e);return g.alpha=t.alpha,be(g,e)}if(s<=0){const g=be(Pl.BLACK,e);return g.alpha=t.alpha,be(g,e)}if(cn(i,e,{epsilon:0}))return be(i,e);function o(g){const m=be(g,e),p=Object.values(e.coords);return m.coords=m.coords.map((v,h)=>{if("range"in p[h]){const[x,M]=p[h].range;return ou(x,v,M)}return v}),m}let l=0,f=i.coords[1],c=!0,u=Fn(i),_=o(u),d=_s(_,u);if(d<.02)return _;for(;f-l>1e-4;){const g=(l+f)/2;if(u.coords[1]=g,c&&cn(u,e,{epsilon:0}))l=g;else if(_=o(u),d=_s(_,u),d<.02){if(.02-d<1e-4)break;c=!1,l=g}else f=g}return _}function be(t,e,{inGamut:n}={}){t=J(t),e=F.get(e);let r=e.from(t),a={space:e,coords:r,alpha:t.alpha};return n&&(a=Gt(a,n===!0?void 0:n)),a}be.returns="color";function sr(t,{precision:e=nt.precision,format:n="default",inGamut:r=!0,...a}={}){var l;let i;t=J(t);let s=n;n=t.space.getFormat(n)??t.space.getFormat("default")??F.DEFAULT_FORMAT;let o=t.coords.slice();if(r||(r=n.toGamut),r&&!cn(t)&&(o=Gt(Fn(t),r===!0?void 0:r).coords),n.type==="custom")if(a.precision=e,n.serialize)i=n.serialize(o,t.alpha,a);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let f=n.name||"color";n.serializeCoords?o=n.serializeCoords(o,e):e!==null&&(o=o.map(d=>ca(d,{precision:e})));let c=[...o];if(f==="color"){let d=n.id||((l=n.ids)==null?void 0:l[0])||t.space.id;c.unshift(d)}let u=t.alpha;e!==null&&(u=ca(u,{precision:e}));let _=t.alpha>=1||n.noAlpha?"":`${n.commas?",":" /"} ${u}`;i=`${f}(${c.join(n.commas?", ":" ")}${_})`}return i}const x1=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],S1=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Ma=new Je({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:x1,fromXYZ_M:S1});const Ir=1.09929682680944,zl=.018053968510807;var xu=new Je({id:"rec2020",name:"REC.2020",base:Ma,toBase(t){return t.map(function(e){return e<zl*4.5?e/4.5:Math.pow((e+Ir-1)/Ir,1/.45)})},fromBase(t){return t.map(function(e){return e>=zl?Ir*Math.pow(e,.45)-(Ir-1):4.5*e})}});const E1=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],M1=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Su=new Je({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:E1,fromXYZ_M:M1});const A1=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],$e=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Eu=new Je({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:A1,fromXYZ_M:$e}),Dl={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Wl=Array(3).fill("<percentage> | <number>[0, 255]"),Bl=Array(3).fill("<number>[0, 255]");var Nn=new Je({id:"srgb",name:"sRGB",base:Eu,fromBase:t=>t.map(e=>{let n=e<0?-1:1,r=e*n;return r>.0031308?n*(1.055*r**(1/2.4)-.055):12.92*e}),toBase:t=>t.map(e=>{let n=e<0?-1:1,r=e*n;return r<=.04045?e/12.92:n*((r+.055)/1.055)**2.4}),formats:{rgb:{coords:Wl},rgb_number:{name:"rgb",commas:!0,coords:Bl,noAlpha:!0},color:{},rgba:{coords:Wl,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Bl},hex:{type:"custom",toGamut:!0,test:t=>/^#([a-f0-9]{3,4}){1,2}$/i.test(t),parse(t){t.length<=5&&(t=t.replace(/[a-f0-9]/gi,"$&$&"));let e=[];return t.replace(/[a-f0-9]{2}/gi,n=>{e.push(parseInt(n,16)/255)}),{spaceId:"srgb",coords:e.slice(0,3),alpha:e.slice(3)[0]}},serialize:(t,e,{collapse:n=!0}={})=>{e<1&&t.push(e),t=t.map(i=>Math.round(i*255));let r=n&&t.every(i=>i%17===0);return"#"+t.map(i=>r?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:t=>/^[a-z]+$/i.test(t),parse(t){t=t.toLowerCase();let e={spaceId:"srgb",coords:null,alpha:1};if(t==="transparent"?(e.coords=Dl.black,e.alpha=0):e.coords=Dl[t],e.coords)return e}}}}),Mu=new Je({id:"p3",cssId:"display-p3",name:"P3",base:Su,fromBase:Nn.fromBase,toBase:Nn.toBase});nt.display_space=Nn;let C1;if(typeof CSS<"u"&&CSS.supports)for(let t of[tt,xu,Mu]){let e=t.getMinCoords(),r=sr({space:t,coords:e,alpha:1});if(CSS.supports("color",r)){nt.display_space=t;break}}function k1(t,{space:e=nt.display_space,...n}={}){let r=sr(t,n);if(typeof CSS>"u"||CSS.supports("color",r)||!nt.display_space)r=new String(r),r.color=t;else{let a=t;if((t.coords.some(Ut)||Ut(t.alpha))&&!(C1??(C1=CSS.supports("color","hsl(none 50% 50%)")))&&(a=Fn(t),a.coords=a.coords.map(Le),a.alpha=Le(a.alpha),r=sr(a,n),CSS.supports("color",r)))return r=new String(r),r.color=a,r;a=be(a,e),r=new String(sr(a,n)),r.color=a}return r}function L1(t,e){return t=J(t),e=J(e),t.space===e.space&&t.alpha===e.alpha&&t.coords.every((n,r)=>n===e.coords[r])}function Yt(t){return et(t,[Pe,"y"])}function Au(t,e){jt(t,[Pe,"y"],e)}function T1(t){Object.defineProperty(t.prototype,"luminance",{get(){return Yt(this)},set(e){Au(this,e)}})}var $1=Object.freeze({__proto__:null,getLuminance:Yt,register:T1,setLuminance:Au});function R1(t,e){t=J(t),e=J(e);let n=Math.max(Yt(t),0),r=Math.max(Yt(e),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}const j1=.56,O1=.57,F1=.62,I1=.65,Hl=.022,N1=1.414,P1=.1,z1=5e-4,D1=1.14,Vl=.027,W1=1.14;function Ul(t){return t>=Hl?t:t+(Hl-t)**N1}function wn(t){let e=t<0?-1:1,n=Math.abs(t);return e*Math.pow(n,2.4)}function B1(t,e){e=J(e),t=J(t);let n,r,a,i,s,o;e=be(e,"srgb"),[i,s,o]=e.coords;let l=wn(i)*.2126729+wn(s)*.7151522+wn(o)*.072175;t=be(t,"srgb"),[i,s,o]=t.coords;let f=wn(i)*.2126729+wn(s)*.7151522+wn(o)*.072175,c=Ul(l),u=Ul(f),_=u>c;return Math.abs(u-c)<z1?r=0:_?(n=u**j1-c**O1,r=n*D1):(n=u**I1-c**F1,r=n*W1),Math.abs(r)<P1?a=0:r>0?a=r-Vl:a=r+Vl,a*100}function H1(t,e){t=J(t),e=J(e);let n=Math.max(Yt(t),0),r=Math.max(Yt(e),0);r>n&&([n,r]=[r,n]);let a=n+r;return a===0?0:(n-r)/a}const V1=5e4;function U1(t,e){t=J(t),e=J(e);let n=Math.max(Yt(t),0),r=Math.max(Yt(e),0);return r>n&&([n,r]=[r,n]),r===0?V1:(n-r)/r}function q1(t,e){t=J(t),e=J(e);let n=et(t,[tt,"l"]),r=et(e,[tt,"l"]);return Math.abs(n-r)}const G1=216/24389,ql=24/116,Nr=24389/27;let pi=Ue.D65;var hs=new F({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:pi,base:Pe,fromBase(t){let n=t.map((r,a)=>r/pi[a]).map(r=>r>G1?Math.cbrt(r):(Nr*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>ql?Math.pow(e[0],3):(116*e[0]-16)/Nr,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/Nr,e[2]>ql?Math.pow(e[2],3):(116*e[2]-16)/Nr].map((r,a)=>r*pi[a])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const mi=Math.pow(5,.5)*.5+.5;function Y1(t,e){t=J(t),e=J(e);let n=et(t,[hs,"l"]),r=et(e,[hs,"l"]),a=Math.abs(Math.pow(n,mi)-Math.pow(r,mi)),i=Math.pow(a,1/mi)*Math.SQRT2-40;return i<7.5?0:i}var Kr=Object.freeze({__proto__:null,contrastAPCA:B1,contrastDeltaPhi:Y1,contrastLstar:q1,contrastMichelson:H1,contrastWCAG21:R1,contrastWeber:U1});function J1(t,e,n={}){Er(n)&&(n={algorithm:n});let{algorithm:r,...a}=n;if(!r){let i=Object.keys(Kr).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}t=J(t),e=J(e);for(let i in Kr)if("contrast"+r.toLowerCase()===i.toLowerCase())return Kr[i](t,e,a);throw new TypeError(`Unknown contrast algorithm: ${r}`)}function Aa(t){let[e,n,r]=Mr(t,Pe),a=e+15*n+3*r;return[4*e/a,9*n/a]}function Cu(t){let[e,n,r]=Mr(t,Pe),a=e+n+r;return[e/a,n/a]}function X1(t){Object.defineProperty(t.prototype,"uv",{get(){return Aa(this)}}),Object.defineProperty(t.prototype,"xy",{get(){return Cu(this)}})}var K1=Object.freeze({__proto__:null,register:X1,uv:Aa,xy:Cu});function Qn(t,e,n={}){Er(n)&&(n={method:n});let{method:r=nt.deltaE,...a}=n;for(let i in In)if("deltae"+r.toLowerCase()===i.toLowerCase())return In[i](t,e,a);throw new TypeError(`Unknown deltaE method: ${r}`)}function Z1(t,e=.25){let r=[F.get("oklch","lch"),"l"];return jt(t,r,a=>a*(1+e))}function Q1(t,e=.25){let r=[F.get("oklch","lch"),"l"];return jt(t,r,a=>a*(1-e))}var em=Object.freeze({__proto__:null,darken:Q1,lighten:Z1});function ku(t,e,n=.5,r={}){return[t,e]=[J(t),J(e)],Bt(n)==="object"&&([n,r]=[.5,n]),Ar(t,e,r)(n)}function Lu(t,e,n={}){let r;Ks(t)&&([r,n]=[t,e],[t,e]=r.rangeArgs.colors);let{maxDeltaE:a,deltaEMethod:i,steps:s=2,maxSteps:o=1e3,...l}=n;r||([t,e]=[J(t),J(e)],r=Ar(t,e,l));let f=Qn(t,e),c=a>0?Math.max(s,Math.ceil(f/a)+1):s,u=[];if(o!==void 0&&(c=Math.min(c,o)),c===1)u=[{p:.5,color:r(.5)}];else{let _=1/(c-1);u=Array.from({length:c},(d,g)=>{let m=g*_;return{p:m,color:r(m)}})}if(a>0){let _=u.reduce((d,g,m)=>{if(m===0)return 0;let p=Qn(g.color,u[m-1].color,i);return Math.max(d,p)},0);for(;_>a;){_=0;for(let d=1;d<u.length&&u.length<o;d++){let g=u[d-1],m=u[d],p=(m.p+g.p)/2,v=r(p);_=Math.max(_,Qn(v,g.color),Qn(v,m.color)),u.splice(d,0,{p,color:r(p)}),d++}}}return u=u.map(_=>_.color),u}function Ar(t,e,n={}){if(Ks(t)){let[l,f]=[t,e];return Ar(...l.rangeArgs.colors,{...l.rangeArgs.options,...f})}let{space:r,outputSpace:a,progression:i,premultiplied:s}=n;t=J(t),e=J(e),t=Fn(t),e=Fn(e);let o={colors:[t,e],options:n};if(r?r=F.get(r):r=F.registry[nt.interpolationSpace]||t.space,a=a?F.get(a):r,t=be(t,r),e=be(e,r),t=Gt(t),e=Gt(e),r.coords.h&&r.coords.h.type==="angle"){let l=n.hue=n.hue||"shorter",f=[r,"h"],[c,u]=[et(t,f),et(e,f)];isNaN(c)&&!isNaN(u)?c=u:isNaN(u)&&!isNaN(c)&&(u=c),[c,u]=jp(l,[c,u]),jt(t,f,c),jt(e,f,u)}return s&&(t.coords=t.coords.map(l=>l*t.alpha),e.coords=e.coords.map(l=>l*e.alpha)),Object.assign(l=>{l=i?i(l):l;let f=t.coords.map((_,d)=>{let g=e.coords[d];return dr(_,g,l)}),c=dr(t.alpha,e.alpha,l),u={space:r,coords:f,alpha:c};return s&&(u.coords=u.coords.map(_=>_/c)),a!==r&&(u=be(u,a)),u},{rangeArgs:o})}function Ks(t){return Bt(t)==="function"&&!!t.rangeArgs}nt.interpolationSpace="lab";function tm(t){t.defineFunction("mix",ku,{returns:"color"}),t.defineFunction("range",Ar,{returns:"function<color>"}),t.defineFunction("steps",Lu,{returns:"array<color>"})}var nm=Object.freeze({__proto__:null,isRange:Ks,mix:ku,range:Ar,register:tm,steps:Lu}),Tu=new F({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Nn,fromBase:t=>{let e=Math.max(...t),n=Math.min(...t),[r,a,i]=t,[s,o,l]=[NaN,0,(n+e)/2],f=e-n;if(f!==0){switch(o=l===0||l===1?0:(e-l)/Math.min(l,1-l),e){case r:s=(a-i)/f+(a<i?6:0);break;case a:s=(i-r)/f+2;break;case i:s=(r-a)/f+4}s=s*60}return o<0&&(s+=180,o=Math.abs(o)),s>=360&&(s-=360),[s,o*100,l*100]},toBase:t=>{let[e,n,r]=t;e=e%360,e<0&&(e+=360),n/=100,r/=100;function a(i){let s=(i+e/30)%12,o=n*Math.min(r,1-r);return r-o*Math.max(-1,Math.min(s-3,9-s,1))}return[a(0),a(8),a(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),$u=new F({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Tu,fromBase(t){let[e,n,r]=t;n/=100,r/=100;let a=r+n*Math.min(r,1-r);return[e,a===0?0:200*(1-r/a),100*a]},toBase(t){let[e,n,r]=t;n/=100,r/=100;let a=r*(1-n/2);return[e,a===0||a===1?0:(r-a)/Math.min(a,1-a)*100,a*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),rm=new F({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:$u,fromBase(t){let[e,n,r]=t;return[e,r*(100-n)/100,100-r]},toBase(t){let[e,n,r]=t;n/=100,r/=100;let a=n+r;if(a>=1){let o=n/a;return[e,0,o*100]}let i=1-r,s=i===0?0:1-n/i;return[e,s*100,i*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const am=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],im=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Ru=new Je({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:am,fromXYZ_M:im}),sm=new Je({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Ru,toBase:t=>t.map(e=>Math.pow(Math.abs(e),563/256)*Math.sign(e)),fromBase:t=>t.map(e=>Math.pow(Math.abs(e),256/563)*Math.sign(e))});const om=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],lm=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var ju=new Je({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Ys,toXYZ_M:om,fromXYZ_M:lm});const cm=1/512,fm=16/512;var um=new Je({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:ju,toBase(t){return t.map(e=>e<fm?e/16:e**1.8)},fromBase(t){return t.map(e=>e>=cm?e**(1/1.8):16*e)}}),_m=new F({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:On,fromBase(t){let[e,n,r]=t,a;const i=2e-4;return Math.abs(n)<i&&Math.abs(r)<i?a=NaN:a=Math.atan2(r,n)*180/Math.PI,[e,Math.sqrt(n**2+r**2),kt(a)]},toBase(t){let[e,n,r]=t,a,i;return isNaN(r)?(a=0,i=0):(a=n*Math.cos(r*Math.PI/180),i=n*Math.sin(r*Math.PI/180)),[e,a,i]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let Ou=Ue.D65;const dm=216/24389,Gl=24389/27,[Yl,Jl]=Aa({space:Pe,coords:Ou});var Fu=new F({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Ou,base:Pe,fromBase(t){let e=[Le(t[0]),Le(t[1]),Le(t[2])],n=e[1],[r,a]=Aa({space:Pe,coords:e});if(!Number.isFinite(r)||!Number.isFinite(a))return[0,0,0];let i=n<=dm?Gl*n:116*Math.cbrt(n)-16;return[i,13*i*(r-Yl),13*i*(a-Jl)]},toBase(t){let[e,n,r]=t;if(e===0||Ut(e))return[0,0,0];n=Le(n),r=Le(r);let a=n/(13*e)+Yl,i=r/(13*e)+Jl,s=e<=8?e/Gl:Math.pow((e+16)/116,3);return[s*(9*a/(4*i)),s,s*((12-3*a-20*i)/(4*i))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Zs=new F({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Fu,fromBase(t){let[e,n,r]=t,a;const i=.02;return Math.abs(n)<i&&Math.abs(r)<i?a=NaN:a=Math.atan2(r,n)*180/Math.PI,[e,Math.sqrt(n**2+r**2),kt(a)]},toBase(t){let[e,n,r]=t;return n<0&&(n=0),isNaN(r)&&(r=0),[e,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const gm=216/24389,pm=24389/27,Xl=$e[0][0],Kl=$e[0][1],hi=$e[0][2],Zl=$e[1][0],Ql=$e[1][1],bi=$e[1][2],ec=$e[2][0],tc=$e[2][1],wi=$e[2][2];function yn(t,e,n){const r=e/(Math.sin(n)-t*Math.cos(n));return r<0?1/0:r}function _a(t){const e=Math.pow(t+16,3)/1560896,n=e>gm?e:t/pm,r=n*(284517*Xl-94839*hi),a=n*(838422*hi+769860*Kl+731718*Xl),i=n*(632260*hi-126452*Kl),s=n*(284517*Zl-94839*bi),o=n*(838422*bi+769860*Ql+731718*Zl),l=n*(632260*bi-126452*Ql),f=n*(284517*ec-94839*wi),c=n*(838422*wi+769860*tc+731718*ec),u=n*(632260*wi-126452*tc);return{r0s:r/i,r0i:a*t/i,r1s:r/(i+126452),r1i:(a-769860)*t/(i+126452),g0s:s/l,g0i:o*t/l,g1s:s/(l+126452),g1i:(o-769860)*t/(l+126452),b0s:f/u,b0i:c*t/u,b1s:f/(u+126452),b1i:(c-769860)*t/(u+126452)}}function nc(t,e){const n=e/360*Math.PI*2,r=yn(t.r0s,t.r0i,n),a=yn(t.r1s,t.r1i,n),i=yn(t.g0s,t.g0i,n),s=yn(t.g1s,t.g1i,n),o=yn(t.b0s,t.b0i,n),l=yn(t.b1s,t.b1i,n);return Math.min(r,a,i,s,o,l)}var mm=new F({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Zs,gamutSpace:Nn,fromBase(t){let[e,n,r]=[Le(t[0]),Le(t[1]),Le(t[2])],a;if(e>99.9999999)a=0,e=100;else if(e<1e-8)a=0,e=0;else{let i=_a(e),s=nc(i,r);a=n/s*100}return[r,a,e]},toBase(t){let[e,n,r]=[Le(t[0]),Le(t[1]),Le(t[2])],a;if(r>99.9999999)r=100,a=0;else if(r<1e-8)r=0,a=0;else{let i=_a(r);a=nc(i,e)/100*n}return[r,a,e]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});$e[0][0];$e[0][1];$e[0][2];$e[1][0];$e[1][1];$e[1][2];$e[2][0];$e[2][1];$e[2][2];function vn(t,e){return Math.abs(e)/Math.sqrt(Math.pow(t,2)+1)}function rc(t){let e=vn(t.r0s,t.r0i),n=vn(t.r1s,t.r1i),r=vn(t.g0s,t.g0i),a=vn(t.g1s,t.g1i),i=vn(t.b0s,t.b0i),s=vn(t.b1s,t.b1i);return Math.min(e,n,r,a,i,s)}var hm=new F({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Zs,gamutSpace:"self",fromBase(t){let[e,n,r]=[Le(t[0]),Le(t[1]),Le(t[2])],a;if(e>99.9999999)a=0,e=100;else if(e<1e-8)a=0,e=0;else{let i=_a(e),s=rc(i);a=n/s*100}return[r,a,e]},toBase(t){let[e,n,r]=[Le(t[0]),Le(t[1]),Le(t[2])],a;if(r>99.9999999)r=100,a=0;else if(r<1e-8)r=0,a=0;else{let i=_a(r);a=rc(i)/100*n}return[r,a,e]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const ac=203,ic=2610/2**14,bm=2**14/2610,wm=2523/2**5,sc=2**5/2523,oc=3424/2**12,lc=2413/2**7,cc=2392/2**7;var ym=new Je({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Ma,toBase(t){return t.map(function(e){return(Math.max(e**sc-oc,0)/(lc-cc*e**sc))**bm*1e4/ac})},fromBase(t){return t.map(function(e){let n=Math.max(e*ac/1e4,0),r=oc+lc*n**ic,a=1+cc*n**ic;return(r/a)**wm})}});const fc=.17883277,uc=.28466892,_c=.55991073,yi=3.7743;var vm=new Je({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Ma,toBase(t){return t.map(function(e){return e<=.5?e**2/3*yi:(Math.exp((e-_c)/fc)+uc)/12*yi})},fromBase(t){return t.map(function(e){return e/=yi,e<=1/12?Math.sqrt(3*e):fc*Math.log(12*e-uc)+_c})}});const Iu={};qt.add("chromatic-adaptation-start",t=>{t.options.method&&(t.M=Nu(t.W1,t.W2,t.options.method))});qt.add("chromatic-adaptation-end",t=>{t.M||(t.M=Nu(t.W1,t.W2,t.options.method))});function Ca({id:t,toCone_M:e,fromCone_M:n}){Iu[t]=arguments[0]}function Nu(t,e,n="Bradford"){let r=Iu[n],[a,i,s]=ye(r.toCone_M,t),[o,l,f]=ye(r.toCone_M,e),c=[[o/a,0,0],[0,l/i,0],[0,0,f/s]],u=ye(c,r.toCone_M);return ye(r.fromCone_M,u)}Ca({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Ca({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Ca({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Ca({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Ue,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Ue.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const xm=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Sm=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Pu=new Je({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Ue.ACES,toXYZ_M:xm,fromXYZ_M:Sm});const Pr=2**-16,vi=-.35828683,zr=(Math.log2(65504)+9.72)/17.52;var Em=new Je({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[vi,zr],name:"Red"},g:{range:[vi,zr],name:"Green"},b:{range:[vi,zr],name:"Blue"}},referred:"scene",base:Pu,toBase(t){const e=-.3013698630136986;return t.map(function(n){return n<=e?(2**(n*17.52-9.72)-Pr)*2:n<zr?2**(n*17.52-9.72):65504})},fromBase(t){return t.map(function(e){return e<=0?(Math.log2(Pr)+9.72)/17.52:e<Pr?(Math.log2(Pr+e*.5)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})}}),dc=Object.freeze({__proto__:null,A98RGB:sm,A98RGB_Linear:Ru,ACEScc:Em,ACEScg:Pu,CAM16_JMh:_1,HCT:pr,HPLuv:hm,HSL:Tu,HSLuv:mm,HSV:$u,HWB:rm,ICTCP:gs,JzCzHz:ds,Jzazbz:_u,LCH:gr,LCHuv:Zs,Lab:tt,Lab_D65:hs,Luv:Fu,OKLCH:_m,OKLab:On,P3:Mu,P3_Linear:Su,ProPhoto:um,ProPhoto_Linear:ju,REC_2020:xu,REC_2020_Linear:Ma,REC_2100_HLG:vm,REC_2100_PQ:ym,XYZ_ABS_D65:Js,XYZ_D50:Ys,XYZ_D65:Pe,sRGB:Nn,sRGB_Linear:Eu});class de{constructor(...e){let n;e.length===1&&(n=J(e[0]));let r,a,i;n?(r=n.space||n.spaceId,a=n.coords,i=n.alpha):[r,a,i]=e,Object.defineProperty(this,"space",{value:F.get(r),writable:!1,enumerable:!0,configurable:!0}),this.coords=a?a.slice():[0,0,0],this.alpha=i>1||i===void 0?1:i<0?0:i;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:o=>this.set(s,o)})}get spaceId(){return this.space.id}clone(){return new de(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...e){let n=k1(this,...e);return n.color=new de(n.color),n}static get(e,...n){return e instanceof de?e:new de(e,...n)}static defineFunction(e,n,r=n){let{instance:a=!0,returns:i}=r,s=function(...o){let l=n(...o);if(i==="color")l=de.get(l);else if(i==="function<color>"){let f=l;l=function(...c){let u=f(...c);return de.get(u)},Object.assign(l,f)}else i==="array<color>"&&(l=l.map(f=>de.get(f)));return l};e in de||(de[e]=s),a&&(de.prototype[e]=function(...o){return s(this,...o)})}static defineFunctions(e){for(let n in e)de.defineFunction(n,e[n],e[n])}static extend(e){if(e.register)e.register(de);else for(let n in e)de.defineFunction(n,e[n])}}de.defineFunctions({get:et,getAll:Mr,set:jt,setAll:Gs,to:be,equals:L1,inGamut:cn,toGamut:Gt,distance:uu,toString:sr});Object.assign(de,{util:Cp,hooks:qt,WHITES:Ue,Space:F,spaces:F.registry,parse:cu,defaults:nt});for(let t of Object.keys(dc))F.register(dc[t]);for(let t in F.registry)bs(t,F.registry[t]);qt.add("colorspace-init-end",t=>{var e;bs(t.id,t),(e=t.aliases)==null||e.forEach(n=>{bs(n,t)})});function bs(t,e){let n=t.replace(/-/g,"_");Object.defineProperty(de.prototype,n,{get(){let r=this.getAll(t);return typeof Proxy>"u"?r:new Proxy(r,{has:(a,i)=>{try{return F.resolveCoord([e,i]),!0}catch{}return Reflect.has(a,i)},get:(a,i,s)=>{if(i&&typeof i!="symbol"&&!(i in a)){let{index:o}=F.resolveCoord([e,i]);if(o>=0)return a[o]}return Reflect.get(a,i,s)},set:(a,i,s,o)=>{if(i&&typeof i!="symbol"&&!(i in a)||i>=0){let{index:l}=F.resolveCoord([e,i]);if(l>=0)return a[l]=s,this.setAll(t,a),!0}return Reflect.set(a,i,s,o)}})},set(r){this.setAll(t,r)},configurable:!0,enumerable:!0})}de.extend(In);de.extend({deltaE:Qn});Object.assign(de,{deltaEMethods:In});de.extend(em);de.extend({contrast:J1});de.extend(K1);de.extend($1);de.extend(nm);de.extend(Kr);function Mm(t){return new de(t).luminance>.5?"black":"white"}const zu={Agreement:"#228B22",BoundaryError:"#8B4513",Capitalization:"#540D6E",Eggcorn:"#FF8C00",Enhancement:"#0EAD69",Formatting:"#7D3C98",Grammar:"#9B59B6",Malapropism:"#C71585",Miscellaneous:"#3BCEAC",Nonstandard:"#008B8B",Punctuation:"#D4850F",Readability:"#2E8B57",Redundancy:"#4682B4",Regionalism:"#C061CB",Repetition:"#00A67C",Spelling:"#EE4266",Style:"#FFD23F",Typo:"#FF6B35",Usage:"#1E90FF",WordChoice:"#228B22",WordOrder:"#4D4DFF"};function Ln(t){const e=zu[t];if(!e)throw new Error(`Unexpected lint kind: ${t}`);return e}function Am(t){const e=zu[t]??t;return Mm(e)}const Cm={},Du=Object.freeze(Object.defineProperty({__proto__:null,default:Cm},Symbol.toStringTag,{value:"Module"})),km=dp(Du);var xi,gc;function Wu(){if(gc)return xi;gc=1;var t=typeof la<"u"?la:typeof window<"u"?window:{},e=km,n;return typeof document<"u"?n=document:(n=t["__GLOBAL_DOCUMENT_CACHE@4"],n||(n=t["__GLOBAL_DOCUMENT_CACHE@4"]=e)),xi=n,xi}var Si,pc;function Bu(){return pc||(pc=1,Si=function(e){return typeof e=="object"&&e!==null}),Si}var Ei,mc;function Hu(){if(mc)return Ei;mc=1;var t=Bu(),e=xa();Ei=n;function n(s,o,l){for(var f in o){var c=o[f];c===void 0?r(s,f,c,l):e(c)?(r(s,f,c,l),c.hook&&c.hook(s,f,l?l[f]:void 0)):t(c)?a(s,o,l,f,c):s[f]=c}}function r(s,o,l,f){if(f){var c=f[o];if(e(c))c.unhook&&c.unhook(s,o,l);else if(o==="attributes")for(var u in c)s.removeAttribute(u);else if(o==="style")for(var _ in c)s.style[_]="";else typeof c=="string"?s[o]="":s[o]=null}}function a(s,o,l,f,c){var u=l?l[f]:void 0;if(f==="attributes"){for(var _ in c){var d=c[_];d===void 0?s.removeAttribute(_):s.setAttribute(_,d)}return}if(u&&t(u)&&i(u)!==i(c)){s[f]=c;return}t(s[f])||(s[f]={});var g=f==="style"?"":void 0;for(var m in c){var p=c[m];s[f][m]=p===void 0?g:p}}function i(s){if(Object.getPrototypeOf)return Object.getPrototypeOf(s);if(s.__proto__)return s.__proto__;if(s.constructor)return s.constructor.prototype}return Ei}var Mi,hc;function Vu(){if(hc)return Mi;hc=1;var t=Sr(),e=Sa(),n=dn(),r=va();Mi=a;function a(s,o){var l=s,f=o;return r(o)&&(f=i(o,s)),r(s)&&(l=i(s,null)),{a:l,b:f}}function i(s,o){var l=s.vnode;if(l||(l=s.vnode=s.render(o)),!(t(l)||e(l)||n(l)))throw new Error("thunk did not return a valid node");return l}return Mi}var Ai,bc;function Uu(){if(bc)return Ai;bc=1;var t=Wu(),e=Hu(),n=Sr(),r=Sa(),a=dn(),i=Vu();Ai=s;function s(o,l){var f=l&&l.document||t,c=l?l.warn:null;if(o=i(o).a,a(o))return o.init();if(r(o))return f.createTextNode(o.text);if(!n(o))return c&&c("Item is not a valid virtual dom node",o),null;var u=o.namespace===null?f.createElement(o.tagName):f.createElementNS(o.namespace,o.tagName),_=o.properties;e(u,_);for(var d=o.children,g=0;g<d.length;g++){var m=s(d[g],l);m&&u.appendChild(m)}return u}return Ai}var Ci,wc;function Lm(){if(wc)return Ci;wc=1;var t=Uu();return Ci=t,Ci}var Tm=Lm();const $m=ya(Tm);var ki,yc;function qu(){if(yc)return ki;yc=1;var t=xr();e.NONE=0,e.VTEXT=1,e.VNODE=2,e.WIDGET=3,e.PROPS=4,e.ORDER=5,e.INSERT=6,e.REMOVE=7,e.THUNK=8,ki=e;function e(n,r,a){this.type=Number(n),this.vNode=r,this.patch=a}return e.prototype.version=t,e.prototype.type="VirtualPatch",ki}var Li,vc;function Rm(){if(vc)return Li;vc=1;var t=Bu(),e=xa();Li=n;function n(a,i){var s;for(var o in a){o in i||(s=s||{},s[o]=void 0);var l=a[o],f=i[o];if(l!==f)if(t(l)&&t(f))if(r(f)!==r(l))s=s||{},s[o]=f;else if(e(f))s=s||{},s[o]=f;else{var c=n(l,f);c&&(s=s||{},s[o]=c)}else s=s||{},s[o]=f}for(var u in i)u in a||(s=s||{},s[u]=i[u]);return s}function r(a){if(Object.getPrototypeOf)return Object.getPrototypeOf(a);if(a.__proto__)return a.__proto__;if(a.constructor)return a.constructor.prototype}return Li}var Ti,xc;function jm(){if(xc)return Ti;xc=1;var t=Vs(),e=qu(),n=Sr(),r=Sa(),a=dn(),i=va(),s=Vu(),o=Rm();Ti=l;function l(S,E){var A={a:S};return f(S,E,A,0),A}function f(S,E,A,k){if(S!==E){var C=A[k],L=!1;if(i(S)||i(E))d(S,E,A,k);else if(E==null)a(S)||(u(S,A,k),C=A[k]),C=M(C,new e(e.REMOVE,S,E));else if(n(E))if(n(S))if(S.tagName===E.tagName&&S.namespace===E.namespace&&S.key===E.key){var $=o(S.properties,E.properties);$&&(C=M(C,new e(e.PROPS,S,$))),C=c(S,E,A,C,k)}else C=M(C,new e(e.VNODE,S,E)),L=!0;else C=M(C,new e(e.VNODE,S,E)),L=!0;else r(E)?r(S)?S.text!==E.text&&(C=M(C,new e(e.VTEXT,S,E))):(C=M(C,new e(e.VTEXT,S,E)),L=!0):a(E)&&(a(S)||(L=!0),C=M(C,new e(e.WIDGET,S,E)));C&&(A[k]=C),L&&u(S,A,k)}}function c(S,E,A,k,C){for(var L=S.children,$=v(L,E.children),z=$.children,G=L.length,N=z.length,R=G>N?G:N,j=0;j<R;j++){var D=L[j],V=z[j];C+=1,D?f(D,V,A,C):V&&(k=M(k,new e(e.INSERT,null,V))),n(D)&&D.count&&(C+=D.count)}return $.moves&&(k=M(k,new e(e.ORDER,S,$.moves))),k}function u(S,E,A){m(S,E,A),_(S,E,A)}function _(S,E,A){if(a(S))typeof S.destroy=="function"&&(E[A]=M(E[A],new e(e.REMOVE,S,null)));else if(n(S)&&(S.hasWidgets||S.hasThunks))for(var k=S.children,C=k.length,L=0;L<C;L++){var $=k[L];A+=1,_($,E,A),n($)&&$.count&&(A+=$.count)}else i(S)&&d(S,null,E,A)}function d(S,E,A,k){var C=s(S,E),L=l(C.a,C.b);g(L)&&(A[k]=new e(e.THUNK,null,L))}function g(S){for(var E in S)if(E!=="a")return!0;return!1}function m(S,E,A){if(n(S)){if(S.hooks&&(E[A]=M(E[A],new e(e.PROPS,S,p(S.hooks)))),S.descendantHooks||S.hasThunks)for(var k=S.children,C=k.length,L=0;L<C;L++){var $=k[L];A+=1,m($,E,A),n($)&&$.count&&(A+=$.count)}}else i(S)&&d(S,null,E,A)}function p(S){var E={};for(var A in S)E[A]=void 0;return E}function v(S,E){var A=x(E),k=A.keys,C=A.free;if(C.length===E.length)return{children:E,moves:null};var L=x(S),$=L.keys,z=L.free;if(z.length===S.length)return{children:E,moves:null};for(var G=[],N=0,R=C.length,j=0,D=0;D<S.length;D++){var V=S[D],Y;V.key?k.hasOwnProperty(V.key)?(Y=k[V.key],G.push(E[Y])):(Y=D-j++,G.push(null)):N<R?(Y=C[N++],G.push(E[Y])):(Y=D-j++,G.push(null))}for(var ve=N>=C.length?E.length:C[N],fe=0;fe<E.length;fe++){var ue=E[fe];ue.key?$.hasOwnProperty(ue.key)||G.push(ue):fe>=ve&&G.push(ue)}for(var se=G.slice(),U=0,q=[],te=[],Z,xe=0;xe<E.length;){var Ce=E[xe];for(Z=se[U];Z===null&&se.length;)q.push(h(se,U,null)),Z=se[U];!Z||Z.key!==Ce.key?Ce.key?(Z&&Z.key?k[Z.key]!==xe+1?(q.push(h(se,U,Z.key)),Z=se[U],!Z||Z.key!==Ce.key?te.push({key:Ce.key,to:xe}):U++):te.push({key:Ce.key,to:xe}):te.push({key:Ce.key,to:xe}),xe++):Z&&Z.key&&q.push(h(se,U,Z.key)):(U++,xe++)}for(;U<se.length;)Z=se[U],q.push(h(se,U,Z&&Z.key));return q.length===j&&!te.length?{children:G,moves:null}:{children:G,moves:{removes:q,inserts:te}}}function h(S,E,A){return S.splice(E,1),{from:E,key:A}}function x(S){for(var E={},A=[],k=S.length,C=0;C<k;C++){var L=S[C];L.key?E[L.key]=C:A.push(C)}return{keys:E,free:A}}function M(S,E){return S?(t(S)?S.push(E):S=[S,E],S):E}return Ti}var $i,Sc;function Om(){if(Sc)return $i;Sc=1;var t=jm();return $i=t,$i}var Fm=Om();const Im=ya(Fm);var Ri,Ec;function Nm(){if(Ec)return Ri;Ec=1;var t={};Ri=e;function e(i,s,o,l){return!o||o.length===0?{}:(o.sort(a),n(i,s,o,l,0))}function n(i,s,o,l,f){if(l=l||{},i){r(o,f,f)&&(l[f]=i);var c=s.children;if(c)for(var u=i.childNodes,_=0;_<s.children.length;_++){f+=1;var d=c[_]||t,g=f+(d.count||0);r(o,f,g)&&n(u[_],d,o,l,f),f=g}}return l}function r(i,s,o){if(i.length===0)return!1;for(var l=0,f=i.length-1,c,u;l<=f;){if(c=(f+l)/2>>0,u=i[c],l===f)return u>=s&&u<=o;if(u<s)l=c+1;else if(u>o)f=c-1;else return!0}return!1}function a(i,s){return i>s?1:-1}return Ri}var ji,Mc;function Pm(){if(Mc)return ji;Mc=1;var t=dn();ji=e;function e(n,r){return t(n)&&t(r)?"name"in n&&"name"in r?n.id===r.id:n.init===r.init:!1}return ji}var Oi,Ac;function zm(){if(Ac)return Oi;Ac=1;var t=Hu(),e=dn(),n=qu(),r=Pm();Oi=a;function a(d,g,m){var p=d.type,v=d.vNode,h=d.patch;switch(p){case n.REMOVE:return i(g,v);case n.INSERT:return s(g,h,m);case n.VTEXT:return o(g,v,h,m);case n.WIDGET:return l(g,v,h,m);case n.VNODE:return f(g,v,h,m);case n.ORDER:return u(g,h),g;case n.PROPS:return t(g,h,v.properties),g;case n.THUNK:return _(g,m.patch(g,h,m));default:return g}}function i(d,g){var m=d.parentNode;return m&&m.removeChild(d),c(d,g),null}function s(d,g,m){var p=m.render(g,m);return d&&d.appendChild(p),d}function o(d,g,m,p){var v;if(d.nodeType===3)d.replaceData(0,d.length,m.text),v=d;else{var h=d.parentNode;v=p.render(m,p),h&&v!==d&&h.replaceChild(v,d)}return v}function l(d,g,m,p){var v=r(g,m),h;v?h=m.update(g,d)||d:h=p.render(m,p);var x=d.parentNode;return x&&h!==d&&x.replaceChild(h,d),v||c(d,g),h}function f(d,g,m,p){var v=d.parentNode,h=p.render(m,p);return v&&h!==d&&v.replaceChild(h,d),h}function c(d,g){typeof g.destroy=="function"&&e(g)&&g.destroy(d)}function u(d,g){for(var m=d.childNodes,p={},v,h,x,M=0;M<g.removes.length;M++)h=g.removes[M],v=m[h.from],h.key&&(p[h.key]=v),d.removeChild(v);for(var S=m.length,E=0;E<g.inserts.length;E++)x=g.inserts[E],v=p[x.key],d.insertBefore(v,x.to>=S++?null:m[x.to])}function _(d,g){return d&&g&&d!==g&&d.parentNode&&d.parentNode.replaceChild(g,d),g}return Oi}var Fi,Cc;function Dm(){if(Cc)return Fi;Cc=1;var t=Wu(),e=Vs(),n=Uu(),r=Nm(),a=zm();Fi=i;function i(f,c,u){return u=u||{},u.patch=u.patch&&u.patch!==i?u.patch:s,u.render=u.render||n,u.patch(f,c,u)}function s(f,c,u){var _=l(c);if(_.length===0)return f;var d=r(f,c.a,_),g=f.ownerDocument;!u.document&&g!==t&&(u.document=g);for(var m=0;m<_.length;m++){var p=_[m];f=o(f,d[p],c[p],u)}return f}function o(f,c,u,_){if(!c)return f;var d;if(e(u))for(var g=0;g<u.length;g++)d=a(u[g],c,_),c===f&&(f=d);else d=a(u,c,_),c===f&&(f=d);return f}function l(f){var c=[];for(var u in f)u!=="a"&&c.push(Number(u));return c}return Fi}var Ii,kc;function Wm(){if(kc)return Ii;kc=1;var t=Dm();return Ii=t,Ii}var Bm=Wm();const Hm=ya(Bm);class Gu{constructor(e){Q(this,"parentResolver");Q(this,"virtualRoot");Q(this,"virtualTree");Q(this,"shadowHost");this.parentResolver=typeof e=="function"?e:()=>e,this.shadowHost=document.createElement("harper-render-box"),this.parentResolver().appendChild(this.shadowHost)}render(e){if(this.shadowHost.isConnected||this.parentResolver().appendChild(this.shadowHost),!this.virtualRoot||!this.virtualTree)this.virtualRoot=$m(e),this.shadowHost.attachShadow({mode:"open"}).appendChild(this.virtualRoot);else{const n=Im(this.virtualTree,e);this.virtualRoot=Hm(this.virtualRoot,n)}this.virtualTree=e}remove(){try{this.shadowHost.outerHTML=this.shadowHost.outerHTML}catch(e){console.error(e)}this.virtualRoot=void 0,this.virtualTree=void 0}getShadowHost(){return this.shadowHost}}class Vm{constructor(){Q(this,"renderBoxes");Q(this,"highlights");this.renderBoxes=new Map,this.highlights=Gm()?new Map:null}insertHighlightStyle(e,n){const r=Ln(n.lint_kind),a=`underline ${r} solid 2px`,i=`${r}22`,s=`harper-highlight-style-${n.lint_kind}`;if(document.getElementById(s))return;const o=document.createElement("style");o.id=s,o.textContent=`
      ::highlight(${e}) {
        text-decoration: ${a};
        background-color: ${i};
      }
    `,document.head.appendChild(o)}renderLintBoxes(e){const n=new Map;if(this.highlights)for(const[a,i]of this.highlights)i.clear();for(const a of e){if(a.range&&this.highlights!=null){let f=this.highlights.get(a.lint.lint_kind);if(f!=null)f.add(a.range);else{f=new Highlight;const c=`harper-${a.lint.lint_kind}`;CSS.highlights.set(c,f),this.insertHighlightStyle(c,a.lint),f.add(a.range),this.highlights.set(a.lint.lint_kind,f)}continue}let i=this.renderBoxes.get(a.source);i==null&&(i=new Gu(this.computeRenderTarget(a.source)),this.renderBoxes.set(a.source,i));const s=n.get(a.source),o=Um(i.getShadowHost());let l=null;l==null&&o!=null&&(l=o),s==null?n.set(a.source,{boxes:[a],cpa:l}):n.set(a.source,{boxes:[...s.boxes,a],cpa:l})}const r=new Set;for(const[a,{boxes:i,cpa:s}]of n.entries()){if(Zo(a)){r.add(a);continue}const o=this.renderBoxes.get(a),l=o.getShadowHost();l.id="harper-highlight-host";const f=wr(a);if(!ep(l,a))if(s!=null){const d=l.style;d.position="absolute",d.top="0px",d.left="0px",d.inset="0",d.pointerEvents="none",d.width="0px",d.height="0px",d.contain="none",d.transform="none"}else l.hasAttribute("style")&&l.removeAttribute("style");const u=Q0(a)??(f||s==null?null:{x:s.x,y:s.y}),_=f?"absolute":"fixed";o.render(this.renderTree(i,u,_)),r.add(a)}for(const[a,i]of this.renderBoxes.entries())if(!r.has(a)){if(Zo(a))continue;i.render(ge("div",{},[]))}this.pruneDetachedSources()}pruneDetachedSources(){for(const[e,n]of this.renderBoxes.entries())document.contains(e)||(n.remove(),this.renderBoxes.delete(e))}renderTree(e,n,r){const a=[],i=(n==null?void 0:n.x)??0,s=(n==null?void 0:n.y)??0;for(const o of e){const l=o.x-i,f=o.y-s,c=r==="fixed"?{position:"fixed",left:"0px",top:"0px",transform:`translate(${l}px, ${f}px)`}:{position:"absolute",left:`${l}px`,top:`${f}px`},u=ge("div",{style:{...c,width:`${o.width}px`,height:`${o.height}px`,pointerEvents:"none",borderBottom:`2px solid ${Ln(o.lint.lint_kind)}`,backgroundColor:`${Ln(o.lint.lint_kind)}22`},id:"harper-highlight"},[]);a.push(u)}return ge("div",{},a)}computeRenderTarget(e){var a;const n=Z0(e);if(n!=null)return n;if((a=e.parentElement)!=null&&a.classList.contains("ProseMirror"))return e.parentElement.parentElement;const r=[z0,F0,j0,Kf,O0,Hs,Zf,N0,P0,Qf,D0,W0,B0];for(const i of r){const s=i(e);if(s!=null)return s.parentElement}return e.parentElement}}function Um(t){let e=t.parentElement;for(;e&&e.nodeType===1;){if(qm(e))return e.getBoundingClientRect();e=e.parentElement}return null}function qm(t){if(!(t instanceof Element))throw new TypeError("Expected a DOM Element");const e=window.getComputedStyle(t);if(e.getPropertyValue("filter")!=="none"||e.getPropertyValue("backdrop-filter")!=="none"||e.getPropertyValue("transform")!=="none"||e.getPropertyValue("perspective")!=="none"||e.getPropertyValue("contain").match(/\b(layout|paint|strict|content)\b/))return!0;const l=e.getPropertyValue("will-change");if(l&&l.trim()!=="auto"){const c=l.split(",").map(d=>d.trim()),u=["filter","backdrop-filter","transform","perspective"];if(c.filter(d=>u.includes(d)).length)return!0}return e.getPropertyValue("content-visibility")==="auto"}function Gm(){var l,f,c,u;const t=(l=globalThis.document)==null?void 0:l.documentElement;if(((f=t==null?void 0:t.getAttribute)==null?void 0:f.call(t,"data-harper-disable-css-highlights"))==="true"||((c=t==null?void 0:t.dataset)==null?void 0:c.harperDisableCssHighlights)==="true"||((u=globalThis.navigator)==null?void 0:u.webdriver)===!0||!("CSS"in window)||typeof CSS.supports!="function")return!1;const r=CSS.supports("selector(::highlight(__x))"),a=CSS==null?void 0:CSS.highlights,i=!!a&&["get","set","has","delete","clear"].every(_=>typeof a[_]=="function"),s=typeof window.Highlight=="function";let o=!1;if(i&&s)try{const _=new Highlight;CSS.highlights.set("__probe__",_),o=CSS.highlights.has("__probe__"),CSS.highlights.delete("__probe__")}catch{}return r&&i&&s&&o}const Lc=["Vary sentence length to keep readers engaged.","Replace clichés with fresh, precise wording.","Check subject‑verb agreement, especially in long sentences.","Keep consistent terminology across the document.","Read aloud to catch awkward phrasing.","You can easily write em-dashes by typing out three hyphens in a row.","You can easily write en-dashes by typing out two hyphens in a row.","Harper can be configured to open with a hotkey. Check the extension's settings.","Don't agree with a suggestion? Click 'Dismiss' and Harper will adapt to your writing style.","You can add specialized terms, names, or acronyms to your personal dictionary in Harper's settings.","Check your language preferences in Settings to get suggestions for different dialects (e.g., American vs. British English)."];/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Ym(t,e,n){return(e=Xm(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Tc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Tc(Object(n),!0).forEach(function(r){Ym(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Tc(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Jm(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Xm(t){var e=Jm(t,"string");return typeof e=="symbol"?e:e+""}const $c=()=>{};let Qs={},Yu={},Ju=null,Xu={mark:$c,measure:$c};try{typeof window<"u"&&(Qs=window),typeof document<"u"&&(Yu=document),typeof MutationObserver<"u"&&(Ju=MutationObserver),typeof performance<"u"&&(Xu=performance)}catch{}const{userAgent:Rc=""}=Qs.navigator||{},Jt=Qs,me=Yu,jc=Ju,Dr=Xu;Jt.document;const It=!!me.documentElement&&!!me.head&&typeof me.addEventListener=="function"&&typeof me.createElement=="function",Ku=~Rc.indexOf("MSIE")||~Rc.indexOf("Trident/");var Km=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Zm=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Zu={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Qm={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Qu=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],De="classic",ka="duotone",eh="sharp",th="sharp-duotone",e_=[De,ka,eh,th],nh={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},rh={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ah=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),ih={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},sh=["fak","fa-kit","fakd","fa-kit-duotone"],Oc={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},oh=["kit"],lh={kit:{"fa-kit":"fak"}},ch=["fak","fakd"],fh={kit:{fak:"fa-kit"}},Fc={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Wr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},uh=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],_h=["fak","fa-kit","fakd","fa-kit-duotone"],dh={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},gh={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},ph={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ws={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},mh=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ys=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...uh,...mh],hh=["solid","regular","light","thin","duotone","brands"],t_=[1,2,3,4,5,6,7,8,9,10],bh=t_.concat([11,12,13,14,15,16,17,18,19,20]),wh=[...Object.keys(ph),...hh,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Wr.GROUP,Wr.SWAP_OPACITY,Wr.PRIMARY,Wr.SECONDARY].concat(t_.map(t=>"".concat(t,"x"))).concat(bh.map(t=>"w-".concat(t))),yh={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Ot="___FONT_AWESOME___",vs=16,n_="fa",r_="svg-inline--fa",un="data-fa-i2svg",xs="data-fa-pseudo-element",vh="data-fa-pseudo-element-pending",eo="data-prefix",to="data-icon",Ic="fontawesome-i2svg",xh="async",Sh=["HTML","HEAD","STYLE","SCRIPT"],a_=(()=>{try{return!0}catch{return!1}})();function Cr(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[De]}})}const i_=T({},Zu);i_[De]=T(T(T(T({},{"fa-duotone":"duotone"}),Zu[De]),Oc.kit),Oc["kit-duotone"]);const Eh=Cr(i_),Ss=T({},ih);Ss[De]=T(T(T(T({},{duotone:"fad"}),Ss[De]),Fc.kit),Fc["kit-duotone"]);const Nc=Cr(Ss),Es=T({},ws);Es[De]=T(T({},Es[De]),fh.kit);const no=Cr(Es),Ms=T({},gh);Ms[De]=T(T({},Ms[De]),lh.kit);Cr(Ms);const Mh=Km,s_="fa-layers-text",Ah=Zm,Ch=T({},nh);Cr(Ch);const kh=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ni=Qm,Lh=[...oh,...wh],or=Jt.FontAwesomeConfig||{};function Th(t){var e=me.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function $h(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}me&&typeof me.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const a=$h(Th(n));a!=null&&(or[r]=a)});const o_={styleDefault:"solid",familyDefault:De,cssPrefix:n_,replacementClass:r_,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};or.familyPrefix&&(or.cssPrefix=or.familyPrefix);const Pn=T(T({},o_),or);Pn.autoReplaceSvg||(Pn.observeMutations=!1);const I={};Object.keys(o_).forEach(t=>{Object.defineProperty(I,t,{enumerable:!0,set:function(e){Pn[t]=e,lr.forEach(n=>n(I))},get:function(){return Pn[t]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){Pn.cssPrefix=t,lr.forEach(e=>e(I))},get:function(){return Pn.cssPrefix}});Jt.FontAwesomeConfig=I;const lr=[];function Rh(t){return lr.push(t),()=>{lr.splice(lr.indexOf(t),1)}}const Dt=vs,Mt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jh(t){if(!t||!It)return;const e=me.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=me.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return me.head.insertBefore(e,r),t}const Oh="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function mr(){let t=12,e="";for(;t-- >0;)e+=Oh[Math.random()*62|0];return e}function Wn(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ro(t){return t.classList?Wn(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function l_(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fh(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(l_(t[n]),'" '),"").trim()}function La(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function ao(t){return t.size!==Mt.size||t.x!==Mt.x||t.y!==Mt.y||t.rotate!==Mt.rotate||t.flipX||t.flipY}function Ih(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Nh(t){let{transform:e,width:n=vs,height:r=vs,startCentered:a=!1}=t,i="";return a&&Ku?i+="translate(".concat(e.x/Dt-n/2,"em, ").concat(e.y/Dt-r/2,"em) "):a?i+="translate(calc(-50% + ".concat(e.x/Dt,"em), calc(-50% + ").concat(e.y/Dt,"em)) "):i+="translate(".concat(e.x/Dt,"em, ").concat(e.y/Dt,"em) "),i+="scale(".concat(e.size/Dt*(e.flipX?-1:1),", ").concat(e.size/Dt*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Ph=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function c_(){const t=n_,e=r_,n=I.cssPrefix,r=I.replacementClass;let a=Ph;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}let Pc=!1;function Pi(){I.autoAddCss&&!Pc&&(jh(c_()),Pc=!0)}var zh={mixout(){return{dom:{css:c_,insertCss:Pi}}},hooks(){return{beforeDOMElementCreation(){Pi()},beforeI2svg(){Pi()}}}};const Ft=Jt||{};Ft[Ot]||(Ft[Ot]={});Ft[Ot].styles||(Ft[Ot].styles={});Ft[Ot].hooks||(Ft[Ot].hooks={});Ft[Ot].shims||(Ft[Ot].shims=[]);var At=Ft[Ot];const f_=[],u_=function(){me.removeEventListener("DOMContentLoaded",u_),da=1,f_.map(t=>t())};let da=!1;It&&(da=(me.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(me.readyState),da||me.addEventListener("DOMContentLoaded",u_));function Dh(t){It&&(da?setTimeout(t,0):f_.push(t))}function kr(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?l_(t):"<".concat(e," ").concat(Fh(n),">").concat(r.map(kr).join(""),"</").concat(e,">")}function zc(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var zi=function(e,n,r,a){var i=Object.keys(e),s=i.length,o=n,l,f,c;for(r===void 0?(l=1,c=e[i[0]]):(l=0,c=r);l<s;l++)f=i[l],c=o(c,e[f],f,e);return c};function Wh(t){const e=[];let n=0;const r=t.length;for(;n<r;){const a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function As(t){const e=Wh(t);return e.length===1?e[0].toString(16):null}function Bh(t,e){const n=t.length;let r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Dc(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Cs(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=Dc(e);typeof At.hooks.addPack=="function"&&!r?At.hooks.addPack(t,Dc(e)):At.styles[t]=T(T({},At.styles[t]||{}),a),t==="fas"&&Cs("fa",e)}const{styles:hr,shims:Hh}=At,__=Object.keys(no),Vh=__.reduce((t,e)=>(t[e]=Object.keys(no[e]),t),{});let io=null,d_={},g_={},p_={},m_={},h_={};function Uh(t){return~Lh.indexOf(t)}function qh(t,e){const n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!Uh(a)?a:null}const b_=()=>{const t=r=>zi(hr,(a,i,s)=>(a[s]=zi(i,r,{}),a),{});d_=t((r,a,i)=>(a[3]&&(r[a[3]]=i),a[2]&&a[2].filter(o=>typeof o=="number").forEach(o=>{r[o.toString(16)]=i}),r)),g_=t((r,a,i)=>(r[i]=i,a[2]&&a[2].filter(o=>typeof o=="string").forEach(o=>{r[o]=i}),r)),h_=t((r,a,i)=>{const s=a[2];return r[i]=i,s.forEach(o=>{r[o]=i}),r});const e="far"in hr||I.autoFetchSvg,n=zi(Hh,(r,a)=>{const i=a[0];let s=a[1];const o=a[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:o}),r},{names:{},unicodes:{}});p_=n.names,m_=n.unicodes,io=Ta(I.styleDefault,{family:I.familyDefault})};Rh(t=>{io=Ta(t.styleDefault,{family:I.familyDefault})});b_();function so(t,e){return(d_[t]||{})[e]}function Gh(t,e){return(g_[t]||{})[e]}function sn(t,e){return(h_[t]||{})[e]}function w_(t){return p_[t]||{prefix:null,iconName:null}}function Yh(t){const e=m_[t],n=so("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Xt(){return io}const y_=()=>({prefix:null,iconName:null,rest:[]});function Jh(t){let e=De;const n=__.reduce((r,a)=>(r[a]="".concat(I.cssPrefix,"-").concat(a),r),{});return e_.forEach(r=>{(t.includes(n[r])||t.some(a=>Vh[r].includes(a)))&&(e=r)}),e}function Ta(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=De}=e,r=Eh[n][t];if(n===ka&&!t)return"fad";const a=Nc[n][t]||Nc[n][r],i=t in At.styles?t:null;return a||i||null}function Xh(t){let e=[],n=null;return t.forEach(r=>{const a=qh(I.cssPrefix,r);a?n=a:r&&e.push(r)}),{iconName:n,rest:e}}function Wc(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function $a(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const a=ys.concat(_h),i=Wc(t.filter(u=>a.includes(u))),s=Wc(t.filter(u=>!ys.includes(u))),o=i.filter(u=>(r=u,!Qu.includes(u))),[l=null]=o,f=Jh(i),c=T(T({},Xh(s)),{},{prefix:Ta(l,{family:f})});return T(T(T({},c),eb({values:t,family:f,styles:hr,config:I,canonical:c,givenPrefix:r})),Kh(n,r,c))}function Kh(t,e,n){let{prefix:r,iconName:a}=n;if(t||!r||!a)return{prefix:r,iconName:a};const i=e==="fa"?w_(a):{},s=sn(r,a);return a=i.iconName||s||a,r=i.prefix||r,r==="far"&&!hr.far&&hr.fas&&!I.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const Zh=e_.filter(t=>t!==De||t!==ka),Qh=Object.keys(ws).filter(t=>t!==De).map(t=>Object.keys(ws[t])).flat();function eb(t){const{values:e,family:n,canonical:r,givenPrefix:a="",styles:i={},config:s={}}=t,o=n===ka,l=e.includes("fa-duotone")||e.includes("fad"),f=s.familyDefault==="duotone",c=r.prefix==="fad"||r.prefix==="fa-duotone";if(!o&&(l||f||c)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Zh.includes(n)&&(Object.keys(i).find(_=>Qh.includes(_))||s.autoFetchSvg)){const _=ah.get(n).defaultShortPrefixId;r.prefix=_,r.iconName=sn(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=Xt()||"fas"),r}class tb{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]=T(T({},this.definitions[i]||{}),a[i]),Cs(i,a[i]);const s=no[De][i];s&&Cs(s,a[i]),b_()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:i,iconName:s,icon:o}=r[a],l=o[2];e[i]||(e[i]={}),l.length>0&&l.forEach(f=>{typeof f=="string"&&(e[i][f]=o)}),e[i][s]=o}),e}}let Bc=[],An={};const Tn={},nb=Object.keys(Tn);function rb(t,e){let{mixoutsTo:n}=e;return Bc=t,An={},Object.keys(Tn).forEach(r=>{nb.indexOf(r)===-1&&delete Tn[r]}),Bc.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(n[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=a[i][s]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(s=>{An[s]||(An[s]=[]),An[s].push(i[s])})}r.provides&&r.provides(Tn)}),n}function ks(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(An[t]||[]).forEach(s=>{e=s.apply(null,[e,...r])}),e}function _n(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(An[t]||[]).forEach(i=>{i.apply(null,n)})}function Kt(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Tn[t]?Tn[t].apply(null,e):void 0}function Ls(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Xt();if(e)return e=sn(n,e)||e,zc(v_.definitions,n,e)||zc(At.styles,n,e)}const v_=new tb,ab=()=>{I.autoReplaceSvg=!1,I.observeMutations=!1,_n("noAuto")},ib={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return It?(_n("beforeI2svg",t),Kt("pseudoElements2svg",t),Kt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,Dh(()=>{ob({autoReplaceSvgRoot:e}),_n("watch",t)})}},sb={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:sn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Ta(t[0]);return{prefix:n,iconName:sn(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(Mh))){const e=$a(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Xt(),iconName:sn(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Xt();return{prefix:e,iconName:sn(e,t)||t}}}},at={noAuto:ab,config:I,dom:ib,parse:sb,library:v_,findIconDefinition:Ls,toHtml:kr},ob=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=me}=t;(Object.keys(At.styles).length>0||I.autoFetchSvg)&&It&&I.autoReplaceSvg&&at.dom.i2svg({node:e})};function Ra(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>kr(n))}}),Object.defineProperty(t,"node",{get:function(){if(!It)return;const n=me.createElement("div");return n.innerHTML=t.html,n.children}}),t}function lb(t){let{children:e,main:n,mask:r,attributes:a,styles:i,transform:s}=t;if(ao(s)&&n.found&&!r.found){const{width:o,height:l}=n,f={x:o/l/2,y:.5};a.style=La(T(T({},i),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function cb(t){let{prefix:e,iconName:n,children:r,attributes:a,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},a),{},{id:s}),children:r}]}]}function oo(t){const{icons:{main:e,mask:n},prefix:r,iconName:a,transform:i,symbol:s,title:o,maskId:l,titleId:f,extra:c,watchable:u=!1}=t,{width:_,height:d}=n.found?n:e,g=ch.includes(r),m=[I.replacementClass,a?"".concat(I.cssPrefix,"-").concat(a):""].filter(S=>c.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(c.classes).join(" ");let p={children:[],attributes:T(T({},c.attributes),{},{"data-prefix":r,"data-icon":a,class:m,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(d)})};const v=g&&!~c.classes.indexOf("fa-fw")?{width:"".concat(_/d*16*.0625,"em")}:{};u&&(p.attributes[un]=""),o&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(f||mr())},children:[o]}),delete p.attributes.title);const h=T(T({},p),{},{prefix:r,iconName:a,main:e,mask:n,maskId:l,transform:i,symbol:s,styles:T(T({},v),c.styles)}),{children:x,attributes:M}=n.found&&e.found?Kt("generateAbstractMask",h)||{children:[],attributes:{}}:Kt("generateAbstractIcon",h)||{children:[],attributes:{}};return h.children=x,h.attributes=M,s?cb(h):lb(h)}function Hc(t){const{content:e,width:n,height:r,transform:a,title:i,extra:s,watchable:o=!1}=t,l=T(T(T({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});o&&(l[un]="");const f=T({},s.styles);ao(a)&&(f.transform=Nh({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);const c=La(f);c.length>0&&(l.style=c);const u=[];return u.push({tag:"span",attributes:l,children:[e]}),i&&u.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),u}function fb(t){const{content:e,title:n,extra:r}=t,a=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=La(r.styles);i.length>0&&(a.style=i);const s=[];return s.push({tag:"span",attributes:a,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Di}=At;function Ts(t){const e=t[0],n=t[1],[r]=t.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(Ni.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(Ni.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(Ni.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:a}}const ub={found:!1,width:512,height:512};function _b(t,e){!a_&&!I.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function $s(t,e){let n=e;return e==="fa"&&I.styleDefault!==null&&(e=Xt()),new Promise((r,a)=>{if(n==="fa"){const i=w_(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Di[e]&&Di[e][t]){const i=Di[e][t];return r(Ts(i))}_b(t,e),r(T(T({},ub),{},{icon:I.showMissingIcons&&t?Kt("missingIconAbstract")||{}:{}}))})}const Vc=()=>{},Rs=I.measurePerformance&&Dr&&Dr.mark&&Dr.measure?Dr:{mark:Vc,measure:Vc},er='FA "6.7.2"',db=t=>(Rs.mark("".concat(er," ").concat(t," begins")),()=>x_(t)),x_=t=>{Rs.mark("".concat(er," ").concat(t," ends")),Rs.measure("".concat(er," ").concat(t),"".concat(er," ").concat(t," begins"),"".concat(er," ").concat(t," ends"))};var lo={begin:db,end:x_};const Zr=()=>{};function Uc(t){return typeof(t.getAttribute?t.getAttribute(un):null)=="string"}function gb(t){const e=t.getAttribute?t.getAttribute(eo):null,n=t.getAttribute?t.getAttribute(to):null;return e&&n}function pb(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(I.replacementClass)}function mb(){return I.autoReplaceSvg===!0?Qr.replace:Qr[I.autoReplaceSvg]||Qr.replace}function hb(t){return me.createElementNS("http://www.w3.org/2000/svg",t)}function bb(t){return me.createElement(t)}function S_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?hb:bb}=e;if(typeof t=="string")return me.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(S_(i,{ceFn:n}))}),r}function wb(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Qr={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(S_(n),e)}),e.getAttribute(un)===null&&I.keepOriginalSource){let n=me.createComment(wb(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~ro(e).indexOf(I.replacementClass))return Qr.replace(t);const r=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,o)=>(o===I.replacementClass||o.match(r)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const a=n.map(i=>kr(i)).join(`
`);e.setAttribute(un,""),e.innerHTML=a}};function qc(t){t()}function E_(t,e){const n=typeof e=="function"?e:Zr;if(t.length===0)n();else{let r=qc;I.mutateApproach===xh&&(r=Jt.requestAnimationFrame||qc),r(()=>{const a=mb(),i=lo.begin("mutate");t.map(a),i(),n()})}}let co=!1;function M_(){co=!0}function js(){co=!1}let ga=null;function Gc(t){if(!jc||!I.observeMutations)return;const{treeCallback:e=Zr,nodeCallback:n=Zr,pseudoElementsCallback:r=Zr,observeMutationsRoot:a=me}=t;ga=new jc(i=>{if(co)return;const s=Xt();Wn(i).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!Uc(o.addedNodes[0])&&(I.searchPseudoElements&&r(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&I.searchPseudoElements&&r(o.target.parentNode),o.type==="attributes"&&Uc(o.target)&&~kh.indexOf(o.attributeName))if(o.attributeName==="class"&&gb(o.target)){const{prefix:l,iconName:f}=$a(ro(o.target));o.target.setAttribute(eo,l||s),f&&o.target.setAttribute(to,f)}else pb(o.target)&&n(o.target)})}),It&&ga.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function yb(){ga&&ga.disconnect()}function vb(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,a)=>{const i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function xb(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let a=$a(ro(t));return a.prefix||(a.prefix=Xt()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Gh(a.prefix,t.innerText)||so(a.prefix,As(t.innerText))),!a.iconName&&I.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Sb(t){const e=Wn(t.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return I.autoA11y&&(n?e["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||mr()):(e["aria-hidden"]="true",e.focusable="false")),e}function Eb(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Mt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Yc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=xb(t),i=Sb(t),s=ks("parseNodeAttributes",{},t);let o=e.styleParser?vb(t):[];return T({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Mt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:o,attributes:i}},s)}const{styles:Mb}=At;function A_(t){const e=I.autoReplaceSvg==="nest"?Yc(t,{styleParser:!1}):Yc(t);return~e.extra.classes.indexOf(s_)?Kt("generateLayersText",t,e):Kt("generateSvgReplacementMutation",t,e)}function Ab(){return[...sh,...ys]}function Jc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!It)return Promise.resolve();const n=me.documentElement.classList,r=c=>n.add("".concat(Ic,"-").concat(c)),a=c=>n.remove("".concat(Ic,"-").concat(c)),i=I.autoFetchSvg?Ab():Qu.concat(Object.keys(Mb));i.includes("fa")||i.push("fa");const s=[".".concat(s_,":not([").concat(un,"])")].concat(i.map(c=>".".concat(c,":not([").concat(un,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=Wn(t.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();const l=lo.begin("onTree"),f=o.reduce((c,u)=>{try{const _=A_(u);_&&c.push(_)}catch(_){a_||_.name==="MissingIcon"&&console.error(_)}return c},[]);return new Promise((c,u)=>{Promise.all(f).then(_=>{E_(_,()=>{r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),c()})}).catch(_=>{l(),u(_)})})}function Cb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;A_(t).then(n=>{n&&E_([n],e)})}function kb(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Ls(e||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:Ls(a||{})),t(r,T(T({},n),{},{mask:a}))}}const Lb=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Mt,symbol:r=!1,mask:a=null,maskId:i=null,title:s=null,titleId:o=null,classes:l=[],attributes:f={},styles:c={}}=e;if(!t)return;const{prefix:u,iconName:_,icon:d}=t;return Ra(T({type:"icon"},t),()=>(_n("beforeDOMElementCreation",{iconDefinition:t,params:e}),I.autoA11y&&(s?f["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(o||mr()):(f["aria-hidden"]="true",f.focusable="false")),oo({icons:{main:Ts(d),mask:a?Ts(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:_,transform:T(T({},Mt),n),symbol:r,title:s,maskId:i,titleId:o,extra:{attributes:f,styles:c,classes:l}})))};var Tb={mixout(){return{icon:kb(Lb)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Jc,t.nodeCallback=Cb,t}}},provides(t){t.i2svg=function(e){const{node:n=me,callback:r=()=>{}}=e;return Jc(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:a,titleId:i,prefix:s,transform:o,symbol:l,mask:f,maskId:c,extra:u}=n;return new Promise((_,d)=>{Promise.all([$s(r,s),f.iconName?$s(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(g=>{let[m,p]=g;_([e,oo({icons:{main:m,mask:p},prefix:s,iconName:r,transform:o,symbol:l,maskId:c,title:a,titleId:i,extra:u,watchable:!0})])}).catch(d)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:a,transform:i,styles:s}=e;const o=La(s);o.length>0&&(r.style=o);let l;return ao(i)&&(l=Kt("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(l||a.icon),{children:n,attributes:r}}}},$b={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Ra({type:"layer"},()=>{_n("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(a=>{Array.isArray(a)?a.map(i=>{r=r.concat(i.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Rb={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:i={}}=e;return Ra({type:"counter",content:t},()=>(_n("beforeDOMElementCreation",{content:t,params:e}),fb({content:t.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(I.cssPrefix,"-layers-counter"),...r]}})))}}}},jb={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Mt,title:r=null,classes:a=[],attributes:i={},styles:s={}}=e;return Ra({type:"text",content:t},()=>(_n("beforeDOMElementCreation",{content:t,params:e}),Hc({content:t,transform:T(T({},Mt),n),title:r,extra:{attributes:i,styles:s,classes:["".concat(I.cssPrefix,"-layers-text"),...a]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:a,extra:i}=n;let s=null,o=null;if(Ku){const l=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();s=f.width/l,o=f.height/l}return I.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Hc({content:e.innerHTML,width:s,height:o,transform:a,title:r,extra:i,watchable:!0})])}}};const Ob=new RegExp('"',"ug"),Xc=[1105920,1112319],Kc=T(T(T(T({},{FontAwesome:{normal:"fas",400:"fas"}}),rh),yh),dh),Os=Object.keys(Kc).reduce((t,e)=>(t[e.toLowerCase()]=Kc[e],t),{}),Fb=Object.keys(Os).reduce((t,e)=>{const n=Os[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Ib(t){const e=t.replace(Ob,""),n=Bh(e,0),r=n>=Xc[0]&&n<=Xc[1],a=e.length===2?e[0]===e[1]:!1;return{value:As(a?e[0]:e),isSecondary:r||a}}function Nb(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),a=isNaN(r)?"normal":r;return(Os[n]||{})[a]||Fb[n]}function Zc(t,e){const n="".concat(vh).concat(e.replace(":","-"));return new Promise((r,a)=>{if(t.getAttribute(n)!==null)return r();const s=Wn(t.children).filter(_=>_.getAttribute(xs)===e)[0],o=Jt.getComputedStyle(t,e),l=o.getPropertyValue("font-family"),f=l.match(Ah),c=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(s&&!f)return t.removeChild(s),r();if(f&&u!=="none"&&u!==""){const _=o.getPropertyValue("content");let d=Nb(l,c);const{value:g,isSecondary:m}=Ib(_),p=f[0].startsWith("FontAwesome");let v=so(d,g),h=v;if(p){const x=Yh(g);x.iconName&&x.prefix&&(v=x.iconName,d=x.prefix)}if(v&&!m&&(!s||s.getAttribute(eo)!==d||s.getAttribute(to)!==h)){t.setAttribute(n,h),s&&t.removeChild(s);const x=Eb(),{extra:M}=x;M.attributes[xs]=e,$s(v,d).then(S=>{const E=oo(T(T({},x),{},{icons:{main:S,mask:y_()},prefix:d,iconName:h,extra:M,watchable:!0})),A=me.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(A,t.firstChild):t.appendChild(A),A.outerHTML=E.map(k=>kr(k)).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Pb(t){return Promise.all([Zc(t,"::before"),Zc(t,"::after")])}function zb(t){return t.parentNode!==document.head&&!~Sh.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(xs)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Qc(t){if(It)return new Promise((e,n)=>{const r=Wn(t.querySelectorAll("*")).filter(zb).map(Pb),a=lo.begin("searchPseudoElements");M_(),Promise.all(r).then(()=>{a(),js(),e()}).catch(()=>{a(),js(),n()})})}var Db={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Qc,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=me}=e;I.searchPseudoElements&&Qc(n)}}};let ef=!1;var Wb={mixout(){return{dom:{unwatch(){M_(),ef=!0}}}},hooks(){return{bootstrap(){Gc(ks("mutationObserverCallbacks",{}))},noAuto(){yb()},watch(t){const{observeMutationsRoot:e}=t;ef?js():Gc(ks("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const tf=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),i=a[0];let s=a.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var Bb={mixout(){return{parse:{transform:t=>tf(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=tf(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:a,iconWidth:i}=e;const s={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(o," ").concat(l," ").concat(f)},u={transform:"translate(".concat(i/2*-1," -256)")},_={outer:s,inner:c,path:u};return{tag:"g",attributes:T({},_.outer),children:[{tag:"g",attributes:T({},_.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:T(T({},n.icon.attributes),_.path)}]}]}}}};const Wi={x:0,y:0,width:"100%",height:"100%"};function nf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Hb(t){return t.tag==="g"?t.children:[t]}var Vb={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?$a(n.split(" ").map(a=>a.trim())):y_();return r.prefix||(r.prefix=Xt()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:a,mask:i,maskId:s,transform:o}=e;const{width:l,icon:f}=a,{width:c,icon:u}=i,_=Ih({transform:o,containerWidth:c,iconWidth:l}),d={tag:"rect",attributes:T(T({},Wi),{},{fill:"white"})},g=f.children?{children:f.children.map(nf)}:{},m={tag:"g",attributes:T({},_.inner),children:[nf(T({tag:f.tag,attributes:T(T({},f.attributes),_.path)},g))]},p={tag:"g",attributes:T({},_.outer),children:[m]},v="mask-".concat(s||mr()),h="clip-".concat(s||mr()),x={tag:"mask",attributes:T(T({},Wi),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,p]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:Hb(u)},x]};return n.push(M,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(v,")")},Wi)}),{children:n,attributes:r}}}},Ub={provides(t){let e=!1;Jt.matchMedia&&(e=Jt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:T(T({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=T(T({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:T(T({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:T(T({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:T(T({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:T(T({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},qb={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},Gb=[zh,Tb,$b,Rb,jb,Db,Wb,Bb,Vb,Ub,qb];rb(Gb,{mixoutsTo:at});at.noAuto;at.config;at.library;at.dom;at.parse;at.findIconDefinition;at.toHtml;const Yb=at.icon;at.layer;at.text;at.counter;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Jb={prefix:"fas",iconName:"toggle-off",icon:[576,512,[],"f204","M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128l-192 0c-70.7 0-128-57.3-128-128s57.3-128 128-128l192 0zM576 256c0-106-86-192-192-192L192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192zM192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"]},Xb={prefix:"fas",iconName:"sliders",icon:[512,512,["sliders-h"],"f1de","M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"]},Kb='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-down-icon lucide-book-down"><path d="M12 13V7"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="m9 10 3 3 3-3"/></svg>';function C_(t){return Yb(t).html.join("")}const Zb=C_(Xb),Qb=C_(Jb);let pa=null;function ew(){const t=document.activeElement;if(!(!t||t===document.body||t.tagName.toLowerCase()==="harper-render-box")){if(t instanceof HTMLTextAreaElement||t instanceof HTMLInputElement){const e=t.selectionStart,n=t.selectionEnd,r=t.selectionDirection??void 0;pa=e!=null?()=>{t.focus({preventScroll:!0}),t.setSelectionRange(e,n,r)}:()=>t.focus({preventScroll:!0})}else if(t instanceof HTMLElement){const e=window.getSelection(),n=e&&e.rangeCount>0?e.getRangeAt(0).cloneRange():null;pa=()=>{if(t.focus({preventScroll:!0}),n){const r=window.getSelection();r&&(r.removeAllRanges(),r.addRange(n))}}}}}function tw(){const t=pa;t&&(pa=null,setTimeout(()=>{try{t()}catch{}},0))}var k_=function(){};k_.prototype.hook=function(t,e,n){t.__harperAutofocused||requestAnimationFrame(()=>{ew(),t.focus(),Object.defineProperty(t,"__harperAutofocused",{value:!0,enumerable:!1,configurable:!1})})};var fo=function(t){this.onClose=t};fo.prototype.hook=function(t){const e=n=>{n.key==="Escape"&&this.onClose()};window.addEventListener("keydown",e),t.__harperCloseOnEscapeHandler=e};fo.prototype.unhook=function(t){const e=t.__harperCloseOnEscapeHandler;e&&(window.removeEventListener("keydown",e),delete t.__harperCloseOnEscapeHandler)};function nw(t,e,n,r,a,i){const s=ge("button",{className:"harper-close-btn",onclick:n,title:"Close","aria-label":"Close"},"×"),o=r?ge("button",{className:"harper-gear-btn",onclick:()=>{r()},title:"Settings","aria-label":"Settings",innerHTML:Zb},[]):void 0,f=[i&&a?ge("button",{className:"harper-disable-btn",onclick:()=>{Promise.resolve(i(a,!1)).finally(()=>{n()})},title:`Disable the ${a} rule`,"aria-label":"Disable this lint rule",innerHTML:Qb},[]):void 0,o,s].filter(_=>_!=null),c=ge("div",{className:"harper-controls"},f),u=ge("span",{className:"harper-title"},[t]);return ge("div",{className:"harper-header",style:{borderBottom:`2px solid ${e}`}},[u,c])}function rw(t){return ge("div",{className:"harper-body",innerHTML:t},[])}function L_(t,e,n,r,a={}){const i=r||t;return ge("button",{className:"harper-btn",style:e,onclick:n,title:i,type:"button","aria-label":i,...a},t)}function aw(t,e){const n=ge("div",{className:"harper-child-cont"},t),r=ge("div",{className:"harper-child-cont"},e);return ge("div",{className:"harper-footer"},[n,r])}function iw(t){if(t)return ge("div",{className:"harper-hint-drawer",role:"note","aria-live":"polite"},[ge("div",{className:"harper-hint-content"},[ge("div",{className:"harper-hint-icon","aria-hidden":"true"},"💡"),ge("div",{},[ge("div",{className:"harper-hint-title"},"Tip"),ge("div",{},String(t))])])])}function sw(t,e){return ge("button",{className:"harper-btn",onclick:()=>{e==null||e([t.lint.problem_text])},title:"Add word to user dictionary","aria-label":"Add word to user dictionary",innerHTML:Kb},[])}function ow(t,e,n){return e.map((r,a)=>{const i=r.replacement_text!==""?r.replacement_text:String(lw(r.kind)),s=`Replace with "${i}"`,o=a===0?{hook:new k_}:{};return L_(i,{background:Ln(t),color:Am(t)},()=>n(r),s,o)})}function lw(t){switch(t){case qe.Replace:return"Replace";case qe.Remove:return"Remove";case qe.InsertAfter:return"Insert After"}}function cw(t){if(t)return ge("button",{className:"harper-report-link",type:"button",onclick:()=>{t()},title:"Report an issue with this lint","aria-label":"Report an issue with this lint"},"Report")}function fw(t){return ge("style",{id:"harper-suggestion-style"},[`code{
      text-decoration: underline solid ${Ln(t)} 2px;
      padding:0.125rem;
      border-radius:0.25rem
      }
      .harper-container{
      max-width:420px;
      max-height:400px;
      overflow-y:auto;
      background:#ffffff;
      border:1px solid #d0d7de;
      border-radius:8px;
      box-shadow:0 4px 12px rgba(140,149,159,0.3);
      padding:8px;
      display:flex;
      flex-direction:column;
      z-index:5000;
      font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
      pointer-events:auto
      }
      .harper-header{
      display:flex;
      align-items:center;
      justify-content:space-between;
      font-weight:600;
      font-size:14px;
      line-height:20px;
      color:#1f2328;
      padding-bottom:4px;
      margin-bottom:4px;
      user-select:none
      }
      .harper-title{
      display:flex;
      align-items:center;
      gap:6px;
      }
      .harper-body{
      font-size:14px;
      line-height:20px;
      color:#57606a
      }
      .harper-btn{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:4px;
      cursor:pointer;
      border:none;
      border-radius:6px;
      padding:3px 6px;
      min-height:28px;
      font-size:13px;
      font-weight:600;
      line-height:20px;
      transition:background 120ms ease,transform 80ms ease
      }
      .harper-btn:hover{filter:brightness(0.92)}
      .harper-btn:active{transform:scale(0.97)}
      .harper-close-btn{background:transparent;border:none;cursor:pointer;font-size:20px;line-height:1;color:#57606a;padding:0 4px;}
      .harper-close-btn:hover{color:#1f2328;}
      .harper-disable-btn,
      .harper-gear-btn{
      background:transparent;
      border:none;
      cursor:pointer;
      font-size:18px;
      line-height:1;
      color:#57606a;
      padding:0 4px;
      display:inline-flex;
      align-items:center;
      justify-content:center;
      }
      .harper-disable-btn:hover,
      .harper-gear-btn:hover{color:#1f2328;}
      .harper-disable-btn svg,
      .harper-gear-btn svg{
      width:18px;
      height:18px;
      display:block;
      }
      .harper-disable-btn{
        transform: scaleX(-1);
      }
      .harper-controls{display:flex;align-items:center;gap:3px;}
      .harper-child-cont{
      display:flex;
      flex-wrap:wrap;
      justify-content:flex-end;
      gap:8px
      }
      .harper-footer{
      display:flex;
      flex-wrap:wrap;
      justify-content:space-between;
      padding:2px;
      gap:16px
      }

      /* Hint drawer styles */
      .harper-hint-drawer{
        margin-top:6px;
        border-top:1px solid #eaeef2;
        background:#f6f8fa;
        color:#3e4c59;
        border-radius:0 0 6px 6px;
      }
      .harper-hint-content{
        display:flex;
        gap:8px;
        align-items:flex-start;
        padding:8px 10px;
        font-size:13px;
        line-height:18px;
      }
      .harper-hint-icon{
        flex:0 0 auto;
        width:18px;height:18px;
        border-radius:50%;
        background:#fff3c4;
        color:#7c5e10;
        display:flex;align-items:center;justify-content:center;
        font-weight:700;
      }
      .harper-hint-title{ font-weight:600; margin-right:6px; color:#1f2328; }

    .fade-in {
      animation: fadeIn 100ms ease-in-out forwards;
    }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      @media (prefers-color-scheme:dark){
      code{background-color:#1f2d3d;color:#c9d1d9}
      .harper-container{
      background:#0d1117;
      border-color:#30363d;
      box-shadow:0 4px 12px rgba(1,4,9,0.85)
      }
      .harper-header{color:#e6edf3}
      .harper-body{color:#8b949e}
      .harper-btn{
      background:#21262d;
      color:#c9d1d9
      }
      .harper-btn:hover{filter:brightness(1.15)}
      .harper-close-btn{color:#8b949e;}
      .harper-close-btn:hover{color:#e6edf3;}
      .harper-disable-btn,
      .harper-gear-btn{color:#8b949e;}
      .harper-disable-btn:hover,
      .harper-gear-btn:hover{color:#e6edf3;}
      .harper-btn[style*="background: #2DA44E"]{background:#238636}
      .harper-btn[style*="background: #e5e5e5"]{
      background:#4b4b4b;
      color:#ffffff
      }
      .harper-hint-drawer{ border-top-color:#30363d; background:#151b23; color:#9aa4af; }
      .harper-hint-icon{ background:#3a2f0b; color:#f2cc60; }
      .harper-hint-title{ color:#e6edf3; }
      }
      .harper-report-link{
      margin-top:8px;
      align-self:flex-start;
      background:none;
      border:none;
      padding:0;
      color:#0969da;
      font-size:13px;
      font-weight:600;
      cursor:pointer;
      }
      .harper-report-link:hover{text-decoration:underline;}
      .harper-report-link:focus{outline:2px solid #0969da; outline-offset:2px;}
      @media (prefers-color-scheme:dark){
      .harper-report-link{color:#58a6ff;}
      }`])}function uw(t){return L_("Dismiss",{background:"#e5e5e5",color:"#000000",fontWeight:"lighter"},t,"Ignore this lint")}function _w(t,e,n,r){const a=t.y+t.height+3;let i;const s=t.x;a+400>window.innerHeight&&(i=window.innerHeight-t.y-3);const o={position:"fixed",top:i?"":`${a}px`,bottom:i?`${i}px`:"",left:`${s}px`,transformOrigin:`${i?"bottom":"top"} left`},l=t.ignoreLint,f=()=>{tw(),r()};return ge("div",{className:"harper-container fade-in",style:o,"harper-close-on-escape":new fo(f)},[fw(t.lint.lint_kind),nw(t.lint.lint_kind_pretty,Ln(t.lint.lint_kind),f,e.openOptions,t.rule,e.setRuleEnabled),rw(t.lint.message_html),aw(ow(t.lint.lint_kind,t.lint.suggestions,c=>{t.applySuggestion(c),r()}),[t.lint.lint_kind==="Spelling"&&e.addToUserDictionary?sw(t,e.addToUserDictionary):void 0,l?uw(()=>l().then(f)):void 0]),iw(n),e.reportError?cw(()=>e.reportError(t.lint,t.rule)):void 0])}function dw(t,e,n=300){let r=0;const a=i=>{if(i.key.toLowerCase()!==e.toLowerCase())return;const s=performance.now(),o=s-r;o<=n&&o>10&&t(),r=s};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)}class gw{constructor(e){Q(this,"currentLintBoxes");Q(this,"popupLint");Q(this,"currentHint");Q(this,"currentHintFor");Q(this,"renderBox");Q(this,"pointerDownCallback");Q(this,"activationKeyListener");Q(this,"actions");this.actions=e,this.currentLintBoxes=[],this.currentHint=void 0,this.currentHintFor=void 0,this.renderBox=new Gu(()=>document.body),this.renderBox.getShadowHost().popover="manual",this.renderBox.getShadowHost().style.pointerEvents="none",this.renderBox.getShadowHost().style.border="none",this.pointerDownCallback=n=>{this.onPointerDown(n)},this.updateActivationKeyListener()}updateActivationKeyListener(){this.activationKeyListener&&(this.activationKeyListener(),this.activationKeyListener=void 0);const e=this.actions.getActivationKey;e&&e().then(n=>{n!=="off"&&(this.activationKeyListener=dw(()=>this.openClosestToCaret(),n))})}openClosestToCaret(){const e=eu();if(e!=null){const n=Af(e,this.currentLintBoxes);n>=0&&(this.popupLint=n)}}onPointerDown(e){for(let n=0;n<this.currentLintBoxes.length;n++){const r=this.currentLintBoxes[n];if(an([e.x,e.y],r)){this.popupLint=n,this.render();return}}this.popupLint=void 0,this.render()}render(){let e=ge("div",{},[]);const n=this.renderBox.getShadowHost();if(this.updateHint(),this.popupLint!=null&&this.popupLint<this.currentLintBoxes.length){const r=this.currentLintBoxes[this.popupLint];e=_w(r,this.actions,this.currentHint??null,()=>{this.popupLint=void 0,this.updateHint(),this.render()})}this.renderBox.render(e),this.popupLint!=null&&this.popupLint<this.currentLintBoxes.length?(n.style.setProperty("visibility","visible","important"),n.isConnected&&!n.matches(":popover-open")&&n.showPopover()):(n.style.setProperty("visibility","hidden","important"),n.isConnected&&n.matches(":popover-open")&&n.hidePopover())}updateHint(){if(this.popupLint==null){this.currentHint=void 0,this.currentHintFor=void 0;return}if(this.currentHintFor!==this.popupLint||this.currentHint===void 0){const e=Array.isArray(Lc)?Lc.filter(r=>typeof r=="string"):[],n=Math.random()<.1&&e.length>0;this.currentHint=n?e[Math.floor(Math.random()*e.length)]:null,this.currentHintFor=this.popupLint}}updateLintBoxes(e){this.currentLintBoxes.forEach(n=>{n.source.removeEventListener("pointerdown",this.pointerDownCallback)}),e.length!=this.currentLintBoxes.length&&(this.popupLint=void 0),this.currentLintBoxes=e,this.currentLintBoxes.forEach(n=>{n.source.addEventListener("pointerdown",this.pointerDownCallback)}),this.render()}}function pw(t,e){if(t===e)return null;let n=0;const r=Math.min(t.length,e.length);for(;n<r&&t[n]===e[n];)n++;let a=0;for(;a<t.length-n&&a<e.length-n&&t[t.length-1-a]===e[e.length-1-a];)a++;const i=n,s=t.length-a,o=n,l=e.length-a;return{oldStart:i,oldEnd:s,newStart:o,newEnd:l,delta:l-o-(s-i)}}function mw(t,e){return e==null?{...t}:t.end<=e.oldStart?{...t}:t.start>=e.oldEnd?{start:t.start+e.delta,end:t.end+e.delta}:null}function hw(t,e){if(t.source===e)return t;const n=mw(t.span,pw(t.source,e));return n==null||e.slice(n.start,n.end)!==t.problem_text?null:{...t,span:n,source:e}}const rf=["focus","keyup","keydown","paste","change","scroll","input"],bw=["resize","scroll","keyup","keydown","input","compositionend","selectionchange"];class ww{constructor(e,n){Q(this,"highlights");Q(this,"popupHandler");Q(this,"targets");Q(this,"scrollableAncestors");Q(this,"lintRequest",null);Q(this,"renderRequested",!1);Q(this,"lintDelayTimer",null);Q(this,"lastInputAt",0);Q(this,"lastLints",[]);Q(this,"lastBoxes",[]);Q(this,"lastLintBoxes",[]);Q(this,"updateEventCallback");Q(this,"lintProvider");Q(this,"actions");this.lintProvider=e,this.actions=n,this.highlights=new Vm,this.popupHandler=new gw({getActivationKey:n.getActivationKey,openOptions:n.openOptions,addToUserDictionary:n.addToUserDictionary,reportError:n.reportError,setRuleEnabled:n.setRuleEnabled}),this.targets=new Set,this.scrollableAncestors=new Set,this.lastLints=[],this.updateEventCallback=()=>{this.lastInputAt=Date.now(),this.update()};const r=()=>{this.update(),setTimeout(r,1e3)};r(),this.attachWindowListeners()}onScreenTargets(){const e=[];for(const n of this.targets)R0(n)&&e.push(n);return e}async update(){this.requestRender(),this.requestLintUpdate()}async requestLintUpdate(e=!1){var a,i;const n=await((i=(a=this.actions).getDelay)==null?void 0:i.call(a))??0,r=n-(Date.now()-this.lastInputAt);if(!e&&n>0&&r>0){this.lintDelayTimer!=null&&window.clearTimeout(this.lintDelayTimer),this.lintDelayTimer=window.setTimeout(()=>{this.lintDelayTimer=null,this.requestLintUpdate()},r);return}if(this.lintDelayTimer!=null&&(window.clearTimeout(this.lintDelayTimer),this.lintDelayTimer=null),this.lintRequest!=null){if(!e)return;try{await this.lintRequest}catch{}await this.requestLintUpdate(!0);return}if(this.targets.size!==0){const s=Promise.all(this.onScreenTargets().map(async l=>{if(!document.contains(l))return this.targets.delete(l),{target:null,lints:{}};const{text:f,isCM:c,newLineIndices:u}=this.getTargetText(l);if(!f||f.length>12e4)return{target:null,lints:{}};const _=vw(l);let d=await this.lintProvider(f,window.location.hostname,{forceAllHeadings:$0(l),language:_});if(c){d=window.structuredClone(d);for(const g of Object.values(d))for(const m of g){const p=u.findIndex(h=>h>m.span.start),v=u.findIndex(h=>h>m.span.end);m.span.start-=p,m.span.end-=v}}return{target:l,lints:d}}));this.lintRequest=s;const o=await s.finally(()=>{this.lintRequest===s&&(this.lintRequest=null)});this.lastLints=o.filter(l=>l.target!=null),this.requestRender()}}async lintHotkey(){var n,r;const e=await((r=(n=this.actions).getHotkey)==null?void 0:r.call(n));document.addEventListener("keydown",a=>{var u;if(!e)return;const i=a.key.toLowerCase(),s=e.key.toLowerCase(),o=a.ctrlKey===e.modifiers.includes("Ctrl"),l=a.altKey===e.modifiers.includes("Alt"),f=a.shiftKey===e.modifiers.includes("Shift");if(i===s&&o&&l&&f){a.preventDefault(),a.stopImmediatePropagation();const _=eu();if(_!=null){const d=Af(_,this.lastBoxes);if(d<0)return;const g=this.lastBoxes[d],m=g.lint.suggestions;m.length>0?g.applySuggestion(m[0]):(u=g.ignoreLint)==null||u.call(g)}}},{capture:!0})}async addTarget(e){this.targets.has(e)||(this.targets.add(e),this.update(),this.attachTargetListeners(e))}async removeTarget(e){if(this.targets.has(e))this.targets.delete(e),this.update(),this.detachTargetListeners(e);else throw new Error("HTMLElement not added.")}getLastIgnorableLintBoxes(){return this.lastLintBoxes}attachTargetListeners(e){for(const i of rf)e.addEventListener(i,this.updateEventCallback);const n=new MutationObserver(this.updateEventCallback),r={subtree:!0,characterData:!0};e.tagName==null?n.observe(e.parentElement,r):n.observe(e,r);const a=yw(e);for(const i of a)this.scrollableAncestors.has(i)||(this.scrollableAncestors.add(i),i.addEventListener("scroll",this.updateEventCallback,{capture:!0,passive:!0}))}detachTargetListeners(e){for(const n of rf)e.removeEventListener(n,this.updateEventCallback)}attachWindowListeners(){this.lintHotkey();for(const e of bw)window.addEventListener(e,this.updateEventCallback)}getTargetText(e){let n=null;const r=e instanceof HTMLElement&&Hs(e)!=null;if(r){const s=e.querySelectorAll(".cm-line");n=Array.from(s).map(l=>l.textContent).reduce((l,f)=>`${l}${f??""}
`,"")}else n=e instanceof HTMLTextAreaElement||e instanceof HTMLInputElement?e.value:e.innerText;const a=[];let i=0;for(const s of n??"")s==`
`&&a.push(i),i++;return{text:n,isCM:r,newLineIndices:a}}requestRender(){this.renderRequested||(this.renderRequested=!0,requestAnimationFrame(()=>{const e=this.lastLints.flatMap(({target:n,lints:r})=>{if(!n)return[];const{text:a,isCM:i}=this.getTargetText(n);return a==null?[]:Object.entries(r).flatMap(([s,o])=>o.flatMap(l=>{const f=i?l.source===a?l:null:hw(l,a);return f==null?[]:ap(n,f,s,{ignoreLint:this.actions.ignoreLint?async c=>{var u,_;await((_=(u=this.actions).ignoreLint)==null?void 0:_.call(u,c)),await this.requestLintUpdate(!0)}:void 0})}))});this.lastLintBoxes=e,this.highlights.renderLintBoxes(e),this.popupHandler.updateLintBoxes(e),this.renderRequested=!1,this.lastBoxes=e}))}}function yw(t){const e=[],n=document.scrollingElement||document.documentElement;let r=t.parentElement;for(;r;){const a=window.getComputedStyle(r),{overflowY:i,overflowX:s}=a,o=i.includes("auto")||i.includes("scroll"),l=s.includes("auto")||s.includes("scroll");(o||l)&&e.push(r),r=r.parentElement}return n&&e[e.length-1]!==n&&e.push(n),e}function vw(t){if(!(t instanceof Element))return;const e=t.getAttribute("data-language");switch(e){case"plaintext":case"markdown":case"typst":return e;default:return}}const Fs=[{value:"sans",label:"Sans",sample:"Aa",stack:"'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif"},{value:"serif",label:"Serif",sample:"Aa",stack:"'Iowan Old Style', 'New York', Georgia, serif"},{value:"mono",label:"Mono",sample:"Aa",stack:"'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"}],xw=[12,13,14,15,16,17,18,20,22],Bi="default",T_=["Spelling","Typo","Capitalization","Grammar","Agreement","BoundaryError","Punctuation","Usage","WordChoice","Style","Readability","Enhancement","Redundancy","Repetition","Formatting","Regionalism","Nonstandard","Eggcorn","Malapropism","Miscellaneous"],$_={Agreement:{label:"Agreement",dotClass:"bg-emerald-500",haloClass:"bg-emerald-100",textClass:"text-emerald-700",softClass:"bg-emerald-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-emerald-500/10"},BoundaryError:{label:"Boundary",dotClass:"bg-indigo-500",haloClass:"bg-indigo-100",textClass:"text-indigo-700",softClass:"bg-indigo-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-indigo-500/10"},Capitalization:{label:"Capitalization",dotClass:"bg-rose-500",haloClass:"bg-rose-100",textClass:"text-rose-700",softClass:"bg-rose-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-rose-500/10"},Eggcorn:{label:"Eggcorn",dotClass:"bg-violet-500",haloClass:"bg-violet-100",textClass:"text-violet-700",softClass:"bg-violet-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-violet-500/10"},Enhancement:{label:"Enhancement",dotClass:"bg-amber-600",haloClass:"bg-amber-100",textClass:"text-amber-700",softClass:"bg-amber-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-amber-600/10"},Formatting:{label:"Formatting",dotClass:"bg-slate-500",haloClass:"bg-slate-100",textClass:"text-slate-700",softClass:"bg-slate-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-slate-500/10"},Grammar:{label:"Grammar",dotClass:"bg-emerald-600",haloClass:"bg-emerald-100",textClass:"text-emerald-700",softClass:"bg-emerald-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-emerald-600/10"},Malapropism:{label:"Malapropism",dotClass:"bg-fuchsia-500",haloClass:"bg-fuchsia-100",textClass:"text-fuchsia-700",softClass:"bg-fuchsia-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-fuchsia-500/10"},Miscellaneous:{label:"Miscellaneous",dotClass:"bg-sky-500",haloClass:"bg-sky-100",textClass:"text-sky-700",softClass:"bg-sky-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-sky-500/10"},Nonstandard:{label:"Nonstandard",dotClass:"bg-stone-500",haloClass:"bg-stone-100",textClass:"text-stone-700",softClass:"bg-stone-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-stone-500/10"},Punctuation:{label:"Punctuation",dotClass:"bg-cyan-600",haloClass:"bg-cyan-100",textClass:"text-cyan-700",softClass:"bg-cyan-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-cyan-600/10"},Readability:{label:"Readability",dotClass:"bg-violet-600",haloClass:"bg-violet-100",textClass:"text-violet-700",softClass:"bg-violet-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-violet-600/10"},Redundancy:{label:"Redundancy",dotClass:"bg-amber-600",haloClass:"bg-amber-100",textClass:"text-amber-700",softClass:"bg-amber-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-amber-600/10"},Regionalism:{label:"Regionalism",dotClass:"bg-teal-700",haloClass:"bg-teal-100",textClass:"text-teal-700",softClass:"bg-teal-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-teal-700/10"},Repetition:{label:"Repetition",dotClass:"bg-amber-700",haloClass:"bg-amber-100",textClass:"text-amber-700",softClass:"bg-amber-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-amber-700/10"},Spelling:{label:"Spelling",dotClass:"bg-rose-500",haloClass:"bg-rose-100",textClass:"text-rose-700",softClass:"bg-rose-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-rose-500/10"},Style:{label:"Style",dotClass:"bg-blue-500",haloClass:"bg-blue-100",textClass:"text-blue-700",softClass:"bg-blue-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-blue-500/10"},Typo:{label:"Typo",dotClass:"bg-rose-500",haloClass:"bg-rose-100",textClass:"text-rose-700",softClass:"bg-rose-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-rose-500/10"},Usage:{label:"Usage",dotClass:"bg-green-600",haloClass:"bg-green-100",textClass:"text-green-700",softClass:"bg-green-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-green-600/10"},WordChoice:{label:"Word Choice",dotClass:"bg-blue-600",haloClass:"bg-blue-100",textClass:"text-blue-700",softClass:"bg-blue-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-blue-600/10"}},Sw=T_.map(t=>[t,$_[t]]);function af(){return Object.fromEntries(T_.map(t=>[t,0]))}function Ew(t){return t==="serif"||t==="mono"?t:"sans"}function Mw(t){var e;return((e=Fs.find(n=>n.value===t))==null?void 0:e.stack)??Fs[0].stack}function sf(t){if(t===Bi||t==null||t==="")return Bi;const e=typeof t=="number"?t:Number(t);if(!Number.isFinite(e))return Bi;const n=Math.round(e);return Math.min(28,Math.max(11,n))}function Br(t){return t.replacement_text!==""?t.replacement_text:String(t.kind)}function Aw(t){var e;return((e=t.trim().match(/\S+/g))==null?void 0:e.length)??0}var Cw=Te('<button type="button"> </button>'),kw=Te('<div class="flex flex-1 flex-wrap justify-end gap-1.5"></div>'),Lw=Te('<span class="mr-auto text-xs text-stone-400">No suggestions available.</span>'),Tw=Te('<div class="flex flex-col gap-2.5 px-3 pt-0.5 pb-3"><button type="button" class="m-0 flex w-full flex-col border-0 bg-transparent p-0 text-left text-[13px] leading-[1.4] font-medium text-stone-950"><span></span></button> <button type="button" class="m-0 block max-h-[84px] w-full overflow-hidden rounded-[7px] border-[0.5px] border-[rgba(28,26,22,0.09)] bg-[#fbfaf6] px-3 py-2.5 text-left text-xs leading-[1.45] text-stone-700" aria-label="Focus problem in editor"><span class="text-stone-500"> </span> <mark> </mark> <span class="text-stone-500"> </span></button> <div class="flex items-center justify-end gap-2"><!> <button type="button" class="h-[26px] shrink-0 border-0 bg-transparent px-1 text-[12.5px] font-medium text-stone-500 shadow-none">Ignore</button></div></div>'),$w=Te('<div role="group"><button type="button" class="m-0 flex min-h-8 w-full items-center gap-2 border-0 bg-transparent px-3 py-2 text-left text-inherit"><span><span></span></span> <span class="text-[12.5px] leading-[1.1] font-semibold text-stone-950"> </span> <span><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6 8 10 12 6"></path></svg></span></button> <!></div>');function Rw(t,e){zn(e,!1);const n=_e();let r=ce(e,"lint",8),a=ce(e,"open",8,!1),i=ce(e,"active",8,!1),s=ce(e,"onToggleOpen",8),o=ce(e,"focusError",8),l=ce(e,"onActivate",8,()=>{}),f=ce(e,"onApply",8),c=ce(e,"onIgnore",8,()=>{}),u=ce(e,"snippet",8),_=_e(null);const d="h-3.5 w-3.5 fill-none stroke-current stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]",g="h-[26px] max-w-full overflow-hidden text-ellipsis rounded-full px-[11px] text-[12.5px] font-semibold";function m(){var L;l()(),(L=o())==null||L()}Ne(()=>ee(r()),()=>{B(n,$_[r().lint_kind])}),Ne(()=>(ee(a()),b(_)),()=>{a()&&b(_)!=null&&requestAnimationFrame(()=>{var R;const L=(R=b(_))==null?void 0:R.closest("[data-problems-scroller]");if(!(L instanceof HTMLElement)||b(_)==null)return;const $=b(_).offsetTop,z=$+b(_).offsetHeight,G=L.scrollTop,N=G+L.clientHeight;$<G+8?L.scrollTo({top:Math.max(0,$-14),behavior:"smooth"}):z>N-8&&L.scrollTo({top:z-L.clientHeight+14,behavior:"smooth"})})}),ma(),ha();var p=$w(),v=H(p),h=H(v),x=H(h);W(h);var M=ne(h,2),S=H(M,!0);W(M);var E=ne(M,2),A=H(E);Ie(A,0,Sn(d)),W(E),W(v);var k=ne(v,2);{var C=L=>{var $=Tw(),z=H($),G=H(z);Nd(G,()=>(ee(r()),X(()=>r().message_html)),!0),W(G),W(z);var N=ne(z,2),R=H(N),j=H(R);W(R);var D=ne(R,2),V=H(D,!0);W(D);var Y=ne(D,2),ve=H(Y);W(Y),W(N);var fe=ne(N,2),ue=H(fe);{var se=te=>{var Z=kw();fr(Z,5,()=>(ee(r()),X(()=>r().suggestions)),cr,(xe,Ce,Xe)=>{var Re=Cw(),Ge=H(Re,!0);W(Re),Ze((lt,O)=>{Ie(Re,1,(b(n),X(()=>`${g} ${Xe===0?`border-transparent ${b(n).softClass} ${b(n).textClass} shadow-none`:"border-[0.5px] border-stone-300 bg-linear-to-b from-white to-stone-50 text-stone-950 shadow-sm shadow-stone-950/5"}`))),ln(Re,"title",lt),Ve(Ge,O)},[()=>(ee(Br),b(Ce),X(()=>`Replace with "${Br(b(Ce))}"`)),()=>(ee(Br),b(Ce),X(()=>Br(b(Ce))))]),ke("click",Re,lt=>{var O;lt.stopPropagation(),(O=f())==null||O(b(Ce))}),we(xe,Re)}),W(Z),we(te,Z)},U=te=>{var Z=Lw();we(te,Z)};St(ue,te=>{ee(r()),X(()=>r().suggestions&&r().suggestions.length>0)?te(se):te(U,-1)})}var q=ne(ue,2);W(fe),W($),Ze(()=>{Ve(j,`${ee(u()),X(()=>u().prefixEllipsis?"...":"")??""}${ee(u()),X(()=>u().prefix)??""}`),Ie(D,1,(b(n),X(()=>`rounded-[3px] px-0.5 font-semibold ${b(n).softClass} ${b(n).textClass}`))),Ve(V,(ee(u()),X(()=>u().problem))),Ve(ve,`${ee(u()),X(()=>u().suffix)??""}${ee(u()),X(()=>u().suffixEllipsis?"...":"")??""}`)}),ke("click",z,m),ke("click",N,m),ke("click",q,te=>{te.stopPropagation(),c()()}),rn(1,$,()=>Co,()=>({duration:130})),rn(2,$,()=>Co,()=>({duration:130})),we(L,$)};St(k,L=>{a()&&L(C)})}W(p),aa(p,L=>B(_,L),()=>b(_)),Ze(()=>{Ie(p,1,(ee(i()),b(n),X(()=>`shrink-0 overflow-hidden rounded-[10px] border-[0.5px] bg-white shadow-sm shadow-stone-950/5 transition-[box-shadow,border-color] duration-150 ${i()?b(n).activeClass:"border-[rgba(28,26,22,0.14)]"}`))),ln(v,"aria-expanded",a()),Ie(h,1,(b(n),X(()=>`inline-flex h-[11px] w-[11px] shrink-0 items-center justify-center rounded-full ${b(n).haloClass}`))),Ie(x,1,(b(n),X(()=>`h-[7px] w-[7px] rounded-full ${b(n).dotClass}`))),Ve(S,(b(n),X(()=>b(n).label))),Ie(E,1,`ml-auto inline-flex shrink-0 text-stone-500 transition-transform duration-150 ${a()?"rotate-180":""}`)}),ke("click",v,function(...L){var $;($=s())==null||$.apply(this,L)}),ke("mouseenter",p,function(...L){var $;($=l())==null||$.apply(this,L)}),we(t,p),Dn()}var jw=Te('<div id="problem-actions-menu" role="menu" class="absolute top-[calc(100%+6px)] right-0 z-30 w-36 overflow-hidden rounded-lg border-[0.5px] border-[rgba(28,26,22,0.16)] bg-white py-1 shadow-lg shadow-stone-950/10"><button type="button" role="menuitem">Open All</button> <button type="button" role="menuitem">Close All</button> <div class="my-1 h-px bg-[rgba(28,26,22,0.09)]"></div> <button type="button" role="menuitem">Ignore All</button></div>'),Ow=Te('<div class="grid min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-1 whitespace-nowrap text-[10px] font-medium text-stone-500"><span><span></span></span> <span class="overflow-hidden text-ellipsis"> </span> <strong class="font-medium text-stone-400 tabular-nums"> </strong></div>'),Fw=Te('<div class="grid grid-cols-3 gap-x-2 gap-y-[7px] overflow-hidden border-b-[0.5px] border-[rgba(28,26,22,0.09)] px-[18px] pb-3" aria-label="Problem lint kinds"></div>'),Iw=Te('<div class="m-auto max-w-[220px] px-3 py-7 text-center text-[12.5px] leading-[1.55] text-stone-500"><div aria-hidden="true" class="mb-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-b from-emerald-400 to-emerald-600 text-white shadow-sm shadow-emerald-900/20"><svg viewBox="0 0 16 16" class="h-4 w-4 fill-none stroke-current stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"><path d="M3.5 8.5 6.5 11.5 12.5 5"></path></svg></div> <strong class="mb-0.5 block font-semibold text-stone-950">All clear</strong> <p class="m-0">Harper has no suggestions for this document.</p></div>'),Nw=Te('<div class="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/35 px-4" role="presentation"><div class="w-full max-w-[340px] rounded-lg border-[0.5px] border-[rgba(28,26,22,0.16)] bg-white p-4 text-stone-950 shadow-2xl shadow-stone-950/20" role="dialog" aria-modal="true" aria-labelledby="ignore-all-title" tabindex="-1"><h3 id="ignore-all-title" class="!m-0 !p-0 text-[15px] leading-5 font-semibold">Ignore all problems?</h3> <p class="mt-2 mb-4 text-[13px] leading-5 text-stone-600"> </p> <div class="flex justify-end gap-2"><button type="button" class="h-8 rounded-md border-[0.5px] border-stone-300 bg-linear-to-b from-white to-stone-50 px-3 text-[13px] font-medium text-stone-700 shadow-sm shadow-stone-950/5">Cancel</button> <button type="button" class="h-8 rounded-md border-[0.5px] border-red-700 bg-red-700 px-3 text-[13px] font-medium text-white shadow-sm shadow-red-950/10 disabled:opacity-50">Ignore All</button></div></div></div>'),Pw=Te('<aside class="flex min-h-0 w-[320px] flex-[0_0_320px] overflow-hidden border-l-[0.5px] border-[rgba(28,26,22,0.14)] bg-[#f4f0e7] @max-[760px]:w-full @max-[760px]:flex-[0_0_42%] @max-[760px]:border-t-[0.5px] @max-[760px]:border-l-0 svelte-jtai2j" aria-label="Problems"><div class="flex min-h-0 flex-1 flex-col"><header class="flex items-center gap-1.5 px-3.5 pt-2.5 pb-2"><h2 class="m-0! flex min-w-0 flex-1 items-center p-0! text-[15px]! leading-none! font-bold! text-stone-950 font-[inherit]!"><button type="button" class="m-0! inline-flex min-w-0 items-center gap-1.5 border-0 bg-transparent p-0! text-left text-[15px]! leading-none! font-[inherit] text-inherit">Problems <span class="inline-flex h-[18px] min-w-5 items-center justify-center rounded-full bg-amber-700 px-1.5 text-[11px] font-semibold text-white tabular-nums"> </span> <span><svg viewBox="0 0 16 16" aria-hidden="true" class="h-3.5 w-3.5 fill-none stroke-current stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"><path d="M4 6 8 10 12 6"></path></svg></span></button></h2> <div class="relative flex shrink-0 items-center gap-1.5"><button type="button" aria-label="Hide problems sidebar" title="Hide problems sidebar"><svg viewBox="0 0 20 20" aria-hidden="true" class="h-[18px] w-[18px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"><rect x="3.5" y="3" width="13" height="14" rx="3"></rect><path d="M13.25 5.5v9"></path></svg></button> <button type="button" aria-label="More problem actions" aria-haspopup="menu" title="More problem actions"><svg viewBox="0 0 16 16" aria-hidden="true" class="h-4 w-4 fill-current"><circle cx="8" cy="4" r="1.15"></circle><circle cx="8" cy="8" r="1.15"></circle><circle cx="8" cy="12" r="1.15"></circle></svg></button> <!></div></header> <!> <div class="flex min-h-0 flex-1 flex-col gap-2 overflow-auto px-3.5 pt-3.5 pb-6" data-problems-scroller=""><!></div></div></aside> <!>',1);function zw(t,e){zn(e,!1);const n=_e(),r=_e(),a=_e(),i=_e(),s=_e();let o=ce(e,"lintBoxes",24,()=>[]),l=ce(e,"activeLintId",8,null),f=ce(e,"focusLint",8,()=>{}),c=ce(e,"onActivate",8,()=>{}),u=ce(e,"onApplied",8,()=>{}),_=ce(e,"onIgnored",8,()=>{}),d=ce(e,"onIgnoreAll",8,null),g=ce(e,"onHideSidebar",8,()=>{}),m=_e(new Set),p=_e(null),v=_e(""),h=_e(!0),x=_e(!1),M=_e(!1);const S="inline-flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent text-stone-600 shadow-none transition-colors duration-150 hover:text-stone-950 disabled:opacity-50",E="m-0 flex h-8 w-full items-center border-0 bg-transparent px-3 text-left text-[13px] font-medium text-stone-700 shadow-none hover:bg-stone-100 disabled:text-stone-300 disabled:hover:bg-transparent",A="m-0 flex h-8 w-full items-center border-0 bg-transparent px-3 text-left text-[13px] font-medium text-red-700 shadow-none hover:bg-red-50 disabled:text-stone-300 disabled:hover:bg-transparent";async function k(){var P;if(d()!=null)await d()();else{const K=[...o()];for(const he of K)await((P=he.ignoreLint)==null?void 0:P.call(he))}B(m,new Set),_()()}function C(){B(x,!1),B(M,!1),g()()}function L(){B(m,new Set(o().map(P=>P.lint.context_hash))),B(x,!1)}function $(){B(m,new Set),B(x,!1)}function z(){B(x,!1),B(M,!0)}async function G(){B(M,!1),await k()}function N(){B(M,!1)}function R(P){P.target===P.currentTarget&&N()}function j(P){!b(x)||b(p)==null||P.target==null||b(p).contains(P.target)||B(x,!1)}function D(P){if(P.key==="Escape"){if(b(M)){P.preventDefault(),B(M,!1);return}b(x)&&(P.preventDefault(),B(x,!1))}}function V(P){const K=new Set(b(m));K.has(P)?K.delete(P):K.add(P),B(m,K)}function Y(P){return P.replace(/\s+/g," ").trim()}function ve(P){let K=P.lint,he=K.source||P.source.textContent||"";const We=60,Se=Math.max(0,K.span.start-We),Ke=Math.min(he.length,K.span.end+We);let Be=he.slice(Se,K.span.start),it=he.slice(K.span.end,Ke);Be=Y(Be);const Nt=Y(K.problem_text);return it=Y(it),{prefix:Be,problem:Nt,suffix:it,prefixEllipsis:Se>0,suffixEllipsis:Ke<he.length}}Ne(()=>ee(o()),()=>{B(s,o().map(P=>P.lint.context_hash).join("|"))}),Ne(()=>(b(s),b(v),ee(o()),b(m)),()=>{if(b(s)!==b(v)){B(v,b(s));const P=new Set(o().map(he=>he.lint.context_hash)),K=new Set([...b(m)].filter(he=>P.has(he)));K.size===0&&o().length>0&&K.add(o()[0].lint.context_hash),B(m,K)}}),Ne(()=>(ee(o()),b(m)),()=>{B(n,o().length>0&&b(m).size===o().length)}),Ne(()=>ee(o()),()=>{B(r,`${o().length} ${o().length===1?"problem":"problems"}`)}),Ne(()=>(ee(o()),af),()=>{B(a,o().reduce((P,K)=>(P[K.lint.lint_kind]+=1,P),af()))}),Ne(()=>b(a),()=>{B(i,Sw.filter(([P])=>b(a)[P]>0))}),ma(),ha();var fe=Pw();ke("click",yo,j),ke("keydown",yo,D);var ue=na(fe),se=H(ue),U=H(se),q=H(U),te=H(q),Z=ne(H(te)),xe=H(Z,!0);W(Z);var Ce=ne(Z,2);W(te),W(q);var Xe=ne(q,2),Re=H(Xe);Ie(Re,1,Sn(S));var Ge=ne(Re,2);Ie(Ge,1,Sn(S));var lt=ne(Ge,2);{var O=P=>{var K=jw(),he=H(K);Ie(he,1,Sn(E));var We=ne(he,2);Ie(We,1,Sn(E));var Se=ne(We,4);Ie(Se,1,Sn(A)),W(K),Ze(()=>{he.disabled=(ee(o()),b(n),X(()=>o().length===0||b(n))),We.disabled=(ee(o()),b(m),X(()=>o().length===0||b(m).size===0)),Se.disabled=(ee(o()),X(()=>o().length===0))}),ke("click",he,L),ke("click",We,$),ke("click",Se,z),rn(3,K,()=>Vr,()=>({duration:100})),we(P,K)};St(lt,P=>{b(x)&&P(O)})}W(Xe),aa(Xe,P=>B(p,P),()=>b(p)),W(U);var re=ne(U,2);{var ze=P=>{var K=Fw();fr(K,5,()=>b(i),cr,(he,We)=>{var Se=Cd(()=>kd(b(We),2));let Ke=()=>b(Se)[0],Be=()=>b(Se)[1];var it=Ow(),Nt=H(it),gn=H(Nt);W(Nt);var pn=ne(Nt,2),j_=H(pn,!0);W(pn);var uo=ne(pn,2),O_=H(uo,!0);W(uo),W(it),Ze(()=>{Ie(Nt,1,(Be(),X(()=>`inline-flex h-[9px] w-[9px] shrink-0 items-center justify-center rounded-full ${Be().haloClass}`))),Ie(gn,1,(Be(),X(()=>`h-[7px] w-[7px] rounded-full ${Be().dotClass}`))),Ve(j_,(Be(),X(()=>Be().label))),Ve(O_,(b(a),Ke(),X(()=>b(a)[Ke()])))}),we(he,it)}),W(K),we(P,K)};St(re,P=>{b(h),b(i),X(()=>b(h)&&b(i).length>0)&&P(ze)})}var je=ne(re,2),Lt=H(je);{var pt=P=>{var K=Iw();we(P,K)},Bn=P=>{var K=Hi(),he=na(K);fr(he,1,o,cr,(We,Se)=>{const Ke=Mn(()=>(b(Se),X(()=>b(Se).lint.context_hash)));{let Be=Mn(()=>(b(Se),X(()=>ve(b(Se))))),it=Mn(()=>(b(m),ee(b(Ke)),X(()=>b(m).has(b(Ke))))),Nt=Mn(()=>l()===b(Ke));Rw(We,{get lint(){return b(Se),X(()=>b(Se).lint)},get snippet(){return b(Be)},get open(){return b(it)},get active(){return b(Nt)},onToggleOpen:()=>V(b(Ke)),focusError:()=>f()(b(Se)),onActivate:()=>c()(b(Se)),onApply:gn=>{b(Se).applySuggestion(gn),u()()},onIgnore:async()=>{var gn,pn;await((pn=(gn=b(Se)).ignoreLint)==null?void 0:pn.call(gn)),_()()}})}}),we(P,K)};St(Lt,P=>{ee(o()),X(()=>o().length===0)?P(pt):P(Bn,-1)})}W(je),W(se),W(ue);var Hn=ne(ue,2);{var R_=P=>{var K=Nw(),he=H(K),We=ne(H(he),2),Se=H(We);W(We);var Ke=ne(We,2),Be=H(Ke),it=ne(Be,2);W(Ke),W(he),W(K),Ze(()=>{Ve(Se,`This will ignore ${b(r)??""} in the current document.`),it.disabled=(ee(o()),X(()=>o().length===0))}),ke("click",Be,N),ke("click",it,G),rn(3,K,()=>Vr,()=>({duration:120})),ke("click",K,R),we(P,K)};St(Hn,P=>{b(M)&&P(R_)})}Ze(()=>{ln(te,"aria-expanded",b(h)),Ve(xe,(ee(o()),X(()=>o().length))),Ie(Ce,1,`inline-flex shrink-0 text-stone-500 transition-transform duration-150 ${b(h)?"rotate-180":""}`),ln(Ge,"aria-expanded",b(x))}),ke("click",te,()=>B(h,!b(h))),ke("click",Re,C),ke("click",Ge,()=>B(x,!b(x))),rn(3,se,()=>Vr,()=>({duration:250})),rn(3,ue,()=>ng,()=>({x:320,duration:250,easing:rg})),we(t,fe),Dn()}var Dw=Te('<button type="button"> </button>'),Ww=Te("<option> </option>"),Bw=Te(`<footer class="flex min-h-[26px] flex-[0_0_26px] items-center gap-3.5 border-t-[0.5px] border-[rgba(28,26,22,0.09)] bg-[#f4f0e7] px-2 pr-2 pl-3.5 text-[11px] whitespace-nowrap text-stone-500 tabular-nums [font-family:'JetBrains_Mono',ui-monospace,'SF_Mono',Menlo,monospace] @max-[760px]:h-auto @max-[760px]:min-h-[30px] @max-[760px]:flex-wrap @max-[760px]:gap-y-1.5 @max-[760px]:py-[5px]" aria-label="Editor status"><div class="inline-flex items-center gap-2"><span class="inline-flex items-center gap-1.5"><span></span> <!></span></div> <span class="h-2.5 w-px bg-[rgba(28,26,22,0.14)]"></span> <span> </span> <span> </span> <span class="flex-1"></span> <div class="inline-flex h-[18px] items-center rounded-[5px] border-[0.5px] border-stone-200 bg-stone-200/60 p-px" aria-label="Font family"></div> <label class="relative inline-flex h-[18px] items-center rounded-[5px] border-[0.5px] border-stone-200 bg-stone-200/60 pr-[18px] pl-2 text-[11px] font-medium text-stone-950 after:absolute after:top-1/2 after:right-[5px] after:-translate-y-1/2 after:text-[9px] after:leading-none after:text-stone-500 after:content-['v'] after:[font-family:-apple-system,BlinkMacSystemFont,'SF_Pro_Text',sans-serif]"><span> </span> <select class="absolute inset-0 border-0 opacity-0" aria-label="Font size"><option>Default</option><!></select></label></footer>`);function Hw(t,e){zn(e,!1);const n=_e(),r=_e();let a=ce(e,"text",8,""),i=ce(e,"problemCount",8,0),s=ce(e,"fontFamily",8,"sans"),o=ce(e,"fontSize",8,"default"),l=ce(e,"onFontFamilyChange",8,()=>{}),f=ce(e,"onFontSizeChange",8,()=>{});const c="inline-flex h-4 min-w-7 items-center justify-center rounded px-2 text-xs leading-none font-medium text-stone-500";Ne(()=>ee(a()),()=>{B(n,Aw(a()))}),Ne(()=>ee(a()),()=>{B(r,a().length)}),ma(),ha();var u=Bw(),_=H(u),d=H(_),g=H(d),m=ne(g,2);{var p=N=>{var R=_o("All clear");we(N,R)},v=N=>{var R=_o();Ze(()=>Ve(R,`${i()??""} problem${i()===1?"":"s"}`)),we(N,R)};St(m,N=>{i()===0?N(p):N(v,-1)})}W(d),W(_);var h=ne(_,4),x=H(h);W(h);var M=ne(h,2),S=H(M);W(M);var E=ne(M,4);fr(E,5,()=>Fs,cr,(N,R)=>{var j=Dw(),D=H(j,!0);W(j),Ze(V=>{Ie(j,1,(ee(s()),b(R),X(()=>`${c} ${s()===b(R).value?"bg-white font-bold text-stone-950 shadow-sm shadow-stone-950/10":""}`))),vf(j,(b(R),X(()=>`font-family: ${b(R).stack}`))),ln(j,"title",(b(R),X(()=>b(R).label))),ln(j,"aria-label",V),ln(j,"aria-pressed",(ee(s()),b(R),X(()=>s()===b(R).value))),Ve(D,(b(R),X(()=>b(R).sample)))},[()=>(b(R),X(()=>`Use ${b(R).label.toLowerCase()} font`))]),ke("click",j,()=>l()(b(R).value)),we(N,j)}),W(E);var A=ne(E,2),k=H(A),C=H(k,!0);W(k);var L=ne(k,2),$=H(L);$.value=$.__value="default";var z=ne($);fr(z,1,()=>xw,cr,(N,R)=>{var j=Ww(),D=H(j);W(j);var V={};Ze(()=>{Ve(D,`${b(R)??""}px`),V!==(V=b(R))&&(j.value=(j.__value=b(R))??"")}),we(N,j)}),W(L);var G;qd(L),W(A),W(u),Ze(()=>{Ie(g,1,`h-1.5 w-1.5 rounded-full ${i()===0?"bg-emerald-600":"bg-amber-700"}`),Ve(x,`${b(n)??""} words`),Ve(S,`${b(r)??""} chars`),Ve(C,o()==="default"?"Default":`${o()}px`),G!==(G=o())&&(L.value=(L.__value=o())??"",xf(L,o()))}),ke("change",L,N=>{const R=N.currentTarget.value;f()(R==="default"?"default":Number(R))}),we(t,u),Dn()}var Vw=Te('<button type="button" class="absolute top-3 right-3 z-20 inline-flex h-8 w-8 items-center justify-center rounded-md border-0 bg-transparent text-stone-600 shadow-none transition-colors duration-150 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500" aria-label="Show problems sidebar" title="Show problems sidebar"><svg viewBox="0 0 20 20" aria-hidden="true" class="h-[18px] w-[18px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"><rect x="3.5" y="3" width="13" height="14" rx="3"></rect><path d="M12.5 3v14"></path></svg></button>'),Uw=Te('<div class="harper-editor @container flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[10px] border-[0.5px] border-[rgba(28,26,22,0.14)] bg-[#fbfaf6] text-stone-950 shadow-2xl shadow-stone-950/5"><div class="flex min-h-0 min-w-0 flex-1"><section class="relative min-w-0 flex-1 bg-[#fbfaf6]" aria-label="Document editor"><div class="h-full overflow-auto p-[34px_40px_56px] @max-[760px]:p-[28px_24px_42px]"><div class="mx-auto flex min-h-full max-w-[640px]"><div class="flex min-h-full w-full flex-1" spellcheck="false"></div></div></div> <!></section> <!></div> <!></div>');function qw(t,e){zn(e,!1);const n=_e(),r=_e();let a=ce(e,"content",8,""),i=ce(e,"linter",8),s=ce(e,"onReady",8,()=>null),o=ce(e,"defaultFontFamily",8,"sans"),l=ce(e,"defaultFontSize",8,"default"),f=ce(e,"onChange",8,()=>{}),c=_e(),u=_e(0),_=_e(),d=_e([]),g=_e(null),m=_e(a()),p=_e(Ew(o())),v=_e(sf(l())),h=_e(a()),x=_e(!1),M=_e(!0),S="automated",E=null;const k=250+40;let C=new ww(async O=>{const re=await i().organizedLints(O),ze=await Promise.all(Object.entries(re).map(async([Lt,pt])=>{const Bn=await Promise.all(pt.map(Hn=>np(O,Hn,i())));return pt.forEach(Hn=>{Hn.free()}),[Lt,Bn]})),je=Object.fromEntries(ze);return V(),je},{ignoreLint:async O=>{try{await i().ignoreLintHash(BigInt(O)),console.log(`Ignored ${O}`),C.update(),V()}catch(re){console.error("Failed to ignore lint",re)}}}),L=new ResizeObserver(O=>{for(let re of O)re.contentBoxSize[0].inlineSize<640?se("automated"):ue("automated")}),$=_e(null);async function z(){var O,re,ze,je;if(b(c)!=null){if(b(_)==null){let{default:Lt}=await ra(async()=>{const{default:Bn}=await import("./CCIqGRrg.js");return{default:Bn}},[],import.meta.url);B(_,new Lt(b(c),{placeholder:"Start writing..."}));const pt=b(_).container??((O=b(_).root)==null?void 0:O.parentElement);pt==null||pt.classList.add("harper-editor-quill-container"),(re=b(_).root)==null||re.classList.add("harper-editor-surface"),(ze=b(_).root)==null||ze.setAttribute("data-enable-grammarly","false"),(je=b(_).root)==null||je.setAttribute("spellcheck","false"),R(a(),!1),b(_).on("text-change",()=>{j(!0),Y()})}for(let Lt of b(c).getElementsByTagName("p"))C.addTarget(Lt)}}function G(O){if(typeof window>"u")return;B(g,O.lint.context_hash);const re=O.range;if(re)try{const ze=re.getBoundingClientRect(),je=window.getSelection();je&&(je.removeAllRanges(),je.addRange(re.cloneRange()));const Lt=Math.max(10,window.innerHeight*.2),pt=Math.max(0,window.scrollY+ze.top-Lt);window.scrollTo({top:pt,behavior:"smooth"})}catch(ze){console.error("Failed to jump to lint",ze)}}function N(O){return O.endsWith(`
`)?O.slice(0,-1):O}function R(O,re){if(b(_)==null){B(m,O);return}b(_).setText(O,"silent"),j(re)}function j(O){if(b(_)==null)return;const re=N(b(_).getText());re!==b(m)&&(B(m,re),O&&f()(re))}function D(){B(d,[...C.getLastIgnorableLintBoxes()]),b(g)!=null&&!b(d).some(O=>O.lint.context_hash===b(g))&&B(g,null)}function V(){requestAnimationFrame(()=>{requestAnimationFrame(D)}),E!=null&&clearTimeout(E),E=setTimeout(D,150)}function Y(){z(),C.update(),V()}function ve(){j(!0),Y()}async function fe(){j(!1);const O=b(m),re=i(),ze=await re.organizedLints(O,{dedup:!1}),je=Object.values(ze).flat();je.length!==0&&await re.ignoreLints(O,je)}async function ue(O="automated"){S==="user"&&O==="automated"||(await Ld(),S=O,B(M,!0))}function se(O="automated"){S==="user"&&O==="automated"||(S=O,b(M)!==!1&&B(M,!1))}Ne(()=>b(p),()=>{B(n,Mw(b(p)))}),Ne(()=>(b(n),b(v)),()=>{B(r,`--harper-editor-font-family: ${b(n)};`+(b(v)==="default"?"":` --harper-editor-font-size: ${b(v)}px;`))}),Ne(()=>(ee(i()),b(_),b(x),ee(s())),()=>{i()!=null&&b(_)!=null&&(b(x)||(B(x,!0),s()()))}),Ne(()=>b($),()=>{b($)!=null&&L.observe(b($))}),Ne(()=>(b(u),ee(i()),ee(a()),b(c)),()=>{const O=Td(u),re=i();B(d,[]),(async()=>{try{await re.setup(),await re.lint(a())}catch(ze){console.error("Failed to initialize linter",ze)}O===b(u)&&b(c)!=null&&C.update()})()}),Ne(()=>b(c),()=>{b(c)!=null&&(new MutationObserver(z).observe(b(c),{childList:!0,subtree:!0}),z())}),Ne(()=>(b(_),ee(a()),b(h),b(m)),()=>{b(_)!=null&&a()!==b(h)&&(B(h,a()),a()!==b(m)&&(R(a(),!1),Y()))}),ma(),ha();var U=Uw(),q=H(U),te=H(q),Z=H(te),xe=H(Z),Ce=H(xe);aa(Ce,O=>B(c,O),()=>b(c)),W(xe),W(Z);var Xe=ne(Z,2);{let O=Mn(()=>!b(M));eg(Xe,{get active(){return b(O)},delayMs:k,children:(re,ze)=>{var je=Vw();rn(1,je,()=>Vr,()=>({duration:120})),ke("click",je,()=>ue("user")),we(re,je)},$$slots:{default:!0}})}W(te);var Re=ne(te,2);{var Ge=O=>{zw(O,{get lintBoxes(){return b(d)},get activeLintId(){return b(g)},focusLint:G,onActivate:re=>B(g,re==null?null:re.lint.context_hash),onApplied:ve,onIgnored:ve,onIgnoreAll:fe,onHideSidebar:()=>se("user")})};St(Re,O=>{b(M)&&O(Ge)})}W(q);var lt=ne(q,2);Hw(lt,{get text(){return b(m)},get problemCount(){return b(d),X(()=>b(d).length)},get fontFamily(){return b(p)},get fontSize(){return b(v)},onFontFamilyChange:O=>B(p,O),onFontSizeChange:O=>B(v,sf(O))}),W(U),aa(U,O=>B($,O),()=>b($)),Ze(()=>vf(U,b(r))),we(t,U),Dn()}async function Gw(){const t=await ra(()=>Promise.resolve().then(()=>L0),void 0,import.meta.url),e=await ra(()=>import("./DxIDlR-2.js"),[],import.meta.url),n=new t.LocalLinter({binary:e.slimBinary});return await n.setup(),n}var Yw=Te('<meta name="description" content="A self-hosted Harper grammar editor."/>'),Jw=Te(`<div class="flex h-full items-center justify-center rounded-[10px] border border-stone-200 bg-white text-stone-500"><div class="flex flex-col items-center gap-3"><svg class="h-8 w-8 animate-spin text-stone-400" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg> <p class="text-sm">Loading Harper's grammar engine…</p></div></div>`),Xw=Te('<div class="fixed inset-0 flex flex-col bg-stone-100"><main class="min-h-0 flex-1 p-4"><div class="mx-auto h-full max-w-[1400px]"><!></div></main></div>');function i2(t,e){zn(e,!0);const n=`This is a self-hosted copy of Harper's editor. Everything runs in your browser — no text ever leaves this page, because the grammar engine is a WebAssembly module that lives in the page itself.

Try editing this text. The grammar checker will underline mistakes on the right-hand side, and you can click them to see suggested fixes. You can also hide a problem forever ("Ignore") if you disagree with Harper.

This paragraph contains an intentional mistake: "an test" should be "a test", and the next sentence has a subject–verb agreement error ("Harper are" instead of "Harper is").`;let r=qi(""),a=qi(null);N_(()=>{{const u=new URLSearchParams(window.location.search).get("initialText");B(r,u??n,!0)}(async()=>{try{B(a,await Gw(),!0)}catch(u){console.error("Linter init failed:",u)}})()});var i=Xw();Bd("1uha8ag",u=>{var _=Yw();hf(()=>{$d.title="Harper Editor"}),we(u,_)});var s=H(i),o=H(s),l=H(o);{var f=u=>{qw(u,{get content(){return b(r)},get linter(){return b(a)}})},c=u=>{var _=Jw();we(u,_)};St(l,u=>{b(a)?u(f):u(c,-1)})}W(o),W(s),W(i),we(t,i),Dn()}export{Df as B,i2 as _,a2 as a,la as c,ya as g};
