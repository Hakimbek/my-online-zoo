import { Link, NavLink } from 'react-router-dom';
import { CloseIcon } from '../icons';
import styles from './Header.module.css';

type HeaderMobileModalProps = {
  isActive: boolean;
  setActive: (isActive: boolean) => void;
};

export const HeaderMobileModal = ({
  isActive,
  setActive,
}: HeaderMobileModalProps) => {
  return (
    <div className={isActive ? styles.mobileModal : styles.disabledMobileModal}>
      <button onClick={() => setActive(false)} className={styles.closeButton}>
        <CloseIcon />
      </button>
      <nav className={styles.navLinks}>
        <ul>
          <li>
            <NavLink
              to="/about"
              onClick={() => setActive(false)}
              className={({ isActive }) => (isActive ? styles.activeLink : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/map"
              onClick={() => setActive(false)}
              className={({ isActive }) => (isActive ? styles.activeLink : '')}
            >
              Map
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/zoos"
              onClick={() => setActive(false)}
              className={({ isActive }) => (isActive ? styles.activeLink : '')}
            >
              Zoos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setActive(false)}
              className={({ isActive }) => (isActive ? styles.activeLink : '')}
            >
              Contact us
            </NavLink>
          </li>
          <li>
            <Link
              to="https://www.figma.com/file/lnK11foY8Aoa6oOlDXovVN/Online-ZOO-Project?node-id=0%3A1"
              onClick={() => setActive(false)}
              target="_blank"
            >
              Design
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
