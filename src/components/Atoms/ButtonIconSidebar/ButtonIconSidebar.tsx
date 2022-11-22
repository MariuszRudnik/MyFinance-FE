import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';

type Props = {
  closed?: boolean | any;
  size?: string | any;
};

const ButtonIconSidebar = styled.button<Props>`
  text-decoration: none;
  display: block;
  width: 282px;
  height: 60px;
  border-radius: 14px;
  border: none;
  transition: width 0.25s ease-in-out;
  font-weight: bold;
  color: ${theme.gray400};
  background-color: ${({ size }) => (size ? theme.white : theme.background)};
  margin: ${({ size }) => (size ? 0 : '10px')};

  &.active {
    background-color: ${({ closed }) => (closed ? theme.violet : theme.white)};
    color: ${({ closed }) => (closed ? theme.white : theme.gray400)};
    font-weight: bold;
  }
`;

export default ButtonIconSidebar;
