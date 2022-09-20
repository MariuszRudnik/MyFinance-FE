import * as React from 'react';
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';
import Input from '../../Atoms/Input/Input';
import Button from '../../Atoms/Button/Button';
import Heading from '../../Atoms/Heading/Heading';
import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';

interface MyFormValues {
  nameWallet: string;
  openingBalance: string;
  currency: string;
}
// Atom
const StyleAddWallet = styled.div`
  background-color: ${theme.white};
  width: 100%;
  padding: 0 30px;
  margin: 0 10px;
  border-radius: 10px;
`;
const StylForm = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  justify-content: center;
  align-content: center;
`;

export const AddWalletComponents: React.FC<any> = () => {
  const initialValues: MyFormValues = { nameWallet: '', currency: '', openingBalance: 'PLN' };
  return (
    <StyleAddWallet>
      <Heading>My Example</Heading>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}>
        <StylForm as={Form}>
          <label htmlFor="firstName">Name Wallet</label>
          <Input as={Field} placeholder="Name Wallet" id="nameWallet" name="nameWallet" />
          <label htmlFor="firstName">Currency</label>
          <Input as={Field} placeholder="Currency" id="currency" name="currency" />
          <label htmlFor="firstName">Opening Balance</label>
          <Input
            as={Field}
            placeholder="openingBalance"
            id="openingBalance"
            name="openingBalance"
          />
          <Button secondary={false} type="submit">
            Save
          </Button>
        </StylForm>
      </Formik>
    </StyleAddWallet>
  );
};
