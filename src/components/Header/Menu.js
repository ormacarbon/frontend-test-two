import Link from "next/link"
import styled, { ThemeProvider } from "styled-components"
import { themeLightMode } from '../../theme/theme'

export default function Menu() {
   return (
      <ThemeProvider theme={themeLightMode}>
         <StyledMenu>
            <ul className="list">
               <li className="item">
                  <Link href={'/'}>Home</Link>
               </li>
               <li className="item">
                  <Link href={'/saved'}>Saved Recipes</Link>
               </li>
            </ul>
         </StyledMenu>
      </ThemeProvider>
   )
}

const StyledMenu = styled.nav`
   width: 100%;
   .list{
      text-align: center;
   list-style: none;
   display: flex;
   justify-content: center;
   margin-top: 1rem;
   a{
      color: ${(p) => p.theme.colors.secondaryFontColor};
      font-weight: ${p => p.theme.typography.fontWeight.bold};
      margin: 0 0.5rem;
      padding: .3rem;
      transition: 200.ms;
      &:hover{
         color: ${(p) => p.theme.colors.tertiaryColor};
         border-bottom: 1px solid ${(p) => p.theme.colors.tertiaryColor};
      }
   }
 }

`