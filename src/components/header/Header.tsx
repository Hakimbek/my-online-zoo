import {
  OnlineZooIcon,
  HamburgerIcon,
  YouTubeIcon,
  InstagramIcon,
  FaceBookIcon,
} from '../icons';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { HeaderMobileModal } from './HeaderMobileModal.tsx';
import { Theme } from './Theme.tsx';
import { Language } from './Language.tsx';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

export const Header = () => {
  const { t } = useTranslation();
  const [isMobileModalActive, setMobileModalActive] = useState(false);

  const handleModal = (isActive: boolean) => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    setMobileModalActive(isActive);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Online ZOO</h1>
      <Link to="/about">
        <OnlineZooIcon fill="black" />
      </Link>
      <div className={styles.navigation}>
        <nav className={styles.navLinks}>
          <ul>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ''
                }
              >
                {t('nav.about')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/map"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ''
                }
              >
                {t('nav.map')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/zoos"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ''
                }
              >
                {t('nav.zoos')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ''
                }
              >
                {t('nav.contact')}
              </NavLink>
            </li>
            <li>
              <Link
                to="https://www.figma.com/file/lnK11foY8Aoa6oOlDXovVN/Online-ZOO-Project?node-id=0%3A1"
                target="_blank"
              >
                {t('nav.design')}
              </Link>
            </li>
          </ul>
        </nav>
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
          <Theme />
          <Language />
        </div>
      </div>
      <button onClick={() => handleModal(true)} className={styles.burgerButton}>
        <HamburgerIcon />
      </button>
      <HeaderMobileModal
        isActive={isMobileModalActive}
        setActive={handleModal}
      />
    </header>
  );
};
