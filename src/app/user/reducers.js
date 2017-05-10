import types from './types';

const reducer = (state = null, action) => {
  switch (action.type) {

    case types.RECEIVE_USER:
      if (action.success) {
        return action.payload;
      }
      return state;

    default:
      return state;
  }
};

// State slice name this reducer is responsible for
export const stateName = 'user';
export default reducer;
