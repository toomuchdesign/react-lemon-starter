import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// Actions
import AuthActionCreators from '../actions';
// Selectors
import { getAuthData, isAuthDataFetched } from '../selectors';

class AuthDataProviderComponent extends Component {
  componentDidMount() {
    if (process.env.SKIP_AUTH_CHECK === 'true') {
      return;
    }

    if (this.props.isAuthDataFetched) {
      return;
    }

    this.redirectToLogoutIfAuthIsInvalid(this.props.authData);
    this.props.fetchAuthData();
  }

  componentWillReceiveProps(nextProps) {
    this.redirectToLogoutIfAuthIsInvalid(nextProps.authData);
  }

  redirectToLogoutIfAuthIsInvalid(authData) {
    if (authData === false && this.props.router) {
      this.props.router.push({
        pathname: '/logout',
        query: {
          continue: `${window.location.origin}${window.location.pathname}`,
        },
      });
    }
  }

  shouldDisplayChildren() {
    if (this.props.authData || process.env.SKIP_AUTH_CHECK === 'true') {
      return true;
    }
    return false;
  }

  render() {
    return this.shouldDisplayChildren()
      ? this.props.children || null
      : null;
  }
}

AuthDataProviderComponent.displayName = 'AuthDataProviderComponent';

AuthDataProviderComponent.propTypes = {
  authData: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  isAuthDataFetched: PropTypes.bool,
  children: PropTypes.node,
  fetchAuthData: PropTypes.func.isRequired,
  router: PropTypes.shape({
    push: PropTypes.func,
  }),
};

AuthDataProviderComponent.defaultProps = {
  isAuthDataFetched: false,
};

const mapStateToProps = state => ({
  authData: getAuthData(state),
  isAuthDataFetched: isAuthDataFetched(state),
});

const mapDispatchToProps = dispatch => ({
  fetchAuthData: () => dispatch(AuthActionCreators.fetchAuth()),
});

// Use named export for unconnected component (for tests)
export { AuthDataProviderComponent };

// Use default export for the connected component (for app)
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AuthDataProviderComponent),
);
