import styled, { ThemeContext } from 'styled-components';
import { BsList } from 'react-icons/bs';
import { shade } from 'polished';
import Switch from 'react-switch';
import { useContext } from "react";
import useMediaQuery from "../utils/useMediaQuery";
import Link from "next/link";

export default function HeaderApp({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);
  const matches = useMediaQuery(900);
  return (
    <>
      {matches ? (
        <Header>
          <BsList size={25} />
          <Link style={{ textDecoration: 'none', color: 'inherit' }} href={`/`}>
            <h1>AnimeMania</h1>
          </Link>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark' ? true : false}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={shade(0.8, colors.primary)}
            onColor={colors.secundary}
          />
        </Header>
      ) : (<>
        <Header>
          <h1>AnimeMania</h1>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark' ? true : false}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={shade(0.8, colors.primary)}
            onColor={colors.secundary}
          />
        </Header>
      </>)}
    </>
  )
}

const Header = styled.header`
  height: 60px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: ${props => props.theme.colors.primary};

  h1 {
    font-family: 'Jacques Francois', serif;
    text-align: center;
    margin-left: 18px;
  }
`;