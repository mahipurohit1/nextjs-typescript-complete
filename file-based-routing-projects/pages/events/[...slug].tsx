import EventsList from "@/component/events-list";
import ResultsTitle from "@/component/results-title/results-title";
import Button from "@/component/ui/Button";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const FilterEvent = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  console.log(filterData);

  if (!filterData) {
    return <p>loading...</p>;
  }

  const filterYear = +filterData[0];
  const filterMonth = +filterData[1];
  const filterObj = {
    year: filterYear,
    month: filterMonth,
  };

  const date = new Date(filterYear, filterMonth);

  const events = getFilteredEvents(filterObj);
  console.log(events);
  if (!events || events.length === 0) {
    return (
      <>
        <h2 style={{ textAlign: "center" }}> no event founds</h2>
        <div style={{ textAlign: "center" }}>
          <Button link={"/events"}> All events</Button>
        </div>
      </>
    );
  }

  return (
    <>
      <ResultsTitle date={date} />
      <EventsList events={events} />;
    </>
  );
};

export default FilterEvent;
