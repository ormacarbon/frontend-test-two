import { GlobalStyles, Container } from '../styles/GlobalStyles'
import { MainContainer } from '../components/MainContainer'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Globalcontext } from '../context/GlobalContext'


function MyApp({ Component, pageProps }) {

  const [movies, setMovies] = useState([])

  const getData = () => {
    const MoviesAux = [... new Set(movies)]
    const idMovies = [76600, 436270, 505642, 361743, 634649, 718930, 414906, 324857, 598, 157336, 299534, 16869, 11324, 475557, 12445, 337404, 550, 106646, 24, 546554]

    for (let id of idMovies) {
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b49965bfa5c392b42cbfd61d9a586d18`)
        .then((resp) => {
          console.log(resp.data)
          MoviesAux.push(resp.data)
          setMovies(MoviesAux)
        })
        .catch((erro) => {
          console.log(erro)
        })
    }
  }

  useEffect(() => {
    getData()
  }, []);

  const context = {
    movies
  }

  return (
    <>
      <GlobalStyles />

      <Container>
        <Globalcontext.Provider value={context}>
          <MainContainer>
            <Component {...pageProps} />
          </MainContainer>
        </Globalcontext.Provider>
      </Container>
    </>
  )
}

export default MyApp
