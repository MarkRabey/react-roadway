"use strict";
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const express = require('express');
const proxy = require('proxy-middleware');
const url = require('url');

const app = express();
app.use('/dist', proxy(url.parse('http://localhost:8081/dist')));

app.get('/*', function(req, res) {
  res.sendFile(`${__dirname}/docs/index.html`);
});

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  contentBase: 'docs',
  hot: true,
  inline: true,
  quiet: false,
  noInfo: false,
  publicPath: "/dist/",
  stats: {
    colors: true
  }
});

server.listen(8081);
app.listen(8080, () => {
  console.log('Listening at http://localhost:8080');
});
