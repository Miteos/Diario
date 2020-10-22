import Link from "next/link";
import styles from "../../styles/navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        {links.map((l) => (
          <li key={l.title}>
            <Link href={l.to}>
              <a>{l.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.search_hero}>
        <input type={"text"} placeholder={"Search..."} />
      </div>
    </div>
  );
};
const links = [
  { title: "Home", to: "/" },
  { title: "Champions", to: "/champions" },
  { title: "Stats", to: "/stats" },
  { title: "Leaderboards", to: "/leaderboards" },
];
export default Navbar;
