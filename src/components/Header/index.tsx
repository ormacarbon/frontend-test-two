import Image from 'next/image'

import * as S from './styles'

export function Header() {
  return (
    <S.HeaderContainer>
      <Image
        src="/img/logo.svg"
        alt="Imagem centralizada da logo TMDB"
        width={140}
        height={18}
      />
    </S.HeaderContainer>
  )
}
