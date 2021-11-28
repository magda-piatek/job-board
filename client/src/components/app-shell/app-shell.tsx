import React, { ReactNode } from "react";

import Header from "../header/header";

type TProps = { children: ReactNode[] };

const AppShell = ({ children }: TProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default AppShell;
