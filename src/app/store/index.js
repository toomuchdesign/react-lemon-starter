import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

// Custom store dispatcher middleware: logger
const loggerMiddleware = store => next => (action) => { // eslint-disable-line no-unused-vars
  if (process.env.NODE_ENV !== 'production' && typeof action !== 'function') {
    console.log(`Dispatching ${action.type}`, action);
  }
  return next(action);
};

// Scroll to top when a "location change" action is fired
const scrollToTopOnLocationChange = () => next => (action) => {
  if (action.type === '@@router/LOCATION_CHANGE' && window) {
    // @IDEA Make a smooth scroll
    window.scrollTo(0, 0);
  }
  return next(action);
};

/*
 * Connect store with "Redux DevTools Extension" browser tool
 * https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
 */
/* eslint-disable no-underscore-dangle */
const composeEnhancers = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;
/* eslint-enable */

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(
      loggerMiddleware,
      scrollToTopOnLocationChange,
      thunk,
    ),
  ),
);

export default store;
