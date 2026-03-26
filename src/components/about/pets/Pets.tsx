import { RightArrowIcon } from '../../icons';
import Slick from 'react-slick';
import { useRef } from 'react';
import { PetCard } from '../petCard/PetCard.tsx';
import styles from './Pets.module.css';

const Slider = (Slick as unknown as { default: typeof Slick }).default || Slick;

export const Pets = () => {
  const sliderRef = useRef<Slick | null>(null);

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
        <h2>Meet some our Pets</h2>
        <p>
          Do you have a special place in your heart for animals? Who are your
          favorites? Perhaps you'd like to donate to special ones or all our
          pets? We think it's important for you to choose how your donation is
          used.
        </p>
      </div>
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
            <div className={styles.slideWrapper}>
              <PetCard />
            </div>
            <div className={styles.slideWrapper}>
              <PetCard />
            </div>
            <div className={styles.slideWrapper}>
              <PetCard />
            </div>
            <div className={styles.slideWrapper}>
              <PetCard />
            </div>
          </Slider>
        </div>
      </div>
      <div className={styles.favourite}>
        <button>
          choose your favourite
          <RightArrowIcon />
        </button>
      </div>
    </div>
  );
};
