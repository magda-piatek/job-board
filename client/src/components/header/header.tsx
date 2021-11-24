import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Nav } from "react-bootstrap";

import config from "../../config";

import "./header.scss";

const Header = () => {
  const history = useHistory();

  const navLinks = [
    {
      title: "Login / Register",
      path: config.general.login.path(),
    },
  ];

  return (
    <Container fluid>
      <div className="nav-wrapper">
        <Nav variant="pills" onSelect={(path) => history.push(path)}>
          {navLinks.map(({ title, path }) => (
            <Nav.Item key={title}>
              <Nav.Link eventKey={path}>{title}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
    </Container>
  );
};

export default Header;
