import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import Burger from './Burger';

 const Container = styled.nav`
 width: 100%;
 height: 65px;
 border-bottom: 2px solid #f1f1f1;
 padding: 0 20px;
 display: flex;
 justify-content: space-between;
 background-color: #000;
 position: fixed;
 z-index: 1;
 `;
 const Logo = styled.div`
 display: fixed;
 margin-top: 10px;
 margin-right: 100px;
 
  a{
    display: flex;
   padding: 1px;
   text-decoration: none;
   color: #ffBB33;
   font-weight: bold;
   font-size: 2rem;
   position: relative;
  }

   @media (max-width: 768px) {
    a{
    
      display: flex;
      top: 0;
      right: 100px;
      position: absolute;
      font-size: 1rem;
      padding: 25px;
    }  

  }
 `;
 const Ul = styled.ul`
   display: flex;
   list-style: none;
   flex-flow: row nowrap;

   li{
    padding: 18px 10px;
  }

   @media(max-width: 768px) {
    display: none;
    flex-flow:column nowrap;
    background-color: #000;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5em;
   }
   li{
    color: #ffbb33;
  }
   a{
    color: #ffbb33;
    text-decoration: none;
  }
 `

export default function Navbar() {
  const [theme, setTheme] = useState("light") 
  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
     <Container>
       <Burger/>
       <Logo><Link href='/'>
    Jikan Lib
         </Link>
       </Logo>
       <button onClick={toggleTheme}>Switch Theme</button>
     </Container>
  );
}
