import events from "../data/events";
import EventCard from "./EventCard";

function EventList({
  registrations
}) {
  return (
    <>
      <h2>Veranstaltungen</h2>
      <section className="event-list">

        {events.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            title={event.title}
            date={event.date}
            location={event.location}
            eventType={event.eventType}
            seats={event.seats}
            online={event.online}
            featured={event.featured}
            registrationOpen={event.registrationOpen}
            registrations={registrations}
          />
        ))}
      </section>
    </>
  );
}

export default EventList;