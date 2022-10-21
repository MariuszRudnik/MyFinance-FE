import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';
import Input from '../../Atoms/Input/Input';
import Button from '../../Atoms/Button/Button';

import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';
import { UrlAddress } from '../../../types/UrlAddress';
import { Link } from 'react-router-dom';

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

export const Login = ({ loginAccess }: any) => {
  const initialValues: MyFormValues = { email: '', password: '' };
  const login = async (email: string, password: string): Promise<void> => {
    console.log({ email, password });
    loginAccess({ email, password });
    // await fetch(UrlAddress.Login, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   credentials: 'include',
    //   body: JSON.stringify({
    //     email,
    //     password
    //   })
    // }).then((response) => console.log(response.ok));
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
            <label htmlFor="Sing in">Sing in</label>
          </h1>
          <Input as={Field} placeholder="Email" name="email" id="email"></Input>
          <Input as={Field} type="password" placeholder="Password" name="password" id="password" />
          <Button type="submit">Loog in</Button>
          <p>
            I want to <Link to="/register"> register! </Link>
          </p>
        </LoginWrapper>
      </Formik>
    </>
  );
};
