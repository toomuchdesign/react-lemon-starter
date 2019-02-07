const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseConfig = require('./webpack.config.base');
const path = require('path');
const PATHS = require('../paths');
// const EmitAllPlugin = require('webpack-emit-all-plugin');

// Extend Webpack base config with local settings
module.exports = env => (
  merge.smart(webpackBaseConfig(env), {
    entry: path.join(PATHS.SRC, 'index.js'),
    plugins: [
      // WEBPACK HTML PLUGIN
      // Use a custom html file as entrypoint
      new HtmlWebpackPlugin({
        template: path.join(PATHS.SRC, 'index.html'),
        inject: 'body',
      }),
    ],
  })
);
