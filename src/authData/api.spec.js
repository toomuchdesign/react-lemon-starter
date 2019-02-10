import API from './api';

describe('authData Api', () => {
  it('should return a method when .fetchAuth() is called', () => {
    expect(typeof API.fetchAuth).toEqual('function');
  });
});
