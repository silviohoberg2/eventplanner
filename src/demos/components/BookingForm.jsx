import { useState } from "react";

function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [participants, setParticipants] = useState(1);
  const [error, setError] = useState("");
  const [successBooking, setSuccessBooking] = useState(null);
  const [phone, setPhone] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setSuccessBooking(null);

    if (name.trim() === "") {
      setError("Bitte geben Sie einen Namen ein!");
      return;
    }

    if (email.trim() === "") {
      setError("Bitte geben Sie eine E-Mail-Adresse ein!");
      return;
    }

    if (!email.includes("@")) {
      setError("Bitte geben Sie eine gültige E-Mail-Adresse ein!");
      return;
    }

    if (phone.trim() !== "" && phone.trim().length < 5) {
      setError(
        "Die Telefonnummer muss mindestens fünf Zeichen besitzen!"
      );
      return;
    }

    if (participants < 1) {
      setError(
        "Es muss mindestens eine Person angemeldet werden!"
      );
      return;
    }

    setSuccessBooking({
      name,
      participants
    });

    console.log({
      name,
      email,
      phone,
      participants
    });

    setName("");
    setEmail("");
    setPhone("");
    setParticipants(1);
  }

  return (
    <section>
      {error && (
        <p className="form-error">
          {error}
        </p>
      )}

      {successBooking && (
        <p className="form-success">
          Vielen Dank{" "}
          <strong>{successBooking.name}</strong>
          ! Die Buchung für{" "}
          {successBooking.participants}{" "}
          Person(en) wurde gespeichert.
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate>

        <div>
          <label htmlFor="name">
            Name*
          </label>{" "}

          <input
            type="text"
            name="name"
            id="name"
            value={name}
            required
            onChange={(event) =>
              setName(event.target.value)
            }
          />
        </div>

        <div>
          <label htmlFor="email">
            Email*
          </label>{" "}

          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={(event) =>
              setEmail(event.target.value)
            }
          />
        </div>

        <div>
          <label htmlFor="phone">
            Telefon
          </label>{" "}

          <input
            type="tel"
            name="phone"
            id="phone"
            value={phone}
            onChange={(event) =>
              setPhone(event.target.value)
            }
          />
        </div>

        <div>
          <label htmlFor="participants">
            Teilnehmer*
          </label>{" "}

          <input
            type="number"
            name="participants"
            id="participants"
            min="1"
            value={participants}
            required
            onChange={(event) =>
              setParticipants(Number(event.target.value))
            }
          />
        </div>

        <button type="submit">
          Buchen
        </button>

      </form>
    </section>
  );
}

export default BookingForm;