import * as Styled from './styled';

export type MovieProps = {
  src: string
  title: string
  release_date: string
  vote_average: number
};

export function Movie({
  src,
  title,
  release_date,
  vote_average,
}: MovieProps): JSX.Element {

  return (
    <Styled.Container>
      <Styled.MovieInfo>
        <img src={src} alt="movie image" />
        <Styled.TextSection>
          <p>{title}</p>
          <p>Lançado em: {release_date}</p>
        </Styled.TextSection>
      </Styled.MovieInfo>
      <p>Nota do Público: {vote_average}</p>
    </Styled.Container>
  );
}
