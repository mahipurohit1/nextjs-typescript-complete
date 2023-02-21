import EventsList from "@/component/events-list";
import { getFeaturedEvents } from "../component/util/fetch-api";

interface propsData {
  featuredEvent: {
    date: string;
    description: string;
    id: string;
    image: string;
    isFeatured: boolean;
    location: string;
    title: string;
  }[];
}

const HomePage: React.FC<propsData> = (props) => {
  return (
    <>
      <EventsList events={props.featuredEvent} />
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const events = await getFeaturedEvents();
  return {
    props: {
      featuredEvent: events,
    },
  };
}
