import Link from "next/link";
import { Avatar, AvatarContainer, AvatarImage, AvatarInfo, ButtonLogout, HeaderContainer, LogoContainer, LogoText, NavBar, ToggleMobileContainer, ToggleMobileMenu, UserInfo, UserName, UserNickName } from "./styles";
import {FaSignOutAlt, FaBars, FaTimes} from 'react-icons/fa'
import { useState } from "react";
import MobileMenu from "../MobileMenu";
import { signOut, useSession } from "next-auth/react";
import Router from "next/router";
export default function Header({ currentPage }){
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
    const {data:session, status} = useSession()
    
    if(!session || status === "unauthenticated"){
        Router.push("/")
        return
    }

    const {user} = session


    function handleMobileMenu(){
        setMobileMenuIsOpen( prevState => !prevState)
    } 


    return (
        <HeaderContainer>
            <MobileMenu isOpen={mobileMenuIsOpen} currentPage={currentPage}/>
            <NavBar>
                <LogoContainer>
                    <Link legacyBehavior passHref href="/">
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
                            <AvatarImage src={user.image}/>
                        </Link>
                    </Avatar>
                    <UserInfo>
                        <UserName>{user.name.split(" ").slice(0,2).join(" ")}</UserName>
                        <UserNickName>{user.email}</UserNickName>
                    </UserInfo>
                    
                    <ButtonLogout onClick={ () => signOut()}>
                        <FaSignOutAlt/>
                    </ButtonLogout>
                    
                </AvatarContainer>
            </NavBar>
        </HeaderContainer>
    )
}