import path from 'path';
import express from 'express';
import detect from 'detect-port';
import webpack from 'webpack';
import webpackConfig from './webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import DashboardPlugin from 'webpack-dashboard/plugin';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import Html from '~components/Html';

function loadDevServer(port) {
  const app = express();
  const host = process.env.HOST || 'localhost';
  const compiler = webpack(webpackConfig(port));
  compiler.apply(new DashboardPlugin());
  const serverOptions = {
    contentBase: 'http://' + host + ':' + port,
    quiet: true,
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    historyApiFallback: true,
    compress: false,
    publicPath: 'http://' + host + ':' + port,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: { colors: true }
  };

  app.use(webpackDevMiddleware(compiler, serverOptions));
  app.use(webpackHotMiddleware(compiler));
  app.use('*', function (req, res, next) {
    res.set('content-type','text/html');
    res.send(`<!doctype html>${renderToStaticMarkup(<Html assets={webpackIsomorphicTools.assets()} />)}`);
    res.end();
  });
  app.listen(port, (err) => {
    if (err) console.error(`Error: ${err}`);

    console.info(`Server Bootstrap Successful! Open http://${host}:${port} to see the Development Environment`);
  });
}

detect(3000, (error, port) => {
  if (error) throw new Error(error)

  loadDevServer(port)
})
