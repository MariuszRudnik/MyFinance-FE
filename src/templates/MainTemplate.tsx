import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';
type Props = {
  children: JSX.Element;
};

export const MainTemplate: React.FC<Props> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>{children}</>
      </ThemeProvider>
    </>
  );
};
