import styled from "styled-components";

export const Wrapper = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const WelcomeMessage = styled.p`
  font-weight: 800;
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 5rem;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
`;
