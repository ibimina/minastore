import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [documents, setDocuments] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortConst = new AbortController();

    const fetchData = async () => {
      setIsPending(true);
      try {
        const res = await fetch(url, { signal: abortConst.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setIsPending(false);
        setDocuments(data);

        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
        } else {
          setIsPending(false);
          setError("could not fetch");   
        }
      }
    };
    fetchData();
    return () => {
      abortConst.abort();
    };
  }, [url]);

  return { documents, isPending, error };
};
