import styled from "styled-components";

export const EmailMessagePolicy = styled.div`
  font-weight: 500;
  width: 15.625rem;
  font-size: 0.75rem;
  text-align: center;
  margin: 3rem auto;
  line-height: 1.125rem;
  color: ${({ theme }) => theme.colors.lightGray};
  font-family: ${({ theme }) => theme.fonts.secondary};

  span {
    color: ${({ theme }) => theme.colors.pink};
  }
`;

export const EmailInput = styled.input<{ $emailValid: boolean }>`
  width: 100%;
  margin: 3rem 0 0;
  height: 4.75rem;
  padding: 1.25rem;
  font-weight: 500;
  border-radius: 1rem;
  line-height: 1.5rem;
  font-size: 1.063rem;
  border: 0.125rem solid transparent;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.deepPlum};

  ${({ $emailValid }) => $emailValid && `border: 0.125rem solid red; `}

  &::placeholder {
    font-weight: 500;
    text-align: left;
    font-size: 1.063rem;
    line-height: 1.5rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.crimson};
  }
`;

export const EmailInvalidText = styled.p<{ $emailValid: boolean }>`
  text-align: left;
  font-weight: 500;
  line-height: 18px;
  padding-left: 10px;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.secondary};

  ${({ $emailValid }) =>
    $emailValid ? `visibility: visible;` : `visibility: hidden;`}
`;
