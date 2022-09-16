import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 90px;
  top: 0;
  background-color: ${theme.primary};
  padding-top: 50px;
  width: 150px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const Menu = () => {
  return (
    <StyledWrapper>
      <div>
        <p># Lista portfeli</p>
        <p># Lista portfeli</p>
        <p># Lista portfeli</p>
        <p># Lista portfeli</p>
        <p># Lista portfeli</p>
        <p># Lista portfeli</p>
        <p># Lista portfeli</p>
      </div>
    </StyledWrapper>
  );
};
