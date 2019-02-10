import lemonListMock from './__mocks__/lemonList.json';
import { getLemons } from './selectors';
import { stateName } from './reducers';

// Fixtures
const storeMock = {
  [stateName]: {
    items: lemonListMock.items,
  },
};

describe('lemons selectors', () => {
  it('getLemons should return all stored lemons', () => {
    const actual = getLemons(storeMock);
    expect(actual).toEqual(lemonListMock.items);
  });
});
