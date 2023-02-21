import EventsList from "@/component/events-list";
import ResultsTitle from "@/component/results-title/results-title";
import Button from "@/component/ui/Button";
import { getFilteredEvents } from "@/component/util/fetch-api";
import { GetServerSidePropsContext } from "next";

interface propsData {
  filterEvent: {
    date: string;
    description: string;
    id: string;
    image: string;
    isFeatured: boolean;
    location: string;
    title: string;
  }[];
  loading: boolean;
  date: {
    year: number;
    month: number;
  };
}
const FilterEvent: React.FC<propsData> = (props) => {
  if (props.loading) {
    return <p>loading.....</p>;
  }

  if (!props.filterEvent || props.filterEvent.length === 0) {
    return (
      <>
        <h2 style={{ textAlign: "center" }}> no event founds</h2>
        <div style={{ textAlign: "center" }}>
          <Button link={"/events"}> All events</Button>
        </div>
      </>
    );
  }
  const newDate = new Date(props.date.year, props.date.month);

  return (
    <>
      <ResultsTitle date={newDate} />
      <EventsList events={props.filterEvent} />;
    </>
  );
};

export default FilterEvent;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;

  const filterData = params!.slug;
  if (!filterData) {
    return {
      props: {
        loading: true,
      },
    };
  }

  const filterYear = +filterData[0];
  const filterMonth = +filterData[1];
  const filterObj = {
    year: filterYear,
    month: filterMonth,
  };

  const events = await getFilteredEvents(filterObj);

  return {
    props: {
      filterEvent: events,
      date: filterObj,
    },
  };
}
