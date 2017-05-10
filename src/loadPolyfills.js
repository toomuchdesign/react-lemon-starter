/*
 * Conditionally load browser polyfills. See:
 * http://ianobermiller.com/blog/2015/06/01/conditionally-load-intl-polyfill-webpack/
 * https://philipwalton.com/articles/loading-polyfills-only-when-needed/
 */

// Check browser features currently polyfilled
const browserSupportsAllFeatures = (
  'fetch' in window &&
  'find' in Array.prototype &&
  'findIndex' in Array.prototype &&
  'includes' in Array.prototype &&
  'assign' in Object
);

function loadPolyfills(done) {
  if (browserSupportsAllFeatures) {
    done();
  } else {
    // All other browsers loads polyfills and then run `done()`.
    require.ensure([], (require) => {
      // Ensure only makes sure the module has been downloaded and parsed.
      // Now we actually need to run it to install the polyfill.
      // eslint-disable-next-line global-require
      require('./polyfills');

      // Carry on
      done();
    }, 'polyfills-chunk');
  }
}

export default loadPolyfills;
