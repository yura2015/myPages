(window.webpackJsonp=window.webpackJsonp||[]).push([[5],[,,,,,function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return h})),s.d(t,"SortableTableProducts",(function(){return m}));s(10);var n=s(11);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class r{constructor({min:e=100,max:t=200,formatValue:s=(e=>"$"+e),selected:n={from:e,to:t}}={}){i(this,"element",void 0),i(this,"subElements",{}),i(this,"onThumbPointerMove",e=>{e.preventDefault();const{left:t,right:s,width:n}=this.subElements.inner.getBoundingClientRect();if(this.dragging===this.subElements.thumbLeft){let s=(e.clientX-t+this.shiftX)/n;s<0&&(s=0),s*=100;const i=parseFloat(this.subElements.thumbRight.style.right);s+i>100&&(s=100-i),this.dragging.style.left=this.subElements.progress.style.left=s+"%",this.subElements.from.innerHTML=this.formatValue(this.getValue().from)}if(this.dragging===this.subElements.thumbRight){let t=(s-e.clientX-this.shiftX)/n;t<0&&(t=0),t*=100;const i=parseFloat(this.subElements.thumbLeft.style.left);i+t>100&&(t=100-i),this.dragging.style.right=this.subElements.progress.style.right=t+"%",this.subElements.to.innerHTML=this.formatValue(this.getValue().to)}}),i(this,"onThumbPointerUp",()=>{this.element.classList.remove("range-slider_dragging"),document.removeEventListener("pointermove",this.onThumbPointerMove),document.removeEventListener("pointerup",this.onThumbPointerUp),this.element.dispatchEvent(new CustomEvent("range-select",{detail:this.getValue(),bubbles:!0}))}),this.min=e,this.max=t,this.formatValue=s,this.selected=n,this.render()}get template(){const{from:e,to:t}=this.selected;return`<div class="range-slider">\n      <span data-element="from">${this.formatValue(e)}</span>\n      <div data-element="inner" class="range-slider__inner">\n        <span data-element="progress" class="range-slider__progress"></span>\n        <span data-element="thumbLeft" class="range-slider__thumb-left"></span>\n        <span data-element="thumbRight" class="range-slider__thumb-right"></span>\n      </div>\n      <span data-element="to">${this.formatValue(t)}</span>\n    </div>`}render(){const e=document.createElement("div");e.innerHTML=this.template,this.element=e.firstElementChild,this.element.ondragstart=()=>!1,this.subElements=this.getSubElements(e),this.initEventListeners(),this.update()}initEventListeners(){const{thumbLeft:e,thumbRight:t}=this.subElements;e.addEventListener("pointerdown",e=>this.onThumbPointerDown(e)),t.addEventListener("pointerdown",e=>this.onThumbPointerDown(e))}getSubElements(e){const t={},s=e.querySelectorAll("[data-element]");for(const e of s){t[e.dataset.element]=e}return t}remove(){this.element.remove()}destroy(){this.remove(),document.removeEventListener("pointermove",this.onThumbPointerMove),document.removeEventListener("pointerup",this.onThumbPointerUp)}update(){const e=this.max-this.min,t=Math.floor((this.selected.from-this.min)/e*100)+"%",s=Math.floor((this.max-this.selected.to)/e*100)+"%";this.subElements.progress.style.left=t,this.subElements.progress.style.right=s,this.subElements.thumbLeft.style.left=t,this.subElements.thumbRight.style.right=s}onThumbPointerDown(e){const t=e.target;e.preventDefault();const{left:s,right:n}=t.getBoundingClientRect();t===this.subElements.thumbLeft?this.shiftX=n-e.clientX:this.shiftX=s-e.clientX,this.dragging=t,this.element.classList.add("range-slider_dragging"),document.addEventListener("pointermove",this.onThumbPointerMove),document.addEventListener("pointerup",this.onThumbPointerUp)}getValue(){const e=this.max-this.min,{left:t}=this.subElements.thumbLeft.style,{right:s}=this.subElements.thumbRight.style;return{from:Math.round(this.min+.01*parseFloat(t)*e),to:Math.round(this.max-.01*parseFloat(s)*e)}}}var l=s(13),a=s(9);var o=[{id:"images",title:"Фото",sortable:!1,template:e=>`\n          <div class="sortable-table__cell">\n            <img class="sortable-table-image" alt="Image" src="${e[0].url}">\n          </div>\n        `},{id:"title",title:"Название",sortable:!0,sortType:"string"},{id:"subcategory",title:"Категория",sortable:!1,template:e=>`<div class="sortable-table__cell">\n          ${e}\n        </div>`},{id:"quantity",title:"Количество",sortable:!0,sortType:"number"},{id:"price",title:"Цена",sortable:!0,sortType:"number"},{id:"status",title:"Статус",sortable:!0,sortType:"number",template:e=>`<div class="sortable-table__cell">\n          ${e>0?"Активен":"Неактивен"}\n        </div>`}];function d(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class h{constructor(){d(this,"element",void 0),d(this,"subElements",{}),d(this,"from",0),d(this,"to",4e3),d(this,"onProduct",async()=>{const e=new URL("api/rest/products","https://course-js.javascript.ru/"),t=(await Object(a.a)(e)).filter(e=>e.price>this.from&&e.price<this.to),s=document.forms[0],n=s[0].value,i=t.filter(e=>-1!==e.title.toUpperCase().indexOf(Object(l.a)(n).toUpperCase()));let r;switch(s[1].selectedIndex){case 0:r=i;break;case 1:r=i.filter(e=>1===e.status);break;case 2:r=i.filter(e=>0===e.status)}this.components.sortableTable.addRows(r)}),this.render()}async onPrice(e,t){this.from=e,this.to=t,this.onProduct()}initComponents(){let e=new Date;new Date;new Date(e.setMonth(e.getMonth()-1));const t=new r({min:0,max:4e3}),s=new m(o,{url:"api/rest/products",isSortlocaly:!0});this.components={doubleSlider:t,sortableTable:s}}randerComponents(){Object.keys(this.components).forEach(e=>{const t=this.subElements[e],{element:s}=this.components[e];t.append(s)})}get template(){return'<div class="products-list">\n                <div class="content__top-panel">\n                    <h1 class="page_title">Товары</h1>\n                    <a href="products/add" class="button-primary">Добавить товар</a>\n                 </div>\n                 <div class="content-box content-box_small" >\n                    <form class="form-inline" >\n                      <div class="form-group" >\n                        <label class="form-label" >Сортировать по:</label>\n                        <input type="text" data-elem="filterName" class="form-control" placeholder="Название товара" ></input>\n                      </div>\n                      <div class="form-group" data-elem="sliderContainer" >\n                        <label class="form-label" >Цена:</label>\n                        <div data-element="doubleSlider" >\n                        </div>\n                      </div>\n                      <div class="form-group" >\n                        <label class="form-label" >Статус:</label>\n                        <select class="form-control" data-elem="filterStatus" >\n                          <option value selected > Любой </option>\n                          <option value="1" >Активный</option>\n                          <option value="0" >Неактивный</option>\n                        </select>\n                      </div>\n                    </form>\n                </div>\n                <div data-elem="productsContainer" class="products-list__container">\n                    <div data-element="sortableTable"></div>\n                </div>\n              </div>\n          </div>'}initEventListener(){const e=this.element.querySelectorAll(".form-control");for(let t of e)"filterName"===t.dataset.elem?t.addEventListener("input",this.onProduct):"filterStatus"===t.dataset.elem&&t.addEventListener("change",this.onProduct);this.components.doubleSlider.element.addEventListener("range-select",e=>{const{from:t,to:s}=e.detail;this.onPrice(t,s)})}render(){return this.element=document.createElement("div"),this.element.innerHTML=this.template,this.element=this.element.firstElementChild,this.subElements=this.getSubElements(this.element),this.initComponents(),this.randerComponents(),this.initEventListener(),this.element}renderForm(){const e=document.createElement("div");e.innerHTML=this.formData?this.template():this.getEmptyTemplate(),this.element=e.firstElementChild,this.subElements=this.getSubElements(this.element)}getEmptyTemplate(){return'<div>\n      <h1 class="page-title">Страница не найдена</h1>\n      <p>Извините, данный товар не существует</p>\n    </div>'}getSubElements(e){const t={},s=e.querySelectorAll("[data-element]");for(const e of s)t[e.dataset.element]=e;return t}destroy(){this.remove(),this.element=null,this.subElements=null}remove(){this.element&&this.element.remove()}}class m extends n.a{getTableRows(e=[]){if(e.length)return e.map(t=>`\n           <a href=/products/${t.id} class="sortable-table__row">\n             ${this.getTableRow(t,e)}\n           </a>`).join("")}addRows(e=[]){const t=document.forms[0],s=t[0].value;let n,i,r,a=e.filter(e=>-1!==e.title.toUpperCase().indexOf(Object(l.a)(s).toUpperCase()));switch(t[1].selectedIndex){case 0:n=a;break;case 1:n=a.filter(e=>1===e.status);break;case 2:n=a.filter(e=>0===e.status)}const o=document.querySelector(".range-slider");for(let e of o.children)"from"===e.dataset.element?i=Object(l.a)(e.innerText).match(/\d/g).join(""):"to"===e.dataset.element&&(r=Object(l.a)(e.innerText).match(/\d/g).join(""));let d=n.filter(e=>e.quantity>i&&e.quantity<r);this.subElements.body.innerHTML=this.getTableRows(d)}}},,,,function(e,t,s){"use strict";t.a=async function(e,t){let s,i;try{s=await fetch(e.toString(),t)}catch(e){throw new n(s,"Network error has occurred.")}if(!s.ok){let e=s.statusText;try{i=await s.json(),e=i.error&&i.error.message||i.data&&i.data.error&&i.data.error.message||e}catch(e){}let t=`Error ${s.status}: ${e}`;throw new n(s,i,t)}try{return await s.json()}catch(e){throw new n(s,null,e.message)}};class n extends Error{constructor(e,t,s){var n,i,r;super(s),r="FetchError",(i="name")in(n=this)?Object.defineProperty(n,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[i]=r,this.response=e,this.body=t}}window.addEventListener("unhandledrejection",e=>{e.reason instanceof n&&alert(e.reason.message)})},function(e,t,s){"use strict";function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.d(t,"a",(function(){return i}));class i{constructor({items:e=[]}={}){n(this,"onPointerMove",({clientX:e,clientY:t})=>{this.moveDraggingAt(e,t);const s=this.placeholderElement.previousElementSibling,n=this.placeholderElement.nextElementSibling,{firstElementChild:i,lastElementChild:r}=this.element,{top:l}=i.getBoundingClientRect(),{bottom:a}=this.element.getBoundingClientRect();if(t<l)return i.before(this.placeholderElement);if(t>a)return r.after(this.placeholderElement);if(s){const{top:e,height:n}=s.getBoundingClientRect();if(t<e+n/2)return s.before(this.placeholderElement)}if(n){const{top:e,height:s}=n.getBoundingClientRect();if(t>e+s/2&&n.nextElementSibling)return n.after(this.placeholderElement);if(!n.nextElementSibling)return n.before(this.placeholderElement)}this.scrollIfCloseToWindowEdge(t)}),n(this,"onPointerUp",()=>{this.dragStop()}),this.items=e,this.render()}render(){this.element=document.createElement("ul"),this.element.className="sortable-list",this.addItems(),this.initEventListeners()}addItems(){for(const e of this.items)e.classList.add("sortable-list__item");this.element.append(...this.items)}initEventListeners(){this.element.addEventListener("pointerdown",e=>{this.onPointerDown(e)})}onPointerDown(e){const t=e.target.closest(".sortable-list__item");t&&(e.target.closest("[data-grab-handle]")&&(e.preventDefault(),console.log("dragStart: + "+t.innerHTML),this.dragStart(t,e)),e.target.closest("[data-delete-handle]")&&(e.preventDefault(),t.remove()))}createPlaceholderElement(e,t){const s=document.createElement("li");return s.className="sortable-list__placeholder",s.style.width=e+"px",s.style.height=t+"px",s}dragStart(e,{clientX:t,clientY:s}){this.draggingElem=e,this.elementInitialIndex=[...this.element.children].indexOf(e);const{x:n,y:i}=e.getBoundingClientRect(),{offsetWidth:r,offsetHeight:l}=e;this.pointerShift={x:t-n,y:s-i},this.draggingElem.style.width=r+"px",this.draggingElem.style.height=l+"px",this.draggingElem.classList.add("sortable-list__item_dragging"),this.placeholderElement=this.createPlaceholderElement(r,l),this.draggingElem.after(this.placeholderElement),this.element.append(this.draggingElem),this.moveDraggingAt(t,s),this.addDocumentEventListeners()}addDocumentEventListeners(){document.addEventListener("pointermove",this.onPointerMove),document.addEventListener("pointerup",this.onPointerUp)}removeDocumentEventListeners(){document.removeEventListener("pointermove",this.onPointerMove),document.removeEventListener("pointerup",this.onPointerUp)}moveDraggingAt(e,t){this.draggingElem.style.left=e-this.pointerShift.x+"px",this.draggingElem.style.top=t-this.pointerShift.y+"px",console.log("this.draggingElem: + "+this.draggingElem.style.x)}scrollIfCloseToWindowEdge(e){e<20?window.scrollBy(0,-10):e>document.documentElement.clientHeight-20&&window.scrollBy(0,10)}dragStop(){const e=[...this.element.children].indexOf(this.placeholderElement);this.draggingElem.style.cssText="",this.draggingElem.classList.remove("sortable-list__item_dragging"),this.placeholderElement.replaceWith(this.draggingElem),this.draggingElem=null,this.removeDocumentEventListeners(),e!==this.elementInitialIndex&&this.dispatchEvent("sortable-list-reorder",{from:this.elementInitialIndex,to:e})}dispatchEvent(e,t){this.element.dispatchEvent(new CustomEvent(e,{bubbles:!0,details:t}))}remove(){this.element&&this.element.remove()}destroy(){this.remove(),this.removeDocumentEventListeners(),this.element=null}}},function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var n=s(9);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class r{constructor(e=[],{url:t="",sorted:s={id:e.find(e=>e.sortable).id,order:"asc"},isSortLocally:n=!1,step:r=20,start:l=1,end:a=l+r}={}){i(this,"element",void 0),i(this,"subElements",{}),i(this,"data",[]),i(this,"loading",!1),i(this,"step",20),i(this,"start",1),i(this,"end",this.start+this.step),i(this,"onWindowScroll",async()=>{const{bottom:e}=this.element.getBoundingClientRect(),{id:t,order:s}=this.sorted;if(e<document.documentElement.clientHeight&&!this.loading&&!this.isSortLocally){this.start=this.end,this.end=this.start+this.step,this.loading=!0;const e=await this.loadData(t,s,this.start,this.end);this.updateBody(e),this.loading=!1}}),i(this,"onSortClick",e=>{const t=e.target.closest('[data-sortable="true"]');if(t){const{id:e,order:s}=t.dataset,n=(e=>({asc:"desc",desc:"asc"}[e]))(s);this.sorted={id:e,order:n},t.dataset.order=n,t.append(this.subElements.arrow),this.isSortLocally?this.sortLocally(e,n):this.sortOnServer(e,n,1,1+this.step)}}),this.headersConfig=e,this.url=new URL(t,"https://course-js.javascript.ru/"),this.sorted=s,this.isSortLocally=n,this.step=r,this.start=l,this.end=a,this.render(),this.update()}render(){const e=document.createElement("div");e.innerHTML=this.getTable([]);const t=e.firstElementChild;this.element=t,this.subElements=this.getSubElements(t)}async update(){const{id:e,order:t}=this.sorted;this.data=await this.loadData(e,t,this.start,this.end),this.renderRows([...this.data]),this.initEventListeners()}addRows(e){this.subElements.body.innerHTML=this.getTableRows(e)}updateBody(e){const t=document.createElement("div");e=[...this.data,...e],t.innerHTML=this.getTableRows(e),this.subElements.body.append(...t.childNodes)}async loadData(e,t,s=this.start,i=this.end){this.url.searchParams.set("_sort",e),this.url.searchParams.set("_order",t),this.url.searchParams.set("_start",s),this.url.searchParams.set("_end",i),this.element.classList.add("sortable-table_loading");const r=await Object(n.a)(this.url);return this.element.classList.remove("sortable-table_loading"),r}getTableHeader(){return`<div data-element="header" class="sortable-table__header sortable-table__row">\n      ${this.headersConfig.map(e=>this.getHeaderRow(e)).join("")}\n    </div>`}getHeaderRow({id:e,title:t,sortable:s}){return`\n      <div class="sortable-table__cell" data-id="${e}" data-sortable="${s}" data-order="${this.sorted.id===e?this.sorted.order:"asc"}">\n        <span>${t}</span>\n        ${this.getHeaderSortingArrow(e)}\n      </div>\n    `}getHeaderSortingArrow(e){return(this.sorted.id===e?this.sorted.order:"")?'<span data-element="arrow" class="sortable-table__sort-arrow">\n          <span class="sort-arrow"></span>\n        </span>':""}getTableBody(e){return`\n      <div data-element="body" class="sortable-table__body">\n        ${this.getTableRows(e)}\n      </div>`}getTableRows(e){return e.map(t=>`\n      <div class="sortable-table__row">\n        ${this.getTableRow(t,e)}\n      </div>`).join("")}getTableRow(e){return this.headersConfig.map(({id:e,template:t})=>({id:e,template:t})).map(({id:t,template:s})=>s?s(e[t]):`<div class="sortable-table__cell">${e[t]}</div>`).join("")}getTable(e=[]){return`\n      <div class="sortable-table">\n        ${this.getTableHeader()}\n        ${this.getTableBody(e)}\n        <div data-element="loading" class="loading-line sortable-table__loading-line"></div>\n        <div data-element="emptyPlaceholder" class="sortable-table__empty-placeholder">\n          No products\n        </div>\n      </div>`}initEventListeners(){this.subElements.header.addEventListener("pointerdown",this.onSortClick),document.addEventListener("scroll",this.onWindowScroll)}sortLocally(e,t){const s=this.sortData(e,t);this.subElements.body.innerHTML=this.getTableBody(s)}async sortOnServer(e,t,s,n){const i=await this.loadData(e,t,s,n);this.renderRows(i)}renderRows(e){e.length?(this.element.classList.remove("sortable-table_empty"),this.addRows(e)):this.element.classList.add("sortable-table_empty")}sortData(e,t){const s=[...this.data],n=this.headersConfig.find(t=>t.id===e),{sortType:i,customSorting:r}=n,l="asc"===t?1:-1;return s.sort((t,s)=>{switch(i){case"number":return l*(t[e]-s[e]);case"string":return l*t[e].localeCompare(s[e],"ru");case"custom":return l*r(t,s);default:return l*(t[e]-s[e])}})}getSubElements(e){return[...e.querySelectorAll("[data-element]")].reduce((e,t)=>(e[t.dataset.element]=t,e),{})}remove(){this.element.remove()}destroy(){this.remove(),this.subElements={},document.removeEventListener("scroll",this.onWindowScroll)}}},,function(e,t,s){"use strict";t.a=e=>e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}]]);
//# sourceMappingURL=products-list-index-js-5.js.map