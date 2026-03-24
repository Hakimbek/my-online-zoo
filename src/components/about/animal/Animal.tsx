import { RightArrowIcon } from '../../icons';
import PandaImage from '../../../assets/images/panda.png';
import { useTranslation } from 'react-i18next';
import styles from './Animal.module.css';

export const Animal = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.animal}>
      <div>
        <h2>{t('about.animal.title')}</h2>
        <p>{t('about.animal.content')}</p>
        <button>
          {t('about.animal.button')}
          <RightArrowIcon />
        </button>
      </div>
      <img className={styles.pandaImage} src={PandaImage} alt="Panda Image" />
    </div>
  );
};
