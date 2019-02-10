/* eslint comma-dangle: 0 */
import React from 'react';
import {shallow} from 'enzyme';

import LemonsCounter from '../components/LemonsCounter';
import {LemonsPageComponent} from './LemonsPage';
import lemonListMock from '../__mocks__/lemonList.json';

// Fixtures
const userMock = {
  first_name: 'Foo',
  last_name: 'Bar',
};

const lemonsMock = lemonListMock.items;
const addLemonMock = jest.fn();
const resetLemonsMock = jest.fn();

describe('LemonsPageComponent container component', () => {
  it('Should hide user info', () => {
    const title = shallow(
      <LemonsPageComponent
        user={false}
        lemons={lemonsMock}
        addLemon={addLemonMock}
        resetLemons={resetLemonsMock}
      />
    ).find('h2');

    expect(title.exists()).toEqual(false);
  });

  it('Should display user info', () => {
    const title = shallow(
      <LemonsPageComponent
        user={userMock}
        lemons={lemonsMock}
        addLemon={addLemonMock}
        resetLemons={resetLemonsMock}
      />
    ).find('h2');

    const expected = (
      <strong>
        {userMock.first_name} {userMock.last_name}!
      </strong>
    );

    expect(title.contains(expected)).toEqual(true);
  });
});
