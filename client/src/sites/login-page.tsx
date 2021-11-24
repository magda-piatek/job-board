import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import LoginRegisterForm from "../components/login-register-form/login-register-form";
import loginSchema from "../../../validation/login";
import { usePost } from "../hooks/usePost";
import { TAuthLoginReq } from "../../../types/auth";
import config from "../config";
import { postLogin } from "../api/login-requests";

const LoginPage = () => {
  const history = useHistory();
  const { postData } = usePost<{ token: string }, TAuthLoginReq>(postLogin);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values: TAuthLoginReq) => {
    const {
      data: { token },
    } = await postData(values);

    if (token) {
      localStorage.setItem("token", token);
      history.push(config.general.home.path());
    }
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 6 }}>
          <LoginRegisterForm<TAuthLoginReq>
            submitText="Login"
            schema={loginSchema}
            handleSubmit={onSubmit}
            initialValues={initialValues}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
