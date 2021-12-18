import { TUser } from "../../../../types/user";

export const initialState: TUser = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  date: new Date(),
  confirmed: false,
  image: {},
  id: "",
  facebookId: "",
  googleId: "",
  isCandidate: false,
  module: "",
};
