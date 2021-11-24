import React from "react";

import Header from "../header/header";

type TProps = { children: any };

const AppShell = ({ children }: TProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default AppShell;
