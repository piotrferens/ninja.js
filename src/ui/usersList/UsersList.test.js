import { fireEvent, render, screen } from '@testing-library/react';

import { userFactory } from '../../usersData';

import { UsersList } from './UsersList';

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
  userFactory({
    name: 'John Ford',
    email: 'john@ford.com',
    id: 6,
  }),
];

describe('UsersList', () => {
  beforeEach(() => {
    render(<UsersList rowsData={mockedRows} rowsPerPage={5} />);
  });

  it('renders users list', () => {
    const rows = screen.getAllByTestId('row');
    const paginationButtons = screen.getAllByTestId('pagination-button');

    expect(screen.getByText('Mads L. Klausen')).toBeInTheDocument();
    expect(screen.queryByText('John Ford')).toBeNull();
    expect(rows.length).toBe(5);
    expect(paginationButtons.length).toBe(2);
  });

  it('navigate between pages', () => {
    const paginationButtons = screen.getAllByTestId('pagination-button');

    const firstPageButton = paginationButtons[0];
    const secondPageButton = paginationButtons[1];

    expect(firstPageButton).toHaveClass('button-outline');
    expect(secondPageButton).not.toHaveClass('button-outline');

    fireEvent.click(secondPageButton);
    const rows = screen.getAllByTestId('row');

    expect(firstPageButton).not.toHaveClass('button-outline');
    expect(secondPageButton).toHaveClass('button-outline');
    expect(rows.length).toBe(1);
    expect(screen.queryByText('John Ford')).toBeInTheDocument();
  });

  it('filters rows based on input', () => {
    const searchUsersInput = screen.getByTestId('search-users');

    fireEvent.change(searchUsersInput, { target: { value: 'k' } });

    const rows = screen.getAllByTestId('row');

    expect(rows.length).toBe(2);
  });

  it('clears filters based on input and displays initial list of users', () => {
    const searchUsersInput = screen.getByTestId('search-users');

    fireEvent.change(searchUsersInput, { target: { value: 'k' } });
    fireEvent.change(searchUsersInput, { target: { value: '' } });

    const rows = screen.getAllByTestId('row');

    expect(rows.length).toBe(5);
  });
});
