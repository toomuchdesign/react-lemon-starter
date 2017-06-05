import types from './types';

const initialState = {
  items: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_LEMON:
      return {
        items: [
          ...state.items,
          {
            id: Date.now(),
          },
        ],
      };

    case types.RESET_LEMONS:
      return initialState;

    default:
      return state;
  }
};

// State slice name this reducer is responsible for
export const stateName = 'lemons';
export default reducers;
