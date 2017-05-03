var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var APP_DIR = path.resolve(__dirname, 'client/src');

var config = {
  entry: {
    index: APP_DIR + '/index/Index.jsx',
    portfolio: APP_DIR + '/portfolio/Portfolio.jsx',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name]Bundle.js'
  },

  module : {
    loaders : [
      // {
      //   test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
      // },
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;