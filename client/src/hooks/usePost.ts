import { useCallback } from "react";
import { RequestStatus } from "../typedf";
import { useFetchHook } from "./useFetch";
import { AxiosResponse } from "axios";

export function usePost<T, U>(
  asyncF: (data: U) => Promise<AxiosResponse<T>>
): {
  readonly postData: (data: U) => Promise<AxiosResponse<T> | undefined>;
  readonly fetchStatus: RequestStatus;
  readonly error: Record<string, any>;
} {
  const {
    status,
    handleRequested,
    handleSuccess,
    handleFail,
    handleReset,
    error,
  } = useFetchHook();

  const postData = useCallback(
    async (data: U) => {
      try {
        handleRequested();
        const result = await asyncF(data);
        if (result) {
          handleSuccess();
          return result;
        }
        return undefined;
      } catch (err) {
        handleFail(err);
      } finally {
        handleReset();
      }
    },
    [asyncF, handleFail, handleRequested, handleReset, handleSuccess]
  );

  return {
    postData,
    fetchStatus: status,
    error,
  } as const;
}
