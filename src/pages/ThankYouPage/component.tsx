import {
  SuccessIcon,
  Container,
  DownloadIcon,
  DownloadText,
} from "./style.styled";

import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import success from "@/assets/checkmark.svg";
import download from "@/assets/download.svg";
import { exportToCsv } from "@/utils/exportToCsv";
import { useThankYouPageData } from "./hook";

export const ThankYouPage = () => {
  const {
    downloadText,
    thankYouTitle,
    thankYouSubTitle,
    buttonRetakeQuiz,
    handleButtonClick,
  } = useThankYouPageData();

  return (
    <>
      <Title title={thankYouTitle} subTitle={thankYouSubTitle} />
      <SuccessIcon src={success} alt="success-icon" />
      <Container onClick={exportToCsv}>
        <DownloadIcon src={download} alt="download-icon" />
        <DownloadText>{downloadText}</DownloadText>
      </Container>
      <Button onClick={handleButtonClick}>{buttonRetakeQuiz}</Button>
    </>
  );
};
