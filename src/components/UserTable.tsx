import type { User } from '../types/user';
import styles from './UserTable.module.css';

interface UserTableProps {
  users: User[];
  onUserClick: (user: User) => void;
  onDeleteUser: (id: number) => void;
}

export const UserTable: React.FC<UserTableProps> = ({ users, onUserClick, onDeleteUser }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.userTable}>
        <thead>
          <tr>
            <th>Name / Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className={styles.tableRow}>
              <td className={styles.nameEmailCell} onClick={() => onUserClick(user)}>
                <div className={styles.nameEmail}>
                  <div className={styles.name}>{user.name}</div>
                  <div className={styles.email}>{user.email}</div>
                </div>
              </td>
              <td className={styles.addressCell} onClick={() => onUserClick(user)}>
                <div className={styles.address}>
                  {user.address.city}, {user.address.street}{user.address.suite ? `, ${user.address.suite}` : ''}
                </div>
              </td>
              <td className={styles.phoneCell} onClick={() => onUserClick(user)}>
                <a href={`tel:${user.phone}`} className={styles.phoneLink} onClick={e => e.stopPropagation()}>
                  {user.phone}
                </a>
              </td>
              <td className={styles.websiteCell} onClick={() => onUserClick(user)}>
                <a 
                  href={`https://${user.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.websiteLink}
                  onClick={e => e.stopPropagation()}
                >
                  {user.website}
                </a>
              </td>
              <td className={styles.companyCell} onClick={() => onUserClick(user)}>
                <span className={styles.companyName}>{user.company.name}</span>
              </td>
              <td className={styles.actionsCell}>
                <button 
                  className={styles.deleteBtn}
                  onClick={() => onDeleteUser(user.id)}
                  title="Delete User"
                  aria-label="Delete User"
                >
                  ×
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 