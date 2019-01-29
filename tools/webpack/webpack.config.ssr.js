const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.config.base');
const path = require('path');
const PATHS = require('../paths');
const EmitAllPlugin = require('webpack-emit-all-plugin');

// Extend Webpack base config with local settings
module.exports = env => (
  merge.smart(webpackBaseConfig(env), {
    entry: {
      app: [
        path.join(PATHS.SRC, 'index.local.js'),
      ],
    },
    mode: 'development',
    plugins: [
      new EmitAllPlugin({
        ignorePattern: /node_modules/,
        path: path.join(process.cwd(), 'build_server'),
      }),
      // Manually set "NODE_ENV" variable to "development"
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
  })
);
