import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  margin: 1rem 0.2rem;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const PageTitle = styled.h1<{ $pathname: string }>`
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 2.125rem;
  color: ${({ theme }) => theme.colors.lightSilver};

  ${({ $pathname, theme }) =>
    $pathname === "/thank-you" &&
    theme &&
    ` font-family: ${theme.fonts.additional};
      color: ${theme.colors.paleLavenderBlue};
      font-size: 2.25rem;
      font-weight: 400;
      line-height: 2.75rem;
      margin-top: 2rem;
    `}
`;

export const SubTitle = styled.p<{ $pathname: string }>`
  font-weight: 400;
  padding-top: 1rem;
  line-height: 1.5rem;
  font-size: 1.063rem;
  color: ${({ theme }) => theme.colors.silverGray};

  ${({ $pathname, theme }) =>
    $pathname === "/thank-you" &&
    theme &&
    ` font-family: ${theme.fonts.secondary};
    color: ${theme.colors.paleLavenderBlue};
      font-size: 1.063rem;
      font-weight: 500;
      line-height: 1.563rem;
      padding-top: 0.5rem;
    `}
`;
