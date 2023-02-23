import React, { useEffect, useRef, useState } from "react";
import Notification from "../ui/notification";
import Style from "./contact-form.module.css";
const Contact: React.FC = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [activeNotification, setActiveNotification] = useState<{
    title: string;
    message: string;
    status: string;
  } | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (activeNotification) {
      timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [activeNotification]);

  const SubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    setActiveNotification({
      title: "message",
      message: "message sending ...",
      status: "pending",
    });

    const data = {
      name: nameRef.current!.value,
      email: emailRef.current!.value,
      message: messageRef.current!.value,
    };

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("connecting db failed");
      })
      .then((dataValue) => {
        setActiveNotification({
          title: "message",
          message: "message sent successfully",
          status: "success",
        });
        console.log(dataValue);
      })
      .catch((err) => {
        setActiveNotification({
          title: "message",
          message: err.message || " message sent failed",
          status: "error",
        });
      });
    nameRef.current!.value = "";
    emailRef.current!.value = "";
    messageRef.current!.value = "";
  };

  return (
    <>
      <section className={Style.contact}>
        <h1> May I help you ? </h1>
        <form className={Style.form} onSubmit={SubmitHandler}>
          <div className={Style.controls}>
            <div className={Style.control}>
              <label htmlFor="name">Name</label>
              <input type="text" required ref={nameRef} />
            </div>
            <div className={Style.control}>
              <label htmlFor="email">Email</label>
              <input type="email" required ref={emailRef} />
            </div>
          </div>
          <div className={Style.controls}>
            <div className={Style.control}>
              <label htmlFor="message">Message</label>
              <textarea rows={5} cols={5} required ref={messageRef}></textarea>
            </div>
          </div>
          <div className={Style.actions}>
            <button> Send Message</button>
          </div>
        </form>
        {activeNotification && (
          <Notification
            title={activeNotification.title}
            message={activeNotification.message}
            status={activeNotification.status}
          ></Notification>
        )}
      </section>
    </>
  );
};

export default Contact;
