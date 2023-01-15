import Link from 'next/link';
import ArtIcon from '../../Assets/art.svg';
import ChangeTheme from '../ChangeTheme';
import * as Styled from './styles';

export default function Header() {
  return (
    <Styled.Header>
      <Styled.Content>
        <Link href="/">
          <ArtIcon arial-label="Arts Of The Wold"/>
        </Link>
        <div>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/arts/page/1">Artes</Link>
            <Link href="/about">About</Link>
          </nav>
          <ChangeTheme/>
        </div>
      </Styled.Content>
    </Styled.Header>
  )
}
