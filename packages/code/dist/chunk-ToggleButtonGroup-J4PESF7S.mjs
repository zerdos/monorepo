import{a as z,b as A,c as g,e as H,i as N,j as L,k as W,v as E,w as _,x as m}from"./chunk-chunk-FW67LDRB.mjs";import{a as j}from"./chunk-chunk-CF2ZPPNW.mjs";import{a}from"./chunk-chunk-XLN22SLQ.mjs";import"./chunk-chunk-5WQRZTTP.mjs";import"./chunk-chunk-XL3D5F6C.mjs";import{a as C,g as G,l as O,m as $}from"./chunk-chunk-EOIA36BE.mjs";import{d as B,i as n}from"./chunk-chunk-VQAZ3CH6.mjs";n();n();var pe=B(H()),ie=B(A());n();function y(o,e){return e===void 0||o===void 0?!1:Array.isArray(e)?e.indexOf(o)>=0:o===e}n();function U(o){return L("MuiToggleButtonGroup",o)}var I=W("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),t=I;var k=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],q=o=>{let{classes:e,orientation:s,fullWidth:l,disabled:c}=o,f={root:["root",s==="vertical"&&"vertical",l&&"fullWidth"],grouped:["grouped",`grouped${m(s)}`,c&&"disabled"]};return N(f,U,e)},J=E("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(o,e)=>{let{ownerState:s}=o;return[{[`& .${t.grouped}`]:e.grouped},{[`& .${t.grouped}`]:e[`grouped${m(s.orientation)}`]},e.root,s.orientation==="vertical"&&e.vertical,s.fullWidth&&e.fullWidth]}})(({ownerState:o,theme:e})=>a({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius},o.orientation==="vertical"&&{flexDirection:"column"},o.fullWidth&&{width:"100%"},{[`& .${t.grouped}`]:a({},o.orientation==="horizontal"?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${t.selected} + .${t.grouped}.${t.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${t.selected} + .${t.grouped}.${t.selected}`]:{borderTop:0,marginTop:0}})})),K=O(function(e,s){let l=_({props:e,name:"MuiToggleButtonGroup"}),{children:c,className:f,color:w="standard",disabled:b=!1,exclusive:M=!1,fullWidth:h=!1,onChange:d,orientation:V="horizontal",size:P="medium",value:p}=l,D=z(l,k),x=a({},l,{disabled:b,fullWidth:h,orientation:V,size:P}),R=q(x),F=(r,i)=>{if(!d)return;let v=p&&p.indexOf(i),u;p&&v>=0?(u=p.slice(),u.splice(v,1)):u=p?p.concat(i):[i],d(r,u)},S=(r,i)=>{!d||d(r,p===i?null:i)};return j(J,a({role:"group",className:g(R.root,f),ref:s,ownerState:x},D,{children:C.map(c,r=>$(r)?G(r,{className:g(R.grouped,r.props.className),onChange:M?S:F,selected:r.props.selected===void 0?y(r.props.value,p):r.props.selected,size:r.props.size||P,fullWidth:h,color:r.props.color||w,disabled:r.props.disabled||b}):null)}))}),Q=K;export{Q as default,U as getToggleButtonGroupUtilityClass,t as toggleButtonGroupClasses};
