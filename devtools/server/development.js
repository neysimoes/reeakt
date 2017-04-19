import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import DashboardPlugin from 'webpack-dashboard/plugin';

const compiler = webpack(webpackConfig);
compiler.apply(new DashboardPlugin());
const host = process.env.HOST || 'localhost';
const port = process.env.HOT_LOAD_PORT || 3000;
const serverOptions = {
  contentBase: 'http://' + host + ':' + port,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  historyApiFallback: true,
  compress: false,
  publicPath: webpackConfig.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true }
};

const app = express();
app.use(webpackDevMiddleware(compiler, serverOptions));
app.use(webpackHotMiddleware(compiler));
app.use('*', function (req, res, next) {
  const filename = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) return next(err);

    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});

app.listen(port, (err) => {
  if (err) console.error(`Error: ${err}`);

  console.info(`Server Bootstrap Successful! Open http://${host}:${port} to see the Development Environment`);
});
