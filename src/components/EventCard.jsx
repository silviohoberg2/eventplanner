function EventCard({ title, eventType, date, location, seats, online,     featured, registrationOpen }) {
  return (
    <article className="event-card">
      <h3>{title}</h3>
      <p>Typ:{eventType}</p>
      <p>Datum: {date}</p>
      <p>Ort: {online ? "Online" : location}</p>
      <p> {seats > 0 ? `Noch ${seats} Plätze verfügbar` : "Ausgebucht"}</p>
      {!registrationOpen && (
        <p>Anmeldung geschlossen</p>
      )}
      {featured && (<p className="event-card-featured">Empfehlung</p>)}

      <button disabled={!registrationOpen || seats === 0}>
        Anmelden
      </button>
    </article>
  );
}

export default EventCard;