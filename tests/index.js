'use strict';

// 3rd-party modules

var test = require('tape');

// our modules

var isDOM4Supported = require('../');

// this module

test('module exports a function', function (t) {
  t.ok(typeof isDOM4Supported === 'function');
  t.end();
});

test('function returns a Boolean', function (t) {
  t.ok(typeof isDOM4Supported() === 'boolean');
  t.end();
});
