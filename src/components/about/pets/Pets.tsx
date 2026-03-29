import { RightArrowIcon } from '../../icons';
import Slick from 'react-slick';
import { useRef, useState, useEffect } from 'react';
import { PetCard } from '../petCard/PetCard.tsx';
import { useTranslation } from 'react-i18next';
import styles from './Pets.module.css';

type PetDataType = {
  id: number;
  name: string;
  commonName: string;
  description: string;
};

const Slider = (Slick as unknown as { default: typeof Slick }).default || Slick;

export const Pets = () => {
  const sliderRef = useRef<Slick | null>(null);
  const { t } = useTranslation();
  const [data, setData] = useState<PetDataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/pets'
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
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1919,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.pets}>
      <div className={styles.content}>
        <h2>{t('about.pets.title')}</h2>
        <p>{t('about.pets.content')}</p>
        {loading && <p>Loading...</p>}
        {error && !loading && <p>{error}</p>}
      </div>
      {!error && !loading && (
        <div className={styles.carousel}>
          <div className={styles.nav}>
            <button onClick={() => sliderRef.current?.slickPrev()}>
              <RightArrowIcon />
            </button>
            <button onClick={() => sliderRef.current?.slickNext()}>
              <RightArrowIcon />
            </button>
          </div>
          <div className={styles.slider}>
            <Slider ref={sliderRef} {...settings}>
              {data?.map(({ id, name, commonName, description }) => (
                <div className={styles.slideWrapper} key={id}>
                  <PetCard
                    name={name}
                    commonName={commonName}
                    description={description}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
      <div className={styles.favourite}>
        <button>
          {t('about.pets.favourite')}
          <RightArrowIcon />
        </button>
      </div>
    </div>
  );
};
