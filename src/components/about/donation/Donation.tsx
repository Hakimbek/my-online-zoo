import { RightArrowIcon } from '../../icons';
import { useTranslation } from 'react-i18next';
import styles from './Donation.module.css';

export const Donation = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.donation}>
      <div>
        <h2>{t('about.donation.title')}</h2>
        <p>{t('about.donation.content')}</p>
      </div>
      <div>
        <p>{t('about.donation.subTitle')}</p>
        <button>
          {t('about.donation.button')}
          <span>
            <RightArrowIcon />
          </span>
        </button>
      </div>
    </div>
  );
};
