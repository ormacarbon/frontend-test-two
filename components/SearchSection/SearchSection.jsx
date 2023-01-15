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
const SearchSection = ({children}) => {
	return (
		<React.Fragment>
			<Container>
				<Row>
					<SearchTitleContainer>
						<SearchTitle>Search a card!</SearchTitle>
					</SearchTitleContainer>
				</Row>
				<HorizontalLine />
				{children}
			</Container>
		</React.Fragment>
	);
};

export default SearchSection;
