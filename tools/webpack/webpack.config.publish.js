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
    mode: 'production',
    optimization: {
      // https://webpack.js.org/plugins/split-chunks-plugin/#optimization-splitchunks
      splitChunks: {
        chunks: 'async',
        minChunks: 2,
      },
    },
    plugins: [
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
