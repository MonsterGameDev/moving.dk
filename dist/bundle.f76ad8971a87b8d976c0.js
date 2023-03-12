(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&(t=i.currentScript.src),!t)){var n=i.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t={FlytteMaend:e.p+"d7a7a2575f4f7d87ca54.jpeg",UngtPar:e.p+"df5090a22acbfcfe2530.webp",Logo:e.p+"7403f82b1534842f0da0.png",FlytteKasser_1:e.p+"fcaac6893ed054bb5033.jpg",FlytteKasser_2:e.p+"734e509367c274c1705c.jpg",FlytteKasser_3:e.p+"f151d065439115d6ced1.jpg",FlytteKasser_4:e.p+"aad69d823515d6763d54.jpg",Inspection:e.p+"f9038a93c8d1da8aa9a6.jpg",Koersel_1:e.p+"ba4f0a045866f7af7b1a.jpg",Koersel_2:e.p+"9773504b009e905da3cf.jpg",Koersel_3:e.p+"d0cdada3d57090eb2386.jpg",Montage_1:e.p+"e1597bd091391d2ab014.jpg",Montage_2:e.p+"92f862c7b910bcf9ebee.jpg",Montage_3:e.p+"324bd23b853e8eea183d.webp",Opbevaring:e.p+"533848f440f1a6bbaf72.jpg"};function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function r(e,t,i){return(t=s(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,"string");if("object"!==i(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===i(t)?t:String(t)}const c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"keyframes",[{transform:"scale(0)"},{transform:"scale(1)"}]),r(this,"options",{duration:1e3,iterations:1,delay:1e3,fill:"backwards",easing:"cubic-bezier(0,.78,.61,1.86)"}),r(this,"opacityKFs",[{opacity:0},{opacity:1}]),r(this,"punshlineHeadingOptions",{delay:1500,duration:1e3,iterations:1,fill:"backwards"}),r(this,"punshlineOptions",{duration:500,fill:"backwards",iterations:1}),r(this,"puhchlineHeading","Vi tilbyder:"),r(this,"punchlineTexts",["Møbelmontage","Kørsel af flyttelæs","Flytning","Gratis besigtigelse","Gratis udlån af flyttekasser","Opbevaring"]),r(this,"logoKFs",[{transform:"scale(0) rotateX(0deg)",opacity:0},{transform:"scale(1) rotateX(720deg)"}]),r(this,"logoAnimationOptions",{delay:3500,duration:1e3,easeing:"ease-out",fill:"backwards"}),this.picrow}var i,n;return i=e,(n=[{key:"render",value:function(){var e=this,i=document.querySelector("body"),n=document.createElement("section");n.classList.add("home-section"),n.setAttribute("id","home-section");var o=document.createElement("header");o.classList.add("header");var r=document.createElement("div");r.classList.add("gray-box");var s=document.createElement("span");s.innerHTML=this.puhchlineHeading,s.classList.add("punshline-heading"),r.appendChild(s);var c=document.createElement("div");c.classList.add("punshline-container");var l=1800;this.punchlineTexts.forEach((function(t,i){var n=document.createElement("span");n.classList.add("punshline"),n.innerHTML=e.punchlineTexts[i],c.appendChild(n),l+=300;var o=a(a({},e.punshlineOptions),{},{delay:l});n.animate(e.opacityKFs,o)})),r.appendChild(c);var u=document.createElement("img");u.src=t.Logo,u.classList.add("logo"),u.animate(this.logoKFs,this.logoAnimationOptions),r.appendChild(u),o.appendChild(r),s.animate(this.opacityKFs,this.punshlineHeadingOptions),n.appendChild(o),this.picRow=document.createElement("section"),this.picRow.classList.add("pics-section");var d=document.createElement("div");d.classList.add("picrow"),d.classList.add("pic1"),d.classList.add("fromLeft"),this.picRow.appendChild(d);var m=document.createElement("div");m.classList.add("picrow"),m.classList.add("pic2"),m.classList.add("fadeTextboxIn"),m.innerHTML='\n        <div class="pic2-header">Tillid, Tryghed og Professionalisme</div>\n        <div class="pic2-text">Tre vigtige ord når du lægger dine ejendele i hænderne på en fremmed.<br /> Vi passer på dine ting som var de vore egne, håndterer dem professionelt og sikkert! <br /><br />Hele vejen fra deres gamle til deres nye hjem</div> \n        ',this.picRow.appendChild(m);var p=document.createElement("div");p.classList.add("picrow"),p.classList.add("pic3"),p.classList.add("fromRight"),this.picRow.appendChild(p),n.appendChild(this.picRow),i.appendChild(n),r.animate(this.keyframes,this.options),this.picRowIntersection(),this.zoomBackgroundOnScroll()}},{key:"picRowIntersection",value:function(){new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(document.querySelector(".fromLeft").classList.add("done"),document.querySelector(".fromRight").classList.add("done"),document.querySelector(".fadeTextboxIn").classList.add("done"),document.querySelector(".gray-box").animate([{transform:"scale(1)"},{transform:"scale(0)"}],{duration:1e3,iterations:1,fill:"forwards"}))}))}),{threshold:1,rootMargin:"0px 0px -100px 0px"}).observe(document.querySelector(".pics-section"))}},{key:"zoomBackgroundOnScroll",value:function(){var e=document.getElementById("home-section");window.addEventListener("scroll",(function(){e.style.backgroundSize=190-+window.scrollY/12+"%"}))}}])&&o(i.prototype,n),Object.defineProperty(i,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,a=function(e,t){if("object"!==l(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===l(a)?a:String(a)),n)}var a}const d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.showcaseSection}var t,i;return t=e,(i=[{key:"render",value:function(){var e=document.querySelector("body");this.showcaseSection=document.createElement("section"),this.showcaseSection.classList.add("showcase-section"),this.showcaseSection.innerHTML='\n            <div>x</div>\n            <h2 class="section-header">Services</h2>\n            <div class="row montage">\n                <div class="image-container col1"></div>\n                <div class="image-text col2">\n                    <article>\n                        <h3>Møbelmontage</h3>\n                        <div class="text-content">\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iusto aperiam. Quod amet ipsam necessitatibus consequatur quas fugiat saepe natus nulla eos voluptatum, recusandae harum ipsa deleniti iure doloremque, enim veritatis. Facere commodi obcaecati, praesentium minima consequuntur itaque expedita illo?\n                        </div>\n                    </article>\n                </div>\n            </div>\n            <div class="row koersel">\n                <div class="image-text col1">\n                    <article>\n                        <h3>Kørsel af Flyttelæs</h3>\n                        <div class="text-content">\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iusto aperiam. Quod amet ipsam necessitatibus consequatur quas fugiat saepe natus nulla eos voluptatum, recusandae harum ipsa deleniti iure doloremque, enim veritatis. Facere commodi obcaecati, praesentium minima consequuntur itaque expedita illo?\n                        </div>\n                    </article>\n                </div>\n                <div class="image-container col2"></div>\n            </div>\n            <div class="row flytning">\n                <div class="image-container col1"></div>\n                <div class="image-text col2">\n                    <article>\n                        <h3>Flytning</h3>\n                        <div class="text-content">\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iusto aperiam. Quod amet ipsam necessitatibus consequatur quas fugiat saepe natus nulla eos voluptatum, recusandae harum ipsa deleniti iure doloremque, enim veritatis. Facere commodi obcaecati, praesentium minima consequuntur itaque expedita illo?\n                        </div>\n                    </article>\n                </div>\n            </div>\n            <div class="row besigtigelse">\n                <div class="image-text col1">\n                    <article>\n                        <h3>Gratis Besigtigelse</h3>\n                        <div class="text-content">\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iusto aperiam. Quod amet ipsam necessitatibus consequatur quas fugiat saepe natus nulla eos voluptatum, recusandae harum ipsa deleniti iure doloremque, enim veritatis. Facere commodi obcaecati, praesentium minima consequuntur itaque expedita illo?\n                        </div>\n                    </article>\n                </div>\n                <div class="image-container col2"></div>\n            </div>\n            <div class="row kasser">\n                <div class="image-container col1"></div>\n                <div class="image-text col2">\n                    <article>\n                        <h3>Lån af Flyttekasser</h3>\n                        <div class="text-content">\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iusto aperiam. Quod amet ipsam necessitatibus consequatur quas fugiat saepe natus nulla eos voluptatum, recusandae harum ipsa deleniti iure doloremque, enim veritatis. Facere commodi obcaecati, praesentium minima consequuntur itaque expedita illo?\n                        </div>\n                    </article>\n                </div>\n            </div>\n            <div class="row opbevaring">\n                <div class="image-text col1">\n                    <article>\n                        <h3>Opbevaring</h3>\n                        <div class="text-content">\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iusto aperiam. Quod amet ipsam necessitatibus consequatur quas fugiat saepe natus nulla eos voluptatum, recusandae harum ipsa deleniti iure doloremque, enim veritatis. Facere commodi obcaecati, praesentium minima consequuntur itaque expedita illo?\n                        </div>\n                    </article>\n                </div>\n                <div class="image-container col2"></div>\n            </div>\n        ',e.appendChild(this.showcaseSection),this._showCaseSlideIn()}},{key:"_showCaseSlideIn",value:function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(e.target.querySelector(".col1").classList.add("showcase-slide-in"),e.target.querySelector(".col2").classList.add("showcase-slide-in"))}))}),{threshold:.5});e.observe(document.querySelector(".montage")),e.observe(document.querySelector(".koersel")),e.observe(document.querySelector(".flytning")),e.observe(document.querySelector(".besigtigelse")),e.observe(document.querySelector(".kasser")),e.observe(document.querySelector(".opbevaring"))}}])&&u(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function p(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,a=function(e,t){if("object"!==m(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===m(a)?a:String(a)),n)}var a}const f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.contactSection,this.body=document.querySelector("body")}var t,i;return t=e,(i=[{key:"render",value:function(){this.contactSection=document.createElement("section"),this.contactSection.classList.add("contact-section"),this.contactSection.innerHTML='\n            <div class="form-container">\n                <h2>Kontakt</h2>\n                <div class="form-text">\n                </div>\n                <form>\n                <div class="field-container">\n                    <label for="customer-name">Navn:</label>\n                    <input type="text" id="customer-name" name="customer-name" />\n                </div>\n                <div class="field-container">\n                    <label for="customer-phone">Telefon:</label>\n                    <input type="text" id="customer-name" name="customer-phone" />\n                </div>\n                <div class="field-container">\n                    <label for="customer-email">Email:</label>\n                    <input type="text" id="customer-email" name="customer-email" />\n                </div>\n                <div class="field-container">\n                    <label for="customer-comment">Beskrivelse:</label>\n                    <textarea id="customer-email" name="customer-email"></textarea>\n                </div>\n                <div class="cta">\n                    <button class="submit">Send</button>\n                    <button class="reset">Slet</button>\n                </div>\n                </form>\n            </div>\n        ',this.body.appendChild(this.contactSection)}}])&&p(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();(new c).render(),(new d).render(),(new f).render()})();