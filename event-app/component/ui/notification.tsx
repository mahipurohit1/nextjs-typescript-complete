import { NotificationContext } from "@/store/Notification-context";
import { useContext } from "react";
import classes from "./notification.module.css";

interface propsData {
  title: string;
  message: string;
  status: string;
}

const Notification: React.FC<propsData> = (props) => {
  const notificationCtx = useContext(NotificationContext);
  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  if (status === "pending") {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
