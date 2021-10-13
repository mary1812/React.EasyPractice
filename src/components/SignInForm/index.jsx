import React from "react";
import styles from './SignInForm.css';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { SIGN_IN_SCHEMA } from "../../utils/validationSchemas";

const initialState = {
  email: "",
  password: "",
};

function SignInForm(props) {
  const submitHandler = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialState}
      validationSchema={SIGN_IN_SCHEMA}
      onSubmit={submitHandler}
    >
      {(formikProps) => {
        console.log(formikProps)
        return (
          <Form className="container">
            <Field name="email" placeholder="email" />
            <ErrorMessage name = "email" />
            <Field type="text" name="password" placeholder="password" />
            <ErrorMessage name = "password" component='article'/>
            <button type="submit">Login</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignInForm;
