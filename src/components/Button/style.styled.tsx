import styled from "styled-components";

export const ButtonWrapper = styled.button`
  left: 50%;
  width: 91%;
  bottom: 2%;
  padding: 1rem;
  font-weight: 800;
  text-align: center;
  position: absolute;
  font-size: 1.063rem;
  line-height: 1.5rem;
  border-radius: 3.125rem;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
  background-color: ${({ theme }) => theme.colors.magenta};

  &:disabled {
    opacity: 40%;
  }
`;
