
import { useState } from "react";

function EventCard({
  id,
  title,
  date,
  location,
  eventType,
  seats,
  online,
  featured,
  registrationOpen,
  registrations
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const eventRegistrations =
    registrations.filter(
      (registration) =>
        registration.eventId === id
    );

  // Anzahl der gebuchten Teilnehmer berechnen
  const bookedParticipants = eventRegistrations.reduce(
    (total, registration) =>
      total + Number(registration.participants),
    0
  );

  // Verfügbare Plätze berechnen
  const availableSeats = Math.max(
    0,
    seats - bookedParticipants
  );
  

  return (
    <article className="event-card">
      {featured && (
        <p className="event-card-featured">
          Empfehlung
        </p>
      )}

      {favorite && (
        <p className="event-card-favorite">
          Favorit
        </p>
      )}

      <h3>{title}</h3>

      <p>Ort: {online ? "Online" : location}</p>

      <button
        onClick={() =>
          setFavorite(!favorite)
        }
      >
        {favorite
          ? "Aus Favoriten entfernen"
          : "Zu Favoriten hinzufügen"
        }
      </button>

      <button
        onClick={() =>
          setShowDetails(!showDetails)
        }
      >
        {showDetails
          ? "Details ausblenden"
          : "Details anzeigen"}
      </button>

      {showDetails && (
        <div className="event-card-details">
          <p>Datum: {date}</p>
          <p>Typ: {eventType}</p>

          {eventRegistrations.length === 0
            ? (<p>noch keine Anmeldungen</p>)
            : (<p>Anmeldungen: {eventRegistrations.length}</p>)}

          <p>
            {availableSeats > 0
              ? `Noch ${availableSeats} Plätze verfügbar`
              : "Ausgebucht"}
          </p>
        </div>
      )}

      {!registrationOpen && (
        <p>Anmeldung geschlossen</p>
      )}

      <button
        disabled={
          availableSeats === 0 || !registrationOpen
        }
      >
        zur Anmeldung
      </button>

    </article>
  );
}

export default EventCard;
