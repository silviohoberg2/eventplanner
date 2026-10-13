function EventCard({ title, eventType, date, location, seats, online }) {
  return (
    <article className="event-card">
      <h3>{title}</h3>
      <p>Typ:{eventType}</p>
      <p>Datum: {date}</p>
      <p>Ort: {location}</p>
      <p>Freie Plätze: {seats} </p>
      <p>{online ? 'Online' : 'Vor Ort'}</p>
    </article>
  );
}

export default EventCard;