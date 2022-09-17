import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';

type Props = {
  closed?: boolean | any;
};

const ButtonIconSidebar = styled.button<Props>`
  text-decoration: none;
  display: block;
  width: 280px;
  height: 60px;
  border-radius: 20px;
  border: none;
  transition: width 0.25s ease-in-out;
  font-weight: bold;
  color: ${theme.gray400};
  background-color: ${theme.background};
  margin: 10px;
  &.active {
    background-color: ${({ closed }) => (closed ? theme.violet : theme.white)};
    color: ${({ closed }) => (closed ? theme.white : theme.gray400)};
    font-weight: bold;
  }
`;

export default ButtonIconSidebar;
