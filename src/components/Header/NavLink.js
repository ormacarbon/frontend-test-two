import Link from "next/link";
import { NavLinkContainer } from "./styles";

export default function NavLink({ title, path }) {
  return (
    <NavLinkContainer>
      <Link href={path}>{title}</Link>
    </NavLinkContainer>
  );
}
