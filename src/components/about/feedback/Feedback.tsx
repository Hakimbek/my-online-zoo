import { useTranslation } from 'react-i18next';
import Slick from 'react-slick';
import { useEffect, useRef, useState } from 'react';
import { QuoteIcon, RightArrowIcon } from '../../icons';
import styles from './Feedback.module.css';

type FeedbackDataType = {
  id: number;
  city: string;
  month: string;
  year: string;
  text: string;
  name: string;
};

const Slider = (Slick as unknown as { default: typeof Slick }).default || Slick;

export const Feedback = () => {
  const sliderRef = useRef<Slick | null>(null);
  const { t } = useTranslation();
  const [data, setData] = useState<FeedbackDataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/feedback'
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result.data);
      } catch {
        setError('Something went wrong. Please, refresh the page');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.feedback}>
        <div className={styles.content}>
          <h2>{t('about.feedback.title')}</h2>
          <p>{t('about.feedback.content')}</p>
          {loading && <p>Loading...</p>}
          {error && !loading && <p>{error}</p>}
        </div>
        {!error && !loading && (
          <div className={styles.slider}>
            <Slider ref={sliderRef} {...settings}>
              {data?.map(({ id, name, text, city, month, year }) => (
                <div key={id} className={styles.slideWrapper}>
                  <div>
                    <div className={styles.cardIcon}>
                      <QuoteIcon />
                    </div>
                    <h4 className={styles.cardTitle}>
                      {city}, {month} {year}
                    </h4>
                    <p className={styles.cardText}>{text}</p>
                    <p className={styles.cardName}>{name}</p>
                  </div>
                </div>
              ))}
            </Slider>
            <div className={styles.nav}>
              <button onClick={() => sliderRef.current?.slickPrev()}>
                <RightArrowIcon />
              </button>
              <button onClick={() => sliderRef.current?.slickNext()}>
                <RightArrowIcon />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className={styles.feedbackButton}>
        <button>
          {t('about.feedback.feedback')}
          <RightArrowIcon />
        </button>
      </div>
    </>
  );
};
