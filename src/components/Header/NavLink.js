import Link from "next/link";
import { NavLinkContainer } from "./styles";

export default function NavLink({ title, path, onClick }) {
  return (
    <NavLinkContainer>
      <Link href={path} onClick={onClick}>
        {title}
      </Link>
    </NavLinkContainer>
  );
}
