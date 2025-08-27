import fetchData from "@utilts/fetchData";
import { useEffect, useState } from "react";
const UseFetch = <T,>(url: string | null, selector?: (res: any) => T) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    fetchData<T>(url)
      .then((res) => {
        const extracted = selector ? selector(res) : res?.data;
        setData(extracted);
      })
      .catch((err) => {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, selector]);

  return { data, loading, error };
};

export default UseFetch;
