import React from "react";
import Footer from "../components/Footer/Footer";
import {
	Container,
	Row,
	SearchPageTitle,
	SearchPageSub,
	SearchPageTitleContainer,
	SearchTip,
	Column,
	ErrorMessage,
} from "../components/SearchPageComponents/style";
import Input from "../components/Input/Input";
import { AiOutlineSearch } from "react-icons/ai";
import Navbar from "../components/Navbar/Navbar";
import WarningSection from "../components/WarningSection/WarningSection";
import { useState, useReducer } from "react";
import axios from "axios";
import CardListingSection from "../components/SearchPageComponents/CardListingSection/CardListingSection";
const Search = () => {
	//implementing search

	const [search, setSearch] = useState("");

	const handleChange = (e) => {
		setSearch(e.target.value);
		console.log(search);
	};

	//implementing request and validation

	const [cards, setCards] = useState();
	const [isValid, setValid] = useState(true);

	const handleRequest = async () => {
		if (search) {
			const res = await axios.get(`/api/get/${search}`);
			console.log(res);
			setCards(res.data.data);
			setValid(true);
			setCurrentPage(1)
		} else {
			setValid(false);
		}
	};

	const [page, setPage] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(6);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = cards
		? cards.slice(indexOfFirstPost, indexOfLastPost)
		: null;

	const handleNext = () => {
		if (indexOfLastPost + 1 <= cards.length) {
			setCurrentPage((prev) => (prev += 1));
		}
	};

	const handlePrevious = () => {
		if (currentPage - 1 > 0) {
			setCurrentPage((prev) => (prev -= 1));
		}
	};

	return (
		<React.Fragment>
			<Navbar />
			<Container>
				<Row header={true}>
					<SearchPageTitleContainer>
						<SearchPageTitle>ORMAPOKEPRICE</SearchPageTitle>
						<SearchPageSub>
							Enter your card&aposs title and get all the results from
							the Pokemon TCG API!
						</SearchPageSub>
					</SearchPageTitleContainer>
				</Row>
				<Row>
					<Column>
						<Input
							leftIcon={<AiOutlineSearch />}
							placeholder="Enter your card title"
							value={search}
							onChange={handleChange}
							onClick={handleRequest}
						/>
						<ErrorMessage isValid={isValid}>
							You must inform a string to be able to search a
							card!
						</ErrorMessage>
						<SearchTip>
							Try entering your card&aposs title. The query will
							search for the informed string inside the data
							base&aposs card&aposs titles and try to find the ones that
							match! Ex: Venusaur
						</SearchTip>
					</Column>
				</Row>
				<Row>
					{cards ? (
						<CardListingSection
							cards={currentPosts}
							handleNext={handleNext}
							handlePrevious={handlePrevious}
						/>
					) : null}
				</Row>
			</Container>
			<Row>
				<Footer />
			</Row>
			<Row>
				<WarningSection />
			</Row>
		</React.Fragment>
	);
};

export default Search;
