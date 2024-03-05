import { useState, ChangeEvent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentData } from "@/utils/getCurrentData";
import { validateEmail } from "@/utils/validateEmail";
import { addToLocalStorage } from "@/utils/localStorage";

export const useEmailPageData = () => {
  const navigateTo = useNavigate();
  const currentData = getCurrentData();

  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleEmailChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const inputEmail = e.target.value;
      setEmail(inputEmail);
      setCharCount(inputEmail.length);
      setEmailValid(charCount >= 3 && validateEmail(inputEmail));
      addToLocalStorage({ id: 6, answersId: [inputEmail] });
    },
    [charCount]
  );

  return {
    email,
    charCount,
    emailValid,
    navigateTo,
    currentData,
    handleEmailChange,
  };
};
