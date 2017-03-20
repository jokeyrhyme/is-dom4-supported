'use strict'

// local modules

const { assertPropertyTypes } = require('./helpers.js')

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
  })

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
  })

  // let dom3Element = assertPropertyTypes(el, {
    // schemaTypeInfo: null, // obsolete

    // setIdAttribute: 'function', // obsolete
    // setIdAttributeNS: 'function', // obsolete
    // setIdAttributeNode: 'function' // obsolete
  // });

  let dom3CustomEvent = !!global.CustomEvent && assertPropertyTypes(global.CustomEvent.prototype || {}, {
    initCustomEvent: 'function'
  })

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
  })

  let dom3EventTarget = assertPropertyTypes(el, {
    addEventListener: 'function',
    removeEventListener: 'function',
    dispatchEvent: 'function'
  })

  let report = {
    'dom3.customevent': dom3CustomEvent,
    'dom3.document': dom3Document,
    // 'dom3.documentimplementation': dom3DocumentImplementation,
    // 'dom3.element': dom3Element,
    'dom3.event': dom3Event,
    'dom3.eventtarget': dom3EventTarget,
    'dom3.node': dom3Node
  }

  return report
}
