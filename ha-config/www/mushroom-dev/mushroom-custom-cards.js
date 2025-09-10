function t(t,e,o,i){var n,r=arguments.length,a=r<3?e:i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}const e=globalThis,o=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let r=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&n.set(e,t))}return t}toString(){return this.cssText}};const a=t=>new r("string"==typeof t?t:t+"",void 0,i),s=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new r(o,t,i)},l=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return a(e)})(t):t,{is:c,defineProperty:d,getOwnPropertyDescriptor:u,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:_}=Object,m=globalThis,g=m.trustedTypes,f=g?g.emptyScript:"",v=m.reactiveElementPolyfillSupport,b=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},k=(t,e)=>!c(t,e),w={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);void 0!==i&&d(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){const{get:i,set:n}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const r=i?.call(this);n.call(this,e),this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=_(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...p(t),...h(t)];for(const o of e)this.createProperty(o,t[o])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(o)t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const o of i){const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=o.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EC(t,e){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(void 0!==i&&!0===o.reflect){const n=(void 0!==o.converter?.toAttribute?o.converter:y).toAttribute(e,o.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const o=this.constructor,i=o._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=o.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i,this[i]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,o){if(void 0!==t){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??k)(this[t],e))return;this.P(t,e,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t)!0!==o.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[b("elementProperties")]=new Map,x[b("finalized")]=new Map,v?.({ReactiveElement:x}),(m.reactiveElementVersions??=[]).push("2.0.4");const z=globalThis,C=z.trustedTypes,$=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+S,T=`<${E}>`,j=document,P=()=>j.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,O="[ \t\n\f\r]",V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,L=/>/g,B=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,U=/"/g,R=/^(?:script|style|textarea|title)$/i,H=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),K=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),W=new WeakMap,Z=j.createTreeWalker(j,129);function q(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(e):e}const G=(t,e)=>{const o=t.length-1,i=[];let n,r=2===e?"<svg>":3===e?"<math>":"",a=V;for(let e=0;e<o;e++){const o=t[e];let s,l,c=-1,d=0;for(;d<o.length&&(a.lastIndex=d,l=a.exec(o),null!==l);)d=a.lastIndex,a===V?"!--"===l[1]?a=N:void 0!==l[1]?a=L:void 0!==l[2]?(R.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=B):void 0!==l[3]&&(a=B):a===B?">"===l[0]?(a=n??V,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?B:'"'===l[3]?U:D):a===U||a===D?a=B:a===N||a===L?a=V:(a=B,n=void 0);const u=a===B&&t[e+1].startsWith("/>")?" ":"";r+=a===V?o+T:c>=0?(i.push(s),o.slice(0,c)+A+o.slice(c)+S+u):o+S+(-2===c?e:u)}return[q(t,r+(t[o]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Y{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let n=0,r=0;const a=t.length-1,s=this.parts,[l,c]=G(t,e);if(this.el=Y.createElement(l,o),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Z.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(A)){const e=c[r++],o=i.getAttribute(t).split(S),a=/([.?@])?(.*)/.exec(e);s.push({type:1,index:n,name:a[2],strings:o,ctor:"."===a[1]?et:"?"===a[1]?ot:"@"===a[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(S)&&(s.push({type:6,index:n}),i.removeAttribute(t));if(R.test(i.tagName)){const t=i.textContent.split(S),e=t.length-1;if(e>0){i.textContent=C?C.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],P()),Z.nextNode(),s.push({type:2,index:++n});i.append(t[e],P())}}}else if(8===i.nodeType)if(i.data===E)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(S,t+1));)s.push({type:7,index:n}),t+=S.length-1}n++}}static createElement(t,e){const o=j.createElement("template");return o.innerHTML=t,o}}function X(t,e,o=t,i){if(e===K)return e;let n=void 0!==i?o._$Co?.[i]:o._$Cl;const r=I(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,o,i)),void 0!==i?(o._$Co??=[])[i]=n:o._$Cl=n),void 0!==n&&(e=X(t,n._$AS(t,e.values),n,i)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,i=(t?.creationScope??j).importNode(e,!0);Z.currentNode=i;let n=Z.nextNode(),r=0,a=0,s=o[0];for(;void 0!==s;){if(r===s.index){let e;2===s.type?e=new Q(n,n.nextSibling,this,t):1===s.type?e=new s.ctor(n,s.name,s.strings,this,t):6===s.type&&(e=new nt(n,this,t)),this._$AV.push(e),s=o[++a]}r!==s?.index&&(n=Z.nextNode(),r++)}return Z.currentNode=j,i}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),I(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==K&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,i="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=Y.createElement(q(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new J(i,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new Y(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const n of t)i===e.length?e.push(o=new Q(this.O(P()),this.O(P()),this,this.options)):o=e[i],o._$AI(n),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=F}_$AI(t,e=this,o,i){const n=this.strings;let r=!1;if(void 0===n)t=X(this,t,e,0),r=!I(t)||t!==this._$AH&&t!==K,r&&(this._$AH=t);else{const i=t;let a,s;for(t=n[0],a=0;a<n.length-1;a++)s=X(this,i[o+a],e,a),s===K&&(s=this._$AH[a]),r||=!I(s)||s!==this._$AH[a],s===F?t=F:t!==F&&(t+=(s??"")+n[a+1]),this._$AH[a]=s}r&&!i&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class ot extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class it extends tt{constructor(t,e,o,i,n){super(t,e,o,i,n),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??F)===K)return;const o=this._$AH,i=t===F&&o!==F||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==F&&(o===F||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const rt=z.litHtmlPolyfillSupport;rt?.(Y,Q),(z.litHtmlVersions??=[]).push("3.2.1");let at=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const i=o?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=o?.renderBefore??null;i._$litPart$=n=new Q(e.insertBefore(P(),t),t,void 0,o??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}};at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});const st=globalThis.litElementPolyfillSupport;st?.({LitElement:at}),(globalThis.litElementVersions??=[]).push("4.1.1");const lt=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},ct={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:k},dt=(t=ct,e,o)=>{const{kind:i,metadata:n}=o;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(o.name,t),"accessor"===i){const{name:i}=o;return{set(o){const n=e.get.call(this);e.set.call(this,o),this.requestUpdate(i,n,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=o;return function(o){const n=this[i];e.call(this,o),this.requestUpdate(i,n,t)}}throw Error("Unsupported decorator location: "+i)};function ut(t){return(e,o)=>"object"==typeof o?dt(t,e,o):((t,e,o)=>{const i=e.hasOwnProperty(o);return e.constructor.createProperty(o,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}function pt(t){return ut({...t,state:!0,attribute:!1})}const ht=1,_t=t=>(...e)=>({_$litDirective$:t,values:e});let mt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const gt=_t(class extends mt{constructor(t){if(super(t),t.type!==ht||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const o=t.element.classList;for(const t of this.st)t in e||(o.remove(t),this.st.delete(t));for(const t in e){const i=!!e[t];i===this.st.has(t)||this.nt?.has(t)||(i?(o.add(t),this.st.add(t)):(o.remove(t),this.st.delete(t)))}return K}}),ft="important",vt=" !"+ft,bt=_t(class extends mt{constructor(t){if(super(t),t.type!==ht||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,o)=>{const i=t[o];return null==i?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:o}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?o.removeProperty(t):o[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ft.add(t);const e="string"==typeof i&&i.endsWith(vt);t.includes("-")||e?o.setProperty(t,e?i.slice(0,-11):i,e?ft:""):o[t]=i}}return K}}),yt=(t,e,o,i)=>{i=i||{},o=null==o?{}:o;const n=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return n.detail=o,t.dispatchEvent(n),n};var kt,wt,xt,zt,Ct;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(kt||(kt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(wt||(wt={})),function(t){t.local="local",t.server="server"}(xt||(xt={})),function(t){t.language="language",t.system="system",t.DMY="DMY",t.MDY="MDY",t.YMD="YMD"}(zt||(zt={})),function(t){t.language="language",t.monday="monday",t.tuesday="tuesday",t.wednesday="wednesday",t.thursday="thursday",t.friday="friday",t.saturday="saturday",t.sunday="sunday"}(Ct||(Ct={}));class $t extends TypeError{constructor(t,e){let o;const{message:i,explanation:n,...r}=t,{path:a}=t,s=0===a.length?i:`At path: ${a.join(".")} -- ${i}`;super(n??s),null!=n&&(this.cause=s),Object.assign(this,r),this.name=this.constructor.name,this.failures=()=>o??(o=[t,...e()])}}function At(t){return"object"==typeof t&&null!=t}function St(t){return At(t)&&!Array.isArray(t)}function Et(t){return"symbol"==typeof t?t.toString():"string"==typeof t?JSON.stringify(t):`${t}`}function Tt(t,e,o,i){if(!0===t)return;!1===t?t={}:"string"==typeof t&&(t={message:t});const{path:n,branch:r}=e,{type:a}=o,{refinement:s,message:l=`Expected a value of type \`${a}\`${s?` with refinement \`${s}\``:""}, but received: \`${Et(i)}\``}=t;return{value:i,type:a,refinement:s,key:n[n.length-1],path:n,branch:r,...t,message:l}}function*jt(t,e,o,i){(function(t){return At(t)&&"function"==typeof t[Symbol.iterator]})(t)||(t=[t]);for(const n of t){const t=Tt(n,e,o,i);t&&(yield t)}}function*Pt(t,e,o={}){const{path:i=[],branch:n=[t],coerce:r=!1,mask:a=!1}=o,s={path:i,branch:n,mask:a};r&&(t=e.coercer(t,s));let l="valid";for(const i of e.validator(t,s))i.explanation=o.message,l="not_valid",yield[i,void 0];for(let[c,d,u]of e.entries(t,s)){const e=Pt(d,u,{path:void 0===c?i:[...i,c],branch:void 0===c?n:[...n,d],coerce:r,mask:a,message:o.message});for(const o of e)o[0]?(l=null!=o[0].refinement?"not_refined":"not_valid",yield[o[0],void 0]):r&&(d=o[1],void 0===c?t=d:t instanceof Map?t.set(c,d):t instanceof Set?t.add(d):At(t)&&(void 0!==d||c in t)&&(t[c]=d))}if("not_valid"!==l)for(const i of e.refiner(t,s))i.explanation=o.message,l="not_refined",yield[i,void 0];"valid"===l&&(yield[void 0,t])}class It{constructor(t){const{type:e,schema:o,validator:i,refiner:n,coercer:r=(t=>t),entries:a=function*(){}}=t;this.type=e,this.schema=o,this.entries=a,this.coercer=r,this.validator=i?(t,e)=>jt(i(t,e),e,this,t):()=>[],this.refiner=n?(t,e)=>jt(n(t,e),e,this,t):()=>[]}assert(t,e){return Mt(t,this,e)}create(t,e){return function(t,e,o){const i=Ot(t,e,{coerce:!0,message:o});if(i[0])throw i[0];return i[1]}(t,this,e)}is(t){return function(t,e){const o=Ot(t,e);return!o[0]}(t,this)}mask(t,e){return function(t,e,o){const i=Ot(t,e,{coerce:!0,mask:!0,message:o});if(i[0])throw i[0];return i[1]}(t,this,e)}validate(t,e={}){return Ot(t,this,e)}}function Mt(t,e,o){const i=Ot(t,e,{message:o});if(i[0])throw i[0]}function Ot(t,e,o={}){const i=Pt(t,e,o),n=function(t){const{done:e,value:o}=t.next();return e?void 0:o}(i);if(n[0]){const t=new $t(n[0],(function*(){for(const t of i)t[0]&&(yield t[0])}));return[t,void 0]}return[void 0,n[1]]}function Vt(...t){const e="type"===t[0].type,o=t.map((t=>t.schema)),i=Object.assign({},...o);return e?Zt(i):Kt(i)}function Nt(t,e){return new It({type:t,schema:null,validator:e})}function Lt(){return Nt("any",(()=>!0))}function Bt(t){return new It({type:"array",schema:t,*entries(e){if(t&&Array.isArray(e))for(const[o,i]of e.entries())yield[o,i,t]},coercer:t=>Array.isArray(t)?t.slice():t,validator:t=>Array.isArray(t)||`Expected an array value, but received: ${Et(t)}`})}function Dt(){return Nt("boolean",(t=>"boolean"==typeof t))}function Ut(t){const e={},o=t.map((t=>Et(t))).join();for(const o of t)e[o]=o;return new It({type:"enums",schema:e,validator:e=>t.includes(e)||`Expected one of \`${o}\`, but received: ${Et(e)}`})}function Rt(t){const e=Et(t),o=typeof t;return new It({type:"literal",schema:"string"===o||"number"===o||"boolean"===o?t:null,validator:o=>o===t||`Expected the literal \`${e}\`, but received: ${Et(o)}`})}function Ht(){return Nt("number",(t=>"number"==typeof t&&!isNaN(t)||`Expected a number, but received: ${Et(t)}`))}function Kt(t){const e=t?Object.keys(t):[],o=Nt("never",(()=>!1));return new It({type:"object",schema:t||null,*entries(i){if(t&&At(i)){const n=new Set(Object.keys(i));for(const o of e)n.delete(o),yield[o,i[o],t[o]];for(const t of n)yield[t,i[t],o]}},validator:t=>St(t)||`Expected an object, but received: ${Et(t)}`,coercer(e,o){if(!St(e))return e;const i={...e};if(o.mask&&t)for(const e in i)void 0===t[e]&&delete i[e];return i}})}function Ft(t){return new It({...t,validator:(e,o)=>void 0===e||t.validator(e,o),refiner:(e,o)=>void 0===e||t.refiner(e,o)})}function Wt(){return Nt("string",(t=>"string"==typeof t||`Expected a string, but received: ${Et(t)}`))}function Zt(t){const e=Object.keys(t);return new It({type:"type",schema:t,*entries(o){if(At(o))for(const i of e)yield[i,o[i],t[i]]},validator:t=>St(t)||`Expected an object, but received: ${Et(t)}`,coercer:t=>St(t)?{...t}:t})}function qt(t){const e=t.map((t=>t.type)).join(" | ");return new It({type:"union",schema:null,coercer(e,o){for(const i of t){const[t,n]=i.validate(e,{coerce:!0,mask:o.mask});if(!t)return n}return e},validator(o,i){const n=[];for(const e of t){const[...t]=Pt(o,e,i),[r]=t;if(!r[0])return[];for(const[e]of t)e&&n.push(e)}return[`Expected the value to satisfy a union of \`${e}\`, but received: ${Et(o)}`,...n]}})}function Gt(t){const e=t.language||"en";return t.translationMetadata.translations[e]&&t.translationMetadata.translations[e].isRTL||!1}const Yt="unavailable",Xt="unknown",Jt=[Yt,Xt,"off"];function Qt(t){const e=(o=t.entity_id).substr(0,o.indexOf("."));var o;const i=t.state;if(["button","input_button","scene"].includes(e))return i!==Yt;if(Jt.includes(i))return!1;switch(e){case"cover":case"valve":return!["closed","closing"].includes(i);case"device_tracker":case"person":return"not_home"!==i;case"media_player":return"standby"!==i;case"vacuum":return!["idle","docked","paused"].includes(i);case"plant":return"problem"===i;default:return!0}}function te(t){return t.state!==Yt}const ee=["hs","xy","rgb","rgbw","rgbww"],oe=[...ee,"color_temp","brightness","white"],ie=(t,e)=>{const o=(()=>{const t=document.body;if(t.querySelector("action-handler"))return t.querySelector("action-handler");const e=document.createElement("action-handler");return t.appendChild(e),e})();o&&o.bind(t,e)},ne=_t(class extends mt{update(t,[e]){return ie(t.element,e),K}render(t){}});function re(t){return void 0!==t&&"none"!==t.action}const ae=Kt({user:Wt()}),se=qt([Dt(),Kt({text:Ft(Wt()),excemptions:Ft(Bt(ae))})]),le=Kt({action:Rt("url"),url_path:Wt(),confirmation:Ft(se)}),ce=Kt({action:Ut(["call-service","perform-action"]),service:Ft(Wt()),perform_action:Ft(Wt()),service_data:Ft(Kt()),data:Ft(Kt()),target:Ft(Kt({entity_id:Ft(qt([Wt(),Bt(Wt())])),device_id:Ft(qt([Wt(),Bt(Wt())])),area_id:Ft(qt([Wt(),Bt(Wt())])),floor_id:Ft(qt([Wt(),Bt(Wt())])),label_id:Ft(qt([Wt(),Bt(Wt())]))})),confirmation:Ft(se)}),de=Kt({action:Rt("navigate"),navigation_path:Wt(),confirmation:Ft(se)}),ue=Zt({action:Rt("assist"),pipeline_id:Ft(Wt()),start_listening:Ft(Dt())}),pe=Zt({action:Rt("fire-dom-event")}),he=Kt({action:Ut(["none","toggle","more-info","call-service","perform-action","url","navigate","assist"]),confirmation:Ft(se)}),_e=(me=t=>{if(t&&"object"==typeof t&&"action"in t)switch(t.action){case"call-service":case"perform-action":return ce;case"fire-dom-event":return pe;case"navigate":return de;case"url":return le;case"assist":return ue}return he},new It({type:"dynamic",schema:null,*entries(t,e){const o=me(t,e);yield*o.entries(t,e)},validator:(t,e)=>me(t,e).validator(t,e),coercer:(t,e)=>me(t,e).coercer(t,e),refiner:(t,e)=>me(t,e).refiner(t,e)}));var me;s`
  #sortable a:nth-of-type(2n) paper-icon-item {
    animation-name: keyframes1;
    animation-iteration-count: infinite;
    transform-origin: 50% 10%;
    animation-delay: -0.75s;
    animation-duration: 0.25s;
  }

  #sortable a:nth-of-type(2n-1) paper-icon-item {
    animation-name: keyframes2;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transform-origin: 30% 5%;
    animation-delay: -0.5s;
    animation-duration: 0.33s;
  }

  #sortable a {
    height: 48px;
    display: flex;
  }

  #sortable {
    outline: none;
    display: block !important;
  }

  .hidden-panel {
    display: flex !important;
  }

  .sortable-fallback {
    display: none;
  }

  .sortable-ghost {
    opacity: 0.4;
  }

  .sortable-fallback {
    opacity: 0;
  }

  @keyframes keyframes1 {
    0% {
      transform: rotate(-1deg);
      animation-timing-function: ease-in;
    }

    50% {
      transform: rotate(1.5deg);
      animation-timing-function: ease-out;
    }
  }

  @keyframes keyframes2 {
    0% {
      transform: rotate(1deg);
      animation-timing-function: ease-in;
    }

    50% {
      transform: rotate(-1.5deg);
      animation-timing-function: ease-out;
    }
  }

  .show-panel,
  .hide-panel {
    display: none;
    position: absolute;
    top: 0;
    right: 4px;
    --mdc-icon-button-size: 40px;
  }

  :host([rtl]) .show-panel {
    right: initial;
    left: 4px;
  }

  .hide-panel {
    top: 4px;
    right: 8px;
  }

  :host([rtl]) .hide-panel {
    right: initial;
    left: 8px;
  }

  :host([expanded]) .hide-panel {
    display: block;
  }

  :host([expanded]) .show-panel {
    display: inline-flex;
  }

  paper-icon-item.hidden-panel,
  paper-icon-item.hidden-panel span,
  paper-icon-item.hidden-panel ha-icon[slot="item-icon"] {
    color: var(--secondary-text-color);
    cursor: pointer;
  }
