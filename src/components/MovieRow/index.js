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

export const MovieRow = ({
  title,
  itens,
  slug,
  pagination,
  paginationAdd,
  paginationRemove,
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

  return (
    <div>
      {itens && (
        <>
          <TitleContainer>
            <Link href={slug} passHref>
              <MovieRowTitle
                darkMode={darkMode}
              >
                <strong>{title}</strong>
                <span>
                  Ver tudo
                  <ArrowRight />
                </span>
              </MovieRowTitle>
            </Link>
            {pagination && (
              <MovieRowPagination darkMode={darkMode}>
                <button onClick={paginationRemove}>
                  <CaretLeft />
                </button>
                <button onClick={paginationAdd}>
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
                    <MovieRowIten
                      href={
                        iten.media_type
                          ? `/trendings/${iten.media_type}/${iten.id}`
                          : title !== 'Originais do Netflix'
                          ? `${slug}/movie/${iten.id}`
                          : `/originals/${iten.id}`
                      }
                      key={index}
                      className="movieRow--iten"
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w300${iten.poster_path}`}
                        alt={iten.name}
                      />
                    </MovieRowIten>
                  ))}
              </MovieRowList>
            </MovieArrowListArea>
          </MovieRowContainer>
        </>
      )}
    </div>
  );
};
