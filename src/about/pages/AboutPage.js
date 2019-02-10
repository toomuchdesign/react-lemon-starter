import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

function AboutPageComponent(props) {
  const foo = props.match.params && props.match.params.foo;

  //@TODO implement querystring parser
  return <div>About: {foo === undefined ? 'Noo foo' : foo}</div>;
}

AboutPageComponent.propTypes = {
  match: PropTypes.object.isRequired,
};

// Use named export for unconnected component (for tests)
export {AboutPageComponent};

// Use default export for the connected component (for UserProvider)
export default withRouter(AboutPageComponent);
