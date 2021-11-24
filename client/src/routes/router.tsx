import React from "react";

import { Route, Switch } from "react-router-dom";
import AppShell from "../components/app-shell/app-shell";

//import NotFound from "@/components/error/not-found";

import { routes as mainRoutes } from "./routes";
import { generateRoutes } from "./utils";

export const Router = () => (
  <Switch>
    <AppShell>{generateRoutes({ routes: mainRoutes })}</AppShell>
    {/* <Route path="*" component={NotFound} /> */}
  </Switch>
);
