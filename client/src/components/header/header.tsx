import React from "react";
import { useHistory } from "react-router-dom";

import { Nav } from "react-bootstrap";

import config from "../../config";
import { isAuth } from "../../utils/auth";
import { logout } from "../../api/auth-requests";

import "./header.scss";
import { TNavLinks } from "../typedf";

type TProps = {
  moduleNavLinks?: TNavLinks;
};

const Header = ({ moduleNavLinks }: TProps) => {
  const history = useHistory();

  const handleLogout = async () => {
    await logout();
    history.push(config.login.path());
  };

  const navLinks: TNavLinks = [
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
      isVisible: !!isAuth(),
      onClick: handleLogout,
    },
  ];

  const getNavLinks = (links: TNavLinks) =>
    links.map(({ title, path, isVisible, onClick }) => (
      <Nav.Item key={title}>
        {isVisible && (
          <Nav.Link eventKey={path} onClick={onClick}>
            {title}
          </Nav.Link>
        )}
      </Nav.Item>
    ));

  return (
    <div className="nav-wrapper">
      <Nav variant="pills" onSelect={(path) => history.push(path)}>
        <div className="d-flex">
          {moduleNavLinks && getNavLinks(moduleNavLinks)}
        </div>
        <div className="d-flex">{getNavLinks(navLinks)}</div>
      </Nav>
    </div>
  );
};

export default Header;
