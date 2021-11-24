export type TAuthLoginReq = {
  email: string;
  password: string;
};

export type TAuthRegisterReq = TAuthLoginReq & { confirm_password: string };
