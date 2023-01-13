import {HeaderContainer, HeaderLogo, ToolBar, Li, ToolBarItems, A, ButtonHeader} from '../styles/HeaderStyles'

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
                    <Link href='/' ><Li><A>Home</A></Li></Link>
                    <Link href='/Movies' ><Li><A>Movies</A></Li></Link>
                    <Link href='/Series' ><Li><A>Series</A></Li></Link>
                    <Link href='/Animations' ><Li><A>Animations</A></Li></Link>
                    <Link href='/CreateAccount' ><Li><ButtonHeader>create account!</ButtonHeader></Li></Link>
                </ToolBarItems>
            </ToolBar>
        </HeaderContainer>
    )
}