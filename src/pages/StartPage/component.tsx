import { Wrapper, WelcomeMessage } from "./style.styled";
import { useNavigate } from "react-router-dom";
import { commonTextEN } from "@/locales/en";
import { Button } from "@/components/Button";

export const StartPage = () => {
  const navigateTo = useNavigate();
  const { welcomeMessage, buttonStart } = commonTextEN || {};

  return (
    <Wrapper>
      <WelcomeMessage>{welcomeMessage}</WelcomeMessage>
      <Button onClick={() => navigateTo("/quiz/1")}>{buttonStart}</Button>
    </Wrapper>
  );
};
