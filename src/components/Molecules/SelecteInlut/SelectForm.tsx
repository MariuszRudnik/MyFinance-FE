import React, { useState } from 'react';
import { ErrorMessage, Field, useFormik } from 'formik';
import { InputX } from '../../Atoms/Input2/Input2';
import Button from '../../Atoms/Button/Button';
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
  data: any;
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

const RadioWrapper = styled.div`
  margin: 10px;
`;
const LabelParagraph = styled.label`
  font-family: 'Roboto-Regular', 'Roboto-Bold', 'Roboto-Italic', 'Roboto-Light', sans-serif;
  font-size: ${theme.fontSize.s};
  font-weight: ${theme.bold};
  color: ${({ color }) => (color ? color : theme.textColor)};
  word-wrap: break-word;
  position: relative;
`;

const SelectForm: React.FC<SelectFormProps> = ({ categories, parentCategories, data }) => {
  const [parentCategory, setParentCategory] = useState('');

  const userData = new Date(data.data);
  const dateString = userData.toISOString().substr(0, 10);
  const dateObject = new Date(dateString);
  dateObject.setDate(dateObject.getDate() + 1);
  const newDateString = dateObject.toISOString().substr(0, 10);

  const formik = useFormik({
    initialValues: {
      category: data.category,
      parentCategory: data.parentCategory,
      name: data.name,
      description: data.description,
      price: data.price,
      date: newDateString,
      operations: data.operations
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const filteredCategories = categories.filter(
    (category) => category.parentCategory === parentCategory
  );

  return (
    <div>
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
          />
        </ItemWrapper>
        <ItemWrapper>
          <LabelParagraph htmlFor="date">Date:</LabelParagraph>
          <InputX
            type="date"
            id="date"
            name="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          />
        </ItemWrapper>
        <RadioWrapper>
          <LabelParagraph>Operations</LabelParagraph>
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
        </RadioWrapper>
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
            <option value="">Select a parent category</option>
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
            <option value="">Select a category</option>
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

        <div>
          <Button secondary={true} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SelectForm;
