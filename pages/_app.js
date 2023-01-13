import { ThemeProvider } from 'next-themes';
import ObservatoryProvider from '../context/ObservatoryProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<ObservatoryProvider>
				<Component {...pageProps} />
			</ObservatoryProvider>
		</ThemeProvider>
	);
}

export default MyApp;
