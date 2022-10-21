import React from 'react';

import styled from 'styled-components';
import { theme } from '../../theme/mainTheme';
import { Register } from '../../components/Organism/Register/Register';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  //transform: translate(50%, -50%);
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const TitleWrapper = styled.div``;

const StyleH1 = styled.h1`
  font-size: ${theme.fontSize.xl};
  color: ${theme.navy200};
  //filter: drop-shadow(1px 1px 1px ${theme.navy200});
`;

export const RegisterPage = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <StyleH1>My Finance App</StyleH1>
      </TitleWrapper>
      <Register />
    </Wrapper>
  );
};
