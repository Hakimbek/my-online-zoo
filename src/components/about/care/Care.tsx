import CareImage from '../../../assets/images/care.png';
import EatingPandaImage from '../../../assets/images/eating-panda.png';
import KoalaImage from '../../../assets/images/koala.png';
import TigerImage from '../../../assets/images/tiger.png';
import LemurImage from '../../../assets/images/lemur.png';
import EaglesFamilyImage from '../../../assets/images/eagles-family.png';
import { RightArrowIcon } from '../../icons';
import { useTranslation } from 'react-i18next';
import styles from './Care.module.css';

export const Care = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.care}>
      <div className={styles.content}>
        <h2>{t('about.care.title')}</h2>
        <p>{t('about.care.content')}</p>
        <div className={styles.card}>
          <img src={EatingPandaImage} alt="Eating Panda Image" />
          <div>
            <p>{t('about.care.cards.first')}</p>
            <button>
              {t('about.care.feed')}
              <RightArrowIcon />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        <div>
          <img src={KoalaImage} alt="Koala Image" />
        </div>
        <div>
          <div>
            <img src={EatingPandaImage} alt="Eating Panda Image" />
            <p>{t('about.care.cards.first')}</p>
            <button>
              {t('about.care.feed')}
              <RightArrowIcon />
            </button>
          </div>
          <div>
            <img src={LemurImage} alt="Lemur Image" />
            <p>{t('about.care.cards.second')}</p>
            <button>
              {t('about.care.feed')}
              <RightArrowIcon />
            </button>
          </div>
        </div>
        <div>
          <div>
            <img src={TigerImage} alt="Tiger Image" />
            <p>{t('about.care.cards.third')}</p>
            <button>
              {t('about.care.feed')}
              <RightArrowIcon />
            </button>
          </div>
          <div>
            <img src={EaglesFamilyImage} alt="Eagles Image" />
            <p>{t('about.care.cards.forth')}</p>
            <button>
              {t('about.care.feed')}
              <RightArrowIcon />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.desktopCards}>
        <div>
          <img
            className={styles.desktopImage}
            src={KoalaImage}
            alt="Koala Image"
          />
          <div>
            <img src={EatingPandaImage} alt="Eating Panda Image" />
            <p>{t('about.care.cards.first')}</p>
            <button>
              {t('about.care.feed')}
              <RightArrowIcon />
            </button>
          </div>
        </div>
        <div>
          <div>
            <img src={LemurImage} alt="Lemur Image" />
            <p>{t('about.care.cards.second')}</p>
            <button>
              {t('about.care.feed')}
              <RightArrowIcon />
            </button>
          </div>
          <div>
            <img src={TigerImage} alt="Tiger Image" />
            <p>{t('about.care.cards.third')}</p>
            <button>
              {t('about.care.feed')}
              <RightArrowIcon />
            </button>
          </div>
          <div>
            <img src={EaglesFamilyImage} alt="Eagles Image" />
            <p>{t('about.care.cards.forth')}</p>
            <button>
              {t('about.care.feed')}
              <RightArrowIcon />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.favourite}>
        <button>
          {t('about.care.favourite')}
          <RightArrowIcon />
        </button>
      </div>
      <img src={CareImage} alt="Care Image" />
    </div>
  );
};
