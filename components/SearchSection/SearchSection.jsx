import React from "react";
import {
	Container,
	SearchTitle,
	SearchTitleContainer,
	Row,
	HorizontalLine,
} from "./style";
import Input from "../Input/Input";

import {AiOutlineSearch} from 'react-icons/ai'
const SearchSection = () => {
	return (
		<React.Fragment>
			<Container>
				<Row>
					<SearchTitleContainer>
						<SearchTitle>Search a card!</SearchTitle>
					</SearchTitleContainer>
				</Row>
				<HorizontalLine />
				<Row>
					<Input leftIcon={<AiOutlineSearch/>} placeholder="Enter your card title"/>
				</Row>
			</Container>
		</React.Fragment>
	);
};

export default SearchSection;
