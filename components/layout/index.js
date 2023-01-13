import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import NavBar from '../NavBar'
import { useRouter } from 'next/router'

function Layout({ children }) {
  const router = useRouter()
  const [title, setTitle] = useState(router.pathname)

  useEffect(() => {
    setTitle(router.pathname.replace('/','') || 'overview')
  }, [router.pathname])

  return(
    <Container>
      <NavBar />
      <main>
        <header className='header'>
          {title === 'overview' && <h2>hi Pokémon trainer,</h2>}
          <h1>{title}</h1>
        </header>
        {children}
      </main>
    </Container>
  )
}
export default Layout;