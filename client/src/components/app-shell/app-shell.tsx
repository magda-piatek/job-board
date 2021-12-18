import React, { ReactNode } from "react";
import { Container } from "react-bootstrap";

import Header from "../header/header";

import "./app-shell.scss";

type TProps = { children: ReactNode };

const AppShell = ({ children }: TProps) => {
  return (
    <div className="page-wrapper">
      <Header />
      <Container>{children}</Container>
    </div>
  );
};

export default AppShell;
