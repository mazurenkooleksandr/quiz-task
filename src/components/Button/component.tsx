import { ButtonWrapper } from "./style.styled";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
};
