import styled from "styled-components";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  $type: string;
  $isActive?: boolean;
};

export const UnorderedList = styled.ul<Props>`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem 0 1rem;
  justify-content: center;

  ${({ $type }) =>
    $type === "multiple-select" &&
    ` display: flex;
      justify-content: space-between; 
    `}
`;

export const List = styled.li<Props>`
  width: 100%;
  cursor: pointer;
  font-weight: 600;
  margin: 0.375rem 0;
  border-radius: 1rem;
  line-height: 1.5rem;
  font-size: 1.063rem;
  padding: 1.125rem 1rem;
  border: 0.125rem solid transparent;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  background-color: ${({ theme }) => theme.colors.deepPlum};

  ${({ $type }) =>
    $type === "single-select-image" &&
    ` flex: 0;
      line-height: 1.5;
      text-align: center;
      margin: 0.3rem; 
    `}

  ${({ $type }) =>
    $type === "multiple-select" &&
    ` display: flex;
      justify-content: space-between; 
    `}

  ${({ $type }) =>
    $type === "bubble" &&
    ` padding: 0;
      display: flex;
      width: 5.625rem;
      height: 5.625rem;
      margin-left: 0.313rem;
      flex-direction: column;
      margin-right: 0.313rem;
      justify-content: center;
      border-radius: 3.125rem;

    &:nth-child(even) {
      margin-top: 1.25rem;
    }
 `}

  ${({ $isActive, theme }) =>
    $isActive &&
    ` border: 0.125rem solid ${theme.colors.magenta};
      background-color: ${theme.colors.deepMagenta};
    `}

  &:hover {
    border: 0.125rem solid ${({ theme }) => theme.colors.magenta};
    background-color: ${({ theme }) => theme.colors.deepMagenta};
  }
`;

export const Emoji = styled.p<Props>`
  font-size: 3.25rem;
  text-align: center;

  ${({ $type }) =>
    $type === "bubble" &&
    ` font-size: 1.563rem;
  `}
`;

export const Text = styled.p<Props>`
  font-size: 1.063rem;
  ${({ $type }) =>
    $type === "bubble" &&
    ` font-size: 0.813rem;
      text-align: center;
      padding: 0;
      font-weight: 500;
      line-height: 125%;
      padding: 0.313rem 0.438rem;
    `}
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  cursor: pointer;
  position: absolute;
`;

export const Checkbox = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  position: relative;
  display: inline-block;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.darkViolet};
  border: 0.063rem solid ${({ theme }) => theme.colors.magenta};

  ${HiddenCheckbox}:checked + & {
    background-color: ${({ theme }) => theme.colors.magenta};
  }

  ${HiddenCheckbox}:checked + &::after {
    content: "";
    position: absolute;
    left: 8px;
    top: 4px;
    width: 6px;
    height: 12px;
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
  }
`;
