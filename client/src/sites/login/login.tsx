import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import LoginRegisterForm from "../../components/login-register-form/login-register-form";
import loginSchema from "../../../../validation/login";
import { usePost } from "../../hooks/usePost";
import { TAuthLoginReq } from "../../../../types/auth";
import config from "../../config";
import { login } from "../../api/auth-requests";

import "./login.scss";

const LoginPage = () => {
  const history = useHistory();
  const { postData: postLogin, error: loginError } =
    usePost<{ token: string }, TAuthLoginReq>(login);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (
    values: TAuthLoginReq,
    { resetForm }: { resetForm: () => void }
  ) => {
    const {
      data: { token },
    } = await postLogin(values);

    if (token) {
      resetForm();
      history.push(config.success.path());
    }
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 5, offset: 7 }}>
          <LoginRegisterForm<TAuthLoginReq>
            submitText="Login"
            schema={loginSchema}
            handleSubmit={onSubmit}
            initialValues={initialValues}
            authError={loginError[0]?.authError}
          >
            <div className="sign-up-link">
              Don't have an account?{" "}
              <b onClick={() => history.push(config.register.path())}>Signup</b>
            </div>
          </LoginRegisterForm>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
