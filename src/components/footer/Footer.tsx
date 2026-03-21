import {
  OnlineZooIcon,
  YemDigitalIcon,
  RSSchoolIcon,
  InstagramIcon,
  YouTubeIcon,
  FaceBookIcon,
  RightArrowIcon,
} from '../icons';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.logoIcons}>
          <a target="_blank" href="#">
            <OnlineZooIcon />
          </a>
          <a target="_blank" href="#">
            <YemDigitalIcon />
          </a>
          <a target="_blank" href="https://rs.school/">
            <RSSchoolIcon />
          </a>
        </div>
        <ul className={styles.navigationList}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Map</a>
          </li>
          <li>
            <a href="#">Zoos</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
        <button className={styles.donationButton}>
          Donate for volunteers
          <RightArrowIcon />
        </button>
        <div className={styles.horizontalLine}></div>
      </div>
      <div className={styles.horizontalLine}></div>
      <div className={styles.footerBottom}>
        <div className={styles.socialMediaIcons}>
          <a target="_blank" href="#">
            <YouTubeIcon />
          </a>
          <a target="_blank" href="#">
            <InstagramIcon />
          </a>
          <a target="_blank" href="#">
            <FaceBookIcon />
          </a>
        </div>
        <div className={styles.horizontalLine}></div>
        <ul className={styles.copyrightList}>
          <li>
            <a target="_blank" href="#">
              © 2021 DinaK
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              © Yem Digital
            </a>
          </li>
          <li>
            <a target="_blank" href="https://rs.school/">
              © RSSchool
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
