const webpack = require('webpack');
const merge = require('webpack-merge');
const PATHS = require('../paths');

// const customLocalHost = 'lemon.loc';
const customLocalHost = undefined;

// Set up webpack dev server with hot reload stuff
// and recall the proper webpack config (local/publish...)
module.exports = (env = {}) => {
  const webpackConfigMode = env.mode || 'publish';

  // eslint-disable-next-line
  const webpackConfig = require('./webpack.config.' + webpackConfigMode);

  return merge.smart({
    entry: {
      app: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
      ],
    },
    devtool: 'source-map',
    devServer: {
      contentBase: PATHS.SRC,
      historyApiFallback: true,
      hot: true,
      inline: true,
      host: customLocalHost,
      port: process.env.PORT,
      clientLogLevel: 'info',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.NamedModulesPlugin(),
    ],
  }, webpackConfig(env));
};
