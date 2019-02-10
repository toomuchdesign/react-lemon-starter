import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

import './Page.css';

export default function Page(props) {
  return (
    <div className="Page">
      <Header />
      <div className="Page-inner">
        {React.Children.map(props.children, (child, index) => (
          <div key={`Page-item-${index}`} className="Page-block">
            <div className="Page-container">{child}</div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

Page.displayName = 'Page';

Page.propTypes = {
  children: PropTypes.node,
};
