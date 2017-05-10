function getPostCSSPlugins() {
  return [
    require('postcss-smart-import')(),
    require('postcss-nested')(),
    require('postcss-calc')(),
    require('postcss-color-function')(),
    require('postcss-custom-properties')(),
    require('postcss-merge-rules')(),
    require('postcss-url')(),
    require('autoprefixer')(),
    require('postcss-reporter')(),
  ];
}

module.exports = {
  plugins: getPostCSSPlugins(),
};
