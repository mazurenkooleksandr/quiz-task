import { getCurrentData } from "@/utils/getCurrentData";

export type TransformData = {
  id: number;
  title: string;
  type: string;
  answer: string;
};

type Data = {
  id: number;
  answersId: string[];
};

export const transformData = (data: Data[]): TransformData[] => {
  const currentData = getCurrentData();
  const questions = currentData["questions"];

  return data.map((item) => {
    if (item.id === 6) {
      return {
        id: item.id,
        title: "Email",
        type: "email",
        answer: item.answersId[0],
      };
    } else {
      const question = questions.find((q) => q.id === item.id);
      const questionTitle = question ? question.title : "";
      const questionType = question ? question.type : "";
      const answers = item.answersId.map((answerId) => {
        const answer = question
          ? question.answers.find((ans) => ans.id === answerId)
          : null;
        return answer ? answer.text : null;
      });

      return {
        id: item.id,
        title: questionTitle,
        type: questionType,
        answer: answers.join(", "),
      };
    }
  });
};
