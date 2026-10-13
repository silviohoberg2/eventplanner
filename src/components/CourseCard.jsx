export default function CourseCard({title, description, duration, online, level, featured}) {
    return (
        <article className="course-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p> Dauer: {duration} UE</p>
            <p>{online ? "Online" : "Präsenz"}</p>
            <p>Niveau: {level}</p>
            <p>{featured ? "Empfohlen" : ""}</p>
        </article>
    );
}