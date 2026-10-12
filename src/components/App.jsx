import Header from "./Header";
import Footer from "./Footer";
import CourseList from "./CourseList";
import SpeakerCard from "./SpeakerCard.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <h2>Ihr(e) Trainer/in</h2>
        <SpeakerCard
          name="Max Mustermann"
          specialField="React & JavaScript"
          company="WebDev GmbH"
          online={true}
        />
        <CourseList />
        
      </main>
      <Footer />
    </>
  );
}