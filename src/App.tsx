import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/base";
import { Main, Section } from "./App.styled";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Section>
          <GlobalStyles />
          <Outlet />
        </Section>
      </Main>
    </ThemeProvider>
  );
};
