import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const useApi = (param) => {
    const[response,setResponse] = useState([])
    const[isLoading, setIsLoading] = useState(false)
    const[error,setError] = useState('')

    axios.defaults.baseURL =  'https://api.coingecko.com/api/v3/'

    const fetchData = async(param)=>{
        try {
            setIsLoading(true)
            const result = await axios(param)
            setResponse(result.data)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchData(param)
    },[])

  return {
    response, isLoading, error
  }
}
