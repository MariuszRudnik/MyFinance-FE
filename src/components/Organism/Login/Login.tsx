import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';
import Input from '../../Atoms/Input/Input';
import Button from '../../Atoms/Button/Button';

const LoginWrapper = styled.div`
  width: 400px;
  min-height: 500px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.white};
  flex-direction: column;
  gap: 10px;
`;

export const Login = () => {
  return (
    <LoginWrapper>
      <h1>Sing in</h1>
      <Input placeholder="Login"></Input>
      <Input placeholder="Password"></Input>
      <Button>Loog in</Button>
      <p>I want to register!</p>
    </LoginWrapper>
  );
};
