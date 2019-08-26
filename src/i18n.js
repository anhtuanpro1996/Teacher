import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import vi from './locales/vi/vi';
// the translations
// (tip move them in a JSON file and import them)
const resources = {
  vi: {
    translation: vi,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'vi',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
i18n.t('key');
export default i18n;
