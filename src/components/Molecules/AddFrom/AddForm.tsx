import React, { useState } from 'react';
import { useFormik } from 'formik';

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

export const AddForm: React.FC<SelectFormProps> = ({ categories, parentCategories }) => {
  const [parentCategory, setParentCategory] = useState(parentCategories[0].id);
  const filteredCategories = categories.filter(
    (category) => category.parentCategory === parentCategory
  );
  const userData = new Date();

  const formik = useFormik({
    initialValues: {
      category: filteredCategories[0].id,
      parentCategory: parentCategories[0].id,
      name: '',
      description: '',
      price: '',
      date: userData.toISOString().substr(0, 10)
    },
    onSubmit: (values) => {
      const date = new Date(values.date);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const formattedDate = `${day < 10 ? '0' + day : day}-${
        month < 10 ? '0' + month : month
      }-${year}`;
      console.log({ ...values, date: formattedDate });
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
          <option value="">Select a parent category</option>
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
          <option value="">Select a category</option>
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
        />{' '}
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.date}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
