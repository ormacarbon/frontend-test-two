import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { BASE_URL_CH, BASE_URL_EP, BASE_URL_LO } from "../constants/url";
import { GlobalContext } from "../contexts/GlobalContext";
import { darkTheme, GlobalStyles, lightTheme } from "../styles/ThemeConfig";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(BASE_URL_CH);
  const [currentPageUrlLocation, setCurrentPageUrlLocation] = useState(BASE_URL_LO);
  const [currentPageUrlEpisode, setCurrentPageUrlEpisode] = useState(BASE_URL_EP);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [nextPageUrlLo, setNextPageUrlLo] = useState();
  const [nextPageUrlEp, setNextPageUrlEp] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [prevPageUrlEp, setPrevPageUrlEp] = useState();
  const [prevPageUrlLo, setPrevPageUrlLo] = useState();
  const [pages, setPages] = useState();
  const [pagesLocation, setPagesLocation] = useState();
  const [pagesEpisode, setPagesEpisode] = useState();

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    getCharacters();
  }, [currentPageUrl]);

  const getCharacters = () => {
    axios
      .get(currentPageUrl)
      .then((resp) => {
        setCharacters(resp.data.results);
        setNextPageUrl(resp.data.info.next);
        setPrevPageUrl(resp.data.info.prev);
        setPages(resp.data.info.pages);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getLocations();
  }, [currentPageUrlLocation]);

  const getLocations = () => {
    axios
      .get(currentPageUrlLocation)
      .then((resp) => {
        setLocations(resp.data.results);
        setNextPageUrlLo(resp.data.info.next);
        setPrevPageUrlLo(resp.data.info.prev);
        setPagesLocation(resp.data.info.pages);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getEpisodes();
  }, [currentPageUrlEpisode]);

  const getEpisodes = () => {
    axios
      .get(currentPageUrlEpisode)
      .then((resp) => {
        setEpisodes(resp.data.results);
        setNextPageUrlEp(resp.data.info.next);
        setPrevPageUrlEp(resp.data.info.prev);
        setPagesEpisode(resp.data.info.pages);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const context = {
    characters,
    locations,
    nextPageUrl,
    prevPageUrl,
    nextPageUrlEp,
    prevPageUrlEp,
    nextPageUrlLo,
    prevPageUrlLo,
    setCurrentPageUrl,
    setCurrentPageUrlLocation,
    pages,
    toggleTheme,
    pagesLocation,
    pagesEpisode,
    setCurrentPageUrlEpisode,
    episodes,
  };

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalContext.Provider value={context}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
