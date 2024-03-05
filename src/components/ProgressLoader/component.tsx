import {
  Section,
  Container,
  ProgressBar,
  ItemSvg,
  ProgressCircle,
  Value,
  LoaderMessage,
} from "./style.styled";
import { useProgressLoaderData } from "./hook";

export const ProgressLoader = () => {
  const { progressBar, progressLoaderMessage } = useProgressLoaderData();

  return (
    <Container>
      <Section>
        <ProgressBar>
          <ItemSvg $progressBar={progressBar}>
            <ProgressCircle cx="120" cy="120" r="120" />
            <ProgressCircle cx="120" cy="120" r="120" />
          </ItemSvg>
          <Value>
            <p>{progressBar}%</p>
          </Value>
        </ProgressBar>
      </Section>
      <LoaderMessage>{progressLoaderMessage}</LoaderMessage>
    </Container>
  );
};
