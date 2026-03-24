import { MoonFill, SunFill } from 'react-bootstrap-icons';
import { useTheme } from '../../../context/ThemeContext.tsx';
import styles from './Theme.module.css';

export const Theme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles.themeButton}>
      {theme === 'dark' ? (
        <MoonFill width="30" height="30" />
      ) : (
        <SunFill width="30" height="30" />
      )}
    </button>
  );
};
