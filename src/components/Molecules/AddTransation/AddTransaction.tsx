import React, { useState } from 'react';
import { ButtonWrapper, StylForm } from '../../Organism/AddWallet/style/StyleAddWallet.style';
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import Input from '../../Atoms/Input/Input';
import { ErrorTextMessage } from '../../Atoms/ErrorTextMessage/ErrorTextMessage';
import style from '../../Assets/css/addWallet.module.css';
import Button from '../../Atoms/Button/Button';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import styled from 'styled-components/macro';
import { getCategory, getParentCategory } from '../../Utils/featchHelper';
import { values } from 'lodash';

const DivWrapper = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

export const AddTransaction = (props: any) => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [idParentCategory, setIdParentCategory] = useState('');
  let filterCategory = [];
  const {
    data: dataParentCategory,
    error: errorParentCategory,
    isLoading: loadingParentCategory
  } = useQuery(['parentCategory', { id }], getParentCategory);
  const {
    data: dataCategory,
    error: errorCategory,
    isLoading: loadingCategory
  } = useQuery(['category', { id }], getCategory);

  if (!loadingCategory && idParentCategory != '') {
    filterCategory = dataCategory.filter((item: any) => item.parentCategory == idParentCategory);
    console.log(filterCategory);
  }

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
    nameTransaction: Yup.string()
      .required(t('Required field.'))
      .min(2, t('Too Short!'))
      .trim('The field cannot contain blank spaces')
  });

  const initialValues = {
    nameTransaction: '',
    parentCategoryId: '',
    categoryId: '',
    price: 0
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          // notify();
          values.parentCategoryId = idParentCategory;
          console.log(values);
          actions.setSubmitting(false);
          actions.resetForm();
        }}>
        <StylForm as={Form}>
          <label htmlFor="categories">
            <DivWrapper>
              <label
                htmlFor="nameTransaction"
                css={`
                  margin: 0 auto;
                `}>
                <Paragraph textAlign="center">{t('Name transaction :')}</Paragraph>
                <Input
                  margin="5px auto"
                  as={Field}
                  type="text"
                  placeholder="Name"
                  name="nameTransaction"
                  id="nameTransaction"
                />
                <ErrorTextMessage>
                  <ErrorMessage name="nameTransaction"></ErrorMessage>
                </ErrorTextMessage>
              </label>
              <label
                htmlFor="price"
                css={`
                  margin: 0 auto;
                `}>
                <Paragraph textAlign="center">{t('Price :')}</Paragraph>

                <Input
                  margin="5px auto"
                  as={Field}
                  type="number"
                  placeholder="Price"
                  name="price"
                  id="price"
                />
                <ErrorTextMessage>
                  <ErrorMessage name="price"></ErrorMessage>
                </ErrorTextMessage>
              </label>
              <label
                htmlFor="parentCategoryId"
                css={`
                  margin: 0 auto;
                `}>
                <Paragraph textAlign="center">{t('Select parent categories :')}</Paragraph>
                <select
                  name="parentCategoryId"
                  id="parentCategoryId"
                  onChange={(e: React.ChangeEvent<any>) => setIdParentCategory(e.target.value)}
                  className={style.select}>
                  {dataParentCategory
                    ? dataParentCategory.map((item: any, index: number) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))
                    : null}
                </select>
              </label>
              <label
                htmlFor="categoryId"
                css={`
                  margin: 0 auto;
                `}>
                {filterCategory.length != 0 ? (
                  <>
                    <Paragraph textAlign="center">{t('Select  categories :')}</Paragraph>
                    <Field as="select" name="categoryId" id="categoryId" className={style.select}>
                      {filterCategory.length != 0
                        ? filterCategory.map((item: any, index: number) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))
                        : null}
                    </Field>
                  </>
                ) : null}
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
  );
};
