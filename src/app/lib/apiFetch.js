import urlConstructor from 'url-constructor';
import store from 'app/store';
import { getAuthData } from 'app/authData/selectors';

/**
 * @param  {Object} args                        The configuration object for requested API call
 * @param  {String} args.url=''                 Resource url
 * @param  {String} [args.method='get']         Request method
 * @param  {Object} [args.params]               Replacer object to be appended as querystring
 * @param  {Object} [args.payload]              Payload request (passed as fetch body)
 * @param  {Object} [args.headers={}]           Additional headers to be joined with the auth ones
 * @return {Promise}                            Fetch promise
 */
function apiFetch({ method = 'GET', url = '', params, payload, headers = {} }) {
  const fetchConfig = {
    method,
  };

  // Just a mock to skip XHR call when SKIP_AUTH_CHECK === true
  function mockThenable() {
    return {
      then: () => mockThenable(),
    };
  }

  // Skip real fetch when SKIP_AUTH_CHECK === true but not during tests
  if (process.env.SKIP_AUTH_CHECK === 'true' && process.env.NODE_ENV !== 'test') {
    return mockThenable();
  }

  /**
  * Set up request url.
  * If provided url looks like a real url use it as it is,
  * else join proivided url with global API enpoint url
  */
  let requestUrl = url.indexOf('http') === 0
  ? url
  : `${process.env.API_ENDPOINT}/${url}`;

  /**
   * Request headers
   */
  // Get authdata from the store using getAuthData selector
  const authData = getAuthData(store.getState());

  // @TODO Change it in response to contentType args
  const defaultHeaders = {
    // 'Content-Type': 'application/json',
  };

  // Set up an object with necessary authorization properties
  const authHeaders = Boolean(authData) === true
    ? { 'x-token': authData.token, 'x-key': authData.key }
    : {};

  const requestHeaders = Object.assign({}, authHeaders, defaultHeaders, headers);

  fetchConfig.headers = requestHeaders;

  /**
   * Replace paramsstring placeholders
   */
  if (params) {
    requestUrl = urlConstructor(requestUrl, params);
  }

  /**
   * Request body
   */
  if (payload) {
    fetchConfig.body = JSON.stringify(payload);
  }

  // See: https://github.com/github/fetch/tree/v0.10.1#handling-http-error-statuses
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  function parseJSON(response) {
    return response.json
      ? response.json()
      : response;
  }

  return fetch(requestUrl, fetchConfig)
    .then(checkStatus)
    .then(parseJSON);
}

export default apiFetch;
