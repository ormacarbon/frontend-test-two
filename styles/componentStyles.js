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
`;

export const Input = styled.input`
	background-color: ${(props) => props.theme.primary};
	border-radius: 4px;
	border: solid;
	border-color: ${(props) => props.theme.borderColor};
	padding: 7px;
	outline: none;
	margin: 5px;
`;

export const Checkbox = styled.input`
	transition: box-shadow 0.3s;
	accent-color: ${(props) => props.theme.body};
	cursor: pointer;
`;

export const Button = styled.button`
	background-color: ${(props) => props.theme.text};
	color: ${(props) => props.theme.text2};
	padding: 7px;
	border: solid;
	border-color: ${(props) => props.theme.borderColor};
	border-radius: 4px;
	font-weight: bold;
`;

export const Title = styled.h1`
	user-select: none;
`;

export const TableNavigator = styled.div`
	justify-content: space-between;
	width: 70%;
`;

export const Table = styled.table`
	border: solid;
	border-radius: 4px;
	border-width: 1px;
	padding: 4px;
	border-color: ${(props) => props.theme.borderColor};
	margin: 10px;
`;

export const Overflow = styled.div`
	overflow: auto;
`;
export const Tr = styled.tr`
	border: solid;
	border-width: 1px;
	padding: 4px;
	border-color: ${(props) => props.theme.borderColor};
`;

export const Th = styled.th`
	background-color: ${(props) => props.theme.text};
	color: ${(props) => props.theme.text2};
	padding: 5px;
`;

export const Td = styled.td`
	border-style: solid;
	padding: 4px;
	border-width: 1px;
	border-color: ${(props) => props.theme.borderColor};
`;

export const Label = styled.label`
	text-transform: capitalize;
`;
