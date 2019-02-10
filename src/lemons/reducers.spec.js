import types from './types';
import lemonListMock from './__mocks__/lemonList.json';
import reducer from './reducers';

// Fixtures
const initialState = {
  items: [],
};

const filledState = {
  items: lemonListMock.items,
};

describe('lemons reducers', () => {
  it('Should return the initial state', () => {
    const actual = reducer(undefined, {});
    const expected = initialState;

    expect(actual).toEqual(expected);
  });

  it('Should handle ADD_LEMON', () => {
    const actual = reducer(undefined, {
      type: types.ADD_LEMON,
    });

    expect(actual.items.length).toEqual(1);
  });

  it('Should handle RESET_LEMONS', () => {
    const actual = reducer(filledState, {
      type: types.RESET_LEMONS,
    });

    expect(actual.items).toEqual([]);
  });
});
