/* eslint comma-dangle: 0 */
import React from 'react';
import { shallow } from 'enzyme';

import LogoutPage from './LogoutPage';

process.env.REDIRECT_ON_LOGOUT = 'true';

// Fixtures
const locationMock = {
  query: {
    continue: 'foo',
  },
};
const documentLocationMock = {
  href: 'bar',
};

describe('LogoutPage component', () => {
  it('Should redirect to account page calling "document.location.href" with proper url', () => {
    shallow(
      <LogoutPage
        location={locationMock}
        documentLocation={documentLocationMock}
      />
    );

    let expectedLogoutUrl = `${process.env.LOGOUT_URL}`;
    expectedLogoutUrl += `&continue=${encodeURIComponent(locationMock.query.continue)}`;

    const actualLogoutUrl = documentLocationMock.href;
    expect(expectedLogoutUrl).toEqual(actualLogoutUrl);
  });
});
