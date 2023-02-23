import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import styles from "./MainNavigation.module.css";

export function MainNavigation() {
  const { status } = useSession();

  function handleLogout() {
    signOut();
  }

  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          {status === "unauthenticated" && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
          {status === "authenticated" && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
          {status === "authenticated" && (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
