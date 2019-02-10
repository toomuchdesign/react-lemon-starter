import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const authDataMock = {
  token: 'token',
  key: 'key',
  username: 'username',
};
const userMock = {
  firstname: 'foo',
};

const store = mockStore({
  authData: authDataMock,
  user: userMock,
});

export default store;
