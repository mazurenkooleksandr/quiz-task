import { useQuizData } from "./hook";
import { Title } from "@/components/Title";
import { QuizLayout } from "./components/QuizLayout";
import { ProgressBar } from "@/components/ProgressBar";
import { ProgressLoader } from "@/components/ProgressLoader";

export const Quiz = () => {
  const { localeData, currentData, showProgressBar, handleQuizNavigation } =
    useQuizData();
  const { title, subTitle, ...props } = currentData || {};

  return (
    <>
      {!showProgressBar && (
        <>
          <ProgressBar localeDataLength={localeData.length} />
          <Title title={title} subTitle={subTitle} />
          <QuizLayout handleQuizNavigation={handleQuizNavigation} {...props} />
        </>
      )}
      {showProgressBar && <ProgressLoader />}
    </>
  );
};
