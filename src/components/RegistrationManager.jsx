import { useState, useEffect, useRef } from "react";

import events from "../data/events";
import RegistrationForm from "./RegistrationForm";
import RegistrationList from "./RegistrationList";

function RegistrationManager({
  registrations,
  setRegistrations
}) {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      participants: 1,
      eventId: ""
    });

  const [error, setError] = useState(null);

  const [successBooking, setSuccessBooking] = useState(null);

  const nameInputRef = useRef(null);

  const participantsCount =
    registrations.reduce(
      (sum, registration) => sum + registration.participants, 0
    );

    useEffect(() => {
      if(!successBooking) {
        return;
      }

      const timeoutId = setTimeout(() => {
        setSuccessBooking(null);
      }, 3000);

      return() => {
        clearTimeout(timeoutId);
      }

    }, [successBooking]);

  function handleChange(event) {
    const { name, value } = event.target;

    const eventRegistrations =
      registrations.filter(
        (registration) =>
          registration.eventId === event.id
      );

    let newValue = value;

    if (name === "participants") {
      newValue = Number(value);
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

    setError(null);

    if (formData.name.trim() === "") {
      setError({
        field: "name",
        message: "Bitte geben Sie Ihren Namen ein!"
      });
      return;
    }

    if (formData.email.trim() === "") {
      setError({
        field: "email",
        message: "Bitte geben Sie eine E-Mail-Adresse an!"
      });
      return;
    }

    if (formData.eventId === "") {
      setError({
        field: "eventId",
        message: "Bitte wählen Sie eine Veranstaltung aus!"
      });
      return;
    }

    if (formData.participants < 1) {
      setError({
        field: "participants",
        message: "Bitte wählen Sie mindestens 1 Teilnehmer aus!"
      });
      return;
    }

    const newRegistration = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      participants: formData.participants,
      eventId: formData.eventId
    }

    setSuccessBooking({
      name: formData.name,
      eventId: formData.eventId
    });

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

    nameInputRef.current?.focus();
  }

  function handleDeleteRegistration(id) {
    const confirmed =
      window.confirm("Registrierung wirklich löschen?");

    if (!confirmed) return;

    setRegistrations(
      registrations.filter(
        (registration) => registration.id !== id
      )
    );
  }

  return (
    <section>
      <h2>Anmeldungen</h2>

      {successBooking && (
        <p className="form-success">
          Anmeldung für {successBooking.name}
          {" "}wurde gespeichert.
        </p>
      )}

      <RegistrationForm
        formData={formData}
        error={error}
        events={events}
        onChange={handleChange}
        onSubmit={handleSubmit}
        nameInputRef={nameInputRef}
      />

      <h3>Aktuelle Anmeldungen</h3>

      <RegistrationList
        registrations={registrations}
        participantsCount={participantsCount}
        events={events}
        onDelete={handleDeleteRegistration}
        onDeleteAll={setRegistrations}
      />

    </section>
  );
}

export default RegistrationManager;