import Link from "next/link";
import { Avatar, AvatarContainer, AvatarImage, AvatarInfo, ButtonLogout, HeaderContainer, LogoContainer, LogoText, NavBar, ToggleMobileContainer, ToggleMobileMenu, UserInfo, UserName, UserNickName } from "./styles";
import {FaSignOutAlt, FaBars, FaTimes} from 'react-icons/fa'
import { useState } from "react";
import MobileMenu from "../MobileMenu";
export default function Header({ currentPage }){
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

    function handleMobileMenu(){
        setMobileMenuIsOpen( prevState => !prevState)
    } 
    return (
        <HeaderContainer>
            <MobileMenu isOpen={mobileMenuIsOpen} currentPage={currentPage}/>
            <NavBar>
                <LogoContainer>
                    <Link legacyBehavior passHref href="/login">
                        <LogoText>
                            DevKut
                        </LogoText>
                    </Link>
                </LogoContainer>
                <ToggleMobileContainer>
                    <ToggleMobileMenu onClick={handleMobileMenu}>
                        {mobileMenuIsOpen ? (
                            <FaTimes/>
                        ): (
                            <FaBars/>
                        )}
                    </ToggleMobileMenu>
                </ToggleMobileContainer>
                <AvatarContainer>
                    <Avatar>
                        <Link href="/perfil" passHref legacyBehavior>
                            <AvatarImage src={'https://github.com/LuizProject46.png'}/>
                        </Link>
                    </Avatar>
                    <UserInfo>
                        <UserName>Luiz Gustavo</UserName>
                        <UserNickName>@LuizGustavo</UserNickName>
                    </UserInfo>
                    <Link passHref legacyBehavior href="/login">
                        <ButtonLogout>
                            <FaSignOutAlt/>
                        </ButtonLogout>
                    </Link>
                </AvatarContainer>
            </NavBar>
        </HeaderContainer>
    )
}