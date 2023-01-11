import Link from 'next/link'
import React,{useContext} from 'react'
import { Container, Header, Navigation, SwitchButton } from './styles'
import {FiMoon, FiSun} from 'react-icons/fi'
import { ThemeContext } from '../../Context/ThemeStore'

export const HeaderComponent = () => {
  const { theme, switchTheme } = useContext(ThemeContext);
  return (
    <Header>
       <Container>
       <h3>Logo</h3>

       <Navigation>
           <ul>
               <li><Link href='/'>Coins</Link></li>
               <li><Link href='/'>Exchange</Link></li>
               <li><Link href='/'>Derivatives</Link></li>
               <li><Link href='/'>Nfts</Link></li>
           </ul>
       </Navigation>

       <SwitchButton>
       {theme === "dark" ? (
         <FiMoon size={32} onClick={() => switchTheme("light")} />
       ) : (
         <FiSun size={32} onClick={() => switchTheme("dark")} />
       )}
       </SwitchButton>
       </Container>
    </Header>
  )
}
