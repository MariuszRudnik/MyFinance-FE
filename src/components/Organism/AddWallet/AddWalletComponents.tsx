import * as React from 'react';
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';
import Input from '../../Atoms/Input/Input';
import Button from '../../Atoms/Button/Button';
import Heading from '../../Atoms/Heading/Heading';
import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';
import Paragraph from '../../Atoms/Paragraph/Paragraph';

interface MyFormValues {
  nameWallet: string;
  openingBalance: string;
  currency: string;
}
// Atom
const StyleAddWallet = styled.div`
  background-color: ${theme.white};
  width: 100%;
  margin: 0 50px 0 0;
  border-radius: 10px;
  overflow: hidden;
  max-width: 800px;
`;
const StylForm = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
`;
const TitleWrapper = styled.div`
  border-bottom: 2px solid ${theme.white200};
  padding: 0 30px;
  width: 100%;
`;
const FormWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  margin: 0 auto;
`;
const ButtonWrapper = styled.div`
  margin: 20px auto;
`;
export const AddWalletComponents: React.FC<any> = () => {
  const initialValues: MyFormValues = { nameWallet: '', currency: '', openingBalance: 'PLN' };
  return (
    <StyleAddWallet>
      <TitleWrapper>
        <Heading color={theme.gray400}>Add new wallet</Heading>
      </TitleWrapper>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}>
        <StylForm as={Form}>
          <FormWrapper>
            <label htmlFor="firstName">
              <Paragraph>Name Wallet</Paragraph>
            </label>
            <Input
              as={Field}
              placeholder="Name Wallet"
              id="nameWallet"
              name="nameWallet"
              widthInput={'300px'}
            />
            <label htmlFor="firstName">
              <Paragraph>Currency</Paragraph>
            </label>
            <Input
              as={Field}
              placeholder="Currency"
              id="currency"
              name="currency"
              widthInput={'300px'}
            />
            <label htmlFor="firstName">
              <Paragraph>Opening Balance</Paragraph>
            </label>
            <Input
              as={Field}
              placeholder="openingBalance"
              id="openingBalance"
              name="openingBalance"
              widthInput={'300px'}
            />
            <ButtonWrapper>
              <Button secondary={false} type="submit">
                Save
              </Button>
            </ButtonWrapper>
          </FormWrapper>
        </StylForm>
      </Formik>
    </StyleAddWallet>
  );
};
