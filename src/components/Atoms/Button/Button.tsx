import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../theme/mainTheme';

type Props = {
  secondary: boolean;
  width?: string;
};

const Button = styled.button<Props>`
  background-color: ${({ theme }) => theme.primary};
  width: ${({ width }) => width || '220px'};
  height: 47px;
  border: none;
  border-radius: 50px;
  basefont: 'Montserrat';
  font-weight: 500;
  font-size: 10px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.grey200};
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
