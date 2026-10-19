function RegistrationList({
  registrations,
  participantsCount,
  events,
  onDelete
}) {
  if (registrations.length === 0) {
    return (
      <>
        <p>
          Anmeldungen: Noch keine Anmeldungen vorhanden.
        </p>

        <p>
          Teilnehmer gesamt: 0
        </p>
      </>
    );
  }

  return (
    <>
      <p>
        Anmeldungen: {registrations.length}
      </p>

      <p>
        Teilnehmer gesamt:{" "}
        {participantsCount}
      </p>

      <div className="registration-list">
        {registrations.map((registration) => {
          const event = events.find(
            (event) =>
              event.id === registration.eventId
          );

          return (
            <article
              key={registration.id}
              className="registration-card"
            >
              <h4>
                {registration.name}
              </h4>

              <p>
                {registration.email}
              </p>

              <p>
                Veranstaltung:{" "}
                {event
                  ? event.title
                  : "Unbekannt"}
              </p>

              <p>
                Teilnehmer:{" "}
                {registration.participants}
              </p>

              <button
                type="button"
                onClick={() =>
                  onDelete(registration.id)
                }
              >
                Löschen
              </button>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default RegistrationList;