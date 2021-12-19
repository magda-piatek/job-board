import Cookies from "js-cookie";

import keys from "../config/keys";
import { THeaders } from "../typedf";

const { BASE_URL, API_URL } = keys;

export const getHeaders = (
  passedHeader?: Record<string, string>
): THeaders => ({
  withCredentials: true,
  headers: {
    Authorization: "Bearer " + Cookies.get("AUTH"),
    ...passedHeader,
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

export const userApi = (id?: string) => {
  return {
    get: BASE_URL + API_URL + "/auth/user",
    patch: BASE_URL + API_URL + "/user/" + id,
  };
};
