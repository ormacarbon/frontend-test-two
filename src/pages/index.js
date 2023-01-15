import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import RootPage from './root-page'
const inter = Inter({ subsets: ['latin'] })
import Theme from './contexts/contexts'
import { useState } from 'react'

export default function Home() {
  const [theme, setTheme] = useState(true)

  function toggleTheme(){
    setTheme(theme => (theme === true? false: true));
  }
  return (
    <Theme.Provider value={{theme, toggleTheme}}>
      <RootPage/>
    </Theme.Provider>
  )
}
