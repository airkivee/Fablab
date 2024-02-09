import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true);

    try {
      if (method === 'GET') {
        // If it's a GET request, we don't include a body
        const response = await fetch(url, { method, headers });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Что-то пошло не так');
        }

        setLoading(false);
        return data;
      } else {
        // For other request types (POST, PUT, etc.), include the body
        body = JSON.stringify(body);
        headers['Content-Type'] = 'application/json';

        const response = await fetch(url, { method, body, headers });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Что-то пошло не так');
        }

        setLoading(false);
        return data;
      }
    } catch (e) {
      setLoading(false);
      setError(e.message);
      throw e;
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};
