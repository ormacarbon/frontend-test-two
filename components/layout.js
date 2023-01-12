import Head from "../components/Head";

export default function Layout({ children }) {
	return (
		<>
			<Head />
			<main>{children}</main>
		</>
	);
}
