import type { User } from '../types/user';
import styles from './UserDetailModal.module.css';

interface UserDetailModalProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

export const UserDetailModal: React.FC<UserDetailModalProps> = ({ user, isOpen, onClose }) => {
  if (!isOpen || !user) return null;

  const mapUrl = `https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">×</button>
        <div className={styles.modalBody}>
          <div>
            <h2 className={styles.userName}>{user.name}</h2>
            <a href={`mailto:${user.email}`} className={styles.userEmail}>{user.email}</a>
          </div>

          <div className={styles.addressBlock}>
            <div className={styles.sectionTitle}>Address</div>
            <div className={styles.addressLine}>{user.address.street}, {user.address.suite}</div>
            <div className={styles.addressLine}>{user.address.city}, {user.address.zipcode}</div>
            <div className={styles.mapLink}>
              <span className={styles.mapPin}>📍</span>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className={styles.mapAnchor}>
                View on map
              </a>
            </div>
          </div>

          <div className={styles.contactBlock}>
            <div className={styles.sectionTitle}>Contact</div>
            <div>
              <span className={styles.contactLabel}>Phone:</span>
              <a href={`tel:${user.phone}`} className={styles.contactValue}>{user.phone}</a>
            </div>
            <div>
              <span className={styles.contactLabel}>Website:</span>
              <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className={styles.contactValue}>{user.website}</a>
            </div>
          </div>

          <div className={styles.companyBlock}>
            <div className={styles.sectionTitle}>Company</div>
            <div>
              <span className={styles.companyLabel}>Name:</span>
              <span className={styles.companyValue}>{user.company.name}</span>
            </div>
            <div className={styles.companyCatchphrase}>{user.company.catchPhrase}</div>
            <div>
              <span className={styles.companyLabel}>Business:</span>
              <span className={styles.companyValue}>{user.company.bs}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 