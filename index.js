'use strict';

/**
 * http://www.w3.org/TR/dom/#interface-customevent
 * @type {Boolean} are CustomEvents supported?
 */
var customEvents = (function () {
  var NAME = 'foo';
  var event;
  try {
    event = new global.CustomEvent(NAME);
    return !!(
      event.type === NAME &&
      typeof event.stopPropagation === 'function' &&
      typeof event.stopImmediatePropagation === 'function' &&
      typeof event.preventDefault === 'function'
    );
  } catch (ignore) {
    return false;
  }
}());

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
 * @returns {Boolean} are ParentNodes, ChildNodes and Nodes supported?
 */
var nodes = function (el) {
  return !!(
    // ParentNode
    typeof el.children === 'object' &&
    typeof el.childElementCount === 'number' &&
    typeof el.querySelector === 'function' &&
    typeof el.querySelectorAll === 'function' &&
    // ChildNode
    typeof el.remove === 'function' &&
    // Node
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
    typeof el.tagName === 'string' &&
    typeof el.className === 'string' &&
    typeof el.classList === 'object' &&
    typeof el.matches === 'function' &&
    typeof el.getAttribute === 'function' &&
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
    customEvents &&
    eventTargets(el) &&
    documents(el) &&
    nodes(el) &&
    elements(el)
  );
};
