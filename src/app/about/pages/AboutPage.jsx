import React from 'react';
import PropTypes from 'prop-types';

export default function AboutPage(props) {
  return (
    <div>
      About: {props.params.foo === undefined ? 'Noo foo' : props.params.foo}
    </div>
  );
}

AboutPage.propTypes = {
  params: PropTypes.objectOf(PropTypes.string),
};
