import Link from "next/link";
import Style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <header className={Style.header}>
        <div className={Style.logo}>
          <Link href={"/"}> Next Events </Link>
        </div>

        <nav className={Style.navigation}>
          <ul className={Style.ul}>
            <li>
              <Link href="/events">All Events</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
