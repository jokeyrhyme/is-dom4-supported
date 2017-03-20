'use strict'

export function addSummary (target, summaryProp, { ignore = [] } = {}) {
  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
      if (ignore.indexOf(prop) !== -1) {
        continue
      }
      if (!target[prop]) {
        target[summaryProp] = false
        return
      }
    }
  }
  target[summaryProp] = true
}

export function assertPropertyTypes (obj, propTypes) {
  for (let prop in propTypes) {
    if (propTypes.hasOwnProperty(prop)) {
      if (typeof obj[prop] === 'undefined') {
        return false
      }
      if (propTypes[prop] === null) {
        continue // special case that is satisfied by any type
      }
      if (typeof obj[prop] !== propTypes[prop]) {
        return false
      }
    }
  }
  return true
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
export function assign (target, ...sources) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert first argument to object')
  }

  let to = Object(target)
  for (let s = 0; s < sources.length; s++) {
    var nextSource = sources[s]
    if (nextSource === undefined || nextSource === null) {
      continue
    }
    nextSource = Object(nextSource)

    let keysArray = Object.keys(Object(nextSource))
    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
      var nextKey = keysArray[nextIndex]
      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey)
      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = nextSource[nextKey]
      }
    }
  }
  return to
}
