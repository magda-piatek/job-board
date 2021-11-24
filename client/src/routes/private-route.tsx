import React from "react";

import { Route } from "react-router-dom";

type TProps = {
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
};

export const PrivateRoute: React.FC<TProps> = ({
  component: Component,
  ...restProps
}) => <Route {...restProps} render={(props) => <Component {...props} />} />;
