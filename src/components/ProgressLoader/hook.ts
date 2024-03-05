import { useState, useEffect } from "react";
import { getCurrentData } from "@/utils/getCurrentData";

export const useProgressLoaderData = () => {
  const currentData = getCurrentData();
  const { progressLoaderMessage } = currentData["common"];
  const [progressBar, setProgressBar] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressBar((prevProgressBar) =>
        prevProgressBar < 100 ? prevProgressBar + 1 : prevProgressBar
      );
    }, 49);

    setTimeout(() => {
      clearInterval(interval);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return {
    progressBar,
    progressLoaderMessage,
  };
};
