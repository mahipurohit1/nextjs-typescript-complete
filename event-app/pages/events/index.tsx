import EventSearch from "@/component/Event-search";
import EventsList from "@/component/events-list";
import { getAllEvents } from "@/component/util/fetch-api";

import { useRouter } from "next/router";
interface propsData {
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
const AllEvents: React.FC<propsData> = (props) => {
  const router = useRouter();
  const filterSearch = (year: number, month: number) => {
    const fullPath = `/events/${year}/${month}`;
    console.log(month, year);
    router.push(fullPath);
  };
  return (
    <>
      <EventSearch onSearch={filterSearch}></EventSearch>
      <EventsList events={props.events} />
    </>
  );
};

export default AllEvents;

export async function getStaticProps() {
  const allEvents = await getAllEvents();
  return {
    props: {
      events: allEvents,
    },
  };
}
