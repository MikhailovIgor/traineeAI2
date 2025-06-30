import { useState, useEffect } from 'react';
import type { User } from '../types/user';
import styles from './UserForm.module.css';
import globalStyles from '../styles/global.module.css';

interface UserFormProps {
  user?: User | null;
  onSubmit: (data: Omit<User, 'id'>) => void;
  onCancel: () => void;
  loading?: boolean;
}

const initialFormData: Omit<User, 'id'> = {
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
      lat: '',
      lng: '',
    },
  },
  company: {
    name: '',
    catchPhrase: '',
    bs: '',
  },
};

export const UserForm: React.FC<UserFormProps> = ({ 
  user, 
  onSubmit, 
  onCancel, 
  loading = false 
}) => {
  const [formData, setFormData] = useState<Omit<User, 'id'>>(initialFormData);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
        address: user.address,
        company: user.company,
      });
    } else {
      setFormData(initialFormData);
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (field: keyof Omit<User, 'id'>, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddressChange = (field: keyof User['address'], value: string) => {
    setFormData(prev => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value,
      },
    }));
  };

  const handleCompanyChange = (field: keyof User['company'], value: string) => {
    setFormData(prev => ({
      ...prev,
      company: {
        ...prev.company,
        [field]: value,
      },
    }));
  };

  return (
    <form className={styles.userForm} onSubmit={handleSubmit}>
      <h2>{user ? 'Edit User' : 'Create New User'}</h2>
      
      <div className={styles.formSection}>
        <h3>Basic Information</h3>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="website">Website</label>
          <input
            type="url"
            id="website"
            value={formData.website}
            onChange={(e) => handleInputChange('website', e.target.value)}
            required
          />
        </div>
      </div>

      <div className={styles.formSection}>
        <h3>Address</h3>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              value={formData.address.street}
              onChange={(e) => handleAddressChange('street', e.target.value)}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="suite">Suite</label>
            <input
              type="text"
              id="suite"
              value={formData.address.suite}
              onChange={(e) => handleAddressChange('suite', e.target.value)}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={formData.address.city}
              onChange={(e) => handleAddressChange('city', e.target.value)}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="zipcode">Zipcode</label>
            <input
              type="text"
              id="zipcode"
              value={formData.address.zipcode}
              onChange={(e) => handleAddressChange('zipcode', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className={styles.formSection}>
        <h3>Company</h3>
        <div className={styles.formGroup}>
          <label htmlFor="company-name">Company Name</label>
          <input
            type="text"
            id="company-name"
            value={formData.company.name}
            onChange={(e) => handleCompanyChange('name', e.target.value)}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="catchphrase">Catch Phrase</label>
          <input
            type="text"
            id="catchphrase"
            value={formData.company.catchPhrase}
            onChange={(e) => handleCompanyChange('catchPhrase', e.target.value)}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="bs">Business Strategy</label>
          <input
            type="text"
            id="bs"
            value={formData.company.bs}
            onChange={(e) => handleCompanyChange('bs', e.target.value)}
          />
        </div>
      </div>

      <div className={styles.formActions}>
        <button type="button" className={`${globalStyles.btn} ${globalStyles.btnSecondary}`} onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className={`${globalStyles.btn} ${globalStyles.btnPrimary}`} disabled={loading}>
          {loading ? 'Saving...' : (user ? 'Update User' : 'Create User')}
        </button>
      </div>
    </form>
  );
}; 