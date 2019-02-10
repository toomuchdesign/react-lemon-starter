const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.base');
const path = require('path');
const PATHS = require('../paths');

// Extend Webpack base config with local settings
module.exports = (env = {}) =>
  merge.smart(webpackBaseConfig(env), {
    entry: path.join(PATHS.SERVER, 'index.js'),
    output: {
      filename: 'index.js',
      path: PATHS.BUILD_SERVER,
    },
    target: 'node',
    module: {
      rules: [
        {
          // JS LOADER
          // Reference: https://github.com/babel/babel-loader
          // Transpile .js files using babel-loader
          test: /\.jsx?$/,
          use: ['babel-loader'],
        },
      ],
    },
  });
