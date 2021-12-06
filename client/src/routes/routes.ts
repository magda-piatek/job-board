import { lazy } from "react";

import config from "../config";
import withSuspense from "../components/with-suspense/with-suspense";

import LoginPage from "../sites/login-page/login-page";
import RegisterPage from "../sites/register-page";
import Home from "../sites/home";

import { TRouteData } from "./typedef";

const CandidateModule = withSuspense(
  lazy(
    () =>
      import(
        /* webpackChunkName: "candidate-module" */ "../modules/candidate/candidate-resolver"
      )
  )
);

export const routes: Record<string, TRouteData> = {
  LOGIN: {
    component: LoginPage,
    props: {
      path: config.login.path(),
    },
  },
  REGISTER: {
    component: RegisterPage,
    props: {
      path: config.register.path(),
    },
  },
  CANDIDATE: {
    component: CandidateModule,
    props: {
      path: config.register.path(),
      isCandidate: true,
    },
  },

  HOME: {
    component: Home,
    props: {
      path: config.home.path(),
    },
  },
};
