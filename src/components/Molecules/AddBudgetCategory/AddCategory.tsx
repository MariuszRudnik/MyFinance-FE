import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { ButtonWrapper, StylForm } from '../../Organism/AddWallet/style/StyleAddWallet.style';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import Input from '../../Atoms/Input/Input';
import Button from '../../Atoms/Button/Button';
import { ErrorTextMessage } from '../../Atoms/ErrorTextMessage/ErrorTextMessage';
import { UrlAddress } from '../../../types/UrlAddress';
import { useMutation, useQuery } from 'react-query';
import styled from 'styled-components/macro';
import loadingImage from '../../Assets/icons/login.svg';
import style from '../../Assets/css/style.module.css';
// eslint-disable-next-line react/no-unknown-property

const DivWrapper = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

const getParentCategory = async (key: any) => {
  const { id } = key.queryKey[1];
  const res = await fetch(UrlAddress.GetParentCategory + id, {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
  if (res.status !== 200) throw new Error('Something went wrong');
  return await res.json();
};
const addCategory = async (data: any) => {
  const res = await fetch(`${UrlAddress.GetCategory}add/${data.id}`, {
    method: 'POST',
    body: JSON.stringify(data.values),
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
  return await res.json();
};

export const AddCategory = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { mutate } = useMutation(addCategory);

  const { data: dataParentCategory, isLoading: loadingParentCategory }: any = useQuery(
    ['parentCategory', { id }],
    getParentCategory
  );

  const notify = () =>
    toast.success(`${t('Congratulations! Categories added.')}`, {
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
    nameCategory: Yup.string()
      .required(t('Required field.'))
      .min(2, t('Too Short!'))
      .trim('The field cannot contain blank spaces')
  });

  const initialValues = {
    nameCategory: '',
    parentCategoryId: ''
  };

  if (loadingParentCategory) {
    return (
      <>
        <img
          src={loadingImage}
          alt="Loading element"
          css={`
            display: block;
            margin: 0 auto;
            height: 300px;
          `}
        />
      </>
    );
  }
  if (!loadingParentCategory && dataParentCategory.length > 0) {
    dataParentCategory.sort((a: any, b: any) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      return 1;
    });

    initialValues.parentCategoryId = dataParentCategory[0].id;
    return (
      <>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              notify();
              mutate({ values, id });
              actions.setSubmitting(false);
              actions.resetForm();
            }}>
            <StylForm as={Form}>
              <label htmlFor="categories">
                <DivWrapper>
                  <label
                    htmlFor="nameCategory"
                    css={`
                      margin: 0 auto;
                    `}>
                    <Paragraph textAlign="center">{t('Categories name :')}</Paragraph>
                    <Input
                      margin="5px auto"
                      as={Field}
                      type="text"
                      placeholder="Name"
                      name="nameCategory"
                      id="nameCategory"
                    />
                    <ErrorTextMessage>
                      <ErrorMessage name="nameCategory"></ErrorMessage>
                    </ErrorTextMessage>
                  </label>
                  <label
                    htmlFor="parentCategoryId"
                    css={`
                      margin: 0 auto;
                    `}>
                    <Paragraph textAlign="center">{t('Parent Category :')}</Paragraph>
                    <Field
                      as="select"
                      name="parentCategoryId"
                      id="parentCategoryId"
                      className={style.select}>
                      {dataParentCategory
                        ? dataParentCategory.map((item: any) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))
                        : null}
                    </Field>
                  </label>
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
  }
  if (dataParentCategory != undefined && dataParentCategory.length === 0) {
    return (
      <>
        <h1>{t("You can't create a Category if you don't have a parent Category.")}</h1>
      </>
    );
  }

  return <>Error</>;
};
