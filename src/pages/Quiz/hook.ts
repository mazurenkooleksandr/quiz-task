import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCurrentData } from "@/utils/getCurrentData";

export type Answers = { text: string; emoji?: string; id: string };

type Question = {
  id: number;
  type: string;
  title: string;
  subTitle: string;
  answers: Answers[];
};

export const useQuizData = () => {
  const navigateTo = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [localeData, setLocaleData] = useState<Question[]>([]);
  const [currentId, setCurrentId] = useState<number>(Number(id || 0));
  const [showProgressBar, setShowProgressBar] = useState<boolean>(false);

  useEffect(() => {
    setCurrentId(Number(id || 0));
  }, [id]);

  useEffect(() => {
    const currentLocaleData = getCurrentData();

    setLocaleData(currentLocaleData["questions"] as Question[]);
  }, [id]);

  const handleQuizNavigation = useCallback(() => {
    if (currentId < localeData.length) {
      setCurrentId((prevId) => prevId + 1);
      navigateTo(`/quiz/${currentId + 1}`);
    } else {
      setShowProgressBar(true);
      const timeout = setTimeout(() => {
        navigateTo("/email");
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [currentId, localeData, navigateTo]);

  const currentData = localeData[currentId - 1];

  return {
    localeData,
    currentData,
    showProgressBar,
    handleQuizNavigation,
  };
};
