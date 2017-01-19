'use strict';

var webpack = require('webpack');
var path = require('path');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  entry: './app/main.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  },
  // plugins: [
  //   new SWPrecacheWebpackPlugin(
  //     {
  //       //assigning IDs to caches helps differentiate them and makes it easier to push updates
  //       cacheId: 'pwakedex-techtalk',
  //       filename: 'public/webpack-built-sw.js',
  //       maximumFileSizeToCacheInBytes: 4194304,
  //       staticFileGlobs: [
  //         'public/pokeData.js',
  //         'public/pokeImages/*.*',
  //         'public/bundle.js',
  // //         // "app/css/**.css",
  // //         // "app/**.html",
  // //         // "app/js/**.js",
  // //         // "app/images/**.*"
  //       ],
  //       runtimeCaching: [{
  //         handler: 'cacheFirst',
  //         urlPattern: /[.]*$/,
  //       }],
  //   })]
}