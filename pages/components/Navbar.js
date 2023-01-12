import Link from 'next/link';
import Image from 'next/image';

import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.2em;
  margin-bottom: 2em;
  background-color: #333;
  color: #fff;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Ul = styled.ul`
    display: flex;
    list-style: none;
`
const Li = styled.li`
    margin-right: 1.3em;
`
const aa = styled.a``;
const A = styled(aa)`
    color: #fff;
    cursor: pointer;
    padding: 5px;
    font-weight: bold;
`


  
export default function Navbar() {
  return (
    <Container>
      <Logo>
        <Image
          src='/images/pokemon.png'
          width='80'
          height='40'
          alt='Pokémon-logo'
        />
      </Logo>
      <Ul>
        <Li>
          <Link href='/' legacyBehavior>
            <A>Home</A>
          </Link>
        </Li>
        <Li>
          <Link href='/about' legacyBehavior>
            <A>About</A>
          </Link>
        </Li>
      </Ul>
    </Container>
  );
}
