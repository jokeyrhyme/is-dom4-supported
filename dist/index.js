!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.isDOM4Supported=t():e.isDOM4Supported=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){(function(t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=n(1),u=n(2),i=o(u),c=n(3),s=o(c),a=n(4),f=o(a),d=n(5),m=o(d);e.exports=function(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0],n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=n.ignore,u=void 0===o?[]:o,c=n.returnObject,a=void 0!==c&&c,d=void 0;if(!e)try{e=t.document.createElement("p")}catch(u){return!!a&&{dom4:!1}}if(d=e.ownerDocument||t.document,!d)return!!a&&{dom4:!1};var l={},p={dom1:i["default"],dom2:s["default"],dom3:f["default"],dom4:m["default"]};for(var y in p)p.hasOwnProperty(y)&&((0,r.assign)(l,p[y](e,d)),(0,r.addSummary)(l,y,{ignore:u}));return a?l:l.dom4}}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){var n=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],o=n.ignore,r=void 0===o?[]:o;for(var u in e)if(e.hasOwnProperty(u)){if(r.indexOf(u)!==-1)continue;if(!e[u])return void(e[t]=!1)}e[t]=!0}function o(e,t){for(var n in t)if(t.hasOwnProperty(n)){if("undefined"==typeof e[n])return!1;if(null===t[n])continue;if(typeof e[n]!==t[n])return!1}return!0}function r(e){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var t=Object(e),n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];for(var u=0;u<o.length;u++){var i=o[u];if(void 0!==i&&null!==i){i=Object(i);for(var c=Object.keys(Object(i)),s=0,a=c.length;s<a;s++){var f=c[s],d=Object.getOwnPropertyDescriptor(i,f);void 0!==d&&d.enumerable&&(t[f]=i[f])}}}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.addSummary=n,t.assertPropertyTypes=o,t.assign=r},function(e,t,n){(function(o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t["default"]=function(e,t){var n=(0,r.assertPropertyTypes)(t,{doctype:null,implementation:null,documentElement:null,createElement:"function",createDocumentFragment:"function",createTextNode:"function",createComment:"function",createCDATASection:"function",createProcessingInstruction:"function",createAttribute:"function",getElementsByTagName:"function"}),u=(0,r.assertPropertyTypes)(t.implementation,{hasFeature:"function"}),i=(0,r.assertPropertyTypes)(e,{nodeName:"string",nodeValue:null,nodeType:"number",parentNode:null,childNodes:null,firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,ownerDocument:null,insertBefore:"function",replaceChild:"function",removeChild:"function",appendChild:"function",hasChildNodes:"function",cloneNode:"function"}),c=(0,r.assertPropertyTypes)(o.Node||{},{ELEMENT_NODE:"number",ATTRIBUTE_NODE:"number",TEXT_NODE:"number",CDATA_SECTION_NODE:"number",ENTITY_REFERENCE_NODE:"number",ENTITY_NODE:"number",PROCESSING_INSTRUCTION_NODE:"number",COMMENT_NODE:"number",DOCUMENT_NODE:"number",DOCUMENT_TYPE_NODE:"number",DOCUMENT_FRAGMENT_NODE:"number",NOTATION_NODE:"number"}),s=(0,r.assertPropertyTypes)(e,{tagName:"string",getAttribute:"function",setAttribute:"function",removeAttribute:"function",getAttributeNode:"function",setAttributeNode:"function",removeAttributeNode:"function",getElementsByTagName:"function",normalize:"function"}),a={"dom1.document":n,"dom1.documentimplementation":u,"dom1.element":s,"dom1.node":i,"dom1.nodetype":c};return a},e.exports=t["default"]}).call(t,function(){return this}())},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);t["default"]=function(e,t){var n=(0,o.assertPropertyTypes)(t,{importNode:"function",createElementNS:"function",createAttributeNS:"function",getElementsByTagNameNS:"function",getElementById:"function"}),r=(0,o.assertPropertyTypes)(t.implementation,{createDocumentType:"function",createDocument:"function"}),u=(0,o.assertPropertyTypes)(e,{namespaceURI:"string",localName:"string",hasAttributes:"function"}),i=(0,o.assertPropertyTypes)(e,{getAttributeNS:"function",setAttributeNS:"function",removeAttributeNS:"function",getAttributeNodeNS:"function",setAttributeNodeNS:"function",getElementsByTagNameNS:"function",hasAttribute:"function",hasAttributeNS:"function"}),c={"dom2.document":n,"dom2.documentimplementation":r,"dom2.element":i,"dom2.node":u};return c},e.exports=t["default"]},function(e,t,n){(function(o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t["default"]=function(e,t){var n=(0,r.assertPropertyTypes)(t,{adoptNode:"function",createEvent:"function"}),u=(0,r.assertPropertyTypes)(e,{lookupPrefix:"function",isDefaultNamespace:"function",lookupNamespaceURI:"function",isEqualNode:"function"}),i=!!o.CustomEvent&&(0,r.assertPropertyTypes)(o.CustomEvent.prototype||{},{initCustomEvent:"function"}),c=(0,r.assertPropertyTypes)(o.Event||{},{CAPTURING_PHASE:"number",AT_TARGET:"number",BUBBLING_PHASE:"number"})&&(0,r.assertPropertyTypes)(o.Event.prototype||{},{initEvent:"function",preventDefault:"function",stopImmediatePropagation:"function",stopPropagation:"function"}),s=(0,r.assertPropertyTypes)(e,{addEventListener:"function",removeEventListener:"function",dispatchEvent:"function"}),a={"dom3.customevent":i,"dom3.document":n,"dom3.event":c,"dom3.eventtarget":s,"dom3.node":u};return a},e.exports=t["default"]}).call(t,function(){return this}())},function(e,t,n){(function(o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t["default"]=function(e,t){var n=(0,r.assertPropertyTypes)(t,{createNodeIterator:"function",createRange:"function",createTreeWalker:"function"}),u=(0,r.assertPropertyTypes)(t.implementation,{createHTMLDocument:"function"}),i=(0,r.assertPropertyTypes)(e,{childElementCount:"number",querySelector:"function",querySelectorAll:"function"}),c=(0,r.assertPropertyTypes)(e,{className:"string",id:"string",classList:"object",getElementsByClassName:"function"}),s=function(){try{return!!new o.CustomEvent("customevent")}catch(e){return!1}}(),a=!!o.MutationObserver&&(0,r.assertPropertyTypes)(o.MutationObserver.prototype||{},{observe:"function",disconnect:"function",takeRecords:"function"}),f={"dom4.customevent":s,"dom4.document":n,"dom4.documentimplementation":u,"dom4.element":c,"dom4.mutationobserver":a,"dom4.node":i};return f},e.exports=t["default"]}).call(t,function(){return this}())}])});