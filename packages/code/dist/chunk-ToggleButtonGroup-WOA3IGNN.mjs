import{a as z,b as H,c as g,e as I,i as N,j as L,k as W,w as E,x as _,y as m}from"./chunk-chunk-MSLSGW6H.mjs";import{a as j}from"./chunk-chunk-PSL6BRHX.mjs";import{a}from"./chunk-chunk-23QAVL3A.mjs";import"./chunk-chunk-CXYSTCGT.mjs";import{O as A,a as C,g as G,l as O,m as $}from"./chunk-chunk-CE3G72A7.mjs";import{d as B,j as n}from"./chunk-chunk-FWOMBYHR.mjs";n();n();A();var ne=B(I()),le=B(H());n();function y(o,e){return e===void 0||o===void 0?!1:Array.isArray(e)?e.indexOf(o)>=0:o===e}n();function U(o){return L("MuiToggleButtonGroup",o)}var k=W("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),t=k;var q=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],J=o=>{let{classes:e,orientation:s,fullWidth:l,disabled:c}=o,f={root:["root",s==="vertical"&&"vertical",l&&"fullWidth"],grouped:["grouped",`grouped${m(s)}`,c&&"disabled"]};return N(f,U,e)},K=E("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(o,e)=>{let{ownerState:s}=o;return[{[`& .${t.grouped}`]:e.grouped},{[`& .${t.grouped}`]:e[`grouped${m(s.orientation)}`]},e.root,s.orientation==="vertical"&&e.vertical,s.fullWidth&&e.fullWidth]}})(({ownerState:o,theme:e})=>a({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius},o.orientation==="vertical"&&{flexDirection:"column"},o.fullWidth&&{width:"100%"},{[`& .${t.grouped}`]:a({},o.orientation==="horizontal"?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${t.selected} + .${t.grouped}.${t.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${t.selected} + .${t.grouped}.${t.selected}`]:{borderTop:0,marginTop:0}})})),Q=O(function(e,s){let l=_({props:e,name:"MuiToggleButtonGroup"}),{children:c,className:f,color:w="standard",disabled:b=!1,exclusive:M=!1,fullWidth:h=!1,onChange:d,orientation:V="horizontal",size:P="medium",value:p}=l,D=z(l,q),x=a({},l,{disabled:b,fullWidth:h,orientation:V,size:P}),R=J(x),F=(r,i)=>{if(!d)return;let v=p&&p.indexOf(i),u;p&&v>=0?(u=p.slice(),u.splice(v,1)):u=p?p.concat(i):[i],d(r,u)},S=(r,i)=>{!d||d(r,p===i?null:i)};return j(K,a({role:"group",className:g(R.root,f),ref:s,ownerState:x},D,{children:C.map(c,r=>$(r)?G(r,{className:g(R.grouped,r.props.className),onChange:M?S:F,selected:r.props.selected===void 0?y(r.props.value,p):r.props.selected,size:r.props.size||P,fullWidth:h,color:r.props.color||w,disabled:r.props.disabled||b}):null)}))}),X=Q;export{X as default,U as getToggleButtonGroupUtilityClass,t as toggleButtonGroupClasses};
