import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import global_en from '@/languages/en/global.json'
import global_es from '@/languages/es/global.json'

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        global: global_en,
      },
      es: {
        global: global_es,
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });


export default i18next