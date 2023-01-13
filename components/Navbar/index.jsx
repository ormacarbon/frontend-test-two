import { NavbarContainer, NavLinks, NavLink, Logo } from './styles'
import { IoCalculator } from 'react-icons/io5'
import { BiStats } from 'react-icons/bi'
import { CgDarkMode } from 'react-icons/cg'
import { HStack } from "../../shared/styles/sharedStyles"
import isActive from '../../shared/utils/isActive'
import logo from '../../shared/assets/logo.svg'

const Navbar = ({toggleThemeCallback}) => { 
    return (
        <NavbarContainer>
            <NavLink href="/" active={isActive("/")}> 
                <Logo src={logo} alt="logo" active={isActive("/")} />
            </NavLink>
            <NavLinks>
                <HStack width="200px" widthMobile="100px" justify="center">
                <NavLink href="/estimate" active={isActive("estimate")}> <IoCalculator /> estimate </NavLink>
                <NavLink href="/stats" active={isActive("stats")}> <BiStats /> stats </NavLink>
                </HStack>
                <div onClick={toggleThemeCallback}>
                    <CgDarkMode />
                </div>
            </NavLinks>
        </NavbarContainer>
    )
}

export default Navbar