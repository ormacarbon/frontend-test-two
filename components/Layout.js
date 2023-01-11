import Head from 'next/head';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Tales&#039; Observatory</title>
        <meta name='description' content='Behold amazing NASA pictures' />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <AppContainer>
        <header>
          <h1>Welcome to Tales&#039; observatory!</h1>
          <nav></nav>
        </header>
        <main>
          {children}
        </main>
        <footer><a href='https://talesrodriguesdev.vercel.app/' target='_blank' rel="noreferrer">Tales Rodrigues DEV</a></footer>
      </AppContainer>
    </>
  );
}
