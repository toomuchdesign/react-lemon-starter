import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import types from './types';
import actions from './actions';

// Fixtures
import mockAuthResponseMock from './__mocks__/authData.json';

const mockToken = 'token';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

afterEach(() => {
  nock.cleanAll();
});

describe('AuthData action creators', () => {
  it('fetchAuth() should create a successful actions (REQUEST/RECEIVE) to fetch user authData', () => {
    nock('http://www.mocky.io/v2')
      .get('/59130e6e0f00007007f858ce')
      .reply(200, mockAuthResponseMock);

    const expectedActions = [
      {type: types.REQUEST_AUTH, payload: mockToken},
      {
        type: types.RECEIVE_AUTH,
        success: true,
        payload: Object.assign({}, mockAuthResponseMock, {token: mockToken}),
      },
    ];

    const store = mockStore({authData: false});

    return store.dispatch(actions.fetchAuth(mockToken)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('fetchAuth() should create a failing actions when provided with falsy token', () => {
    const expectedActions = [
      {type: types.REQUEST_AUTH, payload: false},
      {
        type: types.RECEIVE_AUTH,
        success: false,
        payload: 'No token found',
      },
    ];

    const store = mockStore({authData: false});

    store.dispatch(actions.fetchAuth(false));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
