import axios from "axios";
import { TAuthRegisterReq } from "../../../types/auth";
import { registerApi } from "./api";

export const postRegister = async (data: TAuthRegisterReq) =>
  await axios.post(registerApi().post, data);
