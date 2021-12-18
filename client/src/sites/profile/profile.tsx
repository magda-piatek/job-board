import { Formik } from "formik";
import React from "react";
import { Form } from "react-bootstrap";

const Profile = () => {
  return (
    <Formik validationSchema={{}} onSubmit={console.log} initialValues={{}}>
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          {/* <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="lastName"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              isInvalid={touched.firstName && !!errors.firstName}
              onBlur={handleBlur}
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="lastName"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              isInvalid={touched.lastName && !!errors.lastName}
              onBlur={handleBlur}
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastName}
            </Form.Control.Feedback>
          </Form.Group> */}
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Avatar</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
};

export default Profile;
