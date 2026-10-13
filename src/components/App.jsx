import Header from "./Header";
import Footer from "./Footer";
import EventList from "./EventList.jsx";


export default function App() {
  return (
    <>
      <Header />
      <main>
        <EventList />   
      </main>
      <Footer />
    </>
  );
}