import styles from './LoadingSpinner.module.css';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  message?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  message = 'Loading...' 
}) => {
  return (
    <div className={`${styles.loadingSpinner} ${styles[size]}`}>
      <div className={styles.spinner}></div>
      {message && <p className={styles.loadingMessage}>{message}</p>}
    </div>
  );
}; 