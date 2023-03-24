(()=>{"use strict";var t={28:(t,e,n)=>{n.d(e,{Z:()=>p});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),s=n(667),c=n.n(s),d=new URL(n(881),n.b),l=i()(o()),u=c()(d);l.push([t.id,"*,*::before,*::after {\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: 'MyFont';\n    src: url("+u+");\n    font-weight: 600;\n    font-style: normal;\n  }\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: 'MyFont';\n}\n\n/* setting up grid layout for the overall page */\n.container {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 100%;\n    grid-template-rows: 15% 85%;\n    z-index: 1;\n}\n\n/* styling for header */\nheader {\n    width: 100%;\n    height: 100%;\n    background-color: #10b981;\n    color: black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* setting up grid layout for the main content of the page */\n.main-content {\n    background-color: #d1fae5;\n    display: grid;\n    grid-template-columns: 15% 85%;\n    grid-template-rows: 100%;\n}\n\n/* styling for file bar */\n.file-bar {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #6ee7b7;\n}\n\n.file-list {\n    height: auto;\n    width: 100%;\n    padding: 15%;\n}\n\n.button-list {\n    text-decoration: none;\n    list-style: none;\n    width: 100%;\n    height: 100%;\n}\n\n.button {\n    color: black;\n    background-color: transparent;\n    border: 1px solid transparent;\n    border-radius: 5px;\n    width: 100%;\n    font-size: 1.2rem;\n    padding: 5%;\n}\n\n.button:hover {\n    cursor: pointer;\n    background-color: rgba(255, 255, 255, .5);\n}\n\n/* grid layout for the task conent */\n.task-container {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 100%;\n    grid-template-rows: 10% 10% 80%;\n    padding: 4% 5%;\n}\n\n/* task content styling */\n\n.task-title {\n    width: 100%;\n    height: 100%;\n    font-size: 1.5rem;\n}\n\n.title {\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    margin: 0;\n}\n\n.add-task-button {\n    background-color: transparent;\n    border: 1px solid transparent;\n    border-radius: 5px;\n    font-size: 1rem;\n    width: auto;\n    text-align: left;\n    padding: 0;\n}\n\n.add-task-button:hover {\n    cursor: pointer;\n    background-color: rgba(255, 255, 255, .5);\n}\n\n/* styling for task list item */\n.task-list {\n    padding: 0;\n}\n.task-li {\n    list-style: none;\n    display: flex;\n    justify-content: space-between;\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    padding: 10px;\n}\n\n.task-li:hover {\n    background-color: rgba(255, 255, 255, .5);\n}\n\n.todo-title {\n    flex-grow: 1;\n}\n\n.todo-complete {\n    margin-right: 10px;\n    height: 20px;\n    width: 20px;\n    display: flex;\n    fill: black;\n}\n\nuse {\n    height: 100%;\n    width: 100%;\n    cursor: pointer;\n}\n\n.todo-delete {\n    margin-left: 10px;\n    height: 20px;\n    width: 20px;\n}\n\n.todo-delete:hover {\n    cursor: pointer;\n}\n\n/* styling for add task form */\n.form-container {\n    display: none;\n}\n\n.form-container.show{\n    z-index: 2;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 30%;\n    height: 40%;\n}\n\n.form-title {\n    text-align: center;\n}\n\n.form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 100%;\n    height: 100%;\n}\n\n.completed {\n    text-decoration: line-through;\n    color: #aaa;\n}",""]);const p=l},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var c=r(t,o),d=0;d<a.length;d++){var l=n(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},881:(t,e,n)=>{t.exports=n.p+"fc2b5060f7accec5cf74.ttf"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),c=n.n(s),d=n(216),l=n.n(d),u=n(589),p=n.n(u),m=n(28),f={};function h(t){const e=document.querySelector(".task-list");for(;e.firstChild;)e.removeChild(e.firstChild);if(t.length>0){let n=0;t.forEach((t=>{const r=document.createElement("li");r.setAttribute("class","task-li"),r.setAttribute("data-index",`${n}`),e.appendChild(r);const o=document.createElement("svg");o.setAttribute("class","todo-complete"),o.setAttribute("viewBox","0, 0, 24, 24"),o.innerHTML='<use xlink:href="./svgs/checkbox-outline.svg#checkbox"></use>',r.appendChild(o);const a=document.createElement("div");a.setAttribute("class","todo-title"),a.textContent=`${t.taskName}`,r.appendChild(a);const i=document.createElement("div");i.setAttribute("class","todo-dueDate"),i.textContent=`${t.dueDate}`,r.appendChild(i);const s=document.createElement("svg");s.setAttribute("class","todo-delete"),s.setAttribute("viewBox","0, 0, 24, 24"),s.innerHTML='<use xlink:href="./svgs/trash-can.svg#trashcan"></use>',r.appendChild(s),n++}))}}f.styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const b=[];!function(){const t=document.querySelector(".container"),e=document.createElement("header");e.setAttribute("class","header"),e.innerHTML="<h1>To Do List</h1>",t.appendChild(e);const n=document.createElement("div");n.setAttribute("class","main-content"),t.appendChild(n);const r=document.createElement("div");r.setAttribute("class","file-bar"),n.appendChild(r);const o=document.createElement("ul");o.setAttribute("class","file-list"),r.appendChild(o);const a=document.createElement("li");a.setAttribute("class","button-list"),a.innerHTML='<button class="button">+ Add A File</button>',o.appendChild(a);const i=document.createElement("li");i.setAttribute("class","button-list"),i.innerHTML='<button class="button">Default</button>',o.appendChild(i);const s=document.createElement("div");s.setAttribute("class","task-container"),n.appendChild(s);const c=document.createElement("div");c.setAttribute("class","task-title"),c.innerHTML='<h2 class="title">Tasks</h2>',s.appendChild(c);const d=document.createElement("button");d.setAttribute("class","add-task-button"),d.innerText="+ Add A Task",s.appendChild(d);const l=document.createElement("ul");l.setAttribute("class","task-list"),s.appendChild(l);const u=document.createElement("div");u.setAttribute("class","form-container"),t.appendChild(u);const p=document.createElement("h2");p.setAttribute("id","form-title"),p.innerText="Add A Task",u.appendChild(p);const m=document.createElement("form");m.setAttribute("class","form"),u.appendChild(m);const f=document.createElement("label");f.setAttribute("for","task-name"),f.innerText="Task Name:",m.appendChild(f);const h=document.createElement("input");h.setAttribute("type","text"),h.setAttribute("id","task-name"),h.setAttribute("name","task-name"),h.setAttribute("placeholder","Enter Task Name"),m.appendChild(h);const b=document.createElement("label");b.setAttribute("for","due-date"),b.innerText="Due Date:",m.appendChild(b);const g=document.createElement("input");g.setAttribute("type","date"),g.setAttribute("id","due-date"),g.setAttribute("name","due-date"),m.appendChild(g);const v=document.createElement("button");v.setAttribute("type","submit"),v.setAttribute("id","add-button"),v.innerText="Add Task",m.appendChild(v)}(),function(){const t=document.querySelector(".add-task-button"),e=document.querySelector(".form-container"),n=document.querySelector(".form"),r=(document.querySelector("#cancel-button"),document.querySelector("#add-button")),o=document.querySelector(".task-list");t.addEventListener("click",(()=>{e.classList.add("show")})),n.addEventListener("submit",(t=>{t.preventDefault()})),r.addEventListener("click",(()=>{const t=(r=n.elements["task-name"].value,o=new Date(n.elements["due-date"].value),{taskName:r,dueDate:o,completed:!1});var r,o;n.reset(),e.classList.remove("show"),b.push(t),h(b)})),o.addEventListener("click",(t=>{if(t.target.classList.contains("todo-delete")){const e=t.target.closest("li").dataset.index;b.splice(e,1),h(b)}})),o.addEventListener("click",(t=>{const e=t.target.closest(".todo-complete");if(e){const t=e.closest("li"),n=t.dataset.index,r=b[n];r.completed=!r.completed,r.completed?t.classList.add("completed"):t.classList.remove("completed")}})),document.addEventListener("click",(r=>{r.target.contains(e)||r.target.contains(t)||(n.reset(),e.classList.remove("show"))}))}()})()})();