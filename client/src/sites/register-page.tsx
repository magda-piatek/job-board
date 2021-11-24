import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import LoginRegisterForm from "../components/login-register-form/login-register-form";
import registerSchema from "../../../validation/register";
import { usePost } from "../hooks/usePost";
import { postRegister } from "../api/register-requests";
import { TAuthRegisterReq } from "../../../types/auth";
import { TUser } from "../../../types/user";
import config from "../config";

const RegisterPage = () => {
  const history = useHistory();
  const { postData } = usePost<TUser, TAuthRegisterReq>(postRegister);

  const initialValues = {
    email: "",
    password: "",
    confirm_password: "",
  };

  const onSubmit = async (values: TAuthRegisterReq) => {
    const result = await postData(values);

    if (result) history.push(config.general.login.path());
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 6 }}>
          <LoginRegisterForm<TAuthRegisterReq>
            submitText="Register"
            schema={registerSchema}
            handleSubmit={onSubmit}
            initialValues={initialValues}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
