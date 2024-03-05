import{r as a,j as e}from"./jsx-runtime-BlSqMCxk.js";import{u as x,a as _,b as h,c as y,_ as S,O as k,M as f,L as j,S as w}from"./components-WydoSoOK.js";/**
 * @remix-run/react v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let i="positions";function b({getKey:t,...c}){let{isSpaMode:u}=x(),n=_(),d=h();y({getKey:t,storageKey:i});let m=a.useMemo(()=>{if(!t)return null;let s=t(n,d);return s!==n.key?s:null},[]);if(u)return null;let p=((s,g)=>{if(!window.history.state||!window.history.state.key){let o=Math.random().toString(32).slice(2);window.history.replaceState({key:o},"")}try{let r=JSON.parse(sessionStorage.getItem(s)||"{}")[g||window.history.state.key];typeof r=="number"&&window.scrollTo(0,r)}catch(o){console.error(o),sessionStorage.removeItem(s)}}).toString();return a.createElement("script",S({},c,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${p})(${JSON.stringify(i)}, ${JSON.stringify(m)})`}}))}const M="_logoContainer_ck0oe_21",v="_banner_ck0oe_26",C="_pageHeader_ck0oe_39",H="_soon_ck0oe_46",L="_links_ck0oe_52",l={logoContainer:M,banner:v,pageHeader:C,soon:H,links:L},R=()=>[];function $({children:t}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(f,{}),e.jsx(j,{})]}),e.jsxs("body",{children:[e.jsx("div",{className:l.logoContainer,children:e.jsx("img",{className:l.banner,src:"public/assets/images/rampage.png",alt:"Rampage Doom Servers"})}),t,e.jsx(b,{}),e.jsx(w,{})]})]})}function E(){return e.jsx(k,{})}export{$ as Layout,E as default,R as links};
