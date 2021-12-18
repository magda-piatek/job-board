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

  const moduleNavLinks: TNavLinks = [
    {
      title: "Profile",
      path: config.profile.path(),
      isVisible: !!isAuth(),
    },
  ];

  return (
    <AppShell moduleNavLinks={moduleNavLinks}>
      <Switch>{generateRoutes({ routes: routes })}</Switch>
    </AppShell>
  );
};

export default CandidateResolver;
