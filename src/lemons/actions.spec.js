import types from './types';
import actions from './actions';

describe('lemons action creators', () => {
  it('addLemon() should create an "ADD_LEMON" action', () => {
    const actual = actions.addLemon();
    const expected = {
      type: types.ADD_LEMON,
    };

    expect(actual).toEqual(expected);
  });

  it('resetLemons() should create an "RESET_LEMONS" action', () => {
    const actual = actions.resetLemons();
    const expected = {
      type: types.RESET_LEMONS,
    };

    expect(actual).toEqual(expected);
  });
});
