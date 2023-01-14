import { HeaderContainer, HeaderLogo, ToolBar, Li, ToolBarItems, A, Input, SwitchButton } from '../styles/HeaderStyles'

import { useContext } from 'react'
import { Globalcontext } from '../context/GlobalContext'


import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export function Header() {


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

    const handleSearchActors = (e) => {
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
                        <Link href='/' ><Li><A darkMode={darkMode} >Home/Movies</A></Li></Link>
                        <Link href='/Series' ><Li><A>Series</A></Li></Link>
                        <Link href='/Persons' ><Li ><A>Actors</A></Li></Link>
                        {location.pathname === '/' ? <Input placeholder='Search' value={searchMovies} onChange={handleSearchMovies} /> : <></>}
                        {location.pathname === '/Series' ? <Input placeholder='Search' value={searchSeries} onChange={handleSearchSeries} /> : <></>}
                        {location.pathname === '/Persons' ? <Input placeholder='Search' value={searchPersons} onChange={handleSearchActors} /> : <></>}

                        <SwitchButton onClick={switchDarkMode} >{darkMode ? 'DarkMode' : 'LightMode'}</SwitchButton>
                    </ToolBarItems>
                </ToolBar>
            </HeaderContainer>

            <HeaderLogo>
                <Image src='/images/netflix.svg' width='80' height='32' />
            </HeaderLogo>
        </>
    )
}