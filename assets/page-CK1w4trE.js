import{j as e,P as m}from"./pro-components-DqS1vNmp.js";import{r as s,aI as x,Z as p,S as h,B as o}from"./antd-2qrym3SB.js";import{T as u}from"./TextResultBox-mAI1BqhK.js";import"./ContentCopyButton-BjXZ8JlH.js";import"./index-d_YuH_AW.js";import"./jsoneditor-EB9WOjbk.js";const v=()=>{const[n,c]=s.useState(""),[a,t]=s.useState(""),r=function(){t(encodeURI(n))},i=function(){t(encodeURIComponent(n))},d=function(){t(decodeURIComponent(n))};return e.jsx(m,{title:!1,className:"mx-auto max-w-screen-lg px-4 pt-4",children:e.jsxs(x,{children:[e.jsx("div",{children:e.jsx(p.TextArea,{rows:3,value:n,placeholder:"URL",onChange:l=>{c(l.target.value)}})}),e.jsx("div",{className:"mt-4",children:e.jsxs(h.Compact,{children:[e.jsx(o,{onClick:r,children:"链接参数编码"}),e.jsx(o,{onClick:i,children:"全链接编码"}),e.jsx(o,{onClick:d,children:"链接解码"})]})}),e.jsx("div",{className:"mt-4",children:e.jsx(u,{title:"结果",text:a})})]})})};export{v as Component};
//# sourceMappingURL=page-CK1w4trE.js.map