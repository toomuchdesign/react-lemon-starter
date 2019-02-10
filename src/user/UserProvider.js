import {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Actions
import UserActionCreators from './actions';

// Selectors
import {getAuthData} from '../authData/selectors';
import {isUserFetched} from './selectors';

/**
 * This component is meant to provide user to the state
 */
class UserProviderComponent extends Component {
  componentDidMount() {
    if (process.env.SKIP_AUTH_CHECK === 'true') {
      return;
    }

    if (this.props.isUserFetched) {
      return;
    }
    // Get current user data
    this.props.fetchUser(this.props.authData.userId);
  }

  render() {
    return this.props.children;
  }
}

UserProviderComponent.displayName = 'UserProvider';

UserProviderComponent.propTypes = {
  authData: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  children: PropTypes.node,
  fetchUser: PropTypes.func.isRequired,
  isUserFetched: PropTypes.bool,
};

UserProviderComponent.defaultProps = {
  isUserFetched: false,
};

const mapStateToProps = state => ({
  authData: getAuthData(state),
  isUserFetched: isUserFetched(state),
});

const mapDispatchToProps = dispatch => ({
  fetchUser: userName => dispatch(UserActionCreators.fetchUser(userName)),
});

// Use named export for unconnected component (for tests)
export {UserProviderComponent};

// Use default export for the connected component (for UserProvider)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProviderComponent);
