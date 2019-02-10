import {stateName} from './reducers';

// Selector functions. State is the global state.
export const getAuthData = state => state[stateName];

export const isAuthDataFetched = state => {
  const authData = getAuthData(state);
  return authData !== null;
};

export default {
  getAuthData,
  isAuthDataFetched,
};
