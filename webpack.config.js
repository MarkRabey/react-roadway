const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const DashboardPlugin = require('webpack-dashboard/plugin');
const pkg = require('./package.json');

const env = process.env.NODE_ENV || 'development';

const plugins = [
  new ExtractTextPlugin({ filename: 'main.css', allChunks: true }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(env),
  }),
];

const entry = ['./docs/index.jsx'];

if (env === 'production') {
  Array.prototype.push.apply(plugins, [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ]);


} else {
  Array.prototype.push.apply(plugins, [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
  ]);

  entry.unshift('webpack-dev-server/client?http://localhost:8081/', 'webpack/hot/dev-server');
}

module.exports = {
  entry: entry,
  output: {
    path: path.join(__dirname, './docs/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  devtool: 'source-map',
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
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: ['src', 'node_modules'],
    alias: {
      [pkg.name]: path.resolve(__dirname, './src'),
    },
  },
};
