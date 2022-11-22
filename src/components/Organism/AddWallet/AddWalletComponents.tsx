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
import { useTranslation } from 'react-i18next';

interface MyFormValues {
  nameOfWallet: string;
  initialState: number;
  typeOfCurrency: string;
}

export const AddWalletComponents: React.FC<any> = ({ addWallet }: any) => {
  const { t, i18n } = useTranslation();
  const [addedWallet, setAddedWallet] = useState(false);
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
        <Heading color={theme.gray400}>{t('Add new wallet')}</Heading>
      </TitleWrapper>

      {addedWallet ? (
        <FormWrapper>
          <h1>{t('Congratulation.')} </h1>
          <p>{t('You added new wallet. Now you will be able to add your transaction.')}</p>
          <ButtonWrapperStyle>
            <Button>{t('Go to your wallet')}</Button>
            <Button onClick={() => setAddedWallet(false)}>{t('Add new wallet')}</Button>
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

            setAddedWallet(true);
            addWallet(values);
            actions.setSubmitting(false);
          }}>
          <StylForm as={Form}>
            <FormWrapper>
              <label htmlFor="nameOfWallet">
                <Paragraph>{t('Name of wallet')}</Paragraph>
                <Input
                  as={Field}
                  type="text"
                  placeholder={t('Name of wallet')}
                  name="nameOfWallet"
                  id="nameOfWallet"
                />
              </label>

              <label htmlFor="typeOfCurrency">
                <Paragraph>{t('Type Of Currency')}</Paragraph>
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
                <Paragraph>{t('Initial State')}</Paragraph>
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
                  {t('Save')}
                </Button>
              </ButtonWrapper>
            </FormWrapper>
          </StylForm>
        </Formik>
      )}
    </StyleAddWallet>
  );
};
