import apiFetch from 'app/lib/apiFetch';

const API = {
  fetchAuth(token) {
    return apiFetch({
      // Mock an auth call to validate provided token and returnind an "userId"
      url: 'http://www.mocky.io/v2/59130e6e0f00007007f858ce',
      params: {
        token,
      },
    })
      .then(response => Object.assign({}, response, { token }))
      .catch((error) => { throw error; });
  },
};

export default API;
