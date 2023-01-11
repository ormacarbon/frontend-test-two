import styled from "styled-components";

const NavLink = styled.a`
	margin-right: 5px;
`;

export default function navbar() {
	return (
		<div>
			<nav>
				<NavLink href="/country">
					Search universities by country
				</NavLink>
				<NavLink href="/name">Search university by name</NavLink>
				<NavLink href="/domain">Search university by domain</NavLink>
			</nav>
		</div>
	);
}
