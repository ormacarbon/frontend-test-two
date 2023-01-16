import { Button } from '@components/buttons/addItem';
import Link from 'next/link';
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

  return (
    <Styled.Container>
      <Styled.MovieInfo>
        <Link href={{
          pathname: `/bm-play/movie/${movieId}`,
        }} >
          <img src={src} alt="movie image" />
          <Styled.TextSection>
            <p>{title}</p>
            <p>Lançado em: {release_date}</p>
          </Styled.TextSection>
        </Link>
      </Styled.MovieInfo>
      <p>Nota do Público: {vote_average}</p>
      <Button
        textButton='Adicionar aos Favoritos'
        actionOnClick={actionOnClick} 
      />
    </Styled.Container>
  );
}
