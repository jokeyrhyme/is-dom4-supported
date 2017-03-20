(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["isDOM4Supported"] = factory();
	else
		root["isDOM4Supported"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function addSummary(target, summaryProp, { ignore = [] } = {}) {
  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
      if (ignore.indexOf(prop) !== -1) {
        continue;
      }
      if (!target[prop]) {
        target[summaryProp] = false;
        return;
      }
    }
  }
  target[summaryProp] = true;
}

function assertPropertyTypes(obj, propTypes) {
  for (let prop in propTypes) {
    if (propTypes.hasOwnProperty(prop)) {
      if (typeof obj[prop] === 'undefined') {
        return false;
      }
      if (propTypes[prop] === null) {
        continue; // special case that is satisfied by any type
      }
      /* eslint-disable valid-typeof */ // needs a dynamic test here
      if (typeof obj[prop] !== propTypes[prop]) {
        return false;
      }
      /* eslint-enable valid-typeof */
    }
  }
  return true;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
function assign(target, ...sources) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert first argument to object');
  }

  let to = Object(target);
  for (let s = 0; s < sources.length; s++) {
    var nextSource = sources[s];
    if (nextSource === undefined || nextSource === null) {
      continue;
    }
    nextSource = Object(nextSource);

    let keysArray = Object.keys(Object(nextSource));
    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
      var nextKey = keysArray[nextIndex];
      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = nextSource[nextKey];
      }
    }
  }
  return to;
}

