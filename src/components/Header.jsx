import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';

const HeaderStyles = styled.div`

  background: ${({ theme }) => theme.navbar};
  border-bottom: 1px solid ${({ theme }) => theme.line};
  font-family: 'BigNoodleTitling', sans-serif;
  font-size: 1.35rem;
  font-style: oblique;
  line-height: 3.875rem;
  margin: 0;
  padding: 0;
  position: fixed;
  width: 100%;
  text-align: center;
  z-index: 999;
  
  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0 auto;
    width: 100%;
  };
  
  li {
    min-width: 6rem;
  };
  
  li a {
    color: ${({ theme }) => theme.link};
    text-decoration:none;
  }

  li a:hover {
    color: ${({ theme }) => theme.selected};
    transition: 250ms ease;
  }

  li span {
    font-size: 2rem;
    font-style: normal;
    color: var(--reddark);
    padding: 0 1rem 0 1rem;
  }

  li span:hover {
    color: var(--red);
    transition: 200ms ease;
  }

  p:hover {
    color: var(--reddark);
    cursor: pointer;
  }
  .header-no-bg {
    background: ${({ theme }) => theme.navbarScroll};
    transition: 350ms ease-in;
  }

  @media only screen and (max-width: 768px) {

    display: none;

    li {
      line-height: 0.625rem;
    }

  }

`
const StyledLink = styled(Link)`
    
    color: var(--gray-200);
    cursor: pointer;
    text-decoration:none;

    :hover {
    color: var(--white);
    transition: 250ms ease;
    }

`

export function Header({ handleAboutToggle }) {
  
  return(
    <>
      <Head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/assets/ico/atlogo.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Andrek Titanium</title>
      </Head>
      <header className="header-menu">
      <HeaderStyles>
        <nav id="top-navbar-1" >
            <ul>
              <li>
                <p href="/" onClick={handleAboutToggle}>About</p>
              </li>
              <li>
                <Link href="/#recent">Recent</Link>
              </li>
              <li>
                <Link href="/"><span>Andrek Titanium</span></Link>
              </li>
              <li>
                <Link href="/#favorites">Favorites</Link>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
        </nav>
      </HeaderStyles>
      </header>
    </>  
  )
}