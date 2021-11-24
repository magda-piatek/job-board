import axios from "axios";
import { TAuthLoginReq } from "../../../types/auth";
import { loginApi } from "./api";

export const postLogin = async (data: TAuthLoginReq) =>
  await axios.post(loginApi().post, data);
