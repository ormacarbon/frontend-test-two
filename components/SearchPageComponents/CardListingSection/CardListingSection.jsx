import React from "react";
import {
	CardImage,
	Container,
	Row,
	CardImagesContainer,
	CardContainer,
	CardTitle,
	PriceContainer,
	PageButton
} from "./style";

import { useReducer, useState } from "react";

const CardListingSection = ({ cards, handleNext, handlePrevious }) => {
	return (
		<React.Fragment>
			<Container>
				<Row>
					<CardImagesContainer>
						{cards
							? cards.map((element) => (
									<CardContainer>
										<CardImage
											src={element.images.small}
											key={element.id}
										/>
										<CardTitle>{element.name}</CardTitle>
										<PriceContainer>
											${" "}
											{element.cardmarket
												? element.cardmarket.prices
														.averageSellPrice
												: "Not Available"}
										</PriceContainer>
									</CardContainer>
							  ))
							: null}
					</CardImagesContainer>
					<Row>
						<PageButton onClick={handlePrevious}>Previous</PageButton>
						<PageButton onClick={handleNext}>Next</PageButton>
					</Row>
				</Row>
			</Container>
		</React.Fragment>
	);
};

export default CardListingSection;
