import styled from "styled-components";

export const NavMenu = styled.nav`
    width: 100%;
    height: 200px;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width:768px){
        margin-top: 4rem;
    }
`

export const NavMenuItem = styled.div`
    width: 70%;
    height: 40px;
    padding: 0.2rem 2rem;
    display: flex;
    align-items: center;
    gap: 1.4rem;
    margin-top: 0.3rem;
`


export const LinkMenu = styled.span`
    font-size: 1rem;
    font-weight: 400;
    color ${props => props.isActive ? props.theme.primary : props.theme.isDark ? props.theme.white : props.theme.black};
`


export const LinkContent = styled.a`
   width: 100%;
   height: 30px;
   padding: 0.5rem 0.6rem;
   display: flex;
   align-items: center;
   gap: 1rem;
   cursor: pointer;
   border-radius: 0.3rem;
   transition: all 200ms ease-in-out;
   text-decoration: none;
   

   &:hover{
        background: ${props => props.theme.hoverMenu};
   }
   
`