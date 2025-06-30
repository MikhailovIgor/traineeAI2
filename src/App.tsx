import { useState, useMemo } from 'react';
import { useUsers } from './hooks/useUsers';
import { UserTable } from './components/UserTable';
import { UserForm } from './components/UserForm';
import { UserDetailModal } from './components/UserDetailModal';
import { SearchBar } from './components/SearchBar';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import type { User } from './types/user';
import styles from './App.module.css';
import globalStyles from './styles/global.module.css';

type ViewMode = 'list' | 'form';

function App() {
  const {
    users,
    loading,
    error,
    createUser,
    updateUser,
    deleteUser,
    clearError,
  } = useUsers();

  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter users based on search query
  const filteredUsers = useMemo(() => {
    if (!searchQuery.trim()) return users;
    
    const query = searchQuery.toLowerCase();
    return users.filter(user => 
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query) ||
      user.company.name.toLowerCase().includes(query) ||
      user.address.city.toLowerCase().includes(query)
    );
  }, [users, searchQuery]);

  const handleCreateUser = () => {
    setEditingUser(null);
    setViewMode('form');
  };

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteUser = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(id);
      } catch (error) {
        console.error('Failed to delete user:', error);
      }
    }
  };

  const handleFormSubmit = async (userData: Omit<User, 'id'>) => {
    try {
      if (editingUser) {
        await updateUser(editingUser.id, userData);
      } else {
        await createUser(userData);
      }
      setViewMode('list');
      setEditingUser(null);
    } catch (error) {
      console.error('Failed to save user:', error);
    }
  };

  const handleFormCancel = () => {
    setViewMode('list');
    setEditingUser(null);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const renderContent = () => {
    if (viewMode === 'form') {
      return (
        <UserForm
          user={editingUser}
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
          loading={loading}
        />
      );
    }

    return (
      <div className={styles.userListContainer}>
        <div className={styles.header}>
          <h1>👥 User Management</h1>
          <button className={`${globalStyles.btn} ${globalStyles.btnPrimary}`} onClick={handleCreateUser}>
            ➕ Add New User
          </button>
        </div>

        <SearchBar onSearch={setSearchQuery} />

        {error && (
          <ErrorMessage
            message={error}
            onRetry={() => window.location.reload()}
            onDismiss={clearError}
          />
        )}

        {loading ? (
          <LoadingSpinner message="Loading users..." />
        ) : (
          <>
            <UserTable
              users={filteredUsers}
              onUserClick={handleUserClick}
              onDeleteUser={handleDeleteUser}
            />
            
            {filteredUsers.length === 0 && (
              <div className={styles.noResults}>
                <p>No users found matching your search.</p>
                {searchQuery && (
                  <button 
                    className={`${globalStyles.btn} ${globalStyles.btnSecondary}`} 
                    onClick={() => setSearchQuery('')}
                  >
                    Clear Search
                  </button>
                )}
              </div>
            )}
          </>
        )}

        {!loading && filteredUsers.length > 0 && (
          <div className={styles.userStats}>
            <p>Showing {filteredUsers.length} of {users.length} users</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={styles.app}>
      {renderContent()}
      
      <UserDetailModal
        user={selectedUser}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
}

export default App;
