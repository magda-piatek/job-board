import config from "./config";

import { TRouteData } from "../../../routes/typedef";
import Profile from "../../../sites/profile/profile";

export const routes: Record<string, TRouteData> = {
  PROFILE: {
    component: Profile,
    props: {
      path: config.profile.path(),
      exact: true,
    },
  },
};
