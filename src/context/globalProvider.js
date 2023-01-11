import { globalContext } from "./globalContext"
import { useState } from "react"
import { getWeather } from "../services/api"

export const GlobalProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  
  const currentWeather = async (city) => {
    const currentWeather = await getWeather(city);
    setWeather(currentWeather);
    console.log(weather);
  }

  const validateUserFields = (email, password) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const minPassword = 6;
    return ((emailRegex.test(email)) && (password.length >= minPassword));
  }

  const value = {
    weather,
    currentWeather,
    user,
    setUser,
    validateUserFields
  }

  return (
    <globalContext.Provider value={ value }>
      {children}
    </globalContext.Provider>
  )
}
