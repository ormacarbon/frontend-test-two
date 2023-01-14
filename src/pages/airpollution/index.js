import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

const AirPolluition = () => {
  const [coords, setCoords] = useState(null);
  
  const { data, error, loading } = useFetch(`/api/air_pollution?latitude=${coords?.latitude}&longitude=${coords?.longitude}`)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      setCoords({ latitude, longitude })
    });
  }, [])

  return (
    <div>
      <code>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </code>
    </div>
  )
}

export default AirPolluition