import { NotificationContext } from "@/store/Notification-context";
import { useContext, useRef } from "react";
import classes from "./newsletter-registration.module.css";

function NewsletterRegistration() {
  const emailRef = useRef(null);
  const notificationCtx = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();
    const emailId = emailRef.current.value;
    notificationCtx.showNotification({
      title: "Email-SignUp",
      message: "signing...",
      status: "pending",
    });
    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({
        email: emailId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("connecting database failed");
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Email-SignUp",
          message: "successfully signup",
          status: "success",
        });
      })
      .catch((err) => {
        notificationCtx.showNotification({
          title: "Email-SignUp",
          message: err.message || "signup failed",
          status: "error",
        });
      });
    emailRef.current.value = "";
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
