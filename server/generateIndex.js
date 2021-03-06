function generateIndex(html, preloadedState) {
  return `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">

      <meta http-equiv="cache-control" content="max-age=0" />
      <meta http-equiv="cache-control" content="no-cache" />
      <meta http-equiv="pragma" content="no-cache" />

      <title ng-bind="title">React lemon starter</title>
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">
      <base href="/">
    </head>
    <body>
      <!--[if lte IE 9]>
          <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="//browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
      <![endif]-->
      <div id="root">${html}</div>
      <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/recipes/ServerRendering.html#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          '\\u003c',
        )}
      </script>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
    <script type="text/javascript" src="/app.js"></script></body>
  </html>
  `;
}

module.exports = generateIndex;
