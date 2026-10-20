import { useRef } from "react";

function FocusInput() {
    const inputRef = useRef(null);

    function handleFocus() {
        inputRef.current.value = "";
        inputRef.current.focus();
     }

    return (
        <section>
            <h2>useRef Demo</h2>

            <input type="text"
            placeholder="Name"
            ref={inputRef}
            />

            <button
            type="button"
            onClick={handleFocus}
            >
                Eingabefeld fokussieren
            </button>
        </section>
    );
}

export default FocusInput;