import ZooPanda from '../../assets/images/zoo-panda.png';
import Cam1 from '../../assets/images/cam1.png';
import Cam2 from '../../assets/images/cam2.png';
import Cam3 from '../../assets/images/cam3.png';
import { RightArrowIcon } from '../icons';
import { Donation } from '../about/donation/Donation.tsx';
import { useTranslation } from 'react-i18next';
import styles from './Zoo.module.css';

export const Zoo = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.zoo}>
      <div className={styles.cams}>
        <div className={styles.title}>
          <h2>{t('zoo.cams.title')}</h2>
          <button>
            {t('zoo.cams.donate')} <RightArrowIcon />
          </button>
        </div>
        <img src={ZooPanda} alt="Zoo Panda" />
        <div className={styles.options}>
          <h4>{t('zoo.cams.subtitle')}</h4>
          <div>
            <img src={Cam1} alt="Cam 1" />
            <img src={Cam2} alt="Cam 2" />
            <img src={Cam3} alt="Cam 3" />
          </div>
        </div>
        <button>
          {t('zoo.cams.donate')} <RightArrowIcon />
        </button>
      </div>
      <Donation />
    </div>
  );
};
