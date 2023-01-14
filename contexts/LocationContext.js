import { createContext, useState, useEffect } from "react"

const LocationContext = createContext()

const LocationProvider = ({ children }) => {
    const [countryCode, setCountryCode] = useState({})

    useEffect(() => {
       const getLocation =  async () => {
            const response = await fetch('https://ipapi.co/json/')
            const data = await response.json()
            const { country_code } = data
            setCountryCode(country_code)
        }
        getLocation()
    }, []) 

    return (
        <LocationContext.Provider value={{countryCode, setCountryCode }}>
            {children}
        </LocationContext.Provider>
    )
}

export { LocationContext, LocationProvider }