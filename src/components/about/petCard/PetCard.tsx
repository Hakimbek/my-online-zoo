import { RightArrowIcon } from '../../icons';
import Eagle from '../../../assets/images/eagles.png';
import styles from './PetCard.module.css';

export const PetCard = () => {
  return (
    <div className={styles.card}>
      <img src={Eagle} alt="Eagle" />
      <div className={styles.content}>
        <h3>Australian Koala</h3>
        <p>
          The elevated walkways bring you to eye level with the koalas as they
          perch in their forest.
        </p>
        <button>
          VIEW LIVE CAM
          <RightArrowIcon />
        </button>
      </div>
    </div>
  );
};
