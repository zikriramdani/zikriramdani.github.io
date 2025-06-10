import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const customBackendLoader = {
  type: 'backend',
  init: (services, backendOptions, i18nextOptions) => {},
  read: (language, namespace, callback) => {
    const localPath = `/locales/${language}/${namespace}.json`;
    const fallbackPath = `https://zikriramdani.github.io/locales/${language}/${namespace}.json`;

    fetch(localPath)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Local path not found');
      })
      .then((data) => callback(null, data))
      .catch(() => {
        fetch(fallbackPath)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Fallback path not found');
          })
          .then((data) => callback(null, data))
          .catch((error) => callback(error, false));
      });
  },
  create: (languages, namespace, key, fallbackValue) => {},
  write: (language, namespace) => {}
};

// 🚀 Custom detection config
const detectionOptions = {
  // Only use localStorage for detection
  order: ['localStorage'],
  caches: ['localStorage'],
  lookupLocalStorage: 'i18nextLng'
};

const i18nConfig = {
  fallbackLng: 'id',
  detection: detectionOptions, // <--- inject detection here
  interpolation: {
    escapeValue: false
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json'
  }
};

const isServer = typeof window === 'undefined';

i18n
  .use(customBackendLoader)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(i18nConfig)
  .then(() => {
    if (!isServer) {
      // ⛔ Jangan pakai navigator.language untuk override manual di sini
      // Karena LanguageDetector sudah pakai localStorage
      let language = localStorage.getItem('i18nextLng');

      // Jika tidak ada, set manual ke 'id'
      if (!language) {
        i18n.changeLanguage('id');
        localStorage.setItem('i18nextLng', 'id');
      }

      // Pantau perubahan bahasa
      i18n.on('languageChanged', (lng) => {
        const lang = lng.startsWith('id') ? 'id' : 'en';
        localStorage.setItem('i18nextLng', lang);
      });
    }
  });

export default i18n;
