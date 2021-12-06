import React, { ReactNode } from "react";

import Header from "../header/header";

import "./app-shell.scss";

type TProps = { children: ReactNode };

const AppShell = ({ children }: TProps) => {
  return (
    <div className="page-wrapper">
      <Header />
      {children}
    </div>
  );
};

export default AppShell;
