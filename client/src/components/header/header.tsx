import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, Nav } from "react-bootstrap";

import config from "../../config";
import { isAuth } from "../../utils/auth";
import { logout } from "../../api/auth-requests";
import { setInitialStateUser } from "../../redux/user/user-slice";

import { TNavLinks } from "../typedf";
import { selectModule } from "../../redux/user/user-selector";
import { useDispatch, useSelector } from "react-redux";
import navLinks from "./config";
import { Modules } from "../../typedf";

import "./header.scss";

const Header = () => {
  const history = useHistory();

  const module = useSelector(selectModule);

  const [, setRefresh] = useState(0);

  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logout();
    dispatch(setInitialStateUser());
    history.push(config.login.path());
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
