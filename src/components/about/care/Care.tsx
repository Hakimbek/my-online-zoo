import CareImage from '../../../assets/images/care.png';
import styles from './Care.module.css';

export const Care = () => {
  return (
    <div className={styles.care}>
      <div className={styles.content}>
        <h2>care for the animals you love </h2>
        <p>
          You can help to look after the animals you love with your gift today
        </p>
      </div>
      <img src={CareImage} alt="Care Image" />
    </div>
  );
};
