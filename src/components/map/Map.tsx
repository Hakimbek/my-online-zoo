import {
  MapIcon,
  EagleIcon,
  CrocodileIcon,
  PandaIcon,
  KoalaIcon,
  LionIcon,
  TigerIcon,
  LemurIcon,
  GorillaIcon,
} from '../icons';
import { useTranslation } from 'react-i18next';
import styles from './Map.module.css';

export const Map = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.map}>
      <h2 className={styles.title}>{t('zoo.title')}</h2>
      <MapIcon />
      <div className={styles.eagleIcon}>
        <EagleIcon />
      </div>
      <div className={styles.crocodileIcon}>
        <CrocodileIcon />
      </div>
      <div className={styles.lionIcon}>
        <LionIcon />
      </div>
      <div className={styles.gorillaIcon}>
        <GorillaIcon />
      </div>
      <div className={styles.lemurIcon}>
        <LemurIcon />
      </div>
      <div className={styles.pandaIcon}>
        <PandaIcon />
      </div>
      <div className={styles.tigerIcon}>
        <TigerIcon />
      </div>
      <div className={styles.koalaIcon}>
        <KoalaIcon />
      </div>
    </section>
  );
};
