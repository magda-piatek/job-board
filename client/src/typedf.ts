export enum RequestStatus {
  INITIAL,
  REQUESTED,
  SUCCEEDED,
  FAILED,
}

export enum Modules {
  Candidate = "candidate",
  Employer = "employer",
}

export type THeaders = {
  withCredentials: boolean;
  headers: {
    Authorization?: string;
    "Content-type"?: string;
  };
};
