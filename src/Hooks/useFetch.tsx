import { useState, useRef, useEffect } from 'react';

const useFetch = <T,>(url: RequestInfo | URL, options?: RequestInit) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const doFetch = async () => {
      setLoading(true);
      setData(null);
      try {
        const r = await fetch(url, { ...optionsRef.current, signal });
        if (!r.ok) throw new Error(r.statusText);
        const json = (await r.json()) as T;
        if (!signal.aborted) setData(json);
      } catch (e) {
        if (!signal.aborted && e instanceof Error) setError(e.message);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };
    doFetch();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