module.exports = {
  addSummary,
  assertPropertyTypes,
  assign
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// local modules

const { assertPropertyTypes } = __webpack_require__(0);

// this module

// http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html

module.exports = function (el, doc) {
  let dom1Document = assertPropertyTypes(doc, {
    doctype: null,
    implementation: null,
    documentElement: null,

    createElement: 'function',
    createDocumentFragment: 'function',
    createTextNode: 'function',
    createComment: 'function',
    createCDATASection: 'function',
    createProcessingInstruction: 'function',
    createAttribute: 'function',
    // createEntityReference: 'function', // only for XML DOM
    getElementsByTagName: 'function'
  });

  let dom1DocumentImplementation = assertPropertyTypes(doc.implementation, {
    hasFeature: 'function'
  });

  let dom1Node = assertPropertyTypes(el, {
    nodeName: 'string',
    nodeValue: null, // not always a 'string'

    nodeType: 'number',

    parentNode: null,
    childNodes: null,
    firstChild: null,
    lastChild: null,
    previousSibling: null,
    nextSibling: null,
    attributes: null,
    ownerDocument: null,

    insertBefore: 'function',
    replaceChild: 'function',
    removeChild: 'function',
    appendChild: 'function',
    hasChildNodes: 'function',
    cloneNode: 'function'
  });

  let dom1NodeType = assertPropertyTypes(global.Node || {}, {
    ELEMENT_NODE: 'number',
    ATTRIBUTE_NODE: 'number',
    TEXT_NODE: 'number',
    CDATA_SECTION_NODE: 'number',
    ENTITY_REFERENCE_NODE: 'number',
    ENTITY_NODE: 'number',
    PROCESSING_INSTRUCTION_NODE: 'number',
    COMMENT_NODE: 'number',
    DOCUMENT_NODE: 'number',
    DOCUMENT_TYPE_NODE: 'number',
    DOCUMENT_FRAGMENT_NODE: 'number',
    NOTATION_NODE: 'number'
  });

  let dom1Element = assertPropertyTypes(el, {
    tagName: 'string',

    getAttribute: 'function',
    setAttribute: 'function',
    removeAttribute: 'function',
    getAttributeNode: 'function',
    setAttributeNode: 'function',
    removeAttributeNode: 'function',
    getElementsByTagName: 'function',
    normalize: 'function'
  });

  let report = {
    'dom1.document': dom1Document,
    'dom1.documentimplementation': dom1DocumentImplementation,
    'dom1.element': dom1Element,
    'dom1.node': dom1Node,
    'dom1.nodetype': dom1NodeType
  };

  return report;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// local modules

const { assertPropertyTypes } = __webpack_require__(0);

// this module

// http://www.w3.org/TR/DOM-Level-2-Core/

module.exports = function (el, doc) {
  let dom2Document = assertPropertyTypes(doc, {
    importNode: 'function',
    createElementNS: 'function',
    createAttributeNS: 'function',
    getElementsByTagNameNS: 'function',
    getElementById: 'function'
  });

  let dom2DocumentImplementation = assertPropertyTypes(doc.implementation, {
    createDocumentType: 'function',
    createDocument: 'function'
  });

  let dom2Node = assertPropertyTypes(el, {
    namespaceURI: 'string',
    // prefix: null, // not always a 'string' // XML DOM only
    localName: 'string',

    // isSupported: 'function', // obsolete
    hasAttributes: 'function'
    // normalize() was moved from Element to Node in DOM2, but DOM1 tests it
  });

  let dom2Element = assertPropertyTypes(el, {
    getAttributeNS: 'function',
    setAttributeNS: 'function',
    removeAttributeNS: 'function',
    getAttributeNodeNS: 'function',
    setAttributeNodeNS: 'function',
    getElementsByTagNameNS: 'function',
    hasAttribute: 'function',
    hasAttributeNS: 'function'
  });

  let report = {
    'dom2.document': dom2Document,
    'dom2.documentimplementation': dom2DocumentImplementation,
    'dom2.element': dom2Element,
    'dom2.node': dom2Node
  };

  return report;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// local modules

const { assertPropertyTypes } = __webpack_require__(0);

// this module

// http://www.w3.org/TR/DOM-Level-3-Core/

module.exports = function (el, doc) {
  let dom3Document = assertPropertyTypes(doc, {
    // domConfig: null, // deprecated

    // inputEncoding: 'string', // deprecated
    // documentURI: 'string', // trivially missing from IE
    // xmlEncoding: 'string' // obsolete
    // xmlVersion: 'string' // obsolete

    // strictErrorChecking: 'boolean', // obsolete? deprecated? removed?
    // xmlStandalone: 'boolean', // obsolete? deprecated? removed?

    adoptNode: 'function',
    // normalizeDocument: 'function', // obsolete? deprecated? removed?
    // renameNode: 'function', // obsolete? deprecated? removed?

    // http://www.w3.org/TR/DOM-Level-3-Events/
    createEvent: 'function'
  });

  // let dom3DocumentImplementation = assertPropertyTypes(doc.implementation, {
  //   getFeature: 'function' // obsolete
  // });

  let dom3Node = assertPropertyTypes(el, {
    // baseURI: null, // not always 'string' // trivially missing from IE

    // isSameNode: 'function', // obsolete
    lookupPrefix: 'function',
    isDefaultNamespace: 'function',
    lookupNamespaceURI: 'function',
    isEqualNode: 'function'
    // getFeature: 'function' // obsolete
    // setUserData: 'function' // obsolete
    // getUserData: 'function' // obsolete
  });

  // let dom3Element = assertPropertyTypes(el, {
  // schemaTypeInfo: null, // obsolete

  // setIdAttribute: 'function', // obsolete
  // setIdAttributeNS: 'function', // obsolete
  // setIdAttributeNode: 'function' // obsolete
  // });

  let dom3CustomEvent = !!global.CustomEvent && assertPropertyTypes(global.CustomEvent.prototype || {}, {
    initCustomEvent: 'function'
  });

  let dom3Event = assertPropertyTypes(global.Event || {}, {
    // NONE: 'number', // trivially missing from IE
    CAPTURING_PHASE: 'number',
    AT_TARGET: 'number',
    BUBBLING_PHASE: 'number'
  }) && assertPropertyTypes(global.Event.prototype || {}, {
    initEvent: 'function',
    preventDefault: 'function',
    stopImmediatePropagation: 'function',
    stopPropagation: 'function'
  });

  let dom3EventTarget = assertPropertyTypes(el, {
    addEventListener: 'function',
    removeEventListener: 'function',
    dispatchEvent: 'function'
  });

  let report = {
    'dom3.customevent': dom3CustomEvent,
    'dom3.document': dom3Document,
    // 'dom3.documentimplementation': dom3DocumentImplementation,
    // 'dom3.element': dom3Element,
    'dom3.event': dom3Event,
    'dom3.eventtarget': dom3EventTarget,
    'dom3.node': dom3Node
  };

  return report;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// local modules

const { assertPropertyTypes } = __webpack_require__(0);

// this module

// http://www.w3.org/TR/2015/WD-dom-20150618/

module.exports = function (el, doc) {
  let dom4Document = assertPropertyTypes(doc, {
    // origin: 'string', // trivially missing from IE

    createNodeIterator: 'function',
    createRange: 'function',
    createTreeWalker: 'function'
  });

  let dom4DocumentImplementation = assertPropertyTypes(doc.implementation, {
    createHTMLDocument: 'function'
  });

  let dom4Node = assertPropertyTypes(el, {
    childElementCount: 'number',

    querySelector: 'function',
    querySelectorAll: 'function'
  });

  let dom4Element = assertPropertyTypes(el, {
    className: 'string',
    id: 'string',

    classList: 'object',

    getElementsByClassName: 'function'
  });

  let dom4CustomEvent = function () {
    try {
      return !!new global.CustomEvent('customevent');
    } catch (err) {
      return false;
    }
  }();

  let dom4MutationObserver = !!global.MutationObserver && assertPropertyTypes(global.MutationObserver.prototype || {}, {
    observe: 'function',
    disconnect: 'function',
    takeRecords: 'function'
  });

  let report = {
    'dom4.customevent': dom4CustomEvent,
    'dom4.document': dom4Document,
    'dom4.documentimplementation': dom4DocumentImplementation,
    'dom4.element': dom4Element,
    'dom4.mutationobserver': dom4MutationObserver,
    'dom4.node': dom4Node
  };

  return report;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// local modules

const { addSummary, assign } = __webpack_require__(0);
const dom1 = __webpack_require__(2);
const dom2 = __webpack_require__(3);
const dom3 = __webpack_require__(4);
const dom4 = __webpack_require__(5);

// this module

/**
 * @param {Element} [el] a DOM Element to run tests against
 * @param {Object} [options]
 * @returns {boolean|Object} true|false unless returnObject is true
 */
module.exports = function (el = null, { ignore = [], returnObject = false } = {}) {
  let doc;
  if (!el) {
    try {
      el = global.document.createElement('p');
    } catch (ignore) {
      return returnObject ? { dom4: false } : false;
    }
  }
  doc = el.ownerDocument || global.document;
  if (!doc) {
    return returnObject ? { dom4: false } : false;
  }

  let report = {};
  let levels = { dom1, dom2, dom3, dom4 };

  for (let prop in levels) {
    if (levels.hasOwnProperty(prop)) {
      assign(report, levels[prop](el, doc));
      addSummary(report, prop, { ignore });
    }
  }

  return returnObject ? report : report.dom4;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })
/******/ ]);
});