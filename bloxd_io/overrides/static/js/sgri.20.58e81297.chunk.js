"use strict";(self.webpackChunkbloxd=self.webpackChunkbloxd||[]).push([[20],{3890:(p,h,r)=>{r.r(h),r.d(h,{BloxdFirebase:()=>s,initializeFirebase:()=>x});var m=r(502),L=r(3896),z=r(3925),C=r(3927),v=r(76),O=r(427);let T=!1;function x(){if(T)throw new Error("Firebase should only be initialised once");return T=!0,new s}class s{constructor(){this.failed=void 0,this.firebaseApp=void 0,this.analytics=void 0,this.auth=void 0,this.googleProvider=void 0,console.assert((0,v.n)(),"Firebase should only be initialised if it is enabled"),this.failed=!1,console.log("Current gamemode",(0,m.v)());const p={apiKey:"AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",authDomain:"bloxd-ee1aa.firebaseapp.com",projectId:"bloxd-ee1aa",storageBucket:"bloxd-ee1aa.appspot.com",messagingSenderId:"758847442742",appId:"1:758847442742:web:7bb74eb261641e30f02d97",measurementId:"G-DXF16YBENG"},h=p;this.firebaseApp=(0,L.d)(p),window.dataLayer=window.dataLayer||[],window.gtag=window.gtag||function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",h,{send_page_view:!1}),window.gtag("config","AW-16469618203"),this.analytics=(0,z.e)();const r={portal:O.d.getSearchParam("portal")||"root",loggedIn:!1};this.setUserProperties(r);try{this.auth=(0,C.f)(),(0,C.p)(this.auth),this.googleProvider=new C.e}catch(p){this.failed=!0,console.error("Failed to log in because firebase auth crashes when you cannot read from localstorage")}window.gtag("set",{cookie_flags:"SameSite=None;Secure"})}hasFailed(){return this.failed}setUserProperties(p){this.failed||(0,z.i)(this.analytics,p)}onIdTokenChanged(p){this.failed||(0,C.h)(this.auth,p)}signOut(){if(!this.failed)return(0,C.l)(this.auth)}signInWithPopup(p){return this.failed?null:(0,C.k)(this.auth,p)}}}}]);