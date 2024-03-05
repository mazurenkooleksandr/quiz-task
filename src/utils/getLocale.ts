import { questionsEN, commonTextEN } from "@/locales/en";
import { questionsDE, commonTextDE } from "@/locales/de";
import { questionsES, commonTextES } from "@/locales/es";
import { questionsFR, commonTextFR } from "@/locales/fr";

const LOCALE_CONFIG = {
  en: { questions: questionsEN, common: commonTextEN },
  fr: { questions: questionsFR, common: commonTextFR },
  es: { questions: questionsES, common: commonTextES },
  de: { questions: questionsDE, common: commonTextDE },
};

export const getLocaleData = (locale: string) => {
  switch (locale) {
    case "fr":
      return LOCALE_CONFIG.fr;
    case "de":
      return LOCALE_CONFIG.de;
    case "es":
      return LOCALE_CONFIG.es;
    default:
      return LOCALE_CONFIG.en;
  }
};
