import keys from "../config/keys";

const { BASE_URL, API_URL } = keys;

export const loginApi = () => {
  return {
    post: BASE_URL + API_URL + "/auth",
  };
};

export const registerApi = () => {
  return {
    post: BASE_URL + API_URL + "/user/register",
  };
};
