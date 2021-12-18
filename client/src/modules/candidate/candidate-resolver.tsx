import React from "react";
import { Switch } from "react-router-dom";
import AppShell from "../../components/app-shell/app-shell";
import { TNavLinks } from "../../components/typedf";

import { useGenerateRoutes } from "../../routes/hooks/use-generate-routes";
import { isAuth } from "../../utils/auth";
import config from "./routes/config";

import { routes } from "./routes/routes";

const CandidateResolver = () => {
  const { generateRoutes } = useGenerateRoutes();

  return <Switch>{generateRoutes({ routes: routes })}</Switch>;
};

export default CandidateResolver;
