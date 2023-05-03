import React, { createContext, useContext, useState } from 'react'

type NavbarContextType = {
  username: string;
}

const NavbarContext = createContext<NavbarContextType>({
  username: ''
})

type NavbarContextProviderProps = {
  children: React.ReactNode;
}

export const NavbarContextProvider = ({ children }: NavbarContextProviderProps) => {
  const [username, setUsername] = useState('')

  const value = {
    username,
    setUsername
  }

  return <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
}

export const useNavbarContext = () => useContext(NavbarContext)
