import React from 'react';
import { Formik } from 'formik';
import {useLogin} from "../../../../hooks/useLogin";

const Login = () => {
    const login = useLogin();

    return (
        <div>
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                  const errors = {};
                  if (!values.email) {
                      errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                      errors.email = 'Invalid email address';
                  }
                if (!values.password) {
                  errors.password = 'Required';
                } else if (
                  !/^[A-Z0-9]{5,}$/i.test(values.password)
                ) {
                  errors.password = 'Invalid password';
                }
                  return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                      login(values.email, values.password).then(setSubmitting(false));
                  }, 400);
              }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                  <form onSubmit={handleSubmit}>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {errors.email && touched.email && errors.email}
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      {errors.password && touched.password && errors.password}
                      <button type="submit" disabled={isSubmitting}>
                          Submit
                      </button>
                  </form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
