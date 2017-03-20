'use strict'

// this module

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  },
  output: {
    library: 'isDOM4Supported',
    libraryTarget: 'umd'
  }
}
