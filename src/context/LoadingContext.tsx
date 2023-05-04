import React, {
  createContext,
  useState,
  ReactNode
} from 'react'

import Loading from '../components/loading'

type LoadingContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setIsLoading: undefined
})

type Props = {
  children: ReactNode;
};

const LoadingProvider: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      { isLoading && <Loading /> }
      { children }
    </LoadingContext.Provider>
  )
}

export default LoadingProvider
