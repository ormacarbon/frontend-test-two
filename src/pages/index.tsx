import * as S from './home.styles'

import { Filters } from 'components/Filters'
import { Header } from 'components/Header'
import { MovieCard } from 'components/MovieCard'

export default function Home() {
  return (
    <S.Container>
      <Header />
      <Filters />

      <S.CardContainer>
        <MovieCard />
      </S.CardContainer>
    </S.Container>
  )
}
