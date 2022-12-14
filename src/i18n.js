import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';



i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: 'en',
    fallbackLng: 'en',
    // debug: true,

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
export default i18n;












// import translationEN from './locale/en.json';
// import translationAR from './locale/ar.json';


// const resources = {
//   en: {
//      translation: translationEN
//   },
//   ar: {
//     translation: translationAR
//   }
// }


// i18n
// .use(LanguageDetector)
// .use(initReactI18next)
// .init({
//   resources,
//   lng: "en",
//   interpolation: {
//     escapeValue: false
//   },
//   react:{
//     useSuspense: false
//   }
// })



