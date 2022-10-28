import { createContext, useState } from "react";
import { useTranslation } from "react-i18next";

export const LocaleCtx = createContext({
  locale: "en",
  setLocale: () => {},
  changeLocale: () => {}
});

export const LocaleProvider = ({ children }) => {
  const [_, i18n] = useTranslation();
  i18n.on('languageChanged', () => setLocale(i18n.language));

  const [locale, setLocale] = useState(i18n.language);



  function changeLocale(lng) {
    if(locale !== lng) {
      i18n.changeLanguage(lng);
    }
    
  }

  return <LocaleCtx.Provider value={{ locale, setLocale, changeLocale }}>{children}</LocaleCtx.Provider>;
};
