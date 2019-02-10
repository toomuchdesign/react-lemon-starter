import { stateName } from './reducers';

// Selector functions. State is the global state.
export const getUser = state => state[stateName];

export const isUserFetched = (state) => {
  const user = getUser(state);
  return user !== null;
};

export default {
  getUser,
  isUserFetched,
};
