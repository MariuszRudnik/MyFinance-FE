import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../theme/mainTheme';

type Props = {
  secondary?: boolean;
  width?: string;
};

const Button = styled.button<Props>`
  background-color: ${({ theme }) => theme.primary};
  width: ${({ width }) => width || '220px'};
  height: 47px;
  border: none;
  border-radius: 50px;
  font-size: 14px;
  text-transform: uppercase;
  color: ${theme.secondary};
  transition: color, background 0.5s;
  font-weight: bold;
  &:hover {
    background-color: ${theme.approve};
    color: ${theme.secondary};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.white};
      width: 105px;
      height: 30px;
      transition: color, background 0.5s;
      font-size: 10px;
      color: ${theme.textColor};

      &:hover {
        background-color: ${theme.approve};
        color: ${theme.secondary};
      }
    `}
`;

export default Button;
