import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
// import loadPolyfillsAndThen from './loadPolyfills';

// loadPolyfillsAndThen(() => {
// });

const rootEl = document.getElementById('root');

ReactDOM.hydrate(
  <Root />,
  rootEl,
);
