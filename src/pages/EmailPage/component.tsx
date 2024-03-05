import {
  EmailInput,
  EmailMessagePolicy,
  EmailInvalidText,
} from "./style.styled";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { useEmailPageData } from "./hook";

export const EmailPage = () => {
  const {
    email,
    charCount,
    emailValid,
    handleEmailChange,
    navigateTo,
    currentData,
  } = useEmailPageData();

  const {
    emailTitle,
    emailSubtitle,
    emailInputPlaceholder,
    buttonNext,
    invalidEmail,
    emailMessage: { commonText, privacyText, andText, termsText },
  } = currentData["common"];

  return (
    <>
      <Title title={emailTitle} subTitle={emailSubtitle} />
      <EmailInput
        type="email"
        placeholder={emailInputPlaceholder}
        onChange={handleEmailChange}
        value={email}
        $emailValid={charCount >= 3 && !emailValid}
      />
      <EmailInvalidText $emailValid={charCount >= 3 && !emailValid}>
        {invalidEmail}
      </EmailInvalidText>
      <EmailMessagePolicy>
        {commonText}
        <span>{privacyText}</span>
        {andText}
        <span>{termsText}</span>
      </EmailMessagePolicy>
      <Button disabled={!emailValid} onClick={() => navigateTo("/thank-you")}>
        {buttonNext}
      </Button>
    </>
  );
};
