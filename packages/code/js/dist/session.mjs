import{Record as r}from"https://ga.jspm.io/npm:immutable@4.0.0/dist/immutable.es.js";import l from"https://unpkg.com/@spike.land/esm@0.4.33/dist/textdiff-create.mjs";import u from"https://unpkg.com/@spike.land/esm@0.4.33/dist/textdiff-patch.mjs";function g(t,e){return r({...e,room:t,state:r(e.state)()})}var h=class{session;hashCodeSession;room="";created=new Date().toISOString();constructor(e,s){let n=null;this.room=e,this.session=g(e,{...s,state:n||s.state,capabilities:{...s.capabilities,sessionStorage:m("sessionStorage")}})(),this.hashCodeSession=this.session.get("state").hashCode()}addEvent(e){this.session.get("events").push({...e}),setTimeout(()=>this.processEvents)}hashCode(){return this.session.get("state").hashCode()}processEvents(){let e=this.session.get("events"),s=e.shift();if(s)switch(s.type){case"code-init":let{code:n,transpiled:a,i,css:o,errorDiff:c,html:d}=s,p={code:n,transpiled:a,i,css:o,errorDiff:c,html:d};this.session.set("events",e),this.session.set("state",r(p)())}}updateState(e){let s=JSON.stringify(this.session.get("state").toJS()),n=this.session.get("state").hashCode();this.session=this.session.set("state",r(e)());let a=JSON.stringify(this.session.get("state").toJS()),i=this.session.get("state").hashCode(),o=I(s,a);return{oldHash:n,newHash:i,patch:o}}applyPatch({oldHash:e,newHash:s,patch:n}){if(this.session.get("state").hashCode()!==e){console.error("Cant update");return}let i=JSON.stringify(this.session.get("state").toJS()),o=JSON.parse(u(i,JSON.parse(n)));if(this.session=this.session.set("state",r(o)()),this.session.get("state").hashCode()!==s){console.error("WRONG update");return}}json(){let e=this.session.toJSON(),s=e.state.toJSON();return{...e,state:s}}setRoom(e){let s=this.session.set("room",e);this.session=s}},S=null,O=(t,e)=>S||new h(t,e);function m(t){try{if(window.hasOwnProperty(t)===!1)return;var e=window[t],s="__storage_test__";return e.setItem(s,s),e.removeItem(s),!0}catch{return!1}}function I(t,e){return JSON.stringify(l(t,e))}export{h as CodeSession,O as default};
//# sourceMappingURL=session.mjs.map
