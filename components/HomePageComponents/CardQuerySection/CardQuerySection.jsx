import React from "react";
import {
	HorizontalLine,
	QuerySection,
	QueryText,
	QueryTextContainer,
	QueryTitle,
	CardImage,
	SearchMore,
} from "../CardQuerySection/style";
import Link from "next/link";
const CardQuerySection = ({ image }) => {
	return (
		<React.Fragment>
			<QuerySection>
				<CardImage src={image} alt="" />
				<HorizontalLine />
				<QueryTextContainer>
					<QueryTitle>SEE HOW EZ IT IS?</QueryTitle>
					<QueryText>
						See how easy it is to search for a card here at the
						ORMAPOKEPRICE? Keep using our platform to search for
						your favorite cards!
					</QueryText>
				</QueryTextContainer>
				<Link href='/search'>
					<SearchMore>Search More!</SearchMore>
				</Link>
			</QuerySection>
		</React.Fragment>
	);
};

export default CardQuerySection;
