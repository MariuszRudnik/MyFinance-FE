import React, { useEffect, useState } from 'react';
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
import { Category, ParentCategory } from '../../../types/Category/GetCategory';
import { PostCategory } from '../../../types/Category/PostCategory';

const DivWrapper = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;
interface Proto {
  parentCategory: ParentCategory[];
  category: Category[];
  parentCategoryLoading: boolean;
  categoryLoading: boolean;
}

export const AddTransaction = ({
  parentCategory,
  category,
  parentCategoryLoading,
  categoryLoading
}: Proto) => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [idParentCategory, setIdParentCategory] = useState('');
  const [idCategory, setIdCategory] = useState('');
  const [newData, setNewData] = useState(new Date().toJSON().slice(0, 10).replace(/-/g, '-'));
  const [kindOfOperation, setKindOfOperation] = useState('expenditure');

  let filterCategory: Category[] | [] = [];

  if (!parentCategoryLoading) {
    parentCategory.sort((a: ParentCategory, b: ParentCategory) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      return 1;
    });
  }
  useEffect(() => {
    if (!parentCategoryLoading) {
      const parentCategoryData = parentCategory.sort((a: ParentCategory, b: ParentCategory) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        return 1;
      });
      setIdParentCategory(parentCategoryData[0].id);
    }
  }, [!parentCategoryLoading]);

  if (!categoryLoading) {
    filterCategory = category
      .filter((item: Category) => item.parentCategory == idParentCategory)
      .sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        return 1;
      });
  }

  useEffect(() => {
    if (idParentCategory != '') {
      const categoryData = category
        .filter((item: Category) => item.parentCategory == idParentCategory)
        .sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          return 1;
        });
      setIdCategory(categoryData[0].id);
    }
  }, [idParentCategory != '']);

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

  const initialValues: PostCategory = {
    nameTransaction: '',
    parentCategoryId: '',
    categoryId: idCategory,
    price: 0,
    operation: '',
    data: '',
    description: ''
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          notify();
          values.parentCategoryId = idParentCategory;
          values.operation = kindOfOperation;
          values.data = newData;
          if (values.categoryId == '') {
            values.categoryId = idCategory;
          }
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
              <div
                css={`
                  margin: 0 auto;
                `}>
                <label>
                  <Input
                    type="radio"
                    value="expenditure"
                    name="choice"
                    onChange={(e) => setKindOfOperation(e.target.value)}
                    checked={kindOfOperation == 'expenditure'}
                  />
                  Expenditure
                </label>
                <label>
                  <Input
                    type="radio"
                    value="influence"
                    name="choice"
                    onChange={(e) => setKindOfOperation(e.target.value)}
                  />
                  Influence
                </label>
              </div>
              <label
                htmlFor="parentCategoryId"
                css={`
                  margin: 0 auto;
                `}>
                <Paragraph textAlign="center">{t('Select parent categories :')}</Paragraph>
                <select
                  name="parentCategoryId"
                  id="parentCategoryId"
                  onChange={(e: React.ChangeEvent<FormikValues>) =>
                    setIdParentCategory(e.target.value)
                  }
                  className={style.select}>
                  {parentCategory
                    ? parentCategory.map((item: ParentCategory, index: number) => (
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
                        ? filterCategory.map((item: Category, index: number) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))
                        : null}
                    </Field>
                  </>
                ) : null}
              </label>
              <label
                htmlFor="data"
                css={`
                  margin: 0 auto;
                `}>
                <Paragraph textAlign="center">{t('Data :')}</Paragraph>
                <Input
                  margin="5px auto"
                  as={Field}
                  type="date"
                  name="data"
                  id="data"
                  value={newData}
                  onChange={(e: React.ChangeEvent<FormikValues>) => setNewData(e.target.value)}
                />
              </label>
              <label
                htmlFor="data"
                css={`
                  margin: 0 auto;
                `}>
                <Paragraph textAlign="center">{t('Description :')}</Paragraph>
                <Field as="textarea" name="description" id="description" />
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
