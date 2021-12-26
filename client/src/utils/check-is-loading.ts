import { RequestStatus } from "../typedf";

export const checkIsLoading = (
  status: RequestStatus | Array<RequestStatus>
) => {
  return status === RequestStatus.REQUESTED;
};
