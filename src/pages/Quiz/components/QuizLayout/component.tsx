import {
  List,
  UnorderedList,
  Emoji,
  Text,
  Checkbox,
  HiddenCheckbox,
} from "./style.styled";
import { Answers } from "../../hook";
import { useQuizLayoutData } from "./hook";
import { Button } from "@/components/Button";

type Props = {
  id: number;
  type: string;
  answers: Answers[];
  handleQuizNavigation: () => void;
};

export const QuizLayout = ({
  type,
  answers = [],
  id: mainId,
  handleQuizNavigation,
}: Props) => {
  const {
    selectedCheckboxes,
    handleClick,
    handleButtonClick,
    selectedSingle,
    selectedBubbles,
    buttonNext,
  } = useQuizLayoutData({
    type,
    mainId,
    handleQuizNavigation,
  });

  return (
    <>
      {answers.length > 0 && (
        <UnorderedList $type={type}>
          {answers.map(({ id, text, emoji }) => (
            <List
              key={id}
              onClick={() => handleClick(id)}
              $type={type}
              $isActive={
                (type === "multiple-select" &&
                  selectedCheckboxes.includes(id)) ||
                (type === "bubble" && selectedBubbles.includes(id)) ||
                (type === "single-select-image" && selectedSingle === id) ||
                (type === "single-select" && selectedSingle === id)
              }
            >
              {emoji && <Emoji $type={type}>{emoji}</Emoji>}
              {text && <Text $type={type}>{text}</Text>}
              {type === "multiple-select" && (
                <>
                  <HiddenCheckbox
                    checked={selectedCheckboxes.includes(id)}
                    readOnly
                  />
                  <Checkbox />
                </>
              )}
            </List>
          ))}
        </UnorderedList>
      )}
      {(type === "multiple-select" || type === "bubble") && (
        <Button
          disabled={
            (type === "multiple-select" && !selectedCheckboxes.length) ||
            (type === "bubble" && selectedBubbles.length !== 3)
          }
          onClick={handleButtonClick}
        >
          {buttonNext}
        </Button>
      )}
    </>
  );
};
