import { useState } from "react";

function RegistrationManager() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    participants: 1
  });

  const [registrations, setRegistrations] = useState([]);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    const newValue =
      name === "participants"
        ? Number(value)
        : value;

    setFormData({
      ...formData,
      [name]: newValue
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (formData.name.trim() === "") {
      setError("Bitte geben Sie Ihren Namen ein!");
      return;
    }

    if (formData.email.trim() === "") {
      setError("Bitte geben Sie eine E-Mail-Adresse an!");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Bitte geben Sie eine gültige E-Mail-Adresse an!");
      return;
    }

    if (formData.participants < 1) {
      setError("Es muss mindestens eine Person angemeldet werden!");
      return;
    }

    const newRegistration = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      participants: formData.participants
    };

    setRegistrations([
      ...registrations,
      newRegistration
    ]);

    setFormData({
      name: "",
      email: "",
      participants: 1
    });
  }

  let totalParticipants = 0;

  registrations.forEach((registration) => {
    totalParticipants += registration.participants;
  });

  return (
    <section>
      <h2>Anmeldungen</h2>

      {error && (
        <p className="form-error">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name*
          </label>

          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            onChange={handleChange}
          />
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
            onChange={handleChange}
          />
        </div>

        <button type="submit">
          Anmeldung
        </button>
      </form>

      <h3>Aktuelle Anmeldungen</h3>

      <p>
        Registrierungen:{" "}
        {registrations.length === 0
          ? "Noch keine Anmeldungen vorhanden."
          : registrations.length}
      </p>

      <p>
        Angemeldete Personen: {totalParticipants}
      </p>

      {registrations.map((registration) => (
        <article
          key={registration.id}
          className="registration-card"
        >
          <h4>{registration.name}</h4>

          <p>
            {registration.email}
          </p>

          <p>
            Teilnehmer: {registration.participants}
          </p>
        </article>
      ))}
    </section>
  );
}

export default RegistrationManager;