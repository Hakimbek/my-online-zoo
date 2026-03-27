import { RightArrowIcon } from '../../icons';
import Eagle from '../../../assets/images/eagles.png';
import styles from './PetCard.module.css';

type PetTypeProps = {
  name: string;
  commonName: string;
  description: string;
};

export const PetCard = ({ name, commonName, description }: PetTypeProps) => {
  return (
    <div className={styles.card}>
      <img src={Eagle} alt="Eagle" />
      <div className={styles.name}>{name}</div>
      <div className={styles.content}>
        <h3>{commonName}</h3>
        <p>{description}</p>
        <button>
          VIEW LIVE CAM
          <RightArrowIcon />
        </button>
      </div>
    </div>
  );
};
