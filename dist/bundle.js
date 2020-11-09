(()=>{"use strict";var t={p:"./"},e={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perTouch:!1,touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",throttle:10,direction:"ltr",peek:0,breakpoints:{},classes:{direction:{ltr:"glide--ltr",rtl:"glide--rtl"},slider:"glide--slider",carousel:"glide--carousel",swipeable:"glide--swipeable",dragging:"glide--dragging",cloneSlide:"glide__slide--clone",activeNav:"glide__bullet--active",activeSlide:"glide__slide--active",disabledArrow:"glide__arrow--disabled"}};function n(t){console.error("[Glide warn]: "+t)}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a=function t(e,n,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,i)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(i):void 0},u=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e};function c(t){return parseInt(t)}function l(t){return"string"==typeof t}function f(t){var e=void 0===t?"undefined":i(t);return"function"===e||"object"===e&&!!t}function d(t){return"function"==typeof t}function h(t){return void 0===t}function v(t){return t.constructor===Array}function p(t,e,i){var r={};for(var o in e)d(e[o])?r[o]=e[o](t,r,i):n("Extension must be a function");for(var s in r)d(r[s].mount)&&r[s].mount();return r}function m(t,e,n){Object.defineProperty(t,e,n)}function g(t,e){var n=s({},t,e);return e.hasOwnProperty("classes")&&(n.classes=s({},t.classes,e.classes),e.classes.hasOwnProperty("direction")&&(n.classes.direction=s({},t.classes.direction,e.classes.direction))),e.hasOwnProperty("breakpoints")&&(n.breakpoints=s({},t.breakpoints,e.breakpoints)),n}var y=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,t),this.events=e,this.hop=e.hasOwnProperty}return o(t,[{key:"on",value:function(t,e){if(v(t))for(var n=0;n<t.length;n++)this.on(t[n],e);this.hop.call(this.events,t)||(this.events[t]=[]);var i=this.events[t].push(e)-1;return{remove:function(){delete this.events[t][i]}}}},{key:"emit",value:function(t,e){if(v(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);this.hop.call(this.events,t)&&this.events[t].forEach((function(t){t(e||{})}))}}]),t}(),b=function(){function t(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,t),this._c={},this._t=[],this._e=new y,this.disabled=!1,this.selector=n,this.settings=g(e,i),this.index=this.settings.startAt}return o(t,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),f(t)?this._c=p(this,t,this._e):n("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return v(t)?this._t=t:n("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.settings=g(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,e){return this._e.on(t,e),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){f(t)?this._o=t:n("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(t){this._i=c(t)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),t}();function w(){return(new Date).getTime()}function _(t,e,n){var i=void 0,r=void 0,o=void 0,s=void 0,a=0;n||(n={});var u=function(){a=!1===n.leading?0:w(),i=null,s=t.apply(r,o),i||(r=o=null)},c=function(){var c=w();a||!1!==n.leading||(a=c);var l=e-(c-a);return r=this,o=arguments,l<=0||l>e?(i&&(clearTimeout(i),i=null),a=c,s=t.apply(r,o),i||(r=o=null)):i||!1===n.trailing||(i=setTimeout(u,l)),s};return c.cancel=function(){clearTimeout(i),a=0,i=r=o=null},c}var k={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function S(t){if(t&&t.parentNode){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}return[]}function H(t){return!!(t&&t instanceof window.HTMLElement)}var T='[data-glide-el="track"]';var x=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,t),this.listeners=e}return o(t,[{key:"on",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];l(t)&&(t=[t]);for(var r=0;r<t.length;r++)this.listeners[t[r]]=n,e.addEventListener(t[r],this.listeners[t[r]],i)}},{key:"off",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];l(t)&&(t=[t]);for(var i=0;i<t.length;i++)e.removeEventListener(t[i],this.listeners[t[i]],n)}},{key:"destroy",value:function(){delete this.listeners}}]),t}();var O=["ltr","rtl"],L={">":"<","<":">","=":"="};function A(t,e){return{modify:function(t){return e.Direction.is("rtl")?-t:t}}}function M(t,e){return{modify:function(n){return n+e.Gaps.value*t.index}}}function C(t,e){return{modify:function(t){return t+e.Clones.grow/2}}}function P(t,e){return{modify:function(n){if(t.settings.focusAt>=0){var i=e.Peek.value;return f(i)?n-i.before:n-i}return n}}}function j(t,e){return{modify:function(n){var i=e.Gaps.value,r=e.Sizes.width,o=t.settings.focusAt,s=e.Sizes.slideWidth;return"center"===o?n-(r/2-s/2):n-s*o-i*o}}}var z=!1;try{var E=Object.defineProperty({},"passive",{get:function(){z=!0}});window.addEventListener("testPassive",null,E),window.removeEventListener("testPassive",null,E)}catch(t){}var D=z,q=["touchstart","mousedown"],R=["touchmove","mousemove"],W=["touchend","touchcancel","mouseup","mouseleave"],N=["mousedown","mousemove","mouseup","mouseleave"];function Y(t){return f(t)?(e=t,Object.keys(e).sort().reduce((function(t,n){return t[n]=e[n],t[n],t}),{})):(n("Breakpoints option must be an object"),{});var e}var B={Html:function(t,e){var i={mount:function(){this.root=t.selector,this.track=this.root.querySelector(T),this.slides=Array.prototype.slice.call(this.wrapper.children).filter((function(e){return!e.classList.contains(t.settings.classes.cloneSlide)}))}};return m(i,"root",{get:function(){return i._r},set:function(t){l(t)&&(t=document.querySelector(t)),H(t)?i._r=t:n("Root element must be a existing Html node")}}),m(i,"track",{get:function(){return i._t},set:function(t){H(t)?i._t=t:n("Could not find track element. Please use "+T+" attribute.")}}),m(i,"wrapper",{get:function(){return i.track.children[0]}}),i},Translate:function(t,e,i){var r={set:function(i){var r=function(t,e,i){var r=[M,C,P,j].concat(t._t,[A]);return{mutate:function(o){for(var s=0;s<r.length;s++){var a=r[s];d(a)&&d(a().modify)?o=a(t,e,i).modify(o):n("Transformer should be a function that returns an object with `modify()` method")}return o}}}(t,e).mutate(i);e.Html.wrapper.style.transform="translate3d("+-1*r+"px, 0px, 0px)"},remove:function(){e.Html.wrapper.style.transform=""}};return i.on("move",(function(n){var o=e.Gaps.value,s=e.Sizes.length,a=e.Sizes.slideWidth;return t.isType("carousel")&&e.Run.isOffset("<")?(e.Transition.after((function(){i.emit("translate.jump"),r.set(a*(s-1))})),r.set(-a-o*s)):t.isType("carousel")&&e.Run.isOffset(">")?(e.Transition.after((function(){i.emit("translate.jump"),r.set(0)})),r.set(a*s+o*s)):r.set(n.movement)})),i.on("destroy",(function(){r.remove()})),r},Transition:function(t,e,n){var i=!1,r={compose:function(e){var n=t.settings;return i?e+" 0ms "+n.animationTimingFunc:e+" "+this.duration+"ms "+n.animationTimingFunc},set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(t)},remove:function(){e.Html.wrapper.style.transition=""},after:function(t){setTimeout((function(){t()}),this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return m(r,"duration",{get:function(){var n=t.settings;return t.isType("slider")&&e.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",(function(){r.set()})),n.on(["build.before","resize","translate.jump"],(function(){r.disable()})),n.on("run",(function(){r.enable()})),n.on("destroy",(function(){r.remove()})),r},Direction:function(t,e,i){var r={mount:function(){this.value=t.settings.direction},resolve:function(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(L[e]):t},is:function(t){return this.value===t},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return m(r,"value",{get:function(){return r._v},set:function(t){O.indexOf(t)>-1?r._v=t:n("Direction value must be `ltr` or `rtl`")}}),i.on(["destroy","update"],(function(){r.removeClass()})),i.on("update",(function(){r.mount()})),i.on(["build.before","update"],(function(){r.addClass()})),r},Peek:function(t,e,n){var i={mount:function(){this.value=t.settings.peek}};return m(i,"value",{get:function(){return i._v},set:function(t){f(t)?(t.before=c(t.before),t.after=c(t.after)):t=c(t),i._v=t}}),m(i,"reductor",{get:function(){var e=i.value,n=t.settings.perView;return f(e)?e.before/n+e.after/n:2*e/n}}),n.on(["resize","update"],(function(){i.mount()})),i},Sizes:function(t,e,n){var i={setupSlides:function(){for(var t=this.slideWidth+"px",n=e.Html.slides,i=0;i<n.length;i++)n[i].style.width=t},setupWrapper:function(t){e.Html.wrapper.style.width=this.wrapperSize+"px"},remove:function(){for(var t=e.Html.slides,n=0;n<t.length;n++)t[n].style.width="";e.Html.wrapper.style.width=""}};return m(i,"length",{get:function(){return e.Html.slides.length}}),m(i,"width",{get:function(){return e.Html.root.offsetWidth}}),m(i,"wrapperSize",{get:function(){return i.slideWidth*i.length+e.Gaps.grow+e.Clones.grow}}),m(i,"slideWidth",{get:function(){return i.width/t.settings.perView-e.Peek.reductor-e.Gaps.reductor}}),n.on(["build.before","resize","update"],(function(){i.setupSlides(),i.setupWrapper()})),n.on("destroy",(function(){i.remove()})),i},Gaps:function(t,e,n){var i={apply:function(t){for(var n=0,i=t.length;n<i;n++){var r=t[n].style,o=e.Direction.value;r[k[o][0]]=0!==n?this.value/2+"px":"",n!==t.length-1?r[k[o][1]]=this.value/2+"px":r[k[o][1]]=""}},remove:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style;i.marginLeft="",i.marginRight=""}}};return m(i,"value",{get:function(){return c(t.settings.gap)}}),m(i,"grow",{get:function(){return i.value*(e.Sizes.length-1)}}),m(i,"reductor",{get:function(){var e=t.settings.perView;return i.value*(e-1)/e}}),n.on(["build.after","update"],_((function(){i.apply(e.Html.wrapper.children)}),30)),n.on("destroy",(function(){i.remove(e.Html.wrapper.children)})),i},Move:function(t,e,n){var i={mount:function(){this._o=0},make:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=i,n.emit("move",{movement:this.value}),e.Transition.after((function(){n.emit("move.after",{movement:t.value})}))}};return m(i,"offset",{get:function(){return i._o},set:function(t){i._o=h(t)?0:c(t)}}),m(i,"translate",{get:function(){return e.Sizes.slideWidth*t.index}}),m(i,"value",{get:function(){var t=this.offset,n=this.translate;return e.Direction.is("rtl")?n+t:n-t}}),n.on(["build.before","run"],(function(){i.make()})),i},Clones:function(t,e,n){var i={mount:function(){this.items=[],t.isType("carousel")&&(this.items=this.collect())},collect:function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=e.Html.slides,r=t.settings,o=r.perView,s=r.classes,a=+!!t.settings.peek,u=o+a,c=i.slice(0,u),l=i.slice(-u),f=0;f<Math.max(1,Math.floor(o/i.length));f++){for(var d=0;d<c.length;d++){var h=c[d].cloneNode(!0);h.classList.add(s.cloneSlide),n.push(h)}for(var v=0;v<l.length;v++){var p=l[v].cloneNode(!0);p.classList.add(s.cloneSlide),n.unshift(p)}}return n},append:function(){for(var t=this.items,n=e.Html,i=n.wrapper,r=n.slides,o=Math.floor(t.length/2),s=t.slice(0,o).reverse(),a=t.slice(o,t.length),u=e.Sizes.slideWidth+"px",c=0;c<a.length;c++)i.appendChild(a[c]);for(var l=0;l<s.length;l++)i.insertBefore(s[l],r[0]);for(var f=0;f<t.length;f++)t[f].style.width=u},remove:function(){for(var t=this.items,n=0;n<t.length;n++)e.Html.wrapper.removeChild(t[n])}};return m(i,"grow",{get:function(){return(e.Sizes.slideWidth+e.Gaps.value)*i.items.length}}),n.on("update",(function(){i.remove(),i.mount(),i.append()})),n.on("build.before",(function(){t.isType("carousel")&&i.append()})),n.on("destroy",(function(){i.remove()})),i},Resize:function(t,e,n){var i=new x,r={mount:function(){this.bind()},bind:function(){i.on("resize",window,_((function(){n.emit("resize")}),t.settings.throttle))},unbind:function(){i.off("resize",window)}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r},Build:function(t,e,n){var i={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){e.Html.root.classList.add(t.settings.classes[t.settings.type])},activeClass:function(){var n=t.settings.classes,i=e.Html.slides[t.index];i&&(i.classList.add(n.activeSlide),S(i).forEach((function(t){t.classList.remove(n.activeSlide)})))},removeClasses:function(){var n=t.settings.classes;e.Html.root.classList.remove(n[t.settings.type]),e.Html.slides.forEach((function(t){t.classList.remove(n.activeSlide)}))}};return n.on(["destroy","update"],(function(){i.removeClasses()})),n.on(["resize","update"],(function(){i.mount()})),n.on("move.after",(function(){i.activeClass()})),i},Run:function(t,e,i){var r={mount:function(){this._o=!1},make:function(n){var r=this;t.disabled||(t.disable(),this.move=n,i.emit("run.before",this.move),this.calculate(),i.emit("run",this.move),e.Transition.after((function(){r.isStart()&&i.emit("run.start",r.move),r.isEnd()&&i.emit("run.end",r.move),(r.isOffset("<")||r.isOffset(">"))&&(r._o=!1,i.emit("run.offset",r.move)),i.emit("run.after",r.move),t.enable()})))},calculate:function(){var e=this.move,i=this.length,r=e.steps,o=e.direction,s="number"==typeof c(r)&&0!==c(r);switch(o){case">":">"===r?t.index=i:this.isEnd()?t.isType("slider")&&!t.settings.rewind||(this._o=!0,t.index=0):s?t.index+=Math.min(i-t.index,-c(r)):t.index++;break;case"<":"<"===r?t.index=0:this.isStart()?t.isType("slider")&&!t.settings.rewind||(this._o=!0,t.index=i):s?t.index-=Math.min(t.index,c(r)):t.index--;break;case"=":t.index=r;break;default:n("Invalid direction pattern ["+o+r+"] has been used")}},isStart:function(){return 0===t.index},isEnd:function(){return t.index===this.length},isOffset:function(t){return this._o&&this.move.direction===t}};return m(r,"move",{get:function(){return this._m},set:function(t){var e=t.substr(1);this._m={direction:t.substr(0,1),steps:e?c(e)?c(e):e:0}}}),m(r,"length",{get:function(){var n=t.settings,i=e.Html.slides.length;return t.isType("slider")&&"center"!==n.focusAt&&n.bound?i-1-(c(n.perView)-1)+c(n.focusAt):i-1}}),m(r,"offset",{get:function(){return this._o}}),r},Swipe:function(t,e,n){var i=new x,r=0,o=0,s=0,a=!1,u=!!D&&{passive:!0},l={mount:function(){this.bindSwipeStart()},start:function(e){if(!a&&!t.disabled){this.disable();var i=this.touches(e);r=null,o=c(i.pageX),s=c(i.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),n.emit("swipe.start")}},move:function(i){if(!t.disabled){var a=t.settings,u=a.touchAngle,l=a.touchRatio,f=a.classes,d=this.touches(i),h=c(d.pageX)-o,v=c(d.pageY)-s,p=Math.abs(h<<2),m=Math.abs(v<<2),g=Math.sqrt(p+m),y=Math.sqrt(m);if(!(180*(r=Math.asin(y/g))/Math.PI<u))return!1;i.stopPropagation(),e.Move.make(h*parseFloat(l)),e.Html.root.classList.add(f.dragging),n.emit("swipe.move")}},end:function(i){if(!t.disabled){var s=t.settings,a=this.touches(i),u=this.threshold(i),l=a.pageX-o,f=180*r/Math.PI,d=Math.round(l/e.Sizes.slideWidth);this.enable(),l>u&&f<s.touchAngle?(s.perTouch&&(d=Math.min(d,c(s.perTouch))),e.Direction.is("rtl")&&(d=-d),e.Run.make(e.Direction.resolve("<"+d))):l<-u&&f<s.touchAngle?(s.perTouch&&(d=Math.max(d,-c(s.perTouch))),e.Direction.is("rtl")&&(d=-d),e.Run.make(e.Direction.resolve(">"+d))):e.Move.make(),e.Html.root.classList.remove(s.classes.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),n.emit("swipe.end")}},bindSwipeStart:function(){var n=this,r=t.settings;r.swipeThreshold&&i.on(q[0],e.Html.wrapper,(function(t){n.start(t)}),u),r.dragThreshold&&i.on(q[1],e.Html.wrapper,(function(t){n.start(t)}),u)},unbindSwipeStart:function(){i.off(q[0],e.Html.wrapper,u),i.off(q[1],e.Html.wrapper,u)},bindSwipeMove:function(){var n=this;i.on(R,e.Html.wrapper,_((function(t){n.move(t)}),t.settings.throttle),u)},unbindSwipeMove:function(){i.off(R,e.Html.wrapper,u)},bindSwipeEnd:function(){var t=this;i.on(W,e.Html.wrapper,(function(e){t.end(e)}))},unbindSwipeEnd:function(){i.off(W,e.Html.wrapper)},touches:function(t){return N.indexOf(t.type)>-1?t:t.touches[0]||t.changedTouches[0]},threshold:function(e){var n=t.settings;return N.indexOf(e.type)>-1?n.dragThreshold:n.swipeThreshold},enable:function(){return a=!1,e.Transition.enable(),this},disable:function(){return a=!0,e.Transition.disable(),this}};return n.on("build.after",(function(){e.Html.root.classList.add(t.settings.classes.swipeable)})),n.on("destroy",(function(){l.unbindSwipeStart(),l.unbindSwipeMove(),l.unbindSwipeEnd(),i.destroy()})),l},Images:function(t,e,n){var i=new x,r={mount:function(){this.bind()},bind:function(){i.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function(){i.off("dragstart",e.Html.wrapper)},dragstart:function(t){t.preventDefault()}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r},Anchors:function(t,e,n){var i=new x,r=!1,o=!1,s={mount:function(){this._a=e.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){i.on("click",e.Html.wrapper,this.click)},unbind:function(){i.off("click",e.Html.wrapper)},click:function(t){o&&(t.stopPropagation(),t.preventDefault())},detach:function(){if(o=!0,!r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!1,this.items[t].setAttribute("data-href",this.items[t].getAttribute("href")),this.items[t].removeAttribute("href");r=!0}return this},attach:function(){if(o=!1,r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!0,this.items[t].setAttribute("href",this.items[t].getAttribute("data-href"));r=!1}return this}};return m(s,"items",{get:function(){return s._a}}),n.on("swipe.move",(function(){s.detach()})),n.on("swipe.end",(function(){e.Transition.after((function(){s.attach()}))})),n.on("destroy",(function(){s.attach(),s.unbind(),i.destroy()})),s},Controls:function(t,e,n){var i=new x,r=!!D&&{passive:!0},o={mount:function(){this._n=e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=e.Html.root.querySelectorAll('[data-glide-el^="controls"]'),this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(e){var n=t.settings,i=e[t.index];i&&(i.classList.add(n.classes.activeNav),S(i).forEach((function(t){t.classList.remove(n.classes.activeNav)})))},removeClass:function(e){var n=e[t.index];n&&n.classList.remove(t.settings.classes.activeNav)},addBindings:function(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},bind:function(t){for(var e=0;e<t.length;e++)i.on("click",t[e],this.click),i.on("touchstart",t[e],this.click,r)},unbind:function(t){for(var e=0;e<t.length;e++)i.off(["click","touchstart"],t[e])},click:function(t){t.preventDefault(),e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute("data-glide-dir")))}};return m(o,"items",{get:function(){return o._c}}),n.on(["mount.after","move.after"],(function(){o.setActive()})),n.on("destroy",(function(){o.removeBindings(),o.removeActive(),i.destroy()})),o},Keyboard:function(t,e,n){var i=new x,r={mount:function(){t.settings.keyboard&&this.bind()},bind:function(){i.on("keyup",document,this.press)},unbind:function(){i.off("keyup",document)},press:function(t){39===t.keyCode&&e.Run.make(e.Direction.resolve(">")),37===t.keyCode&&e.Run.make(e.Direction.resolve("<"))}};return n.on(["destroy","update"],(function(){r.unbind()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r},Autoplay:function(t,e,n){var i=new x,r={mount:function(){this.start(),t.settings.hoverpause&&this.bind()},start:function(){var n=this;t.settings.autoplay&&h(this._i)&&(this._i=setInterval((function(){n.stop(),e.Run.make(">"),n.start()}),this.time))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var t=this;i.on("mouseover",e.Html.root,(function(){t.stop()})),i.on("mouseout",e.Html.root,(function(){t.start()}))},unbind:function(){i.off(["mouseover","mouseout"],e.Html.root)}};return m(r,"time",{get:function(){var n=e.Html.slides[t.index].getAttribute("data-glide-autoplay");return c(n||t.settings.autoplay)}}),n.on(["destroy","update"],(function(){r.unbind()})),n.on(["run.before","pause","destroy","swipe.start","update"],(function(){r.stop()})),n.on(["run.after","play","swipe.end"],(function(){r.start()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r},Breakpoints:function(t,e,n){var i=new x,r=t.settings,o=Y(r.breakpoints),a=s({},r),u={match:function(t){if(void 0!==window.matchMedia)for(var e in t)if(t.hasOwnProperty(e)&&window.matchMedia("(max-width: "+e+"px)").matches)return t[e];return a}};return s(r,u.match(o)),i.on("resize",window,_((function(){t.settings=g(r,u.match(o))}),t.settings.throttle)),n.on("update",(function(){o=Y(o),a=s({},r)})),n.on("destroy",(function(){i.off("resize",window)})),u}};const G=function(t){function e(){return r(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"mount",this).call(this,s({},B,t))}}]),e}(b),I=t.p+"2135c997bdef521d688395d6889714b7.svg",V=t.p+"257dfeffc6eb0d4bb34b2fdbd6fc3aef.svg",F=t.p+"e8a8180ff14992845908b3e5b04a9032.svg",X=t.p+"f4c9c79fbcc17c38d320c716712addc7.svg",K=document.querySelector(".video__start-circle"),J=document.querySelector(".video__start-triangle"),Q=document.querySelector(".iframe__video");Q.style.display="none",K.onclick=function(){Q.style.display="block",K.style.display="none",J.style.display="none"},J.onclick=function(){Q.style.display="block",K.style.display="none",J.style.display="none"};new G(".glide",{type:"carousel",perView:1.7}).mount();const U=document.querySelector(".glide__arrow--left"),Z=document.querySelector(".slider__left-arrow"),$=document.querySelector(".glide__arrow--right"),tt=document.querySelector(".slider__right-arrow"),et=document.querySelector(".slider__review-number");$.onclick=function(){U.disabled=!1,Z.classList.add("arrow__enabled"),Z.classList.remove("arrow__disabled");let t=Number(et.innerHTML[0]);t+=1,4===t&&($.disabled=!0,tt.classList.remove("arrow__enabled"),tt.classList.add("arrow__disabled")),et.innerHTML=t.toString()+"/"},U.onclick=function(){$.disabled=!1,tt.classList.add("arrow__enabled"),tt.classList.remove("arrow__disabled");let t=Number(et.innerHTML[0]);t-=1,1===t&&(U.disabled=!0,Z.classList.remove("arrow__enabled"),Z.classList.add("arrow__disabled")),et.innerHTML=t.toString()+"/"};const nt=document.querySelector(".header__dark");let it=!1;const rt=document.querySelector(".quote__icon"),ot=document.querySelector(".header__dark-pic");nt.onclick=function(){document.body.classList.toggle("theme-is-black"),it=!it,it?(rt.src=V,ot.src=X):(rt.src=I,ot.src=F)};const st=document.querySelector(".header");console.log(st),window.addEventListener("scroll",(function(){console.log(pageYOffset),pageYOffset>at&&pageYOffset>100?(st.style.top="-150px",at=pageYOffset):(st.style.top="0",at=pageYOffset)}));let at=pageYOffset})();