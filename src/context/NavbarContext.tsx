import React, { createContext, useContext, useState } from 'react'

type NavbarContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  username: string;
}

const NavbarContext = createContext<NavbarContextType>({
  isDarkMode: false,
  toggleDarkMode: undefined,
  username: ''
})

type NavbarContextProviderProps = {
  children: React.ReactNode;
}

export const NavbarContextProvider = ({ children }: NavbarContextProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [username, setUsername] = useState('Fulano')

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const value = {
    isDarkMode,
    toggleDarkMode,
    username,
    setUsername
  }

  return <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
}

export const useNavbarContext = () => useContext(NavbarContext)
