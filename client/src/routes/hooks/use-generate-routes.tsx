import React from "react";
import { useSelector } from "react-redux";

import { Route } from "react-router-dom";
import { selectIsCandidate } from "../../redux/user/user-selector";

import { PrivateRoute } from "../private-route";
import { TRouteData } from "../typedef";

type TGenerateRoutesParams = {
  routes: Record<string, TRouteData>;
  privateRouteComponent?: React.ComponentType<any>;
};

type TGenerateRoutes = (
  params: TGenerateRoutesParams
) => Array<React.ReactNode>;

export const useGenerateRoutes = () => {
  const candidateRole = useSelector(selectIsCandidate);
  const generateRoutes: TGenerateRoutes = ({
    routes,
    privateRouteComponent: PrivateRouteComponent = PrivateRoute,
  }) =>
    Object.keys(routes).map((routeName) => {
      const {
        component,
        props: { path, exact, private: isRoutePrivate, isCandidate },
      } = routes[routeName];

      const routeProps = { component, path, exact };
      const RouteComponent = isRoutePrivate ? PrivateRouteComponent : Route;

      const isAvailable = isCandidate ? candidateRole : true;

      return isAvailable ? (
        <RouteComponent key={routeName} {...routeProps} />
      ) : null;
    });

  return { generateRoutes };
};
