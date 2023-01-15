////// LUCAS CALABRIA - TESTE ORMA-CARBON - FRONTEND 
import { GlobalStyles, Container } from '../styles/GlobalStyles'
import { MainContainer } from '../components/MainContainer'

import axios from 'axios'
import { useEffect, useState } from 'react'

import { Globalcontext } from '../context/GlobalContext'

function MyApp({ Component, pageProps }) {

  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [persons, setPersons] = useState([])
  const [darkMode, setDarkMode] = useState(true)

  const [searchMovies, setSearchMovies] = useState("")
  const [searchSeries, setSearchSeries] = useState("")
  const [searchPersons, setSearchPersons] = useState("")

  //movies requisition
  const getMoviesData = () => {
    const MoviesAux = [... new Set(movies)]
    const idMovies = [76600, 436270, 238, 361743, 634649, 718930, 414906, 27205, 598, 157336, 299534, 16869, 11324, 475557, 603, 337404, 550, 106646, 24, 546554]

    for (let id of idMovies) {
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b49965bfa5c392b42cbfd61d9a586d18`)
        .then((resp) => {
          MoviesAux.push(resp.data)
          setMovies(MoviesAux)
        })
        .catch((erro) => {
          console.log(erro)
        })
    }
  }

  //series requisition
  const getSeriesData = () => {
    const SeriesAux = [... new Set(series)]
    const idSeries = [119051, 1402, 60574, 1399, 94997, 1396, 44217, 66732, 1668, 76479, 2288, 83867, 92749, 60708, 71446, 84958, 1405, 82856, 19885, 110492]

    for (let id of idSeries) {
      axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=b49965bfa5c392b42cbfd61d9a586d18`)
        .then((resp) => {
          SeriesAux.push(resp.data)
          setSeries(SeriesAux)
        })
        .catch((erro) => {
          console.log(erro)
        })
    }
  }

  //Persons requisition
  const getPersonsData = () => {
    const PersonsAux = [... new Set(persons)]
    const idPersons = [2524, 1136406, 31, 1356210, 2037, 1253360, 8784, 3896, 65731, 10859, 6193, 73457, 2231, 52583, 22226, 73968, 5292, 18897, 524, 974169]

    for (let id of idPersons) {
      axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=b49965bfa5c392b42cbfd61d9a586d18`)
        .then((resp) => {
          PersonsAux.push(resp.data)
          setPersons(PersonsAux)
        })
        .catch((erro) => {
          console.log(erro)
        })
    }
  }

  useEffect(() => {
    getMoviesData()
    getSeriesData()
    getPersonsData()
  }, []);

  const context = {
    movies,
    series,
    persons,
    searchMovies,
    setSearchMovies,
    searchSeries,
    setSearchSeries,
    searchPersons,
    setSearchPersons,
    darkMode,
    setDarkMode
  }

  return (
    <>
      <GlobalStyles />

      <Container darkMode={darkMode}>
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
