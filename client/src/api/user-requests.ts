import axios from "axios";
import { getHeaders, userApi } from "./api";

export const fetchUser = async () =>
  await axios.get(userApi().get, getHeaders());

export const patchUser = async (values: FormData, id: string) =>
  await axios.patch(
    userApi(id).patch,
    values,
    getHeaders({ "Content-Type": "multipart/form-data" })
  );
