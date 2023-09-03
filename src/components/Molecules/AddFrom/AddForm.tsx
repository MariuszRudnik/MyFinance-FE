import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { UrlAddress } from '../../../types/UrlAddress';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Button from '../../Atoms/Button/Button';
import { InputX } from '../../Atoms/Input2/Input2';
import styled from 'styled-components/macro';
import { theme } from '../../../theme/mainTheme';

type Category = {
  id: string;
  name: string;
  plannedBudget: number | null;
  plannedBudgetValue: number | null;
  parentCategory: string;
};
type ParentCategory = {
  id: string;
  name: string;
  plannedBudget: number | null;
  icon: string;
};
interface SelectFormProps {
  categories: Category[];
  parentCategories: ParentCategory[];
}
const SelectedWrapper = styled.select`
  padding: 10px 20px 10px 40px;
  font-size: ${({ theme }) => theme.fontSize.x};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 5px;
  margin: 5px;
  width: 220px;
  height: 50px;
  background-position: 15px 50%;
  background-repeat: no-repeat;
  background-size: 15px;
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;
const LabelParagraph = styled.label`
  font-family: 'Roboto-Regular', 'Roboto-Bold', 'Roboto-Italic', 'Roboto-Light', sans-serif;
  font-size: ${theme.fontSize.s};
  font-weight: ${theme.bold};
  color: ${({ color }) => (color ? color : theme.textColor)};
  word-wrap: break-word;
  position: relative;
`;

const addTransactionComponent = async (data: any) => {
  const res = await fetch(`${UrlAddress.Transaction}add/${data[0]}`, {
    method: 'POST',
    body: JSON.stringify(data[1]),
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
  return await res.json();
};

export const AddForm: React.FC<SelectFormProps> = ({ categories, parentCategories }) => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [parentCategory, setParentCategory] = useState(parentCategories[0].id);
  const filteredCategories = categories.filter(
    (category) => category.parentCategory === parentCategory
  );
  const userDate = new Date();
  const { mutate } = useMutation(addTransactionComponent, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['operations', { id }] });
      queryClient.invalidateQueries({ queryKey: 'sumTransaction' });
    }
  });
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
  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      data: userDate.toISOString().substr(0, 10),
      operations: 'expenditure',
      description: '',
      parentCategory: parentCategories[0].id,
      category: filteredCategories[0].id
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().min(3, 'Name must be at least 3 characters').required('Name is required')
    }),
    onSubmit: (values) => {
      const date = new Date(values.data);
      mutate([id, { ...values, data: date }]);
      notify();
      navigate('../');
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <ItemWrapper>
        <LabelParagraph htmlFor="name">Name:</LabelParagraph>
        <InputX
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </ItemWrapper>
      <ItemWrapper>
        <LabelParagraph htmlFor="price">Price:</LabelParagraph>
        <InputX
          type="number"
          id="price"
          name="price"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
          step="0.01"
          min="0"
        />
      </ItemWrapper>
      <ItemWrapper>
        <LabelParagraph htmlFor="date">Date:</LabelParagraph>
        <InputX
          type="date"
          id="data"
          name="data"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.data}
        />
      </ItemWrapper>
      <div role="group">
        <label>
          <input
            type="radio"
            name="operations"
            value="influence"
            checked={formik.values.operations === 'influence'}
            onChange={formik.handleChange}
          />
          Influence
        </label>
        <label>
          <input
            type="radio"
            name="operations"
            value="expenditure"
            checked={formik.values.operations === 'expenditure'}
            onChange={formik.handleChange}
          />
          Expenditure
        </label>
      </div>
      <ItemWrapper>
        <LabelParagraph htmlFor="parentCategory">Parent Category:</LabelParagraph>
        <SelectedWrapper
          id="parentCategory"
          name="parentCategory"
          onChange={(e) => {
            setParentCategory(e.target.value);
            formik.setFieldValue('parentCategory', e.target.value);
          }}
          onBlur={formik.handleBlur}
          value={formik.values.parentCategory}>
          {parentCategories.map((parentCategory) => (
            <option key={parentCategory.id} value={parentCategory.id}>
              {parentCategory.name}
            </option>
          ))}
        </SelectedWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <LabelParagraph htmlFor="category">Category:</LabelParagraph>
        <SelectedWrapper
          id="category"
          name="category"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.category}>
          {filteredCategories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </SelectedWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <LabelParagraph htmlFor="description">Description:</LabelParagraph>
        <InputX
          type="text"
          id="description"
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
      </ItemWrapper>

      <Button secondary={true} type="submit">
        Submit
      </Button>
    </form>
  );
};
