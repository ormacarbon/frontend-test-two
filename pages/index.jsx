import Navbar from "../components/Navbar/Navbar";
import { Fragment } from "react";
import {
	Column,
	Container,
	Row,
	Header,
	HeaderTitleContainer,
	HeaderText,
	HeaderTitleOrma,
	CheckOut,
	OrmaText
} from "./style";
import Footer from "../components/Footer/Footer";
import SearchSection from "../components/SearchSection/SearchSection";
export default function Home() {
	return (
		<Fragment>
			<Navbar />
			<Container>
				<Row>
					<Header>
						<HeaderTitleContainer>
							<HeaderTitleOrma>OrmaPokePrice</HeaderTitleOrma>
						</HeaderTitleContainer>
						<OrmaText>
							The Orma group brings to you the ultimate way to search for your favorite cards prices!
						</OrmaText>
						<CheckOut>CheckOut!</CheckOut>
					</Header>
				</Row>
				<Row>
					<SearchSection/>
				</Row>
				<Row>
					<Footer />
				</Row>
			</Container>
		</Fragment>
	);
}
