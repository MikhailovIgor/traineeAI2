import styles from './ErrorMessage.module.css';
import globalStyles from '../styles/global.module.css';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  onDismiss?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  message, 
  onRetry, 
  onDismiss 
}) => {
  return (
    <div className={styles.errorMessage}>
      <div className={styles.errorIcon}>⚠️</div>
      <div className={styles.errorContent}>
        <p className={styles.errorText}>{message}</p>
        <div className={styles.errorActions}>
          {onRetry && (
            <button className={`${globalStyles.btn} ${globalStyles.btnRetry}`} onClick={onRetry}>
              Try Again
            </button>
          )}
          {onDismiss && (
            <button className={`${globalStyles.btn} ${globalStyles.btnDismiss}`} onClick={onDismiss}>
              Dismiss
            </button>
          )}
        </div>
      </div>
    </div>
  );
}; 