import * as S from './styles'

import { tmdbImage } from 'constants/url'

import { CastCardProps } from 'interfaces/types'

export function CastCard({ name, profileImage, character }: CastCardProps) {
  return (
    <S.Container>
      <S.ImageContainer>
        <img src={tmdbImage(profileImage, 185)} alt="Imagem do ator" />
      </S.ImageContainer>

      <S.Name>
        <h2>{name}</h2>

        <S.Character>{character}</S.Character>
      </S.Name>
    </S.Container>
  )
}
