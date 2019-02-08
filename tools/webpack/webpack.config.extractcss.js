// EXTEND WEBPACK CONFIGURATION TO WRITE CSS TO FILE
// eslint-disable-next-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env = {}) => {
  const devMode = process.env.NODE_ENV !== 'production' || env.target === 'server';
  const targetServer = env.target === 'server';

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            (devMode && targetServer === false) ? 'style-loader' : MiniCssExtractPlugin.loader,
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
        },
      ],
    },
    plugins: [
      // new ExtractTextPlugin({
      //   filename: '[name]-[contenthash:base62:8].css',
      //   allChunks: true,
      // }),
      new MiniCssExtractPlugin({
        filename: "[name]-[contenthash:base62:8].css'",
        chunkFilename: "[id].css",
      })
    ],
  };
};
