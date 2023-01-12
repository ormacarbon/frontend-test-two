//? Styled Components
import { TopNavbar, Logo, List, ListItem } from './style'
//? Next Dependences
import Link from 'next/link'
import Image from 'next/image'

import Switch from 'react-switch'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

export default function Navbar({ onChangeTheme }) {

    const { name, colors } = useContext(ThemeContext)

    return (

        <TopNavbar>
            <Logo>
                <h3>Rick and Morty API NEXT.JS</h3>
            </Logo>
            

            <List>
                <ListItem><Link href='/'>Home</Link></ListItem>
                <ListItem><Link href='/characters'>Characters</Link></ListItem>
                <ListItem><Link href='/about'>About</Link></ListItem>
            </List>

            <Switch 
                onChange={onChangeTheme}
                checked={name === 'light'}
                height={20}
                width={40}
                checkedIcon={false}
                uncheckedIcon={false}
                handleDiameter={20}
                offColor={colors.secondary}
                onColor={colors.secondary}  
            />
        </TopNavbar>

    )

}