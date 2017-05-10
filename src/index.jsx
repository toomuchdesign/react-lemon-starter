import React from 'react';
import ReactDOM from 'react-dom';
import Root from './app/Root';
import loadPolyfillsAndThen from './loadPolyfills';

loadPolyfillsAndThen(() => {
  const rootEl = document.getElementById('root');

  ReactDOM.render(
    <Root />,
    rootEl,
  );
});
