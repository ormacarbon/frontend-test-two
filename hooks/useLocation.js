import { useEffect, useState } from "react";


const useLocation = () => {
  const [coords, setCoords] = useState(null);

  const GetGeoLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCoords({ latitude, longitude });
    });
  };

  useEffect(() => {
    GetGeoLocation()
  }, [])

  return {
    latitude: coords?.latitude,
    longitude: coords?.longitude
  }

}

export default useLocation