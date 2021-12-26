import axios from "axios";

import { avatarApi, getHeaders } from "./api";

export const fetchAvatar = async (key: string) => {
  return await axios.get(
    avatarApi(key).get,
    getHeaders({ responseType: "arraybuffer" })
  );
};
