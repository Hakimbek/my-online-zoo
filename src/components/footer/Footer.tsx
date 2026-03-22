import {
  OnlineZooIcon,
  YemDigitalIcon,
  RSSchoolIcon,
  InstagramIcon,
  YouTubeIcon,
  FaceBookIcon,
  RightArrowIcon,
} from '../icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.logoIcons}>
          <Link to="/about">
            <OnlineZooIcon fill="white" />
          </Link>
          <a href="#">
            <YemDigitalIcon />
          </a>
          <a target="_blank" href="https://rs.school/">
            <RSSchoolIcon />
          </a>
        </div>
        <ul className={styles.navigationList}>
          <li>
            <Link to="/about">{t('nav.about')}</Link>
          </li>
          <li>
            <Link to="/map">{t('nav.map')}</Link>
          </li>
          <li>
            <Link to="/zoos">{t('nav.zoos')}</Link>
          </li>
          <li>
            <Link to="/contact">{t('nav.contact')}</Link>
          </li>
        </ul>
        <button className={styles.donationButton}>
          {t('common.donate_for_volunteers')}
          <RightArrowIcon />
        </button>
        <div className={styles.horizontalLine}></div>
      </div>
      <div className={styles.horizontalLine}></div>
      <div className={styles.footerBottom}>
        <div className={styles.socialMediaIcons}>
          <Link to="#">
            <YouTubeIcon />
          </Link>
          <Link to="#">
            <InstagramIcon />
          </Link>
          <Link to="#">
            <FaceBookIcon />
          </Link>
        </div>
        <div className={styles.horizontalLine}></div>
        <ul className={styles.copyrightList}>
          <li>
            <Link to="#">© 2021 DinaK</Link>
          </li>
          <li>
            <Link to="#">© Yem Digital</Link>
          </li>
          <li>
            <Link target="_blank" to="https://rs.school/">
              © RSSchool
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
