import events from "../data/events";
import EventCard from "./EventCard";

function EventList() {
    return (
        <section className="event-list">
            <h2>Veranstaltungen</h2>
            { events.map((event) => 
                 (<EventCard key={event.id} title={event.title} eventType={event.eventType} date={event.date} location={event.location} seats={event.seats} online={event.online} featured={event.featured} />
            )) }
        </section>
    );
}

export default EventList;