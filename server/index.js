require('isomorphic-fetch');
const React = require('react');
const express = require('express');
const ReactDOMServer = require('react-dom/server');

import Root from '../src/app/Root';
import { makeStore } from '../src/app/store';
import authDataActionCreators from '../src/app/authData/actions';
import userActionCreators from '../src/app/user/actions';
import { getAuthData } from '../src/app/authData/selectors';
const generateIndex = require('./generateIndex.js');

const app = express();
const port = 3000;

// @TODO exclude autogenerated build/index.html file
app.use(express.static('build', {
  index: false,
}));

function handleRender(req, res) {
  // Grab the initial state from our Redux store
  const store = makeStore();

  authDataActionCreators.fetchAuth()(store.dispatch)
  .then(
    () => {
      const authData = getAuthData(store.getState());
      return userActionCreators.fetchUser(authData.userId)(store.dispatch);
    },
  )
  .then(
    () => {
      const prerenderedHtml = ReactDOMServer.renderToString(<Root store={store} />);
      const preloadedState = store.getState();
      const html = generateIndex(prerenderedHtml, preloadedState);
      res.send(html);
    },
  );
}

app.use(handleRender);
app.listen(port, () => console.log(`App listening on port ${port}!`));