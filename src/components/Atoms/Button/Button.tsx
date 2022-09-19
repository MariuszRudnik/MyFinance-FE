import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../theme/mainTheme';

type Props = {
  secondary?: boolean;
  width?: string;
};

const Button = styled.button<Props>`
  background-color: ${({ theme }) => theme.blue100};
  width: ${({ width }) => width || '220px'};
  height: 47px;
  border: none;
  border-radius: 50px;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  color: ${theme.white200};
  transition: color, background 0.5s;
  font-weight: bold;
  &:hover {
    background-color: ${theme.navy200};
    color: ${theme.white};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.white};
      width: 105px;
      height: 30px;
      transition: color, background 0.5s;
      font-size: 10px;
      color: ${theme.gray400};

      &:hover {
        background-color: ${theme.navy200};
        color: ${theme.white};
      }
    `}
`;

export default Button;
