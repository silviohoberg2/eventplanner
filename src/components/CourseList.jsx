import CourseCard from "./CourseCard";

export default function CourseList() {
    return (
        <section>
            <h2>Kurse</h2>
                <CourseCard
                    title="React Grundlagen"
                    description="Komponenten und JSX kennenlernen"
                    duration={8}
                    online={true}
                    level="Grundlagen"
                    featured={true}
                />

                <CourseCard 
                    title="State und Events"
                    description="Interaktive Oberflächen entwickeln"
                    duration={4}
                    online={true}
                    level="Grundlagen"
                    featured={false}
                /> 
            
                <CourseCard
                    title="React Projekt"
                    description="Gelernte Inhalte praktisch umsetzen"
                    duration={8}
                    online={false}
                    level="Grundlagen"
                    featured={true}
                />
        </section>
    );
}