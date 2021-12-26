import React from "react";
import { Switch } from "react-router-dom";

import { useGenerateRoutes } from "../../routes/hooks/use-generate-routes";

import { routes } from "./routes/routes";

const CandidateResolver = () => {
  const { generateRoutes } = useGenerateRoutes();

  return <Switch>{generateRoutes({ routes: routes })}</Switch>;
};

export default CandidateResolver;
