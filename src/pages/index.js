import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Menu } from "../components/Menu";
import { Header } from '../components/Header';
import { AuthorInfo } from "../components/AuthorInfo";
import { RecentSection } from "../components/RecentSection";
import { FavoriteSection } from "../components/FavoriteSection";
import { Footer } from "../components/Footer";
import { About } from "../components/About";
import Script from "next/script";
import { MenuToggle } from "../components/MenuToggle";
import { ThemeToggle } from "../components/ThemeToggle";
import { lightTheme, darkTheme, GlobalStyles } from "../theme";



export default function Home() {

  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";
  const handleThemeToggle = () => setTheme (isDarkTheme ? "light" : "dark");

  const [navToggled, setNavToggled] = useState(false);
  const handleNavToggle = () => {
    setNavToggled(!navToggled)
  }

  const [aboutToggled, setAboutToggled] = useState(false);
  const handleAboutToggle = () => {
    console.log('tiggke');
    setAboutToggled(!aboutToggled)
  }
  
  const [recentPhotos, setRecentPhotos] = useState();
  const [favPhotos, setFavPhotos] = useState();

  useEffect(() => {
    
    async function fetchRecent() {

      const response = await fetch('https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=82c49e585f83ca27744741c4f5a2d747&user_id=182095888%40N06&extras=url_c%2C+description%2C+date_taken%2C+tags&per_page=300&format=json&nojsoncallback=1');
      const data = await response.json();
      const recentPhotosArray = data.photos
      
      setRecentPhotos(recentPhotosArray)
    }
    fetchRecent();
  
  }, [])

  useEffect(() => {
    
    async function fetchFavorites() {

      const response = await fetch('https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=82c49e585f83ca27744741c4f5a2d747&photoset_id=72177720305229279&extras=url_c%2C+date_taken%2C+description&format=json&nojsoncallback=1');
      const data = await response.json();
      const favPhotosArray = data.photoset
     
      setFavPhotos(favPhotosArray)
    }
    fetchFavorites();
  
  }, [])

    return (
      <>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js" />
          { navToggled ? <Menu handleNavToggle={handleNavToggle} handleAboutToggle={handleAboutToggle}/> : null }
          <Header 
            handleAboutToggle={handleAboutToggle}
          />
          { aboutToggled ? <About handleAboutToggle={handleAboutToggle}/> : null }
          <AuthorInfo />
          <MenuToggle 
            handleNavToggle={handleNavToggle}
            handleAboutToggle={handleAboutToggle}
          />
          <ThemeToggle 
            handleThemeToggle={handleThemeToggle} 
          />
          {recentPhotos !== undefined ? 
            <RecentSection 
              recentPhotos = {recentPhotos}
              theme = {theme}
            /> 
            : ''
          } 
          {favPhotos !== undefined ? 
            <FavoriteSection 
              favPhotos = {favPhotos}
              theme = {theme}
            />
            : ""
          } 
          <Footer />
          <GlobalStyles />
        </ThemeProvider>
      </>
    );

  };
