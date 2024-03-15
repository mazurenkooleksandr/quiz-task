type Props = {
  id: number;
  answersId: string[];
};

export const getLocalStorageData = () => {
  const quizStorage = localStorage.getItem("quizStorage");

  return quizStorage ? JSON.parse(quizStorage) : [];
};

export const getIdFromLocalstorage = () => {
  const storage = getLocalStorageData();
  const item = storage.find((item: { id: number }) => item.id === 1);

  return item ? item.answersId.join() : "en";
};

export const addToLocalStorage = (newQuiz: Props) => {
  const existingQuizJSON = localStorage.getItem("quizStorage");
  let existingQuiz: Props[] = [];

  if (existingQuizJSON) {
    existingQuiz = JSON.parse(existingQuizJSON);
  }

  const existingQuizIndex = existingQuiz.findIndex(
    (quiz) => quiz.id === newQuiz.id
  );

  if (existingQuizIndex !== -1) {
    existingQuiz[existingQuizIndex] = newQuiz;
  } else {
    existingQuiz.push(newQuiz);
  }

  localStorage.setItem("quizStorage", JSON.stringify(existingQuiz));
};
