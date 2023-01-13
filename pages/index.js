import { SpaceEvenly, Container } from "../styles/componentStyles";

export default function Home() {
	return (
		<div>
			<h1>Home</h1>
			<p>Seach for universities by different criteria!</p>
			<br />
			<SpaceEvenly>
				<Container>
					<h3>Country</h3>
					<p>Type the name of a country and filter the results.</p>
				</Container>
				<Container>
					<h3>Name</h3>
					<p>
						Type the name of an university or a word and get the
						results of universities' names that contain the word.
					</p>
				</Container>
				<Container>
					<h3>Domain</h3>
					<p>
						Search by the full domain of the university! (If you
						happen to know it).
					</p>
				</Container>
			</SpaceEvenly>
		</div>
	);
}
