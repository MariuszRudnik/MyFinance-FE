import * as React from 'react';
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps, ErrorMessage } from 'formik';
import Input from '../../Atoms/Input/Input';
import Button from '../../Atoms/Button/Button';
import Heading from '../../Atoms/Heading/Heading';
import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import { useDispatch, useSelector } from 'react-redux';
import { AddWallet } from '../../../Redux/reducers/walletRedux';
import cssStyle from './addWallet.module.css';
import * as Yup from 'yup';

interface MyFormValues {
  nameOfWallet: string;
  initialState: number;
  typeOfCurrency: string;
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

export const AddWalletComponents: React.FC<any> = ({ addWallet }: any) => {
  const SignupSchema = Yup.object().shape({
    initialState: Yup.number().required('Must be number')
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
    </StyleAddWallet>
  );
};
