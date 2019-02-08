// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import Root from './app/Root';
import loadPolyfillsAndThen from './loadPolyfills';

loadPolyfillsAndThen(() => {
  const rootEl = document.getElementById('root');
  const App = hot(Root);

  ReactDOM.render(
    <App />,
    rootEl,
  );
});
