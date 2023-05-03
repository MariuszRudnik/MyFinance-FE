import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';
import Input from '../../Atoms/Input/Input';
import Button from '../../Atoms/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useDispatch } from 'react-redux';
import { fetchRegister } from '../../../Redux/reducers/loginRedux';

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
  background-color: ${theme.secondary};
  flex-direction: column;
  gap: 10px;
`;

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(52, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(52, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required')
});

export const Register = () => {
  const dispatch: any = useDispatch();
  const addUser = (data: MyFormValues) => dispatch(fetchRegister(data));
  const navigate = useNavigate();

  const initialValues: MyFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  };
  const registerOnSubmit = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    passwordConfirm: string
  ): Promise<void> => {
    console.log({ email, password, firstName, lastName, passwordConfirm });
    await addUser({ email, password, firstName, lastName, passwordConfirm });
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          const { email, password, firstName, lastName, passwordConfirm } = values;
          registerOnSubmit(email, password, firstName, lastName, passwordConfirm);
          actions.setSubmitting(false);
          navigate('/');
        }}>
        <LoginWrapper as={Form}>
          <h1>
            <label htmlFor="Sing in">Register</label>
          </h1>
          <Input as={Field} type="text" placeholder="First name" name="firstName" id="firstName" />
          <ErrorMessage name="firstName"></ErrorMessage>

          <Input as={Field} type="text" placeholder="Last Name" name="lastName" id="lastName" />
          <ErrorMessage name="lastName"></ErrorMessage>

          <Input as={Field} type="email" placeholder="Email" name="email" id="email"></Input>
          <ErrorMessage name="email"></ErrorMessage>

          <Input as={Field} type="password" placeholder="Password" name="password" id="password" />
          <ErrorMessage name="password"></ErrorMessage>

          <Input
            as={Field}
            type="password"
            placeholder="Repeat password"
            name="passwordConfirm"
            id="passwordConfirm"
          />
          <ErrorMessage name="passwordConfirm"></ErrorMessage>

          <Button type="submit">Register</Button>
          <p>
            I have account. <Link to="/"> I want Login. </Link>{' '}
          </p>
        </LoginWrapper>
      </Formik>
    </>
  );
};
