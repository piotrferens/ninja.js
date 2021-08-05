import { fireEvent, render, screen } from '@testing-library/react';

import { userFactory } from '../usersData';

import DataTable from './DataTable';

const mockedRows = [
  userFactory({
    name: 'Mads L. Klausen',
    email: 'MadsLKlausen@jourrapide.com',
    id: 1,
  }),
  userFactory({
    name: 'Alfred K. Krogh',
    email: 'AlfredKKrogh@armyspy.com',
    id: 2,
  }),
  userFactory({
    name: 'Silas L. Bertelsen',
    email: 'SilasLBertelsen@armyspy.com',
    id: 3,
  }),
  userFactory({
    name: 'Mia A. Johnsen',
    email: 'MiaAJohnsen@dayrep.com',
    id: 4,
  }),
  userFactory({
    name: 'Alfred S. Schou',
    email: 'AlfredSSchou@jourrapide.com',
    id: 5,
  }),
];

describe('DataTable', () => {
  it('renders 5 rows', async () => {
    const wrapper = render(<DataTable rows={mockedRows} locale="da" rowsPerPage={5} />);

    const rows = wrapper.getAllByTestId('row');

    expect(rows.length).toBe(5);
  });

  it('filters rows based on input', () => {
    const wrapper = render(<DataTable rows={mockedRows} locale="da" rowsPerPage={5} />);

    const searchUsersInput = screen.getByTestId('search-users');

    fireEvent.change(searchUsersInput, { target: { value: 'k' } });

    const rows = wrapper.getAllByTestId('row');

    expect(rows.length).toBe(2);
  });
});
