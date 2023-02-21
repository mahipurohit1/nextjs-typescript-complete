import EventSummary from "../../component/event-detail/event-summary";
import {
  getEventById,
  getFeaturedEvents,
} from "../../component/util/fetch-api";

import { GetStaticPropsContext } from "next";
import EventsContents from "../../component/event-detail/event-content";
import EventsLogistics from "../../component/event-detail/event-logistics";
import Comments from "../../component/input/comments";
interface event {
  events: {
    date: string;
    description: string;
    id: string;
    image: string;
    isFeatured: boolean;
    location: string;
    title: string;
  };
}
const EventDetail: React.FC<event> = (props) => {
  if (!props.events) {
    return <h1>No Events founds ...</h1>;
  }
  return (
    <>
      <EventSummary title={props.events.title}></EventSummary>
      <EventsLogistics
        date={props.events.date}
        image={props.events.image}
        address={props.events.location}
      ></EventsLogistics>
      <EventsContents>
        <p>{props.events.description}</p>
      </EventsContents>
      <Comments eventId={props.events.id}></Comments>
    </>
  );
};

export default EventDetail;

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const ids = events.map((event) => {
    return event.id;
  });
  const pathsId = ids.map((id) => {
    return {
      params: {
        eventId: `${id}`,
      },
    };
  });

  return {
    paths: pathsId,
    fallback: "blocking",
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const id = params!.eventId;

  const event = await getEventById(id as string);

  return {
    props: {
      events: event,
    },
  };
}
