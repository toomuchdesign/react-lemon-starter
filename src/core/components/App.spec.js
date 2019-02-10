/* eslint comma-dangle: 0 */
import React from 'react';
import {shallow} from 'enzyme';

import {App} from './App';

// Fixtures
const authDataMock = {
  token: 'token',
  key: 'key',
  username: 'username',
};
const userMock = {
  firstname: 'Foo',
  lastname: 'Bar',
  avatar: {
    urls: {
      show: 'image',
    },
  },
};
const routesMock = [{}, {}];

function ChildComponent() {}

describe('App container component', () => {
  it('Should match snapshot', () => {
    const wrapper = shallow(
      <App
        authData={authDataMock}
        user={userMock}
        routes={routesMock}
        fetchUser={() => {}}
      >
        <ChildComponent />
      </App>
    ).get(0);

    expect(wrapper).toMatchSnapshot();
  });
});
