import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.colors.deepIndigo};
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 1.25rem;
  position: relative;
  max-width: 28.125rem;
`;
