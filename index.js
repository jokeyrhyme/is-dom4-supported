'use strict';

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
