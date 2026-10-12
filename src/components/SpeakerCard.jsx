export default function SpeakerCard({
  name,
  specialField,
  company,
  online
}) {
  return (
    <section>
      <h3>{name}</h3>
      <p>{specialField}</p>
      <p>{company}</p>
      <p>
        {online ? "Online verfügbar" : "Nur vor Ort verfügbar"}
      </p>
    </section>
  );
}