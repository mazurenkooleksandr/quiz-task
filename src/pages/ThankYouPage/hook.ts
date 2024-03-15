import { useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { postDataAPI } from "@/api/data";
import {
  getIdFromLocalstorage,
  getLocalStorageData,
} from "@/utils/localStorage";
import { transformData } from "@/utils/transformData";
import { getCurrentData } from "@/utils/getCurrentData";

export const useThankYouPageData = () => {
  const navigateTo = useNavigate();
  const currentData = getCurrentData();
  const { downloadText, thankYouSubTitle, thankYouTitle, buttonRetakeQuiz } =
    currentData["common"];

  const locale = getIdFromLocalstorage();
  const data = getLocalStorageData();
  const answers = transformData(data);

  const email = useMemo(() => {
    return answers.find(({ type }) => type === "email")?.answer;
  }, [answers]);

  useEffect(() => {
    if (locale && email && answers.length > 0) {
      postDataAPI(locale, email, answers);
    }
  }, [locale, email, answers]);

  const handleButtonClick = useCallback(() => {
    localStorage.removeItem("quizStorage");
    navigateTo("/quiz/1");
  }, [navigateTo]);

  return {
    downloadText,
    thankYouTitle,
    thankYouSubTitle,
    buttonRetakeQuiz,
    handleButtonClick,
  };
};
