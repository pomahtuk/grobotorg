!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);n(0);var i={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(i.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],r=ArrayBuffer.isView||function(e){return e&&o.indexOf(Object.prototype.toString.call(e))>-1};function a(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function s(e){return"string"!=typeof e&&(e=String(e)),e}function l(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return i.iterable&&(t[Symbol.iterator]=function(){return t}),t}function c(e){this.map={},e instanceof c?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function d(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function u(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function h(e){var t=new FileReader,n=u(t);return t.readAsArrayBuffer(e),n}function f(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(e){this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:i.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:i.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:i.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():i.arrayBuffer&&i.blob&&function(e){return e&&DataView.prototype.isPrototypeOf(e)}(e)?(this._bodyArrayBuffer=f(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):i.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||r(e))?this._bodyArrayBuffer=f(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):i.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i.blob&&(this.blob=function(){var e=d(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?d(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var e=d(this);if(e)return e;if(this._bodyBlob)return function(e){var t=new FileReader,n=u(t);return t.readAsText(e),n}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),i=0;i<t.length;i++)n[i]=String.fromCharCode(t[i]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}c.prototype.append=function(e,t){e=a(e),t=s(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},c.prototype.delete=function(e){delete this.map[a(e)]},c.prototype.get=function(e){return e=a(e),this.has(e)?this.map[e]:null},c.prototype.has=function(e){return this.map.hasOwnProperty(a(e))},c.prototype.set=function(e,t){this.map[a(e)]=s(t)},c.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},c.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),l(e)},c.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),l(e)},c.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),l(e)},i.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var p=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function g(e,t){var n=(t=t||{}).body;if(e instanceof g){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new c(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new c(t.headers)),this.method=function(e){var t=e.toUpperCase();return p.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function y(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),i=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(i),decodeURIComponent(o))}}),t}function v(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new c(t.headers),this.url=t.url||"",this._initBody(e)}g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},m.call(g.prototype),m.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},v.error=function(){var e=new v(null,{status:0,statusText:""});return e.type="error",e};var b=[301,302,303,307,308];v.redirect=function(e,t){if(-1===b.indexOf(t))throw new RangeError("Invalid status code");return new v(null,{status:t,headers:{location:e}})};var w=self.DOMException;try{new w}catch(e){(w=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack}).prototype=Object.create(Error.prototype),w.prototype.constructor=w}function E(e,t){return new Promise(function(n,o){var r=new g(e,t);if(r.signal&&r.signal.aborted)return o(new w("Aborted","AbortError"));var a=new XMLHttpRequest;function s(){a.abort()}a.onload=function(){var e={status:a.status,statusText:a.statusText,headers:function(e){var t=new c;return e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var n=e.split(":"),i=n.shift().trim();if(i){var o=n.join(":").trim();t.append(i,o)}}),t}(a.getAllResponseHeaders()||"")};e.url="responseURL"in a?a.responseURL:e.headers.get("X-Request-URL");var t="response"in a?a.response:a.responseText;n(new v(t,e))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.onabort=function(){o(new w("Aborted","AbortError"))},a.open(r.method,r.url,!0),"include"===r.credentials?a.withCredentials=!0:"omit"===r.credentials&&(a.withCredentials=!1),"responseType"in a&&i.blob&&(a.responseType="blob"),r.headers.forEach(function(e,t){a.setRequestHeader(t,e)}),r.signal&&(r.signal.addEventListener("abort",s),a.onreadystatechange=function(){4===a.readyState&&r.signal.removeEventListener("abort",s)}),a.send(void 0===r._bodyInit?null:r._bodyInit)})}E.polyfill=!0,self.fetch||(self.fetch=E,self.Headers=c,self.Request=g,self.Response=v);n(2),n(4),n(6),n(8);var x={imagesElements:document.querySelectorAll(".memorial--image img"),textElements:document.querySelectorAll(".memorial--text"),videoElement:document.querySelector("video.user-video"),shareButtonElement:document.querySelector(".memorial--share-it"),simpleMemorialElement:document.querySelector(".memorial.simple"),simpleMemorialText:document.querySelector(".memorial.simple .memorial--text"),simpleMemorialImage:document.querySelector(".memorial.simple .memorial--image"),closeSocialModal:function(){document.querySelector("#modal-source .modal__overlay").click()},closShareModal:function(){document.querySelector("#modal-select .modal__overlay").click()},showShareButton:function(){document.querySelector(".memorial--share-it").classList.remove("hidden")}},M=function(e){for(var t=e.data,n=0;n<t.length;n+=4){var i=.34*t[n]+.5*t[n+1]+.16*t[n+2];t[n]=i,t[n+1]=i,t[n+2]=i}return t},S=function(e){var t=new Image;fetch(e).then(function(e){return e.blob()}).then(function(e){return URL.createObjectURL(e)}).then(function(e){t.src=e}).catch(function(){}),t.addEventListener("load",function(){var e=document.createElement("canvas");e.width=t.width,e.height=t.height;var n=e.getContext("2d");n.drawImage(t,0,0);var i=n.getImageData(0,0,t.width,t.height);M(i),n.putImageData(i,0,0),Array.prototype.forEach.call(x.imagesElements,function(t){t.src=e.toDataURL()}),x.showShareButton()},!1)},k={shareOptions:{},cb:function(){}},T=function(){return FB.getLoginStatus(function(e){var t=e.authResponse.userID;FB.api("/".concat(t,"/picture"),"GET",{redirect:"false",height:"300",type:"square"},function(e){var t=e.data;S(t.url)})})};document.getElementById("fb_auth").addEventListener("click",function(){FB.login(T,{scope:"public_profile"}),x.closeSocialModal()}),document.getElementById("fb_share").addEventListener("click",function(){FB.ui({method:"share_open_graph",action_type:"og.likes",action_properties:JSON.stringify({object:k.shareOptions})},k.cb),x.closeShareModal()});var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};Object.keys(e).forEach(function(t){k.shareOptions["og:".concat(t)]=e[t]}),k.cb=t},A={shareOptions:{},cb:function(){}};document.getElementById("vk_auth").addEventListener("click",function(){VK.Auth.login(function(e){var t=e.session.user;VK.Api.call("users.get",{user_ids:t.id,fields:"photo_400_orig",v:"5.85"},function(e){var t=e.response;t&&S(t[0].photo_400_orig)}),x.closeSocialModal()},8192)});var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};A.cb=t,document.querySelector(".button-holder.vk-holder").innerHTML=VK.Share.button(e,{type:"custom",text:'\n  <button class="pure-button pure-button-primary button-xlarge" id="vk_share">\n      <svg viewBox="0 0 1032.346923828125 585.4198608398438" id="si-metro-vk" width="28px" fill="#fff">\n          <title>icon vk</title>\n          <path d="M916.838 410.367s82.79 81.766 103.27 119.603c.563.819.82 1.434.922 1.792 8.346 13.978 10.394 24.934 6.298 33.024-6.912 13.363-30.31 20.07-38.246 20.634H842.753c-10.189 0-31.386-2.662-57.19-20.48-19.712-13.773-39.322-36.454-58.317-58.624-28.365-32.922-52.89-61.491-77.722-61.491-3.174 0-6.246.512-9.216 1.536-18.79 5.939-42.65 32.717-42.65 104.038 0 22.323-17.613 35.021-29.952 35.021h-67.02c-22.836 0-141.723-7.987-247.143-119.142C124.364 330.188 8.345 57.19 7.219 54.784 0 37.12 15.155 27.494 31.539 27.494h147.764c19.814 0 26.266 11.981 30.771 22.733 5.222 12.339 24.576 61.696 56.32 117.146 51.405 90.214 82.995 126.925 108.237 126.925 4.762 0 9.267-1.178 13.517-3.584 32.973-18.125 26.83-135.885 25.293-160.154 0-4.71-.05-52.582-16.947-75.725-12.083-16.589-32.666-23.04-45.107-25.395 3.328-4.813 10.394-12.186 19.456-16.538C393.423 1.638 434.229 0 474.728 0h22.477c43.93.614 55.296 3.43 71.27 7.475 32.154 7.68 32.768 28.518 29.952 99.482-.819 20.275-1.69 43.11-1.69 69.99 0 5.734-.256 12.134-.256 18.637-.973 36.403-2.253 77.414 23.45 94.259a20.952 20.952 0 0 0 11.11 3.174c8.91 0 35.584 0 107.93-124.16 31.744-54.835 56.32-119.501 58.01-124.365 1.434-2.714 5.734-10.342 10.957-13.414 3.994-2.458 9.318-2.867 12.083-2.867h173.824c18.944 0 31.795 2.867 34.304 10.035 4.198 11.622-.819 47.104-80.179 154.419a6678.045 6678.045 0 0 1-35.379 46.848c-71.936 94.413-71.936 99.174 4.25 170.854z" />\n      </svg>\n  </button>\n'})};void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise(function(n,i){t.call(navigator,e,n,i)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))});function L(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}document.getElementById("use_camera").addEventListener("click",function(){navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user"}}).then(function(e){"srcObject"in x.videoElement?x.videoElement.srcObject=e:x.videoElement.src=window.URL.createObjectURL(e),x.videoElement.setAttribute("playsinline",!0),x.videoElement.onloadedmetadata=function(){x.videoElement.play()},Array.prototype.forEach.call(x.imagesElements,function(e){e.style.height="".concat(e.height,"px"),e.style.width="".concat(e.width,"px")}),x.videoElement.addEventListener("play",function(){setInterval(function(){var e=x.videoElement,t=document.createElement("canvas");t.width=e.videoWidth,t.height=e.videoHeight;var n=t.getContext("2d"),i=t.width>t.height?(t.width-t.height)/2:0,o=t.height>t.width?(t.height-t.width)/2:0;n.drawImage(e,0,0,e.videoWidth,e.videoHeight);var r=n.getImageData(i,o,e.videoWidth,e.videoHeight);M(r),n.putImageData(r,i,o),Array.prototype.forEach.call(x.imagesElements,function(e){e.src=t.toDataURL()})},33)},!1),x.showShareButton()}).catch(function(){}).finally(x.closeSocialModal)});var P={width:598,height:916},C=function(){var e=P,t=window,n=t.innerWidth,i=t.innerHeight,o=e.width,r=e.height,a=r/o;n<Math.ceil(1.1*o)&&(o=Math.ceil(n/1.1),r=Math.ceil(o*a)),i<Math.ceil(1.1*r)&&(r=Math.ceil(i/1.1),o=Math.ceil(r/a)),x.simpleMemorialElement.style.width="".concat(o,"px"),x.simpleMemorialElement.style.height="".concat(r,"px"),x.simpleMemorialText.style.fontSize="".concat(Math.ceil(.04*o),"px"),x.simpleMemorialText.style.lineHeight="".concat(Math.ceil(.07*o),"px"),x.shareButtonElement.style.fontSize="".concat(Math.ceil(.04*o),"px"),x.shareButtonElement.style.lineHeight="".concat(Math.ceil(.07*o),"px")};(new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.callbacks=[],this.running=!1,this.resize=this.resize.bind(this),this.runCallbacks=this.runCallbacks.bind(this),window.addEventListener("resize",this.resize)}return function(e,t,n){t&&L(e.prototype,t),n&&L(e,n)}(e,[{key:"resize",value:function(){this.running||(this.running=!0,window.requestAnimationFrame?window.requestAnimationFrame(this.runCallbacks):setTimeout(this.runCallbacks,66))}},{key:"runCallbacks",value:function(){this.callbacks.forEach(function(e){return e()}),this.running=!1}},{key:"addCallback",value:function(e){e&&"function"==typeof e&&this.callbacks.push(e)}}]),e}())).addCallback(C),C();var I=["Ну все, поработали, пора и отдохнуть","Жил, умер, да и не все ли нам равно?","Тут покоится великий человек... <br/> А может и не тут.","Свет в конце тоннеля говорили они! <br/> Жестко, темно и тесно.","Казалось бы, что могло пойти не так? <br/> Вся жизнь."],O=Math.floor(Math.random()*I.length),j=function(){var e=I[O%I.length];x.textElements.forEach(function(t){t.innerHTML=e}),O+=1};x.textElements.forEach(function(e){e.addEventListener("click",j)}),j();var D=function(e){for(var t=atob(e.split(",")[1]),n=[],i=0;i<t.length;i+=1)n.push(t.charCodeAt(i));return new Blob([new Uint8Array(n)],{type:"image/png"})},U="https://api.cloudinary.com/v1_1/".concat("grobotorg-org","/upload"),F=function(e,t){var n=new FormData;return n.append("upload_preset","grobotorg-fe"),n.append("tags","user_upload,share"),n.append("file",D(e)),fetch(U,{method:"POST",cache:"no-cache",redirect:"follow",body:n}).then(function(e){return e.json()}).then(t)},R=function(e){return parseFloat(e.replace("px",""),10)},q=function(e){var t=e.getContext("2d"),n=window.devicePixelRatio||1,i=t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1,o=n/i;if(n!==i){var r=e.width,a=e.height;e.width=r*o,e.height=a*o,e.style.width="".concat(r,"px"),e.style.height="".concat(a,"px"),t.scale(o,o)}return t},H=function(e){return new Promise(function(t){var n=e.getContext("2d"),i=x.simpleMemorialImage.querySelector("img"),o=document.createElement("canvas"),r=o.getContext("2d");o.width=i.width,o.height=i.height;var a=i.width/2;r.drawImage(i,0,0,i.width,i.height),r.fillStyle="#fff",r.globalCompositeOperation="destination-in",r.beginPath(),r.arc(a,a,a,0,2*Math.PI,!0),r.closePath(),r.fill();var s=x.simpleMemorialImage.currentStyle||window.getComputedStyle(x.simpleMemorialImage,!1);n.drawImage(o,R(s.left)-x.simpleMemorialImage.clientWidth/2,R(s.top),x.simpleMemorialImage.clientWidth,x.simpleMemorialImage.clientHeight),t(e)})},W=function(e){return new Promise(function(t){var n=e.getContext("2d"),i=document.createElement("canvas");i.width=x.simpleMemorialText.clientWidth,i.height=x.simpleMemorialText.clientHeight;var o=q(i),r=x.simpleMemorialText.currentStyle||window.getComputedStyle(x.simpleMemorialText,!1);o.fillStyle="white",o.textAlign="center",o.font="".concat(r.fontSize," ").concat(r.fontFamily),function(e,t,n,i,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(r<=0)e.fillText(t,n,i);else{for(var a=t.split(" "),s=0,l=1;a.length>0&&l<=a.length;){var c=a.slice(0,l).join(" "),d=c.includes("\n")&&"\n"!==c,u=c.endsWith("\n");if(e.measureText(c).width>r||d){1===l&&(l=2),e.fillText(a.slice(0,l-1).join(" "),n,i+o*s),s+=1;var h=u?l:l-1;a=a.splice(h),l=1}else l+=1}l>0&&e.fillText(a.join(" "),n,i+o*s)}}(o,x.simpleMemorialText.innerHTML.replace("<br>","\n"),x.simpleMemorialText.clientWidth/2,R(r.fontSize),R(r.lineHeight),x.simpleMemorialText.clientWidth),n.drawImage(i,R(r.left)-x.simpleMemorialText.clientWidth/2,R(r.top),x.simpleMemorialText.clientWidth,x.simpleMemorialText.clientHeight),t(e)})},z=function(e){return new Promise(function(t){var n=document.createElement("canvas");n.width=e.width,n.height=e.height,n.getContext("2d").drawImage(e,0,0),e.width=Math.ceil(e.height*(16/9)),e.height=n.height;var i=(e.width-n.width)/2;e.getContext("2d").drawImage(n,i,0),t(e)})},K=function(){return new Promise(function(e,t){var n=document.createElement("canvas");n.width=x.simpleMemorialElement.clientWidth,n.height=x.simpleMemorialElement.clientHeight,q(n),function(e){return new Promise(function(t,n){var i=e.getContext("2d"),o=new Image;o.width=x.simpleMemorialElement.clientWidth,o.height=x.simpleMemorialElement.clientHeight;var r=x.simpleMemorialElement.currentStyle||window.getComputedStyle(x.simpleMemorialElement,!1);o.src=r.backgroundImage.slice(4,-1).replace(/"/g,""),o.onload=function(){i.drawImage(o,0,0,o.width,o.height),t(e)},o.onabort=function(e){n(e)}})}(n).then(H).then(W).then(z).then(function(){e(n)}).catch(t)})};document.getElementById("screenshot").addEventListener("click",function(){var e=document.querySelector("#modal-select"),t=e.querySelector(".share-loader"),n=e.querySelector(".share-loaded");n.classList.add("hidden"),t.classList.remove("hidden"),x.MicroModal.show("modal-select");var i=Date.now();K().then(function(e){F(e.toDataURL(),function(e){var o=Date.now()-i;setTimeout(function(){n.classList.remove("hidden"),t.classList.add("hidden")},o<3e3?3e3-o:0);var r={title:"Примерь памятник",image:e.secure_url,url:"https://pomahtuk.github.io/grobotorg/"};_(r),B(r)})})});var N=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},G=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),V=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},J=function(){var e=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],t=function(){function t(e){var n=e.targetModal,i=e.triggers,o=void 0===i?[]:i,r=e.onShow,a=void 0===r?function(){}:r,s=e.onClose,l=void 0===s?function(){}:s,c=e.openTrigger,d=void 0===c?"data-micromodal-trigger":c,u=e.closeTrigger,h=void 0===u?"data-micromodal-close":u,f=e.disableScroll,m=void 0!==f&&f,p=e.disableFocus,g=void 0!==p&&p,y=e.awaitCloseAnimation,v=void 0!==y&&y,b=e.debugMode,w=void 0!==b&&b;N(this,t),this.modal=document.getElementById(n),this.config={debugMode:w,disableScroll:m,openTrigger:d,closeTrigger:h,onShow:a,onClose:l,awaitCloseAnimation:v,disableFocus:g},o.length>0&&this.registerTriggers.apply(this,V(o)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}return G(t,[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];n.forEach(function(t){t.addEventListener("click",function(){return e.showModal()})})}},{key:"showModal",value:function(){this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add("is-open"),this.setFocusToFirstNode(),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.onShow(this.modal)}},{key:"closeModal",value:function(){var e=this.modal;this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement.focus(),this.config.onClose(this.modal),this.config.awaitCloseAnimation?this.modal.addEventListener("animationend",function t(){e.classList.remove("is-open"),e.removeEventListener("animationend",t,!1)},!1):e.classList.remove("is-open")}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:"initial",height:"initial"});break;case"disable":Object.assign(t.style,{overflow:"hidden",height:"100vh"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){e.target.hasAttribute(this.config.closeTrigger)&&(this.closeModal(),e.preventDefault())}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.maintainFocus(e)}},{key:"getFocusableNodes",value:function(){var t=this.modal.querySelectorAll(e);return Object.keys(t).map(function(e){return t[e]})}},{key:"setFocusToFirstNode",value:function(){if(!this.config.disableFocus){var e=this.getFocusableNodes();e.length&&e[0].focus()}}},{key:"maintainFocus",value:function(e){var t=this.getFocusableNodes();if(this.modal.contains(document.activeElement)){var n=t.indexOf(document.activeElement);e.shiftKey&&0===n&&(t[t.length-1].focus(),e.preventDefault()),e.shiftKey||n!==t.length-1||(t[0].focus(),e.preventDefault())}else t[0].focus()}}]),t}(),n=null,i=function(e){if(!document.getElementById(e))return console.warn("MicroModal v0.3.1: ❗Seems like you have missed %c'"+e+"'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'+e+'"></div>'),!1},o=function(e,t){if(function(e){if(e.length<=0)console.warn("MicroModal v0.3.1: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>')}(e),!t)return!0;for(var n in t)i(n);return!0};return{init:function(e){var n=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),i=[].concat(V(document.querySelectorAll("["+n.openTrigger+"]"))),r=function(e,t){var n=[];return e.forEach(function(e){var i=e.attributes[t].value;void 0===n[i]&&(n[i]=[]),n[i].push(e)}),n}(i,n.openTrigger);if(!0!==n.debugMode||!1!==o(i,r))for(var a in r){var s=r[a];n.targetModal=a,n.triggers=[].concat(V(s)),new t(n)}},show:function(e,o){var r=o||{};r.targetModal=e,!0===r.debugMode&&!1===i(e)||(n=new t(r)).showModal()},close:function(){n.closeModal()}}}();x.MicroModal=J,J.init()}]);