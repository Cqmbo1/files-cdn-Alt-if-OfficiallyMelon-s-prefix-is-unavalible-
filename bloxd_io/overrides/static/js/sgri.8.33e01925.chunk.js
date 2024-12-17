"use strict";(self.webpackChunkbloxd=self.webpackChunkbloxd||[]).push([[8],{2560:(p,h,r)=>{var m=r(1281),L=r(1238),z=r(1191),C=r(1188),v=r(1245),O=r(1297);v.c.prototype._partialLoadFile=function(p,h,r,m){let L=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this._loadFile(p,(p=>{r[h]=p,r._internalCount++,6===r._internalCount&&m(r)}),void 0,void 0,!0,((p,h)=>{L&&p&&L(p.status+" "+p.statusText,h)}))},v.c.prototype._cascadeLoadFiles=function(p,h,r){let m=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;const L=[];L._internalCount=0;for(let p=0;p<6;p++)this._partialLoadFile(r[p],p,L,h,m)},v.c.prototype._cascadeLoadImgs=function(p,h,r,m){let L=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,z=arguments.length>5?arguments[5]:void 0;const C=[];C._internalCount=0;for(let v=0;v<6;v++)this._partialLoadImg(m[v],v,C,p,h,r,L,z)},v.c.prototype._partialLoadImg=function(p,h,r,m,L,v){let O=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,T=arguments.length>7?arguments[7]:void 0;const x=(0,C.b)();(0,z.q)(p,(p=>{r[h]=p,r._internalCount++,m&&m.removePendingData(x),6===r._internalCount&&v&&v(L,r)}),((p,h)=>{m&&m.removePendingData(x),O&&O(p,h)}),m?m.offlineProvider:null,T),m&&m.addPendingData(x)},v.c.prototype.createCubeTextureBase=function(p,h,r,z){let C=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,v=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,T=arguments.length>6?arguments[6]:void 0,x=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,s=arguments.length>8&&void 0!==arguments[8]&&arguments[8],P=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,G=arguments.length>10&&void 0!==arguments[10]?arguments[10]:0,k=arguments.length>11&&void 0!==arguments[11]?arguments[11]:null,M=arguments.length>12&&void 0!==arguments[12]?arguments[12]:null,H=arguments.length>13&&void 0!==arguments[13]?arguments[13]:null,I=arguments.length>14&&void 0!==arguments[14]&&arguments[14],U=arguments.length>15&&void 0!==arguments[15]?arguments[15]:null;const E=k||new m.e(this,7);E.isCube=!0,E.url=p,E.generateMipMaps=!z,E._lodGenerationScale=P,E._lodGenerationOffset=G,E._useSRGBBuffer=!!I&&this._caps.supportSRGBBuffers&&(this.version>1||this.isWebGPU||!!z),E!==k&&(E.label=p.substring(0,60)),this._doNotHandleContextLost||(E._extension=x,E._files=r,E._buffer=U);const j=p;this._transformTextureUrl&&!k&&(p=this._transformTextureUrl(p));const c=p.split("?")[0],W=c.lastIndexOf("."),K=x||(W>-1?c.substring(W).toLowerCase():""),A=(0,O.d)(K),X=(m,O)=>{p===j?v&&m&&v(m.status+" "+m.statusText,O):(L.e.Warn(`Failed to load ${p}, falling back to the ${j}`),this.createCubeTextureBase(j,h,r,!!z,C,v,T,x,s,P,G,E,M,H,I,U))};if(A)A.then((m=>{const z=p=>{M&&M(E,p),m.loadCubeData(p,E,s,C,v)};U?z(U):r&&6===r.length?m.supportCascades?this._cascadeLoadFiles(h,(p=>z(p.map((p=>new Uint8Array(p))))),r,v):v?v("Textures type does not support cascades."):L.e.Warn("Texture loader does not support cascades."):this._loadFile(p,(p=>z(new Uint8Array(p))),void 0,void 0,!0,X)}));else{if(!r||0===r.length)throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");this._cascadeLoadImgs(h,E,((p,h)=>{H&&H(p,h)}),r,v)}return this._internalTexturesCache.push(E),E}},2526:(p,h,r)=>{r.d(h,{b:()=>k});var m=r(1173),L=r(1238),z=r(2530),C=r(2537);r(2560);const v=131072,O=131072;function T(p){return p.charCodeAt(0)+(p.charCodeAt(1)<<8)+(p.charCodeAt(2)<<16)+(p.charCodeAt(3)<<24)}const x=T("DXT1"),s=T("DXT3"),P=T("DXT5"),G=T("DX10");class k{static GetDDSInfo(p){const h=new Int32Array(p.buffer,p.byteOffset,31),r=new Int32Array(p.buffer,p.byteOffset,35);let m=1;h[2]&v&&(m=Math.max(1,h[7]));const L=h[21],z=L===G?r[32]:0;let C=0;switch(L){case 113:C=2;break;case 116:C=1;break;case G:if(10===z){C=2;break}if(2===z){C=1;break}}return{width:h[4],height:h[3],mipmapCount:m,isFourCC:4===(4&h[20]),isRGB:64===(64&h[20]),isLuminance:(h[20]&O)===O,isCube:512===(512&h[28]),isCompressed:L===x||L===s||L===P,dxgiFormat:z,textureType:C}}static _GetHalfFloatAsFloatRGBAArrayBuffer(p,h,r,m,L,z){const v=new Float32Array(m),O=new Uint16Array(L,r);let T=0;for(let r=0;r<h;r++)for(let h=0;h<p;h++){const m=4*(h+r*p);v[T]=(0,C.h)(O[m]),v[T+1]=(0,C.h)(O[m+1]),v[T+2]=(0,C.h)(O[m+2]),k.StoreLODInAlphaChannel?v[T+3]=z:v[T+3]=(0,C.h)(O[m+3]),T+=4}return v}static _GetHalfFloatRGBAArrayBuffer(p,h,r,m,L,z){if(k.StoreLODInAlphaChannel){const v=new Uint16Array(m),O=new Uint16Array(L,r);let T=0;for(let r=0;r<h;r++)for(let h=0;h<p;h++){const m=4*(h+r*p);v[T]=O[m],v[T+1]=O[m+1],v[T+2]=O[m+2],v[T+3]=(0,C.l)(z),T+=4}return v}return new Uint16Array(L,r,m)}static _GetFloatRGBAArrayBuffer(p,h,r,m,L,z){if(k.StoreLODInAlphaChannel){const C=new Float32Array(m),v=new Float32Array(L,r);let O=0;for(let r=0;r<h;r++)for(let h=0;h<p;h++){const m=4*(h+r*p);C[O]=v[m],C[O+1]=v[m+1],C[O+2]=v[m+2],C[O+3]=z,O+=4}return C}return new Float32Array(L,r,m)}static _GetFloatAsHalfFloatRGBAArrayBuffer(p,h,r,m,L,z){const v=new Uint16Array(m),O=new Float32Array(L,r);let T=0;for(let r=0;r<h;r++)for(let h=0;h<p;h++)v[T]=(0,C.l)(O[T]),v[T+1]=(0,C.l)(O[T+1]),v[T+2]=(0,C.l)(O[T+2]),k.StoreLODInAlphaChannel?v[T+3]=(0,C.l)(z):v[T+3]=(0,C.l)(O[T+3]),T+=4;return v}static _GetFloatAsUIntRGBAArrayBuffer(p,h,r,L,z,C){const v=new Uint8Array(L),O=new Float32Array(z,r);let T=0;for(let r=0;r<h;r++)for(let h=0;h<p;h++){const L=4*(h+r*p);v[T]=255*(0,m.d)(O[L]),v[T+1]=255*(0,m.d)(O[L+1]),v[T+2]=255*(0,m.d)(O[L+2]),k.StoreLODInAlphaChannel?v[T+3]=C:v[T+3]=255*(0,m.d)(O[L+3]),T+=4}return v}static _GetHalfFloatAsUIntRGBAArrayBuffer(p,h,r,L,z,v){const O=new Uint8Array(L),T=new Uint16Array(z,r);let x=0;for(let r=0;r<h;r++)for(let h=0;h<p;h++){const L=4*(h+r*p);O[x]=255*(0,m.d)((0,C.h)(T[L])),O[x+1]=255*(0,m.d)((0,C.h)(T[L+1])),O[x+2]=255*(0,m.d)((0,C.h)(T[L+2])),k.StoreLODInAlphaChannel?O[x+3]=v:O[x+3]=255*(0,m.d)((0,C.h)(T[L+3])),x+=4}return O}static _GetRGBAArrayBuffer(p,h,r,m,L,z,C,v,O){const T=new Uint8Array(m),x=new Uint8Array(L,r);let s=0;for(let r=0;r<h;r++)for(let h=0;h<p;h++){const m=4*(h+r*p);T[s]=x[m+z],T[s+1]=x[m+C],T[s+2]=x[m+v],T[s+3]=x[m+O],s+=4}return T}static _ExtractLongWordOrder(p){return 0===p||255===p||-16777216===p?0:1+k._ExtractLongWordOrder(p>>8)}static _GetRGBArrayBuffer(p,h,r,m,L,z,C,v){const O=new Uint8Array(m),T=new Uint8Array(L,r);let x=0;for(let r=0;r<h;r++)for(let h=0;h<p;h++){const m=3*(h+r*p);O[x]=T[m+z],O[x+1]=T[m+C],O[x+2]=T[m+v],x+=3}return O}static _GetLuminanceArrayBuffer(p,h,r,m,L){const z=new Uint8Array(m),C=new Uint8Array(L,r);let v=0;for(let r=0;r<h;r++)for(let h=0;h<p;h++){const m=h+r*p;z[v]=C[m],v++}return z}static UploadDDSLevels(p,h,r,m,C,O){let T=arguments.length>6&&void 0!==arguments[6]?arguments[6]:-1,M=arguments.length>7?arguments[7]:void 0,H=!(arguments.length>8&&void 0!==arguments[8])||arguments[8],I=null;m.sphericalPolynomial&&(I=[]);const U=!!p.getCaps().s3tc;h.generateMipMaps=C;const E=new Int32Array(r.buffer,r.byteOffset,31);let j,c,W,K,A,X,t,f=0,Z=0,N=1;if(542327876!==E[0])return void L.e.Error("Invalid magic number in DDS header");if(!m.isFourCC&&!m.isRGB&&!m.isLuminance)return void L.e.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");if(m.isCompressed&&!U)return void L.e.Error("Compressed textures are not supported on this platform.");let i=E[22];K=E[1]+4;let w=!1;if(m.isFourCC)switch(j=E[21],j){case x:N=8,Z=33777;break;case s:N=16,Z=33778;break;case P:N=16,Z=33779;break;case 113:w=!0,i=64;break;case 116:w=!0,i=128;break;case G:{K+=20;let p=!1;switch(m.dxgiFormat){case 10:w=!0,i=64,p=!0;break;case 2:w=!0,i=128,p=!0;break;case 88:m.isRGB=!0,m.isFourCC=!1,i=32,p=!0}if(p)break}default:return void L.e.Error(["Unsupported FourCC code:",(S=j,String.fromCharCode(255&S,S>>8&255,S>>16&255,S>>24&255))])}var S;const Q=k._ExtractLongWordOrder(E[23]),J=k._ExtractLongWordOrder(E[24]),o=k._ExtractLongWordOrder(E[25]),d=k._ExtractLongWordOrder(E[26]);w&&(Z=p._getRGBABufferInternalSizedFormat(m.textureType)),X=1,E[2]&v&&!1!==C&&(X=Math.max(1,E[7]));const e=M||0,F=p.getCaps();for(let L=e;L<O;L++){for(c=E[4],W=E[3],t=0;t<X;++t){if(-1===T||T===t){const z=-1===T?t:0;if(!m.isCompressed&&m.isFourCC){h.format=5,f=c*W*4;let m=null;if(p._badOS||p._badDesktopOS||!F.textureHalfFloat&&!F.textureFloat)128===i?(m=k._GetFloatAsUIntRGBAArrayBuffer(c,W,r.byteOffset+K,f,r.buffer,z),I&&0==z&&I.push(k._GetFloatRGBAArrayBuffer(c,W,r.byteOffset+K,f,r.buffer,z))):64===i&&(m=k._GetHalfFloatAsUIntRGBAArrayBuffer(c,W,r.byteOffset+K,f,r.buffer,z),I&&0==z&&I.push(k._GetHalfFloatAsFloatRGBAArrayBuffer(c,W,r.byteOffset+K,f,r.buffer,z))),h.type=0;else{const p=F.textureFloat&&(H&&F.textureFloatLinearFiltering||!H),L=F.textureHalfFloat&&(H&&F.textureHalfFloatLinearFiltering||!H),C=(128===i||64===i&&!L)&&p?1:(64===i||128===i&&!p)&&L?2:0;let v,O=null;if(128===i)switch(C){case 1:v=k._GetFloatRGBAArrayBuffer,O=null;break;case 2:v=k._GetFloatAsHalfFloatRGBAArrayBuffer,O=k._GetFloatRGBAArrayBuffer;break;case 0:v=k._GetFloatAsUIntRGBAArrayBuffer,O=k._GetFloatRGBAArrayBuffer}else switch(C){case 1:v=k._GetHalfFloatAsFloatRGBAArrayBuffer,O=null;break;case 2:v=k._GetHalfFloatRGBAArrayBuffer,O=k._GetHalfFloatAsFloatRGBAArrayBuffer;break;case 0:v=k._GetHalfFloatAsUIntRGBAArrayBuffer,O=k._GetHalfFloatAsFloatRGBAArrayBuffer}h.type=C,m=v(c,W,r.byteOffset+K,f,r.buffer,z),I&&0==z&&I.push(O?O(c,W,r.byteOffset+K,f,r.buffer,z):m)}m&&p._uploadDataToTextureDirectly(h,m,L,z)}else if(m.isRGB)h.type=0,24===i?(h.format=4,f=c*W*3,A=k._GetRGBArrayBuffer(c,W,r.byteOffset+K,f,r.buffer,Q,J,o),p._uploadDataToTextureDirectly(h,A,L,z)):(h.format=5,f=c*W*4,A=k._GetRGBAArrayBuffer(c,W,r.byteOffset+K,f,r.buffer,Q,J,o,d),p._uploadDataToTextureDirectly(h,A,L,z));else if(m.isLuminance){const m=p._getUnpackAlignement(),C=c;f=Math.floor((c+m-1)/m)*m*(W-1)+C,A=k._GetLuminanceArrayBuffer(c,W,r.byteOffset+K,f,r.buffer),h.format=1,h.type=0,p._uploadDataToTextureDirectly(h,A,L,z)}else f=Math.max(4,c)/4*Math.max(4,W)/4*N,A=new Uint8Array(r.buffer,r.byteOffset+K,f),h.type=0,p._uploadCompressedDataToTextureDirectly(h,Z,c,W,A,L,z)}K+=i?c*W*(i/8):f,c*=.5,W*=.5,c=Math.max(1,c),W=Math.max(1,W)}if(void 0!==M)break}I&&I.length>0?m.sphericalPolynomial=z.c.ConvertCubeMapToSphericalPolynomial({size:E[4],right:I[0],left:I[1],up:I[2],down:I[3],front:I[4],back:I[5],format:5,type:1,gammaSpace:!1}):m.sphericalPolynomial=void 0}}k.StoreLODInAlphaChannel=!1}}]);