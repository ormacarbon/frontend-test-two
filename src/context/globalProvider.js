import { globalContext } from "./globalContext";
import { useState } from "react";
import { getWeather } from "../services/api";
import light from "../styles/theme/light";
import dark from "../styles/theme/dark";

export const GlobalProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [theme, setTheme] = useState(light);
  
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

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
    localStorage.setItem('theme', theme.title === 'light' ? 'dark' : 'light');
  }

  const value = {
    weather,
    currentWeather,
    user,
    setUser,
    validateUserFields,
    theme,
    toggleTheme
  }

  return (
    <globalContext.Provider value={ value }>
      {children}
    </globalContext.Provider>
  )
}
