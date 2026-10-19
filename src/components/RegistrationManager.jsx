import { useState } from "react";
import events from "../data/events.js";
import RegistrationForm from "./RegistrationForm.jsx";
import RegistrationList from "./RegistrationList.jsx";

function RegistrationManager() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    participants: 1,
    eventId: ""
  });

  const [registrations, setRegistrations] = useState([]);
  const [error, setError] = useState("");

  const participantsCount = registrations.reduce(
    (total, registration) =>
      total + registration.participants,
    0
  );

  function handleChange(event) {
    const { name, value } = event.target;

    let newValue = value;

    if (name === "participants") {
      newValue =
        value === ""
          ? ""
          : Number(value);
    }

    if (name === "eventId") {
      newValue =
        value === ""
          ? ""
          : Number(value);
    }

    setFormData({
      ...formData,
      [name]: newValue
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (formData.name.trim() === "") {
      setError("Bitte geben Sie einen Namen ein!");
      return;
    }

    if (formData.email.trim() === "") {
      setError("Bitte geben Sie eine E-Mail-Adresse ein!");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Bitte geben Sie eine gültige E-Mail-Adresse ein!");
      return;
    }

    if (formData.eventId === "") {
      setError("Bitte wählen Sie eine Veranstaltung aus!");
      return;
    }

    if (
      formData.participants === "" ||
      formData.participants < 1
    ) {
      setError(
        "Es muss mindestens eine Person angemeldet werden!"
      );
      return;
    }

    const newRegistration = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      participants: formData.participants,
      eventId: formData.eventId
    };

    setRegistrations([
      ...registrations,
      newRegistration
    ]);

    setFormData({
      name: "",
      email: "",
      participants: 1,
      eventId: ""
    });
  }

  function handleDeleteRegistration(id) {
    setRegistrations(
      registrations.filter(
        (registration) =>
          registration.id !== id
      )
    );
  }

  return (
    <section>
      <h2>Anmeldungen</h2>

      <RegistrationForm
        formData={formData}
        error={error}
        events={events}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <h3>Aktuelle Anmeldungen</h3>

      <RegistrationList
        registrations={registrations}
        participantsCount={participantsCount}
        events={events}
        onDelete={handleDeleteRegistration}
      />
    </section>
  );
}

export default RegistrationManager;