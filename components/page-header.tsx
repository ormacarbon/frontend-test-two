import styled from "styled-components";
import React, { useState } from 'react';
import { Header, HeaderLi, HeaderLogo, HeaderUl, HeaderLogoContainer, HeaderLogoText } from '../styles/header'
import Link from 'next/link';

const PageHeader = ({ searchValue, setSearchValue }) => {

  return (
    <Header>
      <HeaderLogoContainer>
        <HeaderLogo src='/movie-roll.png' />
        <HeaderLogoText>MovieRoll</HeaderLogoText>
      </HeaderLogoContainer>
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
    </Header>
  )
}

export default PageHeader;
