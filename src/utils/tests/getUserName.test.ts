import { getUserName } from '../getUserName';

describe('Get user name', () => {
  test('Should return string without spaces from provided string', () => {
    expect(getUserName('John Snow')).toBe('JohnSnow');
  });

  test('Should return an empty string if currentUser is not provided', () => {
    expect(getUserName()).toBe('');
  });

  test('Should return an empty string if provided an empty string', () => {
    expect(getUserName('')).toBe('');
  });
});
