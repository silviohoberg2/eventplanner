import { useState } from "react";

function EventCard({ title, eventType, date, location, seats, online, featured, registrationOpen }) {
  const [showDetails, setShowDetails] = useState(false);
  const [favorite, setFavorite] = useState(false);

  return (
    <article className="event-card">
      {featured && (<p className="event-card-featured">Empfehlung</p>)}

      {favorite && (
        <p className="event-card-featured">
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

      <p>Typ:{eventType}</p>

      <p> {seats > 0 ? `Noch ${seats} Plätze verfügbar` : "Ausgebucht"}</p>
      </div>
      )}

      {!registrationOpen && (
        <p>Anmeldung geschlossen</p>
      )}

      <button disabled={!registrationOpen || seats === 0}>
        Anmelden
      </button>
    </article>
  );
}

export default EventCard;