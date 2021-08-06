import { userFactory } from '../../usersData';

import { calculateTotalNumberOfPages, filterRow, getRows } from './UsersList.utils';

describe('calculateTotalNumberOfPages', () => {
  it('calculates pages', () => {
    expect(calculateTotalNumberOfPages({ rowsLength: 12, rowsPerPage: 0 })).toBe(0);
    expect(calculateTotalNumberOfPages({ rowsLength: 12, rowsPerPage: 5 })).toBe(3);
    expect(calculateTotalNumberOfPages({ rowsLength: 5, rowsPerPage: 5 })).toBe(1);
    expect(calculateTotalNumberOfPages({ rowsLength: 1, rowsPerPage: 2 })).toBe(1);
  });
});

describe('filterRow', () => {
  it('filters rows', () => {
    const row = userFactory({ name: 'John', email: 'test@com.pl', id: 1 });

    expect(
      filterRow({
        row,
        searchPhrase: 'Jo',
      }),
    ).toBe(true);

    expect(
      filterRow({
        row,
        searchPhrase: 'Ted',
      }),
    ).toBe(false);

    expect(
      filterRow({
        row,
        searchPhrase: 'tEsT',
      }),
    ).toBe(true);
  });
});

describe('getRows', () => {
  it('returns chunked rows', () => {
    const rowsData = [
      userFactory({ name: 'Benny', email: 'ben@gmail.pl', id: 1 }),
      userFactory({ name: 'John', email: 'john@test.pl', id: 2 }),
      userFactory({ name: 'Ann', email: 'ann@gmail.pl', id: 3 }),
      userFactory({ name: 'Bob', email: 'bob@test.pl', id: 4 }),
      userFactory({ name: 'Tod', email: 'tod@gmail.pl', id: 5 }),
      userFactory({ name: 'Emily', email: 'emily@test.pl', id: 6 }),
    ];
    const rowsPerPage = 2;

    expect(getRows({ rowsData, rowsPerPage, searchPhrase: 'y' })).toEqual([
      [
        userFactory({ name: 'Benny', email: 'ben@gmail.pl', id: 1 }),
        userFactory({ name: 'Emily', email: 'emily@test.pl', id: 6 }),
      ],
    ]);

    expect(getRows({ rowsData, rowsPerPage, searchPhrase: 'O' })).toEqual([
      [
        userFactory({ name: 'John', email: 'john@test.pl', id: 2 }),
        userFactory({ name: 'Bob', email: 'bob@test.pl', id: 4 }),
      ],
      [userFactory({ name: 'Tod', email: 'tod@gmail.pl', id: 5 })],
    ]);

    expect(getRows({ rowsData, rowsPerPage, searchPhrase: '@tEsT' })).toEqual([
      [
        userFactory({ name: 'John', email: 'john@test.pl', id: 2 }),
        userFactory({ name: 'Bob', email: 'bob@test.pl', id: 4 }),
      ],
      [userFactory({ name: 'Emily', email: 'emily@test.pl', id: 6 })],
    ]);
  });
});