`;let ge=class extends at{constructor(){super(...arguments),this.icon=""}render(){return H`
      <div class="badge">
        <ha-icon .icon=${this.icon} />
      </div>
    `}static get styles(){return s`
      :host {
        --main-color: rgb(var(--rgb-grey));
        --icon-color: rgb(var(--rgb-white));
      }
      .badge {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
        width: var(--badge-size);
        height: var(--badge-size);
        font-size: var(--badge-size);
        border-radius: var(--badge-border-radius);
        background-color: var(--main-color);
        transition: background-color 280ms ease-in-out;
      }
      .badge ha-icon {
        --mdc-icon-size: var(--badge-icon-size);
        color: var(--icon-color);
      }
    `}};t([ut()],ge.prototype,"icon",void 0),ge=t([lt("mushroom-badge-icon")],ge);let fe=class extends at{constructor(){super(...arguments),this.title="",this.disabled=!1}render(){return H`
      <button
        type="button"
        class="button"
        .title=${this.title}
        .disabled=${this.disabled}
      >
        <slot> </slot>
      </button>
    `}static get styles(){return s`
      :host {
        --icon-color: var(--primary-text-color);
        --icon-color-disabled: rgb(var(--rgb-disabled));
        --bg-color: rgba(var(--rgb-primary-text-color), 0.05);
        --bg-color-disabled: rgba(var(--rgb-disabled), 0.2);
        height: var(--control-height);
        width: calc(var(--control-height) * var(--control-button-ratio));
        flex: none;
      }
      .button {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-radius: var(--control-border-radius);
        border: none;
        background-color: var(--bg-color);
        transition: background-color 280ms ease-in-out;
        font-size: var(--control-height);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 0;
      }
      .button:disabled {
        cursor: not-allowed;
        background-color: var(--bg-color-disabled);
      }
      .button ::slotted(*) {
        --mdc-icon-size: var(--control-icon-size);
        color: var(--icon-color);
        pointer-events: none;
      }
      .button:disabled ::slotted(*) {
        color: var(--icon-color-disabled);
      }
    `}};t([ut()],fe.prototype,"title",void 0),t([ut({type:Boolean})],fe.prototype,"disabled",void 0),fe=t([lt("mushroom-button")],fe);let ve=class extends at{render(){var t,e,o,i,n,r;return H`
      <div
        class=${gt({container:!0,horizontal:"horizontal"===(null===(t=this.appearance)||void 0===t?void 0:t.layout),"no-info":"none"===(null===(e=this.appearance)||void 0===e?void 0:e.primary_info)&&"none"===(null===(o=this.appearance)||void 0===o?void 0:o.secondary_info),"no-content":"none"===(null===(i=this.appearance)||void 0===i?void 0:i.primary_info)&&"none"===(null===(n=this.appearance)||void 0===n?void 0:n.secondary_info)&&"none"===(null===(r=this.appearance)||void 0===r?void 0:r.icon_type)})}
      >
        <slot></slot>
      </div>
    `}static get styles(){return s`
      :host {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin: calc(-1 * var(--ha-card-border-width, 1px));
      }
      .container {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        flex-grow: 0;
        box-sizing: border-box;
        justify-content: space-between;
        height: 100%;
      }
      .container.horizontal {
        flex-direction: row;
      }
      .container.horizontal > ::slotted(*) {
        flex: 1;
        min-width: 0;
      }
      .container.horizontal > ::slotted(*.actions) {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        padding-left: 0 !important;
        --control-spacing: var(--spacing);
        --control-height: var(--icon-size);
      }
      .container > ::slotted(mushroom-state-item) {
        flex: 1;
      }
      .container.horizontal.no-info > ::slotted(mushroom-state-item) {
        flex: none;
      }
      .container.no-content > ::slotted(mushroom-state-item) {
        display: none;
      }
      .container.no-content > ::slotted(.actions) {
        --control-spacing: var(--spacing);
        --control-height: var(--icon-size);
        padding: var(--control-spacing) !important;
      }
    `}};t([ut()],ve.prototype,"appearance",void 0),ve=t([lt("mushroom-card")],ve);let be=class extends at{constructor(){super(...arguments),this.picture_url=""}render(){return H`
      <div class=${gt({container:!0})}>
        <img class="picture" src=${this.picture_url} />
      </div>
    `}static get styles(){return s`
      :host {
        --main-color: var(--primary-text-color);
        --icon-color-disabled: rgb(var(--rgb-disabled));
        --shape-color: rgba(var(--rgb-primary-text-color), 0.05);
        --shape-color-disabled: rgba(var(--rgb-disabled), 0.2);
        flex: none;
      }
      .container {
        position: relative;
        width: var(--icon-size);
        height: var(--icon-size);
        flex: none;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .picture {
        width: 100%;
        height: 100%;
        border-radius: var(--icon-border-radius);
      }
    `}};t([ut()],be.prototype,"picture_url",void 0),be=t([lt("mushroom-shape-avatar")],be);const ye={pulse:"@keyframes pulse {\n        0% {\n            opacity: 1;\n        }\n        50% {\n            opacity: 0;\n        }\n        100% {\n            opacity: 1;\n        }\n    }",spin:"@keyframes spin {\n        from {\n            transform: rotate(0deg);\n        }\n        to {\n            transform: rotate(360deg);\n        }\n    }",cleaning:"@keyframes cleaning {\n        0% {\n            transform: rotate(0) translate(0);\n        }\n        5% {\n            transform: rotate(0) translate(0, -3px);\n        }\n        10% {\n            transform: rotate(0) translate(0, 1px);\n        }\n        15% {\n            transform: rotate(0) translate(0);\n        }\n\n        20% {\n            transform: rotate(30deg) translate(0);\n        }\n        25% {\n            transform: rotate(30deg) translate(0, -3px);\n        }\n        30% {\n            transform: rotate(30deg) translate(0, 1px);\n        }\n        35% {\n            transform: rotate(30deg) translate(0);\n        }\n        40% {\n            transform: rotate(0) translate(0);\n        }\n\n        45% {\n            transform: rotate(-30deg) translate(0);\n        }\n        50% {\n            transform: rotate(-30deg) translate(0, -3px);\n        }\n        55% {\n            transform: rotate(-30deg) translate(0, 1px);\n        }\n        60% {\n            transform: rotate(-30deg) translate(0);\n        }\n        70% {\n            transform: rotate(0deg) translate(0);\n        }\n        100% {\n            transform: rotate(0deg);\n        }\n    }",returning:"@keyframes returning {\n        0% {\n            transform: rotate(0);\n        }\n        25% {\n            transform: rotate(20deg);\n        }\n        50% {\n            transform: rotate(0);\n        }\n        75% {\n            transform: rotate(-20deg);\n        }\n        100% {\n            transform: rotate(0);\n        }\n    }"};s`
    ${a(ye.pulse)}
  `,s`
    ${a(ye.spin)}
  `,s`
    ${a(ye.cleaning)}
  `,s`
    ${a(ye.returning)}
  `;const ke=s`
  ${a(Object.values(ye).join("\n"))}
`;let we=class extends at{render(){return H`
      <div
        class=${gt({shape:!0,disabled:Boolean(this.disabled)})}
      >
        <slot></slot>
      </div>
    `}static get styles(){return[ke,s`
        :host {
          --icon-color: var(--primary-text-color);
          --icon-color-disabled: rgb(var(--rgb-disabled));
          --shape-color: rgba(var(--rgb-primary-text-color), 0.05);
          --shape-color-disabled: rgba(var(--rgb-disabled), 0.2);
          --shape-animation: none;
          --shape-outline-color: transparent;
          flex: none;
        }
        .shape {
          position: relative;
          width: var(--icon-size);
          height: var(--icon-size);
          font-size: var(--icon-size);
          border-radius: var(--icon-border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--shape-color);
          transition-property: background-color, box-shadow;
          transition-duration: 280ms;
          transition-timing-function: ease-out;
          animation: var(--shape-animation);
          box-shadow: 0 0 0 1px var(--shape-outline-color);
        }

        .shape ::slotted(*) {
          display: flex;
          color: var(--icon-color);
          transition: color 280ms ease-in-out;
        }
        ::slotted(ha-icon),
        ::slotted(ha-state-icon) {
          display: flex;
          line-height: 0;
          --mdc-icon-size: var(--icon-symbol-size);
        }
        .shape.disabled {
          background-color: var(--shape-color-disabled);
        }
        .shape.disabled ::slotted(*) {
          color: var(--icon-color-disabled);
        }
      `]}};t([ut({type:Boolean})],we.prototype,"disabled",void 0),we=t([lt("mushroom-shape-icon")],we);let xe=class extends at{constructor(){super(...arguments),this.multiline_secondary=!1}render(){var t;return H`
      <div class="container">
        <span class="primary">${null!==(t=this.primary)&&void 0!==t?t:""}</span>
        ${this.secondary?H`<span
              class="secondary${this.multiline_secondary?" multiline_secondary":""}"
              >${this.secondary}</span
            >`:F}
      </div>
    `}static get styles(){return s`
      .container {
        min-width: 0;
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .primary {
        font-weight: var(--card-primary-font-weight);
        font-size: var(--card-primary-font-size);
        line-height: var(--card-primary-line-height);
        color: var(--card-primary-color);
        letter-spacing: var(--card-primary-letter-spacing);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .secondary {
        font-weight: var(--card-secondary-font-weight);
        font-size: var(--card-secondary-font-size);
        line-height: var(--card-secondary-line-height);
        color: var(--card-secondary-color);
        letter-spacing: var(--card-secondary-letter-spacing);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .multiline_secondary {
        white-space: pre-wrap;
      }
    `}};t([ut({attribute:!1})],xe.prototype,"primary",void 0),t([ut({attribute:!1})],xe.prototype,"secondary",void 0),t([ut({type:Boolean})],xe.prototype,"multiline_secondary",void 0),xe=t([lt("mushroom-state-info")],xe);let ze=class extends at{render(){var t,e,o,i;return H`
      <div
        class=${gt({container:!0,vertical:"vertical"===(null===(t=this.appearance)||void 0===t?void 0:t.layout)})}
      >
        ${"none"!==(null===(e=this.appearance)||void 0===e?void 0:e.icon_type)?H`
              <div class="icon">
                <slot name="icon"></slot>
                <slot name="badge"></slot>
              </div>
            `:F}
        ${"none"!==(null===(o=this.appearance)||void 0===o?void 0:o.primary_info)||"none"!==(null===(i=this.appearance)||void 0===i?void 0:i.secondary_info)?H`
              <div class="info">
                <slot name="info"></slot>
              </div>
            `:F}
      </div>
    `}static get styles(){return s`
      :host {
        display: block;
        height: 100%;
      }
      .container {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: var(--spacing);
        gap: var(--spacing);
      }
      .icon {
        position: relative;
      }
      .icon ::slotted(*[slot="badge"]) {
        position: absolute;
        top: -3px;
        right: -3px;
      }
      :host([rtl]) .icon ::slotted(*[slot="badge"]) {
        right: initial;
        left: -3px;
      }
      .info {
        min-width: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      .container.vertical {
        flex-direction: column;
      }
      .container.vertical .info {
        text-align: center;
      }
    `}};function Ce(t){var e,o,i,n,r;return{layout:null!==(e=t.layout)&&void 0!==e?e:$e(t),fill_container:null!==(o=t.fill_container)&&void 0!==o&&o,primary_info:null!==(i=t.primary_info)&&void 0!==i?i:Se(t),secondary_info:null!==(n=t.secondary_info)&&void 0!==n?n:Ee(t),icon_type:null!==(r=t.icon_type)&&void 0!==r?r:Ae(t)}}function $e(t){return t.vertical?"vertical":"default"}function Ae(t){return t.hide_icon?"none":t.use_entity_picture||t.use_media_artwork?"entity-picture":"icon"}function Se(t){return t.hide_name?"none":"name"}function Ee(t){return t.hide_state?"none":"state"}t([ut()],ze.prototype,"appearance",void 0),ze=t([lt("mushroom-state-item")],ze);var Te={not_found:"لم يتم العثور على الكيان"},je={card:{chips:{alignment:"محاذاة"},climate:{hvac_modes:"أوضاع HVAC",show_temperature_control:"التحكم في درجة الحرارة؟"},cover:{show_buttons_control:"أزرار التحكم؟",show_position_control:"التحكم في الموقع؟",show_tilt_position_control:"التحكم في الإمالة؟"},empty:{no_config_options:"لا تحتوي هذه البطاقة على خيارات التكوين."},fan:{show_direction_control:"التحكم بالإتجاه؟",show_oscillate_control:"التحكم في التذبذب؟",show_percentage_control:"التحكم في النسبة المئوية؟"},generic:{collapsible_controls:"تصغير عناصر التحكم عند الإيقاف",color:"اللون",content_info:"المحتوى",fill_container:"ملئ الحاوية",icon_animation:"تحريك الرمز عندما يكون نشطًا؟",icon_color:"لون الأيقونة",icon_type:"نوع الأيقونة",layout:"التخطيط",primary_info:"المعلومات الأساسية",secondary_info:"المعلومات الفرعية",use_entity_picture:"استخدم صورة الكيان؟"},humidifier:{show_target_humidity_control:"التحكم في الرطوبة؟?"},light:{incompatible_controls:"قد لا يتم عرض بعض عناصر التحكم إذا كان الضوء الخاص بك لا يدعم الميزة.",show_brightness_control:"التحكم في السطوع؟",show_color_control:"التحكم في اللون؟",show_color_temp_control:"التحكم في درجة حرارة اللون؟",use_light_color:"استخدم لون فاتح"},lock:{lock:"مقفل",open:"مفتوح",unlock:"إلغاء قفل"},"media-player":{media_controls:"التحكم في الوسائط",media_controls_list:{next:"التالي",on_off:"تشغيل/إيقاف",play_pause_stop:"تشغيل/إيقاف مؤقت/إيقاف",previous:"السابق",repeat:"وضع التكرار",shuffle:"خلط"},show_volume_level:"إظهار مستوى الصوت",use_media_artwork:"استخدم صورة الوسائط",use_media_info:"استخدم معلومات الوسائط",volume_controls:"التحكم في الصوت",volume_controls_list:{volume_buttons:"أزرار الصوت",volume_mute:"كتم",volume_set:"مستوى الصوت"}},number:{display_mode:"وضع العرض",display_mode_list:{buttons:"الأزرار",default:"الافتراضي(سحب)",slider:"سحب"}},template:{badge_color:"لون الشارة",badge_icon:"أيقونة الشارة",content:"المحتوى",entity_extra:"تستخدم في القوالب والإجراءات",label:"التسمية",multiline_secondary:"متعدد الأسطر الثانوية؟",picture:"صورة (ستحل محل الأيقونة)",primary:"المعلومات الأساسية",secondary:"المعلومات الثانوية"},title:{subtitle:"العنوان الفرعي",subtitle_tap_action:"إجراء النقر على العنوان الفرعي",title:"العنوان",title_tap_action:"إجراء النقر على العنوان"},update:{show_buttons_control:"أزرار التحكم؟"},vacuum:{commands:"الاوامر",commands_list:{on_off:"تشغيل/إيقاف"}},weather:{show_conditions:"الأحوال الجوية؟",show_temperature:"الطقس؟"}},chip:{"chip-picker":{add:"أضف رقاقة",chips:"رقاقات",clear:"مسح",edit:"تعديل",select:"اختر الرقاقة",types:{action:"إجراء","alarm-control-panel":"تنبيه",back:"رجوع",conditional:"مشروط",entity:"الكيان",light:"مظيء",menu:"القائمة",quickbar:"تبويب سريع",spacer:"مساحة",template:"قالب",weather:"الطقس"}},conditional:{chip:"رقاقة"},sub_element_editor:{title:"محرر الرقاقة"}},form:{alignment_picker:{values:{center:"توسيط",default:"المحاذاة الافتراضية",end:"نهاية",justify:"مساواة",start:"بداية"}},color_picker:{values:{default:"اللون الإفتراضي"}},icon_type_picker:{values:{default:"النوع افتراضي","entity-picture":"صورة الكيان",icon:"أيقونة",none:"لا شئ"}},info_picker:{values:{default:"المعلومات الافتراضية","last-changed":"آخر تغيير","last-updated":"آخر تحديث",name:"الإسم",none:"لا شئ",state:"الحالة"}},layout_picker:{values:{default:"تخطيط افتراضي",horizontal:"تخطيط أفقي",vertical:"تخطيط رأسي"}}}},Pe={card:Te,editor:je},Ie={card:{chips:{alignment:"Подравняване"},climate:{hvac_modes:"HVAC Режими",show_temperature_control:"Контрол на температурата?"},cover:{show_buttons_control:"Контролни бутони?",show_position_control:"Контрол на позицията?",show_tilt_position_control:"Контрол на наклона?"},fan:{show_oscillate_control:"Контрол на трептенето?",show_percentage_control:"Процентов контрол?"},generic:{collapsible_controls:"Свий контролите при изключен",content_info:"Съдържание",fill_container:"Изпълване на контейнера",icon_animation:"Анимирай иконата при активен?",icon_color:"Цвят на икона",icon_type:"Тип на икона",layout:"Оформление",primary_info:"Първостепенна информация",secondary_info:"Второстепенна информация",use_entity_picture:"Използвай снимката на обекта?"},humidifier:{show_target_humidity_control:"Контрол на влажността?"},light:{incompatible_controls:"Някои опции могат да бъдат скрити при условие че осветителното тяло не поддържа фунцията.",show_brightness_control:"Контрол на яркостта?",show_color_control:"Контрол на цвета?",show_color_temp_control:"Контрол на температурата?",use_light_color:"Използвай цвета на светлината"},lock:{lock:"Заключен",open:"Отворен",unlock:"Отключен"},"media-player":{media_controls:"Контрол на Медиата",media_controls_list:{next:"Следващ",on_off:"Вкл./Изкл.",play_pause_stop:"Пусни/пауза/стоп",previous:"Предишен",repeat:"Повтаряне",shuffle:"Разбъркано"},show_volume_level:"Покажи контрола за звук",use_media_artwork:"Използвай визуалните детайли от медията",use_media_info:"Използвай информация от медията",volume_controls:"Контрол на звука",volume_controls_list:{volume_buttons:"Бутони за звук",volume_mute:"Заглуши",volume_set:"Ниво на звука"}},template:{badge_color:"Цвят на значка",badge_icon:"Икона на значка",content:"Съдържание",entity_extra:"Използван в шаблони и действия",multiline_secondary:"Много-редова второстепенна информация?",picture:"Картина (ще замени иконата)",primary:"Първостепенна информация",secondary:"Второстепенна информация"},title:{subtitle:"Подзаглавие",title:"Заглавие"},update:{show_buttons_control:"Контролни бутони?"},vacuum:{commands:"Конади",commands_list:{on_off:"Вкл./Изкл."}},weather:{show_conditions:"Условия?",show_temperature:"Температура?"}},chip:{"chip-picker":{add:"Добави чип",chips:"Чипове",clear:"Изчисти",edit:"Редактирай",select:"Избери чип",types:{action:"Действия","alarm-control-panel":"Аларма",back:"Назад",conditional:"Условни",entity:"Обект",light:"Осветление",menu:"Меню",template:"Шаблон",weather:"Време"}},conditional:{chip:"Чип"},sub_element_editor:{title:"Чип редактор"}},form:{alignment_picker:{values:{center:"Център",default:"Основно подравняване",end:"Край",justify:"Подравнен",start:"Старт"}},color_picker:{values:{default:"Основен цвят"}},icon_type_picker:{values:{default:"Основен тип","entity-picture":"Картина на обекта",icon:"Икона",none:"Липсва"}},info_picker:{values:{default:"Основна информация","last-changed":"Последно Променен","last-updated":"Последно Актуализиран",name:"Име",none:"Липсва",state:"Състояние"}},layout_picker:{values:{default:"Основно оформление",horizontal:"Хоризонтално оформление",vertical:"Вертикално оформление"}}}},Me={editor:Ie},Oe={not_found:"No s'ha trobat l'entitat"},Ve={card:{chips:{alignment:"Alineació"},climate:{hvac_modes:"Modes HVAC",show_temperature_control:"Control de temperatura?"},cover:{show_buttons_control:"Botons de control?",show_position_control:"Control de posició?",show_tilt_position_control:"Control d'inclinació?"},fan:{show_oscillate_control:"Control d'oscil·lació?",show_percentage_control:"Control de percentatge?"},generic:{collapsible_controls:"Amaga els controls en desactivar",color:"Color",content_info:"Contingut",fill_container:"Emplena el contenidor",icon_animation:"Animar icona en activar?",icon_color:"Color d'icona",icon_type:"Tipus d'icona",layout:"Distribució",primary_info:"Informació primaria",secondary_info:"Informació secundaria",use_entity_picture:"Fer servir la imatge de l'entitat?"},humidifier:{show_target_humidity_control:"Control d'humitat?"},light:{incompatible_controls:"Alguns controls no es mostraran si l'entitat no suporta eixa funció.",show_brightness_control:"Control de brillantor?",show_color_control:"Control de color?",show_color_temp_control:"Control de la temperatura del color?",use_light_color:"Fes servir el color del llum"},lock:{lock:"Bloqueja",open:"Obri",unlock:"Desbloqueja"},"media-player":{media_controls:"Controls multimèdia",media_controls_list:{next:"Pista següent",on_off:"Engegar/Apagar",play_pause_stop:"Reproduïr/Pausar/Detindre",previous:"Pista anterior",repeat:"Mode de repetició",shuffle:"Mesclar"},show_volume_level:"Mostra el nivell de volum",use_media_artwork:"Fes servir l'art multimèdia",use_media_info:"Empra la informació multimèdia",volume_controls:"Controls de volum",volume_controls_list:{volume_buttons:"Botons de volum",volume_mute:"Silenci",volume_set:"Nivell de volum"}},number:{display_mode:"Mode de visualització",display_mode_list:{buttons:"Botons",default:"Per defecte (lliscant)",slider:"Lliscant"}},template:{badge_color:"Color de la insígnia",badge_icon:"Icona de la insígnia",content:"Contingut",entity_extra:"Utilitzats en plantilles i accions",label:"Etiqueta",multiline_secondary:"Secundaria en varies línies?",picture:"Imatge (reemplaçarà la icona)",primary:"Informació primaria",secondary:"Informació secundaria"},title:{subtitle:"Subtítol",subtitle_tap_action:"Acció en tocar el subtítol",title:"Títol",title_tap_action:"Acció en tocar el títol"},update:{show_buttons_control:"Botons de control?"},vacuum:{commands:"Comandaments",commands_list:{on_off:"Engegar/Apagar"}},weather:{show_conditions:"Condicions?",show_temperature:"Temperatura?"}},chip:{"chip-picker":{add:"Afegir xip",chips:"Xips",clear:"Buidar",edit:"Editar",select:"Seleccionar chip",types:{action:"Acció","alarm-control-panel":"Alarma",back:"Tornar",conditional:"Condicional",entity:"Entitat",light:"Llum",menu:"Menú",spacer:"Espai",template:"Plantilla",weather:"Oratge"}},conditional:{chip:"Xip"},sub_element_editor:{title:"Editor de xips"}},form:{alignment_picker:{values:{center:"Centre",default:"Alineació per defecte",end:"Final",justify:"Justifica",start:"Inici"}},color_picker:{values:{default:"Color per defecte"}},icon_type_picker:{values:{default:"Tipus per defecte","entity-picture":"Entitat d'imatge",icon:"Icona",none:"Cap"}},info_picker:{values:{default:"Informació per defecte","last-changed":"Últim Canvi","last-updated":"Última Actualització",name:"Nom",none:"Cap",state:"Estat"}},layout_picker:{values:{default:"Distribució per defecte",horizontal:"Distribució horitzontal",vertical:"Distribució vertical"}}}},Ne={card:Oe,editor:Ve},Le={not_found:"Entita nebyla nalezena"},Be={card:{chips:{alignment:"Zarovnání"},climate:{hvac_modes:"Režimy HVAC",show_temperature_control:"Ovládání teploty?"},cover:{show_buttons_control:"Zobrazit ovládací tlačítka?",show_position_control:"Zobrazit ovládání polohy?",show_tilt_position_control:"Zobrazit ovládání náklonu?"},fan:{show_oscillate_control:"Ovládání oscilaceM",show_percentage_control:"Ovládání v procentech?"},generic:{collapsible_controls:"Pokud je vypnuto, skrýt ovládací prvky",content_info:"Obsah",fill_container:"Vyplnit prostor",icon_animation:"Pokud je aktivní, animovat ikonu?",icon_color:"Barva ikony",icon_type:"Typ ikony",layout:"Rozložení",primary_info:"Primární informace",secondary_info:"Sekundární informace",use_entity_picture:"Použít ikonu entity?"},humidifier:{show_target_humidity_control:"Ovládání vlhkosti?"},light:{incompatible_controls:"Některé ovládací prvky se nemusí zobrazit, pokud vaše světlo tuto funkci nepodporuje.",show_brightness_control:"Ovládání jasu?",show_color_control:"Ovládání barvy světla?",show_color_temp_control:"Ovládání teploty světla?",use_light_color:"Ikona podle barvy světla?"},lock:{lock:"Zamčeno",open:"Otevřeno",unlock:"Odemčeno"},"media-player":{media_controls:"Ovládání médií",media_controls_list:{next:"Další stopa",on_off:"Zapnout/Vypnout",play_pause_stop:"Přehrát/Pauza/Zastavit",previous:"Předchozí stopa",repeat:"Režim opakování",shuffle:"Zamíchat"},show_volume_level:"Zobrazit úroveň hlasitosti",use_media_artwork:"Použít artwork z média",use_media_info:"Použít informace z média",volume_controls:"Ovládání hlasitosti",volume_controls_list:{volume_buttons:"Tlačítka hlasitosti",volume_mute:"Ztlumit",volume_set:"Úroveň hlasitosti"}},number:{display_mode:"Režim zobrazení",display_mode_list:{buttons:"Tlačítka",default:"Výchozí (posuvník)",slider:"Posuvník"}},template:{badge_color:"Barva odznaku",badge_icon:"Ikona odznaku",content:"Obsah",entity_extra:"Použito v šablonách a akcích",multiline_secondary:"Víceřádková sekundární informace?",picture:"Obrázek (nahradí ikonu)",primary:"Primární informace",secondary:"Sekundární informace"},title:{subtitle:"Popis",subtitle_tap_action:"Akce při klepnutí na popis",title:"Nadpis",title_tap_action:"Akce při klepnutí na nadpis"},update:{show_buttons_control:"Zobrazit ovládací tlačítka?"},vacuum:{commands:"Příkazy",commands_list:{on_off:"Zapnout/Vypnout"}},weather:{show_conditions:"Zobrazit podmínky?",show_temperature:"Zobrazit teplotu?"}},chip:{"chip-picker":{add:"Přidat tlačítko",chips:"Tlačítka",clear:"Vymazat",edit:"Upravit",select:"Vybrat tlačítko",types:{action:"Akce","alarm-control-panel":"Alarm",back:"Zpět",conditional:"Podmínka",entity:"Entita",light:"Světlo",menu:"Menu",spacer:"Mezera",template:"Šablona",weather:"Počasí"}},conditional:{chip:"Tlačítko"},sub_element_editor:{title:"Editor tlačítek"}},form:{alignment_picker:{values:{center:"Na střed",default:"Výchozí zarovnání",end:"Na konec",justify:"Do bloku",start:"Na začátek"}},color_picker:{values:{default:"Výchozí barva"}},icon_type_picker:{values:{default:"Výchozí typ","entity-picture":"Ikona entity",icon:"Ikona",none:"Nic"}},info_picker:{values:{default:"Výchozí informace","last-changed":"Poslední změna","last-updated":"Poslední aktualizace",name:"Název",none:"Nic",state:"Stav"}},layout_picker:{values:{default:"Výchozí rozložení",horizontal:"Vodorovné rozložení",vertical:"Svislé rozložení"}}}},De={card:Le,editor:Be},Ue={not_found:"Enhed ikke fundet"},Re={card:{chips:{alignment:"Justering"},climate:{hvac_modes:"HVAC-tilstande",show_temperature_control:"Temperaturkontrol?"},cover:{show_buttons_control:"Betjeningsknapper?",show_position_control:"Positionskontrol?",show_tilt_position_control:"Tiltkontrol?"},fan:{show_oscillate_control:"Oscillationskontrol?",show_percentage_control:"Procentkontrol?"},generic:{collapsible_controls:"Skjul kontroller når slukket",color:"Farve",content_info:"Indhold",fill_container:"Fyld container",icon_animation:"Animér ikon når aktiv?",icon_color:"Ikon farve",icon_type:"Ikon type",layout:"Layout",primary_info:"Primær information",secondary_info:"Sekundær information",use_entity_picture:"Brug enhedsbillede?"},humidifier:{show_target_humidity_control:"Luftfugtighedskontrol?"},light:{incompatible_controls:"Nogle kontroller vises muligvis ikke, hvis dit lys ikke understøtter funktionen.",show_brightness_control:"Lysstyrkekontrol?",show_color_control:"Farvekontrol?",show_color_temp_control:"Temperaturfarvekontrol?",use_light_color:"Brug lysfarve"},lock:{lock:"Lås",open:"Åben",unlock:"Lås op"},"media-player":{media_controls:"Mediekontrol",media_controls_list:{next:"Næste nummer",on_off:"Tænd/Sluk",play_pause_stop:"Afspil/Pause/Stop",previous:"Forrige nummer",repeat:"Gentagelsestilstand",shuffle:"Bland"},show_volume_level:"Vis lydstyrke",use_media_artwork:"Brug mediebilleder",use_media_info:"Brug medieinformation",volume_controls:"Lydstyrkekontrol",volume_controls_list:{volume_buttons:"Lydstyrkeknapper",volume_mute:"Lydløs",volume_set:"Lydstyrke"}},number:{display_mode:"Visningstilstand",display_mode_list:{buttons:"Knapper",default:"Standard (slider)",slider:"Slider"}},template:{badge_color:"Badge farve",badge_icon:"Badge ikon",content:"Indhold",entity_extra:"Anvendes i skabeloner og handlinger",label:"Label",multiline_secondary:"Multi-linje sekundær?",picture:"Billede (erstatter ikonet)",primary:"Primær information",secondary:"Sekundær information"},title:{subtitle:"Undertitel",subtitle_tap_action:"Undertitel tryk handling",title:"Titel",title_tap_action:"Title tryk handling"},update:{show_buttons_control:"Betjeningsknapper?"},vacuum:{commands:"Kommandoer",commands_list:{on_off:"Slå til/fra"}},weather:{show_conditions:"Vejrforhold?",show_temperature:"Temperatur?"}},chip:{"chip-picker":{add:"Tilføj chip",chips:"Chips",clear:"Nulstil",edit:"Rediger",select:"Vælg chip",types:{action:"Handling","alarm-control-panel":"Alarm",back:"Tilbage",conditional:"Betinget",entity:"Enhed",light:"Lys",menu:"Menu",spacer:"Afstand",template:"Skabelon",weather:"Vejr"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Chip-editor"}},form:{alignment_picker:{values:{center:"Centrer",default:"Standard justering",end:"Slut",justify:"Lige margener",start:"Start"}},color_picker:{values:{default:"Standardfarve"}},icon_type_picker:{values:{default:"Standard type","entity-picture":"Enhedsbillede",icon:"Ikon",none:"Ingen"}},info_picker:{values:{default:"Standard information","last-changed":"Sidst ændret","last-updated":"Sidst opdateret",name:"Navn",none:"Ingen",state:"Status"}},layout_picker:{values:{default:"Standard layout",horizontal:"Horisontal layout",vertical:"Vertikal layout"}}}},He={card:Ue,editor:Re},Ke={not_found:"Entität nicht gefunden"},Fe={card:{chips:{alignment:"Ausrichtung"},climate:{hvac_modes:"HVAC-Modi",show_temperature_control:"Temperatursteuerung?"},cover:{show_buttons_control:"Schaltflächensteuerung?",show_position_control:"Positionssteuerung?",show_tilt_position_control:"Winkelsteuerung?"},empty:{no_config_options:"Diese Karte hat keine Optionen."},fan:{show_direction_control:"Richtungssteuerung?",show_oscillate_control:"Oszillationssteuerung?",show_percentage_control:"Prozentuale Kontrolle?"},generic:{collapsible_controls:"Schieberegler einklappen, wenn aus",color:"Farbe",content_info:"Inhalt",fill_container:"Container ausfüllen",icon_animation:"Icon animieren, wenn aktiv?",icon_color:"Icon-Farbe",icon_type:"Icon-Typ",layout:"Layout",primary_info:"Primäre Information",secondary_info:"Sekundäre Information",use_entity_picture:"Entitätsbild verwenden?"},humidifier:{show_target_humidity_control:"Luftfeuchtigkeitssteuerung?"},light:{incompatible_controls:"Einige Steuerelemente werden möglicherweise nicht angezeigt, wenn Ihr Licht diese Funktion nicht unterstützt.",show_brightness_control:"Helligkeitsregelung?",show_color_control:"Farbsteuerung?",show_color_temp_control:"Farbtemperatursteuerung?",use_light_color:"Farbsteuerung verwenden"},lock:{lock:"Verriegeln",open:"Öffnen",unlock:"Entriegeln"},"media-player":{media_controls:"Mediensteuerung",media_controls_list:{next:"Nächster Titel",on_off:"Ein/Aus",play_pause_stop:"Play/Pause/Stop",previous:"Vorheriger Titel",repeat:"Wiederholen",shuffle:"Zufällige Wiedergabe"},show_volume_level:"Lautstärke-Level anzeigen",use_media_artwork:"Mediengrafik verwenden",use_media_info:"Medieninfos verwenden",volume_controls:"Lautstärkesteuerung",volume_controls_list:{volume_buttons:"Lautstärke-Buttons",volume_mute:"Stumm",volume_set:"Lautstärke-Level"}},number:{display_mode:"Anzeigemodus",display_mode_list:{buttons:"Buttons",default:"Standard (Schieberegler)",slider:"Schieberegler"}},template:{badge_color:"Badge-Farbe",badge_icon:"Badge-Icon",content:"Inhalt",entity_extra:"Wird in Vorlagen und Aktionen verwendet",label:"Beschriftung",multiline_secondary:"Mehrzeilig sekundär?",picture:"Bild (ersetzt das Icon)",primary:"Primäre Information",secondary:"Sekundäre Information"},title:{subtitle:"Untertitel",subtitle_tap_action:"Untertitel Tipp-Aktion",title:"Titel",title_tap_action:"Titel Tipp-Aktion"},update:{show_buttons_control:"Schaltflächensteuerung?"},vacuum:{commands:"Befehle",commands_list:{on_off:"An/Ausschalten"}},weather:{show_conditions:"Bedingungen?",show_temperature:"Temperatur?"}},chip:{"chip-picker":{add:"Chip hinzufügen",chips:"Chips",clear:"Löschen",edit:"Editieren",select:"Chip auswählen",types:{action:"Aktion","alarm-control-panel":"Alarm",back:"Zurück",conditional:"Bedingung",entity:"Entität",light:"Licht",menu:"Menü",quickbar:"Quickbar",spacer:"Abstand",template:"Vorlage",weather:"Wetter"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Chip Editor"}},form:{alignment_picker:{values:{center:"Mitte",default:"Standard",end:"Ende",justify:"Ausrichten",start:"Anfang"}},color_picker:{values:{default:"Standardfarbe"}},icon_type_picker:{values:{default:"Standard-Typ","entity-picture":"Entitätsbild",icon:"Icon",none:"Keines"}},info_picker:{values:{default:"Standard-Information","last-changed":"Letzte Änderung","last-updated":"Letzte Aktualisierung",name:"Name",none:"Keine",state:"Zustand"}},layout_picker:{values:{default:"Standard-Layout",horizontal:"Horizontales Layout",vertical:"Vertikales Layout"}}}},We={card:Ke,editor:Fe},Ze={card:{chips:{alignment:"Ευθυγράμμιση"},cover:{show_buttons_control:"Έλεγχος κουμπιών;",show_position_control:"Έλεγχος θέσης;"},fan:{show_oscillate_control:"Έλεγχος ταλάντωσης;",show_percentage_control:"Έλεγχος ποσοστού;"},generic:{content_info:"Περιεχόμενο",icon_animation:"Κίνηση εικονιδίου όταν είναι ενεργό;",icon_color:"Χρώμα εικονιδίου",layout:"Διάταξη",primary_info:"Πρωτεύουσες πληροφορίες",secondary_info:"Δευτερεύουσες πληροφορίες",use_entity_picture:"Χρήση εικόνας οντότητας;"},light:{incompatible_controls:"Ορισμένα στοιχεία ελέγχου ενδέχεται να μην εμφανίζονται εάν το φωτιστικό σας δεν υποστηρίζει τη λειτουργία.",show_brightness_control:"Έλεγχος φωτεινότητας;",show_color_control:"Έλεγχος χρώματος;",show_color_temp_control:"Έλεγχος χρώματος θερμοκρασίας;",use_light_color:"Χρήση χρώματος φωτος"},"media-player":{media_controls:"Έλεγχος πολυμέσων",media_controls_list:{next:"Επόμενο κομμάτι",on_off:"Ενεργοποίηση/απενεργοποίηση",play_pause_stop:"Αναπαραγωγή/παύση/διακοπή",previous:"Προηγούμενο κομμάτι",repeat:"Λειτουργία επανάληψης",shuffle:"Τυχαία σειρά"},use_media_artwork:"Χρήση έργων τέχνης πολυμέσων",use_media_info:"Χρήση πληροφοριών πολυμέσων",volume_controls:"Χειριστήρια έντασης ήχου",volume_controls_list:{volume_buttons:"Κουμπιά έντασης ήχου",volume_mute:"Σίγαση",volume_set:"Επίπεδο έντασης ήχου"}},template:{content:"Περιεχόμενο",entity_extra:"Χρησιμοποιείται σε πρότυπα και ενέργειες",multiline_secondary:"Δευτερεύουσες πολλαπλών γραμμών;",primary:"Πρωτεύουσες πληροφορίες",secondary:"Δευτερεύουσες πληροφορίες"},title:{subtitle:"Υπότιτλος",title:"Τίτλος"},update:{show_buttons_control:"Έλεγχος κουμπιών;"},vacuum:{commands:"Εντολές"},weather:{show_conditions:"Συνθήκες;",show_temperature:"Θερμοκρασία;"}},chip:{"chip-picker":{add:"Προσθήκη chip",chips:"Chips",clear:"Καθαρισμός",edit:"Επεξεργασία",select:"Επιλογή chip",types:{action:"Ενέργεια","alarm-control-panel":"Συναγερμός",back:"Πίσω",conditional:"Υπό προϋποθέσεις",entity:"Οντότητα",light:"Φως",menu:"Μενού",template:"Πρότυπο",weather:"Καιρός"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Επεξεργαστής Chip"}},form:{alignment_picker:{values:{center:"Στοίχιση στο κέντρο",default:"Προεπιλεγμένη στοίχιση",end:"Στοίχιση δεξιά",justify:"Πλήρης στοίχιση",start:"Στοίχιση αριστερά"}},color_picker:{values:{default:"Προεπιλεγμένο χρώμα"}},info_picker:{values:{default:"Προεπιλεγμένες πληροφορίες","last-changed":"Τελευταία αλλαγή","last-updated":"Τελευταία ενημέρωση",name:"Όνομα",none:"Τίποτα",state:"Κατάσταση"}},layout_picker:{values:{default:"Προεπιλεγμένη διάταξη",horizontal:"Οριζόντια διάταξη",vertical:"Κάθετη διάταξη"}}}},qe={editor:Ze},Ge={not_found:"Entity not found"},Ye={card:{chips:{alignment:"Alignment"},climate:{hvac_modes:"HVAC Modes",show_temperature_control:"Temperature control?"},cover:{show_buttons_control:"Control buttons?",show_position_control:"Position control?",show_tilt_position_control:"Tilt control?"},empty:{no_config_options:"This card has no config options."},fan:{show_direction_control:"Direction control?",show_oscillate_control:"Oscillate control?",show_percentage_control:"Percentage control?"},generic:{collapsible_controls:"Collapse controls when off",color:"Color",content_info:"Content",fill_container:"Fill container",icon_animation:"Animate icon when active?",icon_color:"Icon color",icon_type:"Icon type",layout:"Layout",primary_info:"Primary information",secondary_info:"Secondary information",use_entity_picture:"Use entity picture?"},humidifier:{show_target_humidity_control:"Humidity control?"},light:{incompatible_controls:"Some controls may not be displayed if your light does not support the feature.",show_brightness_control:"Brightness control?",show_color_control:"Color control?",show_color_temp_control:"Color temperature control?",use_light_color:"Use light color"},lock:{lock:"Lock",open:"Open",unlock:"Unlock"},"media-player":{media_controls:"Media controls",media_controls_list:{next:"Next track",on_off:"Turn on/off",play_pause_stop:"Play/pause/stop",previous:"Previous track",repeat:"Repeat mode",shuffle:"Shuffle"},show_volume_level:"Show volume level",use_media_artwork:"Use media artwork",use_media_info:"Use media info",volume_controls:"Volume controls",volume_controls_list:{volume_buttons:"Volume buttons",volume_mute:"Mute",volume_set:"Volume level"}},number:{display_mode:"Display Mode",display_mode_list:{buttons:"Buttons",default:"Default (slider)",slider:"Slider"}},template:{badge_color:"Badge color",badge_icon:"Badge icon",content:"Content",entity_extra:"Used in templates and actions",label:"Label",multiline_secondary:"Multiline secondary?",picture:"Picture (will replace the icon)",primary:"Primary information",secondary:"Secondary information"},title:{subtitle:"Subtitle",subtitle_tap_action:"Subtitle tap action",title:"Title",title_tap_action:"Title tap action"},update:{show_buttons_control:"Control buttons?"},vacuum:{commands:"Commands",commands_list:{on_off:"Turn on/off"}},weather:{show_conditions:"Conditions?",show_temperature:"Temperature?"}},chip:{"chip-picker":{add:"Add chip",chips:"Chips",clear:"Clear",edit:"Edit",select:"Select chip",types:{action:"Action","alarm-control-panel":"Alarm",back:"Back",conditional:"Conditional",entity:"Entity",light:"Light",menu:"Menu",quickbar:"Quickbar",spacer:"Spacer",template:"Template",weather:"Weather"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Chip editor"}},form:{alignment_picker:{values:{center:"Center",default:"Default alignment",end:"End",justify:"Justify",start:"Start"}},color_picker:{values:{default:"Default color"}},icon_type_picker:{values:{default:"Default type","entity-picture":"Entity picture",icon:"Icon",none:"None"}},info_picker:{values:{default:"Default information","last-changed":"Last Changed","last-updated":"Last Updated",name:"Name",none:"None",state:"State"}},layout_picker:{values:{default:"Default layout",horizontal:"Horizontal layout",vertical:"Vertical layout"}}}},Xe={card:Ge,editor:Ye},Je={not_found:"Entidad no encontrada"},Qe={card:{chips:{alignment:"Alineación"},climate:{hvac_modes:"Modos de climatización",show_temperature_control:"¿Control de temperatura?"},cover:{show_buttons_control:"¿Botones de control?",show_position_control:"¿Control de posición?",show_tilt_position_control:"¿Control de inclinación?"},empty:{no_config_options:"Esta carta no tiene opciones de config."},fan:{show_direction_control:"¿Control de dirección?",show_oscillate_control:"¿Controlar oscilación?",show_percentage_control:"¿Controlar porcentaje?"},generic:{collapsible_controls:"Contraer controles cuando está apagado",color:"Color",content_info:"Contenido",fill_container:"Rellenar",icon_animation:"¿Icono animado cuando está activo?",icon_color:"Color de icono",icon_type:"Tipo de icono",layout:"Diseño",primary_info:"Información primaria",secondary_info:"Información secundaria",use_entity_picture:"¿Usar imagen de entidad?"},humidifier:{show_target_humidity_control:"¿Controlar humedad?"},light:{incompatible_controls:"Es posible que algunos controles no se muestren si la luz no es compatible con esta función.",show_brightness_control:"¿Controlar brillo?",show_color_control:"¿Controlar color?",show_color_temp_control:"¿Controlar temperatura del color?",use_light_color:"Usar color de la luz"},lock:{lock:"Bloquear",open:"Abrir",unlock:"Desbloquear"},"media-player":{media_controls:"Controles multimedia",media_controls_list:{next:"Pista siguiente",on_off:"Activar/desactivar",play_pause_stop:"Reproducir/pausa/parar",previous:"Pista anterior",repeat:"Modo de repetición",shuffle:"Aleatoria"},show_volume_level:"Mostrar nivel de volumen",use_media_artwork:"Usar ilustraciones multimedia",use_media_info:"Usar información multimedia",volume_controls:"Controles de volumen",volume_controls_list:{volume_buttons:"Botones de volumen",volume_mute:"Silenciar",volume_set:"Nivel de volumen"}},number:{display_mode:"Modo de visualización",display_mode_list:{buttons:"Botones",default:"Por defecto (deslizante)",slider:"Control deslizante"}},template:{badge_color:"Color del distintivo",badge_icon:"Icono del distintivo",content:"Contenido",entity_extra:"Utilizado en plantillas y acciones",label:"Etiqueta",multiline_secondary:"¿Secundaria multilínea?",picture:"Imagen (sustituirá al icono)",primary:"Información primaria",secondary:"Información secundaria"},title:{subtitle:"Subtítulo",subtitle_tap_action:"Acción al tocar el subtítulo",title:"Título",title_tap_action:"Acción al tocar el título"},update:{show_buttons_control:"¿Botones de control?"},vacuum:{commands:"Comandos",commands_list:{on_off:"Activar/desactivar"}},weather:{show_conditions:"¿Condiciones?",show_temperature:"¿Temperatura?"}},chip:{"chip-picker":{add:"Añadir chip",chips:"Chips",clear:"Limpiar",edit:"Editar",select:"Seleccionar chip",types:{action:"Acción","alarm-control-panel":"Alarma",back:"Volver",conditional:"Condicional",entity:"Entidad",light:"Luz",menu:"Menú",spacer:"Espaciador",template:"Plantilla",weather:"Clima"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Editor de chip"}},form:{alignment_picker:{values:{center:"Centrado",default:"Alineación predeterminada",end:"Final",justify:"Justificado",start:"Inicio"}},color_picker:{values:{default:"Color predeterminado"}},icon_type_picker:{values:{default:"Por defecto","entity-picture":"Imagen de entidad",icon:"Icono",none:"Ninguno"}},info_picker:{values:{default:"Información predeterminada","last-changed":"Último cambio","last-updated":"Última actualización",name:"Nombre",none:"Ninguno",state:"Estado"}},layout_picker:{values:{default:"Diseño predeterminado",horizontal:"Diseño horizontal",vertical:"Diseño vertical"}}}},to={card:Je,editor:Qe},eo={not_found:"Entiteettiä ei löytynyt"},oo={card:{chips:{alignment:"Asettelu"},climate:{hvac_modes:"HVAC-tilat",show_temperature_control:"Lämpötilan säätö?"},cover:{show_buttons_control:"Toimintopainikkeet?",show_position_control:"Sijainnin hallinta?",show_tilt_position_control:"Kallistuksen säätö?"},fan:{show_oscillate_control:"Oskillaation säätö?",show_percentage_control:"Prosentuaalinen säätö?"},generic:{collapsible_controls:"Supista säätimet ollessa pois-tilassa",color:"Väri",content_info:"Sisältö",fill_container:"Täytä alue",icon_animation:"Animoi kuvake, kun aktiivinen?",icon_color:"Ikonin väri",icon_type:"Kuvakkeen tyyppi",layout:"Asettelu",primary_info:"Ensisijaiset tiedot",secondary_info:"Toissijaiset tiedot",use_entity_picture:"Käytä kohteen kuvaa?"},humidifier:{show_target_humidity_control:"Kosteudenhallinta?"},light:{incompatible_controls:"Jotkin toiminnot eivät näy, jos valaisimesi ei tue niitä.",show_brightness_control:"Kirkkauden säätö?",show_color_control:"Värin säätö?",show_color_temp_control:"Värilämpötilan säätö?",use_light_color:"Käytä valaisimen väriä"},lock:{lock:"Lukitse",open:"Avaa",unlock:"Poista lukitus"},"media-player":{media_controls:"Toiminnot",media_controls_list:{next:"Seuraava kappale",on_off:"Päälle/pois",play_pause_stop:"Toista/keskeytä/pysäytä",previous:"Edellinen kappale",repeat:"Jatkuva toisto",shuffle:"Sekoita"},show_volume_level:"Näytä äänenvoimakkuuden hallinta",use_media_artwork:"Käytä median kuvituksia",use_media_info:"Käytä median tietoja",volume_controls:"Äänenvoimakkuuden hallinta",volume_controls_list:{volume_buttons:"Äänenvoimakkuuspainikkeet",volume_mute:"Mykistä",volume_set:"Äänenvoimakkuus"}},number:{display_mode:"Näyttötila",display_mode_list:{buttons:"Painikkeet",default:"Oletus (liukusäädin)",slider:"Liukusäädin"}},template:{badge_color:"Merkin väri",badge_icon:"Merkin kuvake",content:"Sisältö",entity_extra:"Käytetään malleissa ja toiminnoissa",label:"Nimiö",multiline_secondary:"Monirivinen toissijainen tieto?",picture:"Kuva (korvaa kuvakkeen)",primary:"Ensisijaiset tiedot",secondary:"Toissijaiset tiedot"},title:{subtitle:"Tekstitys",subtitle_tap_action:"Alaotsikon napautustoiminto",title:"Otsikko",title_tap_action:"Otsikkonapautustoiminto"},update:{show_buttons_control:"Toimintopainikkeet?"},vacuum:{commands:"Komennot",commands_list:{on_off:"Kytke päälle/pois"}},weather:{show_conditions:"Ehdot?",show_temperature:"Lämpötila?"}},chip:{"chip-picker":{add:"Lisää merkki",chips:"Merkit",clear:"Tyhjennä",edit:"Muokkaa",select:"Valitse merkki",types:{action:"Toiminto","alarm-control-panel":"Hälytys",back:"Takaisin",conditional:"Ehdollinen",entity:"Kohde",light:"Valaisin",menu:"Valikko",spacer:"Välikappale",template:"Malli",weather:"Sää"}},conditional:{chip:"Merkki"},sub_element_editor:{title:"Merkkieditori"}},form:{alignment_picker:{values:{center:"Keskitä",default:"Keskitys",end:"Loppu",justify:"Sovita",start:"Alku"}},color_picker:{values:{default:"Oletusväri"}},icon_type_picker:{values:{default:"Oletustyyppi","entity-picture":"Kohteen kuva",icon:"Kuvake",none:"Ei mitään"}},info_picker:{values:{default:"Oletustiedot","last-changed":"Viimeksi muuttunut","last-updated":"Viimeksi päivittynyt",name:"Nimi",none:"Ei mitään",state:"Tila"}},layout_picker:{values:{default:"Oletusasettelu",horizontal:"Vaakasuuntainen",vertical:"Pystysuuntainen"}}}},io={card:eo,editor:oo},no={not_found:"Entité inconnue"},ro={card:{chips:{alignment:"Alignement"},climate:{hvac_modes:"Modes du thermostat",show_temperature_control:"Contrôle de la température ?"},cover:{show_buttons_control:"Contrôle avec boutons ?",show_position_control:"Contrôle de la position ?",show_tilt_position_control:"Contrôle de l'inclinaison ?"},empty:{no_config_options:"Cette carte n'a pas de paramètres."},fan:{show_direction_control:"Contrôle de la direction ?",show_oscillate_control:"Contrôle de l'oscillation ?",show_percentage_control:"Contrôle de la vitesse ?"},generic:{collapsible_controls:"Reduire les contrôles quand éteint",color:"Couleur",content_info:"Contenu",fill_container:"Remplir le conteneur",icon_animation:"Animation de l'icône ?",icon_color:"Couleur de l'icône",icon_type:"Type d'icône",layout:"Disposition",primary_info:"Information principale",secondary_info:"Information secondaire",use_entity_picture:"Utiliser l'image de l'entité ?"},humidifier:{show_target_humidity_control:"Contrôle d'humidité ?"},light:{incompatible_controls:"Certains contrôles peuvent ne pas être affichés si votre lumière ne supporte pas la fonctionnalité.",show_brightness_control:"Contrôle de luminosité ?",show_color_control:"Contrôle de la couleur ?",show_color_temp_control:"Contrôle de la température ?",use_light_color:"Utiliser la couleur de la lumière"},lock:{lock:"Verrouiller",open:"Ouvrir",unlock:"Déverrouiller"},"media-player":{media_controls:"Contrôles du media",media_controls_list:{next:"Suivant",on_off:"Allumer/Éteindre",play_pause_stop:"Lecture/pause/stop",previous:"Précédent",repeat:"Mode de répétition",shuffle:"Lecture aléatoire"},show_volume_level:"Afficher le niveau de volume",use_media_artwork:"Utiliser l'illustration du media",use_media_info:"Utiliser les informations du media",volume_controls:"Contrôles du volume",volume_controls_list:{volume_buttons:"Bouton de volume",volume_mute:"Muet",volume_set:"Niveau de volume"}},number:{display_mode:"Mode d'affichage",display_mode_list:{buttons:"Boutons",default:"Par défaut (Curseur)",slider:"Curseur"}},template:{badge_color:"Couleur du badge",badge_icon:"Icône du badge",content:"Contenu",entity_extra:"Utilisée pour les modèles et les actions",label:"Libellé",multiline_secondary:"Information secondaire sur plusieurs lignes ?",picture:"Image (remplacera l'icône)",primary:"Information principale",secondary:"Information secondaire"},title:{subtitle:"Sous-titre",subtitle_tap_action:"Appui sur le sous-titre",title:"Titre",title_tap_action:"Appui sur le titre"},update:{show_buttons_control:"Contrôle avec boutons ?"},vacuum:{commands:"Commandes",commands_list:{on_off:"Allumer/Éteindre"}},weather:{show_conditions:"Conditions ?",show_conditons:"Conditions ?",show_temperature:"Température ?"}},chip:{"chip-picker":{add:'Ajouter une "chip"',chips:'"Chips"',clear:"Effacer",edit:"Modifier",select:'Sélectionner une "chip"',types:{action:"Action","alarm-control-panel":"Alarme",back:"Retour",conditional:"Conditionnel",entity:"Entité",light:"Lumière",menu:"Menu",spacer:"Espacement",template:"Modèle",weather:"Météo"}},conditional:{chip:"Chip"},sub_element_editor:{title:'Éditeur de "chip"'}},form:{alignment_picker:{values:{center:"Centré",default:"Alignement par défaut",end:"Fin",justify:"Justifié",start:"Début"}},color_picker:{values:{default:"Couleur par défaut"}},icon_type_picker:{values:{default:"Type par défaut","entity-picture":"Image de l'entité",icon:"Icône",none:"Aucune"}},info_picker:{values:{default:"Information par défaut","last-changed":"Dernière modification","last-updated":"Dernière mise à jour",name:"Nom",none:"Aucune",state:"État"}},layout_picker:{values:{default:"Disposition par défault",horizontal:"Disposition horizontale",vertical:"Disposition verticale"}}}},ao={card:no,editor:ro},so={not_found:"היישות לא נמצאה"},lo={card:{chips:{alignment:"יישור"},climate:{hvac_modes:"מצבי שואב אבק",show_temperature_control:"בקרת טמפרטורה?"},cover:{show_buttons_control:"הצג כפתורי שליטה?",show_position_control:"הצג פקדי מיקום?",show_tilt_position_control:"שליטה בהטייה?"},empty:{no_config_options:"לכרטיסיה זו אין אפשרויות להגדרה."},fan:{show_direction_control:"שליטה בכיוון?",show_oscillate_control:"שליטה בהתנדנדות?",show_percentage_control:"שליטה באחוז?"},generic:{collapsible_controls:"הסתר שליטה כשאר מכובה",color:"צבע",content_info:"תוכן",fill_container:"מלא גבולות",icon_animation:"הנפש צלמית אם פעיל?",icon_color:"צבע אייקון",icon_type:"סוג צלמית",layout:"סידור",primary_info:"מידע ראשי",secondary_info:"מידע מישני",use_entity_picture:"השתמש בתמונת הישות?"},humidifier:{show_target_humidity_control:"הצג פקדי לחות?"},light:{incompatible_controls:"יתכן וחלק מהכפתורים לא יופיעו אם התאורה אינה תומכת בתכונה.",show_brightness_control:"שליטה בבהירות?",show_color_control:"הצג פקד צבע?",show_color_temp_control:"הצג פקד גוון תאורה?",use_light_color:"השתמש בצבע האור"},lock:{lock:"נעל",open:"פתח",unlock:"בטל נעילה"},"media-player":{media_controls:"שליטה במדיה",media_controls_list:{next:"רצועה הבאה",on_off:"הדלק/כבה",play_pause_stop:"נגן/השהה/הפסק",previous:"רצועה קודמת",repeat:"חזרה",shuffle:"ערבב"},show_volume_level:"הצג שליטת ווליום",use_media_artwork:"השתמש באומנות מדיה",use_media_info:"השתמש במידע מדיה",volume_controls:"שליטה בווליום",volume_controls_list:{volume_buttons:"כפתורי ווליום",volume_mute:"השתק",volume_set:"רמת ווליום"}},number:{display_mode:"הגדרת מצב תצוגה",display_mode_list:{buttons:"לחצנים",default:"ברירת מחדל (סרגל גלילה)",slider:"סרגל גלילה"}},template:{badge_color:"צבע תג",badge_icon:"צלמית תג",content:"תוכן",entity_extra:"משמש בתבניות ופעולות",label:"תווית",multiline_secondary:"מידע משני בשורות?",picture:"תמונה (תחליף את הצלמית)",primary:"מידע ראשי",secondary:"מידע מישני"},title:{subtitle:"כתובית",subtitle_tap_action:"פעולה בלחיצה על כותרת משנה",title:"כותרת",title_tap_action:"פעולה בלחיצה על הכותרת"},update:{show_buttons_control:"הצג כפתורי שליטה?"},vacuum:{commands:"פקודות",commands_list:{on_off:"כיבוי/הדלקה"},icon_animation:"הנפשת אייקון"},weather:{show_conditions:"הצג תנאים?",show_temperature:"הצג טמפרטורה?"}},chip:{"chip-picker":{add:"הוסף שבב",chips:"שבבים",clear:"נקה",edit:"ערוך",select:"בחר שבב",types:{action:"פעולה","alarm-control-panel":"אזעקה",back:"חזור",conditional:"מותנה",entity:"ישות",light:"אור",menu:"תפריט",spacer:"מרווח",template:"תבנית",weather:"מזג אוויר"}},conditional:{chip:"שבב"},sub_element_editor:{title:"עורך שבב"}},form:{alignment_picker:{values:{center:"אמצע",default:"יישור ברירת מחדל",end:"סוף",justify:"מוצדק",start:"התחלה"}},color_picker:{values:{default:"צבע ברירת מחדל"}},icon_type_picker:{values:{default:"סוג ברירת מחדל","entity-picture":"תמונת יישות",icon:"צלמית",none:"ריק"}},info_picker:{values:{default:"מידע ברירת מחדל","last-changed":"שונה לאחרונה","last-updated":"עודכן לאחרונה",name:"שם",none:"ריק",state:"מצב"}},layout_picker:{values:{default:"סידור ברירת מחדל",horizontal:"סידור מאוזן",vertical:"סידור מאונך"}}}},co={card:so,editor:lo},uo={not_found:"Entitás nem található"},po={card:{chips:{alignment:"Rendezés"},climate:{hvac_modes:"HVAC mód",show_temperature_control:"Hőmérséklet vezérlő"},cover:{show_buttons_control:"Vezérlő gombok",show_position_control:"Pozíció vezérlő",show_tilt_position_control:"Dőlésszög szabályzó"},fan:{show_oscillate_control:"Oszcilláció vezérlő",show_percentage_control:"Százalékos vezérlő"},generic:{collapsible_controls:"Vezérlők összezárása kikapcsolt állapotban",content_info:"Tartalom",fill_container:"Tároló kitöltése",icon_animation:"Ikon animálása aktív állapotban",icon_color:"Ikon szín",icon_type:"Ikon típus",layout:"Elrendezés",primary_info:"Elsődleges információ",secondary_info:"Másodlagos információ",use_entity_picture:"Entitás kép használata"},humidifier:{show_target_humidity_control:"Páratartalom vezérlő"},light:{incompatible_controls:"Azok a vezérlők nem lesznek megjelenítve, amelyeket a fényforrás nem támogat.",show_brightness_control:"Fényerő vezérlő",show_color_control:"Szín vezérlő",show_color_temp_control:"Színhőmérséklet vezérlő",use_light_color:"Fény szín használata"},lock:{lock:"Zár",open:"Nyitva",unlock:"Nyit"},"media-player":{media_controls:"Média vezérlők",media_controls_list:{next:"Következő szám",on_off:"Ki/bekapcsolás",play_pause_stop:"Lejátszás/szünet/állj",previous:"Előző szám",repeat:"Ismétlés módja",shuffle:"Véletlen lejátszás"},show_volume_level:"Hangerő mutatása",use_media_artwork:"Média borító használata",use_media_info:"Média infó használata",volume_controls:"Hangerő vezérlők",volume_controls_list:{volume_buttons:"Hangerő gombok",volume_mute:"Némítás",volume_set:"Hangerő szint"}},number:{display_mode:"Megjelenítési mód",display_mode_list:{buttons:"Gombok",default:"Alepértelmezett (csúszka)",slider:"Csúszka"}},template:{badge_color:"Jelvény szín",badge_icon:"Jelvény ikon",content:"Tartalom",entity_extra:"Műveletek és sablonok használatakor",multiline_secondary:"Másodlagost több sorba?",picture:"Kép (lecseréli az ikont)",primary:"Elsődleges információ",secondary:"Másodlagos információ"},title:{subtitle:"Alcím",subtitle_tap_action:"Alcímre koppintáskor",title:"Fejléc",title_tap_action:"Fejlécre koppintáskor"},update:{show_buttons_control:"Vezérlő gombok"},vacuum:{commands:"Utasítások",commands_list:{on_off:"Ki/Bekapcsolás"}},weather:{show_conditions:"Állapotok",show_temperature:"Hőmérséklet"}},chip:{"chip-picker":{add:"Chip hozzáadása",chips:"Chip-ek",clear:"Ürítés",edit:"Szerkesztés",select:"Chip kiválasztása",types:{action:"Művelet","alarm-control-panel":"Riasztó",back:"Vissza",conditional:"Feltételes",entity:"Entitás",light:"Fényforrás",menu:"Menü",spacer:"Térköz",template:"Sablon",weather:"Időjárás"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Chip szerkesztő"}},form:{alignment_picker:{values:{center:"Közepe",default:"Alapértelmezett rendezés",end:"Vége",justify:"Sorkizárt",start:"Kezdete"}},color_picker:{values:{default:"Alapértelmezett szín"}},icon_type_picker:{values:{default:"Alapértelmezett típus","entity-picture":"Entitás kép",icon:"Ikon",none:"Egyik sem"}},info_picker:{values:{default:"Alepértelmezett információ","last-changed":"Utoljára módosítva","last-updated":"Utoljára frissítve",name:"Név",none:"Egyik sem",state:"Állapot"}},layout_picker:{values:{default:"Alapértelmezet elrendezés",horizontal:"Vízszintes elrendezés",vertical:"Függőleges elrendezés"}}}},ho={card:uo,editor:po},_o={not_found:"Entitas tidak ditemukan"},mo={card:{chips:{alignment:"Perataan"},climate:{hvac_modes:"Mode HVAC",show_temperature_control:"Kontrol suhu?"},cover:{show_buttons_control:"Tombol kontrol?",show_position_control:"Kontrol posisi?",show_tilt_position_control:"Kontrol kemiringan?"},fan:{show_oscillate_control:"Kontrol osilasi?",show_percentage_control:"Kontrol persentase?"},generic:{collapsible_controls:"Sembunyikan kontrol saat mati",color:"Warna",content_info:"Konten",fill_container:"Isi kontainer",icon_animation:"Animasikan ikon saat aktif?",icon_color:"Warna ikon",icon_type:"Tipe ikon",layout:"Tata letak",primary_info:"Informasi primer",secondary_info:"Informasi sekunder",use_entity_picture:"Gunakan gambar entitas?"},humidifier:{show_target_humidity_control:"Kontrol kelembapan?"},light:{incompatible_controls:"Beberapa kontrol mungkin tidak ditampilkan jika lampu Anda tidak mendukung fitur tersebut.",show_brightness_control:"Kontrol kecerahan?",show_color_control:"Kontrol warna?",show_color_temp_control:"Kontrol suhu warna?",use_light_color:"Gunakan warna lampu"},lock:{lock:"Kunci",open:"Buka",unlock:"Buka kunci"},"media-player":{media_controls:"Kontrol media",media_controls_list:{next:"Lagu berikutnya",on_off:"Nyalakan/Matikan",play_pause_stop:"Putar/jeda/stop",previous:"Lagu sebelumnya",repeat:"Mode pengulangan",shuffle:"Acak"},show_volume_level:"Tampilkan level volume",use_media_artwork:"Gunakan gambar seni media",use_media_info:"Gunakan info media",volume_controls:"Kontrol volume",volume_controls_list:{volume_buttons:"Tombol volume",volume_mute:"Bisukan",volume_set:"Level volume"}},number:{display_mode:"Mode Tampilan",display_mode_list:{buttons:"Tombol",default:"Bawaan (geser)",slider:"Geser"}},template:{badge_color:"Warna lencana",badge_icon:"Ikon lencana",content:"Konten",entity_extra:"Digunakan dalam templat dan tindakan",label:"Label",multiline_secondary:"Info sekunder multibaris?",picture:"Gambar (akan menggantikan ikon)",primary:"Informasi primer",secondary:"Informasi sekunder"},title:{subtitle:"Subjudul",subtitle_tap_action:"Tindakan ketuk subjudul",title:"Judul",title_tap_action:"Tindakan ketuk judul"},update:{show_buttons_control:"Tombol kontrol?"},vacuum:{commands:"Perintah",commands_list:{on_off:"Nyalakan/Matikan"}},weather:{show_conditions:"Kondisi?",show_temperature:"Suhu?"}},chip:{"chip-picker":{add:"Tambah cip",chips:"Cip",clear:"Hapus",edit:"Edit",select:"Pilih cip",types:{action:"Tindakan","alarm-control-panel":"Alarm",back:"Kembali",conditional:"Kondisional",entity:"Entitas",light:"Lampu",menu:"Menu",spacer:"Pemisah",template:"Templat",weather:"Cuaca"}},conditional:{chip:"Cip"},sub_element_editor:{title:"Editor cip"}},form:{alignment_picker:{values:{center:"Tengah",default:"Perataan bawaan",end:"Akhir",justify:"Rata kanan-kiri",start:"Awal"}},color_picker:{values:{default:"Warna bawaan"}},icon_type_picker:{values:{default:"Tipe bawaan","entity-picture":"Gambar entitas",icon:"Ikon",none:"Tidak ada"}},info_picker:{values:{default:"Informasi bawaan","last-changed":"Terakhir Diubah","last-updated":"Terakhir Diperbarui",name:"Nama",none:"Tidak ada",state:"Status"}},layout_picker:{values:{default:"Tata letak bawaan",horizontal:"Tata letak horizontal",vertical:"Tata letak vertikal"}}}},go={card:_o,editor:mo},fo={not_found:"Entità non trovata"},vo={card:{chips:{alignment:"Allineamento"},climate:{hvac_modes:"Modalità del termostato",show_temperature_control:"Controllo della temperatura?"},cover:{show_buttons_control:"Pulsanti di controllo",show_position_control:"Controllo percentuale apertura",show_tilt_position_control:"Controllo percentuale inclinazione"},fan:{show_oscillate_control:"Controllo oscillazione",show_percentage_control:"Controllo potenza"},generic:{collapsible_controls:"Nascondi i controlli quando spento",color:"Colore",content_info:"Contenuto",fill_container:"Riempi il contenitore",icon_animation:"Anima l'icona quando attiva",icon_color:"Colore dell'icona",icon_type:"Tipo icona",layout:"Disposizione",primary_info:"Informazione primaria",secondary_info:"Informazione secondaria",use_entity_picture:"Usa l'immagine dell'entità"},humidifier:{show_target_humidity_control:"Controllo umidità"},light:{incompatible_controls:"Alcuni controlli potrebbero non essere mostrati se la tua luce non li supporta.",show_brightness_control:"Controllo luminosità",show_color_control:"Controllo colore",show_color_temp_control:"Controllo temperatura",use_light_color:"Usa il colore della luce"},lock:{lock:"Blocca",open:"Aperto",unlock:"Sblocca"},"media-player":{media_controls:"Controlli media",media_controls_list:{next:"Traccia successiva",on_off:"Accendi/Spegni",play_pause_stop:"Play/Pausa/Stop",previous:"Traccia precedente",repeat:"Ciclo continuo",shuffle:"Riproduzione casuale"},show_volume_level:"Mostra volume",use_media_artwork:"Usa la copertina della sorgente",use_media_info:"Mostra le informazioni della sorgente",volume_controls:"Controlli del Volume",volume_controls_list:{volume_buttons:"Bottoni del volume",volume_mute:"Silenzia",volume_set:"Livello del volume"}},number:{display_mode:"Modalità di visualizzazione",display_mode_list:{buttons:"Pulsanti",default:"Predefinito (cursore)",slider:"Cursore"}},template:{badge_color:"Colore del badge",badge_icon:"Icona del badge",content:"Contenuto",entity_extra:"Usato in templates ed azioni",label:"Etichetta",multiline_secondary:"Abilita frasi multilinea",picture:"Immagine (sostituirà l'icona)",primary:"Informazione primaria",secondary:"Informazione secondaria"},title:{subtitle:"Sottotitolo",subtitle_tap_action:"Azione di tap sul sottotitolo",title:"Titolo",title_tap_action:"Azione di tap sul titolo"},update:{show_buttons_control:"Pulsanti di controllo"},vacuum:{commands:"Comandi",commands_list:{on_off:"Accendi/Spegni"}},weather:{show_conditions:"Condizioni",show_temperature:"Temperatura"}},chip:{"chip-picker":{add:"Aggiungi chip",chips:"Chips",clear:"Rimuovi",edit:"Modifica",select:"Seleziona chip",types:{action:"Azione","alarm-control-panel":"Allarme",back:"Pulsante indietro",conditional:"Condizione",entity:"Entità",light:"Luce",menu:"Menù",spacer:"Distanziere",template:"Modello",weather:"Meteo"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Editor di chip"}},form:{alignment_picker:{values:{center:"Centro",default:"Allineamento predefinito",end:"Fine",justify:"Giustificato",start:"Inizio"}},color_picker:{values:{default:"Colore predefinito"}},icon_type_picker:{values:{default:"Tipo predefinito","entity-picture":"Immagine dell'entità",icon:"Icona",none:"Nessuna"}},info_picker:{values:{default:"Informazione predefinita","last-changed":"Ultimo cambiamento","last-updated":"Ultimo aggiornamento",name:"Nome",none:"Nessuno",state:"Stato"}},layout_picker:{values:{default:"Disposizione predefinita",horizontal:"Disposizione orizzontale",vertical:"Disposizione verticale"}}}},bo={card:fo,editor:vo},yo={card:{chips:{alignment:"정렬"},climate:{hvac_modes:"HVAC 모드",show_temperature_control:"온도 조절 표시"},cover:{show_buttons_control:"컨트롤 버튼 표시",show_position_control:"위치 컨트롤 표시",show_tilt_position_control:"기울기 컨트롤 표시"},fan:{show_oscillate_control:"오실레이트 컨트롤",show_percentage_control:"퍼센트 컨트롤"},generic:{collapsible_controls:"꺼져있을 때 컨트롤 접기",content_info:"내용 정보",fill_container:"콘테이너 채우기",icon_animation:"활성화 시 아이콘 애니메이션 사용",icon_color:"아이콘 색",icon_type:"아이콘 타입",layout:"레이아웃",primary_info:"기본 정보",secondary_info:"보조 정보",use_entity_picture:"엔티티 사진 사용"},humidifier:{show_target_humidity_control:"습도 조절 표시"},light:{incompatible_controls:"조명이 기능을 지원하지 않는 경우 일부 컨트롤이 표시되지 않을 수 있습니다.",show_brightness_control:"밝기 컨트롤 표시",show_color_control:"색 컨트롤 표시",show_color_temp_control:"색 온도 컨트롤 표시",use_light_color:"조명 색 사용"},lock:{lock:"잠금",open:"열기",unlock:"잠금 해제"},"media-player":{media_controls:"미디어 컨트롤",media_controls_list:{next:"다음 트랙",on_off:"켜기/끄기",play_pause_stop:"재생/일시 정지/정지",previous:"이전 트랙",repeat:"반복 모드",shuffle:"섞기"},show_volume_level:"볼륨 레벨 표시",use_media_artwork:"미디어 아트워크 사용",use_media_info:"미디어 정보 사용",volume_controls:"볼륨 컨트롤",volume_controls_list:{volume_buttons:"볼륨 버튼",volume_mute:"음소거",volume_set:"볼륨 레벨"}},template:{badge_color:"뱃지 색",badge_icon:"뱃지 아이콘",content:"내용",entity_extra:"템플릿 및 작업에 사용",multiline_secondary:"Multiline secondary?",picture:"그림 (아이콘 대체)",primary:"기본 정보",secondary:"보조 정보"},title:{subtitle:"부제목",subtitle_tap_action:"부제목 탭 액션",title:"제목",title_tap_action:"제목 탭 액션"},update:{show_buttons_control:"컨트롤 버튼 표시"},vacuum:{commands:"명령어",commands_list:{on_off:"켜기/끄기"}},weather:{show_conditions:"조건 표시",show_temperature:"온도 표시"}},chip:{"chip-picker":{add:"칩 추가",chips:"칩",clear:"클리어",edit:"수정",select:"칩 선택",types:{action:"액션","alarm-control-panel":"알람",back:"이전",conditional:"Conditional",entity:"엔티티",light:"조명",menu:"메뉴",template:"템플릿",weather:"날씨"}},conditional:{chip:"칩"},sub_element_editor:{title:"칩 에디터"}},form:{alignment_picker:{values:{center:"중앙",default:"기본 정렬",end:"끝",justify:"행 정렬",start:"시작"}},color_picker:{values:{default:"기본 색"}},icon_type_picker:{values:{default:"기본 타입","entity-picture":"엔티티 사진",icon:"아이콘",none:"없음"}},info_picker:{values:{default:"기본 정보","last-changed":"마지막 변경","last-updated":"마지막 업데이트",name:"이름",none:"없음",state:"상태"}},layout_picker:{values:{default:"기본 레이아웃",horizontal:"수평 레이아웃",vertical:"수직 레이아웃"}}}},ko={editor:yo},wo={not_found:"Enhet ikke funnet"},xo={card:{chips:{alignment:"Justering"},climate:{hvac_modes:"HVAC-moduser",show_temperature_control:"Temperaturkontroll?"},cover:{show_buttons_control:"Kontrollere med knapper?",show_position_control:"Posisjonskontroll?",show_tilt_position_control:"Vippe kontroll?"},fan:{show_oscillate_control:"Oscillerende kontroll?",show_percentage_control:"Prosentvis kontroll?"},generic:{collapsible_controls:"Skjul kontroller når av",color:"Farge",content_info:"Innhold",fill_container:"Fyll beholder",icon_animation:"Animer ikon når aktivt?",icon_color:"Ikon farge",icon_type:"Ikontype",layout:"Oppsett",primary_info:"Primærinformasjon",secondary_info:"Sekundærinformasjon",use_entity_picture:"Bruk enhetsbilde?"},humidifier:{show_target_humidity_control:"Fuktighetskontroll?"},light:{incompatible_controls:"Noen kontroller vises kanskje ikke hvis lyset ditt ikke støtter denne funksjonen.",show_brightness_control:"Lysstyrkekontroll?",show_color_control:"Fargekontroll?",show_color_temp_control:"Temperatur fargekontroll?",use_light_color:"Bruk lys farge"},lock:{lock:"Lås",open:"Åpne",unlock:"Lås opp"},"media-player":{media_controls:"Media kontroller",media_controls_list:{next:"Neste spor",on_off:"Slå på/av",play_pause_stop:"Spill/pause/stopp",previous:"Forrige spor",repeat:"Gjenta",shuffle:"Bland"},show_volume_level:"Vis volumnivå",use_media_artwork:"Bruk mediabilde",use_media_info:"Bruk mediainformasjon",volume_controls:"Volumkontroller",volume_controls_list:{volume_buttons:"Volumknapper",volume_mute:"Demp",volume_set:"Volumnivå"}},number:{display_mode:"Visningsmodus",display_mode_list:{buttons:"Knapper",default:"Standard (skyveknapp)",slider:"Skyveknapp"}},template:{badge_color:"Badge farge",badge_icon:"Badge ikon",content:"Innhold",entity_extra:"Brukes i maler og handlinger",label:"Etikett",multiline_secondary:"Multilinje sekundær?",picture:"Bilde (erstatter ikonet)",primary:"Primærinformasjon",secondary:"Sekundærinformasjon"},title:{subtitle:"Undertekst",subtitle_tap_action:"Undertekst tap action",title:"Tittel",title_tap_action:"Tittel tap action"},update:{show_buttons_control:"Kontroller knapper?"},vacuum:{commands:"Kommandoer",commands_list:{on_off:"Slå på/av"}},weather:{show_conditions:"Forhold?",show_temperature:"Temperatur?"}},chip:{"chip-picker":{add:"Legg til chip",chips:"Chips",clear:"Klare",edit:"Endre",select:"Velg chip",types:{action:"Handling","alarm-control-panel":"Alarm",back:"Tilbake",conditional:"Betinget",entity:"Entitet",light:"Lys",menu:"Meny",spacer:"Mellomrom",template:"Mal",weather:"Vær"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Chip redaktør"}},form:{alignment_picker:{values:{center:"Senter",default:"Standard justering",end:"Slutt",justify:"Blokkjuster",start:"Start"}},color_picker:{values:{default:"Standard farge"}},icon_type_picker:{values:{default:"Standard type","entity-picture":"Enhetsbilde",icon:"Ikon",none:"Ingen"}},info_picker:{values:{default:"Standard informasjon","last-changed":"Sist endret","last-updated":"Sist oppdatert",name:"Navn",none:"Ingen",state:"Tilstand"}},layout_picker:{values:{default:"Standardoppsett",horizontal:"Horisontalt oppsett",vertical:"Vertikalt oppsett"}}}},zo={card:wo,editor:xo},Co={not_found:"Entiteit niet gevonden"},$o={card:{chips:{alignment:"Uitlijning"},climate:{hvac_modes:"HVAC-Modi",show_temperature_control:"Temperatuur bediening?"},cover:{show_buttons_control:"Bedieningsknoppen?",show_position_control:"Positie bediening?",show_tilt_position_control:"Kantel bediening?"},empty:{no_config_options:"Deze kaart heeft geen configuratie opties."},fan:{show_direction_control:"Richting bediening?",show_oscillate_control:"Oscillatie bediening?",show_percentage_control:"Bediening middels percentage?"},generic:{collapsible_controls:"Bedieningselementen verbergen wanneer uitgeschakeld",color:"Kleur",content_info:"Inhoud",fill_container:"Vul container",icon_animation:"Icoon animeren indien actief?",icon_color:"Icoon kleur",icon_type:"Icoon type",layout:"Lay-out",primary_info:"Primaire informatie",secondary_info:"Secundaire informatie",use_entity_picture:"Gebruik afbeelding van entiteit?"},humidifier:{show_target_humidity_control:"Vochtigheid bediening?"},light:{incompatible_controls:"Sommige bedieningselementen worden mogelijk niet weergegeven als uw lamp deze functie niet ondersteunt.",show_brightness_control:"Helderheidsbediening?",show_color_control:"Kleur bediening?",show_color_temp_control:"Kleurtemperatuur bediening?",use_light_color:"Gebruik licht kleur"},lock:{lock:"Vergrendel",open:"Open",unlock:"Ontgrendel"},"media-player":{media_controls:"Mediabediening",media_controls_list:{next:"Volgende nummer",on_off:"Zet aan/uit",play_pause_stop:"Speel/pauze/stop",previous:"Vorige nummer",repeat:"Herhalen",shuffle:"Willekeurig afspelen"},show_volume_level:"Toon volumeniveau",use_media_artwork:"Gebruik media omslag",use_media_info:"Gebruik media informatie",volume_controls:"Volumebediening",volume_controls_list:{volume_buttons:"Volume knoppen",volume_mute:"Dempen",volume_set:"Volumeniveau"}},number:{display_mode:"Weergave Modus",display_mode_list:{buttons:"Knoppen",default:"Standaard (schuifbalk)",slider:"Schuifbalk"}},template:{badge_color:"Badge kleur",badge_icon:"Badge icoon",content:"Inhoud",entity_extra:"Gebruikt in sjablonen en acties",label:"Label",multiline_secondary:"Secundaire informatie op meerdere regels tonen?",picture:"Afbeelding (zal het icoon vervangen)",primary:"Primaire informatie",secondary:"Secundaire informatie"},title:{subtitle:"Ondertitel",subtitle_tap_action:"Ondertitel tik actie",title:"Titel",title_tap_action:"Titel tik actie"},update:{show_buttons_control:"Bedieningsknoppen?"},vacuum:{commands:"Commando's",commands_list:{on_off:"Zet aan/uit"}},weather:{show_conditions:"Weersomstandigheden?",show_temperature:"Temperatuur?"}},chip:{"chip-picker":{add:"Toevoegen chip",chips:"Chips",clear:"Maak leeg",edit:"Bewerk",select:"Selecteer chip",types:{action:"Actie","alarm-control-panel":"Alarm",back:"Terug",conditional:"Voorwaardelijk",entity:"Entiteit",light:"Licht",menu:"Menu",spacer:"Afstandhouder",template:"Sjabloon",weather:"Weer"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Chip-editor"}},form:{alignment_picker:{values:{center:"Midden",default:"Standaard uitlijning",end:"Einde",justify:"Uitlijnen",start:"Begin"}},color_picker:{values:{default:"Standaard kleur"}},icon_type_picker:{values:{default:"Standaard icoon type","entity-picture":"Entiteit afbeelding",icon:"Icoon",none:"Geen"}},info_picker:{values:{default:"Standaard informatie","last-changed":"Laatst gewijzigd","last-updated":"Laatst bijgewerkt",name:"Naam",none:"Geen",state:"Staat"}},layout_picker:{values:{default:"Standaard lay-out",horizontal:"Horizontale lay-out",vertical:"Verticale lay-out"}}}},Ao={card:Co,editor:$o},So={not_found:"Nie znaleziono encji"},Eo={card:{chips:{alignment:"Wyrównanie"},climate:{hvac_modes:"Tryby urządzenia",show_temperature_control:"Sterowanie temperaturą?"},cover:{show_buttons_control:"Przyciski sterujące?",show_position_control:"Sterowanie położeniem?",show_tilt_position_control:"Sterowanie poziomem otwarcia?"},fan:{show_direction_control:"Kontrola kierunku?",show_oscillate_control:"Sterowanie oscylacją?",show_percentage_control:"Sterowanie procentowe?"},generic:{collapsible_controls:"Zwiń sterowanie, jeśli wyłączone",color:"Kolor",content_info:"Zawartość",fill_container:"Wypełnij zawartością",icon_animation:"Animować, gdy aktywny?",icon_color:"Kolor ikony",icon_type:"Typ ikony",layout:"Układ",primary_info:"Informacje główne",secondary_info:"Informacje drugorzędne",use_entity_picture:"Użyć obrazu encji?"},humidifier:{show_target_humidity_control:"Sterowanie wilgotnością?"},light:{incompatible_controls:"Niektóre funkcje są niewidoczne, jeśli światło ich nie obsługuje.",show_brightness_control:"Sterowanie jasnością?",show_color_control:"Sterowanie kolorami?",show_color_temp_control:"Sterowanie temperaturą światła?",use_light_color:"Użyj koloru światła"},lock:{lock:"Zablokuj",open:"Otwórz",unlock:"Odblokuj"},"media-player":{media_controls:"Sterowanie multimediami",media_controls_list:{next:"Następne nagranie",on_off:"Włącz/wyłącz",play_pause_stop:"Odtwórz/Pauza/Zatrzymaj",previous:"Poprzednie nagranie",repeat:"Powtarzanie",shuffle:"Losowo"},show_volume_level:"Wyświetl poziom głośności",use_media_artwork:"Użyj okładek multimediów",use_media_info:"Użyj informacji o multimediach",volume_controls:"Sterowanie głośnością",volume_controls_list:{volume_buttons:"Przyciski głośności",volume_mute:"Wycisz",volume_set:"Poziom głośności"}},number:{display_mode:"Sposób wyświetlania",display_mode_list:{buttons:"Przyciski",default:"Domyślnie (suwak)",slider:"Suwak"}},template:{badge_color:"Kolor odznaki",badge_icon:"Ikona odznaki",content:"Zawartość",entity_extra:"Używane w szablonach i akcjach",label:"Etykieta",multiline_secondary:"Drugorzędne wielowierszowe?",picture:"Obraz (zamiast ikony)",primary:"Informacje główne",secondary:"Informacje drugorzędne"},title:{subtitle:"Podtytuł",subtitle_tap_action:"Akcja na podtytule",title:"Tytuł",title_tap_action:"Akcja na tytule"},update:{show_buttons_control:"Przyciski sterujące?"},vacuum:{commands:"Polecenia",commands_list:{on_off:"Włącz/Wyłącz"}},weather:{show_conditions:"Warunki?",show_temperature:"Temperatura?"}},chip:{"chip-picker":{add:"Dodaj czip",chips:"Czipy",clear:"Wyczyść",edit:"Edytuj",select:"Wybierz czip",types:{action:"Akcja","alarm-control-panel":"Alarm",back:"Wstecz",conditional:"Warunkowy",entity:"Encja",light:"Światło",menu:"Menu",spacer:"Odstęp",template:"Szablon",weather:"Pogoda"}},conditional:{chip:"Czip"},sub_element_editor:{title:"Edytor czipów"}},form:{alignment_picker:{values:{center:"Wyśrodkowanie",default:"Wyrównanie domyślne",end:"Wyrównanie do prawej",justify:"Justowanie",start:"Wyrównanie do lewej"}},color_picker:{values:{default:"Domyślny kolor"}},icon_type_picker:{values:{default:"Domyślny typ","entity-picture":"Obraz encji",icon:"Ikona",none:"Brak"}},info_picker:{values:{default:"Domyślne informacje","last-changed":"Ostatnia zmiana","last-updated":"Ostatnia aktualizacja",name:"Nazwa",none:"Brak",state:"Stan"}},layout_picker:{values:{default:"Układ domyślny",horizontal:"Układ poziomy",vertical:"Układ pionowy"}}}},To={card:So,editor:Eo},jo={not_found:"Entidade não encontrada"},Po={card:{chips:{alignment:"Alinhamento"},climate:{hvac_modes:"Modos do HVAC",show_temperature_control:"Controle de temperatura?"},cover:{show_buttons_control:"Botões de controle?",show_position_control:"Controle de posição?",show_tilt_position_control:"Controle de inclinação?"},empty:{no_config_options:"Esse card não possui opções de configuração."},fan:{show_direction_control:"Controle de direção?",show_oscillate_control:"Controle de oscilação?",show_percentage_control:"Controle de porcentagem?"},generic:{collapsible_controls:"Recolher controles quando desligado",color:"Cor",content_info:"Conteúdo",fill_container:"Preencher espaço",icon_animation:"Animar ícone quando ativo?",icon_color:"Cor do ícone",icon_type:"Tipo do ícone",layout:"Layout",primary_info:"Informação primária",secondary_info:"Informação secundária",use_entity_picture:"Usar imagem da entidade?"},humidifier:{show_target_humidity_control:"Controle de umidade?"},light:{incompatible_controls:"Alguns controles podem não ser exibidos se sua luz não suportar o recurso.",show_brightness_control:"Controle de brilho?",show_color_control:"Controle de cor?",show_color_temp_control:"Controle de temperatura de cor?",use_light_color:"Usar cor da luz"},lock:{lock:"Bloquear",open:"Abrir",unlock:"Desbloquear"},"media-player":{media_controls:"Controles de mídia",media_controls_list:{next:"Próxima faixa",on_off:"Ligar/Desligar",play_pause_stop:"Reproduzir/pausar/parar",previous:"Faixa anterior",repeat:"Modo repetição",shuffle:"Embaralhar"},show_volume_level:"Mostrar nível de volume",use_media_artwork:"Usar arte da mídia",use_media_info:"Usar informação da mídia",volume_controls:"Controles de volume",volume_controls_list:{volume_buttons:"Botões de volume",volume_mute:"Mudo",volume_set:"Nível de volume"}},number:{display_mode:"Modo de exibição",display_mode_list:{buttons:"Botões",default:"Padrão (deslizante)",slider:"Deslizante"}},template:{badge_color:"Cor do badge",badge_icon:"Ícone do badge",content:"Conteúdo",entity_extra:"Usado em modelos e ações",label:"Label",multiline_secondary:"Multilinha secundária?",picture:"Imagem (irá substituir o ícone)",primary:"Informação primária",secondary:"Informação secundária"},title:{subtitle:"Legenda",subtitle_tap_action:"Ação de toque na legenda",title:"Título",title_tap_action:"Ação de toque no título"},update:{show_buttons_control:"Botões de controle?"},vacuum:{commands:"Comandos",commands_list:{on_off:"Ligar/Desligar"}},weather:{show_conditions:"Condições?",show_temperature:"Temperatura?"}},chip:{"chip-picker":{add:"Adicionar chip",chips:"Chips",clear:"Limpar",edit:"Editar",select:"Selecionar chip",types:{action:"Ação","alarm-control-panel":"Alarme",back:"Voltar",conditional:"Condicional",entity:"Entidade",light:"Luz",menu:"Menu",quickbar:"Barra rápida",spacer:"Espaçador",template:"Template",weather:"Clima"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Editor de chip"}},form:{alignment_picker:{values:{center:"Centro",default:"Alinhamento padrão",end:"Fim",justify:"Justificado",start:"Início"}},color_picker:{values:{default:"Cor padrão"}},icon_type_picker:{values:{default:"Tipo padrão","entity-picture":"Imagem da entidade",icon:"Ícone",none:"Nenhum"}},info_picker:{values:{default:"Informação padrão","last-changed":"Última alteração","last-updated":"Última atualização",name:"Nome",none:"Nenhum",state:"Estado"}},layout_picker:{values:{default:"Layout padrão",horizontal:"Layout horizontal",vertical:"Layout vertical"}}}},Io={card:jo,editor:Po},Mo={not_found:"Entidade não encontrada"},Oo={card:{chips:{alignment:"Alinhamento"},climate:{hvac_modes:"Modos HVAC",show_temperature_control:"Controlo de temperatura?"},cover:{show_buttons_control:"Botões de controlo?",show_position_control:"Controlo de posição?",show_tilt_position_control:"Controlo de inclinação?"},fan:{show_oscillate_control:"Controlo de oscilação?",show_percentage_control:"Controlo de percentagem?"},generic:{collapsible_controls:"Colapsar controlos quando desligado",color:"Cor",content_info:"Conteúdo",fill_container:"Preencher contentor",icon_animation:"Animar ícone quando ativo?",icon_color:"Cor do ícone",icon_type:"Tipo de ícone",layout:"Layout",primary_info:"Informação principal",secondary_info:"Informação secundária",use_entity_picture:"Usar imagem da entidade?"},humidifier:{show_target_humidity_control:"Controlo de humidade?"},light:{incompatible_controls:"Alguns controlos podem não ser exibidos se a luz não suportar a funcionalidade.",show_brightness_control:"Controlo de brilho?",show_color_control:"Controlo de cor?",show_color_temp_control:"Controlo de temperatura da cor?",use_light_color:"Usar cor da luz"},lock:{lock:"Trancar",open:"Aberto",unlock:"Destrancar"},"media-player":{media_controls:"Controlos de media",media_controls_list:{next:"Próxima faixa",on_off:"Ligar/Desligar",play_pause_stop:"Tocar/pausa/stop",previous:"Faixa anterior",repeat:"Modo repetir",shuffle:"Baralhar"},show_volume_level:"Mostrar nível do volume",use_media_artwork:"Usar arte do media",use_media_info:"Usar informação do media",volume_controls:"Controlos de volume",volume_controls_list:{volume_buttons:"Botões de volume",volume_mute:"Calar",volume_set:"Nível do volume"}},number:{display_mode:"Modo de exibição",display_mode_list:{buttons:"Botões",default:"Por defeito (slider)",slider:"Deslizador"}},template:{badge_color:"Cor do crachá",badge_icon:"Icóne do crachá",content:"Conteúdo",entity_extra:"Usado em modelos e ações",label:"Rótulo",multiline_secondary:"Secundária multilinha?",picture:"Imagem (irá substituir o ícone)",primary:"Informação principal",secondary:"Informação secundária"},title:{subtitle:"Subtítulo",subtitle_tap_action:"Ação ao tocar no subtítulo",title:"Título",title_tap_action:"Ação ao tocar no título"},update:{show_buttons_control:"Botões de controlo?"},vacuum:{commands:"Comandos",commands_list:{on_off:"Ligar/Desligar"}},weather:{show_conditions:"Condições?",show_temperature:"Temperatura?"}},chip:{"chip-picker":{add:"Adicionar ficha",chips:"Fichas",clear:"Limpar",edit:"Editar",select:"Selecionar ficha",types:{action:"Ação","alarm-control-panel":"Alarme",back:"Voltar",conditional:"Condicional",entity:"Entidade",light:"Iluminação",menu:"Menu",spacer:"Espaçador",template:"Modelo",weather:"Clima"}},conditional:{chip:"Ficha"},sub_element_editor:{title:"Editor de fichas"}},form:{alignment_picker:{values:{center:"Centrado",default:"Alinhamento predefinido",end:"Fim",justify:"Justificado",start:"Início"}},color_picker:{values:{default:"Cor padrão"}},icon_type_picker:{values:{default:"Tipo predefinido","entity-picture":"Entidade de imagem",icon:"Ícone",none:"Nenhum"}},info_picker:{values:{default:"Informações padrão","last-changed":"Última alteração","last-updated":"Última atualização",name:"Nome",none:"Nenhum",state:"Estado"}},layout_picker:{values:{default:"Layout padrão",horizontal:"Layout horizontal",vertical:"Layout vertical"}}}},Vo={card:Mo,editor:Oo},No={card:{chips:{alignment:"Aliniere"},climate:{hvac_modes:"Moduri HVAC",show_temperature_control:"Comenzi temperatură?"},cover:{show_buttons_control:"Comenzi pentru control?",show_position_control:"Comandă pentru poziție?",show_tilt_position_control:"Comandă pentru înclinare?"},fan:{icon_animation:"Animare pictograma la activare?",show_oscillate_control:"Comandă oscilație?",show_percentage_control:"Comandă procent?"},generic:{collapsible_controls:"Restrângere la dezactivare",content_info:"Conținut",fill_container:"Umplere container",icon_color:"Culoare pictogramă",icon_type:"Tip pictogramă",layout:"Aranjare",primary_info:"Informație principală",secondary_info:"Informație secundară",use_entity_picture:"Imagine?"},humidifier:{show_target_humidity_control:"Comenzi umiditate?"},light:{incompatible_controls:"Unele comenzi ar putea să nu fie afișate dacă lumina nu suportă această caracteristică.",show_brightness_control:"Comandă pentru strălucire?",show_color_control:"Comandă pentru culoare?",show_color_temp_control:"Comandă pentru temperatură de culoare?",use_light_color:"Folosește culoarea luminii"},lock:{lock:"Încuie",open:"Deschide",unlock:"Descuie"},"media-player":{media_controls:"Comenzi media",media_controls_list:{next:"Pista următoare",on_off:"Pornit/Oprit",play_pause_stop:"Redare/Pauză/Stop",previous:"Pista anterioară",repeat:"Mod repetare",shuffle:"Amestecare"},show_volume_level:"Nivel volum",use_media_artwork:"Grafică media",use_media_info:"Informații media",volume_controls:"Comenzi volum",volume_controls_list:{volume_buttons:"Comenzi volum",volume_mute:"Dezactivare sunet",volume_set:"Nivel volum"}},template:{badge_color:"Culoare insignă",badge_icon:"Pictogramă insignă",content:"Conținut",entity_extra:"Folosită în șabloane și acțiuni",multiline_secondary:"Informație secundară pe mai multe linii?",picture:"Imagine (inlocuiește pictograma)",primary:"Informație principală",secondary:"Informație secundară"},title:{subtitle:"Subtitlu",title:"Titlu"},update:{show_buttons_control:"Comenzi control?"},vacuum:{commands:"Comenzi"},weather:{show_conditions:"Condiții?",show_temperature:"Temperatură?"}},chip:{"chip-picker":{add:"Adaugă jeton",chips:"Jetoane",clear:"Șterge",edit:"Modifică",select:"Alege jeton",types:{action:"Acțiune","alarm-control-panel":"Alarmă",back:"Înapoi",conditional:"Condițional",entity:"Entitate",light:"Lumină",menu:"Meniu",template:"Șablon",weather:"Vreme"}},conditional:{chip:"Jeton"},sub_element_editor:{title:"Editor jeton"}},form:{alignment_picker:{values:{center:"Centrat",default:"Aliniere implicită",end:"Dreapta",justify:"Umplere",start:"Stânga"}},color_picker:{values:{default:"Culoare implicită"}},icon_type_picker:{values:{default:"Tip implicit","entity-picture":"Imagine",icon:"Pictogramă",none:"Niciuna"}},info_picker:{values:{default:"Informație implicită","last-changed":"Ultima modificare","last-updated":"Ultima actulizare",name:"Nume",none:"Niciuna",state:"Stare"}},layout_picker:{values:{default:"Aranjare implicită",horizontal:"Orizontală",vertical:"Verticală"}}}},Lo={editor:No},Bo={not_found:"Сущность не найдена"},Do={card:{chips:{alignment:"Выравнивание"},climate:{hvac_modes:"Режимы работы",show_temperature_control:"Управлять целевой температурой?"},cover:{show_buttons_control:"Добавить кнопки управления?",show_position_control:"Управлять позицией?",show_tilt_position_control:"Управлять наклоном?"},empty:{no_config_options:"Эта карточка не имеет опций конфигурации."},fan:{icon_animation:"Анимировать иконку когда включено?",show_direction_control:"Направление?",show_oscillate_control:"Oscillate control?",show_percentage_control:"Управлять процентами?"},generic:{collapsible_controls:"Сворачивать элементы управления при выключении",color:"Цвет",content_info:"Содержимое",fill_container:"Заполнение",icon_animation:"Анимировать иконку, когда активна?",icon_color:"Цвет иконки",icon_type:"Тип иконки",layout:"Расположение",primary_info:"Основная информация",secondary_info:"Второстепенная информация",use_entity_picture:"Использовать изображение объекта?"},humidifier:{show_target_humidity_control:"Управлять целевым уровенем влажности?"},light:{incompatible_controls:"Некоторые элементы управления могут не отображаться, если ваш светильник не поддерживает эти функции.",show_brightness_control:"Управлять яркостью?",show_color_control:"Управлять цветом?",show_color_temp_control:"Управлять цветовой температурой?",use_light_color:"Использовать текущий цвет света"},lock:{lock:"Закрыто",open:"Открыто",unlock:"Разблокировано"},"media-player":{media_controls:"Управление медиа-устройством",media_controls_list:{next:"Следующий трек",on_off:"Включение/выключение",play_pause_stop:"Воспроизведение/пауза/остановка",previous:"Предыдущий трек",repeat:"Режим повтора",shuffle:"Перемешивание"},show_volume_level:"Показать уровень громкости",use_media_artwork:"Использовать обложку с медиа-устройства",use_media_info:"Использовать информацию с медиа-устройства",volume_controls:"Регулятор громкости",volume_controls_list:{volume_buttons:"Кнопки громкости",volume_mute:"Без звука",volume_set:"Уровень громкости"}},number:{display_mode:"Режим отображения",display_mode_list:{buttons:"Кнопки",default:"Стандартно (слайдер)",slider:"Слайдер"}},template:{badge_color:"Цвет значка",badge_icon:"Иконка значка",content:"Содержимое",entity_extra:"Используется в шаблонах и действиях",label:"Ярлык",multiline_secondary:"Многострочная Второстепенная информация?",picture:"Изображение (заменить иконку)",primary:"Основная информация",secondary:"Второстепенная информация"},title:{subtitle:"Подзаголовок",subtitle_tap_action:"Действие при нажатии на подзаголовок",title:"Заголовок",title_tap_action:"Действие при нажатии на заголовок"},update:{show_buttons_control:"Кнопки управления?"},vacuum:{commands:"Команды",commands_list:{on_off:"Включить/выключить"}},weather:{show_conditions:"Условия?",show_temperature:"Температура?"}},chip:{"chip-picker":{add:"Добавить мини-карточку",chips:"Мини-карточки",clear:"Очистить",edit:"Изменить",select:"Выбрать мини-карточку",types:{action:"Действие","alarm-control-panel":"Тревога",back:"Назад",conditional:"Условия",entity:"Объект",light:"Освещение",menu:"Меню",quickbar:"Панель быстрого доступа",spacer:"Пробел",template:"Шаблон",weather:"Погода"}},conditional:{chip:"Мини-карточка"},sub_element_editor:{title:"Редактор мини-карточек"}},form:{alignment_picker:{values:{center:"По центру",default:"Выравнивание по умолчанию",end:"К концу",justify:"На всю ширину",start:"К началу"}},color_picker:{values:{default:"Цвет по умолчанию"}},icon_type_picker:{values:{default:"По умолчанию","entity-picture":"Изображение",icon:"Иконка",none:"Нет"}},info_picker:{values:{default:"По умолчанию","last-changed":"Последнее изменение","last-updated":"Последнее обновление",name:"Имя",none:"Нет",state:"Статус"}},layout_picker:{values:{default:"Расположение по умолчанию",horizontal:"Горизонтальное расположение",vertical:"Вертикальное расположение"}}}},Uo={card:Bo,editor:Do},Ro={not_found:"Entiteta ni najdena"},Ho={card:{chips:{alignment:"Poravnava"},climate:{hvac_modes:"HVAC načini",show_temperature_control:"Nadzor temperature?"},cover:{show_buttons_control:"Gumbi za upravljanje?",show_position_control:"Nadzor položaja?",show_tilt_position_control:"Nadzor nagiba?"},fan:{show_oscillate_control:"Kontrola nihanja?",show_percentage_control:"Kontrola v odstotkih?"},generic:{collapsible_controls:"Strni kontrolnike, ko so izklopljeni",content_info:"Vsebina",fill_container:"Zapolnitev prostora",icon_animation:"Animacija ikone, ko je aktivna?",icon_color:"Barva ikone",icon_type:"Vrsta ikone",layout:"Postavitev",primary_info:"Primarna informacija",secondary_info:"Sekundarna informacija",use_entity_picture:"Uporabi sliko entitete?"},humidifier:{show_target_humidity_control:"Nadzor vlažnosti?"},light:{incompatible_controls:"Nekateri kontrolniki morda ne bodo prikazani, če vaša luč ne podpira te funkcije.",show_brightness_control:"Nadzor svetlosti?",show_color_control:"Nadzor barv?",show_color_temp_control:"Nadzor temperature barve?",use_light_color:"Uporabi svetlo barvo"},lock:{lock:"Zaklepanje",open:"Odprto",unlock:"Odkleni"},"media-player":{media_controls:"Nadzor medijev",media_controls_list:{next:"Naslednja skladba",on_off:"Vklop/izklop",play_pause_stop:"Predvajaj/pavza/ustavi",previous:"Prejšnja skladba",repeat:"Ponavljajoči način",shuffle:"Naključno"},show_volume_level:"Pokaži raven glasnosti",use_media_artwork:"Uporabite medijsko umetniško delo",use_media_info:"Uporabite informacije o medijih",volume_controls:"Kontrole glasnosti",volume_controls_list:{volume_buttons:"Gumbi za glasnost",volume_mute:"Tiho",volume_set:"Raven glasnosti"}},number:{display_mode:"Način prikaza",display_mode_list:{buttons:"Gumbi",default:"Privzeto (drsnik)",slider:"Drsnik"}},template:{badge_color:"Barva značke",badge_icon:"Ikona značke",content:"Vsebina",entity_extra:"Uporablja se v predlogah in dejanjih",multiline_secondary:"Večvrstični sekundarni?",picture:"Slika (nadomestila bo ikono)",primary:"Primarna informacija",secondary:"Sekundarna informacija"},title:{subtitle:"Podnaslov",subtitle_tap_action:"Dejanje dotika podnapisov",title:"Naziv",title_tap_action:"Dejanje dotika naslova"},update:{show_buttons_control:"Gumbi za upravljanje?"},vacuum:{commands:"Ukazi",commands_list:{on_off:"Vklop/izklop"}},weather:{show_conditions:"Pogoji?",show_temperature:"Temperatura?"}},chip:{"chip-picker":{add:"Dodaj čip",chips:"Čipi",clear:"Pobriši",edit:"Uredi",select:"Izbira čipa",types:{action:"Dejanje","alarm-control-panel":"Alarm",back:"Nazaj",conditional:"Pogojno",entity:"Entiteta",light:"Svetloba",menu:"Meni",spacer:"Distančnik",template:"Predloga",weather:"Vreme"}},conditional:{chip:"Ćiš"},sub_element_editor:{title:"Urejevalnik čipov"}},form:{alignment_picker:{values:{center:"Center",default:"Privzeta poravnava",end:"Konec",justify:"Poravnava",start:"Pričetek"}},color_picker:{values:{default:"Privzeta barva"}},icon_type_picker:{values:{default:"Privzeta vrsta","entity-picture":"Slika entitete",icon:"Ikona",none:"Brez"}},info_picker:{values:{default:"Privzete informacije","last-changed":"Zadnja sprememba","last-updated":"Zadnja posodobitev",name:"Naziv",none:"Brez",state:"Stanje"}},layout_picker:{values:{default:"Privzeta postavitev",horizontal:"Horizontalna postavitev",vertical:"Vertikalna postavitev"}}}},Ko={card:Ro,editor:Ho},Fo={not_found:"Entita nenájdená"},Wo={card:{chips:{alignment:"Zarovnanie"},climate:{hvac_modes:"HVAC mód",show_temperature_control:"Ovládanie teploty?"},cover:{show_buttons_control:"Zobraziť ovládacie tlačidlá?",show_position_control:"Ovládanie pozície?",show_tilt_position_control:"Ovládanie natočenia?"},empty:{no_config_options:"Táto karta nemá žiadne možnosti konfigurácie."},fan:{show_direction_control:"Ovládanie smeru?",show_oscillate_control:"Ovládanie oscilácie?",show_percentage_control:"Ovládanie rýchlosti v percentách?"},generic:{collapsible_controls:"Skryť ovládanie v stave VYP",color:"Farba",content_info:"Obsah",fill_container:"Vyplniť priestor",icon_animation:"Animovaná ikona v stave ZAP?",icon_color:"Farba ikony",icon_type:"Typ ikony",layout:"Rozloženie",primary_info:"Základné info",secondary_info:"Doplnkové info",use_entity_picture:"Použiť obrázok entity?"},humidifier:{show_target_humidity_control:"Ovládanie vlhkosti?"},light:{incompatible_controls:"Niektoré ovládacie prvky sa nemusia zobraziť, pokiaľ ich svetlo nepodporuje.",show_brightness_control:"Ovládanie jasu?",show_color_control:"Ovládanie farby?",show_color_temp_control:"Ovládanie farebnej teploty?",use_light_color:"Použiť farbu svetla"},lock:{lock:"Zamknuté",open:"Otvorené",unlock:"Odomknuté"},"media-player":{media_controls:"Ovládanie média",media_controls_list:{next:"Ďalšia",on_off:"Zap / Vyp",play_pause_stop:"Spustiť/pauza/stop",previous:"Predchádzajúca",repeat:"Opakovať",shuffle:"Premiešať"},show_volume_level:"Zobraziť úroveň hlasitosti",use_media_artwork:"Použiť obrázok z média",use_media_info:"Použiť info o médiu",volume_controls:"Ovládanie hlasitosti",volume_controls_list:{volume_buttons:"Tlačidlá hlasitosti",volume_mute:"Stlmiť",volume_set:"Úroveň hlasitosti"}},number:{display_mode:"Režim zobrazenia",display_mode_list:{buttons:"Tlačidlá",default:"Predvolené (posúvač)",slider:"Posúvač"}},template:{badge_color:"Farba odznaku",badge_icon:"Ikona odznaku",content:"Obsah",entity_extra:"Použitá v šablónach a akciách",label:"Štítok",multiline_secondary:"Viacriadkové doplnkové info?",picture:"Obrázok (nahrádza ikonu)",primary:"Základné info",secondary:"Doplnkové info"},title:{subtitle:"Podnadpis",subtitle_tap_action:"Akcia klepnutia na titulky",title:"Nadpis",title_tap_action:"Akcia klepnutia na názov"},update:{show_buttons_control:"Zobraziť ovládacie tlačidlá?"},vacuum:{commands:"Príkazy",commands_list:{on_off:"Zapnúť/Vypnúť"}},weather:{show_conditions:"Zobraziť podmienky?",show_temperature:"Zobraziť teplotu?"}},chip:{"chip-picker":{add:"Pridať štítok",chips:"Štítky",clear:"Vymazať",edit:"Editovať",select:"Vybrať štítok",types:{action:"Akcia","alarm-control-panel":"Alarm",back:"Späť",conditional:"Podmienené",entity:"Entita",light:"Svetlo",menu:"Menu",spacer:"Medzera",template:"Šablóna",weather:"Počasie"}},conditional:{chip:"Čip"},sub_element_editor:{title:"Editor štítkov"}},form:{alignment_picker:{values:{center:"Stred",default:"Predvolené zarovnanie",end:"Koniec",justify:"Vyplniť",start:"Začiatok"}},color_picker:{values:{default:"Predvolená farba"}},icon_type_picker:{values:{default:"Predvolený typ","entity-picture":"Obrázok entity",icon:"Ikona",none:"Žiadny"}},info_picker:{values:{default:"Predvolené informácie","last-changed":"Posledná zmena","last-updated":"Posledná aktualizácia",name:"Názov",none:"Žiadna",state:"Stav"}},layout_picker:{values:{default:"Predvolené rozloženie",horizontal:"Vodorovné rozloženie",vertical:"Zvislé rozloženie"}}}},Zo={card:Fo,editor:Wo},qo={not_found:"Enheten hittades inte"},Go={card:{chips:{alignment:"Justering"},climate:{hvac_modes:"HVAC-lägen",show_temperature_control:"Temperaturkontroll?"},cover:{show_buttons_control:"Visa kontrollknappar?",show_position_control:"Visa positionskontroll?",show_tilt_position_control:"Visa lutningskontroll?"},empty:{no_config_options:"Detta kort har inga konfigurationsalternativ."},fan:{show_direction_control:"Riktningskontroll?",show_oscillate_control:"Kontroll för oscillera?",show_percentage_control:"Procentuell kontroll?"},generic:{collapsible_controls:"Dölj kontroller när enheten är av",color:"Färg",content_info:"Innehåll",fill_container:"Fyll container",icon_animation:"Animera ikonen när enheten är på?",icon_color:"Ikonens färg",icon_type:"Ikontyp",layout:"Layout",primary_info:"Primär information",secondary_info:"Sekundär information",use_entity_picture:"Använd enhetens bild?"},humidifier:{show_target_humidity_control:"Fuktkontroll?"},light:{incompatible_controls:"Kontroller som inte stöds av enheten kommer inte visas.",show_brightness_control:"Styr ljushet?",show_color_control:"Styr färg?",show_color_temp_control:"Färgtemperaturkontroll?",use_light_color:"Styr ljusets färg"},lock:{lock:"Lås",open:"Öppna",unlock:"Lås upp"},"media-player":{media_controls:"Mediakontroller",media_controls_list:{next:"Nästa spår",on_off:"Slå på/av",play_pause_stop:"Spela/pausa/stoppa",previous:"Föregående spår",repeat:"Upprepa",shuffle:"Blanda"},show_volume_level:"Volymkontroll",use_media_artwork:"Visa mediaomslag",use_media_info:"Använd media information",volume_controls:"Volymkontroller",volume_controls_list:{volume_buttons:"Volymknappar",volume_mute:"Ljud av",volume_set:"Volymnivå"}},number:{display_mode:"Visningsläge",display_mode_list:{buttons:"Knappar",default:"Standard (skjutreglage)",slider:"Skjutreglage"}},template:{badge_color:"Färg på märke",badge_icon:"Märke ikon",content:"Innehåll",entity_extra:"Används i mallar och åtgärder",label:"Etikett",multiline_secondary:"Sekundär med flera rader?",picture:"Bild (ersätter ikonen)",primary:"Primär information",secondary:"Sekundär information"},title:{subtitle:"Underrubrik",subtitle_tap_action:"Subtitle tap action",title:"Rubrik",title_tap_action:"Titel tryck åtgärd"},update:{show_buttons_control:"Visa kontrollknappar?"},vacuum:{commands:"Kommandon",commands_list:{on_off:"Slå av/på"}},weather:{show_conditions:"Förhållanden?",show_temperature:"Temperatur?"}},chip:{"chip-picker":{add:"Lägg till chip",chips:"Chips",clear:"Rensa",edit:"Redigera",select:"Välj chip",types:{action:"Åtgärd","alarm-control-panel":"Alarm",back:"Bakåt",conditional:"Villkorad",entity:"Enhet",light:"Ljus",menu:"Meny",spacer:"Avståndshållare",template:"Mall",weather:"Väder"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Chipredigerare"}},form:{alignment_picker:{values:{center:"Centrerad",default:"Standard (början)",end:"Slutet",justify:"Anpassa",start:"Starta"}},color_picker:{values:{default:"Standardfärg"}},icon_type_picker:{values:{default:"Standard typ","entity-picture":"Enhetsbild",icon:"Ikon",none:"Ingen"}},info_picker:{values:{default:"Förvald information","last-changed":"Sist ändrad","last-updated":"Sist uppdaterad",name:"Namn",none:"Ingen",state:"Status"}},layout_picker:{values:{default:"Standard",horizontal:"Horisontell",vertical:"Vertikal"}}}},Yo={card:qo,editor:Go},Xo={not_found:"Varlık bulunamadı"},Jo={card:{chips:{alignment:"Hizalama"},climate:{hvac_modes:"HVAC Modları",show_temperature_control:"Sıcaklık kontrolü?"},cover:{show_buttons_control:"Düğme kontrolleri?",show_position_control:"Pozisyon kontrolü?",show_tilt_position_control:"Eğim kontrolü?"},empty:{no_config_options:"Bu kartın yapılandırma seçeneği yok."},fan:{show_direction_control:"Yön kontrolü?",show_oscillate_control:"Salınım kontrolü?",show_percentage_control:"Yüzde kontrolü?"},generic:{collapsible_controls:"Kapalıyken kontrolleri daralt",color:"Renk",content_info:"İçerik",fill_container:"Alanı doldur",icon_animation:"Aktif olduğunda simgeyi hareket ettir?",icon_color:"Simge renki",icon_type:"İkon tipi",layout:"Düzen",primary_info:"Birinci bilgi",secondary_info:"İkinci bilgi",use_entity_picture:"Varlık resmi kullanılsın?"},humidifier:{show_target_humidity_control:"Nem kontrolü?"},light:{incompatible_controls:"Kullandığınız lamba bu özellikleri desteklemiyorsa bazı kontroller görüntülenemeyebilir.",show_brightness_control:"Parlaklık kontrolü?",show_color_control:"Renk kontrolü?",show_color_temp_control:"Renk ısısı kontrolü?",use_light_color:"Işık rengini kullan"},lock:{lock:"Kilitle",open:"Aç",unlock:"Kilidi aç"},"media-player":{media_controls:"Medya kontrolleri",media_controls_list:{next:"Sonraki parça",on_off:"Aç/Kapat",play_pause_stop:"Oynat/duraklat/durdur",previous:"Önceki parça",repeat:"Tekrarlama modu",shuffle:"Karışık çal"},show_volume_level:"Ses seviyesini göster",use_media_artwork:"Medya resimlerini kullan",use_media_info:"Medya bilgilerini kullan",volume_controls:"Ses seviyesi kontrolleri",volume_controls_list:{volume_buttons:"Ses butonları",volume_mute:"Sessize al",volume_set:"Ses seviyesi"}},number:{display_mode:"Görüntüleme Modu",display_mode_list:{buttons:"Butonlar",default:"Varsayılan (kayan)",slider:"Kayan"}},template:{badge_color:"Rozet rengi",badge_icon:"Rozet simgesi",content:"İçerik",entity_extra:"Şablonlarda ve eylemlerde kullanılsın",label:"Etiket",multiline_secondary:"İkinci bilgi çok satır olsun?",picture:"Resim (ikonun yerine geçecek)",primary:"Birinci bilgi",secondary:"İkinci bilgi"},title:{subtitle:"Altbaşlık",subtitle_tap_action:"Dokunma eylemi alt başlığı",title:"Başlık",title_tap_action:"Dokunma eylemi başlığı"},update:{show_buttons_control:"Düğme kontrolü?"},vacuum:{commands:"Komutlar",commands_list:{on_off:"Aç/Kapat"}},weather:{show_conditions:"Hava koşulu?",show_temperature:"Sıcaklık?"}},chip:{"chip-picker":{add:"Chip ekle",chips:"Chipler",clear:"Temizle",edit:"Düzenle",select:"Chip seç",types:{action:"Eylem","alarm-control-panel":"Alarm",back:"Geri",conditional:"Koşullu",entity:"Varlık",light:"Işık",menu:"Menü",spacer:"Boşluk",template:"Şablon",weather:"Hava Durumu"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Chip düzenleyici"}},form:{alignment_picker:{values:{center:"Ortala",default:"Varsayılan hizalama",end:"Sağa yasla",justify:"İki yana yasla",start:"Sola yasla"}},color_picker:{values:{default:"Varsayılan renk"}},icon_type_picker:{values:{default:"Varsayılan tip","entity-picture":"Varlık resmi",icon:"Simge",none:"Hiçbiri"}},info_picker:{values:{default:"Varsayılan bilgi","last-changed":"Son Değişim","last-updated":"Son Güncelleme",name:"İsim",none:"None",state:"Durum"}},layout_picker:{values:{default:"Varsayılan düzen",horizontal:"Yatay düzen",vertical:"Dikey düzen"}}}},Qo={card:Xo,editor:Jo},ti={not_found:"Сутність не знайдено"},ei={card:{chips:{alignment:"Вирівнювання"},climate:{hvac_modes:"Режими",show_temperature_control:"Керування температурою?"},cover:{show_buttons_control:"Кнопки керування?",show_position_control:"Керування позицією?",show_tilt_position_control:"Керування нахилом?"},fan:{show_oscillate_control:"Керування повротом?",show_percentage_control:"Керування швидкістю?"},generic:{collapsible_controls:"Приховувати елементи керування коли вимкнено?",content_info:"Вміст",fill_container:"Заповнити контейнер",icon_animation:"Анімувати іконку при активації?",icon_color:"Колір іконки",icon_type:"Тип іконки",layout:"Розташування",primary_info:"Головна інформація",secondary_info:"Додаткова інформація",use_entity_picture:"Використовувати зображення сутності?"},humidifier:{show_target_humidity_control:"Керування вологістю?"},light:{incompatible_controls:"Деякі елементи керування можуть не відображатись якщо ваш пристрій не підтримує цю функцію.",show_brightness_control:"Контроль яскравості?",show_color_control:"Керування кольором світла?",show_color_temp_control:"Керування температурою світла?",use_light_color:"Використовувати колір світла"},lock:{lock:"Зачинити",open:"Відкрити",unlock:"Відчинити"},"media-player":{media_controls:"Керування медіа",media_controls_list:{next:"Наступний трек",on_off:"Увімкнути/Вимкнути",play_pause_stop:"Відтворити/пауза/стоп",previous:"Попередній трек",repeat:"Режим повторення",shuffle:"Перемішати"},show_volume_level:"Показати рівень гучності",use_media_artwork:"Використовувати зображення медіа",use_media_info:"Використовувати інформацію медіа",volume_controls:"Елементи керування гучністю",volume_controls_list:{volume_buttons:"Кнопки гучності",volume_mute:"Вимк. звук",volume_set:"Рівень гучності"}},number:{display_mode:"Відображати режим",display_mode_list:{buttons:"Кнопки",default:"За замовчуванням (повзунок)",slider:"Повзунок"}},template:{badge_color:"Колір значка",badge_icon:"Іконка значка",content:"Вміст",entity_extra:"Використовується в шаблонах та діях",multiline_secondary:"Багаторядкова додаткова інформація?",picture:"Зображення (замінить іконку)",primary:"Головна інформація",secondary:"Додаткова інформація"},title:{subtitle:"Підзаголовок",subtitle_tap_action:"Дія при дотику до підзаголовку",title:"Заголовок",title_tap_action:"Дія при дотику до заголовку"},update:{show_buttons_control:"Кнопки керування?"},vacuum:{commands:"Команди",commands_list:{on_off:"Увімкнути/Вимкнути"}},weather:{show_conditions:"Умови?",show_temperature:"Температура?"}},chip:{"chip-picker":{add:"Додати міні-картку",chips:"Міні-картки",clear:"Очистити",edit:"Редагувати",select:"Обрати міні-картку",types:{action:"Дія","alarm-control-panel":"Сигналізація",back:"Назад",conditional:"Умовна",entity:"Сутність",light:"Світло",menu:"Меню",spacer:"Порожнє місце",template:"Вручну",weather:"Погода"}},conditional:{chip:"Міні-картка"},sub_element_editor:{title:"Редактор міні-карток"}},form:{alignment_picker:{values:{center:"По центру",default:"Вирівнювання за замовчуванням",end:"В кінці",justify:"Вирівняти",start:"На початку"}},color_picker:{values:{default:"Колір за замовчуванням"}},icon_type_picker:{values:{default:"За замовчуванням","entity-picture":"Зображення сутності",icon:"Іконка",none:"Нічого"}},info_picker:{values:{default:"Інформація за замовчуванням","last-changed":"Востаннє змінено","last-updated":"Востаннє оновлено",name:"Назва",none:"Нічого",state:"Стан"}},layout_picker:{values:{default:"Розташування за замовчуванням",horizontal:"Горизонтальне розташування",vertical:"Вертикальне розташування"}}}},oi={card:ti,editor:ei},ii={not_found:"Không tìm thấy thực thể"},ni={card:{chips:{alignment:"Căn chỉnh"},climate:{hvac_modes:"Chế độ điều hòa",show_temperature_control:"Điều khiển nhiệt độ?"},cover:{show_buttons_control:"Điều khiển nút bấm?",show_position_control:"Điều khiển vị trí?",show_tilt_position_control:"Điều khiển độ nghiêng?"},fan:{show_oscillate_control:"Điều khiển xoay?",show_percentage_control:"Điều khiển dạng phần trăm?"},generic:{collapsible_controls:"Thu nhỏ điều kiển khi tắt",content_info:"Nội dung",fill_container:"Làm đầy ô chứa",icon_animation:"Biểu tượng chuyển động khi kích hoạt?",icon_color:"Màu biểu tượng",icon_type:"Kiểu biểu tượng",layout:"Bố cục",primary_info:"Thông tin chính",secondary_info:"Thông tin phụ",use_entity_picture:"Dùng ảnh của thực thể?"},humidifier:{show_target_humidity_control:"Điều khiển độ ẩm?"},light:{incompatible_controls:"Một số điều khiển sẽ không được hiển thị nếu đèn của bạn không hỗ trợ tính năng đó.",show_brightness_control:"Điều khiển độ sáng?",show_color_control:"Điều khiển màu sắc?",show_color_temp_control:"Điều khiển nhiệt độ màu?",use_light_color:"Dùng màu đèn"},lock:{lock:"Khóa",open:"Mở",unlock:"Mở khóa"},"media-player":{media_controls:"Điều khiển đa phương tiện",media_controls_list:{next:"Bài tiếp theo",on_off:"Bật/tắt",play_pause_stop:"Phát/tạm dừng/dừng",previous:"Bài trước",repeat:"Chế độ lặp lại",shuffle:"Xáo trộn"},show_volume_level:"Hiện mức âm lượng",use_media_artwork:"Dùng ảnh đa phương tiện",use_media_info:"Dùng thông tin đa phương tiện",volume_controls:"Điều khiển âm lượng",volume_controls_list:{volume_buttons:"Nút âm lượng",volume_mute:"Im lặng",volume_set:"Mức âm lượng"}},number:{display_mode:"Chế độ hiển thị",display_mode_list:{buttons:"Nút",default:"Mặc định (thanh trượt)",slider:"Thanh trượt"}},template:{badge_color:"Màu huy hiệu",badge_icon:"Biểu tượng huy hiệu",content:"Nội dung",entity_extra:"Được sử dụng trong bản mẫu và hành động",multiline_secondary:"Nhiều dòng thông tin phụ?",picture:"Ảnh (thay cho biểu tượng)",primary:"Thông tin chính",secondary:"Thông tin phụ"},title:{subtitle:"Phụ đề",subtitle_tap_action:"Hành động khi nhấp phụ đề",title:"Tiêu đề",title_tap_action:"Hành động khi nhấp tiêu đề"},update:{show_buttons_control:"Điều khiển nút bấm?"},vacuum:{commands:"Mệnh lệnh",commands_list:{on_off:"Bật/tắt"}},weather:{show_conditions:"Điều kiện?",show_temperature:"Nhiệt độ?"}},chip:{"chip-picker":{add:"Thêm phỉnh",chips:"Phỉnh",clear:"Tẩy trống",edit:"Chỉnh sửa",select:"Chọn phỉnh",types:{action:"Hành động","alarm-control-panel":"Báo động",back:"Quay về",conditional:"Điều kiện",entity:"Thực thể",light:"Đèn",menu:"Trình đơn",spacer:"Ngăn cách",template:"Mẫu",weather:"Thời tiết"}},conditional:{chip:"Phỉnh"},sub_element_editor:{title:"Trình soạn phỉnh"}},form:{alignment_picker:{values:{center:"Căn giữa",default:"Căn chỉnh mặc định",end:"Căn cuối",justify:"Căn hai bên",start:"Căn đầu"}},color_picker:{values:{default:"Màu mặc định"}},icon_type_picker:{values:{default:"Kiểu mặc định","entity-picture":"Ảnh thực thể",icon:"Biểu tượng",none:"Không có"}},info_picker:{values:{default:"Thông tin mặc định","last-changed":"Lần thay đổi cuối","last-updated":"Lần cập nhật cuối",name:"Tên",none:"Không có",state:"Trạng thái"}},layout_picker:{values:{default:"Bố cục mặc định",horizontal:"Bố cục ngang",vertical:"Bố cục dọc"}}}},ri={card:ii,editor:ni},ai={not_found:"未找到实体"},si={card:{chips:{alignment:"对齐"},climate:{hvac_modes:"空调模式",show_temperature_control:"温度控制?"},cover:{show_buttons_control:"按钮控制?",show_position_control:"位置控制?",show_tilt_position_control:"角度控制?"},empty:{no_config_options:"这个卡片没有可配置的选项。"},fan:{show_direction_control:"方向控制？",show_oscillate_control:"摆动控制?",show_percentage_control:"百分比控制?"},generic:{collapsible_controls:"关闭时隐藏控制器",color:"颜色",content_info:"内容",fill_container:"填满容器",icon_animation:"激活时使用动态图标?",icon_color:"图标颜色",icon_type:"图标类型",layout:"布局",primary_info:"首要信息",secondary_info:"次要信息",use_entity_picture:"使用实体图片?"},humidifier:{show_target_humidity_control:"湿度控制?"},light:{incompatible_controls:"设备不支持的控制器将不会显示。",show_brightness_control:"亮度控制?",show_color_control:"颜色控制?",show_color_temp_control:"色温控制?",use_light_color:"使用灯光颜色"},lock:{lock:"锁定",open:"打开",unlock:"解锁"},"media-player":{media_controls:"媒体控制",media_controls_list:{next:"下一曲",on_off:"开启/关闭",play_pause_stop:"播放/暂停/停止",previous:"上一曲",repeat:"循环模式",shuffle:"随机"},show_volume_level:"显示音量大小",use_media_artwork:"使用媒体插图",use_media_info:"使用媒体信息",volume_controls:"音量控制",volume_controls_list:{volume_buttons:"音量按钮",volume_mute:"静音",volume_set:"音量等级"}},number:{display_mode:"显示模式",display_mode_list:{buttons:"按钮",default:"默认 (滑块)",slider:"滑块"}},template:{badge_color:"徽标颜色",badge_icon:"徽标图标",content:"内容",entity_extra:"用于模板和动作",label:"标签",multiline_secondary:"多行次要信息?",picture:"图片 (将会替代图标)",primary:"首要信息",secondary:"次要信息"},title:{subtitle:"子标题",subtitle_tap_action:"子标题点击动作",title:"标题",title_tap_action:"标题点击动作"},update:{show_buttons_control:"控制按钮?"},vacuum:{commands:"命令",commands_list:{on_off:"开/关"}},weather:{show_conditions:"条件?",show_temperature:"温度?"}},chip:{"chip-picker":{add:"添加 chip",chips:"Chips",clear:"清除",edit:"编辑",select:"选择 chip",types:{action:"动作","alarm-control-panel":"警戒控制台",back:"返回",conditional:"条件显示",entity:"实体",light:"灯光",menu:"菜单",spacer:"占位符",template:"模板",weather:"天气"}},conditional:{chip:"Chip"},sub_element_editor:{title:"Chip 编辑"}},form:{alignment_picker:{values:{center:"居中对齐",default:"默认",end:"右对齐",justify:"两端对齐",start:"左对齐"}},color_picker:{values:{default:"默认颜色"}},icon_type_picker:{values:{default:"默认类型","entity-picture":"实体图片",icon:"图标",none:"无"}},info_picker:{values:{default:"默认信息","last-changed":"变更时间","last-updated":"更新时间",name:"名称",none:"无",state:"状态"}},layout_picker:{values:{default:"默认布局",horizontal:"水平布局",vertical:"垂直布局"}}}},li={card:ai,editor:si},ci={not_found:"未找到實體"},di={card:{chips:{alignment:"對齊"},climate:{hvac_modes:"空調模式",show_temperature_control:"溫度控制?"},cover:{show_buttons_control:"按鈕控制?",show_position_control:"位置控制?",show_tilt_position_control:"角度控制?"},fan:{show_oscillate_control:"擺頭控制?",show_percentage_control:"百分比控制?"},generic:{collapsible_controls:"關閉時隱藏控制項",color:"顏色",content_info:"內容",fill_container:"填滿容器",icon_animation:"啟動時使用動態圖示?",icon_color:"圖示顏色",icon_type:"圖示樣式",layout:"佈局",primary_info:"主要訊息",secondary_info:"次要訊息",use_entity_picture:"使用實體圖片?"},humidifier:{show_target_humidity_control:"溼度控制?"},light:{incompatible_controls:"不會顯示裝置不支援的控制。",show_brightness_control:"亮度控制?",show_color_control:"色彩控制?",show_color_temp_control:"色溫控制?",use_light_color:"使用燈光顏色"},lock:{lock:"上鎖",open:"打開",unlock:"解鎖"},"media-player":{media_controls:"媒體控制",media_controls_list:{next:"下一首",on_off:"開啟、關閉",play_pause_stop:"播放、暫停、停止",previous:"上一首",repeat:"重複播放",shuffle:"隨機播放"},show_volume_level:"顯示音量大小",use_media_artwork:"使用媒體插圖",use_media_info:"使用媒體資訊",volume_controls:"音量控制",volume_controls_list:{volume_buttons:"音量按鈕",volume_mute:"靜音",volume_set:"音量等級"}},number:{display_mode:"顯示模式",display_mode_list:{buttons:"按鈕",default:"預設 (滑桿)",slider:"滑桿"}},template:{badge_color:"角標顏色",badge_icon:"角標圖示",content:"內容",entity_extra:"用於模板與動作",label:"標籤",multiline_secondary:"多行次要訊息?",picture:"圖片 (將會取代圖示)",primary:"主要訊息",secondary:"次要訊息"},title:{subtitle:"副標題",subtitle_tap_action:"副標題點擊動作",title:"標題",title_tap_action:"標題點擊動作"},update:{show_buttons_control:"按鈕控制?"},vacuum:{commands:"指令",commands_list:{on_off:"開啟、關閉"}},weather:{show_conditions:"狀況?",show_temperature:"溫度?"}},chip:{"chip-picker":{add:"新增小卡片",chips:"小卡片",clear:"清除",edit:"編輯",select:"選擇小卡片",types:{action:"動作","alarm-control-panel":"警報器控制",back:"返回",conditional:"條件",entity:"實體",light:"燈光",menu:"選單",spacer:"佔位符",template:"模板",weather:"天氣"}},conditional:{chip:"小卡片"},sub_element_editor:{title:"小卡片編輯器"}},form:{alignment_picker:{values:{center:"居中對齊",default:"預設對齊",end:"居右對齊",justify:"兩端對齊",start:"居左對齊"}},color_picker:{values:{default:"預設顏色"}},icon_type_picker:{values:{default:"預設樣式","entity-picture":"實體圖片",icon:"圖示",none:"無"}},info_picker:{values:{default:"預設訊息","last-changed":"最近變動時間","last-updated":"最近更新時間",name:"名稱",none:"無",state:"狀態"}},layout_picker:{values:{default:"預設佈局",horizontal:"水平佈局",vertical:"垂直佈局"}}}},ui={card:ci,editor:di};const pi={ar:Object.freeze({__proto__:null,card:Te,default:Pe,editor:je}),bg:Object.freeze({__proto__:null,default:Me,editor:Ie}),ca:Object.freeze({__proto__:null,card:Oe,default:Ne,editor:Ve}),cs:Object.freeze({__proto__:null,card:Le,default:De,editor:Be}),da:Object.freeze({__proto__:null,card:Ue,default:He,editor:Re}),de:Object.freeze({__proto__:null,card:Ke,default:We,editor:Fe}),el:Object.freeze({__proto__:null,default:qe,editor:Ze}),en:Object.freeze({__proto__:null,card:Ge,default:Xe,editor:Ye}),es:Object.freeze({__proto__:null,card:Je,default:to,editor:Qe}),fi:Object.freeze({__proto__:null,card:eo,default:io,editor:oo}),fr:Object.freeze({__proto__:null,card:no,default:ao,editor:ro}),he:Object.freeze({__proto__:null,card:so,default:co,editor:lo}),hu:Object.freeze({__proto__:null,card:uo,default:ho,editor:po}),id:Object.freeze({__proto__:null,card:_o,default:go,editor:mo}),it:Object.freeze({__proto__:null,card:fo,default:bo,editor:vo}),"ko-KR":Object.freeze({__proto__:null,default:ko,editor:yo}),nb:Object.freeze({__proto__:null,card:wo,default:zo,editor:xo}),nl:Object.freeze({__proto__:null,card:Co,default:Ao,editor:$o}),pl:Object.freeze({__proto__:null,card:So,default:To,editor:Eo}),"pt-BR":Object.freeze({__proto__:null,card:jo,default:Io,editor:Po}),"pt-PT":Object.freeze({__proto__:null,card:Mo,default:Vo,editor:Oo}),ro:Object.freeze({__proto__:null,default:Lo,editor:No}),ru:Object.freeze({__proto__:null,card:Bo,default:Uo,editor:Do}),sl:Object.freeze({__proto__:null,card:Ro,default:Ko,editor:Ho}),sk:Object.freeze({__proto__:null,card:Fo,default:Zo,editor:Wo}),sv:Object.freeze({__proto__:null,card:qo,default:Yo,editor:Go}),tr:Object.freeze({__proto__:null,card:Xo,default:Qo,editor:Jo}),uk:Object.freeze({__proto__:null,card:ti,default:oi,editor:ei}),vi:Object.freeze({__proto__:null,card:ii,default:ri,editor:ni}),"zh-Hans":Object.freeze({__proto__:null,card:ai,default:li,editor:si}),"zh-Hant":Object.freeze({__proto__:null,card:ci,default:ui,editor:di})};function hi(t,e){try{return t.split(".").reduce(((t,e)=>t[e]),pi[e])}catch(t){return}}function _i(t){return function(e){var o;let i=hi(e,null!==(o=null==t?void 0:t.locale.language)&&void 0!==o?o:"en");return i||(i=hi(e,"en")),null!=i?i:e}}const mi=["primary","accent","red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","light-grey","grey","dark-grey","blue-grey","black","white","disabled"];const gi=s`
  --default-red: 244, 67, 54;
  --default-pink: 233, 30, 99;
  --default-purple: 146, 107, 199;
  --default-deep-purple: 110, 65, 171;
  --default-indigo: 63, 81, 181;
  --default-blue: 33, 150, 243;
  --default-light-blue: 3, 169, 244;
  --default-cyan: 0, 188, 212;
  --default-teal: 0, 150, 136;
  --default-green: 76, 175, 80;
  --default-light-green: 139, 195, 74;
  --default-lime: 205, 220, 57;
  --default-yellow: 255, 235, 59;
  --default-amber: 255, 193, 7;
  --default-orange: 255, 152, 0;
  --default-deep-orange: 255, 111, 34;
  --default-brown: 121, 85, 72;
  --default-light-grey: 189, 189, 189;
  --default-grey: 158, 158, 158;
  --default-dark-grey: 96, 96, 96;
  --default-blue-grey: 96, 125, 139;
  --default-black: 0, 0, 0;
  --default-white: 255, 255, 255;
  --default-disabled: 189, 189, 189;
`,fi=s`
  --default-disabled: 111, 111, 111;
`,vi=s`
  --spacing: var(--mush-spacing, 10px);

  /* Title */
  --title-padding: var(--mush-title-padding, 24px 12px 8px);
  --title-spacing: var(--mush-title-spacing, 8px);
  --title-font-size: var(--mush-title-font-size, 24px);
  --title-font-weight: var(--mush-title-font-weight, normal);
  --title-line-height: var(--mush-title-line-height, 32px);
  --title-color: var(--mush-title-color, var(--primary-text-color));
  --title-letter-spacing: var(--mush-title-letter-spacing, -0.288px);
  --subtitle-font-size: var(--mush-subtitle-font-size, 16px);
  --subtitle-font-weight: var(--mush-subtitle-font-weight, normal);
  --subtitle-line-height: var(--mush-subtitle-line-height, 24px);
  --subtitle-color: var(--mush-subtitle-color, var(--secondary-text-color));
  --subtitle-letter-spacing: var(--mush-subtitle-letter-spacing, 0px);

  /* Card */
  --card-primary-font-size: var(--mush-card-primary-font-size, 14px);
  --card-secondary-font-size: var(--mush-card-secondary-font-size, 12px);
  --card-primary-font-weight: var(--mush-card-primary-font-weight, 500);
  --card-secondary-font-weight: var(--mush-card-secondary-font-weight, 400);
  --card-primary-line-height: var(--mush-card-primary-line-height, 20px);
  --card-secondary-line-height: var(--mush-card-secondary-line-height, 16px);
  --card-primary-color: var(
    --mush-card-primary-color,
    var(--primary-text-color)
  );
  --card-secondary-color: var(
    --mush-card-secondary-color,
    var(--primary-text-color)
  );
  --card-primary-letter-spacing: var(--mush-card-primary-letter-spacing, 0.1px);
  --card-secondary-letter-spacing: var(
    --mush-card-secondary-letter-spacing,
    0.4px
  );

  /* Chips */
  --chip-spacing: var(--mush-chip-spacing, 8px);
  --chip-padding: var(--mush-chip-padding, 0 0.25em);
  --chip-height: var(--mush-chip-height, 36px);
  --chip-border-radius: var(--mush-chip-border-radius, 19px);
  --chip-border-width: var(
    --mush-chip-border-width,
    var(--ha-card-border-width, 1px)
  );
  --chip-border-color: var(
    --mush-chip-border-color,
    var(--ha-card-border-color, var(--divider-color))
  );
  --chip-box-shadow: var(
    --mush-chip-box-shadow,
    var(--ha-card-box-shadow, "none")
  );
  --chip-font-size: var(--mush-chip-font-size, 0.3em);
  --chip-font-weight: var(--mush-chip-font-weight, bold);
  --chip-icon-size: var(--mush-chip-icon-size, 0.5em);
  --chip-avatar-padding: var(--mush-chip-avatar-padding, 0.1em);
  --chip-avatar-border-radius: var(--mush-chip-avatar-border-radius, 50%);
  --chip-background: var(
    --mush-chip-background,
    var(--ha-card-background, var(--card-background-color, white))
  );
  /* Controls */
  --control-border-radius: var(--mush-control-border-radius, 12px);
  --control-height: var(--mush-control-height, 42px);
  --control-button-ratio: var(--mush-control-button-ratio, 1);
  --control-icon-size: var(--mush-control-icon-size, 0.5em);
  --control-spacing: var(--mush-control-spacing, 12px);

  /* Slider */
  --slider-threshold: var(--mush-slider-threshold);

  /* Input Number */
  --input-number-debounce: var(--mush-input-number-debounce);

  /* Layout */
  --layout-align: var(--mush-layout-align, center);

  /* Badge */
  --badge-size: var(--mush-badge-size, 16px);
  --badge-icon-size: var(--mush-badge-icon-size, 0.75em);
  --badge-border-radius: var(--mush-badge-border-radius, 50%);

  /* Icon */
  --icon-border-radius: var(--mush-icon-border-radius, 50%);
  --icon-size: var(--mush-icon-size, 36px);
  --icon-symbol-size: var(--mush-icon-symbol-size, 0.667em);
`,bi=s`
  /* RGB */
  /* Standard colors */
  --rgb-red: var(--mush-rgb-red, var(--default-red));
  --rgb-pink: var(--mush-rgb-pink, var(--default-pink));
  --rgb-purple: var(--mush-rgb-purple, var(--default-purple));
  --rgb-deep-purple: var(--mush-rgb-deep-purple, var(--default-deep-purple));
  --rgb-indigo: var(--mush-rgb-indigo, var(--default-indigo));
  --rgb-blue: var(--mush-rgb-blue, var(--default-blue));
  --rgb-light-blue: var(--mush-rgb-light-blue, var(--default-light-blue));
  --rgb-cyan: var(--mush-rgb-cyan, var(--default-cyan));
  --rgb-teal: var(--mush-rgb-teal, var(--default-teal));
  --rgb-green: var(--mush-rgb-green, var(--default-green));
  --rgb-light-green: var(--mush-rgb-light-green, var(--default-light-green));
  --rgb-lime: var(--mush-rgb-lime, var(--default-lime));
  --rgb-yellow: var(--mush-rgb-yellow, var(--default-yellow));
  --rgb-amber: var(--mush-rgb-amber, var(--default-amber));
  --rgb-orange: var(--mush-rgb-orange, var(--default-orange));
  --rgb-deep-orange: var(--mush-rgb-deep-orange, var(--default-deep-orange));
  --rgb-brown: var(--mush-rgb-brown, var(--default-brown));
  --rgb-light-grey: var(--mush-rgb-light-grey, var(--default-light-grey));
  --rgb-grey: var(--mush-rgb-grey, var(--default-grey));
  --rgb-dark-grey: var(--mush-rgb-dark-grey, var(--default-dark-grey));
  --rgb-blue-grey: var(--mush-rgb-blue-grey, var(--default-blue-grey));
  --rgb-black: var(--mush-rgb-black, var(--default-black));
  --rgb-white: var(--mush-rgb-white, var(--default-white));
  --rgb-disabled: var(--mush-rgb-disabled, var(--default-disabled));

  /* Action colors */
  --rgb-info: var(--mush-rgb-info, var(--rgb-blue));
  --rgb-success: var(--mush-rgb-success, var(--rgb-green));
  --rgb-warning: var(--mush-rgb-warning, var(--rgb-orange));
  --rgb-danger: var(--mush-rgb-danger, var(--rgb-red));

  /* State colors */
  --rgb-state-vacuum: var(--mush-rgb-state-vacuum, var(--rgb-teal));
  --rgb-state-fan: var(--mush-rgb-state-fan, var(--rgb-green));
  --rgb-state-light: var(--mush-rgb-state-light, var(--rgb-orange));
  --rgb-state-entity: var(--mush-rgb-state-entity, var(--rgb-blue));
  --rgb-state-media-player: var(
    --mush-rgb-state-media-player,
    var(--rgb-indigo)
  );
  --rgb-state-lock: var(--mush-rgb-state-lock, var(--rgb-blue));
  --rgb-state-number: var(--mush-rgb-state-number, var(--rgb-blue));
  --rgb-state-humidifier: var(--mush-rgb-state-humidifier, var(--rgb-purple));

  /* State alarm colors */
  --rgb-state-alarm-disarmed: var(
    --mush-rgb-state-alarm-disarmed,
    var(--rgb-info)
  );
  --rgb-state-alarm-armed: var(
    --mush-rgb-state-alarm-armed,
    var(--rgb-success)
  );
  --rgb-state-alarm-triggered: var(
    --mush-rgb-state-alarm-triggered,
    var(--rgb-danger)
  );

  /* State person colors */
  --rgb-state-person-home: var(
    --mush-rgb-state-person-home,
    var(--rgb-success)
  );
  --rgb-state-person-not-home: var(
    --mush-rgb-state-person-not-home,
    var(--rgb-danger)
  );
  --rgb-state-person-zone: var(--mush-rgb-state-person-zone, var(--rgb-info));
  --rgb-state-person-unknown: var(
    --mush-rgb-state-person-unknown,
    var(--rgb-grey)
  );

  /* State update colors */
  --rgb-state-update-on: var(--mush-rgb-state-update-on, var(--rgb-orange));
  --rgb-state-update-off: var(--mush-rgb-update-off, var(--rgb-green));
  --rgb-state-update-installing: var(
    --mush-rgb-update-installing,
    var(--rgb-blue)
  );

  /* State lock colors */
  --rgb-state-lock-locked: var(--mush-rgb-state-lock-locked, var(--rgb-green));
  --rgb-state-lock-unlocked: var(
    --mush-rgb-state-lock-unlocked,
    var(--rgb-red)
  );
  --rgb-state-lock-pending: var(
    --mush-rgb-state-lock-pending,
    var(--rgb-orange)
  );

  /* State cover colors */
  --rgb-state-cover-open: var(--mush-rgb-state-cover-open, var(--rgb-blue));
  --rgb-state-cover-closed: var(
    --mush-rgb-state-cover-closed,
    var(--rgb-disabled)
  );

  /* State climate colors */
  --rgb-state-climate-auto: var(
    --mush-rgb-state-climate-auto,
    var(--rgb-green)
  );
  --rgb-state-climate-cool: var(--mush-rgb-state-climate-cool, var(--rgb-blue));
  --rgb-state-climate-dry: var(--mush-rgb-state-climate-dry, var(--rgb-orange));
  --rgb-state-climate-fan-only: var(
    --mush-rgb-state-climate-fan-only,
    var(--rgb-teal)
  );
  --rgb-state-climate-heat: var(
    --mush-rgb-state-climate-heat,
    var(--rgb-deep-orange)
  );
  --rgb-state-climate-heat-cool: var(
    --mush-rgb-state-climate-heat-cool,
    var(--rgb-green)
  );
  --rgb-state-climate-idle: var(
    --mush-rgb-state-climate-idle,
    var(--rgb-disabled)
  );
  --rgb-state-climate-off: var(
    --mush-rgb-state-climate-off,
    var(--rgb-disabled)
  );
`;function yi(t){return!!t&&t.themes.darkMode}class ki extends at{updated(t){if(super.updated(t),t.has("hass")&&this.hass){const e=yi(t.get("hass")),o=yi(this.hass);e!==o&&this.toggleAttribute("dark-mode",o)}}static get styles(){return[ke,s`
        :host {
          ${gi}
        }
        :host([dark-mode]) {
          ${fi}
        }
        :host {
          ${bi}
          ${vi}
        }
      `]}}t([ut({attribute:!1})],ki.prototype,"hass",void 0);const wi=["button","input_button","scene"],xi=["name","state","last-changed","last-updated","none"];function zi(t,e,o,i,n){switch(t){case"name":return e;case"state":const t=i.entity_id.split(".")[0];return"timestamp"!==i.attributes.device_class&&!wi.includes(t)||!te(i)||function(t){return t.state===Xt}(i)?o:H`
          <ha-relative-time
            .hass=${n}
            .datetime=${i.state}
            capitalize
          ></ha-relative-time>
        `;case"last-changed":return H`
        <ha-relative-time
          .hass=${n}
          .datetime=${i.last_changed}
          capitalize
        ></ha-relative-time>
      `;case"last-updated":return H`
        <ha-relative-time
          .hass=${n}
          .datetime=${i.last_updated}
          capitalize
        ></ha-relative-time>
      `;case"none":return}}class Ci extends ki{get _stateObj(){if(!this._config||!this.hass||!this._config.entity)return;const t=this._config.entity;return this.hass.states[t]}get hasControls(){return!1}setConfig(t){this._config=Object.assign({tap_action:{action:"more-info"},hold_action:{action:"more-info"}},t)}getCardSize(){var t;let e=1;if(!this._config)return e;const o=Ce(this._config);return"vertical"===o.layout&&(e+=1),"horizontal"===(null==o?void 0:o.layout)||!this.hasControls||"collapsible_controls"in this._config&&(null===(t=this._config)||void 0===t?void 0:t.collapsible_controls)||(e+=1),e}getLayoutOptions(){if(!this._config)return{grid_columns:2,grid_rows:1};const t={grid_columns:2,grid_rows:0},e=Ce(this._config),o="collapsible_controls"in this._config&&Boolean(this._config.collapsible_controls),i="none"!==e.primary_info||"none"!==e.secondary_info,n="none"!==e.icon_type,r=this._stateObj&&Qt(this._stateObj),a=this.hasControls&&(!o||r);return"vertical"===e.layout&&(n&&(t.grid_rows+=1),i&&(t.grid_rows+=1),a&&(t.grid_rows+=1)),"horizontal"===e.layout&&(t.grid_rows=1,t.grid_columns=4),"default"===e.layout&&((i||n)&&(t.grid_rows+=1),a&&(t.grid_rows+=1)),a||i||(t.grid_columns=1,t.grid_rows=1),t.grid_rows=Math.max(t.grid_rows,1),t}getGridOptions(){if(!this._config)return{columns:6,rows:1};const t={min_rows:1,min_columns:4,columns:6,rows:0},e=Ce(this._config),o="collapsible_controls"in this._config&&Boolean(this._config.collapsible_controls),i="none"!==e.primary_info||"none"!==e.secondary_info,n="none"!==e.icon_type,r=this._stateObj&&Qt(this._stateObj),a=this.hasControls&&(!o||r);return"vertical"===e.layout&&(n&&(t.rows+=1),i&&(t.rows+=1),a&&(t.rows+=1),t.min_columns=2),"horizontal"===e.layout&&(t.rows=1,t.columns=12),"default"===e.layout&&((i||n)&&(t.rows+=1),a&&(t.rows+=1)),a||i||(t.columns=3,t.rows=1,t.min_columns=2),t.rows=Math.max(t.rows,1),t.min_rows=t.rows,t}renderPicture(t){return H`
      <mushroom-shape-avatar
        slot="icon"
        .picture_url=${this.hass.hassUrl(t)}
      ></mushroom-shape-avatar>
    `}renderNotFound(t){const e=Ce(t),o=Gt(this.hass),i=_i(this.hass);return H`
      <ha-card
        class=${gt({"fill-container":e.fill_container})}
      >
        <mushroom-card .appearance=${e} ?rtl=${o}>
          <mushroom-state-item ?rtl=${o} .appearance=${e} disabled>
            <mushroom-shape-icon slot="icon" disabled>
              <ha-icon icon="mdi:help"></ha-icon>
            </mushroom-shape-icon>
            <mushroom-badge-icon
              slot="badge"
              class="not-found"
              icon="mdi:exclamation-thick"
            ></mushroom-badge-icon>
            <mushroom-state-info
              slot="info"
              .primary=${t.entity}
              .secondary=${i("card.not_found")}
            ></mushroom-state-info>
          </mushroom-state-item>
        </mushroom-card>
      </ha-card>
    `}renderIcon(t,e){const o=Qt(t);return H`
      <mushroom-shape-icon slot="icon" .disabled=${!o}>
        <ha-state-icon
          .hass=${this.hass}
          .stateObj=${t}
          .icon=${e}
        ></ha-state-icon
      ></mushroom-shape-icon>
    `}renderBadge(t){return!te(t)?H`
          <mushroom-badge-icon
            class="unavailable"
            slot="badge"
            icon="mdi:help"
          ></mushroom-badge-icon>
        `:F}renderStateInfo(t,e,o,i){const n=this.hass.formatEntityState(t),r=null!=i?i:n,a=zi(e.primary_info,o,r,t,this.hass),s=zi(e.secondary_info,o,r,t,this.hass);return H`
      <mushroom-state-info
        slot="info"
        .primary=${a}
        .secondary=${s}
      ></mushroom-state-info>
    `}}t([pt()],Ci.prototype,"_config",void 0),t([ut({reflect:!0,type:String})],Ci.prototype,"layout",void 0);const $i=s`
  ha-card {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: var(--layout-align);
    height: auto;
    display: flex;
    flex-direction: column;
  }
  ha-card.fill-container {
    height: 100%;
  }
  :host([layout="grid"]) ha-card {
    height: 100%;
  }
  .actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    padding: var(--control-spacing);
    padding-top: 0;
    box-sizing: border-box;
    gap: var(--control-spacing);
  }
  .actions::-webkit-scrollbar {
    background: transparent; /* Chrome/Safari/Webkit */
    height: 0px;
  }
  .unavailable {
    --main-color: rgb(var(--rgb-warning));
  }
  .not-found {
    --main-color: rgb(var(--rgb-danger));
  }
  mushroom-state-item[disabled] {
    cursor: initial;
  }
`;var Ai="https://github.com/piitaya/lovelace-mushroom";const Si="mushroom-light-card-editor",Ei=["light"];!function(t,e,o,i){var n,r=["","webkit","Moz","MS","ms","o"],a=e.createElement("div"),s="function",l=Math.round,c=Math.abs,d=Date.now;function u(t,e,o){return setTimeout(v(t,o),e)}function p(t,e,o){return!!Array.isArray(t)&&(h(t,o[e],o),!0)}function h(t,e,o){var n;if(t)if(t.forEach)t.forEach(e,o);else if(t.length!==i)for(n=0;n<t.length;)e.call(o,t[n],n,t),n++;else for(n in t)t.hasOwnProperty(n)&&e.call(o,t[n],n,t)}function _(e,o,i){var n="DEPRECATED METHOD: "+o+"\n"+i+" AT \n";return function(){var o=new Error("get-stack-trace"),i=o&&o.stack?o.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",r=t.console&&(t.console.warn||t.console.log);return r&&r.call(t.console,n,i),e.apply(this,arguments)}}n="function"!=typeof Object.assign?function(t){if(t===i||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),o=1;o<arguments.length;o++){var n=arguments[o];if(n!==i&&null!==n)for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e}:Object.assign;var m=_((function(t,e,o){for(var n=Object.keys(e),r=0;r<n.length;)(!o||o&&t[n[r]]===i)&&(t[n[r]]=e[n[r]]),r++;return t}),"extend","Use `assign`."),g=_((function(t,e){return m(t,e,!0)}),"merge","Use `assign`.");function f(t,e,o){var i,r=e.prototype;(i=t.prototype=Object.create(r)).constructor=t,i._super=r,o&&n(i,o)}function v(t,e){return function(){return t.apply(e,arguments)}}function b(t,e){return typeof t==s?t.apply(e&&e[0]||i,e):t}function y(t,e){return t===i?e:t}function k(t,e,o){h(C(e),(function(e){t.addEventListener(e,o,!1)}))}function w(t,e,o){h(C(e),(function(e){t.removeEventListener(e,o,!1)}))}function x(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function z(t,e){return t.indexOf(e)>-1}function C(t){return t.trim().split(/\s+/g)}function $(t,e,o){if(t.indexOf&&!o)return t.indexOf(e);for(var i=0;i<t.length;){if(o&&t[i][o]==e||!o&&t[i]===e)return i;i++}return-1}function A(t){return Array.prototype.slice.call(t,0)}function S(t,e,o){for(var i=[],n=[],r=0;r<t.length;){var a=t[r][e];$(n,a)<0&&i.push(t[r]),n[r]=a,r++}return i=i.sort((function(t,o){return t[e]>o[e]})),i}function E(t,e){for(var o,n,a=e[0].toUpperCase()+e.slice(1),s=0;s<r.length;){if((n=(o=r[s])?o+a:e)in t)return n;s++}return i}var T=1;function j(e){var o=e.ownerDocument||e;return o.defaultView||o.parentWindow||t}var P="ontouchstart"in t,I=E(t,"PointerEvent")!==i,M=P&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),O="touch",V="mouse",N=25,L=1,B=4,D=8,U=1,R=2,H=4,K=8,F=16,W=R|H,Z=K|F,q=W|Z,G=["x","y"],Y=["clientX","clientY"];function X(t,e){var o=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){b(t.options.enable,[t])&&o.handler(e)},this.init()}function J(t,e,o){var n=o.pointers.length,r=o.changedPointers.length,a=e&L&&n-r==0,s=e&(B|D)&&n-r==0;o.isFirst=!!a,o.isFinal=!!s,a&&(t.session={}),o.eventType=e,function(t,e){var o=t.session,n=e.pointers,r=n.length;o.firstInput||(o.firstInput=Q(e));r>1&&!o.firstMultiple?o.firstMultiple=Q(e):1===r&&(o.firstMultiple=!1);var a=o.firstInput,s=o.firstMultiple,l=s?s.center:a.center,u=e.center=tt(n);e.timeStamp=d(),e.deltaTime=e.timeStamp-a.timeStamp,e.angle=nt(l,u),e.distance=it(l,u),function(t,e){var o=e.center,i=t.offsetDelta||{},n=t.prevDelta||{},r=t.prevInput||{};e.eventType!==L&&r.eventType!==B||(n=t.prevDelta={x:r.deltaX||0,y:r.deltaY||0},i=t.offsetDelta={x:o.x,y:o.y});e.deltaX=n.x+(o.x-i.x),e.deltaY=n.y+(o.y-i.y)}(o,e),e.offsetDirection=ot(e.deltaX,e.deltaY);var p=et(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=p.x,e.overallVelocityY=p.y,e.overallVelocity=c(p.x)>c(p.y)?p.x:p.y,e.scale=s?(h=s.pointers,_=n,it(_[0],_[1],Y)/it(h[0],h[1],Y)):1,e.rotation=s?function(t,e){return nt(e[1],e[0],Y)+nt(t[1],t[0],Y)}(s.pointers,n):0,e.maxPointers=o.prevInput?e.pointers.length>o.prevInput.maxPointers?e.pointers.length:o.prevInput.maxPointers:e.pointers.length,function(t,e){var o,n,r,a,s=t.lastInterval||e,l=e.timeStamp-s.timeStamp;if(e.eventType!=D&&(l>N||s.velocity===i)){var d=e.deltaX-s.deltaX,u=e.deltaY-s.deltaY,p=et(l,d,u);n=p.x,r=p.y,o=c(p.x)>c(p.y)?p.x:p.y,a=ot(d,u),t.lastInterval=e}else o=s.velocity,n=s.velocityX,r=s.velocityY,a=s.direction;e.velocity=o,e.velocityX=n,e.velocityY=r,e.direction=a}(o,e);var h,_;var m=t.element;x(e.srcEvent.target,m)&&(m=e.srcEvent.target);e.target=m}(t,o),t.emit("hammer.input",o),t.recognize(o),t.session.prevInput=o}function Q(t){for(var e=[],o=0;o<t.pointers.length;)e[o]={clientX:l(t.pointers[o].clientX),clientY:l(t.pointers[o].clientY)},o++;return{timeStamp:d(),pointers:e,center:tt(e),deltaX:t.deltaX,deltaY:t.deltaY}}function tt(t){var e=t.length;if(1===e)return{x:l(t[0].clientX),y:l(t[0].clientY)};for(var o=0,i=0,n=0;n<e;)o+=t[n].clientX,i+=t[n].clientY,n++;return{x:l(o/e),y:l(i/e)}}function et(t,e,o){return{x:e/t||0,y:o/t||0}}function ot(t,e){return t===e?U:c(t)>=c(e)?t<0?R:H:e<0?K:F}function it(t,e,o){o||(o=G);var i=e[o[0]]-t[o[0]],n=e[o[1]]-t[o[1]];return Math.sqrt(i*i+n*n)}function nt(t,e,o){o||(o=G);var i=e[o[0]]-t[o[0]],n=e[o[1]]-t[o[1]];return 180*Math.atan2(n,i)/Math.PI}X.prototype={handler:function(){},init:function(){this.evEl&&k(this.element,this.evEl,this.domHandler),this.evTarget&&k(this.target,this.evTarget,this.domHandler),this.evWin&&k(j(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&w(this.element,this.evEl,this.domHandler),this.evTarget&&w(this.target,this.evTarget,this.domHandler),this.evWin&&w(j(this.element),this.evWin,this.domHandler)}};var rt={mousedown:L,mousemove:2,mouseup:B},at="mousedown",st="mousemove mouseup";function lt(){this.evEl=at,this.evWin=st,this.pressed=!1,X.apply(this,arguments)}f(lt,X,{handler:function(t){var e=rt[t.type];e&L&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=B),this.pressed&&(e&B&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:V,srcEvent:t}))}});var ct={pointerdown:L,pointermove:2,pointerup:B,pointercancel:D,pointerout:D},dt={2:O,3:"pen",4:V,5:"kinect"},ut="pointerdown",pt="pointermove pointerup pointercancel";function ht(){this.evEl=ut,this.evWin=pt,X.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}t.MSPointerEvent&&!t.PointerEvent&&(ut="MSPointerDown",pt="MSPointerMove MSPointerUp MSPointerCancel"),f(ht,X,{handler:function(t){var e=this.store,o=!1,i=t.type.toLowerCase().replace("ms",""),n=ct[i],r=dt[t.pointerType]||t.pointerType,a=r==O,s=$(e,t.pointerId,"pointerId");n&L&&(0===t.button||a)?s<0&&(e.push(t),s=e.length-1):n&(B|D)&&(o=!0),s<0||(e[s]=t,this.callback(this.manager,n,{pointers:e,changedPointers:[t],pointerType:r,srcEvent:t}),o&&e.splice(s,1))}});var _t={touchstart:L,touchmove:2,touchend:B,touchcancel:D};function mt(){this.evTarget="touchstart",this.evWin="touchstart touchmove touchend touchcancel",this.started=!1,X.apply(this,arguments)}function gt(t,e){var o=A(t.touches),i=A(t.changedTouches);return e&(B|D)&&(o=S(o.concat(i),"identifier")),[o,i]}f(mt,X,{handler:function(t){var e=_t[t.type];if(e===L&&(this.started=!0),this.started){var o=gt.call(this,t,e);e&(B|D)&&o[0].length-o[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:o[0],changedPointers:o[1],pointerType:O,srcEvent:t})}}});var ft={touchstart:L,touchmove:2,touchend:B,touchcancel:D},vt="touchstart touchmove touchend touchcancel";function bt(){this.evTarget=vt,this.targetIds={},X.apply(this,arguments)}function yt(t,e){var o=A(t.touches),i=this.targetIds;if(e&(2|L)&&1===o.length)return i[o[0].identifier]=!0,[o,o];var n,r,a=A(t.changedTouches),s=[],l=this.target;if(r=o.filter((function(t){return x(t.target,l)})),e===L)for(n=0;n<r.length;)i[r[n].identifier]=!0,n++;for(n=0;n<a.length;)i[a[n].identifier]&&s.push(a[n]),e&(B|D)&&delete i[a[n].identifier],n++;return s.length?[S(r.concat(s),"identifier"),s]:void 0}f(bt,X,{handler:function(t){var e=ft[t.type],o=yt.call(this,t,e);o&&this.callback(this.manager,e,{pointers:o[0],changedPointers:o[1],pointerType:O,srcEvent:t})}});var kt=2500;function wt(){X.apply(this,arguments);var t=v(this.handler,this);this.touch=new bt(this.manager,t),this.mouse=new lt(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function xt(t,e){t&L?(this.primaryTouch=e.changedPointers[0].identifier,zt.call(this,e)):t&(B|D)&&zt.call(this,e)}function zt(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var o={x:e.clientX,y:e.clientY};this.lastTouches.push(o);var i=this.lastTouches;setTimeout((function(){var t=i.indexOf(o);t>-1&&i.splice(t,1)}),kt)}}function Ct(t){for(var e=t.srcEvent.clientX,o=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var n=this.lastTouches[i],r=Math.abs(e-n.x),a=Math.abs(o-n.y);if(r<=25&&a<=25)return!0}return!1}f(wt,X,{handler:function(t,e,o){var i=o.pointerType==O,n=o.pointerType==V;if(!(n&&o.sourceCapabilities&&o.sourceCapabilities.firesTouchEvents)){if(i)xt.call(this,e,o);else if(n&&Ct.call(this,o))return;this.callback(t,e,o)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var $t=E(a.style,"touchAction"),At=$t!==i,St="compute",Et="auto",Tt="manipulation",jt="none",Pt="pan-x",It="pan-y",Mt=function(){if(!At)return!1;var e={},o=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(i){e[i]=!o||t.CSS.supports("touch-action",i)})),e}();function Ot(t,e){this.manager=t,this.set(e)}Ot.prototype={set:function(t){t==St&&(t=this.compute()),At&&this.manager.element.style&&Mt[t]&&(this.manager.element.style[$t]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return h(this.manager.recognizers,(function(e){b(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))})),function(t){if(z(t,jt))return jt;var e=z(t,Pt),o=z(t,It);if(e&&o)return jt;if(e||o)return e?Pt:It;if(z(t,Tt))return Tt;return Et}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,o=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var i=this.actions,n=z(i,jt)&&!Mt[jt],r=z(i,It)&&!Mt[It],a=z(i,Pt)&&!Mt[Pt];if(n){var s=1===t.pointers.length,l=t.distance<2,c=t.deltaTime<250;if(s&&l&&c)return}if(!a||!r)return n||r&&o&W||a&&o&Z?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var Vt=1,Nt=32;function Lt(t){this.options=n({},this.defaults,t||{}),this.id=T++,this.manager=null,this.options.enable=y(this.options.enable,!0),this.state=Vt,this.simultaneous={},this.requireFail=[]}function Bt(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}function Dt(t){return t==F?"down":t==K?"up":t==R?"left":t==H?"right":""}function Ut(t,e){var o=e.manager;return o?o.get(t):t}function Rt(){Lt.apply(this,arguments)}function Ht(){Rt.apply(this,arguments),this.pX=null,this.pY=null}function Kt(){Rt.apply(this,arguments)}function Ft(){Lt.apply(this,arguments),this._timer=null,this._input=null}function Wt(){Rt.apply(this,arguments)}function Zt(){Rt.apply(this,arguments)}function qt(){Lt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function Gt(t,e){return(e=e||{}).recognizers=y(e.recognizers,Gt.defaults.preset),new Yt(t,e)}Lt.prototype={defaults:{},set:function(t){return n(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(p(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=Ut(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return p(t,"dropRecognizeWith",this)||(t=Ut(t,this),delete this.simultaneous[t.id]),this},requireFailure:function(t){if(p(t,"requireFailure",this))return this;var e=this.requireFail;return-1===$(e,t=Ut(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(p(t,"dropRequireFailure",this))return this;t=Ut(t,this);var e=$(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,o=this.state;function i(o){e.manager.emit(o,t)}o<8&&i(e.options.event+Bt(o)),i(e.options.event),t.additionalEvent&&i(t.additionalEvent),o>=8&&i(e.options.event+Bt(o))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=Nt},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(Nt|Vt)))return!1;t++}return!0},recognize:function(t){var e=n({},t);if(!b(this.options.enable,[this,e]))return this.reset(),void(this.state=Nt);56&this.state&&(this.state=Vt),this.state=this.process(e),30&this.state&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},f(Rt,Lt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,o=t.eventType,i=6&e,n=this.attrTest(t);return i&&(o&D||!n)?16|e:i||n?o&B?8|e:2&e?4|e:2:Nt}}),f(Ht,Rt,{defaults:{event:"pan",threshold:10,pointers:1,direction:q},getTouchAction:function(){var t=this.options.direction,e=[];return t&W&&e.push(It),t&Z&&e.push(Pt),e},directionTest:function(t){var e=this.options,o=!0,i=t.distance,n=t.direction,r=t.deltaX,a=t.deltaY;return n&e.direction||(e.direction&W?(n=0===r?U:r<0?R:H,o=r!=this.pX,i=Math.abs(t.deltaX)):(n=0===a?U:a<0?K:F,o=a!=this.pY,i=Math.abs(t.deltaY))),t.direction=n,o&&i>e.threshold&&n&e.direction},attrTest:function(t){return Rt.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=Dt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),f(Kt,Rt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||2&this.state)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),f(Ft,Lt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Et]},process:function(t){var e=this.options,o=t.pointers.length===e.pointers,i=t.distance<e.threshold,n=t.deltaTime>e.time;if(this._input=t,!i||!o||t.eventType&(B|D)&&!n)this.reset();else if(t.eventType&L)this.reset(),this._timer=u((function(){this.state=8,this.tryEmit()}),e.time,this);else if(t.eventType&B)return 8;return Nt},reset:function(){clearTimeout(this._timer)},emit:function(t){8===this.state&&(t&&t.eventType&B?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=d(),this.manager.emit(this.options.event,this._input)))}}),f(Wt,Rt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||2&this.state)}}),f(Zt,Rt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:W|Z,pointers:1},getTouchAction:function(){return Ht.prototype.getTouchAction.call(this)},attrTest:function(t){var e,o=this.options.direction;return o&(W|Z)?e=t.overallVelocity:o&W?e=t.overallVelocityX:o&Z&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&o&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&c(e)>this.options.velocity&&t.eventType&B},emit:function(t){var e=Dt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),f(qt,Lt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Tt]},process:function(t){var e=this.options,o=t.pointers.length===e.pointers,i=t.distance<e.threshold,n=t.deltaTime<e.time;if(this.reset(),t.eventType&L&&0===this.count)return this.failTimeout();if(i&&n&&o){if(t.eventType!=B)return this.failTimeout();var r=!this.pTime||t.timeStamp-this.pTime<e.interval,a=!this.pCenter||it(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,a&&r?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=u((function(){this.state=8,this.tryEmit()}),e.interval,this),2):8}return Nt},failTimeout:function(){return this._timer=u((function(){this.state=Nt}),this.options.interval,this),Nt},reset:function(){clearTimeout(this._timer)},emit:function(){8==this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),Gt.VERSION="2.0.7",Gt.defaults={domEvents:!1,touchAction:St,enable:!0,inputTarget:null,inputClass:null,preset:[[Wt,{enable:!1}],[Kt,{enable:!1},["rotate"]],[Zt,{direction:W}],[Ht,{direction:W},["swipe"]],[qt],[qt,{event:"doubletap",taps:2},["tap"]],[Ft]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};function Yt(t,e){var o;this.options=n({},Gt.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((o=this).options.inputClass||(I?ht:M?bt:P?wt:lt))(o,J),this.touchAction=new Ot(this,this.options.touchAction),Xt(this,!0),h(this.options.recognizers,(function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])}),this)}function Xt(t,e){var o,i=t.element;i.style&&(h(t.options.cssProps,(function(n,r){o=E(i.style,r),e?(t.oldCssProps[o]=i.style[o],i.style[o]=n):i.style[o]=t.oldCssProps[o]||""})),e||(t.oldCssProps={}))}Yt.prototype={set:function(t){return n(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var o;this.touchAction.preventDefaults(t);var i=this.recognizers,n=e.curRecognizer;(!n||n&&8&n.state)&&(n=e.curRecognizer=null);for(var r=0;r<i.length;)o=i[r],2===e.stopped||n&&o!=n&&!o.canRecognizeWith(n)?o.reset():o.recognize(t),!n&&14&o.state&&(n=e.curRecognizer=o),r++}},get:function(t){if(t instanceof Lt)return t;for(var e=this.recognizers,o=0;o<e.length;o++)if(e[o].options.event==t)return e[o];return null},add:function(t){if(p(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(p(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,o=$(e,t);-1!==o&&(e.splice(o,1),this.touchAction.update())}return this},on:function(t,e){if(t!==i&&e!==i){var o=this.handlers;return h(C(t),(function(t){o[t]=o[t]||[],o[t].push(e)})),this}},off:function(t,e){if(t!==i){var o=this.handlers;return h(C(t),(function(t){e?o[t]&&o[t].splice($(o[t],e),1):delete o[t]})),this}},emit:function(t,o){this.options.domEvents&&function(t,o){var i=e.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=o,o.target.dispatchEvent(i)}(t,o);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){o.type=t,o.preventDefault=function(){o.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](o),n++}},destroy:function(){this.element&&Xt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},n(Gt,{INPUT_START:L,INPUT_MOVE:2,INPUT_END:B,INPUT_CANCEL:D,STATE_POSSIBLE:Vt,STATE_BEGAN:2,STATE_CHANGED:4,STATE_ENDED:8,STATE_RECOGNIZED:8,STATE_CANCELLED:16,STATE_FAILED:Nt,DIRECTION_NONE:U,DIRECTION_LEFT:R,DIRECTION_RIGHT:H,DIRECTION_UP:K,DIRECTION_DOWN:F,DIRECTION_HORIZONTAL:W,DIRECTION_VERTICAL:Z,DIRECTION_ALL:q,Manager:Yt,Input:X,TouchAction:Ot,TouchInput:bt,MouseInput:lt,PointerEventInput:ht,TouchMouseInput:wt,SingleTouchInput:mt,Recognizer:Lt,AttrRecognizer:Rt,Tap:qt,Pan:Ht,Swipe:Zt,Pinch:Kt,Rotate:Wt,Press:Ft,on:k,off:w,each:h,merge:g,extend:m,assign:n,inherit:f,bindFn:v,prefixed:E}),(void 0!==t?t:"undefined"!=typeof self?self:{}).Hammer=Gt,"function"==typeof define&&define.amd?define((function(){return Gt})):"undefined"!=typeof module&&module.exports?module.exports=Gt:t.Hammer=Gt}(window,document);const Ti=t=>{const e=t.center.x,o=t.target.getBoundingClientRect().left,i=t.target.clientWidth;return Math.max(Math.min(1,(e-o)/i),0)};let ji=class extends at{constructor(){super(...arguments),this.disabled=!1,this.inactive=!1,this.step=1,this.min=0,this.max=100,this.controlled=!1}valueToPercentage(t){return(t-this.min)/(this.max-this.min)}percentageToValue(t){return(this.max-this.min)*t+this.min}firstUpdated(t){super.firstUpdated(t),this.setupListeners()}connectedCallback(){super.connectedCallback(),this.setupListeners()}disconnectedCallback(){super.disconnectedCallback(),this.destroyListeners()}setupListeners(){if(this.slider&&!this._mc){const t=(t=>{const e=window.getComputedStyle(t).getPropertyValue("--slider-threshold"),o=parseFloat(e);return isNaN(o)?10:o})(this.slider);let e;this._mc=new Hammer.Manager(this.slider,{touchAction:"pan-y"}),this._mc.add(new Hammer.Pan({threshold:t,direction:Hammer.DIRECTION_ALL,enable:!0})),this._mc.add(new Hammer.Tap({event:"singletap"})),this._mc.on("panstart",(()=>{this.disabled||(this.controlled=!0,e=this.value)})),this._mc.on("pancancel",(()=>{this.disabled||(this.controlled=!1,this.value=e)})),this._mc.on("panmove",(t=>{if(this.disabled)return;const e=Ti(t);this.value=this.percentageToValue(e),this.dispatchEvent(new CustomEvent("current-change",{detail:{value:Math.round(this.value/this.step)*this.step}}))})),this._mc.on("panend",(t=>{if(this.disabled)return;this.controlled=!1;const e=Ti(t);this.value=Math.round(this.percentageToValue(e)/this.step)*this.step,this.dispatchEvent(new CustomEvent("current-change",{detail:{value:void 0}})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))})),this._mc.on("singletap",(t=>{if(this.disabled)return;const e=Ti(t);this.value=Math.round(this.percentageToValue(e)/this.step)*this.step,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))}))}}destroyListeners(){this._mc&&(this._mc.destroy(),this._mc=void 0)}render(){var t;return H`
      <div
        class=${gt({container:!0,inactive:this.inactive||this.disabled,controlled:this.controlled})}
      >
        <div
          id="slider"
          class="slider"
          style=${bt({"--value":`${this.valueToPercentage(null!==(t=this.value)&&void 0!==t?t:0)}`})}
        >
          <div class="slider-track-background"></div>
          ${this.showActive?H`<div class="slider-track-active"></div>`:F}
          ${this.showIndicator?H`<div class="slider-track-indicator"></div>`:F}
        </div>
      </div>
    `}static get styles(){return s`
      :host {
        --main-color: rgba(var(--rgb-secondary-text-color), 1);
        --bg-gradient: none;
        --bg-color: rgba(var(--rgb-secondary-text-color), 0.2);
        --main-color-inactive: rgb(var(--rgb-disabled));
        --bg-color-inactive: rgba(var(--rgb-disabled), 0.2);
      }
      .container {
        display: flex;
        flex-direction: row;
        height: var(--control-height);
      }
      .slider {
        position: relative;
        height: 100%;
        width: 100%;
        border-radius: var(--control-border-radius);
        transform: translateZ(0);
        overflow: hidden;
        cursor: pointer;
      }
      .slider * {
        pointer-events: none;
      }
      .slider .slider-track-background {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: var(--bg-color);
        background-image: var(--gradient);
      }
      .slider .slider-track-active {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transform: scale3d(var(--value, 0), 1, 1);
        transform-origin: left;
        background-color: var(--main-color);
        transition: transform 180ms ease-in-out;
      }
      .slider .slider-track-indicator {
        position: absolute;
        top: 0;
        bottom: 0;
        left: calc(var(--value, 0) * (100% - 10px));
        width: 10px;
        border-radius: 3px;
        background-color: white;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
        transition: left 180ms ease-in-out;
      }
      .slider .slider-track-indicator:after {
        display: block;
        content: "";
        background-color: var(--main-color);
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        height: 20px;
        width: 2px;
        border-radius: 1px;
      }
      .inactive .slider .slider-track-background {
        background-color: var(--bg-color-inactive);
        background-image: none;
      }
      .inactive .slider .slider-track-indicator:after {
        background-color: var(--main-color-inactive);
      }
      .inactive .slider .slider-track-active {
        background-color: var(--main-color-inactive);
      }
      .controlled .slider .slider-track-active {
        transition: none;
      }
      .controlled .slider .slider-track-indicator {
        transition: none;
      }
    `}};function Pi(t){return(t=>{var e;return(null===(e=t.attributes.supported_color_modes)||void 0===e?void 0:e.some((t=>ee.includes(t))))||!1})(t)}function Ii(t){return(t=>{var e;return(null===(e=t.attributes.supported_color_modes)||void 0===e?void 0:e.some((t=>oe.includes(t))))||!1})(t)}t([ut({type:Boolean})],ji.prototype,"disabled",void 0),t([ut({type:Boolean})],ji.prototype,"inactive",void 0),t([ut({type:Boolean,attribute:"show-active"})],ji.prototype,"showActive",void 0),t([ut({type:Boolean,attribute:"show-indicator"})],ji.prototype,"showIndicator",void 0),t([ut({attribute:!1,type:Number,reflect:!0})],ji.prototype,"value",void 0),t([ut({type:Number})],ji.prototype,"step",void 0),t([ut({type:Number})],ji.prototype,"min",void 0),t([ut({type:Number})],ji.prototype,"max",void 0),t([pt()],ji.prototype,"controlled",void 0),t([function(t,e){return(e,o,i)=>((t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,o),o))(e,o,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}("#slider")],ji.prototype,"slider",void 0),ji=t([lt("mushroom-slider")],ji);let Mi=class extends at{onChange(t){const e=t.detail.value;this.hass.callService("light","turn_on",{entity_id:this.entity.entity_id,brightness_pct:e})}onCurrentChange(t){const e=t.detail.value;null!=e?console.log(`🎚️ Brightness slider moving: ${e}%`):console.log("🎚️ Brightness slider released"),this.dispatchEvent(new CustomEvent("current-change",{detail:{value:e}}))}render(){const t=null!=(e=this.entity).attributes.brightness?Math.max(Math.round(100*e.attributes.brightness/255),1):void 0;var e;return H`
      <mushroom-slider
        .value=${t}
        .disabled=${!te(this.entity)}
        .inactive=${!Qt(this.entity)}
        .showActive=${!0}
        min=${1}
        @change=${this.onChange}
        @current-change=${this.onCurrentChange}
      />
    `}static get styles(){return s`
      :host {
        --slider-color: rgb(var(--rgb-state-light));
        --slider-outline-color: transparent;
        --slider-bg-color: rgba(var(--rgb-state-light), 0.2);
      }
      mushroom-slider {
        --main-color: var(--slider-color);
        --bg-color: var(--slider-bg-color);
        --main-outline-color: var(--slider-outline-color);
      }
    `}};t([ut({attribute:!1})],Mi.prototype,"hass",void 0),t([ut({attribute:!1})],Mi.prototype,"entity",void 0),Mi=t([lt("mushroom-enhanced-brightness-control")],Mi);let Oi=class extends at{onChange(t){const e=t.detail.value;this.hass.callService("light","turn_on",{entity_id:this.entity.entity_id,color_temp:e})}onCurrentChange(t){null!=t.detail.value?console.log(`🎚️ Color temp slider moving: ${t.detail.value}%`):console.log("🎚️ Color temp slider released")}render(){var t,e;const o=null!=(i=this.entity).attributes.color_temp?Math.round(i.attributes.color_temp):void 0;var i;return H`
      <mushroom-slider
        .value=${o}
        .disabled=${!te(this.entity)}
        .inactive=${!Qt(this.entity)}
        .min=${null!==(t=this.entity.attributes.min_mireds)&&void 0!==t?t:0}
        .max=${null!==(e=this.entity.attributes.max_mireds)&&void 0!==e?e:100}
        .showIndicator=${!0}
        @change=${this.onChange}
        @current-change=${this.onCurrentChange}
      />
    `}static get styles(){return s`
      :host {
        --slider-color: #FFC107;
        --slider-outline-color: transparent;
        --slider-bg-color: transparent;
      }
      mushroom-slider {
        --gradient: -webkit-linear-gradient(
          left,
          rgba(166, 209, 255, 0.4) 0%,
          rgba(255, 212, 120, 0.4) 100%
        );
      }
    `}};t([ut({attribute:!1})],Oi.prototype,"hass",void 0),t([ut({attribute:!1})],Oi.prototype,"entity",void 0),Oi=t([lt("mushroom-enhanced-color-temp-control")],Oi);const Vi=[[0,"#f00"],[.17,"#ff0"],[.33,"#0f0"],[.5,"#0ff"],[.66,"#00f"],[.83,"#f0f"],[1,"#f00"]];let Ni=class extends at{constructor(){super(...arguments),this._percent=0}_percentToRGB(t){return(void 0)(360*t,100,100).rgb().array()}_rgbToPercent(t){return(void 0)(t).hsv().hue()/360}onChange(t){const e=t.detail.value;this._percent=e;const o=this._percentToRGB(e/100);this.hass.callService("light","turn_on",{entity_id:this.entity.entity_id,rgb_color:o})}onCurrentChange(t){null!=t.detail.value?console.log(`🎚️ Color slider moving: ${t.detail.value}% hue`):console.log("🎚️ Color slider released")}render(){const t=this._percent||100*this._rgbToPercent(this.entity.attributes.rgb_color||[255,0,0]);return H`
      <mushroom-slider
        .value=${t}
        .disabled=${!te(this.entity)}
        .inactive=${!Qt(this.entity)}
        .min=${0}
        .max=${100}
        .showIndicator=${!0}
        @change=${this.onChange}
        @current-change=${this.onCurrentChange}
      />
    `}static get styles(){const t=Vi.map((([t,e])=>`${e} ${100*t}%`)).join(", ");return s`
      mushroom-slider {
        --gradient: -webkit-linear-gradient(left, ${a(t)});
      }
    `}};t([ut({attribute:!1})],Ni.prototype,"hass",void 0),t([ut({attribute:!1})],Ni.prototype,"entity",void 0),Ni=t([lt("mushroom-enhanced-color-control")],Ni);let Li=class extends at{constructor(){super(...arguments),this._opened=!0}show(){this._opened=!0}hide(){this._opened=!1,this.dispatchEvent(new CustomEvent("popup-closed",{bubbles:!0,composed:!0}))}get _entity(){return this.hass.states[this.config.entity]}get _subEntities(){if(!this.config.show_sub_entities)return[];const t=this._entity.attributes.entity_id;return Array.isArray(t)?t.map((t=>this.hass.states[t])).filter(Boolean):[this._entity]}_renderMainEntity(){return H`
      <div class="main-entity">
        <mushroom-enhanced-light-card
          .hass=${this.hass}
          .config=${{type:"custom:mushroom-enhanced-light-card",entity:this.config.entity,name:this._entity.attributes.friendly_name,button_layout:"vertical-enhanced",font_size:16,text_align:"center",show_brightness_control:!0,show_color_temp_control:!0,show_color_control:!0,collapsible_controls:!1,show_brightness_percentage:!1}}
        ></mushroom-enhanced-light-card>
      </div>
    `}render(){return console.log("🎯 Popup render called. Opened:",this._opened,"Entity:",!!this._entity),this._opened&&this._entity?(console.log("🎯 Popup rendering dialog..."),H`
      <ha-dialog
        open
        @closed=${this.hide}
        .heading=${this.config.title||this._entity.attributes.friendly_name}
      >
        <div class="popup-content" style="background-color: ${this.config.background_color||"#f5f5f5"}; padding: 16px; border-radius: 8px;">
          ${this._renderMainEntity()}
          ${this._renderSubEntities()}
        </div>
        
        <mwc-button slot="primaryAction" @click=${this.hide}>
          Close
        </mwc-button>
      </ha-dialog>
    `):(console.log("🎯 Popup not rendering - opened:",this._opened,"entity:",!!this._entity),H``)}_renderMainControls(){const t=this._entity,e=t.attributes.brightness?Math.round(t.attributes.brightness/255*100):0,o=t.attributes.color_temp||370;return H`
      <div class="main-controls">
        <div class="entity-header">
          <mushroom-shape-icon
            .disabled=${"off"===t.state}
            .icon=${"mdi:power"}
          ></mushroom-shape-icon>
          <div class="entity-info">
            <div class="entity-name">${t.attributes.friendly_name}</div>
            <div class="entity-state">${t.state}</div>
          </div>
          <mushroom-button @click=${this._toggleEntity}>
            <ha-icon .icon=${"on"===t.state?"mdi:power":"mdi:power-off"}></ha-icon>
          </mushroom-button>
        </div>

        ${"on"===t.state?H`
          <div class="controls">
            <div class="control-row">
              <label>Brightness</label>
              <input
                type="range"
                min="0"
                max="100"
                .value=${e}
                @change=${this._setBrightness}
              />
              <span class="value">${e}%</span>
            </div>

            ${t.attributes.color_temp?H`
              <div class="control-row">
                <label>Color Temperature</label>
                <input
                  type="range"
                  min=${t.attributes.min_mireds||153}
                  max=${t.attributes.max_mireds||500}
                  .value=${o}
                  @change=${this._setColorTemp}
                />
                <span class="value">${o}K</span>
              </div>
            `:F}
          </div>
        `:F}
      </div>
    `}_renderSubEntities(){var t,e,o,i,n,r,a;return console.log("🎯 Sub entities count:",this._subEntities.length),console.log("🎯 Sub entities:",this._subEntities.map((t=>t.entity_id))),console.log("🎯 Show sub entities config:",this.config.show_sub_entities),this.config.show_sub_entities?0===this._subEntities.length?H`<p>No sub entities found. This light is not a group.</p>`:H`
      <div class="sub-entities">
        ${this.config.sub_entities_text?H`
          <div class="instructions-text" style="
            font-size: ${(null===(t=this.config.text_style)||void 0===t?void 0:t.font_size)||"14px"};
            font-weight: ${(null===(e=this.config.text_style)||void 0===e?void 0:e.font_weight)||"normal"};
            color: ${(null===(o=this.config.text_style)||void 0===o?void 0:o.color)||"var(--primary-text-color)"};
            background-color: ${(null===(i=this.config.text_style)||void 0===i?void 0:i.background_color)||"transparent"};
            text-align: ${(null===(n=this.config.text_style)||void 0===n?void 0:n.text_align)||"left"};
            padding: ${(null===(r=this.config.text_style)||void 0===r?void 0:r.padding)||"12px 16px"};
            border-radius: ${(null===(a=this.config.text_style)||void 0===a?void 0:a.border_radius)||"8px"};
            margin: 16px 0 12px 0;
            border: 1px solid var(--divider-color);
          ">
            ${this.config.sub_entities_text}
          </div>
        `:F}
        <div class="entity-grid">
          ${this._subEntities.map(((t,e)=>(console.log(`🎯 Rendering entity ${e}:`,t.entity_id,t.attributes.friendly_name),"standard"===this.config.card_type?H`
                <div class="entity-card-wrapper">
                  <hui-card .config=${{type:"light",entity:t.entity_id,name:t.attributes.friendly_name}} .hass=${this.hass}></hui-card>
                </div>
              `:"entity"===this.config.card_type?H`
                <div class="entity-card-wrapper">
                  <hui-card .config=${{type:"entity",entity:t.entity_id,name:t.attributes.friendly_name,tap_action:{action:"toggle"}}} .hass=${this.hass}></hui-card>
                </div>
              `:H`
                <div class="entity-card-wrapper">
                  <hui-card .config=${{type:"custom:mushroom-entity-card",entity:t.entity_id,name:t.attributes.friendly_name,tap_action:{action:"toggle"},icon_color:"blue"}} .hass=${this.hass}></hui-card>
                </div>
              `)))}
        </div>
      </div>
    `:H`<p>Sub entities disabled in config</p>`}_renderEffects(){return this.config.show_effects&&this._entity.attributes.effect_list?H`
      <div class="effects">
        <h4>Effects</h4>
        <select @change=${this._setEffect}>
          <option value="">None</option>
          ${this._entity.attributes.effect_list.map((t=>H`
            <option 
              value=${t}
              .selected=${this._entity.attributes.effect===t}
            >
              ${t}
            </option>
          `))}
        </select>
      </div>
    `:H``}_renderAdvancedControls(){return this.config.show_advanced_controls?H`
      <div class="advanced-controls">
        <h4>Advanced</h4>
        <div class="advanced-buttons">
          <mushroom-button @click=${this._openMoreInfo}>
            <ha-icon icon="mdi:information"></ha-icon>
            More Info
          </mushroom-button>
          <mushroom-button @click=${this._openSettings}>
            <ha-icon icon="mdi:cog"></ha-icon>
            Settings
          </mushroom-button>
        </div>
      </div>
    `:H``}_toggleEntity(){this.hass.callService("light","toggle",{entity_id:this.config.entity})}_toggleSubEntity(t){this.hass.callService("light","toggle",{entity_id:t})}_setBrightness(t){const e=t.target;this.hass.callService("light","turn_on",{entity_id:this.config.entity,brightness_pct:Number(e.value)})}_setColorTemp(t){const e=t.target;this.hass.callService("light","turn_on",{entity_id:this.config.entity,color_temp:Number(e.value)})}_setEffect(t){const e=t.target;e.value&&this.hass.callService("light","turn_on",{entity_id:this.config.entity,effect:e.value})}_openMoreInfo(){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:this.config.entity},bubbles:!0,composed:!0}))}_openSettings(){console.log("Open settings for",this.config.entity)}static get styles(){return s`
      :host {
        display: block;
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        z-index: 9999 !important;
        pointer-events: none !important;
      }
      
      :host > * {
        pointer-events: auto !important;
      }
      
      ha-dialog {
        --mdc-dialog-z-index: 9999;
        --mdc-dialog-scrim-z-index: 9998;
        z-index: 9999 !important;
        pointer-events: auto !important;
      }
      
      .popup-content {
        padding: 16px;
        max-width: 600px;
        min-width: 400px;
      }

      .main-entity {
        margin-bottom: 24px;
      }

      .entity-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 16px;
      }

      .entity-card-wrapper {
        background: var(--card-background-color);
        border-radius: 12px;
        padding: 8px;
        box-shadow: var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15));
      }

      .entity-header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 16px;
        padding: 12px;
        background: var(--card-background-color);
        border-radius: 12px;
      }

      .entity-info {
        flex: 1;
      }

      .entity-name {
        font-weight: 500;
        font-size: 16px;
      }

      .entity-state {
        font-size: 14px;
        color: var(--secondary-text-color);
        text-transform: capitalize;
      }

      .controls {
        margin-bottom: 24px;
      }

      .control-row {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 12px;
      }

      .control-row label {
        min-width: 120px;
        font-weight: 500;
      }

      .control-row input[type="range"] {
        flex: 1;
      }

      .control-row .value {
        min-width: 50px;
        text-align: right;
        font-size: 14px;
        color: var(--secondary-text-color);
      }

      .sub-entities, .effects, .advanced-controls {
        margin-bottom: 24px;
      }

      .sub-entities h4, .effects h4, .advanced-controls h4 {
        margin: 0 0 12px 0;
        font-size: 14px;
        font-weight: 500;
        color: var(--secondary-text-color);
      }

      .sub-entity {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px;
        background: var(--card-background-color);
        border-radius: 8px;
        margin-bottom: 8px;
      }

      .sub-entity .name {
        flex: 1;
      }

      .effects select {
        width: 100%;
        padding: 8px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        background: var(--card-background-color);
        color: var(--primary-text-color);
      }

      .advanced-buttons {
        display: flex;
        gap: 8px;
      }

      .advanced-buttons mushroom-button {
        flex: 1;
      }
    `}};t([ut({attribute:!1})],Li.prototype,"hass",void 0),t([ut({attribute:!1})],Li.prototype,"config",void 0),t([pt()],Li.prototype,"_opened",void 0),Li=t([lt("mushroom-enhanced-popup")],Li);const Bi="mushroom-enhanced-light-card",Di={brightness_control:"mdi:brightness-4",color_temp_control:"mdi:thermometer",color_control:"mdi:palette"};!function(t){const e=window;e.customCards=e.customCards||[];const o=t.type.replace("-card","").replace("mushroom-","");e.customCards.push(Object.assign(Object.assign({},t),{preview:!0,documentationURL:`${Ai}/blob/main/docs/cards/${o}.md`}))}({type:Bi,name:"Mushroom Enhanced Light Card",description:"Enhanced card for light entity with unified controls"});let Ui=class extends Ci{constructor(){super(...arguments),this._showPopup=!1}static async getConfigElement(){return await Promise.resolve().then((function(){return Qi})),document.createElement(Si)}static async getStubConfig(t){const e=Object.keys(t.states).filter((t=>Ei.includes(t.split(".")[0])));return{type:`custom:${Bi}`,entity:e[0],button_layout:"inline",font_size:14,icon_offset_x:0,show_brightness_percentage:!0,text_align:"left"}}get _controls(){if(!this._config||!this._stateObj)return[];const t=this._stateObj,e=[];var o,i;return this._config.show_brightness_control&&Ii(t)&&e.push("brightness_control"),this._config.show_color_temp_control&&(null!==(i=null===(o=t.attributes.supported_color_modes)||void 0===o?void 0:o.some((t=>["color_temp"].includes(t))))&&void 0!==i&&i)&&e.push("color_temp_control"),this._config.show_color_control&&Pi(t)&&e.push("color_control"),e}get hasControls(){return this._controls.length>0}setConfig(t){var e;console.log("🎯 Enhanced light card config:",t),super.setConfig(Object.assign({tap_action:{action:"toggle"},hold_action:{action:"more-info"},double_tap_action:{action:"more-info"},button_layout:"inline",font_size:14,icon_offset_x:0,show_brightness_percentage:!0,text_align:"left",card_background_image_opacity:1,card_background_image_position:"center",card_border_width:"0px",card_border_radius:"12px"},t)),console.log("🎯 Final config with actions:",this._config),console.log("🎯 Double tap action:",null===(e=this._config)||void 0===e?void 0:e.double_tap_action),this.updateActiveControl(),this.updateBrightness()}_onControlTap(t,e){e.stopPropagation(),this._activeControl=t}updated(t){super.updated(t),this.hass&&t.has("hass")&&(this.updateActiveControl(),this.updateBrightness())}updateBrightness(){this.brightness=void 0;const t=this._stateObj;t&&(this.brightness=t.attributes.brightness)}onCurrentBrightnessChange(t){null!=t.detail.value&&(this.brightness=255*t.detail.value/100)}updateActiveControl(){const t=!!this._activeControl&&this._controls.includes(this._activeControl);this._activeControl=t?this._activeControl:this._controls[0]}_handleAction(t){var e,o;const i=t.detail.action;if(console.log("🎯 Action type:",i),"double_tap"===i&&"enhanced-more-info"===(null===(o=null===(e=this._config)||void 0===e?void 0:e.double_tap_action)||void 0===o?void 0:o.action))return console.log("🔥 Opening enhanced popup!"),void(this._showPopup=!0);console.log("🎯 Passing to handleAction..."),(async(t,e,o,i)=>{yt(t,"hass-action",{config:o,action:i})})(this,this.hass,this._config,t.detail.action)}_handlePopupClosed(){console.log("🎯 Popup closed event received"),this._showPopup=!1}render(){var t,e,o,i,n,r,a,s,l,c,d,u,p,h,_;if(!this._config||!this.hass||!this._config.entity)return F;const m=this._stateObj;if(!m)return this.renderNotFound(this._config);const g=this._config.name||m.attributes.friendly_name||"";this._config.icon;const f=Ce(this._config),v=function(t,e){return"entity-picture"===e?function(t){return t.attributes.entity_picture_local||t.attributes.entity_picture}(t):void 0}(m,f.icon_type);let b=this.hass.formatEntityState(m);if("vertical-enhanced"===this._config.button_layout)b="";else if(null!=this.brightness&&this._config.show_brightness_percentage){b=this.hass.formatEntityAttributeValue(m,"brightness",this.brightness)}const y=Gt(this.hass),k=(!this._config.collapsible_controls||Qt(m))&&this._controls.length,w={"--enhanced-font-size":`${this._config.font_size||14}px`,"--enhanced-icon-offset":`${this._config.icon_offset_x||0}px`};if(this._config.card_background_color&&(w["background-color"]=this._config.card_background_color),this._config.card_background_image){const t=this._config.card_background_image_opacity||1,e=this._config.card_background_image_position||"center";if(1===t)w["background-image"]=`url(${this._config.card_background_image})`;else{const e=1-t;w["background-image"]=`linear-gradient(rgba(255,255,255,${e}), rgba(255,255,255,${e})), url(${this._config.card_background_image})`}w["background-size"]="cover",w["background-position"]=e,w["background-repeat"]="no-repeat"}return this._config.card_border_color&&(w["border-color"]=this._config.card_border_color,w["border-style"]="solid"),this._config.card_border_width&&(w["border-width"]=this._config.card_border_width,this._config.card_border_color||(w["border-color"]="var(--primary-color)",w["border-style"]="solid")),this._config.card_border_radius&&(w["border-radius"]=this._config.card_border_radius),this._config.card_box_shadow&&(w["box-shadow"]=this._config.card_box_shadow),H`
      <ha-card
        class=${gt({"fill-container":f.fill_container,"enhanced-font":!0,"enhanced-icon-offset":0!==this._config.icon_offset_x})}
        style=${bt(w)}
      >
        <mushroom-card .appearance=${f} ?rtl=${y}>
          <div class="enhanced-state-wrapper align-${this._config.text_align||"left"}" style=${bt({transform:`translateX(${this._config.icon_offset_x||0}px)`})}>
            <mushroom-state-item
              ?rtl=${y}
              .appearance=${f}
              @action=${this._handleAction}
              .actionHandler=${ne({hasHold:re(this._config.hold_action),hasDoubleClick:re(this._config.double_tap_action)})}
              @dblclick=${()=>console.log("🔥 Double click detected!")}
              style=${bt({"--card-primary-font-size":`${this._config.font_size||14}px`})}
            >
              ${v?this.renderPicture(v):this.renderIcon(m)}
              ${this.renderBadge(m)}
              ${this.renderStateInfo(m,f,g,b)};
            </mushroom-state-item>
          </div>
          ${k?H`
                <div class="actions ${"vertical-enhanced"===this._config.button_layout?"enhanced-vertical":""}" ?rtl=${y}>
                  ${this.renderUnifiedControl(m)}
                  <div class="button-container">
                    ${this.renderControlButtons()}
                  </div>
                </div>
              `:F}
        </mushroom-card>
        
        ${this._showPopup?H`
          <mushroom-enhanced-popup
            .hass=${this.hass}
            .config=${{entity:this._config.entity,title:(null===(t=this._config.enhanced_popup)||void 0===t?void 0:t.title)||this._config.name||(null===(e=this._stateObj)||void 0===e?void 0:e.attributes.friendly_name),show_sub_entities:null===(i=null===(o=this._config.enhanced_popup)||void 0===o?void 0:o.show_sub_entities)||void 0===i||i,show_effects:null===(r=null===(n=this._config.enhanced_popup)||void 0===n?void 0:n.show_effects)||void 0===r||r,show_scenes:null!==(s=null===(a=this._config.enhanced_popup)||void 0===a?void 0:a.show_scenes)&&void 0!==s&&s,show_advanced_controls:null===(c=null===(l=this._config.enhanced_popup)||void 0===l?void 0:l.show_advanced_controls)||void 0===c||c,card_type:null!==(u=null===(d=this._config.enhanced_popup)||void 0===d?void 0:d.card_type)&&void 0!==u?u:"mushroom",background_color:(null===(p=this._config.enhanced_popup)||void 0===p?void 0:p.background_color)||"#f5f5f5",sub_entities_text:(null===(h=this._config.enhanced_popup)||void 0===h?void 0:h.sub_entities_text)||"If a light didn't react properly, please click here the light that is still on.",text_style:(null===(_=this._config.enhanced_popup)||void 0===_?void 0:_.text_style)||{font_size:"14px",font_weight:"normal",color:"var(--primary-text-color)",background_color:"#fff3cd",text_align:"center",padding:"12px 16px",border_radius:"8px"}}}
            @popup-closed=${this._handlePopupClosed}
          ></mushroom-enhanced-popup>
        `:F}
      </ha-card>
    `}renderIcon(t){var e,o;const i=Qt(t),n={};null===(e=this._config)||void 0===e||e.icon_color,null===(o=this._config)||void 0===o||o.icon_offset_x;return i?(n["--icon-color"]="rgb(76, 175, 80)",n["--shape-color"]="rgba(76, 175, 80, 0.2)"):(n["--icon-color"]="rgb(158, 158, 158)",n["--shape-color"]="rgba(158, 158, 158, 0.1)"),H`
      <mushroom-shape-icon
        slot="icon"
        .disabled=${!i}
        style=${bt(n)}
      >
        <ha-icon .icon=${"mdi:power"}></ha-icon>
      </mushroom-shape-icon>
    `}renderControlButtons(){return H`
      ${this._controls.map((t=>H`
          <mushroom-button 
            @click=${e=>this._onControlTap(t,e)}
            class=${gt({active:t===this._activeControl})}
          >
            <ha-icon .icon=${Di[t]}></ha-icon>
          </mushroom-button>
        `))}
    `}renderUnifiedControl(t){var e,o;const i=this._activeControl||this._controls[0];if(!i)return F;switch(i){case"brightness_control":const i=function(t){return null!=t.attributes.rgb_color?t.attributes.rgb_color:void 0}(t),n={},r=null===(e=this._config)||void 0===e?void 0:e.icon_color;if(i&&(null===(o=this._config)||void 0===o?void 0:o.use_light_color)){const t=i.join(",");n["--slider-color"]=`rgb(${t})`,n["--slider-bg-color"]=`rgba(${t}, 0.2)`,(void 0)(i).l()>96&&!this.hass.themes.darkMode&&(n["--slider-bg-color"]="rgba(var(--rgb-primary-text-color), 0.05)",n["--slider-color"]="rgba(var(--rgb-primary-text-color), 0.15)")}else if(r){const t=function(t){if("primary"===t||"accent"===t)return`var(--rgb-${t}-color)`;if(mi.includes(t))return`var(--rgb-${t})`;if(t.startsWith("#"))try{return(void 0)(t).rgb().array().join(", ")}catch(t){return""}return t}(r);n["--slider-color"]=`rgb(${t})`,n["--slider-bg-color"]=`rgba(${t}, 0.2)`}return H`
          <mushroom-enhanced-brightness-control
            .hass=${this.hass}
            .entity=${t}
            style=${bt(n)}
            @current-change=${this.onCurrentBrightnessChange}
          />
        `;case"color_temp_control":return H`
          <mushroom-enhanced-color-temp-control
            .hass=${this.hass}
            .entity=${t}
          />
        `;case"color_control":return H`
          <mushroom-enhanced-color-control .hass=${this.hass} .entity=${t} />
        `;default:return F}}static get styles(){return[super.styles,$i,s`
        mushroom-state-item {
          cursor: pointer;
        }
        mushroom-shape-icon {
          --icon-color: rgb(var(--rgb-state-light));
          --shape-color: rgba(var(--rgb-state-light), 0.2);
        }
        mushroom-enhanced-brightness-control,
        mushroom-enhanced-color-temp-control,
        mushroom-enhanced-color-control {
          flex: 1;
        }
        mushroom-button.active {
          --icon-color: var(--accent-color);
          --button-bg-color: rgba(var(--rgb-accent-color), 0.2);
        }
        /* Vertical enhanced layout - buttons below slider */
        .actions.enhanced-vertical {
          flex-direction: column !important;
          align-items: stretch !important;
        }
        .actions.enhanced-vertical > mushroom-enhanced-brightness-control,
        .actions.enhanced-vertical > mushroom-enhanced-color-temp-control,
        .actions.enhanced-vertical > mushroom-enhanced-color-control {
          margin: 0 var(--control-spacing);
          margin-bottom: var(--control-spacing);
        }
        /* Button container styling */
        .button-container {
          display: flex;
          gap: 8px;
        }
        .actions.enhanced-vertical .button-container {
          justify-content: center;
          margin-top: 4px;
          margin-bottom: 12px;
        }
        /* Custom font size for enhanced card */
        :host(.enhanced-font) mushroom-state-info .primary {
          font-size: var(--enhanced-font-size, 14px) !important;
        }
        /* Enhanced state wrapper for positioning */
        .enhanced-state-wrapper {
          width: 100%;
          display: flex;
        }
        .enhanced-state-wrapper.align-center {
          justify-content: center;
        }
        .enhanced-state-wrapper.align-right {
          justify-content: flex-end;
        }
        .enhanced-state-wrapper.align-left {
          justify-content: flex-start;
        }
        /* Enhanced card styling support */
        ha-card[style*="background-image"] {
          background-repeat: no-repeat;
        }
      `]}};t([pt()],Ui.prototype,"_activeControl",void 0),t([pt()],Ui.prototype,"brightness",void 0),t([pt()],Ui.prototype,"_showPopup",void 0),Ui=t([lt(Bi)],Ui);const Ri="mushroom-split-layout-card";let Hi=class extends Ci{constructor(){super(...arguments),this._sidebarElements=[],this._mainElements=[]}static async getConfigElement(){return await Promise.resolve().then((function(){return en})),document.createElement("mushroom-split-layout-card-editor")}static async getStubConfig(t){return{type:`custom:${Ri}`,sidebar:{cards:[{type:"markdown",content:"## Sidebar\nAdd your cards here"}]},main:{cards:[{type:"markdown",content:"## Main Content\nAdd your cards here"}]}}}setConfig(t){this._config=t,this._createChildCards()}updated(t){super.updated(t),t.has("hass")&&this._updateChildCards()}async _createChildCards(){var t,e;this._config&&(this._sidebarElements=await this._createElementsFromConfig((null===(t=this._config.sidebar)||void 0===t?void 0:t.cards)||[]),this._mainElements=await this._createElementsFromConfig((null===(e=this._config.main)||void 0===e?void 0:e.cards)||[]))}async _createElementsFromConfig(t){const e=[];for(const o of t)try{const t=await this._createCardElement(o);t&&e.push(t)}catch(t){console.error(`Error creating card ${o.type}:`,t);const i=document.createElement("div");i.innerHTML=`\n          <ha-card>\n            <div style="padding: 16px; color: red;">\n              <div style="font-weight: 500;">Error loading ${o.type}</div>\n              <div style="font-size: 12px;">${t.message}</div>\n            </div>\n          </ha-card>\n        `,e.push(i)}return e}async _createCardElement(t){const e=document.createElement("div");return e.className="card-placeholder","markdown"===t.type?e.innerHTML=`\n        <ha-card>\n          <div class="card-content" style="padding: 16px;">\n            <div style="font-weight: 500; margin-bottom: 8px;">📝 Markdown Card</div>\n            <div style="white-space: pre-line; color: var(--primary-text-color);">${t.content||"No content"}</div>\n            <div style="font-size: 12px; color: var(--secondary-text-color); margin-top: 8px;">\n              ✅ Ready for UI editing\n            </div>\n          </div>\n        </ha-card>\n      `:t.type.startsWith("custom:mushroom-enhanced-light-card")?e.innerHTML=`\n        <ha-card>\n          <div style="padding: 16px;">\n            <div style="font-weight: 500; margin-bottom: 8px;">💡 Enhanced Light Card</div>\n            <div style="color: var(--secondary-text-color);">Entity: ${t.entity}</div>\n            <div style="color: var(--secondary-text-color);">Layout: ${t.button_layout||"inline"}</div>\n            <div style="font-size: 12px; color: var(--accent-color); margin-top: 8px;">\n              ✅ Ready for UI editing\n            </div>\n          </div>\n        </ha-card>\n      `:e.innerHTML=`\n        <ha-card>\n          <div style="padding: 16px;">\n            <div style="font-weight: 500; margin-bottom: 8px;">🎴 ${t.type}</div>\n            <div style="color: var(--secondary-text-color);">Card type: ${t.type}</div>\n            <div style="font-size: 12px; color: var(--accent-color); margin-top: 8px;">\n              ✅ Ready for UI editing\n            </div>\n          </div>\n        </ha-card>\n      `,e}_updateChildCards(){}_renderCardConfig(t){return H`<hui-card .config=${t} .hass=${this.hass}></hui-card>`}_getCardWrapperStyle(){if(!this._config.card_style)return{};const t=this._config.card_style;return{"--card-border-radius":t.border_radius||"12px","--card-box-shadow":t.box_shadow||"var(--ha-card-box-shadow)","--card-border-width":t.border_width||(t.border?"1px":"0px"),"--card-border-color":t.border_color||t.border||"transparent","--card-border-style":t.border_style||"solid","--card-background-color":t.background_color||"var(--ha-card-background)","--card-background-opacity":(t.background_opacity||1).toString(),"--card-backdrop-filter":t.backdrop_filter||"none"}}_renderLogo(){var t,e,o;if(!(null===(t=this._config.logo)||void 0===t?void 0:t.image_url))return H``;const i=this._config.logo,n=i.position||"top-right",r=i.margin||"20px",a={};"top-left"===n?(a.top=i.margin_top||r,a.left=i.margin_left||r):"top-right"===n?(a.top=i.margin_top||r,a.right=i.margin_right||r):"bottom-left"===n?(a.bottom=i.margin_bottom||r,a.left=i.margin_left||r):"bottom-right"===n?(a.bottom=i.margin_bottom||r,a.right=i.margin_right||r):"center"===n&&(a.top="50%",a.left="50%",a.transform=i.transform||"translate(-50%, -50%)");const s=Object.assign({position:"absolute","z-index":(i.z_index||1e3).toString(),opacity:(i.opacity||1).toString(),width:i.width||(null===(e=i.size)||void 0===e?void 0:e.split(" ")[0])||"120px",height:i.height||(null===(o=i.size)||void 0===o?void 0:o.split(" ")[1])||"auto","max-width":i.max_width||"200px","max-height":i.max_height||"200px","object-fit":"contain",filter:i.filter||"drop-shadow(0 4px 8px rgba(0,0,0,0.3))",transform:i.transform||"none",transition:i.transition||"opacity 0.3s ease","border-radius":i.border_radius||"0",border:i.border||"none","background-color":i.background_color||"transparent",padding:i.padding||"0"},a);return H`
      <img 
        class="logo-overlay"
        src="${i.image_url}"
        style=${bt(s)}
        alt="Logo"
      />
    `}render(){var t,e,o,i,n,r,a,s,l,c,d,u,p,h,_,m,g,f,v,b,y,k,w,x,z,C,$,A,S,E,T,j,P,I,M,O,V,N,L,B,D,U,R,K,W,Z,q,G,Y,X,J;if(!this._config)return H``;const Q=this._config.sidebar_width||28,tt=100-Q,et=this._config.gap||12,ot={"--split-sidebar-bg":(null===(t=this._config.sidebar)||void 0===t?void 0:t.background_color)||"transparent","--split-sidebar-bg-image":(null===(e=this._config.sidebar)||void 0===e?void 0:e.background_image)?`url(${this._config.sidebar.background_image})`:"none","--split-sidebar-bg-size":(null===(o=this._config.sidebar)||void 0===o?void 0:o.background_size)||"cover","--split-sidebar-bg-position":(null===(i=this._config.sidebar)||void 0===i?void 0:i.background_position)||"center","--split-sidebar-bg-repeat":(null===(n=this._config.sidebar)||void 0===n?void 0:n.background_repeat)||"no-repeat","--split-sidebar-bg-attachment":(null===(r=this._config.sidebar)||void 0===r?void 0:r.background_attachment)||"scroll","--split-sidebar-opacity":(null===(s=null===(a=this._config.sidebar)||void 0===a?void 0:a.opacity)||void 0===s?void 0:s.toString())||"1","--split-sidebar-padding":(null===(l=this._config.sidebar)||void 0===l?void 0:l.padding)||"16px","--split-sidebar-margin":(null===(c=this._config.sidebar)||void 0===c?void 0:c.margin)||"0","--split-sidebar-border-radius":(null===(d=this._config.sidebar)||void 0===d?void 0:d.border_radius)||"var(--ha-card-border-radius, 12px)","--split-sidebar-border":(null===(u=this._config.sidebar)||void 0===u?void 0:u.border)||"none","--split-sidebar-box-shadow":(null===(p=this._config.sidebar)||void 0===p?void 0:p.box_shadow)||"var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15))","--split-sidebar-overflow":(null===(h=this._config.sidebar)||void 0===h?void 0:h.overflow)||"auto","--split-sidebar-min-height":(null===(_=this._config.sidebar)||void 0===_?void 0:_.min_height)||"auto","--split-sidebar-max-height":(null===(m=this._config.sidebar)||void 0===m?void 0:m.max_height)||"none"},it={"--split-main-bg":(null===(g=this._config.main)||void 0===g?void 0:g.background_color)||"transparent","--split-main-bg-image":(null===(f=this._config.main)||void 0===f?void 0:f.background_image)?`url(${this._config.main.background_image})`:"none","--split-main-bg-size":(null===(v=this._config.main)||void 0===v?void 0:v.background_size)||"cover","--split-main-bg-position":(null===(b=this._config.main)||void 0===b?void 0:b.background_position)||"center","--split-main-bg-repeat":(null===(y=this._config.main)||void 0===y?void 0:y.background_repeat)||"no-repeat","--split-main-bg-attachment":(null===(k=this._config.main)||void 0===k?void 0:k.background_attachment)||"scroll","--split-main-opacity":(null===(x=null===(w=this._config.main)||void 0===w?void 0:w.opacity)||void 0===x?void 0:x.toString())||"1","--split-main-padding":(null===(z=this._config.main)||void 0===z?void 0:z.padding)||"16px","--split-main-margin":(null===(C=this._config.main)||void 0===C?void 0:C.margin)||"0","--split-main-border-radius":(null===($=this._config.main)||void 0===$?void 0:$.border_radius)||"var(--ha-card-border-radius, 12px)","--split-main-border":(null===(A=this._config.main)||void 0===A?void 0:A.border)||"none","--split-main-box-shadow":(null===(S=this._config.main)||void 0===S?void 0:S.box_shadow)||"var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15))","--split-main-overflow":(null===(E=this._config.main)||void 0===E?void 0:E.overflow)||"auto","--split-main-min-height":(null===(T=this._config.main)||void 0===T?void 0:T.min_height)||"auto","--split-main-max-height":(null===(j=this._config.main)||void 0===j?void 0:j.max_height)||"none"},nt={"--container-bg":(null===(P=this._config.container_style)||void 0===P?void 0:P.background_color)||"transparent","--container-bg-image":(null===(I=this._config.container_style)||void 0===I?void 0:I.background_image)?`url(${this._config.container_style.background_image})`:"none","--container-bg-size":(null===(M=this._config.container_style)||void 0===M?void 0:M.background_size)||"cover","--container-bg-position":(null===(O=this._config.container_style)||void 0===O?void 0:O.background_position)||"center","--container-bg-repeat":(null===(V=this._config.container_style)||void 0===V?void 0:V.background_repeat)||"no-repeat","--container-bg-attachment":(null===(N=this._config.container_style)||void 0===N?void 0:N.background_attachment)||"scroll","--container-opacity":(null===(B=null===(L=this._config.container_style)||void 0===L?void 0:L.opacity)||void 0===B?void 0:B.toString())||"1","--container-padding":(null===(D=this._config.container_style)||void 0===D?void 0:D.padding)||"0","--container-margin":(null===(U=this._config.container_style)||void 0===U?void 0:U.margin)||"0","--container-border-radius":(null===(R=this._config.container_style)||void 0===R?void 0:R.border_radius)||"0","--container-border":(null===(K=this._config.container_style)||void 0===K?void 0:K.border)||"none","--container-box-shadow":(null===(W=this._config.container_style)||void 0===W?void 0:W.box_shadow)||"none"};return Object.entries(nt).map((([t,e])=>`${t.replace(/^--/,"").replace(/-/g,"_")}: ${e}`)).join("; "),(null===(Z=this._config.container_style)||void 0===Z?void 0:Z.custom_css)&&this._config.container_style.custom_css,Object.entries(ot).map((([t,e])=>`${t.replace(/^--split-sidebar-/,"").replace(/-/g,"_")}: ${e}`)).join("; "),(null===(q=this._config.sidebar)||void 0===q?void 0:q.custom_css)&&this._config.sidebar.custom_css,Object.entries(it).map((([t,e])=>`${t.replace(/^--split-main-/,"").replace(/-/g,"_")}: ${e}`)).join("; "),(null===(G=this._config.main)||void 0===G?void 0:G.custom_css)&&this._config.main.custom_css,H`
      <div 
        class="split-layout-container"
        style=${bt(nt)}
      >
        <div 
          class="split-layout" 
          style=${bt({"--sidebar-width":`${Q}%`,"--main-width":`${tt}%`,"--layout-gap":`${et}px`,"--full-height":!1!==this._config.full_height?"100vh":"auto","--full-width":!1!==this._config.full_width?"100vw":"100%"})}
        >
          <div 
            class="sidebar-section" 
            style=${bt(ot)}
          >
            ${((null===(Y=this._config.sidebar)||void 0===Y?void 0:Y.cards)||[]).map((t=>H`
              <div class="card-wrapper" style=${bt(this._getCardWrapperStyle())}>
                ${this._renderCardConfig(t)}
              </div>
            `))}
          </div>
          
          <div 
            class="main-section" 
            style=${bt(it)}
          >
            ${((null===(X=this._config.main)||void 0===X?void 0:X.cards)||[]).map((t=>H`
              <div class="card-wrapper" style=${bt(this._getCardWrapperStyle())}>
                ${this._renderCardConfig(t)}
              </div>
            `))}
          </div>
        </div>
        
        ${(null===(J=this._config.logo)||void 0===J?void 0:J.image_url)?this._renderLogo():F}
      </div>
    `}static get styles(){return s`
      :host {
        display: block;
        height: var(--full-height, 100vh);
        width: var(--full-width, 100vw);
        /* Set HA card border radius variable globally for this component */
        --ha-card-border-radius: var(--card-border-radius, 12px);
      }
      
      .split-layout-container {
        background: var(--container-bg);
        background-image: var(--container-bg-image);
        background-size: var(--container-bg-size);
        background-position: var(--container-bg-position);
        background-repeat: var(--container-bg-repeat);
        background-attachment: var(--container-bg-attachment);
        opacity: var(--container-opacity);
        padding: var(--container-padding);
        margin: var(--container-margin);
        border-radius: var(--container-border-radius);
        border: var(--container-border);
        box-shadow: var(--container-box-shadow);
        height: 100%;
        width: 100%;
        box-sizing: border-box;
      }
      
      .split-layout {
        display: grid;
        grid-template-columns: var(--sidebar-width) var(--main-width);
        gap: var(--layout-gap);
        height: 100%;
        width: 100%;
        padding: var(--layout-gap);
        box-sizing: border-box;
        margin: 0;
      }

      .sidebar-section {
        background: var(--split-sidebar-bg);
        background-image: var(--split-sidebar-bg-image);
        background-size: var(--split-sidebar-bg-size);
        background-position: var(--split-sidebar-bg-position);
        background-repeat: var(--split-sidebar-bg-repeat);
        background-attachment: var(--split-sidebar-bg-attachment);
        opacity: var(--split-sidebar-opacity);
        padding: var(--split-sidebar-padding);
        margin: var(--split-sidebar-margin);
        border-radius: var(--split-sidebar-border-radius);
        border: var(--split-sidebar-border);
        box-shadow: var(--split-sidebar-box-shadow);
        overflow: var(--split-sidebar-overflow);
        min-height: var(--split-sidebar-min-height);
        max-height: var(--split-sidebar-max-height);
        box-sizing: border-box;
        position: relative;
        z-index: 1;
      }

      .main-section {
        background: var(--split-main-bg);
        background-image: var(--split-main-bg-image);
        background-size: var(--split-main-bg-size);
        background-position: var(--split-main-bg-position);
        background-repeat: var(--split-main-bg-repeat);
        background-attachment: var(--split-main-bg-attachment);
        opacity: var(--split-main-opacity);
        padding: var(--split-main-padding);
        margin: var(--split-main-margin);
        border-radius: var(--split-main-border-radius);
        border: var(--split-main-border);
        box-shadow: var(--split-main-box-shadow);
        overflow: var(--split-main-overflow);
        min-height: var(--split-main-min-height);
        max-height: var(--split-main-max-height);
        box-sizing: border-box;
      }

      .card-wrapper {
        margin-bottom: 16px;
        position: relative;
      }

      .card-wrapper:last-child {
        margin-bottom: 0;
      }
      
      /* Fix top artifact by removing margin from grid card wrappers */
      .card-wrapper:has(ha-card[data-card-type*="grid"]),
      .card-wrapper:has(hui-card[data-card-type*="grid"]) {
        margin-bottom: 0 !important;
        margin-top: 0 !important;
        padding: 0 !important;
      }

      /* Fix for grid layout artifacts */
      .card-wrapper hui-card[data-card-type="grid"],
      .card-wrapper ha-card[data-card-type="grid"] {
        overflow: hidden !important;
      }

      /* Prevent grid container border artifacts */
      .card-wrapper * [class*="grid"],
      .card-wrapper * [class*="layout"] {
        border: none !important;
        outline: none !important;
      }

      /* Global card styling via CSS variables */
      .card-wrapper {
        --ha-card-border-radius: var(--card-border-radius, 12px);
        --ha-card-box-shadow: var(--card-box-shadow, var(--ha-card-box-shadow));
      }
      
      /* FINAL APPROACH: Only target specific safe card types */
      .card-wrapper hui-card[data-card-type="light"],
      .card-wrapper hui-card[data-card-type="entities"], 
      .card-wrapper hui-card[data-card-type="markdown"],
      .card-wrapper hui-card[data-card-type="custom:mushroom-light-card"],
      .card-wrapper hui-card[data-card-type="custom:mushroom-enhanced-light-card"],
      .card-wrapper hui-card[data-card-type="custom:mushroom-entity-card"] {
        background-color: var(--card-background-color, var(--ha-card-background)) !important;
        opacity: var(--card-background-opacity, 1) !important;
        backdrop-filter: var(--card-backdrop-filter, none) !important;
        box-shadow: var(--card-box-shadow, var(--ha-card-box-shadow)) !important;
        overflow: hidden !important;
        box-sizing: border-box !important;
        position: relative !important;
      }
      
      /* Pseudo-element border for specific safe card types only */
      .card-wrapper hui-card[data-card-type="light"]::after,
      .card-wrapper hui-card[data-card-type="entities"]::after,
      .card-wrapper hui-card[data-card-type="markdown"]::after,
      .card-wrapper hui-card[data-card-type="custom:mushroom-light-card"]::after,
      .card-wrapper hui-card[data-card-type="custom:mushroom-enhanced-light-card"]::after,
      .card-wrapper hui-card[data-card-type="custom:mushroom-entity-card"]::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: var(--card-border-width, 0px) var(--card-border-style, solid) var(--card-border-color, transparent);
        border-radius: inherit;
        pointer-events: none;
        z-index: 1;
      }
      
      /* Specifically block grid cards from ALL styling including pseudo-elements */
      .card-wrapper ha-card[data-card-type*="grid"],
      .card-wrapper hui-card[data-card-type*="grid"],
      .card-wrapper ha-card[class*="grid"],
      .card-wrapper hui-card[class*="grid"] {
        background-color: transparent !important;
        border: none !important;
        box-shadow: none !important;
        outline: none !important;
      }
      
      /* Block pseudo-elements on grid cards */
      .card-wrapper ha-card[data-card-type*="grid"]::before,
      .card-wrapper ha-card[data-card-type*="grid"]::after,
      .card-wrapper hui-card[data-card-type*="grid"]::before,
      .card-wrapper hui-card[data-card-type*="grid"]::after,
      .card-wrapper ha-card[class*="grid"]::before,
      .card-wrapper ha-card[class*="grid"]::after,
      .card-wrapper hui-card[class*="grid"]::before,
      .card-wrapper hui-card[class*="grid"]::after {
        display: none !important;
        content: none !important;
      }
      

      /* CRITICAL FIX: Prevent card background bleeding through grid gaps */
      .card-wrapper ha-card[data-card-type="grid"],
      .card-wrapper hui-card[data-card-type="grid"],
      .card-wrapper ha-card:has(.grid),
      .card-wrapper hui-card:has(.grid) {
        background-color: transparent !important;
        background: transparent !important;
      }

      /* FIX: Independent column heights in grid cards - AGGRESSIVE OVERRIDE */
      .card-wrapper ha-card[data-card-type="grid"],
      .card-wrapper hui-card[data-card-type="grid"],
      .card-wrapper ha-card:has(.grid),
      .card-wrapper hui-card:has(.grid) {
        display: block !important;
      }

      .card-wrapper ha-card[data-card-type="grid"] .grid,
      .card-wrapper hui-card[data-card-type="grid"] .grid,
      .card-wrapper ha-card:has(.grid) .grid,
      .card-wrapper hui-card:has(.grid) .grid,
      .card-wrapper * .grid-container {
        display: grid !important;
        grid-auto-rows: min-content !important;
        align-items: start !important;
        align-content: start !important;
        gap: var(--grid-card-gap, 12px) !important;
      }

      /* Force each grid item to use natural height */
      .card-wrapper ha-card[data-card-type="grid"] .grid > *,
      .card-wrapper hui-card[data-card-type="grid"] .grid > *,
      .card-wrapper ha-card:has(.grid) .grid > *,
      .card-wrapper hui-card:has(.grid) .grid > *,
      .card-wrapper * .grid-container > * {
        align-self: start !important;
        height: auto !important;
        min-height: auto !important;
        max-height: none !important;
        grid-row: auto !important;
      }

      /* Override any row-based grid behavior */
      .card-wrapper ha-card[data-card-type="grid"] .grid,
      .card-wrapper hui-card[data-card-type="grid"] .grid,
      .card-wrapper ha-card:has(.grid) .grid,
      .card-wrapper hui-card:has(.grid) .grid {
        grid-template-rows: none !important;
      }

      /* Target HA's grid card specifically */
      .card-wrapper * .card-content,
      .card-wrapper * .grid-container,
      .card-wrapper * [class*="grid"],
      .card-wrapper * [data-card-type="grid"] {
        background: transparent !important;
        background-color: transparent !important;
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
      }

      /* Override any grid card background bleeding */
      .card-wrapper * .card-content > div {
        background: transparent !important;
        border: none !important;
      }

      /* Logo overlay */
      .logo-overlay {
        pointer-events: none;
        max-width: 200px;
        max-height: 200px;
      }

      /* Responsive behavior for very small screens */
      @media (max-width: 768px) {
        .split-layout {
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr;
          height: auto;
          min-height: 100vh;
        }
        
        .sidebar-section {
          order: 1;
        }
        
        .main-section {
          order: 2;
        }
      }
    `}};t([pt()],Hi.prototype,"_sidebarElements",void 0),t([pt()],Hi.prototype,"_mainElements",void 0),Hi=t([lt(Ri)],Hi),console.info("%c🍄 MUSHROOM CUSTOM CARDS %c v1.0.0 ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),console.info("🎴 Loaded custom cards:"),console.info("- custom:mushroom-enhanced-light-card"),console.info("- custom:mushroom-split-layout-card");const Ki=Kt({tap_action:Ft(_e),hold_action:Ft(_e),double_tap_action:Ft(_e)}),Fi=Kt({layout:Ft(qt([Rt("horizontal"),Rt("vertical"),Rt("default")])),fill_container:Ft(Dt()),primary_info:Ft(Ut(xi)),secondary_info:Ft(Ut(xi)),icon_type:Ft(Ut(["icon","entity-picture","none"]))}),Wi=["color","icon_color","layout","fill_container","primary_info","secondary_info","icon_type","content_info","use_entity_picture","collapsible_controls","icon_animation"],Zi=Kt({entity:Ft(Wt()),name:Ft(Wt()),icon:Ft(Wt())}),qi=Vt(Kt({index:Ft(Ht()),view_index:Ft(Ht()),view_layout:Lt(),type:Wt(),layout_options:Lt(),grid_options:Lt(),visibility:Lt()}),Vt(Zi,Fi,Ki),Kt({icon_color:Ft(Wt()),show_brightness_control:Ft(Dt()),show_color_temp_control:Ft(Dt()),show_color_control:Ft(Dt()),collapsible_controls:Ft(Dt()),use_light_color:Ft(Dt())})),Gi=["show_brightness_control","use_light_color","show_color_temp_control","show_color_control"],Yi=[{name:"entity",selector:{entity:{domain:Ei}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"icon",selector:{icon:{}},context:{icon_entity:"entity"}},{name:"icon_color",selector:{mush_color:{}}}]},{type:"grid",name:"",schema:[{name:"layout",selector:{mush_layout:{}}},{name:"fill_container",selector:{boolean:{}}}]},{type:"grid",name:"",schema:[{name:"primary_info",selector:{mush_info:{}}},{name:"secondary_info",selector:{mush_info:{}}},{name:"icon_type",selector:{mush_icon_type:{}}}]},{type:"grid",name:"",schema:[{name:"use_light_color",selector:{boolean:{}}},{name:"show_brightness_control",selector:{boolean:{}}},{name:"show_color_temp_control",selector:{boolean:{}}},{name:"show_color_control",selector:{boolean:{}}},{name:"collapsible_controls",selector:{boolean:{}}}]},{name:"tap_action",selector:{ui_action:{actions:Xi}}},{name:"hold_action",selector:{ui_action:{actions:Xi}}},{name:"double_tap_action",selector:{ui_action:{actions:Xi}}}];var Xi;let Ji=class extends ki{constructor(){super(...arguments),this._computeLabel=t=>{const e=_i(this.hass);return Wi.includes(t.name)?e(`editor.card.generic.${t.name}`):Gi.includes(t.name)?e(`editor.card.light.${t.name}`):this.hass.localize(`ui.panel.lovelace.editor.card.generic.${t.name}`)}}connectedCallback(){var t,e,o;super.connectedCallback(),customElements.get("ha-form")||null===(t=customElements.get("hui-button-card"))||void 0===t||t.getConfigElement(),customElements.get("ha-entity-picker")||null===(e=customElements.get("hui-entities-card"))||void 0===e||e.getConfigElement(),customElements.get("ha-card-conditions-editor")||null===(o=customElements.get("hui-conditional-card"))||void 0===o||o.getConfigElement()}setConfig(t){Mt(t,qi),this._config=t}render(){return this.hass&&this._config?H`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Yi}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:F}_valueChanged(t){yt(this,"config-changed",{config:t.detail.value})}};t([pt()],Ji.prototype,"_config",void 0),Ji=t([lt(Si)],Ji);var Qi=Object.freeze({__proto__:null,LIGHT_LABELS:Gi,get LightCardEditor(){return Ji}});let tn=class extends at{setConfig(t){this._config=t}render(){var t,e,o,i;return this.hass&&this._config?H`
      <div class="card-config">
        <h3>Split Layout Card Configuration</h3>
        <p>Configure your 28%/72% split layout dashboard.</p>
        
        <ha-textfield
          label="Sidebar Width (%)"
          .value=${this._config.sidebar_width||28}
          @input=${this._valueChanged}
          .configValue=${"sidebar_width"}
        ></ha-textfield>
        
        <ha-textfield
          label="Gap (px)"
          .value=${this._config.gap||12}
          @input=${this._valueChanged}
          .configValue=${"gap"}
        ></ha-textfield>

        <h4>Sidebar Settings</h4>
        <ha-textfield
          label="Background Color"
          .value=${(null===(t=this._config.sidebar)||void 0===t?void 0:t.background_color)||""}
          @input=${this._sidebarValueChanged}
          .configValue=${"background_color"}
        ></ha-textfield>
        
        <ha-textfield
          label="Background Image URL"
          .value=${(null===(e=this._config.sidebar)||void 0===e?void 0:e.background_image)||""}
          @input=${this._sidebarValueChanged}
          .configValue=${"background_image"}
        ></ha-textfield>

        <h4>Main Section Settings</h4>
        <ha-textfield
          label="Background Color"
          .value=${(null===(o=this._config.main)||void 0===o?void 0:o.background_color)||""}
          @input=${this._mainValueChanged}
          .configValue=${"background_color"}
        ></ha-textfield>
        
        <ha-textfield
          label="Background Image URL"
          .value=${(null===(i=this._config.main)||void 0===i?void 0:i.background_image)||""}
          @input=${this._mainValueChanged}
          .configValue=${"background_image"}
        ></ha-textfield>

        <p><strong>Note:</strong> Add cards to sidebar and main sections via YAML configuration or dashboard UI.</p>
      </div>
    `:H``}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,o=e.configValue,i=e.value;if(this._config[o]===i)return;const n=Object.assign({},this._config);n[o]=i,this._config=n,this._fireChanged()}_sidebarValueChanged(t){if(!this._config||!this.hass)return;const e=t.target,o=e.configValue,i=e.value,n=Object.assign({},this._config);n.sidebar||(n.sidebar={cards:[]}),n.sidebar[o]=i,this._config=n,this._fireChanged()}_mainValueChanged(t){if(!this._config||!this.hass)return;const e=t.target,o=e.configValue,i=e.value,n=Object.assign({},this._config);n.main||(n.main={cards:[]}),n.main[o]=i,this._config=n,this._fireChanged()}_fireChanged(){const t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}};t([ut({attribute:!1})],tn.prototype,"hass",void 0),t([pt()],tn.prototype,"_config",void 0),tn=t([lt("mushroom-split-layout-card-editor")],tn);var en=Object.freeze({__proto__:null,get SplitLayoutCardEditor(){return tn}});
