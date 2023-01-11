import Link from "next/link";
import styles from "../../styles/navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.menu}>
        Pokemons
      </Link>
    </div>
  );
}
