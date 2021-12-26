import config from "../../../config";

const {
  candidate: { path: candidatePath },
} = config;

const routesConfig = {
  profile: {
    name: "Profile",
    path: () => `${candidatePath()}/profile`,
    private: true,
  },
};

export default routesConfig;
