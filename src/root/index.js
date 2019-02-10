import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import 'sanitize.css/sanitize.css';

import Router from '../router';
import { getAppRoutes } from '../routes';
import store from '../store';
import './Root.css';

function Root(props) {
  return (
    <Provider store={props.store}>
      <Router routes={getAppRoutes()} store={props.store} />
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object,
  router: PropTypes.object,
};

Root.defaultProps = {
  store,
};

export default Root;
