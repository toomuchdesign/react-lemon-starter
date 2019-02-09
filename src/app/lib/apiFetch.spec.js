import mockedStore from 'app/store';
import nock from 'nock';
import apiFetch from './apiFetch';

afterEach(() => {
  nock.cleanAll();
});

// Mock store globally
jest.mock('app/store');

// Fixtures
const mockedUrl = 'mockedUrl';
const mockedPayload = { foo: 'bar' };

describe('apiFetch lib', () => {
  it('It should make a get request to provided url behind API gateway', () => {
    nock(process.env.API_ENDPOINT)
      .get(`/${mockedUrl}`)
      .reply(200, { success: true });

    return apiFetch({ url: mockedUrl }).then((result) => {
      expect(result.success).toEqual(true);
    });
  });

  it('It should replace url querystring placeholders', () => {
    nock(process.env.API_ENDPOINT)
      .get('/test/bar')
      .reply(200, { success: true });

    return apiFetch({ url: 'test/:foo', params: { foo: 'bar' } }).then((result) => {
      expect(result.success).toEqual(true);
    });
  });

  it('It should inject header request with "x-token" and "x-key"', () => {
    // get authData object from mocked store
    const expectedAuthData = mockedStore.getState().authData;

    nock(process.env.API_ENDPOINT)
      .get(`/${mockedUrl}`)
      .reply(200, function nockResponse() {
        return this.req;
      });

    return apiFetch({ url: mockedUrl }).then((req) => {
      const receivedHeaders = req.headers;
      expect(receivedHeaders['x-token'][0]).toEqual(expectedAuthData.token);
      expect(receivedHeaders['x-key'][0]).toEqual(expectedAuthData.key);
    });
  });

  it('It should fetch an API with an optional payload', () => {
    nock(process.env.API_ENDPOINT)
      .post(`/${mockedUrl}`)
      .reply(200, (uri, requestBody) => requestBody);

    return apiFetch({ method: 'POST', url: mockedUrl, payload: mockedPayload }).then((requestBody) => {
      expect(requestBody).toEqual(mockedPayload);
    });
  });

  it('It should handle a failing request and return a catchable error', () => {
    const httpErrorCode = 404;

    nock(process.env.API_ENDPOINT)
      .get(`/${mockedUrl}`)
      .reply(httpErrorCode, { success: false });

    return apiFetch({ url: mockedUrl })
      .then(() => {
        // Should not be called
        expect(false).toEqual(true);
      })
      .catch((error) => {
        expect(error.response.status).toEqual(httpErrorCode);
      });
  });
});
