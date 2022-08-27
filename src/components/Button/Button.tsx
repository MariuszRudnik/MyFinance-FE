import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  secondary: boolean;
};

const Button = styled.button<Props>`
  background-color: ${({ secondary }) => (secondary ? '#FFD82B' : '#E6E6E6')};
  width: 105px;
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
