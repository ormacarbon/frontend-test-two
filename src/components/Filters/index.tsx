import * as S from './styles'

export function Filters() {
  return (
    <S.Container>
      <S.Content>
        <S.Title>
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </S.Title>
      </S.Content>

      <S.FilterContainer>
        <S.FilterBy>
          <S.FilterByText>FILTRE POR:</S.FilterByText>
        </S.FilterBy>

        <S.ButtonContainer>
          <S.Button>Ação</S.Button>
        </S.ButtonContainer>
      </S.FilterContainer>
    </S.Container>
  )
}
