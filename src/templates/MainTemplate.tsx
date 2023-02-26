import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import { MainContext } from '../components/Context/MainProvider';
import GlobalDarkStyle from '../theme/GlobalDarkStyle';
type Props = {
  children: JSX.Element;
};

export const MainTemplate: React.FC<Props> = ({ children }) => {
  const { darkOrLight } = useContext(MainContext);
  return (
    <>
      {darkOrLight.value == 'light' ? <GlobalStyle /> : <GlobalDarkStyle />}
      <ThemeProvider theme={darkOrLight.theme}>
        <>{children}</>
      </ThemeProvider>
    </>
  );
};
