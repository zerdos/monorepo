var k=Object.create;var f=Object.defineProperty,l=Object.defineProperties,m=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,p=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var g=(b,a,c)=>a in b?f(b,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):b[a]=c,s=(b,a)=>{for(var c in a||(a={}))i.call(a,c)&&g(b,c,a[c]);if(h)for(var c of h(a))q.call(a,c)&&g(b,c,a[c]);return b},t=(b,a)=>l(b,n(a));var u=(b,a)=>()=>(b&&(a=b(b=0)),a);var v=(b,a)=>()=>(a||b((a={exports:{}}).exports,a),a.exports),w=(b,a)=>{for(var c in a)f(b,c,{get:a[c],enumerable:!0})},r=(b,a,c,d)=>{if(a&&typeof a=="object"||typeof a=="function")for(let e of o(a))!i.call(b,e)&&e!==c&&f(b,e,{get:()=>a[e],enumerable:!(d=m(a,e))||d.enumerable});return b};var x=(b,a,c)=>(c=b!=null?k(p(b)):{},r(a||!b||!b.__esModule?f(c,"default",{value:b,enumerable:!0}):c,b));var y=(b,a,c)=>(g(b,typeof a!="symbol"?a+"":a,c),c),j=(b,a,c)=>{if(!a.has(b))throw TypeError("Cannot "+c)};var z=(b,a,c)=>(j(b,a,"read from private field"),c?c.call(b):a.get(b)),A=(b,a,c)=>{if(a.has(b))throw TypeError("Cannot add the same private member more than once");a instanceof WeakSet?a.add(b):a.set(b,c)},B=(b,a,c,d)=>(j(b,a,"write to private field"),d?d.call(b,c):a.set(b,c),c);export{s as a,t as b,u as c,v as d,w as e,x as f,y as g,z as h,A as i,B as j};
