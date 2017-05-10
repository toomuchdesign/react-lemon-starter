// EXTEND WEBPACK CONFIGURATION TO WRITE CSS TO FILE
// eslint-disable-next-line import/no-extraneous-dependencies
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  if (env === undefined || env.extractcss === undefined) {
    return {};
  }

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            allChunks: true,
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  modules: false,
                  localIdentName: '[local]-[hash:base62:8]',
                  import: false,
                },
              },
              'postcss-loader',
            ],
          }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin({
        filename: '[name]-[contenthash:base62:8].css',
        allChunks: true,
      }),
    ],
  };
};
