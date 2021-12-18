import React, { ReactNode } from "react";

import Header from "../header/header";
import { TNavLinks } from "../typedf";

import "./app-shell.scss";

type TProps = { children: ReactNode; moduleNavLinks?: TNavLinks };

const AppShell = ({ children, moduleNavLinks }: TProps) => {
  return (
    <div className="page-wrapper">
      <Header moduleNavLinks={moduleNavLinks} />
      {children}
    </div>
  );
};

export default AppShell;
