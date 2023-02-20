import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import EventSummary from "../../component/event-detail/event-summary";

import EventsContents from "../../component/event-detail/event-content";
import EventsLogistics from "../../component/event-detail/event-logistics";

const EventDetail = () => {
  const router = useRouter();
  const id = router.query.eventId as string;
  const events = getEventById(id);
  if (!events) {
    return <h1>No Events founds ...</h1>;
  }
  return (
    <>
      <EventSummary title={events.title}></EventSummary>
      <EventsLogistics
        date={events.date}
        image={events.image}
        address={events.location}
      ></EventsLogistics>
      <EventsContents>
        <p>{events.description}</p>
      </EventsContents>
    </>
  );
};

export default EventDetail;
