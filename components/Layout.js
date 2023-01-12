import Head from 'next/head';
import Link from 'next/link';
import { AppContainer } from '../styles';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';

const iconStyle = { color: '#0891B2', cursor: 'pointer' };

export default function Layout({ children, currentPage }) {
	const { theme, setTheme } = useTheme();

	return (
		<>
			<Head>
				<title>Tales&#039; Observatory</title>
				<meta name='description' content='Behold amazing NASA pictures' />
				<link rel="icon" href="favicon.ico" />
			</Head>
			<AppContainer appTheme={theme}>
				<header>
					<h1>Welcome to Tales&#039; observatory!</h1>
					<nav>
						{currentPage !== 'home' && <Link href='/'>Home</Link>}
						{currentPage !== 'explore' && <Link href='/explore'>Explore</Link>}
						{currentPage !== 'gallery' && <Link href='/gallery'>Gallery</Link>}
						{theme === 'light' ? <FaMoon style={iconStyle} onClick={() => setTheme('dark')} /> : (
							<FaSun style={iconStyle} onClick={() => setTheme('light')} />
						)}
					</nav>
				</header>
				<main>
					{children}
				</main>
				<footer>
					<a href='https://talesrodriguesdev.vercel.app/' target='_blank' rel="noreferrer">Tales Rodrigues DEV</a>
					{' '}
					- Checkout <a href='https://api.nasa.gov/' target='_blank' rel="noreferrer">NASA</a> Open APIs
				</footer>
			</AppContainer>
		</>
	);
}
