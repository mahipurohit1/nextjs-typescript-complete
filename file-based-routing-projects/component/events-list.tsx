import React from "react";
import EventItem from "./events-item";
import Styles from "./event-list.module.css";
interface events {
  events: {
    date: string;
    description: string;
    id: string;
    image: string;
    isFeatured: boolean;
    location: string;
    title: string;
  }[];
}

const EventsList: React.FC<events> = (props) => {
  return (
    <ul className={Styles.list}>
      {props.events.map((event) => {
        return (
          <EventItem
            key={event.id}
            id={event.id}
            date={event.date}
            description={event.description}
            image={event.image}
            isFeatured={event.isFeatured}
            location={event.location}
            title={event.title}
          />
        );
      })}
    </ul>
  );
};

export default EventsList;
