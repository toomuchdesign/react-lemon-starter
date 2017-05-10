import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Counter from 'app/components/Counter';
import { getUser } from 'app/user/selectors';

function HomePageComponent(props) {
  let salutation;

  if (props.children) return props.children;

  if (props.user) {
    salutation = (
      <h2>
        Hi <strong>{props.user.first_name} {props.user.last_name}!</strong>
      </h2>
    );
  } else {
    salutation = null;
  }

  return (
    <div>
      {salutation}
      <Counter />
    </div>
  );
}

HomePageComponent.displayName = 'HomePageComponent';

HomePageComponent.propTypes = {
  children: PropTypes.node,
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = state => ({
  user: getUser(state),
});

// Use named export for unconnected component (for tests)
export { HomePageComponent };

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(HomePageComponent);
