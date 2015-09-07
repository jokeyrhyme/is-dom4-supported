'use strict';

// local modules

import { addSummary, assign } from './lib/helpers';
import dom1 from './lib/dom1';
import dom2 from './lib/dom2';

// this module

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
    typeof el.childElementCount === 'number' &&
    typeof el.querySelector === 'function' &&
    typeof el.querySelectorAll === 'function' &&
    // Node
    global.Node &&
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
    typeof el.className === 'string' &&
    typeof el.classList === 'object' &&
    (
      typeof el.matches === 'function' ||
      typeof el.matchesSelector === 'function' ||
      typeof el.webkitMatchesSelector === 'function' ||
      typeof el.mozMatchesSelector === 'function' ||
      typeof el.msMatchesSelector === 'function' // IE (10, 11), Edge
    )
  );
};

/**
 * @param {Element} [el] a DOM Element to run tests against
 * @param {Object} [options]
 * @returns {boolean|Object} true|false unless returnObject is true
 */
module.exports = function (el = null, { returnObject = false } = {}) {
  if (!el) {
    try {
      el = global.document.createElement('p');
    } catch (ignore) {
      return returnObject ? { dom4: false } : false;
    }
  }
  let report = {
    'dom4.customevent': customEvents(el),
    'dom4.eventtarget': eventTargets(el),
    'dom4.document': documents(el),
    'dom4.node': nodes(el),
    'dom4.element': elements(el)
  };

  assign(report, dom1(el, { returnObject }));
  assign(report, dom2(el, { returnObject }));
  addSummary(report, 'dom4');

  return returnObject ? report : report.dom4;
};
