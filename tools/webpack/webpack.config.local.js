const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.config.base');
const path = require('path');
const PATHS = require('../paths');

// Extend Webpack base config with local settings
module.exports = env => (
  merge.smart(webpackBaseConfig(env), {
    entry: {
      app: [
        path.join(PATHS.SRC, 'index.local.js'),
      ],
    },
    plugins: [
      // Manually set "NODE_ENV" variable to "development"
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
  })
);
