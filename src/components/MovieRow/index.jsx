/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CaretLeft, CaretRight } from 'phosphor-react';

import {
  MovieRowContainer,
  MovieRowArrowLeft,
  MovieRowArrowRight,
  MovieArrowListArea,
  MovieRowList,
  MovieRowTitle,
  MovieRowIten,
  TitleContainer,
  MovieRowPagination
} from './styled';

import { useDarkModeContext } from '../../contexts/DarkMode';

import loading from '/public/assets/netflix-loading.gif';
import Image from 'next/image';

export const MovieRow = ({
  title,
  itens,
  slug,
  type,
  pagination,
  paginationAdd,
  paginationRemove,
  page
}) => {
  const [scrollX, setScrollX] = useState(0);

  const { darkMode } = useDarkModeContext();

  function handleLeftArrow() {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  function handleRightArrow() {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = itens.results.length * 150;
    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 260;
    }
    setScrollX(x);
  }

  function handlePaginationRemove() {
    setScrollX(0);
    paginationRemove();
  }

  function handlePaginationAdd() {
    setScrollX(0);
    paginationAdd();
  }

  return (
    <div>
      {itens && (
        <div>
          <TitleContainer>
            <Link
              href={
                type === 'movies' ? '/movies' : type ? `${type}/${slug}` : slug
              }
              passHref
            >
              <MovieRowTitle darkMode={darkMode}>
                <strong>{title}</strong>
                <span>
                  Ver tudo
                  <ArrowRight />
                </span>
              </MovieRowTitle>
            </Link>
            {pagination && (
              <MovieRowPagination darkMode={darkMode}>
                <button onClick={handlePaginationRemove}>
                  <CaretLeft />
                </button>
                <span>{page}</span>
                <button onClick={handlePaginationAdd}>
                  <CaretRight />
                </button>
              </MovieRowPagination>
            )}
          </TitleContainer>
          <MovieRowContainer className={`movieRow `} darkMode={darkMode}>
            <MovieRowArrowLeft
              className="movieRow--left"
              onClick={handleLeftArrow}
            >
              <ArrowLeft />
            </MovieRowArrowLeft>
            <MovieRowArrowRight
              className="movieRow--right"
              onClick={handleRightArrow}
            >
              <ArrowRight />
            </MovieRowArrowRight>
            <MovieArrowListArea className="movieRow--listArea">
              <MovieRowList
                className="movieRow--list"
                style={{
                  marginLeft: scrollX,
                  width: `${itens.results.length * 15}rem`
                }}
              >
                {itens.results &&
                  itens.results.map((iten, index) => (
                    <div key={index}>
                      {iten.poster_path ? (
                        <MovieRowIten
                          href={
                            slug === 'series'
                              ? `/series/${iten.id}`
                              : type === 'movies'
                              ? `/movies/${iten.id}`
                              : iten.media_type
                              ? `/trendings/${iten.media_type}/${iten.id}`
                              : title !== 'Originais do Netflix'
                              ? `${slug}/movie/${iten.id}`
                              : `/originals/${iten.id}`
                          }
                          className="movieRow--iten"
                        >
                          <img
                            src={`https://image.tmdb.org/t/p/w300${iten.poster_path}`}
                            alt={iten.name}
                          />
                        </MovieRowIten>
                      ) : (
                        <MovieRowIten
                          href={''}
                          key={index}
                          className="movieRow--iten"
                        >
                          <div>
                            <span>
                              {iten.name}
                              <small>(Em breve)</small>
                            </span>
                            <Image
                              className="loading"
                              src={loading}
                              alt={iten.name}
                            />
                          </div>
                        </MovieRowIten>
                      )}
                    </div>
                  ))}
              </MovieRowList>
            </MovieArrowListArea>
          </MovieRowContainer>
        </div>
      )}
    </div>
  );
};
