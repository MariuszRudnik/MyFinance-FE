import React from 'react';
import { Formik, Form, Field } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const RaceForm = () => {
  const initialValues = {
    date: new Date()
  };

  const handleSubmit = (values: any) => {
    console.log(values.date.toLocaleDateString('pl-PL'));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form>
          <label htmlFor="date">Data wyścigu:</label>
          <DatePicker
            id="date"
            selected={values.date}
            onChange={(date: any) => setFieldValue('date', date)}
            dateFormat="dd-MM-yyyy"
          />
          <button type="submit">Zapisz</button>
        </Form>
      )}
    </Formik>
  );
};
