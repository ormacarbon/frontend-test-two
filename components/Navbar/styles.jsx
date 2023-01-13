import styled from 'styled-components'
import Link from 'next/link';
import Image from 'next/image'

const NavbarContainer = styled.nav`
    display: flex;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    color: #000000;
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
    justify-content: space-around;
    padding-left: 0;
    list-style: none;
    

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const NavLink = styled(Link)`
    height: 40px;
    margin: 2px;
    font-weight: 700;
    background-color: transparent;
    border-radius: 10px;
    padding: 5px;
    display: flex;
    align-items: center;
    color: ${(props) => props.active ? "#d19a06" : "black"};
    font-weight: ${(props) => props.active  ? "900" : "400"};
    text-decoration: none;

    svg {
        margin: 1px;
        color: ${(props) => props.active ? "#d19a06" : "black"};
    }

    &:hover {
        background-color: #b9b4b421;
        border-radius: 10px;
    }

    @media (max-width: 768px) {
        font-size: 0;
        height: 60px;
        svg{
            width: 20px;
            height: 20px;
        }
    }
`
const Logo = styled(Image)`
    width: 200px;
    height: 40px;
    object-fit: fill;
`

export { NavbarContainer, NavLinks, NavLink, Logo }