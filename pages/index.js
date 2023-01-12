import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Button } from '../styles';

export default function Home() {
	return (
		<Layout currentPage='home'>
			<Image src='/observatory.png' width={400} height={400} alt='Astronomical Observatory' />
			<h2 style={{textAlign: 'center', marginBottom: 40 + 'px'}}>Are you ready to explore the universe?</h2>
			<Button><Link style={{fontSize: 1.8 + 'em', color: 'black'}} href='/explore'>Let&#039;s go!</Link></Button>
		</Layout>
	);
}
