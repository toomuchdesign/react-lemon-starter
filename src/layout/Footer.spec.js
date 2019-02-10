/* eslint comma-dangle: 0 */
import React from 'react';
import {shallow} from 'enzyme';
import Footer from './Footer';

// Fixtures
function Node() {}

describe('Footer', () => {
  it('Should output with all attributes defined', () => {
    const menuItems = [<Node />];

    const actual = shallow(<Footer menuItems={menuItems} />).get(0);

    const expected = (
      <div className="Footer">
        <div className="Footer-nav">
          <ul className="Footer-menu">
            <li className="Footer-item">Foo</li>
            <li className="Footer-item">Bar</li>
          </ul>
        </div>
      </div>
    );

    expect(actual).toEqual(expected);
  });
});
