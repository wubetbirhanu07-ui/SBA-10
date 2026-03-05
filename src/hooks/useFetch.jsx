import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch(() => setError("Something went wrong"))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}