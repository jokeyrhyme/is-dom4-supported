'use strict'

// foreign modules

var webpack = require('webpack')

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
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
}
