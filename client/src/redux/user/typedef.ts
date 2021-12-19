import { TUser } from "../../../../types/user";

export const initialState: TUser = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  date: new Date(),
  confirmed: false,
  avatar: {},
  _id: "",
  facebookId: "",
  googleId: "",
  isCandidate: false,
  module: "",
};
