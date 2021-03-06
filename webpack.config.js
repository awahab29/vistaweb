'use strict';

var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  OpenBrowserPlugin = require('open-browser-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  UrlLoader = require('url-loader'),
  FileLoader = require('url-loader'),
  path = require('path'),
  srcPath = path.join(__dirname, 'src');

module.exports = {
  target: 'web',
  cache: true,
  entry: {
    common: ['react', 'react-router', 'alt', 'es6-promise'],
    app: path.join(srcPath, 'App.js')
  },
  resolve: {
    root: srcPath,
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules']
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '',
    filename: '[name].js',
    library: ['Example', '[name]'],
    pathInfo: true
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel?cacheDirectory'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
      }
    ],
    
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8050',
      browser: 'Chrome'
    }),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("style.css", {
      allChunks: true
    })

    //new webpack.optimize.UglifyJsPlugin({ //enable it for minification
    //  compress: {
    //    warnings: false
    //  }
    //})
  ],

  debug: true,
  //devtool: 'eval-source-map',//'eval-cheap-module-source-map',
  devServer: {
    contentBase: './build',
    historyApiFallback: true
  }
};
