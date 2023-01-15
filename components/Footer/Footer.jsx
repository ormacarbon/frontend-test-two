import React from "react";
import {
	Brand,
	Container,
	Line,
	SocialsContainer,
	SocialSingleContainer,
} from "./style";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
	return (
		<React.Fragment>
			<Container>
				<Brand>ORMAPOKEPRICE</Brand>
				<SocialsContainer>
					<SocialSingleContainer>
						<Link href="https://www.instagram.com/lucas_apenas_/">
							<AiOutlineInstagram />
						</Link>
					</SocialSingleContainer>
					<SocialSingleContainer>
						<Link href="https://www.linkedin.com/in/lucas-e-2aaa09b5/">
							<AiFillLinkedin />
						</Link>
					</SocialSingleContainer>
					<SocialSingleContainer>
						<Link href="https://github.com/Lucas-E">
							<AiOutlineGithub />
						</Link>
					</SocialSingleContainer>
				</SocialsContainer>
			</Container>
		</React.Fragment>
	);
};

export default Footer;
