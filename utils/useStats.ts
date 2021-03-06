import { useState, useEffect } from 'react';

export const useStats = (url: string) => {
  const [stats, setStats] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();

  useEffect(() => {
    setError(null);
    setLoading(true);

    fetch(url)
      .then(async res => {
        setStats(null);
        if (res.status === 404) {
          setError({ message: 'No data available' });
        }
        setStats(await res.json());
        setLoading(false);
      })
      .catch(err => setError(err));
  }, [url]);

  return {
    stats,
    loading,
    error
  };
}
