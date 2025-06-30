import { render, screen, fireEvent } from '@testing-library/react';
import { UserTable } from './UserTable';
import type { User } from '../types/user';

describe('UserTable', () => {
  const users: User[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: { lat: '1', lng: '2' },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
  ];

  it('renders user table with correct columns and data', () => {
    render(
      <UserTable users={users} onUserClick={() => {}} onDeleteUser={() => {}} />
    );
    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    expect(screen.getByText('Sincere@april.biz')).toBeInTheDocument();
    expect(screen.getByText('Gwenborough, Kulas Light, Apt. 556')).toBeInTheDocument();
    expect(screen.getByText('hildegard.org')).toBeInTheDocument();
    expect(screen.getByText('Romaguera-Crona')).toBeInTheDocument();
  });

  it('calls onDeleteUser when delete button is clicked', () => {
    const onDeleteUser = jest.fn();
    render(
      <UserTable users={users} onUserClick={() => {}} onDeleteUser={onDeleteUser} />
    );
    const deleteBtn = screen.getByRole('button', { name: /delete user/i });
    fireEvent.click(deleteBtn);
    expect(onDeleteUser).toHaveBeenCalledWith(1);
  });
}); 