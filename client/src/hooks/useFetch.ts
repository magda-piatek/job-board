import { useCallback, useState } from "react";

import { RequestStatus } from "../typedf";

export function useFetchHook() {
  const [localError, setLocalError] = useState<string | unknown>("");
  const [status, setStatus] = useState(RequestStatus.INITIAL);

  return {
    status,
    error: localError,
    handleRequested: useCallback(() => setStatus(RequestStatus.REQUESTED), []),
    handleSuccess: useCallback(() => {
      setStatus(RequestStatus.SUCCEEDED);
      if (localError) setLocalError("");
    }, [localError]),
    handleFail: useCallback((error: Record<string, any>) => {
      setStatus(RequestStatus.FAILED);
      setLocalError(error?.response?.data?.errors || error);
    }, []),

    handleReset: useCallback(() => {
      setStatus(RequestStatus.INITIAL);
    }, []),
    setLocalError,
  } as const;
}
