function getPostCSSPlugins() {
  return [
    require('postcss-smart-import')(),
    require('postcss-merge-rules')(),
    require('postcss-url')(),
  ];
}

module.exports = {
  plugins: getPostCSSPlugins(),
};
