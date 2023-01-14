import { useEffect, useState } from "react"

export function useFetch(url, options = {parser: 'json'}) {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getData = () => {
    fetch(url)
    .then(response => response[options.parser]())
    .then(data => setData(data))
    .catch(err => setError(err))
    .finally(() => setLoading(false))
  }

  useEffect(() => {
    getData()
  }, [url])

  return {
    data,
    loading,
    error
  }
}