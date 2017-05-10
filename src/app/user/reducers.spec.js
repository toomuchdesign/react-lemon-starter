import types from './types';
import reducer from './reducers';

// Fixtures
const initialValue = null;
const userMock = {
  firstname: 'foo',
};

describe('user reducer', () => {
  it('Should return the initial state', () => {
    const actual = reducer(undefined, {});

    expect(actual).toEqual(initialValue);
  });

  it('Should handle RECEIVE_USER + success: true', () => {
    const actual = reducer(undefined, {
      type: types.RECEIVE_USER,
      success: true,
      payload: userMock,
    });

    expect(actual).toEqual(userMock);
  });

  it('Should handle RECEIVE_USER + success: false', () => {
    const actual = reducer(undefined, {
      type: types.RECEIVE_USER,
      success: false,
    });

    expect(actual).toEqual(initialValue);
  });
});
