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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	// local modules
	
	import { addSummary, assign } from './lib/helpers';
	import dom1 from './lib/dom1';
	import dom2 from './lib/dom2';
	import dom3 from './lib/dom3';
	import dom4 from './lib/dom4';
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;