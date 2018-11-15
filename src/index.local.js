// eslint-disable-next-line import/no-extraneous-dependencies
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './app/Root';
import loadPolyfillsAndThen from './loadPolyfills';

loadPolyfillsAndThen(() => {
  const rootEl = document.getElementById('root');

  ReactDOM.render(
    <AppContainer>
      <Root />
    </AppContainer>,
    rootEl,
  );

  if (module.hot) {
    module.hot.accept('./app/Root', () => {
      ReactDOM.render(
        <AppContainer>
          <Root />
        </AppContainer>,
        rootEl,
      );
    });
  }
});
