import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Nav } from "react-bootstrap";

import config from "../../config";
import { isAuth } from "../../utils/auth";
import { logout } from "../../api/auth-requests";

import "./header.scss";

const Header = () => {
  const history = useHistory();

  const handleLogout = async () => {
    await logout();
    history.push(config.general.login.path());
  };

  const navLinks = [
    {
      title: "Login",
      path: config.general.login.path(),
      isVisible: !isAuth(),
    },
    {
      title: "Register",
      path: config.general.register.path(),
      isVisible: !isAuth(),
    },
    {
      title: "Log out",
      isVisible: isAuth(),
      onClick: handleLogout,
    },
  ];

  return (
    <Container fluid>
      <div className="nav-wrapper">
        <Nav variant="pills" onSelect={(path) => history.push(path)}>
          {navLinks.map(({ title, path, isVisible, onClick }) => (
            <Nav.Item key={title}>
              {isVisible && (
                <Nav.Link eventKey={path} onClick={onClick}>
                  {title}
                </Nav.Link>
              )}
            </Nav.Item>
          ))}
        </Nav>
      </div>
    </Container>
  );
};

export default Header;
