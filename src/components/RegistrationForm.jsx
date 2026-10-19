function RegistrationForm({
  formData,
  error,
  events,
  onChange,
  onSubmit
}) {
  return (
    <form onSubmit={onSubmit} noValidate>
      {error && (
        <p className="form-error">
          {error}
        </p>
      )}

      <div>
        <label htmlFor="name">
          Name*
        </label>

        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="email">
          E-Mail*
        </label>

        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="eventId">
          Veranstaltung*
        </label>

        <select
          id="eventId"
          name="eventId"
          value={formData.eventId}
          onChange={onChange}
        >
          <option value="">
            Bitte auswählen!
          </option>

          {events.map((event) => {
            const soldOut = event.seats === 0;

            const registrationClosed =
              event.registrationOpen === false;

            const unavailable =
              soldOut || registrationClosed;

            let status = "";

            if (soldOut) {
              status = " - Ausgebucht";
            } else if (registrationClosed) {
              status = " - Anmeldung geschlossen";
            }

            return (
              <option
                key={event.id}
                value={event.id}
                disabled={unavailable}
              >
                {event.title}
                {status}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <label htmlFor="participants">
          Teilnehmer*
        </label>

        <input
          type="number"
          id="participants"
          name="participants"
          min="1"
          value={formData.participants}
          onChange={onChange}
        />
      </div>

      <button type="submit">
        Anmelden
      </button>
    </form>
  );
}

export default RegistrationForm;