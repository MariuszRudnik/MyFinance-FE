import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { MainContext } from '../../Context/MainProvider';
import { theme } from '../../../theme/mainTheme';
import { DarkTheme } from '../../../theme/darkTheme';

const Input = styled.input`
  position: relative;
  width: 32px;
  height: 17px;
  appearance: none;
  background: #c6c6c6;
  outline: none;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;

  &:checked {
    background: #03a9f4;
  }
  &:before {
    content: '';
    position: absolute;
    width: 17px;
    height: 17px;
    border-radius: 20px;
    top: 0;
    left: 0;
    background: #fff;
    transform: scale(1.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }
  &:checked:before {
    left: 17px;
  }
`;

const light = { value: 'light', theme: theme };
const dark = { value: 'dark', theme: DarkTheme };

export const DarkModeCheckbox = () => {
  const { darkOrLight, setDarkOrLight } = useContext(MainContext);
  const change = () => {
    if (darkOrLight.value == 'light') {
      setDarkOrLight(dark);
    } else if (darkOrLight.value == 'dark') {
      setDarkOrLight(light);
    }
  };
  return (
    <>
      <Input onClick={change} type="checkbox" />
    </>
  );
};
