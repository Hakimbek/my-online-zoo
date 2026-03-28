import { HeartIcon, RightArrowIcon, MoneyIcon, FoodIcon } from '../../icons';
import Monkey from '../../../assets/images/monkey.png';
import Banana from '../../../assets/images/banana.png';
import MonkeyEatingBanana from '../../../assets/images/monkey-eating-banana.png';
import { useTranslation } from 'react-i18next';
import styles from './Feed.module.css';

export const Feed = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.feed}>
      <h2>{t('about.feed.title')}</h2>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.horizontalLine}>
            <span>01</span>
            <span></span>
          </div>
          <div className={styles.cardContent}>
            <img src={Monkey} alt="Monkey Image" />
            <div>
              <HeartIcon />
              <h3>{t('about.feed.firstCard.title')}</h3>
              <p>{t('about.feed.firstCard.content')}</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.horizontalLine}>
            <span>02</span>
            <span></span>
          </div>
          <div className={styles.cardContent}>
            <img src={Banana} alt="Banana Image" />
            <div>
              <MoneyIcon />
              <h3>{t('about.feed.secondCard.title')}</h3>
              <p>{t('about.feed.secondCard.content')}</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.horizontalLine}>
            <span>03</span>
            <span></span>
          </div>
          <div className={styles.cardContent}>
            <img src={MonkeyEatingBanana} alt="MonkeyEatingBanana Image" />
            <div>
              <FoodIcon />
              <h3>{t('about.feed.thirdCard.title')}</h3>
              <p>{t('about.feed.thirdCard.content')}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.donateButton}>
        <button>
          Donate now
          <RightArrowIcon />
        </button>
      </div>
    </div>
  );
};
