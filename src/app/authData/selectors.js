import { stateName } from './reducers';

// Selector functions. State is the global state.
export const getAuthData = state => state[stateName];

export default {
  getAuthData,
};
