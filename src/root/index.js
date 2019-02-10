import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';

import BrowserRouter from '../router';
import App from '../app';
import store from '../store';

function Root(props) {
  const Router = props.router || BrowserRouter;

  return (
    <Provider store={props.store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object,
  router: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Root.defaultProps = {
  store,
};

export default Root;
