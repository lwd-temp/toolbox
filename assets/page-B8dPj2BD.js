import{j as e,P as h}from"./pro-components-DqS1vNmp.js";import{r as m,a5 as r,aI as p,a6 as c,Z as x,ai as j,S as f,B as C}from"./antd-2qrym3SB.js";import{C as N}from"./ContentCopyButton-BjXZ8JlH.js";import{I}from"./index-d_YuH_AW.js";import{c as S}from"./index.browser-CJrp5d7n.js";import"./jsoneditor-EB9WOjbk.js";const v=["0","1","2","3","4","5","6","7","8","9"],b=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],g=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],u="",y=({length:a=8,numeric:o=!0,lowercase:t=!0,uppercase:l=!0,symbol:i=!1,symbolChars:n="!@#$%^&*"})=>{if(typeof a>"u"||a===null||a<=0)return u;let s=[];return o&&(s=s.concat(v)),t&&(s=s.concat(b)),l&&(s=s.concat(g)),i&&n&&(s=s.concat(n.split(""))),s.length<2?u:S(s.join(""),a)()},d={numeric:!0,lowercase:!0,uppercase:!0,symbol:!1,symbolChars:"!@#$%^&*",length:8},H=()=>{const[a,o]=m.useState("");m.useEffect(()=>{t()},[]);const t=(n=d)=>{const s=y(n);o(s)},l=(n,s)=>{t(s)},i=n=>{t(n)};return e.jsx(h,{title:!1,className:"mx-auto max-w-screen-lg px-4 pt-4",children:e.jsx(r,{layout:"horizontal",initialValues:d,onValuesChange:l,onFinish:i,children:e.jsxs(p,{children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-12",children:[e.jsx(r.Item,{name:"numeric",valuePropName:"checked",className:"sm:col-span-6",children:e.jsx(c,{children:"数字 0 ～ 9"})}),e.jsx(r.Item,{name:"lowercase",valuePropName:"checked",className:"sm:col-span-6",children:e.jsx(c,{children:"小写字母 a ~ z"})}),e.jsx(r.Item,{name:"uppercase",valuePropName:"checked",className:"sm:col-span-6",children:e.jsx(c,{children:"大写字母 A ~ Z"})}),e.jsxs("div",{className:"flex sm:col-span-6",children:[e.jsx(r.Item,{name:"symbol",valuePropName:"checked",className:"basis-20",children:e.jsx(c,{children:"符号"})}),e.jsx(r.Item,{name:"symbolChars",className:"flex-1",children:e.jsx(x,{})})]})]}),e.jsx("div",{children:e.jsx(r.Item,{name:"length",label:"长度",children:e.jsx(j,{min:6,max:64,step:1,marks:{6:"6",8:"8",16:"16",32:"32",64:"64"}})})}),e.jsxs("div",{className:"flex",children:[e.jsx(x,{value:a,showCount:!0,className:"mr-2 flex-auto"}),e.jsxs(f.Compact,{className:"flex-none",children:[e.jsx(C,{htmlType:"submit",icon:e.jsx(I,{icon:"material-symbols:refresh"})}),e.jsx(N,{text:a})]})]})]})})})};export{H as Component};
//# sourceMappingURL=page-B8dPj2BD.js.map