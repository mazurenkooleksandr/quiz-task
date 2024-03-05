import { Wrapper, NotFoundPageText } from "./style.styled";
import { useNavigate } from "react-router-dom";
import { commonTextEN } from "@/locales/en";
import { Button } from "@/components/Button";

export const NotFoundPage = () => {
  const navigateTo = useNavigate();
  const { notFoundPageText, buttonGoToStart } = commonTextEN || {};

  return (
    <Wrapper>
      <NotFoundPageText>{notFoundPageText}</NotFoundPageText>
      <Button onClick={() => navigateTo("/")}>{buttonGoToStart}</Button>
    </Wrapper>
  );
};
