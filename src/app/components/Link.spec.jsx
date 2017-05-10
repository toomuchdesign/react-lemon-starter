/* eslint comma-dangle: 0 */
/* eslint jsx-a11y/anchor-has-content: 0 */
import React from 'react';
import { shallow } from 'enzyme';

import { Link as RouterLink } from 'react-router';
import Link from './Link';

describe('Link component', () => {
  it('Should render <RouterLink/> with "to" attribute by default and use route name as child', () => {
    const actual = shallow(
      <Link
        to="foo"
      />
    ).get(0);

    const expected = (
      <RouterLink
        to="foo"
        activeClassName="is-active"
      >
        foo
      </RouterLink>
    );

    expect(actual).toEqual(expected);
  });

  it('Should accept a string as "to" param and render <RouterLink/> with "to" and children', () => {
    const actual = shallow(
      <Link
        to="foo"
      >
        foo-label
      </Link>
    ).get(0);

    const expected = (
      <RouterLink
        to="foo"
        activeClassName="is-active"
      >
        foo-label
      </RouterLink>
    );

    expect(actual).toEqual(expected);
  });

  it('Should accept an object as "to" param and render <Link/> with "to" and children', () => {
    const actual = shallow(
      <Link
        to={{ name: 'foo' }}
      >
        foo-label
      </Link>
    ).get(0);

    const expected = (
      <RouterLink
        to={{ name: 'foo' }}
        activeClassName="is-active"
      >
        foo-label
      </RouterLink>
    );

    expect(actual).toEqual(expected);
  });

  it('Should set a custom "activeClassName" attribute on <Link/>', () => {
    const actual = shallow(
      <Link
        to="foo"
        activeClassName="custom-class"
      />
    ).get(0);

    const expected = (
      <RouterLink
        to="foo"
        activeClassName="custom-class"
      >
        foo
      </RouterLink>
    );

    expect(actual).toEqual(expected);
  });

  it('Should render a normal anchor when "to" attribute begins with "http"', () => {
    const url = 'https://www.lemon.com';

    const actual = shallow(
      <Link
        to={url}
      />
    ).get(0);

    const expected = (
      <a
        href={url}
      >
        {url}
      </a>
    );

    expect(actual).toEqual(expected);
  });
});
