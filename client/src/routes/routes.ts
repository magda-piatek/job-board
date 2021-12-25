import { lazy } from "react";

import config from "../config";
import withSuspense from "../components/with-suspense/with-suspense";

import LoginPage from "../sites/login/login";
import RegisterPage from "../sites/register";
import Home from "../sites/home";
import Success from "../sites/success";

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
      exact: true,
    },
  },
  REGISTER: {
    component: RegisterPage,
    props: {
      path: config.register.path(),
      exact: true,
    },
  },
  CANDIDATE: {
    component: CandidateModule,
    props: {
      path: config.candidate.path(),
      isCandidate: true,
    },
  },

  HOME: {
    component: Home,
    props: {
      path: config.home.path(),
      exact: true,
    },
  },
  SUCCESS: {
    component: Success,
    props: {
      path: config.success.path(),
      exact: true,
    },
  },
};
