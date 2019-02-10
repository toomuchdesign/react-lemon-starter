import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router';

/**
 * Link component
 * Link utility to render a link to a registered react-router route
 * or any other http path
 *
 * @param {String|Object} to        Destintion route name or object
 * @param {String} activeClassName  Class to append in case the link is active
 * @param {String} children         Element to be placed inside the anchor
 */
function Link({ to, activeClassName, ...props }) {
  let linkTo = '';
  let linkLabel = '';
  let output = null;

  // Get route destination string
  if (typeof to === 'string') {
    linkTo = to;
  } else if ({}.hasOwnProperty.call(to, 'name')) {
    linkTo = to.name;
  }

  // Find a proper label for the link
  linkLabel = props.children || linkTo;

  // Render a normal link
  if (linkTo.indexOf('http') === 0) {
    output = (
      <a href={linkTo} {...props}>
        {linkLabel}
      </a>
    );
  // ...or render a rect-router Link component
  } else {
    output = (
      <RouterLink
        to={to}
        activeClassName={activeClassName || 'is-active'}
        {...props}
      >
        {linkLabel}
      </RouterLink>
    );
  }

  return output;
}

Link.displayName = 'Link';

Link.propTypes = {
  activeClassName: PropTypes.string,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      params: PropTypes.objectOf(PropTypes.string),
      query: PropTypes.objectOf(PropTypes.string),
    }),
  ]).isRequired,
  children: PropTypes.node,
};

export default Link;
