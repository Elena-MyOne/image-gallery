import { FileItem } from '../../models/interfaces';
import { setCartItems } from '../setCartItems';

describe('setCartItems function', () => {
  test('Should return on array of objects if data is provided', () => {
    const items: FileItem[] = [
      {
        title: 'Image one',
        path: 'https://picsum.photos/id/1001/200/200',
        createdAt: '2024-01-01',
        user: 'UserOne',
        id: '1',
      },
      {
        title: 'Image two',
        path: 'https://picsum.photos/id/1002/200/200',
        createdAt: '2024-01-02',
        user: 'UserTwo',
        id: '2',
      },
    ];

    const result = setCartItems(items);
    expect(result).toEqual(items);
  });

  test('Should return an empty array if passed array is empty', () => {
    const items: FileItem[] = [];
    expect(setCartItems(items)).toEqual([]);
  });

  test('Should return a defauld values if createdAt and id are undefined', () => {
    const items: FileItem[] = [
      {
        title: 'Image one',
        path: 'https://picsum.photos/id/1001/200/200',
        user: 'UserOne',
      },
      {
        title: 'Image two',
        path: 'https://picsum.photos/id/1002/200/200',
        user: 'UserTwo',
      },
    ];

    const expectedResult: FileItem[] = [
      {
        title: 'Image one',
        path: 'https://picsum.photos/id/1001/200/200',
        createdAt: '',
        user: 'UserOne',
        id: '',
      },
      {
        title: 'Image two',
        path: 'https://picsum.photos/id/1002/200/200',
        createdAt: '',
        user: 'UserTwo',
        id: '',
      },
    ];

    const result = setCartItems(items);
    expect(result).toEqual(expectedResult);
  });
});
