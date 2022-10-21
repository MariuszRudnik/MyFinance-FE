import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';
import Input from '../../Atoms/Input/Input';
import Button from '../../Atoms/Button/Button';
import { Link } from 'react-router-dom';

import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';
import { UrlAddress } from '../../../types/UrlAddress';

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
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
  const initialValues: MyFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  };
  const registerOnSubmit = async (email: string, password: string): Promise<void> => {
    console.log({ email, password });
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          const { email, password } = values;
          registerOnSubmit(email, password);
          actions.setSubmitting(false);
        }}>
        <LoginWrapper as={Form}>
          <h1>
            <label htmlFor="Sing in">Register</label>
          </h1>
          <Input as={Field} type="text" placeholder="First name" name="firstName" id="firstName" />
          <Input as={Field} type="text" placeholder="Last Name" name="last_name" id="last_name" />
          <Input as={Field} type="email" placeholder="Email" name="email" id="email"></Input>
          <Input as={Field} type="password" placeholder="Password" name="password" id="password" />
          <Input
            as={Field}
            type="password"
            placeholder="Repeat password"
            name="passwordConfirm"
            id="passwordConfirm"
          />
          <Button type="submit">Register</Button>
          <p>
            I have account. <Link to="/"> I want Login. </Link>{' '}
          </p>
        </LoginWrapper>
      </Formik>
    </>
  );
};
