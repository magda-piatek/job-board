import Cookies from "js-cookie";

import keys from "../config/keys";

const { BASE_URL, API_URL } = keys;

export const getHeaders = () => ({
  withCredentials: true,
  headers: {
    Authorization: "Bearer " + Cookies.get("AUTH"),
  },
});

export const authApi = () => {
  return {
    login: BASE_URL + API_URL + "/auth/login",
    logout: BASE_URL + API_URL + "/auth/logout",
  };
};

export const registerApi = () => {
  return {
    post: BASE_URL + API_URL + "/user/register",
  };
};

export const userApi = () => {
  return {
    get: BASE_URL + API_URL + "/auth/user",
  };
};
