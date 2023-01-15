import { useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Post } from '../components/Post';
import { createGlobalStyle } from 'styled-components';
import { Menu } from '../components/Menu';
import { Toggle } from '../components/Toggle';
import Script from "next/script";


const GlobalStyles = createGlobalStyle`

  :root {
    --white: #ffffff;
    --gray-100: #F2F2F2;
    --gray-200: #C9C9C9;
    --gray-300: #808080;
    --gray-400: #333333;
    --gray-500: #262626;
    --gray-600: #1A1A1A;
    --gray-700: #141414;
    --gray-800: #0D0D0D;
    --alpha-20: rgba(0, 0, 0, 0.2)
    --alpha-30: rgba(0, 0, 0, 0.3)
    --purple: #8284FA;
    --purpledark: #5E60CE;
    --cyanblue: #5CB8E4;
    --cyan: #4ef0f0;
    --blueflickr: #0063DC
    --pinkflickr: #ff0084
    --redlight: #FF847C;
    --red: #E84A5F;
    --reddark: #BD4B4B;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 1px var(--purple);
    border-radius: 4px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  body {
    color: #eee;
    background: #121212;
  }

  h1, h2 {
    font-family: 'BigNoodleTitling', sans-serif;
    font-style: oblique;
    font-weight: 500;
  }

  h2 {
    font-size: 1.5rem;
  }

  a {
    color: var(--gray-100);
    font-family: 'BigNoodleTitling', sans-serif;
    font-size: 1.35rem;
    font-style: oblique;
    margin: 1.5rem;
    text-decoration:none;
  }

  a:hover {
    color: var(--reddark);
    transition: 200ms ease; 
  }

  .wrapper {
    max-width: 70rem;
    margin: auto;
    padding: 0 1rem;
  }

  @media (prefers-color-scheme: light) {
    body {
      color: #121212;
      background: #fff;
    }
    
    a {
      color: #121212;
    }
  }
`

function SinglePost(){

  const router = useRouter()
  const { 
    query: { post },
  } = router

  const [photos, setPhotos] = useState([]);
  const [navToggled, setNavToggled] = useState(false);

  const handleNavToggle = () => {
    setNavToggled(!navToggled)
  }


  useEffect(() => {
    
    async function fetchRecent() {
      const response = await fetch('https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=82c49e585f83ca27744741c4f5a2d747&user_id=182095888%40N06&extras=url_c%2C+description%2C+date_taken%2C+tags&per_page=300&format=json&nojsoncallback=1');
      const data = await response.json();
      const photosArray = data.photos
      setPhotos(photosArray)
    }

    fetchRecent();

  }, [])

  return (
    <>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js" />
      { navToggled ? <Menu handleNavToggle={handleNavToggle}/> : null }
      <Header />
      <Toggle handleNavToggle={handleNavToggle}/>
      {photos != undefined ? 
        <Post 
        key = {post} 
        postId = {post}
        photos = {photos}
        /> : 'Loading...'}
      <Footer nobg/>
      <GlobalStyles />
    </>
  )
}

export default SinglePost;


