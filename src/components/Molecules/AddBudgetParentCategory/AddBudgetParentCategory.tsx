import React, { useContext, useState } from 'react';
import { ButtonWrapper, StylForm } from '../../Organism/AddWallet/style/StyleAddWallet.style';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import Button from '../../Atoms/Button/Button';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import Input from '../../Atoms/Input/Input';
import styled from 'styled-components/macro';
import { useMutation } from 'react-query';
import { UrlAddress } from '../../../types/UrlAddress';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ErrorTextMessage } from '../../Atoms/ErrorTextMessage/ErrorTextMessage';

import { SelectedIcon } from '../SelectedIcon/SelectedIcon';
import { ContextIcon } from '../../Context/SelectProviderIcon';

type addCategoryType = {
  name: string;
  plannedBudget: string | null;
  icon: string;
};
interface addCategory {
  id: number | string | undefined;
  values: {
    name: string;
    plannedBudget: string | null;
  };
}

const DivWrapper = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

const addCategory = async (data: addCategory) => {
  if (data.values.plannedBudget == '') {
    data.values.plannedBudget = null;
  }
  const res = await fetch(`${UrlAddress.GetParentCategory}add/${data.id}`, {
    method: 'POST',
    body: JSON.stringify(data.values),
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
  return await res.json();
};

export const AddBudgetParentCategory = () => {
  const { selectIcon } = useContext(ContextIcon);
  const { id } = useParams();
  const { t } = useTranslation();
  const [plannedCategory, setPlannedCategory] = useState(true);

  const { mutate } = useMutation(addCategory);

  const notify = () =>
    toast.success(`${t('Congratulations! Parent categories added.')}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    });

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .required(t('Required field.'))
      .min(2, t('Too Short!'))
      .trim('The field cannot contain blank spaces')
  });

  const initialValues: addCategoryType = {
    name: '',
    plannedBudget: '',
    icon: selectIcon.value
  };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value == 'no') {
      setPlannedCategory(false);
    } else if (e.target.value == 'yes') {
      setPlannedCategory(true);
    }
  };

  return (
    <>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={(values, actions) => {
            values.icon = selectIcon.value;
            mutate({ values, id });
            notify();
            actions.setSubmitting(false);
            actions.resetForm();
          }}>
          <StylForm as={Form}>
            <label htmlFor="categories">
              <DivWrapper>
                <Paragraph textAlign="center">{t('Parent categories name :')}</Paragraph>
                <Input
                  margin="5px auto"
                  as={Field}
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                />
                <ErrorTextMessage>
                  <ErrorMessage name="name"></ErrorMessage>
                </ErrorTextMessage>
                <div
                  css={`
                    margin: 0 auto;
                    position: static;
                  `}>
                  <SelectedIcon />
                </div>
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
                    <Paragraph textAlign="center">{t('Planned Category budget :')}</Paragraph>
                    <Input
                      margin="5px auto"
                      as={Field}
                      type="number"
                      step="0.01"
                      placeholder="Value"
                      name="plannedBudget"
                      id="plannedBudget"
                    />
                    <ErrorMessage name="plannedBudget"></ErrorMessage>
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
    </>
  );
};
