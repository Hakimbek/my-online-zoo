import { useTranslation } from 'react-i18next';
import { Translate } from 'react-bootstrap-icons';
import styles from './Language.module.css';

export const Language = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <button onClick={toggleLanguage} className={styles.languageButton}>
      <Translate width="25" height="25" />
      {t('common.change_lang')}
    </button>
  );
};
