import WelcomeImage from '../../assets/images/welcome.png';
import EaglesImage from '../../assets/images/eagles.png';
import { useTranslation } from 'react-i18next';
import styles from './About.module.css';

export const Welcome = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.welcome}>
      <div>
        <img src={WelcomeImage} alt="Welcome Image" />
        <div className={styles.welcomeContent}>
          <h2>{t('about.welcome.firstTitle')}</h2>
          <p>{t('about.welcome.firstContent')}</p>
        </div>
      </div>
      <div>
        <img src={EaglesImage} alt="Eagles Image" />
        <div className={styles.welcomeContent}>
          <h2>{t('about.welcome.secondTitle')}</h2>
          <p>{t('about.welcome.secondContent')}</p>
        </div>
      </div>
    </div>
  );
};
