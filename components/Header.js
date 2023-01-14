import {HeaderContainer, HeaderLogo, ToolBar, Li, ToolBarItems, A, Input} from '../styles/HeaderStyles'

import Link from 'next/link'
import Image from 'next/image'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderLogo>
                <Image src='/images/netflix.svg' width="60" height="80" alt='logo' />
            </HeaderLogo>
 
            <ToolBar>
                <ToolBarItems>
                    <Link href='/' ><Li><A>Home/Movies</A></Li></Link>
                    <Link href='/Series' ><Li><A>Series</A></Li></Link>
                    <Link href='/Persons' ><Li><A>Actors</A></Li></Link>
                    <Input placeholder='Search' />
                </ToolBarItems>
            </ToolBar>
        </HeaderContainer>
    )
}