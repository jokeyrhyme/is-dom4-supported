'use strict';

// local modules

import { assertPropertyTypes } from './helpers';

// this module

// http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html

export default function (el, doc) {
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
}
