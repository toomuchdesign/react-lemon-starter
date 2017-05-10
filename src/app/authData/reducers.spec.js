import types from './types';
import reducer from './reducers';

// Fixtures
const initialValue = null;
const authDataMock = {
  userId: 3,
  token: 'token',
};

describe('authData reducer', () => {
  it('Should return the initial state', () => {
    const actual = reducer(undefined, {});
    const expected = initialValue;

    expect(actual).toEqual(expected);
  });

  it('Should handle REQUEST_AUTH', () => {
    const actual = reducer(undefined, {
      type: types.REQUEST_AUTH,
    });
    const expected = initialValue;

    expect(actual).toEqual(expected);
  });

  it('Should handle RECEIVE_AUTH + success: true', () => {
    const actual = reducer(undefined, {
      type: types.RECEIVE_AUTH,
      success: true,
      payload: authDataMock,
    });
    const expected = authDataMock;

    expect(actual).toEqual(expected);
  });

  it('Should handle RECEIVE_AUTH + success: false', () => {
    const actual = reducer(authDataMock, {
      type: types.RECEIVE_AUTH,
      success: false,
    });
    const expected = false;

    expect(actual).toEqual(expected);
  });
});
