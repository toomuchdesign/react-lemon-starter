/* eslint comma-dangle: 0 */
import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

describe('Header default output', () => {
  it('Should output with all attributes defined', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});
