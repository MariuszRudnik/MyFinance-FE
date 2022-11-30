import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'pl'],
    fallbackLng: 'en',
    detection: {
      order: ['cookie'],
      caches: ['cookie']
    },
    backend: {
      loadPath: 'assets/locales/{{lng}}/translate.json'
    },
    react: { useSuspense: false },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
    //lng: document.querySelector('html').lang,
  });

export default i18n;
