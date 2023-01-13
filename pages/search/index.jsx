import React from "react";
import Footer from "../../components/Footer/Footer";
import {
	Container,
	Row,
	SearchPageTitle,
	SearchPageSub,
	SearchPageTitleContainer,
	SearchTip,
	Column,
} from "./style";
import Input from "../../components/Input/Input";
import { AiOutlineSearch } from "react-icons/ai";
import Navbar from "../../components/Navbar/Navbar";

const index = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Container>
				<Row>
					<SearchPageTitleContainer>
						<SearchPageTitle>ORMAPOKEPRICE</SearchPageTitle>
						<SearchPageSub>
							Enter your card's title and get all the results from
							the Pokemon TCG API!
						</SearchPageSub>
					</SearchPageTitleContainer>
				</Row>
				<Row>
					<Column>
						<Input
							leftIcon={<AiOutlineSearch />}
							placeholder="Enter your card title"
						/>
						<SearchTip>
							Try entering your card's title. The query will
							search for the informed string inside the data
							base's card's titles and try to find the ones that
							match!
						</SearchTip>
					</Column>
				</Row>
			</Container>
			<Row>
				<Footer />
			</Row>
		</React.Fragment>
	);
};

export default index;
