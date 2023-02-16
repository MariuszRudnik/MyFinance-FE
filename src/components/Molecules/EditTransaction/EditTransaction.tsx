import React from 'react';
import { useParams } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';

interface Values {
  category: string;
  date: string;
  description: string;
  name: string;
  operations: string;
  parentCategory: string;
  price: number;
}

const initialValues: Values = {
  category: '',
  date: '',
  description: '',
  name: '',
  operations: '',
  parentCategory: '',
  price: 0
};
export const EditTransaction = () => {
  const { idTransaction } = useParams();
  const onSubmit = (values: Values) => {
    console.log(values);
  };
  const FormComponent = () => (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <Field type="text" name="description" />
            <ErrorMessage name="description" />
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <Field type="number" name="price" />
            <ErrorMessage name="price" />
          </div>

          <div>
            <label htmlFor="date">Date</label>
            <Field type="date" name="date" />
            <ErrorMessage name="date" />
          </div>

          <div>
            <label htmlFor="category">Category</label>
            <Field as="select" name="category">
              <option value="">Select a category</option>
              <option value="krowa">Krowa</option>
              <option value="miasto">Miasto</option>
              <option value="jedzenie">Jedzenie</option>
            </Field>
            <ErrorMessage name="category" />
          </div>

          <div>
            <label htmlFor="parentCategory">Parent Category</label>
            <Field as="select" name="parentCategory">
              <option value="">Select a parent category</option>
              <option value="krowa">Krowa</option>
              <option value="miasto">Miasto</option>
              <option value="jedzenie">Jedzenie</option>
            </Field>
            <ErrorMessage name="parentCategory" />
          </div>

          <div>
            <label htmlFor="operations">Operations</label>
            <Field type="text" name="operations" />
            <ErrorMessage name="operations" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );

  return <>{<FormComponent />}</>;
};
