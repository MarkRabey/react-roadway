const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './docs/index.jsx',
  output: {
    path: path.join(__dirname, './docs/dist'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }, {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, './src'), path.resolve(__dirname, './docs')]
            }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer({ browsers: ['last 2 versions'] })]
            }
          }]
        }),
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'babel-loader?cacheDirectory',
          'eslint-loader',
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'main.css', allChunks: true }),
    new CopyWebpackPlugin([
      {from: 'docs/index.html'},
    ]),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: ['src', 'node_modules'],
    alias: {
      'react-roadway': path.resolve(__dirname, './src'),
    },
  },
};
