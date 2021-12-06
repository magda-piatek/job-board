import React from "react";
import { useHistory } from "react-router-dom";

import { Nav, NavDropdown } from "react-bootstrap";

import config from "../../config";
import { isAuth } from "../../utils/auth";
import { logout } from "../../api/auth-requests";

import "./header.scss";

const Header = () => {
  const history = useHistory();

  const handleLogout = async () => {
    await logout();
    history.push(config.login.path());
  };

  const navLinks = [
    {
      title: "Login",
      path: config.login.path(),
      isVisible: !isAuth(),
    },
    {
      title: "Register",
      path: config.register.path(),
      isVisible: !isAuth(),
    },
    {
      title: "Log out",
      isVisible: isAuth(),
      onClick: handleLogout,
    },
  ];

  return (
    <div className="nav-wrapper">
      <Nav variant="pills" onSelect={(path) => history.push(path)}>
        {/* {isAuth() && (
          <NavDropdown title="My account">
            {dropdownLinks.map(({ title, path }) => (
              <NavDropdown.Item key={title}>
                <Nav.Link eventKey={path}>{title}</Nav.Link>
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        )} */}

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
  );
};

export default Header;
