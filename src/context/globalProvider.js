import { globalContext } from "./globalContext"
import { useState } from "react"
import { getWeather } from "../services/api"

export const GlobalProvider = ({ children }) => {
  const [weather, setWeather] = useState({});

  const currentWeather = async (city) => {
    const currentWeather = await getWeather(city);
    setWeather(currentWeather);
    console.log(weather);
  }

  const value = {
    weather,
    currentWeather
  }

  return (
    <globalContext.Provider value={ value }>
      {children}
    </globalContext.Provider>
  )
}
