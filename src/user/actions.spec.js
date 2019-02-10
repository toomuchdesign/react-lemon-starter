import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import types from './types';
import actions from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

afterEach(() => {
  nock.cleanAll();
});

// Fixtures
const userId = 3;
const userMock = {};

// See: http://redux.js.org/docs/recipes/WritingTests.html
describe('User action creators', () => {
  it('fetchUser() should create a successful action to fetch user data', () => {
    nock(process.env.API_ENDPOINT)
      .get(`/users/${userId}`)
      .reply(200, { data: userMock });

    const expectedActions = [
      { type: types.REQUEST_USER, userId },
      { type: types.RECEIVE_USER, success: true, userId, payload: userMock },
    ];

    const store = mockStore({ user: {} });

    return store.dispatch(actions.fetchUser(userId))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
