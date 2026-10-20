
import events from "../data/events";
import EventCard from "./EventCard";

function EventList({
  searchTerm,
  eventType,
  registrations
}) {

  // Veranstaltungen nach Suchtext und Typ filtern
  const filteredEvents = events.filter((event) => {

    // Textsuche
    const matchesSearch = event.title
      .toLocaleLowerCase()
      .includes(searchTerm.trim().toLocaleLowerCase());

    // Eventtyp prüfen
    const matchesType =
      eventType === "all" ||
      (eventType === "online" && event.online) ||
      (eventType === "onsite" && !event.online);

    return matchesSearch && matchesType;
  });

  return (
    <>
      <h2>Veranstaltungen</h2>

      <p>
        Treffer: {filteredEvents.length}
      </p>

      <section className="event-list">

        {events.length === 0 ? (
          <p>Noch keine Events vorhanden.</p>
        ) : filteredEvents.length === 0 ? (
          <p>Keine passenden Events gefunden.</p>
        ) : (
          filteredEvents.map((event) => (
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
          ))
        )}

      </section>
    </>
  );
}

export default EventList;
