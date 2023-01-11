import Image from 'next/image'
import * as S from './styles'

export function MovieCard() {
  return (
    <S.Container>
      <Image
        src="/img/image.png"
        alt="Imagem de um filme"
        width={156}
        height={232}
      />

      <S.Content>
        <S.Title>Oi, Alberto</S.Title>
        <S.Date>12 NOV 2021</S.Date>
      </S.Content>
    </S.Container>
  )
}
