export type TAuthLoginReq = {
  email: string;
  password: string;
};

export type TAuthRegisterReq = TAuthLoginReq & { confirm_password: string };

export type TUserReq = {
  avatar?: object;
  firstName?: string;
  lastName?: string;
};
