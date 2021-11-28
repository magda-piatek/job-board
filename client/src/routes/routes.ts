import config from "../config";
import LoginPage from "../sites/login-page";
import RegisterPage from "../sites/register-page";
import Home from "../sites/home";

import { TRouteData } from "./typedef";

export const routes: Record<string, TRouteData> = {
  Home: {
    component: Home,
    props: {
      path: config.general.home.path(),
      private: true,
    },
  },

  LOGIN: {
    component: LoginPage,
    props: {
      path: config.general.login.path(),
    },
  },
  REGISTER: {
    component: RegisterPage,
    props: {
      path: config.general.register.path(),
    },
  },
};
