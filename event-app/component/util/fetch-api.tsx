export const AllEvent = async () => {
  const res = await fetch(
    "https://events-63ed4-default-rtdb.firebaseio.com/events.json"
  );
  const data = await res.json();
  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
};
export async function getFeaturedEvents() {
  const events = await AllEvent();
  return events.filter((event) => event.isFeatured);
}

export async function getEventById(id: string) {
  const events = await AllEvent();
  return events.find((event) => event.id === id);
}

export async function getAllEvents() {
  const events = await AllEvent();
  return events;
}

export async function getFilteredEvents(dateFilter: {
  year: number;
  month: number;
}) {
  const { year, month } = dateFilter;
  const events = await AllEvent();
  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month;
  });

  return filteredEvents;
}
