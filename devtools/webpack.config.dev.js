const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

const srcPath = path.join(__dirname, '../', '/src/');
const distPath = path.join(__dirname, '../', '/dist/');
const devtoolsPath = path.join(__dirname, '../', '/devtools/');
const webpackIsomorphicTools = new WebpackIsomorphicToolsPlugin(require('./isomorphictools.config'));

module.exports = function (port) {
  return {
    devtool: 'inline-source-map',
    entry: {
      main: [
        'babel-polyfill',
        'webpack-hot-middleware/client?reload=true',
        'react-hot-loader/patch',
        srcPath + 'index'
      ]
    },
    output: {
      path: distPath,
      filename: 'js/[name].js',
      publicPath: `http://localhost:${port}/`
    },
    module: {
      rules: [{
        enforce: 'pre',
        test: /\.js$/,
        include: srcPath,
        exclude: /node_modules/,
        use: 'eslint-loader'
      }, {
        test: /\.(jsx|js)$/,
        include: srcPath,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: webpackIsomorphicTools.regular_expression('images'),
        use: [{
          loader: 'url-loader',
          options: { limit: 8192, name: 'images/[name].[ext]' }
        }, {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: { progressive: true },
            gifsicle: { interlaced: false },
            optipng: { optimizationLevel: 4 },
            pngquant: { quality: '75-90', speed: 3 }
          }
        }]
      }, {
        test: /\.svg$/,
        include: srcPath,
        use: [{
          loader: 'url-loader',
          options: { limit: 8192, name: 'svg/[name].[ext]', mimetype: 'image/svg+xml' }
        }, {
          loader: 'image-webpack-loader',
          options: {
            svgo: {
              plugins: [{ removeUselessDefs: false }, { removeTitle: true }, { removeRasterImages: true }, { sortAttrs: true }]
            }
          }
        }]
      }, {
        test: /\.svg(\?[\s\S]+)?$/,
        exclude: srcPath,
        use: [{
          loader: 'url-loader',
          options: { limit: 8192, name: 'fonts/[name].[ext]', mimetype: 'image/svg+xml' }
        }]
      }, {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader',
          options: { limit: 8192, name: 'fonts/[name].[ext]' }
        }]
      }, {
        test: /\.hbs$/,
        include: devtoolsPath,
        use: [{ loader: 'handlebars-loader' }]
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'reeakt',
        isWebpack: true,
        hash: true,
        template: devtoolsPath + 'templates/index.hbs',
        filename: distPath + 'index.html'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': { 'NODE_ENV': JSON.stringify('development') }
      }),
      webpackIsomorphicTools.development()
    ],
    resolve: {
      alias: {
        "~components": path.resolve(__dirname, 'src/components/'),
        "~containers": path.resolve(__dirname, 'src/containers/'),
        "~pages": path.resolve(__dirname, 'src/pages/'),
        "~reducers": path.resolve(__dirname, 'src/reducers/'),
        "~sagas": path.resolve(__dirname, 'src/sagas/'),
        "~services": path.resolve(__dirname, 'src/services/'),
        "~assets": path.resolve(__dirname, 'src/assets/')
      },
      extensions: ['.js'],
    }
  }
};
