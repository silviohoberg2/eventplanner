import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notice from "./Notice";
import EventList from "./EventList";
import RegistrationManager from "./RegistrationManager";

export default function App() {
  const [registrations, setRegistrations] = useState([]);

  
  return (
    <>
      <Header />

      <main>
        <EventList
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