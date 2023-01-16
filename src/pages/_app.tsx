import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MoviesProvider } from '@contexts/moviesContext';
import { ListProvider } from '@contexts/favoritesList';
import { getGenres } from '@utils/tmdb';

import { Header } from '@components/header';
import { NavBar } from '@components/navBar';

import { theme } from '@styles/theme';
import { GlobalStyles } from '@styles/global-styles';

type Genres = {
  id: number
  name: string
}[]

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const [genres, setGenres] = useState<Genres>([])

  useEffect(() => {
    const genres = async () => {
      try {
        const { genres } = await getGenres({ endPoint: '/genre/movie/list?' })

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
    <ListProvider>
      <MoviesProvider>
        <ThemeProvider theme={theme}>
          <Header
            isDarkTheme={isDarkTheme}
            setIsDarkTheme={setIsDarkTheme}
          />
          {genres.length && <NavBar genres={genres} />}
          <Component {...pageProps} />
          <GlobalStyles isDarkTheme={isDarkTheme} />
        </ThemeProvider>
      </MoviesProvider>
      <ToastContainer />
    </ListProvider>
  );
}

export default MyApp;
