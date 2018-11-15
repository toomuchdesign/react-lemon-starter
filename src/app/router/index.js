import React from 'react';
import PropTypes from 'prop-types';
import { Router, useRouterHistory, createMemoryHistory } from 'react-router';
import useNamedRoutes from 'use-named-routes';
import { syncHistoryWithStore } from 'react-router-redux';
import createHistory from 'history/lib/createBrowserHistory';
import isBrowser from '../lib/isBrowser';

/*
 * Set up application router with:
 * - use-named-routes plugin  (https://github.com/taion/use-named-routes)
 * - react-router-redux       (https://github.com/reactjs/react-router-redux)
 *
 * Remove those enhancements when in trouble with react-router
 * and returns just react-router's browserHistory from makeHistory function
 */

// Exported to be used in tests
// Router setup taken from:
// https://github.com/taion/use-named-routes
export function makeHistory(routes = {}, store = {}, forceBrowser) {
  if (forceBrowser === true || isBrowser) {
    let history = createHistory;

    /*
     * use-named-route history
     * Wrap react-router history with named router extension
     */
    history = useNamedRoutes(useRouterHistory(history))({ routes });

    /*
     * react-router-redux history (dev only)
     * Wrap react-rotuer history with a redux timetravelling functionality
     */
    if (process.env.NODE_ENV !== 'production') {
      history = syncHistoryWithStore(history, store);
    }

    return history;
    // Use this if previous setup break something up
    // return browserHistory;
  }
  return createMemoryHistory();
}

/**
 * Set up application router configuration
 * @param {Object} routes   The routes object to initialize the application with
 */
export default function AppRouter({ routes, store, ...props }) {
  return (
    <Router history={makeHistory(routes, store)} {...props}>
      {routes}
    </Router>
  );
}

AppRouter.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  routes: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
};
