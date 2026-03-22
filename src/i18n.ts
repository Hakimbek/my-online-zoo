import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        about: 'About',
        zoos: 'Zoos',
        map: 'Map',
        contact: 'Contact us',
        design: 'Design',
      },
      common: {
        change_lang: 'EN',
        donate_for_volunteers: 'Donate for volunteers',
      },
    },
  },
  ru: {
    translation: {
      nav: {
        about: 'О нас',
        zoos: 'Зоопарки',
        map: 'Карта',
        contact: 'Контакты',
        design: 'Дизайн',
      },
      common: {
        change_lang: 'RU',
        donate_for_volunteers: 'Пожертвовать',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
