import { getCurrentData } from "@/utils/getCurrentData";

type Data = {
  id: number;
  answersId: string[];
};

type FilteredItem = {
  id: number;
  title: string;
  type: string;
  answer: string;
};

const getData = (): Data[] => {
  const quizStorage = localStorage.getItem("quizStorage");
  const data: Data[] = quizStorage ? JSON.parse(quizStorage) : [];

  return data;
};

const filterData = (data: Data[]): FilteredItem[] => {
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

export const exportToCsv = () => {
  const data = getData();
  const filteredArray = filterData(data);

  const csvContent =
    "data:text/csv;charset=utf-8," +
    filteredArray.map((el) => Object.values(el).join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "quiz_answers.csv");
  document.body.appendChild(link);
  link.click();
};
