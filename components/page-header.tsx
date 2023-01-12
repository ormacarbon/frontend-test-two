import styled from "styled-components";
import React, { useState } from 'react';
import { Header, HeaderLi, HeaderLogo, HeaderUl, HeaderLogoContainer, HeaderLogoText } from '../styles/header'
import Link from 'next/link';
import MovieSearchInput from './movie-search-input';

const PageHeader = () => {

  return (
    <Header>
      <Link href={'/'}>
        <HeaderLogoContainer>
          <HeaderLogo src='/movie-roll.png' />
          <HeaderLogoText>MovieRoll</HeaderLogoText>
        </HeaderLogoContainer>
      </Link>
      <HeaderUl>
        <Link href={'/'}>
          <HeaderLi>Home</HeaderLi>
        </Link>
        <Link href={'/popular'}>
          <HeaderLi>Filmes populares</HeaderLi>
        </Link>
        <Link href={'/in-theater'}>
          <HeaderLi>Filmes em cartaz</HeaderLi>
        </Link>
      </HeaderUl>
      <MovieSearchInput />
    </Header>
  )
}

export default PageHeader;
