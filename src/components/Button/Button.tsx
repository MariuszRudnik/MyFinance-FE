import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  secondary: boolean;
  width?: number;
};

const Button = styled.button<Props>`
  background-color: #e6e6e6;
  width: ${({ width }) => width || '220px'};
  height: 30px;
  border: none;
  border-radius: 50px;
  basefont: 'Montserrat';
  font-weight: 500;
  font-size: 10px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #ffd82b;
      width: 220px;
      height: 47px;
      font-size: 16px;
    `}
`;

export default Button;
