'use strict'

// local modules

const { addSummary, assign } = require('./lib/helpers.js')
const dom1 = require('./lib/dom1.js')
const dom2 = require('./lib/dom2.js')
const dom3 = require('./lib/dom3.js')
const dom4 = require('./lib/dom4.js')

// this module

/**
 * @param {Element} [el] a DOM Element to run tests against
 * @param {Object} [options]
 * @returns {boolean|Object} true|false unless returnObject is true
 */
module.exports = function (el = null, { ignore = [], returnObject = false } = {}) {
  let doc
  if (!el) {
    try {
      el = global.document.createElement('p')
    } catch (ignore) {
      return returnObject ? { dom4: false } : false
    }
  }
  doc = el.ownerDocument || global.document
  if (!doc) {
    return returnObject ? { dom4: false } : false
  }

  let report = {}
  let levels = { dom1, dom2, dom3, dom4 }

  for (let prop in levels) {
    if (levels.hasOwnProperty(prop)) {
      assign(report, levels[prop](el, doc))
      addSummary(report, prop, { ignore })
    }
  }

  return returnObject ? report : report.dom4
}
