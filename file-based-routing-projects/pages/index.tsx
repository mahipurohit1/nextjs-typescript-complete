import EventsList from "@/component/events-list";
import { getFeaturedEvents } from "@/dummy-data";
import React from "react";

const HomePage = () => {
  const featuredEvent = getFeaturedEvents();

  return (
    <>
      <EventsList events={featuredEvent} />
    </>
  );
};

export default HomePage;
