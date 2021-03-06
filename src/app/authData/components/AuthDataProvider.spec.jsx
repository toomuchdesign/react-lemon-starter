/* eslint comma-dangle: 0 */
import React from 'react';
import { shallow } from 'enzyme';

import { AuthDataProviderWrapper } from './AuthDataProvider';

// Fixtures
process.env.SKIP_AUTH_CHECK = 'false';
const authMock = {};
const routerMock = {
  push: jest.fn(),
};
let fetchAuthDataMock;

beforeEach(() => {
  fetchAuthDataMock = jest.fn();
  routerMock.push = jest.fn();
});

describe('AuthDataProvider component', () => {
  it('Should call "fetchAuthData" on mounting phase', () => {
    shallow(
      <AuthDataProviderWrapper
        authData={authMock}
        fetchAuthData={fetchAuthDataMock}
      />
    );

    expect(fetchAuthDataMock.mock.calls.length).toEqual(1);
  });

  it('Should display children only when "authData" props is a valid object', () => {
    const wrapper = shallow(
      <AuthDataProviderWrapper
        authData={null}
        fetchAuthData={fetchAuthDataMock}
      >
        <div>child</div>
      </AuthDataProviderWrapper>
    );

    expect(wrapper.children().length).toEqual(0);

    wrapper.setProps({ authData: authMock });
    expect(wrapper.children().length).toEqual(1);
  });

  it('Should call router push to redirect to "logout" url when provided "authData is false"', () => {
    const wrapper = shallow(
      <AuthDataProviderWrapper
        authData={null}
        fetchAuthData={fetchAuthDataMock}
        router={routerMock}
      />
    );

    wrapper.setProps({ authData: false });
    expect(routerMock.push.mock.calls.length).toEqual(1);

    const redirectUrl = routerMock.push.mock.calls[0][0].pathname;
    expect(redirectUrl.indexOf('logout') > -1).toEqual(true);
  });
});
