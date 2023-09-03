import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';
import Input from '../../Atoms/Input/Input';
import Button from '../../Atoms/Button/Button';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { UrlAddress } from '../../../types/UrlAddress';

interface MyFormValues {
  email: string;
  password: string;
}

const validateEmail = (email: string) => {
  let error;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) {
    error = 'Email is required';
  } else if (!emailRegex.test(email)) {
    error = 'Invalid email address';
  }
  return error;
};

const LoginWrapper = styled.div`
  width: 400px;
  min-height: 380px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: ${theme.secondary};
  flex-direction: column;
  gap: 10px;
`;

export const Login = ({ loginAccess }: any) => {
  const queryClient = useQueryClient();
  const initialValues: MyFormValues = { email: '', password: '' };

  const loginMutation = useMutation(
    async ({ email, password }: MyFormValues) => {
      const response = await axios.post(UrlAddress.Login, { email, password });
      return response.data;
    },
    {
      onError: () => {
        console.error('Login failed');
      },
      onSuccess: (data, variables) => {
        loginAccess({ email: variables.email, password: variables.password });
      }
    }
  );

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          loginMutation.mutate(values);
          actions.setSubmitting(false);
        }}>
        <LoginWrapper as={Form}>
          <h1>
            <label htmlFor="Sign in">Sign in</label>
          </h1>
          <Input
            as={Field}
            validate={validateEmail}
            placeholder="Email"
            name="email"
            id="email"></Input>
          <ErrorMessage name="email" component="div" />
          <Input as={Field} type="password" placeholder="Password" name="password" id="password" />
          <Button type="submit">Log in</Button>
          {loginMutation.isError ? <p>Login failed.</p> : null}
          <p>
            I want to <Link to="/register">register!</Link>
          </p>
        </LoginWrapper>
      </Formik>
    </>
  );
};
