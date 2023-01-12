import { NavLink, SpaceEvenly } from "../styles/componentStyles";

export default function navbar() {
	return (
		<div>
			<SpaceEvenly>
				Search universities by:
				<NavLink href="/country">Country</NavLink>
				<NavLink href="/name">Name</NavLink>
				<NavLink href="/domain">Domain</NavLink>
			</SpaceEvenly>
		</div>
	);
}
