import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getDataFromStore} from 'utils/storage';

import translationRU from './locales/ru.json';
import translationUA from './locales/ua.json';

export const resources = {
  ru: {
    translation: translationRU,
  },
  ua: {
    translation: translationUA,
  },
};

const fallbackLng = 'ru';

const languageDetector = {
  init: Function.prototype,
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: async (callback: any) => {
    const userLang = await getDataFromStore('@user_language');
    const lng: string = userLang ? userLang : fallbackLng;

    callback(lng);
  },
  cacheUserLanguage: () => {},
};

i18n
  //@ts-ignore
  .use(languageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: true,
    resources,
    nsSeparator: '__',
    // TODO: change to locally saved, like:  lng:localStorage.getItem('language')||'en', respect platform!
    //lng: detectLanguage(),
    fallbackLng, // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
