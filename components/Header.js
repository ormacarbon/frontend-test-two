import { HeaderContainer, HeaderLogo, ToolBar, Li, ToolBarItems, A, Input, SwitchButton } from '../styles/HeaderStyles'

import { useContext } from 'react'
import { Globalcontext } from '../context/GlobalContext'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

function Header() {

    const context = useContext(Globalcontext)
    const { searchMovies, setSearchMovies, searchSeries, setSearchSeries,
        searchPersons, setSearchPersons, darkMode, setDarkMode } = context
    const location = useRouter()

    const handleSearchMovies = (e) => {
        setSearchMovies(e.target.value)
    }

    const handleSearchSeries = (e) => {
        setSearchSeries(e.target.value)
    }

    const handleSearchPersons = (e) => {
        setSearchPersons(e.target.value)
    }

    const switchDarkMode = () => {
        setDarkMode(!darkMode)
    }


    return (
        <>
            <HeaderContainer darkMode={darkMode} >
                <ToolBar>
                    <ToolBarItems>
                        <Li><Link href='/'  ><A darkMode={darkMode} >Home/Movies</A></Link></Li>
                        <Li><Link href='/Series'  ><A>Series</A></Link></Li>
                        <Li><Link href='/Persons'  ><A>Actors</A></Link></Li>
                        {location.pathname === '/' ? <Input placeholder='Search' value={searchMovies} onChange={handleSearchMovies} /> : <></>}
                        {location.pathname === '/Series' ? <Input placeholder='Search' value={searchSeries} onChange={handleSearchSeries} /> : <></>}
                        {location.pathname === '/Persons' ? <Input placeholder='Search' value={searchPersons} onChange={handleSearchPersons} /> : <></>}

                        <SwitchButton onClick={switchDarkMode} >{darkMode ? 'DarkMode' : 'LightMode'}</SwitchButton>
                    </ToolBarItems>
                </ToolBar>
            </HeaderContainer>

            <HeaderLogo darkMode={darkMode} >
                <Image src='/images/netflix.svg' width='80' height='32' alt='logo-netflix' />
            </HeaderLogo>
        </>
    )
}

export default Header