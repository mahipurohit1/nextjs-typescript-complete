import { NotificationContext } from "@/store/Notification-context";
import Link from "next/link";
import { useContext } from "react";
import Notification from "../ui/notification";
import Style from "./Navbar.module.css";
const Navbar = () => {
  const notificationCtx = useContext(NotificationContext);
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
      {notificationCtx.notification && (
        <Notification
          title={notificationCtx.notification!.title}
          message={notificationCtx.notification!.message}
          status={notificationCtx.notification!.status}
        />
      )}
    </>
  );
};

export default Navbar;
