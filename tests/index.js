'use strict'

// 3rd-party modules

var test = require('tape')

require('babel-core/register')

// our modules

var isDOM4Supported = require('../')
var helpers = require('../lib/helpers')

// this module

test('module exports a function', function (t) {
  t.ok(typeof isDOM4Supported === 'function')
  t.end()
})

test('function returns a Boolean', function (t) {
  t.ok(typeof isDOM4Supported() === 'boolean')
  t.end()
})

test('function returns a Object when returnObject===true', function (t) {
  t.ok(typeof isDOM4Supported(null, { returnObject: true }) === 'object')
  t.end()
})

test('addSummary for all true', function (t) {
  var report = {
    testA: true,
    testB: true
  }
  var expected = {
    summary: true,
    testA: true,
    testB: true
  }
  helpers.addSummary(report, 'summary')
  t.deepEqual(report, expected)
  t.end()
})

test('addSummary for one false', function (t) {
  var report = {
    testA: false,
    testB: true
  }
  var expected = {
    summary: false,
    testA: false,
    testB: true
  }
  helpers.addSummary(report, 'summary')
  t.deepEqual(report, expected)
  t.end()
})

test('addSummary for ignoring one false', function (t) {
  var report = {
    testA: false,
    testB: true
  }
  var expected = {
    summary: true,
    testA: false,
    testB: true
  }
  helpers.addSummary(report, 'summary', { ignore: ['testA'] })
  t.deepEqual(report, expected)
  t.end()
})
