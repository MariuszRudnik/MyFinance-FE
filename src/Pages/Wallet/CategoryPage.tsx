import React, { useState } from 'react';
import {
  ButtonWrapper,
  FormWrapper,
  StyleAddWallet,
  StylForm,
  TitleWrapper
} from '../../components/Organism/AddWallet/style/StyleAddWallet.style';
import Heading from '../../components/Atoms/Heading/Heading';
import { theme } from '../../theme/mainTheme';
import { useTranslation } from 'react-i18next';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Paragraph from '../../components/Atoms/Paragraph/Paragraph';
import Input from '../../components/Atoms/Input/Input';
import cssStyle from '../../components/Organism/AddWallet/style/addWallet.module.css';
import Button from '../../components/Atoms/Button/Button';
import * as Yup from 'yup';
import { BudgetCategoryList } from '../../components/Molecules/BudgetCategoryList/BudgetCategoryList';

export const CategoryPage = () => {
  const { t, i18n } = useTranslation();
  const [addedWallet, setAddedWallet] = useState(false);

  const SignupSchema = Yup.object().shape({
    initialState: Yup.number().required('Must be number')
  });
  const initialValues: any = {
    nameOfWallet: '',
    typeOfCurrency: 'PlN',
    initialState: 0
  };
  return (
    <>
      <StyleAddWallet>
        <TitleWrapper>
          <Heading color={theme.gray400}>{t('Categories')}</Heading>
        </TitleWrapper>
        <div>
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

              actions.setSubmitting(false);
            }}>
            <StylForm as={Form}>
              <FormWrapper>
                <label htmlFor="categories">
                  <Paragraph>{t('Categories')}</Paragraph>
                  <Field
                    as="select"
                    type="text"
                    placeholder="Categories"
                    name="categories"
                    id="categories"
                    className={cssStyle.select}>
                    <option value="PLN">PLN</option>
                    <option value="USD">USD</option>
                    <option value="EURO">EURO</option>
                  </Field>
                </label>
                <label htmlFor="parentCategories">
                  <Paragraph>{t('Parent Categories')}</Paragraph>
                  <Field
                    as="select"
                    type="text"
                    placeholder="Parent Categories"
                    name="parentCategories"
                    id="parentCategories"
                    className={cssStyle.select}>
                    <option value="PLN">PLN</option>
                    <option value="USD">USD</option>
                    <option value="EURO">EURO</option>
                  </Field>
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
        </div>
      </StyleAddWallet>
      <StyleAddWallet>
        <TitleWrapper>
          <Heading color={theme.gray400}>{t('Budget Category List')}</Heading>
        </TitleWrapper>
        <BudgetCategoryList />
      </StyleAddWallet>
    </>
  );
};
