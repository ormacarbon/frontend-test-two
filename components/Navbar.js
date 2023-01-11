import styled from "styled-components";

const NavLink = styled.a`
	margin: 10px;
`;

export default function navbar() {
	return (
		<div>
			<nav>
				Search universities by:
				<NavLink href="/country">Country</NavLink>
				<NavLink href="/name">Name</NavLink>
				<NavLink href="/domain">Domain</NavLink>
			</nav>
		</div>
	);
}
