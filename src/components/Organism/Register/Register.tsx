import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';
import Input from '../../Atoms/Input/Input';
import Button from '../../Atoms/Button/Button';

import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';
import { UrlAddress } from '../../../types/UrlAddress';

interface MyFormValues {
  email: string;
  password: string;
}

const LoginWrapper = styled.div`
  width: 400px;
  min-height: 380px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: ${theme.white};
  flex-direction: column;
  gap: 10px;
`;

export const Register = () => {
  const initialValues: MyFormValues = { email: '', password: '' };
  const login = async (email: string, password: string): Promise<void> => {
    console.log({ email, password });
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          const { email, password } = values;
          login(email, password);
          actions.setSubmitting(false);
        }}>
        <LoginWrapper as={Form}>
          <h1>
            <label htmlFor="Sing in">Register</label>
          </h1>
          <Input
            as={Field}
            type="text"
            placeholder="First name"
            name="first_name"
            id="first_name"
          />
          <Input as={Field} type="text" placeholder="Last Name" name="last_name" id="last_name" />
          <Input as={Field} type="email" placeholder="Email" name="email" id="email"></Input>
          <Input as={Field} type="password" placeholder="Password" name="password" id="password" />
          <Input
            as={Field}
            type="password"
            placeholder="Repeat password"
            name="password_confirm"
            id="password_confirm"
          />
          <Button type="submit">Loog in</Button>
          <p>I have account. I want Login. </p>
        </LoginWrapper>
      </Formik>
    </>
  );
};
