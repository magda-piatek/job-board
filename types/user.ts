export type TUser = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  date: Date;
  confirmed: boolean;
  avatar: object;
  _id: string;
  facebookId: string;
  googleId: string;
  isCandidate: boolean;
  module: string;
};
