import { stateName } from './reducers';

// Selector functions. State is the global state.
export const getUser = state => state[stateName];

export default {
  getUser,
};
