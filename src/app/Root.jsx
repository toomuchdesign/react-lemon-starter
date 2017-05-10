import React from 'react';
import { Provider } from 'react-redux';
import Router from 'app/router';
import { getAppRoutes } from 'app/routes';

import store from 'app/store';

export default function Root() {
  return (
    <Provider store={store}>
      <Router routes={getAppRoutes()} store={store} />
    </Provider>
  );
}
