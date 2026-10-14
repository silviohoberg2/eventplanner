import { useState } from "react";

function NameInput() {
    const [name, setName] = useState("");

    return(
        <>
        <label htmlFor="name">
            Name
            </label>

            <input
            type="text"
            id="name"
            value={name}
            onChange={handleChange}
            />

            <p>Hallo {name}!</p>
            </>
    );
}