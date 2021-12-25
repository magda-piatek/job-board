import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import LoginRegisterForm from "../components/login-register-form/login-register-form";
import registerSchema from "../../../validation/register";
import { usePost } from "../hooks/usePost";
import { postRegister } from "../api/register-requests";
import { TAuthRegisterReq } from "../../../types/auth";
import { TUser } from "../../../types/user";

const RegisterPage = () => {
  const { postData, error } = usePost<TUser, TAuthRegisterReq>(postRegister);

  const [successMsg, setSuccessMsg] = useState("");

  const initialValues = {
    email: "",
    password: "",
    confirm_password: "",
  };

  const onSubmit = async (
    values: TAuthRegisterReq,
    { resetForm }: { resetForm: () => void }
  ) => {
    if (successMsg) setSuccessMsg("");
    const result = await postData(values);

    if (result) {
      resetForm();
      setSuccessMsg(
        "Confirmation link was sent to your email. Please accept it."
      );
    }
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 5, offset: 7 }}>
          {successMsg}
          <LoginRegisterForm<TAuthRegisterReq>
            submitText="Register"
            schema={registerSchema}
            handleSubmit={onSubmit}
            initialValues={initialValues}
            authError={error[0]?.authError}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
