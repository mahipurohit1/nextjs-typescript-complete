import EventSearch from "@/component/Event-search";
import EventsList from "@/component/events-list";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const AllEvents = () => {
  const events = getAllEvents();
  const router = useRouter();
  const filterSearch = (year: number, month: number) => {
    const fullPath = `/events/${year}/${month}`;
    console.log(month, year);
    router.push(fullPath);
  };
  return (
    <>
      <EventSearch onSearch={filterSearch}></EventSearch>
      <EventsList events={events} />
    </>
  );
};

export default AllEvents;
