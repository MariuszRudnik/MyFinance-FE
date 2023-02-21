import React, { useState } from 'react';
import { ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { UrlAddress } from '../../../types/UrlAddress';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

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
const addTransactionComponent = async (data: any) => {
  console.log(data[1]);
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
  const { t, i18n } = useTranslation();

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
      <div>
        <label htmlFor="parentCategory">Parent Category:</label>
        <select
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
        </select>
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select
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
        </select>
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
          step="0.01"
          min="0"
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="data"
          name="data"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.data}
        />
      </div>
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
      <button type="submit">Submit</button>
    </form>
  );
};
