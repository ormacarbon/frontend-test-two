import * as S from './styles'

import Image from 'next/image'

import { MovieCardProps } from 'interfaces/props'

export function MovieCard({ title, date, poster }: MovieCardProps) {
  return (
    <S.Container>
      <Image src={poster} alt="Imagem de um filme" width={156} height={232} />

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Date>{date}</S.Date>
      </S.Content>
    </S.Container>
  )
}
