import styled from "styled-components";

export const NavLink = styled.a`
	margin: 10px;
	font-weight: bold;
`;

export const SpaceEvenly = styled.nav`
	display: flex;
	justify-content: space-evenly;
`;

export const SpaceBetween = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Inline = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const Header = styled.div`
	background-color: ${(props) => props.theme.primary};
	border: solid;
	border-radius: 3px;
	padding: 10px;
export const Checkbox = styled.input`
	transition: box-shadow 0.3s;
	accent-color: ${(props) => props.theme.body};
	cursor: pointer;
`;
`;

export const Title = styled.h1`
	user-select: none;
`;
