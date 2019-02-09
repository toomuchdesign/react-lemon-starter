const fs = require('fs');
const PATHS = require('../tools/paths');
const path = require('path');
const React = require('react');
const express = require('express');
const cheerio = require('cheerio');
const ReactDOMServer = require('react-dom/server');

import Root from '../src/app/Root';
import { makeStore } from '../src/app/store';
import authDataActionCreators from '../src/app/authData/actions';
import userActionCreators from '../src/app/user/actions';
import { getAuthData } from '../src/app/authData/selectors';

// Load index.html entrypoint generated by webpack
const indexHtml = fs.readFileSync(path.join(PATHS.BUILD, 'index.html'), 'utf8');

const app = express();
const port = 3000;

// @TODO exclude autogenerated build/index.html file
app.use(express.static('build', {
  index: false,
}));

function handleRender(req, res) {
  // Grab the initial state from our Redux store
  const store = makeStore();

  // Asyncronously populate application store
  authDataActionCreators.fetchAuth()(store.dispatch)
  .then(
    () => {
      const authData = getAuthData(store.getState());
      return userActionCreators.fetchUser(authData.userId)(store.dispatch);
    },
  )
  .then(
    () => {
      // Inject prerendered markup and preloaded state into index.html file
      const prerenderedHtml = ReactDOMServer.renderToString(<Root store={store} />);
      const preloadedState = store.getState();
      const preloadedStateScriptTag = `<script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/recipes/ServerRendering.html#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          '\\u003c',
        )}
      </script>`;

      const $indexHtml = cheerio.load(indexHtml);

      // Preloaded state has to be inserted before app's script!!!
      $indexHtml('#root').append(prerenderedHtml);
      $indexHtml('#root').after(preloadedStateScriptTag);
      const outputHtml = $indexHtml.html();
      res.send(outputHtml);
    },
  );
}

app.use(handleRender);
app.listen(port, () => console.log(`App listening on port ${port}!`));
