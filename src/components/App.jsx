import Header from "./Header";
import Footer from "./Footer";
import EventList from "./EventList.jsx";
import Notice from "./Notice.jsx";


export default function App() {
  return (
    <>
      <Header />
      <main>
        <EventList />

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