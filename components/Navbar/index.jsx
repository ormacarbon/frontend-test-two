import { NavbarContainer, NavLinks, NavLink, Logo } from './styles'
import { IoCalculator } from 'react-icons/io5'
import { BiStats } from 'react-icons/bi'
import { CgDarkMode } from 'react-icons/cg'
import { HStack } from "../../shared/styles/sharedStyles"
import { Baumans } from "@next/font/google"
import isActive from '../../shared/utils/isActive'

const baumans = Baumans({ subsets: ['latin'], weight: ['400'] })

const Navbar = ({ toggleThemeCallback }) => {
    return (
        <NavbarContainer>
            <NavLink href="/" active={isActive("/")}>
                <Logo className={baumans.className} translate={false}> estimator </Logo>
            </NavLink>
            <NavLinks>
                <HStack width="200px" widthMobile="100px" align="center">
                    <NavLink href="/estimate" active={isActive("estimate")}> <IoCalculator /> <span> estimate </span> </NavLink>
                    <NavLink href="/stats" active={isActive("stats")}> <BiStats /> <span>stats</span> </NavLink>
                    <div onClick={toggleThemeCallback}>
                        <CgDarkMode size={30} />
                    </div>
                </HStack>
            </NavLinks>
        </NavbarContainer>
    )
}

export default Navbar