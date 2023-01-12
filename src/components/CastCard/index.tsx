import * as S from './styles'

import { tmdbImage } from 'constants/url'

interface CastCardProps {
  name: string
  profileImage: string
  character: string
}

export function CastCard({ name, profileImage, character }: CastCardProps) {
  return (
    <S.Container>
      <S.ImageContainer>
        <img src={tmdbImage(profileImage, 185)} alt="Imagem do ator" />
      </S.ImageContainer>

      <S.Name>
        <p>{name}</p>

        <S.Character>{character}</S.Character>
      </S.Name>
    </S.Container>
  )
}
