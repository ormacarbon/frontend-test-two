import Layout from "../components/layout";
import { AppContext } from "../utils/AppContext";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<AppContext>
				<Component {...pageProps} />
			</AppContext>
		</Layout>
	);
}

export default MyApp;
