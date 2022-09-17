import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';
import Input from '../../Atoms/Input/Input';
import Button from '../../Atoms/Button/Button';
import axios from 'axios';
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';
import { UrlAddress } from '../../../types/UrlAddress';

interface MyFormValues {
  email: string;
  pwd: string;
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

export const Login = () => {
  const initialValues: MyFormValues = { email: '', pwd: '' };

  const login = async (email: string, pwd: string) => {
    const log = await axios({
      method: 'post',
      url: UrlAddress.Login,
      headers: { 'Content-Type': 'application/json' },
      data: {
        email,
        pwd
      }
    });
    console.log('---');
    console.log(log);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          const { email, pwd } = values;
          login(email, pwd).then((r) => console.log(r));

          actions.setSubmitting(false);
        }}>
        <LoginWrapper as={Form}>
          <h1>
            <label htmlFor="Sing in">Sing in</label>
          </h1>
          <Input as={Field} placeholder="Email" name="email" id="email"></Input>
          <Input as={Field} type="password" placeholder="Password" name="pwd" id="pwd" />
          <Button type="submit">Loog in</Button>
          <p>I want to register!</p>
        </LoginWrapper>
      </Formik>
    </>
  );
};
