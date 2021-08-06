import { userFactory } from './userFactory';
import { usersData } from './usersData';

describe('userFactory', () => {
  it('returns same keys as in usersData', () => {
    expect(Object.keys(userFactory())).toEqual(Object.keys(usersData[0]));
  });
});
