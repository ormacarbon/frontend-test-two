import { useEffect, useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import Head from 'next/head';

import { useListContext } from '@contexts/favoritesList';
import { MovieData } from './home';

import * as Styled from '@styles/pages/favorites';

export default function Favorites(): JSX.Element {
  const { deleteItem } = useListContext();
  const [itemsById, setItemsById] = useState<MovieData[]>([]);

  useEffect(() => {
    const userItemsList = localStorage.getItem('user@listItems');
    const userItemsListJson: MovieData[] = JSON.parse(userItemsList);

    const listWithConvertedDates: MovieData[] = userItemsListJson.map(movieData => {
      return {
        ...movieData,
        release_date: new Date(movieData.release_date).toLocaleDateString('pt-BR')
      }
    })

    setItemsById(listWithConvertedDates);
  }, []);

  return (
    <>
      <Head>
        <title>BM-PLAY | Favorites</title>
      </Head>
      <Styled.Container hasItemInCartList={!!itemsById.length}>
        <Styled.Table>
          <Styled.TableHead>
            <Styled.TableRow>
              <th />
              <th>Dados do Filme</th>
              <th>Lançado em</th>
            </Styled.TableRow>
          </Styled.TableHead>

          <Styled.TableBody>
            {itemsById.map((movie) => (
              <Styled.TableRow key={movie.id}>
                <Styled.TableData>
                  <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_ENDPOINT}/w500/${movie.poster_path}`}
                    alt="shoes"
                  />
                </Styled.TableData>
                <Styled.TableData>
                  <p>Título: {movie.title}</p>
                  <p>Overview: {movie.overview}</p>
                </Styled.TableData>
                <Styled.TableData>
                  <Styled.SectionSubtotal>
                    <p>{movie.release_date}</p>
                    <AiTwotoneDelete
                      size={25}
                      name="delete-item"
                      fill="#7160C3"
                      onClick={() => deleteItem(movie.id)}
                    />
                  </Styled.SectionSubtotal>
                </Styled.TableData>
              </Styled.TableRow>
            ))}
          </Styled.TableBody>
        </Styled.Table>
      </Styled.Container>
    </>
  );
}
