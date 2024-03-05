import { useCallback, useState, useEffect } from "react";
import { getCurrentData } from "@/utils/getCurrentData";
import { addToLocalStorage } from "@/utils/localStorage";

type Props = {
  type: string;
  mainId: number;
  handleQuizNavigation: () => void;
};

export const useQuizLayoutData = ({
  type,
  mainId,
  handleQuizNavigation,
}: Props) => {
  const currentData = getCurrentData();
  const { buttonNext } = currentData["common"];

  const [selectedSingle, setSelectedSingle] = useState<string>("");
  const [selectedBubbles, setSelectedBubbles] = useState<string[]>([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  useEffect(() => {
    const storageString = localStorage.getItem("quizStorage");

    if (storageString) {
      const storage = JSON.parse(storageString);

      const selectedIds =
        storage.find(
          (item: { id: number; answersId: string[] }) => item.id === mainId
        )?.answersId || [];

      if (type === "multiple-select") {
        setSelectedCheckboxes(selectedIds);
      } else if (type === "bubble") {
        setSelectedBubbles(selectedIds);
      } else if (type === "single-select-image" || type === "single-select") {
        setSelectedSingle(selectedIds[0] || "");
      }
    }
  }, [mainId, type]);

  const handleClick = useCallback(
    (id: string) => {
      if (type === "multiple-select") {
        if (selectedCheckboxes.includes(id)) {
          setSelectedCheckboxes(
            selectedCheckboxes.filter((item) => item !== id)
          );
        } else {
          setSelectedCheckboxes([...selectedCheckboxes, id]);
        }
      } else if (type === "bubble") {
        if (selectedBubbles.includes(id)) {
          setSelectedBubbles(selectedBubbles.filter((item) => item !== id));
        } else if (selectedBubbles.length < 3) {
          setSelectedBubbles([...selectedBubbles, id]);
        }
      } else {
        setSelectedSingle(id);
        handleQuizNavigation();
        addToLocalStorage({ id: mainId, answersId: [id] });
      }
    },
    [handleQuizNavigation, mainId, selectedBubbles, selectedCheckboxes, type]
  );

  const handleButtonClick = useCallback(() => {
    let updatedAnswersId: string[] = [];

    if (type === "multiple-select") {
      updatedAnswersId = selectedCheckboxes;
    } else if (type === "bubble") {
      updatedAnswersId = selectedBubbles;
    }

    addToLocalStorage({
      id: mainId,
      answersId: updatedAnswersId,
    });

    handleQuizNavigation();
  }, [handleQuizNavigation, mainId, selectedBubbles, selectedCheckboxes, type]);

  return {
    buttonNext,
    handleClick,
    selectedSingle,
    selectedBubbles,
    handleButtonClick,
    selectedCheckboxes,
  };
};
