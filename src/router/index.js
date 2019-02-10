import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

/**
 * Set up browser router configuration
 */
export default function AppRouter({ children }) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
}

AppRouter.propTypes = {
  children: PropTypes.node.isRequired,
};
