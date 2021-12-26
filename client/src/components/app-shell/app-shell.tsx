import React, { ReactNode, useEffect } from "react";
import { Container } from "react-bootstrap";

import { getToken } from "../../api/auth-requests";
import { useLogOut } from "../../hooks/use-log-out";

import Header from "../header/header";

import "./app-shell.scss";

type TProps = { children: ReactNode };

const AppShell = ({ children }: TProps) => {
  const handleLogOut = useLogOut();

  useEffect(() => {
    (async () => {
      try {
        await getToken();
      } catch (err) {
        if (err.response.status === 401) {
          handleLogOut();
        }
      }
    })();
  }, [handleLogOut]);

  return (
    <div className="page-wrapper">
      <Header />
      <Container>{children}</Container>
    </div>
  );
};

export default AppShell;
