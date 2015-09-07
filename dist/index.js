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

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	// local modules

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libHelpers = __webpack_require__(1);

	var _libDom1 = __webpack_require__(2);

	var _libDom12 = _interopRequireDefault(_libDom1);

	// this module

	/**
	 * http://www.w3.org/TR/dom/#interface-customevent
	 * @param {Element} [el] a DOM Element to run tests against
	 * @returns {Boolean} are CustomEvents supported?
	 */
	var customEvents = function customEvents(el) {
	  var doc = el.ownerDocument || global.document;
	  var NAME = 'customevent';
	  var event;
	  try {
	    event = doc.createEvent(NAME);
	    return !!(typeof event.type === 'string' && typeof event.stopPropagation === 'function' && typeof event.stopImmediatePropagation === 'function' && typeof event.preventDefault === 'function');
	  } catch (ignore) {
	    return false;
	  }
	};

	/**
	 * http://www.w3.org/TR/dom/#interface-eventtarget
	 * @param {Element} [el] a DOM Element to run tests against
	 * @returns {Boolean} are EventTargets supported?
	 */
	var eventTargets = function eventTargets(el) {
	  return !!(typeof el.addEventListener === 'function' && typeof el.removeEventListener === 'function' && typeof el.dispatchEvent === 'function');
	};

	/**
	 * http://www.w3.org/TR/dom/#interface-document
	 * @param {Element} [el] a DOM Element to run tests against
	 * @returns {Boolean} are Documents supported?
	 */
	var documents = function documents(el) {
	  var doc = el.ownerDocument || global.document;
	  return !!(typeof doc.importNode === 'function' && typeof doc.adoptNode === 'function' && typeof doc.createEvent === 'function' && typeof doc.createRange === 'function' && typeof doc.createNodeIterator === 'function' && typeof doc.createTreeWalker === 'function');
	};

	/**
	 * http://www.w3.org/TR/dom/#interface-node
	 * http://www.w3.org/TR/dom/#interface-parentnode
	 * http://www.w3.org/TR/dom/#interface-childnode
	 * @param {Element} [el] a DOM Element to run tests against
	 * @returns {Boolean} are ParentNodes and Nodes supported?
	 */
	var nodes = function nodes(el) {
	  // we don't test ChildNode#remove(), because that's a ShadowDOM thing
	  return !!(
	  // ParentNode
	  typeof el.childElementCount === 'number' && typeof el.querySelector === 'function' && typeof el.querySelectorAll === 'function' &&
	  // Node
	  global.Node && typeof el.querySelector === 'function');
	};

	/**
	 * http://www.w3.org/TR/dom/#interface-element
	 * @param {Element} [el] a DOM Element to run tests against
	 * @returns {Boolean} are Elements supported?
	 */
	var elements = function elements(el) {
	  return !!(global.HTMLElement && typeof el.localName === 'string' && typeof el.className === 'string' && typeof el.classList === 'object' && (typeof el.matches === 'function' || typeof el.matchesSelector === 'function' || typeof el.webkitMatchesSelector === 'function' || typeof el.mozMatchesSelector === 'function' || typeof el.msMatchesSelector === 'function') // IE (10, 11), Edge
	  );
	};

	/**
	 * @param {Element} [el] a DOM Element to run tests against
	 * @param {Object} [options]
	 * @returns {Boolean} does this JavaScript environment conform to DOM 4?
	 */
	module.exports = function () {
	  var el = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  var _ref$returnObject = _ref.returnObject;
	  var returnObject = _ref$returnObject === undefined ? false : _ref$returnObject;

	  if (!el) {
	    try {
	      el = global.document.createElement('p');
	    } catch (ignore) {
	      return returnObject ? { dom4: false } : false;
	    }
	  }
	  var report = {
	    'dom4.customevent': customEvents(el),
	    'dom4.eventtarget': eventTargets(el),
	    'dom4.document': documents(el),
	    'dom4.node': nodes(el),
	    'dom4.element': elements(el)
	  };

	  (0, _libHelpers.assign)(report, (0, _libDom12['default'])(el, { returnObject: returnObject }));
	  (0, _libHelpers.addSummary)(report, 'dom4');

	  return returnObject ? report : report.dom4;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.addSummary = addSummary;
	exports.assertPropertyTypes = assertPropertyTypes;
	exports.assign = assign;

	function addSummary(target, summaryProp) {
	  for (var prop in target) {
	    if (target.hasOwnProperty(prop)) {
	      if (!target[prop]) {
	        target[summaryProp] = false;
	        return;
	      }
	    }
	  }
	  target[summaryProp] = true;
	}

	function assertPropertyTypes(obj, propTypes) {
	  for (var prop in propTypes) {
	    if (propTypes.hasOwnProperty(prop)) {
	      if (typeof obj[prop] === 'undefined') {
	        global.console.log(prop, 'undefined');
	        return false;
	      }
	      if (propTypes[prop] === null) {
	        break; // special case that is satisfied by any type
	      }
	      if (typeof obj[prop] !== propTypes[prop]) {
	        global.console.log(prop, obj[prop] + ' !== ' + propTypes[prop]);
	        return false;
	      }
	    }
	  }
	  return true;
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

	function assign(target) {
	  if (target === undefined || target === null) {
	    throw new TypeError('Cannot convert first argument to object');
	  }

	  var to = Object(target);

	  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    sources[_key - 1] = arguments[_key];
	  }

	  for (var s = 0; s < sources.length; s++) {
	    var nextSource = sources[s];
	    if (nextSource === undefined || nextSource === null) {
	      continue;
	    }
	    nextSource = Object(nextSource);

	    var keysArray = Object.keys(Object(nextSource));
	    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	      var nextKey = keysArray[nextIndex];
	      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	      if (desc !== undefined && desc.enumerable) {
	        to[nextKey] = nextSource[nextKey];
	      }
	    }
	  }
	  return to;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	// local modules

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _helpers = __webpack_require__(1);

	// this module

	// http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html

	exports['default'] = function (el, _ref) {
	  var returnObject = _ref.returnObject;

	  var doc = el.ownerDocument || global.document;
	  if (!doc) {
	    return returnObject ? { dom1: false } : false;
	  }

	  var dom1Document = (0, _helpers.assertPropertyTypes)(doc, {
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
	    createEntityReference: 'function',
	    getElementsByTagName: 'function'
	  });

	  var dom1Node = (0, _helpers.assertPropertyTypes)(el, {
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

	  var dom1NodeType = (0, _helpers.assertPropertyTypes)(el.constructor, {
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

	  var dom1Element = (0, _helpers.assertPropertyTypes)(el, {
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

	  var report = {
	    'dom1.document': dom1Document,
	    'dom1.element': dom1Element,
	    'dom1.node': dom1Node,
	    'dom1.nodetype': dom1NodeType
	  };

	  (0, _helpers.addSummary)(report, 'dom1');

	  return returnObject ? report : report.dom1;
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;