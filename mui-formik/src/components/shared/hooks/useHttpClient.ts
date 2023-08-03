import { useCallback, useRef, useState } from "react";

type httpRequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>();

  const activeHttpRequests = useRef<AbortController[]>([]);

  const sendRequest = useCallback(
    async (
      url: string,
      method: httpRequestMethod = "GET",
      body: string | FormData | null = null,
      headers = {}
    ): Promise<any> => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });

        const responseData: { message: string } = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setIsLoading(false);
        return responseData;
      } catch (err: any) {
        console.log(err);

        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  return { isLoading, error, sendRequest, clearError };
};
