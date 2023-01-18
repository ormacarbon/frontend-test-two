import { AppProps } from 'next/app';
import ThemeContextComponent from '../contexts/Theme';
import RadioContextComponent from '../contexts/Radio/Radio.component';
import FavoritesContextComponent from '../contexts/Favorites/Favorites.component';
import PageContainer from '../components/PageContainer';
import Navbar from '../components/Navbar';
import './../global.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import PlayerContextComponent from '../contexts/Player/Player.component';

function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <ThemeContextComponent>
      <RadioContextComponent>
        <FavoritesContextComponent>
          <PlayerContextComponent>
            <PageContainer>
              <Navbar/>
              <Component {...pageProps} />
            </PageContainer>
          </PlayerContextComponent>
        </FavoritesContextComponent>
      </RadioContextComponent>
    </ThemeContextComponent>
  );
}

export default App;