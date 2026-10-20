
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notice from "./Notice";
import EventList from "./EventList";
import RegistrationManager from "./RegistrationManager";
import SearchField from "./SearchField.jsx";

export default function App() {
  const [registrations, setRegistrations] = useState(() => {
    try {
      const savedRegistrations = localStorage.getItem("registrations");
      return savedRegistrations
        ? JSON.parse(savedRegistrations)
        : [];
    } catch {
      return [];
    }
  });

  const [searchTerm, setSearchTerm] = useState("");

  // State für den Eventtyp
  const [eventType, setEventType] = useState("all");

  useEffect(() => {
    localStorage.setItem(
      "registrations",
      JSON.stringify(registrations)
    );
  }, [registrations]);

  // Suchfeld und Eventtyp zurücksetzen
  function handleResetSearch() {
    setSearchTerm("");
    setEventType("all");
  }

  return (
    <>
      <Header />

      <main>
        <SearchField
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          eventType={eventType}
          onEventTypeChange={setEventType}
          onResetSearch={handleResetSearch}
        />

        <EventList
          searchTerm={searchTerm}
          eventType={eventType}
          registrations={registrations}
        />

        <RegistrationManager
          registrations={registrations}
          setRegistrations={setRegistrations}
        />

        <Notice type="warning">
          <p>Für diese Veranstaltung sind nur noch wenige Plätze frei.</p>
        </Notice>

        <Notice type="info">
          <strong>Hinweis:</strong> Die Anmeldung ist ab morgen möglich.
        </Notice>
      </main>

      <Footer />
    </>
  );
}
