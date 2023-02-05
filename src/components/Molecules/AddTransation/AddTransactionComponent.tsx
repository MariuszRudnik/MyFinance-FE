import React, { useEffect, useState } from 'react';
import {
  ButtonWrapper,
  StylForm,
  TitleWrapper
} from '../../Organism/AddWallet/style/StyleAddWallet.style';
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import Input from '../../Atoms/Input/Input';
import { ErrorTextMessage } from '../../Atoms/ErrorTextMessage/ErrorTextMessage';
import style from '../../Assets/css/style.module.css';
import Button from '../../Atoms/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import styled from 'styled-components/macro';
import { getCategory, getParentCategory } from '../../Utils/featchHelper';
import { Category, ParentCategory } from '../../../types/Category/GetCategory';
import { PostCategory, PostTransactionType } from '../../../types/Category/PostCategory';
import { InputX } from '../../Atoms/Input2/Input2';
import pen from '../../Assets/icons/pen.svg';
import payments from '../../Assets/icons/payments.svg';
import { theme } from '../../../theme/mainTheme';
import { UrlAddress } from '../../../types/UrlAddress';
import Heading from '../../Atoms/Heading/Heading';

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
const addTransactionComponent = async (data: any) => {
  const res = await fetch(`${UrlAddress.Transaction}add/${data.id}`, {
    method: 'POST',
    body: JSON.stringify(data.values),
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
  return await res.json();
};
export const AddTransactionCategory = ({
  parentCategory,
  category,
  parentCategoryLoading,
  categoryLoading
}: Proto) => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [idParentCategory, setIdParentCategory] = useState('');
  const [idCategory, setIdCategory] = useState('');
  const [newData, setNewData] = useState(new Date().toJSON().slice(0, 10).replace(/-/g, '-'));
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

  const { mutate } = useMutation(addTransactionComponent, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['operations', { id }] });
      notify();
    }
  });

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .required(t('Required field.'))
      .min(2, t('Too Short!'))
      .trim('The field cannot contain blank spaces')
  });

  const initialValues: PostCategory = {
    name: '',
    parentCategory: '',
    category: idCategory,
    price: 0,
    operations: '',
    data: '',
    description: ''
  };

  return (
    <div>
      <TitleWrapper>
        <Heading color={theme.textColor} big={'18px'}>
          {t('Add transaction')}
        </Heading>
      </TitleWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          values.parentCategory = idParentCategory;
          values.operations = kindOfOperation;
          values.data = newData;
          if (values.category == '') {
            values.category = idCategory;
          }
          mutate({ id, values });
          navigate('../');
          actions.setSubmitting(false);
          actions.resetForm();
        }}>
        <StylForm as={Form}>
          <label htmlFor="categories">
            <DivWrapper>
              <label
                htmlFor="name"
                css={`
                  margin: 0 auto;
                `}>
                <InputX
                  as={Field}
                  type="text"
                  icon={pen}
                  placeholder={t('Name transaction')}
                  name="name"
                  id="name"
                />
                <ErrorTextMessage>
                  <ErrorMessage name="name"></ErrorMessage>
                </ErrorTextMessage>
              </label>
              <label
                htmlFor="price"
                css={`
                  margin: 0 auto;
                `}>
                <p
                  css={`
                    position: relative;
                    margin: 5px;
                    top: 10px;
                    color: ${theme.textColor};
                    font-weight: bold;
                  `}>
                  {t('Price :')}
                </p>
                <InputX
                  margin="5px auto"
                  as={Field}
                  icon={payments}
                  type="number"
                  placeholder={t('Price :')}
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
                htmlFor="parentCategory"
                css={`
                  margin: 0 auto;
                `}>
                <p
                  css={`
                    position: relative;
                    margin: 5px;
                    top: 10px;
                    color: ${theme.textColor};
                    font-weight: bold;
                  `}>
                  {t('Select parent categories :')}
                </p>
                <select
                  name="parentCategory"
                  id="parentCategory"
                  onChange={(e: React.ChangeEvent<FormikValues>) =>
                    setIdParentCategory(e.target.value)
                  }
                  className={style.input}>
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
                    <p
                      css={`
                        position: relative;
                        margin: 5px;
                        top: 10px;
                        color: ${theme.textColor};
                        font-weight: bold;
                      `}>
                      {t('Select  categories :')}
                    </p>
                    <Field as="select" name="categoryId" id="categoryId" className={style.input}>
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
                <InputX
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
                <Field
                  as="textarea"
                  name="description"
                  id="description"
                  placeholder={t('Description')}
                  className={style.input}
                />
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
