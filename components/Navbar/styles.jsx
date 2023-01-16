import styled from 'styled-components'
import Link from 'next/link';

const NavbarContainer = styled.nav`
    display: flex;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
`

const NavLinks = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0;
    list-style: none;
    

`;

const NavLink = styled(Link)`
    height: 40px;
    margin-right: 10px;
    font-weight: 700;
    background-color: transparent;
    border-radius: 10px;
    padding: 5px;
    display: flex;
    align-items: center;
    color: ${(props) => props.active  ? "#d19a06" : "black"};
    font-weight: ${(props) => props.active  ? "900" : "400"};
    text-decoration: none;

    svg {
        margin: 1px;
        color: ${(props) => props.active ? "#d19a06" : "black"};
        width: 30px;
        height: 30px;
    }

    &:hover {
        background-color: #b9b4b421;
        border-radius: 10px;
    }

    @media (max-width: 768px) {
        font-size: 0;
        height: 60px;
    }
`
const Logo = styled.p`
font-size: xx-large;
`

export { NavbarContainer, NavLinks, NavLink, Logo }