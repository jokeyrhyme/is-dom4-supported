'use strict';

// local modules

import { assertPropertyTypes } from './helpers';

// this module

// http://www.w3.org/TR/DOM-Level-2-Core/

export default function (el, doc) {
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
}
