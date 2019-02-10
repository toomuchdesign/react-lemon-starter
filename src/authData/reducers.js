import types from './types';

/*
 * authData = null    -> auth still not validated (pending)
 * authData = {...}   -> Valid auth
 * authData = false   -> Invalid auth
 */
const reducers = (state = null, action) => {
  switch (action.type) {
    case types.REQUEST_AUTH:
      return state;

    case types.RECEIVE_AUTH:
      if (action.success) {
        return action.payload;
      }
      return false;

    default:
      return state;
  }
};

// State slice name this reducer is responsible for
export const stateName = 'authData';
export default reducers;
