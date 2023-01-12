/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

import {
  MovieRowContainer,
  MovieRowArrowLeft,
  MovieRowArrowRight,
  MovieArrowListArea,
  MovieRowList
} from './styled';

import { useDarkModeContext } from '../../contexts/DarkMode';

export const MovieRow = ({ title, itens }) => {
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
    <MovieRowContainer className={`movieRow `} darkMode={darkMode}>
      <h2
        className={`${title === 'Originais do Netflix' ? 'changeOnDark' : ''}`}
      >
        {title}
      </h2>
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
          {itens.results &&
            itens.results.map((iten, index) => (
              <div className="movieRow--iten" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${iten.poster_path}`}
                  alt={iten.name}
                />
              </div>
            ))}
        </MovieRowList>
      </MovieArrowListArea>
    </MovieRowContainer>
  );
};
