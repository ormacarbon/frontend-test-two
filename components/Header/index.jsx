import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';

import * as S from './styles'

export default function Header({ titleName, handleTheme }) {
  const { pathname } = useRouter();
  const { title, colors } = useContext(ThemeContext);
  console.log(colors);

  return (
    <div>
      <Head >
        <title>
          {titleName}
        </title>
      </Head>
      <S.HeaderDiv>
        <S.H1>
          {titleName}
        </S.H1>
        <S.LinksDiv>
          {pathname !== '/' && <S.LinkText href={'/'}>Home</S.LinkText>}
          {pathname !== '/favorites' && <S.LinkText href={'/favorites'}>Favorites</S.LinkText>}
          <FiMoon color={'white'} />
          <Switch
            onChange={handleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}

          />
          <FiSun color={'white'} />
        </S.LinksDiv>
      </S.HeaderDiv>
    </div>

  )
}