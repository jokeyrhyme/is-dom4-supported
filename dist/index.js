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
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	/**
	 * http://www.w3.org/TR/dom/#interface-customevent
	 * @param {Element} [el] a DOM Element to run tests against
	 * @returns {Boolean} are CustomEvents supported?
	 */
	var customEvents = function (el) {
	  var doc = el.ownerDocument || global.document;
	  var NAME = 'customevent';
	  var event;
	  try {
	    event = doc.createEvent(NAME);
	    return !!(
	      typeof event.type === 'string' &&
	      typeof event.stopPropagation === 'function' &&
	      typeof event.stopImmediatePropagation === 'function' &&
	      typeof event.preventDefault === 'function'
	    );
	  } catch (ignore) {
	    return false;
	  }
	};

	/**
	 * http://www.w3.org/TR/dom/#interface-eventtarget
	 * @param {Element} [el] a DOM Element to run tests against
	 * @returns {Boolean} are EventTargets supported?
	 */
	var eventTargets = function (el) {
	  return !!(
	    typeof el.addEventListener === 'function' &&
	    typeof el.removeEventListener === 'function' &&
	    typeof el.dispatchEvent === 'function'
	  );
	};

	/**
	 * http://www.w3.org/TR/dom/#interface-document
	 * @param {Element} [el] a DOM Element to run tests against
	 * @returns {Boolean} are Documents supported?
	 */
	var documents = function (el) {
	  var doc = el.ownerDocument || global.document;
	  return !!(
	    typeof doc.documentElement === 'object' &&
	    typeof doc.createDocumentFragment === 'function' &&
	    typeof doc.createProcessingInstruction === 'function' &&
	    typeof doc.importNode === 'function' &&
	    typeof doc.adoptNode === 'function' &&
	    typeof doc.createEvent === 'function' &&
	    typeof doc.createRange === 'function' &&
	    typeof doc.createNodeIterator === 'function' &&
	    typeof doc.createTreeWalker === 'function'
	  );
	};

	/**
	 * http://www.w3.org/TR/dom/#interface-node
	 * http://www.w3.org/TR/dom/#interface-parentnode
	 * http://www.w3.org/TR/dom/#interface-childnode
	 * @param {Element} [el] a DOM Element to run tests against
	 * @returns {Boolean} are ParentNodes and Nodes supported?
	 */
	var nodes = function (el) {
	  // we don't test ChildNode#remove(), because that's a ShadowDOM thing
	  return !!(
	    // ParentNode
	    typeof el.children === 'object' &&
	    typeof el.childElementCount === 'number' &&
	    typeof el.querySelector === 'function' &&
	    typeof el.querySelectorAll === 'function' &&
	    // Node
	    global.Node &&
	    typeof global.Node.ELEMENT_NODE === 'number' &&
	    typeof global.Node.DOCUMENT_FRAGMENT_NODE === 'number' &&
	    typeof el.nodeType === 'number' &&
	    typeof el.hasChildNodes === 'function' &&
	    typeof el.insertBefore === 'function' &&
	    typeof el.appendChild === 'function' &&
	    typeof el.replaceChild === 'function' &&
	    typeof el.removeChild === 'function' &&
	    typeof el.querySelector === 'function'
	  );
	};

	/**
	 * http://www.w3.org/TR/dom/#interface-element
	 * @param {Element} [el] a DOM Element to run tests against
	 * @returns {Boolean} are Elements supported?
	 */
	var elements = function (el) {
	  return !!(
	    global.HTMLElement &&
	    typeof el.localName === 'string' &&
	    typeof el.tagName === 'string' &&
	    typeof el.className === 'string' &&
	    typeof el.classList === 'object' &&
	    (
	      typeof el.matches === 'function' ||
	      typeof el.matchesSelector === 'function' ||
	      typeof el.webkitMatchesSelector === 'function' ||
	      typeof el.mozMatchesSelector === 'function' ||
	      typeof el.msMatchesSelector === 'function' // IE (10, 11), Edge
	    ) &&
	    typeof el.getAttribute === 'function' &&
	    typeof el.hasAttribute === 'function' &&
	    typeof el.removeAttribute === 'function' &&
	    typeof el.setAttribute === 'function'
	  );
	};

	/**
	 * @param {Element} [el] a DOM Element to run tests against
	 * @returns {Boolean} does this JavaScript environment conform to DOM 4?
	 */
	module.exports = function (el) {
	  if (!el) {
	    try {
	      el = global.document.createElement('p');
	    } catch (ignore) {
	      return false;
	    }
	  }
	  return !!(
	    customEvents(el) &&
	    eventTargets(el) &&
	    documents(el) &&
	    nodes(el) &&
	    elements(el)
	  );
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;