import { useSession } from "next-auth/react";
import Link from "next/link";
const Navbar = () => {
  const { data: session } = useSession();
  return (
    <>
      <ul>
        <li>
          <Link href={"/"}> Home</Link>
        </li>
        {!session && (
          <li>
            <Link href={"/auth"}>Login</Link>
          </li>
        )}
        {session && (
          <li>
            <Link href={"/profile"}>profile</Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default Navbar;
