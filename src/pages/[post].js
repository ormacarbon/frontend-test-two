import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Post } from '../components/Post';
import { ThemeProvider } from 'styled-components';
import { Menu } from '../components/Menu';
import { About } from '../components/About';
import Script from "next/script";
import { MenuToggle } from '../components/MenuToggle';
import { ThemeToggle } from "../components/ThemeToggle";
import { lightTheme, darkTheme, GlobalStyles } from "../theme";

function SinglePost(){

  const router = useRouter()
  const { 
    query: { post },
  } = router

  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";
  const handleThemeToggle = () => setTheme (isDarkTheme ? "light" : "dark");

  const [photos, setPhotos] = useState([]);

  const [navToggled, setNavToggled] = useState(false);
  const handleNavToggle = () => {
    setNavToggled(!navToggled)
  }

  const [aboutToggled, setAboutToggled] = useState(false);
  const handleAboutToggle = () => {
    console.log('tiggke');
    setAboutToggled(!aboutToggled)
  }

  useEffect(() => {
    
    async function fetchRecent() {
      const response = await fetch('https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=82c49e585f83ca27744741c4f5a2d747&user_id=182095888%40N06&extras=url_c%2C+description%2C+date_taken%2C+tags&per_page=300&format=json&nojsoncallback=1');
      const data = await response.json();
      const photosArray = data.photos
      setPhotos(photosArray)
    }

    fetchRecent();
    
    let newTheme = "dark"
    post ? newTheme = post.substring(post.indexOf("-") + 1) : null;

    setTheme(newTheme);

  }, [post])

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js" />
        { navToggled ? <Menu handleNavToggle={handleNavToggle} handleAboutToggle={handleAboutToggle}/> : null }
          <Header 
            handleAboutToggle={handleAboutToggle}
          />
          { aboutToggled ? 
            <About
              handleAboutToggle={handleAboutToggle}
            /> : null }
          <MenuToggle 
            handleNavToggle={handleNavToggle}
            handleAboutToggle={handleAboutToggle}
          />
          <ThemeToggle 
            handleThemeToggle={handleThemeToggle} 
          />
        {photos != undefined ? 
          <Post 
          key = {post} 
          postId = {post}
          photos = {photos}
          theme = {theme}
          /> : 'Loading...'}
        <Footer nobg/>
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

export default SinglePost;


