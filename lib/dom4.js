'use strict';

// local modules

import { assertPropertyTypes } from './helpers';

// this module

// http://www.w3.org/TR/2015/WD-dom-20150618/

export default function (el, doc) {
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

  let dom4CustomEvent = (function () {
    try {
      return !!(new global.CustomEvent('customevent'));
    } catch (err) { return false; }
  }());

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
}
