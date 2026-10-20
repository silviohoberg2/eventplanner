import { useRef, useEffect, useState } from "react";

function PreviousValue() {
    const [count, setCount] = useState(0);

    const previousCountRef = useRef(count);

    useEffect(() => {
        previousCountRef.current = count;
    }, [count]);
    return (
        <section>
            <h2>Vorheriger Wert</h2>

            <p>
                Aktuell: {count}
            </p>

            <p>
                Vorher: {previousCountRef.current}
            </p>

            <button
                type="button"
                onClick={() => setCount(count + 1)}
            >
                + 1
            </button>
        </section>
    )
}

export default PreviousValue;