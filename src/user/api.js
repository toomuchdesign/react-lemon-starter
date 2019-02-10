import apiFetch from '../lib/apiFetch';

const API = {
  fetchUser(userId = '') {
    return apiFetch({url: 'users/:userId', params: {userId}})
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  },
};

export default API;
