import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import Layout from '../components/Layout';
import ObservatoryContext from '../context/ObservatoryContext';
import { Button } from '../styles';

export default function Home() {
	const { theme } = useContext(ObservatoryContext);

	return (
		<Layout currentPage='home'>
			<Image src='/observatory.png' width={300} height={300} alt='Astronomical Observatory' />
			<h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Are you ready to explore the universe?</h2>
			<Button appTheme={theme}>
				<Link style={{ fontSize: '1.8em', color: theme === 'light' ? 'black' : 'white' }} href='/explore'>Let&#039;s go!</Link>
			</Button>
		</Layout>
	);
}
