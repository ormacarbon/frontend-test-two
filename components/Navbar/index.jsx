import Link from "next/link";
import Image from "next/image";
import Switch from "react-switch"

import { Header } from "./style";
import logo from "../../assets/Logo.svg"
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { MainContext } from "../../contexts/MainContext";

const Navbar = ({ backgroundColor }) => {
    const {colors, title } = useContext(ThemeContext);
    const { toogleTheme } = useContext(MainContext);

    return(
        <Header backgroundColor={backgroundColor} >
            <div>
                <figure>
                    <Image
                        src={logo}
                        alt="Logo"
                        width="350px"
                        height="300px"
                    />
                </figure>
                <nav>
                    <ul>
                        <Link href="/">
                            <li>Home</li>
                        </Link>
                        <Link href="/about">
                            <li>About</li>
                        </Link>
                        <li>
                            <Switch  
                                onChange={toogleTheme}
                                checked={title == 'dark'}
                                checkedIcon={false}
                                uncheckedIcon={false}
                                height={10}
                                width={40}
                                handleDiameter={20}
                                offColor={colors.textColorWhite}
                                onColor={colors.textColorSecondary}
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </Header>
    )
}

export default Navbar;