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
        <p className="alert form-error">{error}</p>
      )}
      <div>
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="email">E-Mail*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="eventId">Veranstaltung*</label>
        <select
          id="eventId"
          name="eventId"
          value={formData.eventId}
          onChange={onChange}
        >
          <option value="">Bitte auswählen!</option>

          {events.map((event) => (
            <option
              key={event.id}
              value={event.id}
              disabled={
                event.seats === 0 || !event.registrationOpen
              }
            >
              {event.title}
              {event.seats === 0
                ? " - ausgebucht"
                : !event.registrationOpen
                  ? " - Anmeldung geschlossen"
                  : ""}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="participants">Teilnehmer*</label>
        <input
          type="number"
          id="participants"
          name="participants"
          min="1"
          value={formData.participants}
          onChange={onChange}
        />
      </div>

      <button type="submit">Anmelden</button>

    </form>
  );
}

export default RegistrationForm;