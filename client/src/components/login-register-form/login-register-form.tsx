import React from "react";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import Button from "../button/button";

type TProps<T> = {
  submitText: string;
  schema: any;
  handleSubmit: (data: T, { resetForm }: { resetForm: () => void }) => void;
  initialValues: T;
  authError: string;
};

const LoginRegisterForm = <T extends Record<string, any>>({
  submitText,
  schema,
  handleSubmit,
  initialValues,
  authError,
}: TProps<T>) => {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={initialValues}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              isInvalid={touched.email && !!errors.email}
              onBlur={handleBlur}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              isInvalid={touched.password && !!errors.password}
              onBlur={handleBlur}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          {initialValues.confirm_password !== undefined && (
            <Form.Group className="mb-3">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                required
                type="password"
                name="confirm_password"
                value={values.confirm_password}
                onChange={handleChange}
                isInvalid={
                  touched.confirm_password && !!errors.confirm_password
                }
                onBlur={handleBlur}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirm_password}
              </Form.Control.Feedback>
            </Form.Group>
          )}
          {authError}
          <Button title={submitText} type="submit" className="full-width" />
          <div className="mt-30">
            <a href="/api/auth/facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="/api/auth/google">
              <i className="bi bi-google"></i>
            </a>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginRegisterForm;
