import types from './types';

const LemonsActionCreators = {
  addLemon() {
    return {
      type: types.ADD_LEMON,
    };
  },

  resetLemons() {
    return {
      type: types.RESET_LEMONS,
    };
  },
};

export default LemonsActionCreators;
