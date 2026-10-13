export default function InfoBox({ title, children }) {
    return(
        <section className="info-box">
            <h2>{title}</h2>
            {children}
        </section>
    );
}