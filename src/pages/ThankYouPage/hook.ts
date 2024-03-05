import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentData } from "@/utils/getCurrentData";

export const useThankYouPageData = () => {
  const navigateTo = useNavigate();
  const currentData = getCurrentData();
  const { downloadText, thankYouSubTitle, thankYouTitle, buttonRetakeQuiz } =
    currentData["common"];

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
