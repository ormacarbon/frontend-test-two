import axios from 'axios'
import { useEffect, useState } from 'react'

export const useApi = (param) => {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [parameter, setParameter] = useState(param);

    useEffect(() => {
        let mounted = true;
        setIsLoading(true);
        axios.defaults.baseURL =  'https://api.coingecko.com/api/v3/'
        const fetchData = async () => {
            try {
                const result = await axios(parameter);
                if (mounted) {
                  setResponse(result.data);
                  setIsLoading(false);
                }
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        };
        fetchData();
        return () => {
          mounted = false;
        };
    }, [parameter]);

    const refresh = (newParam) => {
      setParameter(newParam);
    };

  return {
    response, isLoading, error, refresh
  }
}
