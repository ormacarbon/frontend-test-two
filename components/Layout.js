import Head from 'next/head';
import Link from 'next/link';
import { AppContainer } from '../styles';

export default function Layout({ children, currentPage }) {
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
					<nav>
						{currentPage !== 'home' && <Link href='/'>Home</Link>}
						{currentPage !== 'explore' && <Link href='/explore'>Explore</Link>}
						{currentPage !== 'gallery' && <Link href='/gallery'>Gallery</Link>}
					</nav>
				</header>
				<main>
					{children}
				</main>
				<footer><a href='https://talesrodriguesdev.vercel.app/' target='_blank' rel="noreferrer">Tales Rodrigues DEV</a></footer>
			</AppContainer>
		</>
	);
}
