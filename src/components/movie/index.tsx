import { Button } from '@components/buttons/addItem';
import { useRouter } from 'next/router';
import * as Styled from './styled';

export type MovieProps = {
  src: string
  title: string
  movieId: string
  release_date: string
  vote_average: number
  actionOnClick: () => void
};

export function Movie({
  src,
  title,
  movieId,
  release_date,
  vote_average,
  actionOnClick
}: MovieProps): JSX.Element {
  const { push } = useRouter()

  return (
    <Styled.Container>
      <Styled.MovieInfo onClick={() => push(`/bm-play/movie/${movieId}`)}>
        <img src={src} alt="movie image" />
        <Styled.TextSection>
          <p>{title}</p>
          <p>Lançado em: {release_date}</p>
        </Styled.TextSection>
      </Styled.MovieInfo>
      <p>Nota do Público: {vote_average}</p>
      <Button
        textButton='Adicionar aos Favoritos'
        actionOnClick={actionOnClick} 
      />
    </Styled.Container>
  );
}
