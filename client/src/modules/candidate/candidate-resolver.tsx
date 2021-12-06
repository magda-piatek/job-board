import React from "react";
import { Switch } from "react-router-dom";

import AppShell from "../../components/app-shell/app-shell";
import { useGenerateRoutes } from "../../routes/hooks/use-generate-routes";

import { routes } from "./routes/routes";

const CandidateResolver = () => {
  const { generateRoutes } = useGenerateRoutes();
  return (
    <AppShell>
      <Switch>{generateRoutes({ routes: routes })}</Switch>
    </AppShell>
  );
};

export default CandidateResolver;
