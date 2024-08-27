import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import es from '../public/locales/es.json';
import en from '../public/locales/en.json';
import ro from '../public/locales/ro.json';


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      es: {
        translation: es
      },
      en: {
        translation: en
      },
      ro: {
        translation: ro
      }
    },
  });

export default i18n;