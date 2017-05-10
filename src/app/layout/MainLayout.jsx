import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

export default function MainLayout(props) {
  return (
    <div className="l-page">
      <Header />
      <div className="l-page-inner">
        {React.Children.map(props.children, (child, index) => (
          <div
            key={`MainLayout-item-${index}`}
            className="l-page-block"
          >
            <div className="l-page-container">
              {child}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

MainLayout.displayName = 'MainLayout';

MainLayout.propTypes = {
  children: PropTypes.node,
};
