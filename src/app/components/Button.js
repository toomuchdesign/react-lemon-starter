import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Button({ button, children, size, className, ...props }) {
  const ButtonOrLink = button ? 'button' : 'a';

  const ButtonClasses = classNames({
    Button: true,
    [`Button--${size}`]: size,
    [className]: className,
  });

  return (
    <ButtonOrLink
      className={ButtonClasses}
      {...props}
    >
      {children}
    </ButtonOrLink>
  );
}

Button.displayName = 'Button';

Button.propTypes = {
  button: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
};

Button.defaultProps = {
  size: 'md',
};
