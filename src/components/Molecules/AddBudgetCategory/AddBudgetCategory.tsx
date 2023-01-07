import React, { useState } from 'react';
// @types/react/index.d.ts
declare module 'react' {
  interface Attributes {
    css?: any;
  }
}
import {
  ButtonWrapper,
  StyleAddWallet,
  StylForm,
  TitleWrapper
} from '../../Organism/AddWallet/style/StyleAddWallet.style';
import Heading from '../../Atoms/Heading/Heading';
import { theme } from '../../../theme/mainTheme';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import Button from '../../Atoms/Button/Button';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import Input from '../../Atoms/Input/Input';
import styled from 'styled-components/macro';

const DivWrapper = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

export const AddBudgetCategory = () => {
  const { t, i18n } = useTranslation();
  const [plannedCategory, setPlannedCategory] = useState(true);
  const [addedWallet, setAddedWallet] = useState(false);

  const SignupSchema = Yup.object().shape({
    initialState: Yup.number().required('Must be number')
  });
  const initialValues: any = {
    nameOfWallet: '',
    typeOfCurrency: 'PlN',
    initialState: 0
  };
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value == 'no') {
      setPlannedCategory(false);
    } else if (e.target.value == 'yes') {
      setPlannedCategory(true);
    }
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
                <Paragraph textAlign="center">{t('Do you want to specify a budget ?')}</Paragraph>
                <div
                  css={`
                    margin: 0 auto;
                  `}>
                  <label>
                    <Input
                      type="radio"
                      value="yes"
                      name="choice-budget"
                      onChange={onChangeValue}
                      checked={plannedCategory}
                    />
                    Yes
                  </label>
                  <label>
                    <Input type="radio" value="no" name="choice-budget" onChange={onChangeValue} />
                    No
                  </label>
                </div>
                {plannedCategory ? (
                  <DivWrapper>
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
                  </DivWrapper>
                ) : null}
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
