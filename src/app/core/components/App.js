import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import UserActionCreators from '../../user/actions';

// Selectors
import { getAuthData } from '../../authData/selectors';
import { isUserFetched } from '../../user/selectors';

import Page from '../../layout/Page';

/**
 * This is the main App component
 * which should contain all other application containers/page components.
 * It provides a main wrapper layout
 */
class App extends Component {

  componentDidMount() {
    if (this.props.isUserFetched) {
      return;
    }
    // Get current user data
    this.props.fetchUser(this.props.authData.userId);
  }

  render() {
    return (
      <Page>
        {this.props.children}
      </Page>
    );
  }
}

App.displayName = 'App';

App.propTypes = {
  authData: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  children: PropTypes.node,
  fetchUser: PropTypes.func.isRequired,
  isUserFetched: PropTypes.bool,
};

App.defaultProps = {
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
export { App };

// Use default export for the connected component (for app)
export default connect(mapStateToProps, mapDispatchToProps)(App);
