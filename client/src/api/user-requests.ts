import axios from "axios";
import { getHeaders, userApi } from "./api";

export const fetchUser = async () =>
  await axios.get(userApi().get, getHeaders());
