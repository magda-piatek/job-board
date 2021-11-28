import axios from "axios";
import { TAuthLoginReq } from "../../../types/auth";
import { authApi } from "./api";

export const login = async (data: TAuthLoginReq) =>
  await axios.post(authApi().login, data, { withCredentials: true });

export const logout = async () =>
  await axios.get(authApi().logout, { withCredentials: true });
