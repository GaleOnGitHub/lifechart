var webpack = require('webpack');
var path = require('path');

var APP_DIR   = path.resolve(__dirname, 'src/app');
var DIST_DIR = path.resolve(__dirname, 'dist');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: DIST_DIR,
    filename: 'app.js'
  },
  plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.UglifyJsPlugin()
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        include : APP_DIR,
        loader : 'babel-loader',
        query : { presets: ['es2015','react'] }
      }
    ]
  }
};

module.exports = config;