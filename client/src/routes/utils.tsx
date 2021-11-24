import React from "react";

import { Route } from "react-router-dom";

import { PrivateRoute } from "./private-route";
import { TRouteData } from "./typedef";

type TGenerateRoutesParams = {
  routes: Record<string, TRouteData>;
  privateRouteComponent?: React.ComponentType<any>;
};

type TGenerateRoutes = (
  params: TGenerateRoutesParams
) => Array<React.ReactNode>;

export const generateRoutes: TGenerateRoutes = ({
  routes,
  privateRouteComponent: PrivateRouteComponent = PrivateRoute,
}) =>
  Object.keys(routes).map((routeName) => {
    const {
      component,
      props: { path, exact, private: isRoutePrivate },
    } = routes[routeName];

    const routeProps = { component, path, exact };
    const RouteComponent = isRoutePrivate ? PrivateRouteComponent : Route;

    return <RouteComponent key={routeName} {...routeProps} />;
  });
