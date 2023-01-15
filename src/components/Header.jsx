import styled from 'styled-components';
import Head from 'next/head';

const HeaderStyles = styled.div`

  background: rgba(0 , 0, 0, 0.6);
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
    color: var(--gray-200);
    text-decoration:none;
  }

  li a:hover {
    color: var(--white);
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

  .header-no-bg {
    background: var(--gray-500);
    transition: 350ms ease-in-out;
  }

  @media only screen and (max-width: 768px) {

    display: none;

    li {
      line-height: 0.625rem;
    }

  }

`

export function Header() {
  
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
        <nav id="top-navbar-1">
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Recent</a>
              </li>
              <li>
                <a href=""><span>Andrek Titanium</span></a>
              </li>
              <li>
                <a href="">Favorites</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
        </nav>
      </HeaderStyles>
      </header>
    </>  
  )
}