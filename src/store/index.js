import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

// Scroll to top when a "location change" action is fired
const scrollToTopOnLocationChange = () => next => action => {
  if (
    action.type === '@@router/LOCATION_CHANGE' &&
    typeof window !== 'undefined'
  ) {
    // @IDEA Make a smooth scroll
    window.scrollTo(0, 0);
  }
  return next(action);
};

let preloadedState;

if (typeof window !== 'undefined' && window.__PRELOADED_STATE__) {
  // Grab the state from a global variable injected into the server-generated HTML
  preloadedState = window.__PRELOADED_STATE__;

  // Allow the passed state to be garbage-collected
  delete window.__PRELOADED_STATE__;
}

/*
 * Connect store with "Redux DevTools Extension" browser tool
 * https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
 */
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
/* eslint-enable */

function makeStore() {
  return createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(scrollToTopOnLocationChange, thunk))
  );
}

export default makeStore();
export {makeStore};
