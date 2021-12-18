import config from "../../modules/candidate/routes/config";
import { Modules } from "../../typedf";
import { isAuth } from "../../utils/auth";

const moduleNavLinks = {
  [Modules.Candidate]: [
    {
      title: "Profile",
      path: config.profile.path(),
      isVisible: !!isAuth(),
    },
  ],
  [Modules.Employer]: [
    { title: "Profile", path: config.profile.path(), isVisible: !!isAuth() },
  ],
};

export default moduleNavLinks;
