'use strict';

// this module

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  },
  output: {
    library: 'isDOM4Supported',
    libraryTarget: 'umd'
  }
};
