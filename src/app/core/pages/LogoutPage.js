import { Component } from 'react';
import PropTypes from 'prop-types';

class LogoutPage extends Component {

  componentDidMount() {
    // Build logout redirection url
    let logoutUrl = `${process.env.LOGOUT_URL}`;

    // Encode and append the redirection url to be used when user will be logged again
    if (this.props.location && this.props.location.query && this.props.location.query.continue) {
      logoutUrl += `&continue=${encodeURIComponent(this.props.location.query.continue)}`;
    } else {
      logoutUrl += `&continue=${encodeURIComponent(window.location.origin)}`;
    }

    // Redirect to logout url
    if (process.env.REDIRECT_ON_LOGOUT === 'true') {
      this.props.document.location.href = logoutUrl;
    } else {
      console.log(`Loggin out to: ${logoutUrl}`);
    }
  }

  render() {
    return null;
  }
}

LogoutPage.displayName = 'LogoutPage';

LogoutPage.propTypes = {
  // location injected by react-router
  location: PropTypes.shape({
    query: PropTypes.shape({
      continue: PropTypes.string,
    }),
  }),
};

export default LogoutPage;
