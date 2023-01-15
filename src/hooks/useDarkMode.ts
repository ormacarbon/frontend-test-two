import { useEffect, useState } from 'react'

export function useDarkMode() {
  const [theme, setTheme] = useState('light')
  const [mountedComponent, setMountedComponent] = useState(false)

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
    setMountedComponent(true)
  }, [mountedComponent])

  return {
    theme,
    themeToggler,
    mountedComponent,
    setTheme,
    setMountedComponent
  }
}
