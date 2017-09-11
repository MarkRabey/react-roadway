const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config');

config.entry = './src';
config.output = {
  path: path.join(__dirname, './dist'),
  filename: 'index.js',
  library: 'React Roadway',
  libraryTarget: 'commonjs2',
};
config.externals = {
  react: 'react',
};
config.target = 'node';

module.exports = config;
