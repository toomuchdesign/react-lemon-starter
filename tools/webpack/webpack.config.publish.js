const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.base');
const path = require('path');
const PATHS = require('../paths');

// Manually set "NODE_ENV" environment variable
// It mainly avoid babel to set "dveelopment" transpilation
process.env.NODE_ENV = 'production';

// Extend Webpack base config with publish settings
module.exports = env => (
  merge.smart(webpackBaseConfig(env), {
    entry: {
      app: [
        path.join(PATHS.SRC, 'index.js'),
      ],
    },
    plugins: [
      // See: https://github.com/webpack/docs/wiki/list-of-plugins#commonschunkplugin
      // https://medium.com/webpack/webpack-bits-getting-the-most-out-of-the-commonschunkplugin-ab389e5f318#.wykqe95tm
      new webpack.optimize.CommonsChunkPlugin({
        children: true,
        async: true,
        minChunks: 2,
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_console: true,
        },
        mangle: {
          except: ['import', 'require'],
        },
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
      // Manually set "NODE_ENV" variable to "production"
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
    ],
  })
);
