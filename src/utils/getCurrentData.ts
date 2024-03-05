import { getLocaleData } from "@/utils/getLocale";
import { getIdFromLocalstorage } from "@/utils/localStorage";

export const getCurrentData = () => {
  const locale = getIdFromLocalstorage();
  const currentLocaleData = getLocaleData(locale);

  return currentLocaleData;
};
