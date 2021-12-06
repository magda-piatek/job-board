import React from "react";
import { Redirect, Route } from "react-router-dom";
import config from "../config";

import { isAuth } from "../utils/auth";

type TProps = {
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
};

export const PrivateRoute: React.FC<TProps> = ({
  component: Component,
  ...restProps
}) => (
  <Route
    {...restProps}
    render={(props) =>
      isAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: config.login.path(),
          }}
        />
      )
    }
  />
);
