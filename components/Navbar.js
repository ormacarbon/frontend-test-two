import styled from "styled-components";

const NavLink = styled.a`
	margin-right: 15px;
`;

export default function navbar() {
	return (
		<div>
			<nav>
				<NavLink href="/link1">Link1</NavLink>
				<NavLink href="/link2">Link2</NavLink>
				<NavLink href="/link3">Link3</NavLink>
			</nav>
		</div>
	);
}
