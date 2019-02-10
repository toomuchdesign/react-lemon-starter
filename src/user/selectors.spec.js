import { getUser } from './selectors';
import { stateName } from './reducers';

// Fixtures
const userMock = {
  firstname: 'foo',
};

describe('getUser selector', () => {
  it('Should return current user object', () => {
    const actual = getUser({ [stateName]: userMock });

    expect(actual).toEqual(userMock);
  });
});
