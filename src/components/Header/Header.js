import React from 'react'
import { DivImage, HeaderMain, HeaderNav, PModified } from './styles'
import marvelLogo from '../../public/images/icons8-marvel.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'
const Header = () => {
  const router = useRouter()
  return (
    <HeaderMain>
      <DivImage>
        <Image src={marvelLogo} alt='Marvel Logo' width={'400'} height={'100'} />
      </DivImage>
        <HeaderNav>
          <PModified onClick={() => router.push('/')}>Characters</PModified>
          <PModified onClick={() => router.push('/comicsPage')}>Comics</PModified>
          <PModified onClick={() => router.push('/creatorsPage')}>Creators</PModified>
        </HeaderNav>
    </HeaderMain>
  )
}

export default Header