import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import { Fragment } from "react";
import {
	Container,
	Row,
	Header,
	HeaderTitleContainer,
	HeaderTitleOrma,
	CheckOut,
	OrmaText,
	SearchTip,
	ErrorMessage,
	Column,
	PhoneImageContainer,
} from "../components/HomePageComponents/style";
import Footer from "../components/Footer/Footer";
import SearchSection from "../components/SearchSection/SearchSection";
import WarningSection from "../components/WarningSection/WarningSection";
import Input from "../components/Input/Input";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import CardQuerySection from "../components/HomePageComponents/CardQuerySection/CardQuerySection";
import { useRef } from "react";
import phoneImage from "../public/images/phone.png";
import { useContext } from "react";

export default function Home() {
	const searchRef = useRef();
	const cardRef = useRef();

	const [search, setSearch] = useState("");
	const [card, setCard] = useState();
	const [isValid, setValid] = useState(true);

	const handleRequest = async () => {
		if (search) {
			const res = await axios.get(`/api/get/${search}`);
			console.log(res);
			setCard(res);
			setValid(true);
		} else {
			setValid(false);
		}
	};

	const handleChange = (e) => {
		setSearch(e.target.value);
		console.log(search);
	};

	const handleScrollInput = () => {
		searchRef.current.scrollIntoView();
	};
	const handleScrollCard = () => {
		cardRef.current.scrollIntoView();
	};

	return (
		<Fragment>
			<Navbar />
			<Container>
				<Row>
					<Header>
						<Column>
							<HeaderTitleContainer>
								<HeaderTitleOrma>ORMAPOKEPRICE</HeaderTitleOrma>
							</HeaderTitleContainer>
							<OrmaText>
								The Orma group brings to you the ultimate way to
								search for your favorite cards prices!
							</OrmaText>
							<CheckOut onClick={handleScrollInput}>
								CheckOut!
							</CheckOut>
						</Column>
						<Column>
							<Image src={phoneImage} width={300} height={500} />
						</Column>
					</Header>
				</Row>
				<Row ref={searchRef} variant="search">
					<Column>
						<SearchSection>
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
						</SearchSection>

						<SearchTip>
							Try entering your card&aposs title. The query will
							search for the informed string inside the data
							base&aposs card&aposs titles and try to find the ones that
							match! Ex: Venusaur
						</SearchTip>
					</Column>
				</Row>
				{card && (
					<Row ref={cardRef}>
						{card.data.data.length > 0 && (
							<CardQuerySection
								image={card.data.data[0].images.small}
							/>
						)}
					</Row>
				)}

				<Row></Row>
				<Row>
					<Footer />
				</Row>
				<Row>
					<WarningSection />
				</Row>
			</Container>
		</Fragment>
	);
}
