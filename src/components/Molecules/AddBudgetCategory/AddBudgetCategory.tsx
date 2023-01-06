import React, { useState } from 'react';
import {
  ButtonWrapper,
  FormWrapper,
  StyleAddWallet,
  StylForm,
  TitleWrapper
} from '../../Organism/AddWallet/style/StyleAddWallet.style';
import Heading from '../../Atoms/Heading/Heading';
import { theme } from '../../../theme/mainTheme';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import cssStyle from '../../Organism/AddWallet/style/addWallet.module.css';
import Button from '../../Atoms/Button/Button';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import Input from '../../Atoms/Input/Input';
import styled from 'styled-components';

const DivWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
  flex-direction: column;
`;

export const AddBudgetCategory = () => {
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
            <label htmlFor="categories">
              <DivWrapper>
                <Paragraph textAlign="center">{t('Parent categories name :')}</Paragraph>
                <Input
                  textAlign="center"
                  margin="5px auto"
                  widthInput={'220px'}
                  as={Field}
                  type="text"
                  placeholder="Name"
                  name="parentCategoryName"
                  id="parentCategoryName"
                />

                <Paragraph textAlign="center">{t('Planned category budget :')}</Paragraph>
                <Input
                  textAlign="center"
                  margin="5px auto"
                  as={Field}
                  widthInput={'220px'}
                  type="number"
                  placeholder="Value"
                  name="plannedCategoryBudget"
                  id="plannedCategoryBudget"
                />
                <ButtonWrapper>
                  <Button secondary={false} type="submit">
                    {t('Save')}
                  </Button>
                </ButtonWrapper>
              </DivWrapper>
            </label>
          </StylForm>
        </Formik>
      </div>
    </StyleAddWallet>
  );
};
