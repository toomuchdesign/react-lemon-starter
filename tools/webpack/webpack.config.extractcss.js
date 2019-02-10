// EXTEND WEBPACK CONFIGURATION TO WRITE CSS TO FILE
// eslint-disable-next-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {
  const devMode = process.env.NODE_ENV !== 'production';
  const targetServer = env.target === 'server';
  const useStyleLoader = devMode && targetServer === false;

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            useStyleLoader ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: false,
                import: false,
              },
            },
            'postcss-loader',
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: useStyleLoader ? '[name].css' : '[name].[hash].css',
        chunkFilename: useStyleLoader ? '[id].css' : '[id].[hash].css',
      }),
    ],
  };
};
