import styled from 'styled-components';
import Link from "next/link";
import Image from "next/image";
import blackIcon from "../../assets/blackIcon.png"
import whiteIcon from "../../assets/whiteIcon.png"

const NavBarDiv = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background: ${ props => props.theme.background };
  color: ${ props => props.theme.text};
  .header_logo {
    color: ${ props => props.theme.text};
    padding: 0;
    text-decoration: none;
  }
  border-bottom: ${props => props.theme.menuBottomLine};
`;
const LogoHeader = styled.div`
  display: flex;
  align-items: center;
  padding-left: 60px;
  width: 60%;
  height: 100%;
  font-weight: 600;
  font-size: 24px;
`;
const MenuOptions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: end;
  width: 40%;
  height: 100%;
  padding-right: 60px;
  font-weight: 600;
`;
const LinksContainer = styled.ul`
  display: flex;
  flex-direction: row;
  > .menu_link {
    color: ${ props => props.theme.text};
    margin-right: 20px;
    text-decoration: none;
    font-weight: 400;
    :hover {
    text-decoration: underline;
    }
  }
`;
const ThemeIcon = styled.image`
  width: 20px;
  height: 20px;
`;

export const NavBar = ({ setIsDarkTheme, isDarkTheme }) => {
  function toggleTheme () { 
    setIsDarkTheme(isDarkTheme ? false : true);
  }
  return (
    <nav>
      <NavBarDiv>
        <Link href={'/'} className="header_logo">
          <LogoHeader>
            MyBeer
          </LogoHeader>
        </Link>
        <MenuOptions>
          <LinksContainer>
            <Link href={'/beers'} className="menu_link">
              List Of Beers
            </Link>
          </LinksContainer>
          <div onClick={() => toggleTheme()}>
              { isDarkTheme ? 
                  <Image src={whiteIcon} alt='toggle' width={26} height={26} /> 
                : 
                  <Image src={blackIcon} alt='toggle' width={26} height={26} />
              }
          </div>
        </MenuOptions>
      </NavBarDiv>
    </nav>
  )
}