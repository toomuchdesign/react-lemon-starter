/* eslint-disable consistent-return */
import API from './api';
import types from './types';
import getToken from './lib/getToken';

const UserActionCreators = {

  fetchAuth(providedToken) {
    return (dispatch) => {
      const token = providedToken === undefined ? getToken() : providedToken;
      dispatch({ type: types.REQUEST_AUTH, payload: token });

      if (!token) {
        dispatch({
          type: types.RECEIVE_AUTH, success: false, payload: 'No token found',
        });
        return;
      }

      return API.fetchAuth(token)
      .then(
        result => dispatch({
          type: types.RECEIVE_AUTH, success: true, payload: result,
        }),
        error => dispatch({
          type: types.RECEIVE_AUTH, success: false, payload: error,
        }),
      );
    };
  },

};

export default UserActionCreators;
