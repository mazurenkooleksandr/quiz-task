import {
  Dot,
  Dots,
  Counter,
  Wrapper,
  Container,
  ArrowButton,
  StyledProgressBar,
} from "./style.styled";

import { useProgressBarData } from "./hook";

type Props = {
  localeDataLength: number;
};

export const ProgressBar = ({ localeDataLength }: Props) => {
  const { progress, goToPreviousPage, currentPage } = useProgressBarData({
    localeDataLength,
  });

  return (
    <Wrapper>
      <Container>
        <ArrowButton onClick={goToPreviousPage} $isHidden={currentPage === 1} />
        <Counter>
          <span>{currentPage}</span>/{localeDataLength}
        </Counter>
        <Dots>
          <Dot />
          <Dot />
          <Dot />
        </Dots>
      </Container>
      <StyledProgressBar $progress={progress} />
    </Wrapper>
  );
};
