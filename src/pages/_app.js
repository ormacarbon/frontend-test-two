import { darkTheme, GlobalStyles, lightTheme } from "../styles/ThemeConfig";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalContext } from "../contexts/GlobalContext";
import api from "../utils/services/api";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [creators, setCreators] = useState([]);
  const [pagesNumber, setPagesNumber] = useState();
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    fetchCharacters(count), fetchComics(count), fetchCreators(count)
  }, [count]);

  useEffect(() => {
    changingPage(count)
  }, [count]);
  
  const fetchCharacters = async (n) => {
    try {
      const response = await api.get(
        `/v1/public/characters?limit=15&offset=${n}`
      );
      setCharacters(response.data.data.results);
      
      setPagesNumber(response.data.data.total);
    } catch (error) {
      console.log(error);
    }
  };


  const fetchComics = async (n) => {
    try {
      const response = await api.get(
        `/v1/public/comics?limit=15&offset=${n}`
      );
      setComics(response.data.data.results);
      setPagesNumber(response.data.data.total);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCreators = async (n) => {
    try {
      const response = await api.get(
        `/v1/public/creators?limit=15&offset=${n}`
      );
      setCreators(response.data.data.results);
      console.log(response)
      setPagesNumber(response.data.data.total);
    } catch (error) {
      console.log(error);
    }
  };
  
  const changingPage = (i) => {
      if (i !== pagesNumber) {
        fetchCharacters(i * 15);
        fetchComics(i * 15)
      } else if (i !== 1) {
          fetchCharacters(i * 15);
          fetchComics(i * 15)
        } else {
      console.log("Undefined value.");
    }
  }

  const context = { characters, toggleTheme, pagesNumber, count, setCount, comics, search, setSearch, creators };

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalContext.Provider value={context}>
        <Component {...pageProps} />
        <GlobalStyles />
      </GlobalContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
