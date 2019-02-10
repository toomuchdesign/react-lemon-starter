import API from './api';

describe('User Api', () => {
  it('should return a method when .fetchUser() is called', () => {
    expect(typeof API.fetchUser).toEqual('function');
  });
});
