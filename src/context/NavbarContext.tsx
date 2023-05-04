import React, {
  createContext,
  useContext,
  useState
} from 'react'

type NavbarContextType = {
  username: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const NavbarContext = createContext<NavbarContextType>({
  username: '',
  setUserName: undefined
})

type NavbarContextProviderProps = {
  children: React.ReactNode;
}

export const NavbarContextProvider = ({ children }: NavbarContextProviderProps) => {
  const [username, setUsername] = useState('')

  const value = {
    username,
    setUserName: setUsername
  }

  return <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
}

export const useNavbarContext = () => useContext(NavbarContext)
