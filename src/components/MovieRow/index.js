/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

import TMDB from '../../services/tmdb';

import {
  MovieRowContainer,
  MovieRowArrowLeft,
  MovieRowArrowRight,
  MovieArrowListArea,
  MovieRowList,
  MovieRowTitle,
  MovieRowIten
} from './styled';

import { useDarkModeContext } from '../../contexts/DarkMode';
import Link from 'next/link';

export const MovieRow = ({ title, itens, slug }) => {
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
    <>
      <Link href={slug} passHref>
        <MovieRowTitle
          darkMode={darkMode}
          className={`${slug === 'originals' ? 'changeOnDark' : ''}`}
        >
          {title}
          <span>Ver tudo</span>
          <ArrowRight />
        </MovieRowTitle>
      </Link>
      <MovieRowContainer className={`movieRow `} darkMode={darkMode}>
        <MovieRowArrowLeft className="movieRow--left" onClick={handleLeftArrow}>
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
            {/* {title !== 'Originais do Netflix' &&
              
            } */}
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
  );
};
