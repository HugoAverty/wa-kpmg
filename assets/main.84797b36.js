class E{constructor(e){this.properties=e!=null?e:[]}get(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.value);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const r=this.get(e);if(r!==void 0){if(typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}getType(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.type);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}}const x="https://unpkg.com/@workadventure/scripting-api-extra@1.3.2/dist";class J{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new E(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function O(n){const e=n?"#"+n.join():"";WA.nav.openCoWebSite(x+"/configuration.html"+e)}async function Q(n,e){const t=await WA.room.getTiledMap(),r=new Map;return $(t.layers,r,n,e),r}function $(n,e,t,r){for(const o of n)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"){if(!!t&&o.name!==t||!!r&&!r.includes(s.name))continue;e.set(s.name,new J(s))}}else o.type==="group"&&$(o.layers,e,t,r)}let G;async function k(){return G===void 0&&(G=ee()),G}async function ee(){return te(await WA.room.getTiledMap())}function te(n){const e=new Map;return H(n.layers,"",e),e}function H(n,e,t){for(const r of n)r.type==="group"?H(r.layers,e+r.name+"/",t):(r.name=e+r.name,t.set(r.name,r))}function ne(n){let e=1/0,t=1/0,r=0,o=0;const s=n.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<n.height;i++)for(let u=0;u<n.width;u++)s[u+i*n.width]!==0&&(e=Math.min(e,u),o=Math.max(o,u),t=Math.min(t,i),r=Math.max(r,i));return{top:t,left:e,right:o+1,bottom:r+1}}function X(n){let e=1/0,t=1/0,r=0,o=0;for(const s of n){const i=ne(s);i.left<e&&(e=i.left),i.top<t&&(t=i.top),i.right>o&&(o=i.right),i.bottom>r&&(r=i.bottom)}return{top:t,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var re=Object.prototype.toString,C=Array.isArray||function(e){return re.call(e)==="[object Array]"};function U(n){return typeof n=="function"}function oe(n){return C(n)?"array":typeof n}function V(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function _(n,e){return n!=null&&typeof n=="object"&&e in n}function se(n,e){return n!=null&&typeof n!="object"&&n.hasOwnProperty&&n.hasOwnProperty(e)}var ie=RegExp.prototype.test;function ae(n,e){return ie.call(n,e)}var ue=/\S/;function le(n){return!ae(ue,n)}var ce={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function pe(n){return String(n).replace(/[&<>"'`=\/]/g,function(t){return ce[t]})}var fe=/\s*/,he=/\s+/,q=/\s*=/,de=/\s*\}/,ge=/#|\^|\/|>|\{|&|=|!/;function ye(n,e){if(!n)return[];var t=!1,r=[],o=[],s=[],i=!1,u=!1,a="",c=0;function h(){if(i&&!u)for(;s.length;)delete o[s.pop()];else s=[];i=!1,u=!1}var g,m,f;function A(b){if(typeof b=="string"&&(b=b.split(he,2)),!C(b)||b.length!==2)throw new Error("Invalid tags: "+b);g=new RegExp(V(b[0])+"\\s*"),m=new RegExp("\\s*"+V(b[1])),f=new RegExp("\\s*"+V("}"+b[1]))}A(e||v.tags);for(var l=new M(n),p,d,w,B,L,W;!l.eos();){if(p=l.pos,w=l.scanUntil(g),w)for(var R=0,F=w.length;R<F;++R)B=w.charAt(R),le(B)?(s.push(o.length),a+=B):(u=!0,t=!0,a+=" "),o.push(["text",B,p,p+1]),p+=1,B===`
`&&(h(),a="",c=0,t=!1);if(!l.scan(g))break;if(i=!0,d=l.scan(ge)||"name",l.scan(fe),d==="="?(w=l.scanUntil(q),l.scan(q),l.scanUntil(m)):d==="{"?(w=l.scanUntil(f),l.scan(de),l.scanUntil(m),d="&"):w=l.scanUntil(m),!l.scan(m))throw new Error("Unclosed tag at "+l.pos);if(d==">"?L=[d,w,p,l.pos,a,c,t]:L=[d,w,p,l.pos],c++,o.push(L),d==="#"||d==="^")r.push(L);else if(d==="/"){if(W=r.pop(),!W)throw new Error('Unopened section "'+w+'" at '+p);if(W[1]!==w)throw new Error('Unclosed section "'+W[1]+'" at '+p)}else d==="name"||d==="{"||d==="&"?u=!0:d==="="&&A(w)}if(h(),W=r.pop(),W)throw new Error('Unclosed section "'+W[1]+'" at '+l.pos);return ve(me(o))}function me(n){for(var e=[],t,r,o=0,s=n.length;o<s;++o)t=n[o],t&&(t[0]==="text"&&r&&r[0]==="text"?(r[1]+=t[1],r[3]=t[3]):(e.push(t),r=t));return e}function ve(n){for(var e=[],t=e,r=[],o,s,i=0,u=n.length;i<u;++i)switch(o=n[i],o[0]){case"#":case"^":t.push(o),r.push(o),t=o[4]=[];break;case"/":s=r.pop(),s[5]=o[2],t=r.length>0?r[r.length-1][4]:e;break;default:t.push(o)}return e}function M(n){this.string=n,this.tail=n,this.pos=0}M.prototype.eos=function(){return this.tail===""};M.prototype.scan=function(e){var t=this.tail.match(e);if(!t||t.index!==0)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};M.prototype.scanUntil=function(e){var t=this.tail.search(e),r;switch(t){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=r.length,r};function S(n,e){this.view=n,this.cache={".":this.view},this.parent=e}S.prototype.push=function(e){return new S(e,this)};S.prototype.lookup=function(e){var t=this.cache,r;if(t.hasOwnProperty(e))r=t[e];else{for(var o=this,s,i,u,a=!1;o;){if(e.indexOf(".")>0)for(s=o.view,i=e.split("."),u=0;s!=null&&u<i.length;)u===i.length-1&&(a=_(s,i[u])||se(s,i[u])),s=s[i[u++]];else s=o.view[e],a=_(o.view,e);if(a){r=s;break}o=o.parent}t[e]=r}return U(r)&&(r=r.call(this.view)),r};function y(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}y.prototype.clearCache=function(){typeof this.templateCache!="undefined"&&this.templateCache.clear()};y.prototype.parse=function(e,t){var r=this.templateCache,o=e+":"+(t||v.tags).join(":"),s=typeof r!="undefined",i=s?r.get(o):void 0;return i==null&&(i=ye(e,t),s&&r.set(o,i)),i};y.prototype.render=function(e,t,r,o){var s=this.getConfigTags(o),i=this.parse(e,s),u=t instanceof S?t:new S(t,void 0);return this.renderTokens(i,u,r,e,o)};y.prototype.renderTokens=function(e,t,r,o,s){for(var i="",u,a,c,h=0,g=e.length;h<g;++h)c=void 0,u=e[h],a=u[0],a==="#"?c=this.renderSection(u,t,r,o,s):a==="^"?c=this.renderInverted(u,t,r,o,s):a===">"?c=this.renderPartial(u,t,r,s):a==="&"?c=this.unescapedValue(u,t):a==="name"?c=this.escapedValue(u,t,s):a==="text"&&(c=this.rawValue(u)),c!==void 0&&(i+=c);return i};y.prototype.renderSection=function(e,t,r,o,s){var i=this,u="",a=t.lookup(e[1]);function c(m){return i.render(m,t,r,s)}if(!!a){if(C(a))for(var h=0,g=a.length;h<g;++h)u+=this.renderTokens(e[4],t.push(a[h]),r,o,s);else if(typeof a=="object"||typeof a=="string"||typeof a=="number")u+=this.renderTokens(e[4],t.push(a),r,o,s);else if(U(a)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");a=a.call(t.view,o.slice(e[3],e[5]),c),a!=null&&(u+=a)}else u+=this.renderTokens(e[4],t,r,o,s);return u}};y.prototype.renderInverted=function(e,t,r,o,s){var i=t.lookup(e[1]);if(!i||C(i)&&i.length===0)return this.renderTokens(e[4],t,r,o,s)};y.prototype.indentPartial=function(e,t,r){for(var o=t.replace(/[^ \t]/g,""),s=e.split(`
`),i=0;i<s.length;i++)s[i].length&&(i>0||!r)&&(s[i]=o+s[i]);return s.join(`
`)};y.prototype.renderPartial=function(e,t,r,o){if(!!r){var s=this.getConfigTags(o),i=U(r)?r(e[1]):r[e[1]];if(i!=null){var u=e[6],a=e[5],c=e[4],h=i;a==0&&c&&(h=this.indentPartial(i,c,u));var g=this.parse(h,s);return this.renderTokens(g,t,r,h,o)}}};y.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(r!=null)return r};y.prototype.escapedValue=function(e,t,r){var o=this.getConfigEscape(r)||v.escape,s=t.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===v.escape?String(s):o(s)};y.prototype.rawValue=function(e){return e[1]};y.prototype.getConfigTags=function(e){return C(e)?e:e&&typeof e=="object"?e.tags:void 0};y.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!C(e))return e.escape};var v={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(n){P.templateCache=n},get templateCache(){return P.templateCache}},P=new y;v.clearCache=function(){return P.clearCache()};v.parse=function(e,t){return P.parse(e,t)};v.render=function(e,t,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+oe(e)+'" was given as the first argument for mustache#render(template, view, partials)');return P.render(e,t,r,o)};v.escape=pe;v.Scanner=M;v.Context=S;v.Writer=y;class we{constructor(e,t){this.template=e,this.state=t,this.ast=v.parse(e)}getValue(){return this.value===void 0&&(this.value=v.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const r of this.getUsedVariables().values())t.push(this.state.onVariableChange(r).subscribe(()=>{const o=v.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of t)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const r of e){const o=r[0],s=r[1],i=r[4];["name","&","#","^"].includes(o)&&t.add(s),i!==void 0&&typeof i!="string"&&this.recursiveGetUsedVariables(i,t)}}}async function be(){var n;const e=await k();for(const[t,r]of e.entries()){const o=(n=r.properties)!==null&&n!==void 0?n:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const i=new we(s.value,WA.state);if(i.isPureString())continue;const u=i.getValue();N(t,s.name,u),i.onChange(a=>{N(t,s.name,a)})}}}function N(n,e,t){WA.room.setProperty(n,e,t),e==="visible"&&(t?WA.room.showLayer(n):WA.room.hideLayer(n))}let I,D=0,j=0;function K(n){if(WA.state[n.name]){let e=n.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.showLayer(t);e=n.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.hideLayer(t)}else{let e=n.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.hideLayer(t);e=n.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.showLayer(t)}}function Ae(n){const e=n.properties.getString("openSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=z(n.properties.mustGetString("openLayer").split(`
`));if(o>t)return;r=1-o/t}e&&WA.sound.loadSound(e).play({volume:r})}function We(n){const e=n.properties.getString("closeSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=z(n.properties.mustGetString("closeLayer").split(`
`));if(o>t)return;r=1-o/t}e&&WA.sound.loadSound(e).play({volume:r})}function Y(n){return n.map(e=>I.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function z(n){const e=Y(n),t=X(e),r=((t.right-t.left)/2+t.left)*32,o=((t.bottom-t.top)/2+t.top)*32;return Math.sqrt(Math.pow(D-r,2)+Math.pow(j-o,2))}function Se(n){WA.state.onVariableChange(n.name).subscribe(()=>{WA.state[n.name]?Ae(n):We(n),K(n)}),K(n)}function Ce(n,e,t,r){const o=n.name;let s,i,u=!1;const a=t.getString("tag");let c=!0;a&&!WA.player.tags.includes(a)&&(c=!1);const h=!!a;function g(){var l;s&&s.remove(),s=WA.ui.displayActionMessage({message:(l=t.getString("closeTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,m()}})}function m(){var l;s&&s.remove(),s=WA.ui.displayActionMessage({message:(l=t.getString("openTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,g()}})}function f(l){const p=X(Y(e.properties.mustGetString("closeLayer").split(`
`)));i=WA.room.website.create({name:"doorKeypad"+l,url:r+"/keypad.html#"+encodeURIComponent(l),position:{x:p.right*32,y:p.top*32,width:32*3,height:32*4},allowApi:!0})}function A(){i&&(WA.room.website.delete(i.name),i=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(u=!0,t.getBoolean("autoOpen")&&c){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(h&&!c||!h)&&(t.getString("code")||t.getString("codeVariable"))){f(o);return}!c||(WA.state[e.name]?g():m())}),WA.room.onLeaveLayer(o).subscribe(()=>{u=!1,t.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),A()}),WA.state.onVariableChange(e.name).subscribe(()=>{u&&(!t.getBoolean("autoClose")&&WA.state[e.name]===!0&&g(),i&&WA.state[e.name]===!0&&A(),!t.getBoolean("autoOpen")&&WA.state[e.name]===!1&&m())})}function Be(n){const e=n.properties.mustGetString("bellSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=Math.sqrt(Math.pow(n.x-D,2)+Math.pow(n.y-j,2));if(o>t)return;r=1-o/t}WA.sound.loadSound(e).play({volume:r})}function Ee(n){WA.state[n.name]===void 0&&(WA.state[n.name]=0),WA.state.onVariableChange(n.name).subscribe(()=>{WA.state[n.name]&&Be(n)})}function Pe(n,e,t){let r;const o=e.getString("bellPopup");WA.room.onEnterLayer(t).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[n]=WA.state[n]+1}}]):WA.state[n]=WA.state[n]+1}),WA.room.onLeaveLayer(t).subscribe(()=>{r&&(r.close(),r=void 0)})}async function Me(n){n=n!=null?n:x;const e=await Q();I=await k();for(const t of e.values())t.properties.get("door")&&Se(t),t.properties.get("bell")&&Ee(t);for(const t of I.values()){const r=new E(t.properties),o=r.getString("doorVariable");if(o&&t.type==="tilelayer"){const i=e.get(o);if(i===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+t.name+'"');Ce(t,i,r,n)}const s=r.getString("bellVariable");s&&Pe(s,r,t.name)}WA.player.onPlayerMove(t=>{D=t.x,j=t.y})}function Le(n,e){const t=n.getString("bindVariable");if(t){const r=n.get("enterValue"),o=n.get("leaveValue"),s=n.getString("triggerMessage"),i=n.getString("tag");Te(t,e,r,o,s,i)}}function Te(n,e,t,r,o,s){s&&!WA.player.tags.includes(s)||(t!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[n]=t)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[n]=r}))}async function xe(){const n=await k();for(const e of n.values()){const t=new E(e.properties);Le(t,e.name)}}let Z;async function ke(n){const e=await WA.room.getTiledMap();n=n!=null?n:x,Z=await k();const t=e.layers.find(r=>r.name==="configuration");if(t){const o=new E(t.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(n+"/configuration.html",!0)});for(const s of Z.values()){const i=new E(s.properties),u=i.getString("openConfig");u&&s.type==="tilelayer"&&Re(u.split(","),s.name,i)}}}function Re(n,e,t){let r;const o=t.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function i(){var a;r&&r.remove(),r=WA.ui.displayActionMessage({message:(a=t.getString("openConfigTriggerMessage"))!==null&&a!==void 0?a:"Press SPACE or touch here to configure",callback:()=>O(n)})}function u(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const a=t.getString("openConfigTrigger");s&&(a&&a==="onaction"?i():O(n))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),u()})}const Ge=[{lowerBound:0,uppperBound:.5,config:{width:250,height:390,scale:1}},{lowerBound:.5,uppperBound:.8,config:{width:224,height:350,scale:.9}},{lowerBound:.8,uppperBound:1.25,config:{width:132,height:211,scale:.53}},{lowerBound:1.25,uppperBound:2.28,config:{width:64,height:99,scale:.25}},{lowerBound:1.25,config:{width:39,height:63,scale:.16}}],Ve=[{lowerBound:0,uppperBound:1,config:{width:427,height:270,scale:1}},{lowerBound:1,uppperBound:1.9,config:{width:300,height:188,scale:.7}},{lowerBound:1.9,uppperBound:3.5,config:{width:150,height:94,scale:.35}},{lowerBound:3.5,uppperBound:5,config:{width:93,height:58,scale:.21}},{lowerBound:4,config:{width:75,height:46,scale:.17}}];async function Ie(){var n;const e=WA.player.state.tutorialDone,t=/Mobi|Android/i.test(navigator.userAgent),o=await((n=(await WA.room.getTiledMap()).properties)===null||n===void 0?void 0:n.find(i=>i.name==="tutorial")),s=o&&o.value;if(!e&&s){Ue(t);let i=await WA.player.getPosition(),u;const a=await WA.room.website.get("tutorial"),c=()=>{const A=i.x+a.x+a.width>u.x+u.width,l=i.x+a.x<u.x,p=i.y+a.y+a.height>u.y+u.height,d=i.y+a.y<u.y;A?a.x=-a.width-1.5*16:l&&(a.x=1.5*16),p?a.y=-a.height:d&&(a.y=16)},h=f=>{a.width=f.width,a.height=f.height,a.scale=f.scale},g=f=>{const l=(t?Ge:Ve).filter(p=>{if(p.lowerBound&&p.uppperBound)return p.lowerBound<f&&f<=p.uppperBound;if(p.lowerBound&&!p.uppperBound)return p.lowerBound<f;if(!p.lowerBound&&p.uppperBound)return f<=p.uppperBound;throw new Error(`Zoom level of: ${f} could not fit in any of the desktopConfig's ranges.`)});h(l[0].config)},m=()=>{if(u===void 0)return;const f=u.zoom;g(f),c()};WA.player.onPlayerMove(f=>{i=f,m()}),WA.camera.onCameraUpdate().subscribe(f=>{u=f,m()}),WA.player.state.tutorialDone=!0}}function Ue(n){let e={allow:"",name:"tutorial",url:x+"/tutorial.html",position:{height:224,width:407,x:16,y:-112},visible:!0,allowApi:!0,origin:"player",scale:.9};n&&(e={...e,position:{x:32,y:-225,height:390,width:250},scale:1}),WA.room.website.create(e)}function De(){return WA.onInit().then(()=>{Me().catch(n=>console.error(n)),xe().catch(n=>console.error(n)),ke().catch(n=>console.error(n)),be().catch(n=>console.error(n)),Ie().catch(n=>console.error(n))}).catch(n=>console.error(n))}console.log("Script started successfully");let T;WA.onInit().then(()=>{WA.room.onEnterLayer("myZone").subscribe(()=>{T=WA.ui.openPopup("popupRectangle","Bienvenue sur les bureaux virtuels de Digital Audit Leaders, vous pouvez les utiliser durant toute la dur\xE9e du programme pour vous retrouver en \xE9quipes, partager des moments conviviaux ou encore avancer sur vos projets en mode collaboratifs ! N'h\xE9sitez pas \xE0 explorer l'espace",[])}),WA.room.onLeaveLayer("myZone").subscribe(je),De().then(()=>{console.log("Scripting API Extra ready")}).catch(n=>console.error(n))}).catch(n=>console.error(n));function je(){T!==void 0&&(T.close(),T=void 0)}
