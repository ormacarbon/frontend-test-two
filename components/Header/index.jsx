import Head from 'next/head';
import { useRouter } from 'next/router';
import * as S from './styles'

export default function Header({ title }) {
  const { pathname } = useRouter()
  
  return (
    <div>
      <Head >
        <title>
          {title}
        </title>
      </Head>
      <S.HeaderDiv>
        <h1>
          {title}
        </h1>
        <S.LinksDiv>
          <S.LinkText href={'/'}>Home</S.LinkText>
          { pathname !== '/favorites' && <S.LinkText href={'/favorites'}>Favorites</S.LinkText>}
        </S.LinksDiv>
      </S.HeaderDiv>
    </div>

  )
}