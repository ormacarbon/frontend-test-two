import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { getData } from '@utils/tmdb';

import { Header } from '@components/header';
import { NavBar } from '@components/navBar';

import { theme } from '@styles/theme';
import { GlobalStyles } from '@styles/global-styles';

type Genres = {
  id: number
  name: string
}[]

type GenresResponse = {
  genres: Genres
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const [genres, setGenres] = useState<Genres>([])

  useEffect(() => {
    const genres = async () => {
      try {
        const { genres }: GenresResponse = await getData({ endPoint: '/genre/movie/list?' })

        const getFourteenGenres = []
        
        genres.forEach((genre, index) => {
          if(index <= 12) getFourteenGenres.push(genre)
        })

        setGenres(getFourteenGenres)
      } catch {
        setGenres([])
      }
    }

    genres()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Header
        isDarkTheme={isDarkTheme}
        setIsDarkTheme={setIsDarkTheme}
      />
      {genres.length && <NavBar genres={genres} />}
      <Component {...pageProps} />
      <GlobalStyles isDarkTheme={isDarkTheme} />
    </ThemeProvider>
  );
}

export default MyApp;
