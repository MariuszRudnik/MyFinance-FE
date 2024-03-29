import { createGlobalStyle } from 'styled-components';
import { theme } from './mainTheme';

const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: Roboto-Regular;
    src: url(../components/Assets/Fonts/Roboto-Regular.ttf);
  }
  @font-face {
    font-family: Roboto-Bold;
    src: url(../components/Assets/Fonts/Roboto-Bold.ttf);
  }@font-face {
    font-family: Roboto-Italic;
    src: url(../components/Assets/Fonts/Roboto-Italic.ttf);
  }
  @font-face {
    font-family: Roboto-Light;
    src: url(../components/Assets/Fonts/Roboto-Light.ttf);
  }
  
  

  *,*::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html{
    font-size: 62.5%;
  }
  body {
     background-color: ${theme.background};
    font-size: 1.6rem;
    font-family: "Roboto-Regular", sans-serif;
  }
`;

export default GlobalStyle;
