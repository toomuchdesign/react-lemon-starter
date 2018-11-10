const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');
const PATHS = require('../paths');
const merge = require('webpack-merge');
const webpackExtractCSSConfig = require('./webpack.config.extractcss');

const webpackBaseConfig = {
  output: {
    path: PATHS.BUILD,
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [{
      // JS LOADER
      // Reference: https://github.com/babel/babel-loader
      // Transpile .js files using babel-loader
      test: /\.jsx?$/,
      use: ['babel-loader'],
      include: [
        PATHS.SRC,
      ],
    }, {
      // CSS/POSTCSS LOADER
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        // Reference: https://github.com/postcss/postcss-loader
        'postcss-loader',
      ],
    }, {
      // ASSET FONT LOADER (Inline)
      // Reference: https://github.com/webpack/url-loader
      // @TODO consider to process fonts as normal assets (see next loader)
      test: /\.(ttf|eot|svg|woff(2)?)(?:.*)$/,
      use: 'url-loader?limit=10000',
      include: [
        // Directly target inlinable font assets
      ],
    }, {
      // ASSET IMAGE LOADER
      // Reference: https://github.com/webpack/file-loader
      // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
      // Rename the file using the asset hash
      // Pass along the updated reference to your code
      // You can add here any file extension you want to get copied to your output
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      use: 'file-loader?name=assets/images/[name].[hash].[ext]',
    }],
  },
  plugins: [
    // WEBPACK HTML PLUGIN
    // Use a custom html file as entrypoint
    new HtmlWebpackPlugin({
      template: path.join(PATHS.SRC, 'index.html'),
      inject: 'body',
    }),
    // WEBPACK DOTENV PLUGIN
    // Inject .env file variables into current session
    new DotenvPlugin({
      sample: './.env',
      path: './.env',
    }),
  ],
  // https://github.com/webpack/webpack.js.org/issues/68#issuecomment-240510801
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
  },
};

// Merge Webpack base config with optional extractCSS config
module.exports = env => (
  merge.smartStrategy({
    'module.rules.use': 'replace',
  })(webpackBaseConfig, webpackExtractCSSConfig(env))
);
