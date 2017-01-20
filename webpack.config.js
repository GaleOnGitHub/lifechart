var webpack = require('webpack');
var path = require('path');

var APP_DIR   = path.resolve(__dirname, 'src/app');
var BUILD_DIR = path.resolve(__dirname, 'build');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        include : APP_DIR,
        loader : 'babel',
        query : { presets: ['es2015','react'] }
      }
    ]
  }
};

module.exports = config;