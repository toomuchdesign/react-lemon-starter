/* eslint comma-dangle: 0 */
import React from 'react';
import {shallow} from 'enzyme';
import Button from './Button';

const defaultClassName = 'Button Button--md';

describe('Button component', () => {
  it('Should Render an empty anchor with default class names', () => {
    const actual = shallow(<Button />).get(0);

    const expected = (
      // eslint-disable-next-line react/self-closing-comp
      <a className={defaultClassName} />
    );

    expect(actual).toEqual(expected);
  });

  it('Should Render a disabled button', () => {
    const actual = shallow(<Button button disabled />).get(0);

    const expected = (
      // eslint-disable-next-line react/self-closing-comp
      <button className={defaultClassName} disabled />
    );

    expect(actual).toEqual(expected);
  });

  it('Should Render a button with "xl" class modifiers', () => {
    const actual = shallow(<Button button size="xl" />).get(0);

    const expected = <button className="Button Button--xl" />;

    expect(actual).toEqual(expected);
  });

  it('Should Render a foo anchor with href, target e rel attributes', () => {
    const actual = shallow(
      <Button href="http://" target="_blank" rel="noopener noreferrer">
        foo
      </Button>
    ).get(0);

    const expected = (
      // eslint-disable-next-line react/self-closing-comp
      <a
        className={defaultClassName}
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
      >
        foo
      </a>
    );

    expect(actual).toEqual(expected);
  });
});
