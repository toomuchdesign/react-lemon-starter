import API from './api';
import types from './types';

const UserActionCreators = {
  fetchUser(userId) {
    return dispatch => {
      dispatch({type: types.REQUEST_USER, userId});
      return API.fetchUser(userId).then(
        result =>
          dispatch({
            type: types.RECEIVE_USER,
            success: true,
            userId,
            payload: result,
          }),
        error =>
          dispatch({
            type: types.RECEIVE_USER,
            success: false,
            userId,
            payload: error,
          })
      );
    };
  },
};

export default UserActionCreators;
