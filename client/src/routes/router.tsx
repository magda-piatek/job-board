import React from "react";

import { Switch } from "react-router-dom";

import AppShell from "../components/app-shell/app-shell";

import { useGenerateRoutes } from "./hooks/use-generate-routes";
import { routes as mainRoutes } from "./routes";

export const Router = () => {
  const { generateRoutes } = useGenerateRoutes();

  return (
    <AppShell>
      <Switch>
        {generateRoutes({ routes: mainRoutes })}
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </AppShell>
  );
};
