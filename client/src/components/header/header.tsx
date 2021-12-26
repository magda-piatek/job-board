import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

import config from "../../config";
import { isAuth } from "../../utils/auth";
import { selectModule } from "../../redux/user/user-selector";
import { Modules } from "../../typedf";
import { useLogOut } from "../../hooks/use-log-out";

import { TNavLinks } from "../typedf";

import navLinks from "./config";

import "./header.scss";

const Header = () => {
  const history = useHistory();

  const module = useSelector(selectModule);

  const [, setRefresh] = useState(0);

  const handleLogOut = useLogOut();

  const handleLogout = async () => {
    handleLogOut();
    setRefresh(Math.random());
  };

  const mainNavLinks: TNavLinks = [
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

  const moduleNavLinks = navLinks[module as Modules];

  return (
    <div className="nav-wrapper">
      <Nav variant="pills" onSelect={(path) => history.push(path)}>
        <Container className="d-flex justify-content-between" fluid>
          <div className="d-flex">
            {moduleNavLinks && getNavLinks(moduleNavLinks)}
          </div>
          <div className="d-flex">{getNavLinks(mainNavLinks)}</div>
        </Container>
      </Nav>
    </div>
  );
};

export default Header;
