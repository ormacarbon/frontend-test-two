import ObservatoryProvider from '../context/ObservatoryProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<ObservatoryProvider>
			<Component {...pageProps} />
		</ObservatoryProvider>
	);
}

export default MyApp;
