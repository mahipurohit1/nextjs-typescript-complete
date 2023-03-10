import Image from "next/image";
import React from "react";
import Styles from "./event-item.module.css";
import Address from "./icons/address-icon";
import DateIcon from "./icons/date-icon";
import Button from "./ui/Button";
interface event {
  date: string;
  description: string;
  id: string;
  image: string;
  isFeatured: boolean;
  location: string;
  title: string;
}

const EventItem: React.FC<event> = (props) => {
  const formattedAdd = props.location.replace(",", "\n");
  const date = new Date(props.date).toLocaleString("en-us", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  const exploreEvent = `events/${props.id}`;
  return (
    <li className={Styles.item}>
      <Image
        src={`/${props.image}`}
        alt={props.title}
        width={200}
        height={200}
      />
      <div className={Styles.content}>
        <div className={Styles.summary}>
          <h2>{props.title}</h2>
        </div>
        <div className={Styles.date}>
          <DateIcon />
          <time>{date}</time>
        </div>
        <div className={Styles.address}>
          <Address />
          <address>{formattedAdd}</address>
        </div>

        <div className={Styles.actions}>
          <Button link={exploreEvent}>
            <span>Explore Event </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
