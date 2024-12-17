/*! For license information please see sgri.36.3ac081b8.chunk.js.LICENSE.txt */
(self.webpackChunkbloxd=self.webpackChunkbloxd||[]).push([[36],{11297:function(p,h){!function(p){"use strict";var h="dnd-poly-",r=h+"snapback",m="dnd-poly-",L=m+"dragstart-pending",z=m+"dragstart-cancel",C=["none","copy","copyLink","copyMove","link","linkMove","move","all"],v=["none","copy","move","link"],O=function(){var p=!1;try{var h=Object.defineProperty({},"passive",{get:function(){p=!0}});window.addEventListener("test",null,h)}catch(p){}return p}();function T(p){return p&&p.tagName}function x(p,h,r){void 0===r&&(r=!0),document.addEventListener(p,h,!!O&&{passive:r})}function s(p,h){document.removeEventListener(p,h)}function P(p,h,r,m){void 0===m&&(m=!1);var L=O?{passive:!0,capture:m}:m;return p.addEventListener(h,r,L),{off:function(){p.removeEventListener(h,r,L)}}}function G(p){return 0===p.length?0:p.reduce((function(p,h){return h+p}),0)/p.length}function k(p,h){for(var r=0;r<p.changedTouches.length;r++)if(p.changedTouches[r].identifier===h)return!0;return!1}function M(p,h,r){for(var m=[],L=[],z=0;z<h.touches.length;z++){var C=h.touches[z];m.push(C[p+"X"]),L.push(C[p+"Y"])}r.x=G(m),r.y=G(L)}var H=["","-webkit-"];function I(p,h,r,m,L){void 0===L&&(L=!0);var z=h.x,C=h.y;m&&(z+=m.x,C+=m.y),L&&(z-=parseInt(p.offsetWidth,10)/2,C-=parseInt(p.offsetHeight,10)/2);for(var v="translate3d("+z+"px,"+C+"px, 0)",O=0;O<H.length;O++){var T=H[O]+"transform";p.style[T]=v+" "+r[O]}}var U=function(){function p(p,h){this.t=p,this.i=h,this.s=v[0]}return Object.defineProperty(p.prototype,"dropEffect",{get:function(){return this.s},set:function(p){0!==this.t.mode&&C.indexOf(p)>-1&&(this.s=p)},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"types",{get:function(){if(0!==this.t.mode)return Object.freeze(this.t.types)},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"effectAllowed",{get:function(){return this.t.effectAllowed},set:function(p){2===this.t.mode&&C.indexOf(p)>-1&&(this.t.effectAllowed=p)},enumerable:!0,configurable:!0}),p.prototype.setData=function(p,h){if(2===this.t.mode){if(p.indexOf(" ")>-1)throw new Error("illegal arg: type contains space");this.t.data[p]=h,-1===this.t.types.indexOf(p)&&this.t.types.push(p)}},p.prototype.getData=function(p){if(1===this.t.mode||2===this.t.mode)return this.t.data[p]||""},p.prototype.clearData=function(p){if(2===this.t.mode){if(p&&this.t.data[p]){delete this.t.data[p];var h=this.t.types.indexOf(p);return void(h>-1&&this.t.types.splice(h,1))}this.t.data={},this.t.types=[]}},p.prototype.setDragImage=function(p,h,r){2===this.t.mode&&this.i(p,h,r)},p}();function E(p,h){return p?p===C[0]?v[0]:0===p.indexOf(C[1])||p===C[7]?v[1]:0===p.indexOf(C[4])?v[3]:p===C[6]?v[2]:v[1]:3===h.nodeType&&"A"===h.tagName?v[3]:v[1]}function j(p,h,r,m,L,z,C){void 0===z&&(z=!0),void 0===C&&(C=null);var v=function(p,h,r,m,L,z,C){void 0===C&&(C=null);var v=h.changedTouches[0],O=new Event(r,{bubbles:!0,cancelable:m});O.dataTransfer=z,O.relatedTarget=C,O.screenX=v.screenX,O.screenY=v.screenY,O.clientX=v.clientX,O.clientY=v.clientY,O.pageX=v.pageX,O.pageY=v.pageY;var T=p.getBoundingClientRect();return O.offsetX=O.clientX-T.left,O.offsetY=O.clientY-T.top,O}(h,r,p,z,document.defaultView,L,C),O=!h.dispatchEvent(v);return m.mode=0,O}function c(p,h){if(!p||p===C[7])return h;if(h===v[1]){if(0===p.indexOf(v[1]))return v[1]}else if(h===v[3]){if(0===p.indexOf(v[3])||p.indexOf("Link")>-1)return v[3]}else if(h===v[2]&&(0===p.indexOf(v[2])||p.indexOf("Move")>-1))return v[2];return v[0]}var W,K=function(){function p(p,h,r,m){this.h=p,this.o=h,this.u=r,this.l=m,this.v=0,this.p=null,this.g=null,this.m=p,this.I=p.changedTouches[0],this.j=this.C.bind(this),this.S=this.k.bind(this),x("touchmove",this.j,!1),x("touchend",this.S,!1),x("touchcancel",this.S,!1)}return p.prototype.A=function(){var p=this;this.v=1,this.O=v[0],this.D={data:{},effectAllowed:void 0,mode:3,types:[]},this.M={x:null,y:null},this.F={x:null,y:null};var h=this.u;if(this.N=new U(this.D,(function(r,m,L){h=r,"number"!=typeof m&&"number"!=typeof L||(p.P={x:m||0,y:L||0})})),this.D.mode=2,this.N.dropEffect=v[0],j("dragstart",this.u,this.m,this.D,this.N))return this.v=3,this.T(),!1;M("page",this.m,this.F);var r,m=this.o.dragImageSetup(h);if(this.L=(r=m,H.map((function(p){var h=r.style[p+"transform"];return h&&"none"!==h?h.replace(/translate\(\D*\d+[^,]*,\D*\d+[^,]*\)\s*/g,""):""}))),m.style.position="absolute",m.style.left="0px",m.style.top="0px",m.style.zIndex="999999",m.classList.add("dnd-poly-drag-image"),m.classList.add("dnd-poly-icon"),this._=m,!this.P)if(this.o.dragImageOffset)this.P={x:this.o.dragImageOffset.x,y:this.o.dragImageOffset.y};else if(this.o.dragImageCenterOnTouch){var L=getComputedStyle(h);this.P={x:0-parseInt(L.marginLeft,10),y:0-parseInt(L.marginTop,10)}}else{var z=h.getBoundingClientRect();L=getComputedStyle(h),this.P={x:z.left-this.I.clientX-parseInt(L.marginLeft,10)+z.width/2,y:z.top-this.I.clientY-parseInt(L.marginTop,10)+z.height/2}}return I(this._,this.F,this.L,this.P,this.o.dragImageCenterOnTouch),document.body.appendChild(this._),this.V=window.setInterval((function(){p.X||(p.X=!0,p.Y(),p.X=!1)}),this.o.iterationInterval),!0},p.prototype.T=function(){this.V&&(clearInterval(this.V),this.V=null),s("touchmove",this.j),s("touchend",this.S),s("touchcancel",this.S),this._&&(this._.parentNode.removeChild(this._),this._=null),this.l(this.o,this.m,this.v)},p.prototype.C=function(p){var h=this;if(!1!==k(p,this.I.identifier)){if(this.m=p,0===this.v){var r=void 0;if(this.o.dragStartConditionOverride)try{r=this.o.dragStartConditionOverride(p)}catch(p){r=!1}else r=1===p.touches.length;return r?void(!0===this.A()&&(this.h.preventDefault(),p.preventDefault())):void this.T()}if(p.preventDefault(),M("client",p,this.M),M("page",p,this.F),this.o.dragImageTranslateOverride)try{var m=!1;if(this.o.dragImageTranslateOverride(p,{x:this.M.x,y:this.M.y},this.p,(function(p,r){h._&&(m=!0,h.M.x+=p,h.M.y+=r,h.F.x+=p,h.F.y+=r,I(h._,h.F,h.L,h.P,h.o.dragImageCenterOnTouch))})),m)return}catch(p){}I(this._,this.F,this.L,this.P,this.o.dragImageCenterOnTouch)}},p.prototype.k=function(p){if(!1!==k(p,this.I.identifier)){if(this.o.dragImageTranslateOverride)try{this.o.dragImageTranslateOverride(void 0,void 0,void 0,(function(){}))}catch(p){}0!==this.v?(p.preventDefault(),this.v="touchcancel"===p.type?3:2):this.T()}},p.prototype.Y=function(){var p=this,m=this.O;this.D.mode=3,this.N.dropEffect=v[0];var L=j("drag",this.u,this.m,this.D,this.N);if(L&&(this.O=v[0]),L||2===this.v||3===this.v)return this.q(this.v)?void function(p,h,m,L){var z=getComputedStyle(p);if("hidden"!==z.visibility&&"none"!==z.display){h.classList.add(r);var C=getComputedStyle(h),v=parseFloat(C.transitionDuration);if(isNaN(v)||0===v)L();else{var O=p.getBoundingClientRect(),T={x:O.left,y:O.top};T.x+=document.body.scrollLeft||document.documentElement.scrollLeft,T.y+=document.body.scrollTop||document.documentElement.scrollTop,T.x-=parseInt(z.marginLeft,10),T.y-=parseInt(z.marginTop,10);var x=parseFloat(C.transitionDelay),s=Math.round(1e3*(v+x));I(h,T,m,void 0,!1),setTimeout(L,s)}}else L()}(this.u,this._,this.L,(function(){p.B()})):void this.B();var z=this.o.elementFromPoint(this.M.x,this.M.y),C=this.g;z!==this.p&&z!==this.g&&(this.p=z,null!==this.g&&(this.D.mode=3,this.N.dropEffect=v[0],j("dragexit",this.g,this.m,this.D,this.N,!1)),null===this.p?this.g=this.p:(this.D.mode=3,this.N.dropEffect=E(this.D.effectAllowed,this.u),j("dragenter",this.p,this.m,this.D,this.N)?(this.g=this.p,this.O=c(this.N.effectAllowed,this.N.dropEffect)):this.p!==document.body&&(this.g=document.body))),C!==this.g&&T(C)&&(this.D.mode=3,this.N.dropEffect=v[0],j("dragleave",C,this.m,this.D,this.N,!1,this.g)),T(this.g)&&(this.D.mode=3,this.N.dropEffect=E(this.D.effectAllowed,this.u),!1===j("dragover",this.g,this.m,this.D,this.N)?this.O=v[0]:this.O=c(this.N.effectAllowed,this.N.dropEffect)),m!==this.O&&this._.classList.remove(h+m);var O=h+this.O;this._.classList.add(O)},p.prototype.q=function(p){var h=this.O===v[0]||null===this.g||3===p;return h?T(this.g)&&(this.D.mode=3,this.N.dropEffect=v[0],j("dragleave",this.g,this.m,this.D,this.N,!1)):T(this.g)&&(this.D.mode=1,this.N.dropEffect=this.O,!0===j("drop",this.g,this.m,this.D,this.N)?this.O=this.N.dropEffect:this.O=v[0]),h},p.prototype.B=function(){this.D.mode=3,this.N.dropEffect=this.O,j("dragend",this.u,this.m,this.D,this.N,!1),this.v=2,this.T()},p}(),A={iterationInterval:150,tryFindDraggableTarget:function(p){var h=p.target;do{if(!1!==h.draggable){if(!0===h.draggable)return h;if(h.getAttribute&&"true"===h.getAttribute("draggable"))return h}}while((h=h.parentNode)&&h!==document.body)},dragImageSetup:function(p){var h=p.cloneNode(!0);return function p(h,r){if(1===h.nodeType){for(var m=getComputedStyle(h),L=0;L<m.length;L++){var z=m[L];r.style.setProperty(z,m.getPropertyValue(z),m.getPropertyPriority(z))}if(r.style.pointerEvents="none",r.removeAttribute("id"),r.removeAttribute("class"),r.removeAttribute("draggable"),"CANVAS"===r.nodeName){var C=h,v=r,O=C.getContext("2d").getImageData(0,0,C.width,C.height);v.getContext("2d").putImageData(O,0,0)}}if(h.hasChildNodes())for(L=0;L<h.childNodes.length;L++)p(h.childNodes[L],r.childNodes[L])}(p,h),h},elementFromPoint:function(p,h){return document.elementFromPoint(p,h)}};function X(p){if(!W){var h=A.tryFindDraggableTarget(p);if(h)try{W=new K(p,A,h,f)}catch(h){throw f(A,p,3),h}}}function t(p){var h=p.target,r=function(p){C.off(),v.off(),O.off(),T.off(),h&&h.dispatchEvent(new CustomEvent(z,{bubbles:!0,cancelable:!0})),clearTimeout(m)};h&&h.dispatchEvent(new CustomEvent(L,{bubbles:!0,cancelable:!0}));var m=window.setTimeout((function(){C.off(),v.off(),O.off(),T.off(),X(p)}),A.holdToDrag),C=P(h,"touchend",r),v=P(h,"touchcancel",r),O=P(h,"touchmove",r),T=P(window,"scroll",r,!0)}function f(p,h,r){if(0===r&&p.defaultActionOverride)try{p.defaultActionOverride(h),h.defaultPrevented}catch(p){}W=null}p.polyfill=function(p){if(p&&Object.keys(p).forEach((function(h){A[h]=p[h]})),!A.forceApply){var h=(r={dragEvents:"ondragstart"in document.documentElement,draggable:"draggable"in document.documentElement,userAgentSupportingNativeDnD:void 0},m=!!window.chrome||/chrome/i.test(navigator.userAgent),r.userAgentSupportingNativeDnD=!(/iPad|iPhone|iPod|Android/.test(navigator.userAgent)||m&&"ontouchstart"in document.documentElement),r);if(h.userAgentSupportingNativeDnD&&h.draggable&&h.dragEvents)return!1}var r,m;return A.holdToDrag?x("touchstart",t,!1):x("touchstart",X,!1),!0},Object.defineProperty(p,"__esModule",{value:!0})}(h)}}]);