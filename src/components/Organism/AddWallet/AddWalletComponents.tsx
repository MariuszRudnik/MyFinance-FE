import * as React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Input from '../../Atoms/Input/Input';
import Button from '../../Atoms/Button/Button';
import Heading from '../../Atoms/Heading/Heading';
import { theme } from '../../../theme/mainTheme';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import cssStyle from './style/addWallet.module.css';
import * as Yup from 'yup';
import {
  ButtonWrapper,
  ButtonWrapperStyle,
  FormWrapper,
  StyleAddWallet,
  StylForm,
  TitleWrapper
} from './style/StyleAddWallet.style';
import { useState } from 'react';
import styled from 'styled-components';

interface MyFormValues {
  nameOfWallet: string;
  initialState: number;
  typeOfCurrency: string;
}

export const AddWalletComponents: React.FC<any> = ({ addWallet }: any) => {
  const [addedWallet, setAddedWallet] = useState(false);
  const SignupSchema = Yup.object().shape({
    initialState: Yup.number().required('Required'),
    nameOfWallet: Yup.string()
      .min(2, 'Name of wallet is too short')
      .max(52, 'Name of wallet is too long')
      .required('Required')
  });
  const initialValues: MyFormValues = {
    nameOfWallet: '',
    typeOfCurrency: 'PlN',
    initialState: 0
  };
  return (
    <StyleAddWallet>
      <TitleWrapper>
        <Heading color={theme.gray400}>Add new wallet</Heading>
      </TitleWrapper>

      {addedWallet ? (
        <FormWrapper>
          <h1>Congratulation. </h1>
          <p>You added new wallet. Now you will be able to add your transaction.</p>
          <ButtonWrapperStyle>
            <Button>Go to your wallet</Button>
            <Button onClick={() => setAddedWallet(false)}>Add new wallet</Button>
          </ButtonWrapperStyle>
        </FormWrapper>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={(values, actions) => {
            const { initialState } = values;
            const value = {
              ...values,
              initialState: Number(initialState)
            };

            addWallet(values);
            setAddedWallet(true);
            actions.setSubmitting(false);
          }}>
          <StylForm as={Form}>
            <FormWrapper>
              <label htmlFor="nameOfWallet">
                <Paragraph>Name Wallet</Paragraph>
                <Input
                  as={Field}
                  type="text"
                  placeholder="Name of Wallet"
                  name="nameOfWallet"
                  id="nameOfWallet"
                />
              </label>
              <ErrorMessage name="nameOfWallet"></ErrorMessage>

              <label htmlFor="typeOfCurrency">
                <Paragraph>Type Of Currency</Paragraph>
                <Field
                  as="select"
                  type="text"
                  placeholder="TypeOfCurrency"
                  name="typeOfCurrency"
                  id="typeOfCurrency"
                  className={cssStyle.select}>
                  <option value="PLN">PLN</option>
                  <option value="USD">USD</option>
                  <option value="EURO">EURO</option>
                </Field>
              </label>
              <label htmlFor="initialState">
                <Paragraph>Initial State</Paragraph>
                <Input
                  as={Field}
                  type="number"
                  placeholder="Initial State"
                  name="initialState"
                  id="initialState"
                />
              </label>
              <ErrorMessage name="initialState"></ErrorMessage>

              <ButtonWrapper>
                <Button secondary={false} type="submit">
                  Save
                </Button>
              </ButtonWrapper>
            </FormWrapper>
          </StylForm>
        </Formik>
      )}
    </StyleAddWallet>
  );
};
