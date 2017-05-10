/* eslint comma-dangle: 0 */
import React from 'react';
import { shallow } from 'enzyme';

import Counter from 'app/components/Counter';
import { HomePageComponent } from './HomePage';

// Fixtures
const userMock = {
  first_name: 'Foo',
  last_name: 'Bar',
};

describe('HomePageComponent container component', () => {
  it('Should hide user info', () => {
    const actual = shallow(
      <HomePageComponent
        user={false}
      />
    ).get(0);

    const expected = (
      <div>
        {null}
        <Counter />
      </div>
    );

    expect(actual).toEqual(expected);
  });

  it('Should display user info', () => {
    const actual = shallow(
      <HomePageComponent
        user={userMock}
      />
    ).get(0);

    const expected = (
      <div>
        <h2>
          Hi <strong>{userMock.first_name} {userMock.last_name}!</strong>
        </h2>
        <Counter />
      </div>
    );

    expect(actual).toEqual(expected);
  });
});
