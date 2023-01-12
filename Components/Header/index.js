import Link from 'next/link'
import React,{useContext} from 'react'
import { Container, Header, Navigation, SwitchButton } from './styles'
import {FiMoon, FiSun} from 'react-icons/fi'
import { ThemeContext } from '../../Context/index'

export const HeaderComponent = () => {
  const { theme, switchTheme } = useContext(ThemeContext);
  return (
    <Header>
       <Container>
       <h3>Crypto.me</h3>

       <Navigation>
           <ul>
               <li><Link href='/'>Coins</Link></li>
               <li><Link href='/exchanges'>Exchanges</Link></li>
               <li><Link href='/derivatives'>Derivatives</Link></li>
               <li><Link href='/nfts'>NFTs</Link></li>
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
