(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.isDOM4Supported = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});